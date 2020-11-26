<template lang="pug">
component.w-image-wrap(:is="wrapperTag" :class="wrapperClasses" :style="wrapperStyles")
  transition(:name="transition" appear)
    component.w-image(v-if="loaded" :is="tag" :class="imageClasses" :style="imageStyles")
  .w-image__loader(v-if="!noSpinner && loading")
    slot(v-if="$slots.loading" name="loading")
    w-progress(v-else circle indeterminate)
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
    ratio: { type: [Number, String] },
    lazy: { type: Boolean },
    absolute: { type: Boolean },
    fixed: { type: Boolean },
    contain: { type: Boolean },
    noSpinner: { type: Boolean },
    fallback: { type: String },
    transition: { type: String, default: 'fade' }
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
    imgRatio () {
      return parseFloat(this.ratio)
    },
    wrapperTag () {
      return ['span' || 'div'].includes(this.tag) ? this.tag : 'span'
    },

    wrapperClasses () {
      return {
        'w-image--absolute': this.absolute,
        'w-image--fixed': this.fixed
      }
    },

    wrapperStyles () {
      return {
        width: (!isNaN(this.imgWidth) ? `${this.imgWidth}px` : this.imgWidth) || null,
        height: (!isNaN(this.imgHeight) ? `${this.imgHeight}px` : this.imgHeight) || null,
        'padding-bottom': this.imgRatio && `${this.imgRatio * 100}%`
      }
    },

    imageClasses () {
      return {
        'w-image--loading': this.loading,
        'w-image--loaded': this.loaded,
        'w-image--contain': this.contain
      }
    },

    imageStyles () {
      return {
        'background-image': this.loaded ? `url('${this.imgSrc}')` : null
      }
    }
  },

  methods: {
    loadImage (loadFallback = false) {
      // Don't try to reload image if already loaded.
      if (this.loading) return

      this.loading = true
      this.loaded = false
      this.$emit('loading')

      return new Promise(resolve => {
        const img = new Image()
        img.onload = e => {
          if (!this.imgWidth && !this.imgRatio) this.imgWidth = e.target.width
          if (!this.imgHeight && !this.imgRatio) this.imgHeight = e.target.height
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

    if (this.lazy) {
      const IntersectObserver = new IntersectionObserver(entry => {
        if (entry[0] && entry[0].isIntersecting) {
          this.loadImage()
          IntersectObserver.disconnect()
        }
      }, this.intersectionConfig)
      IntersectObserver.observe(this.$el)
    }

    else this.loadImage()
  },

  watch: {
    src () {
      this.loadImage()
    }
  }
}
</script>

<style lang="scss">
.w-image-wrap {
  position: relative;
  display: inline-flex;
  width: 4em;
  max-width: 100%;
  height: 4em;
}

.w-image {
  background-image: url('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'); // 1px blank gif.
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &--contain {background-size: contain;}

  &__loader {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
