<template lang="pug">
  .w-tabs(:class="classes" :style="styles")
    slot
</template>

<script>
export default {
  name: 'w-tabs',
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
.w-tabs {
}
</style>
