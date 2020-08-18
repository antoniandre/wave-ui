<template lang="pug">
  form.w-form(:class="classes" :style="styles" @submit.prevent="onSubmit" novalidate)
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
    value: {}
  },

  data: () => ({
    formElements: []
  }),

  computed: {
    classes () {
      return {
      }
    },
    styles () {
      return false
    }
  },

  methods: {
    register (formElement) {
      this.formElements.push(formElement)
    },

    unregister (formElement) {
      this.formElements = this.formElements.filter(item => item._uid !== formElement._uid)
    },

    validate (e) {
      this.$emit('validate')
      const errorsCount = this.formElements.reduce((total, item) => {
        const { validation, Validation = {}, inputValue, readonly, disabled } = item

        // Skip validation and return ok if there is no validation or if disabled or readonly.
        if (!validation || disabled || readonly) return total

        const result = typeof validation === 'function' && validation(inputValue)
        Validation.message = typeof result === 'string' ? result : ''
        return total + ~~(typeof result === 'string')
      }, 0)

      this.$emit('input', !errorsCount)
      this.$emit(errorsCount ? 'error' : 'success', { e, errorsCount })
      return !errorsCount
    },

    onSubmit (e) {
      this.$emit('submit', e)
      this.validate(e)
    }
  }
}
</script>

<style lang="scss">
.w-form {
}
</style>
