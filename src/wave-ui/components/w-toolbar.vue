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
    height: { type: [Number, String], default: null }
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
        'w-toolbar--bottom': !!this.bottom
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
  left: 0;
  right: 0;
  height: 12 * $base-increment;
  display: flex;
  align-items: center;
  padding-left: 4 * $base-increment;
  padding-right: 4 * $base-increment;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  z-index: 10;

  &--absolute {position: absolute;top: 0;}
  &--fixed {position: fixed;top: 0;}
  &--bottom {bottom: 0;top: auto;}
}
</style>
