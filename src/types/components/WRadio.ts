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
export interface WaveRadioProps {
  /**
   * TODO: Add Description
   * @property {any} wRadios - Default: null }
   * @see https://antoniandre.github.io/wave-ui/w-radio
   */
  wRadios?: any

  /**
   * ``value` in Vue 2.`
   * Provide a boolean to dictate the selected state of the radio button.
   * This value gets updated when using a v-model.
   * @property {any} modelValue - Default: false
   * @see https://antoniandre.github.io/wave-ui/w-radio
   */
  modelValue?: any

  /**
   * Since the native HTML radio uses the `value` attribute to define the selected state, the `return-value` prop let you specify a value to return to the `v-model` when the radio is selected (instead of returning `true`).
   * @property {any} returnValue
   * @see https://antoniandre.github.io/wave-ui/w-radio
   */
  returnValue?: any

  /**
   * Sets a visible label for the radio button.
   * @property {string} label
   * @see https://antoniandre.github.io/wave-ui/w-radio
   */
  label?: string

  /**
   * Moves the label to the left of the radio button. By default the label is displayed on the right.
   * @property {boolean} labelOnLeft
   * @see https://antoniandre.github.io/wave-ui/w-radio
   */
  labelOnLeft?: boolean

  /**
   * Applies a color to the radio button when active. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color - Default: 'primary'
   * @see https://antoniandre.github.io/wave-ui/w-radio
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * Applies a specific color to the radio button's label. Note that on validation failure, the validation-color takes precedence.
   * Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} labelColor - Default: 'primary'
   * @see https://antoniandre.github.io/wave-ui/w-radio
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  labelColor?: string

  /**
   * Removes the ripple animation on select.
   * @property {boolean} noRipple
   * @see https://antoniandre.github.io/wave-ui/w-radio
   */
  noRipple?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} dark
   * @see https://antoniandre.github.io/wave-ui/w-radio
   */
  dark?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} light
   * @see https://antoniandre.github.io/wave-ui/w-radio
   */
  light?: boolean

}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveRadioEmits {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-radio
   */
  'onInput'?: () => void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-radio
   */
  'onUpdate:modelValue'?: () => void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-radio
   */
  'onFocus'?: () => void

}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveRadioComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-radio
   */
  hasLabel: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-radio
   */
  classes: ComputedGetter<any>

}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveRadioMethods extends MethodOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-radio
   */
  toggleFromOutside(): void

  /**
   * TODO: Add Description
   * @param {any} e
   * @see https://antoniandre.github.io/wave-ui/w-radio
   */
  onInput(e: any): void

}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveRadioSlots = SlotsType<{
  /**
   * The radio button label content.
   * @see https://antoniandre.github.io/wave-ui/w-radio
   */
  'default': () => any

}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WRadio = DefineComponent<
  WaveRadioProps,
  {},
  {},
  WaveRadioComputeds,
  WaveRadioMethods,
  {},
  {},
  WaveRadioEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveRadioProps & WaveRadioEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveRadioProps>,
  WaveRadioSlots
>
