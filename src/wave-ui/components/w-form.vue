<template lang="pug">
form.w-form(@submit="onSubmit" @reset="reset" novalidate :class="classes")
  slot
</template>

<script>
export default {
  name: 'w-form',

  provide () {
    return {
      formRegister: this.register,
      formUnregister: this.unregister,
      validateElement: this.validateElement,
      noKeyupValidation: this.noKeyupValidation,
      noBlurValidation: this.noBlurValidation
    }
  },

  props: {
    value: {},
    allowSubmit: { type: Boolean },
    noKeyupValidation: { type: Boolean },
    noBlurValidation: { type: Boolean },
    errorPlaceholders: { type: Boolean }
  },

  emits: ['before-validate', 'validate', 'success', 'error', 'reset', 'input', 'submit'],

  data: () => ({
    formElements: [],
    status: null, // null = pristine, false = error, true = success.
    errorsCount: 0
  }),

  computed: {
    classes () {
      return {
        'w-form--pristine': this.status === null,
        'w-form--error': this.status === false,
        'w-form--success': this.status === true,
        'w-form--error-placeholders': this.errorPlaceholders
      }
    }
  },

  methods: {
    register (formElement) {
      this.formElements.push(formElement)
    },

    unregister (formElement) {
      this.formElements = this.formElements.filter(item => item._.uid !== formElement._.uid)
    },

    /**
     * Go through each validation rule of each form element, and count the number of errors.
     * Display the element error inside the element if any error, and $emit the result.
     *
     * @param {Object} e the submit event
     * @return {Boolean} true if the form is valid
     */
    validate (e) {
      this.$emit('before-validate')
      const errorsCount = this.formElements.reduce((total, el) => {
        const { validators, Validation = {}, inputValue, readonly, disabled } = el

        // Skip validation and return ok if there is no validation or if disabled or readonly.
        if (!validators || disabled || readonly) return total

        // Execute the validators 1 by 1 until a failure is found. If it happens, raise the error
        // message in the form element.
        validators.some(validator => {
          const result = typeof validator === 'function' && validator(inputValue)

          Validation.isValid = typeof result !== 'string' // If string, it means there was an error.
          Validation.message = Validation.isValid ? '' : result
          return !Validation.isValid
        })

        el.hasJustReset = false
        el.$emit('update:valid', Validation.isValid) // Update the form element's validity.
        return total + ~~(!Validation.isValid)
      }, 0)

      this.updateErrorsCount(errorsCount)

      this.status = !errorsCount // True if valid.

      this.$emit('validate', { e, errorsCount })
      this.$emit(this.status ? 'success' : 'error', { e, errorsCount })
      return this.status
    },

    validateElement (el) {
      // Execute the validators 1 by 1 until a failure is found. If it happens, raise the error
      // message in the form element.
      el.validators.some(validator => {
        const result = typeof validator === 'function' && validator(el.inputValue)

        el.Validation.isValid = typeof result !== 'string' // If string, it means there was an error.
        el.Validation.message = el.Validation.isValid ? '' : result
        return !el.Validation.isValid
      })

      el.hasJustReset = false
      this.updateErrorsCount()

      return el.Validation.isValid
    },

    reset (e) {
      // Reset is called from:
      //   - the form `reset` event listener
      //   - the value watcher when set to `null`.
      // Prevent resetting twice on form reset that sets the value to null.
      if (!e) return
      this.status = null

      this.formElements.forEach(item => !item.disabled && !item.readonly && item.reset())
      this.updateErrorsCount(0, true)
      this.$emit('reset', e)
    },

    updateErrorsCount (count = null, reset = false) {
      this.errorsCount = count !== null ? count
                       : this.formElements.reduce((sum, el) => sum + ~~(el.Validation.isValid === false), 0)
      this.status = reset ? null : !this.errorsCount

      this.$emit('input', this.status)
      this.$emit('update:errorsCount', this.errorsCount)
    },

    onSubmit (e) {
      this.$emit('submit', e)
      this.validate(e)
      if (!this.allowSubmit || !this.status) e.preventDefault()
    }
  },

  created () {
    this.status = this.value || null
  },

  watch: {
    value (value) {
      // When user clicks the reset button, reset the errors in each form element.
      if ((this.status === false && value) || (value === null && this.status !== null)) this.reset()
      this.status = value
    }
  }
}
</script>
