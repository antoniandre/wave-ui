<template lang="pug">
  .w-form(:class="classes" :style="styles")
    form(@submit.prevent="onSubmit")
      slot
</template>

<script>
export default {
  name: 'w-form',

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
    validate (e) {
      this.$emit('validate')
      const hasError = Math.random() > 0.5

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
