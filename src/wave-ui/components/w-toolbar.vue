<template lang="pug">
  .w-toolbar(:class="classes" :style="styles")
    slot
</template>

<script>
export default {
  name: 'w-toolbar',
  props: {
    color: { type: String, default: '' },
    absolute: { type: Boolean, default: false },
    fixed: { type: Boolean, default: false },
    bottom: { type: Boolean, default: false },
    height: { type: [Number, String], default: null },
    border: { type: Boolean, default: true },
    shadow: { type: Boolean, default: false }
  },

  computed: {
    // Return the width or height value if defined, or false otherwise.
    toolbarHeight () {
      const h = this.height
      // If a number is passed without units, append `px`.
      return h && parseInt(h) == h ? h + 'px' : h
    },
    classes () {
      return {
        [this.color]: !!this.color,
        'w-toolbar--absolute': !!this.absolute,
        'w-toolbar--fixed': !!this.fixed,
        'w-toolbar--bottom': !!this.bottom,
        'w-toolbar--no-border': !this.border,
        'w-toolbar--shadow': !!this.shadow,
      }
    },
    styles () {
      return this.height ? `height: ${this.toolbarHeight}` : false
    }
  }
}
</script>

<style lang="scss">
.w-toolbar {
  position: relative;
  height: 12 * $base-increment;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  padding-left: 4 * $base-increment;
  padding-right: 4 * $base-increment;
  background-color: #fff;
  z-index: 10;

  &--absolute, &--fixed {top: 0;left: 0;right: 0;}
  &--absolute {position: absolute;}
  &--fixed {position: fixed;}
  &--bottom {bottom: 0;top: auto;}
  &--bottom:not(&--no-border) {border-top: 1px solid rgba(0, 0, 0, 0.2);}
  &:not(&--no-border):not(&--bottom) {border-bottom: 1px solid rgba(0, 0, 0, 0.2);}
  &--shadow {box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);}

  .w-app > & {z-index: 200;}
}
</style>
