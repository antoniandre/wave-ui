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
export interface WaveConfirmProps {
  /**
   * Applies a color to the main button's background.
   * If no `color` and no `bg-color` are set, and if neither `outline` nor `text` are set to true, the `primary` color will be applied.
   * Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} bgColor
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  bgColor?: string

  /**
   * Applies a color to the main button's text.
   * If no `color` and no `bg-color` are set, and if either `outline` or `text` is set to true, the `primary` color will be applied.
   * Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * Sets the button to a round icon style, containing only an icon.
   * Accepts a string: e.g. `mdi mdi-home`.
   * @property {string} icon
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  icon?: string

  /**
   * TODO: Add Description
   * @property {boolean} disablePrompt
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  disablePrompt?: boolean

  /**
   * For more customization, this prop accepts an object of props to pass down to the main button (all the options that the `w-button` component can handle).
   * @property {{}} mainButton
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  mainButton?: {}

  /**
   * TODO: Add Description
   * @property {string} question - Default: 'Are you sure?'
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  question?: string

  /**
   * Accept either `false` to remove the button, a `String` for the button label, or an `Object` in order to define `w-button` props to further customize it (all the options that the `w-button` component can handle).
   * In addition to all the `w-button` props, the object also accepts a `label` key to customize the button label.
   * The default button label is "Cancel".
   * @property {boolean|{}|string} cancel - Default: undefined
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  cancel?: boolean|{}|string

  /**
   * Accept either a `String` for the button label, or an `Object` in order to define `w-button` props to further customize it (all the options that the `w-button` component can handle).
   * In addition to all the `w-button` props, the object also accepts a `label` key to customize the button label.
   * The default button label is "Confirm".
   * @property {{}|string} confirm
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  confirm?: {}|string

  /**
   * Displays the question inline with the buttons, inside the menu.
   * @property {boolean} inline
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  inline?: boolean

  /**
   * For more customization, this prop accepts an object of props to pass down to the menu (all the options that the `w-menu` component can handle).
   * @property {{}} menu - Default: () => ({})
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  menu?: {}

  /**
   * Accept either `false` for no tooltip (by default), a `String` to display as a tooltip on the main button, or an `Object` in order to define `w-tooltip` props to further customize the tooltip (all the options that the `w-tooltip` component can handle).
   * In addition to all the `w-tooltip` props, the object also accepts a `label` key to provide the tooltip string in the object.
   * By default, the tooltip shows on hover, and at the bottom.
   * @property {boolean|{}|string} tooltip
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  tooltip?: boolean|{}|string

  /**
   * By default the confirmation menu displays an arrow pointing toward the main button.
   * The arrow can simply be removed with this prop.
   * @property {boolean} noArrow
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  noArrow?: boolean

  /**
   * Places the menu above the main button.
   * @property {boolean} top
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  top?: boolean

  /**
   * Places the below the main button.
   * @property {boolean} bottom
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  bottom?: boolean

  /**
   * Places the menu on the left of the main button.
   * @property {boolean} left
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  left?: boolean

  /**
   * Places the menu at the right of the main button.
   * @property {boolean} right
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  right?: boolean

  /**
   * Aligns the top of the menu with the top of the main button.
   * @property {boolean} alignTop
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  alignTop?: boolean

  /**
   * Aligns the bottom of the menu with the bottom of the main button.
   * @property {boolean} alignBottom
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  alignBottom?: boolean

  /**
   * Aligns the left side of the menu with the left side of the main button.
   * @property {boolean} alignLeft
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  alignLeft?: boolean

  /**
   * Aligns the right side of the menu with the right side of the main button.
   * @property {boolean} alignRight
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  alignRight?: boolean

  /**
   * When set to `true`, clicking outside of the menu will not close the menu.
   * @property {boolean} persistent
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  persistent?: boolean

  /**
   * Applies a particular transition to the menu element when showing and hiding.
   * Accepts all the transitions listed in the `transitions` knowledge base page. You can also disable the transition by setting this prop to an empty string.
   * @property {string} transition
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   * @see https://antoniandre.github.io/wave-ui//transitions
   */
  transition?: string

  /**
   * TODO: Add Description
   * @property {boolean} dark
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  dark?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} light
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  light?: boolean

}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveConfirmEmits {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  'onCancel'?: () => void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  'onConfirm'?: () => void

}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveConfirmComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  cancelButton: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  cancelButtonProps: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  confirmButton: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  confirmButtonProps: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  wMenuProps: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  tooltipObject: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  buttonProps: ComputedGetter<any>

}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveConfirmMethods extends MethodOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  onCancel(): void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  onConfirm(): void

}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveConfirmSlots = SlotsType<{
  /**
   * The main button contents.
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  'default': () => any

  /**
   * The question to ask for confirmation in the menu.
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  'question': () => any

  /**
   * The cancel button contents, in the menu.
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  'cancel': () => any

  /**
   * The confirm button contents, in the menu.
   * @see https://antoniandre.github.io/wave-ui/w-confirm
   */
  'confirm': () => any

}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WConfirm = DefineComponent<
  WaveConfirmProps,
  {},
  {},
  WaveConfirmComputeds,
  {},
  {},
  {},
  WaveConfirmEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveConfirmProps & WaveConfirmEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveConfirmProps>,
  WaveConfirmSlots
>
