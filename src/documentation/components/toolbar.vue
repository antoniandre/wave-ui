<template lang="pug">
.toolbar
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
.toolbar {
  height: 3 * $base-font-size;
  line-height: 3 * $base-font-size;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 4 * $base-increment;
  padding-right: 4 * $base-increment;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  z-index: 10;

  .wave-logo {
    height: 60%;
    margin-right: 1em;
    fill: #497ca2;
  }
}
</style>