<template lang="pug">
.nav-menu
  w-button.close(
    v-if="$waveUI.breakpoint.xs"
    @click="$emit('update:drawerOpen', false)"
    sm
    outline
    round
    color="primary"
    icon="wi-cross")
  w-list(:items="sections" nav color="primary")
    //- template(v-slot:item="{ item }")
      router-link(v-if="!item.disabled" :to="item.route" v-html="item.label")
      span(v-else v-html="item.label")

  .title.mt-4 UI Components
  w-list(:items="components" nav color="primary")
    //- template(v-slot:item="{ item }")
      router-link(v-if="!item.disabled" :to="item.route" v-html="item.label")
      span(v-else v-html="item.label")
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
      { label: 'Accordion', route: 'w-accordion', disabled: true },
      { label: 'Alert', route: 'w-alert' },
      { label: 'App', route: 'w-app' },
      { label: 'Button', route: 'w-button' },
      { label: 'Calendar', route: 'w-calendar', disabled: true },
      { label: 'Card', route: 'w-card' },
      { label: 'Dialog', route: 'w-dialog' },
      { label: 'Drawer', route: 'w-drawer' },
      { label: 'Icon', route: 'w-icon' },
      { label: 'List', route: 'w-list' },
      { label: 'Menu', route: 'w-menu', disabled: true },
      { label: 'Notification', route: 'w-notification', disabled: true },
      { label: 'Overlay', route: 'w-overlay' },
      { label: 'Progress', route: 'w-progress' },
      { label: 'Rating', route: 'w-rating', disabled: true },
      { label: 'Slideshow', route: 'w-slideshow', disabled: true },
      { label: 'Tabs', route: 'w-tabs', disabled: true },
      { label: 'Tag', route: 'w-tag' },
      { label: 'Toolbar', route: 'w-toolbar' },
      { label: 'Tooltip', route: 'w-tooltip', disabled: true },
      { label: 'Form elements', route: '#form', disabled: true }
    ]
  })
}
</script>

<style lang="scss">
.nav-menu {
  width: 100%;
  min-width: 180px;
  max-width: 260px;
  border-right: 1px solid #ddd;
  margin-right: 4rem;

  .w-list__item a, .w-list__item span {
    padding: 6px;
    padding-left: 4 * $base-increment;
    @include default-transition;
    font-size: 1em;
    border-left: 2px solid transparent;

    &.router-link-exact-active {border-left-color: $primary;}
  }
}

.nav-drawer .nav-menu {
  max-width: unset;
  margin-top: 3em;
  margin-left: 12px;
  margin-right: 0;
  border-right: none;

  .close {
    position: absolute;
    top: 2 * $base-increment;
    right: 2 * $base-increment;
  }
}
</style>
