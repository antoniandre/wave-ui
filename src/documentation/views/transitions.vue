<template lang="pug">
div
  title-link.mt-4(h1) Transitions

  p Here is a list of all the available transition components.
  ul
    li #[code w-transition-fade]
    li.mt-1 #[code w-transition-scale]
    li.mt-1 #[code w-transition-scale-fade]
    li.mt-1 #[code w-transition-bounce]
    li.mt-1 #[code w-transition-twist]
    li.mt-1 #[code w-transition-expand]

  //- p Each component has a css transition that you can also use in various components.

  title-link(h2) Testing transition
  w-flex(align-center)
    w-button.transition-toggle(
      @click="toggleFade = !toggleFade"
      color="primary"
      outline
      width="7.3em") Fade {{ toggleFade ? 'out' : 'in' }}
    w-transition-fade
      .transition-box(v-if="toggleFade") Fading transition

  w-flex(align-center)
    w-button.transition-toggle(
      @click="toggleScale = !toggleScale"
      color="primary"
      outline
      width="7.3em") Scale {{ toggleScale ? 'out' : 'in' }}
    w-transition-scale
      .transition-box(v-if="toggleScale") Scaling transition

  w-flex(align-center)
    w-button.transition-toggle(
      @click="toggleScaleFade = !toggleScaleFade"
      color="primary"
      outline
      width="7.3em") Scale fade {{ toggleScaleFade ? 'out' : 'in' }}
    w-transition-scale-fade
      .transition-box(v-if="toggleScaleFade") Scaling &amp; fading transition

  w-flex(align-center)
    w-button.transition-toggle(
      @click="toggleBounce = !toggleBounce"
      color="primary"
      outline
      width="7.3em") Bounce {{ toggleBounce ? 'out' : 'in' }}
    w-transition-bounce
      .transition-box(v-if="toggleBounce") Bouncing transition

  w-flex(align-center)
    w-button.transition-toggle(
      @click="toggleTwist = !toggleTwist"
      color="primary"
      outline
      width="7.3em") Twist {{ toggleTwist ? 'out' : 'in' }}
    w-transition-twist
      .transition-box(v-if="toggleTwist") Twisting transition

  w-flex(align-center)
    w-button.transition-toggle(
      @click="toggleExpandX = !toggleExpandX"
      color="primary"
      outline
      width="7.3em") {{ toggleExpandX ? 'Collapse' : 'Expand' }} X
    w-transition-expand(x)
      .transition-box(v-if="toggleExpandX") X-expanding transition

  w-flex(align-center)
    w-button.transition-toggle(
      @click="toggleExpandY = !toggleExpandY"
      color="primary"
      outline
      width="7.3em") {{ toggleExpandY ? 'Collapse' : 'Expand' }} Y
    w-transition-expand(y)
      .transition-box(v-if="toggleExpandY") Y-expanding transition

  w-flex(align-center)
    w-button.transition-toggle(
      @click="toggleExpandXY = !toggleExpandXY"
      color="primary"
      outline
      width="7.3em") {{ toggleExpandXY ? 'Collapse' : 'Expand' }} X &amp; Y
    w-transition-expand
      .transition-box(v-if="toggleExpandXY") X &amp; Y expanding transition

  h3 Zoom on the expand transition
  p.
    The great thing with Wave UI is that it also animates any margin or padding on the transitionning
    element! Look at this one:
  w-flex(align-center)
    w-button.transition-toggle(
      @click="toggleExpandXY2 = !toggleExpandXY2"
      color="primary"
      outline
      width="7.3em") {{ toggleExpandXY2 ? 'Collapse' : 'Expand' }} X &amp; Y
    w-transition-expand(:duration="2000")
      .transition-box.pa-6.ma-10.yellow-lighter-5--bg(
        v-if="toggleExpandXY2" style="width: auto")
        .amber-lighter-4--bg.pa-2(style="overflow: hidden;white-space: nowrap;width: 200px") X &amp; Y expanding transition

  title-link(h2) Transition duration
  p.
    You can easily override the default transition/animation duration by setting an explicit
    CSS transition/animation duration on the element being transitioned:
    #[span.code style="animation-duration: 3s"].
  p.
    The expand transition being fully Javascript driven, it accepts a duration parameter in milliseconds.
    So you don't need to override the duration from a CSS rule.
</template>

<script>
export default {
  data: () => ({
    toggleFade: false,
    toggleScale: false,
    toggleScaleFade: false,
    toggleBounce: false,
    toggleTwist: false,
    toggleExpandX: false,
    toggleExpandY: false,
    toggleExpandXY: false,
    toggleExpandXY2: false
  })
}
</script>

<style lang="scss">
.transition-toggle {margin: 12px 24px 12px 0;}

.transition-box {
  background-color: #eee;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 1em;
  width: 14em;
  text-align: center;
}
</style>