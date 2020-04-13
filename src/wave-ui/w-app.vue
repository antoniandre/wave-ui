<template lang="pug">
  #app.w-app(:class="{ 'theme--dark': dark }")
    slot
</template>

<script>
export default {
  props: {
    dark: { type: Boolean, default: false },
    colors: { type: Object, default: () => ({}) }
  },

  mounted () {
    if (!document.getElementById('wave-ui')) {
      const css = document.createElement('style')
      css.id = 'wave-ui'
      css.innerHTML = ''

      for (const color in this.colors) {
        css.innerHTML += `.${color} {background-color: ${this.colors[color]};}`
      }
      document.head.append(css)
    }
  }
}
</script>

<style lang="scss">
@import './scss/index';
</style>
