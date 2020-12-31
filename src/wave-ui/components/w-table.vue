<template lang="pug">
.w-table-wrap
  table.w-table(:class="classes")
    thead(v-if="!noHeaders")
      tr
        th.w-table__header(
          v-for="(header, i) in headers"
          :key="i"
          @click="header.sortable !== false && sortTable(header)"
          :align="header.align || 'left'"
          :class="headerClasses(header)")
          span(v-if="header.label && header.align !== 'right'" v-html="header.label || ''")
          w-icon.w-table__header-sort(
            v-if="header.sortable !== false"
            :class="headerSortClasses(header)") wi-arrow-down
          span(v-if="header.label && header.align === 'right'" v-html="header.label || ''")
    tbody
      template(v-if="items.length")
        tr(v-for="(item, i) in sortedItems" :key="i")
          td.w-table__cell(
            v-for="(header, j) in headers"
            :key="j"
            :align="header.align || 'left'"
            v-html="item[header.key] || ''")
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

  emits: ['update:sort'],

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
        a = a[sortKey1]
        b = b[sortKey1]
        if (!isNaN(a) && !isNaN(b)) {
          a = parseFloat(a)
          b = parseFloat(b)
        }
        return (a > b ? 1 : -1) * (sortDesc1 ? -1 : 1)
      })
    },
    // Returns an object containing { key1: '+', key2: '-' }. With + or - for ASC/DESC.
    activeSortingKeys () {
      return this.activeSorting.reduce((obj, item) => {
        obj[item.replace(/^[+-]/, '')] = item[0]
        return obj
      }, {})
    },
    classes () {
      return {
        'w-table--fixed-header': this.fixedHeaders
      }
    }
  },

  methods: {
    headerClasses (header) {
      return {
        'w-table__header--sortable': header.sortable !== false
      }
    },
    headerSortClasses (header) {
      const headerSorting = this.activeSortingKeys[header.key]
      return [
        `w-table__header-sort--${headerSorting ? 'active' : 'inactive'}`,
        `w-table__header-sort--${headerSorting === '-' ? 'desc' : 'asc'}`,
        `m${header.align === 'right' ? 'r' : 'l'}1`
      ]
    },
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
  overflow: auto;
}

.w-table {
  width: 100%;
  border-collapse: collapse;
  border: none;

  // Table headers.
  // ------------------------------------------------------
  &__header {
    padding: $base-increment;
  }

  &--fixed-header th {
    position: sticky;
    top: 0;
    background-color: #fff;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      border-bottom: $border;
    }
  }

  // Sorting arrow.
  &__header--sortable {cursor: pointer;}
  &__header-sort {
    color: rgba(0, 0, 0, 0.8);
    vertical-align: text-bottom;
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
