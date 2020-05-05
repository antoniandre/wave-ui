<template lang="pug">
  span.w-tag(:class="classes" :style="styles")
    slot
    w-icon.w-tag__close(v-if="close") wi-cross
</template>

<script>
export default {
  name: 'w-tag',
  props: {
    value: { type: [Number, String, Boolean], default: -1 },
    color: { type: String, default: '' },
    bgColor: { type: String, default: '' },
    dark: { type: Boolean, default: false },
    size: { type: String, default: '' },
    shadow: { type: Boolean, default: false },
    tile: { type: Boolean, default: false },
    round: { type: Boolean, default: false },
    close: { type: Boolean, default: false },
    outline: { type: Boolean, default: false }
  },

  computed: {
    classes () {
      return {
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        'w-tag--dark': this.dark && !this.outline,
        'w-tag--clickable': this.value !== -1,
        'w-tag--outline': this.outline,
        'w-tag--tile': this.tile,
        'w-tag--round': this.round,
        'w-tag--shadow': this.shadow
      }
    },
    styles () {
      return false
    }
  }
}
</script>

<style lang="scss">
.w-tag {
  display: inline-flex;
  position: relative;
  border-radius: $border-radius;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: rgba(255, 255, 255, 0.85);
  padding-left: 2 * $base-increment;
  padding-right: 2 * $base-increment;
  font-size: round(0.85 * $base-font-size);

  &--dark {color: rgba(255, 255, 255, 0.95);}
  &--outline {background-color: transparent;border-color: currentColor;}
  &--round {
    border-radius: 12 * $base-increment;
    padding-left: round(3 * $base-increment);
    padding-right: round(3 * $base-increment);
  }
  &--tile {border-radius: initial;}
  &--shadow {box-shadow: $box-shadow;}

  .w-tag__close {line-height: inherit;}

  &--clickable {
    cursor: pointer;
    user-select: none;

    &:hover {}

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
  }
}
</style>
