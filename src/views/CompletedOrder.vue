<script setup>
import Header from "@/components/layouts/Header.vue";
import OrderItem from "@/components/restaurants/completedOrders/CompletedOrderItem.vue";
import IconParqPay from "@/components/icons/IconParqPay.vue";
import IconCross from "@/components/icons/IconCross.vue";
import {useOrdersStore} from "@/stores/order.js";
import {onMounted} from "vue";
import Loader from "@/components/UI/Loader.vue";
import {useRoute} from "vue-router";

const route = useRoute()
const ordersStore = useOrdersStore()

onMounted(async () => {
  await ordersStore.fetchOrderById(route.params.id)
})
</script>

<template>
<div>

  <RouterLink to="/orders" class="absolute top-3 right-1 bg-white text-neutral-500 z-10 size-9 rounded-full flex items-center justify-center">
    <IconCross class="size-[12px]" />
  </RouterLink>

  <Header :title="!ordersStore.isLoading ? `${ordersStore.currentOrder.status} Order` : 'Order'" link="/orders"/>

  <Loader v-if="ordersStore.isLoading" />
  <div v-else class="flex flex-col gap-y-3 mt-6">
    <div class="order-block">
      <div class="flex justify-between">
        <p class="text-body-l-bold">{{ ordersStore.currentOrder.date_text }}</p>
        <p class="text-body-s-regular text-neutral-500">Restaurant</p>
      </div>
      <p class="text-body-s-regular text-neutral-500">{{ordersStore.currentOrder.restaurant?.title}}</p>
    </div>

    <div class="order-block">
      <div class="text-center text-body-l-medium mb-3">Order details</div>
      <div class="flex flex-col gap-y-3">
        <OrderItem
          v-for="item in ordersStore.currentOrder.dishes"
          :name="item.title"
          :info="item.quantity + 'q'"
          :imgUrl="item.image"
          :price="item.sum"
        />
      </div>
    </div>

    <div class="order-block">
      <div class="text-center text-body-l-medium mb-3">Shipping and payment</div>

      <div class="flex items-center justify-between border-b border-solid border-black-200 py-3 mx-[-20px] w-[calc(100%_+_40px)] px-5">
        <div>
          <p class="text-body-s-medium mb-1">Delivery to room</p>
          <p class="text-body-s-regular text-neutral-500">{{ ordersStore.currentOrder.delivery_text }}</p>
        </div>
      </div>

      <div class="flex items-center justify-between border-b border-solid border-black-200 py-5 mx-[-20px] w-[calc(100%_+_40px)] px-5">
        <div>
          <p class="text-body-s-medium mb-1">Order</p>
        </div>
        <div>{{ordersStore.currentOrder.price}}</div>
      </div>

      <div class="flex items-center justify-between border-b border-solid border-black-200 py-5 mx-[-20px] w-[calc(100%_+_40px)] px-5">
        <div>
          <p class="text-body-s-medium mb-1">Discount</p>
        </div>
        <div class="flex items-center gap-x-1">
          <span>{{ordersStore.currentOrder.discount_sum}}</span>
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
              payment method: {{ordersStore.currentOrder.payment_details}}
            </span>
          </p>
        </div>
        <div >
          <span>{{ordersStore.currentOrder.price}}</span>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<style scoped>
.order-block {
  @apply bg-black-300 p-5 rounded-[15px]
}
</style>