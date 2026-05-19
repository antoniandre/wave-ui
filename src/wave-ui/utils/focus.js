import { nextTick } from 'vue'

export function focusElement (el) {
  el?.focus?.()
}

export function guardFocusable (vm) {
  if (vm.isDisabled || vm.isReadonly) return false
  return true
}

/**
 * Resolve focus() from a directive host. On components, `vnode` is the root element
 * VNode (no `vnode.component`); the DOM owner is on `el.__vueParentComponent`.
 * Walk up when the root is a wrapper (e.g. `w-form-element` around `w-input`).
 */
export function resolveFocusFn (vnode, el) {
  let instance = vnode?.component ?? el?.__vueParentComponent
  while (instance) {
    const focusFn = instance.exposed?.focus ?? instance.proxy?.focus
    if (typeof focusFn === 'function') return focusFn
    instance = instance.parent
  }
  return null
}

export function callFocus (vnode, el) {
  const focusFn = resolveFocusFn(vnode, el)
  if (typeof focusFn === 'function') {
    focusFn()
    return
  }
  focusElement(el)
}

/** Schedule focus after mount so template refs exist on the host component. */
export function scheduleFocus (vnode, el) {
  nextTick(() => callFocus(vnode, el))
}
