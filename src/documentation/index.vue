<template lang="pug">
w-app
  w-drawer.nav-drawer(v-if="isMobile" v-model="drawerOpen" right :width="330")
    nav-menu(:drawer-open.sync="drawerOpen")
  header.no-shrink
    toolbar(:drawer-open.sync="drawerOpen")
  .content-wrap.w-flex.no-shrink
    transition(name="fade")
      w-progress(v-if="loading" color="primary" tile absolute)
    nav-menu.navigation.no-shrink(v-if="!isMobile" :drawer-open.sync="drawerOpen")
    .main-content.w-flex.column.grow(:class="`main-content--${$route.name}`")
      transition(name="fade-page" mode="out-in")
        router-view.grow(:class="`main--${$route.name}`")

      w-transition-bounce(v-if="goToTop" appear)
        w-button.go-top.mb8.mr2(
          icon="wi-chevron-up"
          fixed
          bottom
          right
          xl
          bg-color="grey-light5"
          @click="scrollTop")

      footer.w-flex.justify-end.align-center.no-grow.wrap
        small.grey-light3.text-upper
          | Copyright &copy; {{ new Date().getFullYear() }} Antoni Andre, all rights reserved.
        .spacer
        router-link.pink-light1.mr4(to="/backers" @click.native="scrollTop")
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
          w-tooltip(top align-right)
            template(#activator="{ on }")
              w-icon.ml1.heart(v-on="on" sm) mdi mdi-heart
            | Love
</template>

<script>
import Vue from 'vue'
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'
import TitleLink from '@/documentation/components/title-link.vue'
import IssueLink from '@/documentation/components/issue-link.vue'
import UiComponentTitle from '@/documentation/components/ui-component-title.vue'
import Example from '@/documentation/components/example/index.vue'
import Api from '@/documentation/components/api.vue'
import Alert from '@/documentation/components/alert.vue'
import Toolbar from '@/documentation/components/toolbar.vue'
import NavMenu from '@/documentation/components/nav-menu.vue'
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
    contentWrapEl: null,
    goToTop: false
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
      this.goToTop = this.scrollingEl.scrollTop >= this.contentWrapEl.offsetTop
    },
    onResize () {
      this.navMenuTop = this.contentWrapEl.offsetTop - 12
    },
    async scrollTop () {
      await this.$nextTick()
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },

  mounted () {
    this.contentWrapEl = document.querySelector('.content-wrap')
    this.navMenuTop = this.contentWrapEl.offsetTop - 12
    this.scrollingEl = document.documentElement

    // Scroll to anchor point if any on page load.
    const pageAnchor = window.location.hash.replace('#', '')
    if (pageAnchor) {
      setTimeout(() => {
        const anchorEl = document.getElementById(pageAnchor)
        // Smooth not supported on Safari & IOS, but will still jump to it.
        anchorEl.scrollIntoView({ behavior: 'smooth' })
      }, 200)
    }

    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('resize', this.onResize)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('resize', this.onResize)
  }
}
</script>
