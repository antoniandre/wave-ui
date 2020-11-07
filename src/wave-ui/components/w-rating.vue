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
    button.w-rating__button(
      :key="i"
      @mouseenter="hover = i"
      @mouseleave="hover = 0"
      @click="onButtonClick(i)"
      @focus="onFocus"
      @blur="onBlur"
      @keydown="onKeydown"
      :class="buttonClasses(i)"
      type="button"
      :tabindex="i === 1 ? 0 : -1")
      i.w-icon(
        v-if="i - 1 === ~~rating && rating - ~~rating"
        role="icon"
        :class="`${icon} ${color}`"
        aria-hidden="true"
        :style="halfStarStyle")
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
      hover: 0, // The index (starts at 1) of the currently hovered button.
      hasFocus: false
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
        'w-rating': true,
        'w-rating--focus': this.hasFocus
      }
    },

    halfStarStyle () {
      return {
        width: this.hover <= ~~this.rating && `${(this.rating - ~~this.rating) * 100}%`
      }
    }
  },

  methods: {
    onButtonClick (i) {
      this.rating = i
      this.$emit('input', this.rating)
    },

    onFocus (e) {
      this.hasFocus = true
      this.$emit('focus', e)
    },

    onBlur (e) {
      this.hasFocus = false
      this.$emit('blur', e)
    },

    onKeydown (e) {
      if ([37, 38, 39, 40].includes(e.keyCode)) {
        if ([39, 40].includes(e.keyCode)) this.rating <= this.max - 1 && this.rating++
        else if (this.rating > 1) this.rating--
        e.preventDefault()
      }
    },

    buttonClasses (i) {
      const isHalf = i - 1 === ~~this.rating && this.rating - ~~this.rating
      const isOn = this.hover >= i || (!isHalf && this.hover === 0 && this.rating >= i)
      return {
        'w-rating__button--on': isOn,
        'w-rating__button--half': isHalf,
        [this.icon]: true,
        [`size--${this.size}`]: true,
        [isOn ? this.color : this.bgColor]: true
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
    position: relative;
    width: 1.1em;
    height: 1.1em;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    cursor: pointer;
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

    &:focus:after {opacity: 0.15;}
    &:active:after {opacity: 0.25;}

    // Sizes.
    &.size--xs {font-size: round(0.85 * $base-font-size);}
    &.size--sm {font-size: round(1.15 * $base-font-size);}
    &.size--md {font-size: round(1.4 * $base-font-size);}
    &.size--lg {font-size: round(1.7 * $base-font-size);}
    &.size--xl {font-size: 2 * $base-font-size;margin-left: 0;}

    &:before, .w-icon:before {
      width: 1em;
      font-size: 1.1em;
      height: 1em;
      display: inline-flex;
    }
  }

  &:hover &__button--on:before, &:hover &__button--on .w-icon:before {transform: scale(1.1);}
  &--focus &__button--on:before, &--focus &__button--on .w-icon:before {transform: scale(1.1);}

  &__button .w-icon {
    position: absolute;
    left: 0;
    width: 100%;
    font-size: 1em;
    justify-content: flex-start;
    overflow: hidden;
    display: inline-flex;
    border-radius: 0;
  }
  &__button:hover ~ &__button .w-icon {width: 0 !important;}
}
</style>
