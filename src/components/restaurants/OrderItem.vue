<script setup>
import IconTrash from "@/components/icons/IconTrash.vue";
import IconMinus from "@/components/icons/IconMinus.vue";
import AppButton from "@/components/UI/AppButton.vue";
import IconPlus from "@/components/icons/IconPlus.vue";
import {computed} from "vue";
import {useCartStore} from "@/stores/cart.js";
import formatPrice from "../../utils/formatPrice.js";

const props = defineProps({
  id: Number,
  price: Number,
  image: String,
  name: String,
  measure: String,
  count: Number,
  selectedAdds: Array
})

const cartStore = useCartStore()

const inCart = computed(() => {
  return cartStore.cartData.elements.find(element => element.id === props.id)
})

const incrementCount = () => {
  cartStore.incrementCount(props.id);
};

const decrementCount = () => {
  cartStore.decrementCount(props.id);
};
</script>

<template>
<div class="order-item">
  <div class="order-item__img">
    <img src="@/assets/images/food.png" alt="">
  </div>
  <div class="flex-grow">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-body-m-medium mb-1">{{name}}</p>
        <p class="text-body-s-regular text-neutral-500">{{measure}}</p>
      </div>
      <IconTrash />
    </div>
    <div class="flex flex-col gap-y-2 mt-2">
      <div class="flex items-center gap-x-1" v-for="add in selectedAdds">
        <span class="text-green text-body-m-bold">+</span>
        <div class="text-body-s-medium">{{add.title}}</div>
        <div class="text-body-s-medium text-green ml-auto">{{formatPrice(add.price)}}</div>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <div class="flex justify-between gap-x-3 items-center mt-[9px] bg-neutral-200 rounded-[15px] p-[5px]">
        <AppButton @click="incrementCount" text="" transparent class="quantity-btn">
          <IconPlus class="size-4" />
        </AppButton>
        <span>{{inCart.count}}</span>
        <AppButton @click="decrementCount" text="" transparent class="quantity-btn">
          <IconMinus class="size-4" />
        </AppButton>
      </div>

      <div class="text-body-m-medium text-black-300">{{formatPrice(price * count)}}</div>
    </div>
  </div>
</div>
</template>

<style scoped>
.order-item {
  @apply flex gap-x-6 py-5 border-b border-solid border-neutral-300;
}

.order-item__img {
  @apply w-[85px] h-[85px] rounded-[15px] overflow-hidden;

  img {
    @apply w-full h-full object-cover;
  }
}

.quantity-btn {
  @apply size-10 p-0 flex items-center justify-center bg-white rounded-[10px] hover:bg-white active:bg-neutral-200;
}
</style>