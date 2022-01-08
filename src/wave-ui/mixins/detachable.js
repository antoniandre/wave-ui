/**
 * A detachable element is an element that can be appended to another DOM node
 * (but keeping data-driven Vue DOM refreshes).
 * This mixin is used by w-tooltip & w-menu.
 */

import { consoleWarn } from '../utils/console'

export default {
  computed: {
    // DOM element to attach tooltip/menu to.
    // ! \ This computed uses the DOM - NO SSR (only trigger from beforeMount and later).
    appendToTarget () {
      const defaultTarget = '.w-app'

      // Convert deprecated prop to renamed one.
      if (this.detachTo && !this.appendTo) {
        consoleWarn(`The ${this.$options.name} prop \`detach-to\` is deprecated. You can replace it with \`append-to\`.`, this)
      }

      let target = this.appendTo || this.detachTo || defaultTarget
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
    }
  },

  methods: {
    // ! \ This function uses the DOM - NO SSR (only trigger from beforeMount and later).
    getActivatorCoordinates (e) {
      // Get the activator coordinates relative to window.
      const { top, left, width, height } = (e ? e.target : this.activatorEl).getBoundingClientRect()
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
    computeDetachableCoords (e) {
      // Get the activator coordinates.
      let { top, left, width, height } = this.getActivatorCoordinates(e)

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
          // wrapper.parentNode.insertBefore(this.detachableEl, wrapper)
          this.appendToTarget.appendChild(this.detachableEl)
          resolve()
        })
      })
    },

    removeFromDOM () {
      if (this.detachableEl && this.detachableEl.parentNode) this.detachableEl.remove()
    }
  }
}
