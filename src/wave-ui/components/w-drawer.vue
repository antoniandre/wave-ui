<template lang="pug">
  .w-drawer(v-if="showWrapper" :class="classes")
    w-overlay(
      v-if="!noOverlay"
      v-model="showDrawer"
      :bg-color="overlayColor"
      :persistent="persistent"
      :opacity="overlayOpacity")
    transition(
      :name="transitionName"
      appear
      @after-leave="close")
      .w-drawer__content(v-if="showDrawer" :class="contentClasses" :style="styles")
        slot
</template>

<script>
// The complexity in this component is on close:
// we must keep the wrapper in the DOM until the drawer transition is finished.
// Then emit the value update that will trigger the removal of the wrapper from the DOM.

const oppositeSides = { left: 'right', right: 'left', top: 'bottom', bottom: 'top' }

export default {
  name: 'w-drawer',
  props: {
    value: { default: true },
    left: { type: Boolean, default: false },
    right: { type: Boolean, default: false },
    top: { type: Boolean, default: false },
    bottom: { type: Boolean, default: false },
    persistent: { type: Boolean, default: false },
    width: { type: [Number, String, Boolean], default: false },
    height: { type: [Number, String, Boolean], default: false },
    zIndex: { type: [Number, String, Boolean], default: false },
    color: { type: String, default: '' },
    bgColor: { type: String, default: '' },
    noOverlay: { type: Boolean, default: false },
    overlayColor: { type: [String, Boolean], default: false },
    overlayOpacity: { type: [Number, String, Boolean], default: false }
  },

  data () {
    return {
      showWrapper: this.value,
      showDrawer: this.value
    }
  },

  computed: {
    // Return the width or height value if defined, or false otherwise.
    size () {
      let size = this.width || this.height
      // If a number is passed without units, append `px`.
      if (size && parseInt(size) == size) size += 'px'
      return (this.left || this.right || this.top || this.bottom) && size || false
    },
    // Return `width` or `height`, `width` by default (position right by default).
    sizeProperty () {
      return (
        ((this.left || this.right) && 'width') ||
        ((this.top || this.bottom) && 'height') ||
        'width'
      )
    },
    position () {
      return (
        (this.left && 'left') ||
        (this.right && 'right') ||
        (this.top && 'top') ||
        (this.bottom && 'bottom') ||
        'right'
      )
    },
    classes () {
      return {
        'w-drawer--open': !!this.showDrawer,
        [`w-drawer--${this.position}`]: true
      }
    },
    contentClasses () {
      return {
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor
      }
    },
    styles () {
      return {
        [`max-${this.sizeProperty}`]: this.size || null,
        zIndex: this.zIndex || this.zIndex === 0 || null
      }
    },
    transitionName () {
      return `slide-${oppositeSides[this.position]}`
    }
  },

  methods: {
    close () {
      this.showDrawer = false
      this.$emit('input', false)
      this.$emit('close', false)
    }
  },

  watch: {
    value (value) {
      // If value is true, mount the wrapper in DOM and open the drawer.
      // If value is false, keep the wrapper in DOM and close the drawer;
      // At the end of the drawer transition the value is updated and wrapper
      // removed from the DOM.
      if (value) this.showWrapper = value
      this.showDrawer = value
    }
  }
}
</script>

<style lang="scss">
.w-drawer {
  position: fixed;
  z-index: 500;

  .w-overlay {z-index: 0;}

  &__content {
    position: fixed;
    display: flex;
    z-index: 1;
    background: #fff;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);

    .w-drawer--left &, .w-drawer--right & {
      top: 0;
      bottom: 0;
      width: 100%;
      max-width: $drawer-max-size;
    }
    .w-drawer--top &, .w-drawer--bottom & {
      left: 0;
      right: 0;
      height: 100%;
      max-height: $drawer-max-size;
    }

    .w-drawer--left & {left: 0;}
    .w-drawer--right & {right: 0;}
    .w-drawer--top & {top: 0;}
    .w-drawer--bottom & {bottom: 0;}
  }
}
</style>
