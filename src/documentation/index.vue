<template lang="pug">
w-app.fill-height.w-flex.column
  w-drawer.nav-drawer(v-if="isMobile" v-model="drawerOpen" left)
    nav-menu(:drawer-open.sync="drawerOpen")
  header.no-shrink
    toolbar(:drawer-open.sync="drawerOpen")
  transition(name="fade")
    w-progress(v-if="loading" color="primary" tile absolute)
  .content-wrap.w-flex(:class="`page--${$route.name}`")
    nav-menu.navigation.mt-6(v-if="!isMobile" :drawer-open.sync="drawerOpen")
    transition(name="fade-page" mode="out-in")
      router-view.grow
  footer.pa-3.w-flex.justify-end.align-center.caption.no-grow
    | Made with
    w-icon.ml-1(sm) mdi mdi-vuejs
    w-icon.ml-1(sm) mdi mdi-language-css3
    w-icon.ml-1(sm) mdi mdi-language-html5
    w-icon.ml-1(sm) mdi mdi-sass
    w-icon.ml-1.heart(sm) mdi mdi-heart

</template>

<script>
import Toolbar from '@/documentation/components/toolbar'
import NavMenu from '@/documentation/components/nav-menu'
import '@/documentation/scss/index.scss'

export default {
  components: { Toolbar, NavMenu },
  data: () => ({
    drawerOpen: false
  }),

  computed: {
    loading () {
      // Loading status is appended manually in router file.
      return this.$router.status.loading
    },
    isMobile () {
      return this.$waveUI.breakpoint.xs
    }
  }
}
</script>

<style lang="scss">
footer .heart:hover {
  animation: heartbeat 1s infinite;
}


@keyframes heartbeat {
  0%, 30%, 60%, 100% {transform: scale(1);}
  15%, 45% {transform: scale(1.2);}
}
</style>
