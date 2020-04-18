<template lang="pug">
.nav-menu.pa-3
  w-btn.close(small @click="$emit('update:drawerOpen', false)" outline round color="primary" icon="ion-md-close")
  router-link(:to="{ name: 'getting-started' }") Getting started

  .title Component
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
    top: 0.5rem;
    right: 0.5rem;
  }
}
</style>