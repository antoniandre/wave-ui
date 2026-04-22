/**
 * A detachable element is an element that can be appended to another DOM node
 * (but keeping data-driven Vue DOM refreshes).
 * This mixin is used by w-tooltip & w-menu.
 */

import { consoleWarn } from '../utils/console'

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
    detachableReady: false
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
      else if (this.appendTo === 'activator') target = this.$el.previousElementSibling || this.$el.nextElementSibling
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
        return this.$el.nextElementSibling
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
      this.detachableVisible = true

      // If the activator is external, there might be multiple,
      // so on open, the activator will be set to the event target.
      if (this.activator) this.activatorEl = e.target

      await this.insertInDOM()

      if (this.minWidth === 'activator' && this.activatorEl) {
        this.activatorWidth = this.activatorEl.offsetWidth
      }

      if (!this.noPosition) this.computeDetachableCoords()
      else this.detachableReady = true

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

    insertInDOM () {
      return new Promise(resolve => {
        this.$nextTick(() => {
          this.detachableEl = this.$refs.detachable?.$el || this.$refs.detachable

          // Move the tooltip/menu elsewhere in the DOM.
          if (this.detachableEl && this.appendToTarget) this.appendToTarget.appendChild(this.detachableEl)
          resolve()
        })
      })
    },

    removeFromDOM () {
      if (typeof document !== 'undefined') {
        document.removeEventListener('mousedown', this.onOutsideMousedown)
      }
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', this.onResize)
      }
      if (this.detachableEl?.parentNode) {
        this.detachableVisible = false
        this.detachableEl.remove()
        this.detachableEl = null
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
          if (activatorIsString && e.target?.matches && e.target.matches(this.activator)) handler(e)
          else if (e.target === this.activatorEl || this.activatorEl.contains(e.target)) handler(e)
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
    // If the activator is external.
    if (this.activator) this.bindActivatorEvents()

    // If the activator seems to be undefined, it is probably a DOM node or Vue ref,
    // so check it on nextTick.
    else {
      this.$nextTick(() => {
        if (this.activator) this.bindActivatorEvents()
        if (this.modelValue && !this.disable) this.open({ target: this.activatorEl })
      })
    }

    // Unwrap the overlay if any.
    if (this.overlay) this.overlayEl = this.$refs.overlay?.$el

    if (this.modelValue && this.activator && !this.disable) {
      this.toggle({ type: this.shouldShowOnClick ? 'click' : 'mouseenter', target: this.activatorEl })
    }
    else if (this.modelValue && !this.disable) this.open({ target: this.activatorEl })
  },

  unmounted () {
    this.close()

    this.removeFromDOM()

    // Remove the event listeners the exact same way they have been defined.
    // Fixes issues on hot-reloading.
    this.unbindActivatorDocEvents()
  },

  watch: {
    disable (disabled) {
      if (this.activator) {
        this.unbindActivatorDocEvents()
        if (!disabled) this.bindActivatorEvents()
      }
      if (disabled) this.close()
      else if (this.modelValue) this.open({ target: this.activatorEl })
    },

    modelValue (bool) {
      if (!!bool !== this.detachableVisible) {
        if (bool && !this.disable) this.open({ target: this.activatorEl })
        else if (!bool) this.close()
      }
    },
    appendTo () {
      this.removeFromDOM()
      this.insertInDOM()
    }
  }
}
