<template lang="pug">
component(
  ref="formEl"
  :is="formRegister ? 'w-form-element' : 'div'"
  v-bind="formRegister && { validators, inputValue, disabled: isDisabled, readonly: isReadonly, isFocused }"
  :valid.sync="valid"
  @reset="$emit('update:modelValue', inputValue = '');$emit('input', '')"
  :class="classes")
  //- Left label.
  template(v-if="labelPosition === 'left'")
    label.w-textarea__label.w-textarea__label--left.w-form-el-shakable(v-if="$slots.default" :for="`w-textarea--${_uid}`")
      slot
    label.w-textarea__label.w-textarea__label--left.w-form-el-shakable(v-else-if="label" :for="`w-textarea--${_uid}`" v-html="label")

  //- Input wrapper.
  .w-textarea__textarea-wrap(:class="inputWrapClasses")
    w-icon.w-textarea__icon.w-textarea__icon--inner-left(
      v-if="innerIconLeft"
      tag="label"
      :for="`w-textarea--${_uid}`"
      @click="$emit('click:inner-icon-left', $event)") {{ innerIconLeft }}
    textarea.w-textarea__textarea(
      ref="textarea"
      v-model="inputValue"
      v-on="listeners"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      :id="`w-textarea--${_uid}`"
      :name="inputName"
      :placeholder="placeholder || null"
      :rows="rows || null"
      :cols="cols || null"
      :readonly="isReadonly || null"
      :aria-readonly="isReadonly ? 'true' : 'false'"
      :disabled="isDisabled || null"
      :required="required || null"
      :style="textareaStyles")
    template(v-if="labelPosition === 'inside' && showLabelInside")
      label.w-textarea__label.w-textarea__label--inside.w-form-el-shakable(
        v-if="$slots.default"
        :for="`w-textarea--${_uid}`"
        :class="isFocused && { [valid === false ? 'error' : this.color]: this.color || valid === false }")
        slot
      label.w-textarea__label.w-textarea__label--inside.w-form-el-shakable(
        v-else-if="label"
        :for="`w-textarea--${_uid}`"
        v-html="label"
        :class="isFocused && { [valid === false ? 'error' : color]: color || valid === false }")
    w-icon.w-textarea__icon.w-textarea__icon--inner-right(
      v-if="innerIconRight"
      tag="label"
      :for="`w-textarea--${_uid}`"
      @click="$emit('click:inner-icon-right', $event)") {{ innerIconRight }}

  //- Right label.
  template(v-if="labelPosition === 'right'")
    label.w-textarea__label.w-textarea__label--right.w-form-el-shakable(v-if="$slots.default" :for="`w-textarea--${_uid}`")
      slot
    label.w-textarea__label.w-textarea__label--right.w-form-el-shakable(v-else-if="label" :for="`w-textarea--${_uid}`" v-html="label")
</template>

<script>
/**
 * @todo Share the common parts between w-input, w-textarea & w-select.
 **/

import FormElementMixin from '../mixins/form-elements'

export default {
  name: 'w-textarea',
  mixins: [FormElementMixin],

  props: {
    value: { default: '' },
    label: { type: String },
    labelPosition: { type: String, default: 'inside' },
    innerIconLeft: { type: String },
    innerIconRight: { type: String },
    // When label is inside, allows to move the label above on focus or when filled.
    staticLabel: { type: Boolean },
    placeholder: { type: String },
    color: { type: String, default: 'primary' },
    bgColor: { type: String },
    dark: { type: Boolean },
    outline: { type: Boolean },
    shadow: { type: Boolean },
    noAutogrow: { type: Boolean },
    resizable: { type: Boolean }, // Toggle the HTML built-in bottom right corner resize handle.
    tile: { type: Boolean },
    rows: { type: [Number, String], default: 3 },
    cols: { type: [Number, String] },
    // Props from mixin: name, disabled, readonly, required, validators.
    // Computed from mixin: inputName, isDisabled & isReadonly.
  },

  emits: ['input', 'update:modelValue', 'focus', 'blur', 'click:inner-icon-left', 'click:inner-icon-right'],

  data () {
    return {
      inputValue: this.value,
      isFocused: false,
      // When autogrow, calculate the height from the number of carriage return & font size.
      height: null,
      lineHeight: null,
      paddingY: null
    }
  },

  computed: {
    listeners () {
      // Remove the events that are fired separately, so they don't fire twice.
      // eslint-disable-next-line no-unused-vars
      const { input, focus, blur, ...listeners } = this.$listeners
      return listeners
    },
    hasValue () {
      return this.inputValue
    },
    hasLabel () {
      return this.label || this.$slots.default
    },
    showLabelInside () {
      return !this.staticLabel || (!this.hasValue && !this.placeholder)
    },
    classes () {
      return {
        'w-textarea': true,
        'w-textarea--disabled': this.isDisabled,
        'w-textarea--readonly': this.isReadonly,
        [`w-textarea--${this.hasValue ? 'filled' : 'empty'}`]: true,
        'w-textarea--focused': this.isFocused,
        'w-textarea--dark': this.dark,
        'w-textarea--resizable': this.resizable,
        'w-textarea--floating-label': this.hasLabel && this.labelPosition === 'inside' && !this.staticLabel,
        'w-textarea--no-padding': !this.outline && !this.bgColor && !this.shadow,
        'w-textarea--has-placeholder': this.placeholder,
        'w-textarea--inner-icon-left': this.innerIconLeft,
        'w-textarea--inner-icon-right': this.innerIconRight
      }
    },
    inputWrapClasses () {
      return {
        [this.valid === false ? 'error' : this.color]: this.color || this.valid === false,
        [`${this.bgColor}--bg`]: this.bgColor,
        'w-textarea__textarea-wrap--tile': this.tile,
        // Box adds a padding on input. If there is a bgColor or shadow, a padding is needed.
        'w-textarea__textarea-wrap--box': this.outline || this.bgColor || this.shadow,
        'w-textarea__textarea-wrap--underline': !this.outline,
        'w-textarea__textarea-wrap--shadow': this.shadow,
        'w-textarea__textarea-wrap--no-padding': !this.outline && !this.bgColor && !this.shadow
      }
    },

    textareaStyles () {
      if (this.noAutogrow || this.resizable) return {}

      return {
        height: this.height ? `${this.height}px` : null
      }
    }
  },

  methods: {
    onInput () {
      if (!this.noAutogrow && !this.resizable) this.computeHeight()
      this.$emit('update:modelValue', this.inputValue)
      this.$emit('input', this.inputValue)
    },
    onFocus (e) {
      this.isFocused = true
      this.$emit('focus', e)
    },
    onBlur (e) {
      this.isFocused = false
      this.$emit('blur', e)
    },
    computeHeight () {
      const lines = (this.inputValue.match(/\n/g) || []).length + 1
      this.height = Math.max(lines, this.rows) * this.lineHeight + this.paddingY
    },
    getLineHeight () {
      const computedStyles = window.getComputedStyle(this.$refs.textarea, null)
      this.lineHeight = parseFloat(computedStyles.getPropertyValue('line-height'))
      this.paddingY = parseFloat(computedStyles.getPropertyValue('padding-top'))
      this.paddingY += parseFloat(computedStyles.getPropertyValue('padding-bottom'))
    }
  },

  mounted () {
    if (!this.noAutogrow && !this.resizable) this.getLineHeight()
  },

  watch: {
    value (value) {
      this.inputValue = value
      this.computeHeight()
    },
    resizable (value) {
      if (value) this.height = null
      else if (!this.noAutogrow) this.getLineHeight()
    },
    noAutogrow (value) {
      if (value) this.getLineHeight()
      else this.height = null
    }
  }
}
</script>

<style lang="scss">
$inactive-color: #777;

.w-textarea {
  position: relative;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  font-size: $base-font-size;

  // textarea wrapper.
  // ------------------------------------------------------
  &__textarea-wrap {
    position: relative;
    display: inline-flex;
    flex: 1 1 auto;
    min-height: $form-field-height;
    border-radius: $border-radius;
    border: $border;
    transition: border $transition-duration;

    .w-textarea[class^="bdrs"] &, .w-textarea[class*=" bdrs"] & {border-radius: inherit;}
  }

  &--floating-label &__textarea-wrap {margin-top: 4 * $base-increment;}

  &__textarea-wrap--underline {
    border-bottom-left-radius: initial;
    border-bottom-right-radius: initial;
    border-width: 0 0 1px;
  }

  &__textarea-wrap--tile {border-radius: initial;}
  &__textarea-wrap--shadow {box-shadow: $box-shadow;}

  &--focused &__textarea-wrap {border-color: currentColor;}

  // Underline.
  &__textarea-wrap--underline:after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 0;
    border-bottom: 2px solid currentColor;
    transition: $transition-duration;
    transform: scaleX(0);
    pointer-events: none;
  }

  &--focused &__textarea-wrap--underline:after {transform: scaleX(1);}

  // Textarea field.
  // ------------------------------------------------------
  &__textarea {
    width: 100%;
    height: 100%;
    font: inherit;
    line-height: $textarea-line-height;
    color: inherit;
    background: none;
    border: none;
    outline: none;
    padding: $base-increment (2 * $base-increment);
    resize: none;

    .w-textarea--resizable & {resize: vertical;}

    .w-textarea--no-padding & {
      padding-left: 0;
      padding-right: 0;
    }

    .w-textarea--inner-icon-left & {padding-left: 27px;}
    .w-textarea--inner-icon-right & {padding-right: 27px;}

    .w-textarea--disabled & {
      color: $disabled-color;
      cursor: not-allowed;
      -webkit-tap-highlight-color: transparent;
    }
  }

  &--disabled input::placeholder {color: inherit;}

  // Icons inside.
  // ------------------------------------------------------
  &__icon {position: absolute;margin-top: $base-increment;}
  &__icon--inner-left {left: 6px;}
  &__icon--inner-right {right: 6px;}
  &--no-padding &__icon--inner-left {left: 1px;}
  &--no-padding &__icon--inner-right {right: 1px;}

  .w-textarea--focused &__icon {color: currentColor;}

  &--disabled &__icon {
    color: $disabled-color;
    cursor: not-allowed;
    -webkit-tap-highlight-color: transparent;
  }

  // Label.
  // ------------------------------------------------------
  &__label {
    transition: color $transition-duration;
    cursor: pointer;
    align-self: flex-start;

    &--left {
      margin-top: $base-increment;
      margin-right: 2 * $base-increment;
    }
    &--right {
      margin-top: $base-increment;
      margin-left: 2 * $base-increment;
    }
    .w-textarea--disabled & {
      color: $disabled-color;
      cursor: not-allowed;
      -webkit-tap-highlight-color: transparent;
    }
    .w-textarea--readonly.w-textarea--empty & {
      opacity: 0.5;
      cursor: auto;
    }
  }

  &__label--inside {
    position: absolute;
    top: $base-increment;
    left: 0;
    padding-left: 2 * $base-increment;
    transform: translateY(0%);
    pointer-events: none;

    .w-textarea--no-padding & {
      left: 0;
      padding-left: 0;
      padding-right: 0;
    }
    .w-textarea--inner-icon-left & {left: 18px;}
    .w-textarea--no-padding.w-textarea--inner-icon-left & {left: 26px;}

    .w-textarea--floating-label & {
      transform-origin: 0 0;
      transition: $transition-duration ease;
    }

    // move label with underline style.
    .w-textarea--focused.w-textarea--floating-label &,
    .w-textarea--filled.w-textarea--floating-label &,
    .w-textarea--has-placeholder.w-textarea--floating-label & {
      transform: translateY(-110%) scale(0.85);
    }
    // Chrome & Safari - Must remain in a separated rule as Firefox discard the whole rule seeing -webkit-.
    .w-textarea--floating-label .w-textarea__textarea:-webkit-autofill & {
      transform: translateY(-110%) scale(0.85);
    }
    // Move label with outline style or with shadow.
    .w-textarea--focused.w-textarea--floating-label .w-textarea__textarea-wrap--box &,
    .w-textarea--filled.w-textarea--floating-label .w-textarea__textarea-wrap--box &,
    .w-textarea--has-placeholder.w-textarea--floating-label .w-textarea__textarea-wrap--box & {
      transform: translateY(-130%) scale(0.85);
    }
    .w-textarea--focused.w-textarea--floating-label.w-textarea--inner-icon-left &,
    .w-textarea--filled.w-textarea--floating-label.w-textarea--inner-icon-left & {left: 0;}
    // Chrome & Safari - Must remain in a separated rule as Firefox discard the whole rule seeing -webkit-.
    .w-textarea--floating-label.w-textarea--inner-icon-left .w-textarea__textarea:-webkit-autofill & {left: 0;}

    .w-textarea--focused & {color: currentColor;}
  }
}
</style>
