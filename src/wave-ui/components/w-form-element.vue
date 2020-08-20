<template lang="pug">
  div(:class="classes" v-on="$listeners")
    .w-flex.grow.align-center
      slot

    //- Error message.
    w-transition-expand(v-if="Validation.message" y)
      .w-input__error.error(v-if="$slots['error-message']" :class="`${element}__error w-form-el__error`")
        slot(name="error-message" :message="Validation.message")
      .w-input__error.error(v-else v-html="Validation.message" :class="`${element}__error w-form-el__error`")
</template>

<script>
export default {
  name: 'w-form-element',
  inject: {
    formRegister: { default: null },
    formUnregister: { default: null }
  },
  props: {
    valid: { type: Boolean, required: true },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    inputValue: { required: true },
    element: { type: String, required: true },
    validation: { type: Function }
  },

  data: () => ({
      Validation: {
        message: '' // Updated on w-form validation.
      }
  }),

  computed: {
    classes () {
      return {
        [`${this.element} w-form-el`]: true,
        'w-input--has-error error': this.Validation.message
      }
    }
  },

  methods: {
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
  // Error message.
  // ------------------------------------------------------
  &__error {
    width: 100%;
    flex-grow: 1;
    font-size: 0.75em;
    margin-top: $base-increment;
  }
}
</style>
