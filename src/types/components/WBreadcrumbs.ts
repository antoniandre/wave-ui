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
export interface WaveBreadcrumbsProps {
  /**
   * An array of items to display in the breadcrumbs. Each item must be an object containing a `label` and a `route`.
   * If no route is found the item will be wrapped in a span instead of a link.
   * @property {Array<any>} [items]
   * @see https://antoniandre.github.io/wave-ui/w-breadcrumbs
   */
  items: Array<any>

  /**
   * When set to true, and if the last item has a provided route, the last item will be a link.
   * @property {boolean} linkLastItem
   * @see https://antoniandre.github.io/wave-ui/w-breadcrumbs
   */
  linkLastItem?: boolean

  /**
   * Applies a text color to the breadcrumb's links.
   * Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color
   * @see https://antoniandre.github.io/wave-ui/w-breadcrumbs
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * Applies a text color (also applies to icons) to the breadcrumb's separators.
   * Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} separatorColor - Default: 'grey-light1'
   * @see https://antoniandre.github.io/wave-ui/w-breadcrumbs
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  separatorColor?: string

  /**
   * Provide a custom icon for the separators.
   * @property {string} icon - Default: 'wi-chevron-right'
   * @see https://antoniandre.github.io/wave-ui/w-breadcrumbs
   */
  icon?: string

  /**
   * The property name (aka "key") in each item object where to find the link of the item.
   * @property {string} itemRouteKey - Default: 'route'
   * @see https://antoniandre.github.io/wave-ui/w-breadcrumbs
   */
  itemRouteKey?: string

  /**
   * The property name (aka "key") in each item object where to find the label of the item.
   * @property {string} itemLabelKey - Default: 'label'
   * @see https://antoniandre.github.io/wave-ui/w-breadcrumbs
   */
  itemLabelKey?: string

  /**
   * Sets the font size of the items.
   * @property {boolean} xs
   * @see https://antoniandre.github.io/wave-ui/w-breadcrumbs
   */
  xs?: boolean

  /**
   * Sets the font size of the items.
   * @property {boolean} sm
   * @see https://antoniandre.github.io/wave-ui/w-breadcrumbs
   */
  sm?: boolean

  /**
   * Sets the font size of the items.
   * @property {boolean} md
   * @see https://antoniandre.github.io/wave-ui/w-breadcrumbs
   */
  md?: boolean

  /**
   * Sets the font size of the items.
   * @property {boolean} lg
   * @see https://antoniandre.github.io/wave-ui/w-breadcrumbs
   */
  lg?: boolean

  /**
   * Sets the font size of the items.
   * @property {boolean} xl
   * @see https://antoniandre.github.io/wave-ui/w-breadcrumbs
   */
  xl?: boolean
}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveBreadcrumbsEmits {
}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveBreadcrumbsComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-breadcrumbs
   */
  hasRouter: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-breadcrumbs
   */
  size: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-breadcrumbs
   */
  classes: ComputedGetter<any>
}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveBreadcrumbsMethods extends MethodOptions {
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveBreadcrumbsSlots = SlotsType<{
  /**
   * Provide a custom template for the breadcrumbs' separator.
   * @param {any} index The separator index in the array of items. Starts at 1.
   * @see https://antoniandre.github.io/wave-ui/w-breadcrumbs
   */
  'separator': (_: { index: any }) => any

  /**
   * Provide a custom template for the breadcrumbs' item.
   * @param {any} item The current item object.
   * @param {any} index The item index in the array of items. Starts at 1.
   * @param {any} isLast A boolean indicating if the current item is the last one. May be useful if you want a particular template for the current page.
   * @param {any} key TODO: Describe me!
   * @see https://antoniandre.github.io/wave-ui/w-breadcrumbs
   */
  'item': (_: { item: any, index: any, isLast: any, key: any }) => any
}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WBreadcrumbs = DefineComponent<
  WaveBreadcrumbsProps,
  {},
  {},
  WaveBreadcrumbsComputeds,
  WaveBreadcrumbsMethods,
  {},
  {},
  WaveBreadcrumbsEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveBreadcrumbsProps & WaveBreadcrumbsEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveBreadcrumbsProps>,
  WaveBreadcrumbsSlots
>
