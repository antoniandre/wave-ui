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
    sort: { type: [Array, Object] },
    filters: { type: Function }
  },

  emits: [],

  data: () => ({

  }),

  computed: {
    filteredItems () {
      return this.items
    },
    sortedItems () {
      let sortingKey, sortingDirection
      if (!this.sort || this.sort === []) return this.filteredItems

      Object.entries(this.sort[0]).forEach(([k, v]) => {
        sortingKey = k
        sortingDirection = v
      })

      return [...this.filteredItems].sort((a, b) => {
        return (a[sortingKey] > b[sortingKey] ? 1 : -1) * (sortingDirection === 'asc' ? 1 : -1)
      })
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

  // Table headers.
  // ------------------------------------------------------
  th {text-align: left;padding: $base-increment;}

  // Table body.
  // ------------------------------------------------------
  tbody tr {
    border-top: 1px solid rgba(0, 0, 0, 0.06);
  }
  tbody tr:nth-child(odd):not(.no-data) {background-color: $table-tr-odd-color;}
  tbody tr:hover:not(.no-data) {background-color: $table-tr-hover-color;}

  td {padding: round($base-increment / 2) $base-increment;}
  th:first-child, td:first-child {padding-left: 2 * $base-increment;}
  th:last-child, td:last-child {padding-right: 2 * $base-increment;}

  .no-data td {
    background-color: rgba(255, 255, 255, 0.2);
    padding: (2 * $base-increment) $base-increment;
  }
}
</style>
