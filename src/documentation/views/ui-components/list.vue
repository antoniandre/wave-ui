<template lang="pug">
div
  h1.headline.mt-4 #[span.code w-list]

  h2 Default items list rendering
  w-list.mt-6(:items="listItems" color="primary")

  h2 Default items list rendering with selection
  w-list.mt-6(v-model="selectedItem" :items="listItems" item-value="id" color="primary")
  .subtitle.mt-2 Selected item: #[code {{ selectedItem }}]
  h2 Custom rendering &amp; hoverable
  w-list.mt-6(:items="listItems" color="primary" hover)
    template(v-slot:item="{ item }")
      .layout
        | {{ item.label }}
        .spacer
        w-icon {{ item.icon }}

  h2 Navigation lists
  p The navigation list expects a #[code route] in the item to create a router link.
  w-list.mt-6(:items="listItems" nav color="primary")
</template>

<script>
export default {
  data: () => ({
    listItems: [
      { label: 'Star', id: 'star', icon: 'fa fa-star', route: '#route-to-star' },
      { label: 'Check', id: 'check', icon: 'fa fa-check', route: '#route-to-check' },
      { label: 'Cross', id: 'cross', icon: 'fa fa-close', route: '#route-to-cross' },
      { label: 'Info', id: 'info', icon: 'fa fa-info', route: '#route-to-info' },
      { label: 'Warning', id: 'warning', icon: 'fa fa-warning', route: '#route-to-warning' }
    ],
    selectedItem: 'check'
  })
}
</script>

<style lang="scss">

</style>