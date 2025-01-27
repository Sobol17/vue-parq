<script setup>
import Header from "@/components/layouts/Header.vue";
import CompletedOrdersCard from "@/components/restaurants/completedOrders/CompletedOrdersCard.vue";
import IconParq from "@/components/icons/IconParq.vue";
import {onMounted} from "vue";
import {useOrdersStore} from "@/stores/order.js";
import Loader from "@/components/UI/Loader.vue";

const ordersStore = useOrdersStore()

onMounted(async () => {
  await ordersStore.fetchOrders()
})
</script>

<template>
<div>
  <Header title="Completed Orders" link="/"/>

  <Loader v-if="ordersStore.isLoading" />
  <div v-else class="mt-6 flex flex-col gap-y-4 pb-8">
    <CompletedOrdersCard
      v-for="order in ordersStore.orders"
      :key="order.id"
      :title="order.restaurant.title"
      :date="order.date_text"
      :price="order.price"
      :order-status="order.status"
      :id="order.id"
    />

    <div class="mx-auto mt-[300px]" v-if="false">
      <div class="rounded-full border-2 border-solid border-green size-[150px] flex items-center justify-center mx-auto">
        <IconParq />
      </div>
      <p class="font-lora text-headline mt-5">No completed orders</p>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>