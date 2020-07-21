<template lang="pug">
  .w-alert(v-if="value" :class="classes")
    template(v-if="type")
      w-icon.mr2 wi-{{ icon }}
      .w_alert__content
        slot
    slot(v-else)
</template>

<script>
export default {
  name: 'w-alert',
  props: {
    value: { default: true }, // Show or hide.
    xs: { type: Boolean },
    sm: { type: Boolean },
    md: { type: Boolean },
    lg: { type: Boolean },
    xl: { type: Boolean },
    type: { type: [String, Boolean] },
    color: { type: String },
    bgColor: { type: String },
    shadow: { type: Boolean },
    tile: { type: Boolean },
    round: { type: Boolean },
    plain: { type: Boolean },
    // Borders.
    noBorder: { type: Boolean },
    borderLeft: { type: Boolean },
    borderRight: { type: Boolean },
    borderTop: { type: Boolean },
    borderBottom: { type: Boolean },
    outline: { type: Boolean }
  },

  computed: {
    icon () {
      return (
        (this.type === 'success' && 'check-circle') ||
        (this.type === 'warning' && 'warning-circle') ||
        (this.type === 'error' && 'cross-circle') ||
        (this.type === 'info' && 'info-circle')
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
      return this.borderLeft || this.borderRight ||
        this.borderTop || this.borderBottom
    },

    classes () {
      return {
        [`${this.bgColor || (this.plain && this.type)}--bg w-alert--bg`]: this.bgColor || (this.plain && this.type),
        [this.color || (!this.plain && this.type)]: this.color || (!this.plain && this.type),
        [`size--${this.presetSize}`]: this.presetSize && !this.forcedSize,
        [`w-alert--type w-alert--${this.type}`]: this.type,
        'w-alert--plain': this.type && this.plain,
        'w-alert--outline': this.outline,
        'w-alert--tile': this.tile,
        'w-alert--round': this.round,
        'w-alert--no-border': this.noBorder || (this.plain && this.type),
        'w-alert--one-border': this.hasSingleBorder,
        'w-alert--border-left': !this.noBorder && this.borderLeft,
        'w-alert--border-right': !this.noBorder && this.borderRight,
        'w-alert--border-top': !this.noBorder && this.borderTop,
        'w-alert--border-bottom': !this.noBorder && this.borderBottom,
        'w-alert--shadow': this.shadow
      }
    }
  }
}
</script>

<style lang="scss">
.w-alert {
  position: relative;
  margin-top: 4 * $base-increment;
  margin-bottom: 4 * $base-increment;
  padding: 2 * $base-increment;
  font-size: round(1.1 * $base-font-size);
  font-weight: 700;
  border-radius: $border-radius;
  border: 1px solid currentColor;

  &--type {
    display: flex;
    align-items: center;
  }

  &--outline {border-color: currentColor;}
  &--tile {border-radius: 0;}
  &--round {
    border-radius: 5em;
    padding-left: 3 * $base-increment;
    padding-right: 3 * $base-increment;
  }
  &--shadow {box-shadow: $box-shadow;}
  &--no-border, &--one-border, &--plain {border: transparent;}

  // Before for the border, after for the background color.
  &:before, &:after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: currentColor;
    pointer-events: none;
  }

  // Single side border.
  &--border-left {padding-left: 3 * $base-increment;}
  &--border-right {padding-right: 3 * $base-increment;}
  &--border-top {padding-top: 3 * $base-increment;}
  &--border-bottom {padding-bottom: 3 * $base-increment;}
  &--one-border:before {content: '';opacity: 0.25;}
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

  &:after {opacity: 0.15;content: '';border-radius: inherit;}
  &--outline:after {display: none;}
  &--bg:after {background-color: #fff;opacity: 0.1;}

  &--type > .w-icon {opacity: 0.9;align-self: flex-start;}

  // Sizes.
  &.size--xs {padding-top: $base-increment;padding-bottom: $base-increment;}
  &.size--sm {padding-top: $base-increment;padding-bottom: $base-increment;}
  &.size--md {padding-top: round(2 * $base-increment);padding-bottom: round(2 * $base-increment);}
  &.size--lg {padding-top: round(3 * $base-increment);padding-bottom: round(2.5 * $base-increment);}
  &.size--xl {padding-top: round(3 * $base-increment);padding-bottom: round(3 * $base-increment);}
}
</style>
