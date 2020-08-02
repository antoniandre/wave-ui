<template lang="pug">
div
  title-link.mt4(h1 slug="customization") Customization (optional)

  title-link(h2) Basic SCSS overrides
  //- p Wave UI components are pixel-based to avoid flickering on half-pixel value.
  p Wave UI components rely on SCSS variables that you can easily override from Your SCSS file:
  pre.ssh-pre(data-label="SCSS")
    span.grey-light1.text-italic // First import the Wave UI variables, then override what you want.
    br
    span.purple.text-bold @import&nbsp;
    span.red-light2 '~wave-ui/src/scss/variables'
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
  p It is also possible to control Wave UI CSS rules priorities by overriding the CSS base scope:
  pre.ssh-pre(data-label="SCSS")
    span.pink $css-scope
    span.blue-grey.mr1 :
    span.red-light2 '.w-app'
    span.blue-grey ;
  p.
    For instance if you set the scope to #[code html > body > div.w-app], the default
    #[code .w-app .primary {color: #234781;}] would become
    #[code html > body > div.w-app .primary {color: #234781;}].
  w-alert.mt6.py3.alert--success(success icon-outside).
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
.ssh-pre {white-space: pre-wrap;}
</style>
