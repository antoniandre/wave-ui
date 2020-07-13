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
      router-view.main-content.grow
  footer.pa-3.w-flex.justify-end.align-center.caption.no-grow
    | Made with
    w-tooltip(top)
      template(#activator="{ on }")
        w-icon.ml-1(v-on="on" sm) mdi mdi-vuejs
      | Vue.js
    w-tooltip(top)
      template(#activator="{ on }")
        w-icon.ml-1(v-on="on" sm) mdi mdi-language-css3
      | CSS 3
    w-tooltip(top)
      template(#activator="{ on }")
        w-icon.ml-1(v-on="on" sm) mdi mdi-language-html5
      span.text-nowrap Html 5 &amp; Pug
    w-tooltip(top)
      template(#activator="{ on }")
        w-icon.ml-1(v-on="on" sm) mdi mdi-sass
      | Sass
    w-tooltip(top)
      template(#activator="{ on }")
        w-icon.ml-1.heart(v-on="on" sm) mdi mdi-heart
      | Love

</template>

<script>
import Vue from 'vue'
import TitleLink from '@/documentation/components/title-link'
import Example from '@/documentation/components/example'
import Toolbar from '@/documentation/components/toolbar'
import NavMenu from '@/documentation/components/nav-menu'
import '@/documentation/scss/index.scss'

Vue.component('title-link', TitleLink)
Vue.component('example', Example)

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
.main-content {padding-left: 4em;}

footer .heart:hover {
  animation: heartbeat 1s infinite;
}


@keyframes heartbeat {
  0%, 30%, 60%, 100% {transform: scale(1);}
  15%, 45% {transform: scale(1.2);}
}
</style>
