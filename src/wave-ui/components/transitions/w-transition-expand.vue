<template lang="pug">
transition(
  name="expand"
  mode="out-in"
  v-bind="$props"
  :css="false"
  @before-appear="beforeAppear"
  @appear="appear"
  @after-appear="afterAppear"
  @before-enter="beforeEnter"
  @enter="enter"
  @after-enter="afterEnter"
  @before-leave="beforeLeave"
  @leave="leave"
  @after-leave="afterLeave")
  slot
</template>

<script>
// const duration = 250 // ms.

export default {
  name: 'w-transition-expand',

  props: {
    x: { type: Boolean },
    y: { type: Boolean },
    duration: { type: Number, default: 200 }
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
      paddingBottom: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderTopWidth: 0,
      borderBottomWidth: 0
    },
    cleanTransitionCycle: true
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
    beforeAppear (el) {
      // Only save original state once before a 'clean' transition start.
      // Not when clicking very fast and mixing states order.
      if (this.cleanTransitionCycle) this.saveOriginalStyles(el)
      this.cleanTransitionCycle = false
      this.$emit('before-appear')
    },
    appear (el, done) {
      this.show(el)
      setTimeout(done, this.duration)
      this.cleanTransitionCycle = false
      this.$emit('appear')
    },
    afterAppear (el) {
      this.applyOriginalStyles(el)
      // May be transitioning with v-show, if so don't reapply display none.
      el.style.cssText = el.style.cssText.replace('display: none;', '')
      this.cleanTransitionCycle = false
      this.$emit('after-appear')
    },
    beforeEnter (el) {
      // Only save original state once before a 'clean' transition start.
      // Not when clicking very fast and mixing states order.
      if (this.cleanTransitionCycle) this.saveOriginalStyles(el)
      this.cleanTransitionCycle = false
      this.$emit('before-enter')
    },
    enter (el, done) {
      this.show(el)
      setTimeout(done, this.duration)
      this.cleanTransitionCycle = false
      this.$emit('enter')
    },
    afterEnter (el) {
      this.applyOriginalStyles(el)
      // May be transitioning with v-show, if so don't reapply display none.
      el.style.cssText = el.style.cssText.replace('display: none;', '')
      this.cleanTransitionCycle = false
      this.$emit('after-enter')
    },
    beforeLeave (el) {
      this.beforeHide(el)
      this.cleanTransitionCycle = false
      this.$emit('before-leave')
    },
    leave (el, done) {
      this.hide(el)
      setTimeout(done, this.duration)
      this.cleanTransitionCycle = false
      this.$emit('leave')
    },
    afterLeave (el) {
      this.applyOriginalStyles(el)
      this.cleanTransitionCycle = true
      this.$emit('after-leave')
    },

    applyHideStyles (el) {
      if (this.animX) {
        el.style.width = 0
        el.style.marginLeft = 0
        el.style.marginRight = 0
        el.style.paddingLeft = 0
        el.style.paddingRight = 0
        el.style.borderLeftWidth = 0
        el.style.borderRightWidth = 0
      }
      if (this.animY) {
        el.style.height = 0
        el.style.marginTop = 0
        el.style.marginBottom = 0
        el.style.paddingTop = 0
        el.style.paddingBottom = 0
        el.style.borderTopWidth = 0
        el.style.borderBottomWidth = 0
      }

      el.style.overflow = 'hidden'
    },
    applyShowStyles (el) {
      if (this.animX) {
        el.style.width = this.el.width + 'px'
        el.style.marginLeft = this.el.marginLeft
        el.style.marginRight = this.el.marginRight
        el.style.paddingLeft = this.el.paddingLeft
        el.style.paddingRight = this.el.paddingRight
        el.style.borderLeftWidth = this.el.borderLeftWidth
        el.style.borderRightWidth = this.el.borderRightWidth
      }
      if (this.animY) {
        el.style.height = this.el.height + 'px'
        el.style.marginTop = this.el.marginTop
        el.style.marginBottom = this.el.marginBottom
        el.style.paddingTop = this.el.paddingTop
        el.style.paddingBottom = this.el.paddingBottom
        el.style.borderTopWidth = this.el.borderTopWidth
        el.style.borderBottomWidth = this.el.borderBottomWidth
      }

      el.style.transition = this.duration + 'ms ease-in-out'
    },
    applyOriginalStyles (el) {
      el.style.cssText = this.el.originalStyles
    },
    saveOriginalStyles (el) {
      // Keep the original styles to restore them after transition.
      this.el.originalStyles = el.style.cssText
    },
    show (el, done) {
      const computedStyles = window.getComputedStyle(el, null)

      // Save the width & height then set them to 0 as the animation starting point.
      if (this.animX) {
        this.el.width = el.offsetWidth
        this.el.marginLeft = computedStyles.getPropertyValue('marginLeft')
        this.el.marginRight = computedStyles.getPropertyValue('marginRight')
        this.el.paddingLeft = computedStyles.getPropertyValue('paddingLeft')
        this.el.paddingRight = computedStyles.getPropertyValue('paddingRight')
        this.el.borderLeftWidth = computedStyles.getPropertyValue('borderLeftWidth')
        this.el.borderRightWidth = computedStyles.getPropertyValue('borderRightWidth')
      }
      if (this.animY) {
        this.el.height = el.offsetHeight
        this.el.marginTop = computedStyles.getPropertyValue('marginTop')
        this.el.marginBottom = computedStyles.getPropertyValue('marginBottom')
        this.el.paddingTop = computedStyles.getPropertyValue('paddingTop')
        this.el.paddingBottom = computedStyles.getPropertyValue('paddingBottom')
        this.el.borderTopWidth = computedStyles.getPropertyValue('borderTopWidth')
        this.el.borderBottomWidth = computedStyles.getPropertyValue('borderBottomWidth')
      }
      this.applyHideStyles(el)

      setTimeout(() => this.applyShowStyles(el), 20)
      setTimeout(done, this.duration)
    },
    beforeHide (el) {
      this.applyShowStyles(el)
    },
    hide (el, done) {
      setTimeout(() => this.applyHideStyles(el), 20)
      setTimeout(done, this.duration)
    }
  }
}
</script>
