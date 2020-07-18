<template lang="pug">
div
  title-link.mt-4.code(h1) w-list

  title-link(h2) Default items list rendering
  .w-flex.wrap
    .grow
      .subtitle Most basic
      w-list.grow.mt-6(:items="listItems1" color="primary")
    .grow
      .subtitle With icons
      w-list.grow.mt-6(:items="listItems1" icon="wi-check" color="primary")

  title-link(h2) Custom rendering &amp; hoverable
  w-list.mt-6(:items="listItems2" color="pink" hover)
    template(v-slot:item="{ item }")
      .w-flex.align-center
        | {{ item.label }}
        .spacer
        w-icon(md) {{ item.icon }}

  title-link(h2) Default items list rendering with selection
  w-radios.mt-4(v-model="multiple" name="multiple" :items="radios" inline)
  w-flex(wrap align-center)
    w-list.mt-6.grow.mr-4(
      v-model="selectedItem1"
      :items="listItems1"
      color="deep-purple"
      :multiple="multiple"
      @item-click="itemClicked = $event")
    div(v-if="itemClicked")
      .subtitle clicked item (#[span.code item-click] event):
      br
      span.code {{ itemClicked }}
  .subtitle.mt-2
    | Selected item:
    code.ml-2(v-if="!multiple || Array.isArray(selectedItem1)") {{ selectedItem1 || 'null' }}
    code.ml-2(v-else-if="multiple") {{ (selectedItem1 ? [selectedItem1] : '[]') }}
  p Note: you can get the list selection from the v-model, or by listening to the #[span.code input] event.

  title-link(h2) Checklists
  .w-flex.wrap
    .grow
      .subtitle Default
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

  .w-flex.wrap.mt-4
    .grow
      .subtitle Custom rendering, default styles
      w-list.mt-6(
        :items="listItems2"
        item-value="id"
        checklist
        color="primary")
        template(v-slot:item="{ item }")
          span {{ item.label }}
          .spacer
          w-icon(md) {{ item.icon }}
    .grow
      .subtitle Custom rendering &amp; styles
      w-list.custom.mt-6(
        :items="listItems2"
        item-value="id"
        checklist
        color="primary")
        template(v-slot:item="{ item }")
          span {{ item.label }}
          .spacer
          w-icon(md) {{ item.icon }}

  title-link(h2) Navigation lists
  p.
    The navigation list expects a #[code route] attribute in the items that are links.#[br]
    It will create a router link or a normal link (if not using vue-router) on those items.
  p It is possible to disable a link with a #[code disabled: true] attribute in the item.
  w-list.mt-6(:items="listItems2" nav color="primary")
    template(v-slot:item="{ item }")
      span {{ item.label }}
      .spacer
      w-icon(md) {{ item.icon }}
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
    selectedItem4: 1,
    itemClicked: null
  })
}
</script>

<style lang="scss">
.page--list .w-list {
  max-width: 300px;

  &.custom .w-list__item-label:before {display: none;}
  &.custom .w-list__item-label label {
    position: relative;
    transition: 0.3s ease-in-out;
  }
  &.custom .w-list__item-label--active label {
    opacity: 0.6;
    color: #999;
  }
  &.custom .w-list__item-label label:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 0;
    border-top: 1px solid #999;
    pointer-events: none;
    transition: 0.3s ease-in-out;
  }
  &.custom .w-list__item-label--active label:before {
    width: 100%;
  }
}
</style>
