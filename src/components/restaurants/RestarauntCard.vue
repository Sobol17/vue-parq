<script setup>
import AppCheckbox from "@/components/UI/AppCheckbox.vue";
import {ref} from "vue";

defineProps({
  img: String,
  name: String,
  menu: String
})

const selected = ref(true)
</script>

<template>
<div>
  <div @click="selected = !selected" class="relative overflow-hidden rounded-[15px]">
    <img class="w-full h-[120px] object-cover" :src="img"/>
    <AppCheckbox
      v-model="selected"
      class="absolute top-3 left-3"
    />
  </div>
  <div class="flex items-center justify-between mt-2">
    <div class="text-body-l-medium text-black-400">{{name}}</div>
    <div class="text-body-s-regular text-neutral-500">{{menu}}</div>
  </div>
</div>
</template>

<style scoped>

</style>