<template lang="pug">
w-toolbar(fixed)
  wave.wave-logo
  | Wave UI
  .spacer
  router-link.ml-2(to="/") Home
  router-link.ml-2(to="/about") About
  w-btn.ml-2(@click="$emit('update:drawerOpen', !drawerOpen)" large text round :icon="drawerOpen ? 'ion-md-close' : 'ion-md-menu'")
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
  // height: 3 * $base-font-size;
  // line-height: 3 * $base-font-size;

  .wave-logo {
    height: 70%;
    margin-right: 1em;
    fill: #497ca2;
  }
}
</style>