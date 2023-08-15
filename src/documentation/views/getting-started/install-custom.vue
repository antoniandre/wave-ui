<template lang="pug">
div
  p.mt4.
    The #[em à la carte] system lets you choose which components to import and discard the ones you don't need
    on the final build, which will considerably reduce the build file size.

  ol
    li.mt10
      .title4 Install the dependencies &amp; devDependencies:
      .w-flex.align-center.wrap
        ssh-pre.vue-install(language="shell") npm i wave-ui # Vue 3.
        span.mx2 or
        ssh-pre.vue-install(language="shell") npm i wave-ui@legacy # Vue 2.x.
      ssh-pre.mb2(language="shell") npm i -D pug pug-plain-loader sass sass-loader@10
      small.text-italic.grey.
        The dev dependencies are only needed for building the project. They will not ship to production.
      p.mt3
        strong Notes:
        ul
          li #[span.code sass-loader 11+] is not compatible with Webpack 4 or less.
          li
            | The #[span.code sass] update is needed to handle the
            a.ml1(href="https://github.com/sass/sass/issues/2565" target="_blank")
              | new Sass division
              w-icon.ml1 mdi mdi-open-in-new
            | .

    li.mt10
      .title4
        | Create a #[span.code scss/_variables.scss] file
        w-tag.info.ml2(round outline sm) OPTIONAL
      p This step is optional, and is only useful if you want to override the SCSS variables.
      p.mt6.
        In your project #[span.code src] folder, create a #[span.code _variables.scss] file in a
        #[span.code scss/] folder, and import Wave UI's variables:

      ssh-pre(language="css" label="scss/_variables.scss").
        @import 'wave-ui/src/wave-ui/scss/_variables';

        /* You can add SCSS variables overrides here. */

    li.mt10
      .title4 Update #[span.code vue.config.js]
      p.
        In #[span.code vue.config.js], transpile #[span.code wave-ui] and import your variables file
        globally. Then re-serve the app.
      ssh-pre(language="js" label="vue.config.js").
        module.exports = {
          transpileDependencies: ['wave-ui'], // ! \\

          // You don't need this part if you haven't done step 2.
          // ----------------------------------------------------
          css: {
            loaderOptions: {
              // `additionalData` was called `prependData` prior sass-loader 9.
              sass: { additionalData: '@import "@/scss/variables.scss";' }
            }
          }
          // ----------------------------------------------------
        }

      .title4 Or if you use Vite:
      p.
        In #[span.code vite.config.js], the import of variables is done like so:
      ssh-pre(language="js" label="vite.config.js").
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: '@import "@/scss/variables";'
            }
          }
        }

    li.mt8
      .title4 Import only what you need
      p Update the #[span.code main.js] file, adding only the Wave UI components you need.

      w-tabs.mt4(:items="2" content-class="pa0")
        template(#item-title.1) Vue 3
        template(#item-content.1)
          ssh-pre.ma0(language="js").
            // Keep these 2 imports.
            import { createApp } from 'vue'
            import App from './App.vue'

            // 1.
            // Import Wave UI from the src directory &amp; create the Vue app.
            import WaveUI from 'wave-ui/src/wave-ui/core'

            const app = createApp(App)

            // 2.
            // Import only the components you need. e.g.
            import { WButton } from 'wave-ui/src/wave-ui/components'

            app.use(WaveUI, {
              components: { WButton }
              // You can add some Wave UI options here.
            })

            app.mount('#app')

          alert.mx3(warning)
            | #[strong In Wave UI] #[strong.code 2.x], you also need to import the #[strong.code w-app] component,
            | and before you mount the app, you need to instantiate Wave UI.

            ssh-pre.ma0(language="js" :dark="$store.state.darkMode").
              // 3.
              // Instantiate the WaveUI class and register it in the Vue instance.
              new WaveUI(app, {
                // Some Wave UI options.
              })

        template(#item-title.2) Vue 2
        template(#item-content.2)
          ssh-pre.ma0(language="js").
            // Keep these 2 imports.
            import Vue from 'vue'
            import App from './App.vue'

            // 1.
            // Import Wave UI from the src directory.
            import WaveUI from 'wave-ui/src/wave-ui/core'

            // 2.
            // Import only the components you need. e.g.
            import { WApp, WButton } from 'wave-ui/src/wave-ui/components'

            Vue.use(WaveUI, {
              components: { WApp, WButton }
            })

            // 3.
            // Instantiate the WaveUI class and register it in the Vue instance.
            const waveui = new WaveUI({
              // Some Wave UI options.
            })

            new Vue({
              waveui,
              render: h => h(App)
            }).$mount('#app')

      alert(info)
        div.mb4.
          Some Wave UI elements use other elements under the hood. For instance #[strong.code w-dialog] uses
          #[strong.code w-overlay] &amp; #[strong.code w-card].#[br]#[br]
          If you encounter the following error, you need to also import the missing component:
        strong.code.error [Vue warn]: Unknown custom element: &lt;w-overlay&gt; - did you register the component correctly?
</template>

<style lang="scss">
.main--getting-started .w-tabs .ssh-pre {
  border-radius: 0;
  border-width: 1px 0 0;
}
</style>
