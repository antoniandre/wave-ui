<template lang="pug">
w-toolbar(fixed)
  router-link.layout.shrink.fill-height.align-center.home-link(to="/")
    wave.wave-logo
    | Wave UI
  .spacer
  a.mr-2(href="https://github.com/antoniandre/wave-ui" target="_blank")
    w-icon ion-logo-github
  .caption Version 1.0
  w-button.ml-2(
    v-if="$waveUI.breakpoint === 'xs'"
    @click="$emit('update:drawerOpen', !drawerOpen)"
    large text round
    :icon="drawerOpen ? 'wi-cross' : 'ion-md-menu'")
</template>

<script>
import Wave from '@/assets/wave.svg?inline'

export default {
  props: {
    drawerOpen: { type: Boolean, default: false }
  },
  components: { Wave }
}
</script>

<style lang="scss">
.w-toolbar {
  .home-link {
    @include default-transition;
    &:focus {transform: scale(1.1);}
  }

  .wave-logo {
    height: 70%;
    margin-right: 1em;
    fill: #497ca2;
  }
}
</style>
