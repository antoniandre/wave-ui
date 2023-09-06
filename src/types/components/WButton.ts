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
export interface WaveButtonProps {
  /**
   * Applies a color to the button's text.
   * If no `color` and no `bg-color` are set, and if either `outline` or `text` is set to true, the `primary` color will be applied.
   * Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color
   * @see https://antoniandre.github.io/wave-ui/w-button
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * Applies a color to the button's background.
   * If no `color` and no `bg-color` are set, and if neither `outline` nor `text` are set to true, the `primary` color will be applied.
   * Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} bgColor
   * @see https://antoniandre.github.io/wave-ui/w-button
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  bgColor?: string

  /**
   * When set to true, the text color will be set to white.
   * @property {boolean} dark
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  dark?: boolean

  /**
   * The outline style applies the provided `color` (by default the `primary` color is used) to the text and border and no background color is set.
   * @property {boolean} outline
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  outline?: boolean

  /**
   * Sets the background of the button to transparent. On mouse hover the button background is set to a very light opacity of the given `color` (primary by default).
   * @property {boolean} text
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  text?: boolean

  /**
   * Sets a maximum border-radius on the corners of the button, giving it a round look.
   * @property {boolean} round
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  round?: boolean

  /**
   * Applies a drop shadow to the button.
   * @property {boolean} shadow
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  shadow?: boolean

  /**
   * Removes the default border-radius and sets sharp edges on the button.
   * @property {boolean} tile
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  tile?: boolean

  /**
   * TODO: Add Description
   * @property {string} tooltip
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  tooltip?: string

  /**
   * TODO: Add Description
   * @property {{}} tooltipProps - Default: () => ({})
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  tooltipProps?: {}

  /**
   * When provided, the button becomes a link to this route. A `router-link` will be generated if you use Vue Router, or a normal link otherwise.
   * @property {string|{}} route
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  route?: string|{}

  /**
   * In some cases, you may want to use a normal link instead of a `router-link`, for instance when using anchor links (starting with `#`), you can use the `force-link` prop to force a normal link.
   * @property {boolean} forceLink
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  forceLink?: boolean

  /**
   * Applies a native HTML `type` attribute.
   * @property {} type - Default: 'button'
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  type?: string

  /**
   * Disables the button making it unreactive to user interactions.
   * @property {boolean} disabled
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  disabled?: boolean

  /**
   * Sets the loading state of the button. While loading, the button is unclickable and a spinner is displayed instead of the button label.
   * @property {boolean} loading
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  loading?: boolean

  /**
   * Sets the button to a round icon style, containing only an icon.
   * Accepts a string: e.g. `mdi mdi-home`.
   * @property {string} icon - Default: null
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  icon?: string

  /**
   * TODO: Add Description
   * @property {{}} iconProps - Default: () => ({})
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  iconProps?: {}

  /**
   * TODO: Add Description
   * @property {boolean} absolute
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  absolute?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} fixed
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  fixed?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} top
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  top?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} bottom
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  bottom?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} left
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  left?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} right
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  right?: boolean

  /**
   * TODO: Add Description
   * @property {number|string} zIndex
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  zIndex?: number|string

  /**
   * TODO: Add Description
   * @property {number|string} width
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  width?: number|string

  /**
   * TODO: Add Description
   * @property {number|string} height
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  height?: number|string

  /**
   * TODO: Add Description
   * @property {boolean} xs
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  xs?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} sm
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  sm?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} md
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  md?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} lg
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  lg?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} xl
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  xl?: boolean

}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveButtonEmits {
}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveButtonComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  buttonProps: ComputedGetter<any>

}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveButtonMethods extends MethodOptions {
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveButtonSlots = SlotsType<{
  /**
   * The button content.
   * @see https://antoniandre.github.io/wave-ui/w-button
   */
  'default': () => any

}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WButton = DefineComponent<
  WaveButtonProps,
  {},
  {},
  WaveButtonComputeds,
  WaveButtonMethods,
  {},
  {},
  WaveButtonEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveButtonProps & WaveButtonEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveButtonProps>,
  WaveButtonSlots
>
