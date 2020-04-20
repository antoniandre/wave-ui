<template lang="pug">
  #app.w-app(:class="{ 'theme--dark': dark }")
    slot
</template>

<script>
import config from '../utils/config'

const breakpointsNames = Object.keys(config.breakpoints)
const breakpointsValues = Object.values(config.breakpoints)

export default {
  name: 'w-app',
  props: {
    dark: { type: Boolean, default: false }
  },

  methods: {
    // Most performant lookup.
    getBreakpoint () {
      const width = window.innerWidth
      const breakpoints = breakpointsValues.slice(0)
      breakpoints.push(width)
      breakpoints.sort((a, b) => a - b)
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.$waveUI.breakpoint = breakpointsNames[breakpoints.indexOf(width)] || 'xl'
    }
  },

  mounted () {
    // Inject global dynamic CSS classes in document head.
    if (!document.getElementById('wave-ui-styles')) {
      const css = document.createElement('style')
      css.id = 'wave-ui-styles'
      css.innerHTML = ''

      for (const color in config.colors) {
        css.innerHTML += `
          .w-app .${color} {background-color: ${config.colors[color]};}
          .w-app .${color}--text {color: ${config.colors[color]};}
        `
      }
      document.head.append(css)
    }

    this.getBreakpoint(window.innerWidth)
    window.addEventListener('resize', this.getBreakpoint)
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.getBreakpoint)
  }
}
</script>

<style lang="scss">
@import '../scss/index';
</style>
