<script setup>

defineProps({
  icon: Object,
  text: String,
  isActive: Boolean,
})

</script>

<template>
<div class="flex flex-col items-center justify-between rounded-[15px] bg-white h-[78px] min-w-20 p-2">
  <component :is="icon"></component>
  <div class="text-body-xs-regular text-neutral-500 text-center">{{text}}</div>
</div>
</template>

<style scoped>

</style>