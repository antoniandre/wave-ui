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
  // Always get an even number for better text vertical align (matches former Sass rounding).
  --w-badge-line: calc(2 * round(nearest, calc(1.1 * var(--w-base-font-size) / 2), 1px));
  height: var(--w-badge-line);
  line-height: var(--w-badge-line);
  min-width: var(--w-badge-line);
  z-index: 1;
  padding: 0 var(--w-base-increment);

  @include themeable;

  &--inline {position: static;}

  &--round {
    aspect-ratio: 1;
    min-width: 0; // Safari ratio fix (e.g. losing ratio if height is set and side padding are added).
    padding: 0;
  }

  // Sizes.
  &.size--xs {
    --w-badge-h: calc(2 * round(nearest, calc(var(--w-base-font-size) / 2), 1px));
    font-size: calc(2 * round(nearest, calc(0.67 * var(--w-base-font-size) / 2), 1px));
    height: var(--w-badge-h);
    line-height: var(--w-badge-h);
    min-width: var(--w-badge-h);

    &--round {
      width: var(--w-badge-h);
      padding: 0 round(nearest, calc(var(--w-badge-h) / 2), 1px);
    }
  }
  &.size--sm {
    --w-badge-h: calc(2 * round(nearest, calc(1.1 * var(--w-base-font-size) / 2), 1px));
    font-size: calc(2 * round(nearest, calc(0.75 * var(--w-base-font-size) / 2), 1px));
    height: var(--w-badge-h);
    line-height: var(--w-badge-h);
    min-width: var(--w-badge-h);
  }
  &.size--md {
    --w-badge-h: calc(2 * round(nearest, calc(1.3 * var(--w-base-font-size) / 2), 1px));
    font-size: calc(2 * round(nearest, calc(0.9 * var(--w-base-font-size) / 2), 1px));
    height: var(--w-badge-h);
    line-height: var(--w-badge-h);
    min-width: var(--w-badge-h);
  }
  &.size--lg {
    --w-badge-h: calc(2 * round(nearest, calc(1.5 * var(--w-base-font-size) / 2), 1px));
    font-size: calc(2 * round(nearest, calc(1.05 * var(--w-base-font-size) / 2), 1px));
    height: var(--w-badge-h);
    line-height: var(--w-badge-h);
    min-width: var(--w-badge-h);
  }
  &.size--xl {
    --w-badge-h: calc(2 * round(nearest, calc(1.8 * var(--w-base-font-size) / 2), 1px));
    font-size: calc(2 * round(nearest, calc(1.2 * var(--w-base-font-size) / 2), 1px));
    height: var(--w-badge-h);
    line-height: var(--w-badge-h);
    min-width: var(--w-badge-h);
  }

  // Position.
  &--top {top: 0;}
  &--bottom {bottom: 0;}
  &--left {right: 100%;}
  &--right {left: 100%;}
  &--overlap {
    &.w-badge--top {margin-top: calc(var(--w-base-increment) * -1);}
    &.w-badge--bottom {margin-bottom: calc(var(--w-base-increment) * -1);}
    &.w-badge--left {margin-right: calc(var(--w-base-increment) * -3);}
    &.w-badge--right {margin-left: calc(var(--w-base-increment) * -3);}
    &.w-badge--top.size--xs {margin-top: calc(var(--w-base-increment) * -0.5);}
    &.w-badge--bottom.size--xs {margin-bottom: calc(var(--w-base-increment) * -0.5);}
    &.w-badge--top.size--sm {margin-top: calc(var(--w-base-increment) * -0.75);}
    &.w-badge--bottom.size--sm {margin-bottom: calc(var(--w-base-increment) * -0.75);}
    &.w-badge--top.size--lg {margin-top: calc(var(--w-base-increment) * -1.5);}
    &.w-badge--bottom.size--lg {margin-bottom: calc(var(--w-base-increment) * -1.5);}
    &.w-badge--top.size--xl {margin-top: calc(var(--w-base-increment) * -2);}
    &.w-badge--bottom.size--xl {margin-bottom: calc(var(--w-base-increment) * -2);}
  }

  // Look modifiers.
  &--dark {color: rgba(255, 255, 255, 0.95);}
  &--outline {
    background-color: transparent;
    border-color: currentColor;
  }
  &--shadow {box-shadow: var(--w-box-shadow);}

  &--dot.w-badge {min-width: 0;padding: 0;aspect-ratio: 1;}
  &--dot.size--xs {height: calc(var(--w-base-increment) * 1.35);}
  &--dot.size--sm {height: calc(var(--w-base-increment) * 1.7);}
  &--dot.size--md {height: calc(var(--w-base-increment) * 2.2);}
  &--dot.size--lg {height: calc(var(--w-base-increment) * 2.75);}
  &--dot.size--xl {height: calc(var(--w-base-increment) * 3);}
}
</style>
