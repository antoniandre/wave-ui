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
            :class="`w-table__header-sort--${activeSortingKeys[header.key] ? 'active' : 'inactive'} ${activeSortingKeys[header.key] === '-' ? 'w-table__header-sort--desc' : 'w-table__header-sort--asc'}`")
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
    // Allow single sort: `+id`, or multiple in an array like: ['+id', '-firstName'].
    sort: { type: [String, Array] },
    filters: { type: Function }
  },

  emits: [],

  data: () => ({
    activeSorting: []
  }),

  computed: {
    filteredItems () {
      return this.items
    },
    sortedItems () {
      if (!this.activeSorting.length) return this.filteredItems

      // Only sort with 1 key for now, may handle more later.
      const sortKey1 = this.activeSorting[0].replace(/^[+-]/, '')
      const sortDesc1 = this.activeSorting[0][0] === '-'

      return [...this.filteredItems].sort((a, b) => {
        return (a[sortKey1] > b[sortKey1] ? 1 : -1) * (sortDesc1 ? -1 : 1)
      })
    },
    // Returns an object containing { key1: '+', key2: '-' }. With + or - for ASC/DESC.
    activeSortingKeys () {
      return this.activeSorting.reduce((obj, item) => {
        obj[item.replace(/^[+-]/, '')] = item[0]
        return obj
      }, {})
    }
  },

  methods: {
    sortTable (header) {
      const alreadySortingThis = this.activeSortingKeys[header.key]
      if (alreadySortingThis && this.activeSortingKeys[header.key] === '-') {
        this.activeSorting = []
        return this.$emit('update:sort')
      }
      else this.$set(this.activeSorting, 0, (alreadySortingThis ? '-' : '+') + header.key)

      this.$emit('update:sort', this.activeSorting)
    }
  },

  created () {
    if (!this.sort) this.activeSorting = []
    else this.activeSorting = Array.isArray(this.sort) ? this.sort : [this.sort]
  },

  watch: {
    sort (sorting) {
      if (!sorting) this.activeSorting = []
      else this.activeSorting = Array.isArray(sorting) ? sorting : [sorting]
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
