<template lang="pug">
component(
  ref="formEl"
  :is="formRegister ? 'w-form-element' : 'div'"
  v-bind="formRegister && { validators, inputValue: isOn, disabled, readonly }"
  v-model:valid="valid"
  @reset="$emit('update:modelValue', isOn = null);$emit('input', null)"
  :class="classes")
  input(
    ref="input"
    :id="`w-switch--${_.uid}`"
    type="checkbox"
    :name="inputName"
    :checked="isOn"
    :disabled="disabled || readonly || null"
    :readonly="readonly || null"
    :aria-readonly="readonly ? 'true' : 'false'"
    :required="required || null"
    @change="onInput() /* Edge doesn't fire input on checkbox/radio/select change */"
    @focus="$emit('focus', $event)"
    :aria-checked="isOn || 'false'"
    role="switch")
  template(v-if="hasLabel && labelOnLeft")
    label.w-switch__label.w-form-el-shakable(v-if="$slots.default" :for="`w-switch--${_.uid}`")
      slot
    label.w-switch__label.w-form-el-shakable(v-else-if="label" :for="`w-switch--${_.uid}`" v-html="label")
  .w-switch__input(
    @click="$refs.input.focus();$refs.input.click()"
    :class="[[this.color], hasLabel ? (thin ? 'mr3' : 'mr2') : '']")
  template(v-if="hasLabel && !labelOnLeft")
    label.w-switch__label.w-form-el-shakable(v-if="$slots.default" :for="`w-switch--${_.uid}`")
      slot
    label.w-switch__label.w-form-el-shakable(v-else-if="label" :for="`w-switch--${_.uid}`" v-html="label")
</template>

<script>
import FormElementMixin from '../mixins/form-elements'

export default {
  name: 'w-switch',
  mixins: [FormElementMixin],

  props: {
    modelValue: { default: false }, // v-model.
    label: { type: String, default: '' },
    labelOnLeft: { type: Boolean },
    color: { type: String, default: 'primary' },
    thin: { type: Boolean },
    noRipple: { type: Boolean }
    // Also name, disabled, readonly, required and validators in the mixin.
  },

  emits: ['input', 'update:modelValue', 'focus'],

  data () {
    return {
      isOn: this.modelValue,
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
        [`w-switch w-switch--${this.isOn ? 'on' : 'off'}`]: true,
        'w-switch--thin': this.thin,
        'w-switch--disabled': this.disabled,
        'w-switch--readonly': this.readonly,
        'w-switch--ripple': this.ripple.start,
        'w-switch--rippled': this.ripple.end
      }
    }
  },

  methods: {
    onInput () {
      this.isOn = !this.isOn
      this.$emit('update:modelValue', this.isOn)
      this.$emit('input', this.isOn)

      if (!this.noRipple) {
        if (this.isOn) {
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
      this.isOn = value
    }
  }
}
</script>

<style lang="scss">
$outline-width: 2px;
$inactive-color: #ccc;
$disabled-color: #ddd;

.w-switch {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;

  &--disabled, &--readonly {
    cursor: not-allowed;
    touch-action: initial;
    -webkit-tap-highlight-color: transparent;
  }

  // Hidden checkbox.
  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    z-index: -100;
    outline: none;
  }

  // Switch.
  &__input {
    position: relative;
    border-radius: 3em;
    width: 2 * $small-form-el-size;
    height: $small-form-el-size;
    display: flex;
    flex: 0 0 auto; // Prevent stretching width or height.
    align-items: center;
    justify-content: center;
    border: $outline-width solid $inactive-color;
    background-color: $inactive-color;
    @include default-transition;
    cursor: inherit;
    box-sizing: initial;

    // Checked state.
    :checked + & {
      border-color: currentColor;
      background-color: currentColor;
    }

    // Thin.
    .w-switch--thin & {
      box-sizing: border-box;
      border: none;
      // border: ($small-form-el-size / 2) solid rgba(255, 255, 255, 0.6);
      height: round(0.7 * $small-form-el-size);
    }
    .w-switch--thin :checked + & {
      background-color: $inactive-color;
    }

    // Disabled.
    .w-switch--disabled & {color: $disabled-color;}
    .w-switch--disabled :checked + & {
      opacity: 0.5;
    }
  }

  // Thumb.
  &__input:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: $small-form-el-size;
    height: $small-form-el-size;
    background-color: #fff;
    border-radius: 100%;
    @include default-transition;

    :checked + & {transform: translateX(100%);}

    .w-switch--thin & {
      top: - round(0.15 * $small-form-el-size);
      transform: scale(1.1);
      box-shadow: $box-shadow;
    }
    .w-switch--thin :checked + & {
      transform: translateX(100%) scale(1.1);
      background-color: currentColor;
    }
  }

  // The focus outline & ripple on switch activation.
  &__input:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: $small-form-el-size;
    height: $small-form-el-size;
    background-color: currentColor;
    border-radius: 100%;
    transform: translateX(100%) scale(0);
    opacity: 0;
    pointer-events: none;
    transition: 0.25s ease-in-out;

    .w-switch--thin & {top: - round(0.15 * $small-form-el-size);}
  }

  &--ripple &__input:before {
    background-color: transparent;
    animation: w-switch-ripple 0.55s 0.15s ease;
  }

  :focus + &__input:before {
    transform: translateX(0) scale(1.8);
    opacity: 0.2;
  }
  :focus:checked + &__input:before {
    transform: translateX(100%) scale(1.8);
  }

  // After ripple reset to default state, then remove the class via js and the
  // `:focus + &__input:before` will re-transition to normal focused outline.
  &--rippled &__input:before {
    transition: none;
    transform: translateX(100%) scale(0);
    opacity: 0;
  }

  &__label {
    display: flex;
    align-items: center;
    cursor: inherit;
    user-select: none;

    .w-switch--disabled & {opacity: 0.5;}
  }
}

@keyframes w-switch-ripple {
  0% {opacity: 0.8;transform: translateX(100%) scale(1);background-color: currentColor;} // Start with visible ripple.
  100% {opacity: 0;transform: translateX(100%) scale(2.8);} // Propagate ripple to max radius and fade out.
}
</style>
