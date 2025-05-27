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
export interface WaveGridProps {
  /**
   * TODO: Add Description
   * @property {string} tag - Default: 'div'
   * @see https://antoniandre.github.io/wave-ui/w-grid
   */
  tag?: string

  /**
   * TODO: Add Description
   * @property {number|{}|string} columns
   * @see https://antoniandre.github.io/wave-ui/w-grid
   */
  columns?: number|{}|string

  /**
   * TODO: Add Description
   * @property {number|{}|string} gap - Default: 0
   * @see https://antoniandre.github.io/wave-ui/w-grid
   */
  gap?: number|{}|string
}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export type WaveGridEmits = {}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveGridComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-grid
   */
  breakpointsColumns: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-grid
   */
  breakpointsGap: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-grid
   */
  classes: ComputedGetter<any>
}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveGridMethods extends MethodOptions {
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveGridSlots = SlotsType<{
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-grid
   */
  'default': () => any
}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WGrid = DefineComponent<
  WaveGridProps,
  {},
  {},
  WaveGridComputeds,
  WaveGridMethods,
  {},
  {},
  WaveGridEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveGridProps & WaveGridEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveGridProps>,
  WaveGridSlots
>
