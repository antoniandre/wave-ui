<template lang="pug">
div
  slot(name="activator" :on="eventHandlers")
  transition(:name="`w-tooltip-slide-fade-${this.position}`")
    .w-tooltip(v-show="showTooltip" :class="classes" :style="styles")
      slot
</template>

<script>
import { consoleWarn } from '@/wave-ui/utils/console'

export default {
  name: 'w-tooltip',
  props: {
    showOnClick: { type: Boolean, default: false },
    detach: { type: [String, Object, Boolean], default: false },
    fixed: { type: Boolean, default: false },
    top: { type: Boolean, default: false },
    bottom: { type: Boolean, default: false },
    left: { type: Boolean, default: false },
    right: { type: Boolean, default: false },
    zIndex: { type: [Number, String, Boolean], default: false },
    color: { type: String, default: '' },
    bgColor: { type: String, default: '' }
  },

  data: () => ({
    showTooltip: false,
    // The activator coordinates.
    coordinates: {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    }
  }),

  computed: {
    detachTarget () {
      let target = this.detach
      if (target === true) target = '.w-app'
      if (target && !['object', 'string'].includes(typeof target)) target = '.w-app'
      if (typeof target === 'string') target = document.querySelector(target)
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
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        [`w-tooltip--${this.position}`]: true,
        'w-tooltip--fixed': this.fixed,
        'w-tooltip--active': this.showTooltip
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
      let handlers = { keydown: this.toggle }
      if (this.showOnClick) handlers.click = this.toggle
      else handlers = { ...handlers, mouseenter: this.toggle, mouseleave: this.toggle }
      return handlers
    }
  },

  mounted () {
    if (this.detach && !this.detachTarget) {
      consoleWarn(`Unable to locate ${this.detach ? `target ${this.detach}` : '.w-app'}`, this)
    }
  },

  methods: {
    toggle (e) {
      if (e.type === 'click' && this.showOnClick) this.showTooltip = !this.showTooltip
      if (e.type === 'mouseenter' && !this.showOnClick) this.showTooltip = true
      if (e.type === 'mouseleave' && !this.showOnClick) this.showTooltip = false

      if (this.showTooltip) this.coordinates = this.getCoordinates(e)
      // Could be useful to have this class?
      e.target.classList[this.showTooltip ? 'add' : 'remove']('w-tooltip-activator')
    },

    getCoordinates (e) {
      const { top, left, width, height } = e.target.getBoundingClientRect()
      let coords = { top, left, width, height }
      if (!this.fixed) {
        const app = document.querySelector('.w-app')
        const { top: appTop, left: appLeft } = app.getBoundingClientRect()
        coords = { ...coords, top: top - appTop, left: left - appLeft }
      }
      return coords
    }
  }
}
</script>

<style lang="scss">
.w-tooltip-activator {position: relative;}

.w-tooltip {
  display: flex;
  position: absolute;
  padding: round($base-increment / 2) $base-increment;
  border-radius: $border-radius;
  border: $border;
  background-color: #fff;
  pointer-events: none;
  transition: $transition-duration ease-in-out;

  &--fixed {position: fixed;z-index: 1000;}

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
