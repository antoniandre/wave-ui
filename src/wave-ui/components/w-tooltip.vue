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
    value: { default: false },
    showOnClick: { type: Boolean, default: false },
    detach: { type: [String, Object, Boolean], default: false },
    fixed: { type: Boolean, default: false },
    top: { type: Boolean, default: false },
    bottom: { type: Boolean, default: false },
    left: { type: Boolean, default: false },
    right: { type: Boolean, default: false },
    zIndex: { type: [Number, String, Boolean], default: false },
    color: { type: String, default: '' },
    bgColor: { type: String, default: '' },
    noBorder: { type: String, default: '' }
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
        'w-tooltip--active': this.showTooltip,
        'w-tooltip--no-border': this.noBorder || this.bgColor
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
      let handlers = { keydown: this.toggle, focus: this.toggle }
      if (this.showOnClick) handlers.click = this.toggle
      else handlers = { ...handlers, mouseenter: this.toggle, mouseleave: this.toggle }
      return handlers
    }
  },

  mounted () {
    this.$nextTick(() => {
      console.log(this.$scopedSlots.myElement()[0])
    })

    if (this.value) this.toggle({ type: 'click', target: this.$scopedSlots.activator })

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
  },

  watch: {
    value () {
      this.toggle({ type: 'click', target: this.$scopedSlots.activator()[0] })
    }
  }
}
</script>

<style lang="scss">
.w-tooltip-activator {position: relative;}

.w-tooltip {
  display: flex;
  position: absolute;
  padding: $base-increment round(1.5 * $base-increment);
  border-radius: $border-radius;
  border: 1px solid #ddd;
  background-color: $tooltip-bg-color;
  pointer-events: none;
  transition: $transition-duration ease-in-out;
  color: $tooltip-color;
  align-items: center;
  max-width: 300px;

  &--fixed {position: fixed;z-index: 1000;}

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
      margin-top: 0px;
    }
    &.w-tooltip--bottom:before {
      bottom: 100%;
      left: 50%;
      border-bottom-color: inherit;
      transform: translateX(-50%);
      margin-bottom: 0px;
    }
    &.w-tooltip--left:before {
      left: 100%;
      top: 50%;
      border-left-color: inherit;
      transform: translateY(-50%);
      margin-left: 0px;
    }
    &.w-tooltip--right:before {
      right: 100%;
      top: 50%;
      border-right-color: inherit;
      transform: translateY(-50%);
      margin-right: 0px;
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
