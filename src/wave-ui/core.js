import { reactive, inject } from 'vue'
import { mergeConfig } from './utils/config'
import NotificationManager from './utils/notification-manager'
import { colorPalette, generateColorShades, flattenColors } from './utils/colors'
import { injectColorsCSSInDOM, injectCSSInDOM } from './utils/dynamic-css'
import './scss/index.scss'

let mounted = false

export default class WaveUI {
  static #registered = false
  _notificationManager = null

  // Public breakpoint object. Accessible from this.$waveui.breakpoint.
  breakpoint = {
    name: '',
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    width: null
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
    app.mixin({
      // Add a mixin to capture the first mounted hook, trigger the Wave UI init then unregister the mixin straight away.
      mounted () {
        if (!mounted) {
          mounted = true
          const $waveui = inject('$waveui')

          // Add the .w-app class where defined by user or at the root.
          const wApp = document.querySelector($waveui.config.on) || document.documentElement
          wApp.classList.add('w-app')

          injectColorsCSSInDOM($waveui.config)
          injectCSSInDOM($waveui)

          // This mixin must only run once, we can delete it.
          app._context.mixins.find(mixin => mixin.mounted && delete mixin.mounted)
        }
      }
    })

    new WaveUI(app, options)
    WaveUI.#registered = true
  }

  constructor (app, options = {}) {
    if (WaveUI.#registered) {
      console.warn('Wave UI is already instantiated.')
      return
    }

    this._notificationManager = new NotificationManager()

    if (!options.theme) options.theme = 'light'
    // Move colors inside a theme if there are option.colors without theme.
    // E.g. colors: { primary, ... } & not colors: { light { primary, ... }, dark: { primary, ... } })
    const colors = { ...options.colors }
    if (!options.colors?.light) options.colors.light = colors
    if (!options.colors?.dark) options.colors.dark = colors
    // Cleanup anything else than themes in config.colors.
    options.colors = { light: options.colors.light, dark: options.colors.dark }

    // Merge user options into the default config.
    const { components, ...config } = options
    this.config = mergeConfig(config)

    // Generates color shades for each color of each theme and store in the config.colors object.
    generateColorShades(this.config)
    this.colors = flattenColors(this.config, colorPalette)

    // Make Wave UI reactive and expose the single instance in the app.
    app.config.globalProperties.$waveui = reactive(this)
    app.provide('$waveui', app.config.globalProperties.$waveui)
  }

  // Callable from this.$waveui.
  notify (...args) {
    this._notificationManager.notify(...args)
  }

  // Callable from this.$waveui.
  switchTheme (theme) {
    this.config.theme = theme
    document.documentElement.setAttribute('data-theme', theme)
    document.head.querySelector('#wave-ui-colors')?.remove?.()
    injectColorsCSSInDOM(this.config)
  }
}

/**
 * Returns the WaveUI instance. Equivalent to using `$waveui` inside templates.
 */
export const useWaveUI = () => inject('$waveui')
