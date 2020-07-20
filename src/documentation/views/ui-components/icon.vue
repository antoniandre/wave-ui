<template lang="pug">
div
  title-link.mt-4.code(h1) w-icon

  title-link(h2) Colors
  w-icon.mr-1(xl color="primary-dark-1") mdi mdi-home
  w-icon.mr-1(xl color="primary") mdi mdi-home
  w-icon.mr-1(xl color="primary-light-1") mdi mdi-home
  w-icon.mr-1(xl color="primary-light-2") mdi mdi-home
  w-icon.mr-1(xl color="primary-light-3") mdi mdi-home

  title-link(h2) Background colors
  p.mb-4
    | If you want to set a background on an icon, you may need an
    router-link.mx-1(to="/w-button") icon button
    | instead.
    | #[br]Here is how you can apply a background color to an icon.

  w-icon.mr-1.pa-5(xl bg-color="primary-dark-1") mdi mdi-home
  w-icon.mr-1.pa-5(xl bg-color="primary") mdi mdi-home
  w-icon.mr-1.pa-5(xl bg-color="primary-light-1" color="white") mdi mdi-home
  w-icon.mr-1.pa-5(xl bg-color="primary-light-2" color="white") mdi mdi-home
  w-icon.mr-1.pa-5(xl bg-color="primary-light-3" color="white") mdi mdi-home

  title-link(h2) Sizes
  p.
    By default the icons inherit their font-size from their parent DOM element.
    But you can easily control their size.
  w-icon.mr-2(xs color="primary-light-2") mdi mdi-home
  w-icon.mr-2(sm color="primary-light-2") mdi mdi-home
  w-icon.mr-2(md color="primary-light-2") mdi mdi-home
  w-icon.mr-2(lg color="primary-light-2") mdi mdi-home
  w-icon.mr-2(xl color="primary-light-2") mdi mdi-home
  w-icon.mr-2(color="primary-light-2" :size="40") mdi mdi-home
  w-icon.mr-2(color="primary-light-2" size="4em") mdi mdi-home


  title-link(h2) Different icon fonts supported
  p.
    Wave UI works with your favorite icon font or even your own custom one.#[br]
    Bellow are some examples using a few popular and free icons fonts.

  ul
    li
      h3 Material Design Icons with ligatures
      p
        a(href="https://material.io/resources/icons" target="_blank") Material Design Icons Cheatsheet

      ssh-pre(language="bash") npm install material-design-icons
      ssh-pre(language="js") import 'material-design-icons/iconfont/material-icons.css'

      w-icon.mr-1(xs color="primary") material-icons star
      w-icon.mr-1(md color="primary") material-icons star
      w-icon.mr-1(xl color="primary") material-icons star
      br
      w-icon.mr-1(xs color="primary") material-icons favorite
      w-icon.mr-1(md color="primary") material-icons favorite
      w-icon.mr-1(xl color="primary") material-icons favorite

    li
      h3 Material Design Icons - community full set
      p
        a(href="https://materialdesignicons.com" target="_blank") Material Design Icons Cheatsheet

      ssh-pre(language="bash") npm install @mdi/font
      ssh-pre(language="js") import '@mdi/font/css/materialdesignicons.min.css'

      w-icon.mr-1(xs color="primary") mdi mdi-star
      w-icon.mr-1(md color="primary") mdi mdi-star
      w-icon.mr-1(xl color="primary") mdi mdi-star
      br
      w-icon.mr-1(xs color="primary") mdi mdi-heart
      w-icon.mr-1(md color="primary") mdi mdi-heart
      w-icon.mr-1(xl color="primary") mdi mdi-heart

    li
      h3 Ionicons 4: iOS &amp; Material Design
      p
        a(href="https://ionicons.com/v4/cheatsheet.html" target="_blank") Ionicons V4 Cheatsheet

      ssh-pre(language="bash") npm install ionicons
      ssh-pre(language="js") import 'ionicons/dist/css/ionicons.min.css'

      .w-flex
        div.mr-8
          div.mb-2.grey
            strong iOS
          w-icon.mr-1(xs color="primary") ion-ios-star
          w-icon.mr-1(md color="primary") ion-ios-star
          w-icon.mr-1(xl color="primary") ion-ios-star
          br
          w-icon.mr-1(xs color="primary") ion-ios-heart
          w-icon.mr-1(md color="primary") ion-ios-heart
          w-icon.mr-1(xl color="primary") ion-ios-heart
        div
          div.mb-2.grey
            strong Material Design
          w-icon.mr-1(xs color="primary") ion-md-star
          w-icon.mr-1(md color="primary") ion-md-star
          w-icon.mr-1(xl color="primary") ion-md-star
          br
          w-icon.mr-1(xs color="primary") ion-md-heart
          w-icon.mr-1(md color="primary") ion-md-heart
          w-icon.mr-1(xl color="primary") ion-md-heart

    li
      h3 Font Awesome 4
      p
        a(href="https://fontawesome.com/v4.7.0/icons/" target="_blank") Font Awesome V4 Cheatsheet

      ssh-pre(language="bash") npm install font-awesome
      ssh-pre(language="js") import 'font-awesome/css/font-awesome.min.css'

      w-icon.mr-1(xs color="primary") fa fa-star
      w-icon.mr-1(md color="primary") fa fa-star
      w-icon.mr-1(xl color="primary") fa fa-star
      br
      w-icon.mr-1(xs color="primary") fa fa-heart
      w-icon.mr-1(md color="primary") fa fa-heart
      w-icon.mr-1(xl color="primary") fa fa-heart

  title-link(h2) Spin
  p You can also spin the icons.
  w-icon.mr-1(xl color="primary" spin) mdi mdi-star
</template>

<script>
import 'material-design-icons/iconfont/material-icons.css'
import 'font-awesome/css/font-awesome.min.css'
import 'ionicons/dist/css/ionicons.min.css'
import config from '@/wave-ui/utils/config'

export default {
  beforeCreate () {
    // Add ligature on the icons page for the demo.
    config.iconsLigature = 'material-icons'
  },
  beforeDestroy () {
    config.iconsLigature = false
  }
}
</script>
