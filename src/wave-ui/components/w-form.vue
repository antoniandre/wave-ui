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
      formUnregister: this.unregister
    }
  },

  props: {
    value: {},
    allowSubmit: { type: Boolean }
  },

  data: () => ({
    formElements: [],
    status: null // null = pristine, false = error, true = success.
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
      this.$emit('validate')
      const errorsCount = this.formElements.reduce((total, item) => {
        const { validation, Validation = {}, inputValue, readonly, disabled } = item

        // Skip validation and return ok if there is no validation or if disabled or readonly.
        if (!validation || disabled || readonly) return total

        const result = typeof validation === 'function' && validation(inputValue)
        const isValid = typeof result !== 'string'
        Validation.message = isValid ? '' : result
        item.$emit('input', isValid) //Update the form element's validity.
        return total + ~~(!isValid)
      }, 0)

      this.status = !errorsCount // True if valid.

      this.$emit('input', this.status)
      this.$emit(this.status ? 'success' : 'error', { e, errorsCount })
      return this.status
    },

    reset () {
      this.formElements.forEach(item => item.reset())
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
      if (this.status === false && value || value === null) this.reset()
      this.status = value
    }
  }
}
</script>
