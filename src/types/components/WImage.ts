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
export interface WaveImageProps {
  /**
   * Tells which tag to use for the `w-image`'s image. It can be any valid HTML tag, like <span> or &lt;div&gt;. The wrapper of the image will use a &lt;span&gt; tag unless you use set the `tag` to div.
   * 
   * If you use the `img` tag, the image itself will use the &lt;img&gt; tag and the wrapper will use a &lt;span&gt; tag. The image will have a particular behavior as explained in the `Using the &lt;img&gt; tag` example.
   * @property {string} tag - Default: 'span'
   * @see https://antoniandre.github.io/wave-ui/w-image
   * @see https://antoniandre.github.io/wave-ui/#using-the-img-tag
   */
  tag?: string

  /**
   * The source of the image to display.
   * @property {string} src
   * @see https://antoniandre.github.io/wave-ui/w-image
   */
  src?: string

  /**
   * Sets the width of the image.
   * Accepts a string made of a value and a unit (e.g. `10em`) or a number (e.g. `450`) that will be a pixel value.
   * @property {number|string} width
   * @see https://antoniandre.github.io/wave-ui/w-image
   */
  width?: number|string

  /**
   * Sets the height of the image.
   * Accepts a string made of a value and a unit (e.g. `10em`) or a number (e.g. `450`) that will be a pixel value.
   * @property {number|string} height
   * @see https://antoniandre.github.io/wave-ui/w-image
   */
  height?: number|string

  /**
   * Sets the ratio of the image, allowing to only define a width or a height and preserve the image aspect ratio while resizing. Refer to the `Ratio` example.
   * @property {number|string} ratio
   * @see https://antoniandre.github.io/wave-ui/w-image
   * @see https://antoniandre.github.io/wave-ui/#ratio
   */
  ratio?: number|string

  /**
   * When set to true, the image will only load when it starts being visible in the viewport.
   * Refer to the `Lazy` example.
   * @property {boolean} lazy
   * @see https://antoniandre.github.io/wave-ui/w-image
   * @see https://antoniandre.github.io/wave-ui/#lazy
   */
  lazy?: boolean

  /**
   * Sets the CSS position of the image to `absolute`.
   * @property {boolean} absolute
   * @see https://antoniandre.github.io/wave-ui/w-image
   */
  absolute?: boolean

  /**
   * Sets the CSS position of the image to `fixed`.
   * @property {boolean} fixed
   * @see https://antoniandre.github.io/wave-ui/w-image
   */
  fixed?: boolean

  /**
   * By default the `w-image` component uses a background to display the image, and it sets the `background-size` to "`cover`". This option will set the `background-size` to "`contain`".
   * @property {boolean} contain
   * @see https://antoniandre.github.io/wave-ui/w-image
   */
  contain?: boolean

  /**
   * Removes the default spinner while the image is loading.
   * @property {boolean} noSpinner
   * @see https://antoniandre.github.io/wave-ui/w-image
   */
  noSpinner?: boolean

  /**
   * Define a specific color for the spinner while the image is loading. By default the spinner color is the primary color.
   * @property {string} spinnerColor
   * @see https://antoniandre.github.io/wave-ui/w-image
   */
  spinnerColor?: string

  /**
   * Provides a fallback image, to display when the given image source is not found. Refer to the `Fallback` example.
   * @property {string} fallback
   * @see https://antoniandre.github.io/wave-ui/w-image
   * @see https://antoniandre.github.io/wave-ui/#fallback
   */
  fallback?: string

  /**
   * Applies a particular transition to display the image when it is fully loaded.
   * Check all the transitions that apply to the notification in the `Transitions` example. Refer to the `transitions` example.
   * @property {string} transition - Default: 'fade'
   * @see https://antoniandre.github.io/wave-ui/w-image
   * @see https://antoniandre.github.io/wave-ui/#transitions
   * @see https://antoniandre.github.io/wave-ui/#transitions
   */
  transition?: string

  /**
   * Applies the given classes to the content wrapper when using the `default` slot.
   * @property {string|Array<any>|{}} contentClass
   * @see https://antoniandre.github.io/wave-ui/w-image
   */
  contentClass?: string|Array<any>|{}

}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveImageEmits {
  /**
   * Emitted when the image starts loading.
   * @param {any} renameMe1 - The image source that is being loaded (can be the provided <code>src</code> or <code>fallback</code> if the <code>src</code> already failed).
   * @see https://antoniandre.github.io/wave-ui/w-image
   */
  'onLoading'?: (renameMe1: any) => void

  /**
   * Emitted on image successful load.
   * @param {any} renameMe1 - The image source that was successfully loaded (can be the provided <code>src</code> or <code>fallback</code> if the <code>src</code> failed).
   * @see https://antoniandre.github.io/wave-ui/w-image
   */
  'onLoaded'?: (renameMe1: any) => void

  /**
   * Emitted on image load error.
   * @param {any} renameMe1 - The associated DOM event.
   * @see https://antoniandre.github.io/wave-ui/w-image
   */
  'onError'?: (renameMe1: any) => void

}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveImageComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-image
   */
  imgGivenRatio: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-image
   */
  wrapperTag: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-image
   */
  wrapperClasses: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-image
   */
  wrapperStyles: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-image
   */
  imageClasses: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-image
   */
  imageStyles: ComputedGetter<any>

}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveImageMethods extends MethodOptions {
  /**
   * TODO: Add Description
   * @param {any} [loadFallback] - false
   * @see https://antoniandre.github.io/wave-ui/w-image
   */
  loadImage(loadFallback?: any): void

}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveImageSlots = SlotsType<{
  /**
   * Provide a custom loading content, if the default spinner doesn't suit in your app.
   * @see https://antoniandre.github.io/wave-ui/w-image
   */
  'loading': () => any

  /**
   * Provide a custom content, to display on top of the image.
   * @see https://antoniandre.github.io/wave-ui/w-image
   */
  'default': () => any

}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WImage = DefineComponent<
  WaveImageProps,
  {},
  {},
  WaveImageComputeds,
  {},
  {},
  {},
  WaveImageEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveImageProps, WaveImageEmits & EmitsOptions>,
  ExtractDefaultPropTypes<WaveImageProps>,
  WaveImageSlots
>
