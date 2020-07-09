<template lang="pug">
  transition(
    name="expand"
    v-bind="$props"
    :css="false"
    @before-appear="beforeAppear"
    @appear="appear"
    @after-appear="afterAppear"
    @appear-cancelled="appearCancelled"

    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @enter-cancelled="enterCancelled"

    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @leave-cancelled="leaveCancelled")
    slot
</template>

<script>
const duration = 250 // ms.

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
    cl: (...params) => console.log(...params),

    beforeAppear (el) {
      console.log('beforeAppear', el)
      this.saveOriginalStyles(el)
    },
    appear (el, done) {
      this.show(el)
      setTimeout(done, duration)
      console.log('appear', el)
    },
    afterAppear (el) {
      console.log('afterAppear', el)
    },
    appearCancelled (el) {
      console.log('appearCancelled', el)
    },
    beforeEnter (el) {
      console.group('1 SHOW cycle')
      console.log('beforeEnter', {...el}, {...this.el})
      // Only save original state once before a 'clean' transition start.
      // Not when clicking very fast and mixing states order.
      this.saveOriginalStyles(el)

      // else debugger
    },
    enter (el, done) {
      this.show(el)
      console.log('enter', {...el}, {...this.el})
      setTimeout(done, duration + 1000)
    },
    afterEnter (el) {
      console.log('afterEnter', {...el}, {...this.el})
      this.applyOriginalStyles(el)
      console.groupEnd()
    },
    enterCancelled (el) {
      console.log('enterCancelled', el)
      console.groupEnd()
    },
    beforeLeave (el) {
      console.group('2 HIDE cycle')
      console.log('beforeLeave', el)
      this.beforeHide(el)
    },
    leave (el, done) {
      console.log('leave', el)
      this.hide(el)

      setTimeout(done, duration)
    },
    afterLeave (el) {
      console.log('afterLeave', el)
      console.groupEnd()
    },
    leaveCancelled (el) {
      console.log('leaveCancelled', el)
    },

    applyHideStyles (el) {
      console.log('applyHideStyles', el)
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
      console.log('applyShowStyles', el)
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

      el.style.transition = duration + 'ms ease-in-out'
    },
    applyOriginalStyles (el) {
      console.log('applyOriginalStyles', el)
      el.style.cssText = this.el.originalStyles
    },
    saveOriginalStyles (el) {
      console.log('saveOriginalStyles', el)
      // Keep the original styles to restore them after transition.
      this.el.originalStyles = el.style.cssText
    },
    show (el, done) {
      console.log('show')
      const computedStyles = window.getComputedStyle(el, null)

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

      setTimeout(() => this.applyShowStyles(el), 20)
      setTimeout(done, duration)
    },
    beforeHide (el) {
      console.log('beforeHide', el)
      this.applyShowStyles(el)
    },
    hide (el, done) {
      console.log('hide', el)
      setTimeout(() => this.applyHideStyles(el), 0)
      setTimeout(done, duration)

      console.log('onLeave', el)
    }
  }
}
</script>
