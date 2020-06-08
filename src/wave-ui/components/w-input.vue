<template lang="pug">
  .w-input(:class="classes" :style="styles")
    template(v-if="labelPosition === 'left'")
      label.w-input__label.w-input__label--left(v-if="$slots.default" :for="`input--${_uid}`")
        slot
      label.w-input__label.w-input__label--left(v-else-if="label" :for="`input--${_uid}`" v-html="label")
    .w-input__input-wrap(:class="{ [this.color]: this.color, [`${this.bgColor}--bg`]: this.bgColor }")
      input.w-input__input(
        :id="`input--${_uid}`"
        :type="type"
        :name="name || null"
        :placeholder="placeholder || null"
        v-model="inputValue"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        :disabled="disabled"
        :required="required")
    template(v-if="!inputValue && !placeholder && labelPosition === 'inside'")
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
    placeholder: { type: String, default: '' },
    color: { type: String, default: 'primary' },
    bgColor: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
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
      isFocused: false
    }
  },

  computed: {
    classes () {
      return {
        'w-input--focused': this.isFocused,
        'w-input--dark': this.dark,
        'w-input--outline': this.outline,
        'w-input--round': this.round,
        'w-input--tile': this.tile,
        'w-input--box': this.outline || this.bgColor || this.shadow,
        // If there is a bgColor, a padding is needed.
        'w-input--underline': !this.outline,
        'w-input--shadow': this.shadow,
        'w-input--no-padding': !this.outline && !this.bgColor && !this.shadow && !this.round,
      }
    },
    styles () {
      return false
    }
  },

  methods: {
    onInput () {
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

.w-input {
  position: relative;
  display: flex;
  align-items: center;
  outline: none;
  height: $size;
  font-size: $base-font-size;

  // Input field wrapper.
  // ------------------------------------------------------
  &__input-wrap {
    display: inline-flex;
    flex-grow: 1;
    height: 100%;
    font-size: 0.9em;
    border-radius: $border-radius;
    border: $border;
    font-size: 0.9em;
    transition: $transition-duration;
  }

  &--underline &__input-wrap {
    border-bottom-left-radius: initial;
    border-bottom-right-radius: initial;
    border-width: 0 0 1px;
  }

  &--box &__input-wrap {
    padding-left: 2 * $base-increment;
    padding-right: 2 * $base-increment;
  }

  // &--no-padding &__input-wrap {
  //   padding-left: 0;
  //   padding-right: 0;
  // }

  &--round &__input-wrap {
    border-radius: 4em;
    padding-left: round(3 * $base-increment);
    padding-right: round(3 * $base-increment);
  }
  &--tile &__input-wrap {border-radius: initial;}
  &--shadow &__input-wrap {box-shadow: $box-shadow;}

  &--focused &__input-wrap {border-color: currentColor;}

  // Underline.
  &--underline &__input-wrap:after {
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

  &--underline.w-input--focused &__input-wrap:after {
    width: 100%;
  }
  &--round.w-input--underline &__input-wrap:after {
    border-radius: 4em;
    transition: $transition-duration, height 0.035s;
  }
  &--round.w-input--underline.w-input--focused &__input-wrap:after {
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

  // Label.
  // ------------------------------------------------------
  &__label {
    font-size: 0.9em;
    transition: color $transition-duration;

    &--inside {
      position: absolute;
      top: 50%;
      left: 0;
      padding-left: 2 * $base-increment;
      transform: translateY(-50%);
      pointer-events: none;
    }

    &--left {margin-right: 2 * $base-increment;}
    &--right {margin-left: 2 * $base-increment;}
  }

  &--no-padding &__label--inside {padding-left: 0;padding-right: 0;}
  &--round &__label--inside {
    padding-left: round(3 * $base-increment);
    padding-right: round(3 * $base-increment);
  }

  &--focused &__label--inside {color: currentColor;}
}
</style>
