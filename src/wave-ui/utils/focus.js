import { nextTick } from 'vue'

const DETACHABLE_COMPONENTS = new Set(['w-menu', 'w-tooltip'])

/** Walk Vue 3 logical parent instances from a directive host element (`__vueParentComponent`). */
function walkParentInstances (el, predicate) {
  let instance = el?.__vueParentComponent
  while (instance) {
    if (predicate(instance)) return instance
    instance = instance.parent
  }
  return null
}

function componentName (instance) {
  return instance?.type?.name ?? instance?.proxy?.$options?.name
}

function isFocusableInstance (instance) {
  return !!(instance?.type?.focusable || instance?.proxy?.$options?.focusable)
}

function isDetachableInstance (instance) {
  return DETACHABLE_COMPONENTS.has(componentName(instance))
}

export function focusElement (el) {
  el?.focus?.()
}

export function guardFocusable (vm) {
  if (vm.isDisabled || vm.isReadonly) return false
  return true
}

/** Nearest ancestor component with `focusable: true` (e.g. w-input inside w-form-element). */
export function resolveFocusableInstance (el) {
  return walkParentInstances(el, isFocusableInstance)
}

/** w-menu / w-tooltip host for deferred v-focus while floating content opens. */
export function findDetachableInstance (el) {
  const instance = walkParentInstances(el, isDetachableInstance)
  return instance?.proxy ?? null
}

export function callFocus (el) {
  const instance = resolveFocusableInstance(el)
  const focusFn = instance?.exposed?.focus ?? instance?.proxy?.focus
  if (typeof focusFn === 'function') {
    focusFn()
    return
  }
  focusElement(el)
}

/** Schedule focus after mount so template refs exist on the host component. */
export function scheduleFocus (el) {
  nextTick(() => callFocus(el))
}

/** Register v-focus on a detachable host; returns false when not inside w-menu/w-tooltip. */
export function registerVFocus (el) {
  const detachable = findDetachableInstance(el)
  if (!detachable) return false
  el.__waveUiDetachable = detachable
  detachable.registerAutofocus({ el })
  return true
}

export function unregisterVFocus (el) {
  el.__waveUiDetachable?.unregisterAutofocus(el)
  delete el.__waveUiDetachable
}
