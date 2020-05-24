<template lang="pug">
div
  h1.headline.mt-4 #[span.code w-list]

  h2 Default items list rendering
  w-list.mt-6(:items="listItems1" color="primary")

  h2 Custom rendering &amp; hoverable
  w-list.mt-6(:items="listItems2" color="pink" hover)
    template(v-slot:item="{ item }")
      .layout
        | {{ item.label }}
        .spacer
        w-icon {{ item.icon }}

  h2 Default items list rendering with selection
  w-radios.mt-4(v-model="multiple" name="multiple" :items="radios" inline)
  w-list.mt-6(
    v-model="selectedItem1"
    :items="listItems1"
    color="deep-purple"
    :multiple="multiple")
  .subtitle.mt-2
    | Selected item:
    code.ml-2(v-if="!multiple || Array.isArray(selectedItem1)") {{ selectedItem1 || 'null' }}
    code.ml-2(v-else-if="multiple") {{ (selectedItem1 ? [selectedItem1] : '[]') }}

  h2 Checklists
  .layout.wrap
    .grow
      .subtitle Normal
      w-list.mt-6.mr-4(
        v-model="selectedItem3"
        :items="listItems1"
        checklist
        color="green")
    .grow
      .subtitle Round checkboxes
      w-list.mt-6(
        v-model="selectedItem4"
        :items="listItems1"
        checklist
        round-checkboxes
        color="green")

  h3 Checklist and custom rendering
  w-list.mt-6(
    :items="listItems2"
    item-value="id"
    checklist
    color="primary")
    template(v-slot:item="{ item }")
      span {{ item.label }}
      .spacer
      w-icon {{ item.icon }}

  h2 Navigation lists
  p.
    The navigation list expects a #[code route] attribute in the items that are links.#[br]
    It will create a router link or a normal link (if not using vue-router) on those items.
  p It is possible to disable a link with a #[code disabled: true] attribute in the item.
  w-list.mt-6(:items="listItems2" nav color="primary")
    template(v-slot:item="{ item }")
      span {{ item.label }}
      .spacer
      w-icon {{ item.icon }}
</template>

<script>
export default {
  data: () => ({
    radios: [
      { label: 'Single selection', value: false },
      { label: 'Multiple selections', value: true }
    ],
    multiple: false,
    listItems1: [
      { label: 'Item 1', value: 1 },
      { label: 'Item 2', value: 2 },
      { label: 'Item 3', value: 3 },
      { label: 'Item 4', value: 4 },
      { label: 'Item 5', value: 5 },
      { label: 'Item 6', value: 6, disabled: true }
    ],
    listItems2: [
      { label: 'Star', id: 'star', icon: 'mdi mdi-star', route: '#route-to-star' },
      { label: 'Check', id: 'check', icon: 'mdi mdi-check', route: '#route-to-check' },
      { label: 'Cross', id: 'cross', icon: 'mdi mdi-close', route: '#route-to-cross' },
      { label: 'Info', id: 'info', icon: 'mdi mdi-information', route: '#route-to-info' },
      { label: 'Warning', id: 'warning', icon: 'mdi mdi-alert', route: '#route-to-warning' },
      { label: 'Disabled', id: 'disabled', icon: 'mdi mdi-minus-circle', route: '#disabled', disabled: true }
    ],
    listItems3: [
      { label: 'Item 1' },
      { label: 'Item 2' },
      { label: 'Item 3' },
      { label: 'Item 4' },
      { label: 'Item 5' },
      { label: 'Item 6', disabled: true }
    ],
    selectedItem1: 2,
    selectedItem2: 'check',
    selectedItem3: [1, 3],
    selectedItem4: 1
  })
}
</script>

<style lang="scss">
.page--list .w-list {
  max-width: 300px;
}
</style>
