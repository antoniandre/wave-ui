<template lang="pug">
  i.w-icon(
    :class="classes"
    @click="$emit('click', $event)"
    role="icon"
    aria-hidden="true"
    :style="this.forcedSize && `font-size: ${this.forcedSize}`")
</template>

<script>
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
        [`size--${this.presetSize}`]: !this.forcedSize
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
  display: inline-block;
  position: relative;
  border-radius: 100%;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  line-height: inherit;

  .w-button & {padding: 0;}
  &.size--xs {
    font-size: round(0.85 * $base-font-size);
    line-height: round(0.85 * $base-font-size);
    width: round(0.85 * $base-font-size);
    height: round(0.85 * $base-font-size);
  }
  &.size--sm {
    font-size: round(1.15 * $base-font-size);
    line-height: round(1.15 * $base-font-size);
    width: round(1.15 * $base-font-size);
    height: round(1.15 * $base-font-size);
  }
  &.size--md {
    font-size: round(1.4 * $base-font-size);
    line-height: round(1.4 * $base-font-size);
    width: round(1.4 * $base-font-size);
    height: round(1.4 * $base-font-size);
  }
  &.size--lg {
    font-size: round(1.7 * $base-font-size);
    line-height: round(1.7 * $base-font-size);
    width: round(1.7 * $base-font-size);
    height: round(1.7 * $base-font-size);
  }
  &.size--xl {
    font-size: round(2 * $base-font-size);
    line-height: round(2 * $base-font-size);
    width: round(2 * $base-font-size);
    height: round(2 * $base-font-size);
  }
}
</style>
