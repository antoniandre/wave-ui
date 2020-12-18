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
      tr.no-data(v-else)
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
.w-table-wrap {
  position: relative;
  border-radius: $border-radius;
  border: $border;
}

.w-table {
  width: 100%;
  border-collapse: collapse;

  tbody tr {
    border-top: 1px solid rgba(0, 0, 0, 0.06);
  }
  tbody tr:nth-child(odd):not(.no-data) {background-color: rgba(0, 0, 0, 0.02);}
  tbody tr:hover:not(.no-data) {background-color: rgba(0, 0, 0, 0.05);}

  th {text-align: left;}
  th {
    padding: $base-increment;
  }
  td {
    padding: round($base-increment / 2) $base-increment;
  }

  .no-data td {
    background-color: rgba(255, 255, 255, 0.2);
    padding: (2 * $base-increment) $base-increment;
  }
}
</style>
