<template>
  <div>
    <section>
      <h1 class="font-semibold text-2xl text-primary-text capitalize">{{ title }}</h1>
      <p class="text-sm font-medium text-slate-500">{{ description }}.</p>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Title here'
  },
  description: {
    type: String,
    default: 'description'
  },
})
</script>