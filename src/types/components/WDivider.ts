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
export interface WaveDividerProps {
  /**
   * When set to true, the divider will display vertically.
   * @property {boolean} vertical
   * @see https://antoniandre.github.io/wave-ui/w-divider
   */
  vertical?: boolean

  /**
   * Provide a color for the divider. Accepts all the color names of the color palette, status colors, or custom colors (learn more about all the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color
   * @see https://antoniandre.github.io/wave-ui/w-divider
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * TODO: Add Description
   * @property {boolean} dark
   * @see https://antoniandre.github.io/wave-ui/w-divider
   */
  dark?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} light
   * @see https://antoniandre.github.io/wave-ui/w-divider
   */
  light?: boolean

}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveDividerEmits {
}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveDividerComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-divider
   */
  classes: ComputedGetter<any>

}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveDividerMethods extends MethodOptions {
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveDividerSlots = SlotsType<{
  /**
   * An optional HTML content to display in the middle of the divider.
   * @see https://antoniandre.github.io/wave-ui/w-divider
   */
  'default': () => any

}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WDivider = DefineComponent<
  WaveDividerProps,
  {},
  {},
  WaveDividerComputeds,
  WaveDividerMethods,
  {},
  {},
  WaveDividerEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveDividerProps & WaveDividerEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveDividerProps>,
  WaveDividerSlots
>
