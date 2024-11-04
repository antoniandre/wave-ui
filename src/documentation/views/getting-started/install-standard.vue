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
          // Or in Wave UI 2.x:
          // new WaveUI(app, { /* Some Wave UI options */ })

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

  .mt8.op05
    w-accordion(title-class="ml-1 pl0 py3" expand-icon-rotate-90)
      template(#title)
        title-link.ma0(@click.prevent h3 slug="place-a--w-app")
          | 3.
          w-tag.ml2.warning--bg(round) ONLY FOR WAVE UI 2.x
          | , place a #[span.code w-app] at the root of your app
      template(#content)
        .ml5
          ssh-pre.mt2(
            v-show="$store.state.usePug"
            :dark="$store.state.darkMode"
            language="pug"
            label="App.vue").
            w-app
              //- All your app content goes here.

              //- Also try to add a button!
              w-button My Button
          ssh-pre(
            v-show="!$store.state.usePug"
            :dark="$store.state.darkMode"
            language="html-vue"
            label="App.vue").
            &lt;w-app&gt;
              &lt;!-- All your app content goes here. --&gt;

              &lt;!-- Also try to add a button! --&gt;
              &lt;w-button&gt;My Button&lt;/w-button&gt;
            &lt;/w-app&gt;
          .caption.grey-light1.pb6
            | The &lt;w-app&gt; is required for Wave UI base styles and for a few components needing to be moved in the DOM.#[br]
            | There should only be one &lt;w-app&gt; in your whole app.

          p Now check your app in the browser!
</template>

<style lang="scss">
.op05 {
  opacity: 0.5;
  transition: 0.4s;

  &:hover {opacity: 1;}
}
</style>
