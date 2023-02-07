import { mergeConfig } from './utils/config'
import NotificationManager from './utils/notification-manager'
import { colorPalette, generateColorShades, flattenColors } from './utils/colors'
// import * as directives from './directives'

/**
 * Inject presets into a Vue component props defaults before its registration into the app.
 *
 * @param {Object} component the Vue component to inject presets into.
 * @param {Object} presets the presets to inject. E.g. `{ bgColor: 'green' }`.
 */
const injectPresets = (component, presets) => {
  for (const preset in presets) {
    component.props[preset].default = presets[preset]
  }
}

export default class WaveUI {
  static instance = null
  static vueInstance = null // Needed until constructor is called.

  // Exposed as a global object and also `app.provide`d.
  // Accessible from this.$waveui, or inject('$waveui').
  $waveui = {
    breakpoint: {
      name: '',
      xs: false,
      sm: false,
      md: false,
      lg: false,
      xl: false
    },
    config: {},
    colors: {}, // Object of pairs of color-name => color hex.
    _notificationManager: null,

    // Callable from this.$waveui.
    notify (...args) {
      this._notificationManager.notify(...args)
    }
  }

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
      // If presets are defined for this component inject them into the props defaults.
      if (options.presets[component.name]) injectPresets(component, options.presets[component.name])
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

    this.$waveui._notificationManager = new NotificationManager()

    // Merge user options into the default config.
    this.$waveui.config = mergeConfig(options)
    const config = this.$waveui.config

    // Generates color shades for each color of each theme and store in the config.colors object.
    if (config.css.colorShades) generateColorShades(config)
    this.$waveui.colors = flattenColors(config.colors, colorPalette)

    WaveUI.instance = this

    // Make Wave UI reactive and expose the single instance in the app.
    const $waveui = WaveUI.vueInstance.observable(this.$waveui)
    WaveUI.vueInstance.prototype.$waveui = $waveui

    delete WaveUI.vueInstance // Get rid of the Vue instance that we don't need anymore.
  }
}
