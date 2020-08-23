<template lang="pug">
  div(:class="classes")
    .w-flex.grow.align-center
      slot

    //- Error message.
    w-transition-expand(v-if="Validation.message" y)
      .w-form-el__error.error(v-if="$slots['error-message']" class="w-form-el__error w-form-el__error")
        slot(name="error-message" :message="Validation.message")
      .w-form-el__error.error(v-else v-html="Validation.message" class="w-form-el__error w-form-el__error")
</template>

<script>
export default {
  name: 'w-form-element',
  inject: {
    formRegister: { default: null },
    formUnregister: { default: null },
    validateElement: { default: null },
    noKeyupValidation: { default: false },
    noBlurValidation: { default: false }
  },
  props: {
    valid: { required: true },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    inputValue: { required: true }, // The form element's input value.
    validators: { type: Array },
    isFocused: { default: false } // Watched.
  },

  data: () => ({
      Validation: {
        isValid: null, // Null is pristine (unknown), can also be true or false.
        message: '' // Updated on w-form validation.
      },
      hasJustReset: false
  }),

  computed: {
    classes () {
      const classes = ['w-form-el--error error', 'w-form-el--success', 'w-form-el--pristine']
      return [
        'w-form-el',
        classes[this.Validation.isValid === null ? 2 : ~~this.Validation.isValid]
      ]
    }
  },

  methods: {
    // Called from w-form reset.
    reset () {
      this.$emit('reset') // Notify parent to reset its input value.
      this.$emit('update:valid', null) // Notify parent that this field is pristine again.
      this.Validation.message = '' // Remove the error message.
      this.Validation.isValid = null // Reset the element to pristine.
      this.hasJustReset = true
    }
  },

  watch: {
    inputValue () {
      if (this.hasJustReset) return (this.hasJustReset = false)

      // Update the form element's validity on input value change.
      if (!this.noKeyupValidation) this.$emit('update:valid', this.validateElement(this))
    },
    isFocused (val) {
      // When focusing, reset the hasJustReset flag so the input value is watched again.
      if (val) this.hasJustReset = false
      // On blur, Update the form element's validity.
      else if (!this.noBlurValidation) this.$emit('update:valid', this.validateElement(this))
    }
  },

  created () {
    if (this.formRegister) this.formRegister(this)
  },

  beforeDestroy () {
    if (this.formUnregister) this.formUnregister(this)
  }
}
</script>

<style lang="scss">
.w-form-el {
  &--has-error input::placeholder {color: inherit;}

  // Error message.
  // ------------------------------------------------------
  &__error {
    width: 100%;
    flex-grow: 1;
    font-size: 0.75em;
    margin-top: $base-increment;
  }
}

@keyframes w-form-el-shake {
  0% {left: 0;}
  20%, 60% {left: 2px;}
  40%, 80% {left: -2px;}
}
</style>
