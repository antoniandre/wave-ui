<template lang="pug">
.w-badge-wrap
  slot
  transition(:name="`${transition}`")
    .w-badge(
      v-if="modelValue"
      :class="classes"
      :style="styles"
      aria-atomic="true"
      aria-label="Badge"
      aria-live="polite"
      role="status")
      slot(v-if="!dot" name="badge") {{ modelValue === true ? '' : (modelValue || '') }}
</template>

<script>
export default {
  name: 'w-badge',

  props: {
    modelValue: { default: true },
    xs: { type: Boolean },
    sm: { type: Boolean },
    md: { type: Boolean },
    lg: { type: Boolean },
    xl: { type: Boolean },
    top: { type: Boolean },
    left: { type: Boolean },
    right: { type: Boolean },
    bottom: { type: Boolean },
    overlap: { type: Boolean },
    inline: { type: Boolean },
    color: { type: String },
    size: { type: [Number, String] },
    bgColor: { type: String, default: 'primary' },
    badgeClass: { type: String },
    outline: { type: Boolean },
    shadow: { type: Boolean },
    dot: { type: Boolean },
    round: { type: Boolean },
    transition: { type: String, default: 'fade' },
    dark: { type: Boolean },
    light: { type: Boolean }
  },

  emits: [],

  computed: {
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
        'md'
      )
    },
    position () {
      return [
        (this.top && 'top') || (this.bottom && 'bottom') || 'top',
        (this.left && 'left') || (this.right && 'right') || 'right'
      ]
    },
    classes () {
      const slotText = this.$slots.badge?.().map(item => item.children).join('')

      return {
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        [this.badgeClass]: this.badgeClass || null,
        'w-badge--round': this.round || (slotText || `${this.modelValue}` || '').length < 2,
        'w-badge--dark': this.dark,
        'w-badge--light': this.light,
        'w-badge--outline': this.outline,
        'w-badge--inline': this.inline,
        'w-badge--shadow': this.shadow,
        'w-badge--overlap': this.overlap,
        'w-badge--dot': this.dot,
        [`size--${this.presetSize}`]: this.presetSize && !this.forcedSize,
        [`w-badge--${this.position.join(' w-badge--')}`]: true
      }
    },
    styles () {
      return this.forcedSize && `font-size: ${this.forcedSize}`
    }
  }
}
</script>

<style lang="scss">
@use "sass:math";

.w-badge-wrap {
  position: relative;
  display: inline-flex;
}

.w-badge {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 99em;
  // Always get an even number for better text vertical align.
  height: math.round(1.1 * divide($base-font-size, 2)) * 2;
  line-height: math.round(1.1 * divide($base-font-size, 2)) * 2;
  min-width: math.round(1.1 * divide($base-font-size, 2)) * 2;
  z-index: 1;
  padding: 0 $base-increment;

  @include themeable;

  &--inline {position: static;}

  &--round {
    aspect-ratio: 1;
    min-width: 0; // Safari ratio fix (e.g. losing ratio if height is set and side padding are added).
    padding: 0;
  }

  // Sizes.
  &.size--xs {
    // Always get an even number for better text vertical alignment.
    $height: math.round(divide($base-font-size, 2)) * 2;
    font-size: math.round(0.67 * divide($base-font-size, 2)) * 2;
    height: $height;
    line-height: $height;
    min-width: $height;

    &--round {width: $height;padding: 0 math.round(divide($height, 2));}
  }
  &.size--sm {
    $height: math.round(1.1 * divide($base-font-size, 2)) * 2;
    font-size: math.round(0.75 * divide($base-font-size, 2)) * 2;
    height: $height;
    line-height: $height;
    min-width: $height;
  }
  &.size--md {
    $height: math.round(1.3 * divide($base-font-size, 2)) * 2;
    font-size: math.round(0.9 * divide($base-font-size, 2)) * 2;
    height: $height;
    line-height: $height;
    min-width: $height;
  }
  &.size--lg {
    $height: math.round(1.5 * divide($base-font-size, 2)) * 2;
    font-size: math.round(1.05 * divide($base-font-size, 2)) * 2;
    height: $height;
    line-height: $height;
    min-width: $height;
  }
  &.size--xl {
    $height: math.round(1.8 * divide($base-font-size, 2)) * 2;
    font-size: math.round(1.2 * divide($base-font-size, 2)) * 2;
    height: $height;
    line-height: $height;
    min-width: $height;
  }

  // Position.
  &--top {top: 0;}
  &--bottom {bottom: 0;}
  &--left {right: 100%;}
  &--right {left: 100%;}
  &--overlap {
    &.w-badge--top {margin-top: -1 * $base-increment;}
    &.w-badge--bottom {margin-bottom: -1 * $base-increment;}
    &.w-badge--left {margin-right: -3 * $base-increment;}
    &.w-badge--right {margin-left: -3 * $base-increment;}
    &.w-badge--top.size--xs {margin-top: math.round(-0.5 * $base-increment);}
    &.w-badge--bottom.size--xs {margin-bottom: math.round(-0.5 * $base-increment);}
    &.w-badge--top.size--sm {margin-top: math.round(-0.75 * $base-increment);}
    &.w-badge--bottom.size--sm {margin-bottom: math.round(-0.75 * $base-increment);}
    &.w-badge--top.size--lg {margin-top: math.round(-1.5 * $base-increment);}
    &.w-badge--bottom.size--lg {margin-bottom: math.round(-1.5 * $base-increment);}
    &.w-badge--top.size--xl {margin-top: -2 * $base-increment;}
    &.w-badge--bottom.size--xl {margin-bottom: -2 * $base-increment;}
  }

  // Look modifiers.
  &--dark {color: rgba(255, 255, 255, 0.95);}
  &--outline {
    background-color: transparent;
    border-color: currentColor;
  }
  &--shadow {box-shadow: $box-shadow;}

  &--dot.w-badge {min-width: 0;padding: 0;aspect-ratio: 1;}
  &--dot.size--xs {height: math.round(1.35 * $base-increment);}
  &--dot.size--sm {height: math.round(1.7 * $base-increment);}
  &--dot.size--md {height: math.round(2.2 * $base-increment);}
  &--dot.size--lg {height: math.round(2.75 * $base-increment);}
  &--dot.size--xl {height: 3 * $base-increment;}
}
</style>
