<template lang="pug">
div
  h1.headline.mt-4 #[span.code w-icon]
  p.
    Wave UI works with your favorite icon font or even your custom one.#[br]
    Bellow are some examples using a few popular icons fonts.

  h2 Material Design Icons - Free
  p
    a(href="https://material.io/resources/icons" target="_blank") Material Design Icons Cheatsheet

  .layout.mt-4.wrap
    code TODO: support ligature fonts.
    //- div.mr-8
      w-icon.mr-1(xs color="primary") star
      w-icon.mr-1(sm color="primary") star
      w-icon.mr-1(md color="primary") star
      w-icon.mr-1(lg color="primary") star
      w-icon.mr-1(xl color="primary") star
      br

  h2 Ionicons 4 (iOS &amp; Material Design) - Free
  p
    a(href="https://ionicons.com/v4/cheatsheet.html" target="_blank") Ionicons V4 Cheatsheet

  .layout.mt-4.wrap
    div.mr-8
      w-icon.mr-1(xs color="primary") ion-md-star
      w-icon.mr-1(sm color="primary") ion-md-star
      w-icon.mr-1(md color="primary") ion-md-star
      w-icon.mr-1(lg color="primary") ion-md-star
      w-icon.mr-1(xl color="primary") ion-md-star
      br
      w-icon.mr-1(xs color="primary") ion-md-star-outline
      w-icon.mr-1(sm color="primary") ion-md-star-outline
      w-icon.mr-1(md color="primary") ion-md-star-outline
      w-icon.mr-1(lg color="primary") ion-md-star-outline
      w-icon.mr-1(xl color="primary") ion-md-star-outline
      br
      w-icon.mr-1(xs color="primary") ion-ios-star
      w-icon.mr-1(sm color="primary") ion-ios-star
      w-icon.mr-1(md color="primary") ion-ios-star
      w-icon.mr-1(lg color="primary") ion-ios-star
      w-icon.mr-1(xl color="primary") ion-ios-star
      br
      w-icon.mr-1(xs color="primary") ion-ios-star-outline
      w-icon.mr-1(sm color="primary") ion-ios-star-outline
      w-icon.mr-1(md color="primary") ion-ios-star-outline
      w-icon.mr-1(lg color="primary") ion-ios-star-outline
      w-icon.mr-1(xl color="primary") ion-ios-star-outline
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
    div
      w-icon.mr-1(:size="50" color="primary") ion-md-star
      w-icon(size="5.6em" color="primary") ion-md-star

  h2 Font Awesome 4 - Free
  p
    a(href="https://fontawesome.com/v4.7.0/icons/" target="_blank") Font Awesome V4 Cheatsheet
  .layout.mt-4.wrap
    div.mr-8
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
    div
      w-icon.mr-1(:size="50" color="primary") fa fa-star
      w-icon(size="5em" color="primary") fa fa-star
</template>

<script>
import '@mdi/font/css/materialdesignicons.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'ionicons/dist/css/ionicons.min.css'

export default {
}
</script>
