<script setup>

const props = defineProps({
  icon: String,
  text: String,
  isActive: Boolean,
})

const emits = defineEmits(['click'])
</script>

<template>
<div @click="emits('click', props)" class="cat-item" :class="{'cat-item--active': isActive}">
  <img :src="icon" class="cat-item__img" :class="{'cat-item__text--active': isActive}" :alt="text">
  <div class="cat-item__text" :class="{'cat-item__text--active': isActive}">{{text}}</div>
</div>
</template>

<style scoped>
.cat-item {
  @apply flex flex-col items-center justify-between rounded-[15px] bg-white h-[78px] min-w-20 p-2
}

.cat-item__img {
  @apply size-6
}

.cat-item--active {
  @apply bg-green
}

.cat-item__text {
  @apply text-body-xs-regular text-neutral-500 text-center
}

.cat-item__text--active {
  @apply text-white
}
</style>