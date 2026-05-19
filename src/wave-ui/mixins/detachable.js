/**
 * A detachable element is an element that can be appended to another DOM node
 * (but keeping data-driven Vue DOM refreshes).
 * This mixin is used by w-tooltip & w-menu.
 *
 * Vue Teleport handles moving the floating content to the right DOM node.
 * Event listeners are auto-attached to the activator slot's root element so
 * callers no longer need the `template(#activator="{ on }") v-on="on"` pattern.
 */

import { consoleWarn } from '../utils/console'
import { callFocus } from '../utils/focus'

// Minimum space (px) from the viewport edge when flipping / nudging.
const VIEWPORT_MARGIN = 4

function oppositePlacement (side) {
  return { top: 'bottom', bottom: 'top', left: 'right', right: 'left' }[side] || 'bottom'
}

export default {
  props: {
    // Position.
    appendTo: { type: [String, Boolean, Object] },
    fixed: { type: Boolean },
    top: { type: Boolean },
    bottom: { type: Boolean },
    left: { type: Boolean },
    right: { type: Boolean },
    alignTop: { type: Boolean },
    alignBottom: { type: Boolean },
    alignLeft: { type: Boolean },
    alignRight: { type: Boolean },
    noPosition: { type: Boolean },
    zIndex: { type: [Number, String, Boolean] },
    // Optionally designate an external activator.
    // The activator can be a DOM string selector, a ref or a DOM node.
    activator: { type: [String, Object] },
    // When true, the tooltip/menu does not open; the activator stays in the DOM.
    disable: { type: Boolean, default: false }
  },

  inject: {
    detachableDefaultRoot: { default: null }
  },

  data: () => ({
    /**
     * When false (SSR + first hydrated paint), the Teleport subtree is not rendered so HTML matches.
     * Set true in mounted(), then the menu/tooltip portal attaches — avoids Nuxt/Vue hydration mismatches.
     */
    detachableDomReady: false,
    // The event listeners handlers have to be removed the exact same way they have been attached.
    // Since the handler functions have variables that change after hot-reload, keep them exactly
    // as is in an array so we can delete them on destroy.
    // This only applies to the activatorEventHandlers, the other events listeners can be removed
    // normally.
    docEventListenersHandlers: [],
    // The user may open and close the detachable so fast (like when toggling on hover) that it
    // should not show up at all. Keep the ability to cancel the opening timer (if there is a set
    // delay prop).
    openTimeout: null,
    // When set, overrides `position` for CSS (arrow / slide direction) after viewport auto-flip.
    viewportPlacementOverride: null,
    // Set to true by computeDetachableCoords after positioning, false until then.
    // Components use this to bind visibility:hidden, so the element is never visible at the
    // wrong position before its coordinates are calculated.
    detachableReady: false,
    // Transition @after-enter has run for the current open cycle.
    _contentEntered: false,
    // v-focus entries waiting for detachableReady + _contentEntered.
    _autofocusTargets: [],
    // The Vue Teleport target. Stored as data (not computed) so it is resolved lazily at
    // open()-time — after the DOM is committed — rather than during VNode creation where
    // document.querySelector() may return null for elements that are part of the same render batch.
    teleportTarget: null
  }),

  computed: {
    // DOM element to attach tooltip/menu to.
    // ! \ This computed uses the DOM - NO SSR (only trigger from beforeMount and later).
    appendToTarget () {
      if (typeof document === 'undefined') return null

      let defaultTarget = '.w-app'

      // If used inside a w-dialog, w-drawer, or w-menu without an appendTo, default to that open
      // element instead of the w-app.
      if (typeof this.detachableDefaultRoot === 'function') {
        defaultTarget = this.detachableDefaultRoot() || defaultTarget
      }

      let target = this.appendTo || defaultTarget
      if (target === true) target = defaultTarget
      // When appendTo is 'activator', teleport into the activator element itself.
      else if (this.appendTo === 'activator') target = this.activatorEl
      else if (target && !['object', 'string'].includes(typeof target)) target = defaultTarget
      else if (typeof target === 'object' && !target.nodeType) {
        target = defaultTarget
        consoleWarn(`Invalid node provided in ${this.$options.name} \`append-to\`. Falling back to .w-app.`, this)
      }
      if (typeof target === 'string') target = document.querySelector(target)

      if (!target) {
        consoleWarn(`Unable to locate ${this.appendTo ? `target ${this.appendTo}` : defaultTarget}`, this)
        target = document.querySelector(defaultTarget)
      }

      return target
    },

    // DOM element that will receive the tooltip/menu.
    // ! \ This computed uses the DOM - NO SSR (only trigger from beforeMount and later).
    detachableParentEl () {
      return this.appendToTarget
    },

    hasSeparateActivator () {
      if (this.$slots.activator) return false
      const activatorIsString = typeof this.activator === 'string'
      const activatorIsDomEl = (this.activator?.$el || this.activator) instanceof HTMLElement
      return activatorIsString || activatorIsDomEl
    },

    activatorEl: {
      get () {
        if (this.hasSeparateActivator) {
          const activator = this.activator?.$el || this.activator
          if (activator instanceof HTMLElement) return activator
          if (typeof document === 'undefined') return null
          return document.querySelector(this.activator)
        }
        // For slot-based activators the component root ($el) is a comment fragment anchor in
        // Vue 3 multi-root components; nextElementSibling is the activator slot's first real element.
        return this.$el?.nextElementSibling || null
      },
      set () {}
    },

    position () {
      return (
        (this.top && 'top') ||
        (this.bottom && 'bottom') ||
        (this.left && 'left') ||
        (this.right && 'right') ||
        'bottom'
      )
    },

    alignment () {
      return (
        (['top', 'bottom'].includes(this.position) && this.alignLeft && 'left') ||
        (['top', 'bottom'].includes(this.position) && this.alignRight && 'right') ||
        (['left', 'right'].includes(this.position) && this.alignTop && 'top') ||
        (['left', 'right'].includes(this.position) && this.alignBottom && 'bottom') ||
        ''
      )
    },

    shouldShowOnClick () {
      // For props simplicity, the w-tooltip component has the `showOnHover` prop,
      // whereas the w-menu has `showOnClick`.
      return (this.$options.props.showOnHover && !this.showOnHover) ||
        (this.$options.props.showOnClick && this.showOnClick)
    },

    /** Placement used for CSS classes (arrows, margins); reflects viewport flip when applied. */
    effectiveDetachablePosition () {
      return this.viewportPlacementOverride || this.position
    }
  },

  methods: {
    // Called by <transition @after-leave>. Resets detachableReady after the leave animation so the
    // next open starts hidden. Done here rather than on close() to let the leave animation play.
    onAfterLeave () {
      this.detachableReady = false
      this.detachableEl = null
      this._contentEntered = false
      this._autofocusTargets = []
    },

    onDetachableAfterEnter () {
      this._contentEntered = true
      this._maybeFlushAutofocus()
    },

    registerAutofocus (entry) {
      if (!this._autofocusTargets) this._autofocusTargets = []
      this._autofocusTargets.push(entry)
      this._maybeFlushAutofocus()
    },

    unregisterAutofocus (el) {
      if (!this._autofocusTargets?.length) return
      this._autofocusTargets = this._autofocusTargets.filter(entry => entry.el !== el)
    },

    _maybeFlushAutofocus () {
      if (this.detachableReady && this._contentEntered) this.flushAutofocus()
    },

    flushAutofocus () {
      const targets = this._autofocusTargets || []
      this._autofocusTargets = []
      if (!targets.length) return
      this.$nextTick(() => targets.forEach(({ el }) => callFocus(el)))
    },

    unbindActivatorDocEvents () {
      if (typeof document === 'undefined') return
      if (this.docEventListenersHandlers.length) {
        this.docEventListenersHandlers.forEach(({ eventName, handler }) => {
          document.removeEventListener(eventName, handler)
        })
        this.docEventListenersHandlers = []
      }
    },

    /**
     * Single delegating handler for auto-attached slot-activator DOM events.
     * Reads the current activatorEventHandlers computed each invocation so that changes to
     * `disable`, `showOnHover`, etc. are always reflected without re-attaching.
     */
    _handleActivatorEvent (e) {
      const handler = this.activatorEventHandlers[e.type]
      if (handler) handler(e)
    },

    /**
     * Attach DOM event listeners directly to the activator slot's root element.
     * Called once from mounted(); a single delegating handler covers all event types so we never
     * need to re-attach when props like `disable` or `showOnHover` change.
     * ! \ This function uses the DOM - NO SSR.
     */
    _attachActivatorListeners () {
      if (typeof document === 'undefined') return
      const el = this.activatorEl
      if (!el) return

      // Inspect the activator slot's first VNode for pre-declared event handlers.
      // When the slot root already declares onClick / onMouseenter etc. — whether on a native
      // element (w-select, w-autocomplete) or on a component (w-button @click="...") — the
      // parent is managing that event itself. Skip auto-attaching the competing handler to avoid
      // open/close races (both toggle() and the explicit handler firing on the same click).
      // With the new API, the default slot is the activator (no #activator slot used).
      let existingHandlers = {}
      const activatorSlot = this.$slots.activator || this.$slots.default
      if (activatorSlot) {
        const vnodes = activatorSlot()
        const firstVnode = vnodes?.[0]
        existingHandlers = firstVnode?.props || {}
      }

      this._activatorDomEl = el
      this._activatorAttachedEvents = []
      ;['click', 'mouseenter', 'mouseleave', 'focus', 'blur'].forEach(evt => {
        // Skip if the slot element already binds this event (camelCase Vue prop name: onClick etc.).
        const vueProp = `on${evt.charAt(0).toUpperCase()}${evt.slice(1)}`
        if (existingHandlers[vueProp]) return
        el.addEventListener(evt, this._handleActivatorEvent)
        this._activatorAttachedEvents.push(evt)
      })
    },

    _detachActivatorListeners () {
      if (!this._activatorDomEl) return
      ;(this._activatorAttachedEvents || []).forEach(evt => {
        this._activatorDomEl.removeEventListener(evt, this._handleActivatorEvent)
      })
      this._activatorDomEl = null
      this._activatorAttachedEvents = []
    },

    // ! \ This function uses the DOM - NO SSR (only trigger from beforeMount and later).
    async open (e) {
      if (this.disable) return

      // A tiny delay may help positioning the detachable correctly in case of multiple activators
      // with different menu contents.
      if (this.delay) await new Promise(resolve => (this.openTimeout = setTimeout(resolve, this.delay)))

      // Cancel opening if the timeout has been cancelled by blur event (when going fast).
      if (this.delay && !this.openTimeout) return

      if (this.disable) return

      // Hide before entering the DOM; handles rapid re-opens where detachableReady is still true.
      this.detachableReady = false
      this._contentEntered = false

      // Resolve the teleport target here, at open()-time, so the DOM is fully committed and
      // detachableDefaultRoot() (for nested menus/tooltips) returns the correct element.
      // Setting teleportTarget and detachableVisible in the same synchronous block lets Vue
      // batch both into a single render — the content is never shown at the wrong location.
      if (typeof document !== 'undefined') this.teleportTarget = this.appendToTarget

      this.detachableVisible = true

      // If the activator is external, there might be multiple,
      // so on open, the activator will be set to the event target.
      if (this.activator) this.activatorEl = e.target

      // Wait for Vue Teleport to render the floating element into the target DOM node.
      await this.$nextTick()
      this.detachableEl = this.$refs.detachable?.$el || this.$refs.detachable

      if (this.minWidth === 'activator' && this.activatorEl) {
        this.activatorWidth = this.activatorEl.offsetWidth
      }

      if (!this.noPosition) await this.computeDetachableCoords()
      else {
        this.detachableReady = true
        this._maybeFlushAutofocus()
      }

      // In `getActivatorCoordinates` accessing the menu computed styles takes a few ms (less than 10ms),
      // if we don't postpone the Menu apparition it will start transition from a visible menu and
      // thus will not transition.
      this.timeoutId = setTimeout(() => {
        this.$emit('update:modelValue', true)
        this.$emit('input', true)
        this.$emit('open')
      }, 0)

      if (typeof document !== 'undefined' && !this.persistent) {
        document.addEventListener('mousedown', this.onOutsideMousedown)
      }
      if (typeof window !== 'undefined' && !this.noPosition) {
        window.addEventListener('resize', this.onResize)
      }
    },

    // ! \ This function uses the DOM - NO SSR (only trigger from beforeMount and later).
    getActivatorCoordinates () {
      if (typeof window === 'undefined' || typeof document === 'undefined' || !this.activatorEl || !this.detachableParentEl) {
        return { top: 0, left: 0, width: 0, height: 0 }
      }

      // Get the activator coordinates relative to window.
      const { top, left, width, height } = this.activatorEl.getBoundingClientRect()
      let coords = { top, left, width, height }

      // If absolute position, adjust top & left.
      if (!this.fixed) {
        const { top: targetTop, left: targetLeft } = this.detachableParentEl.getBoundingClientRect()
        const computedStyles = window.getComputedStyle(this.detachableParentEl, null)
        coords = {
          ...coords,
          top: top - targetTop + this.detachableParentEl.scrollTop - parseInt(computedStyles.getPropertyValue('border-top-width')),
          left: left - targetLeft + this.detachableParentEl.scrollLeft - parseInt(computedStyles.getPropertyValue('border-left-width'))
        }
      }

      return coords
    },

    /**
     * Apply `placement` (top | bottom | left | right) to activator-relative coords.
     * @returns {{ top: number, left: number }}
     */
    _applyDetachablePlacement (placement, baseCoords, computedStyles) {
      let { top, left, width, height } = baseCoords
      const el = this.detachableEl

      switch (placement) {
        case 'top': {
          top -= el.offsetHeight
          if (this.alignRight) {
            left += width - el.offsetWidth +
              parseInt(computedStyles.getPropertyValue('border-right-width'), 10)
          }
          else if (!this.alignLeft) left += (width - el.offsetWidth) / 2
          break
        }
        case 'bottom': {
          top += height
          if (this.alignRight) {
            left += width - el.offsetWidth +
              parseInt(computedStyles.getPropertyValue('border-right-width'), 10)
          }
          else if (!this.alignLeft) left += (width - el.offsetWidth) / 2
          break
        }
        case 'left': {
          left -= el.offsetWidth
          if (this.alignBottom) top += height - el.offsetHeight
          else if (!this.alignTop) top += (height - el.offsetHeight) / 2
          break
        }
        case 'right': {
          left += width
          if (this.alignBottom) {
            top += height - el.offsetHeight +
              parseInt(computedStyles.getPropertyValue('margin-top'), 10)
          }
          else if (!this.alignTop) {
            top += (height - el.offsetHeight) / 2 +
              parseInt(computedStyles.getPropertyValue('margin-top'), 10)
          }
          break
        }
      }
      return { top, left }
    },

    // ! \ This function uses the DOM - NO SSR (only trigger from beforeMount and later).
    async computeDetachableCoords () {
      if (typeof window === 'undefined' || !this.detachableEl) return

      // Prevent error in case the detachable component unmounted hook is fired but the activator
      // is still in the DOM until the end of a transition and the user toggles it.
      // Unmounted is called straight away from beforeLeave: https://github.com/vuejs/core/issues/994
      if (!this.activatorEl || !this.detachableParentEl) return

      this.viewportPlacementOverride = null

      // Measure the element (already hidden via visibility:hidden in the component :style).
      this.detachableEl.style.display = 'flex'
      const computedStyles = window.getComputedStyle(this.detachableEl, null)
      const elW = this.detachableEl.offsetWidth
      const elH = this.detachableEl.offsetHeight

      // Flip to the opposite side if the element won't fit — pure arithmetic on the viewport rect.
      let placement = this.position
      if (!this.noPosition) {
        const m = VIEWPORT_MARGIN
        const vw = window.innerWidth
        const vh = window.innerHeight
        const { top: aTop, left: aLeft, width: aW, height: aH } = this.activatorEl.getBoundingClientRect()

        if (
          (placement === 'bottom' && aTop + aH + elH > vh - m && aTop - elH >= m) ||
          (placement === 'top'    && aTop - elH < m            && aTop + aH + elH <= vh - m) ||
          (placement === 'right'  && aLeft + aW + elW > vw - m && aLeft - elW >= m) ||
          (placement === 'left'   && aLeft - elW < m           && aLeft + aW + elW <= vw - m)
        ) {
          placement = oppositePlacement(placement)
          this.viewportPlacementOverride = placement
        }
      }

      // Compute the parent-relative top/left for the chosen placement.
      const baseCoords = this.getActivatorCoordinates()
      const { top, left } = this._applyDetachablePlacement(placement, baseCoords, computedStyles)

      this.detachableCoords = { top, left }
      // Reveal: detachableReady = true makes the :style binding clear visibility:hidden.
      // Always await $nextTick so coordinates, placement class, and visibility are flushed atomically.
      this.detachableReady = true
      await this.$nextTick()
      this._maybeFlushAutofocus()

      // Guard against the component being unmounted while awaiting.
      if (!this.detachableEl) return
      if (!this.detachableVisible) this.detachableEl.style.display = 'none'
    },

    onResize () {
      if (typeof window === 'undefined') return
      if (this.minWidth === 'activator' && this.activatorEl) {
        this.activatorWidth = this.activatorEl.offsetWidth
      }
      this.computeDetachableCoords()
    },

    // ! \ This function uses the DOM - NO SSR (only trigger from beforeMount and later).
    onOutsideMousedown (e) {
      if (!this.detachableEl || !this.activatorEl) return
      if (!this.detachableEl.contains(e.target) && !this.activatorEl.contains(e.target)) {
        this.$emit('update:modelValue', (this.detachableVisible = false))
        this.$emit('input', false)
        this.$emit('close')
        if (typeof document !== 'undefined') {
          document.removeEventListener('mousedown', this.onOutsideMousedown)
        }
        if (typeof window !== 'undefined') {
          window.removeEventListener('resize', this.onResize)
        }
      }
    },

    // If the activator is external, add event listeners to the document and check the target is
    // the activator when toggling.
    // This way, the activator can be a future DOM element, that is not yet in the DOM.
    bindActivatorEvents () {
      if (typeof document === 'undefined') return

      const activatorIsString = typeof this.activator === 'string'

      Object.entries(this.activatorEventHandlers).forEach(([eventName, handler]) => {
        // Convert mouseenter to mouseover & mouseleave to mouseout because we are attaching
        // event to the document, so it can accept future DOM nodes.
        eventName = eventName.replace('mouseenter', 'mouseover').replace('mouseleave', 'mouseout')
        const handlerWrap = e => {
          // The activator can be a DOM string selector a ref or a DOM node.
          if (activatorIsString && e.target?.matches?.(this.activator)) handler(e)
          else if (e.target === this.activatorEl || this.activatorEl?.contains(e.target)) handler(e)
        }
        document.addEventListener(eventName, handlerWrap)
        // The event listeners handlers have to be removed the exact same way they have been attached.
        // Since the handler functions have variables that change after hot-reload, keep them exactly
        // as is in an array so we can delete them on destroy.
        this.docEventListenersHandlers.push({ eventName, handler: handlerWrap })
      })
    }
  },

  mounted () {
    this.detachableDomReady = true
    this.$nextTick(() => {
      if (this.activator) {
        // External activator: attach via document-level delegation.
        this.bindActivatorEvents()
      }
      else {
        // Slot-based activator: auto-attach DOM listeners to the slot's root element on next tick
        // so the slot content is guaranteed to be in the DOM.
        this.$nextTick(() => {
          // Re-check activator prop (might have resolved from a Vue ref after the tick).
          if (this.activator) this.bindActivatorEvents()
          else this._attachActivatorListeners()

          if (this.modelValue && !this.disable) this.open({ target: this.activatorEl })
        })
      }

      // Unwrap the overlay if any.
      if (this.overlay) this.overlayEl = this.$refs.overlay?.$el

      if (this.modelValue && this.activator && !this.disable) {
        this.toggle({ type: this.shouldShowOnClick ? 'click' : 'mouseenter', target: this.activatorEl })
      }
      else if (this.modelValue && !this.disable) this.open({ target: this.activatorEl })
    })
  },

  unmounted () {
    this.close()

    // Clean up slot-activator DOM listeners and external-activator document listeners.
    this._detachActivatorListeners()
    this.unbindActivatorDocEvents()
  },

  watch: {
    disable (disabled) {
      if (this.activator) {
        this.unbindActivatorDocEvents()
        if (!disabled) this.bindActivatorEvents()
      }
      // For slot-based activators, _handleActivatorEvent always reads the current
      // activatorEventHandlers computed which already respects `disable`, so no re-attach needed.
      if (disabled) this.close()
      else if (this.modelValue) this.open({ target: this.activatorEl })
    },

    modelValue (bool) {
      if (!!bool !== this.detachableVisible) {
        if (bool && !this.disable) this.open({ target: this.activatorEl })
        else if (!bool) this.close()
      }
    },

    // Keep teleportTarget in sync when the appendTo prop changes at runtime.
    appendTo () {
      if (typeof document !== 'undefined') this.teleportTarget = this.appendToTarget
    }
  }
}
