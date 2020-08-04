<template lang="pug">
w-toolbar.main-toolbar(fixed)
  router-link.primary.w-flex.no-grow.fill-height.align-center.home-link(to="/")
    w-icon.wave-logo.mr3(size="3em") wi-wave
    | Wave UI
  .spacer
  w-tooltip(z-index="20")
    template(#activator="{ on }")
      a.mr2(v-on="on" href="https://github.com/antoniandre/wave-ui" target="_blank")
        w-icon(md) mdi mdi-github
    .size--xs.text-nowrap View the project on Github
  .caption Version 1.0 Beta
  w-button.ml2.mr-1.hamburger-menu(
    v-if="$waveui.breakpoint.xs"
    @click="$emit('update:drawerOpen', !drawerOpen)"
    large text round
    :icon="drawerOpen ? 'wi-cross' : 'mdi mdi-menu'")
</template>

<script>

export default {
  props: {
    drawerOpen: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss">
div.main-toolbar {
  background-color: rgba(255, 255, 255, 0.9);
  height: 42px;
  padding-top: 0;
  padding-bottom: 0;
  z-index: 200;

  .home-link {
    @include default-transition;
    &:hover {transform: scale(1.05);}
    &:focus {transform: scale(1.1);}
  }

  .wave-logo {color: #497ca2;}

  .hamburger-menu .w-icon {width: 26px;height: 26px;}
}
</style>
