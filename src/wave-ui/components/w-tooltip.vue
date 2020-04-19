<template lang="pug">
  .w-tooltip(:class="classes" :style="styles")
    slot
</template>

<script>
export default {
  name: 'w-tooltip',
  props: {
  },

  computed: {
    classes () {
      return {
      }
    },
    styles () {
      return false
    }
  }
}
</script>

<style lang="scss">
.w-tooltip {
}
</style>
