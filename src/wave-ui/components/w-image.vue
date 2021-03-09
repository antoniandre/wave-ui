<template lang="pug">
component.w-image-wrap(:is="wrapperTag" :class="wrapperClasses" :style="wrapperStyles")
  transition(:name="transition" appear)
    component.w-image(
      v-if="loaded"
      :is="tag"
      :class="imageClasses"
      :style="imageStyles"
      :src="tag === 'img' ? imgSrc : null")
  .w-image__loader(v-if="!noSpinner && loading")
    slot(v-if="$slots.loading" name="loading")
    w-progress(v-else circle indeterminate)
  component.w-image__content(v-if="$slots.default" :is="wrapperTag" :class="contentClass")
    slot
</template>

<script>
/**
 * Different use cases of w-image:
 * - fixed size: no width and no height (use bg)
 * - fixed size: given width + height (use bg)
 * - adaptive size: given ratio + width 100% (use bg)
 * - adaptive size: given ratio + height 100% (use bg)
 * - adaptive & locked size: given width or height and using <img>
 **/

// @todo handle figure, captions, srcset, webp.
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
    transition: { type: String, default: 'fade' },
    contentClass: { type: [String, Array, Object] }
  },

  emits: ['loading', 'loaded', 'error'],

  data () {
    return {
      loading: false,
      loaded: false,
      imgSrc: '',
      imgWidth: this.width || 0,
      imgHeight: this.height || 0,
      imgComputedRatio: 0
    }
  },

  computed: {
    imgGivenRatio () {
      return parseFloat(this.ratio)
    },

    wrapperTag () {
      return ['span', 'div'].includes(this.tag) ? this.tag : 'span'
    },

    wrapperClasses () {
      return {
        'w-image-wrap--absolute': this.absolute,
        'w-image-wrap--fixed': this.fixed,
        'w-image-wrap--has-ratio': this.imgGivenRatio
      }
    },

    wrapperStyles () {
      return {
        width: this.imgGivenRatio ? null : ((!isNaN(this.imgWidth) ? `${this.imgWidth}px` : this.imgWidth) || null),
        height: this.imgGivenRatio || this.tag === 'img' ? null : ((!isNaN(this.imgHeight) ? `${this.imgHeight}px` : this.imgHeight) || null),
        'padding-bottom': this.imgGivenRatio && `${this.imgGivenRatio * 100}%`
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
        'background-image': this.tag !== 'img' && this.loaded ? `url('${this.imgSrc}')` : null
      }
    }
  },

  methods: {
    loadImage (loadFallback = false) {
      // Don't try to reload image if already loading.
      if (this.loading) return

      this.loading = true
      this.loaded = false
      this.$emit('loading', loadFallback ? this.fallback : this.src)

      return new Promise(resolve => {
        const img = new Image()
        img.onload = e => {
          if (!this.width && !this.height && !this.imgGivenRatio) {
            this.imgWidth = e.target.width
            this.imgHeight = e.target.height
          }
          this.imgComputedRatio = e.target.height / e.target.width

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
    }
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
    },
    width (value) {
      this.imgWidth = value
    },
    height (value) {
      this.imgHeight = value
    }
  }
}
</script>

<style lang="scss">
.w-image-wrap {
  position: relative;
  display: inline-flex;
  width: 4em;

  &--has-ratio {width: 100%;}
  &[class^="bdrs"], &[class*=" bdrs"] {overflow: hidden;}

  img {
    width: 100%;
    height: auto;
    position: static;
  }
}

.w-image {
  background-image: url('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'); // 1x1 blank gif.
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &--contain {background-size: contain;}

  &__loader, &__content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
}
</style>
