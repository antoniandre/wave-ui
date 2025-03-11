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
export interface WaveInputProps {
  /**
   * ``value` in Vue 2.`
   * The text content of the input field.
   * Gets updated on text input.
   * @property {any} modelValue - Default: ''
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  modelValue?: any

  /**
   * Applies a native HTML `type` attribute.
   * @property {} type - Default: 'text'
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  type?: string

  /**
   * Sets a visible label for the input field.
   * @property {string} label
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  label?: string

  /**
   * Sets the position of the label to one of the following positions: 'left\', \'right\', \'inside\'.
   * @property {string} labelPosition - Default: 'inside'
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  labelPosition?: string

  /**
   * Adds an icon on the left inside the input field.
   * Accepts a string: e.g. `mdi mdi-eye`.
   * @property {string} innerIconLeft
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  innerIconLeft?: string

  /**
   * Adds an icon on the right inside the input field.
   * Accepts a string: e.g. `mdi mdi-eye`.
   * @property {string} innerIconRight
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  innerIconRight?: string

  /**
   * Prevents moving the label above the input field when the `labelPosition` is equal to `inside`. If a placeholder is present, it will be hidden and the label will be displayed instead.
   * When a value is set the static label is replaced by the textual value.
   * @property {boolean} staticLabel
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  staticLabel?: boolean

  /**
   * Provide a placeholder for the input field. If a label is positioned inside, it will be moved above the field so it doesn't overlap.
   * @property {string} placeholder
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  placeholder?: string

  /**
   * Applies a color to the input field's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color - Default: 'primary'
   * @see https://antoniandre.github.io/wave-ui/w-input
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * Applies a color to the input field's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} bgColor
   * @see https://antoniandre.github.io/wave-ui/w-input
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  bgColor?: string

  /**
   * Applies a specific color to the input field's label. Note that on validation failure, the validation-color takes precedence.
   * Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} labelColor - Default: 'primary'
   * @see https://antoniandre.github.io/wave-ui/w-input
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  labelColor?: string

  /**
   * TODO: Add Description
   * @property {string} progressColor
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  progressColor?: string

  /**
   * Applies the native HTML `minlength` attribute.
   * @property {number|string} minlength
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  minlength?: number|string

  /**
   * Applies the native HTML `maxlength` attribute which prevents typing more than this amount of characters.
   * @property {number|string} maxlength
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  maxlength?: number|string

  /**
   * For `type="number"` inputs.
   * Applies the native HTML `step` attribute which sets an incremental/decremental integer or floating step number, e.g. `0.3`.
   * @property {number|string} step
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  step?: number|string

  /**
   * For `type="number"` inputs.
   * Applies the native HTML `min` attribute which sets an integer or floating minimum number.
   * @property {number|string} min
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  min?: number|string

  /**
   * For `type="number"` inputs.
   * Applies the native HTML `max` attribute which sets an integer or floating maximum number.
   * @property {number|string} max
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  max?: number|string

  /**
   * The outline style applies the provided `color` (by default the `primary` color is used) to the text and border and no background color is set.
   * @property {boolean} outline
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  outline?: boolean

  /**
   * Sets a maximum border-radius on the corners of the input field, giving it a round look.
   * @property {boolean} round
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  round?: boolean

  /**
   * Applies a drop shadow to the input field.
   * @property {boolean} shadow
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  shadow?: boolean

  /**
   * Removes the default border-radius and sets sharp edges on the input field.
   * @property {boolean} tile
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  tile?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} multiple
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  multiple?: boolean

  /**
   * TODO: Add Description
   * @property {boolean|string} preview - Default: true
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  preview?: boolean|string

  /**
   * When set to `true`, displays an indefinite-value progress bar below the input field. If a number is given, it will be the value of the progress.
   * @property {boolean|number} loading - Default: false
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  loading?: boolean|number

  /**
   * TODO: Add Description
   * @property {boolean} showProgress
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  showProgress?: boolean

  /**
   * TODO: Add Description
   * @property {Array<any>} files
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  files?: Array<any>

  /**
   * TODO: Add Description
   * @property {boolean} dark
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  dark?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} light
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  light?: boolean
}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveInputEmits {
  /**
   * Emitted each time the input text (or file) changes.<br>Updates the v-model value in Vue 2.x only.
   * @param {any} renameMe1 - The new textual input value.
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  'onInput'?: (renameMe1: any) => void

  /**
   * Emitted each time the input text changes.<br>Updates the v-model value in Vue 3 only.
   * @param {any} renameMe1 - The new textual input value.
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  'onUpdate:modelValue'?: (renameMe1: any) => void

  /**
   * Emitted on input focus.
   * @param {any} renameMe1 - The associated focus DOM event.
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  'onFocus'?: (renameMe1: any) => void

  /**
   * Emitted on input blur.
   * @param {any} renameMe1 - The associated blur DOM event.
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  'onBlur'?: (renameMe1: any) => void

  /**
   * Emitted on click of the left inner icon, if any.
   * @param {any} renameMe1 - The associated click DOM event.
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  'onClick:innerIconLeft'?: (renameMe1: any) => void

  /**
   * Emitted on click of the right inner icon, if any.
   * @param {any} renameMe1 - The associated click DOM event.
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  'onClick:innerIconRight'?: (renameMe1: any) => void

  /**
   * Emitted continuously while uploading a file. When using the <code>multiple</code> option, this is the overall progress of all the files together.<br>You can use it with <code>:overall-progress.sync</code> in Vue 2, or <code>v-model:overall-progress</code> in Vue 3.
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  'onUpdate:overallProgress'?: () => void
}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveInputComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  attrs: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  hasValue: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  hasLabel: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  hasLoading: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  loadingValue: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  showLabelInside: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  overallFilesProgress: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  uploadInProgress: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  uploadComplete: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  classes: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  inputWrapClasses: ComputedGetter<any>
}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveInputMethods extends MethodOptions {
  /**
   * TODO: Add Description
   * @param {any} e
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  onInput(e: any): void

  /**
   * TODO: Add Description
   * @param {any} e
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  onFocus(e: any): void

  /**
   * TODO: Add Description
   * @param {any} e
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  onBlur(e: any): void

  /**
   * TODO: Add Description
   * @param {any} e
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  onFileChange(e: any): void

  /**
   * TODO: Add Description
   * @param {any} original
   * @param {any} file
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  readFile(original: any, file: any): void
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveInputSlots = SlotsType<{
  /**
   * The label content, if the `label` prop is not flexible enough.
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  'default': () => any

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  'no-file': () => any

  /**
   * The left icon, if the `innerIconLeft` prop is not flexible enough.
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  'icon-left': (_: { inputId: string }) => any

  /**
   * The right icon, if the `innerIconRight` prop is not flexible enough.
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  'icon-right': (_: { inputId: string }) => any
}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WInput = DefineComponent<
  WaveInputProps,
  {},
  {},
  WaveInputComputeds,
  WaveInputMethods,
  {},
  {},
  WaveInputEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveInputProps & WaveInputEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveInputProps>,
  WaveInputSlots
>
