<template lang="pug">
.w-rating(:class="classes")
  input(type="hidden" :value="rating")
  w-button.w-rating__button(
    v-for="i in max"
    :key="i"
    :icon="icon"
    :[size]="true"
    :class="{ 'w-rating__button--on': hover >= i || (hover === 0 && rating >= i) }"
    @mouseenter="hover = i"
    @mouseleave="hover = 0"
    @click="onButtonClick(i)"
    :color="hover >= i || (hover === 0 && rating >= i) ? color : bgColor"
    text)
  slot
</template>

<script>
export default {
  name: 'w-rating',
  props: {
    value: {},
    max: { type: Number, default: 5 },
    color: { type: String },
    bgColor: { type: String, default: 'grey-light4' },
    icon: { type: String, default: 'wi-star' },
    xs: { type: Boolean },
    sm: { type: Boolean },
    md: { type: Boolean },
    lg: { type: Boolean },
    xl: { type: Boolean },
    disabled: { type: Boolean }
  },

  emits: ['input'],

  data () {
    return {
      rating: parseInt(this.value),
      hover: 0
    }
  },

  computed: {
    size () {
      return (
        (this.xs && 'xs') ||
        (this.sm && 'sm') ||
        (this.lg && 'lg') ||
        (this.xl && 'xl') ||
        'md'
      )
    },
    classes () {
      return {
      }
    }
  },

  methods: {
    onButtonClick (i) {
      this.rating = i
      this.$emit('input', this.rating)
    }
  }
}
</script>

<style lang="scss">
.w-rating {
  display: inline-flex;
  align-items: center;

  &__button {
    margin-left: -$base-increment;

    &:hover {transform: scale(1.1);}

    // Sizes.
    &.size--xs {margin-left: round(-0.5 * $base-increment);}
    &.size--lg {margin-left: round(-0.5 * $base-increment);}
    &.size--xl {margin-left: 0;}
    &.size--xs .w-icon {font-size: round(1.1 * $base-font-size / 2) * 2;}
    &.size--sm .w-icon {font-size: round(1.4 * $base-font-size / 2) * 2;}
    &.size--md .w-icon {font-size: round(1.6 * $base-font-size / 2) * 2;}
    &.size--lg .w-icon {font-size: round(1.8 * $base-font-size / 2) * 2;}
    &.size--xl .w-icon {font-size: round(2.5 * $base-font-size / 2) * 2;}

  }
}
</style>
