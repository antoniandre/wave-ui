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
export interface WaveAlertProps {
  /**
   * ``value` in Vue 2.`
   * This prop controls the visibility of the alert. Any truthy value will show the alert whereas any falsy value will hide it.
   * @property {any} modelValue - Default: true
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  modelValue?: any

  /**
   * Applies a color to the alert's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color
   * @see https://antoniandre.github.io/wave-ui/w-alert
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * Applies a color to the alert's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} bgColor
   * @see https://antoniandre.github.io/wave-ui/w-alert
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  bgColor?: string

  /**
   * Applies a drop shadow to the alert container.
   * @property {boolean} shadow
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  shadow?: boolean

  /**
   * Removes the default border-radius and sets sharp edges on the alert container.
   * @property {boolean} tile
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  tile?: boolean

  /**
   * Sets a maximum border-radius on the corners of the alert container, giving it a round look.
   * @property {boolean} round
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  round?: boolean

  /**
   * Provide a custom icon string (e.g. `mdi mdi-star`) to display on the left of the alert message.
   * @property {string} icon
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  icon?: string

  /**
   * If an icon is provided, this option changes the style and displays the icon on the left border.
   * @property {boolean} iconOutside
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  iconOutside?: boolean

  /**
   * Emphasizes a "typed" alert (one of `success`, `info`, `warning`, `error`) by applying a white text color and a full opacity background of the chosen type color.
   * @property {boolean} plain
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  plain?: boolean

  /**
   * Adds a close button (cross icon) on the right in the alert. Clicking on this button hides the alert.
   * @property {boolean} dismiss
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  dismiss?: boolean

  /**
   * Sets the type of the alert, applying the `success` class (green color) and adding a success icon on the left in the alert.
   * @property {boolean} success
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  success?: boolean

  /**
   * Sets the type of the alert, applying the `info` class (blue color) and adding an info icon on the left in the alert.
   * @property {boolean} info
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  info?: boolean

  /**
   * Sets the type of the alert, applying the `warning` class (orange color) and adding a warning icon on the left in the alert.
   * @property {boolean} warning
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  warning?: boolean

  /**
   * Sets the type of the alert, applying the `error` class (red color) and adding an error icon on the left in the alert.
   * @property {boolean} error
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  error?: boolean

  /**
   * Sets the size of the alert.
   * @property {boolean} xs
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  xs?: boolean

  /**
   * Sets the size of the alert.
   * @property {boolean} sm
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  sm?: boolean

  /**
   * Sets the size of the alert.
   * @property {boolean} md
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  md?: boolean

  /**
   * Sets the size of the alert.
   * @property {boolean} lg
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  lg?: boolean

  /**
   * Sets the size of the alert.
   * @property {boolean} xl
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  xl?: boolean

  /**
   * Removes the default border from the alert container.
   * @property {boolean} noBorder
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  noBorder?: boolean

  /**
   * Adds a left border on the alert. Only one side-border can be applied at the same time.
   * @property {boolean} borderLeft
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  borderLeft?: boolean

  /**
   * Adds a right border on the alert. Only one side-border can be applied at the same time.
   * @property {boolean} borderRight
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  borderRight?: boolean

  /**
   * Adds a top border on the alert. Only one side-border can be applied at the same time.
   * @property {boolean} borderTop
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  borderTop?: boolean

  /**
   * Adds a bottom border on the alert. Only one side-border can be applied at the same time.
   * @property {boolean} borderBottom
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  borderBottom?: boolean

  /**
   * The outline style applies the provided `color` (by default the color is inherited) to the text and border and no background color is set.
   * @property {boolean} outline
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  outline?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} dark
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  dark?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} light
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  light?: boolean

}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveAlertEmits {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  'onInput'?: () => void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  'onUpdate:modelValue'?: () => void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  'onClose'?: () => void

}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveAlertComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  typeIcon: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  type: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  presetSize: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  hasSingleBorder: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  classes: ComputedGetter<any>

}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveAlertMethods extends MethodOptions {
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveAlertSlots = SlotsType<{
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-alert
   */
  'default': () => any

}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WAlert = DefineComponent<
  WaveAlertProps,
  {},
  {},
  WaveAlertComputeds,
  {},
  {},
  {},
  WaveAlertEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveAlertProps & WaveAlertEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveAlertProps>,
  WaveAlertSlots
>
