<template lang="pug">
  .w-menu-wrapper(ref="wrapper")
    slot(name="activator" :on="eventHandlers")
    transition(:name="transitionName")
      .w-menu(v-if="custom" ref="menu" v-show="showMenu" :class="classes" :style="styles")
        slot
      w-card.w-menu(
        v-else
        ref="menu"
        v-show="showMenu"
        :tile="tile"
        :shadow="shadow"
        :class="classes"
        :style="styles")
        slot
    w-overlay(
      v-if="overlay"
      ref="overlay"
      :value="showMenu"
      :persistent="persistent"
      :z-index="(zIndex || 100) - 1"
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
 *
 * @todo Fix slide-fade-bottom transition.
 */

import { consoleWarn } from '../utils/console'

const marginFromWindowSide = 4 // Amount of px from a window side, instead of overflowing.

export default {
  name: 'w-menu',
  props: {
    value: {}, // Show or hide.
    showOnHover: { type: Boolean },
    hideOnMenuClick: { type: Boolean },
    color: { type: String, default: '' },
    bgColor: { type: String, default: '' },
    shadow: { type: Boolean },
    custom: { type: Boolean }, // Include a w-card or not. It does by default.
    tile: { type: Boolean },
    round: { type: Boolean },
    transition: { type: String, default: '' },
    menuClass: { type: String, default: '' },
    // Position.
    detachTo: {},
    fixed: { type: Boolean },
    top: { type: Boolean },
    bottom: { type: Boolean },
    left: { type: Boolean },
    right: { type: Boolean },
    zIndex: { type: [Number, String, Boolean] },
    overlay: { type: Boolean },
    persistent: { type: Boolean }
  },

  data: () => ({
    showMenu: false,
    // The activator coordinates.
    coordinates: {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    },
    activatorEl: null,
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

    menuCoordinates () {
      const coords = {}
      const { top, left, width, height } = this.coordinates

      switch (this.position) {
        case 'top': {
          coords.top = top
          coords.left = left + width / 2 // left: 50%.
          break
        }
        case 'bottom': {
          coords.top = top + height
          coords.left = left + width / 2 // left: 50%.
          break
        }
        case 'left': {
          coords.top = top + height / 2 // top: 50%.
          coords.left = left
          break
        }
        case 'right': {
          coords.top = top + height / 2 // top: 50%.
          coords.left = left + width
          break
        }
      }

      return coords
    },

    classes () {
      return {
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        [this.menuClass]: this.menuClass,
        [`w-menu--${this.position}`]: true,
        'w-menu--tile': this.tile,
        'w-menu--card': !this.custom,
        'w-menu--round': this.round,
        'w-menu--shadow': this.shadow,
        'w-menu--fixed': this.fixed
      }
    },

    styles () {
      return {
        zIndex: this.zIndex || this.zIndex === 0 || (this.overlay && !this.zIndex && 100) || null,
        top: `${~~this.menuCoordinates.top}px`,
        left: `${~~this.menuCoordinates.left}px`
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
      if ('ontouchstart' in window && this.showOnHover) {
        if (e.type === 'click') shouldShowMenu = !shouldShowMenu
      }
      if (e.type === 'click' && !this.showOnHover) shouldShowMenu = !shouldShowMenu
      if (e.type === 'mouseenter' && this.showOnHover) shouldShowMenu = true
      if (e.type === 'mouseleave' && this.showOnHover) shouldShowMenu = false

      this.timeoutId = clearTimeout(this.timeoutId)
      if (shouldShowMenu) {
        this.coordinates = this.getCoordinates(e)
        // In `getCoordinates` accessing the menu computed styles takes a few ms (less than 10ms),
        // if we don't postpone the Menu apparition it will start transition from a visible menu and
        // thus will not transition.
        this.timeoutId = setTimeout(() => (this.showMenu = true), 10)
      }
      else this.showMenu = false
    },

    getCoordinates (e) {
      const { top, left, width, height } = e.target.getBoundingClientRect()
      let coords = { top, left, width, height }

      if (!this.fixed) {
        const { top: targetTop, left: targetLeft } = this.menuParentEl.getBoundingClientRect()
        coords = { ...coords, top: top - targetTop, left: left - targetLeft }
      }

      // 1. First display the menu but hide it (So we can get its dimension).
      this.menuEl.style.visibility = 'hidden'
      this.menuEl.style.display = 'table'
      const computedStyles = window.getComputedStyle(this.menuEl, null)

      // Keep fully in viewport.
      // --------------------------------------------------
      if (this.position === 'top' && ((top - this.menuEl.offsetHeight) < 0)) {
        const margin = - parseInt(computedStyles.getPropertyValue('margin-top'))
        coords.top -= top - this.menuEl.offsetHeight - margin - marginFromWindowSide
      }
      else if (this.position === 'left' && left - this.menuEl.offsetWidth < 0) {
        const margin = - parseInt(computedStyles.getPropertyValue('margin-left'))
        coords.left -= left - this.menuEl.offsetWidth - margin - marginFromWindowSide
      }
      else if (this.position === 'right' && left + width + this.menuEl.offsetWidth > window.innerWidth) {
        const margin = parseInt(computedStyles.getPropertyValue('margin-left'))
        coords.left -= left + width + this.menuEl.offsetWidth - window.innerWidth + margin + marginFromWindowSide
      }
      else if (this.position === 'bottom' && top + height + this.menuEl.offsetHeight > window.innerHeight) {
        const margin = parseInt(computedStyles.getPropertyValue('margin-top'))
        coords.top -= top + height + this.menuEl.offsetHeight - window.innerHeight + margin + marginFromWindowSide
      }
      // --------------------------------------------------

      // 2. Update left & top for custom transition.
      // Menu position relies on transform translate, the custom animation may override the transform property
      // so do without it and subtract half width or height manually.
      // If menu is on top or bottom.
      if (['top', 'bottom'].includes(this.position)) coords.left -= this.menuEl.offsetWidth / 2
      // If menu is on left or right.
      if (['left', 'right'].includes(this.position)) coords.top -= this.menuEl.offsetHeight / 2

      if (this.position === 'left') coords.left -= this.menuEl.offsetWidth
      if (this.position === 'top') coords.top -= this.menuEl.offsetHeight

      // 3. Hide the menu again so the transition happens correctly.
      this.menuEl.style.visibility = null
      this.menuEl.style.display = 'none'

      return coords
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
    }
  },

  beforeMount () {
    // Do this, first thing on mounted (beforeMount + nextTick).
    this.$nextTick(() => {
      this.activatorEl = this.$refs.wrapper.firstChild
      this.overlayEl = this.overlay ? this.$refs.overlay.$el : null
      this.insertMenu()

      if (this.value) this.toggle({ type: 'click', target: this.activatorEl })
    })
  },

  beforeDestroy () {
    if (this.menuEl) this.menuEl.remove()
    if (this.overlay) this.overlayEl.remove()
    if (this.activatorEl) this.activatorEl.remove()
  },

  watch: {
    value () {
      this.toggle({ type: 'click', target: this.activatorEl })
    }
  }
}
</script>

<style lang="scss">
.w-menu-wrapper {display: none;}

.w-menu {
  // Fix Safari where `width: max-content` does not take padding and border into consideration.
  display: table;

  position: absolute;
  z-index: 100;

  &--fixed {position: fixed;z-index: 1000;}
  &--card {background-color: #fff;}
  &--tile {border-radius: 0;}
  &--round {
    border-radius: 5em;
    padding: $base-increment round(2.5 * $base-increment);
  }
  &--shadow {box-shadow: $box-shadow;}

  &--top {margin-top: -3 * $base-increment;}
  &--bottom {margin-top: 3 * $base-increment;}
  &--left {margin-left: -3 * $base-increment;}
  &--right {margin-left: 3 * $base-increment;}
}
</style>
