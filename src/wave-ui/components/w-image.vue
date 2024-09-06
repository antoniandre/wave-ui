<template lang="pug">
component.w-image(:is="wrapperTag" :class="wrapperClasses" :style="wrapperStyles")
  transition(:name="transition" appear)
    component.w-image__image(
      v-if="loaded"
      :is="normalized.tag"
      :class="imageClasses"
      :style="imageStyles"
      :src="normalized.tag === 'img' ? computedImg.src : null")
  span.w-image__loader(v-if="!noSpinner && loading")
    slot(v-if="$slots.loading" name="loading")
    w-progress(v-else circle indeterminate v-bind="spinnerColor ? { color: spinnerColor } : {}")
  component.w-image__content(v-if="$slots.default" :is="wrapperTag" :class="contentClass")
    slot
  figcaption.w-image__caption.caption(v-if="$slots.caption" :class="captionClass")
    slot(name="caption")
  figcaption.w-image__caption.caption(v-else-if="caption" :class="captionClass" v-html="caption")
</template>

<script>
/**
 * Different use cases of w-image:
 * - fixed size: no width and no height (use bg)
 * - fixed size: given width + height (use bg)
 * - adaptive size: given ratio + width 100% (use bg)
 * - adaptive size: given ratio + height 100% (use bg)
 * - adaptive & locked size: given width or height and using <img>
 *
 * @todo handle srcset.
 **/

import { consoleWarn } from '../utils/console'

export default {
  name: 'w-image',
  props: {
    tag: { type: String, default: 'span' }, // span, div, figure, img.
    src: { type: String },
    width: { type: [Number, String] },
    height: { type: [Number, String] },
    maxWidth: { type: [Number, String] },
    maxHeight: { type: [Number, String] },
    ratio: { type: [Number, String] },
    lazy: { type: Boolean },
    absolute: { type: Boolean },
    fixed: { type: Boolean },
    contain: { type: Boolean },
    noSpinner: { type: Boolean },
    spinnerColor: { type: String },
    fallback: { type: String },
    transition: { type: String, default: 'fade' },
    contentClass: { type: [String, Array, Object] },
    caption: { type: String },
    captionClass: { type: String }
  },

  emits: ['loading', 'loaded', 'error'],

  data () {
    return {
      loading: false,
      loaded: false,
      // The computed image source, and real image dimensions.
      computedImg: {
        src: '',
        width: 0,
        height: 0,
        ratio: 0
      }
    }
  },

  computed: {
    // Normalized props.
    normalized () {
      return {
        width: (!isNaN(this.width) ? `${this.width}px` : this.width) || null,
        height: (!isNaN(this.height) ? `${this.height}px` : this.height) || null,
        maxWidth: (!isNaN(this.maxWidth) ? `${this.maxWidth}px` : this.maxWidth) || null,
        maxHeight: (!isNaN(this.maxHeight) ? `${this.maxHeight}px` : this.maxHeight) || null,
        ratio: parseFloat(this.ratio) || undefined,
        tag: this.tag === 'img' || this.tag === 'figure' || this.caption ? 'img' : 'span'
      }
    },

    wrapperTag () {
      if (this.caption || this.tag === 'figure') return 'figure'
      return ['span', 'div'].includes(this.tag) ? this.tag : 'span'
    },

    wrapperClasses () {
      return {
        'w-image--absolute': this.absolute,
        'w-image--fixed': this.fixed,
        'w-image--has-ratio': this.normalized.ratio
      }
    },

    wrapperStyles () {
      let width = this.normalized.width
      const height = this.normalized.height
      let maxWidth = this.normalized.maxWidth
      let aspectRatio = this.normalized.ratio

      if (aspectRatio && !width && !height) width = '100%'
      else if (!width && !height) {
        width = '100%'
        maxWidth = this.normalized.maxWidth || `${this.computedImg.width}px`
        aspectRatio = aspectRatio || (this.computedImg.width / this.computedImg.height)
      }
      else if ((width && !height) || (height && !width)) {
        aspectRatio = aspectRatio || (this.computedImg.width / this.computedImg.height)
      }

      return {
        width,
        height,
        maxWidth,
        maxHeight: this.normalized.maxHeight,
        aspectRatio
      }
    },

    imageClasses () {
      return {
        'w-image__image--loading': this.loading,
        'w-image__image--loaded': this.loaded,
        'w-image__image--contain': this.contain
      }
    },

    imageStyles () {
      return {
        'background-image': this.normalized.tag !== 'img' && this.loaded ? `url('${this.computedImg.src}')` : null
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
          this.computedImg.width = e.target.width
          this.computedImg.height = e.target.height
          this.computedImg.ratio = e.target.height / e.target.width

          this.loading = false
          this.loaded = true
          this.computedImg.src = loadFallback ? this.fallback : this.src
          this.$emit('loaded', this.computedImg.src)

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
    }
  }
}
</script>

<style lang="scss">
.w-image {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;

  &--has-ratio {width: 100%;}
  &--has-ratio, &[class^="bdrs"], &[class*=" bdrs"] {overflow: hidden;}

  img {
    width: 100%;
    height: 100%; // Allow stretching by design.
    overflow: hidden; // Should be contained in the parent.
    position: static;
  }

  &__loader, &__content {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  &__image {
    background-image: url('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'); // 1x1 blank gif.
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    inset: 0;

    &--contain {background-size: contain;}
  }

  &__caption {
    padding-top: $base-increment;
    text-align: right;
  }
}
</style>
