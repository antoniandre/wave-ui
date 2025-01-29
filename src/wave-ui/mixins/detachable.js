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
    useFlipMiddleware: { type: Boolean, default: true },
    useShiftMiddleware: { type: Boolean, default: true },
    viewportPadding: { type: Number, default: 0 },
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
    openTimeout: null,
    originalPosition: null,
    resizeScrollTimeout: null
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
      // Store original position when opening
      this.originalPosition = this.position

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

      if (!this.noPosition) {
        this.computeDetachableCoords()
      }

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
      if (!this.activatorEl) return { top: 0, left: 0, width: 0, height: 0 }
      
      const rect = this.activatorEl.getBoundingClientRect()
      
      // If we're appending to a different element, calculate relative position
      if (this.appendTo) {
        const appendToEl = typeof this.appendTo === 'string' 
          ? document.querySelector(this.appendTo)
          : this.appendTo

        if (appendToEl) {
          const appendToRect = appendToEl.getBoundingClientRect()
          return {
            top: rect.top - appendToRect.top,
            left: rect.left - appendToRect.left,
            width: rect.width,
            height: rect.height,
            isAppendTo: true
          }
        }
      }

      // For tooltips and other absolute/fixed positioned elements
      const useDocumentCoords = this.fixed || 
        ['absolute', 'fixed'].includes(getComputedStyle(this.detachableEl).position)

      if (useDocumentCoords) {
        const scrollX = window.pageXOffset || document.documentElement.scrollLeft
        const scrollY = window.pageYOffset || document.documentElement.scrollTop
        return {
          top: rect.top + scrollY,
          left: rect.left + scrollX,
          width: rect.width,
          height: rect.height,
          isDocument: true
        }
      }
      
      // For elements in normal flow
      return {
        top: this.activatorEl.offsetTop,
        left: this.activatorEl.offsetLeft,
        width: this.activatorEl.offsetWidth,
        height: this.activatorEl.offsetHeight,
        isDocument: false
      }
    },

    // ! \ This function uses the DOM - NO SSR (only trigger from beforeMount and later).
    computeDetachableCoords() {
      const activatorCoords = this.getActivatorCoordinates()
      let { top, left, width, height, isDocument, isAppendTo } = activatorCoords
      
      console.log('Grid element check:', {
        activatorCoords,
        isDocument,
        isAppendTo,
        position: this.position,
        alignment: {
          top: this.alignTop,
          bottom: this.alignBottom,
          left: this.alignLeft,
          right: this.alignRight
        },
        fixed: this.fixed,
        useShiftMiddleware: this.useShiftMiddleware,
        detachableEl: this.detachableEl?.getBoundingClientRect()
      })

      if (!this.detachableEl) return

      this.detachableEl.style.visibility = 'hidden'
      this.detachableEl.style.display = 'flex'

      const menuWidth = this.detachableEl.offsetWidth
      const menuHeight = this.detachableEl.offsetHeight
      let currentPosition = this.position || 'bottom'

      console.log('Menu dimensions:', { menuWidth, menuHeight })

      const positionMenu = (position) => {
        const originalTop = top
        const originalLeft = left

        console.log('Before positioning:', {
          position,
          top: originalTop,
          left: originalLeft,
          width,
          height
        })

        switch (position) {
          case 'top':
            top = originalTop - menuHeight
            if (this.alignLeft) left = originalLeft
            else if (this.alignRight) left = originalLeft + width - menuWidth
            else left = originalLeft + (width - menuWidth) / 2
            break
          case 'bottom':
            top = originalTop + height
            if (this.alignLeft) left = originalLeft
            else if (this.alignRight) left = originalLeft + width - menuWidth
            else left = originalLeft + (width - menuWidth) / 2
            break
          case 'left':
            left = originalLeft - menuWidth
            if (this.alignTop) top = originalTop
            else if (this.alignBottom) top = originalTop + height - menuHeight
            else top = originalTop + (height - menuHeight) / 2
            break
          case 'right':
            left = originalLeft + width
            if (this.alignTop) top = originalTop
            else if (this.alignBottom) top = originalTop + height - menuHeight
            else top = originalTop + (height - menuHeight) / 2
            break
        }

        // Ensure menu stays within viewport for left/right positions with align-top
        if (['left', 'right'].includes(position) && this.alignTop) {
          const viewportRect = this.detachableEl.getBoundingClientRect()
          const viewportHeight = window.innerHeight
          const padding = this.viewportPadding || 5

          if (viewportRect.bottom > viewportHeight - padding) {
            top = originalTop - (viewportRect.bottom - (viewportHeight - padding))
          }
        }

        console.log('After positioning:', { position, top, left })
      }

      positionMenu(currentPosition)

      // Add flip check before shift
      if (this.useFlipMiddleware) {
        const menuRect = this.detachableEl.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        const scrollY = window.pageYOffset || document.documentElement.scrollTop
        const padding = this.viewportPadding || 5

        console.log('Flip check:', {
          menuRect,
          viewportHeight,
          scrollY,
          position: this.position
        })

        // If menu is above viewport and position is 'top', flip to bottom
        if (menuRect.top < padding && this.position === 'top') {
          console.log('Flipping from top to bottom')
          // Position at bottom of activator
          top = activatorCoords.top + height
          // Recenter horizontally
          left = activatorCoords.left + (width - this.detachableEl.offsetWidth) / 2
        }
        // If menu is below viewport and position is 'bottom', flip to top
        else if (menuRect.bottom > viewportHeight - padding && this.position === 'bottom') {
          console.log('Flipping from bottom to top')
          // Position at top of activator
          top = activatorCoords.top - this.detachableEl.offsetHeight
          // Recenter horizontally
          left = activatorCoords.left + (width - this.detachableEl.offsetWidth) / 2
        }
      }

      // Then apply shift middleware if needed
      if (this.useShiftMiddleware) {
        console.log('Shift middleware params:', {
          position: this.position,
          fixed: this.fixed,
          isDocument,
          isAppendTo,
          viewportDimensions: {
            width: window.innerWidth,
            height: window.innerHeight
          },
          elementDimensions: this.detachableEl?.getBoundingClientRect()
        })
        const result = this.shiftMiddleware(top, left, height, width)
        console.log('Shift middleware result:', result)
        top = result.top
        left = result.left
      }

      console.log('Final coordinates:', { top, left })

      this.detachableCoords = { top, left }

      this.detachableEl.style.visibility = null
      if (!this.detachableVisible) this.detachableEl.style.display = 'none'
    },

    getMiddlewareDependencies() {
      // Get viewport-relative coordinates
      const activatorRect = this.activatorEl.getBoundingClientRect()
      
      console.log('Middleware dependencies:', {
        activatorViewport: activatorRect,
        activatorOffset: {
          top: this.activatorEl.offsetTop,
          left: this.activatorEl.offsetLeft
        },
        scroll: {
          x: window.pageXOffset || document.documentElement.scrollLeft,
          y: window.pageYOffset || document.documentElement.scrollTop
        }
      })

      return {
        activatorRect, // Keep viewport-relative coordinates
        menuWidth: this.detachableEl.offsetWidth,
        menuHeight: this.detachableEl.offsetHeight,
        viewportWidth: window.innerWidth - (this.viewportPadding * 2),
        viewportHeight: window.innerHeight - (this.viewportPadding * 2),
      }
    },

    flipMiddleware(top, left, height, width) {
      const { activatorRect, menuWidth, menuHeight, viewportWidth, viewportHeight } = this.getMiddlewareDependencies()

      console.log('Flip middleware:', {
        position: this.originalPosition,
        proposed: { top, left },
        activator: activatorRect,
        menu: { width: menuWidth, height: menuHeight },
        viewport: { width: viewportWidth, height: viewportHeight }
      })

      // All coordinates are viewport-relative at this point
      if (this.originalPosition === 'top' && top < this.viewportPadding) {
        // Flip to bottom - align menu's top with activator's bottom
        return {
          top: activatorRect.bottom,
          left: this.alignLeft ? activatorRect.left :
                this.alignRight ? (activatorRect.right - menuWidth) :
                (activatorRect.left + (activatorRect.width - menuWidth) / 2)
        }
      }

      // Keep original position
      return { top, left }
    },

    shiftMiddleware(top, left, height, width) {
      const viewportHeight = window.innerHeight
      const padding = this.viewportPadding || 5
      const menuHeight = this.detachableEl.offsetHeight
      const scrollY = window.pageYOffset || document.documentElement.scrollTop
      
      // Get activator position
      const activatorRect = this.activatorEl.getBoundingClientRect()
      
      // Calculate menu position relative to activator
      const menuPosition = {
        top: activatorRect.top, // Viewport-relative
        height: menuHeight
      }

      console.log('Shift calculation:', {
        activator: {
          rect: activatorRect,
          viewportTop: activatorRect.top,
          viewportBottom: activatorRect.bottom
        },
        menu: {
          height: menuHeight,
          proposedTop: menuPosition.top,
          proposedBottom: menuPosition.top + menuHeight
        },
        viewport: {
          height: viewportHeight,
          padding
        },
        scroll: scrollY
      })

      let newTop = top

      // Check if menu extends beyond viewport
      if (menuPosition.top + menuHeight > viewportHeight - padding) {
        const overflow = (menuPosition.top + menuHeight) - (viewportHeight - padding)
        newTop = top - overflow

        console.log('Shifting up:', {
          overflow,
          before: {
            viewportTop: menuPosition.top,
            viewportBottom: menuPosition.top + menuHeight
          },
          after: {
            viewportTop: menuPosition.top - overflow,
            viewportBottom: menuPosition.top + menuHeight - overflow
          }
        })
      }

      return { top: newTop, left }
    },

    handleWindowEvents () {
      // Clear any existing timeout
      if (this.resizeScrollTimeout) clearTimeout(this.resizeScrollTimeout)

      // Debounce the recompute
      this.resizeScrollTimeout = setTimeout(() => {
        if (this.detachableVisible && this.detachableEl) this.computeDetachableCoords()
      }, 100)
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
    },

    close () {
      if (this.detachableVisible) {
        this.$emit('update:modelValue', (this.detachableVisible = false))
        this.$emit('input', false)
        this.$emit('close')
        this.removeFromDOM()
      }
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

    // Add scroll and resize listeners with passive option
    if (!this.noPosition) {
      window.addEventListener('scroll', this.handleWindowEvents, { passive: true, capture: true })
      window.addEventListener('resize', this.handleWindowEvents, { passive: true })
    }
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

    // Remove scroll and resize listeners
    window.removeEventListener('scroll', this.handleWindowEvents)
    window.removeEventListener('resize', this.handleWindowEvents)

    if (this.resizeScrollTimeout) clearTimeout(this.resizeScrollTimeout)
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
