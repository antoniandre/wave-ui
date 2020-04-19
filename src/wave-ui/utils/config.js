const config = {
  breakpoints: {
    xs: 600,
    sm: 960,
    md: 1280,
    lg: 1920
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
