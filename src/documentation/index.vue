<template lang="pug">
w-app
  toolbar(:drawer-open.sync="drawerOpen")
  w-drawer(v-if="isMobile" v-model="drawerOpen" left)
    left-drawer(:drawer-open.sync="drawerOpen")
  header
  .content-wrap.layout(:class="`page--${$route.name}`")
    left-drawer.navigation.pt-6(v-if="!isMobile" :drawer-open.sync="drawerOpen")
    router-view
</template>

<script>
import Toolbar from '@/documentation/components/toolbar'
import LeftDrawer from '@/documentation/components/left-drawer'
import '@/documentation/scss/index.scss'

export default {
  components: { Toolbar, LeftDrawer },
  data: () => ({
    drawerOpen: false,
    screenWidth: 0
  }),

  methods: {
    onResize (e) {
      this.screenWidth = e.target.innerWidth
    }
  },

  computed: {
    isMobile () {
      return this.screenWidth < 900
    }
  },

  mounted () {
    window.addEventListener('resize', this.onResize)
    this.screenWidth = window.innerWidth
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
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
    padding-bottom: 23.3%;
    background: url('~@/assets/japanese-wave.png');
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

.navigation {
  width: 100%;
  max-width: 260px;
  border-right: 1px solid #ddd;
  margin-right: 4rem;
}

@media screen and (min-width: 1500px) {
  header:before {padding-bottom: 14%;}
}
</style>
