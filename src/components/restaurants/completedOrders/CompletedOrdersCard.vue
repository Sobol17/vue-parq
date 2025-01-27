<script setup>
import IconArrowRight from "@/components/icons/IconArrowRight.vue";

const props = defineProps({
  title: String,
  date: String,
  orderStatus: String,
  price: String,
  id: Number
})
</script>

<template>
<RouterLink :to="`/orders/` + id" class="bg-black-300 p-5 flex items-center gap-x-4 rounded-[15px]">
  <div class="w-full flex items-start justify-between">
    <div>
      <p class="text-body-l-bold mb-2">{{title}}</p>
      <p class="text-body-m-medium">{{price}}</p>
    </div>
    <div class="text-end">
      <p class="text-body-s-regular text-neutral-500 mb-4">{{date}}</p>
      <p class="text-body-m-medium text-green">{{orderStatus}}</p>
    </div>
  </div>
  <IconArrowRight class="text-white" bg />
</RouterLink>
</template>

<style scoped>

</style>