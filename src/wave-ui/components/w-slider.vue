<template lang="pug">
  .w-slider(:class="wrapperClasses")
    .w-slider__track(
      ref="track"
      :class="trackClasses"
      @mousedown="onTrackMouseDown")
      .w-slider__range(:class="rangeClasses" :style="rangeStyles")
        .w-slider__thumb()
          button.w-slider__thumb-button(:id="`button-${_uid}`" :class="[color]" @keypress="onKeyPress")
          label.w-slider__thumb-label(
            v-if="thumbLabel"
            :for="`button-${_uid}`"
            :class="thumbClasses")
            div(v-if="thumbLabel === 'droplet'")
              slot(name="label" :value="rangeValue") {{ ~~rangeValue }}
            slot(v-else name="label" :value="rangeValue") {{ ~~rangeValue }}
</template>

<script>
export default {
  name: 'w-slider',
  props: {
    value: { type: Number, default: 0 },
    color: { type: String, default: 'primary' },
    bgColor: { type: String },
    thumbLabel: { type: [Boolean, String] }, // One of true, false, 'droplet'
    thumbLabelClass: { type: String },
    trackClass: { type: String },
    rangeClass: { type: String },
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
        [this.thumbLabelClass]: this.thumbLabelClass || null,
        'w-slider__thumb-label--droplet': this.thumbLabel === 'droplet'
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

      this.updateRange(e.clientX)

      document.addEventListener('mousemove', this.onDrag)
      document.addEventListener('mouseup', this.onMouseUp, { once: true })
    },

    onDrag (e) {
      this.updateRange(e.clientX)
    },

    onMouseUp () {
      this.dragging = false
      document.removeEventListener('mousemove', this.onDrag)
    },

    onKeyPress (e) {
      this.updateRange(e.clientX)
    },

    updateRange (cursorPositionX) {
      this.rangeValue = Math.max(0, Math.min(((cursorPositionX - this.track.left) / this.track.width) * 100, 100))
      this.$emit('input', this.rangeValue)
    }
  },

  beforeMount () {
    this.$nextTick(() => {
      this.track.el = this.$refs.track
    })
  },

  watch: {
    value (value) {
      this.rangeValue = Math.max(0, Math.min(value, 100))
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

  // Track.
  // ------------------------------------------------------
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

  // Range.
  // ------------------------------------------------------
  &__range {
    height: 100%;
    z-index: 1;
    transition: $transition-duration;
    border-radius: inherit;

    .w-slider--dragging & {transition: none;}
  }

  // Thumb.
  // ------------------------------------------------------
  &__thumb {
    position: absolute;
    width: 3 * $base-increment;
    height: 3 * $base-increment;
    left: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  &__thumb-button {
    position: absolute;
    width: 100%;
    height: 100%;
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

  // Thumb label.
  // ------------------------------------------------------
  &__thumb-label {
    position: absolute;
    left: 50%;
    bottom: 100%;
    margin-bottom: round(3 * $base-increment);
    transform: translateX(-50%);
    padding: round(0.75 * $base-increment) (2 * $base-increment);
    background-color: #fff;
    border-radius: $border-radius;
    border: $border;
    font-size: 0.85em;
    color:rgba(0, 0, 0, 0.7);

    &:before, &:after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border: solid transparent;
    }

    &:before {border-width: 7px;border-top-color: inherit;}
    &:after {border-width: 6px;border-top-color: #fff;}

    &--droplet {
      transform: translateX(-50%) rotate(-45deg);
      border-radius: 5em 5em 5em 0;
      width: 2.8em;
      height: 2.8em;

      & > div {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        transform: rotate(45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1em;
      }

      &:before, &:after {display: none;}
    }
  }
}
</style>
