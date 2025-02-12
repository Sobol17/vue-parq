<script setup>
import AppButton from "@/components/UI/AppButton.vue";
import {computed, ref} from "vue";
import IconPlus from "@/components/icons/IconPlus.vue";
import IconMinus from "@/components/icons/IconMinus.vue";
import {useCartStore} from "@/stores/cart.js";
import Modal from "@/components/modals/Modal.vue";
import CheckboxLine from "@/components/restaurants/CheckboxLine.vue";

const props = defineProps({
  id: Number,
  price: Number,
  image: String,
  name: String,
  measure: String,
  count: Number,
  available: {
    type: Boolean,
    default: true,
  },
  availableText: {
    type: String,
    default: "",
  },
  grid: Boolean,
  description: String,
  adds: Array,
  selectedAdds: Array,
  productCategory: String,
})

const cartStore = useCartStore()

const inCart = computed(() => {
  return cartStore.cartData.elements.find(element => element.id === props.id);
});


const { available, grid, adds, ...rest } = props;
const cartItem = {...rest};

const addToCart = () => {
  cartStore.addToCart(cartItem);
}

const incrementCount = () => {
  cartStore.incrementCount(props.id);
};

const decrementCount = () => {
  cartStore.decrementCount(props.id);
};

const modal = ref(null);

const openModal = () => {
  if (props.available) {
    modal.value.openModal();
  }
};

const closeModal = () => {
  modal.value.closeModal();
}

const showFullDescription = ref(false)


const addAddsToCart = (addItem, groupId) => {
  const formatItem = {
    id: addItem.id,
    modifier_group_id: groupId,
    quantity: 1,
    title: addItem.title,
    price: addItem.price,
  }

  if (inCart.value.selectedAdds?.includes(formatItem)) {
    inCart.value.selectedAdds = inCart.value.selectedAdds?.filter(item => item.title !== formatItem.title)
  } else {

    inCart.value.selectedAdds?.push(formatItem)
  }
};

const isAddChecked = (add) => {
  return inCart.value?.selectedAdds?.some(item => add.id === item.id) || false;
};

const btnText = computed(() => {
  if (props.availableText === "") {
    return props.available ? 'Order' : 'Not available'
  } else {
    return props.availableText;
  }
})

const addsHaveRequired = computed(() => {
  return inCart.value?.selectedAdds?.some(item => item.required === 1)
})

</script>

<template>
<div class="card" :class="{'card-in_grid': grid}">
  <div @click.stop="openModal" class="card-image" :class="{'card-not_available': !available}">
    <img :src="image" :alt="name">
  </div>
  <div class="card-name" @click.stop="openModal">{{name}}</div>
  <div class="card-measure">{{measure}}</div>

  <AppButton
    v-if="!inCart"
    @click="addToCart"
    class="mt-[14px] absolute bottom-2 left-2 right-2"
    sm
    transparent
    :disabled="!available"
    :text="btnText"
  />

  <div v-else class="absolute bottom-2 left-2 right-2 flex justify-between items-center mt-[9px]">
    <AppButton @click="decrementCount" text="" transparent class="quantity-btn">
      <IconMinus class="size-4" />
    </AppButton>
    <span>{{inCart.count}}</span>
    <AppButton @click="incrementCount" text="" transparent class="quantity-btn">
      <IconPlus class="size-4" />
    </AppButton>
  </div>

  <Teleport to="body">
    <Modal ref="modal">
      <div class="px-5 text-center">
        <div class="mt-3 max-w-[400px] mx-auto">
          <img class="w-full rounded-[15px]" :src="image" :alt="name">
        </div>
        <div class="text-neutral-400 text-body-m-medium mt-6">{{ productCategory }}</div>
        <div class="font-lora text-headline mt-2">{{name}}</div>
        <div class="text-body-s-medium px-[10px] py-[5px] rounded-[8px] bg-neutral-200 w-fit mx-auto text-neutral-500 mt-4">{{measure}}</div>
      </div>

      <div class="px-5 flex-grow pb-6 min-h-[400px]">
        <div class="text-body-m-medium mt-6">Description</div>
        <div class="relative">
          <div :class="['mt-2 text-body-s-regular text-neutral-400', showFullDescription ? 'line-clamp-100' : 'line-clamp-3']">{{description}}</div>
          <div v-if="!showFullDescription" @click="showFullDescription = true" class="absolute bottom-0 right-0 text-body-s-medium text-green more-button-blur bg-white">
            <span class="relative z-[2]">Read more</span>
          </div>
        </div>

        <div v-for="add in adds" :key="add.id">
          <div class="text-body-m-medium mt-6">{{ add.title }}</div>
          <div class="flex flex-col gap-y-3 mt-3">
            <CheckboxLine
              v-for="item in add.modifiers"
              :key="item.id"
              :title="item.title"
              :price="item.price"
              :is-checked="isAddChecked(item)"
              @update:checked="addAddsToCart(item, add.modifier_group_id)"
            />
          </div>
        </div>

      </div>

      <div class="sticky bottom-0 bg-white rounded-t-[15px] border border-solid border-neutral-300 py-4 px-5">
        <div class="flex gap-x-3">
          <AppButton
              :disabled="addsHaveRequired"
              @click="closeModal"
              class="w-full"
              text="Order"
              :price="cartStore.totalPrice"
              gold
          />
        </div>
      </div>
    </Modal>
  </Teleport>
</div>
</template>

<style scoped>
.card {
  @apply bg-white rounded-[15px] p-[5px] text-center w-[125px] h-[224px] relative;
}

.card-image {
  @apply rounded-[15px] max-w-[160px] mx-auto overflow-hidden cursor-pointer;
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
  @apply w-full h-auto min-h-[290px]
}

.card-not_available img {
  @apply grayscale
}

.quantity-btn {
  @apply size-10 p-0 flex items-center justify-center bg-neutral-200 rounded-[10px];
}
</style>