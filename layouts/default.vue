<template>
  <div class="h-screen center w-full relative vertical gap-5 py-10">
    <div class="w-full h-auto horizontal items-center justify-between md:px-20 px-5">
      <PageHeader title="STI final grade calculator" description="Let's calculate your final grade" />
      <FormButton buttonType="secondary" @click="onClick" label="New Subject"
        :icon="{ leftIcon: true, name: 'addSubject', iconClass: 'w-auto h-5' }" />
    </div>

    <div class="mx-20 h-[85%] overflow-auto px-10 py-5 rounded mt-5 bg-[#e8eff4] w-[90%]">
      <slot />
    </div>

    <Footer />
  </div>
</template>

<script setup>

function onClick() {
  navigateTo('/input')
}
</script>