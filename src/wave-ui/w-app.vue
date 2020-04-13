<template lang="pug">
  #app(:class="{ 'theme--dark': dark }")
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
      css.innerHTML = `
        .size--x-small {font-size: 0.75rem;line-height: 1rem;}
        .size--small {font-size: 1rem;line-height: 1.25rem;}
        .size--medium {font-size: 1.25rem;line-height: 1.5rem;}
        .size--large {font-size: 1.5rem;line-height: 1.75rem;}
        .size--x-large {font-size: 1.7rem;line-height: 2rem;}
      `

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
