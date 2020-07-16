<template lang="pug">
  .w-form(:class="classes" :style="styles")
    form(v-on="$listeners")
      slot
</template>

<script>
export default {
  name: 'w-form',
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
  },

  methods: {
    validate () {
      return true
    }
  }
}
</script>

<style lang="scss">
.w-form {
}
</style>
