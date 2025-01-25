<script setup>
import IconArrowRight from "@/components/icons/IconArrowRight.vue";

const props = defineProps({
  id: Number,
  orderedAt: String,
})
</script>

<template>
  <RouterLink :to="{name: 'orderId', params: {id: 1}}" class="flex justify-between items-center border-solid border-b border-black-400 px-5 py-[10px]">
    <span class="text-white text-body-s-medium">Order at 12:12</span>
    <div class="flex items-center gap-x-2">
      <span class="text-neutral-500 text-body-s-regular">~ Delivery time is 10:20 AM</span>
      <i>
        <IconArrowRight md />
      </i>
    </div>
  </RouterLink>
</template>

<style scoped>

</style>