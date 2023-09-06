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
export interface WaveCardProps {
  /**
   * Applies a color to the card's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color
   * @see https://antoniandre.github.io/wave-ui/w-card
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * Applies a color to the card's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} bgColor
   * @see https://antoniandre.github.io/wave-ui/w-card
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  bgColor?: string

  /**
   * Applies a drop shadow to the card container.
   * @property {boolean} shadow
   * @see https://antoniandre.github.io/wave-ui/w-card
   */
  shadow?: boolean

  /**
   * Removes the default border from the card container.
   * @property {boolean} noBorder
   * @see https://antoniandre.github.io/wave-ui/w-card
   */
  noBorder?: boolean

  /**
   * Removes the default border-radius and sets sharp edges on the card container.
   * @property {boolean} tile
   * @see https://antoniandre.github.io/wave-ui/w-card
   */
  tile?: boolean

  /**
   * Provide a title for the card. Accepts HTML.
   * @property {string} title
   * @see https://antoniandre.github.io/wave-ui/w-card
   */
  title?: string

  /**
   * Provide a main image for the card.
   * @property {string} image
   * @see https://antoniandre.github.io/wave-ui/w-card
   */
  image?: string

  /**
   * When using `image`, this attribute accepts an object of props to pass down to the `w-image` component if you need to specify particular options.
   * @property {{}} imageProps
   * @see https://antoniandre.github.io/wave-ui/w-card
   */
  imageProps?: {}

  /**
   * Provide custom CSS classes for the card's title.
   * @property {string|{}|Array<any>} titleClass
   * @see https://antoniandre.github.io/wave-ui/w-card
   */
  titleClass?: string|{}|Array<any>

  /**
   * Provide custom CSS classes for the card's content.
   * @property {string|{}|Array<any>} contentClass
   * @see https://antoniandre.github.io/wave-ui/w-card
   */
  contentClass?: string|{}|Array<any>

  /**
   * TODO: Add Description
   * @property {boolean} dark
   * @see https://antoniandre.github.io/wave-ui/w-card
   */
  dark?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} light
   * @see https://antoniandre.github.io/wave-ui/w-card
   */
  light?: boolean

}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveCardEmits {
}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveCardComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-card
   */
  titleClasses: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-card
   */
  contentClasses: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-card
   */
  titleHasToolbar: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-card
   */
  actionsHasToolbar: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-card
   */
  imgProps: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-card
   */
  classes: ComputedGetter<any>

}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveCardMethods extends MethodOptions {
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveCardSlots = SlotsType<{
  /**
   * The card title, if the `title` prop isn't flexible enough.
   * @see https://antoniandre.github.io/wave-ui/w-card
   */
  'title': () => any

  /**
   * Provide some custom HTML to display on top of the card main image, when using `image`.
   * @see https://antoniandre.github.io/wave-ui/w-card
   */
  'image-content': () => any

  /**
   * The card content.
   * @see https://antoniandre.github.io/wave-ui/w-card
   */
  'default': () => any

  /**
   * Some card actions that will be displayed at the bottom of the card.
   * Has a flex layout.
   * @see https://antoniandre.github.io/wave-ui/w-card
   */
  'actions': () => any

}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WCard = DefineComponent<
  WaveCardProps,
  {},
  {},
  WaveCardComputeds,
  WaveCardMethods,
  {},
  {},
  WaveCardEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveCardProps & WaveCardEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveCardProps>,
  WaveCardSlots
>
