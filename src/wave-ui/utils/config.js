const config = {
  breakpoints: {
    xs: 600,
    sm: 900,
    md: 1200,
    lg: 1700,
    xl: 9999 // Xl only needs a greater value than lg but starts from lg and goes to infinity.
  },
  css: {
    // Generate shades for custom colors and status colors.
    // Palette color shades are always generated with palette.
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
    primary: '#234781',
    secondary: '#d3ebff',
    success: '#54b946',
    error: '#f65555',
    warning: '#f80',
    info: '#3d9ff5'
  },
  icons: [],
  iconsLigature: false,
  presets: {} // User presets for each component.
}

export { config as default }

export const mergeConfig = (options, conf = config) => {
  for (let key in options) {
    const option = options[key]
    if (typeof option === 'object') mergeConfig(options[key], conf[key])
    else conf[key] = option
  }
}
