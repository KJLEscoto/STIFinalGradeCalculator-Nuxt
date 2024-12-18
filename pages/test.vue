<script setup>
import { reactive, ref, computed } from 'vue'

definePageMeta({
  layout: 'input-output'
})

// Reactive State for Inputs
const state = reactive({
  subject: '',
  prelim: '',
  midterm: '',
  prefinal: '',
  finals: '',
})

// Reactive State for Loader and Button
const load = reactive({
  bool: true,
  label: 'calculate',
  icon: 'calculate',
})

// Final Grade Ref
const finalGrade = ref(null)
const subjectName = ref('')

// Computed property for untitled count (dynamically checks localStorage)
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

  // Check if all grades are filled and not empty or zero
  const areAllGradesFilled =
    state.prelim &&
    parseFloat(state.prelim) > 0 &&
    state.midterm &&
    parseFloat(state.midterm) > 0 &&
    state.prefinal &&
    parseFloat(state.prefinal) > 0 &&
    state.finals &&
    parseFloat(state.finals) > 0

  setTimeout(() => {
    if (!areAllGradesFilled) {
      // Prevent saving if any grade is missing or zero
      alert('All grades must be filled with valid values.')
      load.icon = 'calculate'
      load.label = 'calculate'
      return
    }

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

    // Set Subject Name (Increment Untitled if Empty)
    subjectName.value = state.subject.trim() ? state.subject : `Untitled ${untitledCount.value}`

    // Generate Unique ID using Timestamp
    const subjectId = Date.now()

    // Create Subject Object
    const newSubject = {
      id: subjectId, // Add unique ID to the subject
      subject: subjectName.value,
      finalGrade: finalGrade.value.toFixed(2),
      grades: {
        prelim: state.prelim,
        midterm: state.midterm,
        prefinal: state.prefinal,
        finals: state.finals,
      },
    }

    // Add New Subject to the Array
    subjects.push(newSubject)

    // Save Back to Local Storage
    localStorage.setItem('Subjects', JSON.stringify(subjects))

    // Reset Loader State
    load.icon = ''
    load.label = 'calculate'

    // Clear Form Inputs
    state.subject = ''
    state.prelim = ''
    state.midterm = ''
    state.prefinal = ''
    state.finals = ''

    navigateTo(`/${subjectId}`) // Navigate to Details Page
  }, 1500)
}

// Computed property for subject name placeholder
const subjectPlaceholder = computed(() => {
  return state.subject.trim() ? state.subject : `Untitled ${untitledCount.value}`
})
</script>

<template>
  <div class="vertical h-auto my-auto">
    <FormLabel class="-mb-3" for="subject" label="Subject Name" />
    <FormField v-model="state.subject" id="subject" name="subject" :placeholder="subjectPlaceholder" />

    <Divider />

    <FormLabel class="-mb-3" for="prelim" label="Prelim" />
    <FormField v-model="state.prelim" id="prelim" name="prelim" placeholder="-" />

    <FormLabel class="-mb-3" for="midterm" label="Midterm" />
    <FormField v-model="state.midterm" id="midterm" name="midterm" placeholder="-" />

    <FormLabel class="-mb-3" for="prefinal" label="Prefinal" />
    <FormField v-model="state.prefinal" id="prefinal" name="prefinal" placeholder="-" />

    <FormLabel class="-mb-3" for="finals" label="Finals" />
    <FormField v-model="state.finals" id="finals" name="finals" placeholder="-" />

    <Divider />

    <FormButton @click="calculate" :label="load.label"
      :icon="{ leftIcon: load.bool, name: load.icon, iconClass: 'w-auto h-5' }" />
  </div>
</template>
