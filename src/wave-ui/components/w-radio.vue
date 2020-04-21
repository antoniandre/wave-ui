<template lang="pug">
  .w-radio(:class="classes" :style="styles")
    input(type="radio")
</template>

<script>
export default {
  name: 'w-radio',
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
.w-radio {
}
</style>
