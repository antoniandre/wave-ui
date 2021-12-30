<template lang="pug">
.w-tooltip-wrap(:class="{ 'w-tooltip-wrap--attached': !detachTo }")
  slot(name="activator" :on="eventHandlers")
  transition(:name="transitionName" appear)
    .w-tooltip(ref="tooltip" v-show="showTooltip" :class="classes" :style="styles")
      slot
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

import { objectifyClasses } from '../utils/index'
import { consoleWarn } from '../utils/console'

const marginFromWindowSide = 4 // Amount of px from a window side, instead of overflowing.

export default {
  name: 'w-tooltip',

  props: {
    value: {},
    showOnClick: { type: Boolean },
    color: { type: String },
    bgColor: { type: String },
    noBorder: { type: Boolean },
    shadow: { type: Boolean },
    tile: { type: Boolean },
    round: { type: Boolean },
    transition: { type: String },
    tooltipClass: { type: [String, Object, Array] },
    // Position.
    detachTo: {},
    fixed: { type: Boolean },
    top: { type: Boolean },
    bottom: { type: Boolean },
    left: { type: Boolean },
    right: { type: Boolean },
    zIndex: { type: [Number, String, Boolean] }
  },

  emits: ['input', 'update:modelValue', 'open', 'close'],

  data: () => ({
    showTooltip: false,
    // The activator coordinates.
    coordinates: {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    },
    activatorEl: null,
    tooltipEl: null,
    timeoutId: null
  }),

  computed: {
    tooltipClasses () {
      return objectifyClasses(this.tooltipClass)
    },

    transitionName () {
      const direction = this.position.replace(/top|bottom/, m => ({ top: 'up', bottom: 'down' }[m]))
      return this.transition || `w-tooltip-slide-fade-${direction}`
    },

    // DOM element to attach tooltip to.
    // ! \ This computed uses the DOM - NO SSR (only trigger from beforeMount and later).
    detachToTarget () {
      const defaultTarget = '.w-app'

      let target = this.detachTo || defaultTarget
      if (target === true) target = defaultTarget
      else if (target && !['object', 'string'].includes(typeof target)) target = defaultTarget
      else if (typeof target === 'object' && !target.nodeType) {
        target = defaultTarget
        consoleWarn('Invalid node provided in w-tooltip `attach-to`. Falling back to .w-app.', this)
      }
      if (typeof target === 'string') target = document.querySelector(target)

      if (!target) {
        consoleWarn(`Unable to locate ${this.detachTo ? `target ${this.detachTo}` : defaultTarget}`, this)
        target = document.querySelector(defaultTarget)
      }

      return target
    },

    // DOM element that will receive the tooltip.
    // ! \ This computed uses the DOM - NO SSR (only trigger from beforeMount and later).
    tooltipParentEl () {
      return this.detachTo ? this.detachToTarget : this.$el
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
        ...this.tooltipClasses,
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

    // The tooltip styles.
    styles () {
      return {
        zIndex: this.zIndex || this.zIndex === 0 || null,
        top: (this.tooltipCoordinates.top && `${~~this.tooltipCoordinates.top}px`) || null,
        left: (this.tooltipCoordinates.left && `${~~this.tooltipCoordinates.left}px`) || null,
        '--w-tooltip-bg-color': this.$waveui.colors[this.bgColor || 'white']
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

        // Check the window exists: SSR-proof.
        if (typeof window !== 'undefined' && 'ontouchstart' in window) handlers.click = this.toggle
      }
      return handlers
    }
  },

  methods: {
    // ! \ This function uses the DOM - NO SSR (only trigger from beforeMount and later).
    toggle (e) {
      let shouldShowTooltip = this.showTooltip
      if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        if (e.type === 'click') shouldShowTooltip = !shouldShowTooltip
      }
      else if (e.type === 'click' && this.showOnClick) shouldShowTooltip = !shouldShowTooltip
      else if (['mouseenter', 'focus'].includes(e.type) && !this.showOnClick) shouldShowTooltip = true
      else if (['mouseleave', 'blur'].includes(e.type) && !this.showOnClick) shouldShowTooltip = false

      this.timeoutId = clearTimeout(this.timeoutId)
      if (shouldShowTooltip) {
        this.coordinates = this.getCoordinates(e)
        // In `getCoordinates` accessing the tooltip computed styles takes a few ms (less than 10ms),
        // if we don't postpone the tooltip apparition it will start transition from a visible tooltip and
        // thus will not transition.
        this.timeoutId = setTimeout(() => {
          this.showTooltip = true
          this.$emit('update:modelValue', true)
          this.$emit('input', true)
          this.$emit('open')
        }, 10)
      }
      else {
        this.showTooltip = false
        this.$emit('update:modelValue', false)
        this.$emit('input', false)
        this.$emit('close')
      }
    },

    // ! \ This function uses the DOM - NO SSR (only trigger from beforeMount and later).
    getCoordinates () {
      const { top, left, width, height } = this.activatorEl.getBoundingClientRect()
      let coords = { top, left, width, height }

      if (!this.fixed) {
        const { top: targetTop, left: targetLeft } = this.tooltipParentEl.getBoundingClientRect()
        coords = { ...coords, top: top - targetTop, left: left - targetLeft }
      }

      const tooltipEl = this.$refs.tooltip

      // 1. First display the tooltip but hide it (So we can get its dimension).
      tooltipEl.style.visibility = 'hidden'
      tooltipEl.style.display = 'table'
      const computedStyles = window.getComputedStyle(tooltipEl, null)

      // Keep fully in viewport.
      // --------------------------------------------------
      if (this.position === 'top' && ((top - tooltipEl.offsetHeight) < 0)) {
        const margin = -parseInt(computedStyles.getPropertyValue('margin-top'))
        coords.top -= top - tooltipEl.offsetHeight - margin - marginFromWindowSide
      }
      else if (this.position === 'left' && left - tooltipEl.offsetWidth < 0) {
        const margin = -parseInt(computedStyles.getPropertyValue('margin-left'))
        coords.left -= left - tooltipEl.offsetWidth - margin - marginFromWindowSide
      }
      else if (this.position === 'right' && left + width + tooltipEl.offsetWidth > window.innerWidth) {
        const margin = parseInt(computedStyles.getPropertyValue('margin-left'))
        coords.left -= left + width + tooltipEl.offsetWidth - window.innerWidth + margin + marginFromWindowSide
      }
      else if (this.position === 'bottom' && top + height + tooltipEl.offsetHeight > window.innerHeight) {
        const margin = parseInt(computedStyles.getPropertyValue('margin-top'))
        coords.top -= top + height + tooltipEl.offsetHeight - window.innerHeight + margin + marginFromWindowSide
      }
      // --------------------------------------------------

      // 2. Update left & top if there is a custom transition.
      // Tooltip position relies on transform translate, the custom animation may override the transform
      // property so do without it and subtract half width or height manually.
      if (this.transition) {
        // If tooltip is on top or bottom.
        if (['top', 'bottom'].includes(this.position)) coords.left -= tooltipEl.offsetWidth / 2
        // If tooltip is on left or right.
        if (['left', 'right'].includes(this.position)) coords.top -= tooltipEl.offsetHeight / 2

        if (this.position === 'left') coords.left -= tooltipEl.offsetWidth
        if (this.position === 'top') coords.top -= tooltipEl.offsetHeight
      }

      // 3. Hide the tooltip again so the transition happens correctly.
      tooltipEl.style.visibility = null
      tooltipEl.style.display = 'none'

      return coords
    },

    insertTooltip () {
      const wrapper = this.$el
      this.tooltipEl = this.$refs.tooltip.$el || this.$refs.tooltip

      // Unwrap the activator element.
      wrapper.parentNode.insertBefore(this.activatorEl, wrapper)

      // Move the tooltip elsewhere in the DOM.
      // wrapper.parentNode.insertBefore(this.$refs.tooltip, wrapper)
      this.detachToTarget.appendChild(this.$refs.tooltip)
    },

    removeTooltip () {
      if (this.tooltipEl && this.tooltipEl.parentNode) this.tooltipEl.remove()
    }

  },

  mounted () {
    this.activatorEl = this.$el.firstElementChild
    if (this.detachTo) this.insertTooltip()

    if (this.value) this.toggle({ type: 'click', target: this.activatorEl })
  },

  beforeDestroy () {
    this.removeTooltip()

    if (this.activatorEl && this.activatorEl.parentNode) this.activatorEl.remove()
  },

  watch: {
    value (bool) {
      if (bool !== this.showTooltip) this.toggle({ type: 'click', target: this.activatorEl })
    },
    detachTo () {
      this.removeTooltip()
      this.insertTooltip()
    }
  }
}
</script>

<style lang="scss">
.w-tooltip-wrap {
  display: none;

  &--attached {display: inline-block;position: relative;}
}

.w-tooltip {
  // Fix Safari where `width: max-content` does not take padding and border into consideration.
  display: table;

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
    border-radius: 99em;
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

  // &:after {
  //   content: '';
  //   position: absolute;
  //   width: 0;
  //   height: 0;
  //   border: 6px solid transparent;
  // }
  // &--top:after {
  //   top: 100%;
  //   left: 50%;
  //   border-top-color: $tooltip-bg-color;
  //   transform: translateX(-50%);
  //   margin-top: 1px;
  // }
  // &--bottom:after {
  //   bottom: 100%;
  //   left: 50%;
  //   border-bottom-color: $tooltip-bg-color;
  //   transform: translateX(-50%);
  //   margin-bottom: 1px;
  // }
  // &--left:after {
  //   left: 100%;
  //   top: 50%;
  //   border-left-color: $tooltip-bg-color;
  //   transform: translateY(-50%);
  //   margin-left: 1px;
  // }
  // &--right:after {
  //   right: 100%;
  //   top: 50%;
  //   border-right-color: $tooltip-bg-color;
  //   transform: translateY(-50%);
  //   margin-right: 1px;
  // }

  // Tooltip without border.
  // --------------------------------------------------------
  &--no-border {
    @include triangle(var(--w-tooltip-bg-color), '.w-tooltip', 7px, 0);
  }
  &:not(&--no-border) {
    @include triangle(var(--w-tooltip-bg-color), '.w-tooltip', 7px);
  }

  // Tooltip with border.
  // --------------------------------------------------------
  // &:not(&--no-border).w-tooltip--top:after {margin-top: -1px;}
  // &:not(&--no-border).w-tooltip--bottom:after {margin-bottom: -1px;}
  // &:not(&--no-border).w-tooltip--left:after {margin-left: -1px;}
  // &:not(&--no-border).w-tooltip--right:after {margin-right: -1px;}

  // &:not(&--no-border) {
  //   &:before {
  //     content: '';
  //     position: absolute;
  //     width: 0;
  //     height: 0;
  //     border: 7px solid transparent;
  //   }
  //   &.w-tooltip--top:before {
  //     top: 100%;
  //     left: 50%;
  //     border-top-color: inherit;
  //     transform: translateX(-50%);
  //     margin-top: 0;
  //   }
  //   &.w-tooltip--bottom:before {
  //     bottom: 100%;
  //     left: 50%;
  //     border-bottom-color: inherit;
  //     transform: translateX(-50%);
  //     margin-bottom: 0;
  //   }
  //   &.w-tooltip--left:before {
  //     left: 100%;
  //     top: 50%;
  //     border-left-color: inherit;
  //     transform: translateY(-50%);
  //     margin-left: 0;
  //   }
  //   &.w-tooltip--right:before {
  //     right: 100%;
  //     top: 50%;
  //     border-right-color: inherit;
  //     transform: translateY(-50%);
  //     margin-right: 0;
  //   }
  // }
  // --------------------------------------------------------
}

// Transitions.
// --------------------------------------------------------
.w-tooltip-slide-fade-up-enter-active, .w-tooltip-slide-fade-up-leave-active,
.w-tooltip-slide-fade-down-enter-active, .w-tooltip-slide-fade-down-leave-active,
.w-tooltip-slide-fade-left-enter-active, .w-tooltip-slide-fade-left-leave-active,
.w-tooltip-slide-fade-right-enter-active, .w-tooltip-slide-fade-right-leave-active {
  transition: margin $transition-duration ease-in-out, opacity $transition-duration ease-in-out;
}

// slide-fade-up.
.w-tooltip-slide-fade-up-enter, .w-tooltip-slide-fade-up-leave-to {
  margin-top: -2 * $base-increment;
  opacity: 0;
}

// slide-fade-down.
.w-tooltip-slide-fade-down-enter, .w-tooltip-slide-fade-down-leave-to {
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
