<template lang="pug">
.w-table-wrap
  table.w-table
    thead(v-if="!noHeaders")
      tr
        th(
          v-for="(header, i) in headers"
          :key="i"
          @click="header.sortable !== false && sortTable(header)"
          :class="header.sortable !== false ? 'w-table__header--sortable' : null")
          span.w-table__header(v-if="header.label" v-html="header.label || ''")
          w-icon.w-table__header-sort.ml1(
            v-if="header.sortable !== false"
            :class="`w-table__header-sort--${sorts[header.key] ? 'active' : 'inactive'} ${(sorts[header.key] || {}).desc ? 'w-table__header-sort--desc' : 'w-table__header-sort--asc'}`")
            | wi-arrow-down
    tbody
      template(v-if="items.length")
        tr(v-for="(item, i) in sortedItems")
          td.w-table__cell(v-for="(header, i) in headers" v-html="item[header.key] || ''")
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
    // Allow single sort: `{ id: 'desc' }`, or multiple in an array of objects ({ [key]: 'desc|asc' }).
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
      if (!this.sort || this.sort === []) return this.filteredItems

      // Only sort with 1 key for now, may handle more later.
      const [sortKey1, { desc: sortDesc1 }] = Object.entries(this.sorts).find(([, obj]) => !obj.order)

      return [...this.filteredItems].sort((a, b) => {
        return (a[sortKey1] > b[sortKey1] ? 1 : -1) * (sortDesc1 ? -1 : 1)
      })
    },
    // Object containing the active sorts. E.g. `{ firstName: { desc: false, order: 0 } }`.
    sorts () {
      return this.sort && (Array.isArray(this.sort) ? this.sort : [this.sort]).reduce((obj, item, i) => {
        const [key, direction] = Object.entries(item)[0]
        obj[key] = { desc: direction === 'desc', order: i }
        return obj
      }, {}) || []
    }
  },

  methods: {
    sortTable (header) {
      const alreadySortingThis = this.sorts[header.key]
      if (alreadySortingThis && this.sorts[header.key].desc) return this.$emit('update:sort')
      else if (alreadySortingThis) this.sorts[header.key].desc = !this.sorts[header.key].desc

      this.$emit('update:sort', { [header.key]: (this.sorts[header.key] || {}).desc ? 'desc' : 'asc' })
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
  // Sorting arrow.
  &__header--sortable {cursor: pointer;}
  &__header-sort {
    color: rgba(0, 0, 0, 0.8);
    @include default-transition;

    &--asc {transform: rotate(180deg);}
    &--desc {transform: rotate(0deg);}
    &--inactive {opacity: 0;}
    th:hover &--inactive {opacity: 0.5;}
    th:hover &--active {opacity: 1;}
    &--active {opacity: 0.7;}
  }

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
