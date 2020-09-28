export default {
  inject: { formRegister: { default: null } },

  props: {
    name: { type: String }, // When sending data through form.
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    validators: { type: Array }
  },

  data: () => ({
    valid: null // Null is pristine (unknown), can also be true or false.
  }),

  computed: {
    inputName () {
      return this.name || `${this.$options.name}--${this._.uid}`
    }
  }
}
