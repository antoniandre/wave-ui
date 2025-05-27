/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import type {
  ComputedGetter,
  ComputedOptions,
  DefineComponent,
  EmitsOptions,
  ExtractDefaultPropTypes,
  MethodOptions,
  SlotsType
} from 'vue'

import type {
  PublicProps,
  ResolveProps
} from '../extra-vue-types'

// ----------------------------------------------------------------------------
// Props
// ----------------------------------------------------------------------------
export interface WaveFormProps {
  /**
   * ``value` in Vue 2.`
   * Contains the status of the form validity at all times. Three values are possible: `null` when pristine (untouched), `false` when invalid, `true` when valid.
   * This value gets updated every time a validation is triggered on a single field or on all the fields at once on form submit.
   * Setting this value to `null` will reset the form.
   * @property {any} modelValue
   * @see https://antoniandre.github.io/wave-ui/w-form
   */
  modelValue?: any

  /**
   * Native HTML submits the form to the server when all the form elements are valid.
   * Usually and by default, the form submission is prevented and an AJAX call is made from the front end. This is completely up to the developer.
   * @property {boolean} allowSubmit
   * @see https://antoniandre.github.io/wave-ui/w-form
   */
  allowSubmit?: boolean

  /**
   * Prevents the form element validation on keyup (happening by default).
   * @property {boolean} noKeyupValidation
   * @see https://antoniandre.github.io/wave-ui/w-form
   */
  noKeyupValidation?: boolean

  /**
   * Prevents the form element validation on blur (happening by default).
   * @property {boolean} noBlurValidation
   * @see https://antoniandre.github.io/wave-ui/w-form
   */
  noBlurValidation?: boolean

  /**
   * Reserves a space under all the form elements so that triggering an error and showing the error message will not change the height of the form.
   * @property {boolean} errorPlaceholders
   * @see https://antoniandre.github.io/wave-ui/w-form
   */
  errorPlaceholders?: boolean

  /**
   * Applies a specific color to any input field failing the validation.
   * Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} validationColor - Default: 'error'
   * @see https://antoniandre.github.io/wave-ui/w-form
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  validationColor?: string

  /**
   * Disables all the form fields all at once, making them unreactive to user interactions.
   * @property {boolean} disabled
   * @see https://antoniandre.github.io/wave-ui/w-form
   */
  disabled?: boolean

  /**
   * Set all the form fields to readonly all at once. The fields will still look interactive but their value will not be editable by user interaction.
   * @property {boolean} readonly
   * @see https://antoniandre.github.io/wave-ui/w-form
   */
  readonly?: boolean
}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveFormEmits {
  /**
   * Emitted on form submit.
   * @param {any} renameMe1 - The associated reset DOM event.
   * @see https://antoniandre.github.io/wave-ui/w-form
   */
  'onSubmit'?: (renameMe1: any) => void

  /**
   * Emitted before validation, every time a validation is triggered.
   * @see https://antoniandre.github.io/wave-ui/w-form
   */
  'onBeforeValidate'?: () => void

  /**
   * Emitted on form validate, every time a validation is triggered.<br>Returns a single object containing:
   * @param {any} renameMe1 - The associated DOM event.
   * @param {any} renameMe2 - An integer representing the number of errors in the form.
   * @see https://antoniandre.github.io/wave-ui/w-form
   */
  'onValidate'?: (renameMe1: any, renameMe2: any) => void

  /**
   * Emitted on form success, when there is no error in the form and the validation is successful.<br>Returns a single object containing:
   * @param {any} renameMe1 - The associated DOM event.
   * @param {any} renameMe2 - An integer representing the number of errors in the form.
   * @see https://antoniandre.github.io/wave-ui/w-form
   */
  'onSuccess'?: (renameMe1: any, renameMe2: any) => void

  /**
   * Emitted on form error, when there is at least one error in the form and the validation fails.<br>Returns a single object containing:
   * @param {any} renameMe1 - The associated DOM event.
   * @param {any} renameMe2 - An integer representing the number of errors in the form.
   * @see https://antoniandre.github.io/wave-ui/w-form
   */
  'onError'?: (renameMe1: any, renameMe2: any) => void

  /**
   * Emitted on form reset. A reset can be triggered by setting the v-model value to null or by clicking on a reset button.
   * @param {any} renameMe1 - The associated reset DOM event.
   * @see https://antoniandre.github.io/wave-ui/w-form
   */
  'onReset'?: (renameMe1: any) => void

  /**
   * Emitted every time the form status changes.<br>Updates the v-model value in Vue 2.x only.
   * @param {any} renameMe1 - The new status of the form: one of <code>null</code> when pristine, <code>false</code> when invalid, <code>true</code> when valid.
   * @see https://antoniandre.github.io/wave-ui/w-form
   */
  'onInput'?: (renameMe1: any) => void

  /**
   * Emitted every time the form status changes.<br>Updates the v-model value in Vue 3 only.
   * @param {any} renameMe1 - The new status of the form: one of <code>null</code> when pristine, <code>false</code> when invalid, <code>true</code> when valid.
   * @see https://antoniandre.github.io/wave-ui/w-form
   */
  'onUpdate:modelValue'?: (renameMe1: any) => void

  /**
   * Emitted every time the errorsCount changes. To be used with <code>:errors-count.sync</code> in Vue 2 or <code>v-model:errors-count</code> in Vue 3.
   * @param {any} renameMe1 - The number of errors in the form.
   * @see https://antoniandre.github.io/wave-ui/w-form
   */
  'onUpdate:errorsCount'?: (renameMe1: any) => void
}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveFormComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-form
   */
  classes: ComputedGetter<any>
}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveFormMethods extends MethodOptions {
  /**
   * TODO: Add Description
   * @param {any} formElement
   * @see https://antoniandre.github.io/wave-ui/w-form
   */
  register(formElement: any): void

  /**
   * TODO: Add Description
   * @param {any} formElement
   * @see https://antoniandre.github.io/wave-ui/w-form
   */
  unregister(formElement: any): void

  /**
   * TODO: Add Description
   * @param {any} e
   * @see https://antoniandre.github.io/wave-ui/w-form
   */
  reset(e: any): void

  /**
   * TODO: Add Description
   * @param {any} [count] - null
   * @param {any} [reset] - false
   * @see https://antoniandre.github.io/wave-ui/w-form
   */
  updateErrorsCount(count?: any, reset?: any): void

  /**
   * TODO: Add Description
   * @param {any} e
   * @see https://antoniandre.github.io/wave-ui/w-form
   */
  onSubmit(e: any): void
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveFormSlots = SlotsType<{
  /**
   * The form content.
   * @see https://antoniandre.github.io/wave-ui/w-form
   */
  'default': () => any
}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WForm = DefineComponent<
  WaveFormProps,
  {},
  {},
  WaveFormComputeds,
  WaveFormMethods,
  {},
  {},
  WaveFormEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveFormProps & WaveFormEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveFormProps>,
  WaveFormSlots
>
