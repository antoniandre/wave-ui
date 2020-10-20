<template lang="pug">
.w-rating(:class="classes" :style="styles")
  slot
</template>

<script>
export default {
  name: 'w-rating',
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
.w-rating {
}
</style>
