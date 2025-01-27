import {ref, computed} from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {

  const cartData = ref({
    elements: []
  })

  const isCartEmpty = computed(() => {
    return cartData.value.elements.length <= 0
  })

  const addToCart = (element) => {
    cartData.value.elements.push(element)
  }

  const removeFromCart = (element) => {
    cartData.value.elements = cartData.value.elements.filter(item => item.id !== element.id)
  }

  const incrementCount = (id) => {
    const item = cartData.value.elements.find(el => el.id === id);
    if (item) {
      item.count += 1;
    }
  }

  const decrementCount = (id) => {
    const item = cartData.value.elements.find(el => el.id === id);
    if (!item) {
      return
    }
    if (item.count > 1) {
      item.count -= 1;
    } else {
      removeFromCart(item)
    }
  }

  const totalPrice = computed(() => {
    return cartData.value.elements.reduce((acc, item) => {
      const itemTotal = item.price * item.count;
      const selectedItemsTotal = item.selectedAdds?.reduce((sum, selectedItem) => sum + selectedItem.price_number, 0) || 0;

      return acc + itemTotal + selectedItemsTotal;
    }, 0);
  });

  return {
    cartData,
    addToCart,
    removeFromCart,
    incrementCount,
    decrementCount,
    totalPrice,
    isCartEmpty
  }
})
