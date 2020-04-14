<template lang="pug">
  button.w-btn(:class="classes" @click="$emit('click', $event)")
    slot
</template>

<script>
export default {
  props: {
    color: { type: String, default: '' },
    dark: { type: Boolean, default: false },
    outlined: { type: Boolean, default: false },
    xSmall: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
    medium: { type: Boolean, default: false },
    large: { type: Boolean, default: false },
    xLarge: { type: Boolean, default: false }
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
        [this.color]: !!this.color && !this.outlined,
        [`${this.color}--text`]: !!this.color && this.outlined,
        'w-btn--dark': this.dark && !this.outlined,
        'w-btn--outlined': this.outlined,
        [`size--${this.size}`]: true
      }
    }
  }
}
</script>

<style lang="scss">
.w-btn {
  position: relative;
  outline: none;
  border-radius: $border-radius;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.85);
  padding: 0.2rem 0.4rem;
  transition: 0.15s;
  box-shadow: 0 0 0 transparent;

  &.w-btn--dark {color: rgba(255, 255, 255, 0.95);}
  &.w-btn--outlined {background-color: transparent;border-color: currentColor;}

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
  &.w-btn--dark:focus:before {background-color: rgba(255, 255, 255, 0.15);}
  &.w-btn--outlined:focus:before {background-color: currentColor;opacity: 0.12;}
  &:active:before {background-color: rgba(0, 0, 0, 0.3);opacity: 1;}
  &.w-btn--dark:active:before {background-color: rgba(255, 255, 255, 0.3);}
  &.w-btn--outlined:active:before {background-color: currentColor;opacity: 0.25;}

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
}
</style>
