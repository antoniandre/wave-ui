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
export interface WaveToolbarProps {
  /**
   * Applies a color to the toolbar's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color
   * @see https://antoniandre.github.io/wave-ui/w-toolbar
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * Applies a color to the toolbar's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} bgColor
   * @see https://antoniandre.github.io/wave-ui/w-toolbar
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  bgColor?: string

  /**
   * Sets the CSS position of the toolbar to `absolute` and relative to the closest parent with a position (like normal CSS).
   * @property {boolean} absolute
   * @see https://antoniandre.github.io/wave-ui/w-toolbar
   */
  absolute?: boolean

  /**
   * Sets the CSS position of the toolbar to `fixed`.
   * @property {boolean} fixed
   * @see https://antoniandre.github.io/wave-ui/w-toolbar
   */
  fixed?: boolean

  /**
   * Only applies to horizontal toolbars and can't be combined with the `right` option.
   * If applied together with the `absolute` or `fixed` option, positions the horizontal toolbar at the bottom. By default the toolbar will be at the top.
   * This option also applies a border at the top of the toolbar (unless the `no-border` prop is set to true), and removes the default bottom border.
   * @property {boolean} bottom
   * @see https://antoniandre.github.io/wave-ui/w-toolbar
   */
  bottom?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} vertical
   * @see https://antoniandre.github.io/wave-ui/w-toolbar
   */
  vertical?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} left
   * @see https://antoniandre.github.io/wave-ui/w-toolbar
   */
  left?: boolean

  /**
   * Only applies to vertical toolbars and can't be combined with the `bottom` option.
   * If applied together with the `absolute` or `fixed` option, positions the vertical toolbar on the right side. By default the toolbar will be on the left.
   * This option also applies a border at the left of the toolbar (unless the `no-border` prop is set to true), and removes the default right border.
   * @property {boolean} right
   * @see https://antoniandre.github.io/wave-ui/w-toolbar
   */
  right?: boolean

  /**
   * Only applies to vertical toolbars.
   * Sets a height on the toolbar.
   * Accepts a string made of a value and a unit (e.g. `2.5em`) or a number (e.g. `45`) that will be considered a pixel value.
   * @property {number|string} width - Default: null
   * @see https://antoniandre.github.io/wave-ui/w-toolbar
   */
  width?: number|string

  /**
   * Only applies to horizontal toolbars.
   * Sets a height on the toolbar.
   * Accepts a string made of a value and a unit (e.g. `2.5em`) or a number (e.g. `45`) that will be considered a pixel value.
   * @property {number|string} height - Default: null
   * @see https://antoniandre.github.io/wave-ui/w-toolbar
   */
  height?: number|string

  /**
   * Removes the default border (top or bottom) from the toolbar.
   * @property {boolean} noBorder
   * @see https://antoniandre.github.io/wave-ui/w-toolbar
   */
  noBorder?: boolean

  /**
   * Applies a drop shadow to the toolbar.
   * @property {boolean} shadow
   * @see https://antoniandre.github.io/wave-ui/w-toolbar
   */
  shadow?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} dark
   * @see https://antoniandre.github.io/wave-ui/w-toolbar
   */
  dark?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} light
   * @see https://antoniandre.github.io/wave-ui/w-toolbar
   */
  light?: boolean
}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveToolbarEmits {
}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveToolbarComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-toolbar
   */
  toolbarHeight: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-toolbar
   */
  toolbarWidth: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-toolbar
   */
  classes: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-toolbar
   */
  styles: ComputedGetter<any>
}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveToolbarMethods extends MethodOptions {
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveToolbarSlots = SlotsType<{
  /**
   * The toolbar content.
   * @see https://antoniandre.github.io/wave-ui/w-toolbar
   */
  'default': () => any
}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WToolbar = DefineComponent<
  WaveToolbarProps,
  {},
  {},
  WaveToolbarComputeds,
  WaveToolbarMethods,
  {},
  {},
  WaveToolbarEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveToolbarProps & WaveToolbarEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveToolbarProps>,
  WaveToolbarSlots
>
