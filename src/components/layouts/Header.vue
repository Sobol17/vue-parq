<script setup>
import IconArrowLeftFull from "@/components/icons/IconArrowLeftFull.vue";

const props = defineProps({
  title: String,
  link: String,
  white: Boolean
})
</script>

<template>
<div class="header-wrap" :class="{'header-wrap--white': white}">
  <div class="text-center relative ">
    <RouterLink :to="link">
      <IconArrowLeftFull class="absolute left-0 top-1/2 -translate-y-1/2"/>
    </RouterLink>
    <p class="font-lora text-headline">{{ title }}</p>
  </div>
</div>
</template>

<style scoped>
.header-wrap {
  @apply pt-4 sticky top-0 bg-black-300 pb-[10px] w-[calc(100%_+_40px)] mx-[-20px] px-5 border-b border-solid border-black-400 font-lora
}

.header-wrap--white {
  @apply bg-white-bg border-none
}
</style>