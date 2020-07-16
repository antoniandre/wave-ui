<template lang="pug">
  .w-menu-wrapper(ref="wrapper")
    slot(name="activator" :on="eventHandlers")
    transition(:name="transitionName")
      w-card.w-menu(
        v-if="card"
        ref="menu"
        v-show="showMenu"
        :tile="tile"
        :shadow="shadow"
        :class="classes"
        :style="styles")
        slot
      .w-menu(v-else ref="menu" v-show="showMenu" :class="classes" :style="styles")
        slot
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
 * @todo Add an option to attach menu to its activator.
 *       It would simplify the calculations and avoid DOM manipulation.
 * @todo Fix slide-fade-bottom transition.
 */

import { consoleWarn } from '../utils/console'

export default {
  name: 'w-menu',
  props: {
    value: {}, // Show or hide.
    showOnHover: { type: Boolean },
    hideOnMenuClick: { type: Boolean },
    color: { type: String, default: '' },
    bgColor: { type: String, default: '' },
    shadow: { type: Boolean },
    card: { type: Boolean }, // Include a w-card or not.
    tile: { type: Boolean },
    round: { type: Boolean },
    transition: { type: String, default: '' },
    menuClass: { type: String, default: '' },
    // Position.
    attachTo: {},
    fixed: { type: Boolean },
    top: { type: Boolean },
    bottom: { type: Boolean },
    left: { type: Boolean },
    right: { type: Boolean },
    zIndex: { type: [Number, String, Boolean] }
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
    activatorEl: null
  }),

  computed: {
    transitionName () {
      return this.transition || `scale-fade`
    },

    // DOM element to attach menu to.
    attachToTarget () {
      let target = this.attachTo || '.w-app'
      if (target === true) target = '.w-app'
      else if (target && !['object', 'string'].includes(typeof target)) target = '.w-app'
      else if (typeof target === 'object' && !target.nodeType) {
        target = '.w-app'
        consoleWarn('Invalid node provided in w-menu attach-to. Falling back to w-app.', this)
      }
      if (typeof target === 'string') target = document.querySelector(target)

      if (!target) {
        consoleWarn(`Unable to locate ${this.attachTo ? `target ${this.attachTo}` : '.w-app'}`, this)
        target = document.querySelector('.w-app')
      }

      return target
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
      switch(this.position) {
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
        [`${this.bgColor}--bg`]: this.bgColor,
        [this.color]: this.color,
        [this.menuClass]: this.menuClass,
        'w-menu--tile': this.tile,
        'w-menu--card': this.card,
        'w-menu--round': this.round,
        'w-menu--shadow': this.shadow,
        'w-menu--fixed': this.fixed
      }
    },

    styles () {
      return {
        zIndex: this.zIndex || this.zIndex === 0 || null,
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
      }
      else handlers = { click: this.toggle }
      return handlers
    }
  },

  methods: {
    toggle (e) {
      if (e.type === 'click' && !this.showOnHover) this.showMenu = !this.showMenu
      if (e.type === 'mouseenter' && this.showOnHover) this.showMenu = true
      if (e.type === 'mouseleave' && this.showOnHover) this.showMenu = false

      if (this.showMenu) this.coordinates = this.getCoordinates(e)
    },

    getCoordinates (e) {
      const { top, left, width, height } = e.target.getBoundingClientRect()
      let coords = { top, left, width, height }

      if (!this.fixed) {
        const { top: targetTop, left: targetLeft } = this.attachToTarget.getBoundingClientRect()
        coords = { ...coords, top: top - targetTop, left: left - targetLeft }
      }

      if (this.transition) {
        const menuEl = this.$refs.menu.$el || this.$refs.menu
        menuEl.style.visibility = 'hidden'
        menuEl.style.display = 'block'

        // If menu is on top or bottom.
        if (['top', 'bottom'].includes(this.position)) coords.left -= menuEl.offsetWidth / 2
        // If menu is on left or right.
        if (['left', 'right'].includes(this.position)) coords.top -= menuEl.offsetHeight / 2

        if (this.position === 'left') coords.left -= menuEl.offsetWidth
        if (this.position === 'top') coords.top -= menuEl.offsetHeight

        menuEl.style.visibility = null
        menuEl.style.display = 'none'
      }

      return coords
    },

    insertMenu () {
      const wrapper = this.$refs.wrapper

      // Unwrap the activator element.
      this.activatorEl = wrapper.firstChild
      wrapper.parentNode.insertBefore(this.activatorEl, wrapper)

      // Move the menu elsewhere in the DOM.
      // wrapper.parentNode.insertBefore((this.$refs.menu.$el || this.$refs.menu), wrapper)
      this.attachToTarget.appendChild((this.$refs.menu.$el || this.$refs.menu))
    }
  },

  beforeMount () {
    // Do this, first thing on mounted (beforeMount + nextTick).
    this.$nextTick(() => {
      this.insertMenu()

      if (this.value) this.toggle({ type: 'click', target: this.activatorEl })
    })
  },

  beforeDestroy () {
    (this.$refs.menu.$el || this.$refs.menu).remove()
    this.activatorEl.remove()
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
  position: absolute;
  z-index: 100;

  &--fixed {position: fixed;z-index: 1000;}
  &--card {background-color: #fff;}
}
</style>
