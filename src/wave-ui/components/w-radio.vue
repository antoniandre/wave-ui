<template lang="pug">
  label.w-radio(:class="classes")
    input(
      type="radio"
      :name="name"
      :checked="isChecked"
      :disabled="disabled"
      @change="isChecked = !isChecked")
    .w-radio__input(:class="{ 'mr-2': hasLabel, [this.color]: true }")
    slot {{ label }}
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

  computed: {
    hasLabel () {
      return (this.$slots.default && this.$slots.default.length) || this.label
    },
    isChecked: {
      get () {
        return this.returnValue !== undefined ? this.returnValue === this.value : this.value
      },
      set (value) {
        this.$emit('input', this.returnValue || value)
        this.$emit('change', this.returnValue || value)
      }
    },
    classes () {
      return {
        'w-radio--disabled': this.disabled
      }
    }
  }
}
</script>

<style lang="scss">
$outline-width: 2px;

.w-radio {
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &--disabled {cursor: default;opacity: 0.3;}

  // The hidden real radio button.
  input[type="radio"] {
    position: absolute;
    opacity: 0;
    z-index: -100;
  }

  // The fake radio button to substitute.
  &__input {
    position: relative;
    border-radius: 100%;
    width: round(1.3 * $base-font-size);
    height: round(1.3 * $base-font-size);
    display: flex;
    flex: 0 0 auto; // Prevent stretching width or height.
    align-items: center;
    justify-content: center;
    border: $outline-width solid currentColor;
  }
  &__input:before {
    content: '';
    position: absolute;
    border-radius: 100%;
    border: 0 solid currentColor;
    @include default-transition;
  }
  input:checked + &__input:before {
    border-width: 4px;
  }

  // The focus outline.
  &__input:after {
    content: '';
    position: absolute;
    top: -$outline-width;
    bottom: -$outline-width;
    left: -$outline-width;
    right: -$outline-width;
    display: flex;
    border-radius: 100%;
    opacity: 0.25;
    box-shadow: 0 0 0 0 currentColor;
    @include default-transition;
  }

  input:focus + &__input:after {box-shadow: 0 0 0 5px currentColor;}
}
</style>
