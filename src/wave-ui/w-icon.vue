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
  props: {
    color: { type: String, default: '' },
    xSmall: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
    medium: { type: Boolean, default: false },
    large: { type: Boolean, default: false },
    xLarge: { type: Boolean, default: false },
    size: { type: [String, Number], default: null },
  },

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
    },
    icon () {
      return this.$slots.default[0].text || ''
    }
  }
}
</script>

<style lang="scss">
.w-icon {
  display: inline-block;
  position: relative;
  border-radius: 100%;
  vertical-align: middle;
  user-select: none;
  padding: 0.2rem;
  line-height: inherit;

  .w-btn & {padding: 0;}
  &.size--x-small {font-size: 1rem;}
  &.size--small {font-size: 1.2rem;}
  &.size--medium {font-size: 1.5rem;}
  &.size--large {font-size: 1.8rem;}
  &.size--x-large {font-size: 2.1rem;}
}
</style>
