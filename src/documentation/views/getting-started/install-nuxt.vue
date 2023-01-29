<template lang="pug">
div
  p.mt4
    em.
      This installation guide is for Nuxt 2 (with Vue 2 and Wave UI 1.x). Wave UI hasn't been tested on Nuxt 3 yet,
      but demos and documentation update PRs are welcome!

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
      .title4 in #[span.code default.vue], wrap the #[code Nuxt] component in a #[code w-app]:

      ssh-pre(v-show="$store.state.usePug" language="pug" label="Pug" :dark="$store.state.darkMode").
        &lt;template lang="pug"&gt;
          w-app
            Nuxt
        &lt;/template&gt;
      ssh-pre(v-show="!$store.state.usePug" language="html-vue" :dark="$store.state.darkMode").
        &lt;template&gt;
          &lt;w-app&gt;
            &lt;Nuxt /&gt;
          &lt;/w-app&gt;
        &lt;/template&gt;

      p You're all set. Try to add a #[code w-button]:

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
  p.mt3
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
