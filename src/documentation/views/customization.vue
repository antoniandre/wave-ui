<template lang="pug">
main
  title-link.mt4(h1 slug="customization") Customization Via CSS Variables

  w-accordion(
    v-model="openAccordionItems"
    title-class="pa3 px0"
    content-class="px8"
    :expanded-class="$store.state.darkMode ? 'contrast-o05--bg' : 'info-light6--bg'"
    expand-icon-rotate90
    expand-single)
    w-accordion-item
      template(#title)
        title-link.my0(h2 slug="css-variable-overrides") Basic CSS variable overrides
      template(#content)
        p.
          Wave UI exposes its design tokens as CSS custom properties. Override them from any stylesheet
          loaded after Wave UI, no Sass build step required.
        ssh-pre(language="css" label="wave-ui-overrides.css" :dark="$store.state.darkMode").
          :root {
            --w-base-font-size: 14px;
            --w-base-increment: 5px;
            --w-layout-padding: calc(4 * var(--w-base-increment));
            --w-border-radius: 3px;
            --w-border-color: color-mix(in srgb, var(--w-contrast-bg-color) 15%, transparent);
            --w-transition-duration: 0.25s;
            --w-box-shadow:
              0 3px 1px -2px color-mix(in srgb, #000 20%, transparent),
              0 2px 2px 0 color-mix(in srgb, #000 15%, transparent),
              0 1px 5px 0 color-mix(in srgb, #000 15%, transparent);
          }

          :root[data-theme="light"] {
            --w-primary-color: #234781;
            --w-base-bg-color: #fff;
            --w-base-color: #000;
          }

          :root[data-theme="dark"] {
            --w-primary-color: #89b6d2;
            --w-base-bg-color: #222;
            --w-base-color: #fff;
          }

    //- Override CSS scope.
    w-accordion-item
      template(#title)
        title-link.my0(h2 slug="override-css-scope")
          | Override the global CSS scope
          small.ml2 (Give Wave UI more priority)
      template(#content)
        .title5.mb0.
          You can control all the css rules specificity and their priority by overriding
          the default CSS base scope #[strong via SCSS].
        p
          | For instance if you set the scope to:&nbsp;
          pre.ssh-pre.d-iflex(data-type="css" data-label="SCSS" :dark="$store.state.darkMode")
            strong.pink $css-scope
            span.punctuation.mr1 :
            span.quote '.html > body > '
            span.punctuation ;
            span.comment.ml2 // Default: '.w-app'
          |,
          br
          | the default&nbsp;
          ssh-pre.d-iblock.my0.mr1.py0.px1.lh3(language="css" :dark="$store.state.darkMode").
            .w-app .primary {color: #234781;}
          | would become&nbsp;
          ssh-pre.d-iblock.my0.py0.px1.lh3(language="css" :dark="$store.state.darkMode").
            html > body > div.w-app .primary {color: #234781;}
          | .

        p.mt5
          | To override the SCSS variable, follow the instructions in the section below:
          a.ml1(href="#scss-overrides" @click="openAccordionItems = [false, false, false, true]")
            strong SCSS source overrides (advanced).
            w-icon.ml1(sm) wi-arrow-down

    //- Disable CSS layout classes.
    w-accordion-item
      template(#title)
        title-link.my0(h2 slug="disable-layout-classes") Disable the CSS layout classes (not recommended)
      template(#content)
        p.mb0.
          You may want to use another CSS framework (like Tailwind) instead of the Wave UI's built-in CSS
          layout classes.#[br]
          This is not recommended, but it's possible to disable the CSS layout classes of Wave UI so they
          don't conflict with the external library.#[br]
          This is a #[strong build-time source option only]. Most apps should keep the built-in layout classes
          and customize their scale with #[code --w-base-increment] instead.
        p
          | To disable, set this variable before importing Wave UI in your build config:&nbsp;
          pre.ssh-pre.d-iblock.my0.py0.px1.lh3(data-type="css" data-label="SCSS" :dark="$store.state.darkMode")
            strong.pink $use-layout-classes
            span.punctuation.mr1 :
            span.red-light2 false
            span.punctuation ;
            span.comment.ml2 // Default: true
          br
          a.d-block.mt-2(href="#scss-overrides" @click="openAccordionItems = [false, false, false, true]")
            | See SCSS source overrides below.
            w-icon.ml1(sm) wi-arrow-down
        p
          | You can have a look at all the classes that will #[strong not] be generated in this file:
          a.ml2(href="https://github.com/antoniandre/wave-ui/blob/master/src/wave-ui/scss/_layout.scss" target="_blank")
            | layout.scss on Github
            w-icon.ml1(sm) mdi mdi-open-in-new

    //- SCSS source overrides.
    w-accordion-item
      template(#title)
        title-link.my0(h2 slug="scss-overrides") SCSS source overrides (advanced)
      template(#content)
        alert(info)
          p.title3.text-bold Only needed if:
          ul
            li.text-bold You want to override the default CSS scope
            li
              strong.mr1 You want to disable the layout classes
              | to use an external CSS framework like Tailwind.

        p.mt3.
          In this case, you need to build Wave UI from source.#[br]
          For all other customization, use CSS variables above.

        pre.ssh-pre(data-type="css" data-label="SCSS" :dark="$store.state.darkMode")
          span.keyword @use
          span.quote.mx1 'wave-ui/src/wave-ui/scss/variables'
          span.keyword.mx1 as *
          span.punctuation ;
          br
          span.comment // Override before any Wave UI components import.
          br
          br
          span.comment // Change the CSS scope (nesting prefix for all Wave rules)
          br
          span.variable $css-scope
          span.punctuation.mr1 :
          span.red-light2 '.my-custom-scope'
          span.punctuation ;
          span.comment.ml1 // Default: '.w-app'
          br
          br
          span.comment // Disable layout utility classes (e.g. to use Tailwind)
          br
          span.variable $use-layout-classes
          span.punctuation.mr1 :
          span.red-light2 false
          span.punctuation ;
          span.comment.ml1 // Default: true

        p.mt4.
          Then only import Wave UI source in your entry point (without the CSS file):

        pre.ssh-pre.w-flex.align-center.gap1(data-type="js" :dark="$store.state.darkMode")
          span.keyword import
          span.variable WaveUI
          span.keyword from
          span.quote 'wave-ui/#[strong.size--sm src/wave-ui]'

        p.mt4.caption.text-italic.
          #[strong Important:] SCSS variables only affect the #[strong build-time] output (which selectors are
          emitted and their nesting scope). They do #[strong not] affect values at runtime. Use CSS custom
          properties (above) for all runtime customization.

      //- Nuxt with Wave UI from source.
      .w-divider.my12
      title-link(h2) Nuxt with Wave UI from source
      p.
        If you're using Nuxt and importing Wave UI from source (via #[code wave-ui/src/wave-ui]),
        you can override SCSS variables in your build config:

      w-accordion(
        :model-value="[true, false]"
        expand-single
        expand-icon-rotate90)
        w-accordion-item
          template(#title) Nuxt 4 / 3
          template(#content)
            p.
              Create an #[code app/plugins/wave-ui.js] (or #[code plugins/wave-ui.js]) and import from source:

            ssh-pre.mt4(language="js" :dark="$store.state.darkMode").
              import WaveUI from 'wave-ui/src/wave-ui'

              export default defineNuxtPlugin(nuxtApp => {
                nuxtApp.vueApp.use(WaveUI, { on: '#__nuxt' })
              })

            p.mt6.
              Then in #[code nuxt.config.js], add SCSS preprocessor options to set Wave UI variables:

            ssh-pre.mt4(language="js" :dark="$store.state.darkMode").
              export default defineNuxtConfig({
                // ... other config ...
                css: {
                  preprocessorOptions: {
                    scss: {
                      additionalData: `
                        @use 'wave-ui/src/wave-ui/scss/variables' as *;
                        $css-scope: '.w-app';
                        $use-layout-classes: true;
                      `,
                    }
                  }
                }
              })

            p.mt6.
              Since you're importing from source, make sure #[code node_modules] is transpiled:

            ssh-pre.mt4(language="js" :dark="$store.state.darkMode").
              export default defineNuxtConfig({
                build: {
                  transpile: ['wave-ui']
                }
              })

        w-accordion-item
          template(#title) Nuxt 2
          template(#content)
            p.
              The Nuxt 2 Wave UI module (#[code @wave-ui/nuxt]) supports a #[code useScss] option
              that points to your SCSS variables file:

            ssh-pre.mt4(language="js" :dark="$store.state.darkMode").
              buildModules: [
                [
                  '@wave-ui/nuxt',
                  {
                    useScss: '~/scss/_variables.scss'
                  }
                ]
              ]

            p.mt6.
              That file should import and override Wave UI variables:

            ssh-pre.mt4(language="scss" :dark="$store.state.darkMode").
              @use 'wave-ui/src/wave-ui/scss/variables' as *;

              $css-scope: '.w-app';
              $use-layout-classes: true;

            p.mt6.
              And enable transpilation in #[code nuxt.config.js]:

            ssh-pre.mt4(language="js" :dark="$store.state.darkMode").
              build: {
                transpile: ['wave-ui']
              }
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const openAccordionItems = ref([true, false, false, false])

const route = useRoute()
const accordionItems = ['css-variable-overrides', 'override-css-scope', 'disable-layout-classes', 'scss-overrides']

onMounted(() => {
  if (route.hash) {
    openAccordionItems.value = [false, false, false, false]
    openAccordionItems.value[accordionItems.indexOf(route.hash.slice(1))] = true
  }
})
</script>

<style lang="scss">
pre.ssh-pre {white-space: pre-wrap;}
</style>
