<template lang="pug">
.w-alert(v-if="show" v-on="$attrs" :class="classes")
  //- Add a wrapper around the content when needed.
  template(v-if="type || icon || dismiss")
    w-icon.mr2(v-if="type || icon") {{ type ? typeIcon : icon }}
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
    noBorder: { type: Boolean },
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
      return this.borderLeft || this.borderRight ||
        this.borderTop || this.borderBottom
    },

    classes () {
      return {
        [`${this.bgColor || (this.plain && this.type)}--bg w-alert--bg`]: this.bgColor || (this.plain && this.type),
        [this.color || (!this.plain && this.type)]: this.color || (!this.plain && this.type),
        [`size--${this.presetSize}`]: this.presetSize,
        [`w-alert--${this.type}`]: this.type,
        'w-alert--has-icon': this.type || this.icon || this.dismiss,
        'w-alert--icon-outside': this.iconOutside,
        'w-alert--plain': this.type && this.plain,
        'w-alert--outline': this.outline,
        'w-alert--tile': this.tile,
        'w-alert--round': this.round,
        'w-alert--no-border': this.noBorder || (this.plain && this.type),
        'w-alert--one-border': this.hasSingleBorder || this.iconOutside,
        'w-alert--border-left': (!this.noBorder && this.borderLeft) || this.iconOutside,
        'w-alert--border-right': !this.noBorder && this.borderRight,
        'w-alert--border-top': !this.noBorder && this.borderTop,
        'w-alert--border-bottom': !this.noBorder && this.borderBottom,
        'w-alert--shadow': this.shadow
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
.w-alert {
  position: relative;
  margin-top: 4 * $base-increment;
  margin-bottom: 4 * $base-increment;
  padding: 2 * $base-increment;
  font-size: round(1.1 * $base-font-size);
  font-weight: 700;
  border-radius: $border-radius;
  border: 1px solid currentColor;

  &--has-icon {
    display: flex;
    align-items: center;
  }

  &--outline {border-color: currentColor;}
  &--tile {border-radius: 0;}
  &--round {
    border-radius: 9em;
    padding-left: 3 * $base-increment;
    padding-right: 3 * $base-increment;
  }
  &--shadow {box-shadow: $box-shadow;}
  &--no-border, &--one-border, &--plain {border: transparent;}

  // Before for the border, after for the background color.
  // ------------------------------------------------------
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
    margin-top: round(-0.5 * $base-increment);
    margin-right: round(-0.5 * $base-increment);
  }

  &--has-icon > .w-icon {
    opacity: 0.9;
    align-self: flex-start;
    margin-right: 2 * $base-increment;
  }
  &--has-icon &__content {flex-grow: 1;align-self: flex-start;}
  @-moz-document url-prefix() {
    &--has-icon &__content {margin-top: 0.18em;}
  }

  &--icon-outside > .w-icon {
    position: absolute;
    opacity: 1;
    // top: 2 * $base-increment - 1px; // Needed for IE 11, but dropping support.
    left: 1px;
    z-index: 1;
    transform: translateX(-50%);
    border: 1px solid rgba(255, 255, 255, 0.7);
    background-color: #fff;
  }
  &--icon-outside > .w-icon:before {transform: scale(1.05);}

  &--icon-outside &__content {padding-left: 3 * $base-increment;}

  // Sizes.
  // ------------------------------------------------------
  &.size--xs {padding-top: $base-increment;padding-bottom: $base-increment;}
  &.size--sm {padding-top: $base-increment;padding-bottom: $base-increment;}
  &.size--md {padding-top: round(2 * $base-increment);padding-bottom: round(2 * $base-increment);}
  &.size--lg {padding-top: round(3 * $base-increment);padding-bottom: round(2.5 * $base-increment);}
  &.size--xl {padding-top: round(3 * $base-increment);padding-bottom: round(3 * $base-increment);}
}
</style>
