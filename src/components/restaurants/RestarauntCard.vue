<script setup>
import AppCheckbox from "@/components/UI/AppCheckbox.vue";
import {computed, ref} from "vue";
import {useRestaurantsStore} from "@/stores/restaurants.js";

const props = defineProps({
  restaurant: Object,
})

const restaurantStore = useRestaurantsStore()

const selected = computed(() => {
  return restaurantStore.activeRestaurant.id === props.restaurant.id
})
</script>

<template>
<div @click="restaurantStore.activeRestaurant = props.restaurant">
  <div class="relative overflow-hidden rounded-[15px]">
    <img class="w-full h-[120px] sm:h-[240px] object-cover" :src="restaurant.image" :alt="restaurant.title"/>
    <AppCheckbox
      :checked="selected"
      class="absolute top-3 left-3"
    />
  </div>
  <div class="flex items-center justify-between mt-2">
    <div class="text-body-l-medium text-black-400">{{restaurant.title}}</div>
    <div class="text-body-s-regular text-neutral-500">{{restaurant.description}}</div>
  </div>
</div>
</template>

<style scoped>

</style>