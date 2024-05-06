<template lang="pug">
.w-date-picker(:class="classes" :style="styles")
  slot
</template>

<script>
export default {
  name: 'w-date-picker',
  props: {
    dark: { type: Boolean },
    light: { type: Boolean }
  },

  emits: [],

  computed: {
    classes () {
      return {
        'w-date-picker--dark': this.dark,
        'w-date-picker--light': this.light
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

  @include themeable;
}
</style>
