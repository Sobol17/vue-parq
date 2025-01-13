<script setup>
import AppButton from "@/components/UI/AppButton.vue";
import {ref, watch} from "vue";
import IconPlus from "@/components/icons/IconPlus.vue";
import IconMinus from "@/components/icons/IconMinus.vue";
import App from "@/App.vue";

const props = defineProps({
  image: String,
  name: String,
  measure: String,
  available: Boolean,
  grid: Boolean
})

const inCart = ref(false)
const count = ref(0)

const addToCart = () => {
  inCart.value = true
  count.value += 1
}

watch(count, () => {
  if (count.value === 0) inCart.value = false
})

</script>

<template>
<div class="card" :class="{'card-in_grid': grid}">
  <div class="card-image">
    <img src="@/assets/images/food.png" alt="">
  </div>
  <div class="card-name">{{name}}</div>
  <div class="card-measure">{{measure}}</div>

  <AppButton
    v-if="!inCart"
    @click="addToCart"
    class="w-full mt-[14px]"
    sm
    transparent
    text="Order"
  />

  <div v-else class="flex justify-between items-center mt-[9px]">
    <AppButton @click="count++" text="" transparent class="quantity-btn">
      <IconPlus class="size-4" />
    </AppButton>
    <span>{{count}}</span>
    <AppButton @click="count--" text="" transparent class="quantity-btn">
      <IconMinus class="size-4" />
    </AppButton>
  </div>
</div>
</template>

<style scoped>
.card {
  @apply bg-white rounded-[15px] p-[5px] text-center w-[125px] h-[224px];
}

.card-image {
  @apply rounded-[15px] max-w-[160px] mx-auto overflow-hidden;
}

.card-image img {
  @apply w-full;
}

.card-name {
  @apply text-body-s-regular mt-[10px];
}

.card-measure {
  @apply text-body-xs-regular mt-1 text-neutral-400;
}

.card-in_grid {
  @apply w-full h-auto
}

.quantity-btn {
  @apply size-10 flex items-center justify-center bg-neutral-200 rounded-[10px];
}
</style>