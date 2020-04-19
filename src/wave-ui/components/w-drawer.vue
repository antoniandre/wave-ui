<template lang="pug">
  w-overlay(:value="value" @input="$emit('input', false)")
    .w-drawer(:class="classes" :style="styles")
      slot
</template>

<script>
export default {
  name: 'w-drawer',
  props: {
    value: { default: true },
    right: { type: Boolean, default: false },
    left: { type: Boolean, default: false },
    top: { type: Boolean, default: false },
    bottom: { type: Boolean, default: false },
    width: { type: [Number, String], default: null },
    height: { type: [Number, String], default: null }
  },

  computed: {
    // Return the width or height value if defined, or false otherwise.
    size () {
      let size = this.width || this.height
      // If a number is passed without units, append `px`.
      if (size && parseInt(size) === size) size = parseInt(size) + 'px'
      return size && (this.left || this.right || this.top || this.bottom)
    },
    // Return `width` or `height`, `width` by default (position right by default).
    sizeProperty () {
      return (
        ((this.left || this.right) && 'width') ||
        ((this.top || this.bottom) && 'height') ||
        'width'
      )
    },
    position () {
      return (
        (this.left && 'left') ||
        (this.right && 'right') ||
        (this.top && 'top') ||
        (this.bottom && 'bottom') ||
        'right'
      )
    },
    classes () {
      return {
        [`w-drawer--open`]: !!this.value,
        [`w-drawer--${this.position}`]: true
      }
    },
    styles () {
      return this.size ? `max-${this.sizeProperty}: ${this.size}` : false
    }
  }
}
</script>

<style lang="scss">
.w-drawer {
  position: fixed;
  z-index: 500;
  transition: 0.25s ease-in-out;
  background: #fff;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);

  &--left, &--right {
    top: 0;
    bottom: 0;
    width: 100%;
    max-width: $drawer-max-size;
    // transform: translateX(0);
  }
  &--top, &--bottom {
    left: 0;
    right: 0;
    height: 100%;
    max-height: $drawer-max-size;
    // transform: translateY(0);
  }

  &--left {right: 100%;}
  &--right {left: 100%;}
  &--top {bottom: 100%;}
  &--bottom {top: 100%;}

  &--open {
    &.w-drawer--left {transform: translateX(100%);}
    &.w-drawer--right {transform: translateX(-100%);}
    &.w-drawer--top {transform: translateY(100%);}
    &.w-drawer--bottom {transform: translateY(-100%);}
  }
}
</style>
