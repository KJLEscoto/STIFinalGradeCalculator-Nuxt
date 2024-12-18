<template>
  <div v-if="subject">
    <h1>{{ subject.subject }}</h1>
    <p>Final Grade: <span class="font-bold">{{ subject.finalGrade }}</span></p>
    <ul>
      <li>Prelim: {{ subject.grades.prelim }}</li>
      <li>Midterm: {{ subject.grades.midterm }}</li>
      <li>Prefinal: {{ subject.grades.prefinal }}</li>
      <li>Finals: {{ subject.grades.finals }}</li>
    </ul>
  </div>
  <div v-else>
    <p class="font-semibold text-gray-500">Subject not found.</p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'input-output'
})

import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()  // Access the route to get route parameters
const subject = ref(null)

onMounted(() => {
  // Retrieve the subject ID from the route params
  const subjectId = route.params.id

  // Retrieve Subjects from Local Storage
  const savedSubjects = JSON.parse(localStorage.getItem('Subjects')) || []

  // Find the subject by ID
  subject.value = savedSubjects.find(s => s.id === parseInt(subjectId))
})
</script>
