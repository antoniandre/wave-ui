<template lang="pug">
  span.w-tag(
    @click="$emit('input', !value)"
    :class="classes"
    :role="value !== -1 && 'button'"
    :aria-pressed="value !== -1 && (value ? 'true' : 'false')"
    :tabindex="value !== -1 && 0"
    :style="styles")
    slot
    i(
      v-if="close && value"
      @click.stop="$emit('input', false)"
      role="icon"
      aria-hidden="true"
      class="w-icon w-tag__close wi-cross")
</template>

<script>
export default {
  name: 'w-tag',
  props: {
    value: { type: [Boolean, Number], default: -1 },
    color: { type: String, default: '' },
    bgColor: { type: String, default: '' },
    dark: { type: Boolean, default: false },
    shadow: { type: Boolean, default: false },
    tile: { type: Boolean, default: false },
    round: { type: Boolean, default: false },
    close: { type: Boolean, default: false },
    outline: { type: Boolean, default: false },
    xs: { type: Boolean, default: false },
    sm: { type: Boolean, default: false },
    md: { type: Boolean, default: false },
    lg: { type: Boolean, default: false },
    xl: { type: Boolean, default: false },
  },

  computed: {
    presetSize () {
      return (
        (this.xs && 'xs') ||
        (this.sm && 'sm') ||
        (this.lg && 'lg') ||
        (this.xl && 'xl') ||
        'md'
      )
    },
    classes () {
      return {
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        [`size--${this.presetSize}`]: true,
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
  position: relative;
  display: inline-flex;
  align-items: center;
  border-radius: $border-radius;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: rgba(255, 255, 255, 0.85);
  padding-left: 2 * $base-increment;
  padding-right: 2 * $base-increment;
  font-size: round(0.85 * $base-font-size);
  cursor: default;

  &--dark {color: rgba(255, 255, 255, 0.95);}
  &--outline {background-color: transparent;border-color: currentColor;}
  &--round {border-radius: 4 * $base-font-size;}
  &--tile {border-radius: initial;}
  &--shadow {box-shadow: $box-shadow;}

  &.size--xs {
    font-size: round(0.7 * $base-font-size);
    padding-left: $base-increment;
    padding-right: $base-increment;
    line-height: 1.3;
  }
  &.size--sm {
    font-size: round(0.82 * $base-font-size);
    padding-left: $base-increment;
    padding-right: $base-increment;
    line-height: 1.3;
  }
  &.size--md {font-size: round(0.95 * $base-font-size);line-height: 1.3;}
  &.size--lg {font-size: round(1.1 * $base-font-size);line-height: 1.5;}
  &.size--xl {font-size: round(1.3 * $base-font-size);line-height: 1.5;}

  &--clickable {
    cursor: pointer;
    user-select: none;

    .w-tag__close {
      margin-left: 3px;
      margin-right: -3px;
      padding: 1px;
      transition: $transition-duration;
    }
    &.size--lg .w-tag__close,
    &.size--xl .w-tag__close {
      margin-right: -2px;
      padding: 2px;
    }

    &:hover {
      .w-tag__close {background-color: rgba(0, 0, 0, 0.1);}
    }

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
      transition: 0.2s;
    }

    // Hover state.
    &:hover:before {background-color: currentColor;opacity: 0.06;}
    &--dark:hover:before {background-color: rgba(255, 255, 255, 0.12);opacity: 1;}
    &--outline:hover:before,
    &--text:hover:before {background-color: currentColor;opacity: 0.12;}

    // Focus state.
    &:focus:before {background-color: currentColor;opacity: 0.2;}
    &--dark:focus:before {background-color: rgba(255, 255, 255, 0.12);}
    &--outline:focus:before,
    &--text:focus:before {background-color: currentColor;opacity: 0.12;}

    // Active state.
    &:active:before {background-color: currentColor;opacity: 0.2;}
    &--dark:active:before {background-color: rgba(255, 255, 255, 0.2);}
    &--outline:active:before,
    &--text:active:before {background-color: currentColor;opacity: 0.2;}
  }
}
</style>
