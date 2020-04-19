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
    xSmall: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
    medium: { type: Boolean, default: false },
    large: { type: Boolean, default: false },
    xLarge: { type: Boolean, default: false },
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
        (this.xSmall && 'x-small') ||
        (this.small && 'small') ||
        (this.large && 'large') ||
        (this.xLarge && 'x-large') ||
        'medium'
      )
    },
    classes () {
      return {
        [this.icon]: true,
        [`${this.color}--text`]: this.color,
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

  .w-btn & {padding: 0;}
  &.size--x-small {
    font-size: $base-font-size;
    line-height: $base-font-size;
    width: $base-font-size;
    height: $base-font-size;
  }
  &.size--small {
    font-size: round(1.2 * $base-font-size);
    line-height: round(1.2 * $base-font-size);
    width: round(1.2 * $base-font-size);
    height: round(1.2 * $base-font-size);
  }
  &.size--medium {
    font-size: round(1.5 * $base-font-size);
    line-height: round(1.5 * $base-font-size);
    width: round(1.5 * $base-font-size);
    height: round(1.5 * $base-font-size);
  }
  &.size--large {
    font-size: round(1.8 * $base-font-size);
    line-height: round(1.8 * $base-font-size);
    width: round(1.8 * $base-font-size);
    height: round(1.8 * $base-font-size);
  }
  &.size--x-large {
    font-size: round(2.1 * $base-font-size);
    line-height: round(2.1 * $base-font-size);
    width: round(2.1 * $base-font-size);
    height: round(2.1 * $base-font-size);
  }

  .w-btn--icon &:before {margin-top: 0.05;}
}
</style>
