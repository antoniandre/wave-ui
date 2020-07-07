<template lang="pug">
  transition(
    name="expand"
    v-bind="$props"
    v-bind:css="true"
    :duration="{ enter: 300, leave: 300 }"
    v-on:before-appear="onBeforeAppear"
    v-on:appear="onAppear"
    v-on:after-appear="onAfterAppear"
    v-on:appear-cancelled="onAppearCancelled"

    v-on:before-enter="onBeforeEnter"
    v-on:enter="onEnter"
    v-on:after-enter="onAfterEnter"
    v-on:enter-cancelled="onEnterCancelled"

    v-on:before-leave="onBeforeLeave"
    v-on:leave="onLeave"
    v-on:after-leave="onAfterLeave"
    v-on:leave-cancelled="onLeaveCancelled")
    slot
</template>

<script>
const transition = 3000 // ms.
export default {
  name: 'w-transition-expand',
  data: () => ({
    el: {
      originalStyles: '',
      width: 0,
      height: 0,
      margin: 0,
      padding: 0
    }
  }),
  methods: {
    applyHideStyles (el) {
      el.style.width = 0
      el.style.height = 0
      el.style.padding = 0
      el.style.margin = 0
      el.style.overflow = 'hidden'
      el.style.whiteSpace = 'nowrap'
    },
    applyShowStyles (el) {
      el.style.width = this.el.width + 'px'
      el.style.height = this.el.height + 'px'
      el.style.margin = this.el.margin
      el.style.padding = this.el.padding
      el.style.transition = transition + 'ms ease-in-out'
    },
    applyOriginalStyles (el) {
      el.style.cssText = this.el.originalStyles
    },

    // Appear.
    onBeforeAppear (el) {
      // Keep original styles to restore them after transition.
      this.el.originalStyles = el.style.cssText

      el.style.transition = transition + 'ms ease-in-out'
    },
    onAppear () {

    },
    onAfterAppear () {

    },
    onAppearCancelled () {
    },

    // Enter.
    onBeforeEnter (el) {
      // Keep original styles to restore them after transition.
      this.el.originalStyles = el.style.cssText
      console.log('onBeforeEnter', el)

      // el.style.visibility = 'hidden'
      // el.style.transition = '1s ease-in-out'
    },
    onEnter (el, done) {
      console.log('onEnter', el, el.offsetHeight)
      // Save the width & height then set them to 0 as the animation starting point.
      this.el.width = el.offsetWidth
      this.el.height = el.offsetHeight
      this.el.margin = window.getComputedStyle(el, null).getPropertyValue('margin')
      this.el.padding = window.getComputedStyle(el, null).getPropertyValue('padding')

      this.applyHideStyles(el)

      setTimeout(() => this.applyShowStyles(el), 0)
      setTimeout(done, transition)
    },
    onAfterEnter (el) {
      console.log('onAfterEnter', !!el)
      this.applyOriginalStyles(el)
    },
    onEnterCancelled (el) {
      console.log('onEnterCancelled', !!el)
      // el.style.visibility = null // Remove it.
    },

    // Leave.
    onBeforeLeave (el) {
      this.applyShowStyles(el)

      console.log('onBeforeLeave', !!el)
    },
    onLeave (el, done) {
      setTimeout(() => this.applyHideStyles(el), 0)
      setTimeout(done, transition)

      console.log('onLeave', !!el)
      // done()
    },
    onAfterLeave (el) {
      this.applyOriginalStyles(el)
      console.log('onAfterLeave', !!el)
    },
    onLeaveCancelled (el) {
      console.log('onLeaveCancelled', !!el)
    }
  }
}
</script>
