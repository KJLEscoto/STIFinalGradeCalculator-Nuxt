<template>
  <div v-if="subjects.length > 0" class="grid md:grid-cols-3 grid-cols-1 gap-5 transition-all duration-500 ease-in">
    <div v-for="(subject, index) in subjects" :key="index"
      class="p-5 bg-slate-100 rounded shadow vertical justify-between gap-4">
      <section class="vertical gap-3">
        <h2 class="md:text-xl text-base font-semibold capitalize truncate text-primary-text">
          {{ subject.subject }}
        </h2>
        <section class="horizontal flex-wrap gap-2">
          <div
            class="md:text-[10px] text-[7px] bg-slate-200 tracking-wider px-2 py-1 rounded font-medium text-slate-400 cursor-default w-fit">
            {{ subject.id }}
          </div>
          <div
            class="md:text-[10px] text-[7px] bg-slate-200  tracking-wider px-2 py-1 rounded font-medium text-slate-400 cursor-default w-fit">
            {{ getFinalGrade(subject.finalGrade).description }}
          </div>
        </section>
        <Divider />
        <p class="text-slate-500 md:text-base text-sm">
          Final Grade:
          <span class="font-bold">
            {{ getFinalGrade(subject.finalGrade).grade }}
          </span>
        </p>
      </section>
      <section class="flex gap-4 items-center w-full">
        <span class="w-[70%]">
          <FormButton label="view grade" className="w-full" @click="viewDetails(subject.id)"
            :icon="{ leftIcon: true, name: 'view', iconClass: 'w-auto md:h-5 h-4' }" />
        </span>
        <span class="w-[30%]">
          <FormButton @click="deleteGrade(subject)" label="delete" buttonType="secondary"
            className="text-red-500 hover:bg-red-100 border-red-500 active:bg-red-200 w-full"
            :icon="{ leftIcon: true, name: 'delete', iconClass: 'w-auto md:h-5 h-4' }" />
        </span>
      </section>
    </div>
  </div>
  <div v-else class="center h-full w-full">
    <p class="font-semibold text-gray-500">No Subjects Yet.</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getFinalGrade } from '~/assets/js/gradingsystem'
import { sampleSubjects } from '~/assets/js/sample';

const subjects = ref([])

function viewDetails(subjectId) {
  // Navigate to the details page for the subject
  navigateTo(`/${subjectId}`)
}

function capitalizeEachWord(string) {
  return string
    .split(' ') // Split the string into an array of words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
    .join(' '); // Join the words back into a single string
}

function deleteGrade(subject) {
  const capitalizedSubject = capitalizeEachWord(subject.subject);

  if (confirm(`Delete ${capitalizedSubject}?`)) {
    // Remove the subject from the array
    subjects.value = subjects.value.filter(s => s.id !== subject.id);

    // Update the local storage
    localStorage.setItem('Subjects', JSON.stringify(subjects.value));

    // Optionally, show a confirmation or feedback message\

    setTimeout(() => {
      alert(`${capitalizedSubject} deleted successfully!`);
    }, 300);
  }
}



onMounted(() => {
  // Retrieve Subjects from Local Storage or use sample data if no subjects are found
  let savedSubjects = JSON.parse(localStorage.getItem('Subjects')) || [];

  // If no subjects are found, save sampleSubjects to localStorage
  if (savedSubjects.length === 0) {
    savedSubjects = sampleSubjects;
    localStorage.setItem('Subjects', JSON.stringify(savedSubjects));
  }

  subjects.value = savedSubjects.sort((a, b) => b.id - a.id);
})
</script>
