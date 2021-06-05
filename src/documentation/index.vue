<template lang="pug">
w-app
  w-drawer.nav-drawer(v-if="isMobile" v-model="drawerOpen" right :width="330")
    nav-menu(v-model:drawer-open="drawerOpen")
  header.no-shrink
    toolbar(v-model:drawer-open="drawerOpen")
  .content-wrap.w-flex.no-shrink
    transition(name="fade")
      w-progress(v-if="loading" color="primary" tile absolute)
    nav-menu.navigation.no-shrink(v-if="!isMobile" v-model:drawer-open="drawerOpen")
    .main-content.w-flex.column.grow(:class="`main-content--${$route.name}`")
      router-view.grow(#default="{ Component }" :class="`main--${$route.name}`")
        transition(name="fade-page" mode="out-in")
          component(:is="Component")

      footer.w-flex.justify-end.align-center.no-grow.wrap
        small.grey-light3.text-upper
          | Copyright © {{ new Date().getFullYear() }} Antoni Andre, all rights reserved.
        .spacer
        router-link.pink-light1.mr4(to="/backers")
          w-icon.mr1 mdi mdi-heart-multiple-outline
          | Backers
        .caption
          | Made with
          w-tooltip(top)
            template(#activator="{ on }")
              w-icon.ml1(v-on="on" sm) mdi mdi-vuejs
            | Vue.js
          w-tooltip(top)
            template(#activator="{ on }")
              w-icon.ml1(v-on="on" sm) mdi mdi-language-css3
            | CSS 3
          w-tooltip(top)
            template(#activator="{ on }")
              w-icon.ml1(v-on="on" sm) mdi mdi-language-html5
            span.text-nowrap Html 5 &amp; Pug
          w-tooltip(top)
            template(#activator="{ on }")
              w-icon.ml1(v-on="on" sm) mdi mdi-sass
            | SASS
          w-tooltip(top)
            template(#activator="{ on }")
              w-icon.ml1.heart(v-on="on" sm) mdi mdi-heart
            | Love
</template>

<script>
import Toolbar from '@/documentation/components/toolbar.vue'
import NavMenu from '@/documentation/components/nav-menu.vue'
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
      return this.$waveui.breakpoint.xs
    }
  }
}
</script>

<style lang="scss">
.nav-menu ~ .main-content {padding-left: 4em;}

footer {
  margin-top: 5em;

  .nav-drawer ~ & {padding-left: 12px;}

  .heart:hover {animation: heartbeat 1s infinite;}
  small {font-size: 10px;}
  .caption {padding-top: 1px;}
}

@keyframes heartbeat {
  0%, 30%, 60%, 100% {transform: scale(1);}
  15%, 45% {transform: scale(1.2);}
}
</style>
