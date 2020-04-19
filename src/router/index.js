import Vue from 'vue'
import VueRouter from 'vue-router'
import GettingStarted from '@/documentation/views/getting-started'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'getting-started',
    component: GettingStarted
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
    path: '/colors',
    name: 'colors',
    component: () => import(/* webpackChunkName: "colors" */ '@/documentation/views/colors.vue')
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
    path: '/layout',
    name: 'layout',
    component: () => import(/* webpackChunkName: "layout" */ '@/documentation/views/layout.vue')
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
  },
  {
    path: '/toolbars',
    name: 'toolbars',
    component: () => import(/* webpackChunkName: "toolbars" */ '@/documentation/views/toolbars.vue')
  },
  {
    path: '/typography',
    name: 'typography',
    component: () => import(/* webpackChunkName: "typography" */ '@/documentation/views/typography.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
