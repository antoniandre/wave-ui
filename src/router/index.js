import Vue from 'vue'
import VueRouter from 'vue-router'
import GettingStarted from '@/documentation/views/getting-started/index.vue'
import Home from '@/documentation/views/home.vue'

Vue.use(VueRouter)
// The loading state of Vue Router is appended to $router, so a
// spinner can be shown while loading. This status needs to be reactive, it is
// set to true on beforeRoute and false on afterRoute.
const status = Vue.observable({ loading: true })

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/why-wave-ui',
    name: 'why-wave-ui',
    component: () => import('@/documentation/views/why-wave-ui.vue')
  },
  {
    path: '/getting-started',
    name: 'getting-started',
    component: GettingStarted
  },
  {
    path: '/browser-support',
    name: 'browser-support',
    component: () => import('@/documentation/views/browser-support.vue')
  },
  {
    path: '/customization',
    name: 'customization',
    component: () => import('@/documentation/views/customization.vue')
  },
  {
    path: '/breakpoints',
    name: 'breakpoints',
    component: () => import('@/documentation/views/breakpoints.vue')
  },
  {
    path: '/layout',
    name: 'layout',
    redirect: '/layout--spaces'
  },
  {
    path: '/layout--spaces',
    name: 'layout-spaces',
    component: () => import('@/documentation/views/layout-spaces.vue')
  },
  {
    path: '/layout--grid-system',
    name: 'layout-grid-system',
    component: () => import('@/documentation/views/layout-grid-system.vue')
  },
  {
    path: '/layout--flex',
    name: 'layout-flex',
    component: () => import('@/documentation/views/layout-flex.vue')
  },
  {
    path: '/typography',
    name: 'typography',
    component: () => import('@/documentation/views/typography.vue')
  },
  {
    path: '/colors',
    name: 'colors',
    component: () => import('@/documentation/views/colors.vue')
  },
  {
    path: '/shadows-borders-radii',
    name: 'shadows-borders-radii',
    component: () => import('@/documentation/views/shadows-borders-radii.vue')
  },
  {
    path: '/transitions',
    name: 'transitions',
    component: () => import('@/documentation/views/transitions.vue')
  },
  {
    path: '/release-notes',
    name: 'release-notes',
    component: () => import('@/documentation/views/release-notes.vue')
  },
  {
    path: '/backers',
    name: 'backers',
    component: () => import('@/documentation/views/backers.vue')
  },
  {
    path: '/form',
    name: 'form-elements',
    redirect: '/w-form'
  },
  {
    path: '/w-list',
    name: 'w-list',
    component: () => import('@/documentation/views/ui-components/list/index.vue'),
    children: [
      {
        path: ':item',
        name: 'w-list-item',
        component: () => import('@/documentation/views/ui-components/list/item.vue'),
        props: true
      }
    ]
  }
]

const components = [
  { id: 'accordion', label: 'Accordion' },
  { id: 'alert', label: 'Alert' },
  { id: 'app', label: 'App' },
  { id: 'breadcrumbs', label: 'Breadcrumbs' },
  { id: 'button', label: 'Button' },
  { id: 'badge', label: 'Badge' },
  { id: 'card', label: 'Card' },
  { id: 'checkbox', label: 'Checkbox' },
  { id: 'date-picker', label: 'Date picker' },
  { id: 'dialog', label: 'Dialog' },
  { id: 'divider', label: 'Divider' },
  { id: 'drawer', label: 'Drawer' },
  { id: 'form', label: 'Form' },
  { id: 'icon', label: 'Icon' },
  { id: 'image', label: 'Image' },
  { id: 'input', label: 'Input' },
  { id: 'list', label: 'List' },
  { id: 'menu', label: 'Menu' },
  { id: 'notification', label: 'Notification' },
  { id: 'overlay', label: 'Overlay' },
  { id: 'parallax', label: 'Parallax' },
  { id: 'progress', label: 'Progress' },
  { id: 'rating', label: 'Rating' },
  { id: 'select', label: 'Select' },
  { id: 'slider', label: 'Slider' },
  { id: 'spinner', label: 'Spinner' },
  { id: 'steps', label: 'Steps' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'switch', label: 'Switch' },
  { id: 'radio', label: 'Radio' },
  { id: 'tabs', label: 'Tabs' },
  { id: 'table', label: 'Table' },
  { id: 'tag', label: 'Tag' },
  { id: 'textarea', label: 'Textarea' },
  { id: 'toolbar', label: 'Toolbar' },
  { id: 'tooltip', label: 'Tooltip' }
]

components.forEach(item => {
  routes.push({
    path: item.path || `/w-${item.id}`,
    name: item.id,
    component: () => import(`../documentation/views/ui-components/${item.id}/index.vue`)
  })
})

const externalComponents = [
  { id: 'calendar', label: 'Calendar', path: '/calendar' },
  { id: 'slideshow', label: 'Slideshow', path: '/slideshow' },
  { id: 'splitter', label: 'Splitter', path: '/splitter' }
]

externalComponents.forEach(item => {
  routes.push({
    path: item.path || `/w-${item.id}`,
    name: item.id,
    component: () => import(`../documentation/views/ui-components/${item.id}.vue`)
  })
})

// Keep this route last!
routes.push({
  path: '/*',
  name: 'not-found',
  component: () => import('@/documentation/views/404.vue')
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

Object.defineProperty(router, 'status', { get: () => status, set: value => { status.loading = value } })

router.beforeEach((to, from, next) => {
  // Update through the property observer for reactivity.
  router.status = true
  next()
})

router.afterEach(() => (router.status = false))

export default router
