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
export interface WaveIconProps {
  /**
   * The HTML tag to render the icon into. `<i>` by default.
   * @property {string} tag - Default: 'i'
   * @see https://antoniandre.github.io/wave-ui/w-icon
   */
  tag?: string

  /**
   * Applies a color to the icon's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color
   * @see https://antoniandre.github.io/wave-ui/w-icon
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * Applies a color to the icon's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} bgColor
   * @see https://antoniandre.github.io/wave-ui/w-icon
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  bgColor?: string

  /**
   * Sets the size of the icon (font-size).
   * @property {boolean} xs
   * @see https://antoniandre.github.io/wave-ui/w-icon
   */
  xs?: boolean

  /**
   * Sets the size of the icon (font-size).
   * @property {boolean} sm
   * @see https://antoniandre.github.io/wave-ui/w-icon
   */
  sm?: boolean

  /**
   * Sets the size of the icon (font-size).
   * @property {boolean} md
   * @see https://antoniandre.github.io/wave-ui/w-icon
   */
  md?: boolean

  /**
   * Sets the size of the icon (font-size).
   * @property {boolean} lg
   * @see https://antoniandre.github.io/wave-ui/w-icon
   */
  lg?: boolean

  /**
   * Sets the size of the icon (font-size).
   * @property {boolean} xl
   * @see https://antoniandre.github.io/wave-ui/w-icon
   */
  xl?: boolean

  /**
   * Applies a continuous centered spin movement on the icon.
   * @property {boolean} spin
   * @see https://antoniandre.github.io/wave-ui/w-icon
   */
  spin?: boolean

  /**
   * Applies a continuous centered anticlockwise spin movement on the icon.
   * @property {boolean} spinA
   * @see https://antoniandre.github.io/wave-ui/w-icon
   */
  spinA?: boolean

  /**
   * Rotates the icon of 135 degrees anticlockwise.
   * @property {boolean} rotate135a
   * @see https://antoniandre.github.io/wave-ui/w-icon
   */
  rotate135a?: boolean

  /**
   * Rotates the icon of 90 degrees anticlockwise.
   * @property {boolean} rotate90a
   * @see https://antoniandre.github.io/wave-ui/w-icon
   */
  rotate90a?: boolean

  /**
   * Rotates the icon of 45 degrees anticlockwise.
   * @property {boolean} rotate45a
   * @see https://antoniandre.github.io/wave-ui/w-icon
   */
  rotate45a?: boolean

  /**
   * Rotates the icon of 45 degrees clockwise.
   * @property {boolean} rotate45
   * @see https://antoniandre.github.io/wave-ui/w-icon
   */
  rotate45?: boolean

  /**
   * Rotates the icon of 90 degrees clockwise.
   * @property {boolean} rotate90
   * @see https://antoniandre.github.io/wave-ui/w-icon
   */
  rotate90?: boolean

  /**
   * Rotates the icon of 135 degrees clockwise.
   * @property {boolean} rotate135
   * @see https://antoniandre.github.io/wave-ui/w-icon
   */
  rotate135?: boolean

  /**
   * Rotates the icon of 180 degrees clockwise.
   * @property {boolean} rotate180
   * @see https://antoniandre.github.io/wave-ui/w-icon
   */
  rotate180?: boolean

  /**
   * Flips the icon horizontally.
   * @property {boolean} flipX
   * @see https://antoniandre.github.io/wave-ui/w-icon
   */
  flipX?: boolean

  /**
   * Flips the icon vertically.
   * @property {boolean} flipY
   * @see https://antoniandre.github.io/wave-ui/w-icon
   */
  flipY?: boolean

  /**
   * Sets the font-size of the icon.
   * Accepts a string made of a value and a unit (e.g. `2.5em`) or a number (e.g. `45`) that will be a pixel value.
   * @property {number|string} size
   * @see https://antoniandre.github.io/wave-ui/w-icon
   */
  size?: number|string

}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveIconEmits {
}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveIconComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-icon
   */
  hasLigature: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-icon
   */
  forcedSize: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-icon
   */
  presetSize: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-icon
   */
  classes: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-icon
   */
  styles: ComputedGetter<any>

}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveIconMethods extends MethodOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-icon
   */
  readIcon(): void

}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveIconSlots = SlotsType<{
}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WIcon = DefineComponent<
  WaveIconProps,
  {},
  {},
  WaveIconComputeds,
  {},
  {},
  {},
  WaveIconEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveIconProps, WaveIconEmits & EmitsOptions>,
  ExtractDefaultPropTypes<WaveIconProps>,
  WaveIconSlots
>
