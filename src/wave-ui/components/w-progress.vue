<template lang="pug">
  .w-progress(:class="classes" :style="styles")
    slot
</template>

<script>
export default {
  name: 'w-progress',
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
.w-progress {
}
</style>
