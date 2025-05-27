/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import {
  ComputedGetter,
  type ComputedOptions,
  type DefineComponent,
  type EmitsOptions,
  type ExtractDefaultPropTypes,
  type MethodOptions,
  type SlotsType
} from 'vue'

import type {
  PublicProps,
  ResolveProps
} from '../extra-vue-types'

// ----------------------------------------------------------------------------
// Props
// ----------------------------------------------------------------------------
export interface WaveAppProps {
  /**
   * Sets the layout to `display: block`. By default the layout is: `display: flex`, `flex-direction: column`.
   * @property {boolean} block
   * @see https://antoniandre.github.io/wave-ui/w-app
   */
  block?: boolean

  /**
   * Sets the layout to display in a row when using the default flex layout (column by default).
   * @property {boolean} row
   * @see https://antoniandre.github.io/wave-ui/w-app
   */
  row?: boolean

  /**
   * Applies the CSS property: `align-items: center;`.
   * @property {boolean} alignCenter
   * @see https://antoniandre.github.io/wave-ui/w-app
   */
  alignCenter?: boolean

  /**
   * Applies the CSS property: `align-items: flex-end;`.
   * @property {boolean} alignEnd
   * @see https://antoniandre.github.io/wave-ui/w-app
   */
  alignEnd?: boolean

  /**
   * Applies the CSS property: `justify-content: center;`.
   * @property {boolean} justifyCenter
   * @see https://antoniandre.github.io/wave-ui/w-app
   */
  justifyCenter?: boolean

  /**
   * Applies the CSS property: `justify-content: end;`.
   * @property {boolean} justifyEnd
   * @see https://antoniandre.github.io/wave-ui/w-app
   */
  justifyEnd?: boolean

  /**
   * Applies the CSS property: `justify-content: space-between;`.
   * @property {boolean} justifySpaceBetween
   * @see https://antoniandre.github.io/wave-ui/w-app
   */
  justifySpaceBetween?: boolean

  /**
   * Applies the CSS property: `justify-content: space-around;`.
   * @property {boolean} justifySpaceAround
   * @see https://antoniandre.github.io/wave-ui/w-app
   */
  justifySpaceAround?: boolean

  /**
   * Applies the CSS property: `justify-content: space-evenly;`.
   * @property {boolean} justifySpaceEvenly
   * @see https://antoniandre.github.io/wave-ui/w-app
   */
  justifySpaceEvenly?: boolean

  /**
   * Applies the CSS property: `text-align: center;`.
   * @property {boolean} textCenter
   * @see https://antoniandre.github.io/wave-ui/w-app
   */
  textCenter?: boolean

  /**
   * Applies the CSS property: `text-align: right;`.
   * @property {boolean} textRight
   * @see https://antoniandre.github.io/wave-ui/w-app
   */
  textRight?: boolean
}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export type WaveAppEmits = {}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveAppComputeds extends ComputedOptions {
}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveAppMethods extends MethodOptions {
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveAppSlots = SlotsType<{
  /**
   * The content of the app.
   * @see https://antoniandre.github.io/wave-ui/w-app
   */
  'default': () => any
}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WApp = DefineComponent<
  WaveAppProps,
  {},
  {},
  WaveAppComputeds,
  WaveAppMethods,
  {},
  {},
  WaveAppEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveAppProps & WaveAppEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveAppProps>,
  WaveAppSlots
>
