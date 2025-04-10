import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import ProductList from '@/views/ProductList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    { 
      path: '/products/:type', 
      name: 'ProductList', 
      component: ProductList,
      props: true // 將路由參數作為 props 傳遞給組件
    },
  ],
})

export default router
