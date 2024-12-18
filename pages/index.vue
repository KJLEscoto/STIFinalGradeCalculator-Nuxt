<template>
  <div v-if="subjects.length > 0" class="grid md:grid-cols-3 grid-cols-1 gap-5">
    <div v-for="(subject, index) in subjects" :key="index"
      class="p-5 bg-gray-100 rounded shadow vertical justify-between">
      <section class="vertical">
        <h2 class="text-xl font-semibold capitalize truncate text-primary-text">{{ subject.subject }}</h2>
        <Divider />
        <p>Final Grade: <span class="font-bold text-primary-text">{{ subject.finalGrade }}</span></p>
      </section>
      <section class="horizontal justify-between border">
        <span class="w-full">
          <FormButton label="view" className="w-full" @click="viewDetails(subject.id)"
            :icon="{ leftIcon: true, name: 'view', iconClass: 'w-auto h-5' }" />
        </span>

        <FormButton label="delete" buttonType="secondary" className="text-red-500 hover:bg-red-200 border-red-500 active:bg-red-300 w-full"
          :icon="{ leftIcon: true, name: 'delete', iconClass: 'w-auto h-5' }" />
      </section>
    </div>
  </div>
  <div v-else class="center h-full w-full">
    <p class="font-semibold text-gray-500">No Subjects Yet.</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const subjects = ref([])

function viewDetails(subjectId) {
  // You can navigate or pass the subjectId to another component to view more details
  navigateTo(`/${subjectId}`)
}

onMounted(() => {
  // Retrieve Subjects from Local Storage
  const savedSubjects = JSON.parse(localStorage.getItem('Subjects')) || []
  subjects.value = savedSubjects
})
</script>
