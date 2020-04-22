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

  h2 Toolbars inside w-card
  .layout.mt-4
    w-card.mr-2
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

  .layout.mt-4
    w-card.mr-2
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
  .w-card {width: 350px;height: 200px;}
}
</style>