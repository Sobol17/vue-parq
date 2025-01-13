import {ref, computed, shallowRef} from 'vue'
import { defineStore } from 'pinia'
import IconBreakfast from "@/components/icons/food/IconBreakfast.vue";
import IconBeer from "@/components/icons/food/IconBeer.vue";
import IconCakes from "@/components/icons/food/IconCakes.vue";
import IconGrill from "@/components/icons/food/IconGrill.vue";
import IconJapanDesert from "@/components/icons/food/IconJapanDesert.vue";
import IconMaki from "@/components/icons/food/IconMaki.vue";
import IconSashimi from "@/components/icons/food/IconSashimi.vue";
import IconWok from "@/components/icons/food/IconWok.vue";

export const useRestaurantsStore = defineStore('restaurants', () => {
  const categories = shallowRef([
    {
      icon: IconBreakfast,
      text: 'All day breakfast'
    },
    {
      icon: IconBeer,
      text: 'Beer'
    },
    {
      icon: IconCakes,
      text: 'Cakes'
    },
    {
      icon: IconGrill,
      text: 'Grill'
    },
    {
      icon: IconJapanDesert,
      text: 'Japanese desert'
    },
    {
      icon: IconMaki,
      text: 'Maki'
    },
    {
      icon: IconSashimi,
      text: 'Sashimi'
    },
    {
      icon: IconWok,
      text: 'Wok'
    },
  ])

  return { categories }
})
