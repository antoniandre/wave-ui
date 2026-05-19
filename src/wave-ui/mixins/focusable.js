import { guardFocusable, focusElement } from '../utils/focus'

export default {
  focusable: true,

  methods: {
    focus () {
      if (!guardFocusable(this)) return
      const refName = this.$options.focusTargetRef || 'input'
      const tryFocus = () => {
        const target = this.$refs[refName]
        if (target) focusElement(target)
        return !!target
      }
      if (tryFocus()) return
      this.$nextTick(() => {
        if (tryFocus()) return
        this.$nextTick(() => tryFocus())
      })
    }
  }
}
