<template lang="pug">
div
  title-link.mt4(h1 slug="w-select")
    .code w-select
    w-tag.ml3(bg-color="orange" lg color="white") In Progress

  title-link(h2) Basic
  example
    w-select(:items="items1" label="Select an item")
    w-select.mt4(:items="items1" placeholder="Select an item")
    template(#pug).

  title-link(h2) Multiple selection
  example
    w-select(:items="items1" multiple)
    template(#pug).

  title-link(h2) Label position
  example
    w-select(:items="items1" label="Select an item")
    w-select.mt4(:items="items1" label="Select an item" label-position="left")
    w-select.mt4(:items="items1" label="Select an item" label-position="right")
    template(#pug).
</template>

<script>
export default {
  data: () => ({
    items1: [
      { label: 'Item 1' },
      { label: 'Item 2' },
      { label: 'Item 3' }
    ],
    items2: [
      { label: 'Item 1' },
      { label: 'Item 2' },
      { label: 'Item 3' },
      { label: 'Item 4' },
      { label: 'Item 5', disabled: true }
    ]
  })
}
</script>
