<template lang="pug">
.w-spinner(v-if="value || value === undefined" :class="classes" :style="styles")
  span(v-if="isThreeDots")
</template>

<script>
export default {
  name: 'w-spinner',
  props: {
    value: {},
    color: { type: String, default: 'primary' },
    xs: { type: Boolean },
    sm: { type: Boolean },
    md: { type: Boolean },
    lg: { type: Boolean },
    xl: { type: Boolean },
    size: { type: [Number, String] },
    bounce: { type: Boolean },
    fade: { type: Boolean }
  },

  emits: [],

  computed: {
    isThreeDots () {
      return !this.bounce && !this.fade
    },
    forcedSize () {
      return this.size && (!isNaN(this.size) ? `${this.size}px` : this.size)
    },
    presetSize () {
      return (
        (this.xs && 'xs') ||
        (this.sm && 'sm') ||
        (this.md && 'md') ||
        (this.lg && 'lg') ||
        (this.xl && 'xl') ||
        null
      )
    },
    styles () {
      return (this.forcedSize && `font-size: ${this.forcedSize}`) || null
    },
    classes () {
      return {
        [this.color]: this.color,
        [`size--${this.presetSize}`]: this.presetSize && !this.forcedSize,
        'w-spinner--bounce': this.bounce,
        'w-spinner--fade': this.fade,
        'w-spinner--three-dots': this.isThreeDots
      }
    }
  }
}
</script>

<style lang="scss">
.w-spinner {
  position: relative;
  display: inline-flex;
  align-self: center;
  font-size: 2rem;
  width: 1em;
  height: 1em;

  &.size--xs {font-size: round(0.9 * divide($base-font-size, 2)) * 2;}
  &.size--sm {font-size: round(1.5 * $base-font-size);}
  &.size--md {font-size: round(2 * $base-font-size);}
  &.size--lg {font-size: round(2.5 * $base-font-size);}
  &.size--xl {font-size: 3 * $base-font-size;}

  &:before, &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: currentColor;
    border-radius: 100%;
  }


  &--bounce {
    &:before, &:after {
      opacity: 0.6;
      animation: w-spinner-bounce 2s ease-in-out infinite;
    }

    &:after {animation-delay: -1.0s;}

    @keyframes w-spinner-bounce {
      0%, 100% {transform: scale(0);}
      50% {transform: scale(1);}
    }
  }

  &--fade {
    &:before {animation: w-spinner-fade 1.5s ease-in-out infinite;}
    &:after {display: none;}

    @keyframes w-spinner-fade {
      0% {transform: scale(0);}
      100% {transform: scale(1);opacity: 0;}
    }
  }

  &--three-dots {
    position: relative;
    width: 3.8em;
    font-size: 1.3rem;

    &:before, span, &:after {
      width: 1em;
      background: radial-gradient(circle at 50%, currentColor 70%, transparent 70.5%);
      transform: scale(0);
      animation: w-spinner-three-dots 1.2s 0s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite alternate;
    }

    span {
      position: absolute;
      left: 50%;
      height: 1em;
      margin-left: -0.5em;
      animation-delay: 0.333s;
    }

    &:after {
      right: 0;
      left: auto;
      animation-delay: 0.666s;
    }

    @keyframes w-spinner-three-dots {
      0%, 40% {transform: scale(0);opacity: 0;}
      100% {transform: scale(1);opacity: 1;}
    }
  }
}
</style>
