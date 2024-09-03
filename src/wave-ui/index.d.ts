/* eslint-disable @typescript-eslint/ban-types */
declare module 'wave-ui/src/wave-ui' {
  import { App } from 'vue'

  import type { $waveui } from '@/types/$waveui'
  import type { ConstructorOptions } from '@/types/plugin'

  export declare class WaveUIPlugin {
    static #registered: boolean

    $waveui: $waveui

    constructor(app: App, options?: ConstructorOptions & {})

    install(app: App, options?: ConstructorOptions & {}): undefined
  }

  const WaveUI: WaveUIPlugin

  export default WaveUI
}
