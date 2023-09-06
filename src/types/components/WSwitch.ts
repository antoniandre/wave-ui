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
export interface WaveSwitchProps {
  /**
   * ``value` in Vue 2.`
   * Dictates the state of the switch. When the user toggles the switch, the `v-model` value will be updated.
   * @property {any} modelValue - Default: false
   * @see https://antoniandre.github.io/wave-ui/w-switch
   */
  modelValue?: any

  /**
   * Sets a visible label for the switch.
   * @property {string} label - Default: ''
   * @see https://antoniandre.github.io/wave-ui/w-switch
   */
  label?: string

  /**
   * Moves the label to the left of the switch. By default the label is displayed on the right.
   * @property {boolean} labelOnLeft
   * @see https://antoniandre.github.io/wave-ui/w-switch
   */
  labelOnLeft?: boolean

  /**
   * Applies a color to the switch. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color - Default: 'primary'
   * @see https://antoniandre.github.io/wave-ui/w-switch
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * Applies a specific color to the switch's label. Note that on validation failure, the validation-color takes precedence.
   * Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} labelColor - Default: 'primary'
   * @see https://antoniandre.github.io/wave-ui/w-switch
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  labelColor?: string

  /**
   * Applies a thiner style to the switch.
   * @property {boolean} thin
   * @see https://antoniandre.github.io/wave-ui/w-switch
   */
  thin?: boolean

  /**
   * Removes the ripple animation on activation.
   * @property {boolean} noRipple
   * @see https://antoniandre.github.io/wave-ui/w-switch
   */
  noRipple?: boolean

  /**
   * When set to `true`, displays an indefinite-value progress circle inside the switch thumb. If a number is given, it will be the value of the progress.
   * @property {boolean|number} loading - Default: false
   * @see https://antoniandre.github.io/wave-ui/w-switch
   */
  loading?: boolean|number

  /**
   * TODO: Add Description
   * @property {boolean} dark
   * @see https://antoniandre.github.io/wave-ui/w-switch
   */
  dark?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} light
   * @see https://antoniandre.github.io/wave-ui/w-switch
   */
  light?: boolean

}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveSwitchEmits {
  /**
   * Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 2.x only.
   * @param {any} renameMe1 - A boolean representing the current state of the switch.
   * @see https://antoniandre.github.io/wave-ui/w-switch
   */
  'onInput'?: (renameMe1: any) => void

  /**
   * Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 3 only.
   * @param {any} renameMe1 - A boolean representing the current state of the switch.
   * @see https://antoniandre.github.io/wave-ui/w-switch
   */
  'onUpdate:modelValue'?: (renameMe1: any) => void

  /**
   * Emitted on switch focus.
   * @param {any} renameMe1 - The associated focus DOM event.
   * @see https://antoniandre.github.io/wave-ui/w-switch
   */
  'onFocus'?: (renameMe1: any) => void

}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveSwitchComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-switch
   */
  hasLabel: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-switch
   */
  classes: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-switch
   */
  inputClasses: ComputedGetter<any>

}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveSwitchMethods extends MethodOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-switch
   */
  onInput(): void

}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveSwitchSlots = SlotsType<{
  /**
   * The switch label content, if the label prop is not flexible enough.
   * @see https://antoniandre.github.io/wave-ui/w-switch
   */
  'default': () => any

  /**
   * Optional switch track content.
   * @see https://antoniandre.github.io/wave-ui/w-switch
   */
  'track': () => any

  /**
   * Optional switch thumb content. Useful to place an icon or small text.
   * @see https://antoniandre.github.io/wave-ui/w-switch
   */
  'thumb': () => any

}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WSwitch = DefineComponent<
  WaveSwitchProps,
  {},
  {},
  WaveSwitchComputeds,
  WaveSwitchMethods,
  {},
  {},
  WaveSwitchEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveSwitchProps & WaveSwitchEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveSwitchProps>,
  WaveSwitchSlots
>
