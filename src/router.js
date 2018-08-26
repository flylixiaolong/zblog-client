import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/base/layout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '_home',
      redirect: '/home',
      component: Layout,
      meta: {
        hideInMenu: true,
        notCache: true
      },
      children: [
        {
          path: '/home',
          name: 'home',
          meta: {
            hideInMenu: true,
            title: '首页',
            notCache: true
          },
          component: () => import('@/views/main.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/about.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue')
    },
  ]
})
