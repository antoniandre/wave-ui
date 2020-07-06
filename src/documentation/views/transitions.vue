<template lang="pug">
div
  h1.headline.mt-4 Transitions

  p Here is a list of all the available transition components.
  ul
    li #[code w-transition-fade]
    li.mt-1 #[code w-transition-scale]
    li.mt-1 #[code w-transition-expand]
    li.mt-1 #[code w-transition-twist]

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

  //- w-flex.mt-3(align-center)
    w-button.mr-2(
      @click="toggleExpand = !toggleExpand"
      color="primary"
      sm
      outline
      width="7em") Expand {{ toggleExpand ? 'out' : 'in' }}
    w-transition-expand
      span.px-8.py-4(v-if="toggleExpand") Expanding transition

  w-flex.mt-3(align-center)
    w-button.mr-2(
      @click="toggleBounce = !toggleBounce"
      color="primary"
      sm
      outline
      width="7em") Bounce {{ toggleBounce ? 'out' : 'in' }}
    w-transition-bounce
      span(v-if="toggleBounce") Bouncing transition
</template>

<script>
export default {
  data: () => ({
    toggleFade: false,
    toggleScale: false,
    toggleScaleFade: false,
    toggleExpand: false,
    toggleBounce: false
  })
}
</script>
