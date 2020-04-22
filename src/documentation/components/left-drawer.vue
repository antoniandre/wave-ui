<template lang="pug">
.nav-menu
  w-button.close(small @click="$emit('update:drawerOpen', false)" outline round color="primary" icon="ion-md-close")
  w-list(:items="sections" nav color="primary")

  .title.mt-4 UI Components
  w-list(:items="components" nav color="primary")
</template>

<script>
export default {
  props: {
    drawerOpen: { type: Boolean, default: false }
  },

  data: () => ({
    sections: [
      { label: 'Getting started', route: { name: 'getting-started' } },
      { label: 'Breakpoints', route: 'breakpoints' },
      { label: 'Layout', route: 'layout' },
      { label: 'Typography', route: 'typography' },
      { label: 'Colors', route: 'colors' },
    ],
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
      { label: 'List', route: 'w-list' },
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

  .w-list__item a {
    padding-left: 4 * $base-increment;
    transition: 0.2s;
    font-size: 1.1em;
    border-left: 2px solid transparent;

    &.router-link-exact-active {border-left-color: $primary;}
  }
}
</style>