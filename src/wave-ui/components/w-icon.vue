<template lang="pug">
component.w-icon(
  :is="tag || 'i'"
  :class="classes"
  v-on="$listeners"
  role="icon"
  aria-hidden="true"
  :style="styles")
  template(v-if="ligature") {{ ligature.icon }}
</template>

<script>
import config from '../utils/config'

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
    icon: ''
  }),

  computed: {
    ligature () {
      if (!config.iconsLigature) return false

      const [fontName, icon] = this.icon.split(' ')
      return fontName === config.iconsLigature && { fontName, icon }
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
        [this.icon]: true,
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
        'w-icon--flip-y': this.flipY,
        [this.ligature && this.ligature.fontName]: this.ligature
      }
    },
    styles () {
      return this.forcedSize && `font-size: ${this.forcedSize}`
    }
  },

  created () {
    this.icon = this.$slots.default[0].text.trim() || ''
  },

  beforeUpdate () {
    this.icon = this.$slots.default[0].text.trim()
  }
}
</script>

<style lang="scss">
.w-icon {
  position: relative;
  display: inline-flex;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  user-select: none;
  line-height: 1;
  font-size: 1.2em;
  width: 1em;
  height: 1em;

  &.size--xs {font-size: round(0.85 * $base-font-size);}
  &.size--sm {font-size: round(1.15 * $base-font-size);}
  &.size--md {font-size: round(1.4 * $base-font-size);}
  &.size--lg {font-size: round(1.7 * $base-font-size);}
  &.size--xl {font-size: 2 * $base-font-size;}

  // In w-button and w-alert.
  // .w-button &, .w-alert & {font-size: round(1.4 * $base-font-size);}
  // Always an even number to vertical align well in button.
  .w-button.size--xs & {font-size: round(0.95 * divide($base-font-size, 2)) * 2;}
  .w-alert.size--xs & {font-size: $base-font-size;}
  .w-button.size--sm &, .w-alert.size--sm & {font-size: round(1.15 * $base-font-size);}
  // .w-button.size--md &, .w-alert.size--md & {font-size: round(1.4 * $base-font-size);}
  .w-button.size--lg &, .w-alert.size--lg & {font-size: round(1.7 * $base-font-size);}
  .w-button.size--xl &, .w-alert.size--xl & {font-size: 2 * $base-font-size;}

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
