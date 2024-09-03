<template lang="pug">
.w-table.w-table--wrap(:class="classes")
  .w-table__scroll-wrap
    table.w-table__table(
      @mousedown="onMouseDown"
      @mouseover="onMouseOver"
      @mouseout="onMouseOut")
      colgroup(ref="colgroup")
        col.w-table__col(
          v-for="(header, i) in headers"
          :key="i"
          :width="header.width || null"
          :class="colClasses[i]")

      //- Table header.
      thead(v-if="!noHeaders")
        tr
          th.w-table__header(
            v-for="(header, i) in headers"
            :key="i"
            @click="!colResizing.dragging && header.sortable !== false && sortTable(header)"
            :class="headerClasses(header)")
            w-icon.w-table__header-sort(
              v-if="header.sortable !== false && header.align === 'right'"
              :class="headerSortClasses(header)") wi-arrow-down
            template(v-if="header.label")
              slot(
                v-if="$slots['header-label']"
                name="header-label"
                :header="header"
                :label="header.label"
                :index="i + 1") {{ header.label || '' }}
              span(v-else v-html="header.label || ''")
            w-icon.w-table__header-sort(
              v-if="header.sortable !== false && header.align !== 'right'"
              :class="headerSortClasses(header)") wi-arrow-down
            //- Notes: prevent click on header (`.stop`), which triggers sorting & DOM refresh.
            span.w-table__col-resizer(
              v-if="i < headers.length - 1 && resizableColumns"
              :class="{ 'w-table__col-resizer--hover': colResizing.hover === i, 'w-table__col-resizer--active': colResizing.columnIndex === i }"
              @click.stop)
        //- Progress bar only.
        w-transition-fade
          tr.w-table__progress-bar(v-if="loading === 'header'")
            td(:colspan="headers.length")
              w-progress(tile)

      //- Table body.
      tbody
        //- Progress bar & loading text.
        tr.w-table__progress-bar(v-if="loading === true")
          td(:colspan="headers.length")
            w-progress(tile)
            .w-table__loading-text
              slot(name="loading") Loading...
        //- No data.
        tr.no-data(v-else-if="!tableItems.length")
          td.w-table__cell.text-center(:colspan="headers.length")
            slot(name="no-data") No data to show.

        //- Normal rows.
        template(v-if="tableItems.length && loading !== true")
          template(v-for="(item, i) in paginatedItems" :key="i")
            //- Fully custom tr (`item` slot).
            slot(
              v-if="$slots.item"
              name="item"
              :item="item"
              :index="i + 1"
              :select="() => doSelectRow(item, i)"
              :classes="{ 'w-table__row': true, 'w-table__row--selected': selectedRowsByUid[item._uid] !== undefined, 'w-table__row--expanded': expandedRowsByUid[item._uid] !== undefined }")

            tr.w-table__row(
              v-else
              @click="doSelectRow(item, i)"
              :class="{ 'w-table__row--selected': selectedRowsByUid[item._uid] !== undefined, 'w-table__row--expanded': expandedRowsByUid[item._uid] !== undefined }")
              template(v-for="(header, j) in headers")
                td.w-table__cell(
                  v-if="$slots[`item-cell.${header.key}`] || $slots[`item-cell.${j + 1}`] || $slots['item-cell']"
                  :key="`${j}-a`"
                  :data-label="header.label"
                  :class="{ [`text-${header.align || 'left'}`]: true, 'w-table__cell--sticky': header.sticky }")
                  slot(
                    v-if="$slots[`item-cell.${header.key}`]"
                    :name="`item-cell.${header.key}`"
                    :header="header"
                    :item="item"
                    :label="item[header.key] || ''"
                    :index="i + 1")
                  slot(
                    v-else-if="$slots[`item-cell.${j + 1}`]"
                    :name="`item-cell.${j + 1}`"
                    :header="header"
                    :item="item"
                    :label="item[header.key] || ''"
                    :index="i + 1")
                  slot(
                    v-else-if="$slots['item-cell']"
                    name="item-cell"
                    :header="header"
                    :item="item"
                    :label="item[header.key] || ''"
                    :index="i + 1")
                  span.w-table__col-resizer(
                    v-if="j < headers.length - 1 && resizableColumns"
                    :class="{ 'w-table__col-resizer--hover': colResizing.hover === j, 'w-table__col-resizer--active': colResizing.columnIndex === j }")

                td.w-table__cell(
                  v-else
                  :key="`${j}-b`"
                  :data-label="header.label"
                  :class="{ [`text-${header.align || 'left'}`]: true, 'w-table__cell--sticky': header.sticky }")
                  div(v-html="item[header.key] || ''")
                  span.w-table__col-resizer(
                    v-if="j < headers.length - 1 && resizableColumns"
                    :class="{ 'w-table__col-resizer--hover': colResizing.hover === j, 'w-table__col-resizer--active': colResizing.columnIndex === j }")

            //- Expanded row.
            tr.w-table__row.w-table__row--expansion(v-if="expandedRowsByUid[item._uid]")
              td.w-table__cell(:colspan="headers.length")
                w-transition-expand(y)
                  div(v-if="expandedRowsByUid[item._uid]")
                    slot(name="row-expansion" :item="item" :index="i + 1")
                  span.w-table__col-resizer(
                    v-if="i < headers.length - 1 && resizableColumns"
                    :class="{ 'w-table__col-resizer--hover': colResizing.hover === i, 'w-table__col-resizer--active': colResizing.columnIndex === j }")
        //- Extra row.
        .w-table__extra-row(v-if="$slots['extra-row']")
          slot(name="extra-row")

      //- Table footer.
      tfoot.w-table__footer(v-if="$slots.footer || $slots['footer-row']")
        slot(v-if="$slots['footer-row']" name="footer-row")
        tr.w-table__row(v-else-if="$slots.footer")
          td.w-table__cell(:colspan="headers.length")
            slot(name="footer")
  .w-table__pagination.w-pagination(v-if="pagination && paginationConfig")
    slot(
      name="pagination"
      :range="`${paginationConfig.start}-${paginationConfig.end}`"
      :total="paginationConfig.total"
      :pages-count="paginationConfig.pagesCount"
      :page="paginationConfig.page"
      :goToPage="goToPage")
      w-select.w-pagination__items-per-page(
        v-if="paginationConfig.itemsPerPageOptions"
        v-model="paginationConfig.itemsPerPage"
        @input="updatePaginationConfig({ itemsPerPage: paginationConfig.itemsPerPage })"
        :items="paginationConfig.itemsPerPageOptions"
        label-position="left"
        label="Items per page"
        label-color="inherit")
      .pages-wrap
        w-button.w-pagination__arrow.w-pagination__arrow--prev(
          @click="goToPage('-1')"
          :disabled="paginationConfig.page <= 1"
          icon="wi-chevron-left"
          text
          lg)
        template(v-if="paginationConfig.pagesCount > 7")
          template(v-for="i in paginationConfig.pagesCount" :key="i")
            w-button.w-pagination__page(
              v-if="[1, paginationConfig.pagesCount, paginationConfig.page - 1, paginationConfig.page, paginationConfig.page + 1].includes(i)"
              @click="i !== paginationConfig.page && goToPage(i)"
              :class="{ 'w-pagination__page--active': i === paginationConfig.page }"
              round
              lg) {{ i }}
            w-button.w-pagination__page(
              v-else-if="[1, paginationConfig.pagesCount, paginationConfig.page - 1, paginationConfig.page, paginationConfig.page + 1].includes(i - 1)"
              @click="i !== paginationConfig.page && goToPage(i)"
              :class="{ 'w-pagination__page--active': i === paginationConfig.page }"
              round
              lg) ...
        template(v-else)
          w-button.w-pagination__page(
            v-for="i in paginationConfig.pagesCount"
            :key="i"
            @click="i !== paginationConfig.page && goToPage(i)"
            :class="{ 'w-pagination__page--active': i === paginationConfig.page }"
            round
            lg) {{ i }}
        w-button.w-pagination__arrow.w-pagination__arrow--next(
          @click="goToPage('+1')"
          :disabled="paginationConfig.page >= paginationConfig.pagesCount"
          icon="wi-chevron-right"
          text
          lg)
      span.w-pagination__results.
        {{ paginationConfig.start }}-{{ paginationConfig.end || paginationConfig.total }} of {{ paginationConfig.total }}
</template>

<script>
/**
 * @todo: (Column Resizing) Recalc. on browser resize.
 */

import { consoleError } from '../utils/console'

// When column resizing is on, this is the minimum cell width that we can resize to.
const minColumnWidth = 15

export default {
  name: 'w-table',
  props: {
    items: { type: Array, required: true },
    headers: { type: Array, required: true },
    noHeaders: { type: Boolean },
    fixedLayout: { type: Boolean },
    fixedHeaders: { type: Boolean },
    fixedFooter: { type: Boolean },
    loading: { type: [Boolean, String] }, // Bool or 'header' to only display the bar in the header.
    // Allow single sort: `+id`, or multiple in an array like: ['+id', '-firstName'].
    sort: { type: [String, Array] },
    sortFunction: { type: Function },
    filter: { type: Function },
    fetch: { type: Function },

    expandableRows: {
      validator: value => {
        if (![undefined, true, false, 1, '1', ''].includes(value)) {
          consoleError(
            'Wrong value for the w-table\'s `expandableRows` prop. ' +
            `Given: "${value}", expected one of: [undefined, true, false, 1, '1', ''].`
          )
        }
        return true
      }
    },
    // Allow providing the expanded rows and keeping it in sync via .sync in Vue 2 or v-model:expandedRows in Vue 3.
    expandedRows: { type: Array },

    selectableRows: {
      validator: value => {
        if (![undefined, true, false, 1, '1', ''].includes(value)) {
          consoleError(
            'Wrong value for the w-table\'s `selectableRows` prop. ' +
            `Given: "${value}", expected one of: [undefined, true, false, 1, '1', ''].`
          )
        }
        return true
      }
    },
    // Allow providing the selected rows and keeping it in sync via .sync in Vue 2 or v-model:selectedRows in Vue 3.
    selectedRows: { type: Array },

    forceSelection: { type: Boolean },

    // Useful to select or expand a row, and even after a filter, the same row will stay selected or expanded.
    uidKey: { type: String, default: 'id' },

    mobileBreakpoint: { type: Number, default: 0 },
    resizableColumns: { type: Boolean },

    // An object containing:
    // - itemsPerPage
    // - itemsPerPageOptions
    // - start
    // - end
    // - page
    // - total
    pagination: {
      type: [Boolean, Object, String],
      validator: object => {
        if (!object) return true // Accept any falsy value.
        else if (typeof object === 'object' && (!object.itemsPerPage || (object.page && isNaN(object.page)))) {
          consoleError(
            'Wrong pagination config received in the w-table\'s `pagination` prop (received: `' + JSON.stringify(object) + '`). ' +
            '\nExpected object: { itemsPerPage: Integer, page: Integer } or { itemsPerPage: Integer, start: Integer }.'
          )
          return false
        }
        return true
      }
    },
    dark: { type: Boolean },
    light: { type: Boolean }
  },

  emits: [
    'row-select',
    'row-expand',
    'row-click',
    'update:sort',
    'update:selected-rows',
    'update:expanded-rows',
    'column-resize'
  ],

  data: () => ({
    activeSorting: [],
    selectedRowsInternal: [], // Array of uids.
    expandedRowsInternal: [], // Array of uids.
    // Column resizing feature.
    colResizing: {
      dragging: false,
      hover: false, // False or a column number starting from 0.
      columnIndex: null, // Column number starting from 0.
      startCursorX: null,
      colWidth: null,
      nextColWidth: null,
      columnEl: null,
      nextColumnEl: null
    },
    paginationConfig: {
      itemsPerPage: 0,
      itemsPerPageOptions: {},
      start: undefined,
      end: undefined,
      page: 1,
      total: 0
    }
  }),

  computed: {
    tableItems () {
      return this.items.map((item, i) => {
        item._uid = item[this.uidKey] ?? i
        return item
      })
    },

    filteredItems () {
      return typeof this.filter === 'function' ? this.tableItems.filter(this.filter) : this.tableItems
    },

    sortedItems () {
      if (!this.activeSorting.length || this.sortFunction || this.fetch) return this.filteredItems

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

    paginatedItems () {
      return typeof this.fetch === 'function' ? this.sortedItems : this.sortedItems.slice(this.paginationConfig.start - 1, this.paginationConfig.end)
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
        'w-table--loading': this.loading,
        'w-table--loading-in-header': this.loading === 'header',
        'w-table--fixed-layout': this.fixedLayout || this.resizableColumns || this.hasStickyColumn,
        'w-table--mobile': this.isMobile || null,
        'w-table--resizable-cols': this.resizableColumns || null,
        'w-table--resizing': this.colResizing.dragging,
        'w-table--fixed-header': this.fixedHeaders,
        'w-table--fixed-footer': this.fixedFooter,
        'w-table--sticky-column': this.hasStickyColumn,
        'w-table--dark': this.dark,
        'w-table--light': this.light
      }
    },

    colClasses () {
      return this.headers.map(header => {
        return { 'w-table__col--highlighted': this.activeSortingKeys[header.key] }
      }) || []
    },

    isMobile () {
      return ~~this.mobileBreakpoint && this.$waveui.breakpoint.width <= ~~this.mobileBreakpoint
    },

    hasStickyColumn () {
      return this.headers.find(header => header.sticky)
    },

    // Faster lookup than array.includes(uid) and also cached.
    selectedRowsByUid () {
      return this.selectedRowsInternal.reduce((obj, uid) => (obj[uid] = true) && obj, {})
    },

    // Faster lookup than array.includes(uid) and also cached.
    expandedRowsByUid () {
      return this.expandedRowsInternal.reduce((obj, uid) => (obj[uid] = true) && obj, {})
    }
  },

  methods: {
    headerClasses (header) {
      return {
        'w-table__header--sortable': header.sortable !== false, // Can also be falsy with `0`.
        'w-table__header--sticky': header.sticky,
        'w-table__header--resizable': !!this.resizableColumns,
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

    async sortTable (header) {
      const alreadySortingThis = this.activeSortingKeys[header.key]
      if (alreadySortingThis && this.activeSortingKeys[header.key] === '-') {
        this.activeSorting = []
      }
      else this.activeSorting[0] = (alreadySortingThis ? '-' : '+') + header.key

      this.$emit('update:sort', this.activeSorting)

      if (typeof this.sortFunction === 'function') await this.sortFunction(this.activeSorting)
      else if (typeof this.fetch === 'function') await this.callApiFetch()
    },

    doSelectRow (item, index) {
      const expandable = this.expandableRows === '' ? true : this.expandableRows
      const selectable = this.selectableRows === '' ? true : this.selectableRows

      if (expandable) {
        const isExpanding = this.expandedRowsByUid[item._uid] === undefined
        if (isExpanding) {
          if (this.expandableRows.toString() === '1') this.expandedRowsInternal = [item._uid]
          else this.expandedRowsInternal.push(item._uid)
        }
        else this.expandedRowsInternal = this.expandedRowsInternal.filter(uid => uid !== item._uid)

        this.$emit(
          'row-expand',
          {
            item,
            index,
            expanded: isExpanding,
            expandedRows: this.expandedRowsInternal.map(uid => this.filteredItems[uid])
          }
        )

        // Keep external `expanded-rows.sync` (Vue 2) or v-model:expanded-rows (Vue 3) updated.
        this.$emit('update:expanded-rows', this.expandedRowsInternal)
      }

      else if (selectable) {
        let updated = false
        const isSelecting = this.selectedRowsByUid[item._uid] === undefined
        if (isSelecting) {
          if (this.selectableRows.toString() === '1') this.selectedRowsInternal = [item._uid]
          else this.selectedRowsInternal.push(item._uid)
          updated = true
        }
        else if (!this.forceSelection || this.selectedRowsInternal.length > 1) {
          this.selectedRowsInternal = this.selectedRowsInternal.filter(uid => uid !== item._uid)
          updated = true
        }

        // Only emit event if something has changed.
        if (updated) {
          this.$emit(
            'row-select',
            {
              item,
              index,
              selected: isSelecting,
              selectedRows: this.selectedRowsInternal.map(uid => this.filteredItems[uid])
            }
          )

          // Keep external `selected-rows.sync` (Vue 2) or v-model:selected-rows (Vue 3) updated.
          this.$emit('update:selected-rows', this.selectedRowsInternal)
        }
      }

      this.$emit('row-click', { item, index })
    },

    // Attach 1 single event listener on the table rather than 1 on each resizer.
    onMouseDown (e) {
      if (e.target.classList.contains('w-table__col-resizer')) {
        this.colResizing.columnIndex = +e.target.parentNode.cellIndex
        this.colResizing.startCursorX = e.pageX // x-axis coordinate at drag start.

        // Applying width on colgroup > col works with & without `no-headers`.
        // So it's better than setting a condition to apply on first row tds in case of no-headers.
        this.colResizing.columnEl = this.$el.querySelector(`col:nth-child(${this.colResizing.columnIndex + 1})`)
        this.colResizing.nextColumnEl = this.colResizing.columnEl.nextSibling
        this.colResizing.colWidth = this.colResizing.columnEl.offsetWidth
        this.colResizing.nextColWidth = this.colResizing.nextColumnEl.offsetWidth

        // Now that we've grabbed the resizer, bind the mousemove & mouseup events to the whole document.
        document.addEventListener('mousemove', this.onResizerMouseMove)
        document.addEventListener('mouseup', this.onResizerMouseUp)
      }
    },

    // Attach 1 single event listener on the table rather than 1 on each resizer.
    onMouseOver ({ target }) {
      // On col resizer mouseover.
      if (target.classList.contains('w-table__col-resizer')) {
        this.colResizing.hover = +target.parentNode.cellIndex
      }
    },

    // Attach 1 single event listener on the table rather than 1 on each resizer.
    onMouseOut ({ target }) {
      // On col resizer mouseout.
      if (target.classList.contains('w-table__col-resizer')) this.colResizing.hover = false
    },

    /**
     * Notes:
     * Make sure there is no change of variable that would cause a DOM refresh,
     * and glitch while dragging.
     * this.$set(this.headers[columnIndex], 'width', colWidth + deltaX)

     * If using the width attribute with variable (so data-driven) and not `style.width`,
     * any later change of variable would cause a DOM refresh, and lose the current DOM state
     * (losing the 2 columns width). So do a direct DOM manipulation using `.style.width`.
     */
    onResizerMouseMove (e) {
      const { startCursorX, columnEl, nextColumnEl, colWidth, nextColWidth } = this.colResizing

      this.colResizing.dragging = true
      const deltaX = e.pageX - startCursorX

      const maxWidth = colWidth + nextColWidth
      const newColWidth = colWidth + deltaX
      const newNextColWidth = nextColWidth - deltaX

      // 1. Apply the change of width.
      columnEl.style.width = colWidth + deltaX + 'px'
      nextColumnEl.style.width = nextColWidth - deltaX + 'px'

      // 2. Check if we went too far (the width applied is different than the browser-computed one).
      const minWidthReached = (deltaX < 0 && columnEl.offsetWidth > newColWidth) ||
                              columnEl.offsetWidth <= minColumnWidth
      const maxWidthReached = deltaX > 0 && nextColumnEl.offsetWidth > newNextColWidth

      // 3. If we went too far, correct the value of both cells widths.
      // Make sure we don't shrink enough to push other left cells.
      if (minWidthReached) {
        const newWidth = Math.max(columnEl.offsetWidth, minColumnWidth)
        columnEl.style.width = newWidth + 'px'
        nextColumnEl.style.width = maxWidth - newWidth + 'px'
      }
      // Make sure we don't grow enough to push other right cells.
      else if (maxWidthReached) {
        columnEl.style.width = maxWidth - nextColumnEl.offsetWidth + 'px'
        nextColumnEl.style.width = nextColumnEl.offsetWidth + 'px'
      }
    },

    onResizerMouseUp () {
      // Remove listeners.
      document.removeEventListener('mousemove', this.onResizerMouseMove)
      document.removeEventListener('mouseup', this.onResizerMouseUp)

      // Reset all the variables (better for debugging).
      // setTimeout 0 to make sure the sorting is not applied when releasing the mouse on a header
      // cell after resizing.
      // (releasing the mouse on table header triggers a click event captured by the sorting feature)
      setTimeout(() => {
        // On Mouse up, emit an event containing all the new widths of the columns.
        const widths = [...this.$refs.colgroup.children].map(column => column.style?.width || column.offsetWidth)
        this.$emit('column-resize', { index: this.colResizing.columnIndex, widths })

        this.colResizing.dragging = false
        this.colResizing.columnIndex = null
        this.colResizing.startCursorX = null
        this.colResizing.columnEl = null
        this.colResizing.nextColumnEl = null
        this.colResizing.colWidth = null
        this.colResizing.nextColWidth = null
      }, 0)
    },

    initPagination () {
      const itemsPerPage = this.pagination?.itemsPerPage ?? 20 // Can also be `0` for all.

      const itemsPerPageOptions = this.pagination?.itemsPerPageOptions || [20, 100, { label: 'All', value: 0 }]
      // If the given itemsPerPage is not in the itemsPerPageOptions, add it.
      if (!itemsPerPageOptions.find(item => (item?.value ?? item) === +itemsPerPage)) {
        itemsPerPageOptions.push(itemsPerPage)
      }
      this.paginationConfig.itemsPerPageOptions = itemsPerPageOptions.map(item => ({
        label: ['string', 'number'].includes(typeof item) ? item.toString() : (item.label || item.value),
        value: ['string', 'number'].includes(typeof item) ? ~~item : (item.value ?? item.label)
      }))
      // Sort the options in an ascending order.
      this.paginationConfig.itemsPerPageOptions.sort((a, b) => a.value < b.value ? -1 : 1)
      const optionAll = this.paginationConfig.itemsPerPageOptions.shift()
      this.paginationConfig.itemsPerPageOptions.push(optionAll)

      this.updatePaginationConfig({
        itemsPerPage,
        page: this.pagination.page || 1,
        total: this.pagination.total || this.items.length
      })
    },

    /**
     * Updates the pagination object and fills up missing variables to always maintain the paginationConfig
     * object accurate for external use (read and write).
     * The following vars will always be up to date and if one changes from outside the rest of them
     * will update accordingly: itemsPerPage, itemsPerPageOptions, start, end, page, total.
     *
     * @param {Object} config The config object defining the pagination.
     *  This object can have at most itemsPerPage, page, total, and it will define the start, end and
     *  pagesCount from the given or current itemsPerPage, page and total.
     *  - If a total is given for update, trust it blindly (could come from a backend), and recompute
     *    the rest as long as itemsPerPage is defined.
     *  - If a page is given for update, it will navigate to that page.
     *  - If an itemsPerPage is given for update, it will navigate to that page.
     */
    updatePaginationConfig ({ itemsPerPage, page, total }) {
      if (total) this.paginationConfig.total = total
      if (itemsPerPage !== undefined) {
        this.paginationConfig.itemsPerPage = itemsPerPage
        itemsPerPage = itemsPerPage || this.paginationConfig.total // If `0`, take all the results.
        this.paginationConfig.page = page || this.paginationConfig.page || 1

        page = this.paginationConfig.page // Shorthand var for next lines.
        total = this.paginationConfig.total // Shorthand var for next lines.
        const itemsInAllPages = itemsPerPage * page
        this.paginationConfig.start = 1
        this.paginationConfig.end = total >= itemsInAllPages ? itemsInAllPages : (total % itemsInAllPages)

        this.paginationConfig.pagesCount = Math.ceil(total / itemsPerPage)
      }
      if (page) this.goToPage(page)
    },

    /**
     * Goes to a given page or to the next or previous page.
     *
     * @param {Number|String} page a number to go to a specific page or `-1`, `+1` for prev & next page.
     */
    async goToPage (page) {
      if (['-1', '+1'].includes(page)) this.paginationConfig.page += +page
      else this.paginationConfig.page = page
      const { itemsPerPage, total } = this.paginationConfig
      this.paginationConfig.page = Math.max(1, this.paginationConfig.page)
      this.paginationConfig.start = (itemsPerPage * (this.paginationConfig.page - 1)) + 1
      this.paginationConfig.end = (this.paginationConfig.start - 1) + (itemsPerPage || total)

      if (typeof this.fetch === 'function') await this.callApiFetch()
    },

    /**
     * Call a user provided fetch function in order to fetch table items from an API.
     * While waiting for the call to resolve, nothing in the table will change.
     */
    async callApiFetch () {
      const { page, start, end, total, itemsPerPage } = this.paginationConfig
      return await this.fetch({
        page,
        start,
        end: end || total,
        total,
        itemsPerPage: itemsPerPage || total,
        sorting: this.activeSorting
      })
    }
  },

  created () {
    if (!this.sort) this.activeSorting = []
    else this.activeSorting = Array.isArray(this.sort) ? this.sort : [this.sort]

    if ((this.expandedRows || []).length) this.expandedRowsInternal = this.expandedRows
    if ((this.selectedRows || []).length) this.selectedRowsInternal = this.selectedRows

    if (this.pagination) this.initPagination()
  },

  watch: {
    sort (sorting) {
      if (!sorting) this.activeSorting = []
      else this.activeSorting = Array.isArray(sorting) ? sorting : [sorting]
    },

    expandableRows (value) {
      if (!value) this.expandedRowsInternal = []
      else if (value.toString() === '1') this.expandedRowsInternal = this.expandedRowsInternal.slice(0, 1)
    },

    expandedRows (array) {
      this.expandedRowsInternal = Array.isArray(array) && array.length ? this.expandedRows : []
    },

    selectableRows (value) {
      if (!value) this.selectedRowsInternal = []
      else if (value.toString() === '1') this.selectedRowsInternal = this.selectedRowsInternal.slice(0, 1)
    },

    selectedRows (array) {
      this.selectedRowsInternal = Array.isArray(array) && array.length ? this.selectedRows : []
    },

    'pagination.page' (page) {
      this.updatePaginationConfig({ page })
    },
    'pagination.itemsPerPage' (itemsPerPage) {
      this.updatePaginationConfig({ itemsPerPage })
    },
    'pagination.total' (total) {
      this.updatePaginationConfig({ total })
    }
  }
}
</script>

<style lang="scss">
$tr-border-top: 1px;

.w-table {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: $border-radius;
  border: $border;

  &--loading {overflow: hidden;}

  &--resizing {
    user-select: none;

    &, * {cursor: col-resize;}
  }

  &__scroll-wrap {
    overflow: auto;
    min-height: 100%;
  }

  &__table {
    width: 100%;
    min-height: 100%;
    border-collapse: collapse;
    border: none;

    @include themeable;

    &--fixed-layout & {table-layout: fixed;} // Allow resizing beyond the cell minimum text width.
  }

  // Table columns.
  // ------------------------------------------------------
  &__col--highlighted {
    background-color: rgba(var(--w-contrast-bg-color-rgb), 0.04);
  }

  // Table headers.
  // ------------------------------------------------------
  thead {position: relative;}

  &__header {padding: $base-increment;}
  &__header--resizable {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &--fixed-header thead {
    position: sticky;
    top: 0;
    background-color: $base-bg-color;
    z-index: 1; // For sticky columns to go under.

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      border-bottom: $border;
    }
  }

  &__header--sticky {
    position: sticky;
    left: 0;

    &:before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      background-color: $base-bg-color;
    }
  }

  // Sorting arrow.
  &__header--sortable {cursor: pointer;}
  &__header-sort {
    color: rgba(var(--w-base-color-rgb), 0.8);
    vertical-align: text-bottom;
    @include default-transition;

    &--asc {transform: rotate(180deg);}
    &--desc {transform: rotate(0deg);}
    &--inactive {opacity: 0;}
    th:hover &--inactive {opacity: 0.5;}
    th:hover &--active {opacity: 1;}
    &--active {opacity: 0.7;}
  }

  // Resizable columns.
  &__header--resizable {position: relative;}
  &__col-resizer {
    position: absolute;
    right: -5px;
    top: -$tr-border-top;
    bottom: 0;
    width: 10px;
    cursor: col-resize;
    z-index: 1;

    &:before {
      content: '';
      border-right: $border;
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      transform: translateX(-50%);
    }
    &--hover:before, &--active:before {border-right-width: 2px;}
  }

  // Progress bar when loading.
  &__progress-bar:nth-child(odd) {background: none;}
  thead .w-progress {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  &__progress-bar td {padding: 0;height: 0;}
  @-moz-document url-prefix() {
    &__progress-bar td {height: 100%;}
  }

  &__loading-text {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding-top: 2 * $base-increment;
    padding-bottom: 2 * $base-increment;
  }

  // Table body.
  // ------------------------------------------------------
  tbody {transition: opacity $transition-duration;}
  &--loading-in-header tbody {opacity: 0.6;}

  tbody tr {border-top: $tr-border-top solid rgba(var(--w-base-color-rgb), 0.06);}
  // Don't apply built-in bg color if a bg color is already found on a tr.
  tbody tr:nth-child(odd):not(.no-data):not([class*="--bg"]) {background-color: $table-tr-odd-color;}
  tbody .w-table__row:hover:not(.no-data):not([class*="--bg"]) {background-color: $table-tr-hover-color;}

  &__row--selected td {position: relative;}
  &__row--selected td:before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: var(--w-primary-color);
    opacity: 0.2;
    pointer-events: none;
  }

  &__cell {padding: round(divide($base-increment, 2)) $base-increment;}
  &__header:first-child, &__cell:first-child {padding-left: 2 * $base-increment;}
  &__header:last-child, &__cell:last-child {padding-right: 2 * $base-increment;}

  &--resizable-cols &__cell {
    position: relative;

    &, & * {
      overflow: hidden;
      // white-space: nowrap; // If you only want the content cell on a single line.
      text-overflow: ellipsis;
    }
  }

  &__cell--sticky {
    position: sticky;
    left: 0;

    &:before, &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
    }
    &:before {background-color: $base-bg-color;}
  }
  tr:nth-child(odd) &__cell--sticky:after {background-color: $table-tr-odd-color;}
  tr:hover &__cell--sticky:after {background-color: $table-tr-hover-color;}

  .no-data &__cell {
    background-color: rgba(255, 255, 255, 0.2);
    padding: (2 * $base-increment) $base-increment;
  }

  // Table footer.
  // ------------------------------------------------------
  &--fixed-footer tfoot {
    position: sticky;
    bottom: -1px;
    background-color: $base-bg-color;
    z-index: 1; // For sticky columns to go under.

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      border-top: $border;
    }
  }

  &__footer &__cell {
    padding-top: $base-increment;
    padding-bottom: $base-increment;
  }

  // Pagination.
  // ------------------------------------------------------
  &__pagination {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2 * $base-increment;
    padding: $base-increment 2 * $base-increment;

    .w-pagination__items-per-page {
      flex: 0 0 auto;
      text-align: right;
    }

    .pages-wrap {
      display: flex;
      padding-left: 1px; // Prevent overflow causing scrollbar.
      padding-right: 1px;
      max-height: 4.5em;
      gap: 0.5 * $base-increment;
      overflow-y: hidden;
    }

    .w-pagination__page {
      font-size: 0.9em;
      aspect-ratio: 1;
      min-width: 0; // Safari ratio fix (e.g. losing ratio if height is set and side padding are added).
      overflow: hidden;
      color: rgba(var(--w-base-color-rgb), 0.65);
      background-color: rgba(var(--w-base-bg-color-rgb), 0.4);

      &:hover:before {
        background-color: $primary;
        opacity: 0.1;
      }
      &:active:before {
        background-color: $primary;
        opacity: 0.2;
      }

      &--active {
        font-weight: bold;
        color: $primary;

        &:before {
          background-color: $primary;
          opacity: 0.1;
        }
      }
    }

    .w-pagination__results {
      white-space: nowrap;
      text-align: right;
    }
  }
}

// Mobile layout.
.w-table--mobile {
  display: flex;

  thead {display: none;}
  tbody {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  tr {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
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
