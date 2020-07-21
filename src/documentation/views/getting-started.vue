<template lang="pug">
div
  title-link.mt4(h1) Getting started
  title-link(h2) Installation

  h3 Download from NPM
  ssh-pre(language="bash").
    npm i --D the-wave-ui

  h3 Import in your project
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

  title-link(h2) Options
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
