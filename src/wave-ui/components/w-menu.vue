<template lang="pug">
slot(name="activator" :on="activatorEventHandlers")
transition(:name="transitionName" appear)
  .w-menu(
    v-if="custom && detachableVisible"
    ref="detachable"
    v-bind="$attrs"
    @click="hideOnMenuClick && close(true)"
    @mouseenter="showOnHover && (hoveringMenu = true)"
    @mouseleave="showOnHover && ((hoveringMenu = false), close())"
    :class="classes"
    :style="styles")
    slot
  w-card.w-menu(
    v-else-if="detachableVisible"
    ref="detachable"
    v-bind="$attrs"
    @click.native="hideOnMenuClick && close(true)"
    @mouseenter.native="showOnHover && (hoveringMenu = true)"
    @mouseleave.native="showOnHover && ((hoveringMenu = false), close())"
    :tile="tile"
    :title-class="titleClasses"
    :content-class="contentClasses"
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
  :model-value="detachableVisible"
  :persistent="persistent"
  :class="overlayClasses"
  v-bind="overlayProps"
  :z-index="(zIndex || 200) - 1"
  @update:model-value="detachableVisible = false")
</template>

<script>
import { objectifyClasses } from '../utils/index'
import DetachableMixin from '../mixins/detachable'

// const marginFromWindowSide = 4 // Amount of px from a window side, instead of overflowing.

export default {
  name: 'w-menu',
  mixins: [DetachableMixin],
  inheritAttrs: false, // The attrs are only bound to the button-partial, not the root.

  props: {
    modelValue: {}, // Show or hide.
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
    menuClass: { type: [String, Object, Array] },
    titleClass: { type: [String, Object, Array] },
    contentClass: { type: [String, Object, Array] },
    arrow: { type: Boolean }, // The small triangle pointing toward the activator.
    minWidth: { type: [Number, String] }, // can be like: `40`, `5em`, `activator`.
    overlay: { type: Boolean },
    overlayClass: { type: [String, Object, Array] },
    overlayProps: { type: Object }, // Allow passing down an object of props to the w-overlay component.
    persistent: { type: Boolean },
    delay: { type: Number },
    dark: { type: Boolean },
    light: { type: Boolean }
    // Other props in the detachable mixin:
    // detachTo, appendTo, fixed, top, bottom, left, right, alignTop, alignBottom, alignLeft,
    // alignRight, noPosition, zIndex, activator.
  },

  provide () {
    return {
      // If a detachable is used inside a w-menu without an appendTo, default to the menu element
      // instead of the w-app.
      detachableDefaultRoot: () => this.$refs.detachable?.$el || this.$refs.detachable || null
    }
  },

  emits: ['input', 'update:modelValue', 'open', 'close'],

  data: () => ({
    detachableVisible: false,
    hoveringActivator: false,
    hoveringMenu: false,
    // The menu computed top & left coordinates.
    detachableCoords: {
      top: 0,
      left: 0
    },
    activatorWidth: 0,
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

    transitionName () {
      return this.transition || 'scale-fade'
    },

    menuMinWidth () {
      if (this.minWidth === 'activator') return this.activatorWidth ? `${this.activatorWidth}px` : 0
      else return isNaN(this.minWidth) ? this.minWidth : (this.minWidth ? `${this.minWidth}px` : 0)
    },

    menuClasses () {
      return objectifyClasses(this.menuClass)
    },

    titleClasses () {
      return objectifyClasses(this.titleClass)
    },

    contentClasses () {
      return objectifyClasses(this.contentClass)
    },

    overlayClasses () {
      return {
        ...objectifyClasses(this.overlayClass),
        'w-overlay--no-pointer-event': this.showOnHover
      }
    },

    classes () {
      return {
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        ...this.menuClasses,
        [`w-menu--${this.position}`]: !this.noPosition,
        [`w-menu--align-${this.alignment}`]: !this.noPosition && this.alignment,
        'w-menu--tile': this.tile,
        'w-menu--card': !this.custom,
        'w-menu--round': this.round,
        'w-menu--arrow': this.arrow,
        'w-menu--shadow': this.shadow,
        'w-menu--fixed': this.fixed,
        'w-menu--dark': this.dark,
        'w-menu--light': this.light
      }
    },

    // The floating menu styles.
    styles () {
      return {
        zIndex: this.zIndex || this.zIndex === 0 || (this.overlay && !this.zIndex && 200) || null,
        top: (this.detachableCoords.top && `${~~this.detachableCoords.top}px`) || null,
        left: (this.detachableCoords.left && `${~~this.detachableCoords.left}px`) || null,
        minWidth: (this.minWidth && this.menuMinWidth) || null,
        '--w-menu-bg-color': this.arrow && (this.$waveui.colors[this.bgColor] || 'rgb(var(--w-base-bg-color-rgb))')
      }
    },

    activatorEventHandlers () {
      let handlers = {}

      if (this.showOnHover) {
        handlers = {
          focus: this.toggle,
          blur: this.toggle,
          mouseenter: e => {
            this.hoveringActivator = true
            this.open(e)
          },
          mouseleave: e => {
            this.hoveringActivator = false
            // Wait 10ms, the time to get the hoveringMenu updated on mouseenter on the menu.
            setTimeout(() => {
              if (!this.hoveringMenu) this.close()
            }, 10)
          }
        }
        // Check the window exists: SSR-proof.
        if (typeof window !== 'undefined' && 'ontouchstart' in window) {
          handlers.click = this.toggle
        }
      }
      else handlers = { click: this.toggle }
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
      let shouldShowMenu = this.detachableVisible
      if (typeof window !== 'undefined' && 'ontouchstart' in window &&
          this.showOnHover && e.type === 'click') {
        shouldShowMenu = !shouldShowMenu
      }
      else if (e.type === 'click' && !this.showOnHover) shouldShowMenu = !shouldShowMenu
      else if (e.type === 'mouseenter' && this.showOnHover) {
        this.hoveringActivator = true
        shouldShowMenu = true
      }
      else if (e.type === 'mouseleave' && this.showOnHover) {
        this.hoveringActivator = false
        shouldShowMenu = false
      }

      this.timeoutId = clearTimeout(this.timeoutId)

      if (shouldShowMenu) this.open(e)
      else this.close()
    },

    /**
     * Closes the menu. Can happen on:
     * - click of activator
     * - hover outside if showOnHover
     * - click inside menu if hideOnMenuClick.
     * / ! \ This function uses the DOM - NO SSR (only trigger from beforeMount and later).
     *
     * @param {Boolean} force when showOnHover is set to true, hovering menu should keep it open.
     *                        But if hideOnMenuClick is also set to true, this should force close
     *                        even while hovering the menu.
     */
    async close (force = false) {
      // The user may open and close the detachable so fast (like when toggling on hover) that it
      // should not show up at all. This cancels the opening timer (if there is a set delay prop).
      this.openTimeout = clearTimeout(this.openTimeout)

      // Might be already closed.
      // E.g. showOnHover & hideOnMenuClick: on click, force hide then mouseleave is also firing.
      if (!this.detachableVisible) return

      if (this.showOnHover && !force) {
        await new Promise(resolve => setTimeout(resolve, 10))
        if (this.showOnHover && (this.hoveringMenu || this.hoveringActivator)) return
      }

      this.$emit('update:modelValue', (this.detachableVisible = false))
      this.$emit('input', false)
      this.$emit('close')
      // Remove the mousedown listener if the menu got closed without a mousedown outside of the menu.
      document.removeEventListener('mousedown', this.onOutsideMousedown)
      window.removeEventListener('resize', this.onResize)
    }
  }

  // watch, mounted & beforeDestroy hooks are set in the detachable.js mixin.
}
</script>

<style lang="scss">
.w-menu-wrap {display: none;}

.w-menu {
  position: absolute;
  z-index: 100;
  color: $menu-color;

  @include themeable;

  &--fixed {position: fixed;z-index: 1000;}
  &--card {background-color: $menu-bg-color;}
  &--tile {border-radius: 0;}
  &--round {
    border-radius: 99em;
    padding: $base-increment round(2.5 * $base-increment);
  }
  &--shadow {box-shadow: $box-shadow;}

  &--top {margin-top: -3 * $base-increment;}
  &--bottom {margin-top: 3 * $base-increment;}
  &--left {margin-left: -3 * $base-increment;}
  &--right {margin-left: 3 * $base-increment;}

  &--arrow {
    &.w-menu--top {margin-top: -4 * $base-increment;}
    &.w-menu--bottom {margin-top: 4 * $base-increment;}
    &.w-menu--left {margin-left: -4 * $base-increment;}
    &.w-menu--right {margin-left: 4 * $base-increment;}

    @include triangle(var(--w-menu-bg-color), '.w-menu', 9px);
  }
}
</style>
