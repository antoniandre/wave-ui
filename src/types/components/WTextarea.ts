/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import {
  ComputedGetter,
  ComputedOptions,
  DefineComponent,
  EmitsOptions,
  ExtractDefaultPropTypes,
  MethodOptions,
  SlotsType
} from 'vue'

import {
  PublicProps,
  ResolveProps
} from '../extra-vue-types'

// ----------------------------------------------------------------------------
// Props
// ----------------------------------------------------------------------------
export interface WaveTextareaProps {
  /**
   * ``value` in Vue 2.`
   * The text content of the textarea.
   * Gets updated on textarea input.
   * @property {any} modelValue - Default: ''
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  modelValue?: any

  /**
   * Sets a visible label for the textarea.
   * @property {string} label
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  label?: string

  /**
   * Sets the position of the label to one of the following positions: 'left\', \'right\', \'inside\'.
   * @property {string} labelPosition - Default: 'inside'
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  labelPosition?: string

  /**
   * Adds an icon on the left inside the textarea.
   * Accepts a string: e.g. `mdi mdi-eye`.
   * @property {string} innerIconLeft
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  innerIconLeft?: string

  /**
   * Adds an icon on the right inside the textarea.
   * Accepts a string: e.g. `mdi mdi-eye`.
   * @property {string} innerIconRight
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  innerIconRight?: string

  /**
   * Prevents moving the label above the textarea when the `labelPosition` is equal to `inside`. If a placeholder is present, it will be hidden and the label will be displayed instead.
   * When a value is set the static label is replaced by the textual value.
   * @property {boolean} staticLabel
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  staticLabel?: boolean

  /**
   * Provide a placeholder for the textarea. If a label is positioned inside, it will be moved above the textarea so it doesn't overlap.
   * @property {string} placeholder
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  placeholder?: string

  /**
   * Applies a color to the textarea's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color - Default: 'primary'
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * Applies a color to the textarea's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} bgColor
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  bgColor?: string

  /**
   * Applies a specific color to the textarea's label. Note that on validation failure, the validation-color takes precedence.
   * Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} labelColor - Default: 'primary'
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  labelColor?: string

  /**
   * The outline style applies the provided `color` (by default the `primary` color is used) to the text and border and no background color is set.
   * @property {boolean} outline
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  outline?: boolean

  /**
   * Applies a drop shadow to the textarea.
   * @property {boolean} shadow
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  shadow?: boolean

  /**
   * Disables the ability to fit the textarea height to the content.
   * The height will not be smaller than the number of rows set via the `rows` prop.
   * @property {boolean} noAutogrow
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  noAutogrow?: boolean

  /**
   * Allows native resizing of the textarea's height.
   * @property {boolean} resizable
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  resizable?: boolean

  /**
   * Removes the default border-radius and sets sharp edges on the textarea.
   * @property {boolean} tile
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  tile?: boolean

  /**
   * The default and minimum number of rows to display in the textarea (native HTML attribute).
   * @property {number|string} rows - Default: 3
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  rows?: number|string

  /**
   * Applies the native HTML `cols` attribute to the textarea (native HTML attribute).
   * @property {number|string} cols
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  cols?: number|string

  /**
   * TODO: Add Description
   * @property {boolean} dark
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  dark?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} light
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  light?: boolean

}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveTextareaEmits {
  /**
   * Emitted each time the textarea text changes.<br>Updates the v-model value in Vue 2.x only.
   * @param {any} renameMe1 - The new textarea value.
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  'onInput'?: (renameMe1: any) => void

  /**
   * Emitted each time the textarea text changes.<br>Updates the v-model value in Vue 3 only.
   * @param {any} renameMe1 - The new textarea value.
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  'onUpdate:modelValue'?: (renameMe1: any) => void

  /**
   * Emitted on textarea focus.
   * @param {any} renameMe1 - The associated focus DOM event.
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  'onFocus'?: (renameMe1: any) => void

  /**
   * Emitted on textarea blur.
   * @param {any} renameMe1 - The associated blur DOM event.
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  'onBlur'?: (renameMe1: any) => void

  /**
   * Emitted on click of the left inner icon, if any.
   * @param {any} renameMe1 - The associated click DOM event.
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  'onClick:innerIconLeft'?: (renameMe1: any) => void

  /**
   * Emitted on click of the right inner icon, if any.
   * @param {any} renameMe1 - The associated click DOM event.
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  'onClick:innerIconRight'?: (renameMe1: any) => void

}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveTextareaComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  listeners: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  hasValue: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  hasLabel: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  showLabelInside: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  classes: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  inputWrapClasses: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  textareaStyles: ComputedGetter<any>

}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveTextareaMethods extends MethodOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  onInput(): void

  /**
   * TODO: Add Description
   * @param {any} e
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  onFocus(e: any): void

  /**
   * TODO: Add Description
   * @param {any} e
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  onBlur(e: any): void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  computeHeight(): void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  getLineHeight(): void

}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveTextareaSlots = SlotsType<{
  /**
   * The label content, if the `label` prop is not flexible enough.
   * @see https://antoniandre.github.io/wave-ui/w-textarea
   */
  'default': () => any

}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WTextarea = DefineComponent<
  WaveTextareaProps,
  {},
  {},
  WaveTextareaComputeds,
  {},
  {},
  {},
  WaveTextareaEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveTextareaProps & WaveTextareaEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveTextareaProps>,
  WaveTextareaSlots
>
