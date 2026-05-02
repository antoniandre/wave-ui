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
// Additional Types
// ----------------------------------------------------------------------------
export interface WAutocompleteItem {
  /**
   * The *default* key to access the label of the item.
   * This can be overridden using the `item-label-key` property.
   * @property {string} label
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete#item-label-key-prop
   */
  label?: string

  /**
   * The *default* key to access the value of the item.
   * This can be overridden using the `item-value-key` property.
   * @property {string|number} value
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete#item-value-key-prop
   */
  value?: string | number

  /**
   * The *default* key to access the searchable string of the item.
   * This can be an aggregation of multiple fields for richer search.
   * @property {string} searchable
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete#item-searchable-key-prop
   */
  searchable?: string

  /**
   * You can also have any additional data attached to the item.
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete#items-prop
   */
  [key: string]: any
}

// ----------------------------------------------------------------------------
// Props
// ----------------------------------------------------------------------------
export interface WaveAutocompleteProps {
  /**
   * Expecting an array of objects. Each object being an autocomplete option, it should
   * include at least a `label` attribute (or the property specified by `item-label-key`).
   * @property {Array<WAutocompleteItem>} items
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  items: Array<WAutocompleteItem>

  /**
   * `value` in Vue 2.
   * The current selection. A single value when not using `multiple`, or an array of values otherwise.
   * Gets updated on item selection/unselection.
   * @property {string|number|Array<string|number>} modelValue
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  modelValue?: string | number | Array<string | number>

  /**
   * Provide a placeholder to display when there is no selection and no keyword typed.
   * If a floating label is present, it will be moved above the field when needed.
   * @property {string} placeholder
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  placeholder?: string

  /**
   * Sets a visible label for the autocomplete field.
   * @property {string} label
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  label?: string

  /**
   * Sets the position of the label. One of: `'inside'`, `'left'`, `'right'`.
   * @property {string} labelPosition - Default: 'inside'
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  labelPosition?: string

  /**
   * Prevents moving the label above the field when `labelPosition` is `'inside'`.
   * When a selection is made the static label is replaced by the chip(s).
   * @property {boolean} staticLabel
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  staticLabel?: boolean

  /**
   * Adds an icon on the left inside the autocomplete field.
   * Accepts an icon string: e.g. `mdi mdi-magnify`.
   * @property {string} innerIconLeft
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  innerIconLeft?: string

  /**
   * Adds an icon on the right inside the autocomplete field.
   * Accepts an icon string: e.g. `mdi mdi-chevron-down`.
   * @property {string} innerIconRight
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  innerIconRight?: string

  /**
   * When set, the dropdown menu only opens when the user starts typing (on keydown),
   * rather than on focus/click.
   * @property {boolean} openOnKeydown
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  openOnKeydown?: boolean

  /**
   * Allows multiple items to be selected. The selected items are displayed as chips.
   * @property {boolean} multiple
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  multiple?: boolean

  /**
   * When `multiple` is enabled, allows the same item to be selected more than once.
   * @property {boolean} allowDuplicates
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  allowDuplicates?: boolean

  /**
   * A string to display in the dropdown when no item matches the current keyword.
   * Defaults to `'No match.'`.
   * @property {string} noMatch
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  noMatch?: string

  /**
   * The property name in each item object where to find the item's unique value.
   * @property {string} itemValueKey - Default: 'value'
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  itemValueKey?: string

  /**
   * The property name in each item object where to find the item's display label.
   * @property {string} itemLabelKey - Default: 'label'
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  itemLabelKey?: string

  /**
   * The property name in each item object where to find the item's searchable string.
   * This may be an aggregation of multiple fields for richer matching (e.g. symbol + name + number).
   * Falls back to `item-label-key` when the property is absent.
   * @property {string} itemSearchableKey - Default: 'searchable'
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  itemSearchableKey?: string

  /**
   * Applies a color to the autocomplete field's text and focus indicator.
   * Accepts all Wave UI color names, status colors, or custom colors.
   * @property {string} color - Default: 'primary'
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * Applies a color to the autocomplete field's background.
   * Accepts all Wave UI color names, status colors, or custom colors.
   * @property {string} bgColor
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  bgColor?: string

  /**
   * Applies a specific color to the autocomplete field's label.
   * Note that on validation failure, the validation-color takes precedence.
   * @property {string} labelColor - Default: 'primary'
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  labelColor?: string

  /**
   * Applies the outline style: uses the `color` for text and border, no background fill.
   * @property {boolean} outline
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  outline?: boolean

  /**
   * Sets a maximum border-radius on the field, giving it a pill/round look.
   * @property {boolean} round
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  round?: boolean

  /**
   * Applies a drop shadow to the autocomplete field.
   * @property {boolean} shadow
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  shadow?: boolean

  /**
   * Removes the default border-radius, giving the field sharp edges.
   * @property {boolean} tile
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  tile?: boolean

  /**
   * Extra-small size preset.
   * @property {boolean} xs
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  xs?: boolean

  /**
   * Small size preset.
   * @property {boolean} sm
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  sm?: boolean

  /**
   * Medium size preset (default).
   * @property {boolean} md
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  md?: boolean

  /**
   * Large size preset.
   * @property {boolean} lg
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  lg?: boolean

  /**
   * Extra-large size preset.
   * @property {boolean} xl
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  xl?: boolean

  /**
   * Forces dark text and border colors regardless of the application theme.
   * @property {boolean} dark
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  dark?: boolean

  /**
   * Forces light text and border colors regardless of the application theme.
   * @property {boolean} light
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  light?: boolean

  /**
   * Fits the autocomplete field width to its content rather than growing to fill the container.
   * @property {boolean} fitToContent
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  fitToContent?: boolean

  /**
   * Applies a custom CSS class to the floating dropdown menu element.
   * @property {string} menuClass
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  menuClass?: string

  /**
   * Passes additional props down to the internal `w-menu` component.
   * For example: `:menu-props="{ appendTo: '.my-scroll-container' }"`.
   * @property {Object} menuProps
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  menuProps?: Record<string, any>

  // Props from FormElementMixin:
  /**
   * Sets an explicit DOM `id` on the input. If omitted, a stable id is auto-generated.
   * @property {string} id
   */
  id?: string

  /**
   * Provides a native HTML `name` attribute to the field.
   * @property {string} name
   */
  name?: string

  /**
   * Disables the autocomplete field, making it unreactive to user interactions.
   * @property {boolean} disabled
   */
  disabled?: boolean

  /**
   * Makes the autocomplete field read-only: its value cannot be changed by user interaction.
   * @property {boolean} readonly
   */
  readonly?: boolean

  /**
   * Applies the native HTML `required` attribute.
   * @property {boolean} required
   */
  required?: boolean

  /**
   * Sets the `tabindex` on the underlying input element.
   * @property {string} tabindex
   */
  tabindex?: string

  /**
   * An array of validator functions for use when the field is inside a `w-form`.
   * Each function receives the current value and should return `true` when valid,
   * or an error string when invalid.
   * @property {Array<Function>} validators
   */
  validators?: Array<(value: any) => true | string>

  /**
   * Per-field blur validation override.
   * `true` skips blur validation, `false` forces it even if the parent `w-form` has `no-blur-validation`.
   * When unset, inherits the form's setting.
   * @property {boolean} noBlurValidation
   */
  noBlurValidation?: boolean
}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveAutocompleteEmits {
  /**
   * Emitted each time the selection changes. Updates the v-model value in Vue 2.x only.
   * @param {string|number|Array<string|number>|null} value
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  'onInput'?: (value: string | number | Array<string | number> | null) => void

  /**
   * Emitted each time the selection changes. Updates the v-model value in Vue 3.
   * @param {string|number|Array<string|number>|null} value
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  'onUpdate:modelValue'?: (value: string | number | Array<string | number> | null) => void

  /**
   * Emitted on input focus.
   * @param {FocusEvent} e
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  'onFocus'?: (e: FocusEvent) => void

  /**
   * Emitted on input blur.
   * @param {FocusEvent} e
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  'onBlur'?: (e: FocusEvent) => void

  /**
   * Emitted on every keydown event in the input field.
   * @param {KeyboardEvent} e
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  'onKeydown'?: (e: KeyboardEvent) => void

  /**
   * Emitted on a dropdown list item click (mouse).
   * @param {WAutocompleteItem} item
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  'onItemClick'?: (item: WAutocompleteItem) => void

  /**
   * Emitted when an item is selected (via click or Enter key).
   * @param {WAutocompleteItem} item
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  'onItemSelect'?: (item: WAutocompleteItem) => void

  /**
   * Emitted when the extra-item slot entry is selected.
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  'onExtraItemSelect'?: () => void

  /**
   * Emitted on click of the left inner icon.
   * @param {MouseEvent} e
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  'onClick:innerIconLeft'?: (e: MouseEvent) => void

  /**
   * Emitted on click of the right inner icon.
   * @param {MouseEvent} e
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  'onClick:innerIconRight'?: (e: MouseEvent) => void
}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveAutocompleteComputeds extends ComputedOptions {
  normalizedKeywords: ComputedGetter<string>
  optimizedItemsForSearch: ComputedGetter<Array<WAutocompleteItem & { uid: number; searchable: string }>>
  filteredItems: ComputedGetter<Array<WAutocompleteItem & { uid: number }>>
  highlightedItemIndex: ComputedGetter<number>
  hasValue: ComputedGetter<boolean>
  hasLabel: ComputedGetter<boolean>
  showFloatingLabel: ComputedGetter<boolean>
  showLabelInside: ComputedGetter<boolean>
  selectionValue: ComputedGetter<string | number | Array<string | number> | null>
  presetSize: ComputedGetter<string | null>
  classes: ComputedGetter<Record<string, boolean>>
  inputWrapClasses: ComputedGetter<Record<string, boolean>>
  inputAttrs: ComputedGetter<Record<string, any>>
  inputEventListeners: ComputedGetter<Record<string, any>>
}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveAutocompleteMethods extends MethodOptions {
  /** Normalizes a string for accent-insensitive search. */
  normalize(string: string): string

  /** Finds an item in the list by value (loose comparison). */
  findItemByValue(value: string | number): WAutocompleteItem | undefined

  /** Selects an item, updates v-model, and closes the menu on single-select. */
  selectItem(item: WAutocompleteItem & { uid: number }): void

  /** Removes a chip at index `i` (or the last chip when `i` is omitted). */
  unselectItem(i?: number): void

  /** Selects the extra-item slot entry. */
  selectExtraItem(): void

  /** Opens the dropdown menu. */
  openMenu(): void

  /** Closes the dropdown menu. */
  closeMenu(): void

  /** Validates the field (when inside a w-form). */
  validate(): void
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveAutocompleteSlots = SlotsType<{
  /**
   * The label content, when the `label` prop is not flexible enough.
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  'default': () => any

  /**
   * Provide a custom template for each selected chip.
   * @param {WAutocompleteItem} item The selected item object.
   * @param {() => void} unselect Call this to remove the chip.
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  'selection': (_: { item: WAutocompleteItem; unselect: () => void }) => any

  /**
   * Provide a custom template for each item in the dropdown list.
   * @param {WAutocompleteItem} item The current item object.
   * @param {boolean} highlighted Whether this item is currently keyboard-highlighted.
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  'item': (_: { item: WAutocompleteItem; highlighted: boolean }) => any

  /**
   * Provide a custom "No match" message displayed when the keyword has no results.
   * Default message: `No match.`
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  'no-match': () => any

  /**
   * Provide an extra entry appended at the bottom of the dropdown list (e.g. "Add new…").
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  'extra-item': () => any

  /**
   * The left icon content, when the `innerIconLeft` prop is not flexible enough.
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  'icon-left': () => any

  /**
   * The right icon content, when the `innerIconRight` prop is not flexible enough.
   * @see https://antoniandre.github.io/wave-ui/w-autocomplete
   */
  'icon-right': () => any
}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WAutocomplete = DefineComponent<
  WaveAutocompleteProps,
  {},
  {},
  WaveAutocompleteComputeds,
  WaveAutocompleteMethods,
  {},
  {},
  WaveAutocompleteEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveAutocompleteProps & WaveAutocompleteEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveAutocompleteProps>,
  WaveAutocompleteSlots
>
