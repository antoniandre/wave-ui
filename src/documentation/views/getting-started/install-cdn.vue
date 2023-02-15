<template lang="pug">
p This is the fastest way to get started.
ol
  li.mt8
    | Add this &lt;script&gt; tag in your app at the end of the &lt;head&gt; tag.
    ssh-pre(language="html" :dark="$store.state.darkMode").
      &lt;link rel="stylesheet" href="https://unpkg.com/wave-ui/dist/wave-ui.css"&gt;&lt;/link&gt;
    p Or for Vue 2.x:
    ssh-pre(language="html" :dark="$store.state.darkMode").
      &lt;link rel="stylesheet" href="https://unpkg.com/wave-ui@legacy/dist/wave-ui.css"&gt;&lt;/link&gt;
    p.grey #[strong Note:] Wave UI is also on #[a(href="https://www.jsdelivr.com/package/npm/wave-ui" target="_blank") JSDelivr].
  li.mt8
    | Add this &lt;script&gt; tag in your app at the end of the &lt;body&gt; tag and after the Vue.js script.
    ssh-pre(language="html" :dark="$store.state.darkMode").
      &lt;script src="https://unpkg.com/wave-ui"&gt;&lt;/script&gt;
    p Or for Vue 2.x:
    ssh-pre(language="html" :dark="$store.state.darkMode").
      &lt;script src="https://unpkg.com/wave-ui@legacy"&gt;&lt;/script&gt;
  li.mt8
    p Initialize Wave UI.
    w-tabs.mt4(:items="2" content-class="pa0")
      template(#item-title.1) Vue 3
      template(#item-content.1)
        ssh-pre.my0(
          language="js"
          :dark="$store.state.darkMode").
          const app = Vue.createApp()
          app.use(WaveUI, { /* Some Wave UI options */ })
          app.mount('#app')

        p.my3.ml2.grey-light1
          w-icon.mr1 wi-chevron-right
          | Edit a
          a.ml1(href="https://codepen.io/antoniandre/pen/RwaXMLd?editors=1010" target="_blank")
            | #[strong Vue 3] Wave UI demo on Codepen
            w-icon.ml1 mdi mdi-open-in-new
          | .

      template(#item-title.2) Vue 2
      template(#item-content.2)
        ssh-pre.my0(
          language="js"
          :dark="$store.state.darkMode").
          new Vue({
            waveui: new WaveUI({ /* Some Wave UI options */ })
          }).$mount('#app')

        p.my3.ml2.grey-light1
          w-icon.mr1 wi-chevron-right
          | Edit a
          a.ml1(href="https://codepen.io/antoniandre/pen/KKyoKrZ?editors=1010" target="_blank")
            | #[strong Vue 2] Wave UI demo on Codepen
            w-icon.ml1 mdi mdi-open-in-new
          | .
</template>
