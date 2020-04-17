import * as components from './components'
// import * as directives from './directives'

const WaveUI = {
  install (Vue) {
    // Register directives.
    // for (const id in directives) {
    //   if (directives[id]) Vue.directive(id, directives[id])
    // }

    // Register components.
    for (let id in components) {
      const component = components[id]
      Vue.component(component.name, component)
    }

    // Vue.mixin({
    //   mounted () {
    //   }
    // })
  }
}
export default WaveUI

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(WaveUI)
}
