const config = {
  breakpoints: {
    xs: 600,
    sm: 900,
    md: 1200,
    lg: 1700,
    xl: 9999 // Xl only needs a greater value than lg but starts from lg and goes to infinity.
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

export const mergeConfig = options => {
  for (let key in options) {
    const option = options[key]
    if (typeof option === 'object') Object.assign(config[key], option)
    else config[key] = option
  }
}
