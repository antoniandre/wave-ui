import { reactive, inject } from 'vue'
import config, { mergeConfig } from './utils/config'
import NotificationManager from './utils/notification-manager'
import { colorPalette, generateColorShades, flattenColors } from './utils/colors'
// import * as directives from './directives'

// Keep the notification manager private.
// @todo: find a way to use private fields with Vue 3 proxies.
// https://github.com/tc39/proposal-class-fields/issues/106
// https://github.com/tc39/proposal-class-fields/issues/227
let notificationManager = null

export default class WaveUI {
  static instance = null
  static vueInstance = null // Needed until constructor is called.
  // #notificationManager

  // Public breakpoint object. Accessible from this.$waveui.breakpoint.
  breakpoint = {
    name: '',
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false
  }

  // Store and expose the config and colors in the $waveui object.
  // Accessible from anywhere via `this.$waveui.config`.
  config = {}
  colors = {} // Object of pairs of color-name => color hex.

  static install (app, options = {}) {
    // Register directives.
    app.directive('focus', {
      // Wait for the next tick to focus the newly mounted element.
      mounted: el => setTimeout(() => el.focus(), 0)
    })
    app.directive('scroll', {
      mounted: (el, binding) => {
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
      app.component(component.name, component)
    }

    // Register mixins.
    // app.mixin({
    //   mounted () {
    //   }
    // })

    WaveUI.registered = true
  }

  // Singleton.
  constructor (app, options = {}) {
    if (WaveUI.instance) return WaveUI.instance

    else {
      if (!WaveUI.registered) app.use(WaveUI)
      notificationManager = reactive(new NotificationManager())

      // Merge user options into the default config.
      this.config = mergeConfig(options)

      // Generates color shades for each color of each theme and store in the config.colors object.
      generateColorShades(this.config)
      this.colors = flattenColors(this.config, colorPalette)

      this.notify = (...args) => notificationManager.notify(...args)
      WaveUI.instance = this

      // Make waveui reactive and expose the single instance in Vue.
      app.config.globalProperties.$waveui = reactive(this)
      app.provide('$waveui', WaveUI.instance)
    }
  }

  notify (...args) {
    notificationManager.notify(...args)
  }
}

/**
 * Returns the WaveUI instance. Equivalent to using `$waveui` inside templates.
 */
export const useWaveUI = () => inject('$waveui')
