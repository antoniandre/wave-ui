<template lang="pug">
span.w-tag(
  v-on="$listeners"
  @click="$emit('update:modelValue', !value);$emit('input', !value)"
  @keypress.enter="$emit('update:modelValue', !value);$emit('input', !value)"
  :class="classes"
  :role="value !== -1 && 'button'"
  :aria-pressed="value !== -1 && (value ? 'true' : 'false')"
  :tabindex="value !== -1 && 0"
  :style="styles")
  slot
  i(
    v-if="closable && value"
    @click.stop="$emit('update:modelValue', false);$emit('input', false)"
    role="icon"
    aria-hidden="true"
    class="w-icon w-tag__closable wi-cross")
</template>

<script>
export default {
  name: 'w-tag',

  props: {
    value: { type: [Boolean, Number], default: -1 },
    color: { type: String },
    bgColor: { type: String },
    dark: { type: Boolean },
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
    height: { type: [Number, String] }
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
        'w-tag--dark': this.dark && !this.outline,
        'w-tag--clickable': this.value !== -1,
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
.w-tag {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  border-radius: $border-radius;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: rgba(255, 255, 255, 0.85);
  padding-left: 2 * $base-increment;
  padding-right: 2 * $base-increment;
  font-size: round(0.85 * $base-font-size);
  cursor: default;
  user-select: none;

  &--dark {color: rgba(255, 255, 255, 0.95);}
  &--outline {background-color: transparent;border-color: currentColor;}
  &--no-border {border-color: transparent;}
  &--round {border-radius: 9em;}
  &--tile {border-radius: initial;}
  &--shadow {box-shadow: $box-shadow;}

  &.size--xs {font-size: round(0.7 * $base-font-size);}
  &.size--sm {
    font-size: round(0.82 * $base-font-size);
    padding: round(0.25 * $base-increment) $base-increment;
  }
  &.size--md {
    font-size: round(0.95 * $base-font-size);
    padding-top: round(0.25 * $base-increment);
    padding-bottom: round(0.25 * $base-increment);
  }
  &.size--lg {
    font-size: round(1.1 * $base-font-size);
    padding-top: round(0.5 * $base-increment);
    padding-bottom: round(0.5 * $base-increment);
  }
  &.size--xl {
    font-size: round(1.3 * $base-font-size);
    padding-top: round(1 * $base-increment);
    padding-bottom: round(1 * $base-increment);
  }

  &--clickable {
    cursor: pointer;
    user-select: none;

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
      .w-tag__closable {background-color: rgba(0, 0, 0, 0.1);}
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
      // As this overlay is a smaller rectangle, the radius must be smaller to cover perfectly.
      border-radius: $border-radius - 1;
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
