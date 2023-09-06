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
export interface WaveCheckboxProps {
  /**
   * TODO: Add Description
   * @property {any} wCheckboxes - Default: null
   * @see https://antoniandre.github.io/wave-ui/w-checkbox
   */
  wCheckboxes?: any

  /**
   * ``value` in Vue 2.`
   * Provide a boolean to dictate the checked state the checkbox.
   * This value gets updated when using a v-model.
   * @property {any} modelValue - Default: false
   * @see https://antoniandre.github.io/wave-ui/w-checkbox
   */
  modelValue?: any

  /**
   * Since the native HTML checkbox element uses the `value` attribute to define the checked state, the `return-value` prop let you specify a value to return to the `v-model` when the checkbox is checked (instead of returning `true`).
   * @property {any} returnValue
   * @see https://antoniandre.github.io/wave-ui/w-checkbox
   */
  returnValue?: any

  /**
   * Sets a visible label for the checkbox.
   * @property {string} label
   * @see https://antoniandre.github.io/wave-ui/w-checkbox
   */
  label?: string

  /**
   * Moves the label to the left of the checkbox. By default the label is displayed on the right.
   * @property {boolean} labelOnLeft
   * @see https://antoniandre.github.io/wave-ui/w-checkbox
   */
  labelOnLeft?: boolean

  /**
   * Applies a color to the checkbox when active. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color - Default: 'primary'
   * @see https://antoniandre.github.io/wave-ui/w-checkbox
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * Applies a specific color to the checkbox's label. Note that on validation failure, the validation-color takes precedence.
   * Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} labelColor - Default: 'primary'
   * @see https://antoniandre.github.io/wave-ui/w-checkbox
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  labelColor?: string

  /**
   * Removes the ripple animation on check.
   * @property {boolean} noRipple
   * @see https://antoniandre.github.io/wave-ui/w-checkbox
   */
  noRipple?: boolean

  /**
   * Applies an indeterminate state on the checkbox. E.g. when it represents the selected state of a collection of elements where some are checked and some not.
   * @property {boolean} indeterminate
   * @see https://antoniandre.github.io/wave-ui/w-checkbox
   */
  indeterminate?: boolean

  /**
   * Displays a round checkbox instead of a square one.
   * @property {boolean} round
   * @see https://antoniandre.github.io/wave-ui/w-checkbox
   */
  round?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} dark
   * @see https://antoniandre.github.io/wave-ui/w-checkbox
   */
  dark?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} light
   * @see https://antoniandre.github.io/wave-ui/w-checkbox
   */
  light?: boolean

}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveCheckboxEmits {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-checkbox
   */
  'onInput'?: () => void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-checkbox
   */
  'onUpdate:modelValue'?: () => void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-checkbox
   */
  'onFocus'?: () => void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-checkbox
   */
  'onBlur'?: () => void

}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveCheckboxComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-checkbox
   */
  hasLabel: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-checkbox
   */
  classes: ComputedGetter<any>

}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveCheckboxMethods extends MethodOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-checkbox
   */
  onInput(): void

}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveCheckboxSlots = SlotsType<{
  /**
   * The checkbox label content.
   * @see https://antoniandre.github.io/wave-ui/w-checkbox
   */
  'default': () => any

}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WCheckbox = DefineComponent<
  WaveCheckboxProps,
  {},
  {},
  WaveCheckboxComputeds,
  {},
  {},
  {},
  WaveCheckboxEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveCheckboxProps, WaveCheckboxEmits & EmitsOptions>,
  ExtractDefaultPropTypes<WaveCheckboxProps>,
  WaveCheckboxSlots
>
