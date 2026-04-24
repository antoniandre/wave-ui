import { useId } from 'vue'

export default {
  inject: {
    // Used in each form component to determine whether to use the w-form-element wrap or not.
    // So, if a form component is in a form, use the w-form-element wrap.
    formRegister: { default: null },
    // If the form is disabled or readonly, apply to all the form components.
    formProps: { default: () => ({ disabled: false, readonly: false }) }
  },

  setup () {
    return {
      // SSR-safe unique suffix (Vue 3.5+). Must not start with `_`/`$` or Vue omits it from the
      // render context and template/slot access can warn or fail (see exposeSetupStateOnRenderContext).
      waveUiUseId: useId()
    }
  },

  props: {
    /** When set, used as the DOM `id` and for associated labels (`for`). SSR-safe when provided. */
    id: { type: String },
    name: { type: String }, // When sending data through form.
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    tabindex: { type: String },
    validators: { type: Array },
    /** Per-field blur validation: `true` skips blur, `false` forces blur even when `w-form` sets `no-blur-validation`, unset inherits the form. */
    noBlurValidation: { type: Boolean }
  },

  data: () => ({
    valid: null // Null is pristine (unknown), can also be true or false.
  }),

  computed: {
    /** Stable DOM id for the control (and labels), including SSR/hydration. */
    inputId () {
      const componentName = this.$options.name || 'w-field'
      return this.id || `${componentName}--${this.waveUiUseId}`
    },

    inputName () {
      return this.name || `${this.$options.name}--${this.waveUiUseId}`
    },
    isDisabled () {
      return this.disabled || this.formProps.disabled
    },
    isReadonly () {
      return this.readonly || this.formProps.readonly
    },
    validationColor () {
      return this.formProps.validationColor
    },
    labelClasses () {
      return {
        [this.labelColor]: this.labelColor && this.valid !== false,
        [this.validationColor]: this.valid === false
      }
    }
  },

  methods: {
    // Allow triggering a particular field validation manually via `$refs.myField.validate()`.
    validate () {
      this.$refs.formEl.validate(this)
    }
  }
}
