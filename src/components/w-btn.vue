<template lang="pug">
  button.w-btn(:class="classes")
    slot
</template>

<script>
export default {
  props: {
    color: { type: String, default: '' },
    dark: { type: Boolean, default: false },
    xSmall: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
    medium: { type: Boolean, default: false },
    large: { type: Boolean, default: false },
    xLarge: { type: Boolean, default: false },
  },

  computed: {
    classes () {
      return {
        [this.color]: !!this.color,
        'theme--dark': this.dark,
        'size--x-small': this.xSmall,
        'size--small': this.small,
        'size--medium': this.medium,
        'size--large': this.large,
        'size--x-large': this.xLarge,
      }
    }
  }
}
</script>

<style lang="scss">
$border-radius: 4px;

.w-btn {
  position: relative;
  outline: none;
  border-radius: $border-radius;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background-color: rgba(255, 255, 255, 0.85);
  padding: 0.2rem 0.4rem;
  transition: 0.15s;
  box-shadow: 0 0 0 transparent;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0.2s;
  }

  &:active:before {
    background-color: rgba(0, 0, 0, 0.15);
  }

  &:after {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    transition: 0.2s;
    background-color: transparent;
    border-radius: inherit;
    opacity: 0.25;
    z-index: -1;
    transition: 0.4s;
  }
  &:focus:after {background-color: inherit;}

  &.theme--dark {
    color: white;

    &:active:before {
      background-color: rgba(255, 255, 255, 0.15);
    }
  }
}
</style>
