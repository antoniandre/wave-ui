<template lang="pug">
  .w-app(:class="{ 'theme--dark': dark, 'd-block': block }")
    slot
</template>

<script>
import config from '../utils/config'

const breakpointsNames = Object.keys(config.breakpoints)
const breakpointsValues = Object.values(config.breakpoints)

export default {
  name: 'w-app',
  props: {
    dark: { type: Boolean },
    block: { type: Boolean }
  },

  data: () => ({
    currentBreakpoint: null
  }),

  methods: {
    getBreakpoint () {
      const width = window.innerWidth
      const breakpoints = breakpointsValues.slice(0)
      // Most performant lookup.
      breakpoints.push(width)
      breakpoints.sort((a, b) => a - b)
      const breakpoint = breakpointsNames[breakpoints.indexOf(width)] || 'xl'

      if (breakpoint !== this.currentBreakpoint) {
        this.currentBreakpoint = breakpoint
        this.$waveui.breakpoint = {
          name: breakpoint,
          xs: breakpoint === 'xs',
          sm: breakpoint === 'sm',
          md: breakpoint === 'md',
          lg: breakpoint === 'lg',
          xl: breakpoint === 'xl'
        }
      }
    },

    dynamicStyles () {
      let styles = ''
      for (const color in config.colors) {
        styles +=
          `.w-app .${color}--bg{background-color:${config.colors[color]}}` +
          `.w-app .${color}{color:${config.colors[color]}}`
      }

      if (config.colorShades) {
        Object.entries(config.colorShades).forEach(([label, color]) => {
          styles +=
            `.w-app .${label}--bg{background-color:${color}}` +
            `.w-app .${label}{color:${color}}`
        })
      }

      return styles
    }
  },

  mounted () {
    // Inject global dynamic CSS classes in document head.
    if (!document.getElementById('wave-ui-styles')) {
      const css = document.createElement('style')
      css.id = 'wave-ui-styles'
      css.innerHTML = this.dynamicStyles()

      document.head.appendChild(css)
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

.w-app {
  position: relative; // Make the .w-app a referential for tooltips / menus.
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;

  &.d-block {display: block;}
}
</style>
