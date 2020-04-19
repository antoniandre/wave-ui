<template lang="pug">
  .w-card(:class="classes" :style="styles")
    slot
</template>

<script>
export default {
  name: 'w-card',
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
.w-card {
}
</style>
