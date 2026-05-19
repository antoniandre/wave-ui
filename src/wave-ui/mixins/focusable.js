import { guardFocusable, focusElement } from '../utils/focus'

export default {
  methods: {
    focus () {
      if (!guardFocusable(this)) return
      const refName = this.$options.focusTargetRef || 'input'
      const target = this.$refs[refName]
      if (target) focusElement(target)
      else this.$nextTick(() => focusElement(this.$refs[refName]))
    }
  }
}
