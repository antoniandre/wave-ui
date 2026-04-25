import { applyRipple, getWaveUiFromInstance, isRippleEnabled } from './ripple'

function bindingDisabled (binding) {
  const v = binding.value
  if (v === false) return true
  if (v && typeof v === 'object' && v.disabled) return true
  return false
}

function rippleAllowed (binding, instance) {
  if (bindingDisabled(binding)) return false
  const $waveui = getWaveUiFromInstance(instance)
  if (binding.value === true) return isRippleEnabled(true, $waveui)
  return isRippleEnabled(undefined, $waveui)
}

export const waveRippleDirective = {
  mounted (el, binding) {
    el.classList.add('w-ripple')
    el.__waveRippleLastBinding = binding
    const handler = e => {
      if (typeof e.button === 'number' && e.button !== 0) return
      const b = el.__waveRippleLastBinding
      if (!rippleAllowed(b, b?.instance)) return
      applyRipple(el, e)
    }
    el.__waveRippleHandler = handler
    el.addEventListener('pointerdown', handler)
  },

  updated (el, binding) {
    el.__waveRippleLastBinding = binding
  },

  unmounted (el) {
    el.removeEventListener('pointerdown', el.__waveRippleHandler)
    delete el.__waveRippleHandler
    delete el.__waveRippleLastBinding
  }
}
