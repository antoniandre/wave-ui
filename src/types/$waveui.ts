/* eslint-disable @typescript-eslint/ban-types */
import { WaveAlertProps } from './components/WAlert'

export type WaveNotificationType = 'info' | 'success' | 'warning' | 'error';
export interface $waveui {
  breakpoint: {
    name: string,
    xs: boolean,
    sm: boolean,
    md: boolean,
    lg: boolean,
    xl: boolean,
    width: number|null
  },
  config: {},
  colors: {}, // Object of pairs of color-name => color hex.
  preferredTheme: null, // The user OS preferred theme (light or dark).
  theme: null, // The current theme (light or dark).
  _notificationManager: null,

  /**
   * @param {string} message
   * @param {NotificationType} type Defaults to 'info'
   * @param {number} timeout Time to live. Defaults to 4000. 0 is permanently.
   */
  notify(message: string, type?: WaveNotificationType, timeout?: number): void

  notify(options: {message: string, timeout: number} & WaveAlertProps): void
  switchTheme (theme: string, skipFlatten: boolean): void
}
