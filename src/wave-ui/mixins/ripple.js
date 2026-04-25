import { applyRipple, isRippleEnabled } from '../utils/ripple'

export default {
  inject: {
    $waveui: { from: '$waveui', default: () => ({ config: { ripple: true } }) }
  },

  props: {
    /** Set to `true` to disable the ripple for this component only. */
    noRipple: { type: Boolean, default: undefined }
  },

  computed: {
    rippleActive () {
      return isRippleEnabled(this.noRipple ? false : undefined, this.$waveui)
    }
  },

  methods: {
    /**
     * Resolve host for applyRipple. Vue (and some browsers) can leave `event.currentTarget` null
     * on delegated handlers, which would otherwise skip the ripple entirely.
     */
    onRipple (e, hostEl) {
      if (!this.rippleActive || !e) return
      let host = hostEl ?? e.currentTarget
      if (!host?.getBoundingClientRect) {
        const raw = e.target
        const el = raw?.nodeType === 1 ? raw : raw?.parentElement
        host = el?.closest?.('.w-ripple') ?? null
      }
      if (!host?.getBoundingClientRect && this.$el instanceof Element && this.$el.classList?.contains('w-ripple')) {
        host = this.$el
      }
      if (!host?.getBoundingClientRect) return
      applyRipple(host, e)
    }
  }
}
