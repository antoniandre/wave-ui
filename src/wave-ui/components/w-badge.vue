<template lang="pug">
  .w-badge
    slot
    .w-badge__badge(:class="classes" :style="styles")
      slot(name="badge") {{ value || '' }}
</template>

<script>
export default {
  name: 'w-badge',
  props: {
    value: {},
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
    shadow: { type: Boolean, default: false }
  },

  computed: {
    forcedSize () {
      return this.size && (!isNaN(this.size) ? `${this.size}px` : this.size)
    },
    presetSize () {
      return (
        (this.xs && 'xs') ||
        (this.sm && 'sm') ||
        (this.lg && 'lg') ||
        (this.xl && 'xl') ||
        null
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

  &__badge {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    border-radius: 4 * $base-font-size;
    height: round(1.1 * $base-font-size);
    min-width: round(1.1 * $base-font-size);
    z-index: 1;
    padding: 0 2px;

    // Sizes.
    &.size--xs {font-size: round(0.7 * $base-font-size);}
    &.size--sm {font-size: round(0.85 * $base-font-size);}
    &.size--md {font-size: round(0.95 * $base-font-size);}
    &.size--lg {font-size: round(1.1 * $base-font-size);}
    &.size--xl {font-size: round(1.25 * $base-font-size);}

    // Position.
    &.top {top: 0;}
    &.bottom {bottom: 0;}
    &.left {right: 100%;}
    &.right {left: 100%;}
    &--overlap {transform: translate(-50%, -50%);}

    // Look modifiers.
    &--dark {color: rgba(255, 255, 255, 0.95);}
    &--outline {
      background-color: transparent;
      border-color: currentColor;
    }
    &--shadow {box-shadow: $box-shadow;}
  }
}
</style>
