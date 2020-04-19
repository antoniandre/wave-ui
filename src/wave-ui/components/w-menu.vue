<template lang="pug">
  .w-menu(:class="classes" :style="styles")
    slot
</template>

<script>
export default {
  name: 'w-menu',
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
.w-menu {
}
</style>
