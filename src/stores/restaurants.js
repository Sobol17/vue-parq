import {computed, ref} from 'vue'
import {defineStore} from 'pinia'
import restaurantService from "@/service/restaurants.js";

export const useRestaurantsStore = defineStore('restaurants', () => {
  const dataFetching = ref(true)

  const restaurants = ref([])
  const activeRestaurant = ref({})

  const fetchRestaurants = async () => {
    const res = await restaurantService.getAllRestaurants()
    restaurants.value = res.data.data
    activeRestaurant.value = {...res.data.data[0]}
  }

  const categories = ref([])
  const chunkedCategories = ref([])

  const recentlyOrdered = ref([])
  const popularDishes = ref([])

  const searchQuery = ref('')
  const searchCategories = computed(() => {
    return categories.value.filter(item => item.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
  })

  const fetchCategories = async () => {
    dataFetching.value = true
    const res = await restaurantService.getCategoriesByRestaurantId(activeRestaurant.value.id)
    categories.value = res.data.data?.categories?.map(category => ({
      ...category,
      dishes: category.dishes.map(dish => ({
        ...dish,
        count: 1,
        selectedAdds: []
      }))
    }));

    chunkedCategories.value = res.data.data?.categories?.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / 8);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    }, []);

    recentlyOrdered.value = res.data.data?.recent_dishes
    popularDishes.value = res.data.data?.popular_dishes

    dataFetching.value = false
  }

  return {
    dataFetching,
    categories,
    chunkedCategories,
    recentlyOrdered,
    popularDishes,
    restaurants,
    fetchRestaurants,
    fetchCategories,
    searchCategories,
    searchQuery,
    activeRestaurant
  }
})
