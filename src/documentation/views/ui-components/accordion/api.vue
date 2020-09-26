<template lang="pug">
.api
  .w-divider.my12
  title-link.title1(h2) API

  title-link.title2(h3) Options
  pre.
    value: { type: Array },
    color: { type: String, default: '' },
    bgColor: { type: String, default: '' },
    items: { type: [Array, Number], required: true },
    itemClass: { type: String },
    itemColor: { type: String, default: 'color' }, // Support a different color per item.
    titleClass: { type: String },
    contentClass: { type: String },
    expandIcon: { type: [String, Boolean], default: 'wi-triangle-down' },
    expandIconRight: { type: Boolean },
    expandSingle: { type: Boolean },
    collapseIcon: { type: String },
    shadow: { type: Boolean }

  title-link.title2(h3) Slots

  title-link.title2(h3) Events
</template>

<script>
export default {
}
</script>