<template lang="pug">
  .w-checkbox(:class="classes" :style="styles")
    input(type="checkbox")
</template>

<script>
export default {
  name: 'w-checkbox',
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
.w-checkbox {
}
</style>
