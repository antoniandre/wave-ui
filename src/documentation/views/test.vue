<template lang="pug">
.test.ma12.pa12.bd1.bdrs2
  h1.mt0.mb8 Testing playground
  w-select.mt3(
    :items="items"
    label="Select an item"
    autocomplete)
  p.my12.mb4 multiple
  w-select.mt3(
    :items="items"
    label="Select an item"
    autocomplete
    multiple)
</template>

<script>
export default {
  data: () => ({
    items: [
      { label: 'Item 1', value: 1, disabled: true },
      { label: 'Item 2', value: 2 },
      { label: 'Item 3', value: 3 },
      { label: 'Item 4', value: 4, disabled: true },
      { label: 'Item 5', value: 5, disabled: true },
      { label: 'Item 6', value: 6, disabled: true },
      { label: 'Item 7', value: 7 },
      { label: 'Item 8', value: 8 }
    ]
  })
}
</script>

<style lang="scss">

</style>
