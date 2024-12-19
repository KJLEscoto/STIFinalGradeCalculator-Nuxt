<template>
  <div>
    <button type="submit" :disabled="isDisable" :class="[
      `h-auto w-full border-2 py-1 px-3 text-sm rounded cursor-pointer capitalize tracking-wide font-medium flex justify-center items-center gap-1`,
      buttonType === 'primary'
        ? `${className} bg-primary border-primary text-white hover:bg-primary/85 active:bg-primary`
        : `${className} border-primary text-primary-text hover:bg-secondary-hover active:bg-secondary-active`
    ]"> 
      <Icon v-if="icon?.leftIcon" :name="icon.name" :className="icon.iconClass" />
      <p :class="[`text-center`, hideLabel ? 'md:block hidden' : 'block']">{{ label }}</p>
      <Icon v-if="icon?.rightIcon" :name="icon.name" :className="icon.iconClass" />
    </button>
  </div>
</template>

<script setup>
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
  hideLabel: {
    type: Boolean,
    default: false
  },
  isDisable: {
    type: Boolean,
    default: false
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
