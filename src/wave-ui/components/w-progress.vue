<template lang="pug">
  .w-progress(:class="classes" :style="styles")
    .w-progress__progress(:style="`width: ${progressValue}%`")
    .w-progress__label(v-if="label || $slots.default" :class="labelColor || false")
      slot {{ Math.round(progressValue) }}%
</template>

<script>
export default {
  name: 'w-progress',
  props: {
    value: { type: [Number, String, Boolean], default: -1 },
    circular: { type: Boolean, default: false },
    label: { type: Boolean, default: false },
    stripes: { type: Boolean, default: false },
    color: { type: String, default: '' },
    bgColor: { type: String, default: '' },
    labelColor: { type: String, default: '' },
    size: { type: String, default: '' },
    shadow: { type: Boolean, default: false },
    tile: { type: Boolean, default: false },
    round: { type: Boolean, default: false },
    outline: { type: Boolean, default: false },
  },

  computed: {
    progressValue () {
      return parseFloat(this.value)
    },
    classes () {
      return {
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        'w-progress--default-bg': !this.bgColor,
        'w-progress--indeterminate': this.value === -1,
        'w-progress--outline': this.outline,
        'w-progress--tile': this.tile,
        'w-progress--stripes': this.stripes,
        'w-progress--round': this.round,
        'w-progress--shadow': this.shadow
      }
    },
    styles () {
      return {
        height: this.size || false
      }
    }
  }
}
</script>

<style lang="scss">
.w-progress {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: $border-radius;
  height: $base-increment;

  &--tile {border-radius: 0;}
  &--round {border-radius: 4 * $base-increment;}
  &--outline {
    border: 1px solid currentColor;
    padding: 1px;
  }
  &--shadow {box-shadow: $box-shadow;}
  &--outline {padding: 2px;}

  // Background.
  &--default-bg:after {
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
  &--outline:after {display: none;}

  &__label {
    position: absolute;
    font-weight: bold;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__progress {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    border-radius: inherit;
    background-color: currentColor;
    @include default-transition;

    .w-progress--stripes & {
      will-change: background-position;
      background-image: linear-gradient(
                          -45deg,
                          rgba(255, 255, 255, .2) 25%,
                          transparent 25%,
                          transparent 50%,
                          rgba(255, 255, 255, .2) 50%,
                          rgba(255, 255, 255, .2) 75%,
                          transparent 75%,
                          transparent
                        );
      background-size: 50px 50px;
      animation: indeterminate-stripes 2s infinite linear;
    }

    .w-progress--outline & {
      overflow: hidden;
      position: relative;
      width: 100%;
      height: 100%;
      justify-self: left;
      margin-right: auto;
    }

    .w-progress--indeterminate & {
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
        animation: indeterminate-bars 2s infinite;
        transform-origin: right;
      }
      &:before {animation-delay: 0.8s;}
    }
  }

  @keyframes indeterminate-bars {
    0% {transform: translate3d(-100%, 0, 0) scaleX(1);}
    100% {transform: translate3d(0, 0, 0) scaleX(0);}
  }

  @keyframes indeterminate-stripes {
    0% {background-position: 0 0;}
    100% {background-position: 50px 50px;}
  }
}
</style>
