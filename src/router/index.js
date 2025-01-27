import { createRouter, createWebHistory } from 'vue-router'
import Restaurants from "@/views/Restaurants.vue";
import CompletedOrders from "@/views/CompletedOrders.vue";
import CompletedOrder from "@/views/CompletedOrder.vue";
import Order from "@/views/Order.vue";
import Rooms from "@/views/Rooms.vue";

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? '/vue-parq/' : '/'),
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
    {
      path: '/orders/:id',
      name: 'orderId',
      component: CompletedOrder,
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: Rooms,
    },
    {
      path: '/rooms/:id',
      name: 'room',
      component: Rooms,
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
  // scrollBehavior() {
  //   return { top: 0 }
  // }
})

export default router
