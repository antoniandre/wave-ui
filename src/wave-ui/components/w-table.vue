<template lang="pug">
.w-table-wrap
  table.w-table
    thead(v-if="!noHeaders")
      tr
        th(v-for="(header, i) in headers" v-html="header.label || ''")
    tbody
      template(v-if="items.length")
        tr(v-for="(item, i) in sortedItems")
          td(v-for="(header, i) in headers" v-html="item[header.key] || ''")
      tr(v-else)
        td.text-center(:colspan="headers.length")
          slot(name="no-data") No data to show.
</template>

<script>
export default {
  name: 'w-table',
  props: {
    items: { type: Array, required: true },
    headers: { type: Array, required: true },
    noHeaders: { type: Boolean },
    fixedHeaders: { type: Boolean },
    sort: { type: Object },
    filters: { type: Object }
  },

  emits: [],

  data: () => ({

  }),

  computed: {
    filteredItems () {
      return this.items
    },
    sortedItems () {
      return this.filteredItems
    }
  }
}
</script>

<style lang="scss">
.w-table-wrap {position: relative;}

.w-table {
  width: 100%;

  th {text-align: left;}
  th, td {padding-left: $base-increment;padding-right: $base-increment;}
}
</style>
