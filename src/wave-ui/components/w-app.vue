<template lang="pug">
.w-app(:class="{ 'theme--dark': dark, 'd-block': block }")
  slot
</template>

<script>
import config from '../utils/config'

const breakpointsNames = Object.keys(config.breakpoints)
const breakpointsValues = Object.values(config.breakpoints)
const gridSystem = 12

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
          xl: breakpoint === 'xl',
          width
        }
      }

      this.$waveui.breakpoint.width = width
    },

    dynamicStyles () {
      let styles = ''
      // Extract status colors and place them after the other colors.
      const { info, warning, success, error, ...colors } = config.colors
      for (const color in colors) {
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

      // Status colors must remain after the other colors so they have priority in form validations.
      // That only makes sense when there are 2 colors on the same element: e.g. `span.primary.error`.
      const statusColors = { info, warning, success, error } // This order is also important for priorities.
      for (const color in statusColors) {
        styles +=
          `.w-app .${color}--bg{background-color:${config.colors[color]}}` +
          `.w-app .${color}{color:${config.colors[color]}}`
      }

      // Add the primary color to the CSS variables for reuse in components.
      const cssVariables = []
      cssVariables.push(`--primary: ${config.colors.primary}`)
      styles += `:root {${cssVariables.join(';')}}`

      // Can't add dynamic breakpoints as CSS variables:
      // CSS variables are not supported in media queries yet.
      // https://www.w3.org/TR/css-variables-1/#using-variables
      // const cssVariables = []
      // Object.entries(config.breakpoints).forEach(([label, value]) => {
      //   cssVariables.push(`--breakpoint-${label}: ${value}px`)
      // })
      // styles += `:root {${cssVariables.join(';')}}`

      const entries = Object.entries(config.breakpoints)
      // Define media queries for each breakpoint: xs, sm, md, lg, xl.
      entries.forEach(([label, max], i) => {
        // Construct the breakpoint objects.
        const [, value = 0] = entries[i - 1] || []
        const bp = { label, min: value ? value + 1 : 0, max }

        // Discard `xs` since the min is 0 (`media query (min-width: 0)`), and leave in _layout.scss.
        if (bp.min) {
          styles += `@media (min-width: ${bp.min}px){`

          // For each breakpoint, loop from 1 to 12. E.g. xs1, xs2, ..., xl12.
          for (let i = 0;i < gridSystem; i++) {
            styles += `.w-app .${label}${gridSystem - i}{width:${parseFloat(((gridSystem - i) * 100 / gridSystem).toFixed(4))}%;}`
          }

          styles += '}'
        }
      })

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
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &.d-block {display: block;}
}
</style>
