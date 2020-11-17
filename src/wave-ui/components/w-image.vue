<template lang="pug">
component.w-image(:is="tag" :class="classes" :style="styles")
  w-progress(v-if="loading" circle indeterminate)
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
    lazy: { type: Boolean },
    absolute: { type: Boolean },
    fixed: { type: Boolean },
    contain: { type: Boolean },
    fallback: { type: String }
  },

  emits: ['loading', 'loaded', 'error'],

  data () {
    return {
      loading: false,
      loaded: false,
      imgSrc: '',
      imgWidth: this.width || 0,
      imgHeight: this.height || 0
    }
  },

  computed: {
    classes () {
      return {
        'w-image--loading': this.loading,
        'w-image--loaded': this.loaded,
        'w-image--absolute': this.absolute,
        'w-image--fixed': this.fixed,
        'w-image--contain': this.contain
      }
    },
    styles () {
      return {
        'background-image': this.loaded ? `url('${this.imgSrc}')` : null,
        width: (!isNaN(this.imgWidth) ? `${this.imgWidth}px` : this.imgWidth) || null,
        height: (!isNaN(this.imgHeight) ? `${this.imgHeight}px` : this.imgHeight) || null
      }
    }
  },

  methods: {
    loadImage (loadFallback = false) {
      // Don't try to reload image if already loaded.
      if (this.loading || this.loaded) return

      this.loading = true
      this.loaded = false
      this.$emit('loading')

      return new Promise(resolve => {
        const img = new Image()
        img.onload = e => {
          if (!this.imgWidth) this.imgWidth = e.target.width
          if (!this.imgHeight) this.imgHeight = e.target.height
          this.loading = false
          this.loaded = true
          this.imgSrc = loadFallback ? this.fallback : this.src
          this.$emit('loaded', this.imgSrc)

          return resolve(img)
        }
        img.onerror = error => {
          this.$emit('error', error)
          // If a fallback is provided & not already trying to load it, load the fallback src.
          if (this.fallback && !loadFallback) {
            this.loading = false
            this.loaded = false
            this.loadImage(true)
          }
          else {
            this.loading = false
            this.loaded = false
          }

          // return reject(error)
        }
        img.src = loadFallback ? this.fallback : this.src
      })
    },
  },

  mounted () {
    if (!this.src) return consoleWarn('The w-image component was used without src.')

    this.loadImage()
  },

  watch: {
    src () {
      this.loadImage()
    }
  }
}
</script>

<style lang="scss">
.w-image {
  display: inline-flex;
  width: 4em;
  height: 4em;
  background-image: url('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'); // 1px blank gif.
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: center;

  &--contain {background-size: contain;}
}
</style>
