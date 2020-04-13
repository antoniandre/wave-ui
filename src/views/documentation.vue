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
  w-btn.ma-1(color="secondary") Welcome
  w-btn.ma-1(color="secondary" x-small) x-small
  w-btn.ma-1(color="secondary" small) small
  w-btn.ma-1(color="secondary" medium) medium
  w-btn.ma-1(color="secondary" large) large
  w-btn.ma-1(color="secondary" x-large) x-large
  h3 Dark
  w-btn.ma-1(color="primary" dark) Welcome
  w-btn.ma-1(color="primary" dark x-small) x-small
  w-btn.ma-1(color="primary" dark small) small
  w-btn.ma-1(color="primary" dark medium) medium
  w-btn.ma-1(color="primary" dark large) large
  w-btn.ma-1(color="primary" dark x-large) x-large
  h3 Outlined
  w-btn.ma-1(color="primary" outlined dark) Welcome
  w-btn.ma-1(color="primary" outlined dark x-small) x-small
  w-btn.ma-1(color="primary" outlined dark small) small
  w-btn.ma-1(color="primary" outlined dark medium) medium
  w-btn.ma-1(color="primary" outlined dark large) large
  w-btn.ma-1(color="primary" outlined dark x-large) x-large

  h2 Other
</template>

<script>
import WBtn from '@/wave-ui/w-btn'

export default {
  components: { WBtn }
}
</script>

<style lang="scss">
html {font-size: 13px;}

h1 {
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  font-size: 2em;
  font-weight: 400;
}
h2 {
  margin-top: 2.5em;
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
  height: 0;
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
