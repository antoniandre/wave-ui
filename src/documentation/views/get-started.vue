<template lang="pug">
div
  h1.headline
    | Wave UI
  P An emerging new UI framework for Vue.js with only the bright side.
  p Like other UI frameworks, it is very flexible and easy to use. But Wave UI is also:
  ul
    li Lightweight
    li Very easy to override via CSS
    li No #[span.code !important] everywhere
    li No useless DOM wrappers inside UI elements
    li Not written in pixels but in #[span.code rem]

  h2 Presets
  h3 Buttons
  span.code w-btn { small: true, outlined: true, round: true }

  h2 Icons
  p.
    The Font Awesome 4 icons font is loaded on demand if you use the 'fa' icon font.#[br]
    The Ionicons 4 icons font is loaded on demand if you use the 'ion' icon font.#[br]
    You can also use your own font by adding 'i' to the icons array.#[br]
    You can use multiple icons sources at the same time but it is not recommended.
  w-icon.mr-1.primary--text fa fa-chrome
  w-icon.mr-1(x-small color="primary") fa fa-chrome
  w-icon.mr-1(small color="primary") fa fa-chrome
  w-icon.mr-1(medium color="primary") fa fa-chrome
  w-icon.mr-1(large color="primary") fa fa-chrome
  w-icon.mr-1(x-large color="primary") fa fa-chrome
  w-icon.mr-1(:size="50" color="primary") fa fa-chrome
  w-icon.mr-1(size="5em" color="primary") fa fa-chrome

  h2 Buttons
  p The buttons elements are written in `rem`, which means it will adapt to the font size set on the #[span.code &lt;html&gt;] tag.
  p
    | Try it here:
    w-btn.ml-1(color="secondary" small @click="decreaseFont") A-
    w-btn.ml-1(color="secondary" small @click="increaseFont") A+
  br
  h3 Default
  w-btn.ma-1(color="secondary" x-small) x-small
  w-btn.ma-1(color="secondary" small) small
  w-btn.ma-1(color="secondary" medium) medium
  w-btn.ma-1(color="secondary" large) large
  w-btn.ma-1(color="secondary" x-large) x-large
  w-btn.ma-1(color="secondary" disabled) disabled
  h3 Dark
  w-btn.ma-1(color="primary" dark x-small) x-small
  w-btn.ma-1(color="primary" dark small) small
  w-btn.ma-1(color="primary" dark medium) medium
  w-btn.ma-1(color="primary" dark large) large
  w-btn.ma-1(color="primary" dark x-large) x-large
  w-btn.ma-1(color="primary" dark disabled) disabled
  h3 Outline
  w-btn.ma-1(color="primary" outline dark x-small) x-small
  w-btn.ma-1(color="primary" outline dark small) small
  w-btn.ma-1(color="primary" outline dark medium) medium
  w-btn.ma-1(color="primary" outline dark large) large
  w-btn.ma-1(color="primary" outline dark x-large) x-large
  h3 Shadow &amp; Colors
  w-btn.ma-1(color="success" shadow) success
  w-btn.ma-1(color="error" shadow) error
  w-btn.ma-1(color="warning" shadow) warning
  w-btn.ma-1(color="info" shadow) info
  h3 Round, Tile &amp; Icons
  w-btn.ma-1(color="primary" dark round) round
  w-btn.ma-1.mr-6(color="secondary" round) round
  w-btn.ma-1(color="primary" dark tile) tile
  w-btn.ma-1.mr-6(color="secondary" tile) tile
  w-btn.ma-1(color="error")
    w-icon.mr-1 ion-md-close
    | Cancel
  w-btn.ma-1(color="success")
    w-icon.mr-1 ion-md-checkmark
    | Save
  h3 Loading
  w-btn.ma-1(color="primary" dark loading) round

  h2 Loaders and spinners

  h2 Layout classes
  ul
    li
      code .layout
    li
      code .flex

  h2 Content spacing
  p.
    Margins and paddings are incrementable from 1 to 12 using this syntax: #[span.code ma-12], #[span.code pa-7].#[br]
    You can also set a space on a single side with #[span.code l], #[span.code r], #[span.code t], #[span.code b] for left, right, top, bottom.#[br]
    #[span.code x] and #[span.code y] will set both left and right or top and bottom.
  p ma mx my ml mr mt mb
  p pa px py pl pr pt pb

  h2 Color palette
  p.
    red
    pink
    purple
    deepPurple
    indigo
    blue
    lightBlue
    cyan
    teal
    green
    lightGreen
    lime
    yellow
    amber
    orange
    deepOrange
    brown
    blueGrey
    grey
    white
    black
</template>

<script>
export default {
  methods: {
    increaseFont () {
      let htmlStyles = document.getElementsByTagName('html')[0].style
      htmlStyles.fontSize = `${parseInt(htmlStyles.fontSize || 13) + 1}px`
    },
    decreaseFont () {
      let htmlStyles = document.getElementsByTagName('html')[0].style
      htmlStyles.fontSize = `${parseInt(htmlStyles.fontSize || 13) - 1}px`
    }
  }
}
</script>
