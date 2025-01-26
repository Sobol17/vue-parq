<script setup>
import AppRadio from "@/components/UI/AppRadio.vue";
import {computed, ref} from "vue";
import Header from "@/components/layouts/Header.vue";
import {useRoute} from "vue-router";

const route = useRoute()

const rooms = ref([
  {
    id: 1,
    title: 'SUNSET',
    lofts: [
      {
        id: 1,
        title: 'SUNSET loft 1',
      },
      {
        id: 2,
        title: 'SUNSET loft 2',
      },
    ]
  },
  {
    id: 2,
    title: 'AGUNG LOFTS',
    lofts: [
      {
        id: 3,
        title: 'AGUNG LOFTS 1',
      },
      {
        id: 4,
        title: 'AGUNG LOFTS 2',

      },
    ]
  },
  {
    id: 3,
    title: 'RETREAT',
    lofts: [
      {
        id: 5,
        title: 'RETREAT 1',
      },
      {
        id: 6,
        title: 'RETREAT 2',
      },
    ]
  }
])

const currentRoom = computed(() => {
  return rooms.value.find(room => room.id === Number(route.params.id))
})

const type = ref('dasdas')

</script>

<template>
<div>
  <Header :link="currentRoom ? '/rooms' : '/order'" :title="currentRoom?.title ?? 'Choose a room'" white/>

  <div v-if="currentRoom">
    <AppRadio
      v-for="loft in currentRoom?.lofts"
      v-model="type"
      :value="loft.title"
      :name="loft.title"
      label
    >
      <p class="text-body-m-regular text-black-300">{{loft.title}}</p>
    </AppRadio>
  </div>

  <div v-else>
    <AppRadio
      v-for="room in rooms"
      v-model="type"
      :value="room.title"
      :name="room.title"
      label
    >
      <p class="text-body-m-regular text-black-300">{{room.title}}</p>
    </AppRadio>
  </div>
</div>
</template>

<style scoped>

</style>