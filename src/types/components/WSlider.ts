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
export interface WaveSliderProps {
  /**
   * ``value` in Vue 2.`
   * Dictates the range selection of the slider. When the user changes the range, the `v-model` value will be updated.
   * @property {number} modelValue - Default: 0
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  modelValue?: number

  /**
   * Applies a foreground color to the slider. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color - Default: 'primary'
   * @see https://antoniandre.github.io/wave-ui/w-slider
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * Applies a background color to the slider's track. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} bgColor
   * @see https://antoniandre.github.io/wave-ui/w-slider
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  bgColor?: string

  /**
   * Applies a specific color to the slider's left and right labels. Note that on validation failure, the validation-color takes precedence.
   * Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} labelColor - Default: 'primary'
   * @see https://antoniandre.github.io/wave-ui/w-slider
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  labelColor?: string

  /**
   * A Boolean to display or hide the labels of each steps under the slider.
   * A future version will allow passing an array of custom labels.
   * @property {boolean|Array<any>} stepLabels
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  stepLabels?: boolean|Array<any>

  /**
   * TODO: Add Description
   * @property {boolean|string} thumbLabel
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  thumbLabel?: boolean|string

  /**
   * Applies a custom CSS class to the slider's thumb label.
   * @property {string} thumbLabelClass
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  thumbLabelClass?: string

  /**
   * Applies a custom CSS class to the slider's track.
   * @property {string} trackClass
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  trackClass?: string

  /**
   * Applies a custom CSS class to the slider's highlighted range.
   * @property {string} rangeClass
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  rangeClass?: string

  /**
   * Sets an integer or floating minimum number for the slider.
   * @property {number|string} min - Default: 0
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  min?: number|string

  /**
   * Sets an integer or floating maximum number for the slider.
   * @property {number|string} max - Default: 100
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  max?: number|string

  /**
   * Sets an incremental/decremental integer or floating step number for the slider, e.g. `0.3`.
   * @property {number|string} step
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  step?: number|string

  /**
   * Defines a label to display on the left of the slider.
   * @property {string} labelLeft
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  labelLeft?: string

  /**
   * Defines a label to display on the right of the slider.
   * @property {string} labelRight
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  labelRight?: string

  /**
   * TODO: Add Description
   * @property {boolean} dark
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  dark?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} light
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  light?: boolean

}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveSliderEmits {
  /**
   * Emitted each time the slider range changes.<br>Updates the v-model value in Vue 2.x only.
   * @param {any} renameMe1 - The current value of the slider.
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  'onInput'?: (renameMe1: any) => void

  /**
   * Emitted each time the slider range changes.<br>Updates the v-model value in Vue 3 only.
   * @param {any} renameMe1 - The current value of the slider.
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  'onUpdate:modelValue'?: (renameMe1: any) => void

  /**
   * Emitted when the slider is focused (the thumb button).
   * @param {any} renameMe1 - The associated focus DOM event.
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  'onFocus'?: (renameMe1: any) => void

}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveSliderComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  minVal: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  maxVal: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  stepValPercent: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  scaledRange: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  numberOfSteps: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  rangeStyles: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  thumbStyles: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  rangeClasses: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  trackClasses: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  thumbClasses: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  wrapperClasses: ComputedGetter<any>

}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveSliderMethods extends MethodOptions {
  /**
   * TODO: Add Description
   * @param {any} value
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  scaledToPercent(value: any): void

  /**
   * TODO: Add Description
   * @param {any} value
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  percentToScaled(value: any): void

  /**
   * TODO: Add Description
   * @param {any} e
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  onTrackMouseDown(e: any): void

  /**
   * TODO: Add Description
   * @param {any} e
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  onDrag(e: any): void

  /**
   * TODO: Add Description
   * @param {any} e
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  onMouseUp(e: any): void

  /**
   * TODO: Add Description
   * @param {any} step
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  onStepLabelClick(step: any): void

  /**
   * TODO: Add Description
   * @param {any} e
   * @param {any} direction
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  onKeyDown(e: any, direction: any): void

  /**
   * TODO: Add Description
   * @param {any} cursorPositionX
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  updateRange(cursorPositionX: any): void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  updateRangeValueScaled(): void

}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveSliderSlots = SlotsType<{
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  'label-left': () => any

  /**
   * TODO: Add Description
   * @param {any} value TODO: Describe me!
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  'label': (_: { value: any }) => any

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-slider
   */
  'label-right': () => any

}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WSlider = DefineComponent<
  WaveSliderProps,
  {},
  {},
  WaveSliderComputeds,
  {},
  {},
  {},
  WaveSliderEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveSliderProps & WaveSliderEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveSliderProps>,
  WaveSliderSlots
>
