<template lang="pug">
div
  h1.headline.mt-4 #[span.code w-list]

  h2 Default items list rendering
  w-list.mt-6(:items="listItems")

  h2 Custom rendering
  w-list.mt-6(:items="listItems")
    template(v-slot:item="{ item }")
      .layout
        | {{ item.label }}
        .spacer
        w-icon {{ item.icon }}

  h2 Navigation lists
  p The navigation list expects a #[code route] in the item to create a router link.
  w-list.mt-6(:items="listItems" nav)
</template>

<script>
export default {
  data: () => ({
    listItems: [
      { label: 'Star', icon: 'fa fa-star', route: '#route-to-star' },
      { label: 'check', icon: 'fa fa-check', route: '#route-to-check' },
      { label: 'cross', icon: 'fa fa-close', route: '#route-to-cross' },
      { label: 'info', icon: 'fa fa-info', route: '#route-to-info' },
      { label: 'warning', icon: 'fa fa-warning', route: '#route-to-warning' }
    ]
  })
}
</script>

<style lang="scss">

</style>