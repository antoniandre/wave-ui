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
export interface WaveRatingProps {
  /**
   * ``value` in Vue 2.`
   * Dictates the current rating value. When the user rates, the `v-model` value will be updated.
   * @property {any} modelValue
   * @see https://antoniandre.github.io/wave-ui/w-rating
   */
  modelValue?: any

  /**
   * The total count of buttons (usually stars) to display in the rating component.
   * @property {number|string} max - Default: 5
   * @see https://antoniandre.github.io/wave-ui/w-rating
   */
  max?: number|string

  /**
   * Sets the color of the rating active icons (when hovering or when showing the current rating).
   * Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color - Default: 'primary'
   * @see https://antoniandre.github.io/wave-ui/w-rating
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * Sets color of the background icons (grey by default).
   * Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} bgColor
   * @see https://antoniandre.github.io/wave-ui/w-rating
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  bgColor?: string

  /**
   * Sets the icon (star by default) of each button of the rating component.
   * Accepts a string: e.g. `mdi mdi-home`.
   * @property {string} icon - Default: 'wi-star'
   * @see https://antoniandre.github.io/wave-ui/w-rating
   */
  icon?: string

  /**
   * Sets the size of the rating component (font-size).
   * @property {boolean} xs
   * @see https://antoniandre.github.io/wave-ui/w-rating
   */
  xs?: boolean

  /**
   * Sets the size of the rating component (font-size).
   * @property {boolean} sm
   * @see https://antoniandre.github.io/wave-ui/w-rating
   */
  sm?: boolean

  /**
   * Sets the size of the rating component (font-size).
   * @property {boolean} md
   * @see https://antoniandre.github.io/wave-ui/w-rating
   */
  md?: boolean

  /**
   * Sets the size of the rating component (font-size).
   * @property {boolean} lg
   * @see https://antoniandre.github.io/wave-ui/w-rating
   */
  lg?: boolean

  /**
   * Sets the size of the rating component (font-size).
   * @property {boolean} xl
   * @see https://antoniandre.github.io/wave-ui/w-rating
   */
  xl?: boolean

  /**
   * Removes the ripple animation on click of one of the buttons.
   * @property {boolean} noRipple
   * @see https://antoniandre.github.io/wave-ui/w-rating
   */
  noRipple?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} dark
   * @see https://antoniandre.github.io/wave-ui/w-rating
   */
  dark?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} light
   * @see https://antoniandre.github.io/wave-ui/w-rating
   */
  light?: boolean
}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveRatingEmits {
  /**
   * Emitted each time the rating changes.<br>Updates the v-model value in Vue 2.x only.
   * @param {any} renameMe1 - The current rating.
   * @see https://antoniandre.github.io/wave-ui/w-rating
   */
  'onInput'?: (renameMe1: any) => void

  /**
   * Emitted each time the rating changes.<br>Updates the v-model value in Vue 3 only.
   * @param {any} renameMe1 - The current rating.
   * @see https://antoniandre.github.io/wave-ui/w-rating
   */
  'onUpdate:modelValue'?: (renameMe1: any) => void

  /**
   * Emitted when the rating component is focused (any button).
   * @param {any} renameMe1 - The associated focus DOM event.
   * @see https://antoniandre.github.io/wave-ui/w-rating
   */
  'onFocus'?: (renameMe1: any) => void

  /**
   * Emitted when the rating component is blurred (any button).
   * @param {any} renameMe1 - The associated blur DOM event.
   * @see https://antoniandre.github.io/wave-ui/w-rating
   */
  'onBlur'?: (renameMe1: any) => void
}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveRatingComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-rating
   */
  size: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-rating
   */
  classes: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-rating
   */
  halfStarStyle: ComputedGetter<any>
}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveRatingMethods extends MethodOptions {
  /**
   * TODO: Add Description
   * @param {any} i
   * @see https://antoniandre.github.io/wave-ui/w-rating
   */
  onButtonClick(i: any): void

  /**
   * TODO: Add Description
   * @param {any} e
   * @see https://antoniandre.github.io/wave-ui/w-rating
   */
  onFocus(e: any): void

  /**
   * TODO: Add Description
   * @param {any} e
   * @see https://antoniandre.github.io/wave-ui/w-rating
   */
  onBlur(e: any): void

  /**
   * TODO: Add Description
   * @param {any} e
   * @see https://antoniandre.github.io/wave-ui/w-rating
   */
  onKeydown(e: any): void

  /**
   * TODO: Add Description
   * @param {any} i
   * @see https://antoniandre.github.io/wave-ui/w-rating
   */
  buttonClasses(i: any): void
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveRatingSlots = SlotsType<{
  /**
   * Provide a custom content for each item.
   * @param {any} index The item index, starting at 1.
   * @see https://antoniandre.github.io/wave-ui/w-rating
   */
  'item': (_: { index: any }) => any
}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WRating = DefineComponent<
  WaveRatingProps,
  {},
  {},
  WaveRatingComputeds,
  WaveRatingMethods,
  {},
  {},
  WaveRatingEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveRatingProps & WaveRatingEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveRatingProps>,
  WaveRatingSlots
>
