<template lang="pug">
  #app.w-app(:class="{ 'theme--dark': dark }")
    slot
</template>

<script>
import config from '../utils/config'

export default {
  name: 'w-app',
  props: {
    dark: { type: Boolean, default: false }
  },

  mounted () {
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
  }
}
</script>

<style lang="scss">
@import '../scss/index';
</style>
