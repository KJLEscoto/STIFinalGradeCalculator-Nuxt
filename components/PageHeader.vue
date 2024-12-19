<template>
  <div>
    <section>
      <h1 class="font-semibold md:text-2xl text-base text-primary-text capitalize ">{{ title }}</h1>
      <p class="md:text-sm text-xs font-medium text-slate-500">{{ description }}.</p>
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