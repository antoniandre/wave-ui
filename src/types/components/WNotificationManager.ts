/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import type {
  ComputedGetter,
  ComputedOptions,
  DefineComponent,
  EmitsOptions,
  ExtractDefaultPropTypes,
  MethodOptions,
  SlotsType
} from 'vue'

import type {
  PublicProps,
  ResolveProps
} from '../extra-vue-types'

// ----------------------------------------------------------------------------
// Props
// ----------------------------------------------------------------------------
export type WaveNotificationManagerProps = {}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export type WaveNotificationManagerEmits = {}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveNotificationManagerComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-notification-manager
   */
  conf: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-notification-manager
   */
  notifications: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-notification-manager
   */
  transition: ComputedGetter<any>
}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveNotificationManagerMethods extends MethodOptions {
  /**
   * TODO: Add Description
   * @param {any} notif
   * @see https://antoniandre.github.io/wave-ui/w-notification-manager
   */
  notifProps(notif: any): void
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveNotificationManagerSlots = SlotsType<{
}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WNotificationManager = DefineComponent<
  WaveNotificationManagerProps,
  {},
  {},
  WaveNotificationManagerComputeds,
  WaveNotificationManagerMethods,
  {},
  {},
  WaveNotificationManagerEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveNotificationManagerProps & WaveNotificationManagerEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveNotificationManagerProps>,
  WaveNotificationManagerSlots
>
