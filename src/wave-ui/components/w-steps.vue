<template lang="pug">
.w-steps(:class="classes")
</template>

<script>
export default {
  name: 'w-steps',
  props: {
    dark: { type: Boolean },
    light: { type: Boolean }
  },

  emits: [],

  data: () => ({

  }),

  computed: {
    classes () {
      return {
        'w-steps--dark': this.dark,
        'w-steps--light': this.light
      }
    }
  }
}
</script>

<style lang="scss">
.w-steps {
  @include themeable;
}
</style>
