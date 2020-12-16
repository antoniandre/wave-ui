<template lang="pug">
w-app
  w-drawer.nav-drawer(v-if="isMobile" v-model="drawerOpen" right :width="330")
    nav-menu(:drawer-open.sync="drawerOpen")
  header.no-shrink
    toolbar(:drawer-open.sync="drawerOpen")
  .content-wrap.w-flex.no-shrink
    transition(name="fade")
      w-progress(v-if="loading" color="primary" tile absolute)
    nav-menu.navigation.no-shrink(
      v-if="!isMobile"
      ref="nav-menu"
      :class="{ 'nav-menu--fixed': fixNavMenu }"
      :drawer-open.sync="drawerOpen")
    .main-content.w-flex.column.grow
      transition(name="fade-page" mode="out-in")
        router-view.grow(:class="`main--${$route.name}`")

      footer.w-flex.justify-end.align-center.no-grow.wrap
        small.grey-light3.text-upper Copyright © {{ new Date().getFullYear() }} Antoni Andre, all rights reserved.
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
            | Sass
          w-tooltip(top)
            template(#activator="{ on }")
              w-icon.ml1.heart(v-on="on" sm) mdi mdi-heart
            | Love
</template>

<script>
import Vue from 'vue'
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'
import TitleLink from '@/documentation/components/title-link'
import IssueLink from '@/documentation/components/issue-link'
import UiComponentTitle from '@/documentation/components/ui-component-title'
import Example from '@/documentation/components/example'
import Api from '@/documentation/components/api'
import Alert from '@/documentation/components/alert'
import Toolbar from '@/documentation/components/toolbar'
import NavMenu from '@/documentation/components/nav-menu'
import '@/documentation/scss/index.scss'

Vue.component('ssh-pre', SshPre)
Vue.component('title-link', TitleLink)
Vue.component('ui-component-title', UiComponentTitle)
Vue.component('example', Example)
Vue.component('alert', Alert)
Vue.component('component-api', Api)
Vue.component('issue-link', IssueLink)

export default {
  components: { Toolbar, NavMenu },
  data: () => ({
    drawerOpen: false,
    fixNavMenu: false,
    navMenuTop: 0,
    scrollingEl: null,
    contentWrapEl: null
  }),

  computed: {
    loading () {
      // Loading status is appended manually in router file.
      return this.$router.status.loading
    },
    isMobile () {
      return this.$waveui.breakpoint.xs
    }
  },

  methods: {
    onScroll () {
      this.fixNavMenu = this.scrollingEl.scrollTop >= this.navMenuTop
    },
    onResize () {
      this.navMenuTop = this.contentWrapEl.offsetTop - 12
    }
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('resize', this.onResize)
  },

  mounted () {
    this.contentWrapEl = document.querySelector('.content-wrap')
    this.navMenuTop = this.contentWrapEl.offsetTop - 12
    this.scrollingEl = document.documentElement

    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('resize', this.onResize)
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
