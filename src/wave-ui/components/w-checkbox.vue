<template lang="pug">
  label.w-checkbox(:class="classes")
    input(
      type="checkbox"
      :name="name"
      :checked="isChecked"
      :disabled="disabled"
      @change="isChecked = !isChecked")
    span.w-checkbox__input(:class="{ 'mr-2': hasLabel, [this.color]: true }")
    slot
      span(v-html="label")
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
        'w-checkbox--disabled': this.disabled
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

  &--disabled {cursor: default;opacity: 0.3;}

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
    width: $base-font-size;
    height: $base-font-size;
    display: flex;
    flex: 0 0 auto; // Prevent stretching width or height.
    align-items: center;
    justify-content: center;
    border: $outline-width solid currentColor;
    @include default-transition;

    // Checked state.
    :checked + & {
      border-width: 0.5em;
    }
  }

  // The checkmark.
  &__input:after {
    content: '';
    position: absolute;
    left: 3px;
    top: -1px;
    width: 3px;
    height: 8px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    opacity: 0;
    transition: inherit;

    :checked + & {
      left: -2px;
      top: -6px;
      opacity: 1;
      transform: rotate(45deg) scale(1);
    }
  }

  // The focus outline & checked ripple.
  &__input:before {
    content: "";
    position: absolute;
    width: $base-font-size;
    height: $base-font-size;
    background-color: currentColor;
    border-radius: 100%;
    transform: scale(0);
    opacity: 0;
    pointer-events: none;
    transition: all 0.45s ease-in-out;
  }

  :checked + &__input:before {
    animation: w-checkbox-ripple 0.9s ease-out;
    transition: all 0.45s ease;
  }

  :focus + &__input:before {
    transform: scale(1.8);
    opacity: 0.2;
  }
}

@keyframes w-checkbox-ripple {
  0% {opacity: 1;transform: scale(1);} // Start with visible ripple.
  40% {opacity: 0;transform: scale(2.6);} // Propagate ripple to max radius and fade out.
  40.1%, 80% {opacity: 0;transform: scale(1);} // Wait and from 80% reapply the focus state outline.
  100% {opacity: 0.2;transform: scale(1.8);}
}
</style>
