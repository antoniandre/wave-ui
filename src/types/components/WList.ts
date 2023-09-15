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
export interface WaveListProps {
  /**
   * Expecting an array of objects. Each object being a list item, it should include at least a `label` attribute.
   * Alternatively, you can provide an integer number (call it `x`), to loop through and create `x` items in the list. You can then use the individual slots `item-title.x` & `item-content.x` to define each item.
   * @property {Array<any>|number} [items]
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  items: Array<any>|number

  /**
   * ``value` in Vue 2.`
   * Provide an array of values if `multiple` is set to true, or a single value otherwise, to dictate the selected state of the list items.
   * Also accepts full objects when `return-object` is set to true.
   * This value gets updated when using a v-model.
   * @property {any} modelValue
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  modelValue?: any

  /**
   * Sets the type of list to checklist: each item has a checkbox.
   * @property {boolean} checklist
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  checklist?: boolean

  /**
   * When `checklist` is true, displays round checkboxes instead of square ones.
   * @property {boolean} roundCheckboxes
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  roundCheckboxes?: boolean

  /**
   * When selectable, allows multiple selections. A checklist always has multiple selections.
   * @property {boolean} multiple
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  multiple?: boolean

  /**
   * When set to true, will add an id on the list and all the list items.
   * Useful for accessibility aria fields for instance.
   * @property {boolean|string} addIds
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  addIds?: boolean|string

  /**
   * On mouseover, highlights the list items with the given `color`. Also adds a small vertical padding on the list items to space them.
   * @property {boolean} hover
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  hover?: boolean

  /**
   * Applies a color to the list items's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color
   * @see https://antoniandre.github.io/wave-ui/w-list
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * Applies a color to the selected list items's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} selectionColor
   * @see https://antoniandre.github.io/wave-ui/w-list
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  selectionColor?: string

  /**
   * Applies a color to the list items's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} bgColor
   * @see https://antoniandre.github.io/wave-ui/w-list
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  bgColor?: string

  /**
   * Set the list as a navigation menu. All the items having a `route` attribute will be converted to link or router-link if vue-router is present.
   * @property {boolean} nav
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  nav?: boolean

  /**
   * A global icon string to apply to all the list items. E.g. `mdi mdi-home`.
   * @property {string} icon - Default: ''
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  icon?: string

  /**
   * The property name (aka "key") in each item object where to find the label of the item.
   * @property {string} itemLabelKey - Default: 'label'
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  itemLabelKey?: string

  /**
   * The property name (aka "key") in each item object where to find the value of the item.
   * @property {string} itemValueKey - Default: 'value'
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  itemValueKey?: string

  /**
   * The property name (aka "key") in each item object where to find an optional CSS class for this item.
   * @property {string} itemClassKey - Default: 'class'
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  itemClassKey?: string

  /**
   * The property name (aka "key") in each item object where to find an optional color for this item.
   * @property {string} itemColorKey - Default: 'color'
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  itemColorKey?: string

  /**
   * The property name (aka "key") in each item object where to find an optional route for this item, to be used in `nav` lists.
   * Since we usually set a `to` prop for router-links/nuxt-links, and `href` for `<a>` tags, the `route` option unifies both.
   * @property {string} itemRouteKey - Default: 'route'
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  itemRouteKey?: string

  /**
   * Applies a custom CSS class to every list item.
   * @property {string} itemClass
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  itemClass?: string

  /**
   * TODO: Add Description
   * @property {number} depth - Default: 0
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  depth?: number

  /**
   * The current list selection is returned via the `value` prop or `v-model` as an array of full objects or a single full object (returning the original as given) when `multiple` is set to false.
   * @property {boolean} returnObject
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  returnObject?: boolean

  /**
   * Once at least one item is selected, prevents the list to have no selection. Clicking an item when only this one is selected will not unselect it.
   * @property {boolean} noUnselect
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  noUnselect?: boolean

  /**
   * Allows the navigation through the list items with the keyboard arrows up and down, when set to true and when the items are selectable (the `w-list` has a `value` or `v-model`, or is a `nav` or `checklist`).
   * @property {boolean} arrowsNavigation
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  arrowsNavigation?: boolean

}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveListEmits {
  /**
   * Emitted each time the state of the list changes.<br>Updates the <code>v-model</code> value in Vue 2.x only.
   * @param {any} renameMe1 - An array of values of all the selected list items.
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  'onInput'?: (renameMe1: any) => void

  /**
   * Emitted each time the state of the list changes (when an item is selected or unselected).<br>Updates the v-model value in Vue 3 only.
   * @param {any} renameMe1 - An array of values of all the selected list items.
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  'onUpdate:modelValue'?: (renameMe1: any) => void

  /**
   * Emitted on each list item click.
   * @param {any} renameMe1 - The clicked list item's object.
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  'onItemClick'?: (renameMe1: any) => void

  /**
   * Emitted on each list item selection or unselection (via click or keyboard <kbd>enter</kbd> key when focused).
   * @param {any} renameMe1 - The selected list item's object.
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  'onItemSelect'?: (renameMe1: any) => void

  /**
   * Emitted on <kbd>escape</kbd> key down, when the focus is on any of the list items.
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  'onKeydown:escape'?: () => void

  /**
   * Emitted on <kbd>enter</kbd> key down, when the focus is on any of the list items.
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  'onKeydown:enter'?: () => void

}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveListComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  hasRouter: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  listId: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  selectedItems: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  enabledItemsIndexes: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  isMultipleSelect: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  isSelectable: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  SelectionColor: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  classes: ComputedGetter<any>

}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveListMethods extends MethodOptions {
  /**
   * TODO: Add Description
   * @param {any} item
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  getItemValue(item: any): void

  /**
   * TODO: Add Description
   * @param {any} item
   * @param {any} forcedValue
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  selectItem(item: any, forcedValue: any): void

  /**
   * TODO: Add Description
   * @param {any} item
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  liLabelClasses(item: any): void

  /**
   * TODO: Add Description
   * @param {any} li
   * @param {any} index
   * @param {any} selected
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  liLabelProps(li: any, index: any, selected: any): void

  /**
   * TODO: Add Description
   * @param {any} items
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  checkSelection(items: any): void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  emitSelection(): void

  /**
   * TODO: Add Description
   * @param {any} index
   * @param {any} [next] - true
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  focusPrevNextItem(index: any, next?: any): void

  /**
   * TODO: Add Description
   * @param {any} li
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  cleanLi(li: any): void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  refreshListItems(): void

  /**
   * TODO: Add Description
   * @param {any} selection
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  applySelectionOnItems(selection: any): void

}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveListSlots = SlotsType<{
  /**
   * TODO: Add Description
   * @param {any} item TODO: Describe me!
   * @param {any} index TODO: Describe me!
   * @param {any} selected TODO: Describe me!
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  'default': (_: { item: any, index: any, selected: any }) => any

  /**
   * `x` is an integer starting at `1`.
   * Provide a custom content for a single item: the item at the index `x`.
   * @param {any} item The current item object.
   * @param {any} index The item index in the list. Starts at 1 to be consistent with the slot name.
   * @param {any} selected A boolean representing the selected state of the current item.
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  'item.x': (_: { item: any, index: any, selected: any }) => any

  /**
   * Provide a custom content for every item. Applies to all the items, but can be overridden by the `item.x` slot.
   * @param {any} item The current item object.
   * @param {any} index The item index in the list. Starts at 1 to be consistent with the `item.x` slot.
   * @param {any} selected A boolean representing the selected state of the current item.
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  'item': (_: { item: any, index: any, selected: any }) => any

} & {
  /**
   * `x` is an integer starting at `1`.
   * Provide a custom content for a single item: the item at the index `x`.
   * @param {any} item The current item object.
   * @param {any} index The item index in the list. Starts at 1 to be consistent with the slot name.
   * @param {any} selected A boolean representing the selected state of the current item.
   * @see https://antoniandre.github.io/wave-ui/w-list
   */
  [k in `item.${number}`]: (_: { item: any, index: any, selected: any }) => any
}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WList = DefineComponent<
  WaveListProps,
  {},
  {},
  WaveListComputeds,
  WaveListMethods,
  {},
  {},
  WaveListEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveListProps & WaveListEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveListProps>,
  WaveListSlots
>
