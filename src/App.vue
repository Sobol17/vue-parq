<script setup>
import {ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()
</script>

<template>
  <div class="wrapper" :class="{'wrapper--dark': route.path === '/orders'}">
    <RouterView />
  </div>
</template>

<style scoped>
.wrapper {
  @apply w-full h-full min-h-[100vh] px-5 bg-white-bg;
}

.wrapper--dark {
  @apply bg-black text-white;
}
</style>
