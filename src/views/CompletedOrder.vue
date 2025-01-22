<script setup>
import Header from "@/components/layouts/Header.vue";
import OrderItem from "@/components/restaurants/completedOrders/CompletedOrderItem.vue";
import formatPrice from "../utils/formatPrice.js";
import IconParqPay from "@/components/icons/IconParqPay.vue";
import IconCross from "@/components/icons/IconCross.vue";

</script>

<template>
<main class="relative">

  <div class="absolute top-3 right-1 bg-white text-neutral-500 z-10 size-9 rounded-full flex items-center justify-center">
    <IconCross class="size-[12px]" />
  </div>

  <Header title="Completed Order" link="/orders"/>

  <div class="flex flex-col gap-y-3 mt-6">
    <div class="order-block">
      <div class="flex justify-between">
        <p class="text-body-l-bold">Ronin</p>
        <p class="text-body-s-regular text-neutral-500">12 decembver 14:32</p>
      </div>
      <p class="text-body-s-regular text-neutral-500">Restaurant</p>
    </div>

    <div class="order-block">
      <div class="text-center text-body-l-medium mb-3">Order details</div>
      <div class="flex flex-col gap-y-3">
        <OrderItem
          v-for="item in 5"
          name="Kurure ramen asian"
          info="1 q"
          imgUrl="/"
          :price="31000"
        />
      </div>
    </div>

    <div class="order-block">
      <div class="text-center text-body-l-medium mb-3">Shipping and payment</div>

      <div class="flex items-center justify-between border-b border-solid border-black-200 py-3 mx-[-20px] w-[calc(100%_+_40px)] px-5">
        <div>
          <p class="text-body-s-medium mb-1">Delivery to room</p>
          <p class="text-body-s-regular text-neutral-500">BOULEVARD LOFTS, 23 room</p>
        </div>
        <div>{{formatPrice(10000)}}</div>
      </div>

      <div class="flex items-center justify-between border-b border-solid border-black-200 py-5 mx-[-20px] w-[calc(100%_+_40px)] px-5">
        <div>
          <p class="text-body-s-medium mb-1">Order</p>
        </div>
        <div>{{formatPrice(30000)}}</div>
      </div>

      <div class="flex items-center justify-between border-b border-solid border-black-200 py-5 mx-[-20px] w-[calc(100%_+_40px)] px-5">
        <div>
          <p class="text-body-s-medium mb-1">Cashback</p>
        </div>
        <div class="flex items-center gap-x-1">
          <span>+{{formatPrice(3000)}}</span>
          <i>
            <IconParqPay/>
          </i>
        </div>
      </div>

      <div class="flex items-center justify-between py-3 mx-[-20px] w-[calc(100%_+_40px)] px-5">
        <div>
          <p class="text-body-s-medium mb-1">Total</p>
          <p class="text-body-xs-regular text-neutral-500 flex items-center gap-x-1">
            <i>
              <IconParqPay />
            </i>
            <span>
              payment method: PARQ Pay
            </span>
          </p>
        </div>
        <div >
          <span>{{formatPrice(40000)}}</span>
        </div>
      </div>

    </div>
  </div>
</main>
</template>

<style scoped>
.order-block {
  @apply bg-black-300 p-5 rounded-[15px]
}
</style>