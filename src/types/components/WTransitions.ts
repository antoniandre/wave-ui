/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import type {
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
// Shared base props (appear, duration, mode)
// ----------------------------------------------------------------------------

export interface WaveTransitionBaseProps {
  /**
   * Triggers the transition on the initial render of the element.
   * @property {boolean} appear
   * @see https://antoniandre.github.io/wave-ui/transitions
   */
  appear?: boolean

  /**
   * Overrides the default CSS transition/animation duration (in milliseconds or as a CSS value string).
   * @property {number | string} duration
   * @see https://antoniandre.github.io/wave-ui/transitions
   */
  duration?: number | string

  /**
   * Controls the timing of enter/leave transitions when switching between two elements.
   * Use `'out-in'` so the current element transitions out before the new one enters, or
   * `'in-out'` for the reverse order. Leave unset for simultaneous enter + leave.
   * @property {'out-in' | 'in-out'} mode
   * @see https://vuejs.org/guide/built-ins/transition.html#transition-modes
   * @see https://antoniandre.github.io/wave-ui/transitions
   */
  mode?: 'out-in' | 'in-out'
}

// ----------------------------------------------------------------------------
// Shared directional props (for slide / slide-fade)
// ----------------------------------------------------------------------------

export interface WaveTransitionDirectionProps extends WaveTransitionBaseProps {
  /**
   * Slides the element from / towards the left.
   * @property {boolean} left
   * @see https://antoniandre.github.io/wave-ui/transitions
   */
  left?: boolean

  /**
   * Slides the element from / towards the right.
   * @property {boolean} right
   * @see https://antoniandre.github.io/wave-ui/transitions
   */
  right?: boolean

  /**
   * Slides the element from / towards the top.
   * @property {boolean} up
   * @see https://antoniandre.github.io/wave-ui/transitions
   */
  up?: boolean

  /**
   * Slides the element from / towards the bottom (default direction).
   * @property {boolean} down
   * @see https://antoniandre.github.io/wave-ui/transitions
   */
  down?: boolean
}

// ----------------------------------------------------------------------------
// Shared default slot
// ----------------------------------------------------------------------------

type DefaultSlot = SlotsType<{
  /**
   * The element or component to transition.
   * @see https://antoniandre.github.io/wave-ui/transitions
   */
  'default': () => any
}>

// ----------------------------------------------------------------------------
// w-transition-fade
// ----------------------------------------------------------------------------

export type WTransitionFadeProps = WaveTransitionBaseProps

export type WTransitionFade = DefineComponent<
  WTransitionFadeProps,
  {},
  {},
  ComputedOptions,
  MethodOptions,
  {},
  {},
  EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WTransitionFadeProps, EmitsOptions>,
  ExtractDefaultPropTypes<WTransitionFadeProps>,
  DefaultSlot
>

// ----------------------------------------------------------------------------
// w-transition-scale
// ----------------------------------------------------------------------------

export type WTransitionScaleProps = WaveTransitionBaseProps

export type WTransitionScale = DefineComponent<
  WTransitionScaleProps,
  {},
  {},
  ComputedOptions,
  MethodOptions,
  {},
  {},
  EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WTransitionScaleProps, EmitsOptions>,
  ExtractDefaultPropTypes<WTransitionScaleProps>,
  DefaultSlot
>

// ----------------------------------------------------------------------------
// w-transition-scale-fade
// ----------------------------------------------------------------------------

export type WTransitionScaleFadeProps = WaveTransitionBaseProps

export type WTransitionScaleFade = DefineComponent<
  WTransitionScaleFadeProps,
  {},
  {},
  ComputedOptions,
  MethodOptions,
  {},
  {},
  EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WTransitionScaleFadeProps, EmitsOptions>,
  ExtractDefaultPropTypes<WTransitionScaleFadeProps>,
  DefaultSlot
>

// ----------------------------------------------------------------------------
// w-transition-bounce
// ----------------------------------------------------------------------------

export type WTransitionBounceProps = WaveTransitionBaseProps

export type WTransitionBounce = DefineComponent<
  WTransitionBounceProps,
  {},
  {},
  ComputedOptions,
  MethodOptions,
  {},
  {},
  EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WTransitionBounceProps, EmitsOptions>,
  ExtractDefaultPropTypes<WTransitionBounceProps>,
  DefaultSlot
>

// ----------------------------------------------------------------------------
// w-transition-twist
// ----------------------------------------------------------------------------

export type WTransitionTwistProps = WaveTransitionBaseProps

export type WTransitionTwist = DefineComponent<
  WTransitionTwistProps,
  {},
  {},
  ComputedOptions,
  MethodOptions,
  {},
  {},
  EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WTransitionTwistProps, EmitsOptions>,
  ExtractDefaultPropTypes<WTransitionTwistProps>,
  DefaultSlot
>

// ----------------------------------------------------------------------------
// w-transition-expand
// ----------------------------------------------------------------------------

export interface WTransitionExpandProps {
  /**
   * Animates the element's width (and its horizontal margins, paddings and borders).
   * Defaults to `true` when neither `x` nor `y` is set.
   * @property {boolean} x
   * @see https://antoniandre.github.io/wave-ui/transitions
   */
  x?: boolean

  /**
   * Animates the element's height (and its vertical margins, paddings and borders).
   * Defaults to `true` when neither `x` nor `y` is set.
   * @property {boolean} y
   * @see https://antoniandre.github.io/wave-ui/transitions
   */
  y?: boolean

  /**
   * Duration of the JavaScript-driven expand/collapse animation in milliseconds.
   * @property {number} duration - Default: 250
   * @see https://antoniandre.github.io/wave-ui/transitions
   */
  duration?: number

  /**
   * Controls the timing of enter/leave transitions when switching between two elements.
   * Defaults to `'out-in'` so the collapsing element finishes before the expanding one starts.
   * @property {'out-in' | 'in-out'} mode - Default: 'out-in'
   * @see https://vuejs.org/guide/built-ins/transition.html#transition-modes
   * @see https://antoniandre.github.io/wave-ui/transitions
   */
  mode?: 'out-in' | 'in-out'
}

export type WTransitionExpand = DefineComponent<
  WTransitionExpandProps,
  {},
  {},
  ComputedOptions,
  MethodOptions,
  {},
  {},
  EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WTransitionExpandProps, EmitsOptions>,
  ExtractDefaultPropTypes<WTransitionExpandProps>,
  DefaultSlot
>

// ----------------------------------------------------------------------------
// w-transition-slide
// ----------------------------------------------------------------------------

export type WTransitionSlideProps = WaveTransitionDirectionProps

export type WTransitionSlide = DefineComponent<
  WTransitionSlideProps,
  {},
  {},
  ComputedOptions,
  MethodOptions,
  {},
  {},
  EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WTransitionSlideProps, EmitsOptions>,
  ExtractDefaultPropTypes<WTransitionSlideProps>,
  DefaultSlot
>

// ----------------------------------------------------------------------------
// w-transition-slide-fade
// ----------------------------------------------------------------------------

export type WTransitionSlideFadeProps = WaveTransitionDirectionProps

export type WTransitionSlideFade = DefineComponent<
  WTransitionSlideFadeProps,
  {},
  {},
  ComputedOptions,
  MethodOptions,
  {},
  {},
  EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WTransitionSlideFadeProps, EmitsOptions>,
  ExtractDefaultPropTypes<WTransitionSlideFadeProps>,
  DefaultSlot
>
