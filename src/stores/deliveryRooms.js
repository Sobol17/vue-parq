import {computed, ref} from 'vue'
import {defineStore} from 'pinia'
import roomService from "@/service/rooms.js";

export const useRoomsStore = defineStore('rooms', () => {
    const isLoading = ref(true)

    const rooms = ref([])

    const fetchRooms = async () => {
        isLoading.value = true
        const res = await roomService.getDeliveryRooms()
        rooms.value = res.data.data
        isLoading.value = false
    }

    return {
        isLoading,
        rooms,
        fetchRooms
    }
})
