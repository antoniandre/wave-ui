<template lang="pug">
  form.w-form(@submit="onSubmit" novalidate :class="classes")
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
    noBlurValidation: { type: Boolean }
  },

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
        'w-form--success': this.status === true
      }
    }
  },

  methods: {
    register (formElement) {
      this.formElements.push(formElement)
    },

    unregister (formElement) {
      this.formElements = this.formElements.filter(item => item._uid !== formElement._uid)
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
        const { validation, Validation = {}, inputValue, readonly, disabled } = el

        // Skip validation and return ok if there is no validation or if disabled or readonly.
        if (!validation || disabled || readonly) return total

        const result = typeof validation === 'function' && validation(inputValue)
        const isValid = typeof result !== 'string'
        Validation.message = isValid ? '' : result
        Validation.isValid = isValid
        el.hasJustReset = false
        el.$emit('update:valid', isValid) // Update the form element's validity.
        return total + ~~(!isValid)
      }, 0)

      this.updateErrorsCount(errorsCount)

      this.status = !errorsCount // True if valid.

      this.$emit('validate', { e, errorsCount })
      this.$emit(this.status ? 'success' : 'error', { e, errorsCount })
      return this.status
    },

    validateElement (el) {
      const result = typeof el.validation === 'function' && el.validation(el.inputValue)
      const isValid = typeof result !== 'string'
      el.Validation.message = isValid ? '' : result
      el.Validation.isValid = isValid
      el.hasJustReset = false
      this.updateErrorsCount()

      return isValid
    },

    reset () {
      this.formElements.forEach(item => !item.disabled && !item.readonly && item.reset())
      this.updateErrorsCount(0, true)
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
      if ((this.status === false && value) || value === null) this.reset()
      this.status = value
    }
  }
}
</script>
