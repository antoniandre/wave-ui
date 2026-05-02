<template lang="pug">
span.w-tag(
  @click="$emit('update:modelValue', !modelValue);$emit('input', !modelValue)"
  @pointerdown="onTagPointerDown"
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
import RippleMixin from '../mixins/ripple'

export default {
  name: 'w-tag',

  mixins: [RippleMixin],

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
        'w-ripple': this.rippleActive && this.modelValue !== -1,
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
  },

  methods: {
    onTagPointerDown (e) {
      if (this.modelValue === -1) return
      if (e.target.closest?.('.w-tag__closable')) return
      this.onRipple(e)
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
  border-radius: var(--w-border-radius);
  border: 1px solid color-mix(in srgb, var(--w-contrast-bg-color) 8%, transparent);
  background-color: color-mix(in srgb, var(--w-base-bg-color) 85%, transparent);
  padding-left: calc(var(--w-base-increment) * 2);
  padding-right: calc(var(--w-base-increment) * 2);
  cursor: default;
  user-select: none;

  @include themeable;

  &--dark {color: color-mix(in srgb, var(--w-base-bg-color) 95%, transparent);}
  &--outline {background-color: transparent;border-color: currentColor;}
  &--no-border {border-color: transparent;}
  &--round {border-radius: 99em;}
  &--tile {border-radius: initial;}
  &--shadow {box-shadow: var(--w-box-shadow);}

  &.size--xs {
    --w-tag-font-size: round(nearest, calc(0.7 * var(--w-base-font-size)), 1px);
    font-size: var(--w-tag-font-size);
    line-height: calc(var(--w-tag-font-size) + 2px);
    padding: calc(var(--w-base-increment) * 0.25) var(--w-base-increment);
  }
  &.size--sm {
    --w-tag-font-size: round(nearest, calc(0.82 * var(--w-base-font-size)), 1px);
    font-size: var(--w-tag-font-size);
    line-height: calc(var(--w-tag-font-size) + 2px);
    padding: calc(var(--w-base-increment) * 0.25) var(--w-base-increment);
  }
  &.size--md {
    --w-tag-font-size: round(nearest, calc(0.85 * var(--w-base-font-size)), 1px);
    font-size: var(--w-tag-font-size);
    line-height: calc(var(--w-tag-font-size) + 4px);
    padding-top: calc(var(--w-base-increment) * 0.25);
    padding-bottom: calc(var(--w-base-increment) * 0.25);
  }
  &.size--lg {
    --w-tag-font-size: round(nearest, calc(1.1 * var(--w-base-font-size)), 1px);
    font-size: var(--w-tag-font-size);
    line-height: calc(var(--w-tag-font-size) + 4px);
    padding-top: calc(var(--w-base-increment) * 0.5);
    padding-bottom: calc(var(--w-base-increment) * 0.5);
  }
  &.size--xl {
    --w-tag-font-size: round(nearest, calc(1.3 * var(--w-base-font-size)), 1px);
    font-size: var(--w-tag-font-size);
    line-height: calc(var(--w-tag-font-size) + 4px);
    padding-top: var(--w-base-increment);
    padding-bottom: var(--w-base-increment);
  }

  &--clickable {
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    .w-tag__closable {
      margin-left: 3px;
      margin-right: -3px;
      padding: 1px;
      transition: var(--w-transition-duration);
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
      background-color: transparent;
      // As this overlay is a smaller rectangle, the radius must be smaller to cover perfectly.
      border-radius: calc(var(--w-border-radius) - 1px);
      transition: 0.2s;
    }
    &.w-tag--round:before {border-radius: inherit;}

    // Hover state.
    &:hover:before {background-color: color-mix(in srgb, currentColor 6%, transparent);}
    &--dark:hover:before {background-color: color-mix(in srgb, var(--w-base-bg-color) 12%, transparent);opacity: 1;}
    &--outline:hover:before,
    &--text:hover:before {background-color: color-mix(in srgb, currentColor 12%, transparent);}

    // Focus state.
    &:focus:before {background-color: color-mix(in srgb, currentColor 20%, transparent);}
    &--dark:focus:before {background-color: color-mix(in srgb, var(--w-base-bg-color) 12%, transparent);}
    &--outline:focus:before,
    &--text:focus:before {background-color: color-mix(in srgb, currentColor 12%, transparent);}

    // Active state.
    &:active:before {background-color: color-mix(in srgb, currentColor 20%, transparent);}
    &--dark:active:before {background-color: color-mix(in srgb, var(--w-base-bg-color) 20%, transparent);}
    &--outline:active:before,
    &--text:active:before {background-color: color-mix(in srgb, currentColor 20%, transparent);}
  }
}
</style>
