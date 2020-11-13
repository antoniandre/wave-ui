<template lang="pug">
component.w-image(:is="tag" :class="classes" :style="styles")
  w-progress(v-if="!loaded" circle indeterminate)
</template>

<script>
import { consoleWarn } from '../utils/console'

export default {
  name: 'w-image',
  props: {
    tag: { type: String, default: 'span' },
    src: { type: String },
    width: { type: [Number, String] },
    height: { type: [Number, String] },
    lazy: { type: Boolean }
  },

  emits: ['loaded', 'failed'],

  data () {
    return {
      loaded: false,
      imgWidth: this.width,
      imgHeight: this.height
    }
  },

  computed: {
    classes () {
      return {
        'w-image--loaded': this.loaded
      }
    },
    styles () {
      return {
        'background-image': `url('${this.src}')`,
        width: this.imgWidth ? `${this.imgWidth}px` : null,
        height: this.imgHeight ? `${this.imgHeight}px` : null
      }
    }
  },

  methods: {
    loadImage () {
      let image = new Image()
      image.onload = e => {
        this.imgWidth = e.target.width
        this.imgHeight = e.target.height
      }
      image.src = this.src
      this.loaded = true
    }
  },

  mounted () {
    if (!this.src) return consoleWarn('The w-image component was used without src.')

    this.loadImage()
  },

  watch: {
    src () {
      this.loaded = false
      this.loadImage()
    }
  }
}
</script>

<style lang="scss">
.w-image {
  display: inline-block;
  width: 4em;
  height: 4em;
  background-repeat: no-repeat;
  background-size: cover;

  &--contain {background-size: contain;}
}
</style>
