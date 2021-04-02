<template lang="pug">
.w-menu-wrap(ref="wrapper")
  slot(name="activator" :on="eventHandlers")
  transition(:name="transitionName")
    .w-menu(v-if="custom" ref="menu" v-show="showMenu" :class="classes" :style="styles")
      slot
    w-card.w-menu(
      v-else
      ref="menu"
      v-show="showMenu"
      :tile="tile"
      :title-class="titleClass"
      :content-class="contentClass"
      :shadow="shadow"
      :no-border="noBorder"
      :class="classes"
      :style="styles")
      template(v-if="$slots.title" #title)
        slot(name="title")
      template(v-if="$slots.actions" #actions)
        slot(name="actions")
      slot
  w-overlay(
    v-if="overlay"
    ref="overlay"
    :value="showMenu"
    :persistent="persistent"
    :z-index="(zIndex || 200) - 1"
    @input="showMenu = false")
</template>

<script>
/**
 * Complexity of this component: Vue 2.x can only mount 1 single root element, but we don't
 * want to wrap the activator as it may break the layout.
 * Another simpler way would be to append the menu inside the activator, but some HTML tags
 * can't have children like <input>.
 * So a solution is to mount both the activator element and the menu in a wrapper then unwrap
 * and move the menu elsewhere in the DOM.
 */

import { consoleWarn } from '../utils/console'

// const marginFromWindowSide = 4 // Amount of px from a window side, instead of overflowing.

export default {
  name: 'w-menu',

  props: {
    value: {}, // Show or hide.
    showOnHover: { type: Boolean },
    hideOnMenuClick: { type: Boolean },
    color: { type: String },
    bgColor: { type: String },
    shadow: { type: Boolean },
    custom: { type: Boolean }, // Include a w-card or not. It does by default.
    tile: { type: Boolean },
    round: { type: Boolean },
    noBorder: { type: Boolean },
    transition: { type: String },
    menuClass: { type: String },
    titleClass: { type: String },
    contentClass: { type: String },
    // Position.
    detachTo: {},
    fixed: { type: Boolean },
    top: { type: Boolean },
    bottom: { type: Boolean },
    left: { type: Boolean },
    right: { type: Boolean },
    alignTop: { type: Boolean },
    alignBottom: { type: Boolean },
    alignLeft: { type: Boolean },
    alignRight: { type: Boolean },
    zIndex: { type: [Number, String, Boolean] },
    minWidth: { type: [Number, String] }, // can be like: `40`, `5em`, `activator`.
    overlay: { type: Boolean },
    persistent: { type: Boolean },
    noPosition: { type: Boolean }
  },

  emits: ['input', 'update:modelValue', 'open', 'close'],

  data: () => ({
    showMenu: false,
    // The menu computed top & left coordinates.
    menuCoordinates: {
      top: 0,
      left: 0
    },
    activatorEl: null,
    activatorWidth: 0,
    menuEl: null,
    timeoutId: null
  }),

  computed: {
    transitionName () {
      return this.transition || `scale-fade`
    },

    // DOM element to attach menu to.
    detachToTarget () {
      let target = this.detachTo || '.w-app'
      if (target === true) target = '.w-app'
      else if (target && !['object', 'string'].includes(typeof target)) target = '.w-app'
      else if (typeof target === 'object' && !target.nodeType) {
        target = '.w-app'
        consoleWarn('Invalid node provided in w-menu `detach-to`. Falling back to .w-app.', this)
      }
      if (typeof target === 'string') target = document.querySelector(target)

      if (!target) {
        consoleWarn(`Unable to locate ${this.detachTo ? `target ${this.detachTo}` : '.w-app'}`, this)
        target = document.querySelector('.w-app')
      }

      return target
    },

    // DOM element that will receive the menu.
    menuParentEl () {
      return this.detachToTarget
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

    menuMinWidth () {
      if (this.minWidth === 'activator') return this.activatorWidth ? `${this.activatorWidth}px` : 0
      else return isNaN(this.minWidth) ? this.minWidth : (this.minWidth ? `${this.minWidth}px` : 0)
    },

    alignment () {
      return (
        ((this.top || this.bottom) && this.alignLeft && 'left') ||
        ((this.top || this.bottom) && this.alignRight && 'right') ||
        ((this.left || this.right) && this.alignTop && 'top') ||
        ((this.left || this.right) && this.alignBottom && 'bottom') ||
        ''
      )
    },

    classes () {
      return {
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        [this.menuClass]: this.menuClass,
        [`w-menu--${this.position}`]: true,
        [`w-menu--align-${this.alignment}`]: this.alignment,
        'w-menu--tile': this.tile,
        'w-menu--card': !this.custom,
        'w-menu--round': this.round,
        'w-menu--shadow': this.shadow,
        'w-menu--fixed': this.fixed
      }
    },

    styles () {
      return {
        zIndex: this.zIndex || this.zIndex === 0 || (this.overlay && !this.zIndex && 200) || null,
        top: (this.menuCoordinates.top && `${~~this.menuCoordinates.top}px`) || null,
        left: (this.menuCoordinates.left && `${~~this.menuCoordinates.left}px`) || null,
        minWidth: (this.minWidth && this.menuMinWidth) || null
      }
    },

    eventHandlers () {
      let handlers = {}
      if (this.showOnHover) {
        handlers = {
          focus: this.toggle,
          blur: this.toggle,
          mouseenter: this.toggle,
          mouseleave: this.toggle
        }

        if ('ontouchstart' in window) handlers.click = this.toggle
      }
      else handlers = { click: this.toggle }
      return handlers
    }
  },

  methods: {
    toggle (e) {
      let shouldShowMenu = this.showMenu
      if ('ontouchstart' in window && this.showOnHover && e.type === 'click') {
        shouldShowMenu = !shouldShowMenu
      }
      if (e.type === 'click' && !this.showOnHover) shouldShowMenu = !shouldShowMenu
      if (e.type === 'mouseenter' && this.showOnHover) shouldShowMenu = true
      if (e.type === 'mouseleave' && this.showOnHover) shouldShowMenu = false

      this.timeoutId = clearTimeout(this.timeoutId)
      // Open the menu.
      if (shouldShowMenu) {
        if (this.minWidth === 'activator') this.activatorWidth = this.activatorEl.offsetWidth

        if (!this.noPosition) this.computeMenuPosition(e)

        // In `getCoordinates` accessing the menu computed styles takes a few ms (less than 10ms),
        // if we don't postpone the Menu apparition it will start transition from a visible menu and
        // thus will not transition.
        this.timeoutId = setTimeout(() => {
          this.$emit('update:modelValue', (this.showMenu = true))
          this.$emit('input', true)
          this.$emit('open')
        }, 10)

        if (!this.persistent) document.addEventListener('mousedown', this.onOutsideMousedown)
        if (!this.noPosition) window.addEventListener('resize', this.onResize)
      }

      // Close the menu.
      else {
        this.$emit('update:modelValue', (this.showMenu = false))
        this.$emit('input', false)
        this.$emit('close')
        // Remove the mousedown listener if the menu got closed without a mousedown outside of the menu.
        document.removeEventListener('mousedown', this.onOutsideMousedown)
        window.removeEventListener('resize', this.onResize)
      }
    },

    onOutsideMousedown (e) {
      if (!this.menuEl.contains(e.target)) {
        this.$emit('update:modelValue', (this.showMenu = false))
        this.$emit('input', false)
        this.$emit('close')
        document.removeEventListener('mousedown', this.onOutsideMousedown)
        window.removeEventListener('resize', this.onResize)
      }
    },

    onResize () {
      if (this.minWidth === 'activator') this.activatorWidth = this.activatorEl.offsetWidth
      this.computeMenuPosition()
    },

    getCoordinates (e) {
      // Get the activator coordinates relative to window.
      const { top, left, width, height } = (e ? e.target : this.activatorEl).getBoundingClientRect()
      let coords = { top, left, width, height }

      // If absolute position, adjust top & left.
      if (!this.fixed) {
        const { top: targetTop, left: targetLeft } = this.menuParentEl.getBoundingClientRect()
        const computedStyles = window.getComputedStyle(this.menuParentEl, null)
        coords = {
          ...coords,
          top: top - targetTop + this.menuParentEl.scrollTop - parseInt(computedStyles.getPropertyValue('border-top-width')),
          left: left - targetLeft + this.menuParentEl.scrollLeft - parseInt(computedStyles.getPropertyValue('border-left-width'))
        }
      }

      return coords
    },

    computeMenuPosition (e) {
      // Get the activator coordinates.
      let { top, left, width, height } = this.getCoordinates(e)

      // 1. First display the menu but hide it (So we can get its dimension).
      // --------------------------------------------------
      this.menuEl.style.visibility = 'hidden'
      this.menuEl.style.display = 'flex'
      const computedStyles = window.getComputedStyle(this.menuEl, null)

      // 2. Position the menu top, left, right, bottom and apply chosen alignment.
      // --------------------------------------------------
      // Subtract half or full activator width or height and menu width or height according to the
      // menu alignment.
      // Note: the menu position relies on transform translate, the custom animation may override the
      // css transform property so do without it i.e. no translateX(-50%), and recalculate top & left
      // manually.
      switch (this.position) {
        case 'top': {
          top -= this.menuEl.offsetHeight
          if (this.alignRight) {
            // left: 100% of activator.
            left += width - this.menuEl.offsetWidth +
                    parseInt(computedStyles.getPropertyValue('border-right-width'))
          }
          else if (!this.alignLeft) left += (width - this.menuEl.offsetWidth) / 2 // left: 50% of activator - half menu width.
          break
        }
        case 'bottom': {
          top += height
          if (this.alignRight) {
            // left: 100% of activator.
            left += width - this.menuEl.offsetWidth +
                    parseInt(computedStyles.getPropertyValue('border-right-width'))
          }
          else if (!this.alignLeft) left += (width - this.menuEl.offsetWidth) / 2 // left: 50% of activator - half menu width.
          break
        }
        case 'left': {
          left -= this.menuEl.offsetWidth
          if (this.alignBottom) top += height - this.menuEl.offsetHeight
          else if (!this.alignTop) top += (height - this.menuEl.offsetHeight) / 2 // top: 50% of activator - half menu height.
          break
        }
        case 'right': {
          left += width
          if (this.alignBottom) {
            top += height - this.menuEl.offsetHeight +
                   parseInt(computedStyles.getPropertyValue('margin-top'))
          }
          else if (!this.alignTop) {
            top += (height - this.menuEl.offsetHeight) / 2 + // top: 50% of activator - half menu height.
                   parseInt(computedStyles.getPropertyValue('margin-top'))
          }
          break
        }
      }

      // 3. Keep fully in viewport.
      // @todo: do this.
      // --------------------------------------------------
      // if (this.position === 'top' && ((top - this.menuEl.offsetHeight) < 0)) {
      //   const margin = - parseInt(computedStyles.getPropertyValue('margin-top'))
      //   top -= top - this.menuEl.offsetHeight - margin - marginFromWindowSide
      // }
      // else if (this.position === 'left' && left - this.menuEl.offsetWidth < 0) {
      //   const margin = - parseInt(computedStyles.getPropertyValue('margin-left'))
      //   left -= left - this.menuEl.offsetWidth - margin - marginFromWindowSide
      // }
      // else if (this.position === 'right' && left + width + this.menuEl.offsetWidth > window.innerWidth) {
      //   const margin = parseInt(computedStyles.getPropertyValue('margin-left'))
      //   left -= left + width + this.menuEl.offsetWidth - window.innerWidth + margin + marginFromWindowSide
      // }
      // else if (this.position === 'bottom' && top + height + this.menuEl.offsetHeight > window.innerHeight) {
      //   const margin = parseInt(computedStyles.getPropertyValue('margin-top'))
      //   top -= top + height + this.menuEl.offsetHeight - window.innerHeight + margin + marginFromWindowSide
      // }

      // 4. Hide the menu again so the transition happens correctly.
      // --------------------------------------------------
      this.menuEl.style.visibility = null

      // The menu coordinates are also recalculated while resizing window with open menu: keep the menu visible.
      if (!this.showMenu) this.menuEl.style.display = 'none'

      this.menuCoordinates = { top, left }
    },

    insertMenu () {
      const wrapper = this.$refs.wrapper
      this.menuEl = this.$refs.menu.$el || this.$refs.menu
      // Unwrap the activator element.
      wrapper.parentNode.insertBefore(this.activatorEl, wrapper)

      // Unwrap the overlay
      if (this.overlay) wrapper.parentNode.insertBefore(this.overlayEl, wrapper)

      // Move the menu elsewhere in the DOM.
      // wrapper.parentNode.insertBefore(this.menuEl, wrapper)
      this.detachToTarget.appendChild(this.menuEl)
    },

    removeMenu () {
      // el.remove() doesn't work on IE11.
      if (this.menuEl && this.menuEl.parentNode) this.menuEl.parentNode.removeChild(this.menuEl)
    }
  },

  mounted () {
    this.activatorEl = this.$refs.wrapper.firstElementChild
    this.overlayEl = this.overlay ? this.$refs.overlay.$el : null
    this.insertMenu()

    if (this.value) this.toggle({ type: 'click', target: this.activatorEl })
  },

  beforeDestroy () {
    this.removeMenu()
    // el.remove() doesn't work on IE11.
    if (this.overlay && this.overlayEl.parentNode) this.overlayEl.parentNode.removeChild(this.overlayEl)
    if (this.activatorEl && this.activatorEl.parentNode) this.activatorEl.parentNode.removeChild(this.activatorEl)
  },

  watch: {
    value (bool) {
      if (!!bool !== this.showMenu) this.toggle({ type: 'click', target: this.activatorEl })
    },
    detachTo () {
      this.removeMenu()
      this.insertMenu()
    }
  }
}
</script>

<style lang="scss">
.w-menu-wrap {display: none;}

.w-menu {
  position: absolute;
  z-index: 100;

  &--fixed {position: fixed;z-index: 1000;}
  &--card {background-color: #fff;}
  &--tile {border-radius: 0;}
  &--round {
    border-radius: 9em;
    padding: $base-increment round(2.5 * $base-increment);
  }
  &--shadow {box-shadow: $box-shadow;}

  &--top {margin-top: -3 * $base-increment;}
  &--bottom {margin-top: 3 * $base-increment;}
  &--left {margin-left: -3 * $base-increment;}
  &--right {margin-left: 3 * $base-increment;}
}
</style>
