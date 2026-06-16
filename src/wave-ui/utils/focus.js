/**
 * v-focus directive and helpers.
 *
 * Two paths:
 * - Native elements (<input v-focus>) → focusDirective
 * - Wave focusable components (<w-input v-focus>) → applyVFocusOnMount in mounted
 *   (directive on a component root only hits the wrapper DOM node; calling focus()
 *   on the component is required and must not rely on el.__vueParentComponent, which
 *   is stripped in production builds).
 *
 * Inside w-menu / w-tooltip, focus is deferred until the floating content is open.
 */

import { nextTick, getCurrentInstance, onMounted, onUnmounted } from 'vue'

const DETACHABLE = new Set(['w-menu', 'w-tooltip'])

function walk (start, test) {
  let instance = start
  while (instance) {
    if (test(instance)) return instance
    instance = instance.parent
  }
  return null
}

function componentName (instance) {
  return instance?.type?.name ?? instance?.proxy?.$options?.name
}

function isFocusable (instance) {
  return !!(instance?.type?.focusable || instance?.proxy?.$options?.focusable)
}

function isDetachable (instance) {
  return DETACHABLE.has(componentName(instance))
}

/** Resolve a component instance from directive hook args (works in production). */
function fromDirective (vnode, prevVNode, test) {
  // On component roots, prevVNode.component is the host (e.g. w-input).
  return walk(prevVNode?.component, test) || walk(vnode?.component, test)
}

/** From a mounted hook — walk instance.parent (reliable in production). */
function detachableParent (instance) {
  return walk(instance?.parent, isDetachable)?.proxy ?? null
}

function detachableFromDirective (vnode, prevVNode) {
  return fromDirective(vnode, prevVNode, isDetachable)?.proxy ?? null
}

function resolveFocusableInstance (vnode, prevVNode) {
  return fromDirective(vnode, prevVNode, isFocusable)
}

function invokeFocus (instance, el) {
  const focus = instance?.exposed?.focus ?? instance?.proxy?.focus
  if (typeof focus === 'function') focus()
  else focusElement(el)
}

/** Queue focus on a detachable host until content is visible (see detachable.js). */
function deferFocus (el, detachable, focus) {
  el.__waveUiDetachable = detachable
  detachable.registerAutofocus({ el, focus })
}

function unregisterVFocus (el) {
  el.__waveUiDetachable?.unregisterAutofocus(el)
  delete el.__waveUiDetachable
}

function scheduleFocus (el, vnode, prevVNode) {
  const instance = resolveFocusableInstance(vnode, prevVNode)
  const focus = () => invokeFocus(instance, el)
  const detachable = detachableFromDirective(vnode, prevVNode)
  if (detachable) {
    deferFocus(el, detachable, focus)
    return
  }
  nextTick(focus)
}

export function focusElement (el) {
  el?.focus?.()
}

export function guardFocusable (vm) {
  if (vm.isDisabled || vm.isReadonly) return false
  return true
}

/** Handles v-focus on native focusable elements only. */
export const focusDirective = {
  mounted (el, binding, vnode, prevVNode) {
    // Focusable Wave components run applyVFocusOnMount instead.
    if (resolveFocusableInstance(vnode, prevVNode)) return
    scheduleFocus(el, vnode, prevVNode)
  },
  unmounted (el) {
    unregisterVFocus(el)
  }
}

function hasVFocus (vnode) {
  return !!vnode?.dirs?.some(d => d.dir === focusDirective)
}

function applyVFocusOnMount (instance) {
  const vnode = instance?.vnode
  if (!hasVFocus(vnode)) return
  const vm = instance?.proxy
  const el = vnode.el ?? vm?.$el
  if (!el) return

  const focus = () => vm?.focus?.()
  const detachable = detachableParent(instance)
  if (detachable) {
    deferFocus(el, detachable, focus)
    return
  }
  focus()
}

/** For options-API focusable components (focusable: true). */
export const vFocusLifecycleMixin = {
  mounted () {
    applyVFocusOnMount(getCurrentInstance())
  },
  unmounted () {
    unregisterVFocus(this.$el)
  }
}

/** For script-setup focusable components (focusable: true). */
export function useVFocus () {
  let el = null
  onMounted(() => {
    const instance = getCurrentInstance()
    el = instance?.vnode?.el ?? instance?.proxy?.$el
    applyVFocusOnMount(instance)
  })
  onUnmounted(() => {
    if (el) unregisterVFocus(el)
  })
}
