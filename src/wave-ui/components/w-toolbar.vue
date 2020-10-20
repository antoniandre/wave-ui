<template lang="pug">
.w-toolbar(:class="classes" :style="styles")
  slot
</template>

<script>
export default {
  name: 'w-toolbar',

  props: {
    color: { type: String },
    bgColor: { type: String },
    absolute: { type: Boolean },
    fixed: { type: Boolean },
    bottom: { type: Boolean },
    height: { type: [Number, String], default: null },
    noBorder: { type: Boolean },
    shadow: { type: Boolean }
  },

  emits: [],

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
        [`${this.bgColor}--bg`]: !!this.bgColor,
        'w-toolbar--absolute': !!this.absolute,
        'w-toolbar--fixed': !!this.fixed,
        [`w-toolbar--${this.bottom ? 'bottom' : 'top'}`]: true,
        'w-toolbar--no-border': this.noBorder,
        'w-toolbar--shadow': !!this.shadow
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
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  padding: (2 * $base-increment) (3 * $base-increment);
  background-color: #fff;
  z-index: 10;

  &--absolute, &--fixed {top: 0;left: 0;right: 0;}
  &--absolute {position: absolute;}
  &--fixed {position: fixed;}
  &--top {border-bottom: $border;}
  &--bottom {
    bottom: 0;
    top: auto;
    border-top: $border;
  }
  &--no-border, &--shadow {
    border-top-width: 0;
    border-bottom-width: 0;
  }
  &--shadow {box-shadow: $box-shadow;}

  .w-app > & {z-index: 200;}

  // In w-card.
  .w-card__title & {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
  .w-card__actions & {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }
}
</style>
