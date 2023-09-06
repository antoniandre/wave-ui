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
export interface WaveStepsProps {
  /**
   * TODO: Add Description
   * @property {boolean} dark
   * @see https://antoniandre.github.io/wave-ui/w-steps
   */
  dark?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} light
   * @see https://antoniandre.github.io/wave-ui/w-steps
   */
  light?: boolean

}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveStepsEmits {
}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveStepsComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-steps
   */
  classes: ComputedGetter<any>

}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveStepsMethods extends MethodOptions {
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveStepsSlots = SlotsType<{
}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WSteps = DefineComponent<
  WaveStepsProps,
  {},
  {},
  WaveStepsComputeds,
  {},
  {},
  {},
  WaveStepsEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveStepsProps, WaveStepsEmits & EmitsOptions>,
  ExtractDefaultPropTypes<WaveStepsProps>,
  WaveStepsSlots
>
