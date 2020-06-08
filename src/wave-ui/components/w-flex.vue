<template lang="pug">
  .w-flex-wrap(v-if="gutter")
    .w-flex(:class="classes")
      slot
  .w-flex(v-else :class="classes")
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
    justifySpaceBetween: { type: Boolean, default: false },
    gutter: { type: Number, default: 0 }
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
        'justify-space-between': this.justifySpaceBetween,
        [`gutter-${this.gutter}`]: this.gutter
      }
    }
  }
}
</script>

<style lang="scss">
.w-flex-wrap {
  @for $i from 1 through 12 {
    $space: round($base-increment * $i / 2);
    > .gutter-#{$i} {margin: -$space;}
    > .gutter-#{$i} > * {margin: $space;}
  }
}

.w-flex {
  display: flex;
  flex: 1 1 auto;

  &.column {flex-direction: column;}
  &.wrap {flex-wrap: wrap;}
}
</style>
