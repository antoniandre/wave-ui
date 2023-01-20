import WaveUI from './core'
import * as components from './components'

const install = WaveUI.install
WaveUI.install = (app, options = {}) => install.call(WaveUI, app, { components, ...options })

export { useWaveUI } from './core'
export default WaveUI
