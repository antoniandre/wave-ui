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
export interface WaveMenuProps {
  /**
   * ``value` in Vue 2.`
   * This prop controls the visibility of the menu. Any truthy value will show the menu whereas any falsy value will hide it.
   * @property {any} modelValue
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  modelValue?: any

  /**
   * Triggers the menu apparition on activator hover instead of click by default. A mouseleave on the activator will hide the menu.
   * @property {boolean} showOnHover
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  showOnHover?: boolean

  /**
   * Hides the menu when a click is made inside the menu. For instance when selecting a list item inside a menu.
   * @property {boolean} hideOnMenuClick
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  hideOnMenuClick?: boolean

  /**
   * Applies a color to the menu's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color
   * @see https://antoniandre.github.io/wave-ui/w-menu
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * Applies a color to the menu's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} bgColor
   * @see https://antoniandre.github.io/wave-ui/w-menu
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  bgColor?: string

  /**
   * Applies a drop shadow to the menu element.
   * @property {boolean} shadow
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  shadow?: boolean

  /**
   * By default, the menu layout is a `w-card`. To have more flexibility, you can set this option to `true`.
   * @property {boolean} custom
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  custom?: boolean

  /**
   * Removes the default border-radius and sets sharp edges on the menu.
   * @property {boolean} tile
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  tile?: boolean

  /**
   * Sets a maximum border-radius on the corners of the menu, giving it a round look.
   * @property {boolean} round
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  round?: boolean

  /**
   * Removes the default border from the menu element.
   * @property {boolean} noBorder
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  noBorder?: boolean

  /**
   * Applies a particular transition to the menu element when showing and hiding.
   * Accepts all the transitions listed in the `transitions` knowledge base page. You can also disable the transition by setting this prop to an empty string.
   * @property {string} transition
   * @see https://antoniandre.github.io/wave-ui/w-menu
   * @see https://antoniandre.github.io/wave-ui/transitions
   */
  transition?: string

  /**
   * Provide custom CSS classes for the menu element.
   * @property {string|{}|Array<any>} menuClass
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  menuClass?: string|{}|Array<any>

  /**
   * Provide custom CSS classes for the menu's title when using the default card layout (when not using the `custom` prop).
   * @property {string|{}|Array<any>} titleClass
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  titleClass?: string|{}|Array<any>

  /**
   * Provide custom CSS classes for the menu's content when using the default card layout (when not using the `custom` prop).
   * @property {string|{}|Array<any>} contentClass
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  contentClass?: string|{}|Array<any>

  /**
   * Adds a small triangle on the edge of the menu, pointing toward the activator.
   * @property {boolean} arrow
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  arrow?: boolean

  /**
   * Sets a min-width on the menu.
   * Accepts a string made of a value and a unit (e.g. `2.5em`) or a number (e.g. `45`) that will be a pixel value.
   * @property {number|string} minWidth
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  minWidth?: number|string

  /**
   * Displays a full screen overlay underneath the menu (uses the `w-overlay` component).
   * @property {boolean} overlay
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  overlay?: boolean

  /**
   * Provide custom CSS classes for the `w-overlay` component.
   * @property {string|{}|Array<any>} overlayClass
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  overlayClass?: string|{}|Array<any>

  /**
   * An object of props to pass down to the `w-overlay` component for more control.
   * @property {{}} overlayProps
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  overlayProps?: {}

  /**
   * When set to `true`, clicking outside of the menu will not close the menu.
   * @property {boolean} persistent
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  persistent?: boolean

  /**
   * A delay - in milliseconds - before opening the menu.
   * A small delay may help the menu position computing if the menu content changes at the moment the activator is activated. For instance, when defining multiple activators opening the same menu with different content.
   * @property {number} delay
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  delay?: number

  /**
   * TODO: Add Description
   * @property {boolean} dark
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  dark?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} light
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  light?: boolean

}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveMenuEmits {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  'onInput'?: () => void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  'onUpdate:modelValue'?: () => void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  'onOpen'?: () => void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  'onClose'?: () => void

}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveMenuComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  transitionName: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  menuMinWidth: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  menuClasses: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  titleClasses: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  contentClasses: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  overlayClasses: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  classes: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  styles: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  activatorEventHandlers: ComputedGetter<any>

}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveMenuMethods extends MethodOptions {
  /**
   * TODO: Add Description
   * @param {any} e
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  toggle(e: any): void

}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveMenuSlots = SlotsType<{
  /**
   * `This slot is required and must have the `v-on="on"` directive set on it for the menu to toggle correctly.`
   * The activator can be any visible DOM element or mounted component.
   * @param {any} on TODO: Describe me!
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  'activator': (_: { on: any }) => any

  /**
   * The menu content.
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  'default': () => any

  /**
   * By default (when `custom` is set to false), the menu uses a `w-card`. This slot allows a custom title for the `w-card`.
   * @see https://antoniandre.github.io/wave-ui/w-menu
   */
  'title': () => any

}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WMenu = DefineComponent<
  WaveMenuProps,
  {},
  {},
  WaveMenuComputeds,
  WaveMenuMethods,
  {},
  {},
  WaveMenuEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveMenuProps & WaveMenuEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveMenuProps>,
  WaveMenuSlots
>
