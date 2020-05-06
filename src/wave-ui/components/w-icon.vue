<template lang="pug">
  i.w-icon(
    :class="classes"
    @click="$emit('click', $event)"
    role="icon"
    aria-hidden="true"
    :style="this.forcedSize && `font-size: ${this.forcedSize}`")
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
        'md'
      )
    },
    classes () {
      return {
        [this.icon]: true,
        [this.color]: this.color,
        [`size--${this.presetSize}`]: !this.forcedSize,
        [this.ligature && this.ligature.fontName]: this.ligature
      }
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

  .w-button & {padding: 0;}
  &.size--xs {font-size: round(0.85 * $base-font-size);}
  &.size--sm {font-size: round(1.15 * $base-font-size);}
  &.size--md {font-size: round(1.4 * $base-font-size);}
  &.size--lg {font-size: round(1.7 * $base-font-size);}
  &.size--xl {font-size: round(2 * $base-font-size);}

  // Adjust Ionic icons to be always square.
  &[class^="ion-"]:before,
  &[class*=" ion-"]:before {line-height: 0.85;width: 0.85em;}

  // Adjust Font Awesome icons to be always square.
  &[class^="fa-"]:before,
  &[class*=" fa-"]:before {
    width: 1.015em;
    display: inline-block;
    padding-top: 1px;
  }
}
</style>
