/**
 * Material-style pointer ripple: appends a transient node at the pointer, removes after animation.
 * SSR-safe: no-op when window/document are unavailable.
 *
 * @param {HTMLElement} hostEl
 * @param {PointerEvent|MouseEvent|TouchEvent} event
 * @param {{ disabled?: boolean, sizeRect?: DOMRect }} [options]
 */
export function applyRipple (hostEl, event, options = {}) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return
  if (!hostEl?.ownerDocument || options.disabled) return
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return

  let clientX = typeof event.clientX === 'number' ? event.clientX : null
  let clientY = typeof event.clientY === 'number' ? event.clientY : null
  if ((clientX == null || clientY == null) && event.touches?.length) {
    clientX = event.touches[0].clientX
    clientY = event.touches[0].clientY
  }
  if (clientX == null || clientY == null) return

  const rect = hostEl.getBoundingClientRect()
  const sizeRect = options.sizeRect || rect
  const maxSide = Math.max(sizeRect.width, sizeRect.height)
  const size = Math.max(maxSide * 2.5, 48)
  const x = clientX - rect.left - size / 2
  const y = clientY - rect.top - size / 2

  const inkContainer = document.createElement('span')
  inkContainer.className = 'w-ripple__ink-container'
  inkContainer.setAttribute('aria-hidden', 'true')

  const ink = document.createElement('span')
  ink.className = 'w-ripple__ink'
  ink.style.width = `${size}px`
  ink.style.height = `${size}px`
  ink.style.left = `${x}px`
  ink.style.top = `${y}px`

  inkContainer.appendChild(ink)
  hostEl.appendChild(inkContainer)

  const done = () => {
    ink.removeEventListener('animationend', done)
    inkContainer.remove()
  }
  ink.addEventListener('animationend', done, { once: true })
  // Fallback if animationend does not fire
  window.setTimeout(() => {
    if (inkContainer.parentNode === hostEl) inkContainer.remove()
  }, 600)
}

/**
 * @param {import('vue').ComponentPublicInstance | null | undefined} instance
 * @returns {{ config: { ripple?: boolean } }}
 */
export function getWaveUiFromInstance (instance) {
  const $waveui = instance?.$waveui
  if ($waveui && typeof $waveui === 'object') return $waveui
  return { config: { ripple: true } }
}

/**
 * @param {boolean|undefined} propRipple
 * @param {{ config?: { ripple?: boolean } }} $waveui
 */
export function isRippleEnabled (propRipple, $waveui) {
  if (typeof propRipple === 'boolean') return propRipple
  const g = $waveui?.config?.ripple
  return g !== false
}
