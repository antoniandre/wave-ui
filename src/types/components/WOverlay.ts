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
export interface WaveOverlayProps {
  /**
   * ``value` in Vue 2.`
   * This prop controls the visibility of the overlay. Any truthy value will show the overlay whereas any falsy value will hide it.
   * @property {any} modelValue
   * @see https://antoniandre.github.io/wave-ui/w-overlay
   */
  modelValue?: any

  /**
   * Sets a custom opacity on the overlay.
   * @property {number|string|boolean} opacity
   * @see https://antoniandre.github.io/wave-ui/w-overlay
   */
  opacity?: number|string|boolean

  /**
   * Applies a color to the overlay's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} bgColor
   * @see https://antoniandre.github.io/wave-ui/w-overlay
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  bgColor?: string

  /**
   * Sets the CSS position of the overlay to `absolute`. By default it is set to `fixed`.
   * @property {boolean} absolute
   * @see https://antoniandre.github.io/wave-ui/w-overlay
   */
  absolute?: boolean

  /**
   * Applies a z-index (positive or negative integer) to the overlay.
   * @property {number|string|boolean} zIndex
   * @see https://antoniandre.github.io/wave-ui/w-overlay
   */
  zIndex?: number|string|boolean

  /**
   * When set to true, clicking outside of the overlay or pressing the escape key will not close the overlay.
   * A bounce animation will give the user a feedback that the overlay content needs attention and cannot be closed.
   * @property {boolean} persistent
   * @see https://antoniandre.github.io/wave-ui/w-overlay
   */
  persistent?: boolean

  /**
   * When this and the `persistent` props are set to true, clicking outside of the overlay or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user).
   * @property {boolean} persistentNoAnimation
   * @see https://antoniandre.github.io/wave-ui/w-overlay
   */
  persistentNoAnimation?: boolean

}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveOverlayEmits {
  /**
   * Emitted on overlay close (a click on overlay doesn't trigger this event if <code>persistent</code>).<br>Updates the v-model value in Vue 2.x only.
   * @param {any} renameMe1 - Represents the open state of the overlay: false on overlay close.
   * @see https://antoniandre.github.io/wave-ui/w-overlay
   */
  'onInput'?: (renameMe1: any) => void

  /**
   * Emitted on overlay close (a click on overlay doesn't trigger this event if <code>persistent</code>).<br>Updates the v-model value in Vue 3 only.
   * @param {any} renameMe1 - Represents the open state of the overlay: false on overlay close.
   * @see https://antoniandre.github.io/wave-ui/w-overlay
   */
  'onUpdate:modelValue'?: (renameMe1: any) => void

  /**
   * Emitted on every overlay click. Whether the <code>persistent</code> prop is set to true or false.
   * @param {any} renameMe1 - The associated click DOM event.
   * @see https://antoniandre.github.io/wave-ui/w-overlay
   */
  'onClick'?: (renameMe1: any) => void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-overlay
   */
  'onBeforeClose'?: () => void

  /**
   * Emitted on overlay close (a click on overlay doesn't trigger this event if <code>persistent</code>).
   * @see https://antoniandre.github.io/wave-ui/w-overlay
   */
  'onClose'?: () => void

}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveOverlayComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-overlay
   */
  backgroundColor: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-overlay
   */
  classes: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-overlay
   */
  styles: ComputedGetter<any>

}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveOverlayMethods extends MethodOptions {
  /**
   * TODO: Add Description
   * @param {any} e
   * @see https://antoniandre.github.io/wave-ui/w-overlay
   */
  onClick(e: any): void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-overlay
   */
  onClose(): void

}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveOverlaySlots = SlotsType<{
  /**
   * The overlay content, if any.
   * @see https://antoniandre.github.io/wave-ui/w-overlay
   */
  'default': () => any

}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WOverlay = DefineComponent<
  WaveOverlayProps,
  {},
  {},
  WaveOverlayComputeds,
  {},
  {},
  {},
  WaveOverlayEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveOverlayProps & WaveOverlayEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveOverlayProps>,
  WaveOverlaySlots
>
