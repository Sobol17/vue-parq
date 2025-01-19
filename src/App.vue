<script setup>
import {ref} from "vue";
</script>

<template>
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<style scoped>
.wrapper {
  @apply w-full h-full min-h-[100vh] px-5 bg-white-bg;
}
</style>
