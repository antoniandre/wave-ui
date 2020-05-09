<template lang="pug">
div
  h1.headline.mt-4 #[span.code w-list]

  h2 Default items list rendering
  w-list.mt-6(:items="listItems" color="primary")

  h2 Default items list rendering with selection
  w-radios.mt-4(v-model="multiple" name="multiple" :items="radios" inline)
  w-list.mt-6(
    v-model="selectedItem"
    :items="listItems"
    item-value="id"
    color="primary"
    :multiple="multiple")
  .subtitle.mt-2
    | Selected item:
    code.ml-2(v-if="!multiple || Array.isArray(selectedItem)") {{ selectedItem || 'null' }}
    code.ml-2(v-else-if="multiple") {{ (selectedItem ? [selectedItem] : '[]') }}

  h2 Custom rendering &amp; hoverable
  w-list.mt-6(:items="listItems" color="primary" hover)
    template(v-slot:item="{ item }")
      .layout
        | {{ item.label }}
        .spacer
        w-icon {{ item.icon }}

  h2 Checklists
  //- p The checklist expects a #[code checked] attribute in the items that are checked.
  w-list.mt-6(v-model="checklist" :items="listItems" checklist color="primary")

  h2 Navigation lists
  p.
    The navigation list expects a #[code route] attribute in the items that are links.#[br]
    It will create a router link or a normal link (if not using vue-router) on those items.
  p It is possible to disable a link with a #[code disabled: true] attribute in the item.
  w-list.mt-6(:items="listItems" nav color="primary")
</template>

<script>
export default {
  data: () => ({
    radios: [
      { label: 'Single selection', value: false },
      { label: 'Multiple selections', value: true }
    ],
    multiple: false,
    listItems: [
      { label: 'Star', id: 'star', icon: 'mdi mdi-star', route: '#route-to-star' },
      { label: 'Check', id: 'check', icon: 'mdi mdi-check', route: '#route-to-check' },
      { label: 'Cross', id: 'cross', icon: 'mdi mdi-close', route: '#route-to-cross' },
      { label: 'Info', id: 'info', icon: 'mdi mdi-information', route: '#route-to-info' },
      { label: 'Warning', id: 'warning', icon: 'mdi mdi-alert', route: '#route-to-warning' },
      { label: 'Disabled', id: 'disabled', icon: 'mdi mdi-minus-circle', route: '#disabled', disabled: true }
    ],
    selectedItem: 'check',
    checklist: []
  }),

  methods: {
    cl(a) {
      console.log(a)
    }
  }
}
</script>

<style lang="scss">
.page--list .w-list {
  max-width: 300px;
}
</style>