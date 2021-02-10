import WaveUI from './core'
import * as components from './components'

const install = WaveUI.install;
WaveUI.install = (app, options = {}) => install.call(WaveUI, app, { components, ...options })

export default WaveUI
