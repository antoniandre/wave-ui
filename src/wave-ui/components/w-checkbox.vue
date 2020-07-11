<template lang="pug">
  .w-checkbox(:class="classes")
    input(
      ref="input"
      :id="`checkbox--${_uid}`"
      type="checkbox"
      :name="inputName"
      :checked="isChecked"
      :disabled="disabled"
      @change="onChange"
      :aria-checked="isChecked || 'false'"
      role="checkbox")
    template(v-if="labelPosition === 'left'")
      label.w-checkbox__label(v-if="$slots.default" :for="`checkbox--${_uid}`")
        slot
      label.w-checkbox__label(v-else-if="label" :for="`checkbox--${_uid}`" v-html="label")
    .w-checkbox__input(
      @click="$refs.input.focus();$refs.input.click()"
      :class="{ 'mr-2': hasLabel, [this.color]: true }")
    template(v-if="labelPosition !== 'left'")
      label.w-checkbox__label(v-if="$slots.default" :for="`checkbox--${_uid}`")
        slot
      label.w-checkbox__label(v-else-if="label" :for="`checkbox--${_uid}`" v-html="label")
</template>

<script>
export default {
  name: 'w-checkbox',
  props: {
    value: { default: false }, // v-model to check or uncheck.
    // When `value` is taken by a v-model and multiple w-checkbox are plugged on
    // the same v-model, this allow returning to the v-model a custom value.
    returnValue: {},
    name: { type: String, default: '' },
    label: { type: String, default: '' },
    labelPosition: { type: String, default: '' }, // @todo: add a validator (left or right).
    color: { type: String, default: 'primary' },
    disabled: { type: Boolean, default: false },
    noRipple: { type: Boolean, default: false },
    indeterminate: { type: Boolean, default: false },
    round: { type: Boolean, default: false }
  },

  data () {
    return {
      isChecked: this.value,
      ripple: {
        start: false,
        end: false,
        timeout: null
      }
    }
  },

  computed: {
    inputName () {
      return this.name || `checkbox--${this._uid}`
    },
    hasLabel () {
      return (this.$slots.default && this.$slots.default.length) || this.label
    },
    classes () {
      return {
        [`w-checkbox--${this.isChecked ? 'checked' : 'unchecked'}`]: true,
        'w-checkbox--disabled': this.disabled,
        'w-checkbox--indeterminate': this.indeterminate,
        'w-checkbox--ripple': this.ripple.start,
        'w-checkbox--rippled': this.ripple.end,
        'w-checkbox--round': this.round
      }
    }
  },

  methods: {
    onChange () {
      this.isChecked = !this.isChecked
      this.$emit('input', this.isChecked)
      this.$emit('change', this.isChecked)

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
    value (value) {
      this.isChecked = value
    }
  }
}
</script>

<style lang="scss">
$outline-width: 2px;
$size: round(1.3 * $base-font-size);
$inactive-color: #666;
$disabled-color: #ccc;

.w-checkbox {
  display: inline-flex;
  align-items: center;
  // Contain the hidden radio button, so browser doesn't pan to it when outside of the screen.
  position: relative;
  cursor: pointer;

  &--disabled {cursor: default;}

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
    border-radius: $border-radius;
    width: $size;
    height: $size;
    display: flex;
    flex: 0 0 auto; // Prevent stretching width or height.
    align-items: center;
    justify-content: center;
    border: $outline-width solid $inactive-color;
    transition: $transition-duration ease-in-out;
    cursor: inherit;

    .w-checkbox--round & {border-radius: 100%;}
    .w-checkbox--disabled & {border-color: $disabled-color;}

    // Checked state.
    :checked ~ & {
      border-width: $size / 2;
      border-color: currentColor;
      // Prevents a tiny hole while animating and in some browser zoom levels.
      background-color: currentColor;
    }
    .w-checkbox--disabled :checked ~ & {
      border-color: $disabled-color;
      // Prevents a tiny hole while animating and in some browser zoom levels.
      background-color: $disabled-color;
    }
  }

  // The checkmark - visible when checked.
  &__input:after {
    content: '';
    position: absolute;
    // left: round(-$size / 8);
    // top: round(-$size / 2.75);
    left: -5px;
    bottom: -1px;
    width: round($size / 6);
    height: round($size / 2);
    border: solid transparent;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transform-origin: 0 100%;
    opacity: 0;
    transition: $transition-duration;

    .w-checkbox--indeterminate & {
      border-right: none;
      width: round($size / 2);
      transform: scale(0) translateX(-50%);
      left: 50%;
    }

    // When checked.
    :checked ~ & {
      opacity: 1;
      transform: rotate(45deg) scale(1);
      transition: $transition-duration 0.15s cubic-bezier(0.42, 0.96, 1, 1.38);
      animation: w-checkbox-checkmark 0.45s 0.15s forwards ease-out;
      border-color: #fff;
    }
    .w-checkbox--indeterminate :checked ~ & {
      transform: scale(1) translateX(-50%);
      animation: none;
      transition: $transition-duration 0.15s cubic-bezier(0.42, 0.96, 1, 1.38);
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

@keyframes w-checkbox-checkmark {
  0% {width: 0;height: 0;}
  25% {width: round($size / 6);height: 0;}
  100% {height: round($size / 2);}
}
</style>
