<template lang="pug">
.nav-menu
  w-button.close(
    v-if="$waveui.breakpoint.xs"
    @click="$emit('update:drawerOpen', false)"
    sm
    outline
    round
    color="primary"
    icon="wi-cross")
  w-list(:items="sections" nav color="primary" @item-click="$emit('update:drawerOpen', false)")

  .title.mt-4 UI Components

  w-list(:items="components" nav color="primary" @item-click="$emit('update:drawerOpen', false)")
    template(#item="{ item }")
      span(v-html="item.label")
      w-tag.ml-2.px-1(v-if="item.disabled" bg-color="red" color="white") Coming soon
</template>

<script>
export default {
  props: {
    drawerOpen: { type: Boolean, default: false }
  },

  data: () => ({
    sections: [
      { label: 'Why Wave UI?', route: { name: 'why-wave-ui' } },
      { label: 'Getting started', route: 'getting-started' },
      { label: 'Customization', route: 'customization' },
      { label: 'Breakpoints', route: 'breakpoints' },
      { label: 'Layout - spaces', route: 'layout--spaces' },
      { label: 'Layout - flex', route: 'layout--flex' },
      { label: 'Typography', route: 'typography' },
      { label: 'Colors', route: 'colors' },
      { label: 'Transitions', route: 'transitions' }
    ],
    components: [
      { label: 'Accordion', route: 'w-accordion', disabled: true },
      { label: 'Alert', route: 'w-alert' },
      { label: 'App', route: 'w-app' },
      { label: 'Badge', route: 'w-badge' },
      { label: 'Button', route: 'w-button' },
      { label: 'Calendar', route: 'w-calendar' },
      { label: 'Card', route: 'w-card' },
      { label: 'Dialog', route: 'w-dialog' },
      { label: 'Divider', route: 'w-divider' },
      { label: 'Drawer', route: 'w-drawer' },
      { label: 'Icon', route: 'w-icon' },
      { label: 'List', route: 'w-list' },
      { label: 'Menu', route: 'w-menu' },
      { label: 'Notification', route: 'w-notification' },
      { label: 'Overlay', route: 'w-overlay' },
      { label: 'Progress', route: 'w-progress' },
      { label: 'Rating', route: 'w-rating', disabled: true },
      { label: 'Slideshow', route: 'w-slideshow', disabled: true },
      { label: 'Tabs', route: 'w-tabs', disabled: true },
      { label: 'Tag', route: 'w-tag' },
      { label: 'Toolbar', route: 'w-toolbar' },
      { label: 'Tooltip', route: 'w-tooltip' },
      {
        label: 'Form elements',
        route: 'form',
        children: [
          { label: 'Checkbox', route: 'w-checkbox' },
          { label: 'Input', route: 'w-input' },
          { label: 'Form', route: 'w-form', disabled: true },
          { label: 'Radio', route: 'w-radio' },
          { label: 'Select', route: 'w-select', disabled: true },
          { label: 'Slider', route: 'w-slider', disabled: true },
          { label: 'Switch', route: 'w-switch' },
          { label: 'Textarea', route: 'w-textarea', disabled: true }
        ]
      }
    ]
  })
}
</script>

<style lang="scss">
div.nav-menu {
  width: 100%;
  min-width: 180px;
  max-width: 260px;
  border-right: 1px solid #ddd;

  .w-list__item-label {
    padding: 6px;
    padding-left: 4 * $base-increment;
    @include default-transition;
    font-size: 1em;
    font-weight: normal;
    border-left: 2px solid transparent;
    &:before {display: none;}
    &:focus:before, &:hover:before {display: block;}

    &.router-link-active {
      border-left-color: $primary;
      font-weight: 700;
      &:before {display: block;opacity: 0.15;}
    }
    &:before {left: -2px;}
  }
}

.nav-drawer .nav-menu {
  max-width: unset;
  padding-top: 3em;
  margin-left: 12px;
  border-right: none;
  overflow: auto;

  .close {
    position: absolute;
    top: 2 * $base-increment;
    right: 2 * $base-increment;
    z-index: 10;
  }
}
</style>
