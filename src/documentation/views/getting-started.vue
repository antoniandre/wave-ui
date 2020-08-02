<template lang="pug">
div
  title-link.mt4(h1) Getting started
  title-link(h2) Installation

  title-link(h3) Download from NPM
  ssh-pre(language="shell").
    npm i the-wave-ui
  w-alert.alert--warning(warning icon-outside)
    strong.mr2 WARNING:
    span.mt1 The name #[span.code wave-ui] is taken at the moment. Make sure to install #[strong.grey-dark2.code the-wave-ui]!

  title-link(h3).mt8 Import in your project
  ssh-pre(language="js" label="main.js").
    import Vue from 'vue'
    import App from './app'
    import WaveUI from 'the-wave-ui'
    import 'the-wave-ui/dist/wave-ui.css'

    Vue.use(WaveUI)

    const waveui = new WaveUI({
      // some Wave UI options.
    })

    new Vue({
      waveui,
      render: h => h(App)
    }).$mount('#app')

  title-link(h3).mt8 Place a #[span.code w-app] at the root of your app
  ssh-pre(language="html-vue" label="App.js").
    &lt;w-app&gt;
      &lt;!-- All your app's content goes here. --&gt;
    &lt;/w-app&gt;

  title-link(h3).mt8 Icons font
  p.
    The next thing you might need at this point is an icon font.#[br]
    You are free to use the one of your choice, but if you don't know where to start, we have
    selectioned and tested a handful of them for you:
    check out the #[router-link(to="w-icon") w-icon] page to know more.

  w-divider.my12
  title-link(h2) What next?
  p Read on the knowledge base pages!
  h3 Then what next?
  p Now that you are up and running, check out a UI component of your choice and explore its examples.
  p You can open each example in Codepen, that will help you learn faster by trying it yourself.
  p The #[router-link(to="w-icon") w-icon] component is probably good to start with.

  w-divider.my12
  title-link(h2) Wave UI Options
  p Wave UI accepts these options:
  w-list(:items="waveUiOptions" icon="wi-check")
    template(#item="{ item }")
      span {{ item.label }}
      template(v-if="item.route")
        span.ml1 - read on in
        router-link.ml1(:to="item.route") {{ item.label }}
</template>

<script>
export default {
  data: () => ({
    waveUiOptions: [
      { label: 'colors', route: 'colors#primary-secondary-and-your-own-colors-and-shades' },
      { label: 'breakpoints', route: 'breakpoints' },
      { label: 'presets', route: 'customization#presets' }
    ]
  })
}
</script>
