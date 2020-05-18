<template lang="pug">
  component.w-radio(:is="hasLabel ? 'label' : 'span'")
    input(
      type="radio"
      :name="name"
      :checked="isChecked"
      @change="isChecked = !isChecked")
    .w-radio__input(:class="{ 'mr-2': hasLabel, [this.color]: true }")
    slot {{ label }}
</template>

<script>
export default {
  name: 'w-radio',
  props: {
    value: { type: Boolean, default: false }, // v-model to check or uncheck.
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
        return this.value
      },
      set (value) {
        this.$emit('input', value)
        this.$emit('change', value)
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

  // The hidden real radio button.
  input {
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
