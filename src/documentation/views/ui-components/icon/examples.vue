<template lang="pug">
div.icons-demo
  title-link(h2) Different icon fonts supported
  p.
    Wave UI works with your favorite icon font or even your own custom one.#[br]
    Bellow are some examples using a few popular and free icons fonts.

  ul
    li
      h3.title3 Material Design Icons - community full set
      p
        a(href="https://materialdesignicons.com" target="_blank")
          | Material Design Icons Cheat sheet
          w-icon.ml1 mdi mdi-open-in-new

      ssh-pre(language="bash") npm install @mdi/font
      ssh-pre(language="js") import '@mdi/font/css/materialdesignicons.min.css'

      example
        w-icon.mr1(xs color="primary") mdi mdi-star
        w-icon.mr1(md color="primary") mdi mdi-star
        w-icon.mr1(xl color="primary") mdi mdi-star
        br
        w-icon.mr1(xs color="primary") mdi mdi-heart
        w-icon.mr1(md color="primary") mdi mdi-heart
        w-icon.mr1(xl color="primary") mdi mdi-heart
        template(#pug).
          w-icon.mr1(xs color="primary") mdi mdi-star
          w-icon.mr1(md color="primary") mdi mdi-star
          w-icon.mr1(xl color="primary") mdi mdi-star
          br
          w-icon.mr1(xs color="primary") mdi mdi-heart
          w-icon.mr1(md color="primary") mdi mdi-heart
          w-icon.mr1(xl color="primary") mdi mdi-heart

    li
      h3.title3 Material Design Icons #[strong with ligatures]
      p
        | This set of icons works differently as it uses ligatures.#[br]
        | To use icons ligatures, you need to activate it in the Wave UI options:
        code.ml1 { iconsLigature: 'material-icons' }
      p
        a(href="https://material.io/resources/icons" target="_blank")
          | Material Design Icons Cheat sheet
          w-icon.ml1 mdi mdi-open-in-new

      ssh-pre(language="bash") npm install material-design-icons
      ssh-pre(language="js") import 'material-design-icons/iconfont/material-icons.css'

      example(
        external-css="https://fonts.googleapis.com/icon?family=Material+Icons"
        full-js)
        w-icon.mr1(xs color="primary") material-icons star
        w-icon.mr1(md color="primary") material-icons star
        w-icon.mr1(xl color="primary") material-icons star
        br
        w-icon.mr1(xs color="primary") material-icons favorite
        w-icon.mr1(md color="primary") material-icons favorite
        w-icon.mr1(xl color="primary") material-icons favorite
        template(#pug).
          w-icon.mr1(xs color="primary") material-icons star
          w-icon.mr1(md color="primary") material-icons star
          w-icon.mr1(xl color="primary") material-icons star
          br
          w-icon.mr1(xs color="primary") material-icons favorite
          w-icon.mr1(md color="primary") material-icons favorite
          w-icon.mr1(xl color="primary") material-icons favorite
        template(#js).
          new Vue({
            waveui: new WaveUI({ iconsLigature: 'material-icons' })
          }).$mount('#app')

    li
      h3.title3 Ionicons 4: iOS &amp; Material Design
      p
        a(href="https://ionicons.com/v4/cheat sheet.html" target="_blank")
          | Ionicons V4 Cheat sheet
          w-icon.ml1 mdi mdi-open-in-new

      ssh-pre(language="bash") npm install ionicons
      ssh-pre(language="js") import 'ionicons/dist/css/ionicons.min.css'

      example(external-css="https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.6.3/css/ionicons.min.css")
        .w-flex
          div.mr8
            .text-bold.mb2.grey iOS
            w-icon.mr1(xs color="primary") ion-ios-star
            w-icon.mr1(md color="primary") ion-ios-star
            w-icon.mr1(xl color="primary") ion-ios-star
            br
            w-icon.mr1(xs color="primary") ion-ios-heart
            w-icon.mr1(md color="primary") ion-ios-heart
            w-icon.mr1(xl color="primary") ion-ios-heart
          div
            .text-bold.mb2.grey Material Design
            w-icon.mr1(xs color="primary") ion-md-star
            w-icon.mr1(md color="primary") ion-md-star
            w-icon.mr1(xl color="primary") ion-md-star
            br
            w-icon.mr1(xs color="primary") ion-md-heart
            w-icon.mr1(md color="primary") ion-md-heart
            w-icon.mr1(xl color="primary") ion-md-heart
        template(#pug).
          .w-flex
            div.mr8
              .text-bold.mb2.grey iOS
              w-icon.mr1(xs color="primary") ion-ios-star
              w-icon.mr1(md color="primary") ion-ios-star
              w-icon.mr1(xl color="primary") ion-ios-star
              br
              w-icon.mr1(xs color="primary") ion-ios-heart
              w-icon.mr1(md color="primary") ion-ios-heart
              w-icon.mr1(xl color="primary") ion-ios-heart
            div
              .text-bold.mb2.grey Material Design
              w-icon.mr1(xs color="primary") ion-md-star
              w-icon.mr1(md color="primary") ion-md-star
              w-icon.mr1(xl color="primary") ion-md-star
              br
              w-icon.mr1(xs color="primary") ion-md-heart
              w-icon.mr1(md color="primary") ion-md-heart
              w-icon.mr1(xl color="primary") ion-md-heart

    li
      h3.title3 Font Awesome 4
      p
        a(href="https://fontawesome.com/v4.7.0/icons/" target="_blank")
          | Font Awesome V4 Cheat sheet
          w-icon.ml1 mdi mdi-open-in-new

      ssh-pre(language="bash") npm install font-awesome
      ssh-pre(language="js") import 'font-awesome/css/font-awesome.min.css'

      example(external-css="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")
        w-icon.mr1(xs color="primary") fa fa-star
        w-icon.mr1(md color="primary") fa fa-star
        w-icon.mr1(xl color="primary") fa fa-star
        br
        w-icon.mr1(xs color="primary") fa fa-heart
        w-icon.mr1(md color="primary") fa fa-heart
        w-icon.mr1(xl color="primary") fa fa-heart
        template(#pug).
          w-icon.mr1(xs color="primary") fa fa-star
          w-icon.mr1(md color="primary") fa fa-star
          w-icon.mr1(xl color="primary") fa fa-star
          br
          w-icon.mr1(xs color="primary") fa fa-heart
          w-icon.mr1(md color="primary") fa fa-heart
          w-icon.mr1(xl color="primary") fa fa-heart

    li
      h3.title3 Use your own
      p.
        Once you have your icon font ready, just use it in #[strong.code w-icon] or other components
        by providing the CSS class. E.g. #[code icon-heart].

  w-divider.my12

  title-link(h2) Colors &amp; Background colors
  p.
    Like in most components, you can set a #[code color] for the text and a #[code bg-color] for the
    background.

  example(content-class="w-flex align-center")
    w-icon.mr1(xl color="primary-dark1") mdi mdi-home
    w-icon.mr1(xl color="primary") mdi mdi-home
    w-icon.mr1(xl color="primary-light1") mdi mdi-home
    w-icon.mr1(xl color="primary-light2") mdi mdi-home
    w-icon.mr1(xl color="primary-light3") mdi mdi-home
    template(#pug).
      w-icon.mr1(xl color="primary-dark1") mdi mdi-home
      w-icon.mr1(xl color="primary") mdi mdi-home
      w-icon.mr1(xl color="primary-light1") mdi mdi-home
      w-icon.mr1(xl color="primary-light2") mdi mdi-home
      w-icon.mr1(xl color="primary-light3") mdi mdi-home

  p.mb4
    | If you want to set a background on an icon, you may need an
    router-link.mx1(to="/w-button") icon button
    | instead. If not, just set a #[code bg-color].

  example(content-class="w-flex align-center")
    w-icon.mr1.pa5(xl bg-color="primary-dark1") mdi mdi-home
    w-icon.mr1.pa5(xl bg-color="primary") mdi mdi-home
    w-icon.mr1.pa5(xl bg-color="primary-light1" color="white") mdi mdi-home
    w-icon.mr1.pa5(xl bg-color="primary-light2" color="white") mdi mdi-home
    w-icon.mr1.pa5(xl bg-color="primary-light3" color="white") mdi mdi-home
    template(#pug).
      w-icon.mr1.pa5(xl bg-color="primary-dark1") mdi mdi-home
      w-icon.mr1.pa5(xl bg-color="primary") mdi mdi-home
      w-icon.mr1.pa5(xl bg-color="primary-light1" color="white") mdi mdi-home
      w-icon.mr1.pa5(xl bg-color="primary-light2" color="white") mdi mdi-home
      w-icon.mr1.pa5(xl bg-color="primary-light3" color="white") mdi mdi-home

  title-link(h2) Sizes
  p.
    By default the icons inherit their font-size from their parent DOM element.
    But you can easily control their size via the preset sizes #[code xs], #[code sm], #[code md],
    #[code lg], #[code xl] or via the #[code size] prop (sets the font-size).

  example
    w-icon.mr2(xs color="primary-light2") mdi mdi-home
    w-icon.mr2(sm color="primary-light2") mdi mdi-home
    w-icon.mr2(md color="primary-light2") mdi mdi-home
    w-icon.mr2(lg color="primary-light2") mdi mdi-home
    w-icon.mr2(xl color="primary-light2") mdi mdi-home
    w-icon.mr2(color="primary-light2" :size="40") mdi mdi-home
    w-icon.mr2(color="primary-light2" size="4em") mdi mdi-home
    template(#pug).
      w-icon.mr2(xs color="primary-light2") mdi mdi-home
      w-icon.mr2(sm color="primary-light2") mdi mdi-home
      w-icon.mr2(md color="primary-light2") mdi mdi-home
      w-icon.mr2(lg color="primary-light2") mdi mdi-home
      w-icon.mr2(xl color="primary-light2") mdi mdi-home
      w-icon.mr2(color="primary-light2" :size="40") mdi mdi-home
      w-icon.mr2(color="primary-light2" size="4em") mdi mdi-home

  title-link(h2) Transformations
  p You can also spin the icons, rotate and flip them.
  alert(info)
    | When rotating anti-clockwise add an #[code a] at the end. E.g. #[code rotate90a].#[br]
    small.grey.
      (the minus #[code -] notation is not possible in this case as it would mix up with
      positive values due to the Vue internal CamelCasing).
  example
    .title4 Spin
    w-icon.mr1(xl color="primary" spin) mdi mdi-star

    .title4.mt6 Rotate
    w-icon.rotated-icon.mr1(xl color="primary" rotate135a) mdi mdi-paw
    w-icon.rotated-icon.mr1(xl color="primary" rotate90a) mdi mdi-paw
    w-icon.rotated-icon.mr1(xl color="primary" rotate45a) mdi mdi-paw
    w-icon.rotated-icon.mr1(xl color="primary") mdi mdi-paw
    w-icon.rotated-icon.mr1(xl color="primary" rotate45) mdi mdi-paw
    w-icon.rotated-icon.mr1(xl color="primary" rotate90) mdi mdi-paw
    w-icon.rotated-icon.mr1(xl color="primary" rotate135) mdi mdi-paw
    w-icon.rotated-icon.mr1(xl color="primary" rotate180) mdi mdi-paw
    div
      code.rotation -135º
      code.rotation -90º
      code.rotation -45º
      code.rotation 0º
      code.rotation 45º
      code.rotation 90º
      code.rotation 135º
      code.rotation 180º

    .title4.mt6 Flip
    w-icon.flipped-icon.mr1(xl color="primary") mdi mdi-thumb-up
    w-icon.flipped-icon.mr1(xl color="primary" flip-x) mdi mdi-thumb-up
    w-icon.flipped-icon.mr1(xl color="primary" flip-y) mdi mdi-thumb-up
    div
      span.flip default
      code.flip flip-x
      code.flip flip-y
    template(#pug).
      .title4 Spin
      w-icon.mr1(xl color="primary" spin) mdi mdi-star

      .title4.mt6 Rotate
      w-icon.rotated-icon.mr1(xl color="primary" rotate135a) mdi mdi-paw
      w-icon.rotated-icon.mr1(xl color="primary" rotate90a) mdi mdi-paw
      w-icon.rotated-icon.mr1(xl color="primary" rotate45a) mdi mdi-paw
      w-icon.rotated-icon.mr1(xl color="primary") mdi mdi-paw
      w-icon.rotated-icon.mr1(xl color="primary" rotate45) mdi mdi-paw
      w-icon.rotated-icon.mr1(xl color="primary" rotate90) mdi mdi-paw
      w-icon.rotated-icon.mr1(xl color="primary" rotate135) mdi mdi-paw
      w-icon.rotated-icon.mr1(xl color="primary" rotate180) mdi mdi-paw

      .title4.mt6 Flip
      w-icon.mr1(xl color="primary") mdi mdi-thumb-up
      w-icon.mr1(xl color="primary" flip-x) mdi mdi-thumb-up
      w-icon.mr1(xl color="primary" flip-y) mdi mdi-thumb-up
</template>

<script>
import 'material-design-icons/iconfont/material-icons.css'
import 'font-awesome/css/font-awesome.min.css'
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

<style lang="scss">
@import '~ionicons/dist/css/ionicons.min.css';

.icons-demo {
  .rotated-icon {width: 40px;}
  .flipped-icon {width: 54px;}
  .rotation, .flip {
    margin-top: 4px;
    margin-right: 4px;
    text-align: center;
    width: 40px;
    font-size: 12px;
    padding: 2px 0;
  }
  .flip {display: inline-block;width: 54px;}
}
</style>