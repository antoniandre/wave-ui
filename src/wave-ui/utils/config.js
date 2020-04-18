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
    success: '#4b4',
    error: '#f55',
    warning: '#f80',
    info: '#29f'
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
