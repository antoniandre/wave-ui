<template lang="pug">
component.w-grid(:class="classes" :is="tag")
  slot
</template>

<script>
export default {
  name: 'w-grid',
  props: {
    tag: { type: String, default: 'div' },
    columns: { type: [Number, Object, String] },
    gap: { type: [Number, Object, String], default: 0 }
  },

  computed: {
    breakpointsColumns () {
      let columns = { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 }
      switch (typeof this.columns) {
        case 'object':
          columns = Object.assign(columns, this.columns)
          break
        case 'number':
        case 'string':
          columns = Object.keys(columns).reduce((obj, breakpoint) => (obj[breakpoint] = ~~this.columns), {})
          break
        default:
          break
      }
      return columns
    },

    breakpointsGap () {
      let gap = { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 }
      switch (typeof this.gap) {
        case 'object':
          gap = Object.assign(gap, this.gap)
          break
        case 'number':
        case 'string':
          gap = Object.keys(gap).reduce((obj, breakpoint) => (obj[breakpoint] = ~~this.gap), {})
          break
        default:
          break
      }
      return gap
    },

    classes () {
      let breakpointsColumns = null
      if (typeof this.columns === 'object') {
        breakpointsColumns = Object.entries(this.breakpointsColumns).reduce((obj, [breakpoint, columns]) => {
          obj[`${breakpoint}-columns${columns}`] = true
          return obj
        }, {})
      }

      let breakpointsGap = null
      if (typeof this.gap === 'object') {
        breakpointsGap = Object.entries(this.breakpointsGap).reduce((obj, [breakpoint, gap]) => {
          obj[`${breakpoint}-gap${gap}`] = true
          return obj
        }, {})
      }

      return {
        ...(breakpointsColumns || { [`columns${this.columns}`]: this.columns }),
        ...(breakpointsGap || { [`gap${this.gap}`]: this.gap })
      }
    }
  }
}
</script>

<style lang="scss">
.w-grid {
  display: grid;

  @for $i from 1 through 12 {
    &.columns#{$i} {grid-template-columns: repeat($i, 1fr);}
  }
}
</style>
