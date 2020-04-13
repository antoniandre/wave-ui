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
import WBtn from '@/wave-ui/w-btn'

export default {
  components: { WBtn }
}
</script>

<style lang="scss">
header {
  margin-top: 3rem;
  position: relative;
  height: 0;
  background: url('~@/assets/japanese-wave.png') left top;
  background-size: contain;
  margin-bottom: 1rem;
  padding-bottom: 20%;

  &:before {
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
