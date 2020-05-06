<template lang="pug">
div
  h1.headline.mt-4 #[span.code w-icon]
  p.
    Wave UI works with your favorite icon font or even your custom one.#[br]
    Bellow are some examples using a few popular icons fonts.

  ul
    li
      h2 Material Design Icons with ligatures (Free)
      p
        a(href="https://material.io/resources/icons" target="_blank") Material Design Icons Cheatsheet

      pre npm install material-design-icons
      pre.mb-4 import 'material-design-icons/iconfont/material-icons.css'

      w-icon.mr-1(xs color="primary") material-icons star
      w-icon.mr-1(md color="primary") material-icons star
      w-icon.mr-1(xl color="primary") material-icons star
      br
      w-icon.mr-1(xs color="primary") material-icons favorite
      w-icon.mr-1(md color="primary") material-icons favorite
      w-icon.mr-1(xl color="primary") material-icons favorite

    li
      h2 Material Design Icons - community full set (Free)
      p
        a(href="https://materialdesignicons.com" target="_blank") Material Design Icons Cheatsheet

      pre npm install @mdi/font
      pre.mb-4 import '@mdi/font/css/materialdesignicons.min.css'

      w-icon.mr-1(xs color="primary") mdi mdi-star
      w-icon.mr-1(md color="primary") mdi mdi-star
      w-icon.mr-1(xl color="primary") mdi mdi-star
      br
      w-icon.mr-1(xs color="primary") mdi mdi-heart
      w-icon.mr-1(md color="primary") mdi mdi-heart
      w-icon.mr-1(xl color="primary") mdi mdi-heart

    li
      h2 Ionicons 4: iOS &amp; Material Design (Free)
      p
        a(href="https://ionicons.com/v4/cheatsheet.html" target="_blank") Ionicons V4 Cheatsheet

      pre npm install ionicons
      pre.mb-4 import 'ionicons/dist/css/ionicons.min.css'

      .layout
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
      h2 Font Awesome 4 (Free)
      p
        a(href="https://fontawesome.com/v4.7.0/icons/" target="_blank") Font Awesome V4 Cheatsheet

      pre npm install font-awesome
      pre.mb-4 import 'font-awesome/css/font-awesome.min.css'

      w-icon.mr-1(xs color="primary") fa fa-star
      w-icon.mr-1(md color="primary") fa fa-star
      w-icon.mr-1(xl color="primary") fa fa-star
      br
      w-icon.mr-1(xs color="primary") fa fa-heart
      w-icon.mr-1(md color="primary") fa fa-heart
      w-icon.mr-1(xl color="primary") fa fa-heart
</template>

<script>
import 'material-design-icons/iconfont/material-icons.css'
import '@mdi/font/css/materialdesignicons.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'ionicons/dist/css/ionicons.min.css'
import config from '@/wave-ui/utils/config'

// Add ligature on the icons page for the demo.
config.iconsLigature = 'material-icons'

export default {
  beforeDestroy () {
    config.iconsLigature = false
  }
}
</script>
