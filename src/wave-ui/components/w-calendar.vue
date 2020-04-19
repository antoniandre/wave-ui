<template lang="pug">
  .w-calendar(:class="classes" :style="styles")
    slot
</template>

<script>
export default {
  name: 'w-calendar',
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
.w-calendar {
}
</style>
