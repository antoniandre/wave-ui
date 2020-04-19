<template lang="pug">
.nav-menu.pa-3
  w-button.close(small @click="$emit('update:drawerOpen', false)" outline round color="primary" icon="ion-md-close")
  ul
    li
      router-link(:to="{ name: 'getting-started' }") Getting started
    li
      router-link(to="layout") Layout
    li
      router-link(to="typography") Typography
    li
      router-link(to="colors") Colors

  .title.mt-4 UI Components
  ul
    li(v-for="item in components" :key="item.route")
      router-link(:to="item.route") {{ item.label }}
</template>

<script>
export default {
  props: {
    drawerOpen: { type: Boolean, default: false }
  },

  data: () => ({
    components: [
      { label: 'Accordion', route: 'w-accordion' },
      { label: 'Alert', route: 'w-alert' },
      { label: 'App', route: 'w-app' },
      { label: 'Button', route: 'w-button' },
      { label: 'Calendar', route: 'w-calendar' },
      { label: 'Card', route: 'w-card' },
      { label: 'Dialog', route: 'w-dialog' },
      { label: 'Drawer', route: 'w-drawer' },
      { label: 'Icon', route: 'w-icon' },
      { label: 'Menu', route: 'w-menu' },
      { label: 'Notification', route: 'w-notification' },
      { label: 'Overlay', route: 'w-overlay' },
      { label: 'Progress', route: 'w-progress' },
      { label: 'Rating', route: 'w-rating' },
      { label: 'Slideshow', route: 'w-slideshow' },
      { label: 'Tabs', route: 'w-tabs' },
      { label: 'Tag', route: 'w-tag' },
      { label: 'Toolbar', route: 'w-toolbar' },
      { label: 'Tooltip', route: 'w-tooltip' }
    ]
  })
}
</script>

<style lang="scss">
.nav-menu {
  .close {
    position: absolute;
    top: 2 * $base-increment;
    right: 2 * $base-increment;
  }
}
</style>