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
export interface WaveRadiosProps {
  /**
   * An array of radio button items to display. Each item object should contain at least a `label` or a `value` attribute.
   * @property {Array<any>} [items]
   * @see https://antoniandre.github.io/wave-ui/w-radios
   */
  items: Array<any>

  /**
   * ``value` in Vue 2.`
   * Provide a value (of one of the `items` objects) to dictate the selected choice.
   * This value gets updated when using a v-model.
   * @property {string|number|boolean} modelValue
   * @see https://antoniandre.github.io/wave-ui/w-radios
   */
  modelValue?: string|number|boolean

  /**
   * Moves the label to the left of each radio button. By default the label is displayed on the right.
   * @property {boolean} labelOnLeft
   * @see https://antoniandre.github.io/wave-ui/w-radios
   */
  labelOnLeft?: boolean

  /**
   * The property name (aka "key") in each item object where to find the label of the item (if any).
   * @property {string} itemLabelKey - Default: 'label'
   * @see https://antoniandre.github.io/wave-ui/w-radios
   */
  itemLabelKey?: string

  /**
   * The property name (aka "key") in each item object where to find the value of the item (if any).
   * @property {string} itemValueKey - Default: 'value'
   * @see https://antoniandre.github.io/wave-ui/w-radios
   */
  itemValueKey?: string

  /**
   * The property name (aka "key") in each item object where to find the color of the item (if any).
   * @property {string} itemColorKey - Default: 'color'
   * @see https://antoniandre.github.io/wave-ui/w-radios
   */
  itemColorKey?: string

  /**
   * Displays all the radio buttons inline instead of in column.
   * @property {boolean} inline
   * @see https://antoniandre.github.io/wave-ui/w-radios
   */
  inline?: boolean

  /**
   * Applies a color to the active radio buttons. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color - Default: 'primary'
   * @see https://antoniandre.github.io/wave-ui/w-radios
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * Applies a specific color to the radio buttons' labels. Note that on validation failure, the validation-color takes precedence.
   * Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} labelColor - Default: 'primary'
   * @see https://antoniandre.github.io/wave-ui/w-radios
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  labelColor?: string
}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveRadiosEmits {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-radios
   */
  'onInput'?: () => void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-radios
   */
  'onUpdate:modelValue'?: () => void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-radios
   */
  'onFocus'?: () => void
}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveRadiosComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-radios
   */
  radioItems: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-radios
   */
  classes: ComputedGetter<any>
}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveRadiosMethods extends MethodOptions {
  /**
   * TODO: Add Description
   * @param {any} item
   * @see https://antoniandre.github.io/wave-ui/w-radios
   */
  onInput(item: any): void

  /**
   * TODO: Add Description
   * @param {any} item
   * @see https://antoniandre.github.io/wave-ui/w-radios
   */
  getOriginalItem(item: any): void
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveRadiosSlots = SlotsType<{
  /**
   * TODO: Add Description
   * @param {any} item TODO: Describe me!
   * @param {any} index TODO: Describe me!
   * @param {any} checked TODO: Describe me!
   * @see https://antoniandre.github.io/wave-ui/w-radios
   */
  'item.x': (_: { item: any, index: any, checked: any }) => any
} & {
  /**
   * TODO: Add Description
   * @param {any} item TODO: Describe me!
   * @param {any} index TODO: Describe me!
   * @param {any} checked TODO: Describe me!
   * @see https://antoniandre.github.io/wave-ui/w-radios
   */
  [k in `item'${number}`]: (_: { item: any, index: any, checked: any }) => any
}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WRadios = DefineComponent<
  WaveRadiosProps,
  {},
  {},
  WaveRadiosComputeds,
  WaveRadiosMethods,
  {},
  {},
  WaveRadiosEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveRadiosProps & WaveRadiosEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveRadiosProps>,
  WaveRadiosSlots
>
