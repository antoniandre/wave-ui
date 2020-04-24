<template lang="pug">
w-app
  toolbar(:drawer-open.sync="drawerOpen")
  w-drawer(v-if="isMobile" v-model="drawerOpen" left)
    left-drawer(:drawer-open.sync="drawerOpen")
  header
  .content-wrap.layout(:class="`page--${$route.name}`")
    left-drawer.navigation.mt-6(v-if="!isMobile" :drawer-open.sync="drawerOpen")
    router-view.flex
</template>

<script>
import Toolbar from '@/documentation/components/toolbar'
import LeftDrawer from '@/documentation/components/left-drawer'
import '@/documentation/scss/index.scss'

export default {
  components: { Toolbar, LeftDrawer },
  data: () => ({
    drawerOpen: false
  }),

  computed: {
    isMobile () {
      return this.$waveUI.breakpoint === 'xs'
    }
  }
}
</script>

<style lang="scss">
header {
  margin-top: 12 * $base-increment;
  position: relative;
  max-height: 320px;
  overflow: hidden;
  padding-top: 8px;

  &:before {
    content: '';
    display: block;
    padding-bottom: 23.34%;
    background: url('~@/assets/japanese-wave.png') fixed no-repeat 0 57px;
    background-size: contain;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url('~@/assets/wave-pattern.svg') fixed left;
    background-size: 300px;
    z-index: -1;
    opacity: 0.5;
  }
}

@media screen and (min-width: 1500px) {
  header:before {
    padding-bottom: 14%;
    background-attachment: initial;
    background-repeat: repeat;
    background-position: initial;
  }
}
</style>
