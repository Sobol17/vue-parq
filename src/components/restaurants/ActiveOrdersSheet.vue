<script setup>
import ActiveOrderComponent from "@/components/restaurants/ActiveOrderComponent.vue";
</script>

<template>
<div class="rounded-t-[16px] bg-black-300 text-white pb-5">
  <div
    class="sticky top-0 p-[10px] flex justify-center"
  >
    <span class="block content-none w-7 h-[5px] bg-black-400 rounded-[3px]"></span>
  </div>

  <ActiveOrderComponent />

  <RouterLink to="/orders" class="block text-[#7C8388] text-body-s-regular text-center mt-[10px]">3 more orders</RouterLink>

</div>
</template>

<style scoped>

</style>