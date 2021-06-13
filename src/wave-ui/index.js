import WaveUI from './core'
import * as components from './components'

const install = WaveUI.install
WaveUI.install = (Vue, options = {}) => install.call(WaveUI, Vue, { components, ...options })

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) window.Vue.use(WaveUI)

export default WaveUI
