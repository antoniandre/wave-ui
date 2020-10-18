<template lang="pug">
.w-drawer(v-if="showWrapper" :class="classes")
  w-overlay(
    v-if="!noOverlay"
    v-model="showDrawer"
    @click="onOutsideClick"
    :persistent="persistent"
    persistent-no-animation
    :bg-color="overlayColor"
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

const oppositeSides = { left: 'right', right: 'left', top: 'down', bottom: 'up' }

export default {
  name: 'w-drawer',

  props: {
    value: { default: true },
    left: { type: Boolean },
    right: { type: Boolean },
    top: { type: Boolean },
    bottom: { type: Boolean },
    persistent: { type: Boolean },
    persistentNoAnimation: { type: Boolean },
    fitContent: { type: Boolean },
    width: { type: [Number, String, Boolean] },
    height: { type: [Number, String, Boolean] },
    zIndex: { type: [Number, String, Boolean] },
    color: { type: String },
    bgColor: { type: String },
    noOverlay: { type: Boolean },
    overlayColor: { type: String },
    overlayOpacity: { type: [Number, String, Boolean] }
  },

  emits: ['input', 'update:modelValue', 'close'],

  data () {
    return {
      showWrapper: this.value,
      showDrawer: this.value,
      persistentAnimate: false
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
        [`w-drawer--${this.position}`]: true,
        'w-drawer--fit-content': this.fitContent,
        'w-drawer--persistent': this.persistent,
        'w-drawer--persistent-animate': this.persistentAnimate
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
      this.$emit('update:modelValue', false)
      this.$emit('input', false)
      this.$emit('close', false)
    },
    onOutsideClick () {
      if (!this.persistent) this.showDrawer = false // The close method is called on animation end.
      if (this.persistent && !this.persistentNoAnimation) {
        this.persistentAnimate = true
        setTimeout(() => (this.persistentAnimate = false), 200) // Must match CSS animation duration.
      }
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
    .w-drawer--fit-content & {width: auto;height: auto;}

    .w-drawer--left & {left: 0;}
    .w-drawer--right & {right: 0;}
    .w-drawer--top & {top: 0;}
    .w-drawer--bottom & {bottom: 0;}

    .w-drawer--persistent-animate & {animation: 0.2s w-drawer-pop cubic-bezier(0.6, -0.28, 0.74, 0.05);}
  }
}

@keyframes w-drawer-pop {
  0%, 100% {transform: scale(1);}
  50% {transform: scale(1.06);}
}
</style>
