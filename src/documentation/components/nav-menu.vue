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

  .title2.mt0 Knowledge base
  w-list(:items="sections" nav color="primary" @item-click="onItemClick")

  .title2.mt4 UI components
  w-list(:items="components" nav color="primary" @item-click="onItemClick")
    template(#item="{ item }")
      span(v-html="item.label")
      w-tag.ml2.text-upper(v-if="item.disabled" xs color="red" outline) Coming soon
      w-tag.ml2.text-upper(v-if="item.inProgress" xs color="orange" outline) In progress
  .title3.mt4 External UI components
  p By the same author
  w-list(:items="externalComponents" nav color="primary" @item-click="onItemClick")
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
      { label: 'Browser support', route: 'browser-support' },
      { label: 'Customization', route: 'customization' },
      { label: 'Breakpoints', route: 'breakpoints' },
      {
        label: 'Layout',
        route: 'layout',
        children: [
          { label: 'Spaces', route: 'layout--spaces' },
          { label: 'Grid system', route: 'layout--grid-system' },
          { label: 'Flex', route: 'layout--flex' }
        ]
      },
      { label: 'Typography', route: 'typography' },
      { label: 'Colors', route: 'colors' },
      { label: 'Transitions', route: 'transitions' }
    ],
    components: [
      { label: 'Accordion', route: 'w-accordion' },
      { label: 'Alert', route: 'w-alert' },
      { label: 'App', route: 'w-app' },
      { label: 'Badge', route: 'w-badge' },
      { label: 'Button', route: 'w-button' },
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
      { label: 'Tabs', route: 'w-tabs', inProgress: true },
      { label: 'Tag', route: 'w-tag' },
      { label: 'Toolbar', route: 'w-toolbar' },
      { label: 'Tooltip', route: 'w-tooltip' },
      {
        label: 'Form elements',
        route: 'form',
        children: [
          { label: 'Checkbox', route: 'w-checkbox' },
          { label: 'Input', route: 'w-input' },
          { label: 'Form', route: 'w-form' },
          { label: 'Radio', route: 'w-radio' },
          { label: 'Select', route: 'w-select', disabled: true },
          { label: 'Slider', route: 'w-slider' },
          { label: 'Switch', route: 'w-switch' },
          { label: 'Textarea', route: 'w-textarea', disabled: true }
        ]
      }
    ],
    externalComponents: [
      { label: 'Calendar', route: 'calendar' },
      { label: 'Slideshow', route: 'slideshow' },
      { label: 'Splitter', route: 'splitter' }
    ],

  }),

  methods: {
    onItemClick () {
      this.$emit('update:drawerOpen', false)
      setTimeout(() => (document.querySelector('.w-app').scrollTop = 0), 100)
    }
  }
}
</script>

<style lang="scss">
div.nav-menu {
  width: 100%;
  min-width: 180px;
  max-width: 260px;
  border-right: 1px solid #ddd;
  overflow: auto;

  .w-list__item-label {
    padding: 6px;
    padding-left: 4 * $base-increment;
    @include default-transition;
    font-size: 1em;
    font-weight: normal;
    border-left: 2px solid transparent;
    &:before {display: none;}
    &:not(.w-list__item-label--disabled):focus:before,
    &:not(.w-list__item-label--disabled):hover:before {display: block;}

    &.router-link-active {
      border-left-color: $primary;
      font-weight: 700;
      &:before {display: block;opacity: 0.15;}
    }
    &:before {left: -2px;}
  }

  .w-tag {line-height: 1;padding: 2px 4px;}
}

.content-wrap > .nav-menu {
  position: absolute;
  left: 16px;
  top: 16px;
  bottom: 16px;
  padding-top: 24px;

  &--fixed {
    position: fixed;
    top: 30px;
    bottom: 0;
    padding-bottom: 24px;
  }
}

.nav-drawer .nav-menu {
  max-width: unset;
  padding: 3em 0 16px;
  margin-left: 12px;
  border-right: none;

  .close {
    position: absolute;
    top: 2 * $base-increment;
    right: 2 * $base-increment;
    z-index: 10;
  }
}

@media screen and (max-width: 800px) {
  div.nav-menu {max-width: 220px;}
}
</style>
