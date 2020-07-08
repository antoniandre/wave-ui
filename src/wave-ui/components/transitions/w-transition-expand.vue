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

  props: {
    x: { type: Boolean },
    y: { type: Boolean }
  },

  data: () => ({
    el: {
      originalStyles: '',
      width: 0,
      height: 0,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      marginBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0
    }
  }),

  computed: {
    animX () {
      return this.x || !this.y
    },
    animY () {
      return this.y || !this.x
    }
  },

  methods: {
    applyHideStyles (el) {
      if (this.animX) {
        el.style.width = 0
        el.style.marginLeft = 0
        el.style.marginRight = 0
        el.style.paddingLeft = 0
        el.style.paddingRight = 0
      }
      if (this.animY) {
        el.style.height = 0
        el.style.marginTop = 0
        el.style.marginBottom = 0
        el.style.paddingTop = 0
        el.style.paddingBottom = 0
      }

      el.style.overflow = 'hidden'
      el.style.whiteSpace = 'nowrap'
    },
    applyShowStyles (el) {
      if (this.animX) {
        el.style.width = this.el.width + 'px'
        el.style.marginLeft = this.el.marginLeft
        el.style.marginRight = this.el.marginRight
        el.style.paddingLeft = this.el.paddingLeft
        el.style.paddingRight = this.el.paddingRight
      }
      if (this.animY) {
        el.style.height = this.el.height + 'px'
        el.style.marginTop = this.el.marginTop
        el.style.marginBottom = this.el.marginBottom
        el.style.paddingTop = this.el.paddingTop
        el.style.paddingBottom = this.el.paddingBottom
      }

      el.style.transition = transition + 'ms ease-in-out'
    },
    applyOriginalStyles (el) {
      el.style.cssText = this.el.originalStyles
      console.log('apply original styles')
    },
    beforeShow (el) {
      // Keep the original styles to restore them after transition.
      this.el.originalStyles = el.style.cssText
      console.log('onBeforeEnter', el)
    },
    show (el, done) {
      const computedStyles = window.getComputedStyle(el, null)
      console.log('onEnter', el, el.offsetHeight)
      // Save the width & height then set them to 0 as the animation starting point.
      if (this.animX) {
        this.el.width = el.offsetWidth
        this.el.marginLeft = computedStyles.getPropertyValue('marginLeft')
        this.el.marginRight = computedStyles.getPropertyValue('marginRight')
        this.el.paddingLeft = computedStyles.getPropertyValue('paddingLeft')
        this.el.paddingRight = computedStyles.getPropertyValue('paddingRight')
      }
      if (this.animY) {
        this.el.height = el.offsetHeight
        this.el.marginTop = computedStyles.getPropertyValue('marginTop')
        this.el.marginBottom = computedStyles.getPropertyValue('marginBottom')
        this.el.paddingTop = computedStyles.getPropertyValue('paddingTop')
        this.el.paddingBottom = computedStyles.getPropertyValue('paddingBottom')
      }
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
