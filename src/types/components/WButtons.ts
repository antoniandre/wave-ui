/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import type {
  DefineComponent,
  EmitsOptions,
  ExtractDefaultPropTypes,
  SlotsType
} from 'vue'

import type {
  PublicProps,
  ResolveProps
} from '../extra-vue-types'

// ----------------------------------------------------------------------------
// Item
// ----------------------------------------------------------------------------
export interface WaveButtonsItem {
  /** Button label (used when no default slot is provided). */
  label?: string
  /** Optional id — used as the v-model value when present on all items. */
  id?: string | number
  /** Optional value — used as the v-model value when no `id` key is present. */
  value?: any
  /** Whether this button starts active (overridden by `modelValue` when provided). */
  active?: boolean
  /** Disable this individual button. */
  disabled?: boolean
  /** Override the button icon for this item. */
  icon?: string
  /** Props forwarded to `w-icon` when `icon` is set. */
  iconProps?: {}
  /** Override the text color for this item. */
  color?: string
  /** Override the background color for this item (active state only). */
  bgColor?: string
  /** Extra CSS class(es) for this item's button. */
  class?: string | object | any[]
  [key: string]: any
}

// ----------------------------------------------------------------------------
// Props
// ----------------------------------------------------------------------------
export interface WaveButtonsProps {
  /**
   * Array of button definitions. When omitted, place `w-button` elements in the default slot.
   * @property {WaveButtonsItem[]} items
   * @see https://antoniandre.github.io/wave-ui/w-buttons
   */
  items?: WaveButtonsItem[]

  /**
   * Active selection. A single value (index or id/value key) for single mode, or an array for multiple mode.
   * @property {number|string|any[]} modelValue
   * @see https://antoniandre.github.io/wave-ui/w-buttons
   */
  modelValue?: number | string | any[]

  /**
   * The key in each item object used to build the v-model value.
   * Auto-detected if omitted: checks for `id` first, then `value`, then falls back to 0-based index.
   * @property {string} itemValueKey
   * @see https://antoniandre.github.io/wave-ui/w-buttons
   */
  itemValueKey?: string

  /**
   * Allows multiple buttons to be active simultaneously. The v-model becomes an array.
   * @property {boolean} multiple
   * @see https://antoniandre.github.io/wave-ui/w-buttons
   */
  multiple?: boolean

  /**
   * Forces at least one button to remain active at all times.
   * @property {boolean} mandatory
   * @see https://antoniandre.github.io/wave-ui/w-buttons
   */
  mandatory?: boolean

  /**
   * Disables all buttons in the group.
   * @property {boolean} disabled
   * @see https://antoniandre.github.io/wave-ui/w-buttons
   */
  disabled?: boolean

  /**
   * Gap between buttons in base-increment units. `0` (default) sticks the buttons together.
   * @property {number|string} gap - Default: 0
   * @see https://antoniandre.github.io/wave-ui/w-buttons
   */
  gap?: number | string

  /**
   * CSS class applied to every button.
   * @property {string|object|any[]} buttonClass
   * @see https://antoniandre.github.io/wave-ui/w-buttons
   */
  buttonClass?: string | object | any[]

  /**
   * Text color applied to all buttons.
   * @property {string} color
   * @see https://antoniandre.github.io/wave-ui/w-buttons
   */
  color?: string

  /**
   * Background color applied to all buttons.
   * @property {string} bgColor
   * @see https://antoniandre.github.io/wave-ui/w-buttons
   */
  bgColor?: string

  /**
   * Text color of the active button. Falls back to `color`.
   * @property {string} activeColor
   * @see https://antoniandre.github.io/wave-ui/w-buttons
   */
  activeColor?: string

  /**
   * Background color of the active button. Defaults to `primary`.
   * @property {string} activeBgColor
   * @see https://antoniandre.github.io/wave-ui/w-buttons
   */
  activeBgColor?: string

  /**
   * Sets white text on all buttons.
   * @property {boolean} dark
   * @see https://antoniandre.github.io/wave-ui/w-buttons
   */
  dark?: boolean

  /**
   * Sets dark text on all buttons.
   * @property {boolean} light
   * @see https://antoniandre.github.io/wave-ui/w-buttons
   */
  light?: boolean

  /**
   * Outline style for inactive buttons.
   * @property {boolean} outline
   * @see https://antoniandre.github.io/wave-ui/w-buttons
   */
  outline?: boolean

  /**
   * Transparent background (text style) for inactive buttons.
   * @property {boolean} text
   * @see https://antoniandre.github.io/wave-ui/w-buttons
   */
  text?: boolean

  /**
   * In stuck mode: outer rounded corners. In gap mode: each button is individually rounded.
   * @property {boolean} round
   * @see https://antoniandre.github.io/wave-ui/w-buttons
   */
  round?: boolean

  /**
   * In stuck mode: shadow on the wrapper. In gap mode: shadow on each button.
   * @property {boolean} shadow
   * @see https://antoniandre.github.io/wave-ui/w-buttons
   */
  shadow?: boolean

  /**
   * Removes border-radius globally.
   * @property {boolean} tile
   * @see https://antoniandre.github.io/wave-ui/w-buttons
   */
  tile?: boolean

  /**
   * Native HTML type attribute forwarded to all buttons.
   * @property {string} type
   * @see https://antoniandre.github.io/wave-ui/w-buttons
   */
  type?: string

  /**
   * Disables the pointer ripple on all buttons.
   * @property {boolean} noRipple
   * @see https://antoniandre.github.io/wave-ui/w-buttons
   */
  noRipple?: boolean

  /**
   * Sets the size of all buttons to extra small.
   * @property {boolean} xs
   * @see https://antoniandre.github.io/wave-ui/w-buttons
   */
  xs?: boolean

  /**
   * Sets the size of all buttons to small.
   * @property {boolean} sm
   * @see https://antoniandre.github.io/wave-ui/w-buttons
   */
  sm?: boolean

  /**
   * Sets the size of all buttons to medium (default).
   * @property {boolean} md
   * @see https://antoniandre.github.io/wave-ui/w-buttons
   */
  md?: boolean

  /**
   * Sets the size of all buttons to large.
   * @property {boolean} lg
   * @see https://antoniandre.github.io/wave-ui/w-buttons
   */
  lg?: boolean

  /**
   * Sets the size of all buttons to extra large.
   * @property {boolean} xl
   * @see https://antoniandre.github.io/wave-ui/w-buttons
   */
  xl?: boolean

  /**
   * Sets a fixed width on all buttons.
   * @property {number|string} width
   * @see https://antoniandre.github.io/wave-ui/w-buttons
   */
  width?: number | string

  /**
   * Sets a fixed height on all buttons.
   * @property {number|string} height
   * @see https://antoniandre.github.io/wave-ui/w-buttons
   */
  height?: number | string
}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveButtonsEmits {
  /**
   * Emitted when the active selection changes.
   * @param value The new active value or array of values.
   */
  'update:modelValue': (value: number | string | any[] | null) => void

  /**
   * Emitted when a button is clicked.
   * @param item The item object (null in slot mode).
   * @param index The 0-based button index.
   * @param event The original MouseEvent.
   */
  'click': (item: WaveButtonsItem | null, index: number, event: MouseEvent) => void
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveButtonsSlots = SlotsType<{
  /**
   * In items mode: custom content for each button, receiving item context.
   * In slot mode: place `w-button` elements directly.
   * @see https://antoniandre.github.io/wave-ui/w-buttons
   */
  'default': (props: { item: WaveButtonsItem; index: number; active: boolean }) => any
}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WButtons = DefineComponent<
  WaveButtonsProps,
  {},
  {},
  {},
  {},
  {},
  {},
  WaveButtonsEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveButtonsProps & WaveButtonsEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveButtonsProps>,
  WaveButtonsSlots
>
