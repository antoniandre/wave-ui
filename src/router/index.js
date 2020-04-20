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
  { label: 'Accordion', id: 'accordion' },
  { label: 'Alert', id: 'alert' },
  { label: 'App', id: 'app' },
  { label: 'Button', id: 'button' },
  { label: 'Calendar', id: 'calendar' },
  { label: 'Card', id: 'card' },
  { label: 'Dialog', id: 'dialog' },
  { label: 'Drawer', id: 'drawer' },
  { label: 'Icon', id: 'icon' },
  { label: 'Menu', id: 'menu' },
  { label: 'Notification', id: 'notification' },
  { label: 'Overlay', id: 'overlay' },
  { label: 'Progress', id: 'progress' },
  { label: 'Rating', id: 'rating' },
  { label: 'Slideshow', id: 'slideshow' },
  { label: 'Toolbar', id: 'toolbar' },
  { label: 'Tabs', id: 'tabs' },
  { label: 'Tag', id: 'tag' },
  { label: 'Tooltip', id: 'tooltip' }
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
