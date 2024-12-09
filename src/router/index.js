import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 根路由
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/IndexView.vue')
    },
    // 登陆页面的路由
    {
      path: '/user/login',
      name: 'login',
      component: () => import('@/views/login/LoginView.vue')
    },
    // 新的登录路由
    {
      path: '/user/newlogin',
      name: 'new_login',
      component: () => import('@/views/login/newLoginView.vue')
    },
    // 项目管理页面
    {
      path: '/stock/stock',
      name: 'stock',
      component: () => import('@/views/stock/stockView.vue')
    }

  ]
})

export default router
