<template>
  <div class="h-screen center w-full relative vertical py-10 gap-5">
    <div class="w-full h-auto horizontal items-center justify-between md:px-20 px-5">
      <PageHeader title="grade input" description="Provide all of your grades on the following fields" />
      <FormButton buttonType="secondary" @click="onClick" label="Back"
        :icon="{ leftIcon: true, name: 'leftArrow', iconClass: 'w-auto md:h-5 h-4' }" />
    </div>

    <div class="h-[85%] overflow-auto py-5 rounded mt-5 md:w-[45%] w-[90%]">
      <slot />
    </div>

    <Footer />
  </div>
</template>

<script setup>

function onClick() {
  navigateTo('/')
}
</script>