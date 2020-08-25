<template lang="pug">
  component(
    :is="formRegister ? 'w-form-element' : 'div'"
    v-bind="formRegister && { validators, inputValue, disabled }"
    :valid.sync="valid"
    @reset="$emit('input', inputValue = false)"
    :class="classes")
    input(
      ref="input"
      :id="`radio--${_uid}`"
      type="radio"
      :name="inputName"
      :checked="inputValue"
      :disabled="disabled"
      @focus="$emit('focus', $event)"
      @change="onChange"
      :aria-checked="inputValue || 'false'"
      role="radio")
    template(v-if="hasLabel && labelOnLeft")
      label.w-radio__label.pr2(v-if="$slots.default" :for="`radio--${_uid}`")
        slot
      label.w-radio__label.pr2(v-else-if="label" :for="`radio--${_uid}`" v-html="label")
    .w-radio__input(
      @click="$refs.input.focus();$refs.input.click()"
      :class="this.color")
    template(v-if="hasLabel && !labelOnLeft")
      label.w-radio__label.pl2(v-if="$slots.default" :for="`radio--${_uid}`")
        slot
      label.w-radio__label.pl2(v-else-if="label" :for="`radio--${_uid}`" v-html="label")
</template>

<script>
export default {
  name: 'w-radio',
  inject: { formRegister: { default: null } },
  props: {
    value: { default: false }, // v-model to check or uncheck.
    // When `value` is taken by a v-model and multiple w-radio are plugged on
    // the same v-model, this allow returning to the v-model a custom value.
    returnValue: {},
    name: { type: String, default: '' },
    label: { type: String, default: '' },
    labelOnLeft: { type: Boolean },
    color: { type: String, default: 'primary' },
    disabled: { type: Boolean },
    noRipple: { type: Boolean },
    validators: { type: Array }
  },

  data () {
    return {
      inputValue: false,
      ripple: {
        start: false,
        end: false,
        timeout: null
      },
      valid: null // Null is pristine (unknown), can also be true or false.
    }
  },

  computed: {
    inputName () {
      return this.name || `radio--${this._uid}`
    },
    hasLabel () {
      return (this.$slots.default && this.$slots.default.length) || this.label
    },
    classes () {
      return {
        [`w-radio w-radio--${this.inputValue ? 'checked' : 'unchecked'}`]: true,
        'w-radio--disabled': this.disabled,
        'w-radio--ripple': this.ripple.start,
        'w-radio--rippled': this.ripple.end
      }
    }
  },

  methods: {
    toggleFromOutside () {
      this.inputValue = this.returnValue !== undefined ? (this.returnValue === this.value) : this.value
    },

    onChange (e) {
      this.inputValue = e.target.checked // The source of truth is the radio button.
      const returnValue = this.inputValue && this.returnValue !== undefined ? this.returnValue : this.inputValue
      this.$emit('input', returnValue)
      this.$emit('change', returnValue)

      if (!this.noRipple) {
        if (this.inputValue) {
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

  created () {
    if (this.value !== undefined) this.toggleFromOutside()
  },

  watch: {
    value () {
      this.toggleFromOutside()
    }
  }
}
</script>

<style lang="scss">
$outline-width: 2px;
$size: round(1.3 * $base-font-size);
$inactive-color: #666;

.w-radio {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  // Contain the hidden radio button, so browser doesn't pan to it when outside of the screen.
  position: relative;
  cursor: pointer;

  &--disabled {cursor: not-allowed;}

  // The hidden real radio button.
  input[type="radio"] {
    position: absolute;
    opacity: 0;
    z-index: -100;
    outline: none;
  }

  // The fake radio button to substitute.
  &__input {
    position: relative;
    border-radius: 100%;
    width: $size;
    height: $size;
    display: flex;
    flex: 0 0 auto; // Prevent stretching width or height.
    align-items: center;
    justify-content: center;
    border: $outline-width solid $inactive-color;
    transition: 0.3s ease-in-out;
    cursor: inherit;

    .w-radio--disabled & {border-color: $disabled-color;}

    // Checked state.
    :checked ~ & {border-color: currentColor;}
    .w-radio--disabled :checked ~ & {border-color: $disabled-color;}
  }

  // The inner bullet - visible when checked.
  &__input:after {
    content: '';
    position: absolute;
    border-radius: 100%;
    border: 0 solid $inactive-color;
    // Prevents a tiny hole while animating and in some browser zoom levels.
    background-color: $inactive-color;
    transition: $transition-duration;

    :checked ~ & {
      border-width: 4px;
      border-color: currentColor;
      // Prevents a tiny hole while animating and in some browser zoom levels.
      background-color: currentColor;
    }
    .w-radio--disabled & {
      border-color: $disabled-color;
      // Prevents a tiny hole while animating and in some browser zoom levels.
      background-color: $disabled-color;
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
    animation: w-radio-ripple 0.55s 0.15s ease;
  }

  :focus + &__input:before {
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

    .w-radio--disabled & {opacity: 0.7;}
  }
}

@keyframes w-radio-ripple {
  0% {opacity: 1;transform: scale(1);background-color: currentColor;} // Start with visible ripple.
  100% {opacity: 0;transform: scale(2.8);} // Propagate ripple to max radius and fade out.
}
</style>
