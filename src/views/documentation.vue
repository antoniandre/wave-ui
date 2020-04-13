<template lang="pug">
div
  w-btn(color="primary" dark) Welcome
  w-btn(color="primary" dark x-small) x-small
  w-btn(color="primary" dark small) small
  w-btn(color="primary" dark medium) medium
  w-btn(color="primary" dark large) large
  w-btn(color="primary" dark x-large) x-large
</template>

<script>
import WBtn from '@/components/w-btn'

export default {
  components: { WBtn }
}
</script>

<style lang="scss">
header {
  position: relative;
  height: 40vh;
  background: url('~@/assets/the-great-wave-off.png') left bottom;
  background-size: contain;
  margin-bottom: 1rem;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 25vh;
    right: 0;
    // background: linear-gradient(to right, transparent 0%, #fff 15%);
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url('~@/assets/wave-pattern.svg') bottom;
    background-size: 45%;
    z-index: -1;
  }
}
</style>
