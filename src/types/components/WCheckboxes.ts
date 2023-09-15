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
export interface WaveCheckboxesProps {
  /**
   * An array of checkbox items to display. Each item object should contain at least a `label` or a `value` attribute.
   * @property {Array<any>} [items]
   * @see https://antoniandre.github.io/wave-ui/w-checkboxes
   */
  items: Array<any>

  /**
   * ``value` in Vue 2.`
   * Provide an array of values to dictate the checked state of all the checkboxes.
   * This value gets updated when using a v-model.
   * @property {Array<any>} modelValue
   * @see https://antoniandre.github.io/wave-ui/w-checkboxes
   */
  modelValue?: Array<any>

  /**
   * Moves the label to the left of each checkbox.
   * @property {boolean} labelOnLeft
   * @see https://antoniandre.github.io/wave-ui/w-checkboxes
   */
  labelOnLeft?: boolean

  /**
   * The property name (aka "key") in each item object where to find the label of the item (if any).
   * @property {string} itemLabelKey - Default: 'label'
   * @see https://antoniandre.github.io/wave-ui/w-checkboxes
   */
  itemLabelKey?: string

  /**
   * The property name (aka "key") in each item object where to find the value of the item (if any).
   * @property {string} itemValueKey - Default: 'value'
   * @see https://antoniandre.github.io/wave-ui/w-checkboxes
   */
  itemValueKey?: string

  /**
   * The property name (aka "key") in each item object where to find the color of the item (if any).
   * @property {string} itemColorKey - Default: 'color'
   * @see https://antoniandre.github.io/wave-ui/w-checkboxes
   */
  itemColorKey?: string

  /**
   * Displays all the checkboxes inline instead of in column.
   * @property {boolean} inline
   * @see https://antoniandre.github.io/wave-ui/w-checkboxes
   */
  inline?: boolean

  /**
   * Displays round checkboxes instead of square ones.
   * @property {boolean} round
   * @see https://antoniandre.github.io/wave-ui/w-checkboxes
   */
  round?: boolean

  /**
   * Applies a color to the active checkbox. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color - Default: 'primary'
   * @see https://antoniandre.github.io/wave-ui/w-checkboxes
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * Applies a specific color to the checkboxes labels. Note that on validation failure, the validation-color takes precedence.
   * Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} labelColor - Default: 'primary'
   * @see https://antoniandre.github.io/wave-ui/w-checkboxes
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  labelColor?: string
}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveCheckboxesEmits {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-checkboxes
   */
  'onInput'?: () => void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-checkboxes
   */
  'onUpdate:modelValue'?: () => void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-checkboxes
   */
  'onFocus'?: () => void
}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveCheckboxesComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-checkboxes
   */
  checkboxItems: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-checkboxes
   */
  classes: ComputedGetter<any>
}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveCheckboxesMethods extends MethodOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-checkboxes
   */
  reset(): void

  /**
   * TODO: Add Description
   * @param {any} checkbox
   * @param {any} isChecked
   * @see https://antoniandre.github.io/wave-ui/w-checkboxes
   */
  toggleCheck(checkbox: any, isChecked: any): void

  /**
   * TODO: Add Description
   * @param {any} item
   * @see https://antoniandre.github.io/wave-ui/w-checkboxes
   */
  getOriginalItem(item: any): void
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveCheckboxesSlots = SlotsType<{
  /**
   * TODO: Add Description
   * @param {any} item TODO: Describe me!
   * @param {any} checked TODO: Describe me!
   * @param {any} index TODO: Describe me!
   * @see https://antoniandre.github.io/wave-ui/w-checkboxes
   */
  'item.x': (_: { item: any, checked: any, index: any }) => any
} & {
  /**
   * TODO: Add Description
   * @param {any} item TODO: Describe me!
   * @param {any} checked TODO: Describe me!
   * @param {any} index TODO: Describe me!
   * @see https://antoniandre.github.io/wave-ui/w-checkboxes
   */
  [k in `item'${number}`]: (_: { item: any, checked: any, index: any }) => any
}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WCheckboxes = DefineComponent<
  WaveCheckboxesProps,
  {},
  {},
  WaveCheckboxesComputeds,
  WaveCheckboxesMethods,
  {},
  {},
  WaveCheckboxesEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveCheckboxesProps & WaveCheckboxesEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveCheckboxesProps>,
  WaveCheckboxesSlots
>
