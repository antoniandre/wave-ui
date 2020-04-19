<template lang="pug">
  .w-notification(:class="classes" :style="styles")
    slot
</template>

<script>
export default {
  name: 'w-notification',
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
.w-notification {
}
</style>
