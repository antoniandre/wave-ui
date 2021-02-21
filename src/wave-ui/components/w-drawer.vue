<template lang="pug">
.w-drawer-wrap(v-if="showWrapper || pushContent" :class="wrapperClasses")
  //- Pushing content.
  .w-drawer-wrap__track(v-if="pushContent" :style="trackStyles")
    .w-drawer-wrap__pushable
      w-overlay(
        v-if="!noOverlay"
        v-model="showDrawer"
        @click="onOutsideClick"
        :persistent="persistent"
        persistent-no-animation
        :bg-color="overlayColor"
        :opacity="overlayOpacity")
      slot(name="pushable")
    transition(name="fade")
      .w-drawer(v-if="!unmountDrawer" :class="drawerClasses" :style="styles")
        slot
  //- Other cases.
  template(v-else)
    w-overlay(
      v-if="!noOverlay"
      v-model="showDrawer"
      @click="onOutsideClick"
      :persistent="persistent"
      persistent-no-animation
      :bg-color="overlayColor"
      :opacity="overlayOpacity")
    transition(:name="transitionName" appear @after-leave="close")
      component.w-drawer(v-if="showDrawer" :is="tag || 'aside'" :class="drawerClasses" :style="styles")
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
    pushContent: { type: Boolean },
    absolute: { type: Boolean },
    overlayColor: { type: String },
    overlayOpacity: { type: [Number, String, Boolean] },
    tag: { type: String, default: 'aside' }
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
      return size || false
    },
    // Return `width` or `height`, `width` by default (position right by default).
    sizeProperty () {
      return (['left', 'right'].includes(this.position) && 'width') || 'height'
    },
    position () {
      return (
        (this.left && 'left') || (this.right && 'right') ||
        (this.top && 'top') || (this.bottom && 'bottom') ||
        'right'
      )
    },
    wrapperClasses () {
      return {
        'w-drawer-wrap--fixed': !this.absolute && !this.pushContent,
        'w-drawer-wrap--absolute': this.absolute,
        'w-drawer-wrap--push-content': this.pushContent
      }
    },
    drawerClasses () {
      return {
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        'w-drawer--open': !!this.showDrawer,
        [`w-drawer--${this.position}`]: true,
        'w-drawer--fit-content': this.fitContent,
        'w-drawer--persistent': this.persistent,
        'w-drawer--persistent-animate': this.persistent && this.persistentAnimate
      }
    },
    // The track is a wrapper around the pushable content and drawer.
    // It moves inside the overflow hidden outer wrap.
    trackStyles () {
      return this.pushContent && this.showDrawer && {
        transform: `translateX(${this.position === 'left' ? '' : '-'}${this.size})`
      }
    },
    styles () {
      return {
        [`max-${this.sizeProperty}`]: this.size || null,
        zIndex: this.zIndex || this.zIndex === 0 || null
      }
    },
    // In case of pushing content, the showWrapper variable doesn't reflect the behavior:
    // unmount the drawer (remove from DOM) is what it does when showWrapper is false.
    unmountDrawer () {
      return !this.showWrapper
    },
    transitionName () {
      return `slide-${oppositeSides[this.position]}`
    }
  },

  methods: {
    close () {
      this.showWrapper = false
      this.$emit('update:modelValue', false)
      this.$emit('input', false)
      this.$emit('close', false)
    },
    onOutsideClick () {
      if (!this.persistent) {
        // The close method is called on animation end, except with pushContent
        // (not using the same transition).
        this.showDrawer = false
        if (this.pushContent) this.close()
      }
      else if (!this.persistentNoAnimation) {
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
      if (value) this.showWrapper = true
      this.showDrawer = value
    }
  }
}
</script>

<style lang="scss">
.w-drawer-wrap {
  &--fixed {position: fixed;z-index: 500;}

  &--absolute {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
  }

  .w-overlay {z-index: 1;position: inherit;}

  &--push-content {
    position: relative;
    overflow: hidden;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;

    .w-overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2;
    }
    .w-drawer {position: absolute;}
    .w-drawer--left {right: 100%;left: auto !important;}
    .w-drawer--right {left: 100%;}
  }

  &__track {
    display: flex;
    flex: 1;
    height: 100%;
    @include default-transition;
  }

  &__pushable {
    position: relative;
    flex-grow: 1;
  }
}

.w-drawer {
  position: inherit;
  display: flex;
  z-index: 1;
  background: #fff;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);

  &--left, &--right {
    top: 0;
    bottom: 0;
    width: 100%;
    max-width: $drawer-max-size;
  }
  &--top, &--bottom {
    left: 0;
    right: 0;
    height: 100%;
    max-height: $drawer-max-size;
  }
  &--fit-content {width: auto;height: auto;}

  &--left {left: 0;}
  &--right {right: 0;}
  &--top {top: 0;}
  &--bottom {bottom: 0;}

  &--persistent-animate {animation: 0.2s w-drawer-pop cubic-bezier(0.6, -0.28, 0.74, 0.05);}
}

@keyframes w-drawer-pop {
  0%, 100% {transform: scale(1);}
  50% {transform: scale(1.05);}
}
</style>
