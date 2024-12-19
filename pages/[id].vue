<template>
  <div v-if="subject" class="vertical gap-5">

    <div class="bg-primary p-3 rounded-sm text-white text-sm tracking-wider font-medium">

      <div class="horizontal justify-between">
        <h1 class="capitalize md:text-lg text-base font-medium">{{ subject.subject }}</h1>
        <FormButton @click="download"
          className="flex w-auto justify-center items-center gap-2 cursor-not-allowed border shadow-sm px-2 py-1 rounded bg-primary-text opacity-40 text-xs"
          label="download grade" :hide-label="true"
          :icon="{ rightIcon: true, name: 'download', iconClass: 'w-auto h-4' }" />
      </div>

      <p class="text-xs opacity-90"><span>Subject ID: </span>{{ subject.id }}</p>
    </div>

    <Divider />

    <!-- Grades Table -->
    <div class="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
      <table class="table-auto w-full border-collapse border border-slate-600">
        <thead>
          <tr class="bg-slate-300 *:border *:border-slate-400 *:px-4 *:py-2 *:text-start  *:text-primary">
            <th>Period</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody class="text-slate-500">
          <tr class="*:border *:border-slate-400 *:px-4 *:py-2 *:text-sm">
            <td>Prelim</td>
            <td>{{ subject.grades.prelim }}</td>
          </tr>
          <tr class="*:border *:border-slate-400 *:px-4 *:py-2 *:text-sm">
            <td>Midterm</td>
            <td>{{ subject.grades.midterm }}</td>
          </tr>
          <tr class="*:border *:border-slate-400 *:px-4 *:py-2 *:text-sm">
            <td>Prefinal</td>
            <td>{{ subject.grades.prefinal }}</td>
          </tr>
          <tr class="*:border *:border-slate-400 *:px-4 *:py-2 *:text-sm">
            <td>Finals</td>
            <td>{{ subject.grades.finals }}</td>
          </tr>
          <tr class="*:border *:border-slate-400 *:px-4 *:py-2 *:font-bold *:bg-slate-200 *:text-slate-700 *:text-sm">
            <td>Average</td>
            <td>{{ subject.finalGrade }}</td>
          </tr>
        </tbody>
      </table>

      <div class="vertical gap-5">
        <h1 class="capitalize text-primary text-base font-medium md:text-start text-center -mb-3">grading system</h1>

        <Divider />

        <p class="text-slate-600 md:text-base text-xs text-center font-medium italic">Average = (Prelim 20%) + (Midterm
          20%) + (Prefinal 20%) + (Finals 40%)</p>

        <div class="md:flex md:flex-wrap gap-5 items-center px-5">
          <div class="text-slate-600 vertical gap-1 items-center md:m-auto m-5">
            <div class="flex flex-col items-center justify-center w-40 h-40 relative">
              <svg class="w-full h-full rotate-[-90deg] bg-slate-600 rounded-full" viewBox="0 0 120 120">
                <!-- Background Circle -->
                <circle class="text-gray-300" cx="60" cy="60" r="50" fill="transparent" stroke="currentColor"
                  stroke-width="15" />
                <!-- Progress Circle -->
                <circle class="transition-all duration-500" cx="60" cy="60" r="50" fill="transparent"
                  :stroke="progressColor" stroke-width="15" stroke-dasharray="314.16"
                  :stroke-dashoffset="progressOffset" />
              </svg>
              <!-- Progress Text -->
              <div class="absolute flex flex-col items-center cursor-default">
                <span :class="`font-bold text-2xl`" :style="{
                  color: progressColor
                }">{{ numericalValue.grade }}</span>
                <span class="text-xs font-bold text-slate-400" :style="{
                  color: progressColor
                }">{{ numericalValue.description }}</span>
              </div>
            </div>

            <p class="text-xs text-slate-600 font-bold mt-1">Final Grade</p>
          </div>

          <div class="vertical m-auto">
            <ul v-for="(item) in gradingSystem" :class="[
              'grid grid-cols-2 gap-5 items-center md:text-sm text-[9.5px] text-slate-500 font-medium px-5 py-1',
              item.grade == numericalValue.grade ? 'bg-slate-600 text-white rounded-full' : ''
            ]" :style="item.grade == numericalValue.grade ? { color: progressColor } : {}">
              <li class="text-end">{{ item.range[0] }} - {{ item.range[1] }}%</li>
              <li>{{ item.description }} ({{ item.grade }})</li>
            </ul>
          </div>

        </div>
      </div>
    </div>


  </div>
  <div v-else class=" center h-full">
    <p class="font-semibold text-gray-500">Subject not found.</p>
  </div>
</template>


<script setup>
definePageMeta({
  layout: 'output'
})

import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getFinalGrade, gradingSystem } from '~/assets/js/gradingsystem'

const route = useRoute()
const subject = ref(null)
const numericalValue = ref({ grade: '', description: '' })

// Circle properties
const radius = 50
const circumference = 2 * Math.PI * radius

// Compute progress offset based on the specified grade percentages
const progressOffset = computed(() => {
  const grade = parseFloat(numericalValue.value.grade) || 0;

  // Set progress percentage based on grade values
  let percentage = 0;
  if (numericalValue.value.grade === '-') {
    percentage = 100; // 100% if out of range
  } else if (grade === 1.0) {
    percentage = 100;
  } else if (grade === 1.25) {
    percentage = 90;
  } else if (grade === 1.5) {
    percentage = 75;
  } else if (grade === 1.75) {
    percentage = 60;
  } else if (grade === 2.0) {
    percentage = 50;
  } else if (grade === 2.25) {
    percentage = 40;
  } else if (grade === 2.5) {
    percentage = 35;
  } else if (grade === 2.75) {
    percentage = 20;
  } else if (grade === 3.0) {
    percentage = 10;
  } else if (grade === 5.0) {
    percentage = 100;
  }

  // Calculate the offset based on the percentage
  return circumference - (percentage / 100) * circumference;
});

// Tailwind color classes based on grade
const progressColor = computed(() => {
  const grade = parseFloat(numericalValue.value.grade) || 0;

  if (numericalValue.value.grade === '-') {
    return '#3b82f6'; // Blue for "Out of Range"
  }

  if (grade <= 1.0) return '#22c55e'; // green  
  if (grade <= 1.25) return '#a4fa05'; // lime
  if (grade <= 1.5) return '#d1fa05'; // lime
  if (grade <= 1.75) return '#e9f505'; // lime
  if (grade <= 2.0) return '#facc15'; // yellow
  if (grade <= 2.25) return '#fca205'; // yellow
  if (grade <= 2.5) return '#fc8105'; // yellow
  if (grade <= 2.75) return '#ff7300'; // yellow
  if (grade <= 3.0) return '#ff6200'; // light yellow
  return '#ff4031'; // red
});


function download() {
  alert('Currently not available.')
}

// Retrieve and calculate grade details on mount
onMounted(() => {
  const subjectId = route.params.id
  const savedSubjects = JSON.parse(localStorage.getItem('Subjects')) || []
  subject.value = savedSubjects.find(s => s.id === parseInt(subjectId))

  if (subject.value) {
    const finalGrade = parseFloat(subject.value.finalGrade)
    numericalValue.value = getFinalGrade(finalGrade)
  }
})
</script>
