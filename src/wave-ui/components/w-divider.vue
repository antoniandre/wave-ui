<template lang="pug">
.w-divider(:class="classes")
  slot
</template>

<script>
export default {
  name: 'w-divider',

  props: {
    vertical: { type: Boolean },
    color: { type: String }
  },

  emits: [],

  computed: {
    classes () {
      return {
        [`w-divider--has-color ${this.color}`]: this.color,
        'w-divider--vertical': this.vertical,
        'w-divider--has-content': this.$slots.default
      }
    }
  }
}
</script>

<style lang="scss">
.w-divider {
  border: 0 solid rgba(0, 0, 0, 0.15);
  border-top-width: 1px;

  &--has-color {border-color: currentColor;}

  &--vertical {
    display: flex;
    border-top-width: 0;
    border-left-width: 1px;
    align-self: stretch;
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
