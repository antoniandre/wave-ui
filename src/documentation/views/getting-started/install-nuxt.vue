<template lang="pug">
div
  w-accordion(
    :model-value="[true, false, false]"
    expand-single
    expand-icon-rotate90
    title-class="py2 title3 mb0"
    item-class="bd1")
    w-accordion-item
      template(#title) Nuxt 4
      template(#content)
        p Installing in Nuxt 4 is very simple. Create an #[code app/plugins/wave-ui.js] file (create the directory if not existing) with this content:
        ssh-pre(language="js" :dark="$store.state.darkMode").
          import 'wave-ui/dist/wave-ui.css'
          import WaveUI from 'wave-ui'

          export default defineNuxtPlugin(nuxtApp => {
            nuxtApp.vueApp.use(WaveUI, { on: '#__nuxt' })

            // Server-side only: inject Wave UI styles into the initial HTML to prevent FOUC.
            // getSSRStyles() with no argument returns both themes' color variables scoped to
            // [data-theme="light"] and [data-theme="dark"], so the correct colors are already
            // present at first paint regardless of the user's stored preference.
            if (import.meta.server) {
              const $waveui = nuxtApp.vueApp.config.globalProperties.$waveui
              const { palette, colors } = $waveui.getSSRStyles()
              useHead({
                htmlAttrs: { 'data-theme': 'light' },
                style: [
                  { id: 'wave-ui-palette', innerHTML: palette },
                  { id: 'wave-ui-colors', innerHTML: colors }
                ]
              })
            }
          })

        title-link.mt8(h3 slug="nuxt4-blocking-script") Optional: persist the theme across page loads
        p.
          When users can switch theme, you likely want their choice to survive a page reload.
          Because the server cannot read #[code localStorage], it always renders with the default
          light theme — without extra steps a dark-mode user will briefly see a flash of light
          before the correct theme is applied.
        p.
          #[code WaveUI.getThemeInitScript()] returns a small inline script that runs
          synchronously during HTML parsing — before the browser makes its first paint — and sets
          #[code data-theme] on #[code &lt;html&gt;] by reading #[code localStorage] and the OS
          preference. Wave UI's own #[code beforeMount] then reads that attribute, so no explicit
          #[code theme] option is needed in the plugin.
        p Add it as a blocking (no #[code async] / no #[code defer]) #[code &lt;script&gt;] via #[code nuxt.config.ts]:
        ssh-pre(language="js" :dark="$store.state.darkMode").
          import WaveUI from 'wave-ui'

          export default defineNuxtConfig({
            app: {
              head: {
                script: [{ innerHTML: WaveUI.getThemeInitScript() }]
              }
            }
          })
        p.mt4
          | In Nuxt 4 the plugins directory moved to #[code app/plugins/].
          | If you prefer to keep it at the project root #[code plugins/] still works as a fallback.

    w-accordion-item
      template(#title) Nuxt 3
      template(#content)
        p Installing in Nuxt 3 is very simple. You only need to create a #[code plugins/wave-ui.js] file (create the directory if not existing) with this content:
        ssh-pre(language="js" :dark="$store.state.darkMode").
          import 'wave-ui/dist/wave-ui.css'
          import WaveUI from 'wave-ui'

          export default defineNuxtPlugin(nuxtApp => {
            nuxtApp.vueApp.use(WaveUI, { on: '#__nuxt' })

            // Server-side only: inject Wave UI styles into the initial HTML to prevent FOUC.
            // getSSRStyles() with no argument returns both themes' color variables scoped to
            // [data-theme="light"] and [data-theme="dark"], so the correct colors are already
            // present at first paint regardless of the user's stored preference.
            if (import.meta.server) {
              const $waveui = nuxtApp.vueApp.config.globalProperties.$waveui
              const { palette, colors } = $waveui.getSSRStyles()
              useHead({
                htmlAttrs: { 'data-theme': 'light' },
                style: [
                  { id: 'wave-ui-palette', innerHTML: palette },
                  { id: 'wave-ui-colors', innerHTML: colors }
                ]
              })
            }
          })

        title-link.mt8(h3 slug="nuxt3-blocking-script") Optional: persist the theme across page loads
        p.
          Same as Nuxt 4 — add the blocking init script via #[code nuxt.config.js]:
        ssh-pre(language="js" :dark="$store.state.darkMode").
          const WaveUI = require('wave-ui')

          module.exports = defineNuxtConfig({
            app: {
              head: {
                script: [{ innerHTML: WaveUI.getThemeInitScript() }]
              }
            }
          })

    w-accordion-item
      template(#title) Nuxt 2
      template(#content)
        p This installation guide is for Nuxt 2 with Vue 2 and Wave UI 1.x.

        p.mt4
          w-icon.mr2 wi-chevron-right
          strong
            | Nuxt 2 + Wave UI demo repo:
            a.ml1(href="https://github.com/antoniandre/nuxt-waveui" target="_blank")
              | github.com/antoniandre/nuxt-waveui
              w-icon.ml1 mdi mdi-open-in-new

        ol
          li.mt8
            .title4 Install the dependencies:
            ssh-pre(language="shell" :dark="$store.state.darkMode").
              npm i wave-ui
              npm i -D @wave-ui/nuxt

          li.mt8
            .title4 In #[span.code nuxt.config.js], add Wave UI to the #[code buildModules]:

            ssh-pre(language="js" :dark="$store.state.darkMode").
              buildModules: [
                '@wave-ui/nuxt' // Simple config.

                // Or with options.
                // ['@wave-ui/nuxt', { /* Wave UI config here. */ }]
              ]

          li.mt8
            .title4 You're all set.
            p in the #[span.code default.vue] layout, for instance, add a #[code w-button].

            ssh-pre(v-show="$store.state.usePug" language="pug" label="Pug" :dark="$store.state.darkMode").
              w-button My button
            ssh-pre(v-show="!$store.state.usePug" language="html-vue" :dark="$store.state.darkMode").
              &lt;w-button&gt;My button&lt;/w-button&gt;

        .w-divider.my12

        title-link.title2.ml4.mb4(h3) For more flexibility, if you use SCSS
        .w-flex.title3.mt8
          w-icon.green.mr2 wi-check
          | With this setup, you can override the Wave UI SCSS variables.

        p.mt6 Also install these dev dependencies:
        ssh-pre.mb1(language="shell" :dark="$store.state.darkMode")
          | npm i -D pug pug-plain-loader sass sass-loader@10
        small.text-italic.grey.
          The dev dependencies are only needed for building the project. They will not ship to production.
        .mt3
          strong Notes:
          ul
            li #[span.code sass-loader 11+] only works with Webpack 5+, so not in Nuxt 2.
            li
              | The #[span.code sass] update is needed to handle the
              a.ml1(href="https://github.com/sass/sass/issues/2565" target="_blank")
                | new Sass division
                w-icon.ml1 mdi mdi-open-in-new
              | .

        p.mt6 Then update the #[span.code buildModules] &amp; #[span.code build] blocks in #[span.code nuxt.config.js]:
        ssh-pre(language="js" :dark="$store.state.darkMode").
          buildModules: [
            [
              '@wave-ui/nuxt',
              {
                // Your Wave UI config here.

                // Path to your SCSS variables.
                useScss: '~/scss/_variables.scss'
              }
            ]
          ]

          build: {
            transpile: ['wave-ui']
          }
</template>
