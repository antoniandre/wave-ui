/**
 * A detachable element is an element that can be appended to another DOM node
 * (but keeping data-driven Vue DOM refreshes).
 * This mixin is used by w-tooltip & w-menu.
 */

import { consoleWarn } from '../utils/console'

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
    activator: { type: [String, Object] }
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
    openTimeout: null
  }),

  computed: {
    // DOM element to attach tooltip/menu to.
    // ! \ This computed uses the DOM - NO SSR (only trigger from beforeMount and later).
    appendToTarget () {
      let defaultTarget = '.w-app'

      // If used inside a w-dialog, w-drawer, or w-menu without an appendTo, default to that open
      // element instead of the w-app.
      if (typeof this.detachableDefaultRoot === 'function') {
        defaultTarget = this.detachableDefaultRoot() || defaultTarget
      }

      let target = this.appendTo || defaultTarget
      if (target === true) target = defaultTarget
      else if (this.appendTo === 'activator') target = this.$el.previousElementSibling
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
    }
  },

  methods: {
    // ! \ This function uses the DOM - NO SSR (only trigger from beforeMount and later).
    async open (e) {
      // A tiny delay may help positioning the detachable correctly in case of multiple activators
      // with different menu contents.
      if (this.delay) await new Promise(resolve => (this.openTimeout = setTimeout(resolve, this.delay)))

      // Cancel opening if the timeout has been cancelled by blur event (when going fast).
      if (this.delay && !this.openTimeout) return

      this.detachableVisible = true

      // If the activator is external, there might be multiple,
      // so on open, the activator will be set to the event target.
      if (this.activator) this.activatorEl = e.target

      await this.insertInDOM()

      if (this.minWidth === 'activator') this.activatorWidth = this.activatorEl.offsetWidth

      if (!this.noPosition) this.computeDetachableCoords()

      // In `getActivatorCoordinates` accessing the menu computed styles takes a few ms (less than 10ms),
      // if we don't postpone the Menu apparition it will start transition from a visible menu and
      // thus will not transition.
      this.timeoutId = setTimeout(() => {
        this.$emit('update:modelValue', true)
        this.$emit('input', true)
        this.$emit('open')
      }, 0)

      if (!this.persistent) document.addEventListener('mousedown', this.onOutsideMousedown)
      if (!this.noPosition) window.addEventListener('resize', this.onResize)
    },

    // ! \ This function uses the DOM - NO SSR (only trigger from beforeMount and later).
    getActivatorCoordinates () {
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

    // ! \ This function uses the DOM - NO SSR (only trigger from beforeMount and later).
    computeDetachableCoords () {
      // Get the activator coordinates.
      let { top, left, width, height } = this.getActivatorCoordinates()

      // Prevent error in case the detachable component unmounted hook is fired but the activator
      // is still in the DOM until the end of a transition and the user toggles it.
      // Unmounted is called straight away from beforeLeave: https://github.com/vuejs/core/issues/994
      if (!this.detachableEl) return

      // 1. First display the menu but hide it (So we can get its dimension).
      // --------------------------------------------------
      this.detachableEl.style.visibility = 'hidden'
      this.detachableEl.style.display = 'flex'
      const computedStyles = window.getComputedStyle(this.detachableEl, null)

      // 2. Position the menu top, left, right, bottom and apply chosen alignment.
      // --------------------------------------------------
      // Subtract half or full activator width or height and menu width or height according to the
      // menu alignment.
      // Note: the menu position relies on transform translate, the custom animation may override the
      // css transform property so do without it i.e. no translateX(-50%), and recalculate top & left
      // manually.
      switch (this.position) {
        case 'top': {
          top -= this.detachableEl.offsetHeight
          if (this.alignRight) {
            // left: 100% of activator.
            left += width - this.detachableEl.offsetWidth +
                    parseInt(computedStyles.getPropertyValue('border-right-width'))
          }
          else if (!this.alignLeft) left += (width - this.detachableEl.offsetWidth) / 2 // left: 50% of activator - half menu width.
          break
        }
        case 'bottom': {
          top += height
          if (this.alignRight) {
            // left: 100% of activator.
            left += width - this.detachableEl.offsetWidth +
                    parseInt(computedStyles.getPropertyValue('border-right-width'))
          }
          else if (!this.alignLeft) left += (width - this.detachableEl.offsetWidth) / 2 // left: 50% of activator - half menu width.
          break
        }
        case 'left': {
          left -= this.detachableEl.offsetWidth
          if (this.alignBottom) top += height - this.detachableEl.offsetHeight
          else if (!this.alignTop) top += (height - this.detachableEl.offsetHeight) / 2 // top: 50% of activator - half menu height.
          break
        }
        case 'right': {
          left += width
          if (this.alignBottom) {
            top += height - this.detachableEl.offsetHeight +
                   parseInt(computedStyles.getPropertyValue('margin-top'))
          }
          else if (!this.alignTop) {
            top += (height - this.detachableEl.offsetHeight) / 2 + // top: 50% of activator - half menu height.
                   parseInt(computedStyles.getPropertyValue('margin-top'))
          }
          break
        }
      }

      // 3. Keep fully in viewport.
      // @todo: do this.
      // --------------------------------------------------
      // if (this.position === 'top' && ((top - this.detachableEl.offsetHeight) < 0)) {
      //   const margin = - parseInt(computedStyles.getPropertyValue('margin-top'))
      //   top -= top - this.detachableEl.offsetHeight - margin - marginFromWindowSide
      // }
      // else if (this.position === 'left' && left - this.detachableEl.offsetWidth < 0) {
      //   const margin = - parseInt(computedStyles.getPropertyValue('margin-left'))
      //   left -= left - this.detachableEl.offsetWidth - margin - marginFromWindowSide
      // }
      // else if (this.position === 'right' && left + width + this.detachableEl.offsetWidth > window.innerWidth) {
      //   const margin = parseInt(computedStyles.getPropertyValue('margin-left'))
      //   left -= left + width + this.detachableEl.offsetWidth - window.innerWidth + margin + marginFromWindowSide
      // }
      // else if (this.position === 'bottom' && top + height + this.detachableEl.offsetHeight > window.innerHeight) {
      //   const margin = parseInt(computedStyles.getPropertyValue('margin-top'))
      //   top -= top + height + this.detachableEl.offsetHeight - window.innerHeight + margin + marginFromWindowSide
      // }

      // 4. Hide the menu again so the transition happens correctly.
      // --------------------------------------------------
      this.detachableEl.style.visibility = null

      // The menu coordinates are also recalculated while resizing window with open menu: keep the menu visible.
      if (!this.detachableVisible) this.detachableEl.style.display = 'none'

      this.detachableCoords = { top, left }
    },

    onResize () {
      if (this.minWidth === 'activator') this.activatorWidth = this.activatorEl.offsetWidth
      this.computeDetachableCoords()
    },

    // ! \ This function uses the DOM - NO SSR (only trigger from beforeMount and later).
    onOutsideMousedown (e) {
      if (!this.detachableEl.contains(e.target) && !this.activatorEl.contains(e.target)) {
        this.$emit('update:modelValue', (this.detachableVisible = false))
        this.$emit('input', false)
        this.$emit('close')
        document.removeEventListener('mousedown', this.onOutsideMousedown)
        window.removeEventListener('resize', this.onResize)
      }
    },

    insertInDOM () {
      return new Promise(resolve => {
        this.$nextTick(() => {
          this.detachableEl = this.$refs.detachable?.$el || this.$refs.detachable

          // Move the tooltip/menu elsewhere in the DOM.
          if (this.detachableEl) this.appendToTarget.appendChild(this.detachableEl)
          resolve()
        })
      })
    },

    removeFromDOM () {
      document.removeEventListener('mousedown', this.onOutsideMousedown)
      window.removeEventListener('resize', this.onResize)
      if (this.detachableEl && this.detachableEl.parentNode) {
        this.detachableVisible = false
        this.detachableEl.remove()
        this.detachableEl = null
      }
    },

    // If the activator is external, add event listeners to the document and check the target is
    // the activator when toggling.
    // This way, the activator can be a future DOM element, that is not yet in the DOM.
    bindActivatorEvents () {
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
        if (this.modelValue) this.open({ target: this.activatorEl })
      })
    }

    // Unwrap the overlay if any.
    if (this.overlay) this.overlayEl = this.$refs.overlay?.$el

    if (this.modelValue && this.activator) {
      this.toggle({ type: this.shouldShowOnClick ? 'click' : 'mouseenter', target: this.activatorEl })
    }
    else if (this.modelValue) this.open({ target: this.activatorEl })
  },

  unmounted () {
    this.close()

    this.removeFromDOM()

    // Remove the event listeners the exact same way they have been defined.
    // Fixes issues on hot-reloading.
    if (this.docEventListenersHandlers.length) {
      this.docEventListenersHandlers.forEach(({ eventName, handler }) => {
        document.removeEventListener(eventName, handler)
      })
    }
  },

  watch: {
    modelValue (bool) {
      if (!!bool !== this.detachableVisible) {
        if (bool) this.open({ target: this.activatorEl })
        else this.close()
      }
    },
    appendTo () {
      this.removeFromDOM()
      this.insertInDOM()
    }
  }
}
