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
export interface WaveTooltipProps {
  /**
   * ``value` in Vue 2.`
   * This prop controls the visibility of the tooltip. Any truthy value will show the tooltip whereas any falsy value will hide it.
   * @property {any} modelValue
   * @see https://antoniandre.github.io/wave-ui/w-tooltip
   */
  modelValue?: any

  /**
   * Triggers the tooltip apparition on activator click instead of hover by default. Another click on the activator will hide the tooltip.
   * @property {boolean} showOnClick
   * @see https://antoniandre.github.io/wave-ui/w-tooltip
   */
  showOnClick?: boolean

  /**
   * Applies a color to the tooltip's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color
   * @see https://antoniandre.github.io/wave-ui/w-tooltip
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * Applies a color to the tooltip's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} bgColor
   * @see https://antoniandre.github.io/wave-ui/w-tooltip
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  bgColor?: string

  /**
   * Removes the default border from the tooltip element.
   * @property {boolean} noBorder
   * @see https://antoniandre.github.io/wave-ui/w-tooltip
   */
  noBorder?: boolean

  /**
   * Applies a drop shadow to the tooltip.
   * @property {boolean} shadow
   * @see https://antoniandre.github.io/wave-ui/w-tooltip
   */
  shadow?: boolean

  /**
   * Removes the default border-radius and sets sharp edges on the tooltip.
   * @property {boolean} tile
   * @see https://antoniandre.github.io/wave-ui/w-tooltip
   */
  tile?: boolean

  /**
   * Sets a maximum border-radius on the corners of the tooltip, giving it a round look.
   * @property {boolean} round
   * @see https://antoniandre.github.io/wave-ui/w-tooltip
   */
  round?: boolean

  /**
   * Applies a particular transition to the tooltip element when showing and hiding.
   * Accepts all the transitions listed in the `transitions` knowledge base page. You can also disable the transition by setting this prop to an empty string.
   * @property {string} transition
   * @see https://antoniandre.github.io/wave-ui/w-tooltip
   * @see https://antoniandre.github.io/wave-ui/transitions
   */
  transition?: string

  /**
   * Provide custom CSS classes for the tooltip element.
   * @property {string|{}|Array<any>} tooltipClass
   * @see https://antoniandre.github.io/wave-ui/w-tooltip
   */
  tooltipClass?: string|{}|Array<any>

  /**
   * When set to `true`, clicking outside of the tooltip will not close the tooltip.
   * @property {boolean} persistent
   * @see https://antoniandre.github.io/wave-ui/w-tooltip
   */
  persistent?: boolean

  /**
   * A delay - in milliseconds - before opening the tooltip.
   * A small delay may help the tooltip position computing if the tooltip content changes at the moment the activator is activated. For instance, when defining multiple activators opening the same tooltip with different content.
   * @property {number} delay
   * @see https://antoniandre.github.io/wave-ui/w-tooltip
   */
  delay?: number

  /**
   * TODO: Add Description
   * @property {boolean} dark
   * @see https://antoniandre.github.io/wave-ui/w-tooltip
   */
  dark?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} light
   * @see https://antoniandre.github.io/wave-ui/w-tooltip
   */
  light?: boolean
}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveTooltipEmits {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-tooltip
   */
  'onInput'?: () => void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-tooltip
   */
  'onUpdate:modelValue'?: () => void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-tooltip
   */
  'onOpen'?: () => void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-tooltip
   */
  'onClose'?: () => void
}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveTooltipComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-tooltip
   */
  tooltipClasses: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-tooltip
   */
  transitionName: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-tooltip
   */
  classes: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-tooltip
   */
  styles: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-tooltip
   */
  activatorEventHandlers: ComputedGetter<any>
}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveTooltipMethods extends MethodOptions {
  /**
   * TODO: Add Description
   * @param {any} e
   * @see https://antoniandre.github.io/wave-ui/w-tooltip
   */
  toggle(e: any): void
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveTooltipSlots = SlotsType<{
  /**
   * `This slot is required and must have the `v-on="on"` directive set on it for the tooltip to toggle correctly.`
   * The activator can be any visible DOM element or mounted component.
   * @param {any} on TODO: Describe me!
   * @see https://antoniandre.github.io/wave-ui/w-tooltip
   */
  'activator': (_: { on: any }) => any

  /**
   * The tooltip content.
   * @see https://antoniandre.github.io/wave-ui/w-tooltip
   */
  'default': () => any
}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WTooltip = DefineComponent<
  WaveTooltipProps,
  {},
  {},
  WaveTooltipComputeds,
  WaveTooltipMethods,
  {},
  {},
  WaveTooltipEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveTooltipProps & WaveTooltipEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveTooltipProps>,
  WaveTooltipSlots
>
