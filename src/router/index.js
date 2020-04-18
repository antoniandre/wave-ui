import Vue from 'vue'
import VueRouter from 'vue-router'
import GetStarted from '@/documentation/views/get-started'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'get-started',
    component: GetStarted
  },
  {
    path: '/app',
    name: 'app',
    component: () => import(/* webpackChunkName: "doc-app" */ '@/documentation/views/app.vue')
  },
  {
    path: '/buttons',
    name: 'buttons',
    component: () => import(/* webpackChunkName: "buttons" */ '@/documentation/views/buttons.vue')
  },
  {
    path: '/drawers',
    name: 'drawers',
    component: () => import(/* webpackChunkName: "drawers" */ '@/documentation/views/drawers.vue')
  },
  {
    path: '/icons',
    name: 'icons',
    component: () => import(/* webpackChunkName: "icons" */ '@/documentation/views/icons.vue')
  },
  {
    path: '/loaders',
    name: 'loaders',
    component: () => import(/* webpackChunkName: "loaders" */ '@/documentation/views/loaders.vue')
  },
  {
    path: '/overlays',
    name: 'overlays',
    component: () => import(/* webpackChunkName: "overlays" */ '@/documentation/views/overlays.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
