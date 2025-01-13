<script setup>
import IconArrowStroke from "@/components/icons/IconArrowStroke.vue";
import IconArrowDown from "@/components/icons/IconArrowDown.vue";
import AppButton from "@/components/UI/AppButton.vue";
import IconMenu from "@/components/icons/IconMenu.vue";
</script>

<template>
<header class="flex justify-between items-center pt-2">
  <IconArrowStroke class="rotate-180" />
  <div class="flex items-center gap-x-2">
    <div class="font-lora text-headline">Restaurants</div>
    <IconArrowDown md />
  </div>
  <AppButton icon text="">
    <IconMenu />
  </AppButton>
</header>
</template>

<style scoped>

</style>