<template lang="pug">
component(
  ref="formEl"
  :is="formRegister ? 'w-form-element' : 'div'"
  v-bind="formRegister && { validators, inputValue: rating, disabled: isDisabled, readonly: isReadonly }"
  :valid.sync="valid"
  @reset="$emit('update:modelValue', rating = null);$emit('input', null)"
  :class="classes")
  input(:id="inputName" :name="inputName" type="hidden" :value="rating")
  template(v-for="i in max" :key="i")
    slot(v-if="$slots.item" name="item" :index="i + 1")
    button.w-rating__button(
      :disabled="isDisabled || isReadonly"
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
    modelValue: {},
    max: { type: [Number, String], default: 5 },
    color: { type: String, default: 'primary' },
    bgColor: { type: String, default: 'grey-light4' },
    icon: { type: String, default: 'wi-star' },
    xs: { type: Boolean },
    sm: { type: Boolean },
    md: { type: Boolean },
    lg: { type: Boolean },
    xl: { type: Boolean },
    noRipple: { type: Boolean }
    // Props from mixin: name, disabled, readonly, required, validators.
    // Computed from mixin: inputName, isDisabled & isReadonly.
  },

  emits: ['input', 'update:modelValue', 'focus', 'blur'],

  data () {
    return {
      rating: parseFloat(this.modelValue || 0),
      hover: 0, // The index (starts at 1) of the currently hovered button.
      hasFocus: 0, // The index (starts at 1) of the currently focused button.
      ripple: {
        start: false,
        end: false,
        timeout: null
      }
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
        'w-rating--focus': this.hasFocus,
        'w-rating--hover': this.hover,
        'w-rating--disabled': this.isDisabled,
        'w-rating--readonly': this.isReadonly,
        'w-rating--ripple': this.ripple.start,
        'w-rating--rippled': this.ripple.end
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
      this.$emit('update:modelValue', this.rating)
      this.$emit('input', this.rating)

      if (!this.noRipple) {
        this.ripple.start = true
        this.ripple.timeout = setTimeout(() => {
          this.ripple.start = false
          this.ripple.end = true
          setTimeout(() => (this.ripple.end = false), 100)
        }, 700)
      }
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

        const sibling = this.$el.querySelectorAll('button')[this.rating - 1]
        if (sibling) {
          sibling.focus()
          sibling.click()
        }

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
  },

  watch: {
    value (value) {
      this.rating = parseFloat(value)
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

    // Disabled & readonly.
    .w-rating--disabled & {opacity: 0.6;cursor: not-allowed;}
    .w-rating--readonly & {cursor: auto;}

    // Sizes.
    &.size--xs {font-size: round(0.85 * $base-font-size);}
    &.size--sm {font-size: round(1.15 * $base-font-size);}
    &.size--md {font-size: round(1.4 * $base-font-size);}
    &.size--lg {font-size: round(1.7 * $base-font-size);}
    &.size--xl {font-size: 2 * $base-font-size;margin-left: 0;}

    &:before {font-size: 1.1em;}
    &:before, .w-icon:before {
      width: 100%;
      height: 1em;
      display: inline-flex;
      transition: 0.15s transform;
    }
  }

  &--hover &__button--on:before,
  &--hover &__button--on .w-icon:before,
  &--focus &__button--on:before,
  &--focus &__button--on .w-icon:before {transform: scale(1.12);}

  // Disabled & readonly.
  &--readonly &__button--on:before,
  &--readonly.w-rating--hover &__button--on:before,
  &--readonly &__button--on .w-icon:before,
  &--readonly.w-rating--hover &__button--on .w-icon:before,
  &--disabled &__button--on:before,
  &--disabled.w-rating--hover &__button--on:before,
  &--disabled &__button--on .w-icon:before,
  &--disabled.w-rating--hover &__button--on .w-icon:before {transform: none;}

  // Half star.
  &__button .w-icon {
    position: absolute;
    left: 0;
    width: 100%;
    font-size: 1em;
    justify-content: flex-start;
    overflow: hidden;
    display: inline-flex;
    border-radius: 0;

    &:before {padding-left: 0.05em;padding-right: 0.05em;}
  }
  .w-rating--hover &__button .w-icon {display: none;}

  // The focus outline & ripple on button click.
  &__button:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: currentColor;
    border-radius: 100%;
    transform: translateX(100%) scale(0);
    opacity: 0;
    pointer-events: none;
    transition: 0.25s ease-in-out;
  }

  &--ripple &__button:focus:after {
    background-color: transparent;
    animation: w-rating-ripple 0.55s ease;
  }

  &__button:focus:after {
    transform: scale(1.8);
    opacity: 0.2;
  }
  &__button--on:focus:after {
    transform: scale(1.8);
  }

  // After ripple reset to default state, then remove the class via js and the
  // `:focus + &__button:after` will re-transition to normal focused outline.
  &--rippled &__button:focus:after {
    transition: none;
    transform: scale(0);
    opacity: 0;
  }

  &__button * {pointer-events: none;}
}

@keyframes w-rating-ripple {
  0% {opacity: 0.8;transform: scale(1);background-color: currentColor;} // Start with visible ripple.
  100% {opacity: 0;transform: scale(2.8);} // Propagate ripple to max radius and fade out.
}
</style>
