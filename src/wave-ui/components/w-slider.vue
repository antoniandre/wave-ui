<template lang="pug">
  .w-slider(:class="wrapperClasses")
    .w-slider__track(
      ref="track"
      :class="trackClasses"
      @mousedown="onTrackMouseDown")
      .w-slider__range(:class="rangeClasses" :style="rangeStyles")
        .w-slider__thumb(:class="thumbClasses")
          button.w-slider__thumb-button(:class="[color]" @keypress="onKeyPress")
          .w-slider__thumb-label(v-if="thumbLabel" :class="thumbClasses")
            slot(name="thumb") 0%
</template>

<script>
export default {
  name: 'w-slider',
  props: {
    value: { type: Number, default: 0 },
    color: { type: String, default: 'primary' },
    bgColor: { type: String },
    thumbLabel: { type: Boolean },
    trackClass: { type: String },
    rangeClass: { type: String },
    thumbLabelClass: { type: String },
  },

  data () {
    return {
      track: {
        el: null,
        left: 0,
        width: 0
      },
      rangeValue: this.value,
      dragging: false
    }
  },

  computed: {
    rangeStyles () {
      return {
        width: `${this.rangeValue}%`
      }
    },
    rangeClasses () {
      return {
        [`${this.color}--bg`]: this.color,
        [this.rangeClass]: this.rangeClass || null
      }
    },
    trackClasses () {
      return {
        [`${this.bgColor}--bg`]: this.bgColor,
        [this.trackClass]: this.trackClass || null
      }
    },
    thumbClasses () {
      return {
        [this.thumbClass]: this.thumbClass || null
      }
    },
    wrapperClasses () {
      return {
        'w-slider--dragging': this.dragging
      }
    }
  },

  methods: {
    onTrackMouseDown (e) {
      const { left, width } = this.track.el.getBoundingClientRect()
      this.track.width = width
      this.track.left = left
      this.dragging = true

      this.updateRange(((e.clientX - left) / width) * 100)

      document.addEventListener('mousemove', this.onDrag)
      document.addEventListener('mouseup', this.onMouseUp, { once: true })
    },

    onDrag (e) {
      this.updateRange(((e.clientX - this.track.left) / this.track.width) * 100)
    },

    onMouseUp () {
      this.dragging = false
      document.removeEventListener('mousemove', this.onDrag)
    },

    onKeyPress (e) {
      this.updateRange(((e.clientX - this.track.left) / this.track.width) * 100)
    },

    updateRange (value) {
      this.rangeValue = value
      this.$emit('input', value)
    }
  },

  beforeMount () {
    this.$nextTick(() => {
      this.track.el = this.$refs.track
    })
  },

  watch: {
    value (value) {
      this.updateRange(value)
    }
  }
}
</script>

<style lang="scss">
.w-slider {
  position: relative;
  display: flex;
  user-select: none;
  min-width: 20px;

  &__track, &__range {
    position: absolute;
    left: 0;
    right: 0;
    cursor: pointer;
  }

  &__track {
    height: $slider-height;
    background-color: $slider-track-color;
    border-radius: $border-radius;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      // For fat fingers.
      top: -8px;
      bottom: -8px;
    }
  }

  &__range {
    height: 100%;
    z-index: 1;
    transition: $transition-duration;
    border-radius: inherit;

    .w-slider--dragging & {transition: none;}
  }

  &__thumb {
    position: absolute;
    width: 3 * $base-increment;
    height: 3 * $base-increment;
    left: 100%;
    top: 50%;
    z-index: 2;
  }

  &__thumb-button {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.35);
    border: none;
    border-radius: 5em;
    cursor: pointer;
    background-color: #fff;

    &:before, &:after {
      content: '';
      position: absolute;
    }
    &:before {
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      opacity: 0;
      border-radius: inherit;
      border: 1px solid currentColor;
      @include default-transition;
    }
    &:hover:before, &:focus:before {opacity: 0.3;}
    &:active:before {
      opacity: 0.5;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
      transition-duration: $fast-transition-duration;
    }

    &:after {
      left: -5px;
      right: -5px;
      top: -5px;
      bottom: -5px;
    }
  }

  &__thumb-label {
    position: absolute;
    bottom: 100%;
    margin-bottom: $base-increment;
  }
}
</style>
