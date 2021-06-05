<template lang="pug">
main
  title-link.mt4(h1) Getting started

  .title3.mb10
    w-icon.ml-2.mr2 wi-chevron-right
    | Pick 1 of the 3 following installation methods.

  w-accordion(
    :items="3"
    :value="openPane"
    expand-single
    title-class="justify-space-between py4 pl6 blue-light5--bg"
    expand-icon="wi-chevron-right"
    collapse-icon="wi-chevron-up"
    expand-icon-right)
    //- Standard install.
    template(#item-title.1)
      title-link.ma0(h2 slug="standard-installation") Standard Installation
    template(#item-content.1)
      standard-install

    //- Custom install.
    template(#item-title.2)
      title-link.ma0(h2 slug="a-la-carte") À la carte (tree shaking)
    template(#item-content.2)
      custom-install

    //- Nuxt install.
    template(#item-title.3)
      title-link.ma0(h2 slug="installation-on-nuxt") Installation on Nuxt (Vue 2)
    template(#item-content.3)
      nuxt-install

  w-divider.my12
  title-link(h2) What next?
  p Read on the knowledge base pages! It will give you an overview of all the power in your hands!
  h3 Then what next?
  p Now that you are more familiar with Wave UI, check out a UI component of your choice and explore its examples.
  p You can open each example in Codepen, that will help you learn faster by trying it yourself.

  title-link(h3).mt8 Icons font
  p.
    An icon font is probably the next thing you need at this point.#[br]
    You are free to use the one of your choice, but if you don't know where to start, we have
    picked and tested a handful of them for you:
    check out the #[router-link(to="w-icon") w-icon] page to know more.

  w-divider.my12
  title-link(h2) Wave UI Options
  p Wave UI accepts these options:
  w-list(:items="waveUiOptions" icon="wi-check")
    template(#item="{ item }")
      span {{ item.label }}
      template(v-if="item.route")
        span.ml1 - read on in the
        router-link.mx1(:to="item.route") {{ item.label }}
        | knowledge base page.
</template>

<script>
import StandardInstall from './install-standard.vue'
import CustomInstall from './install-custom.vue'
import NuxtInstall from './install-nuxt.vue'

export default {
  components: { StandardInstall, CustomInstall, NuxtInstall },

  data: () => ({
    waveUiOptions: [
      { label: 'colors', route: 'colors' },
      { label: 'breakpoints', route: 'breakpoints' },
      { label: 'presets', route: 'customization#presets' }
    ],
    openPane: [true, false, false]
  }),

  mounted () {
    const hash = document.location.hash || ''
    if (hash.includes('a-la-carte')) this.openPane = [false, true, false]
    else if (hash.includes('nuxt')) this.openPane = [false, false, true]
  }
}
</script>

<style lang="scss">
.main--getting-started {
  .w-accordion__item {margin-bottom: 12px;}
  .w-accordion__item-title {border-top: none;}
  .w-accordion__item-content {background: #f7fbff;}
  .w-button--icon.size--md {font-size: 20px;}

  // .w-accordion ol {font-size: 1.3em;}
  .w-accordion .ssh-pre, .w-accordion em {font-size: 1rem;}

  .vue-install .comment {user-select: none;}
  .ssh-pre[data-label]:before {font-size: 12px;}
}

@media screen and (max-width: 600px) {
  .main--getting-started .w-accordion {margin-left: -16px;margin-right: -16px;}
}
</style>
