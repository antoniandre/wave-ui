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
    fallback: { type: String, default: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' }, // 1px blank gif.
  },

  emits: ['loaded', 'failed'],

  data () {
    return {
      loading: false,
      loaded: false,
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
        'background-image': this.loaded ? `url('${this.src}')` : null,
        width: (!isNaN(this.imgWidth) ? `${this.imgWidth}px` : this.imgWidth) || null,
        height: (!isNaN(this.imgHeight) ? `${this.imgHeight}px` : this.imgHeight) || null
      }
    }
  },

  methods: {
    loadImage () {
      // Don't try to reload image if already loaded.
      if (this.loading || this.loaded) return

      this.loading = true
      this.loaded = false

      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = e => {
          if (!this.imgWidth) this.imgWidth = e.target.width
          if (!this.imgHeight) this.imgHeight = e.target.height
          this.loading = false
          this.loaded = true
          console.log('resolve')
          return resolve(img)
        }
        img.onerror = error => {
          console.log('reject')
          this.loading = false
          this.loaded = false
          return reject(error)
        }
        setTimeout(() => img.src = this.src, 3000)
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
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: center;

  &--contain {background-size: contain;}
}
</style>
