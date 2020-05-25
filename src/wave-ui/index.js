import { mergeConfig } from './utils/config'
import * as components from './components'
// import * as directives from './directives'

export default class WaveUI {
  static instance = null
  static vueInstance = null // Needed until constructor.

  breakpoint = {
    name: '',
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false
  }

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
