<template lang="pug">
  .w-switch(:class="classes" :style="styles")
    slot
</template>

<script>
export default {
  name: 'w-switch',
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
.w-switch {
}
</style>
