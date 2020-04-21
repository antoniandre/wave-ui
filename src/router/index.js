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
    path: '/breakpoints',
    name: 'breakpoints',
    component: () => import(/* webpackChunkName: "breakpoints" */ '@/documentation/views/breakpoints.vue')
  },
  {
    path: '/colors',
    name: 'colors',
    component: () => import(/* webpackChunkName: "colors" */ '@/documentation/views/colors.vue')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import(/* webpackChunkName: "layout" */ '@/documentation/views/layout.vue')
  },
  {
    path: '/typography',
    name: 'typography',
    component: () => import(/* webpackChunkName: "typography" */ '@/documentation/views/typography.vue')
  }
]

const components = [
  { id: 'accordion', label: 'Accordion' },
  { id: 'alert', label: 'Alert' },
  { id: 'app', label: 'App' },
  { id: 'button', label: 'Button' },
  { id: 'calendar', label: 'Calendar' },
  { id: 'card', label: 'Card' },
  { id: 'dialog', label: 'Dialog' },
  { id: 'drawer', label: 'Drawer' },
  { id: 'icon', label: 'Icon' },
  { id: 'list', label: 'List' },
  { id: 'menu', label: 'Menu' },
  { id: 'notification', label: 'Notification' },
  { id: 'overlay', label: 'Overlay' },
  { id: 'progress', label: 'Progress' },
  { id: 'rating', label: 'Rating' },
  { id: 'slideshow', label: 'Slideshow' },
  { id: 'toolbar', label: 'Toolbar' },
  { id: 'tabs', label: 'Tabs' },
  { id: 'tag', label: 'Tag' },
  { id: 'tooltip', label: 'Tooltip' }
]

components.forEach(item => {
  routes.push({
    path: `/w-${item.id}`,
    name: item.id,
    component: () => import(/* webpackChunkName: "[request]" */ `@/documentation/views/ui-components/${item.id}.vue`)
  })
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
