<template lang="pug">
  .w-switch(:class="classes")
    input(
      ref="input"
      :id="`switch--${_uid}`"
      type="checkbox"
      :name="inputName"
      :checked="isChecked"
      :disabled="disabled"
      @change="onChange"
      :aria-checked="isChecked || 'false'"
      role="checkbox")
    .w-switch__input(
      @click="$refs.input.focus();$refs.input.click()"
      :class="{ 'mr-2': hasLabel, [this.color]: true }")
    label.w-switch__label(v-if="$slots.default" :for="`switch--${_uid}`")
      slot
    label.w-switch__label(v-else-if="label" :for="`switch--${_uid}`" v-html="label")
</template>

<script>
export default {
  name: 'w-switch',
  props: {
    value: { default: false }, // v-model to check or uncheck.
    // When `value` is taken by a v-model and multiple w-switch are plugged on
    // the same v-model, this allow returning to the v-model a custom value.
    returnValue: {},
    name: { type: String, default: '' },
    label: { type: String, default: '' },
    color: { type: String, default: 'primary' },
    disabled: { type: Boolean, default: false },
    noRipple: { type: Boolean, default: false }
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
      return this.name || `switch--${this._uid}`
    },
    hasLabel () {
      return (this.$slots.default && this.$slots.default.length) || this.label
    },
    classes () {
      return {
        'w-switch--disabled': this.disabled,
        'w-switch--ripple': this.ripple.start,
        'w-switch--rippled': this.ripple.end
      }
    }
  },

  methods: {
    onChange () {
      this.isChecked = !this.isChecked
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
    value (value) {
      this.isChecked = value
    }
  }
}
</script>

<style lang="scss">
$outline-width: 2px;
$size: round(1.3 * $base-font-size);
$inactive-color: #ccc;
$disabled-color: #ddd;

.w-switch {
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &--disabled {cursor: default;}

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
    width: 2 * $size;
    height: $size;
    display: flex;
    flex: 0 0 auto; // Prevent stretching width or height.
    align-items: center;
    justify-content: center;
    border: $outline-width solid $inactive-color;
    background-color: $inactive-color;
    @include default-transition;
    cursor: inherit;
    box-sizing: initial;

    .w-switch--disabled & {color: $disabled-color;}

    // Checked state.
    :checked + & {
      border-color: currentColor;
      background-color: currentColor;
    }
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
    width: $size;
    height: $size;
    background-color: #fff;
    border-radius: 100%;
    @include default-transition;

    :checked + & {
      transform: translateX(100%);
    }
  }

  // The focus outline & ripple on switch activation.
  &__input:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: $size;
    height: $size;
    background-color: currentColor;
    border-radius: 100%;
    transform: translateX(100%) scale(0);
    opacity: 0;
    pointer-events: none;
    transition: 0.25s ease-in-out;
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
