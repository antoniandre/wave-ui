/* eslint-disable @typescript-eslint/ban-types */
import type { App } from 'vue'

import type { $waveui } from '@/types/$waveui'

export interface BreakpointConfig {
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

export interface ConstructorOptions {
  colors?: Record<string, string|Record<string, string>>;
  breakpoints?: BreakpointConfig
}

export declare class WaveUIPlugin {
  static #registered: boolean

  $waveui: $waveui

  constructor(app: App, options?: ConstructorOptions & {})

  static install(app: App, options?: ConstructorOptions & {}): undefined
}
