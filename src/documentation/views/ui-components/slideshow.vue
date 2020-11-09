<template lang="pug">
main
  title-link.mt4(h1) Slideshow / Carousel

  p
    | The work is already done in this library! Check out
    a.mx1(href="https://antoniandre.github.io/vueper-slides" target="_blank") Vueper Slides
    | by the same awesome author! ;)

  .w-flex.align-center.wrap.mt8
    w-icon.grey-light4.ml-2.mr2(xl) mdi mdi-chevron-right
    a.title2.my0.mr2(href="https://antoniandre.github.io/vueper-slides" target="_blank") Vueper Slides
    a.my2.mr1(href="https://www.npmjs.com/package/vueperslides" target="_blank")
      img.mb-1(src="https://img.shields.io/npm/dt/vueperslides.svg")
    a.my2(href="https://www.npmjs.com/package/vueperslides" target="_blank")
      img.mb-1(src="https://img.shields.io/npm/dw/vueperslides.svg")

  ssh-pre.mt6(language="shell") npm i vueper-slides

  vueper-slides.hero.mt6(
    lazy
    lazy-load-on-drag
    parallax
    parallax-fixed-content
    :breakpoints="{ 800: { fixedHeight: '300px' } }")
    vueper-slide(v-for="(slide, i) in slides" :key="i" :image="slide.image")
      template(v-slot:content)
        .vueperslide__title {{ slide.title }}
        .vueperslide__content
          | Photo by
          a(:href="slide.link" target="_blank") {{ slide.content.substring(9) }}
      template(v-slot:loader)
        w-progress(circle indeterminate)
        .title3.mt3.primary Loading...

  title-link(h2) Features
  w-list(:items="listItems" icon="wi-check")
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  components: { VueperSlides, VueperSlide },

  data: () => ({
    listItems: [
      { label: '<strong>Vue 3 compatible</strong>.' },
      { label: '<strong class="mr1">Fully responsive</strong> and scales with its container.' },
      { label: '<strong class="mr1">Touch ready</strong> &amp; mouse dragging for desktop.' },
      { label: '<strong class="mr1">Accessibility friendly</strong> &amp; keyboard navigation.' },
      { label: '<strong>Highly customizable</strong>.' },
      { label: '<strong>Lazy loading</strong>.' },
      { label: 'Show multiple items per slides.' },
      { label: '<strong>Infinite looping</strong>, customizable arrows or disable arrow on a slideshow end, autoplay.' },
      { label: 'Built-in <strong class="mx1">parallax</strong> effect &amp; <strong class="ml1">3D rotation</strong>.' },
      { label: '<strong class="mr1">Breakpoints</strong> with different configuration.' },
      { label: 'Slide content supports <strong class="mx1">title &amp; description, inside OR outside</strong> the current slide.' },
      { label: '<strong class="mr1">Add or remove slides</strong> on the fly, <strong class="mr1">disable or enable the slideshow</strong>.' },
      { label: 'Uses <strong class="mx1">CSS animations</strong> &amp; comes with a minimum of styles (using the BEM convention).' },
      { label: '<strong class="mr1">Emitted events</strong> for callbacks, etc...' }
    ],
    slides: [
      {
        title: 'El Teide Volcano, Spain',
        content: 'Photo by Max Rive',
        image: 'https://antoniandre.github.io/vueper-slides/images/el-teide-volcano-spain.jpg',
        link: 'https://www.maxrivephotography.com/index/C0000rU1RKCHdqwI/G0000X57AtIzuRX0/I0000Gvr9HqdtyXk'
      },
      {
        title: 'Chernobyl, Ukraine',
        content: 'Photo by Jesse Moran',
        image: 'https://antoniandre.github.io/vueper-slides/images/chernobyl-ukraine.jpg',
        link: 'https://www.flickr.com/photos/jessemoran'
      },
      {
        title: 'Crater Lake, Oregon, USA',
        content: 'Photo by Jesse Moran',
        image: 'https://antoniandre.github.io/vueper-slides/images/crater-lake-oregon-usa.jpg',
        link: 'https://flic.kr/p/2cxrCmp'
      }
    ]
  })
}
</script>
<style lang="scss">
.main--slideshow .hero {
  &, & button {color: #fff;}

  .vueperslide__content-wrapper {
    font-family: inherit;
    justify-content: flex-end;
    align-items: flex-end;
    opacity: 0.8;
    padding-bottom: 0.5em;
    padding-right: 1em;
  }
  .vueperslide__title {font-size: 2.3em;line-height: 1.3;}

  a {
    padding-left: 0.3em;
    pointer-events: all;
    color: inherit;
    text-decoration: underline;
  }
}
</style>
