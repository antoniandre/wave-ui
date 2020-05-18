<template lang="pug">
  .w-textarea(:class="classes" :style="styles")
    slot
</template>

<script>
export default {
  name: 'w-textarea',
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
.w-textarea {
}
</style>
