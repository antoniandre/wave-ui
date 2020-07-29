<template lang="pug">
.w-tooltip-wrapper(ref="wrapper" :class="{ 'w-tooltip-wrapper--attached': !detachTo }")
  slot(name="activator" :on="eventHandlers")
  transition(:name="transitionName")
    .w-tooltip(ref="tooltip" v-show="showTooltip" :class="classes" :style="styles")
      //- When there is a bg color, another div wrapper is needed for the triangle
      //- to inherit the current color.
      div(v-if="bgColor" :class="color")
        slot
      slot(v-else)
</template>

<script>
/**
 * Complexity of this component: Vue 2.x can only mount 1 single root element, but we don't
 * want to wrap the activator as it may break the layout.
 * Another simpler way would be to append the tooltip inside the activator, but some HTML tags
 * can't have children like <input>.
 * So a solution is to mount both the activator element and the tooltip in a wrapper then unwrap
 * and move the tooltip elsewhere in the DOM.
 */

import { consoleWarn } from '../utils/console'

export default {
  name: 'w-tooltip',
  props: {
    value: {},
    showOnClick: { type: Boolean },
    color: { type: String, default: '' },
    bgColor: { type: String, default: '' },
    noBorder: { type: String, default: '' },
    shadow: { type: Boolean },
    tile: { type: Boolean },
    round: { type: Boolean },
    transition: { type: String, default: '' },
    tooltipClass: { type: String, default: '' },
    // Position.
    detachTo: {},
    fixed: { type: Boolean },
    top: { type: Boolean },
    bottom: { type: Boolean },
    left: { type: Boolean },
    right: { type: Boolean },
    zIndex: { type: [Number, String, Boolean] }
  },

  data: () => ({
    showTooltip: false,
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
      return this.transition || `w-tooltip-slide-fade-${this.position}`
    },

    detachToTarget () {
      let target = this.detachTo || '.w-app'
      if (target === true) target = '.w-app'
      else if (target && !['object', 'string'].includes(typeof target)) target = '.w-app'
      else if (typeof target === 'object' && !target.nodeType) {
        target = '.w-app'
        consoleWarn('Invalid node provided in w-tooltip `attach-to`. Falling back to .w-app.', this)
      }
      if (typeof target === 'string') target = document.querySelector(target)

      if (!target) {
        consoleWarn(`Unable to locate ${this.detachTo ? `target ${this.detachTo}` : '.w-app'}`, this)
        target = document.querySelector('.w-app')
      }

      return target
    },

    // DOM element that will receive the tooltip.
    tooltipParentEl () {
      return this.detachTo ? this.detachToTarget : this.$refs.wrapper
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

    tooltipCoordinates () {
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
        [this.color]: !this.bgColor,
        [`${this.bgColor} ${this.bgColor}--bg`]: this.bgColor,
        [this.tooltipClass]: this.tooltipClass,
        [`w-tooltip--${this.position}`]: true,
        'w-tooltip--tile': this.tile,
        'w-tooltip--round': this.round,
        'w-tooltip--shadow': this.shadow,
        'w-tooltip--fixed': this.fixed,
        'w-tooltip--active': this.showTooltip,
        'w-tooltip--no-border': this.noBorder || this.bgColor,
        'w-tooltip--custom-transition': this.transition
      }
    },

    styles () {
      return {
        zIndex: this.zIndex || this.zIndex === 0 || null,
        top: `${~~this.tooltipCoordinates.top}px`,
        left: `${~~this.tooltipCoordinates.left}px`
      }
    },

    eventHandlers () {
      let handlers = {}
      if (this.showOnClick) handlers = { click: this.toggle }
      else {
        handlers = {
          focus: this.toggle,
          blur: this.toggle,
          mouseenter: this.toggle,
          mouseleave: this.toggle
        }
      }
      return handlers
    }
  },

  methods: {
    toggle (e) {
      if (e.type === 'click' && this.showOnClick) this.showTooltip = !this.showTooltip
      else if (['mouseenter', 'focus'].includes(e.type) && !this.showOnClick) this.showTooltip = true
      else if (['mouseleave', 'blur'].includes(e.type) && !this.showOnClick) this.showTooltip = false

      if (this.showTooltip) this.coordinates = this.getCoordinates(e)
    },

    getCoordinates (e) {
      const { top, left, width, height } = e.target.getBoundingClientRect()
      let coords = { top, left, width, height }

      if (!this.fixed) {
        const { top: targetTop, left: targetLeft } = this.tooltipParentEl.getBoundingClientRect()
        coords = { ...coords, top: top - targetTop, left: left - targetLeft }
      }

      if (this.transition) {
        const tooltipEl = this.$refs.tooltip
        tooltipEl.style.visibility = 'hidden'
        tooltipEl.style.display = 'block'

        // If tooltip is on top or bottom.
        if (['top', 'bottom'].includes(this.position)) coords.left -= tooltipEl.offsetWidth / 2
        // If tooltip is on left or right.
        if (['left', 'right'].includes(this.position)) coords.top -= tooltipEl.offsetHeight / 2

        if (this.position === 'left') coords.left -= tooltipEl.offsetWidth
        if (this.position === 'top') coords.top -= tooltipEl.offsetHeight

        tooltipEl.style.visibility = null
        tooltipEl.style.display = 'none'
      }

      return coords
    },

    insertTooltip () {
      const wrapper = this.$refs.wrapper

      // Unwrap the activator element.
      wrapper.parentNode.insertBefore(this.activatorEl, wrapper)

      // Move the tooltip elsewhere in the DOM.
      // wrapper.parentNode.insertBefore(this.$refs.tooltip, wrapper)
      this.detachToTarget.appendChild(this.$refs.tooltip)
    }
  },

  beforeMount () {
    // Do this, first thing on mounted (beforeMount + nextTick).
    this.$nextTick(() => {
      this.activatorEl = this.$refs.wrapper.firstChild
      if (this.detachTo) this.insertTooltip()

      if (this.value) this.toggle({ type: 'click', target: this.activatorEl })
    })
  },

  beforeDestroy () {
    if (this.detachTo) {
      if (this.$refs.tooltip) this.$refs.tooltip.remove()
      if (this.activatorEl) this.activatorEl.remove()
    }
  },

  watch: {
    value () {
      this.toggle({ type: 'click', target: this.activatorEl })
    }
  }
}
</script>

<style lang="scss">
.w-tooltip-wrapper {
  display: none;

  &--attached {display: inline-block;position: relative;}
}

.w-tooltip {
  display: flex;
  position: absolute;
  padding: $base-increment round(1.5 * $base-increment);
  border-radius: $border-radius;
  border: 1px solid #ddd;
  background-color: $tooltip-bg-color;
  pointer-events: none;
  color: $tooltip-color;
  align-items: center;
  max-width: 300px;
  width: max-content; // Not supported in IE11. :/
  z-index: 100;

  &--fixed {position: fixed;z-index: 1000;}

  &--tile {border-radius: 0;}
  &--round {
    border-radius: 5em;
    padding: $base-increment round(2.5 * $base-increment);
  }
  &--shadow {box-shadow: $box-shadow;}
  &--no-border {border: none;}

  &--top {
    transform: translate(-50%, -100%);
    margin-top: -3 * $base-increment;
  }
  &--bottom {
    transform: translateX(-50%);
    margin-top: 3 * $base-increment;
  }
  &--left {
    transform: translate(-100%, -50%);
    margin-left: -3 * $base-increment;
  }
  &--right {
    transform: translateY(-50%);
    margin-left: 3 * $base-increment;
  }

  &--custom-transition {transform: none;}

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 6px solid transparent;
  }
  &--top:after {
    top: 100%;
    left: 50%;
    border-top-color: $tooltip-bg-color;
    transform: translateX(-50%);
    margin-top: 1px;
  }
  &--bottom:after {
    bottom: 100%;
    left: 50%;
    border-bottom-color: $tooltip-bg-color;
    transform: translateX(-50%);
    margin-bottom: 1px;
  }
  &--left:after {
    left: 100%;
    top: 50%;
    border-left-color: $tooltip-bg-color;
    transform: translateY(-50%);
    margin-left: 1px;
  }
  &--right:after {
    right: 100%;
    top: 50%;
    border-right-color: $tooltip-bg-color;
    transform: translateY(-50%);
    margin-right: 1px;
  }

  // Tooltip without border.
  // --------------------------------------------------------
  &--no-border.w-tooltip--top:after {margin-top: -1px;border-top-color: inherit;}
  &--no-border.w-tooltip--bottom:after {margin-bottom: -1px;border-bottom-color: inherit;}
  &--no-border.w-tooltip--left:after {margin-left: -1px;border-left-color: inherit;}
  &--no-border.w-tooltip--right:after {margin-right: -1px;border-right-color: inherit;}

  // Tooltip with border.
  // --------------------------------------------------------
  &:not(&--no-border).w-tooltip--top:after {margin-top: -1px;}
  &:not(&--no-border).w-tooltip--bottom:after {margin-bottom: -1px;}
  &:not(&--no-border).w-tooltip--left:after {margin-left: -1px;}
  &:not(&--no-border).w-tooltip--right:after {margin-right: -1px;}

  &:not(&--no-border) {
    &:before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border: 7px solid transparent;
    }
    &.w-tooltip--top:before {
      top: 100%;
      left: 50%;
      border-top-color: inherit;
      transform: translateX(-50%);
      margin-top: 0;
    }
    &.w-tooltip--bottom:before {
      bottom: 100%;
      left: 50%;
      border-bottom-color: inherit;
      transform: translateX(-50%);
      margin-bottom: 0;
    }
    &.w-tooltip--left:before {
      left: 100%;
      top: 50%;
      border-left-color: inherit;
      transform: translateY(-50%);
      margin-left: 0;
    }
    &.w-tooltip--right:before {
      right: 100%;
      top: 50%;
      border-right-color: inherit;
      transform: translateY(-50%);
      margin-right: 0;
    }
  }
  // --------------------------------------------------------
}

// Transitions.
// --------------------------------------------------------
.w-tooltip-slide-fade-top-enter-active, .w-tooltip-slide-fade-top-leave-active,
.w-tooltip-slide-fade-bottom-enter-active, .w-tooltip-slide-fade-bottom-leave-active,
.w-tooltip-slide-fade-left-enter-active, .w-tooltip-slide-fade-left-leave-active,
.w-tooltip-slide-fade-right-enter-active, .w-tooltip-slide-fade-right-leave-active {
  transition: margin $transition-duration ease-in-out, opacity $transition-duration ease-in-out;
}

// Slide-fade-top.
.w-tooltip-slide-fade-top-enter, .w-tooltip-slide-fade-top-leave-to {
  margin-top: -2 * $base-increment;
  opacity: 0;
}

// Slide-fade-bottom.
.w-tooltip-slide-fade-bottom-enter, .w-tooltip-slide-fade-bottom-leave-to {
  margin-top: 2 * $base-increment;
  opacity: 0;
}

// Slide-fade-left.
.w-tooltip-slide-fade-left-enter, .w-tooltip-slide-fade-left-leave-to {
  margin-left: -2 * $base-increment;
  opacity: 0;
}

// Slide-fade-right.
.w-tooltip-slide-fade-right-enter, .w-tooltip-slide-fade-right-leave-to {
  margin-left: 2 * $base-increment;
  opacity: 0;
}
// --------------------------------------------------------
</style>
