/* eslint-disable @typescript-eslint/ban-types */
import { WaveColor } from './colors'
import { WaveAlertProps } from './components/WAlert'

export type WaveNotificationType = 'info' | 'success' | 'warning' | 'error';
export interface $waveui {
  breakpoint: {
    name: string,
    xs: boolean,
    sm: boolean,
    md: boolean,
    lg: boolean,
    xl: boolean,
    width: number|null,
  },
  config: {
    /**
     * From version 3.0. Sets the Wave UI root on a custom node (expects a valid CSS selector)
     * @property {string} on - Default: '#app', if not found body will be used
     * @see https://antoniandre.github.io/wave-ui/options-presets-and-waveui
     */
    on: string,

    /**
     * Breakpoint settings
     * @property breakpoints
     * @see https://antoniandre.github.io/wave-ui/breakpoints#default-breakpoints
     * @see https://antoniandre.github.io/wave-ui/options-presets-and-waveui
     */
    breakpoints: {
      /**
       * @property {number} xs - Default: 600
       */
      xs: number,
      /**
       * @property {number} sm - Default: 900
       */
      sm: number,
      /**
       * @property {number} md - Default: 1200
       */
      md: number,
      /**
       * @property {number} lg - Default: 1700
       */
      lg: number,
      /**
       * Xl only needs a greater value than lg but starts from lg and goes to infinity.
       * @property {number} xl - Default: 9999
       */
      xl: number,
    },

    /**
     * Css settings
     * @property css
     * @see https://antoniandre.github.io/wave-ui/colors
     * @see https://antoniandre.github.io/wave-ui/options-presets-and-waveui
     */
    css: {
      /**
       * Generate shades for custom colors and status colors.
       * NOTE: the color palette shades are always generated separately from SCSS.
       * @property {boolean} colorShades - Default: true
       */
      colorShades: boolean,

      /**
       * Generate CSS variables for color shades.
       * NOTE: the `colorShades` must be enabled for this to work.
       * @property {boolean} colorShadeCssVariables - Default: false
       */
      colorShadeCssVariables: boolean,

      /**
       * Generate margin and padding utility classes for each breakpoint. E.g. `sm-ma2`
       * @property {boolean} breakpointSpaces - Default: false
       */
      breakpointSpaces: boolean,

      /**
       * Generate helper classes for each breakpoint. E.g. `sm-text-left` `sm-hide`
       * @property {boolean} breakpointLayoutClasses - Default: true
       * @see https://antoniandre.github.io/wave-ui/breakpoints#breakpoint-specific-layout-classes
       */
      breakpointLayoutClasses: boolean,

      /**
       * How many columns the flexbox based grid will use
       * @property {number} grid - Default: 12
       * @see https://antoniandre.github.io/wave-ui/layout--grid-system
       */
      grid: number,
    },

    /**
     * Color/Theme settings
     * @property colors
     * @see https://antoniandre.github.io/wave-ui/colors
     * @see https://antoniandre.github.io/wave-ui/colors#defining-your-own-css-colors-in-the-wave-ui-configuration
     */
    colors: {
      /**
       * The light theme default colors
       * @property light
       */
      light: {
        /**
         * @property {string} primary - Default: '#234781'
         */
        primary: string,

        /**
         * @property {string} secondary - Default: '#d3ebff'
         */
        secondary: string,

        /**
         * @property {string} info - Default: '#3d9ff5'
         */
        info: string,

        /**
         * @property {string} warning - Default: '#ff8800'
         */
        warning: string,

        /**
         * @property {string} success - Default: '#54b946'
         */
        success: string,

        /**
         * @property {string} error - Default: '#f65555'
         */
        error: string,

        /**
         * Here any additional colors can be defined by the user.
         * @property {string} {string}
         * @see https://antoniandre.github.io/wave-ui/colors#defining-your-own-css-colors-in-the-wave-ui-configuration
         */
        [key: string]: string
      },

      /**
       * The dark theme default colors
       * @property dark
       */
      dark: {
        /**
         * @property {string} primary - Default: '#89b6d2'
         */
        primary: string,

        /**
         * @property {string} secondary - Default: '#375b6a'
         */
        secondary: string,

        /**
         * @property {string} info - Default: '#3d9ff5'
         */
        info: string,

        /**
         * @property {string} warning - Default: '#ff8800'
         */
        warning: string,

        /**
         * @property {string} success - Default: '#54b946'
         */
        success: string,

        /**
         * @property {string} error - Default: '#f65555'
         */
        error: string,

        /**
         * Here any additional colors can be defined by the user.
         * @property {string} {string}
         * @see https://antoniandre.github.io/wave-ui/colors#defining-your-own-css-colors-in-the-wave-ui-configuration
         */
        [key: string]: string
      },
    },

    /**
     * The initial theme to use
     * To switch theme while running, call the $waveui.switchTheme('light'|'dark') method.
     * @property {string} theme - Default: 'light'
     * @see https://antoniandre.github.io/wave-ui/options-presets-and-waveui
     */
    theme: 'light' | 'dark' | 'auto',

    /**
     * Not sure what this does.
     * @property {array} icons - Default: '[]'
     * @see https://antoniandre.github.io/wave-ui/w-icon
     */
    icons: [],

    /**
     * Whether or not to use icon ligatures
     * @property {boolean} iconsLigature - Default: 'false'
     * @see https://antoniandre.github.io/wave-ui/w-icon
     */
    iconsLigature: boolean,

    /**
     * Notification manager settings
     * @property align
     * @see https://antoniandre.github.io/wave-ui/w-notification
     */
    notificationManager: {
      /**
       * Here any additional colors can be defined by the user.
       * @property {string} align - Default: 'right'
       * @see https://antoniandre.github.io/wave-ui/w-notification#align-to-the-left-or-right
       */
      align: 'right' | 'left',

      /**
       * Here any additional colors can be defined by the user.
       * @property {string|false} transition - Default: 'default'
       * @see https://antoniandre.github.io/wave-ui/w-notification#different-transitions
       */
      transition: false | 'default' | 'bounce' | 'scale' | 'twist' | 'fade' | 'slide-fade-left' | 'slide-fade-right' | 'slide-fade-up' | 'slide-fade-down',
    },

    /**
     * Component presets
     * @property presets
     * @see https://antoniandre.github.io/wave-ui/options-presets-and-waveui
     */
    presets: Record<string, Record<string, string | number | boolean>>,
  },
  colors: Record<WaveColor | string, string>, // Object of pairs of color-name => color hex.
  preferredTheme: null, // The user OS preferred theme (light or dark).
  theme: null, // The current theme (light or dark).
  _notificationManager: null,

  /**
   * @param {string} message
   * @param {NotificationType} type Defaults to 'info'
   * @param {number} timeout Time to live. Defaults to 4000. 0 is permanently.
   */
  notify(message: string, type?: WaveNotificationType, timeout?: number): void

  notify(options: {message: string, timeout: number} & WaveAlertProps): void
  switchTheme (theme: string, skipFlatten: boolean): void
}
