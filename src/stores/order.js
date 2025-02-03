import {computed, ref} from 'vue'
import {defineStore} from 'pinia'
import orderService from "@/service/orders.js";

export const useOrdersStore = defineStore('orders', () => {
    const isLoading = ref(true)
    const deliveryType = ref('takeaway')
    const paymentMethod = ref('cash')
    const comment = ref('')

    const orders = ref([])
    const currentOrder = ref({})

    const fetchOrders = async () => {
        isLoading.value = true
        const res = await orderService.getCustomerOrders()
        orders.value = res.data.data
        isLoading.value = false
    }

    const fetchOrderById = async (orderId) => {
        isLoading.value = true
        const res = await orderService.getCustomerOrderById(orderId)
        currentOrder.value = res.data.data
        isLoading.value = false
    }

    const validationErrorText = ref('')

    const clearValidationError = () => {
        validationErrorText.value = ''
    }

    const validateOrderItems = (items) => {
        if (!items?.length) {
            validationErrorText.value = 'Добавьте товары в заказ'
            return false
        }
        return true
    }

    const validateRequiredString = (value, errorMessage) => {
        if (!value || typeof value !== 'string' || value.trim() === '') {
            validationErrorText.value = errorMessage
            return false
        }
        return true
    }

    const sendOrderData = async (orderItems) => {
        try {
            clearValidationError()

            if (!validateOrderItems(orderItems)) return
            if (!validateRequiredString(deliveryType.value, 'Выберите способ доставки')) return
            if (!validateRequiredString(paymentMethod.value, 'Выберите способ оплаты')) return

            const requestData = {
                items: orderItems,
                delivery_type: deliveryType.value,
                payment_method: paymentMethod.value,
                comment: comment.value,
            }

            await orderService.makeOrder(requestData)

        } catch (error) {
            validationErrorText.value = 'Ошибка при оформлении заказа'
            alert('Order error:', error)
        }
    }

    return {
        isLoading,
        orders,
        fetchOrders,
        currentOrder,
        fetchOrderById,
        deliveryType,
        paymentMethod,
        comment,
        sendOrderData,
        validationErrorText
    }
})
