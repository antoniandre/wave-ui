<template lang="pug">
.w-table-wrap(:class="wrapClasses")
  table.w-table(:class="classes")
    thead(v-if="!noHeaders")
      tr
        th.w-table__header(
          v-for="(header, i) in headers"
          :key="i"
          @click="header.sortable !== false && sortTable(header)"
          :class="headerClasses(header)")
          w-icon.w-table__header-sort(
            v-if="header.sortable !== false && header.align === 'right'"
            :class="headerSortClasses(header)") wi-arrow-down
          template(v-if="header.label")
            slot(
              v-if="$scopedSlots['header-label']"
              name="header-label"
              :header="header"
              :label="header.label"
              :index="i + 1") {{ header.label || '' }}
            span(v-else v-html="header.label || ''")
          w-icon.w-table__header-sort(
            v-if="header.sortable !== false && header.align !== 'right'"
            :class="headerSortClasses(header)") wi-arrow-down
    tbody
      tr.w-table__progress-bar(v-if="loading")
        td(:colspan="headers.length")
          w-progress(tile)
          .w-table__loading-text
            slot(name="loading") Loading...
      template(v-else-if="items.length")
        tr(v-for="(item, i) in sortedItems" :key="i")
          template(v-for="(header, j) in headers")
            td.w-table__cell(
              v-if="$scopedSlots['item']"
              :key="`${j}-1`"
              :data-label="header.label"
              :class="`text-${header.align || 'left'}`")
              slot(name="item" :header="header" :item="item" :label="item[header.key] || ''" :index="i + 1")
            td.w-table__cell(
              v-else
              :key="`${j}-2`"
              :data-label="header.label"
              :class="`text-${header.align || 'left'}`"
              v-html="item[header.key] || ''")

      tr.no-data(v-else)
        td.w-table__cell.text-center(:colspan="headers.length")
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
    loading: { type: Boolean },
    // Allow single sort: `+id`, or multiple in an array like: ['+id', '-firstName'].
    sort: { type: [String, Array] },
    filter: { type: Function },
    mobileBreakpoint: { type: Number, default: 0 }
  },

  emits: ['update:sort'],

  data: () => ({
    activeSorting: []
  }),

  computed: {
    filteredItems () {
      if (typeof this.filter === 'function') return this.items.filter(this.filter)
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

    wrapClasses () {
      return {
        'w-table-wrap--loading': this.loading
      }
    },

    classes () {
      return {
        'w-table--mobile': this.isMobile || null,
        'w-table--fixed-header': this.fixedHeaders
      }
    },

    isMobile () {
      return ~~this.mobileBreakpoint && this.$waveui.breakpoint.width <= ~~this.mobileBreakpoint
    }
  },

  methods: {
    headerClasses (header) {
      return {
        'w-table__header--sortable': header.sortable !== false,
        [`text-${header.align || 'left'}`]: true
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

  &--loading {overflow: hidden;}
}

.w-table {
  width: 100%;
  min-height: 100%;
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

  // Progress bar when loading.
  &__progress-bar:nth-child(odd) {background: none;}
  &__progress-bar td {padding: 0;height: 1px;}
  @-moz-document url-prefix() {
    &__progress-bar td {height: 100%;}
  }

  &__loading-text {
    display: flex;
    align-items: center;
    justify-content: center;
    height:100%;
    width: 100%;
    padding-top: 2 * $base-increment;
    padding-bottom: 2 * $base-increment;
  }

  // Table body.
  // ------------------------------------------------------
  tbody tr {border-top: 1px solid rgba(0, 0, 0, 0.06);}
  tbody tr:nth-child(odd):not(.no-data) {background-color: $table-tr-odd-color;}
  tbody tr:hover:not(.no-data):not(&__progress-bar) {background-color: $table-tr-hover-color;}

  &__cell {padding: round($base-increment / 2) $base-increment;}
  &__header:first-child, &__cell:first-child {padding-left: 2 * $base-increment;}
  &__header:last-child, &__cell:last-child {padding-right: 2 * $base-increment;}

  .no-data &__cell {
    background-color: rgba(255, 255, 255, 0.2);
    padding: (2 * $base-increment) $base-increment;
  }
}

.w-table--mobile {
  thead {display: none;}
  td {display: block;}
  tr {
    display: block;
    padding-top: $base-increment;
    padding-bottom: $base-increment;
  }

  .w-table__cell {
    display: flex;
    padding-left: 2 * $base-increment;
    padding-right: 2 * $base-increment;
  }

  tr:not(.no-data) .text-center,
  tr:not(.no-data) .text-right {text-align: left;}

  .w-table__cell:before {
    content: attr(data-label);
    font-weight: bold;
    width: 6.5em;
    padding-right: 0.5em;
    display: inline-flex;
  }
  .no-data .w-table__cell:before {display: none;}

  .w-table__progress-bar {
    display: table-row;
    td {display: table-cell;}
    td:before {display: none;}
  }
}
</style>
