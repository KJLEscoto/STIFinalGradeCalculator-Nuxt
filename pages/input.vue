<script setup>
definePageMeta({
  layout: 'input'
})

// Reactive State for Inputs
const state = reactive({
  subject: '',
  prelim: '',
  midterm: '',
  prefinal: '',
  finals: '',
})

// Loader and Button State
const load = reactive({
  bool: true,
  label: 'calculate',
  icon: 'calculate',
  isDisable: false
})

// Final Grade Ref
const finalGrade = ref(null)
const subjectName = ref('')

// Computed property for untitled count
const untitledCount = computed(() => {
  const subjects = JSON.parse(localStorage.getItem('Subjects')) || []
  let count = 1
  subjects.forEach((item) => {
    if (item.subject.startsWith('Untitled')) {
      const num = parseInt(item.subject.split(' ')[ 1 ]) || 0
      if (num >= count) count = num + 1
    }
  })
  return count
})

function calculate() {
  load.icon = 'loader'
  load.label = ''
  load.isDisable = true

  const areAllGradesFilled =
    state.prelim && state.midterm && state.prefinal && state.finals

  // Validate decimal inputs before proceeding
  const regex = /^(\d+(\.\d*)?|\.\d+)$/; // Regex for valid float or decimal input

  const isInvalid = [
    { field: 'prelim', value: state.prelim },
    { field: 'midterm', value: state.midterm },
    { field: 'prefinal', value: state.prefinal },
    { field: 'finals', value: state.finals }
  ].some(item => !regex.test(item.value));

  if (!areAllGradesFilled) {
    alert('All grades must be filled with valid values.')
    load.icon = 'calculate'
    load.label = 'calculate'
    load.isDisable = false
    return
  }

  if (isInvalid) {
    alert('Please enter a valid number.');
    load.icon = 'calculate'
    load.label = 'calculate'
    load.isDisable = false
    return;
  }

  setTimeout(() => {

    // Calculate Grades
    const grades = {
      prelim: parseFloat(state.prelim) * 0.2,
      midterm: parseFloat(state.midterm) * 0.2,
      prefinal: parseFloat(state.prefinal) * 0.2,
      finals: parseFloat(state.finals) * 0.4,
    }

    finalGrade.value = Object.values(grades).reduce((a, b) => a + b, 0)

    // Retrieve Existing Subjects Array or Initialize It
    const subjects = JSON.parse(localStorage.getItem('Subjects')) || []

    // Set Subject Name
    subjectName.value = state.subject.trim() ? state.subject : `Untitled ${untitledCount.value}`

    // Generate Unique ID
    const subjectId = Date.now()

    // Create Subject Object
    const newSubject = {
      id: subjectId,
      subject: subjectName.value,
      finalGrade: finalGrade.value.toFixed(2),
      grades: {
        prelim: state.prelim,
        midterm: state.midterm,
        prefinal: state.prefinal,
        finals: state.finals,
      },
    }

    // Save Subject
    subjects.push(newSubject)
    localStorage.setItem('Subjects', JSON.stringify(subjects))

    load.icon = 'calculate'
    load.label = 'calculate'
    load.isDisable = true


    // Reset Inputs
    state.subject = ''
    state.prelim = ''
    state.midterm = ''
    state.prefinal = ''
    state.finals = ''

    navigateTo(`/${subjectId}`,
      setTimeout(() => {
        alert('Grade Calculated Successfully!')
      }, 300)
    ) // Navigate to Details Page
  }, 1500)
}

// Computed property for subject placeholder
const subjectPlaceholder = computed(() => {
  return state.subject.trim() ? state.subject : `Untitled ${untitledCount.value}`
})
</script>

<template>
  <div class="flex flex-col gap-3 h-full *:md:text-base *:text-sm">
    <FormLabel for="subject" label="Subject Name" />
    <FormField v-model="state.subject" id="subject" name="subject" :placeholder="subjectPlaceholder" />

    <Divider />

    <FormLabel for="prelim" label="Prelim" />
    <FormField v-model="state.prelim" id="prelim" name="prelim" placeholder="-" />

    <FormLabel for="midterm" label="Midterm" />
    <FormField v-model="state.midterm" id="midterm" name="midterm" placeholder="-" />

    <FormLabel for="prefinal" label="Prefinal" />
    <FormField v-model="state.prefinal" id="prefinal" name="prefinal" placeholder="-" />

    <FormLabel  for="finals" label="Finals" />
    <FormField v-model="state.finals" id="finals" name="finals" placeholder="-" />

    <Divider />

    <FormButton className="py-2" @click="calculate" :label="load.label" :isDisable="load.isDisable"
      :icon="{ leftIcon: load.bool, name: load.icon, iconClass: 'w-auto md:h-5 h-4' }" />
  </div>
</template>
