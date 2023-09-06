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
export interface WaveDialogProps {
  /**
   * ``value` in Vue 2.`
   * This prop controls the visibility of the dialog. Any truthy value will show the dialog whereas any falsy value will hide it.
   * @property {any} modelValue - Default: true
   * @see https://antoniandre.github.io/wave-ui/w-dialog
   */
  modelValue?: any

  /**
   * Sets a max-width on the dialog.
   * Accepts a string made of a value and a unit (e.g. `2.5em`) or a number (e.g. `45`) that will be a pixel value.
   * @property {number|string} width - Default: 0
   * @see https://antoniandre.github.io/wave-ui/w-dialog
   */
  width?: number|string

  /**
   * Sets the dialog to full-screen.
   * @property {boolean} fullscreen
   * @see https://antoniandre.github.io/wave-ui/w-dialog
   */
  fullscreen?: boolean

  /**
   * When set to true, clicking outside of the dialog or pressing the escape key will not close the dialog.
   * A bounce animation will give the user a feedback that the dialog needs attention and cannot be closed.
   * @property {boolean} persistent
   * @see https://antoniandre.github.io/wave-ui/w-dialog
   */
  persistent?: boolean

  /**
   * When this and the `persistent` props are set to true, clicking outside of the dialog or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user).
   * @property {boolean} persistentNoAnimation
   * @see https://antoniandre.github.io/wave-ui/w-dialog
   */
  persistentNoAnimation?: boolean

  /**
   * Removes the default border-radius and sets sharp edges on the dialog.
   * @property {boolean} tile
   * @see https://antoniandre.github.io/wave-ui/w-dialog
   */
  tile?: boolean

  /**
   * Provide a dialog title.
   * @property {string} title
   * @see https://antoniandre.github.io/wave-ui/w-dialog
   */
  title?: string

  /**
   * Applies a particular transition to this component when showing and hiding.
   * Accepts all the transitions listed in the `transitions` knowledge base page. You can also disable the transition by setting this prop to an empty string.
   * Test all the transitions in the `Transitions` example.
   * @property {string} transition - Default: 'fade'
   * @see https://antoniandre.github.io/wave-ui/w-dialog
   * @see https://antoniandre.github.io/wave-ui/transitions
   * @see https://antoniandre.github.io/wave-ui/#transitions
   */
  transition?: string

  /**
   * Applies a custom CSS class to the dialog's title.
   * @property {string} titleClass
   * @see https://antoniandre.github.io/wave-ui/w-dialog
   */
  titleClass?: string

  /**
   * Applies a custom CSS class to the dialog's content.
   * @property {string} contentClass
   * @see https://antoniandre.github.io/wave-ui/w-dialog
   */
  contentClass?: string

  /**
   * Applies a custom CSS class to the dialog container.
   * @property {string} dialogClass
   * @see https://antoniandre.github.io/wave-ui/w-dialog
   */
  dialogClass?: string

  /**
   * Provide a custom background color for the dialog background overlay (`rgba(0, 0, 0, 0.3)` by default).
   * Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} overlayColor
   * @see https://antoniandre.github.io/wave-ui/w-dialog
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  overlayColor?: string

  /**
   * Applies a text color on the dialog. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color
   * @see https://antoniandre.github.io/wave-ui/w-dialog
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * Applies a background color on the dialog. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} bgColor
   * @see https://antoniandre.github.io/wave-ui/w-dialog
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  bgColor?: string

  /**
   * Provide a custom opacity for the dialog background overlay.
   * @property {number|string|boolean} overlayOpacity
   * @see https://antoniandre.github.io/wave-ui/w-dialog
   */
  overlayOpacity?: number|string|boolean

  /**
   * TODO: Add Description
   * @property {boolean} dark
   * @see https://antoniandre.github.io/wave-ui/w-dialog
   */
  dark?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} light
   * @see https://antoniandre.github.io/wave-ui/w-dialog
   */
  light?: boolean

}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveDialogEmits {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-dialog
   */
  'onInput'?: () => void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-dialog
   */
  'onUpdate:modelValue'?: () => void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-dialog
   */
  'onBeforeClose'?: () => void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-dialog
   */
  'onClose'?: () => void

}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveDialogComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-dialog
   */
  maxWidth: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-dialog
   */
  classes: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-dialog
   */
  contentStyles: ComputedGetter<any>

}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveDialogMethods extends MethodOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-dialog
   */
  onOutsideClick(): void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-dialog
   */
  onBeforeClose(): void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-dialog
   */
  onClose(): void

}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveDialogSlots = SlotsType<{
  /**
   * The dialog content.
   * @see https://antoniandre.github.io/wave-ui/w-dialog
   */
  'default': () => any

  /**
   * The dialog uses a `w-card`. This slot allows setting the actions slot of the `w-card`.
   * @see https://antoniandre.github.io/wave-ui/w-dialog
   */
  'actions': () => any

}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WDialog = DefineComponent<
  WaveDialogProps,
  {},
  {},
  WaveDialogComputeds,
  {},
  {},
  {},
  WaveDialogEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveDialogProps & WaveDialogEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveDialogProps>,
  WaveDialogSlots
>
