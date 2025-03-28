<template lang="pug">
component(
  ref="formEl"
  :is="formRegister && !wCheckboxes ? 'w-form-element' : 'div'"
  v-bind="formRegister && { validators, inputValue: isChecked, disabled: isDisabled, readonly: isReadonly }"
  v-model:valid="valid"
  @reset="$emit('update:modelValue', isChecked = null);$emit('input', null)"
  :class="classes")
  input(
    ref="input"
    :id="`w-checkbox--${_.uid}`"
    type="checkbox"
    :name="inputName"
    :checked="isChecked || null"
    :disabled="isDisabled || isReadonly || null"
    :required="required || null"
    :tabindex="tabindex || null"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
    @change="onInput() /* Edge doesn't emit an `input` event on checkbox/radio/select change */"
    @keypress.enter="onInput"
    :aria-checked="isChecked || 'false'"
    role="checkbox")
  template(v-if="hasLabel && labelOnLeft")
    label.w-checkbox__label.w-form-el-shakable.pr2(
      v-if="$slots.default"
      :for="`w-checkbox--${_.uid}`"
      :class="labelClasses")
      slot {{ label }}
    label.w-checkbox__label.w-form-el-shakable.pr2(
      v-else-if="label"
      :for="`w-checkbox--${_.uid}`"
      :class="labelClasses"
      v-html="label")
  .w-checkbox__input(@click="$refs.input.focus();$refs.input.click()" :class="this.color")
    svg(viewBox="-0.5 0 12 10")
      polyline(points="1 5 4 8 10 2")
  template(v-if="hasLabel && !labelOnLeft")
    label.w-checkbox__label.w-form-el-shakable.pl2(
      v-if="$slots.default"
      :for="`w-checkbox--${_.uid}`"
      :class="labelClasses")
      slot {{ label }}
    label.w-checkbox__label.w-form-el-shakable.pl2(
      v-else-if="label"
      :for="`w-checkbox--${_.uid}`"
      :class="labelClasses"
      v-html="label")
</template>

<script>
import FormElementMixin from '../mixins/form-elements'

export default {
  name: 'w-checkbox',
  mixins: [FormElementMixin],

  inject: {
    wCheckboxes: { default: null }
  },

  props: {
    modelValue: { default: false }, // v-model to check or uncheck.
    // When `value` is taken by a v-model and multiple w-checkbox are plugged on
    // the same v-model, this allow returning to the v-model a custom value.
    returnValue: {},
    label: { type: String },
    labelOnLeft: { type: Boolean },
    color: { type: String, default: 'primary' },
    labelColor: { type: String, default: 'primary' },
    noRipple: { type: Boolean },
    indeterminate: { type: Boolean },
    round: { type: Boolean },
    dark: { type: Boolean },
    light: { type: Boolean }
    // Props from mixin: name, disabled, readonly, required, tabindex, validators.
    // Computed from mixin: inputName, isDisabled & isReadonly.
  },

  emits: ['input', 'update:modelValue', 'focus', 'blur'],

  data () {
    return {
      isChecked: this.modelValue,
      ripple: {
        start: false,
        end: false,
        timeout: null
      }
    }
  },

  computed: {
    hasLabel () {
      return this.label || this.$slots.default
    },
    classes () {
      return {
        [`w-checkbox w-checkbox--${this.isChecked ? 'checked' : 'unchecked'}`]: true,
        'w-checkbox--disabled': this.isDisabled,
        'w-checkbox--readonly': this.isReadonly,
        'w-checkbox--indeterminate': this.indeterminate,
        'w-checkbox--ripple': this.ripple.start,
        'w-checkbox--rippled': this.ripple.end,
        'w-checkbox--round': this.round,
        'w-checkbox--dark': this.dark,
        'w-checkbox--light': this.light
      }
    }
  },

  methods: {
    onInput () {
      this.isChecked = !this.isChecked
      const returnValue = this.isChecked && this.returnValue !== undefined ? this.returnValue : this.isChecked
      this.$emit('update:modelValue', returnValue)
      this.$emit('input', returnValue)

      if (!this.noRipple) {
        if (this.isChecked) {
          this.ripple.start = true
          this.ripple.timeout = setTimeout(() => {
            this.ripple.start = false
            this.ripple.end = true
            setTimeout(() => (this.ripple.end = false), 100)
          }, 700)
        }
        else {
          this.ripple.start = false
          clearTimeout(this.ripple.timeout)
        }
      }
    }
  },

  watch: {
    modelValue (value) {
      this.isChecked = value
    }
  }
}
</script>

<style lang="scss">
$outline-width: 2px;
$inactive-color: #666;

.w-checkbox {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  // Contain the hidden radio button, so browser doesn't pan to it when outside of the screen.
  position: relative;
  -webkit-tap-highlight-color: transparent;

  @include themeable;

  // The hidden real checkbox.
  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    z-index: -100;
    outline: none;
  }

  // The fake checkbox to substitute.
  &__input {
    position: relative;
    width: $small-form-el-size;
    aspect-ratio: 1;
    display: flex;
    flex: 0 0 auto; // Prevent stretching width or height.
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 0;

    .w-checkbox--disabled & {cursor: not-allowed;}
  }

  // The checkmark - visible when checked.
  &__input svg {
    width: 70%;
    aspect-ratio: 1;
    fill: none;
    stroke-width: 2;
    stroke: $contrast-color;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 16px;
    stroke-dashoffset: 16px;
    transition: $transition-duration ease-out;
    opacity: 0;
    position: relative;
    z-index: 1;

    :checked ~ & {
      opacity: 1;
      stroke-dashoffset: 0;
      transition: stroke-dashoffset 0.5s 0.1s, opacity 0s;
    }

    .w-checkbox--indeterminate & {opacity: 0;}
    .w-checkbox--disabled & {stroke: color-mix(in srgb, var(--w-contrast-color) 40%, transparent);}
  }

  &__input:after {
    content: '';
    position: absolute;
    width: 100%;
    aspect-ratio: 1;
    border: $outline-width solid $inactive-color;
    border-radius: $border-radius;
    transition: $transition-duration ease-in-out;

    .w-checkbox--round & {border-radius: 100%;}
    .w-checkbox--disabled & {border-color: $disabled-color;}

    // Checked state.
    :checked ~ & {
      border-width: divide($small-form-el-size, 2);
      border-color: currentColor;
      // Prevents a tiny hole while animating and in some browser zoom levels.
      background-color: currentColor;
    }
    .w-checkbox--indeterminate :checked ~ & {
      border-width: ((divide($small-form-el-size, 2)) - 1px) 3px;
      background-color: $contrast-color;
    }
    .w-checkbox--disabled :checked ~ & {
      border-color: $disabled-color;
      // Prevents a tiny hole while animating and in some browser zoom levels.
      background-color: color-mix(in srgb, var(--w-contrast-color) 40%, transparent);
    }
  }

  // The focus outline & ripple on check action.
  &__input:before {
    content: "";
    position: absolute;
    width: inherit;
    aspect-ratio: 1;
    background-color: currentColor;
    border-radius: 100%;
    transform: scale(0);
    opacity: 0;
    pointer-events: none;
    transition: 0.25s ease-in-out;
  }

  &--ripple &__input:before {
    background-color: transparent;
    animation: w-checkbox-ripple 0.55s 0.15s ease;
  }

  :focus ~ &__input:before,
  &:not(.w-checkbox--disabled) :active ~ &__input:before {
    transform: scale(1.8);
    opacity: 0.2;
  }

  // After ripple reset to default state, then remove the class via js and the
  // `:focus + &__input:before` will re-transition to normal focused outline.
  &--rippled &__input:before {
    transition: none;
    transform: scale(0);
    opacity: 0;
  }

  &__label {
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;

    .w-checkbox--disabled & {
      cursor: not-allowed;
      opacity: 0.7;
    }
  }
}

@keyframes w-checkbox-ripple {
  0% {opacity: 0.8;transform: scale(1);background-color: currentColor;} // Start with visible ripple.
  100% {opacity: 0;transform: scale(2.8);} // Propagate ripple to max radius and fade out.
}
</style>
