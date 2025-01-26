<script setup>
const props = defineProps({
  icon: String,
  text: String,
  isActive: Boolean
})

const emits = defineEmits(['click'])
</script>

<template>
  <div @click="emits('click', props)" class="header__category" :class="{'category--active': isActive}">
    <img class="size-4" :src="icon" :alt="text">
    <div :class="['text-body-s-regular text-center text-nowrap', isActive ? 'text-black-300' : 'text-neutral-500']">{{text}}</div>
  </div>
</template>

<style scoped>
.header__category {
  @apply bg-white rounded-[8px] px-[15px] py-[7px] border border-solid border-neutral-200 flex justify-center items-center gap-x-2
}

.category--active {
  @apply bg-success-secondary
}
</style>