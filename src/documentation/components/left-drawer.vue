<template lang="pug">
.nav-menu.pa-3
  w-btn.close(small @click="$emit('update:drawerOpen', false)" outline round color="primary" icon="ion-md-close")
  ul
    li
      router-link(:to="{ name: 'getting-started' }") Getting started
    li
      router-link(to="layout") Layout
    li
      router-link(to="typography") Typography
    li
      router-link(to="colors") Colors

  .title.mt-4 Component
  ul
    li
      router-link(to="buttons") Buttons
    li
      router-link(to="drawers") Drawers
    li
      router-link(to="icons") Icons
    li
      router-link(to="overlays") Overlays
    li
      router-link(to="loaders") Loaders / spinners
</template>

<script>
export default {
  props: {
    drawerOpen: { type: Boolean, default: false }
  }
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