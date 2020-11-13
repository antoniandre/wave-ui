<template lang="pug">
component.w-image(:is="tag" :class="classes" :style="styles")
  w-progress(v-if="!loading" circle indeterminate)
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
      loading: false,
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
      // Don't try to reload image if already loaded.
      if (this.loading || this.loaded) return

      this.loading = true

      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = e => {
          this.imgWidth = e.target.width
          this.imgHeight = e.target.height
          this.loading = false
          this.loaded = true
          resolve()
        }
        img.onerror = () => {
          this.loading = false
          this.loaded = false
          reject() // Always call reject.
        }
        img.src = this.image
      })
    },
  },

  mounted () {
    if (!this.src) return consoleWarn('The w-image component was used without src.')

    this.loadImage().finally(() => (this.loaded = true) && (this.loading = false))
  },

  watch: {
    src () {
      this.loaded = false
      this.loadImage().finally(() => (this.loaded = true) && (this.loading = false))
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
