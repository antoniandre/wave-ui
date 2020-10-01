<template lang="pug">
transition(:name="transitionName" v-bind="$props")
  slot
</template>

<script>
export default {
  name: 'w-transition-slide',
  props: {
    appear: { type: Boolean },
    left: { type: Boolean },
    right: { type: Boolean },
    up: { type: Boolean },
    down: { type: Boolean },
    duration: { type: [Number, String] }
  },

  computed: {
    direction () {
      return (
        (this.up && 'up') ||
        (this.down && 'down') ||
        (this.left && 'left') ||
        (this.right && 'right') ||
        'down'
      )
    },
    transitionName () {
      return `slide-${this.direction}`
    }
  }
}
</script>
