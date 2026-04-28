<template lang="pug">
div
  title-link(h3) 1. Download from NPM
  .ml5
  .w-flex.align-center.wrap
    ssh-pre.vue-install(language="shell" :dark="$store.state.darkMode")
      | npm i wave-ui # Vue 3.
    span.mx2 or
    ssh-pre.vue-install(language="shell" :dark="$store.state.darkMode")
      | npm i wave-ui@legacy # Vue 2.

  title-link(h3) 2. Import in your project
  .ml5
    p Import Wave UI library at the root of your app - usually #[span.code main.js].
    w-tabs.mt4(:items="2" content-class="pa0")
      template(#item-title.1) Vue 3
      template(#item-content.1)
        ssh-pre.my0(
          language="js"
          :dark="$store.state.darkMode"
          style="min-width: 290px").
          // main.js
          import { createApp } from 'vue'
          import App from './App.vue'
          import WaveUI from 'wave-ui'
          import 'wave-ui/dist/wave-ui.css'

          const app = createApp(App)

          app.use(WaveUI, { /* Some Wave UI options */ })
          app.mount('#app')

        p.my3.ml2.grey-light1
          w-icon.mr1 wi-chevron-right
          | Edit a
          a.ml1(href="https://codepen.io/antoniandre/pen/RwaXMLd?editors=1010" target="_blank")
            | #[strong Vue 3] Wave UI demo on Codepen
            w-icon.ml1 mdi mdi-open-in-new
          | .
        p.my3.ml2.grey-light1
          w-icon.mr1 wi-chevron-right
          | Or edit a
          a.ml1(href="https://stackblitz.com/edit/waveui-3" target="_blank")
            | #[strong Vue 3] Wave UI demo with Vite on StackBlitz
            w-icon.ml1 mdi mdi-open-in-new
          | .

      template(#item-title.2) Vue 2
      template(#item-content.2)
        ssh-pre.my0(
          language="js"
          :dark="$store.state.darkMode"
          style="min-width: 290px").
          // main.js
          import Vue from 'vue'
          import App from './App.vue'
          import WaveUI from 'wave-ui'
          import 'wave-ui/dist/wave-ui.css'

          Vue.use(WaveUI)

          const waveui = new WaveUI({
            // Some Wave UI options.
          })

          new Vue({
            waveui,
            render: h => h(App)
          }).$mount('#app')

        p.my3.ml2.grey-light1
          w-icon.mr1 wi-chevron-right
          | Edit a
          a.ml1(href="https://codepen.io/antoniandre/pen/KKyoKrZ?editors=1010" target="_blank")
            | #[strong Vue 2] Wave UI demo on Codepen
            w-icon.ml1 mdi mdi-open-in-new
          | .
</template>

<style lang="scss">
.op05 {
  opacity: 0.5;
  transition: 0.4s;

  &:hover {opacity: 1;}
}
</style>
