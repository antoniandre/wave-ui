<template lang="pug">
  #app.w-app(:class="{ 'theme--dark': dark }")
    slot
</template>

<script>
export default {
  name: 'w-app',
  props: {
    dark: { type: Boolean, default: false }
  },

  mounted () {
    this.$waveUI.mounted()
  }
}
</script>

<style lang="scss">
@import '../scss/index';
</style>
