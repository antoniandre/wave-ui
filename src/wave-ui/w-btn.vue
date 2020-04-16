<template lang="pug">
  button.w-btn(:class="classes" :disabled="!!disabled" @click="$emit('click', $event)")
    span
      slot
    slot(name="loading")
      svg(v-if="loading" viewBox="0 0 40 40")
        circle(
          cx="20" cy="20" r="18"
          fill="transparent"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="round")
</template>

<script>
export default {
  props: {
    color: { type: String, default: '' },
    dark: { type: Boolean, default: false },
    outline: { type: Boolean, default: false },
    xSmall: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
    medium: { type: Boolean, default: false },
    large: { type: Boolean, default: false },
    xLarge: { type: Boolean, default: false },
    round: { type: Boolean, default: false },
    shadow: { type: Boolean, default: false },
    tile: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false }
  },

  computed: {
    size () {
      return (
        (this.xSmall && 'x-small') ||
        (this.small && 'small') ||
        (this.large && 'large') ||
        (this.xLarge && 'x-large') ||
        'medium'
      )
    },
    classes () {
      return {
        [this.color]: !!this.color && !this.outline,
        [`${this.color}--text`]: !!this.color && this.outline,
        'w-btn--dark': this.dark && !this.outline,
        'w-btn--outline': this.outline,
        'w-btn--round': this.round,
        'w-btn--tile': this.tile,
        'w-btn--shadow': this.shadow,
        'w-btn--loading': this.loading,
        [`size--${this.size}`]: true
      }
    }
  }
}
</script>

<style lang="scss">
$spinner-size: 40;

.w-btn {
  position: relative;
  outline: none;
  border-radius: $border-radius;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.85);
  padding: 0.2rem 0.4rem;
  transition: 0.15s;
  box-shadow: 0 0 0 transparent;
  vertical-align: middle;
  user-select: none;

  &--dark {color: rgba(255, 255, 255, 0.95);}
  &--outline {background-color: transparent;border-color: currentColor;}
  &--round {border-radius: 2rem;}
  &--tile {border-radius: initial;}
  &--shadow {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
                0 2px 2px 0 rgba(0, 0, 0, 0.15),
                0 1px 5px 0 rgba(0, 0, 0, 0.15);
  }
  &[disabled] {
    box-shadow: none;
    border-color: rgba(0, 0, 0, 0.03);
    background-color: rgba(0, 0, 0, 0.12);
  }
  &--dark[disabled] {
    background-color: rgba(255, 255, 255, 0.12);
    color: rgba(255, 255, 255, 0.3);
  }

  // Overlay to show the focus and active state.
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    background-color: transparent;
    border-radius: inherit;
    transition: 0.15s;
  }
  &:focus:before {background-color: rgba(0, 0, 0, 0.15);opacity: 1;}
  &--dark:focus:before {background-color: rgba(255, 255, 255, 0.15);}
  &--outline:focus:before {background-color: currentColor;opacity: 0.12;}
  &:active:before {background-color: rgba(0, 0, 0, 0.3);opacity: 1;}
  &--dark:active:before {background-color: rgba(255, 255, 255, 0.3);}
  &--outline:active:before {background-color: currentColor;opacity: 0.25;}
  &[disabled]:before {background-color: transparent;}


  // Rounding border to represent the focus state.
  &:after {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    transition: 0.2s;
    background-color: transparent;
    border-radius: inherit;
    opacity: 0.25;
    z-index: -1;
    transition: 0.4s;
  }
  &:focus:after {background-color: inherit;}

  // Button content must stay on top of the overlay.
  & > span {position: relative;}
  &--loading > span {opacity: 0;}

  &--loading svg {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 65%;
    transform: translate(-50%, -50%);

    circle {
      stroke-dasharray: (3.14 * $spinner-size);
      transform-origin: 50%;
      animation: spinner 2s linear infinite;
    }
  }
}

@keyframes spinner {
  0% {transform: rotate(0deg);stroke-dashoffset: (0.66 * $spinner-size);}
  50% {transform: rotate(720deg);stroke-dashoffset: (3.14 * $spinner-size);}
  100% {transform: rotate(1080deg);stroke-dashoffset: (0.66 * $spinner-size);}
}
</style>
