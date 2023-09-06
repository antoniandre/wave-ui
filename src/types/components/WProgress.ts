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
export interface WaveProgressProps {
  /**
   * ``value` in Vue 2.`
   * Accepts a percentage value (ranging from 0 to 100) as a number or a string.
   * If the value is `undefined`, `-1` or not provided at all, it will be assumed indeterminate.
   * @property {number|string|boolean} modelValue - Default: -1
   * @see https://antoniandre.github.io/wave-ui/w-progress
   */
  modelValue?: number|string|boolean

  /**
   * Shows or hides the label of the progress containing the current progress value.
   * @property {boolean} label
   * @see https://antoniandre.github.io/wave-ui/w-progress
   */
  label?: boolean

  /**
   * Applies a round line-cap to the progress.
   * @property {boolean} roundCap
   * @see https://antoniandre.github.io/wave-ui/w-progress
   */
  roundCap?: boolean

  /**
   * Applies a foreground color to the progress. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color - Default: 'primary'
   * @see https://antoniandre.github.io/wave-ui/w-progress
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * Applies a color to the progress' background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} bgColor
   * @see https://antoniandre.github.io/wave-ui/w-progress
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  bgColor?: string

  /**
   * Applies a color to the progress label's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} labelColor
   * @see https://antoniandre.github.io/wave-ui/w-progress
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  labelColor?: string

  /**
   * Sets the size of the progress element: the width if circular, or the height if linear.
   * Accepts a string made of a value and a unit (e.g. `2.5em`) or a number (e.g. `45`) that will be a pixel value.
   * @property {number|string} size
   * @see https://antoniandre.github.io/wave-ui/w-progress
   */
  size?: number|string

  /**
   * Sets the progress style to circle.
   * @property {boolean} circle
   * @see https://antoniandre.github.io/wave-ui/w-progress
   */
  circle?: boolean

  /**
   * Only applies to a circular progress.
   * Sets the thickness of the circular progress.
   * @property {number|string} stroke - Default: 4
   * @see https://antoniandre.github.io/wave-ui/w-progress
   */
  stroke?: number|string

  /**
   * Only applies to a linear progress.
   * Applies a drop shadow to the progress bar.
   * @property {boolean} shadow
   * @see https://antoniandre.github.io/wave-ui/w-progress
   */
  shadow?: boolean

  /**
   * Only applies to a linear progress.
   * Removes the default border-radius and sets sharp edges on the progress bar.
   * @property {boolean} tile
   * @see https://antoniandre.github.io/wave-ui/w-progress
   */
  tile?: boolean

  /**
   * Only applies to a linear progress.
   * Sets a maximum border-radius on the corners of the progress, giving it a round look.
   * @property {boolean} round
   * @see https://antoniandre.github.io/wave-ui/w-progress
   */
  round?: boolean

  /**
   * Only applies to a linear progress.
   * When using the linear progress, the outline style applies the provided `color` (by default the `primary` color is used) to the progress, border and label and no background color is set.
   * @property {boolean} outline
   * @see https://antoniandre.github.io/wave-ui/w-progress
   */
  outline?: boolean

  /**
   * Only applies to a linear progress.
   * Applies an animated stripes background on the progress bar.
   * @property {boolean} stripes
   * @see https://antoniandre.github.io/wave-ui/w-progress
   */
  stripes?: boolean

  /**
   * Sets the CSS position of the progress element to `absolute`.
   * @property {boolean} absolute
   * @see https://antoniandre.github.io/wave-ui/w-progress
   */
  absolute?: boolean

  /**
   * Sets the CSS position of the progress element to `fixed`.
   * @property {boolean} fixed
   * @see https://antoniandre.github.io/wave-ui/w-progress
   */
  fixed?: boolean

  /**
   * Places the progress element at the top of the screen when the `fixed` prop is set to true or at the top of its container when the `absolute` prop is set to true.
   * @property {boolean} top
   * @see https://antoniandre.github.io/wave-ui/w-progress
   */
  top?: boolean

  /**
   * Places the progress element at the bottom of the screen when the `fixed` prop is set to true or at the bottom of its container when the `absolute` prop is set to true.
   * @property {boolean} bottom
   * @see https://antoniandre.github.io/wave-ui/w-progress
   */
  bottom?: boolean

  /**
   * Applies a z-index (positive or negative integer) to the progress element.
   * @property {number|string|boolean} zIndex
   * @see https://antoniandre.github.io/wave-ui/w-progress
   */
  zIndex?: number|string|boolean

}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveProgressEmits {
}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveProgressComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-progress
   */
  progressValue: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-progress
   */
  circleCenter: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-progress
   */
  forcedSize: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-progress
   */
  position: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-progress
   */
  classes: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-progress
   */
  styles: ComputedGetter<any>

}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveProgressMethods extends MethodOptions {
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveProgressSlots = SlotsType<{
  /**
   * Provide a custom progress label.
   * @see https://antoniandre.github.io/wave-ui/w-progress
   */
  'default': () => any

}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WProgress = DefineComponent<
  WaveProgressProps,
  {},
  {},
  WaveProgressComputeds,
  {},
  {},
  {},
  WaveProgressEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveProgressProps, WaveProgressEmits & EmitsOptions>,
  ExtractDefaultPropTypes<WaveProgressProps>,
  WaveProgressSlots
>
