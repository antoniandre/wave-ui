<template lang="pug">
w-app
  toolbar(:drawer-open.sync="drawerOpen")
  w-drawer(v-if="isMobile" v-model="drawerOpen" left)
    left-drawer(:drawer-open.sync="drawerOpen")
  header
  transition(name="fade")
    w-progress(v-if="loading" color="primary" tile absolute)
  .content-wrap.layout(:class="`page--${$route.name}`")
    left-drawer.navigation.mt-6(v-if="!isMobile" :drawer-open.sync="drawerOpen")
    transition(name="fade-page" mode="out-in")
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
