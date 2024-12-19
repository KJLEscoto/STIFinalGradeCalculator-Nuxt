<template>
  <div class="h-screen center w-full relative vertical py-10 gap-5">
    <div class="w-full h-auto horizontal items-center justify-between md:px-20 px-5">
      <PageHeader title="grade output" description="This is the breakdown for the subject" />
      <FormButton buttonType="secondary" @click="onClick" label="Back"
        :icon="{ leftIcon: true, name: 'leftArrow', iconClass: 'w-auto h-5' }" />
    </div>

    <div class="h-[85%] overflow-auto px-10 py-5 rounded mt-5 bg-[#e8eff4] w-[90%]">
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