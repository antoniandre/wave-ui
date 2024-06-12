import { reactive } from 'vue'

const config = reactive({
  on: '#app', // Sets the Wave UI root node. If not found, will default to `body`.
  breakpoints: {
    xs: 600,
    sm: 900,
    md: 1200,
    lg: 1700,
    xl: 9999 // Xl only needs a greater value than lg but starts from lg and goes to infinity.
  },
  css: {
    // Generate shades for custom colors and status colors.
    // Note: the color palette shades are always generated separately from SCSS.
    colorShades: true,

    // Generate CSS variables for color shades.
    // Note: colorShades must be enabled for this to work.
    colorShadeCssVariables: false,

    // Generate palette colors and palette color shades.
    // Can't have this option: color palette is generated via SCSS in colors.scss.
    // colorPalette: true,

    breakpointSpaces: false, // Generate margin & padding classes for each breakpoint. E.g. `sm-ma2`.
    // Generate helper classes for each breakpoint.
    // E.g. `sm-text-left`, `xs-hide`.
    breakpointLayoutClasses: true,
    grid: 12
  },
  colors: {
    // Default colors of Wave UI. Can be overridden from the Wave UI user config on init.
    light: {
      primary: {
        color: '#234781',
        lightOffset: -8,
        lightIncrement: 13.4,
        darkIncrement: 1
      },
      secondary: '#d3ebff',
      info: '#3d9ff5',
      warning: '#f80',
      success: '#54b946',
      error: '#f65555'
    },
    dark: {
      primary: '#89b6d2',
      secondary: '#375b6a',
      info: '#3d9ff5',
      warning: '#f80',
      success: '#54b946',
      error: '#f65555'
    },
    palette: {
      pink: {
        color: '#e91e63',
        lightOffset: -8,
        lightIncrement: 13.4
      },
      purple: {
        color: '#a741b9',
        lightOffset: -17,
        lightIncrement: 13
      },
      'deep-purple': {
        color: '#673ab7',
        lightIncrement: 16,
        darkIncrement: 11.4
      },
      indigo: {
        color: '#3f51b5',
        lightIncrement: 16,
        darkIncrement: 11.4
      },
      blue: {
        color: '#2196f3',
        lightIncrement: 13.6,
        darkIncrement: 13.6
      },
      'light-blue': {
        color: '#03a9f4',
        lightIncrement: 15.6
      },
      cyan: {
        color: '#04cbe5',
        lightOffset: 5,
        lightIncrement: 19.2,
        darkIncrement: 10.8
      },
      teal: {
        color: '#1db3a8',
        lightOffset: 6.5,
        lightIncrement: 18.8,
        darkIncrement: 11.4
      },
      green: {
        color: '#4caf50',
        lightIncrement: 15.2,
        darkIncrement: 11.4
      },
      'light-green': {
        color: '#90d73f',
        lightOffset: -5,
        lightIncrement: 12
      },
      lime: {
        color: '#cee029',
        lightOffset: -6,
        lightIncrement: 12.4
      },
      yellow: {
        color: '#ffe70f',
        lightOffset: -8,
        lightIncrement: 11
      },
      amber: '#ffc107',
      orange: '#ff9800',
      'deep-orange': {
        color: '#ff6825',
        lightIncrement: 12.8
      },
      red: {
        color: '#fa3317',
        lightOffset: -1,
        lightIncrement: 13
      },
      brown: {
        color: '#845848',
        lightIncrement: 17.6,
        darkIncrement: 5
      },
      'blue-grey': '#6c8693',
      grey: '#848484'
    }
  },
  // The initial theme to use.
  // To switch theme while running, call the $waveui.switchTheme('light'|'dark') method.
  theme: 'light', // One of 'light', 'dark', 'auto'.
  icons: [],
  iconsLigature: false,
  notificationManager: {
    align: 'right',
    transition: 'default' // Sliding from the side by default.
  },
  presets: {} // User presets for each component.
})

export { config as default }

export const mergeConfig = (options, conf = config) => {
  // If the conf object is empty, populate with options (case of presets).
  if (!Object.keys(conf).length) conf = Object.assign(conf, options)

  else {
    for (const key in options) {
      const option = options[key]
      if (typeof option === 'object') {
        mergeConfig(options[key], conf[key])
      }
      else conf[key] = option
    }
  }

  return conf
}
