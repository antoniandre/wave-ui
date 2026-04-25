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
export interface WaveAccordionProps {
  /**
   * `value` in Vue 2.
   * Provide an array of booleans to dictate the state (expanded and collapsed) of all the accordion items. This value gets updated by the accordion when using a v-model.
   * @property {Array<any>} modelValue
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  modelValue?: Array<any>

  /**
   * Applies a text color on each accordion item. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * Applies a background color on each accordion item. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} bgColor
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  bgColor?: string

  /**
   * Required when not using the `w-accordion-item` component, but redundant otherwise.
   * Expecting an array of objects. Each object being an accordion item, it should include a `title` and `content` attributes.
   * Deprecated: you can provide an integer number (call it `x`), to loop through and create `x` items in the accordion. You can then use the individual slots `item-title.x` & `item-content.x` to define each item title and content.
   * @property {Array<any>|number} [items]
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  items: Array<any>|number

  /**
   * Specifies the name of the attribute in each item object where to find the item's desired color string. This allows a different color for each accordion item.
   * @property {string} itemColorKey - Default: 'color'
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  itemColorKey?: string

  /**
   * Specifies the name of the attribute in each item object where to find the item's title string.
   * @property {string} itemTitleKey - Default: 'title'
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  itemTitleKey?: string

  /**
   * Specifies the name of the attribute in each item object where to find the item's content string.
   * @property {string} itemContentKey - Default: 'content'
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  itemContentKey?: string

  /**
   * Applies a custom CSS class (or space separated classes) on every item container (which includes both the title and the content of the item).
   * @property {string} itemClass
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  itemClass?: string

  /**
   * Applies a custom CSS class (or space separated classes) on every title container.
   * @property {string} titleClass
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  titleClass?: string

  /**
   * Applies a custom CSS class (or space separated classes) on every content container.
   * @property {string} contentClass
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  contentClass?: string

  /**
   * Specifies the name of the icon to display in the toggle button. If set to false or empty string, the button will be removed.
   * @property {string|boolean} expandIcon - Default: 'wi-triangle-down'
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  expandIcon?: string|boolean

  /**
   * When set to true, the expand button will be placed at the right end of the item's title.
   * @property {boolean} expandIconRight
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  expandIconRight?: boolean

  /**
   * With this option, the expand icon will initially point to the right, then point down on expand with a clockwise rotation of 90 degrees.
   * @property {boolean} expandIconRotate90
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  expandIconRotate90?: boolean

  /**
   * TODO: Add Description
   * @property {{}} expandIconProps - Default: () => ({})
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  expandIconProps?: {}

  /**
   * TODO: Add Description
   * @property {boolean} expandSingle
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  expandSingle?: boolean

  /**
   * TODO: Add Description
   * @property {string} collapseIcon
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  collapseIcon?: string

  /**
   * TODO: Add Description
   * @property {boolean} shadow
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  shadow?: boolean

  /**
   * TODO: Add Description
   * @property {number} duration - Default: 250
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  duration?: number

  /**
   * TODO: Add Description
   * @property {boolean} dark
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  dark?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} light
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  light?: boolean

  /**
   * When set to `true` and by default, each accordion panel content is kept alive. Which means that the state of the components inside a panel will be maintained when collapsing and expanding it, and the `mounted` hook will only be run the first time it is opened.
   * When explicitly set to `false`, the panel state will be reset upon each reopening, and the `mounted` hook will be run again.
   * The default behavior is to keep panel contents alive, but unmount collapsed panels from the DOM (unless `keepInDom` is used).
   * You can read more about the keep-alive behavior in the `Vue official documentation for keep-alive <i class="w-icon mdi mdi-open-in-new"></i>`.
   * @property {boolean} keepAlive - Default: true
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   * @see https://vuejs.org/guide/built-ins/keep-alive.html
   */
  keepAlive?: boolean

  /**
   * `Will deactivate the `keep-alive` prop.` When set to `true`, every accordion panel content stays in the DOM when collapsed (hidden with `v-show`), unless the item is removed.
   * Note that the `mounted` hook will be run once per panel, as soon as it is appended to the DOM.
   * The default behavior is to keep panel contents alive when `keepAlive` is true, but unmount collapsed panels from the DOM.
   * @property {boolean} keepInDom - Default: false
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  keepInDom?: boolean

  /**
   * When `true`, disables the accordion title pointer ripple for all items.
   * Global default still follows `$waveui.config.ripple`. Per-item override: set `no-ripple` on `w-accordion-item`.
   * @property {boolean} noRipple
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  noRipple?: boolean
}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveAccordionEmits {
  /**
   * Emitted each time the state of the accordion changes (when an item is expanded or collapsed).<br>Updates the v-model value in Vue 2.x only.
   * @param {any} renameMe1 - An array of booleans representing the expanded state of each accordion item.
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  'onInput'?: (renameMe1: any) => void

  /**
   * Emitted each time the state of the accordion changes (when an item is expanded or collapsed).<br>Updates the v-model value in Vue 3 only.
   * @param {any} renameMe1 - An array of booleans representing the expanded state of each accordion item.
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  'onUpdate:modelValue'?: (renameMe1: any) => void

  /**
   * Emitted on each accordion item title focus.
   * @param {any} renameMe1 - The focused accordion item object.
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  'onFocus'?: (renameMe1: any) => void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  'onItemExpand'?: () => void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  'onItemCollapsed'?: () => void
}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveAccordionComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  accordionClasses: ComputedGetter<any>
}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveAccordionMethods extends MethodOptions {
  /**
   * TODO: Add Description
   * @param {any} item
   * @param {any} e
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  toggleItem(item: any, e: any): void

  /**
   * TODO: Add Description
   * @param {any} item
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  onEndOfCollapse(item: any): void

  /**
   * TODO: Add Description
   * @param {any} item
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  getOriginalItem(item: any): void

  /**
   * TODO: Add Description
   * @param {any} item
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  itemClasses(item: any): void
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveAccordionSlots = SlotsType<{
  /**
   * Provide a custom title for every item. Applies to all the items, but can be overridden by the `item-title.x` slot.
   * @param {any} item The current item object.
   * @param {any} index The item index in the array of items. Starts at 1 to be consistent with the `item.x` slot.
   * @param {any} expanded A boolean representing the expanded state of the accordion item.
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  'item-title': (_: { item: any, index: any, expanded: any }) => any

  /**
   * Provide a custom content for every item. Applies to all the items, but can be overridden by the `item-content.x` slot.
   * @param {any} item The current item object.
   * @param {any} index The item index in the array of items. Starts at 1 to be consistent with the `item.x` slot.
   * @param {any} expanded A boolean representing the expanded state of the accordion item.
   * @see https://antoniandre.github.io/wave-ui/w-accordion
   */
  'item-content': (_: { item: any, index: any, expanded: any }) => any
}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WAccordion = DefineComponent<
  WaveAccordionProps,
  {},
  {},
  WaveAccordionComputeds,
  WaveAccordionMethods,
  {},
  {},
  WaveAccordionEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveAccordionProps & WaveAccordionEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveAccordionProps>,
  WaveAccordionSlots
>
