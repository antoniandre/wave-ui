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
    font-size: 1rem;
    line-height: 1rem;
    width: 1rem;
    height: 1rem;
  }
  &.size--small {
    font-size: 1.2rem;
    line-height: 1.2rem;
    width: 1.2rem;
    height: 1.2rem;
  }
  &.size--medium {
    font-size: 1.5rem;
    line-height: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
  }
  &.size--large {
    font-size: 1.8rem;
    line-height: 1.8rem;
    width: 1.8rem;
    height: 1.8rem;
  }
  &.size--x-large {
    font-size: 2.1rem;
    line-height: 2.1rem;
    width: 2.1rem;
    height: 2.1rem;
  }
}
</style>
