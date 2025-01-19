import {ref, computed, shallowRef} from 'vue'
import {defineStore} from 'pinia'
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

  const recentlyOrdered = ref([
    {
      id: 1,
      name: 'Kurure ramen asian',
      measure: '312g',
      price: 31200,
      count: 1,
      description: 'During the opening ceremony and dance warm-up, we will connect with each other to dance as one big tribe.\n' +
        'DJ Aman the opening ceremony and dance will During the opening ceremony and dance warm-up, we will connect with each other to dance as one big tribe.\n' +
        'DJ Aman the opening ceremony and dance will',
      adds: [
        {
          title: 'Milk - soy milk',
          price: 15200
        },
        {
          title: 'Milk - normal milk',
          price: 7200
        }
      ]
    },
    {
      id: 2,
      name: 'Kurure ramen asian1',
      measure: '311g',
      price: 22200,
      count: 1,
      description: 'During the opening ceremony and dance warm-up, we will connect with each other to dance as one big tribe.\n' +
        'DJ Aman the opening ceremony and dance will During the opening ceremony and dance warm-up, we will connect with each other to dance as one big tribe.\n' +
        'DJ Aman the opening ceremony and dance will',
      adds: [
        {
          title: 'Milk - soy milk',
          price: 15200
        },
        {
          title: 'Milk - normal milk',
          price: 7200
        }
      ]
    },
    {
      id: 3,
      name: 'Kurure ramen asian2',
      measure: '311g',
      price: 11200,
      count: 1,
      description: 'During the opening ceremony and dance warm-up, we will connect with each other to dance as one big tribe.\n' +
        'DJ Aman the opening ceremony and dance will During the opening ceremony and dance warm-up, we will connect with each other to dance as one big tribe.\n' +
        'DJ Aman the opening ceremony and dance will',
      adds: [
        {
          title: 'Milk - soy milk',
          price: 15200
        },
        {
          title: 'Milk - normal milk',
          price: 7200
        }
      ]
    },
    {
      id: 4,
      name: 'Kurure ramen asian4',
      measure: '312g',
      price: 31200,
      count: 1,
      description: 'During the opening ceremony and dance warm-up, we will connect with each other to dance as one big tribe.\n' +
        'DJ Aman the opening ceremony and dance will During the opening ceremony and dance warm-up, we will connect with each other to dance as one big tribe.\n' +
        'DJ Aman the opening ceremony and dance will',
      adds: [
        {
          title: 'Milk - soy milk',
          price: 15200
        },
        {
          title: 'Milk - normal milk',
          price: 7200
        }
      ]
    },
    {
      id: 5,
      name: 'Kurure ramen asian5',
      measure: '312g',
      price: 31200,
      count: 1,
      description: 'During the opening ceremony and dance warm-up, we will connect with each other to dance as one big tribe.\n' +
        'DJ Aman the opening ceremony and dance will During the opening ceremony and dance warm-up, we will connect with each other to dance as one big tribe.\n' +
        'DJ Aman the opening ceremony and dance will',
      adds: [
        {
          title: 'Milk - soy milk',
          price: 15200
        },
        {
          title: 'Milk - normal milk',
          price: 7200
        }
      ]
    },
  ])

  const popularDishes = ref([
    {
      id: 6,
      name: 'Kurure ramen asian',
      measure: '312g',
      price: 31200,
      count: 1,
      description: 'During the opening ceremony and dance warm-up, we will connect with each other to dance as one big tribe.\n' +
        'DJ Aman the opening ceremony and dance will During the opening ceremony and dance warm-up, we will connect with each other to dance as one big tribe.\n' +
        'DJ Aman the opening ceremony and dance will',
      adds: [
        {
          title: 'Milk - soy milk',
          price: 15200
        },
        {
          title: 'Milk - normal milk',
          price: 7200
        }
      ]
    },
    {
      id: 7,
      name: 'Kurure ramen asian1',
      measure: '311g',
      price: 22200,
      count: 1,
      description: 'During the opening ceremony and dance warm-up, we will connect with each other to dance as one big tribe.\n' +
        'DJ Aman the opening ceremony and dance will During the opening ceremony and dance warm-up, we will connect with each other to dance as one big tribe.\n' +
        'DJ Aman the opening ceremony and dance will',
      adds: [
        {
          title: 'Milk - soy milk',
          price: 15200
        },
        {
          title: 'Milk - normal milk',
          price: 7200
        }
      ]
    },
    {
      id: 8,
      name: 'Kurure ramen asian2',
      measure: '311g',
      price: 11200,
      count: 1,
      description: 'During the opening ceremony and dance warm-up, we will connect with each other to dance as one big tribe.\n' +
        'DJ Aman the opening ceremony and dance will During the opening ceremony and dance warm-up, we will connect with each other to dance as one big tribe.\n' +
        'DJ Aman the opening ceremony and dance will',
      adds: [
        {
          title: 'Milk - soy milk',
          price: 15200
        },
        {
          title: 'Milk - normal milk',
          price: 7200
        }
      ]
    },
    {
      id: 9,
      name: 'Kurure ramen asian4',
      measure: '312g',
      price: 31200,
      count: 1,
      description: 'During the opening ceremony and dance warm-up, we will connect with each other to dance as one big tribe.\n' +
        'DJ Aman the opening ceremony and dance will During the opening ceremony and dance warm-up, we will connect with each other to dance as one big tribe.\n' +
        'DJ Aman the opening ceremony and dance will',
      adds: [
        {
          title: 'Milk - soy milk',
          price: 15200
        },
        {
          title: 'Milk - normal milk',
          price: 7200
        }
      ]
    },
    {
      id: 11,
      name: 'Kurure ramen asian5',
      measure: '312g',
      price: 43200,
      count: 1,
      description: 'During the opening ceremony and dance warm-up, we will connect with each other to dance as one big tribe.\n' +
        'DJ Aman the opening ceremony and dance will During the opening ceremony and dance warm-up, we will connect with each other to dance as one big tribe.\n' +
        'DJ Aman the opening ceremony and dance will',
      adds: [
        {
          title: 'Milk - soy milk',
          price: 15200
        },
        {
          title: 'Milk - normal milk',
          price: 7200
        }
      ]
    },
  ])

  return {
    categories,
    recentlyOrdered,
    popularDishes
  }
})
