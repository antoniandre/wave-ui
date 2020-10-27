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
  template(v-for="i in max")
    slot(v-if="$scopedSlots.item" name="item" :index="i + 1")
    w-icon.w-rating__button(
      v-else
      tag="button"
      type="button"
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
      :tabindex="i === 1 ? 0 : -1") {{ icon }}
</template>

<script>
import FormElementMixin from '../mixins/form-elements'

export default {
  name: 'w-rating',
  mixins: [FormElementMixin],

  props: {
    value: {},
    max: { type: Number, default: 5 },
    color: { type: String, default: 'primary' },
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
        if ([39, 40].includes(e.keyCode)) this.rating <= this.max - 1 && this.rating++
        else if (this.rating > 1) this.rating--
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
    padding: 0.58em;
    border: none;
    background: none;
    @include default-transition($fast-transition-duration);

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: currentColor;
      opacity: 0;
      border-radius: 50%;
      transition: inherit;
    }

    &:hover {transform: scale(1.1);}
    &:focus:after {opacity: 0.15;}
    &:active:after {opacity: 0.25;}

    // Sizes.
    &.size--xl {margin-left: 0;}
  }
}
</style>
