<template lang="pug">
  .w-slider(:class="classes" :style="styles")
    slot
</template>

<script>
export default {
  name: 'w-slider',
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
.w-slider {
}
</style>
