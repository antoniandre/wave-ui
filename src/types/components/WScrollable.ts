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
// Scroll payload (matches `buildPayload` in w-scrollable.vue)
// ----------------------------------------------------------------------------
export type WaveScrollableScrollSource = 'native' | 'wheel' | 'keyboard' | 'api' | 'drag'

export interface WaveScrollableScrollPayload {
  top: number
  left: number
  maxTop: number
  maxLeft: number
  topPercent: number
  leftPercent: number
  source: WaveScrollableScrollSource
}

/** Per-axis pixel offsets for the `scroll-position` prop. */
export interface WaveScrollableScrollPosition {
  top?: number
  left?: number
}

/** `scroll-position` prop: a number is the primary axis (`top` when vertical, `left` when horizontal), or set one or both axes with an object. */
export type WaveScrollableScrollPositionInput = number | WaveScrollableScrollPosition

/** Accepted `scrollbar` prop values. */
export type WaveScrollableScrollbar = 0|1|'0'|'1'|'hover'|'interaction'

// ----------------------------------------------------------------------------
// Props
// ----------------------------------------------------------------------------
export interface WaveScrollableProps {
  /**
   * Applies a color to the scrollbar thumb.
   * @property {string} color - Default: 'primary'
   * @see https://antoniandre.github.io/wave-ui/w-scrollable
   */
  color?: string

  /**
   * Applies a color to the scrollbar track.
   * @property {string} bgColor
   * @see https://antoniandre.github.io/wave-ui/w-scrollable
   */
  bgColor?: string

  /**
   * Limits the component width.
   * @property {number|string} width
   * @see https://antoniandre.github.io/wave-ui/w-scrollable
   */
  width?: number|string

  /**
   * Limits the component height.
   * @property {number|string} height
   * @see https://antoniandre.github.io/wave-ui/w-scrollable
   */
  height?: number|string

  /**
   * Classes applied to the inner scroll container (padding, typography, etc.).
   * @property {string|object|array} contentClass
   * @see https://antoniandre.github.io/wave-ui/w-scrollable
   */
  contentClass?: string|Record<string, boolean>|(string|Record<string, boolean>)[]

  /**
   * Fully inert: no keyboard, wheel, or custom drag; root gets aria-disabled and tabindex -1.
   * @property {boolean} disabled - Default: false
   * @see https://antoniandre.github.io/wave-ui/w-scrollable
   */
  disabled?: boolean

  /**
   * Sets the root tabindex.
   * @property {number|string} tabindex - Default: 0
   * @see https://antoniandre.github.io/wave-ui/w-scrollable
   */
  tabindex?: number|string

  /**
   * Defines the wheel and arrow-key step in pixels.
   * @property {number} wheelStep - Default: 40
   * @see https://antoniandre.github.io/wave-ui/w-scrollable
   */
  wheelStep?: number

  /**
   * When true, scrolling is along X (`scrollLeft`); default false is vertical (`scrollTop`).
   * @property {boolean} horizontal - Default: false
   * @see https://antoniandre.github.io/wave-ui/w-scrollable
   */
  horizontal?: boolean

  /**
   * Custom scrollbar: `1` (default, shown when there is overflow), `0` (hide track), `'hover'`, `'interaction'`.
   * @property {WaveScrollableScrollbar} scrollbar - Default: 1
   * @see https://antoniandre.github.io/wave-ui/w-scrollable
   */
  scrollbar?: WaveScrollableScrollbar

  /**
   * Programmatic scroll: applied on change (deep watch for objects) and after first layout.
   * A number sets the primary axis; an object sets `top` and/or `left` when those keys are present.
   * @property {WaveScrollableScrollPositionInput|null} scrollPosition - Default: null
   * @see https://antoniandre.github.io/wave-ui/w-scrollable
   */
  scrollPosition?: WaveScrollableScrollPositionInput|null
}

// ----------------------------------------------------------------------------
// Emits (listener props: `onX` for `@x` / `v-on`)
// ----------------------------------------------------------------------------
export interface WaveScrollableEmits {
  /**
   * Emitted on each scroll update.
   * @param payload - Current scroll position and source.
   * @see https://antoniandre.github.io/wave-ui/w-scrollable
   */
  'onScroll'?: (payload: WaveScrollableScrollPayload) => void

  /**
   * Emitted when a scroll sequence starts.
   * @param payload - Current scroll position and source.
   * @see https://antoniandre.github.io/wave-ui/w-scrollable
   */
  'onScrollStart'?: (payload: WaveScrollableScrollPayload) => void

  /**
   * Emitted when scrolling has settled after the last event.
   * @param payload - Current scroll position; `source` is often `'native'`.
   * @see https://antoniandre.github.io/wave-ui/w-scrollable
   */
  'onScrollEnd'?: (payload: WaveScrollableScrollPayload) => void
}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveScrollableComputeds extends ComputedOptions {
  hasOverflow: ComputedGetter<boolean>
  isHorizontal: ComputedGetter<boolean>
}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveScrollableMethods extends MethodOptions {
  scroll(value?: number|{ top?: number, left?: number, behavior?: 'auto'|'smooth' }): void
  scrollTo(options?: { top?: number, left?: number, behavior?: 'auto'|'smooth' }): void
  scrollBy(options?: { top?: number, left?: number, behavior?: 'auto'|'smooth' }): void
  scrollToStart(): void
  scrollToEnd(): void
  focus(): void
  refresh(): void
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveScrollableSlots = SlotsType<{
  /**
   * Scrollable content.
   * @see https://antoniandre.github.io/wave-ui/w-scrollable
   */
  'default': () => any
}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WScrollable = DefineComponent<
  WaveScrollableProps,
  {},
  {},
  WaveScrollableComputeds,
  WaveScrollableMethods,
  {},
  {},
  WaveScrollableEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveScrollableProps & WaveScrollableEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveScrollableProps>,
  WaveScrollableSlots
>
