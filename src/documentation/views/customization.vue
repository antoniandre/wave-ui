<template lang="pug">
main
  title-link.mt4(h1 slug="customization") Customization Via SCSS (optional)

  alert(info)
    | #[strong If you are using Nuxt], the steps to follow are different. Check the last paragraph of the
    a.ml1(href="/getting-started#installation-on-nuxt") Nuxt installation
    | .

  p.mt8.
    Wave UI components rely on SCSS variables that you can easily override from your SCSS file,
    just like this:
  pre.ssh-pre(data-label="SCSS")
    span.purple.text-bold @import&nbsp;
    span.red-light2 'wave-ui/src/wave-ui/scss/_variables'
    span.blue-grey ;
    br
    br

    span.pink $base-font-size
    span.blue-grey :&nbsp;
    span.deep-orange 14px
    span.blue-grey ;
    br
    span.pink $base-increment
    span.blue-grey :&nbsp;
    span.deep-orange 5px
    span.blue-grey ;

  .title4 But to do so, you need to slightly modify your config.

  title-link(h2) Modify your config
  .title4.mt4 1. Install the devDependencies
  ssh-pre.mb2(language="shell") npm i -D pug pug-plain-loader node-sass sass-loader@10
  small.text-italic.grey.
    The dev dependencies are only needed for building the project. They will not ship to production.
  p.mt3 Notes: #[span.code sass-loader 11] only works with Webpack 5.

  .title4.mt8 2. Update #[span.code main.js]
  p In main.js, replace the 2 Wave UI imports with:
  ssh-pre.mt5(language="js" label="main.js").
    import WaveUI from 'wave-ui/src/wave-ui'

  .title4.mt8 3. Create an SCSS file &amp; import it globally
  ul
    li.
      In your project #[span.code src] folder, create a #[code _variables.scss] (usually in an #[span.code scss]
      folder), and import Wave UI's variables: #[code @import 'wave-ui/src/wave-ui/scss/_variables';].

    li.mt2
      | Import your SCSS variables file globally from Vue config and re-serve the app.
      ssh-pre.mt5(language="js" label="vue.config.js").
        module.exports = {
          transpileDependencies: ['wave-ui'], // ! \\
          css: {
            loaderOptions: {
              // `additionalData` was called `prependData` prior sass-loader 9.
              sass: { additionalData: '@import "@/scss/_variables.scss";' }
            }
          }
        }

      alert(info).
        Note from the above code that since you import Wave UI source code, you need to transpile it.

  .title4.mt8 Voilà !
  p You're all set, you can now override the SCSS variables.

  .w-divider.my12
  title-link(h2) Basic SCSS overrides
  pre.ssh-pre(data-label="@/scss/_variables.scss")
    span.grey-light1.text-italic // First import the Wave UI variables, then override what you want.
    br
    span.purple.text-bold @import&nbsp;
    span.red-light2 'wave-ui/src/wave-ui/scss/_variables'
    span.blue-grey ;
    br
    br

    span.pink $base-font-size
    span.blue-grey :&nbsp;
    span.deep-orange 14px
    span.blue-grey ;
    br
    span.pink $base-increment
    span.blue-grey :&nbsp;
    span.purple.text-bold round
    span.blue-grey (
    span.pink $base-font-size
    span.blue-grey.mx1 /
    span.orange 4
    span.blue-grey )
    span.blue-grey ;
    br
    span.pink $layout-padding
    span.blue-grey :&nbsp;
    span.pink $base-increment
    span.blue-grey.mx1 *
    span.orange 4
    span.blue-grey ;
    br
    span.pink $border-radius
    span.blue-grey :&nbsp;
    span.deep-orange 3px
    span.blue-grey ;
    br
    span.pink $border
    span.blue-grey :&nbsp;
    span.deep-orange 1px solid rgba(0, 0, 0, 0.15)
    span.blue-grey ;
    br
    span.pink $drawer-max-size
    span.blue-grey :&nbsp;
    span.deep-orange 380px
    span.blue-grey ;
    br
    span.pink $transition-duration
    span.blue-grey :&nbsp;
    span.deep-orange 0.25s
    span.blue-grey ;
    br
    span.pink $box-shadow
    span.blue-grey :&nbsp;
    span.deep-orange 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    br
    span.deep-orange              0 2px 2px 0 rgba(0, 0, 0, 0.15),
    br
    span.deep-orange              0 1px 5px 0 rgba(0, 0, 0, 0.15)
    span.blue-grey ;

  title-link(h2) Give Wave UI CSS more priority
  p It is also possible to control Wave UI's CSS rules priorities by overriding the CSS base scope:
  pre.ssh-pre(data-label="SCSS")
    span.pink $css-scope
    span.blue-grey.mr1 :
    span.red-light2 '.w-app'
    span.blue-grey ;
  p.
    For instance if you set the scope to #[code html > body > div.w-app], the default
    #[code .w-app .primary {color: #234781;}] would become
    #[code html > body > div.w-app .primary {color: #234781;}].
  alert.mt6.py3(success).
    This means you can control all the css rules specificity and consequently their priority!

  title-link(h2 slug="presets")
    | Presets
    w-tag.ml3(bg-color="red-light1" lg color="white") Coming soon
  ssh-pre(language="js" label="Javascript").
    // Buttons example.
    {
      'w-button': { sm: true, outlined: true, round: true }
    }
</template>

<style lang="scss">
pre.ssh-pre {white-space: pre-wrap;}
</style>
