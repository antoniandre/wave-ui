<template lang="pug">
.w-divider(
  :class="classes"
  :role="$slots.default ? null : 'presentation'"
  :aria-orientation="vertical ? 'vertical' : 'horizontal'")
  slot
</template>

<script>
export default {
  name: 'w-divider',

  props: {
    vertical: { type: Boolean },
    color: { type: String },
    dark: { type: Boolean },
    light: { type: Boolean }
  },

  emits: [],

  computed: {
    classes () {
      return {
        [`w-divider--has-color ${this.color}`]: this.color,
        [`w-divider--${this.vertical ? 'vertical' : 'horizontal'}`]: true,
        'w-divider--has-content': this.$slots.default,
        'w-divider--dark': this.dark,
        'w-divider--light': this.light
      }
    }
  }
}
</script>

<style lang="scss">
.w-divider {
  border: 0 solid $divider-color;
  border-top-width: 1px;

  @include themeable;

  &--has-color {border-color: currentColor;}

  &--vertical {
    align-self: stretch; // Fill up the available height.
    display: flex;
    border-top-width: 0;
    border-left-width: 1px;
  }

  .w-toolbar--vertical > &--horizontal {
    align-self: stretch; // Fill up the available width.
  }

  // With a slot.
  &--has-content {
    border-width: 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    // Horizontal.
    &:before, &:after {
      content: '';
      border: inherit;
      border-top-width: 1px;
      display: flex;
      flex: 1 1 auto;
    }
    &:before {margin-right: 2 * $base-increment;}
    &:after {margin-left: 2 * $base-increment;}

    // Vertical.
    &.w-divider--vertical {
      flex-direction: column;
      &:before, &:after {border-top-width: 0;border-left-width: 1px;}
      &:before {margin-right: 0;margin-bottom: 2 * $base-increment;}
      &:after {margin-left: 0;margin-top: 2 * $base-increment;}
    }
  }
}
</style>
