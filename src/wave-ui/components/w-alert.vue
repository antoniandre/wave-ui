<template lang="pug">
.w-alert(v-if="show" :class="classes")
  //- Add a wrapper around the content when needed.
  template(v-if="type || icon || dismiss")
    w-icon.w-alert__icon(v-if="type || icon") {{ type ? typeIcon : icon }}
    .w-alert__content
      slot
    w-button.w-alert__dismiss(
      v-if="dismiss"
      @click="$emit('update:modelValue', show = false);$emit('input', false);$emit('close', false)"
      icon="wi-cross"
      color="inherit"
      sm
      text)
  //- No wrapper case.
  slot(v-else)
</template>

<script>
export default {
  name: 'w-alert',

  props: {
    modelValue: { default: true }, // Show or hide.
    color: { type: String },
    bgColor: { type: String },
    shadow: { type: Boolean },
    tile: { type: Boolean },
    round: { type: Boolean },
    icon: { type: String },
    iconOutside: { type: Boolean },
    plain: { type: Boolean },
    dismiss: { type: Boolean },
    bold: { type: Boolean },
    // Types (with icon).
    success: { type: Boolean },
    info: { type: Boolean },
    warning: { type: Boolean },
    error: { type: Boolean },
    // Sizes.
    xs: { type: Boolean },
    sm: { type: Boolean },
    md: { type: Boolean },
    lg: { type: Boolean },
    xl: { type: Boolean },
    // Borders.
    border: { type: Boolean },
    borderLeft: { type: Boolean },
    borderRight: { type: Boolean },
    borderTop: { type: Boolean },
    borderBottom: { type: Boolean },
    outline: { type: Boolean }
  },

  emits: ['input', 'update:modelValue', 'close'],

  data () {
    return {
      show: this.modelValue
    }
  },

  computed: {
    typeIcon () {
      return (
        (this.type === 'success' && 'wi-check-circle') ||
        (this.type === 'warning' && 'wi-warning-circle') ||
        (this.type === 'error' && 'wi-cross-circle') ||
        (this.type === 'info' && 'wi-info-circle')
      )
    },

    type () {
      return (
        (this.success && 'success') ||
        (this.info && 'info') ||
        (this.warning && 'warning') ||
        (this.error && 'error') ||
        null
      )
    },

    presetSize () {
      return (
        (this.xs && 'xs') ||
        (this.sm && 'sm') ||
        (this.md && 'md') ||
        (this.lg && 'lg') ||
        (this.xl && 'xl') ||
        null
      )
    },

    hasSingleBorder () {
      return this.borderLeft || this.borderRight || this.borderTop || this.borderBottom
    },

    classes () {
      const bgColor = this.bgColor || (this.plain && this.type)
      const color = this.color || (!this.plain && this.type) || (!bgColor && 'primary')

      return {
        [`${bgColor}--bg w-alert--bg`]: bgColor,
        [color]: color,
        [`size--${this.presetSize}`]: this.presetSize,
        [`w-alert--${this.type}`]: this.type,
        'w-alert--has-icon': this.type || this.icon || this.dismiss,
        'w-alert--icon-outside': this.iconOutside,
        'w-alert--plain': this.type && this.plain,
        'w-alert--outline': this.outline,
        'w-alert--tile': this.tile,
        'w-alert--round': this.round,
        'w-alert--one-border': this.hasSingleBorder || this.iconOutside,
        'w-alert--border-left': this.borderLeft || this.iconOutside,
        'w-alert--border-right': this.borderRight,
        'w-alert--border-top': this.borderTop,
        'w-alert--border-bottom': this.borderBottom,
        'w-alert--border': this.border && !this.hasSingleBorder,
        'w-alert--shadow': this.shadow,
        'w-alert--bold': this.bold
      }
    }
  },

  watch: {
    modelValue (value) {
      this.show = value
    }
  }
}
</script>

<style lang="scss">
@use "sass:math";

.w-alert {
  position: relative;
  margin-top: 4 * $base-increment;
  margin-bottom: 4 * $base-increment;
  padding: 2 * $base-increment;
  font-size: $base-font-size;
  border-radius: $border-radius;
  border: 0 solid currentColor;

  @include themeable;

  &--bold {font-weight: 700;}
  &--has-icon {
    display: flex;
    align-items: center;
  }

  &--border, &--outline {border-width: 1px;}
  &--tile {border-radius: 0;}
  &--round {
    border-radius: 99em;
    padding-left: 3 * $base-increment;
    padding-right: 3 * $base-increment;
  }
  &--shadow {box-shadow: $box-shadow;}
  &--one-border, &--plain {border: transparent;}

  // Before for the border, after for the background color.
  // ------------------------------------------------------
  &:before, &:after {
    position: absolute;
    inset: 0;
    background-color: currentColor;
    pointer-events: none;
  }

  // Single side border.
  // ------------------------------------------------------
  &--border-left {padding-left: 3 * $base-increment;}
  &--border-right {padding-right: 3 * $base-increment;}
  &--border-top {padding-top: 3 * $base-increment;}
  &--border-bottom {padding-bottom: 3 * $base-increment;}

  &--one-border:before {content: '';opacity: 0.3;}
  &--border-left:before {
    right: auto;
    width: $base-increment;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
  }
  &--border-right:before {
    left: auto;
    width: $base-increment;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
  }
  &--border-top:before {
    bottom: auto;
    height: $base-increment;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
  &--border-bottom:before {
    top: auto;
    height: $base-increment;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }
  &--one-border.w-alert--icon-outside:before {
    content: '';
    opacity: 0.7;
    width: 3px;
  }

  &:after {opacity: 0.12;content: '';border-radius: inherit;}
  &--outline:after {display: none;}
  &--bg:after {background-color: #fff;opacity: 0.1;}

  // Left icon and dismiss button.
  // ------------------------------------------------------
  &__dismiss.w-button {
    align-self: flex-start;
    margin-left: 2 * $base-increment;
    margin-top: math.round(-0.5 * $base-increment);
    margin-right: math.round(-0.5 * $base-increment);
  }

  & &__icon {
    opacity: 0.9;
    align-self: flex-start;
    margin-right: 2 * $base-increment;
    font-size: 1.3em;
  }
  &--has-icon &__content {flex-grow: 1;}
  @-moz-document url-prefix() {
    &--has-icon &__content {margin-top: 0.18em;}
  }

  &--icon-outside &__icon {
    position: absolute;
    opacity: 1;
    left: 1px;
    z-index: 1;
    transform: translateX(-50%);
    border: 1px solid color-mix(in srgb, var(--w-base-bg-color) 70%, transparent);
    background-color: $base-bg-color;
  }
  &--icon-outside &__icon:before {transform: scale(1.05);}

  &--icon-outside &__content {padding-left: 3 * $base-increment;}

  // Sizes.
  // ------------------------------------------------------
  &.size--xs {padding-top: $base-increment;padding-bottom: $base-increment;}
  &.size--sm {padding-top: $base-increment;padding-bottom: $base-increment;}
  &.size--md {padding-top: math.round(2 * $base-increment);padding-bottom: math.round(2 * $base-increment);}
  &.size--lg {padding-top: math.round(3 * $base-increment);padding-bottom: math.round(2.5 * $base-increment);}
  &.size--xl {padding-top: math.round(3 * $base-increment);padding-bottom: math.round(3 * $base-increment);}
}
</style>
