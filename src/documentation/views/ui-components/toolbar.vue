<template lang="pug">
div
  h1.headline.mt-4 #[span.code w-toolbar]

  h2 Simple toolbar with shadow
  w-toolbar.mt-4(shadow)
    .title.my-0 Title
    .spacer
    span.ml-2 Item 1
    span.ml-2 Item 2
    span.ml-2 Item 3

  h2 Background color &amp; text color
  w-toolbar.mt-4(bg-color="blue-lighter-5" color="blue-darker-3")
    .title.my-0 Title
    .spacer
    span.ml-2 Item 1
    span.ml-2 Item 2
    span.ml-2 Item 3

  h2 Toolbars inside w-card
  p.
    The w-card component will detect if there is a toolbar in the title slot or in the actions
    slot and will remove the default padding and border on this slot if there is.

  .w-flex.mt-4
    w-card.mr-2
      template(v-slot:title)
        w-toolbar
          .title.my-0 Top Bar
          .spacer
          span.ml-2 Item 1
          span.ml-2 Item 2
          span.ml-2 Item 3
    w-card.ml-2
      template(v-slot:actions)
        w-toolbar(bottom)
          .title.my-0 Bottom Bar
          .spacer
          span.ml-2 Item 1
          span.ml-2 Item 2
          span.ml-2 Item 3

  h3 With shadow
  .w-flex.mt-4
    w-card.mr-2
      template(v-slot:title)
        w-toolbar(shadow)
          .title.my-0 Top Bar
          .spacer
          span.ml-2 Item 1
          span.ml-2 Item 2
          span.ml-2 Item 3
    w-card.ml-2
      template(v-slot:actions)
        w-toolbar(bottom shadow)
          .title.my-0 Bottom Bar
          .spacer
          span.ml-2 Item 1
          span.ml-2 Item 2
          span.ml-2 Item 3

  h2 Custom toolbar height
  p.
    The #[code w-toolbar] component also accepts a height. It can be set as a string with units
    or a number of pixels (without unit).
  w-toolbar.mt-4.py-0(bg-color="blue-lighter-5" color="blue-darker-3" height="5em")
    .title.my-0 Title
    .spacer
    span.mx-1 Item 1
    span.mx-1 Item 2
    w-divider.mx-2(vertical)
    span.mx-1 Item 3
    span.mx-1 Item 4
    w-divider.mx-2(vertical)
    span.mx-1 Item 5
    span.mx-1 Item 6

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
