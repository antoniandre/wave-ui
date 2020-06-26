<template lang="pug">
  .w-input(:class="classes" :style="styles")
    template(v-if="labelPosition === 'left'")
      label.w-input__label.w-input__label--left(v-if="$slots.default" :for="`input--${_uid}`")
        slot
      label.w-input__label.w-input__label--left(v-else-if="label" :for="`input--${_uid}`" v-html="label")
    .w-input__input-wrap(:class="inputWrapClasses")
      input.w-input__input(
        :id="`input--${_uid}`"
        :type="type"
        :readonly="readonly"
        :name="name || null"
        :placeholder="placeholder || null"
        v-model="inputValue"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        @keyup="$emit('keyup', inputValue)"
        @keydown="$emit('keydown', inputValue)"
        @keypress="$emit('keypress', inputValue)"
        :disabled="disabled"
        :required="required")
      template(v-if="labelPosition === 'inside' && showLabelInside")
        label.w-input__label.w-input__label--inside(v-if="$slots.default" :for="`input--${_uid}`" :class="isFocused && { [this.color]: this.color }")
          slot
        label.w-input__label.w-input__label--inside(v-else-if="label" :for="`input--${_uid}`" v-html="label" :class="isFocused && { [this.color]: this.color }")
    template(v-if="labelPosition === 'right'")
      label.w-input__label.w-input__label--right(v-if="$slots.default" :for="`input--${_uid}`")
        slot
      label.w-input__label.w-input__label--right(v-else-if="label" :for="`input--${_uid}`" v-html="label")
</template>

<script>
export default {
  name: 'w-input',
  props: {
    value: { default: '' },
    type: { type: String, default: 'text' },
    name: { type: String, default: '' },
    label: { type: String, default: '' },
    labelPosition: { type: String, default: 'inside' },
    // When label is inside, allows to move the label above on focus or when filled.
    moveLabel: { type: Boolean, default: true },
    placeholder: { type: String, default: '' },
    color: { type: String, default: 'primary' },
    bgColor: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    minlength: { type: String, default: '' },
    maxlength: { type: String, default: '' },
    dark: { type: Boolean, default: false },
    outline: { type: Boolean, default: false },
    round: { type: Boolean, default: false },
    shadow: { type: Boolean, default: false },
    tile: { type: Boolean, default: false }
  },

  data () {
    return {
      inputValue: this.value,
      // In case of incorrect input type="number", the inputValue gets emptied,
      // and the label would come back on top of the input text.
      inputNumberError: false,
      isFocused: false
    }
  },

  computed: {
    hasValue () {
      return this.inputValue || (this.type === 'number' && this.inputNumberError)
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
        'w-input--floatting-label': this.labelPosition === 'inside' && this.moveLabel,
        'w-input--no-padding': !this.outline && !this.bgColor && !this.shadow && !this.round,
      }
    },
    inputWrapClasses () {
      return {
        [this.color]: this.color,
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

  watch: {
    value (value) {
      this.inputValue = value
    }
  }
}
</script>

<style lang="scss">
$size: round(2 * $base-font-size);
$inactive-color: #666;
$disabled-color: #ccc;

.w-input {
  position: relative;
  display: flex;
  flex-grow: 1;
  align-items: center;
  outline: none;
  font-size: $base-font-size;

  // Input field wrapper.
  // ------------------------------------------------------
  &__input-wrap {
    position: relative;
    display: inline-flex;
    flex-grow: 1;
    height: $size;
    font-size: 0.9em;
    border-radius: $border-radius;
    border: $border;
    font-size: 0.9em;
    transition: $transition-duration;
  }

  &--floatting-label &__input-wrap {
    margin-top: 3 * $base-increment;
  }

  &__input-wrap--underline {
    border-bottom-left-radius: initial;
    border-bottom-right-radius: initial;
    border-width: 0 0 1px;
  }

  &__input-wrap--box {
    padding-left: 2 * $base-increment;
    padding-right: 2 * $base-increment;
  }

  &__input-wrap--round {
    border-radius: 4em;
    padding-left: round(3 * $base-increment);
    padding-right: round(3 * $base-increment);
  }
  &__input-wrap--tile {border-radius: initial;}
  &__input-wrap--shadow {box-shadow: $box-shadow;}

  &--focused &__input-wrap {border-color: currentColor;}

  // Underline.
  &__input-wrap--underline:after {
    content: '';
    position: absolute;
    bottom: 0;
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
    border-radius: 4em;
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
    height: 100%;
    font-size: inherit;
    color: inherit;
    background: none;
    border: none;
    outline: none;
  }
  &--disabled &__input {color: $disabled-color;}

  // Label.
  // ------------------------------------------------------
  &__label {
    transition: color $transition-duration;

    &--left {margin-right: 2 * $base-increment;font-size: 0.9em;}
    &--right {margin-left: 2 * $base-increment;font-size: 0.9em;}
  }

  &__label--inside {
    position: absolute;
    top: 50%;
    left: 1px;
    padding-left: 2 * $base-increment;
    transform: translateY(-50%);
    pointer-events: none;
    .w-input--disabled & {color: $disabled-color;}

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
    .w-input--focused.w-input--floatting-label &,
    .w-input--filled.w-input--floatting-label & {
      transform: translateY(-160%) scale(0.85);
    }
    .w-input--focused.w-input--floatting-label .w-input__input-wrap--box &,
    .w-input--filled.w-input--floatting-label .w-input__input-wrap--box & {
      transform: translateY(-180%) scale(0.85);
    }

    .w-input--focused & {color: currentColor;}
  }
}
</style>
