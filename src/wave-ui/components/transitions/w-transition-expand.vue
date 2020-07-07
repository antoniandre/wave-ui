<template lang="pug">
  transition(
    name="expand"
    v-bind="$props"
    v-bind:css="false"
    @before-appear="beforeShow"
    @appear="show"
    @after-appear="applyOriginalStyles"
    @appear-cancelled="onAppearCancelled"

    @before-enter="beforeShow"
    @enter="show"
    @after-enter="applyOriginalStyles"
    @enter-cancelled="onEnterCancelled"

    @before-leave="beforeHide"
    @leave="hide"
    @after-leave="applyOriginalStyles"
    @leave-cancelled="onLeaveCancelled")
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
      console.log('apply original styles')
    },
    beforeShow (el) {
      // Keep original styles to restore them after transition.
      this.el.originalStyles = el.style.cssText
      console.log('onBeforeEnter', el)
    },
    show (el, done) {
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
    beforeHide (el) {
      this.applyShowStyles(el)

      console.log('onBeforeLeave', !!el)
    },
    hide (el, done) {
      setTimeout(() => this.applyHideStyles(el), 0)
      setTimeout(done, transition)

      console.log('onLeave', !!el)
    },

    onAppearCancelled (el) {
      console.log('onAppearCancelled', !!el)
    },
    onEnterCancelled (el) {
      console.log('onEnterCancelled', !!el)
    },
    onLeaveCancelled (el) {
      console.log('onLeaveCancelled', !!el)
    }
  }
}
</script>
