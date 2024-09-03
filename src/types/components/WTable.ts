/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import {
  ComputedGetter,
  ComputedOptions,
  DefineComponent,
  EmitsOptions,
  ExtractDefaultPropTypes,
  MethodOptions,
  SlotsType
} from 'vue'

import {
  PublicProps,
  ResolveProps
} from '../extra-vue-types'

// ----------------------------------------------------------------------------
// Additional Types
// ----------------------------------------------------------------------------
export interface WTableHeader {
  /**
   * The label to display as the column header.
   * @property {string} [label] - Default: ''
   */
  label?: string

  /**
   * A unique identifier that should be found in each row object, and that will be used for sorting.
   * @property {string} key
   */
  key: string

  /**
   * Whether this column is sortable or not.
   * @property {boolean} [sortable] - Default: true
   */
  sortable?: boolean

  /**
   * Defines the width of the column in pixel if no unit is given, or in the unit you want (E.g. 30, 30px, 2em, 20%, etc.)
   * @property {number | string} [width] - Default: ''
   */
  width?: number | string

  /**
   * A unique identifier that should be found in each row object, and that will be used for sorting.
   * @property {string} [align] - Default: left
   */
  align?: 'left' | 'center' | 'right'

  /** If needed, you can also add any custom property. */
  [key: string]: any
}

export interface WTablePagination {
  /**
   * Number of rows to show per page
   * @property {number} [itemsPerPage] - Default: 20
   */
  itemsPerPage?: number

  /**
   * An array of the options to list in the items per page select.
   * @property {Array<number | { value: number, label: string }>} [itemsPerPageOptions] - Default: [20, 100, { label: 'All', value: 0 }]
   */
  itemsPerPageOptions?: Array<number | { value: number, label: string }>

  /**
   * The start of the results range
   * @property {number} [start] - Default: 1
   */
  start?: number

  /**
   * The end of the results range
   * @property {number} [end] - Default: start - 1 + total
   */
  end?: number

  /**
   * The current page to display [itemsPerPage] number of rows
   * @property {number} [page]
   */
  page?: number

  /**
   * The total number of items available in the table
   * @property {number} [total]
   */
  total?: number
}

// ----------------------------------------------------------------------------
// Props
// ----------------------------------------------------------------------------
export interface WaveTableProps {
  /**
   * An array of objects that defines the table data.
   * Each item object should have all the same keys as defined in the headers.
   * If needed, you can also add any custom property.</li></ul>
   * @property {Array<any>} [items]
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  items: Array<any>

  /**
   * An array of objects that defines the columns of the table. The headers are always required, even when hidden.
   * Each header object can have these properties:<ul><li>`label:` `[String]` The label to display as the column header.</li><li>`key:` `required` `[String]` A unique identifier that should be found in each row object, and that will be used for sorting.</li><li>`align:` `[String]` align the text to the left, right or center for the whole column.</li><li>`width:` `[String, Integer]` Defines the width of the column in pixel if no unit is given, or in the unit you want (E.g. `30`, `30px`, `2em`, `20%`, etc.)</li><li>`sortable:` `[Boolean]` Whether this column is sortable or not. If omitted, defaults to `true`.</li><li>If needed, you can also add any custom property.</li></ul>
   * @property {Array<any>} [headers]
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  headers: Array<WTableHeader>

  /**
   * The table headings will be hidden. Only the table data will be visible.
   * @property {boolean} noHeaders
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  noHeaders?: boolean

  /**
   * When set to `true`, the table layout is set to fixed (`table-layout: fixed`), which means the table cells won't try to adapt their width to the available space and wrap the content when it does not fit.
   * This layout is used when there are sticky columns or column resizing enabled.
   * @property {boolean} fixedLayout
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  fixedLayout?: boolean

  /**
   * When set to `true`, the table headings will be sticky at the top of the table when scrolling down.
   * @property {boolean} fixedHeaders
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  fixedHeaders?: boolean

  /**
   * When set to `true`, the table footer will be sticky at the bottom of the table when scrolling up or when the content is taller than the table container.
   * @property {boolean} fixedFooter
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  fixedFooter?: boolean

  /**
   * When set to `true`, a progress bar will be displayed and any currently visible rows will be hidden.
   * When set to <code>'header\', the loading bar will be placed in the header leaving any current rows visible while loading.
   * @property {boolean|string} loading
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  loading?: boolean|string

  /**
   * Sort the rows of the array by the given key. You can prefix the key with a `+` or a `-` to apply an ascending or descending sorting. E.g. `+id`.
   * You can also use a 2-way binding to keep the `sort` variable updated in your app (outside of Wave UI): use `:sort.sync="sort"` in Vue 2,or the `v-model:sort="sort"` in Vue 3.
   * @property {string|Array<any>} sort
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  sort?: string|Array<any>

  /**
   * Optionally provide an asynchronous sorting function (usually for server-side sorting). This function receives an array of sorting keys as parameter. If the array is empty, the sorting is reset.
   * @property {} sortFunction
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  sortFunction?: (keys: Array<string>) => void

  /**
   * An external filter function that you can provide to filter the rows of the table.
   * The function receives 2 parameters:
   *  `Param 1:` the `item` object being traversed by the filter.
   *  `Param 2:` the `index` of the item being traversed by the filter.
   * @property {} filter
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  filter?: (item: any, index: number) => void

  /**
   * Called to fetch data from the server for pagination
   * The function receives 1 parameters:
   *  `Param 1:` the `iinfo` object for the current page, start, end, total, itemsPerPage, sorting.
   * @property {} fetch
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  fetch?: (info: { page: number, start: number, end: number, total: number, itemsPerPage: number, sorting: Array<string> }) => void

  /**
   * Expand some rows by default, on table load. You can provide the rows to expand in an array of `id`.
   * If you prefer another key than `id`, you can use the `uid-key` prop to set another key.
   * @property {Array<any>} expandedRows
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  expandedRows?: Array<any>

  /**
   * Select some rows by default, on table load. You can provide the rows to select in an array of `id`.
   * If you prefer another key than `id`, you can use the `uid-key` prop to set another key.
   * @property {Array<any>} selectedRows
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  selectedRows?: Array<any>

  /**
   * Prevent unselecting a row when only one remains selected.
   * @property {boolean} forceSelection
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  forceSelection?: boolean

  /**
   * In order to keep the same row selected after sorting or filtering, each row is assigned a unique identifier.
   * By default the expanded rows array will use an `id` key, if present in the item object, or will assign an
   * internal unique ID otherwise.
   * If you want, you can override the default unique ID key (when internally needed) with this prop.
   * @property {string} uidKey - Default: 'id'
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  uidKey?: string

  /**
   * When a number is given (in pixel), any device screen width under this number will display the table in mobile layout.
   * Leave undefined to disable.
   * @property {number} mobileBreakpoint - Default: 0
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  mobileBreakpoint?: number

  /**
   * When this option is on, the columns will be separated by borders that you can drag to resize.
   * @property {boolean} resizableColumns
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  resizableColumns?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} dark
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  dark?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} light
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  light?: boolean

  /**
   * TODO: Add Description
   * @property {any} itemsPerPageOptions
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  itemsPerPageOptions?: any

  /**
   * Pagination options and configuration
   * @property {WTablePagination} itemsPerPageOptions
   * @see https://antoniandre.github.io/wave-ui/w-table
   * @see https://antoniandre.github.io/wave-ui/w-table#pagination-prop
   */
  pagination?: WTablePagination
}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveTableEmits {
  /**
   * This event fires on both selecting and unselecting a row (so you need only one listener for both), and a boolean is returned to know the selected state.
   * @param {any} item - The associated row item object.
   * @param {number} index - The index of the row being selected (starts at 0) in the current filtering state.
   * @param {boolean} selected - A boolean representing the selected state of the clicked row.
   * @param {Array} selectedRows - An array containing all the expanded rows objects.
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  'onRowSelect'?: (item: any, index: number, selected: boolean, selectedRows: Array<any>) => void

  /**
   * This event fires on both expanding and collapsing a row (so you need only one listener for both), and a boolean is returned to know the expanded state.
   * @param {any} item - The associated row item object.
   * @param {number} index - The index of the row being expanded (starts at 0) in the current filtering state.
   * @param {boolean} expanded - A boolean representing the expanded state of the clicked row.
   * @param {Array} expandedRows - An array containing all the expanded rows objects.
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  'onRowExpand'?: (item: any, index: number, expanded: boolean, expandedRows: Array<any>) => void

  /**
   * This event fires when a row is clicked.
   * @param {any} item - The associated row item object.
   * @param {number} index - The index of the row being clicked (starts at 0) in the current filtering state.
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  'onRowClick'?: (item: any, index: number) => void

  /**
   * Emitted every time the sorting string is updated by a user interaction.
   * @param {string} sortingString - The currently applied sorting on the table rows. E.g. <code>+firstName</code>
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  'onUpdate:sort'?: (sortingString: string) => void

  /**
   * Emitted every time the selected-rows array changes. To be used with <code>:selected-rows.sync</code> in Vue 2 or <code>v-model:selected-rows</code> in Vue 3.
   * @param {Array} selectedRows - The current array of selected rows.
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  'onUpdate:selectedRows'?: (selectedRows: Array<any>) => void

  /**
   * Emitted every time the expanded-rows array changes. To be used with <code>:expanded-rows.sync</code> in Vue 2 or <code>v-model:expanded-rows</code> in Vue 3.
   * @param {Array} expandedRows - The current array of expanded rows.
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  'onUpdate:expandedRows'?: (expandedRows: Array<any>) => void

  /**
   * Emitted on mouseup after a column has been resized.
   * @param {number} index - The index (starting from 0) of the resizer that was moved (also the index of the column on the left of the resizer).
   * @param {Array} widths - An array containing all the new widths of the columns after resizing.
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  'onColumnResize'?: (index: number, widths: Array<any>) => void
}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveTableComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  tableItems: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  filteredItems: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  sortedItems: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  paginatedItems: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  activeSortingKeys: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  wrapClasses: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  colClasses: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  classes: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  isMobile: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  hasStickyColumn: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  selectedRowsByUid: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  expandedRowsByUid: ComputedGetter<any>
}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveTableMethods extends MethodOptions {
  /**
   * TODO: Add Description
   * @param {any} header
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  headerClasses(header: any): void

  /**
   * TODO: Add Description
   * @param {any} header
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  headerSortClasses(header: any): void

  /**
   * TODO: Add Description
   * @param {any} item
   * @param {any} index
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  doSelectRow(item: any, index: any): void

  /**
   * TODO: Add Description
   * @param {any} e
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  onMouseDown(e: any): void

  /**
   * TODO: Add Description
   * @param {any} { target }
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  onMouseOver({ target }: any): void

  /**
   * TODO: Add Description
   * @param {any} { target }
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  onMouseOut({ target }: any): void

  /**
   * TODO: Add Description
   * @param {any} e
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  onResizerMouseMove(e: any): void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  onResizerMouseUp(): void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  initPagination(): void

  /**
   * TODO: Add Description
   * @param {any} { itemsPerPage
   * @param {any} page
   * @param {any} total }
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  updatePaginationConfig(config: { itemsPerPage: any, page: any, total: number }): void
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveTableSlots = SlotsType<{
  /**
   * Provide a custom header label template.
   * @param {any} label The label of the header being rendered.
   * @param {any} header The full header object being rendered.
   * @param {any} index The index of the header cell being rendered. Starts at 1.
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  'header-label': (_: { label: any, header: any, index: any }) => any

  /**
   * Provide a custom loading template.
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  'loading': () => any

  /**
   * Provide a custom template when there is no data.
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  'no-data': () => any

  /**
   * Provide a custom item template for each full <tr>.
   * @param {any} item The full item object of the row being rendered.
   * @param {any} index The index of the row being rendered. Starts at 1.
   * @param {any} select When using `selectable-rows`: the select function to call on <tr> click (or on a custom event).
   * @param {any} classes The internally computed CSS classes to apply to this <tr>. Given as an object.
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  'item': (_: { item: any, index: any, select: any, classes: any }) => any

  /**
   * Provide a custom item cell template (each <td> of each item row).
   * @param {any} item The full item object of the row being rendered.
   * @param {any} header The related header object of the current column of the cell being rendered.
   * @param {any} label The content of the cell being rendered.
   * @param {any} index The index of the cell in the row being rendered. Starts at 1.
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  'item-cell': (_: { item: any, header: any, label: any, index: any }) => any

  /**
   * Provide a custom item cell template for a given index or table header (each <td> of each item row).
   * @param {any} item The full item object of the row being rendered.
   * @param {any} header The related header object of the current column of the cell being rendered.
   * @param {any} label The content of the cell being rendered.
   * @param {any} index The index of the cell in the row being rendered. Starts at 1.
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  [key: `item-cell.${string|number}`]: (_: { item: any, header: any, label: any, index: any }) => any

  /**
   * Provide a custom template for the row expansions (to display in an expanded row).
   * @param {any} item The full item object of the row being rendered.
   * @param {any} index The index of the row being rendered. Starts at 1.
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  'row-expansion': (_: { item: any, index: any }) => any

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  'extra-row': () => any

  /**
   * Provide a custom template for the table footer if you want one.
   * This slot lets you control the whole <tr>. It expects to receive a &lt;tr&gt; element containing &lt;td&gt;s or &lt;th&gt;s.
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  'footer-row': () => any

  /**
   * Provide a custom template for the table footer if you want one.
   * All the cells are merged in one for convenience, but if you need all the cells, you can use the `footer-row` slot.
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  'footer': () => any

  /**
   * TODO: Add Description
   * @param {any} range TODO: Describe me!
   * @param {any} total TODO: Describe me!
   * @see https://antoniandre.github.io/wave-ui/w-table
   */
  'pagination': (_: { range: any, total: any }) => any
}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WTable = DefineComponent<
  WaveTableProps,
  {},
  {},
  WaveTableComputeds,
  WaveTableMethods,
  {},
  {},
  WaveTableEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveTableProps & WaveTableEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveTableProps>,
  WaveTableSlots
>
