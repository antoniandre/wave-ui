<template lang="pug">
div
  h1.headline.mt-4 Transitions

  p Here is a list of all the available transition components.
  ul
    li #[code w-transition-fade]
    li.mt-1 #[code w-transition-scale]
    li.mt-1 #[code w-transition-scale-fade]
    li.mt-1 #[code w-transition-bounce]
    li.mt-1 #[code w-transition-twist]
    li.mt-1 #[code w-transition-expand]

  //- p Each component has a css transition that you can also use in various components.

  h2 Testing transition
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
</template>

<script>
export default {
  data: () => ({
    toggleFade: false,
    toggleScale: false,
    toggleScaleFade: false,
    toggleTwist: false,
    toggleExpandXY: false,
    toggleExpandX: false,
    toggleExpandY: false,
    toggleBounce: false
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