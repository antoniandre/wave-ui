<template lang="pug">
component(
  ref="formEl"
  :is="formRegister ? 'w-form-element' : 'div'"
  v-bind="formRegister && { validators, inputValue: rangeValueScaled, disabled: isDisabled, readonly: isReadonly }"
  v-model:valid="valid"
  @reset="rangeValuePercent = 0;updateRangeValueScaled()"
  :class="wrapperClasses")
  label.w-slider__label.w-slider__label--left.w-form-el-shakable(
    v-if="$slots['label-left']"
    :for="`button--${_.uid}`")
    slot(name="label-left")
  label.w-slider__label.w-slider__label--left.w-form-el-shakable(
    v-else-if="labelLeft"
    :for="`button--${_.uid}`"
    v-html="labelLeft")
  .w-slider__track-wrap
    .w-slider__track(
      ref="track"
      @mousedown="onTrackMouseDown"
      @touchstart="onTrackMouseDown"
      :class="trackClasses"
      role="slider"
      aria-label="Slider"
      :aria-valuemin="minVal"
      :aria-valuemax="maxVal"
      :aria-valuenow="rangeValueScaled"
      :aria-readonly="isReadonly ? 'true' : 'false'"
      aria-orientation="horizontal")
      .w-slider__range(:class="rangeClasses" :style="rangeStyles")
      .w-slider__thumb(:style="thumbStyles")
        button.w-slider__thumb-button(
          ref="thumb"
          :id="`button--${_.uid}`"
          :class="[color]"
          :name="inputName"
          :model-value="rangeValueScaled"
          :disabled="isDisabled || null"
          :readonly="isReadonly || null"
          :aria-readonly="isReadonly ? 'true' : 'false'"
          @keydown.left="onKeyDown($event, -1)"
          @keydown.right="onKeyDown($event, 1)"
          @focus="$emit('focus', $event)"
          @click.prevent)
        label.w-slider__thumb-label(
          v-if="thumbLabel"
          :for="`button--${_.uid}`"
          :class="thumbClasses")
          div(v-if="thumbLabel === 'droplet'")
            slot(name="label" :value="rangeValueScaled") {{ ~~rangeValueScaled }}
          slot(v-else name="label" :value="rangeValueScaled") {{ ~~rangeValueScaled }}
    .w-slider__step-labels(v-if="stepLabels && step")
      .w-slider__step-label(@click="onStepLabelClick(0)") {{ this.minVal }}
      .w-slider__step-label(
        v-for="currStep in ~~numberOfSteps"
        :key="currStep"
        @click="onStepLabelClick(currStep * (100 / numberOfSteps))"
        :style="`left: ${currStep * (100 / numberOfSteps)}%`")
        | {{ percentToScaled(currStep * (100 / numberOfSteps)) }}
      .w-slider__step-label(
        v-if="~~numberOfSteps !== numberOfSteps"
        @click="onStepLabelClick(100)"
        style="left: 100%") {{ this.maxVal }}
  label.w-slider__label.w-slider__label--right.w-form-el-shakable(
    v-if="$slots['label-right']"
    :for="`button--${_.uid}`")
    slot(name="label-right")
  label.w-slider__label.w-slider__label--right.w-form-el-shakable(
    v-else-if="labelRight"
    :for="`button--${_.uid}`"
    v-html="labelRight")
</template>

<script>
import FormElementMixin from '../mixins/form-elements'

export default {
  name: 'w-slider',
  mixins: [FormElementMixin],

  props: {
    modelValue: { type: Number, default: 0 },
    color: { type: String, default: 'primary' },
    bgColor: { type: String },
    stepLabels: { type: [Boolean, Array] },
    thumbLabel: { type: [Boolean, String] }, // One of true, false, 'droplet'.
    thumbLabelClass: { type: String },
    trackClass: { type: String },
    rangeClass: { type: String },
    min: { type: [Number, String], default: 0 },
    max: { type: [Number, String], default: 100 },
    step: { type: [Number, String] },
    labelLeft: { type: String },
    labelRight: { type: String }
    // Props from mixin: name, disabled, readonly, required, validators.
    // Computed from mixin: inputName, isDisabled & isReadonly.
  },

  emits: ['input', 'update:modelValue', 'focus'],

  data: () => ({
    track: {
      el: null,
      left: 0,
      width: 0
    },
    dragging: false,
    rangeValuePercent: 0,
    rangeValueScaled: 0
  }),

  computed: {
    minVal () {
      return parseFloat(this.min)
    },
    maxVal () {
      return parseFloat(this.max)
    },
    stepValPercent () {
      // Don't allow a step that is bigger than the whole scale.
      return Math.min(parseFloat(this.step), this.scaledRange) / this.scaledRange * 100
    },
    // Lighten the maths while dragging by caching some of the maths - it's already that!
    scaledRange () {
      return this.maxVal - this.minVal
    },
    numberOfSteps () {
      return 100 / this.stepValPercent
    },
    rangeStyles () {
      return {
        width: `${this.rangeValuePercent}%`
      }
    },
    thumbStyles () {
      return {
        left: `${this.rangeValuePercent}%`
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
        'w-slider': true,
        'w-slider--dragging': this.dragging,
        'w-slider--disabled': this.isDisabled,
        'w-slider--readonly': this.isReadonly,
        'w-slider--has-step-labels': this.step && this.stepLabels
      }
    }
  },

  methods: {
    scaledToPercent (value) {
      // percentage = (value - min) / (max - min)
      return Math.max(0, Math.min((value - this.minVal) / this.scaledRange * 100, 100))
    },

    percentToScaled (value) {
      return Math.round((((value / 100) * this.scaledRange) + this.minVal) * 100) / 100
    },

    onTrackMouseDown (e) {
      if (this.isDisabled || this.isReadonly) return
      // On touch screen don't listen for both touchstart & mousedown.
      if ('ontouchstart' in window && e.type === 'mousedown') return

      const { left, width } = this.track.el.getBoundingClientRect()
      this.track.width = width
      this.track.left = left
      this.dragging = true

      this.updateRange(e.type === 'touchstart' ? e.touches[0].clientX : e.clientX)

      document.addEventListener(e.type === 'touchstart' ? 'touchmove' : 'mousemove', this.onDrag)
      document.addEventListener(e.type === 'touchstart' ? 'touchend' : 'mouseup', this.onMouseUp, { once: true })
    },

    onDrag (e) {
      this.updateRange(e.type === 'touchmove' ? e.touches[0].clientX : e.clientX)
    },

    onMouseUp (e) {
      this.dragging = false
      document.removeEventListener(e.type === 'touchend' ? 'touchmove' : 'mousemove', this.onDrag)
      if (this.$refs.thumb) this.$refs.thumb.focus()
    },

    onStepLabelClick (step) {
      this.rangeValuePercent = step
      this.updateRangeValueScaled()
    },

    onKeyDown (e, direction) {
      if (this.isDisabled || this.isReadonly) return

      this.rangeValuePercent += direction * (e.shiftKey ? 5 : 1) * (this.stepValPercent || 1)
      this.rangeValuePercent = Math.max(0, Math.min(this.rangeValuePercent, 100))
      this.updateRangeValueScaled()
    },

    updateRange (cursorPositionX) {
      this.rangeValuePercent = Math.max(0, Math.min(((cursorPositionX - this.track.left) / this.track.width) * 100, 100))
      if (this.step) {
        const valuePlusHalfStep = this.rangeValuePercent + (this.stepValPercent / 2)
        this.rangeValuePercent = valuePlusHalfStep - (valuePlusHalfStep % this.stepValPercent)
      }
      this.updateRangeValueScaled()
    },

    updateRangeValueScaled () {
      this.rangeValueScaled = this.percentToScaled(this.rangeValuePercent)
      this.$emit('update:modelValue', this.rangeValueScaled)
      this.$emit('input', this.rangeValueScaled)
    }
  },

  beforeMount () {
    this.$nextTick(() => {
      this.track.el = this.$refs.track
      this.rangeValueScaled = this.modelValue
      this.rangeValuePercent = this.scaledToPercent(this.modelValue)
    })
  },

  watch: {
    modelValue (value) {
      if (this.rangeValueScaled !== value) {
        this.rangeValueScaled = value
        this.rangeValuePercent = this.scaledToPercent(value)
      }
    }
  }
}
</script>

<style lang="scss">
.w-slider {
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;

  // Slider label, left & right.
  // ------------------------------------------------------
  &__label--left {margin-right: 3 * $base-increment;}
  &__label--right {margin-left: 3 * $base-increment;}

  // Steps labels.
  // ------------------------------------------------------
  &--has-step-labels {padding-bottom: 4 * $base-increment;}
  &__step-labels {
    position: absolute;
    top: 0;
    display: flex;
    width: 100%;
  }

  &__step-label {
    position: absolute;
    transform: translateX(-50%);
    font-size: 0.8em;
    padding-top: 2 * $base-increment;
    color:rgba(0, 0, 0, 0.5);
    z-index: 1;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 0;
      width: $base-increment;
      height: $base-increment;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 9em;
      // box-shadow: 0 0 0 1px #fff;
      box-sizing: border-box;
      pointer-events: none;
    }
    &:first-child:before, &:last-child:before {display: none;}
  }

  // Track.
  // ------------------------------------------------------
  &__track-wrap {
    position: relative;
    flex-grow: 1;
  }

  &__track {
    position: relative;
    flex-grow: 1;
    height: $slider-height;
    background-color: $slider-track-color;
    -webkit-tap-highlight-color: transparent;
    border-radius: $border-radius;
    touch-action: none;
    cursor: pointer;

    .w-slider--disabled &, .w-slider--readonly & {
      cursor: not-allowed;
      touch-action: initial;
    }

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
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    z-index: 1;
    transition: $transition-duration;
    border-radius: inherit;

    .w-slider--dragging & {transition: none;}
    .w-slider--disabled & {opacity: 0.35;}
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
    transition: $transition-duration;

    .w-slider--dragging & {transition: none;}
  }

  &__thumb-button {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 9em;
    cursor: pointer;
    background-color: #fff;

    .w-slider--disabled &, .w-slider--readonly & {cursor: auto;}

    &:before, &:after {
      content: '';
      position: absolute;
    }
    &:before {
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      opacity: 0.5;
      border-radius: inherit;
      border: 1px solid currentColor;
      @include default-transition;
    }
    &:hover:before, &:focus:before {opacity: 0.7;}
    &:active:before, .w-slider--dragging &:before {
      opacity: 1;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
      transition-duration: $fast-transition-duration;
    }
    .w-slider--disabled &:before,
    .w-slider--readonly &:before {box-shadow: none;opacity: 0.4;}

    // For fat fingers.
    &:after {
      left: -6px;
      right: -6px;
      top: -6px;
      bottom: -6px;
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
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
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
      border-radius: 9em 9em 9em 0;
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
