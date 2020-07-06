import config, { mergeConfig } from './utils/config'
import colors from './utils/colors'
import * as components from './components'
// import * as directives from './directives'

const shadeColor = (col, amt) => {
  return '#' + col.slice(1).match(/../g)
    .map(x => (x =+ `0x${x}` + amt, x < 0 ? 0 : ( x > 255 ? 255 : x)).toString(16).padStart(2, 0))
    .join('')
}

export default class WaveUI {
  static instance = null
  static vueInstance = null // Needed until constructor.

  // Public breakpoint object. Accessible from this.$waveUI.breakpoint.
  breakpoint = {
    name: '',
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false
  }

  // A public object containing pairs of color-name => color hex.
  // Accessible from this.$waveUI.colors.
  colors = colors.reduce((obj, color) => {
    obj[color.label] = color.color
    color.shades.forEach(shade => (obj[shade.label] = shade.color))
    return obj
  }, { ...config.colors, black: '#000', white: '#fff', transparent: 'transparent' })

  static install (Vue) {
    // Register directives.
    // for (const id in directives) {
    //   if (directives[id]) Vue.directive(id, directives[id])
    // }
    Vue.directive('focus', {
      // When the bound element is inserted into the DOM...
      inserted: el => el.focus()
    })

    // Register components.
    for (let id in components) {
      const component = components[id]
      Vue.component(component.name, component)
    }

    // Register mixins.
    // Vue.mixin({
    //   mounted () {
    //   }
    // })

    // Save the Vue instance for use in the constructor.
    WaveUI.vueInstance = Vue
  }

  // Singleton.
  constructor (options = {}) {
    if (WaveUI.instance) return WaveUI.instance

    else {
      // Merge user options into default config.
      mergeConfig(options)

      // Add color shades for each custom color given in options.
      config.colorShades = {}

      for (let color in config.colors) {
        color = { label: color, color: config.colors[color].replace('#', '') }
        const col = color.color
        if (col.length === 3) color.color = col[0] + '' + col[0] + col[1] + col[1] + col[2] + col[2]

        this.colors[color.label] = `#${color.color}`

        for (let i = 1; i <= 3; i++) {
          const lighterColor = shadeColor(`#${color.color}`, i * 40)
          const darkerColor = shadeColor(`#${color.color}`, -i * 40)
          this.colors[`${color.label}-lighter-${i}`] = lighterColor
          this.colors[`${color.label}-darker-${i}`] = darkerColor

          // Adding the shades to the config object to generate the CSS from w-app.
          config.colorShades[`${color.label}-lighter-${i}`] = lighterColor
          config.colorShades[`${color.label}-darker-${i}`] = darkerColor
        }
      }

      WaveUI.instance = this
      // Make waveUI reactive and expose the single instance in Vue.
      WaveUI.vueInstance.prototype.$waveUI = WaveUI.vueInstance.observable(this)

      delete WaveUI.vueInstance // Get rid of the Vue instance that we don't need anymore.
      // return WaveUI.instance
    }
  }
}

WaveUI.version = '__VERSION__'

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(WaveUI)
}
