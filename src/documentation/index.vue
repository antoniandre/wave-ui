<template lang="pug">
w-app
  toolbar(:drawer-open.sync="drawerOpen")
  w-drawer(v-model="drawerOpen" left)
    left-drawer(:drawer-open.sync="drawerOpen")
  header
  .content-wrap(:class="`page--${$route.name}`")
    router-view
</template>

<script>
import Toolbar from '@/documentation/components/toolbar'
import LeftDrawer from '@/documentation/components/left-drawer'
import '@/documentation/scss/index.scss'

export default {
  components: { Toolbar, LeftDrawer },
  data: () => ({
    drawerOpen: false
  })
}
</script>

<style lang="scss">
header {
  margin-top: 12 * $base-increment;
  position: relative;
  background: url('~@/assets/japanese-wave.png') left top;
  background-size: contain;
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
