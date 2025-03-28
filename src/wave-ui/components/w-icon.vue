<template lang="pug">
component.w-icon(
  :is="tag || 'i'"
  :class="classes"
  role="icon"
  aria-hidden="true"
  :style="readIcon() /* Always reacting to slot change when called from template. */ && styles")
  template(v-if="hasLigature") {{ icon }}
</template>

<script>
export default {
  name: 'w-icon',

  props: {
    tag: { type: String, default: 'i' },
    color: { type: String },
    bgColor: { type: String },
    xs: { type: Boolean },
    sm: { type: Boolean },
    md: { type: Boolean },
    lg: { type: Boolean },
    xl: { type: Boolean },
    spin: { type: Boolean },
    spinA: { type: Boolean },
    rotate135a: { type: Boolean },
    rotate90a: { type: Boolean },
    rotate45a: { type: Boolean },
    rotate45: { type: Boolean },
    rotate90: { type: Boolean },
    rotate135: { type: Boolean },
    rotate180: { type: Boolean },
    flipX: { type: Boolean },
    flipY: { type: Boolean },
    size: { type: [Number, String] }
  },

  emits: [],

  data: () => ({
    icon: '',
    fontName: ''
  }),

  computed: {
    hasLigature () {
      return this.$waveui.config.iconsLigature === this.fontName
    },
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
        null
      )
    },
    classes () {
      return {
        [this.fontName]: true,
        [!this.hasLigature && this.icon]: !this.hasLigature && this.icon,
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        [`size--${this.presetSize}`]: this.presetSize && !this.forcedSize,
        'w-icon--spin': this.spin,
        'w-icon--spin-a': this.spinA,
        'w-icon--rotate45': this.rotate45,
        'w-icon--rotate90': this.rotate90,
        'w-icon--rotate135': this.rotate135,
        'w-icon--rotate180': this.rotate180,
        'w-icon--rotate-45': this.rotate45a,
        'w-icon--rotate-90': this.rotate90a,
        'w-icon--rotate-135': this.rotate135a,
        'w-icon--flip-x': this.flipX,
        'w-icon--flip-y': this.flipY
      }
    },
    styles () {
      return this.forcedSize && `font-size: ${this.forcedSize}`
    }
  },

  methods: {
    readIcon () {
      const { default: slot } = this.$slots
      const [fontName = '', icon = ''] = (typeof slot === 'function' && slot()?.[0]?.children?.trim()?.split(' ')) || []
      this.fontName = fontName
      this.icon = icon

      return true // Always return true for styles to be applied (c.f. template styles).
    }
  }
}
</script>

<style lang="scss">
@use "sass:math";

.w-icon {
  position: relative;
  display: inline-flex;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  user-select: none;
  speak: never;
  line-height: 1;
  font-size: 1.2em;
  width: 1em;
  // The aspect ratio will not work if the content overflows (needs overflow hidden, but we don't want that in the library).
  height: 1em;

  &.size--xs {font-size: math.round(0.85 * $base-font-size);}
  &.size--sm {font-size: math.round(1.15 * $base-font-size);}
  &.size--md {font-size: math.round(1.4 * $base-font-size);}
  &.size--lg {font-size: math.round(1.7 * $base-font-size);}
  &.size--xl {font-size: 2 * $base-font-size;}

  // Always an even number to align well vertically in a button.
  .w-button.size--xs & {font-size: math.round(0.95 * divide($base-font-size, 2)) * 2;}
  .w-alert.size--xs & {font-size: $base-font-size;}
  .w-button.size--sm &, .w-alert.size--sm & {font-size: math.round(1.15 * $base-font-size);}
  // .w-button.size--md &, .w-alert.size--md & {font-size: math.round(1.4 * $base-font-size);}
  .w-button.size--lg &, .w-alert.size--lg & {font-size: math.round(1.7 * $base-font-size);}
  .w-button.size--xl &, .w-alert.size--xl & {font-size: 2 * $base-font-size;}

  &:before {transition: transform $transition-duration;}
  &--spin:before {animation: w-icon--spin 2s infinite linear;}
  &--spin-a:before {animation: w-icon--spin-a 2s infinite linear;}
  &--rotate45:before {transform: rotate(45deg);}
  &--rotate90:before {transform: rotate(90deg);}
  &--rotate135:before {transform: rotate(135deg);}
  &--rotate180:before {transform: rotate(180deg);}
  &--rotate-45:before {transform: rotate(-45deg);}
  &--rotate-90:before {transform: rotate(-90deg);}
  &--rotate-135:before {transform: rotate(-135deg);}
  &--flip-x:before {transform: scaleX(-1);}
  &--flip-y:before {transform: scaleY(-1);}
}

@keyframes w-icon--spin {
  0% {transform: rotate(0deg);}
  to {transform: rotate(359deg);}
}

@keyframes w-icon--spin-a {
  0% {transform: rotate(0deg);}
  to {transform: rotate(-359deg);}
}
</style>
