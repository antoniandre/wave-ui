<template lang="pug">
w-app
  w-drawer.nav-drawer(v-if="isMobile" v-model="drawerOpen" left)
    nav-menu(:drawer-open.sync="drawerOpen")
  header
    toolbar(:drawer-open.sync="drawerOpen")
  transition(name="fade")
    w-progress(v-if="loading" color="primary" tile absolute)
  .content-wrap.layout(:class="`page--${$route.name}`")
    nav-menu.navigation.mt-6(v-if="!isMobile" :drawer-open.sync="drawerOpen")
    transition(name="fade-page" mode="out-in")
      router-view.flex
  footer.mt-6.pa-3.layout.justify-end.align-center.caption
    | Made with
    w-icon.ml-1(sm) fa fa-html5
    w-icon.ml-1(sm) fa fa-css3
    w-icon.ml-1(sm) ion-md-heart

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
footer .ion-md-heart:hover {
  animation: heartbeat 1s infinite;
}


@keyframes heartbeat {
  0%, 30%, 60%, 100% {transform: scale(1);}
  15%, 45% {transform: scale(1.2);}
}
</style>
