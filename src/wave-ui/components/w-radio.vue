<template lang="pug">
  .w-radio(:class="classes")
    input(
      ref="input"
      :id="`radio--${_uid}`"
      type="radio"
      :name="inputName"
      :checked="isChecked"
      :disabled="disabled"
      @change="onChange"
      :aria-checked="isChecked || 'false'"
      role="radio")
    .w-radio__input(
      @click="$refs.input.focus();$refs.input.click()"
      :class="{ 'mr-2': hasLabel, [this.color]: true }")
    label.w-radio__label(v-if="$slots.default" :for="`radio--${_uid}`")
      slot
    label.w-radio__label(v-else-if="label" :for="`radio--${_uid}`" v-html="label")
</template>

<script>
export default {
  name: 'w-radio',
  props: {
    value: { default: false }, // v-model to check or uncheck.
    // When `value` is taken by a v-model and multiple w-radio are plugged on
    // the same v-model, this allow returning to the v-model a custom value.
    returnValue: {},
    name: { type: String, default: '' },
    label: { type: String, default: '' },
    color: { type: String, default: 'primary' },
    disabled: { type: Boolean, default: false }
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
      return this.name || `radio--${this._uid}`
    },
    hasLabel () {
      return (this.$slots.default && this.$slots.default.length) || this.label
    },
    classes () {
      return {
        'w-radio--disabled': this.disabled,
        'w-radio--ripple': this.ripple.start,
        'w-radio--rippled': this.ripple.end
      }
    }
  },

  methods: {
    onChange () {
      this.isChecked = !this.isChecked
      this.$emit('input', this.isChecked)

      if (this.isChecked) {
        this.ripple.start = true
        this.ripple.timeout = setTimeout(() => {
          this.ripple.start = false
          this.ripple.end = true
          setTimeout(() => (this.ripple.end = false), 100)
        }, 750)
      }
      else {
        this.ripple.start = false
        clearTimeout(this.ripple.timeout)
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

.w-radio {
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &--disabled {cursor: default;}

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
    :checked + & {border-color: currentColor;}
    .w-radio--disabled :checked + & {border-color: $disabled-color;}
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

    :checked + & {
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
    animation: w-radio-ripple 0.6s 0.15s ease-out;
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

    .w-radio--disabled & {opacity: 0.5;}
  }
}

@keyframes w-radio-ripple {
  0% {opacity: 1;transform: scale(1);background-color: currentColor;} // Start with visible ripple.
  100% {opacity: 0;transform: scale(2.7);} // Propagate ripple to max radius and fade out.
}
</style>
