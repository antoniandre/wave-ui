<template lang="pug">
  .w-tag(:class="classes" :style="styles")
    slot
</template>

<script>
export default {
  name: 'w-tag',
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
.w-tag {
}
</style>
