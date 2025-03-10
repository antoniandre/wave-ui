<template lang="pug">
span.w-tag(
  @click="$emit('update:modelValue', !modelValue);$emit('input', !modelValue)"
  @keypress.enter="$emit('update:modelValue', !modelValue);$emit('input', !modelValue)"
  :class="classes"
  :role="modelValue !== -1 && 'button'"
  :aria-pressed="modelValue !== -1 && (modelValue ? 'true' : 'false')"
  :tabindex="modelValue !== -1 && 0"
  :style="styles")
  slot
  i(
    v-if="closable && modelValue"
    @click.stop="$emit('update:modelValue', false);$emit('input', false)"
    role="icon"
    aria-hidden="true"
    class="w-icon w-tag__closable wi-cross")
</template>

<script>
export default {
  name: 'w-tag',

  props: {
    modelValue: { type: [Boolean, Number], default: -1 },
    color: { type: String },
    bgColor: { type: String },
    shadow: { type: Boolean },
    tile: { type: Boolean },
    round: { type: Boolean },
    closable: { type: Boolean },
    outline: { type: Boolean },
    noBorder: { type: Boolean },
    xs: { type: Boolean },
    sm: { type: Boolean },
    md: { type: Boolean },
    lg: { type: Boolean },
    xl: { type: Boolean },
    width: { type: [Number, String] },
    height: { type: [Number, String] },
    dark: { type: Boolean },
    light: { type: Boolean }
  },

  emits: ['input', 'update:modelValue'],

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
        'w-tag--dark': this.dark,
        'w-tag--light': this.light,
        'w-tag--clickable': this.modelValue !== -1,
        'w-tag--outline': this.outline,
        'w-tag--no-border': this.noBorder || this.shadow,
        'w-tag--tile': this.tile,
        'w-tag--round': this.round,
        'w-tag--shadow': this.shadow
      }
    },
    styles () {
      return {
        width: (!isNaN(this.width) ? `${this.width}px` : this.width) || null,
        height: (!isNaN(this.height) ? `${this.height}px` : this.height) || null
      }
    }
  }
}
</script>

<style lang="scss">
@use "sass:math";

.w-tag {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  border-radius: $border-radius;
  border: 1px solid color-mix(in srgb, var(--w-contrast-bg-color) 8%, transparent);
  background-color: color-mix(in srgb, var(--w-base-bg-color) 85%, transparent);
  padding-left: 2 * $base-increment;
  padding-right: 2 * $base-increment;
  cursor: default;
  user-select: none;

  @include themeable;

  &--dark {color: color-mix(in srgb, var(--w-base-bg-color) 95%, transparent);}
  &--outline {background-color: transparent;border-color: currentColor;}
  &--no-border {border-color: transparent;}
  &--round {border-radius: 99em;}
  &--tile {border-radius: initial;}
  &--shadow {box-shadow: $box-shadow;}

  &.size--xs {
    $font-size: math.round(0.7 * $base-font-size);
    font-size: $font-size;
    line-height: $font-size + 2px;
    padding: math.round(0.25 * $base-increment) $base-increment;
  }
  &.size--sm {
    $font-size: math.round(0.82 * $base-font-size);
    font-size: $font-size;
    line-height: $font-size + 2px;
    padding: math.round(0.25 * $base-increment) $base-increment;
  }
  &.size--md {
    $font-size: math.round(0.85 * $base-font-size);
    font-size: $font-size;
    line-height: $font-size + 4px;
    padding-top: math.round(0.25 * $base-increment);
    padding-bottom: math.round(0.25 * $base-increment);
  }
  &.size--lg {
    $font-size: math.round(1.1 * $base-font-size);
    font-size: $font-size;
    line-height: $font-size + 4px;
    padding-top: math.round(0.5 * $base-increment);
    padding-bottom: math.round(0.5 * $base-increment);
  }
  &.size--xl {
    $font-size: math.round(1.3 * $base-font-size);
    font-size: $font-size;
    line-height: $font-size + 4px;
    padding-top: math.round(1 * $base-increment);
    padding-bottom: math.round(1 * $base-increment);
  }

  &--clickable {
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    .w-tag__closable {
      margin-left: 3px;
      margin-right: -3px;
      padding: 1px;
      transition: $transition-duration;
    }
    &.size--lg .w-tag__closable,
    &.size--xl .w-tag__closable {
      margin-right: -2px;
      padding: 2px;
    }

    &:hover {
      .w-tag__closable {background-color: color-mix(in srgb, var(--w-contrast-bg-color) 10%, transparent);}
    }

    // Overlay to mark the focus and active state.
    &:before {
      content: '';
      position: absolute;
      inset: 0;
      opacity: 0;
      background-color: transparent;
      // As this overlay is a smaller rectangle, the radius must be smaller to cover perfectly.
      border-radius: $border-radius - 1;
      transition: 0.2s;
    }
    &.w-tag--round:before {border-radius: inherit;}

    // Hover state.
    &:hover:before {background-color: currentColor;opacity: 0.06;}
    &--dark:hover:before {background-color: color-mix(in srgb, var(--w-base-bg-color) 12%, transparent);opacity: 1;}
    &--outline:hover:before,
    &--text:hover:before {background-color: currentColor;opacity: 0.12;}

    // Focus state.
    &:focus:before {background-color: currentColor;opacity: 0.2;}
    &--dark:focus:before {background-color: color-mix(in srgb, var(--w-base-bg-color) 12%, transparent);}
    &--outline:focus:before,
    &--text:focus:before {background-color: currentColor;opacity: 0.12;}

    // Active state.
    &:active:before {background-color: currentColor;opacity: 0.2;}
    &--dark:active:before {background-color: color-mix(in srgb, var(--w-base-bg-color) 20%, transparent);}
    &--outline:active:before,
    &--text:active:before {background-color: currentColor;opacity: 0.2;}
  }
}
</style>
