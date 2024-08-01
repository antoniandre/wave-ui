import { reactive, inject } from 'vue'
import { mergeConfig } from './utils/config'
import { consoleWarn } from './utils/console'
import { colorPalette, generateColorShades, flattenColors } from './utils/colors'
import { injectColorsCSSInDOM, injectCSSInDOM } from './utils/dynamic-css'
import { injectNotifManagerInDOM, NotificationManager } from './utils/notification-manager'
import './scss/index.scss'

let mounted = false
const detectOSDarkMode = $waveui => {
  const matchMedia = window.matchMedia('(prefers-color-scheme: dark)')
  $waveui.preferredTheme = matchMedia.matches ? 'dark' : 'light'
  $waveui.switchTheme($waveui.preferredTheme)

  matchMedia.addEventListener('change', event => {
    $waveui.preferredTheme = event.matches ? 'dark' : 'light'
    $waveui.switchTheme($waveui.preferredTheme)
  })
}

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
  static #registered = false

  // Exposed as a global object and also `app.provide`d.
  // Accessible from this.$waveui, or inject('$waveui').
  $waveui = {
    breakpoint: {
      name: '',
      xs: false,
      sm: false,
      md: false,
      lg: false,
      xl: false,
      width: null
    },
    config: {},
    colors: {}, // Object of pairs of color-name => color hex.
    preferredTheme: null, // The user OS preferred theme (light or dark).
    theme: null, // The current theme (light or dark).
    _notificationManager: null,

    // Callable from this.$waveui.
    notify (...args) {
      this._notificationManager.notify(...args)
    },

    // Callable from this.$waveui.
    switchTheme (theme, skipFlatten = false) {
      this.theme = theme
      document.documentElement.setAttribute('data-theme', theme)
      document.head.querySelector('#wave-ui-colors')?.remove?.()
      const themeColors = this.config.colors[this.theme]
      injectColorsCSSInDOM(themeColors, this.config.css.colorShadeCssVariables)
      this.colors = flattenColors(themeColors, colorPalette)
    }
  }

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
      // If presets are defined for this component inject them into the props defaults.
      if (options.presets?.[component.name]) injectPresets(component, options.presets[component.name])
      app.component(component.name, component)
    }

    // Register mixins.
    app.mixin({
      // Add a mixin to capture the first mounted hook, trigger the Wave UI init then unregister the mixin straight away.
      beforeMount () {
        if (!mounted) {
          mounted = true
          const $waveui = inject('$waveui')
          const { config } = $waveui

          // Add the .w-app class where defined by user or at the root.
          const wApp = document.querySelector(config.on) || document.body
          wApp.classList.add('w-app')

          if (config.theme === 'auto') detectOSDarkMode($waveui) // Also switches the theme.
          else $waveui.switchTheme(config.theme, true)

          injectCSSInDOM($waveui)
          injectNotifManagerInDOM(wApp, components, $waveui)

          // This mixin must only run once, we can delete it.
          app._context.mixins.find(mixin => mixin.mounted && delete mixin.mounted)
        }
      }
    })

    // eslint-disable-next-line no-new
    new WaveUI(app, options)
    WaveUI.#registered = true
  }

  constructor (app, options = {}) {
    if (WaveUI.#registered) return // May happen with SSR.

    this.$waveui._notificationManager = new NotificationManager()

    if (!options.theme) options.theme = 'light'
    // Move colors inside a theme if there are option.colors without theme.
    // E.g. colors: { primary, ... } & not colors: { light { primary, ... }, dark: { primary, ... } })
    if (options.colors) {
      const colors = { ...options.colors }
      if (!options.colors.light) options.colors.light = colors
      if (!options.colors.dark) options.colors.dark = colors
      // Cleanup anything else than themes in config.colors.
      options.colors = { light: options.colors.light, dark: options.colors.dark }
    }

    // Merge user options into the default config.
    let { components, ...config } = options
    config = this.$waveui.config = mergeConfig(config)

    // Generates color shades for each color of each theme and store in the config.colors object.
    if (config.css.colorShades) generateColorShades(config)

    // Make Wave UI reactive and expose the single instance in the app.
    const $waveui = reactive(this.$waveui)
    app.config.globalProperties.$waveui = $waveui
    app.provide('$waveui', $waveui)

    if (config.theme !== 'auto') {
      this.$waveui.colors = flattenColors(config.colors[config.theme], colorPalette)
    }
  }
}
