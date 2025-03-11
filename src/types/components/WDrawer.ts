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
export interface WaveDrawerProps {
  /**
   * ``value` in Vue 2.`
   * This prop controls the visibility of the drawer. Any truthy value will show the drawer whereas any falsy value will hide it.
   * @property {boolean} modelValue - Default: true
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  modelValue?: boolean

  /**
   * Places the drawer at the left of the screen, or at the left of its container when the `absolute` prop is set to true.
   * @property {boolean} left
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  left?: boolean

  /**
   * Places the drawer at the right of the screen, or at the right of its container when the `absolute` prop is set to true.
   * @property {boolean} right
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  right?: boolean

  /**
   * Places the drawer at the top of the screen, or at the top of its container when the `absolute` prop is set to true.
   * @property {boolean} top
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  top?: boolean

  /**
   * Places the drawer at the bottom of the screen, or at the bottom of its container when the `absolute` prop is set to true.
   * @property {boolean} bottom
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  bottom?: boolean

  /**
   * When set to true, clicking outside of the drawer or pressing the escape key will not close the drawer.
   * A bounce animation will give the user a feedback that this drawer needs attention and cannot be closed.
   * @property {boolean} persistent
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  persistent?: boolean

  /**
   * When this and the `persistent` props are set to true, clicking outside of the drawer or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user).
   * @property {boolean} persistentNoAnimation
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  persistentNoAnimation?: boolean

  /**
   * Fits the drawer to its content (sets the width and height to auto).
   * @property {boolean} fitContent
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  fitContent?: boolean

  /**
   * Sets a width on the drawer when its position is `left` or `right`.
   * Accepts a string made of a value and a unit (e.g. `2.5em`) or a number (e.g. `45`) that will be a pixel value.
   * @property {number|string|boolean} width
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  width?: number|string|boolean

  /**
   * Sets a height on the drawer when its position is `top` or `bottom`.
   * Accepts a string made of a value and a unit (e.g. `2.5em`) or a number (e.g. `45`) that will be a pixel value.
   * @property {number|string|boolean} height
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  height?: number|string|boolean

  /**
   * Applies a z-index (positive or negative integer) to the drawer.
   * @property {number|string|boolean} zIndex
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  zIndex?: number|string|boolean

  /**
   * Applies a color to the drawer's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * Applies a color to the drawer's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} bgColor
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  bgColor?: string

  /**
   * Removes the default full screen overlay underneath the open drawer.
   * @property {boolean} noOverlay
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  noOverlay?: boolean

  /**
   * The `push-content` prop can be used on `left` and `right` positions.
   * It will allow the drawer to push the content either on the left or right when it's open.
   * To use the push-content layout, an explicit drawer `width` is required (don\'t only set a width via CSS). Any valid CSS width will work.
   * The pushable content should be provided via the `pushable` slot.
   * @property {boolean} pushContent
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  pushContent?: boolean

  /**
   * Sets the CSS position of the drawer container to `absolute`.
   * @property {boolean} absolute
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  absolute?: boolean

  /**
   * Provide a custom background color for the drawer background overlay (`rgba(0, 0, 0, 0.3)` by default).
   * Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} overlayColor
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  overlayColor?: string

  /**
   * Provide a custom opacity for the drawer background overlay.
   * @property {number|string|boolean} overlayOpacity
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  overlayOpacity?: number|string|boolean

  /**
   * Applies a custom CSS class to the drawer container.
   * @property {string} drawerClass
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  drawerClass?: string

  /**
   * TODO: Add Description
   * @property {string} tag - Default: 'aside'
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  tag?: string

  /**
   * TODO: Add Description
   * @property {boolean} dark
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  dark?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} light
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  light?: boolean
}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveDrawerEmits {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  'onInput'?: () => void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  'onUpdate:modelValue'?: (modelValue: boolean) => void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  'onBeforeClose'?: () => void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  'onClose'?: () => void
}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveDrawerComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  size: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  sizeProperty: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  position: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  wrapperClasses: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  drawerClasses: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  trackStyles: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  styles: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  unmountDrawer: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  transitionName: ComputedGetter<any>
}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveDrawerMethods extends MethodOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  onBeforeClose(): void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  onClose(): void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  onOutsideClick(): void
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveDrawerSlots = SlotsType<{
  /**
   * When using the `push-content` prop, defines the outside HTML content to be pushed by the drawer when it opens.
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  'pushable': () => any

  /**
   * The drawer content.
   * @see https://antoniandre.github.io/wave-ui/w-drawer
   */
  'default': () => any
}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WDrawer = DefineComponent<
  WaveDrawerProps,
  {},
  {},
  WaveDrawerComputeds,
  WaveDrawerMethods,
  {},
  {},
  WaveDrawerEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveDrawerProps & WaveDrawerEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveDrawerProps>,
  WaveDrawerSlots
>
