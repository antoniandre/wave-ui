<template lang="pug">
main
  title-link.mt4(h1) Migration strategy from version 2.x to version 3.x

  p.
    The migration from Wave UI 2.x is extremely simple. You'll be done in two steps, two minutes!#[br]
    But if you want to offer two themes in your app, there's a bit more work.
  ol.mt6
    li.mt4
      .title3 Update the initialization of Wave UI.
      .w-flex.align-center
        ssh-pre(
          language="js"
          label="before"
          :dark="$store.state.darkMode"
          style="min-width: 290px").
          const app = createApp(App)
          new WaveUI(app, { /* Some Wave UI options */ })
          app.mount('#app')
        w-icon.ma2.grey(xl) mdi mdi-arrow-right
        ssh-pre(
          language="js"
          label="after"
          :dark="$store.state.darkMode"
          style="min-width: 290px").
          const app = createApp(App)
          app.use(WaveUI, { /* Some Wave UI options */ })
          app.mount('#app')

    li.mt4
      .title3 Remove the &lt;w-app&gt; component, it's no longer needed!#[br]
      | Note: there is also an #[router-link(to="/options-presets-and-waveui") option to define the Wave UI root] (Default: #[code.code #app], if not found, #[code.code body]).
      .w-flex.align-center
        ssh-pre(
          language="html-vue"
          label="before"
          :dark="$store.state.darkMode"
          style="min-width: 290px").
          &lt;w-app&gt;
            &lt;w-button&gt;My button&lt;/w-button&gt;
          &lt;/w-app&gt;
        w-icon.ma2.grey(xl) mdi mdi-arrow-right
        ssh-pre(
          language="html-vue"
          label="after"
          :dark="$store.state.darkMode"
          style="min-width: 290px").
          &lt;w-button&gt;My button&lt;/w-button&gt;

    li.mt4
      .title3 If you were using #[code useWaveUI] in composition API
      p just replace it with #[code inject('$waveui')].

    li.mt4
      .title3 Optionally, if you want to use two themes.
      p Follow the steps in the #[a(href="/themes#adding-themes-in-your-wave-ui-app") themes] page.

</template>

<script>
export default {
}
</script>

<style lang="scss">
</style>
