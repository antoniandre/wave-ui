<template lang="pug">
.nav-menu-wrap
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
    w-list(:items="sections" nav color="primary" @item-select="onItemClick")

    .title2.mt4 UI components
    w-list(:items="components" nav color="primary" @item-select="onItemClick")
      template(#item="{ item }")
        span(v-html="item.label")
        w-tag.ml2.text-upper(v-if="item.disabled" round xs color="red" outline) Coming soon
        w-tag.ml2.text-upper(v-if="item.inProgress" round xs color="orange" outline) In progress
    .title3.mt4 External UI components
    p By the same author
    w-list(:items="externalComponents" nav color="primary" @item-select="onItemClick")

    router-link.mt3.d-iblock(v-if="$waveui.breakpoint.xs" to="/release-notes" @click="onItemClick")
      w-icon.mr2 mdi mdi-update
      | Release notes
</template>

<script>
export default {
  props: {
    drawerOpen: { type: Boolean, default: false }
  },

  emits: ['update:drawerOpen'],

  data: () => ({
    sections: [
      { label: 'Why Wave UI?', route: '/why-wave-ui' },
      { label: 'Getting started', route: '/getting-started' },
      { label: 'Browser support', route: '/browser-support' },
      { label: 'Customization', route: '/customization' },
      { label: 'Breakpoints', route: '/breakpoints' },
      {
        label: 'Layout',
        route: '/layout',
        children: [
          { label: 'Spaces', route: '/layout--spaces' },
          { label: 'Grid system', route: '/layout--grid-system' },
          { label: 'Flex', route: '/layout--flex' }
        ]
      },
      { label: 'Typography', route: '/typography' },
      { label: 'Colors', route: '/colors' },
      { label: 'Shadows, borders &amp; radii', route: '/shadows-borders-radii' },
      { label: 'Transitions', route: '/transitions' }
    ],
    components: [
      { label: 'Accordion', route: '/w-accordion' },
      { label: 'Alert', route: '/w-alert' },
      { label: 'App', route: '/w-app' },
      { label: 'Badge', route: '/w-badge' },
      { label: 'Breadcrumbs', route: '/w-breadcrumbs' },
      { label: 'Button', route: '/w-button' },
      { label: 'Card', route: '/w-card' },
      // { label: 'Date picker', route: '/w-date-picker', disabled: true },
      { label: 'Dialog', route: '/w-dialog' },
      { label: 'Divider', route: '/w-divider' },
      { label: 'Drawer', route: '/w-drawer' },
      { label: 'Icon', route: '/w-icon' },
      { label: 'Image', route: '/w-image' },
      { label: 'List', route: '/w-list' },
      { label: 'Menu', route: '/w-menu' },
      { label: 'Notification', route: '/w-notification' },
      { label: 'Overlay', route: '/w-overlay' },
      // { label: 'Parallax', route: '/w-parallax', disabled: true },
      { label: 'Progress', route: '/w-progress' },
      { label: 'Rating', route: '/w-rating' },
      { label: 'Spinner', route: '/w-spinner' },
      { label: 'Tabs', route: '/w-tabs' },
      { label: 'Table', route: '/w-table', inProgress: true },
      { label: 'Tag', route: '/w-tag' },
      { label: 'Timeline', route: '/w-timeline' },
      { label: 'Toolbar', route: '/w-toolbar' },
      { label: 'Tooltip', route: '/w-tooltip' },
      {
        label: 'Form elements',
        route: '/form',
        children: [
          // { label: 'Autocomplete', route: '/w-autocomplete', inProgress: true },
          { label: 'Checkbox', route: '/w-checkbox' },
          { label: 'Input', route: '/w-input' },
          { label: 'Form', route: '/w-form' },
          { label: 'Radio', route: '/w-radio' },
          { label: 'Select', route: '/w-select' },
          { label: 'Slider', route: '/w-slider' },
          { label: 'Switch', route: '/w-switch' },
          { label: 'Steps', route: '/w-steps', disabled: true },
          { label: 'Textarea', route: '/w-textarea' }
        ]
      }
    ],
    externalComponents: [
      { label: 'Calendar', route: '/calendar' },
      { label: 'Slideshow', route: '/slideshow' },
      { label: 'Splitter', route: '/splitter' }
    ],

  }),

  methods: {
    onItemClick () {
      this.$emit('update:drawerOpen', false)
      setTimeout(() => {
        document.documentElement.scrollTop = document.querySelector('.content-wrap').offsetTop - 42
      }, 200)
    }
  }
}
</script>

<style lang="scss">
.nav-menu-wrap {
  width: 100%;
  min-width: 180px;
  max-width: 260px;
  border-right: 1px solid #ddd;
}

div.nav-menu {
  height: 90vh;
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

  .w-list__item--parent > .w-list__item-label {text-transform: uppercase;font-weight: bold;}

  .w-tag {padding: 2px 4px 1px;}
}

// Desktop left-side menu.
.content-wrap .nav-menu-wrap {padding-top: 24px;margin-right: 32px;}
.content-wrap .nav-menu {
  position: sticky;
  top: 60px;
}

// Mobile right-side menu.
.nav-drawer .nav-menu-wrap {
  max-width: unset;
  padding: 3em 0 16px;
  margin-left: 12px;
  border-right: none;

  .nav-menu {height: 100%;}

  .close {
    position: absolute;
    top: 2 * $base-increment;
    right: 2 * $base-increment;
    z-index: 10;
  }
}

@media screen and (max-width: 800px) {
  .nav-menu-wrap {max-width: 220px;}
}
</style>
