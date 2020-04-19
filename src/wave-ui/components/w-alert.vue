<template lang="pug">
  .w-alert(:class="classes" :style="styles")
    slot
</template>

<script>
export default {
  name: 'w-alert',
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
.w-alert {
}
</style>
