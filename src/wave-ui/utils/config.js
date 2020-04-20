const config = {
  breakpoints: {
    xs: 550,
    sm: 900,
    md: 1200,
    lg: 1700,
    xl: 4000
  },
  colors: {
    primary: '#234781',
    secondary: '#d4e9ed',
    accent: '#2196f3',
    success: '#54b946',
    error: '#f65555',
    warning: '#f80',
    info: '#3d9ff5'
  },
  icons: []
}

export { config as default }

export const mergeConfig = (options) => {
  for (let key in options) {
    const option = options[key]
    if (typeof option === 'object') Object.assign(config[key], option)
    else config[key] = option
  }
}
