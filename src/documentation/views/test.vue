<template lang="pug">
w-app
  .test.ma12.pa12.bd1.bdrs2.blue-light5--bg
    h1.mt0 Testing playground
    .select-in-dialog
      w-button(@click="showDialog = true") open
      w-dialog(v-model="showDialog")
        w-checkbox test
        w-select(:items="items" label="Select" :menu-props="{ appendTo: '.w-dialog' }")
</template>

<script>
export default {
  data: () => ({
    showDialog: true,
    ref: null,
    items: [{ value: 'value 1', label: 'Item 1' }, { value: 'value 2', label: 'Item 2' }]
  }),
  mounted () {
    this.ref = this.$refs['test-here']
  }
}
</script>

<style lang="scss">

</style>
