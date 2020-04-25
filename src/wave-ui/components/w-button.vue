<template lang="pug">
  button.w-button(
    :class="classes"
    :disabled="!!disabled"
    @click="$emit('click', $event)")
    w-icon(v-if="icon" v-bind="{ [size]: true }") {{ icon }}
    span(v-else)
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
import WIcon from './w-icon'

export default {
  name: 'w-button',
  components: { WIcon },
  props: {
    xSmall: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
    medium: { type: Boolean, default: false },
    large: { type: Boolean, default: false },
    xLarge: { type: Boolean, default: false },
    color: { type: String, default: '' },
    dark: { type: Boolean, default: false },
    outline: { type: Boolean, default: false },
    text: { type: Boolean, default: false },
    round: { type: Boolean, default: false },
    shadow: { type: Boolean, default: false },
    tile: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    // If an icon is passed, no text will display.
    icon: { type: String, default: null }
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
        [this.color]: !!this.color && !this.outline && !this.text,
        [`${this.color}--text`]: !!this.color && (this.outline || this.text),
        'w-button--dark': this.dark && !this.outline,
        'w-button--outline': this.outline,
        'w-button--text': this.text,
        'w-button--round': this.round,
        'w-button--tile': this.tile,
        'w-button--shadow': this.shadow,
        'w-button--loading': this.loading,
        'w-button--icon': this.icon,
        [`size--${this.size}`]: true
      }
    }
  }
}
</script>

<style lang="scss">
$spinner-size: 40;

.w-button {
  position: relative;
  display: inline-flex;
  outline: none;
  border-radius: $border-radius;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: rgba(255, 255, 255, 0.85);
  padding-left: 2 * $base-increment;
  padding-right: 2 * $base-increment;
  transition: 0.15s;
  box-shadow: 0 0 0 transparent;
  vertical-align: middle;
  user-select: none;
  cursor: pointer;

  &--dark {color: rgba(255, 255, 255, 0.95);}
  &--outline {background-color: transparent;border-color: currentColor;}
  &--text {background-color: transparent;border-color: transparent;}
  &--round {
    border-radius: 12 * $base-increment;
    padding-left: round(3 * $base-increment);
    padding-right: round(3 * $base-increment);
  }
  &--icon {padding: round(0.4 * $base-increment);}
  &--icon.size--large, &--icon.size--x-large {padding: 2 * $base-increment;}
  &--tile {border-radius: initial;}
  &--shadow {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
                0 2px 2px 0 rgba(0, 0, 0, 0.15),
                0 1px 5px 0 rgba(0, 0, 0, 0.15);
  }
  &--loading {cursor: wait;opacity: 0.8;}
  &[disabled] {
    cursor: auto;
    box-shadow: none;
    opacity: 0.3;
    // border-color: rgba(0, 0, 0, 0.03);
    // background-color: rgba(0, 0, 0, 0.12);
  }
  &--dark[disabled] {
    background-color: rgba(255, 255, 255, 0.12);
    color: rgba(255, 255, 255, 0.3);
  }

  &.size--x-small {padding-left: $base-increment;padding-right: $base-increment;}
  &.size--x-large {padding-left: 3 * $base-increment;padding-right: 3 * $base-increment;}
  &--round.size--x-small {padding-left: round(1.5 * $base-increment);padding-right: round(1.5 * $base-increment);}
  &--round.size--x-large {padding-left: round(4.5 * $base-increment);padding-right: round(4.5 * $base-increment);}

  // Overlay to mark the focus and active state.
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

  // Hover state.
  &:hover:before {background-color: currentColor;opacity: 0.08;}
  &--dark:hover:before {background-color: rgba(255, 255, 255, 0.15);opacity: 1;}
  &--outline:hover:before,
  &--text:hover:before {background-color: currentColor;opacity: 0.12;}

  // Focus state.
  &:focus:before {background-color: rgba(0, 0, 0, 0.15);opacity: 1;}
  &--dark:focus:before {background-color: rgba(255, 255, 255, 0.15);}
  &--outline:focus:before,
  &--text:focus:before {background-color: currentColor;opacity: 0.12;}

  // Active state.
  &:active:before {background-color: rgba(0, 0, 0, 0.3);opacity: 1;}
  &--dark:active:before {background-color: rgba(255, 255, 255, 0.3);}
  &--outline:active:before,
  &--text:active:before {background-color: currentColor;opacity: 0.25;}

  // Disable visual feedback on loading and disabled buttons.
  &--loading:hover:before,
  &--loading:focus:before,
  &--loading:active:before,
  &[disabled]:before {background-color: transparent;}

  // Surrounding border to mark the focus state.
  &:after {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background-color: transparent;
    border-radius: inherit;
    opacity: 0.25;
    z-index: -1;
    @include default-transition(0.3s);
  }
  &:focus:after {background-color: inherit;}

  // Button content must stay on top of the overlay.
  & > span {
    position: relative;
    display: inline-flex;
    align-items: center;
  }
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
