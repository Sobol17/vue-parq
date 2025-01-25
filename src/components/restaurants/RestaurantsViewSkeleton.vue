<script setup>

import SkeletonLoader from "@/components/UI/SkeletonLoader.vue";
</script>

<template>
  <div class="mt-6">
    <SkeletonLoader class="h-9 w-full"/>

    <SkeletonLoader class="h-9 w-full mt-6"/>

    <div class="grid grid-cols-4 gap-2 mt-3">
      <SkeletonLoader v-for="i in 8" class="min-h-20"/>
    </div>

    <SkeletonLoader class="h-9 w-full mt-6"/>

    <div class="grid grid-cols-2 gap-2 mt-4">
      <SkeletonLoader v-for="i in 8" class="min-h-[260px]"/>
    </div>
  </div>
</template>

<style scoped>

</style>