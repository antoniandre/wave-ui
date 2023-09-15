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
export interface WaveSpinnerProps {
  /**
   * ``value` in Vue 2.`
   * The `value` or `v-model` controls the visibility of the spinner. Any truthy value will show the spinner whereas any falsy value will hide it. If no value/v-model or `undefined` is provided, the spinner will be visible.
   * @property {any} modelValue
   * @see https://antoniandre.github.io/wave-ui/w-spinner
   */
  modelValue?: any

  /**
   * Sets the color of the spinner.
   * Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color - Default: 'primary'
   * @see https://antoniandre.github.io/wave-ui/w-spinner
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * Sets the size of the spinner.
   * @property {boolean} xs
   * @see https://antoniandre.github.io/wave-ui/w-spinner
   */
  xs?: boolean

  /**
   * Sets the size of the spinner.
   * @property {boolean} sm
   * @see https://antoniandre.github.io/wave-ui/w-spinner
   */
  sm?: boolean

  /**
   * Sets the size of the spinner.
   * @property {boolean} md
   * @see https://antoniandre.github.io/wave-ui/w-spinner
   */
  md?: boolean

  /**
   * Sets the size of the spinner.
   * @property {boolean} lg
   * @see https://antoniandre.github.io/wave-ui/w-spinner
   */
  lg?: boolean

  /**
   * Sets the size of the spinner.
   * @property {boolean} xl
   * @see https://antoniandre.github.io/wave-ui/w-spinner
   */
  xl?: boolean

  /**
   * Sets the size of the spinner. Accepts a string made of a value and a unit (e.g. `2.5em`) or a number (e.g. `45`) that will be a pixel value.
   * @property {number|string} size
   * @see https://antoniandre.github.io/wave-ui/w-spinner
   */
  size?: number|string

  /**
   * Sets the style of the spinner.
   * @property {boolean} bounce
   * @see https://antoniandre.github.io/wave-ui/w-spinner
   */
  bounce?: boolean

  /**
   * Sets the style of the spinner.
   * @property {boolean} fade
   * @see https://antoniandre.github.io/wave-ui/w-spinner
   */
  fade?: boolean
}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveSpinnerEmits {
}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveSpinnerComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-spinner
   */
  isThreeDots: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-spinner
   */
  forcedSize: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-spinner
   */
  presetSize: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-spinner
   */
  styles: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-spinner
   */
  classes: ComputedGetter<any>
}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveSpinnerMethods extends MethodOptions {
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveSpinnerSlots = SlotsType<{
}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WSpinner = DefineComponent<
  WaveSpinnerProps,
  {},
  {},
  WaveSpinnerComputeds,
  WaveSpinnerMethods,
  {},
  {},
  WaveSpinnerEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveSpinnerProps & WaveSpinnerEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveSpinnerProps>,
  WaveSpinnerSlots
>
