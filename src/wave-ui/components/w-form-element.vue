<template lang="pug">
div(:class="classes")
  .w-flex.grow.wrap(:class="column ? 'column' : 'align-center'")
    slot

  //- Error message.
  w-transition-expand(y)
    template(v-if="Validation.message")
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
    formProps: {
      default: () => ({
        noKeyupValidation: false,
        noBlurValidation: false,
        disabled: false,
        readonly: false
      })
    }
  },

  props: {
    valid: { required: true },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    inputValue: { required: true }, // The form element's input value.
    validators: { type: Array },
    isFocused: { default: false }, // Watched.
    column: { default: false } // Flex direction of the embedded component: column or row by default.
  },

  emits: ['reset', 'update:valid'],

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
    },

    // Allow triggering a particular field validation manually via `$refs.myField.validate()`.
    async validate () {
      this.$emit('update:valid', await this.validateElement(this))
    }
  },

  watch: {
    async inputValue () {
      if (this.hasJustReset) return (this.hasJustReset = false)

      // Update the form element's validity on input value change.
      if (!this.formProps.noKeyupValidation && this.validators) {
        this.$emit('update:valid', await this.validateElement(this))
      }
    },
    async isFocused (val) {
      // When focusing, reset the hasJustReset flag so the input value is watched again.
      if (val) this.hasJustReset = false
      // On blur, Update the form element's validity.
      else if (!this.formProps.noBlurValidation && this.validators) {
        this.$emit('update:valid', await this.validateElement(this))
      }
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
div.w-form-el {
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}

.w-form-el {
  > .w-flex {position: relative;}
  .w-form--error-placeholders & {
    position: relative;
    padding-bottom: 1.2rem;
  }
  &--has-error input::placeholder {color: inherit;}

  &-shakable {position: relative;}
  &--error &-shakable {animation: w-form-el-shake 0.3s $transition-duration ease-in-out;}

  // Error message.
  // ------------------------------------------------------
  &__error {
    width: 100%;
    flex-grow: 1;
    font-size: 0.775rem;
    margin-top: $base-increment;

    .w-form--error-placeholders & {position: absolute;bottom: 0;}
  }
}

@keyframes w-form-el-shake {
  0% {left: 0;}
  20%, 60% {left: 2px;}
  40%, 80% {left: -2px;}
}
</style>
