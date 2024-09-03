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
export interface WaveNotificationProps {
  /**
   * ``value` in Vue 2.`
   * This prop controls the visibility of the notification. Any truthy value will show the notification whereas any falsy value will hide it.
   * @property {any} modelValue - Default: true
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  modelValue?: any

  /**
   * Applies a particular transition to the notification when showing and hiding.
   * Check all the transitions that apply to the notification in the `Transitions` example.
   * @property {string|boolean} transition - Default: ''
   * @see https://antoniandre.github.io/wave-ui/w-notification
   * @see https://antoniandre.github.io/wave-ui/#transitions
   */
  transition?: string|boolean

  /**
   * Sets a timer to hide a visible notification after a certain amount of milliseconds. E.g. `2000` will hide the notification after 2 seconds. A value of `0` or empty string will keep the notification persistent (no timeout).
   * @property {number|string} timeout - Default: 0
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  timeout?: number|string

  /**
   * Sets the CSS position of the notification to `absolute` (fixed by default).
   * @property {boolean} absolute
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  absolute?: boolean

  /**
   * Places the notification at the top of the screen or at the top of its container if the `absolute` prop is set to true.
   * @property {boolean} top
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  top?: boolean

  /**
   * Places the notification at the bottom of the screen or at the bottom of its container if the `absolute` prop is set to true.
   * @property {boolean} bottom
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  bottom?: boolean

  /**
   * Places the notification at the left of the screen or at the left of its container if the `absolute` prop is set to true.
   * @property {boolean} left
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  left?: boolean

  /**
   * Places the notification at the right of the screen or at the right of its container if the `absolute` prop is set to true.
   * @property {boolean} right
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  right?: boolean

  /**
   * Applies a z-index (positive or negative integer) to the notification.
   * @property {number|string|boolean} zIndex
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  zIndex?: number|string|boolean

  /**
   * Sets the type of the notification, applying the `success` class (green color) and adding a success icon on the left in the notification.
   * @property {boolean} success
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  success?: boolean

  /**
   * Sets the type of the notification, applying the `info` class (blue color) and adding an info icon on the left in the notification.
   * @property {boolean} info
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  info?: boolean

  /**
   * Sets the type of the notification, applying the `warning` class (orange color) and adding a warning icon on the left in the notification.
   * @property {boolean} warning
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  warning?: boolean

  /**
   * Sets the type of the notification, applying the `error` class (red color) and adding an error icon on the left in the notification.
   * @property {boolean} error
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  error?: boolean

  /**
   * Applies a color to the notification's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color
   * @see https://antoniandre.github.io/wave-ui/w-notification
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * Applies a color to the notification's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} bgColor
   * @see https://antoniandre.github.io/wave-ui/w-notification
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  bgColor?: string

  /**
   * Applies a drop shadow to the notification.
   * @property {boolean} shadow
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  shadow?: boolean

  /**
   * Removes the default border-radius and sets sharp edges on the notification.
   * @property {boolean} tile
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  tile?: boolean

  /**
   * Sets a maximum border-radius on the corners of the notification, giving it a round look.
   * @property {boolean} round
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  round?: boolean

  /**
   * Emphasizes a "typed" notification (one of `success`, `info`, `warning`, `error`) by applying a white text color and a full opacity background of the chosen type color.
   * @property {boolean} plain
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  plain?: boolean

  /**
   * Removes the default border from the notification container.
   * @property {boolean} noBorder
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  noBorder?: boolean

  /**
   * Adds a left border on the notification. Only one side-border can be applied at the same time.
   * @property {boolean} borderLeft
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  borderLeft?: boolean

  /**
   * Adds a right border on the notification. Only one side-border can be applied at the same time.
   * @property {boolean} borderRight
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  borderRight?: boolean

  /**
   * Adds a top border on the notification. Only one side-border can be applied at the same time.
   * @property {boolean} borderTop
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  borderTop?: boolean

  /**
   * Adds a bottom border on the notification. Only one side-border can be applied at the same time.
   * @property {boolean} borderBottom
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  borderBottom?: boolean

  /**
   * The outline style applies the provided `color` (by default the color is inherited) to the text and border and no background color is set.
   * @property {boolean} outline
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  outline?: boolean

  /**
   * Adds a close button (cross icon) on the right in the notification. Clicking on this button hides the notification.
   * @property {boolean} dismiss
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  dismiss?: boolean

  /**
   * Sets the size of the notification.
   * @property {boolean} xs
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  xs?: boolean

  /**
   * Sets the size of the notification.
   * @property {boolean} sm
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  sm?: boolean

  /**
   * Sets the size of the notification.
   * @property {boolean} md
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  md?: boolean

  /**
   * Sets the size of the notification.
   * @property {boolean} lg
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  lg?: boolean

  /**
   * Sets the size of the notification.
   * @property {boolean} xl
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  xl?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} dark
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  dark?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} light
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  light?: boolean
}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveNotificationEmits {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  'onInput'?: () => void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  'onUpdate:modelValue'?: () => void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  'onClose'?: () => void
}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveNotificationComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  transitionName: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  position: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  hasType: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  alertProps: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  classes: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  alertClasses: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  styles: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  timeoutVal: ComputedGetter<any>
}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveNotificationMethods extends MethodOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  countdown(): void
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveNotificationSlots = SlotsType<{
  /**
   * The notification content.
   * @see https://antoniandre.github.io/wave-ui/w-notification
   */
  'default': () => any
}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WNotification = DefineComponent<
  WaveNotificationProps,
  {},
  {},
  WaveNotificationComputeds,
  WaveNotificationMethods,
  {},
  {},
  WaveNotificationEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveNotificationProps & WaveNotificationEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveNotificationProps>,
  WaveNotificationSlots
>
