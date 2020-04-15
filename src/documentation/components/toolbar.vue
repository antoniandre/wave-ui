<template lang="pug">
.toolbar
  wave.wave-logo
  | Wave UI
  .spacer
  router-link.ml-2(to="/") Home
  router-link.ml-2(to="/about") About
</template>

<script>
import Wave from '@/assets/wave.svg?inline'

export default {
  components: { Wave }
}
</script>

<style lang="scss">
.toolbar {
  height: 3rem;
  line-height: 3rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  z-index: 10;

  .wave-logo {
    width: 3em;
    margin-right: 1em;
    fill: #497ca2;
  }
}
</style>