<template lang="pug">
  .w-form(:class="classes" :style="styles")
    form(@submit.prevent="onSubmit")
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
      const hasError = this.formElements.some(item => {
        const result = item.validation(item.inputValue)
        item.Validation.message = typeof result === 'string' ? result : ''
        return typeof result === 'string'
      })

      this.$emit('input', !hasError)
      this.$emit(...([hasError ? 'error' : 'success'].concat(e || [])))
      return !hasError
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
