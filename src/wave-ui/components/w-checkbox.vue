<template lang="pug">
  component.w-checkbox(:is="hasLabel ? 'label' : 'span'")
    input(
      type="checkbox"
      :name="name"
      :checked="isChecked"
      @change="isChecked = !isChecked")
    .w-checkbox__input(:class="{ 'mr-2': hasLabel, [this.color]: true }")
    slot {{ label }}
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
    color: { type: String, default: 'primary' }
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
    }
  }
}
</script>

<style lang="scss">
$outline-width: 2px;
.w-checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  // The hidden real checkbox.
  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    z-index: -100;
  }

  // The fake checkbox to substitute.
  &__input {
    position: relative;
    border-radius: $border-radius;
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
    border-radius: 0;
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
    border-radius: inherit;
    opacity: 0.25;
    box-shadow: 0 0 0 0 currentColor;
    @include default-transition;
  }

  input:focus + &__input:after {box-shadow: 0 0 0 4px currentColor;}
}
</style>
