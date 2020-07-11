<template lang="pug">
div
  h1.headline.mt-4 Getting started

  title-link(h2) Installation

  h3 Download from NPM
  code npm i --D the-wave-ui

  h3 Import in your project
  p In main.js
  pre.
    import Vue from 'vue'
    import App from './app'
    import WaveUI from 'the-wave-ui'

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
  ul
    li colors
    li breakpoints
    li presets
</template>
