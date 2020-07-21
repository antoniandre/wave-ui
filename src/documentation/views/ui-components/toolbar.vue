<template lang="pug">
div
  title-link.mt4.code(h1) w-toolbar

  title-link(h2) Simple toolbar with shadow
  w-toolbar.mt4(shadow)
    .title.my0 Title
    .spacer
    span.ml2 Item 1
    span.ml2 Item 2
    span.ml2 Item 3

  title-link(h2) Background color &amp; text color
  w-toolbar.mt4(bg-color="blue-light-5" color="blue-dark-3")
    .title.my0 Title
    .spacer
    span.ml2 Item 1
    span.ml2 Item 2
    span.ml2 Item 3

  title-link(h2) Toolbars inside w-card
  p.
    The w-card component will detect if there is a toolbar in the title slot or in the actions
    slot and will remove the default padding and border on this slot if there is.

  w-flex.mt4(wrap :gap="4")
    w-card
      template(v-slot:title)
        w-toolbar
          .title.my0 Top Bar
          .spacer
          span.ml2 Item 1
          span.ml2 Item 2
          span.ml2 Item 3
    w-card
      template(v-slot:actions)
        w-toolbar(bottom)
          .title.my0 Bottom Bar
          .spacer
          span.ml2 Item 1
          span.ml2 Item 2
          span.ml2 Item 3

  h3 With shadow
  w-flex.mt4(wrap :gap="4")
    w-card
      template(v-slot:title)
        w-toolbar(shadow)
          .title.my0 Top Bar
          .spacer
          span.ml2 Item 1
          span.ml2 Item 2
          span.ml2 Item 3
    w-card
      template(v-slot:actions)
        w-toolbar(bottom shadow)
          .title.my0 Bottom Bar
          .spacer
          span.ml2 Item 1
          span.ml2 Item 2
          span.ml2 Item 3

  title-link(h2) Custom toolbar height
  p.
    The #[code w-toolbar] component also accepts a height. It can be set as a string with units
    or a number of pixels (without unit).
  w-toolbar.mt4.py0(bg-color="blue-light-5" color="blue-dark-3" height="5em")
    .title.my0 Title
    .spacer
    span.mx1 Item 1
    span.mx1 Item 2
    w-divider.mx2(vertical)
    span.mx1 Item 3
    span.mx1 Item 4
    w-divider.mx2(vertical)
    span.mx1 Item 5
    span.mx1 Item 6
</template>

<style lang="scss">
.page--toolbar {
  .w-card {
    flex-grow: 1;
    max-width: 350px;
    height: 200px;
  }
}
</style>
