<template lang="pug">
  .w-input(:class="classes" :style="styles")
    input(v-if="type === 'hidden'" type="hidden" :name="name || null" v-model="inputValue")
    template(v-else)
      //- Left label.
      template(v-if="labelPosition === 'left'")
        label.w-input__label.w-input__label--left(v-if="$slots.default" :for="`input--${_uid}`")
          slot
        label.w-input__label.w-input__label--left(v-else-if="label" :for="`input--${_uid}`" v-html="label")

      //- Input wrapper.
      .w-input__input-wrap(:class="inputWrapClasses")
        w-icon.w-input__icon.w-input__icon--inner-left(
          v-if="innerIconLeft"
          tag="label"
          :for="`input--${_uid}`"
          @click="$emit('click:inner-icon-left')") {{ innerIconLeft }}
        input.w-input__input(
          :id="`input--${_uid}`"
          :type="type"
          :name="name || null"
          :placeholder="placeholder || null"
          :step="step || null"
          :min="min || null"
          :max="max || null"
          :minlength="minlength || null"
          :maxlength="maxlength || null"
          v-model="inputValue"
          @input="onInput"
          @focus="onFocus"
          @blur="onBlur"
          @keyup="$emit('keyup', inputValue)"
          @keydown="$emit('keydown', inputValue)"
          @keypress="$emit('keypress', inputValue)"
          :readonly="readonly"
          :disabled="disabled"
          :required="required")
        template(v-if="labelPosition === 'inside' && showLabelInside")
          label.w-input__label.w-input__label--inside(
            v-if="$slots.default" :for="`input--${_uid}`"
            :class="isFocused && { [Validation.message ? 'error' : this.color]: this.color || Validation.message }")
            slot
          label.w-input__label.w-input__label--inside(
            v-else-if="label" :for="`input--${_uid}`"
            v-html="label"
            :class="isFocused && { [Validation.message ? 'error' : this.color]: this.color || Validation.message }")
        w-icon.w-input__icon.w-input__icon--inner-right(
          v-if="innerIconRight"
          tag="label"
          :for="`input--${_uid}`"
          @click="$emit('click:inner-icon-right')") {{ innerIconRight }}

      //- Right label.
      template(v-if="labelPosition === 'right'")
        label.w-input__label.w-input__label--right(v-if="$slots.default" :for="`input--${_uid}`")
          slot
        label.w-input__label.w-input__label--right(v-else-if="label" :for="`input--${_uid}`" v-html="label")

      //- Error message.
      w-transition-expand(v-if="Validation.message" y)
        .w-input__error.error(v-if="$slots['error-message']")
          slot(name="error-message" :message="Validation.message")
        .w-input__error.error(v-else v-html="Validation.message")
</template>

<script>
export default {
  name: 'w-input',
  inject: {
    formRegister: { default: null },
    formUnregister: { default: null }
  },
  props: {
    value: { default: '' },
    type: { type: String, default: 'text' },
    name: { type: String },
    label: { type: String },
    labelPosition: { type: String, default: 'inside' },
    innerIconLeft: { type: String },
    innerIconRight: { type: String },
    // When label is inside, allows to move the label above on focus or when filled.
    moveLabel: { type: Boolean, default: true },
    placeholder: { type: String },
    color: { type: String, default: 'primary' },
    bgColor: { type: String },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    minlength: { type: [String, Number] },
    maxlength: { type: [String, Number] },
    step: { type: [String, Number] },
    min: { type: [String, Number] },
    max: { type: [String, Number] },
    dark: { type: Boolean },
    outline: { type: Boolean },
    round: { type: Boolean },
    shadow: { type: Boolean },
    tile: { type: Boolean },
    validation: { type: Function }
  },

  data () {
    return {
      inputValue: this.value,
      // In case of incorrect input type="number", the inputValue gets emptied,
      // and the label would come back on top of the input text.
      inputNumberError: false,
      isFocused: false,
      Validation: {
        message: '' // Updated on w-form validation.
      }
    }
  },

  computed: {
    hasValue () {
      return this.inputValue || (this.type === 'number' && this.inputNumberError)
    },
    hasLabel () {
      return this.label || this.$slots.default
    },
    showLabelInside () {
      return this.moveLabel || (!this.hasValue && !this.placeholder)
    },
    classes () {
      return {
        'w-input--disabled': this.disabled,
        'w-input--filled': this.hasValue,
        'w-input--focused': this.isFocused,
        'w-input--dark': this.dark,
        'w-input--floatting-label': this.hasLabel && this.labelPosition === 'inside' && this.moveLabel && !(this.readonly && !this.hasValue),
        'w-input--no-padding': !this.outline && !this.bgColor && !this.shadow && !this.round,
        'w-input--has-placeholder': this.placeholder,
        'w-input--has-error error': this.Validation.message,
        'w-input--inner-icon-left': this.innerIconLeft,
        'w-input--inner-icon-right': this.innerIconRight
      }
    },
    inputWrapClasses () {
      return {
        [this.Validation.message ? 'error' : this.color]: this.color || this.Validation.message,
        [`${this.bgColor}--bg`]: this.bgColor,
        'w-input__input-wrap--round': this.round,
        'w-input__input-wrap--tile': this.tile,
        // Box adds a padding on input. If there is a bgColor or shadow, a padding is needed.
        'w-input__input-wrap--box': this.outline || this.bgColor || this.shadow,
        'w-input__input-wrap--underline': !this.outline,
        'w-input__input-wrap--shadow': this.shadow,
        'w-input__input-wrap--no-padding': !this.outline && !this.bgColor && !this.shadow && !this.round,
      }
    },
    styles () {
      return false
    }
  },

  methods: {
    onInput (e) {
      this.inputNumberError = e.target.validity.badInput // For input type number.
      // inputText = e.target.value
      this.$emit('input', this.inputValue)
    },
    onFocus () {
      this.$emit('focus', this.inputValue)
      this.isFocused = true
    },
    onBlur () {
      this.$emit('blur', this.inputValue)
      this.isFocused = false
    }
  },

  created () {
    if (this.formRegister) this.formRegister(this)
  },

  beforeDestroy () {
    if (this.formUnregister) this.formUnregister(this)
  },

  watch: {
    value (value) {
      this.inputValue = value
    }
  }
}
</script>

<style lang="scss">
$size: round(2 * $base-font-size);
$inactive-color: #777;

.w-input {
  position: relative;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  align-items: center;
  font-size: $base-font-size;

  // Input field wrapper.
  // ------------------------------------------------------
  &__input-wrap {
    position: relative;
    display: inline-flex;
    flex: 1 1 auto;
    align-items: center;
    height: $size;
    border-radius: $border-radius;
    border: $border;
    transition: border $transition-duration;
  }

  &--floatting-label &__input-wrap {
    margin-top: 3 * $base-increment;
  }

  &__input-wrap--underline {
    border-bottom-left-radius: initial;
    border-bottom-right-radius: initial;
    border-width: 0 0 1px;
  }

  // &__input-wrap--box {}

  &__input-wrap--round {border-radius: 5em;}
  &__input-wrap--tile {border-radius: initial;}
  &__input-wrap--shadow {box-shadow: $box-shadow;}

  &--focused &__input-wrap {border-color: currentColor;}

  // Underline.
  &__input-wrap--underline:after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 50%;
    width: 0;
    height: 0;
    border-bottom: 2px solid currentColor;
    transition: $transition-duration;
    transform: translateX(-50%);
    pointer-events: none;
  }

  &--focused &__input-wrap--underline:after {width: 100%;}
  &__input-wrap--round.w-input__input-wrap--underline:after {
    border-radius: 5em;
    transition: $transition-duration, height 0.035s;
  }
  &--focused &__input-wrap--round.w-input__input-wrap--underline:after {
    height: 100%;
    transition: $transition-duration, height 0s ($transition-duration - 0.035s);
  }

  // Input field.
  // ------------------------------------------------------
  &__input {
    width: 100%;
    // flex-grow: 1;
    height: 100%;
    font-size: inherit;
    color: inherit;
    background: none;
    border: none;
    outline: none;
    padding-left: 2 * $base-increment;
    padding-right: 2 * $base-increment;
  }

  &--no-padding &__input {
    padding-left: 0;
    padding-right: 0;
  }

  &__input-wrap--round &__input {
    padding-left: 3 * $base-increment;
    padding-right: 3 * $base-increment;
  }

  &--inner-icon-left &__input {padding-left: 27px;}
  &--inner-icon-right &__input {padding-right: 27px;}

  &--disabled &__input {
    color: $disabled-color;
    cursor: not-allowed;
  }

  &--disabled input::placeholder,
  &--has-error input::placeholder {color: inherit;}

  // Icons inside.
  // ------------------------------------------------------
  &__icon {position: absolute;}
  &__icon--inner-left {left: 6px;}
  &__icon--inner-right {right: 6px;}
  &--no-padding &__icon--inner-left {left: 1px;}
  &--no-padding &__icon--inner-right {right: 1px;}

  .w-input--focused &__icon {color: currentColor;}

  &--disabled &__icon {
    color: $disabled-color;
    cursor: not-allowed;
  }

  // Label.
  // ------------------------------------------------------
  &__label {
    transition: color $transition-duration;
    cursor: pointer;

    &--left {margin-right: 2 * $base-increment;}
    &--right {margin-left: 2 * $base-increment;}
    .w-input--disabled & {color: $disabled-color;cursor: not-allowed;}
  }

  &__label--inside {
    position: absolute;
    top: 50%;
    left: 0;
    padding-left: 2 * $base-increment;
    transform: translateY(-50%);
    pointer-events: none;
    .w-input--inner-icon-left & {left: 18px;}

    .w-input--no-padding & {
      left: 0;
      padding-left: 0;
      padding-right: 0;
    }
    .w-input__input-wrap--round & {
      padding-left: round(3 * $base-increment);
      padding-right: round(3 * $base-increment);
    }

    .w-input--floatting-label & {
      transform-origin: 0 0;
      transition: $transition-duration ease;
    }

    // move label with underline style.
    .w-input--focused.w-input--floatting-label &,
    .w-input--filled.w-input--floatting-label &,
    .w-input--has-placeholder.w-input--floatting-label & {
      transform: translateY(-160%) scale(0.85);
    }
    // Move label with outline style or with shadow.
    .w-input--focused.w-input--floatting-label .w-input__input-wrap--box &,
    .w-input--filled.w-input--floatting-label .w-input__input-wrap--box &,
    .w-input--has-placeholder.w-input--floatting-label .w-input__input-wrap--box & {
      transform: translateY(-180%) scale(0.85);
    }
    .w-input--focused.w-input--floatting-label.w-input--inner-icon-left &,
    .w-input--filled.w-input--floatting-label.w-input--inner-icon-left & {left: 0px;}

    .w-input--focused & {color: currentColor;}
  }

  .w-input--has-error &__label {animation: w-shake 0.3s $transition-duration ease-in-out;}

  // Error message.
  // ------------------------------------------------------
  &__error {
    width: 100%;
    flex-grow: 1;
    font-size: 0.75em;
    margin-top: $base-increment;
  }
}
</style>
