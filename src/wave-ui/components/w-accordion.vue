<template lang="pug">
  .w-accordion(:class="classes" :style="styles")
    slot
</template>

<script>
export default {
  name: 'w-accordion',
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
.w-accordion {
}
</style>
