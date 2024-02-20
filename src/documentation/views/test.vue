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
      { label: 'hey', value: -5 },
      { label: '/', value: -4 },
      { label: '\'', value: -3 },
      { label: '.3', value: -2 },
      { label: '-1', value: -1 },
      { label: '0', value: 0 },
      { label: 'Super Item 1', value: 1, disabled: true },
      { label: 'Another Item 2', value: 2 },
      { label: 'Item 3 is the third', value: 3 },
      { label: 'The fourth Item is item 4', value: 4, disabled: true },
      { label: 'Item 5', value: 5, disabled: true },
      { label: 'Item 6', value: 6, disabled: true },
      { label: 'Item 7', value: 7 },
      { label: 'Item 8', value: 8 },
      { label: 'Item-9', value: 9 }
    ]
  })
}
</script>

<style lang="scss">

</style>
