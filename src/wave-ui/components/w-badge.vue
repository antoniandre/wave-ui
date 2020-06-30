<template lang="pug">
  .w-badge
    slot(name="activator")
    .w-badge__badge(:class="classes" :style="styles")
      slot
</template>

<script>
export default {
  name: 'w-badge',
  props: {
    xs: { type: Boolean, default: false },
    sm: { type: Boolean, default: false },
    md: { type: Boolean, default: false },
    lg: { type: Boolean, default: false },
    xl: { type: Boolean, default: false },
    top: { type: Boolean, default: false },
    left: { type: Boolean, default: false },
    right: { type: Boolean, default: false },
    bottom: { type: Boolean, default: false },
    overlap: { type: Boolean, default: false },
    color: { type: String, default: '' },
    bgColor: { type: String, default: 'primary' },
    dark: { type: Boolean, default: false },
    outline: { type: Boolean, default: false },
    shadow: { type: Boolean, default: false }
  },

  computed: {
    forcedSize () {
      return this.size && (!isNaN(this.size) ? `${this.size}px` : this.size)
    },

    classes () {
      return {
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        'w-badge__badge--dark': this.dark && !this.outline,
        'w-badge__badge--outline': this.outline,
        'w-badge__badge--shadow': this.shadow,
        'w-badge__badge--overlap': this.overlap
      }
    },
    styles () {
      return this.forcedSize && `font-size: ${this.forcedSize}`
    }
  }
}
</script>

<style lang="scss">
.w-badge {
  position: relative;

  &__badge {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    border-radius: 4 * $base-font-size;

    // Look modifiers.
    &--dark {color: rgba(255, 255, 255, 0.95);}
    &--outline {
      background-color: transparent;
      border-color: currentColor;
    }
    &--shadow {box-shadow: $box-shadow;}
  }
}
</style>
