<template lang="pug">
  .w-dialog(:class="classes" :style="styles")
    slot
</template>

<script>
export default {
  name: 'w-dialog',
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
.w-dialog {
}
</style>
