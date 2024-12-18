<template>
  <div>
    <input :type="type" :id="id" :name="name" :value="modelValue" :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)" class="border py-2 px-3 rounded w-full" />
  </div>
</template>

<script setup>
// Props for the input field
defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [ String, Number ],
    default: ''
  }
})

// Emit to support two-way binding with v-model
defineEmits([ 'update:modelValue' ])
</script>
