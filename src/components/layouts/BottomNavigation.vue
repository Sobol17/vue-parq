<script setup>

import IconRestaurantsNav from "@/components/icons/bottom-navigation/IconRestaurantsNav.vue";
import IconHomeNav from "@/components/icons/bottom-navigation/IconHomeNav.vue";
import IconParqNav from "@/components/icons/bottom-navigation/IconParqNav.vue";
import IconWalletNav from "@/components/icons/bottom-navigation/IconWalletNav.vue";
import IconBagNav from "@/components/icons/bottom-navigation/IconBagNav.vue";
</script>

<template>
<div class="bottom-navigation">
  <RouterLink to="/">
    <IconRestaurantsNav />
  </RouterLink>

  <RouterLink to="/">
    <IconHomeNav />
  </RouterLink>

  <RouterLink to="/">
    <IconParqNav />
  </RouterLink>

  <RouterLink to="/">
    <IconWalletNav />
  </RouterLink>

  <RouterLink to="/">
    <IconBagNav />
  </RouterLink>
</div>
</template>

<style scoped>
.bottom-navigation {
  @apply absolute bottom-0 bg-white py-5 px-11 flex left-0 right-0 gap-x-[45px] items-center justify-center border-t border-solid border-neutral-200
}
</style>