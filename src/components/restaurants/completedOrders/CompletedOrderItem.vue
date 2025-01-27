<script setup>

const props = defineProps({
  name: String,
  imgUrl: String,
  info: String,
  price: Number,
})
</script>

<template>
<div class="flex items-center gap-x-3 border-b border-solid border-black-200 pb-2">
  <img class="rounded-full size-[35px]" :src="imgUrl" :alt="name">
  <div>
    <p class="text-body-s-regular mb-1">{{name}}</p>
    <p class="text-body-s-regular text-neutral-500">{{info}}</p>
  </div>
  <div class="text-body-s-medium ml-auto">{{ price }}</div>
</div>
</template>

<style scoped>

</style>