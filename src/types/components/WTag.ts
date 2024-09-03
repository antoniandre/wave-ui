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
export interface WaveTagProps {
  /**
   * ``value` in Vue 2.`
   * When a tag has a `v-model` or `value`, it becomes toggleable (two different states) and clickable. When the user clicks it, its `v-model` boolean value is updated.
   * @property {boolean|number} modelValue - Default: -1
   * @see https://antoniandre.github.io/wave-ui/w-tag
   */
  modelValue?: boolean|number

  /**
   * Applies a color to the tag's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color
   * @see https://antoniandre.github.io/wave-ui/w-tag
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * Applies a color to the tag's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} bgColor
   * @see https://antoniandre.github.io/wave-ui/w-tag
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  bgColor?: string

  /**
   * Applies a drop shadow to the tag and removes the default border.
   * @property {boolean} shadow
   * @see https://antoniandre.github.io/wave-ui/w-tag
   */
  shadow?: boolean

  /**
   * Removes the default border-radius and sets sharp edges on the tag.
   * @property {boolean} tile
   * @see https://antoniandre.github.io/wave-ui/w-tag
   */
  tile?: boolean

  /**
   * Sets a maximum border-radius on the corners of the tag, giving it a round look.
   * @property {boolean} round
   * @see https://antoniandre.github.io/wave-ui/w-tag
   */
  round?: boolean

  /**
   * Adds a close button in the tag. On click of that button, the `v-model` boolean value is updated. You can then decide to hide the tag with a v-if or v-show based on the `v-model` value.
   * @property {boolean} closable
   * @see https://antoniandre.github.io/wave-ui/w-tag
   */
  closable?: boolean

  /**
   * The outline style applies the provided `color` (by default the color is inherited) to the text and border and no background color is set.
   * @property {boolean} outline
   * @see https://antoniandre.github.io/wave-ui/w-tag
   */
  outline?: boolean

  /**
   * Removes the default border from the tag element.
   * @property {boolean} noBorder
   * @see https://antoniandre.github.io/wave-ui/w-tag
   */
  noBorder?: boolean

  /**
   * Sets the size of the tag.
   * @property {boolean} xs
   * @see https://antoniandre.github.io/wave-ui/w-tag
   */
  xs?: boolean

  /**
   * Sets the size of the tag.
   * @property {boolean} sm
   * @see https://antoniandre.github.io/wave-ui/w-tag
   */
  sm?: boolean

  /**
   * Sets the size of the tag.
   * @property {boolean} md
   * @see https://antoniandre.github.io/wave-ui/w-tag
   */
  md?: boolean

  /**
   * Sets the size of the tag.
   * @property {boolean} lg
   * @see https://antoniandre.github.io/wave-ui/w-tag
   */
  lg?: boolean

  /**
   * Sets the size of the tag.
   * @property {boolean} xl
   * @see https://antoniandre.github.io/wave-ui/w-tag
   */
  xl?: boolean

  /**
   * Sets a width on the tag.
   * Accepts a string made of a value and a unit (e.g. `2.5em`) or a number (e.g. `45`) that will be a pixel value.
   * @property {number|string} width
   * @see https://antoniandre.github.io/wave-ui/w-tag
   */
  width?: number|string

  /**
   * Sets a height on the tag.
   * Accepts a string made of a value and a unit (e.g. `2.5em`) or a number (e.g. `45`) that will be a pixel value.
   * @property {number|string} height
   * @see https://antoniandre.github.io/wave-ui/w-tag
   */
  height?: number|string

  /**
   * When set to true, the text color will be set to white.
   * @property {boolean} dark
   * @see https://antoniandre.github.io/wave-ui/w-tag
   */
  dark?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} light
   * @see https://antoniandre.github.io/wave-ui/w-tag
   */
  light?: boolean
}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveTagEmits {
  /**
   * For vue 2 only.<br>If a <code>value</code> or <code>v-model</code> is provided, the tag becomes toggleable on click (two states).<br>Updates the v-model value in Vue 2.x only.
   * @param {any} renameMe1 - A Boolean representing the active state of the tag.
   * @see https://antoniandre.github.io/wave-ui/w-tag
   */
  'onInput'?: (renameMe1: any) => void

  /**
   * For vue 3 only.<br>If a <code>model-value</code> or <code>v-model</code> is provided, the tag becomes toggleable on click (two states).<br>Updates the v-model value in Vue 3 only.
   * @param {any} renameMe1 - A Boolean representing the active state of the tag.
   * @see https://antoniandre.github.io/wave-ui/w-tag
   */
  'onUpdate:modelValue'?: (renameMe1: any) => void
}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveTagComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-tag
   */
  presetSize: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-tag
   */
  classes: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-tag
   */
  styles: ComputedGetter<any>
}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveTagMethods extends MethodOptions {
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveTagSlots = SlotsType<{
  /**
   * The tag content.
   * @see https://antoniandre.github.io/wave-ui/w-tag
   */
  'default': () => any
}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WTag = DefineComponent<
  WaveTagProps,
  {},
  {},
  WaveTagComputeds,
  WaveTagMethods,
  {},
  {},
  WaveTagEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveTagProps & WaveTagEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveTagProps>,
  WaveTagSlots
>
