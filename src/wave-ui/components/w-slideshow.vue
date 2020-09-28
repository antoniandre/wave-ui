<template lang="pug">
.w-slideshow(:class="classes" :style="styles")
  slot
</template>

<script>
export default {
  name: 'w-slideshow',
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
.w-slideshow {
}
</style>
