<script setup>

import Header from "@/components/layouts/Header.vue";
import CompletedOrdersCard from "@/components/restaurants/completedOrders/CompletedOrdersCard.vue";
import IconParq from "@/components/icons/IconParq.vue";
</script>

<template>
<main>
  <Header title="Completed Orders" link="/"/>

  <div class="mt-6 flex flex-col gap-y-4 pb-8">
    <CompletedOrdersCard
      v-for="item in 15"
      title="Ronin"
      date="12 decembver 14:32"
      price="422,000 Rp"
      :order-status="1"
      :id="1"
    />

    <div class="mx-auto mt-[300px]" v-if="false">
      <div class="rounded-full border-2 border-solid border-green size-[150px] flex items-center justify-center mx-auto">
        <IconParq />
      </div>
      <p class="font-lora text-headline mt-5">No completed orders</p>
    </div>
  </div>
</main>
</template>

<style scoped>

</style>