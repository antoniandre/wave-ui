import { consoleWarn } from './utils/console'
import { mergeConfig } from './utils/config'
import NotificationManager from './utils/notification-manager'
import { colorPalette, generateColorShades, flattenColors } from './utils/colors'

// const detectOSDarkMode = $waveui => {
//   const matchMedia = window.matchMedia('(prefers-color-scheme: dark)')
//   $waveui.preferredTheme = matchMedia.matches ? 'dark' : 'light'
//   $waveui.switchTheme($waveui.preferredTheme)

//   matchMedia.addEventListener('change', event => {
//     $waveui.preferredTheme = event.matches ? 'dark' : 'light'
//     $waveui.switchTheme($waveui.preferredTheme)
//   })
// }

/**
 * Inject presets into a Vue component props defaults before its registration into the app.
 * If a preset is not found in the given component props, try to find it in its mixins, if any.
 *
 * @todo remove mixins-related code when stopping support for Vue 2.
 * @param {Object} component the Vue component to inject presets into.
 * @param {Object} presets the presets to inject. E.g. `{ bgColor: 'green' }`.
 */
const injectPresets = (component, presets) => {
  for (const preset in presets) {
    // If we don't have the prop output a warning and continue.
    if (!component.props?.[preset]) {
      let foundProp = false
      // Check to see if the prop exists on a mixin when it doesn't exist on the component.
      // @todo: remove this check when there is no more Vue 2 and mixins: mixins are now deprecated.
      if (Array.isArray(component.mixins) && component.mixins.length) {
        // Loop through the array of mixin, and if we find the prop in one, update its default value.
        for (const mixin of component.mixins) {
          if (mixin?.props?.[preset]) {
            mixin.props[preset].default = presets[preset]
            foundProp = true
            break
          }
        }

        // If the given prop (= preset) is still not found in the mixins props raise warning.
        if (!foundProp) consoleWarn(`Attempting to set a preset on a prop that doesn't exist: \`${component.name}.${preset}\`.`)
        continue // Continue to the next preset.
      }
    }

    else component.props[preset].default = presets[preset]
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
    for (const id in components) {
      const component = components[id]
      // If presets are defined for this component inject them into the props defaults.
      if (options.presets?.[component.name]) injectPresets(component, options.presets[component.name])
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
