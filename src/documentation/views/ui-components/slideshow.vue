<template lang="pug">
div
  title-link.mt4(h1) Slideshow / Carousel

  p
    | The work is already done in this library! Check out
    a.mx1(href="https://antoniandre.github.io/vueper-slides" target="_blank") Vueper Slides
    | by the same awesome author! ;)

  .w-flex.align-center.mt8
    w-icon.grey-light4.ml-2.mr2(xl) mdi mdi-chevron-right
    a.title2.my0(href="https://antoniandre.github.io/vueper-slides" target="_blank") Vueper Slides
    a.ml2(href="https://www.npmjs.com/package/vueperslides" target="_blank")
      img(src="https://img.shields.io/npm/dt/vueperslides.svg")
    a.ml1(href="https://www.npmjs.com/package/vueperslides" target="_blank")
      img(src="https://img.shields.io/npm/dw/vueperslides.svg")

  ssh-pre.mt6(language="shell") npm i vueper-slides

  img.mt6(src="@/assets/vueperslides.jpg" alt="Vueper Slides")

  title-link(h2) Features
  w-list(:items="listItems" icon="wi-check")
</template>

<script>
export default {
  data: () => ({
    listItems: [
      { label: '<strong>Fully responsive</strong> and scales with its container.' },
      { label: '<strong>Touch ready</strong> & mouse dragging for desktop.' },
      { label: '<strong>Accessibility friendly</strong> & keyboard navigation.' },
      { label: '<strong>Highly customizable</strong>.' },
      { label: '<strong>Lazy loading</strong>.' },
      { label: 'Show multiple items per slides.' },
      { label: '<strong>Infinite looping</strong>, customizable arrows or disable arrow on a slideshow end, autoplay.' },
      { label: 'Built-in <strong>parallax</strong> effect & <strong>3D rotation</strong>.' },
      { label: '<strong>Breakpoints</strong> with different configuration.' },
      { label: 'Slide content supports <strong>title & description, inside OR outside</strong> the current slide.' },
      { label: '<strong>Add or remove slides</strong> on the fly, <strong>disable or enable the slideshow</strong>.' },
      { label: 'Uses <strong>CSS animations</strong> & comes with a minimum of styles (using the BEM convention).' },
      { label: '<strong>Emitted events</strong> for callbacks, etc...' }
    ]
  })
}
</script>
<style lang="scss">
.page--slideshow img {max-width: 100%;}
</style>
