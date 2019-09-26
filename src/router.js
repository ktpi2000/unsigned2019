import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dj',
      component: () => import('./views/DJ.vue')
    },
    {
      path: '*',
      name: 'Not Found',
      component: () => import('./views/404.vue')
    }
  ]
})
