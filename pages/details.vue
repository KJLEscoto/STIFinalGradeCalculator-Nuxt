<template>
  <div>
    <h1>Newly Added Subject</h1>
    <div v-if="latestSubject">
      <h2>Subject: {{ latestSubject.subject }}</h2>
      <h3>Final Grade: {{ latestSubject.finalGrade }}</h3>
      <div>
        <p>Prelim: {{ latestSubject.grades.prelim }}</p>
        <p>Midterm: {{ latestSubject.grades.midterm }}</p>
        <p>Prefinal: {{ latestSubject.grades.prefinal }}</p>
        <p>Finals: {{ latestSubject.grades.finals }}</p>
      </div>
    </div>
    <div v-else>
      <p>No subjects saved yet.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

definePageMeta({
  layout: 'input-output'
})

// Reactive state for the latest subject
const latestSubject = ref(null)

onMounted(() => {
  const savedData = localStorage.getItem('Subjects') // Retrieve local storage
  if (savedData) {
    const subjects = JSON.parse(savedData) // Parse data into an array
    if (subjects.length > 0) {
      latestSubject.value = subjects[ subjects.length - 1 ] // Get the last added subject
      console.log('Latest Subject:', latestSubject.value)
    }
  }
})
</script>

<style scoped>
h1,
h2,
h3,
p {
  margin: 4px 0;
}
</style>
