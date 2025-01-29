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

import { WaveMenuProps } from './WMenu'

// ----------------------------------------------------------------------------
// Additional Types
// ----------------------------------------------------------------------------
export interface WSelectDropdownItem {
  /**
   * The *default* key to access the label of the item.
   * This can be overridden using the `item-label-key` property.
   * @property {string} label
   * @see https://antoniandre.github.io/wave-ui/w-select#item-label-key-prop
   */
  label?: string

  /**
   * The *default* key to access the color of the item.
   * This can be overridden using the `item-color-key` property.
   * @property {string} color
   * @see https://antoniandre.github.io/wave-ui/w-select#item-color-key-prop
   */
  color?: string

  /**
   * The *default* key to access the value of the item.
   * This can be overridden using the `item-value-key` property.
   * @property {string} value
   * @see https://antoniandre.github.io/wave-ui/w-select#item-value-key-prop
   */
  value?: string

  /**
   * Whether or not this list item is disabled.
   * @property {boolean} disabled
   * @see https://antoniandre.github.io/wave-ui/w-select#disabled-and-readonly
   */
  disabled?: boolean

  /**
   * You can also have any additional data attached to the item.
   * It will not affect the default behavior of the select component.
   * @see https://antoniandre.github.io/wave-ui/w-select#items-prop
   */
  [key: string]: any
}

// ----------------------------------------------------------------------------
// Props
// ----------------------------------------------------------------------------
export interface WaveSelectProps {
  /**
   * Expecting an array of objects. Each object being a select list item, it should include at least a `label` attribute.
   * @property {Array<WSelectDropdownItem} [items]
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  items: Array<WSelectDropdownItem>

  /**
   * `value` in Vue 2.
   * The current selection of the select field.
   * Gets updated on selection change.
   * @property {any} modelValue
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  modelValue?: any

  /**
   * Allows multiple selections. When set to `true`, the list of choices will stay open after selecting an item.
   * @property {boolean} multiple
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  multiple?: boolean

  /**
   * Provide a placeholder for the select field. If a label is positioned inside, it will be moved above the field so it doesn't overlap.
   * @property {string} placeholder
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  placeholder?: string

  /**
   * Sets a visible label for the select field.
   * @property {string} label
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  label?: string

  /**
   * Sets the position of the label to one of the following positions: 'left\', \'right\', \'inside\'.
   * @property {string} labelPosition - Default: 'inside'
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  labelPosition?: string

  /**
   * Adds an icon on the left inside the select field.
   * Accepts a string: e.g. `mdi mdi-eye`.
   * @property {string} innerIconLeft
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  innerIconLeft?: string

  /**
   * Adds an icon on the right inside the select field.
   * Accepts a string: e.g. `mdi mdi-eye`.
   * @property {string} innerIconRight - Default: 'wi-triangle-down'
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  innerIconRight?: string

  /**
   * Prevents moving the label above the select field when the `labelPosition` is equal to `inside`. If a placeholder is present, it will be hidden and the label will be displayed instead.
   * When a value is set the static label is replaced by the textual value.
   * @property {boolean} staticLabel
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  staticLabel?: boolean

  /**
   * The property name (aka "key") in each item object where to find the label of the item.
   * @property {string} itemLabelKey - Default: 'label'
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  itemLabelKey?: string

  /**
   * The property name (aka "key") in each item object where to find the color of the item.
   * By default, the `color` key of the current item will be used to render this item in this color.
   * You can also provide an empty string to disable this feature.
   * @property {string} itemColorKey - Default: 'color'
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  itemColorKey?: string

  /**
   * The property name (aka "key") in each item object where to find the value of the item.
   * @property {string} itemValueKey - Default: 'value'
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  itemValueKey?: string

  /**
   * Applies a custom CSS class to each select list item.
   * @property {string} itemClass
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  itemClass?: string

  /**
   * Applies a custom CSS class to the select list's floating menu element.
   * @property {string} menuClass
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  menuClass?: string

  /**
   * TODO: Add Description
   * @property {string} color - Default: 'primary'
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  color?: string

  /**
   * TODO: Add Description
   * @property {string} bgColor
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  bgColor?: string

  /**
   * TODO: Add Description
   * @property {string} labelColor - Default: 'primary'
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  labelColor?: string

  /**
   * TODO: Add Description
   * @property {string} selectionColor - Default: 'primary'
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  selectionColor?: string

  /**
   * TODO: Add Description
   * @property {boolean} outline
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  outline?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} round
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  round?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} shadow
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  shadow?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} tile
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  tile?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} returnObject
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  returnObject?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} noUnselect
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  noUnselect?: boolean

  /**
   * TODO: Add Description
   * @property {WaveMenuProps} menuProps
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  menuProps?: WaveMenuProps

  /**
   * TODO: Add Description
   * @property {boolean} dark
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  dark?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} light
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  light?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} fitToContent
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  fitToContent?: boolean
}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveSelectEmits {
  /**
   * Emitted each time the selected item(s) changes.<br>Updates the v-model value in Vue 2.x only.
   * @param {any} selectedValues - The new selected value(s). Array if <code>multiple</code> is set to <code>true</code>, single value otherwise.
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  'onInput'?: (selectedValues: any) => void

  /**
   * Emitted each time the selected item(s) changes.<br>Updates the v-model value in Vue 3 only.
   * @param {any} selectedValues - The new selected value(s). Array if <code>multiple</code> is set to <code>true</code>, single value otherwise.
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  'onUpdate:modelValue'?: (selectedValues: any) => void

  /**
   * Emitted on select focus.
   * @param {Event} e - The associated focus DOM event.
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  'onFocus'?: (e: Event) => void

  /**
   * Emitted on select blur.
   * @param {Event} e - The associated blur DOM event.
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  'onBlur'?: (e: Event) => void

  /**
   * Emitted on select list item click.
   * @param {WSelectDropdownItem} item - The clicked item object.
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  'onItemClick'?: (item: WSelectDropdownItem) => void

  /**
   * Emitted on list item select (click or <kbd>enter</kbd> keydown).
   * @param {WSelectDropdownItem} item - The selected item object.
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  'onItemSelect'?: (item: WSelectDropdownItem) => void

  /**
   * Emitted on click of the left inner icon, if any.
   * @param {Event} e - The associated click DOM event.
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  'onClick:innerIconLeft'?: (e: Event) => void

  /**
   * Emitted on click of the right inner icon, if any.
   * @param {Event} e - The associated click DOM event.
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  'onClick:innerIconRight'?: (e: Event) => void
}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveSelectComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  selectItems: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  hasValue: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  hasLabel: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  showLabelInside: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  selectionString: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  classes: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  inputWrapClasses: ComputedGetter<any>
}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveSelectMethods extends MethodOptions {
  /**
   * TODO: Add Description
   * @param {any} e
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  onFocus(e: any): void

  /**
   * TODO: Add Description
   * @param {any} e
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  onBlur(e: any): void

  /**
   * TODO: Add Description
   * @param {any} e
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  onKeydown(e: any): void

  /**
   * TODO: Add Description
   * @param {any} items
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  onInput(items: any): void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  onInputFieldClick(): void

  /**
   * TODO: Add Description
   * @param {any} e
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  onListItemSelect(e: any): void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  onReset(): void

  /**
   * TODO: Add Description
   * @param {any} items
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  checkSelection(items: any): void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  openMenu(): void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  closeMenu(): void
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveSelectSlots = SlotsType<{
  /**
   * The label content, if the `label` prop is not flexible enough.
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  'default': () => any

  /**
   * Provide a custom template for the selection string.
   * @param {WSelectDropdownItem} item The selected item(s) object(s). May be an array if `multiple` is `true`, or a single object otherwise.
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  'selection': (_: { item: WSelectDropdownItem }) => any

  /**
   * `x` is an integer starting at `1`.
   * Provide a custom content for a single select list item: the item at the index `x`.
   * @param {WSelectDropdownItem} item The current item object.
   * @param {boolean} selected A Boolean representing the selected state of the list item.
   * @param {number} index The index of the list item.
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  'item.x': (_: { item: WSelectDropdownItem, selected: boolean, index: number }) => any

  /**
   * Provide a common custom template for all the select list items.
   * @param {WSelectDropdownItem} item The current item object.
   * @param {boolean} selected A Boolean representing the selected state of the list item.
   * @param {number} index The index of the list item.
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  'item': (_: { item: WSelectDropdownItem, selected: boolean, index: number }) => any

  /**
   * The left icon, if the `innerIconLeft` prop is not flexible enough.
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  'icon-left': () => any

  /**
   * The right icon, if the `innerIconRight` prop is not flexible enough.
   * @see https://antoniandre.github.io/wave-ui/w-input
   */
  'icon-right': () => any
} & {
  /**
   * `x` is an integer starting at `1`.
   * Provide a custom content for a single select list item: the item at the index `x`.
   * @param {WSelectDropdownItem} item The current item object.
   * @param {boolean} selected A Boolean representing the selected state of the list item.
   * @param {number} index The index of the list item.
   * @see https://antoniandre.github.io/wave-ui/w-select
   */
  [k in `item${number}`]: (_: { item: WSelectDropdownItem, selected: boolean, index: number }) => any
}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WSelect = DefineComponent<
  WaveSelectProps,
  {},
  {},
  WaveSelectComputeds,
  WaveSelectMethods,
  {},
  {},
  WaveSelectEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveSelectProps & WaveSelectEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveSelectProps>,
  WaveSelectSlots
>
