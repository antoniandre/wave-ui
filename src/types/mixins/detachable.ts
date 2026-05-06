/**
 * DetachableMixin adds this reactive field on `w-menu` and `w-tooltip`.
 * It is internal — used so `<Teleport>` is omitted until `mounted()` for SSR/hydration parity (e.g. Nuxt).
 */
export interface WaveDetachableMixinInstance {
  detachableDomReady: boolean
}
