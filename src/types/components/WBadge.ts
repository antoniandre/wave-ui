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
export interface WaveBadgeProps {
  /**
   * ``value` in Vue 2.`
   * This prop controls the visibility of the badge. Any truthy value will show the badge whereas any falsy value will hide it.
   * @property {any} modelValue - Default: true
   * @see https://antoniandre.github.io/wave-ui/w-badge
   */
  modelValue?: any

  /**
   * Sets the size of the badge (font-size).
   * @property {boolean} xs
   * @see https://antoniandre.github.io/wave-ui/w-badge
   */
  xs?: boolean

  /**
   * Sets the size of the badge (font-size).
   * @property {boolean} sm
   * @see https://antoniandre.github.io/wave-ui/w-badge
   */
  sm?: boolean

  /**
   * Sets the size of the badge (font-size).
   * @property {boolean} md
   * @see https://antoniandre.github.io/wave-ui/w-badge
   */
  md?: boolean

  /**
   * Sets the size of the badge (font-size).
   * @property {boolean} lg
   * @see https://antoniandre.github.io/wave-ui/w-badge
   */
  lg?: boolean

  /**
   * Sets the size of the badge (font-size).
   * @property {boolean} xl
   * @see https://antoniandre.github.io/wave-ui/w-badge
   */
  xl?: boolean

  /**
   * Places the badge at the top of its activator, either on the left or right (right by default).
   * @property {boolean} top
   * @see https://antoniandre.github.io/wave-ui/w-badge
   */
  top?: boolean

  /**
   * Places the badge at the left of its activator, either at the top or bottom (top by default).
   * @property {boolean} left
   * @see https://antoniandre.github.io/wave-ui/w-badge
   */
  left?: boolean

  /**
   * Places the badge at the right of its activator, either at the top or bottom (top by default).
   * @property {boolean} right
   * @see https://antoniandre.github.io/wave-ui/w-badge
   */
  right?: boolean

  /**
   * Places the badge at the bottom of its activator, either on the left or right (right by default).
   * @property {boolean} bottom
   * @see https://antoniandre.github.io/wave-ui/w-badge
   */
  bottom?: boolean

  /**
   * Overlaps the activator element narrowing the distance between the activator and the badge.
   * @property {boolean} overlap
   * @see https://antoniandre.github.io/wave-ui/w-badge
   */
  overlap?: boolean

  /**
   * Displays the badge inline, in a `static` position instead of `absolute` by default.
   * @property {boolean} inline
   * @see https://antoniandre.github.io/wave-ui/w-badge
   */
  inline?: boolean

  /**
   * Applies a color to the badge's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color
   * @see https://antoniandre.github.io/wave-ui/w-badge
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * Sets the font-size of the badge.
   * Accepts a string made of a value and a unit (e.g. `2.5em`) or a number (e.g. `45`) that will be a pixel value.
   * @property {number|string} size
   * @see https://antoniandre.github.io/wave-ui/w-badge
   */
  size?: number|string

  /**
   * Applies a color to the badge's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} bgColor - Default: 'primary'
   * @see https://antoniandre.github.io/wave-ui/w-badge
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  bgColor?: string

  /**
   * Applies a custom CSS class to the badge element.
   * @property {string} badgeClass
   * @see https://antoniandre.github.io/wave-ui/w-badge
   */
  badgeClass?: string

  /**
   * The outline style applies the provided `color` (by default the color is inherited) to the text and border and no background color is set.
   * @property {boolean} outline
   * @see https://antoniandre.github.io/wave-ui/w-badge
   */
  outline?: boolean

  /**
   * Applies a drop shadow to the badge.
   * @property {boolean} shadow
   * @see https://antoniandre.github.io/wave-ui/w-badge
   */
  shadow?: boolean

  /**
   * Displays a much smaller dot with no content in it.
   * @property {boolean} dot
   * @see https://antoniandre.github.io/wave-ui/w-badge
   */
  dot?: boolean

  /**
   * Forces the badge to be round, when the content is too wide and causes a natural increase of the badge width.
   * @property {boolean} round
   * @see https://antoniandre.github.io/wave-ui/w-badge
   */
  round?: boolean

  /**
   * Applies a particular transition to the badge when showing and hiding.
   * Check all the transitions that apply to the badge component in the `Transitions` example.
   * @property {string} transition - Default: 'fade'
   * @see https://antoniandre.github.io/wave-ui/w-badge
   * @see https://antoniandre.github.io/wave-ui/#transitions
   */
  transition?: string

  /**
   * When set to true, the text color will be set to white.
   * @property {boolean} dark
   * @see https://antoniandre.github.io/wave-ui/w-badge
   */
  dark?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} light
   * @see https://antoniandre.github.io/wave-ui/w-badge
   */
  light?: boolean
}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveBadgeEmits {
}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveBadgeComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-badge
   */
  forcedSize: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-badge
   */
  presetSize: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-badge
   */
  position: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-badge
   */
  classes: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-badge
   */
  styles: ComputedGetter<any>
}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveBadgeMethods extends MethodOptions {
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveBadgeSlots = SlotsType<{
  /**
   * The element receiving the badge. Can be any visible DOM element or mounted component.
   * @see https://antoniandre.github.io/wave-ui/w-badge
   */
  'default': () => any

  /**
   * The badge content.
   * @see https://antoniandre.github.io/wave-ui/w-badge
   */
  'badge': () => any
}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WBadge = DefineComponent<
  WaveBadgeProps,
  {},
  {},
  WaveBadgeComputeds,
  WaveBadgeMethods,
  {},
  {},
  WaveBadgeEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveBadgeProps & WaveBadgeEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveBadgeProps>,
  WaveBadgeSlots
>
