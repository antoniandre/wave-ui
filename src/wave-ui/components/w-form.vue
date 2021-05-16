<template lang="pug">
form.w-form(@submit="onSubmit" @reset="reset" novalidate :class="classes")
  slot
</template>

<script>
// Like the ES6 Array.some function, but async.
// Purpose: wait for any async validators.
const asyncSome = async (array, predicate) => {
	for (const item of array) {
		if (await predicate(item)) return true
	}
	return false
}

export default {
  name: 'w-form',

  provide () {
    return {
      formRegister: this.register,
      formUnregister: this.unregister,
      validateElement: this.validateElement,
      // Give access to the form params (like disabled) to all the form components.
      // To keep it reactive, we need an object not a list of props (by design in Vue).
      formProps: this.$props
    }
  },

  props: {
    modelValue: {},
    allowSubmit: { type: Boolean },
    noKeyupValidation: { type: Boolean },
    noBlurValidation: { type: Boolean },
    errorPlaceholders: { type: Boolean },
    disabled: { type: Boolean },
    readonly: { type: Boolean }
  },

  emits: [
    'submit',
    'before-validate',
    'validate',
    'success',
    'error',
    'reset',
    'input',
    'update:modelValue',
    'update:errorsCount'
  ],

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
     * On form submit or programmatic call, go through each validation rule of each form element,
     * and count the number of errors.
     * Display the element error inside the element if any error, and $emit the result.
     *
     * @param {Object} e the submit event
     * @return {Boolean} true if the form is valid
     */
    async validate (e) {
      this.$emit('before-validate', { e, errorsCount })

      // Wait for this block to finish checking all the async validators before updating the errorsCount.
      let errorsCount = 0
      await (async () => {
        for (const el of this.formElements) {
          // Skip validation and return ok if there is no validation or if disabled or readonly.
          if (!el.validators?.length || el.disabled || el.readonly) continue

          await this.checkElementValidators(el)
          errorsCount += ~~(!el.Validation.isValid)

          // Update the form element's validity. Internal emit not listed in `emits`.
          el.$emit('update:valid', el.Validation.isValid)
        }
      })()

      this.updateErrorsCount(errorsCount)

      this.status = !errorsCount // True if valid.

      this.$emit('validate', { e, errorsCount })
      this.$emit(this.status ? 'success' : 'error', { e, errorsCount })
      return this.status
    },

    async validateElement (el) {
      await this.checkElementValidators(el)
      this.updateErrorsCount()

      return el.Validation.isValid
    },

    // Execute the validators 1 by 1 until a failure is found. If it happens, raise the error
    // message in the form element.
    async checkElementValidators (el) {
      // While iterating through all the async validators, do not modify `el.Validation.isValid`,
      // or the w-form-element classes will recompute and the error message will briefly show and
      // hide on each keyup.
      // => Store in a temp var until the end of the async loop, then update `el.Validation.isValid`.
      let validationsPassed = false
      let validationMessage = ''
      await asyncSome(el.validators, async validator => {
        const result = await (typeof validator === 'function' && validator(el.inputValue))

        validationsPassed = typeof result !== 'string' // If string, it means there was an error.
        validationMessage = validationsPassed ? '' : result
        return !validationsPassed
      })

      el.hasJustReset = false
      el.Validation.isValid = validationsPassed
      el.Validation.message = validationMessage
    },

    reset (e) {
      // Reset is called from:
      //   - the form `reset` event listener
      //   - the modelValue watcher when set to `null`.
      // Prevent resetting twice on form reset that sets the modelValue to null.
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

      this.$emit('update:modelValue', this.status)
      this.$emit('input', this.status)
      this.$emit('update:errorsCount', this.errorsCount)
    },

    onSubmit (e) {
      this.validate(e)
      this.$emit('submit', e)
      if (!this.allowSubmit || !this.status) e.preventDefault()
    }
  },

  created () {
    this.status = this.modelValue || null
  },

  watch: {
    modelValue (value) {
      // When user clicks the reset button, reset the errors in each form element.
      if ((this.status === false && value) || (value === null && this.status !== null)) this.reset()
      this.status = value
    }
  }
}
</script>
