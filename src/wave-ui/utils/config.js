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
      primary: '#234781',
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
