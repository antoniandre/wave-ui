<template lang="pug">
main
  title-link.mt4(h1) Other useful CSS classes

  p.
    In addition to the CSS classes listed in this layout section, here are a few other
    CSS classes related to the display.

  title-link(h2) Display
  ul.mt4
    li
      code.mr2 .show
      | Shows an element using the #[span.code display: block] property.#[br]
      | But elements are visible by default. ;)
    li
      code.mr2 .hide
      | Hides an element using the #[span.code display: none] property.
    li.mt1
      code.mr2 .d-block
      | Applies the #[span.code display: block] property.
    li.mt1
      code.mr2 .d-iblock
      | Applies the #[span.code display: inline-block] property.
    li.mt1
      code.mr2 .d-flex
      | Applies the #[span.code display: flex] property.
    li.mt1
      code.mr2 .d-iflex
      | Applies the #[span.code display: inline-flex] property.
  title-link(h2) Position
  ul.mt4
    li
      code.mr2 .relative
      | Applies the #[span.code position: relative] property.
    li
      code.mr2 .absolute
      | Applies the #[span.code position: absolute] property.
    li
      code.mr2 .fixed
      | Applies the #[span.code position: fixed] property.
    li
      code.mr2 .sticky
      | Applies the #[span.code position: sticky] property.
  title-link(h2) Height
  ul.mt4
    li
      code.mr2 .h-auto
      | Applies the #[span.code height: auto] property.
    li
      code.mr2 .h-screen
      | Applies the #[span.code height: 100vh] property.
  title-link(h2) Overflow
  ul.mt4
    li
      code.mr2 .ovh
      | Applies the #[span.code overflow: hidden] property.
    li
      code.mr2 .ovv
      | Applies the #[span.code overflow: visible] property.
    li
      code.mr2 .ova
      | Applies the #[span.code overflow: auto] property.
  title-link(h2) Opacity
  ul.mt4
    li
      code.mr2 .op05
      | Applies the #[span.code opacity: 0.05] property.
    li
      code.mr2 .op1
      | Applies the #[span.code opacity: 0.1] property.
    li
      code.mr2 .op2
      | Applies the #[span.code opacity: 0.2] property.
    li
      code.mr2 .op3
      | Applies the #[span.code opacity: 0.3] property.
    li
      code.mr2 .op4
      | Applies the #[span.code opacity: 0.4] property.
    li
      code.mr2 .op5
      | Applies the #[span.code opacity: 0.5] property.
    li
      code.mr2 .op6
      | Applies the #[span.code opacity: 0.6] property.
    li
      code.mr2 .op7
      | Applies the #[span.code opacity: 0.7] property.
    li
      code.mr2 .op8
      | Applies the #[span.code opacity: 0.8] property.
    li
      code.mr2 .op9
      | Applies the #[span.code opacity: 0.9] property.

  alert(tip)
    | In general, it's always useful to look into the source code by yourself to understand what it
    | does: you can find all the layout classes in the
    a.ml1(
      href="https://github.com/antoniandre/wave-ui/blob/master/src/wave-ui/scss/_layout.scss"
      target="_blank")
      | layout.scss
      w-icon.mx1(sm) mdi mdi-open-in-new
    | file.
</template>
