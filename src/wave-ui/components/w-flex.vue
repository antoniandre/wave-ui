<template lang="pug">
  .w-flex(:class="classes")
    slot
</template>

<script>
export default {
  name: 'w-flex',
  props: {
    column: { type: Boolean, default: false },
    grow: { type: Boolean, default: false },
    noGrow: { type: Boolean, default: false },
    shrink: { type: Boolean, default: false },
    noShrink: { type: Boolean, default: false },
    wrap: { type: Boolean, default: false },
    alignCenter: { type: Boolean, default: false },
    justifyCenter: { type: Boolean, default: false },
    justifyEnd: { type: Boolean, default: false },
    justifySpaceBetween: { type: Boolean, default: false }
  },

  computed: {
    classes () {
      return {
        column: this.column,
        grow: this.grow,
        'no-grow': this.noGrow,
        shrink: this.shrink,
        'no-shrink': this.noShrink,
        wrap: this.wrap,
        'align-center': this.alignCenter,
        'justify-center': this.justifyCenter,
        'justify-end': this.justifyEnd,
        'justify-space-between': this.justifySpaceBetween
      }
    }
  }
}
</script>

<style lang="scss">
.w-flex {
  display: flex;
  flex: 1 1 auto;

  &.column {flex-direction: column;}
  &.wrap {flex-wrap: wrap;}
}
</style>
