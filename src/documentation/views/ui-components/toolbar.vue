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
  w-toolbar.mt-4(bg-color="blue-lighten-5" color="blue-darken-3")
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

</template>

<script>
export default {

}
</script>

<style lang="scss">
.page--toolbar {
  .w-card {
    flex-grow: 1;
    max-width: 350px;
    height: 200px;
  }
}
</style>
