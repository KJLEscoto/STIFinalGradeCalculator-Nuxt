<template>
  <div>
    <button :class="[
      `${className} h-auto w-full border-2 py-1 px-3 text-sm rounded cursor-pointer capitalize tracking-wide font-medium flex justify-center items-center gap-1`,
      buttonType === 'primary'
        ? 'bg-primary border-primary text-white hover:bg-primary/85 active:bg-primary'
        : 'border-primary text-primary-text hover:bg-secondary-hover active:bg-secondary-active'
    ]"> 
      <Icon v-if="icon?.leftIcon" :name="icon.name" :className="icon.iconClass" />
      <span class="text-center">{{ label }}</span>
      <Icon v-if="icon?.rightIcon" :name="icon.name" :className="icon.iconClass" />
    </button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: 'button'
  },
  buttonType: {
    type: String,
    default: 'primary'
  },
  className: {
    type: String,
    default: ''
  },
  icon: {
    type: Object,
    default: () => ({
      leftIcon: false,
      rightIcon: false,
      name: '',
      iconClass: ''
    })
  }
});
</script>
