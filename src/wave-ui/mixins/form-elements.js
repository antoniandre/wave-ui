export default {
  inject: {
    // Used in each form component to determine whether to use the w-form-element wrap or not.
    // So, if a form component is in a form, use the w-form-element wrap.
    formRegister: { default: null },
    // If the form is disabled or readonly, apply to all the form components.
    formProps: { default: () => ({ disabled: false, readonly: false }) }
  },

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
    },
    isDisabled () {
      return this.disabled || this.formProps.disabled
    },
    isReadonly () {
      return this.readonly || this.formProps.readonly
    }
  },

  methods: {
    // Allow triggering a particular field validation manually via `$refs.myField.validate()`.
    validate () {
      this.$refs.formEl.validate(this)
    }
  }
}
