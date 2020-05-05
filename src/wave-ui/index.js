import Vue from 'vue'
import { mergeConfig } from './utils/config'
import * as components from './components'
// import * as directives from './directives'

class WaveUI {
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
  }

  constructor (options = {}) {
    // Make waveUI reactive!
    Vue.prototype.$waveUI = Vue.observable(this)

    // Merge user options into default config.
    mergeConfig(options)
  }
}
export default WaveUI

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(WaveUI)
}
