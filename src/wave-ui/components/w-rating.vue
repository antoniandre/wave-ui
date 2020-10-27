<template lang="pug">
component(
  :is="formRegister ? 'w-form-element' : 'div'"
  v-bind="formRegister && { validators, inputValue: rating, disabled, readonly }"
  :valid.sync="valid"
  @reset="rangeValuePercent = 0;updateRangeValueScaled()"
  :class="classes")
  input(
    :id="inputName"
    :name="inputName"
    type="hidden"
    :value="rating")
  w-button.w-rating__button(
    v-for="i in max"
    :key="i"
    :icon="icon"
    :[size]="true"
    :class="{ 'w-rating__button--on': hover >= i || (hover === 0 && rating >= i) }"
    @mouseenter="hover = i"
    @mouseleave="hover = 0"
    @click="onButtonClick(i)"
    @focus="onFocus"
    @keydown="onKeydown"
    :color="hover >= i || (hover === 0 && rating >= i) ? color : bgColor"
    text
    :tabindex="i === 1 ? 0 : -1")
    slot(name="item" :index="i + 1")
</template>

<script>
import FormElementMixin from '../mixins/form-elements'

export default {
  name: 'w-rating',
  mixins: [FormElementMixin],

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
    xl: { type: Boolean }
    // Also name, disabled, readonly, required and validators in the mixin.
  },

  emits: ['input'],

  data () {
    return {
      rating: parseFloat(this.value || 0),
      hover: 0 // The index (starts at 1) of the currently hovered button.
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
        'w-rating': true
      }
    }
  },

  methods: {
    onButtonClick (i) {
      this.rating = i
      this.$emit('input', this.rating)
    },

    onFocus (e) {
      this.$emit('focus', e)
    },

    onKeydown (e) {
      if ([37, 38, 39, 40].includes(e.keyCode)) {
        if ([39, 40].includes(e.keyCode)) this.rating++
        else this.rating--
        e.preventDefault()
      }
    }
  }
}
</script>

<style lang="scss">
.w-rating {
  display: inline-flex;
  align-items: center;

  &__button {
    margin-left: round(-0.5 * $base-increment);

    &:hover {transform: scale(1.1);}

    // Sizes.
    &.size--xl {margin-left: 0;}
    &.size--xs .w-icon {font-size: round(1.1 * $base-font-size / 2) * 2;}
    &.size--sm .w-icon {font-size: round(1.45 * $base-font-size / 2) * 2;}
    &.size--md .w-icon {font-size: round(1.6 * $base-font-size / 2) * 2;}
    &.size--lg .w-icon {font-size: round(1.8 * $base-font-size / 2) * 2;}
    &.size--xl .w-icon {font-size: round(2.5 * $base-font-size / 2) * 2;}
  }
}
</style>
