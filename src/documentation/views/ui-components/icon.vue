<template lang="pug">
div
  h1.headline.mt-4 #[span.code w-icon]
  p.
    The Font Awesome 4 icons font is loaded on demand if you use the 'fa' icon font.#[br]
    The Ionicons 4 icons font is loaded on demand if you use the 'ion' icon font.#[br]
    You can also use your own font as long as you import it.#[br]
    You can use multiple icons sources at the same time but it is not recommended.

  h2 Ionicons 4 (iOS &amp; Material Design)
  p
    a(href="https://ionicons.com/v4/cheatsheet.html" target="_blank") Ionicons V4 Cheatsheet
  w-icon.mr-1(xs color="primary") ion-md-star
  w-icon.mr-1(sm color="primary") ion-md-star
  w-icon.mr-1(md color="primary") ion-md-star
  w-icon.mr-1(lg color="primary") ion-md-star
  w-icon.mr-1(xl color="primary") ion-md-star
  w-icon.ml-8.mr-1(:size="50" color="primary") ion-md-star
  w-icon(size="5.6em" color="primary") ion-md-star
  br
  w-icon.mr-1(xs color="primary") ion-md-star-outline
  w-icon.mr-1(sm color="primary") ion-md-star-outline
  w-icon.mr-1(md color="primary") ion-md-star-outline
  w-icon.mr-1(lg color="primary") ion-md-star-outline
  w-icon.mr-1(xl color="primary") ion-md-star-outline
  br
  w-icon.mr-1(xs color="primary") ion-md-heart
  w-icon.mr-1(sm color="primary") ion-md-heart
  w-icon.mr-1(md color="primary") ion-md-heart
  w-icon.mr-1(lg color="primary") ion-md-heart
  w-icon.mr-1(xl color="primary") ion-md-heart
  br
  w-icon.mr-1(xs color="primary") ion-md-heart-empty
  w-icon.mr-1(sm color="primary") ion-md-heart-empty
  w-icon.mr-1(md color="primary") ion-md-heart-empty
  w-icon.mr-1(lg color="primary") ion-md-heart-empty
  w-icon.mr-1(xl color="primary") ion-md-heart-empty
  br
  w-icon.mr-1(xs color="primary") ion-ios-heart
  w-icon.mr-1(sm color="primary") ion-ios-heart
  w-icon.mr-1(md color="primary") ion-ios-heart
  w-icon.mr-1(lg color="primary") ion-ios-heart
  w-icon.mr-1(xl color="primary") ion-ios-heart
  br
  w-icon.mr-1(xs color="primary") ion-ios-heart-empty
  w-icon.mr-1(sm color="primary") ion-ios-heart-empty
  w-icon.mr-1(md color="primary") ion-ios-heart-empty
  w-icon.mr-1(lg color="primary") ion-ios-heart-empty
  w-icon.mr-1(xl color="primary") ion-ios-heart-empty

  h2 Font Awesome 4
  p
    a(href="https://fontawesome.com/v4.7.0/icons/" target="_blank") Font Awesome V4 Cheatsheet
  w-icon.mr-1(xs color="primary") fa fa-star
  w-icon.mr-1(sm color="primary") fa fa-star
  w-icon.mr-1(md color="primary") fa fa-star
  w-icon.mr-1(lg color="primary") fa fa-star
  w-icon.mr-1(xl color="primary") fa fa-star
  br
  w-icon.mr-1(xs color="primary") fa fa-star-o
  w-icon.mr-1(sm color="primary") fa fa-star-o
  w-icon.mr-1(md color="primary") fa fa-star-o
  w-icon.mr-1(lg color="primary") fa fa-star-o
  w-icon.mr-1(xl color="primary") fa fa-star-o
  w-icon.ml-8.mr-1(:size="50" color="primary") fa fa-star
  w-icon(size="5em" color="primary") fa fa-star
  br
  w-icon.mr-1(xs color="primary") fa fa-heart
  w-icon.mr-1(sm color="primary") fa fa-heart
  w-icon.mr-1(md color="primary") fa fa-heart
  w-icon.mr-1(lg color="primary") fa fa-heart
  w-icon.mr-1(xl color="primary") fa fa-heart
  br
  w-icon.mr-1(xs color="primary") fa fa-heart-o
  w-icon.mr-1(sm color="primary") fa fa-heart-o
  w-icon.mr-1(md color="primary") fa fa-heart-o
  w-icon.mr-1(lg color="primary") fa fa-heart-o
  w-icon.mr-1(xl color="primary") fa fa-heart-o

</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>