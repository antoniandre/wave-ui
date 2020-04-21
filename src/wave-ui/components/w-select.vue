<template lang="pug">
  .w-select(:class="classes" :style="styles")
    select
      option -
</template>

<script>
export default {
  name: 'w-select',
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
.w-select {
}
</style>
