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
