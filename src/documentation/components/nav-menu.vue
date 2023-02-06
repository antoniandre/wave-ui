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
    w-tree.mt3(
      :data="sections"
      selectable
      @click="onItemClick"
      branch-icon="wi-check"
      leaf-icon="wi-check")

    .title2.mt6 UI components
    w-tree(:data="components" selectable @click="onItemClick")
      template(#item="{ item }")
        span(v-html="item.label")
        w-tag.ml2.text-upper(v-if="item.disabled" round xs color="red" outline) Coming soon
        w-tag.ml2.text-upper(v-if="item.inProgress" round xs color="orange" outline) In progress
    .title3.mt4 External UI components
    p By the same author
    w-tree(:data="externalComponents" selectable @click="onItemClick")

    router-link.mt3.d-iblock(v-if="$waveui.breakpoint.xs" to="/release-notes" @click.native="onItemClick")
      w-icon.mr2 mdi mdi-update
      | Release notes
</template>

<script>
import { UIComponents } from '@/router'

export default {
  props: {
    drawerOpen: { type: Boolean, default: false }
  },

  emits: ['update:drawerOpen'],

  data: () => ({
    sections: [
      { label: 'Why Wave UI?', route: '/why-wave-ui', icon: 'mdi mdi-help-circle-outline' },
      { label: 'Getting started', route: '/getting-started', icon: 'mdi mdi-play-circle-outline' },
      { label: 'Browser support', route: '/browser-support', icon: 'mdi mdi-check-circle-outline' },
      { label: 'Customization', route: '/customization', icon: 'mdi mdi-tune' },
      { label: 'Breakpoints', route: '/breakpoints', icon: 'mdi mdi-format-horizontal-align-center' },
      {
        label: 'Layout',
        route: '/layout',
        icon: 'mdi mdi-format-list-text',
        children: [
          { label: 'Spaces', route: '/layout--spaces', icon: 'mdi mdi-keyboard-space' },
          { label: 'Grid system (flexbox)', route: '/layout--grid-system', icon: 'mdi mdi-view-grid-outline' },
          { label: 'Grid system (grid)', route: '/layout--simplified-grid-system', icon: 'mdi mdi-view-grid-outline' },
          { label: 'Flex', route: '/layout--flex', icon: 'mdi mdi-star' },
          { label: 'Other CSS classes', route: 'layout--other-css-classes', icon: 'mdi mdi-toolbox-outline' }
        ]
      },
      { label: 'Typography', route: '/typography', icon: 'mdi mdi-format-font' },
      { label: 'Colors', route: '/colors', icon: 'mdi mdi-palette' },
      { label: 'Themes', route: '/themes', icon: 'mdi mdi-weather-night' },
      { label: 'Shadows, borders & radii', route: '/shadows-borders-radii', icon: 'mdi mdi-tools' },
      { label: 'Transitions', route: '/transitions', icon: 'mdi mdi-star-shooting-outline' }
    ],
    components: [
      ...UIComponents.filter(item => !item.formElement).map(item => ({ ...item, route: `/w-${item.id}` })),
      {
        label: 'Form elements',
        route: '/form',
        children: [
          ...UIComponents.filter(item => item.formElement).map(item => ({ ...item, route: `/w-${item.id}` }))
        ]
      }
    ],
    externalComponents: [
      { label: 'Calendar', route: '/calendar' },
      { label: 'Slideshow', route: '/slideshow' },
      { label: 'Splitter', route: '/splitter' }
    ]
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
  position: relative;
  width: 100%;
  min-width: 180px;
  max-width: 260px;
  margin-left: -12px;
  padding-left: 30px;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    border-right: 2px solid #f2f2f2;
    z-index: -1;
  }
}

div.nav-menu {
  height: 90vh;
  overflow: auto;

  .title2 {margin-left: 8px;}

  .w-tree__item {margin-left: 0;}
  .w-tree__item-label {
    display: flex;
    padding: 5px 6px 5px 16px;
    font-size: 1.02rem;
    font-weight: normal;
    border-right: 0 solid $primary;
    color: $primary;
    transition: $transition-duration ease-in-out, border-width 0s;

    &:before {
      content: '';
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: currentColor;
      opacity: 0.06;
      border-radius: 99em 0 0 99em;
    }
    &:not(.w-tree__item-label--disabled):focus:before,
    &:not(.w-tree__item-label--disabled):hover:before {display: block;}

    &.router-link-active {
      border-right-width: 3px;
      font-weight: 700;

      &:before {
        display: block;
        opacity: 0.12;
      }
    }
  }

  .w-tree__item-icon {
    color: rgba(20, 105, 184, 0.5);
    font-size: 1.5em;
    margin-right: 6px;
  }

  .w-tree__item--branch > .w-tree__item-label {text-transform: uppercase;font-weight: bold;}

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
  .nav-menu-wrap {max-width: 220px;padding-left: 0;}
}
</style>
