<script setup>
import {useRoute} from "vue-router";
import BorderDecoration from "@/components/UI/BorderDecoration.vue";
import {onMounted} from "vue";
import {useRestaurantsStore} from "@/stores/restaurants.js";

const route = useRoute()
const restaurantsStore = useRestaurantsStore()

onMounted(async () => {
  localStorage.setItem('access_token', '5p9EEGFfKcp6FKv7upTh0YFI72R4Sqi0nsUBRA21PLhLVOz4e7TF8VtNgDSZljV6AUo49FHUWrSyMeq9zgcwsXkrFOrvL2QseOm4RyYRzNcs9wBCVCXV4uSvrhYlr919')

  await restaurantsStore.fetchRestaurants()
  await restaurantsStore.fetchCategories()
})
</script>

<template>
  <div class="wrapper" :class="{'wrapper--dark': route.path === '/orders' || route.name === 'orderId'}">
    <aside class="left-side">
      <img class="left-side__img" src="@/assets/images/logo.svg" alt="">

      <BorderDecoration />
    </aside>
    <main :class="[
        `max-w-[800px] mx-auto w-full flex-none relative sm:border-decor--with-circles`, route.path === '/' ? 'p-5 sm:p-10' : 'px-5']">
      <BorderDecoration v-if="route.path === '/'" />

      <RouterView />
    </main>
    <aside class="right-side">

    </aside>
  </div>
</template>

<style scoped>
.wrapper {
  @apply flex w-full h-full min-h-[100vh] bg-white-bg;
}

.wrapper--dark {
  @apply bg-black text-white;
}

.left-side {
  @apply hidden sm:block grow shrink sticky top-0 left-0 h-[100vh] bg-[url(@/assets/images/main-bg.png)];
}

.left-side__img {
  @apply absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%];
}

.right-side {
  @apply hidden sm:block grow shrink sticky top-0 right-0 h-[100vh] bg-[url(@/assets/images/main-bg.png)];
}
</style>
