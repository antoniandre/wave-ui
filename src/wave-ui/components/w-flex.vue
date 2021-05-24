<template lang="pug">
component.w-flex-wrap(v-if="gap" :is="tag")
  .w-flex(:class="classes")
    slot
component.w-flex(v-else :class="classes" :is="tag")
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
    basisZero: { type: Boolean },
    gap: { type: Number, default: 0 }
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
        'basis-zero': this.basisZero,
        [`w-flex--gap${this.gap}`]: this.gap
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

  @for $i from 1 through 12 {
    // Divide by 2 as there are 2 elements having this space.
    $space: round($base-increment * divide($i, 2));
    &--gap#{$i} {margin: -$space;}
    &--gap#{$i} > * {margin: $space;}
  }
}
</style>
