<template lang="pug">
  i.w-icon(
    :class="classes"
    @click="$emit('click', $event)"
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
    color: { type: String, default: '' },
    xs: { type: Boolean, default: false },
    sm: { type: Boolean, default: false },
    md: { type: Boolean, default: false },
    lg: { type: Boolean, default: false },
    xl: { type: Boolean, default: false },
    spin: { type: Boolean, default: false },
    size: { type: [String, Number], default: null },
  },

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
        (this.lg && 'lg') ||
        (this.xl && 'xl') ||
        null
      )
    },
    classes () {
      return {
        [this.icon]: true,
        [this.color]: this.color,
        [`size--${this.presetSize}`]: this.presetSize && !this.forcedSize,
        'w-icon--spin': this.spin,
        [this.ligature && this.ligature.fontName]: this.ligature
      }
    },
    styles () {
      return this.forcedSize && `font-size: ${this.forcedSize}`
    }
  },

  created () {
    this.icon = this.$slots.default[0].text || ''
  },
  beforeUpdate () {
    this.icon = this.$slots.default[0].text
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
  .w-button &, .w-alert & {font-size: round(1.4 * $base-font-size);}
  .w-button.size--xs &, .w-alert.size--xs & {font-size: $base-font-size;}
  .w-button.size--sm &, .w-alert.size--sm & {font-size: round(1.15 * $base-font-size);}
  .w-button.size--md &, .w-alert.size--md & {font-size: round(1.4 * $base-font-size);}
  .w-button.size--lg &, .w-alert.size--lg & {font-size: round(1.7 * $base-font-size);}
  .w-button.size--xl &, .w-alert.size--xl & {font-size: 2 * $base-font-size;}

  &--spin:before {animation: w-icon--spin 2s infinite linear;}
}

@keyframes w-icon--spin {
  0% {transform: rotate(0deg);}
  to {transform: rotate(359deg);}
}
</style>
