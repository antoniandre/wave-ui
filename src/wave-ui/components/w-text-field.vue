<template lang="pug">
  .w-text-field(:class="classes" :style="styles")
    slot
</template>

<script>
export default {
  name: 'w-text-field',
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
.w-text-field {
}
</style>
