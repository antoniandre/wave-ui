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
  w-flex.mt-3(align-center)
    w-button.mr-2(
      @click="toggleFade = !toggleFade"
      color="primary"
      sm
      outline
      width="7em") Fade {{ toggleFade ? 'out' : 'in' }}
    w-transition-fade
      span(v-if="toggleFade") Fading transition

  w-flex.mt-3(align-center)
    w-button.mr-2(
      @click="toggleScale = !toggleScale"
      color="primary"
      sm
      outline
      width="7em") Scale {{ toggleScale ? 'out' : 'in' }}
    w-transition-scale
      span(v-if="toggleScale") Scaling transition

  w-flex.mt-3(align-center)
    w-button.mr-2(
      @click="toggleScaleFade = !toggleScaleFade"
      color="primary"
      sm
      outline
      width="7em") Scale fade {{ toggleScaleFade ? 'out' : 'in' }}
    w-transition-scale-fade
      span(v-if="toggleScaleFade") Scaling &amp; fading transition

  w-flex.mt-3(align-center)
    w-button.mr-2(
      @click="toggleBounce = !toggleBounce"
      color="primary"
      sm
      outline
      width="7em") Bounce {{ toggleBounce ? 'out' : 'in' }}
    w-transition-bounce
      span(v-if="toggleBounce") Bouncing transition

  w-flex.mt-3(align-center)
    w-button.mr-2(
      @click="toggleTwist = !toggleTwist"
      color="primary"
      sm
      outline
      width="7em") Twist {{ toggleTwist ? 'out' : 'in' }}
    w-transition-twist
      span(v-if="toggleTwist") Twisting transition

  w-flex.mt-3(align-center)
    w-button.mr-2(
      @click="toggleExpandX = !toggleExpandX"
      color="primary"
      sm
      outline
      width="7em") {{ toggleExpandX ? 'Collapse' : 'Expand' }} X
    w-transition-expand(x)
      span.px-8.py-4.grey-lighter-4--bg(v-if="toggleExpandX") X-expanding transition

  w-flex.mt-3(align-center)
    w-button.mr-2(
      @click="toggleExpandY = !toggleExpandY"
      color="primary"
      sm
      outline
      width="7em") {{ toggleExpandY ? 'Collapse' : 'Expand' }} Y
    w-transition-expand(y)
      span.px-8.py-4.grey-lighter-4--bg(v-if="toggleExpandY") Y-expanding transition

  w-flex.mt-3(align-center)
    w-button.mr-2(
      @click="toggleExpandXY = !toggleExpandXY"
      color="primary"
      sm
      outline
      width="7em") {{ toggleExpandXY ? 'Collapse' : 'Expand' }} X &amp; Y
    w-transition-expand
      span.px-8.py-4.grey-lighter-4--bg(v-if="toggleExpandXY") X &amp; Y expanding transition
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
