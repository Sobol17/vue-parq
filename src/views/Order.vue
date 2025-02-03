<script setup>
import Header from "@/components/layouts/Header.vue";
import OrderItem from "@/components/restaurants/OrderItem.vue";
import {useCartStore} from "@/stores/cart.js";
import IconOrderDelivery from "@/components/icons/IconOrderDelivery.vue";
import IconArrowRight from "@/components/icons/IconArrowRight.vue";
import AppButton from "@/components/UI/AppButton.vue";
import formatPrice from "../utils/formatPrice.js";
import Modal from "@/components/modals/Modal.vue";
import {ref} from "vue";
import AppRadio from "@/components/UI/AppRadio.vue";
import IconParqMini from "@/components/icons/IconParqMini.vue";
import IconParqPay from "@/components/icons/IconParqPay.vue";
import {useOrdersStore} from "@/stores/order.js";
import {useRouter} from "vue-router";

const router = useRouter()
const cartStore = useCartStore()
const orderStore = useOrdersStore()

const deliveryModal = ref(null);
const paymentModal = ref(null);

const openModal = (modal) => {
  modal.openModal();
};

const makeOrder = async () => {
  const transformCartElements = cartStore.cartData.elements.map(item => {
    return {
      id: item.id,
      quantity: item.count,
      modifiers: item.selectedAdds,
    }
  })

  await orderStore.sendOrderData(transformCartElements);
}

</script>

<template>
<div class="pb-[160px] sm:pb-10">
  <Header link="/" title="Your order" white/>

  <div
    v-if="cartStore.cartData.elements.length === 0"
  >
    <div class="text-center mt-20 text-body-xl-regular">
      Your order is empty, please choose some thing
    </div>
    <AppButton @click="router.push('/')" text="Go to restaurant" class="mx-auto mt-6"/>
  </div>

  <div v-else>
    <div class="flex flex-col gap-y-6">
      <div class="flex flex-col gap-y-3 mt-6">
        <OrderItem
            v-for="item in cartStore.cartData.elements"
            :name="item.name"
            :selected-adds="item.selectedAdds"
            :count="item.count"
            :price="item.price"
            :measure="item.measure"
            :id="item.id"
            :image="item.image"
        />
      </div>

      <div class="order__block" @click="openModal(deliveryModal)">
        <IconOrderDelivery />
        <p class="text-body-m-medium text-black-300">Delivery</p>
        <IconArrowRight bg class="ml-auto" />
      </div>

      <div class="order__block" @click="openModal(paymentModal)">
        <p class="text-body-m-medium text-black-300">Payment</p>
        <IconArrowRight bg class="ml-auto" />
      </div>

      <div>
        <p class="text-body-m-medium text-black-300">Comment to order</p>
        <textarea v-model="orderStore.comment" class="order__textarea" placeholder="Your comment"></textarea>
      </div>
    </div>

    <div class="order__total--fixed">
      <div v-if="orderStore.validationErrorText" class="text-error-main text-body-m-regular text-center">
        {{orderStore.validationErrorText}}
      </div>
      <div class="flex justify-between mb-3">
        <span class="text-body-m-medium">Total</span>
        <span class="text-body-m-medium">{{ formatPrice(cartStore.totalPrice) }}</span>
      </div>
      <div class="flex gap-x-3">
        <AppButton
            @click="makeOrder"
            class="w-full"
            text="Order"
            gold
            :disabled="orderStore.validationErrorText !== ''"
        />
      </div>
    </div>
  </div>

  <!-- Delivery Modal -->
  <Teleport to="body">
    <Modal ref="deliveryModal">
      <div class="text-center px-5 my-4">
        <div class="font-lora text-headline">Delivery</div>

        <AppRadio
          v-model="orderStore.deliveryType"
          value="takeaway"
          name="Takeaway"
          label
        >
          <p class="text-body-m-medium">Takeaway</p>
        </AppRadio>
        <AppRadio
          v-model="orderStore.deliveryType"
          value="room"
          name="Room delivery"
          label
          disabled
        >
          <p class="text-body-m-medium text-neutral-500">Room delivery</p>
          <RouterLink to="/rooms" class="block text-body-m-regular text-neutral-500">Select an apartment</RouterLink>
        </AppRadio>
        <AppRadio
          v-model="orderStore.deliveryType"
          value="Dine-in"
          name="Dine in"
          label
        >
          <p class="text-body-m-medium">Dine in</p>
        </AppRadio>
      </div>
    </Modal>
  </Teleport>

  <!-- Payment Modal -->
  <Teleport to="body">
    <Modal ref="paymentModal">
      <div class="text-center px-5 my-4">
        <div class="font-lora text-headline">Payment</div>

        <AppRadio
          v-model="orderStore.paymentMethod"
          value="cash"
          name="Cash"
          label
        >
          <div class="text-left">
            <p class="text-body-m-medium">At the end of the month | Cash</p>
            <p class="text-body-s-regular text-error-main">Your debt: -30 756 Rp</p>
          </div>
          <IconParqMini />
        </AppRadio>
        <AppRadio
          v-model="orderStore.paymentMethod"
          value="card"
          name="Card"
          label
        >
          <div class="text-left">
            <p class="text-body-m-medium">Bank card</p>
            <p class="text-body-s-regular text-neutral-500">Mastercard 4321</p>
          </div>
          <IconParqMini />
        </AppRadio>
        <AppRadio
          v-model="orderStore.paymentMethod"
          value="balance"
          name="balance"
          label
        >
          <div class="text-left">
            <p class="text-body-m-medium">PARQ Pay</p>
            <p class="text-body-s-regular text-neutral-500">Balance: 2 100 233 Rp</p>
          </div>
          <IconParqPay />
        </AppRadio>
      </div>
    </Modal>
  </Teleport>
</div>
</template>

<style scoped>
.order__textarea {
  @apply outline-none border-neutral-300 rounded-[16px] p-4 resize-none h-[120px] w-full mt-4
}
.order__block {
  @apply py-5 px-3 rounded-[15px] bg-white flex items-center gap-x-4;
}
.order__total--fixed {
  @apply max-w-[800px] mx-auto fixed bottom-0 left-0 right-0 rounded-t-[15px] border border-solid border-neutral-300 py-4 px-5 bg-white;
}
</style>