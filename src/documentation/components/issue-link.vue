<template lang="pug">
a(:href="`https://github.com/antoniandre/wave-ui/issues/${number}`" target="_blank" v-text="`#${number}`")
</template>

<script>
export default {
  data: () => ({
    number: 0
  }),

  mounted () {
    this.number = (this.$slots.default() || [])[0].text || ''
  }
}
</script>
