<template lang="pug">
component(
  ref="formEl"
  :is="formRegister && !wCheckboxes ? 'w-form-element' : 'div'"
  v-bind="formRegister && { validators, inputValue: isChecked, disabled: isDisabled }"
  v-model:valid="valid"
  @reset="$emit('update:modelValue', isChecked = null);$emit('input', null)"
  :class="classes")
  input(
    ref="input"
    :id="`w-checkbox--${_.uid}`"
    type="checkbox"
    :name="inputName"
    :checked="isChecked || null"
    :disabled="isDisabled || null"
    :required="required || null"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
    @change="onInput() /* Edge doesn't fire input on checkbox/radio/select change */"
    @keypress.enter="onInput"
    :aria-checked="isChecked || 'false'"
    role="checkbox")
  template(v-if="hasLabel && labelOnLeft")
    label.w-checkbox__label.w-form-el-shakable.pr2(v-if="$slots.default" :for="`w-checkbox--${_.uid}`")
      slot
    label.w-checkbox__label.w-form-el-shakable.pr2(v-else-if="label" :for="`w-checkbox--${_.uid}`" v-html="label")
  .w-checkbox__input(@click="$refs.input.focus();$refs.input.click()" :class="this.color")
    svg(width="11px" height="9px" viewbox="0 0 12 9")
      polyline(points="1 5 4 8 10 2")
  template(v-if="hasLabel && !labelOnLeft")
    label.w-checkbox__label.w-form-el-shakable.pl2(v-if="$slots.default" :for="`w-checkbox--${_.uid}`")
      slot
    label.w-checkbox__label.w-form-el-shakable.pl2(v-else-if="label" :for="`w-checkbox--${_.uid}`" v-html="label")
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
    noRipple: { type: Boolean },
    indeterminate: { type: Boolean },
    round: { type: Boolean }
    // Props from mixin: name, disabled, readonly, required, validators.
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
        'w-checkbox--indeterminate': this.indeterminate,
        'w-checkbox--ripple': this.ripple.start,
        'w-checkbox--rippled': this.ripple.end,
        'w-checkbox--round': this.round
      }
    }
  },

  methods: {
    onInput () {
      this.isChecked = !this.isChecked
      this.$emit('update:modelValue', this.isChecked)
      this.$emit('input', this.isChecked)

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
  cursor: pointer;

  &--disabled {
    cursor: not-allowed;
    -webkit-tap-highlight-color: transparent;
  }

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
    height: $small-form-el-size;
    display: flex;
    flex: 0 0 auto; // Prevent stretching width or height.
    align-items: center;
    justify-content: center;
    cursor: inherit;
    z-index: 0;
  }

  // The checkmark - visible when checked.
  &__input svg {
    width: auto;
    height: auto;
    fill: none;
    stroke-width: 2;
    stroke: white;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 16px;
    stroke-dashoffset: 16px;
    transition: $transition-duration ease-out;
    opacity: 0;
    position: relative;
    top: -0.5px; // For browser zoom levels.
    z-index: 1;

    :checked ~ & {
      opacity: 1;
      stroke-dashoffset: 0;
      transition: stroke-dashoffset 0.5s 0.1s, opacity 0s;
    }

    .w-checkbox--indeterminate & {opacity: 0;}
  }
  &__input:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
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
    .w-checkbox--disabled :checked ~ & {
      border-color: $disabled-color;
      // Prevents a tiny hole while animating and in some browser zoom levels.
      background-color: $disabled-color;
    }
    .w-checkbox--indeterminate :checked ~ & {
      border-width: ((divide($small-form-el-size, 2)) - 1px) 3px;
      background-color: white;
    }
  }

  // The focus outline & ripple on check action.
  &__input:before {
    content: "";
    position: absolute;
    width: inherit;
    height: inherit;
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

  :focus ~ &__input:before {
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
    cursor: inherit;
    user-select: none;

    .w-checkbox--disabled & {opacity: 0.7;}
  }
}

@keyframes w-checkbox-ripple {
  0% {opacity: 0.8;transform: scale(1);background-color: currentColor;} // Start with visible ripple.
  100% {opacity: 0;transform: scale(2.8);} // Propagate ripple to max radius and fade out.
}
</style>
