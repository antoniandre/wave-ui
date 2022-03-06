<template lang="pug">
component.w-flex(:class="classes" :is="tag")
  slot
</template>

<script>
export default {
  name: 'w-flex',
  props: {
    tag: { type: String, default: 'div' },
    column: { type: Boolean },
    grow: { type: Boolean },
    noGrow: { type: Boolean },
    shrink: { type: Boolean },
    noShrink: { type: Boolean },
    fillHeight: { type: Boolean },
    wrap: { type: Boolean },
    alignStart: { type: Boolean },
    alignCenter: { type: Boolean },
    alignEnd: { type: Boolean },
    justifyStart: { type: Boolean },
    justifyCenter: { type: Boolean },
    justifyEnd: { type: Boolean },
    justifySpaceBetween: { type: Boolean },
    justifySpaceAround: { type: Boolean },
    justifySpaceEvenly: { type: Boolean },
    basisZero: { type: Boolean },
    gap: { type: [Number, String], default: 0 }
  },

  computed: {
    classes () {
      return {
        column: this.column,
        grow: this.grow,
        'no-grow': this.noGrow,
        shrink: this.shrink,
        'no-shrink': this.noShrink,
        'fill-height': this.fillHeight,
        wrap: this.wrap,
        'align-start': this.alignStart,
        'align-center': this.alignCenter,
        'align-end': this.alignEnd,
        'justify-start': this.justifyStart,
        'justify-center': this.justifyCenter,
        'justify-end': this.justifyEnd,
        'justify-space-between': this.justifySpaceBetween,
        'justify-space-around': this.justifySpaceAround,
        'justify-space-evenly': this.justifySpaceEvenly,
        'basis-zero': this.basisZero,
        [`gap${this.gap}`]: ~~this.gap
      }
    }
  }
}
</script>

<style lang="scss">
.w-flex {
  display: flex;
  flex: 1 1 auto;

  &.row {flex-direction: row;}
  &.column {flex-direction: column;}
  &.wrap {flex-wrap: wrap;}
  &.basis-zero > * {flex-basis: 0;flex-grow: 1;}
  &.basis-zero > .no-grow, &.basis-zero > .shrink {flex-grow: 0;}
}
</style>
