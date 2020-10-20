<template lang="pug">
.w-date-picker(:class="classes" :style="styles")
  slot
</template>

<script>
export default {
  name: 'w-date-picker',
  props: {
  },

  emits: [],

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
.w-date-picker {
}
</style>
