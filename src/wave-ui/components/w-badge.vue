<template lang="pug">
.w-badge
  slot
  transition(:name="`${transition}`")
    .w-badge__badge(
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
    color: { type: String },
    size: { type: [Number, String] },
    bgColor: { type: String, default: 'primary' },
    dark: { type: Boolean },
    badgeClass: { type: String },
    outline: { type: Boolean },
    shadow: { type: Boolean },
    dot: { type: Boolean },
    round: { type: Boolean },
    transition: { type: String, default: 'fade' }
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
      const slotText = this.$slots.badge && this.$slots.badge().map(item => item.children).join('')

      return {
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        [this.badgeClass]: this.badgeClass || null,
        'w-badge__badge--round': this.round || (slotText || this.modelValue + '' || '').length < 2,
        'w-badge__badge--dark': this.dark && !this.outline,
        'w-badge__badge--outline': this.outline,
        'w-badge__badge--shadow': this.shadow,
        'w-badge__badge--overlap': this.overlap,
        'w-badge__badge--dot': this.dot,
        [`size--${this.presetSize}`]: this.presetSize && !this.forcedSize,
        [`w-badge__badge--${this.position.join(' w-badge__badge--')}`]: true
      }
    },
    styles () {
      return this.forcedSize && `font-size: ${this.forcedSize}`
    }
  }
}
</script>

<style lang="scss">
.w-badge {
  position: relative;
  display: inline-flex;

  &__badge {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    border-radius: 9em;
    // Always get an even number for better text vertical align.
    height: round(1.1 * $base-font-size / 2) * 2;
    min-width: round(1.1 * $base-font-size / 2) * 2;
    z-index: 1;
    padding: 0 $base-increment;

    &--round {
      width: round(1.1 * $base-font-size / 2) * 2;
      padding: 0 (round(1.1 * $base-font-size / 4) * 2);
    }

    // Sizes.
    &.size--xs {
      // Always get an even number for better text vertical alignment.
      $height: round($base-font-size / 2) * 2;
      font-size: round(0.67 * $base-font-size / 2) * 2;
      height: $height;
      min-width: $height;

      &.w-badge__badge--round {width: $height;padding: 0 round($height / 2);}
    }
    &.size--sm {
      font-size: round(0.75 * $base-font-size / 2) * 2;
      height: round(1.1 * $base-font-size / 2) * 2;
      min-width: round(1.1 * $base-font-size / 2) * 2;
    }
    &.size--md {
      font-size: round(0.9 * $base-font-size / 2) * 2;
      height: round(1.3 * $base-font-size / 2) * 2;
      min-width: round(1.3 * $base-font-size / 2) * 2;
    }
    &.size--lg {
      font-size: round(1.05 * $base-font-size / 2) * 2;
      height: round(1.5 * $base-font-size / 2) * 2;
      min-width: round(1.5 * $base-font-size / 2) * 2;
    }
    &.size--xl {
      font-size: round(1.2 * $base-font-size / 2) * 2;
      height: round(1.8 * $base-font-size / 2) * 2;
      min-width: round(1.8 * $base-font-size / 2) * 2;
    }

    // Position.
    &--top {top: 0;}
    &--bottom {bottom: 0;}
    &--left {right: 100%;}
    &--right {left: 100%;}
    &--overlap {
      &.w-badge__badge--top {margin-top: -1 * $base-increment;}
      &.w-badge__badge--bottom {margin-bottom: -1 * $base-increment;}
      &.w-badge__badge--left {margin-right: -3 * $base-increment;}
      &.w-badge__badge--right {margin-left: -3 * $base-increment;}
      &.size--xs.w-badge__badge--top {margin-top: round(-0.5 * $base-increment);}
      &.size--xs.w-badge__badge--bottom {margin-bottom: round(-0.5 * $base-increment);}
      &.size--sm.w-badge__badge--top {margin-top: round(-0.75 * $base-increment);}
      &.size--sm.w-badge__badge--bottom {margin-bottom: round(-0.75 * $base-increment);}
      &.size--lg.w-badge__badge--top {margin-top: round(-1.5 * $base-increment);}
      &.size--lg.w-badge__badge--bottom {margin-bottom: round(-1.5 * $base-increment);}
      &.size--xl.w-badge__badge--top {margin-top: -2 * $base-increment;}
      &.size--xl.w-badge__badge--bottom {margin-bottom: -2 * $base-increment;}
    }

    // Look modifiers.
    &--dark {color: rgba(255, 255, 255, 0.95);}
    &--outline {
      background-color: transparent;
      border-color: currentColor;
    }
    &--shadow {box-shadow: $box-shadow;}

    .w-badge &--dot {min-width: 0;padding: 0;}
    &--dot.size--xs {width: round(1.35 * $base-increment);height: round(1.35 * $base-increment);}
    &--dot.size--sm {width: round(1.7 * $base-increment);height: round(1.7 * $base-increment);}
    &--dot.size--md {width: round(2.2 * $base-increment);height: round(2.2 * $base-increment);}
    &--dot.size--lg {width: round(2.75 * $base-increment);height: round(2.75 * $base-increment);}
    &--dot.size--xl {width: 3 * $base-increment;height: 3 * $base-increment;}
  }
}
</style>
