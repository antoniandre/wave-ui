<template lang="pug">
component(
  ref="formEl"
  :is="formRegister ? 'w-form-element' : 'div'"
  v-bind="formRegister && { validators, inputValue: isOn, disabled: isDisabled, readonly: isReadonly }"
  v-model:valid="valid"
  @reset="$emit('update:modelValue', isOn = null);$emit('input', null)"
  :class="classes"
  :style="$attrs.style")
  input(
    ref="input"
    :id="`w-switch--${_.uid}`"
    type="checkbox"
    :name="inputName"
    :checked="isOn"
    :disabled="isDisabled || isReadonly || null"
    :readonly="isReadonly || null"
    :aria-readonly="isReadonly ? 'true' : 'false'"
    :required="required || null"
    :tabindex="tabindex || null"
    v-bind="attrs"
    @change="onInput() /* Edge doesn't fire input on checkbox/radio/select change */"
    @focus="$emit('focus', $event)"
    :aria-checked="isOn || 'false'"
    role="switch")
  template(v-if="hasLabel && labelOnLeft")
    label.w-switch__label.w-switch__label--left.w-form-el-shakable(
      v-if="$slots.default || label"
      :for="`w-switch--${_.uid}`"
      :class="labelClasses")
      slot {{ label }}
  .w-switch__input(
    @click="$refs.input.focus();$refs.input.click()"
    :class="inputClasses")
    .w-switch__track(v-if="$slots.track")
      slot(name="track")
    .w-switch__thumb(v-if="$slots.thumb || loading")
      w-progress(
        v-if="loading"
        circle
        color="inherit"
        v-bind="typeof loading === 'number' && { 'model-value': loading }")
      slot(v-else name="thumb")
  template(v-if="hasLabel && !labelOnLeft")
    label.w-switch__label.w-switch__label--right.w-form-el-shakable(
      v-if="$slots.default || label"
      :for="`w-switch--${_.uid}`"
      :class="labelClasses")
      slot {{ label }}
</template>

<script>
import FormElementMixin from '../mixins/form-elements'

export default {
  name: 'w-switch',
  mixins: [FormElementMixin],
  inheritAttrs: false, // The attrs should only be added to the input not the wrapper.

  props: {
    modelValue: { default: false }, // v-model.
    label: { type: String, default: '' },
    labelOnLeft: { type: Boolean },
    color: { type: String, default: 'primary' },
    labelColor: { type: String, default: 'primary' },
    thin: { type: Boolean },
    noRipple: { type: Boolean },
    loading: { type: [Boolean, Number], default: false },
    dark: { type: Boolean },
    light: { type: Boolean }
    // Props from mixin: name, disabled, readonly, required, tabindex, validators.
    // Computed from mixin: inputName, isDisabled & isReadonly.
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
    attrs () {
      // Remove class and style which are meant to stay on the wrapper.
      // Note: in Vue 3 $attrs may contain both HTML attributes AND JS events (onClick, onFocus, etc.).
      // eslint-disable-next-line no-unused-vars
      const { class: classes, style, ...attrs } = this.$attrs
      return attrs
    },
    hasLabel () {
      return this.label || this.$slots.default
    },
    classes () {
      return {
        [`w-switch w-switch--${this.isOn ? 'on' : 'off'}`]: true,
        'w-switch--thin': this.thin,
        'w-switch--disabled': this.isDisabled,
        'w-switch--readonly': this.isReadonly,
        'w-switch--ripple': this.ripple.start,
        'w-switch--custom-thumb': this.$slots.thumb,
        'w-switch--custom-track': this.$slots.track,
        'w-switch--loading': this.loading,
        'w-switch--rippled': this.ripple.end,
        'w-switch--dark': this.dark,
        'w-switch--light': this.light,
        // With the inheritAttrs set to false any class on the component would be lost, so add it back.
        [this.$attrs.class]: !!this.$attrs.class
      }
    },
    inputClasses () {
      const side = this.hasLabel && this.labelOnLeft ? 'l' : 'r'
      return [
        this.color,
        this.hasLabel ? (this.thin ? `m${side}3` : `m${side}2`) : ''
      ]
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
@use "sass:math";

$outline-width: 2px;

.w-switch {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  @include themeable;

  &--loading {cursor: wait;}
  &--disabled, &--readonly {
    cursor: not-allowed;
    touch-action: initial;
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
    width: 2 * ($small-form-el-size + $outline-width);
    height: $small-form-el-size + (2 * $outline-width);
    display: flex;
    flex: 0 0 auto; // Prevent stretching width or height.
    align-items: center;
    justify-content: center;
    border: $outline-width solid transparent;
    border-radius: 3em;
    background-color: $switch-inactive-color;
    cursor: inherit;
    @include default-transition;

    .w-switch[class^="bdrs"] &, .w-switch[class*=" bdrs"] & {border-radius: inherit;}

    // Checked state.
    :checked ~ & {
      border-color: currentColor;
      background-color: currentColor;
    }

    // Thin.
    .w-switch--thin & {
      box-sizing: border-box;
      border: none;
      width: 2 * $small-form-el-size;
      height: math.round(0.7 * $small-form-el-size);
    }
    .w-switch--thin :checked ~ & {background-color: $switch-inactive-color;}

    // Disabled.
    .w-switch--disabled & {color: $disabled-color;}
    .w-switch--disabled :checked ~ & {opacity: 0.5;}
  }

  // Track slot, if any.
  &__track {
    position: absolute;
    left: 100%;
    display: flex;
    align-items: center;
    justify-content: center; // Center any content that could be put via slots.
    padding: 0 4px;
    transform: translateX(-100%);
    @include default-transition;
  }
  .w-switch--on &__track {left: 0;transform: translateX(0);}

  // Thumb: show either the thumb slot if any, or :after otherwise.
  &__thumb, &__input:after {
    content: '';
    position: absolute;
    left: 0;
    width: $small-form-el-size;
    height: $small-form-el-size;
    display: flex;
    align-items: center;
    justify-content: center; // Center any content that could be put via slots.
    background-color: $switch-thumb-color;
    border-radius: 100%;
    @include default-transition;

    .w-switch[class^="bdrs"] &, .w-switch[class*=" bdrs"] & {border-radius: inherit;}

    .w-switch--on & {left: 100%;transform: translateX(-100%);}

    .w-switch--thin & {
      top: - math.round(0.15 * $small-form-el-size);
      transform: scale(1.1);
      box-shadow: $box-shadow;
    }
    .w-switch--thin.w-switch--on & {
      transform: translateX(-100%) scale(1.1);
      background-color: currentColor;
    }
  }
  &--loading .w-progress {padding: 1px;}
  &--loading.w-switch--thin.w-switch--on .w-progress {color: #fff;}
  &--loading &__input:after, &--custom-thumb &__input:after {display: none;}

  // The focus outline & ripple on switch activation.
  &__input:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: $small-form-el-size;
    aspect-ratio: 1;
    background-color: currentColor;
    border-radius: 100%;
    opacity: 0;
    pointer-events: none;
    transition: 0.25s ease-in-out;

    :checked ~ & {transform: translateX(-100%) scale(0);left: 100%;}

    .w-switch[class^="bdrs"] &, .w-switch[class*=" bdrs"] & {border-radius: inherit;}
    .w-switch--thin & {top: - math.round(0.15 * $small-form-el-size);}
  }

  &--ripple &__input:before {
    background-color: transparent;
    animation: w-switch-ripple 0.55s 0.15s ease;
  }

  :focus ~ &__input:before {
    transform: translateX(0) scale(1.8);
    opacity: 0.2;
  }
  :focus:checked ~ &__input:before {
    transform: translateX(-100%) scale(1.8);
  }

  // After ripple reset to default state, then remove the class via js and the
  // `:focus ~ &__input:before` will re-transition to normal focused outline.
  &--rippled &__input:before {
    transition: none;
    transform: translateX(-100%) scale(0);
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
  0% {opacity: 0.8;transform: translateX(-100%) scale(1);background-color: currentColor;} // Start with visible ripple.
  100% {opacity: 0;transform: translateX(-100%) scale(2.8);} // Propagate ripple to max radius and fade out.
}
</style>
