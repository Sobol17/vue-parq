<script setup>
import AppRadio from "@/components/UI/AppRadio.vue";
import {computed, onMounted, ref} from "vue";
import Header from "@/components/layouts/Header.vue";
import {useRoute} from "vue-router";
import {useRoomsStore} from "@/stores/deliveryRooms.js";
import Loader from "@/components/UI/Loader.vue";
import {useOrdersStore} from "@/stores/order.js";

const route = useRoute()

const roomStore = useRoomsStore()

const orderStore = useOrdersStore()

const currentRoom = computed(() => {
  return roomStore.rooms.find(room => room.id === Number(route.params.id))
})

onMounted(async () => {
  await roomStore.fetchRooms()
})

</script>

<template>
<div>
  <Header :link="currentRoom ? '/rooms' : '/order'" :title="currentRoom?.title ?? 'Choose a room'" white/>

  <Loader v-if="roomStore.isLoading" />
  <div v-else>
    <div v-if="currentRoom">
      <AppRadio
          v-for="loft in currentRoom?.rooms"
          v-model="orderStore.deliveryType"
          :value="loft.id"
          :name="loft.id"
          label
      >
        <p class="text-body-m-regular text-black-300">{{loft.group_title}} {{loft.title}}</p>
      </AppRadio>
    </div>

    <div v-else>
      <AppRadio
          v-for="room in roomStore.rooms"
          v-model="orderStore.deliveryType"
          :value="room.title"
          :name="room.title"
          label
      >
        <RouterLink :to="`/rooms/${room.id}`" class="text-body-m-regular text-black-300">{{room.title}}</RouterLink>
      </AppRadio>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>