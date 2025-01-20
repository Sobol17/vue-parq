import { createRouter, createWebHistory } from 'vue-router'
import Restaurants from "@/views/Restaurants.vue";
import CompletedOrders from "@/views/CompletedOrders.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'restaurants',
      component: Restaurants,
    },
    {
      path: '/orders',
      name: 'orders',
      component: CompletedOrders,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
