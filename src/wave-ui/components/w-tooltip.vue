<template lang="pug">
slot(name="activator" :on="activatorEventHandlers")
transition(:name="transitionName" appear)
  .w-tooltip(
    v-if="detachableVisible"
    ref="detachable"
    :key="_.uid"
    :class="classes"
    :style="styles")
    slot
</template>

<script>
import { objectifyClasses } from '../utils/index'
import DetachableMixin from '../mixins/detachable'

// const marginFromWindowSide = 4 // Amount of px from a window side, instead of overflowing.

export default {
  name: 'w-tooltip',
  mixins: [DetachableMixin],

  props: {
    modelValue: {},
    showOnClick: { type: Boolean },
    color: { type: String },
    bgColor: { type: String },
    noBorder: { type: Boolean },
    shadow: { type: Boolean },
    tile: { type: Boolean },
    round: { type: Boolean },
    transition: { type: String },
    tooltipClass: { type: [String, Object, Array] },
    persistent: { type: Boolean },
    delay: { type: Number },
    dark: { type: Boolean },
    light: { type: Boolean },
    caption: { type: Boolean }, // Apply the caption class and style (grey, italic, small).
    xs: { type: Boolean },
    sm: { type: Boolean },
    md: { type: Boolean },
    lg: { type: Boolean },
    xl: { type: Boolean },
    enableTouch: { type: Boolean }
    // Other props in the detachable mixin:
    // detachTo, appendTo, fixed, top, bottom, left, right, alignTop, alignBottom, alignLeft,
    // alignRight, noPosition, zIndex, activator.
  },

  emits: ['input', 'update:modelValue', 'open', 'close'],

  data: () => ({
    detachableVisible: false,
    hoveringActivator: false,
    // The tooltip computed top & left coordinates.
    detachableCoords: {
      top: 0,
      left: 0
    },
    detachableEl: null,
    timeoutId: null
  }),

  computed: {
    /**
     * Other computed in the detachable mixin:
     * - `appendToTarget`
     * - `detachableParentEl`
     * - `activatorEl`
     * - `position`
     * - `alignment`
     **/

    tooltipClasses () {
      return objectifyClasses(this.tooltipClass)
    },

    transitionName () {
      const direction = this.position.replace(/top|bottom/, m => ({ top: 'up', bottom: 'down' }[m]))
      return this.transition || `w-tooltip-slide-fade-${direction}`
    },

    size () {
      return (
        (this.xs && 'xs') ||
        (this.sm && 'sm') ||
        (this.sm && 'md') ||
        (this.lg && 'lg') ||
        (this.xl && 'xl') ||
        (this.caption ? 'sm' : 'md') // if no size is set put md by default, or sm if caption is on.
      )
    },

    classes () {
      return {
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        ...this.tooltipClasses,
        [`w-tooltip--${this.position}`]: !this.noPosition,
        [`w-tooltip--align-${this.alignment}`]: !this.noPosition && this.alignment,
        'w-tooltip--dark': this.dark,
        'w-tooltip--light': this.light,
        'w-tooltip--tile': this.tile,
        'w-tooltip--round': this.round,
        caption: this.caption,
        [`size--${this.size}`]: true,
        'w-tooltip--shadow': this.shadow,
        'w-tooltip--fixed': this.fixed,
        'w-tooltip--no-border': this.noBorder || this.bgColor,
        'w-tooltip--custom-transition': this.transition
      }
    },

    // The tooltip styles.
    styles () {
      return {
        zIndex: this.zIndex || this.zIndex === 0 || null,
        top: (this.detachableCoords.top && `${~~this.detachableCoords.top}px`) || null,
        left: (this.detachableCoords.left && `${~~this.detachableCoords.left}px`) || null,
        '--w-tooltip-bg-color': this.$waveui.colors[this.bgColor] || 'var(--w-base-bg-color)'
      }
    },

    activatorEventHandlers () {
      let handlers = {}

      // Check the window exists: SSR-proof.
      const isTouchDevice = typeof window !== 'undefined' && 'ontouchstart' in window

      // Toggling tooltip on mouseenter/mouseout (by default), and also show on focus, hide on blur.
      if (!this.showOnClick && !isTouchDevice) {
        handlers = {
          focus: this.open,
          blur: this.close,
          mouseenter: e => {
            this.hoveringActivator = true
            this.open(e)
          },
          mouseleave: () => {
            this.hoveringActivator = false
            this.close()
          }
        }
      }
      // Only bind a click event on mobile, or if showOnClick is set.
      else if (this.enableTouch || this.showOnClick) handlers = { click: this.toggle }

      return handlers
    }
  },

  methods: {
    /**
     * Other methods in the `detachable` mixin:
     * - `open`
     * - `getActivatorCoordinates`
     * - `computeDetachableCoords`
     * - `onResize`
     * - `onOutsideMousedown`
     * - `insertInDOM`
     * - `removeFromDOM`
     **/

    // ! \ This function uses the DOM - NO SSR (only trigger from beforeMount and later).
    toggle (e) {
      let shouldShowTooltip = this.detachableVisible

      // For touch devices.
      if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        // disable tooltip opening for mouseenter activation.
        if (!this.enableTouch && !this.showOnClick) shouldShowTooltip = false
        else shouldShowTooltip = !shouldShowTooltip
      }
      else if (e.type === 'click' && this.showOnClick) shouldShowTooltip = !shouldShowTooltip
      else if (['mouseenter', 'focus'].includes(e.type) && !this.showOnClick) shouldShowTooltip = true
      else if (['mouseleave', 'blur'].includes(e.type) && !this.showOnClick) shouldShowTooltip = false

      this.timeoutId = clearTimeout(this.timeoutId)
      if (shouldShowTooltip) this.open(e)
      else this.close()
    },

    /**
     * Closes the tooltip. Can happen on:
     * - click of activator
     * - hover outside if showOnHover
     * - click inside tooltip if hideOnTooltipClick.
     * / ! \ This function uses the DOM - NO SSR (only trigger from beforeMount and later).
     *
     * @param {Boolean} force when showOnHover is set to true, hovering tooltip should keep it open.
     *                        But if hideOnTooltipClick is also set to true, this should force close
     *                        even while hovering the tooltip.
     */
    async close (force = false) {
      // Might be already closed.
      // E.g. showOnHover & hideOnTooltipClick: on click, force hide then mouseleave is also firing.
      if (!this.detachableVisible) return

      if (this.showOnHover && !force) {
        await new Promise(resolve => setTimeout(resolve, 10))
        if (this.showOnHover && this.hoveringActivator) return
      }

      this.$emit('update:modelValue', (this.detachableVisible = false))
      this.$emit('input', false)
      this.$emit('close')
      // Remove the mousedown listener if the tooltip got closed without a mousedown outside of the tooltip.
      document.removeEventListener('mousedown', this.onOutsideMousedown)
      window.removeEventListener('resize', this.onResize)
    }
  }

  // watch, mounted & beforeDestroy hooks are set in the detachable.js mixin.
}
</script>

<style lang="scss">
@use "sass:math";

.w-tooltip {
  // Fix Safari where `width: max-content` does not take padding and border into consideration.
  display: table;

  position: absolute;
  padding: $base-increment math.round(1.5 * $base-increment);
  border-radius: $border-radius;
  border: 1px solid $tooltip-border-color;
  background-color: $tooltip-bg-color;
  pointer-events: none;
  color: $tooltip-color;
  align-items: center;
  max-width: 300px;
  width: max-content; // Not supported in IE11. :/
  z-index: 100;

  @include themeable;

  &--fixed {position: fixed;z-index: 1000;}

  &--tile {border-radius: 0;}
  &--round {
    border-radius: 99em;
    padding: $base-increment math.round(2.5 * $base-increment);
  }
  &--shadow {box-shadow: $box-shadow;}
  &--no-border {border: none;}

  &--top {margin-top: -3 * $base-increment;}
  &--bottom {margin-top: 3 * $base-increment;}
  &--left {margin-left: -3 * $base-increment;}
  &--right {margin-left: 3 * $base-increment;}

  &.size--xs {font-size: 0.75rem;}
  &.size--sm {font-size: 0.83rem;}
  &.size--md {font-size: 0.9rem;}
  &.size--lg {font-size: 1rem;}
  &.size--xl {font-size: 1.1rem;}

  &--custom-transition {transform: none;}

  // Tooltip without border.
  &--no-border {
    @include triangle(var(--w-tooltip-bg-color), '.w-tooltip', 7px, 0);
  }

  // Tooltip with border.
  &:not(&--no-border) {
    @include triangle(var(--w-tooltip-bg-color), '.w-tooltip', 7px);
  }
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
.w-tooltip-slide-fade-up-enter-from, .w-tooltip-slide-fade-up-leave-to {
  margin-top: -2 * $base-increment;
  opacity: 0;
}

// slide-fade-down.
.w-tooltip-slide-fade-down-enter-from, .w-tooltip-slide-fade-down-leave-to {
  margin-top: 2 * $base-increment;
  opacity: 0;
}

// Slide-fade-left.
.w-tooltip-slide-fade-left-enter-from, .w-tooltip-slide-fade-left-leave-to {
  margin-left: -2 * $base-increment;
  opacity: 0;
}

// Slide-fade-right.
.w-tooltip-slide-fade-right-enter-from, .w-tooltip-slide-fade-right-leave-to {
  margin-left: 2 * $base-increment;
  opacity: 0;
}
// --------------------------------------------------------
</style>
