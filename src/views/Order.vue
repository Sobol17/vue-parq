<script setup>
import Header from "@/components/layouts/Header.vue";
import OrderItem from "@/components/restaurants/OrderItem.vue";
import {useCartStore} from "@/stores/cart.js";
import IconOrderDelivery from "@/components/icons/IconOrderDelivery.vue";
import IconArrowRight from "@/components/icons/IconArrowRight.vue";
import AppButton from "@/components/UI/AppButton.vue";
import formatPrice from "../utils/formatPrice.js";
import RestarauntCard from "@/components/restaurants/RestarauntCard.vue";
import Modal from "@/components/modals/Modal.vue";
import IconTable from "@/components/icons/IconTable.vue";
import {ref} from "vue";
import CheckboxLine from "@/components/restaurants/CheckboxLine.vue";
import AppRadio from "@/components/UI/AppRadio.vue";
import IconParqMini from "@/components/icons/IconParqMini.vue";
import IconParqPay from "@/components/icons/IconParqPay.vue";

const cartStore = useCartStore()

const deliveryModal = ref(null);
const paymentModal = ref(null);

const openModal = (modal) => {
  modal.openModal();
};

const type = ref('dasdas')
</script>

<template>
<div>
  <Header link="/" title="Your order" white/>
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
      <textarea class="order__textarea" placeholder="Your comment"></textarea>
    </div>
  </div>

  <div class="order__total--fixed">
    <div class="flex justify-between mb-3">
      <span class="text-body-m-medium">~20-30min</span>
      <span class="text-body-m-medium">{{ formatPrice(cartStore.totalPrice) }}</span>
    </div>
    <div class="flex gap-x-3">
      <AppButton
        class="w-full"
        text="Order"
        :price="cartStore.totalPrice"
        gold
      />
    </div>
  </div>

  <!-- Delivery Modal -->
  <Teleport to="body">
    <Modal ref="deliveryModal">
      <div class="text-center px-5 my-4">
        <div class="font-lora text-headline">Delivery</div>

        <AppRadio
          v-model="type"
          value="dasdas"
          name="Takeaway"
          label
        >
          <p class="text-body-m-medium">Takeaway</p>
        </AppRadio>
        <AppRadio
          v-model="type"
          value="dasdas1"
          name="Room delivery"
          label
          disabled
        >
          <p class="text-body-m-medium text-neutral-500">Room delivery</p>
          <RouterLink to="/rooms" class="block text-body-m-regular text-neutral-500">Select an apartment</RouterLink>
        </AppRadio>
        <AppRadio
          v-model="type"
          value="dasda2"
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
          v-model="type"
          value="dasdas"
          name="Takeaway"
          label
        >
          <div class="text-left">
            <p class="text-body-m-medium">At the end of the month</p>
            <p class="text-body-s-regular text-error-main">Your debt: -30 756 Rp</p>
          </div>
          <IconParqMini />
        </AppRadio>
        <AppRadio
          v-model="type"
          value="dasdas1"
          name="Room delivery"
          label
        >
          <div class="text-left">
            <p class="text-body-m-medium">Bank card</p>
            <p class="text-body-s-regular text-neutral-500">Mastercard 4321</p>
          </div>
          <IconParqMini />
        </AppRadio>
        <AppRadio
          v-model="type"
          value="dasda2"
          name="Dine in"
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
  @apply max-w-[800px] mx-auto fixed bottom-0 left-0 right-0 rounded-t-[15px] border border-solid border-neutral-300 py-4 px-5;
}
</style>