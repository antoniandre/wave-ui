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
      doRipple: false
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
        'w-radio--ripple': this.doRipple
      }
    }
  },

  methods: {
    onChange () {
      this.isChecked = !this.isChecked
      this.$emit('input', this.isChecked)

      if (this.isChecked) {
        this.doRipple = true
        setTimeout(() => (this.doRipple = false), 900)
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

    .w-radio--disabled & {border-color: $disabled-color;}

    // Checked state.
    :checked + & {border-color: currentColor;}
    .w-radio--disabled :checked + & {border-color: $disabled-color;}
  }

  // The inner bullet.
  &__input:after {
    content: '';
    position: absolute;
    border-radius: 100%;
    border: 0 solid $inactive-color;
    @include default-transition;

    :checked + & {border-width: 4px;border-color: currentColor;}
    .w-radio--disabled & {border-color: $disabled-color;}
  }

  // The focus outline & checked ripple.
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
    transition: 0.45s ease-in-out;
  }

  &--ripple &__input:before {
    animation: w-radio-ripple 0.9s ease-out;
    transition: 0.45s ease;
  }

  :focus + &__input:before {
    transform: scale(1.8);
    opacity: 0.2;
    transition: 0.25s ease-out;
  }

  &__label {
    display: flex;
    align-items: center;
    cursor: inherit;

    .w-radio--disabled & {opacity: 0.5;}
  }
}

@keyframes w-radio-ripple {
  0% {opacity: 1;transform: scale(1);} // Start with visible ripple.
  40% {opacity: 0;transform: scale(2.6);} // Propagate ripple to max radius and fade out.
  40.1%, 80% {opacity: 0;transform: scale(1);} // Wait and from 80% reapply the focus state outline.
  100% {opacity: 0.2;transform: scale(1.8);}
}
</style>
