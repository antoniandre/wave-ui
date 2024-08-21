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
    vertical: { type: Boolean },
    left: { type: Boolean },
    right: { type: Boolean },
    width: { type: [Number, String], default: null },
    height: { type: [Number, String], default: null },
    noBorder: { type: Boolean },
    shadow: { type: Boolean },
    dark: { type: Boolean },
    light: { type: Boolean }
  },

  emits: [],

  computed: {
    // Return the height value if defined, or false otherwise.
    toolbarHeight () {
      const h = this.height
      // If a number is passed without units, append `px`.
      return h && parseInt(h) == h ? h + 'px' : h
    },
    // Return the width value if defined, or false otherwise.
    toolbarWidth () {
      const w = this.width
      // If a number is passed without units, append `px`.
      return w && parseInt(w) == w ? w + 'px' : w
    },
    classes () {
      return {
        [this.color]: !!this.color,
        [`${this.bgColor}--bg`]: !!this.bgColor,
        'w-toolbar--dark': this.dark,
        'w-toolbar--light': this.light,
        'w-toolbar--absolute': !!this.absolute,
        'w-toolbar--fixed': !!this.fixed,
        [`w-toolbar--${this.bottom ? 'bottom' : 'top'}`]: !this.vertical,
        [`w-toolbar--vertical w-toolbar--${this.right ? 'right' : 'left'}`]: this.vertical,
        'w-toolbar--no-border': this.noBorder,
        'w-toolbar--shadow': !!this.shadow
      }
    },
    styles () {
      return {
        height: this.height && !this.vertical ? this.toolbarHeight : null,
        width: this.width && this.vertical ? this.toolbarWidth : null
      }
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
  background-color: $toolbar-bg-color;
  z-index: 10;

  @include themeable;

  &--absolute, &--fixed {top: 0;left: 0;right: 0;}
  &--absolute {position: absolute;}
  &--fixed {position: fixed;}
  &--absolute.w-toolbar--vertical, &--fixed.w-toolbar--vertical {top: 0;bottom: 0;}
  &--absolute.w-toolbar--left, &--fixed.w-toolbar--left {left: 0;right: auto;}
  &--absolute.w-toolbar--right, &--fixed.w-toolbar--right {left: auto;right: 0;}

  // Horizontal.
  &--top {border-bottom: $border;}
  &--bottom {
    bottom: 0;
    top: auto;
    border-top: $border;
  }

  // Vertical.
  &--vertical {
    padding: (2 * $base-increment);
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
  }

  &--left {border-right: $border;}
  &--right {
    right: 0;
    left: auto;
    border-left: $border;
  }

  &--no-border, &--shadow {border-width: 0;}
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
  .w-card__content &--left {
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
  }
  .w-card__content &--right {
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
  }
}
</style>
