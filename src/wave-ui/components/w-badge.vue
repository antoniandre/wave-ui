<template lang="pug">
  .w-badge
    slot
    component(:is="`w-transition-${transition}`")
      .w-badge__badge(
        v-if="value"
        :class="classes"
        :style="styles"
        aria-atomic="true"
        aria-label="Badge"
        aria-live="polite"
        role="status")
        slot(v-if="!dot" name="badge") {{ value || '' }}
</template>

<script>
export default {
  name: 'w-badge',
  props: {
    value: { default: true },
    xs: { type: Boolean, default: false },
    sm: { type: Boolean, default: false },
    md: { type: Boolean, default: false },
    lg: { type: Boolean, default: false },
    xl: { type: Boolean, default: false },
    top: { type: Boolean, default: false },
    left: { type: Boolean, default: false },
    right: { type: Boolean, default: false },
    bottom: { type: Boolean, default: false },
    overlap: { type: Boolean, default: false },
    color: { type: String, default: '' },
    bgColor: { type: String, default: 'primary' },
    dark: { type: Boolean, default: false },
    outline: { type: Boolean, default: false },
    shadow: { type: Boolean, default: false },
    dot: { type: Boolean, default: false },
    transition: { type: String, default: 'fade' }
  },

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
      return {
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        'w-badge__badge--dark': this.dark && !this.outline,
        'w-badge__badge--outline': this.outline,
        'w-badge__badge--shadow': this.shadow,
        'w-badge__badge--overlap': this.overlap,
        'w-badge__badge--dot': this.dot,
        [`size--${this.presetSize}`]: this.presetSize && !this.forcedSize,
        [this.position.join(' ')]: true
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
  align-self: center;

  &__badge {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    border-radius: 4 * $base-font-size;
    // Always get an even number for better text vertical align.
    height: round(1.1 * $base-font-size / 2) * 2;
    min-width: round(1.1 * $base-font-size / 2) * 2;
    z-index: 1;
    padding: 0 $base-increment;

    // Sizes.
    &.size--xs {
      // Always get an even number for better text vertical align.
      font-size: round(0.7 * $base-font-size / 2) * 2;
      height: round(1 * $base-font-size / 2) * 2;
      min-width: round(1 * $base-font-size / 2) * 2;
    }
    &.size--sm {
      font-size: round(0.85 * $base-font-size / 2) * 2;
      height: round(1.1 * $base-font-size / 2) * 2;
      min-width: round(1.1 * $base-font-size / 2) * 2;
    }
    &.size--md {
      font-size: round(0.95 * $base-font-size / 2) * 2;
      height: round(1.3 * $base-font-size / 2) * 2;
      min-width: round(1.3 * $base-font-size / 2) * 2;
    }
    &.size--lg {
      font-size: round(1.1 * $base-font-size / 2) * 2;
      height: round(1.5 * $base-font-size / 2) * 2;
      min-width: round(1.5 * $base-font-size / 2) * 2;
    }
    &.size--xl {
      font-size: round(1.25 * $base-font-size / 2) * 2;
      height: round(1.8 * $base-font-size / 2) * 2;
      min-width: round(1.8 * $base-font-size / 2) * 2;
    }

    // Position.
    &.top {top: 0;}
    &.bottom {bottom: 0;}
    &.left {right: 100%;}
    &.right {left: 100%;}
    &--overlap {margin: -2 * $base-increment;}

    // Look modifiers.
    &--dark {color: rgba(255, 255, 255, 0.95);}
    &--outline {
      background-color: transparent;
      border-color: currentColor;
    }
    &--shadow {box-shadow: $box-shadow;}

    .w-badge &--dot {min-width: 0;padding: 0;}
    &--dot.size--xs {width: round(1.5 * $base-increment);height: round(1.5 * $base-increment);}
    &--dot.size--sm {width: 2 * $base-increment;height: 2 * $base-increment;}
    &--dot.size--md {width: 2 * $base-increment;height: 2 * $base-increment;}
    &--dot.size--lg {width: 3 * $base-increment;height: 3 * $base-increment;}
    &--dot.size--xl {width: 3 * $base-increment;height: 3 * $base-increment;}
  }
}
</style>
