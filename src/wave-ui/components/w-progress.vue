<template lang="pug">
.w-progress(:class="classes" :style="styles")
  //- Linear progress.
  .w-progress__progress(v-if="!circle" :class="{ full: progressValue === 100 }" :style="`width: ${progressValue}%`")

  //- Circular progress.
  template(v-else)
    svg(:viewBox="`${circleCenter / 2} ${circleCenter / 2} ${circleCenter} ${circleCenter}`")
      circle.bg(
        v-if="bgColor || this.progressValue > -1"
        :class="bgColor"
        :cx="circleCenter"
        :cy="circleCenter"
        :r="circleRadius"
        fill="transparent"
        :stroke-dasharray="circleCircumference"
        :stroke-width="stroke")
    svg.w-progress__progress(
      :viewBox="`${circleCenter / 2} ${circleCenter / 2} ${circleCenter} ${circleCenter}`"
      :style="`stroke-dashoffset: ${(1 - (progressValue / 100)) * circleCircumference}`")
      circle(
        :cx="circleCenter"
        :cy="circleCenter"
        :r="circleRadius"
        fill="transparent"
        :stroke-width="stroke"
        :stroke-linecap="roundCap && 'round'"
        :stroke-dasharray="circleCircumference")

  .w-progress__label(v-if="label || $slots.default" :class="labelColor || false")
    slot {{ Math.round(progressValue) }}{{ circle ? '' : '%' }}
</template>

<script>
/**
 * This component (circular) is hacked to work on Edge as it does not support transform on svg elements.
 * https://caniuse.com/#feat=mdn-css_properties_transform-origin_support_in_svg
 * It is meant to be 2 circles in 1 svg, with animation on the circle, now instead, there are 2 svgs,
 * and the animation is on the second svg itself.
 */

// For circular progress.
const circleSize = 40
const circleRadius = circleSize / 2
const circleCircumference = Math.round(circleSize * 3.14 * 100) / 100

export default {
  name: 'w-progress',

  props: {
    modelValue: { type: [Number, String, Boolean], default: -1 },
    label: { type: Boolean },
    roundCap: { type: Boolean },
    color: { type: String, default: 'primary' },
    bgColor: { type: String },
    labelColor: { type: String },
    size: { type: [Number, String] },

    // Circular progress thickness.
    circle: { type: Boolean },
    stroke: { type: [Number, String], default: 4 },

    // For linear progress.
    shadow: { type: Boolean },
    tile: { type: Boolean },
    round: { type: Boolean },
    outline: { type: Boolean },
    stripes: { type: Boolean },
    absolute: { type: Boolean },
    fixed: { type: Boolean },
    top: { type: Boolean },
    bottom: { type: Boolean },
    zIndex: { type: [Number, String, Boolean] }
  },

  emits: [],

  data: () => ({
    circleSize,
    circleRadius,
    circleCircumference
  }),

  computed: {
    progressValue () {
      return parseFloat(this.modelValue)
    },

    circleCenter () {
      return circleSize + this.stroke
    },

    forcedSize () {
      return this.size && (!isNaN(this.size) ? `${this.size}px` : this.size)
    },

    // If linear, with position fixed or absolute.
    position () {
      return (this.top && 'top') || (this.bottom && 'bottom') || 'top'
    },

    classes () {
      return {
        [`w-progress--${this.circle ? 'circular' : 'linear'}`]: true,
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor && !this.circle,
        [`w-progress--${this.position}`]: !this.circle && (this.absolute || this.fixed),
        'w-progress--default-bg': !this.bgColor,
        'w-progress--indeterminate': this.modelValue === -1,
        'w-progress--outline': !this.circle && this.outline,
        'w-progress--tile': !this.circle && this.tile,
        'w-progress--stripes': !this.circle && this.stripes,
        'w-progress--round': !this.circle && this.round,
        'w-progress--shadow': this.shadow,
        'w-progress--absolute': !this.circle && this.absolute,
        'w-progress--fixed': !this.circle && !this.absolute && this.fixed,
        [`w-progress--${this.roundCap ? 'round' : 'flat'}-cap`]: true
      }
    },

    styles () {
      return {
        [this.circle ? 'width' : 'height']: this.forcedSize || null
      }
    }
  }
}
</script>

<style lang="scss">
$circle-size: 40;

.w-progress {
  align-items: center;
  justify-content: center;
  position: relative;

  &--absolute, &--fixed {left: 0;right: 0;}
  &--absolute {position: absolute;}
  &--fixed {position: fixed;z-index: 10;}
  &--top {top: 0;}
  &--bottom {bottom: 0;}

  &--shadow {box-shadow: $box-shadow;}

  // Linear progress.
  // ------------------------------------------------------
  &--linear {border-radius: $border-radius;}
  // Tile, round and outline are only available on linear progress.
  &--tile {border-radius: 0;}
  &--round {border-radius: 9em;}
  &--outline {border: 1px solid currentColor;padding: 2px;}

  &--linear {
    display: flex;
    height: $base-increment;
    overflow: hidden;

    // Background.
    &.w-progress--default-bg:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: inherit;
      background-color: currentColor;
      opacity: 0.15;
    }
    &.w-progress--outline:after {display: none;}

    .w-progress__progress {
      overflow: hidden;
      position: relative;
      width: 100%;
      height: 100%;
      justify-self: left;
      margin-right: auto;
      border-radius: inherit;
      background-color: currentColor;
      @include default-transition;
    }
    &.w-progress--flat-cap .w-progress__progress {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &.w-progress--round-cap .w-progress__progress,
    .w-progress__progress.full {border-radius: inherit;}

    &.w-progress--indeterminate .w-progress__progress {
      background-color: transparent;

      &:before, &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: -5%;
        background: currentColor;
        z-index: 1;
        will-change: transform;
        transform: translate3d(-100%, 0, 0);
        animation: w-progress-bars 2s infinite;
        transform-origin: right;
      }
      &:before {animation-delay: 0.8s;}
    }
  }

  // Stripes are only available on linear progress.
  &--stripes .w-progress__progress {
    will-change: background-position;
    background-image: linear-gradient(
                        -45deg,
                        rgba(255, 255, 255, 0.2) 25%,
                        transparent 25%,
                        transparent 50%,
                        rgba(255, 255, 255, 0.2) 50%,
                        rgba(255, 255, 255, 0.2) 75%,
                        transparent 75%,
                        transparent
                      );
    background-size: 50px 50px;
    animation: w-progress-stripes 2s infinite linear;
  }

  // Outline is only available on linear progress.
  &--outline .w-progress__progress {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
    justify-self: left;
    margin-right: auto;
  }

  // Indeterminate progress.
  @keyframes w-progress-bars {
    0% {transform: translate3d(-100%, 0, 0) scaleX(1);}
    100% {transform: translate3d(0, 0, 0) scaleX(0);}
  }

  @keyframes w-progress-stripes {
    0% {background-position: 0 0;}
    100% {background-position: 50px 50px;}
  }
  // ------------------------------------------------------

  // Circular progress.
  // ------------------------------------------------------
  &--circular {
    display: inline-flex;
    width: 3em;
    height: auto;
    font-size: $base-font-size;

    svg {display: block;width: 100%;}
    circle.bg {stroke: currentColor;}
    &.w-progress--default-bg circle.bg {stroke: rgba(0, 0, 0, 0.1);}

    .w-progress__progress {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      circle {
        stroke: currentColor;
        stroke-dashoffset: inherit;
        will-change: stroke-dashoffset;
      }
      transform: rotate(-90deg);
      will-change: transform;
      @include default-transition;
    }
    &.w-progress--round-cap .w-progress__progress {stroke-linecap: round;}
    &.w-progress--indeterminate .w-progress__progress {
      animation: w-progress-spin 2s linear infinite;
    }

    @keyframes w-progress-spin {
      0% {transform: rotate(0deg);stroke-dashoffset: (0.66 * $circle-size);}
      50% {transform: rotate(720deg);stroke-dashoffset: (3.14 * $circle-size);}
      100% {transform: rotate(1080deg);stroke-dashoffset: (0.66 * $circle-size);}
    }
  }
  // ------------------------------------------------------

  &__label {
    position: absolute;
    font-weight: bold;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    user-select: none;
  }
}
</style>
