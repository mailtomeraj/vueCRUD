import { createRouter, createWebHistory } from 'vue-router'
import AllWonders from "@/views/wonders/AllWonders.vue"
import AddWonders from '@/views/wonders/AddWonders.vue'
import EditWonders from '@/views/wonders/EditWonders.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AllWonders
    },
    {
      path: '/AddWonders',
      name: 'AddWonders',
      component:AddWonders
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/EditWonders/:id',
      name: 'EditWonders',
      component: EditWonders
    }
  ]
})

export default router
