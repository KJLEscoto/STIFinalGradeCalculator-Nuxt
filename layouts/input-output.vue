<template>
  <div class="h-screen center w-full relative vertical py-10">
    <div class="w-full h-auto horizontal items-center justify-between px-20">
      <PageHeader title="grade input" description="Provide all of your grades on the following fields" />
      <FormButton buttonType="secondary" @click="onClick" label="Back"
        :icon="{ leftIcon: true, name: 'leftArrow', iconClass: 'w-auto h-5' }" />
    </div>

    <div class="mx-20 h-[85%] overflow-auto px-10 py-5 rounded mt-5 bg-[#e8eff4] w-[45%]">
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