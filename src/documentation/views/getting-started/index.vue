<template lang="pug">
main
  title-link.mt4(h1) Getting started

  .title3.mb10
    w-icon.ml-2.mr2 wi-chevron-right
    | Pick 1 of the 3 following installation methods.

  w-accordion(
    :items="4"
    :model-value="openPane"
    expand-single
    :title-class="`justify-space-between py4 pl6 ${$store.state.darkMode ? 'grey-dark5--bg' : 'blue-light5--bg'}`"
    expand-icon="wi-chevron-right"
    collapse-icon="wi-chevron-up"
    expand-icon-right)
    //- Standard install.
    template(#item-title.1)
      title-link.ma0(h2 slug="standard-installation") Standard Installation
    template(#item-content.1)
      standard-install

    //- Using CDN.
    template(#item-title.2)
      title-link.ma0(h2 slug="using-a-cdn") Using a CDN
    template(#item-content.2)
      cdn-install

    //- Custom install.
    template(#item-title.3)
      title-link.ma0(h2 slug="a-la-carte") À la carte (tree shaking)
    template(#item-content.3)
      custom-install

    //- Nuxt install.
    template(#item-title.4)
      title-link.ma0(h2 slug="installation-on-nuxt") Installation on Nuxt
    template(#item-content.4)
      nuxt-install

  w-divider.my12
  title-link(h2) What next?
  p.text-bold You are now up and running. Go test some components in your app!
  .title3.mt4 But if you would appreciate a little more guidance, we recommend to:
  w-list(checklist :items="6" :model-value="[0]")
    template(#item.1) Install Wave UI from one of the above method
    template(#item.2).
      Read on the knowledge base pages to get an overview of all the power in your hands!
    template(#item.3)
      | Pick a
      router-link.ml1(to="/w-app#examples-of-common-layouts" @click.native="scrollToExamples")
        | common layout
      | .
    template(#item.4).
      Add some UI components of your choice: get help from the examples and don't
      hesitate to open them on Codepen.
    template(#item.5).
      You probably want to add an #[router-link(to="/w-icon" @click.native="scrollToTop") icon font]
      as well.
    template(#item.6).
      After mastering the components, you may want to use
      #[router-link(to="/options-presets-and-waveui#presets" @click.native="scrollToTop") presets]
      to alight your Vue templates.
</template>

<script>
import StandardInstall from './install-standard.vue'
import CdnInstall from './install-cdn.vue'
import CustomInstall from './install-custom.vue'
import NuxtInstall from './install-nuxt.vue'

export default {
  components: { StandardInstall, CdnInstall, CustomInstall, NuxtInstall },

  data: () => ({
    openPane: [true, false, false, false]
  }),

  methods: {
    scrollToTop () {
      setTimeout(() => {
        const page = document.querySelector('.main-content')
        const top = page.getBoundingClientRect().top + window.scrollY - 15
        document.documentElement.scrollTo({ top, behavior: 'smooth' })
      }, 300)
    },
    scrollToExamples () {
      setTimeout(() => {
        const examples = document.getElementById('examples-of-common-layouts')
        const top = examples.getBoundingClientRect().top + window.scrollY - 15
        document.documentElement.scrollTo({ top, behavior: 'smooth' })
      }, 300)
    }
  },

  mounted () {
    const hash = document.location.hash || ''
    if (hash.includes('using-a-cdn')) this.openPane = [false, true, false, false]
    if (hash.includes('a-la-carte')) this.openPane = [false, false, true, false]
    else if (hash.includes('nuxt')) this.openPane = [false, false, false, true]
  }
}
</script>

<style lang="scss">
.main--getting-started {
  .w-accordion__item {margin-bottom: 12px;}
  .w-accordion__item-title {border-top: none;}
  .w-accordion__item-content {background: #f7fbff;}
  .w-button--icon.size--md {font-size: 20px;}

  .w-accordion .ssh-pre, .w-accordion em {font-size: 1rem;}

  .vue-install .comment {user-select: none;}
  .ssh-pre[data-label]:before {font-size: 12px;}

  .w-checkbox__label {display: inline-block;}
}

@media screen and (max-width: 600px) {
  .main--getting-started .w-accordion {margin-left: -16px;margin-right: -16px;}
}

@media screen and (max-width: 450px) {
  .main--getting-started .w-accordion {margin-left: -8px;margin-right: -8px;}
}
</style>
