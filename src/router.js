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
      path: '/tt',
      name: 'timetable',
      component: () => import('./views/TT.vue')
    },
    {
      path: '/dtm',
      name: 'dtm',
      component: () => import('./views/DTM.vue')
    },
    {
      path: '/access',
      name: 'access',
      component: () => import('./views/Access.vue')
    },
    {
      path: '*',
      name: 'Not Found',
      component: () => import('./views/404.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y:0}
    }
  }
})
