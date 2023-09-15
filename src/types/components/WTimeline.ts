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
export interface WaveTimelineProps {
  /**
   * The items to display in the timeline. Usually an array of objects containing at least a `title`.
   * In some cases you may also provide an integer (items count) to loop through. Each item can then be defined in the template using the `item.x` slot for each iteration of this integer.
   * @property {Array<any>|number} [items]
   * @see https://antoniandre.github.io/wave-ui/w-timeline
   */
  items: Array<any>|number

  /**
   * Applies a color to both the item bullet or icon, and the item title, on each item.
   * Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color
   * @see https://antoniandre.github.io/wave-ui/w-timeline
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * A global icon string to apply to all the items.
   * @property {string} icon
   * @see https://antoniandre.github.io/wave-ui/w-timeline
   */
  icon?: string

  /**
   * The property name (aka "key") in each item object where to find the title of the item.
   * @property {string} itemTitleKey - Default: 'title'
   * @see https://antoniandre.github.io/wave-ui/w-timeline
   */
  itemTitleKey?: string

  /**
   * The property name (aka "key") in each item object where to find the content of the item.
   * @property {string} itemContentKey - Default: 'content'
   * @see https://antoniandre.github.io/wave-ui/w-timeline
   */
  itemContentKey?: string

  /**
   * The property name (aka "key") in each item object where to find the icon of the item.
   * @property {string} itemIconKey - Default: 'icon'
   * @see https://antoniandre.github.io/wave-ui/w-timeline
   */
  itemIconKey?: string

  /**
   * The property name (aka "key") in each item object where to find the color of the item.
   * @property {string} itemColorKey - Default: 'color'
   * @see https://antoniandre.github.io/wave-ui/w-timeline
   */
  itemColorKey?: string

  /**
   * TODO: Add Description
   * @property {boolean} dark
   * @see https://antoniandre.github.io/wave-ui/w-timeline
   */
  dark?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} light
   * @see https://antoniandre.github.io/wave-ui/w-timeline
   */
  light?: boolean
}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveTimelineEmits {
}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveTimelineComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-timeline
   */
  classes: ComputedGetter<any>
}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveTimelineMethods extends MethodOptions {
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveTimelineSlots = SlotsType<{
  /**
   * Provide a custom template for every item. Applies to all the items, but can be overridden by the `item.x` slot.
   * @param {any} item The current item object.
   * @param {any} index The item index in the array of items. Starts at 1 to be consistent with the `item.x` slot.
   * @see https://antoniandre.github.io/wave-ui/w-timeline
   */
  'item': (_: { item: any, index: any }) => any

  /**
   * `x` is an integer starting at `1`.
   * Provide a custom template for a single item: the item at the index `x`.
   * @param {any} item The current item object.
   * @param {any} index The item index in the array of items. Starts at 1 to be consistent with the `item.x` slot.
   * @see https://antoniandre.github.io/wave-ui/w-timeline
   */
  'item.x': (_: { item: any, index: any }) => any
} & {
  /**
   * `x` is an integer starting at `1`.
   * Provide a custom template for a single item: the item at the index `x`.
   * @param {any} item The current item object.
   * @param {any} index The item index in the array of items. Starts at 1 to be consistent with the `item.x` slot.
   * @see https://antoniandre.github.io/wave-ui/w-timeline
   */
  [k in `item${number}`]: (_: { item: any, index: any }) => any
}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WTimeline = DefineComponent<
  WaveTimelineProps,
  {},
  {},
  WaveTimelineComputeds,
  WaveTimelineMethods,
  {},
  {},
  WaveTimelineEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveTimelineProps & WaveTimelineEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveTimelineProps>,
  WaveTimelineSlots
>
