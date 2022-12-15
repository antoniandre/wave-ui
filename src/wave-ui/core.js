import config, { mergeConfig } from './utils/config'
import NotificationManager from './utils/notification-manager'
import colors from './utils/colors'
// import * as directives from './directives'

const shadeColor = (color, amount) => {
  return '#' + color.slice(1).match(/../g)
    .map(x => (x =+ `0x${x}` + amount, x < 0 ? 0 : ( x > 255 ? 255 : x)).toString(16).padStart(2, 0))
    .join('')
}

export default class WaveUI {
  static instance = null
  static vueInstance = null // Needed until constructor is called.
  #notificationManager

  // Public breakpoint object. Accessible from this.$waveui.breakpoint.
  breakpoint = {
    name: '',
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false
  }

  // A public object containing pairs of color-name => color hex.
  // Accessible from anywhere via `this.$waveui.colors`.
  // These colors generate the CSS in `w-app` on mounted.
  colors = colors.reduce((obj, color) => {
    obj[color.label] = color.color
    color.shades.forEach(shade => (obj[shade.label] = shade.color))
    return obj
  }, { ...config.colors, black: '#000', white: '#fff', transparent: 'transparent', inherit: 'inherit' })

  config = {} // Store and expose the config in the $waveui object.

  static install (Vue, options = {}) {
    // Register directives.
    // for (const id in directives) {
    //   if (directives[id]) Vue.directive(id, directives[id])
    // }
    Vue.directive('focus', {
      // Wait for the next tick to focus the newly mounted element.
      inserted: el => setTimeout(() => el.focus(), 0)
    })
    Vue.directive('scroll', {
      inserted: (el, binding) => {
        const f = evt => {
          if (binding.value(evt, el)) window.removeEventListener('scroll', f)
        }
        window.addEventListener('scroll', f)
      }
    })

    // Register a-la-carte components from the given list.
    const { components = {} } = options || {}
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
      this.#notificationManager = new NotificationManager()

      // Merge user options into the default config.
      mergeConfig(options)

      // Add color shades for each custom color given in options.
      if (config.css.colorShades) {
        config.colorShades = {}

        for (let color in config.colors) {
          color = { label: color, color: config.colors[color].replace('#', '') }
          const col = color.color
          if (col.length === 3) color.color = col[0] + '' + col[0] + col[1] + col[1] + col[2] + col[2]

          this.colors[color.label] = `#${color.color}`

          for (let i = 1; i <= 3; i++) {
            const lighterColor = shadeColor(`#${color.color}`, i * 40)
            const darkerColor = shadeColor(`#${color.color}`, -i * 40)
            this.colors[`${color.label}-light${i}`] = lighterColor
            this.colors[`${color.label}-dark${i}`] = darkerColor

            // Adding the shades to the config object to generate the CSS from w-app.
            config.colorShades[`${color.label}-light${i}`] = lighterColor
            config.colorShades[`${color.label}-dark${i}`] = darkerColor
          }
        }
      }

      this.config = config
      this.notify = (...args) => notificationManager.notify(...args)
      WaveUI.instance = this

      // Make waveui reactive and expose the single instance in Vue.
      WaveUI.vueInstance.prototype.$waveui = WaveUI.vueInstance.observable(this)

      delete WaveUI.vueInstance // Get rid of the Vue instance that we don't need anymore.
    }
  }

  notify (...args) {
    this.#notificationManager.notify(...args)
  }
}

/**
 * Returns the WaveUI instance. Equivalent to using `$waveui` inside templates.
 */
export const useWaveUI = () => inject('$waveui')
