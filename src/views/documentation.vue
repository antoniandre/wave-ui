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

  h2 Buttons
  p The buttons elements are written in `rem`, which means it will adapt to the font size set on the #[span.code &lt;html&gt;] tag.
  p
    | Try it here:
    w-btn.ml-1(color="secondary" small @click="decreaseFont") A-
    w-btn.ml-1(color="secondary" small @click="increaseFont") A+
  br
  w-btn.ma-1(color="secondary" x-small) x-small
  w-btn.ma-1(color="secondary" small) small
  w-btn.ma-1(color="secondary" medium) medium
  w-btn.ma-1(color="secondary" large) large
  w-btn.ma-1(color="secondary" x-large) x-large
  h3 Dark
  w-btn.ma-1(color="primary" dark x-small) x-small
  w-btn.ma-1(color="primary" dark small) small
  w-btn.ma-1(color="primary" dark medium) medium
  w-btn.ma-1(color="primary" dark large) large
  w-btn.ma-1(color="primary" dark x-large) x-large
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
  w-btn.ma-1(color="secondary" tile) tile

  h2 Layout classes
  ul
    li
      code .layout
    li
      code .flex

  h2 Content spacing
  p ma mx my ml mr mt mb
  p pa px py pl pr pt pb

  h2 Color palette
</template>

<script>
import WBtn from '@/wave-ui/w-btn'

export default {
  components: { WBtn },

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

<style lang="scss">
$primary: #234781;
$secondary: #d4e9ed;

* {margin: 0;padding: 0;}

html {
  font-size: 14px; // Root font size used as reference for all the `rem` units.
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

a {text-decoration: none;color: $primary;}

.toolbar {
  height: 3rem;
  line-height: 3rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  z-index: 10;
}

h1 {
  color: $primary;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  font-size: 2em;
  font-weight: 400;
}

h2 {
  color: $primary;
  margin-top: 2.5em;
  margin-bottom: 0.3em;
  font-size: 1.7em;
  font-weight: 400;
}

h3 {
  margin-top: 1.6em;
  font-size: 1.25em;
  font-weight: 400;
}

h4 {
  font-size: 1em;
}

ul {margin-left: 1.2rem;}

p {margin-bottom: 0.5rem;}

.code {font-family: monospace;font-size: 1.1em;}

header {
  margin-top: 3rem;
  position: relative;
  background: url('~@/assets/japanese-wave.png') left top;
  background-size: contain;
  margin-bottom: 1rem;
  padding-bottom: 20%;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url('~@/assets/wave-pattern.svg') bottom;
    background-size: 45%;
    z-index: -1;
  }
}
</style>
