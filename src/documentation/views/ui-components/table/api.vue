<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WTable from '@/wave-ui/components/w-table.vue'

const propsDescs = {
  items: 'An array of objects that defines the table data.<br>Each item object should have all the same keys as defined in the headers.<br>If needed, you can also add any custom property.</li></ul>',
  headers: 'An array of objects that defines the columns of the table. The headers are always required, even when hidden.<br>Each header object can have these properties:<ul><li><strong class="code">label:</strong> <span class="types teal">[String]</span> The label to display as the column header.</li><li><strong class="code">key:</strong> <span class="w-tag text-upper red size--sm w-tag--outline">required</span> <span class="types teal">[String]</span> A unique identifier that should be found in each row object, and that will be used for sorting.</li><li><strong class="code">align:</strong> <span class="types teal">[String]</span> align the text to the left, right or center for the whole column.</li><li><strong class="code">width:</strong> <span class="types teal">[String, Integer]</span> Defines the width of the column in pixel if no unit is given, or in the unit you want (E.g. <code>30</code>, <code>30px</code>, <code>2em</code>, <code>20%</code>, etc.)</li><li>If needed, you can also add any custom property.</li></ul>',
  noHeaders: 'The table headings will be hidden. Only the table data will be visible.',
  fixedHeaders: 'When set to <code>true</code>, the table headings will be sticky at the top of the table when scrolling down.',
  fixedFooter: 'When set to <code>true</code>, the table footer will be sticky at the bottom of the table when scrolling up or when the content is taller than the table container.',
  fixedLayout: 'When set to <code>true</code>, the table layout is set to fixed (<code>table-layout: fixed</code>), which means the table cells won\'t try to adapt their width to the available space and wrap the content when it does not fit.<br>This layout is used when there are sticky columns or column resizing enabled.',
  loading: 'When set to <code>true</code>, a progress bar will be displayed and any currently visible rows will be hidden.<br>When set to <code>\'header\', the loading bar will be placed in the header leaving any current rows visible while loading.',
  sort: 'Sort the rows of the array by the given key. You can prefix the key with a <code>+</code> or a <code>-</code> to apply an ascending or descending sorting. E.g. <code>+id</code>.<br>You can also use a 2-way binding to keep the <code>sort</code> variable updated in your app (outside of Wave UI): use <code>:sort.sync="sort"</code> in Vue 2,or the <code>v-model:sort="sort"</code> in Vue 3.',
  sortFunction: 'Optionally provide an asynchronous sorting function (usually for server-side sorting). This function receives an array of sorting keys as parameter. If the array is empty, the sorting is reset.',
  expandableRows: 'Activate or deactivate the expandable rows feature.<br>When set to <code>true</code>, a click on a row will expand some details for this record on a next row.',
  expandedRows: 'Expand some rows by default, on table load. You can provide the rows to expand in an array of <code>id</code>. If you prefer another key than <code>id</code>, you can use the <code>uid-key</code> prop to set another key.',
  selectableRows: 'Activate or deactivate the selectable rows feature.<br>When set to <code>true</code>, a click on a row will set it to activated and a <code>.w-table__row--selected</code> CSS class will be applied to highlight the row. You can use the CSS class to change the highlight color or style.',
  selectedRows: 'Select some rows by default, on table load. You can provide the rows to select in an array of <code>id</code>. If you prefer another key than <code>id</code>, you can use the <code>uid-key</code> prop to set another key.',
  forceSelection: 'Prevent unselecting a row when only one remains selected.',
  uidKey: 'In order to keep the same row selected after sorting or filtering, each row is assigned a unique identifier.<br>By default the expanded rows array will use an <code>id</code> key, if present in the item object, or will assign an internal unique ID otherwise.<br>If you want, you can override the default unique ID key (when internally needed) with this prop.',
  filter: 'An external filter function that you can provide to filter the rows of the table.<br>The function receives 2 parameters:<ul><li><strong>Param 1:</strong> the <strong>item</strong> object being traversed by the filter.</li><li><strong>Param 2:</strong> the <strong>index</strong> of the item being traversed by the filter.</li></ul>',
  mobileBreakpoint: 'When a number is given (in pixel), any device screen width under this number will display the table in mobile layout. Leave undefined to disable.',
  resizableColumns: 'When this option is on, the columns will be separated by borders that you can drag to resize.',
  pagination: 'The pagination is a two-way binding object. It is always containing up-to-date properties that you can use for pagination.<br>You can also modify any property inside it and the table will re-paginate and update. This is particularly useful when the pagination is done server-side.<br>Here is the list of all the properties it contains:<ul><li><span class="teal code">{Integer}</span><code>itemsPerPage:</code><p>the number of rows to display in one page. <code>0</code> for "all" results in 1 page.</p></li><li><span class="teal code">{Array}</span><code>itemsPerPageOptions:</code><p>The <code>itemsPerPage</code> options to offer to the user. Each object of the array should have at least a <code>value</code> property, and a <code>label</code> property if different of the <code>value</code>.</p></li><li><span class="teal code">{Number}</span><code>start:</code><p><code>start</code> &amp; <code>end</code> are integers defining the range of results to load. E.g. <code>51 - 100</code>.<br><code>start</code> is the first result number to load [itemsPerPage] results from.<br> <code>start</code> &amp; <code>end</code> can be used instead of <code>page</code> if you find it more convenient.</p><p class="bold-text"><strong>Warning:</strong> when the pagination is done server-side, you should subtract <code>1</code> to the start and end in order to query the database. E.g: start = 51, end = 100, you should query the database rows 50 to 99 (in order to display ranges starting from 1 and not zero to the end user).</p></li><li><span class="teal code">{Number}</span><code>end:</code><p><code>start</code> &amp; <code>end</code> are integers defining the range of results to load. E.g. <code>51 - 100</code>.<br><code>end</code> is the last result number to load.<br> <code>start</code> &amp; <code>end</code> can be used instead of <code>page</code> if you find it more convenient.</p><p class="bold-text"><strong>Warning:</strong> when the pagination is done server-side, you should subtract <code>1</code> to the start and end in order to query the database. E.g: start = 51, end = 100, you should query the database rows 50 to 99 (in order to display ranges starting from 1 and not zero to the end user).</p></li><li><span class="teal code">{Number}</span><code>page:</code><p>An integer - to be used in conjunction with the <code>itemsPerPage</code> option - to define the range of results to load. E.g. page = 2 and itemsPerPage = 50, will load the results range [51-100].<br> This can be used instead of <code>start</code> and <code>end</code> if you find it more convenient.</p></li><li><span class="teal code">{Number}</span><code>total:</code><p>An integer defining the total number of items available in this match.</p></li></ul>'
}

const slots = {
  'no-data': { description: 'Provide a custom template when there is no data.' },
  loading: { description: 'Provide a custom loading template.' },
  'header-label': {
    description: 'Provide a custom header label template.',
    params: {
      label: 'The label of the header being rendered.',
      header: 'The full header object being rendered.',
      index: 'The index of the header cell being rendered. Starts at 1.'
    }
  },
  item: {
    description: 'Provide a custom item template for each full &lt;tr&gt;.',
    params: {
      item: 'The full item object of the row being rendered.',
      index: 'The index of the row being rendered. Starts at 1.',
      select: 'When using <code>selectable-rows</code>: the select function to call on &lt;tr&gt; click (or on a custom event).',
      classes: 'The internally computed CSS classes to apply to this &lt;tr&gt;. Given as an object.'
    }
  },
  'item-cell': {
    description: 'Provide a custom item cell template (each &lt;td&gt; of each item row).',
    params: {
      item: 'The full item object of the row being rendered.',
      header: 'The related header object of the current column of the cell being rendered.',
      label: 'The content of the cell being rendered.',
      index: 'The index of the cell in the row being rendered. Starts at 1.'
    }
  },
  'row-expansion': {
    description: 'Provide a custom template for the row expansions (to display in an expanded row).',
    params: {
      item: 'The full item object of the row being rendered.',
      index: 'The index of the row being rendered. Starts at 1.'
    }
  },
  footer: {
    description: 'Provide a custom template for the table footer if you want one.<br>All the cells are merged in one for convenience, but if you need all the cells, you can use the <code>footer-row</code> slot.'
  },
  'footer-row': {
    description: 'Provide a custom template for the table footer if you want one.<br>This slot lets you control the whole &lt;tr&gt;. It expects to receive a &lt;tr&gt; element containing &lt;td&gt;s or &lt;th&gt;s.'
  }
}

const events = {
  'row-click': {
    description: '',
    params: {
      item: 'The associated row item object.',
      index: 'The index of the row being clicked (starts at 0) in the current filtering state.'
    }
  },
  'row-select': {
    description: '<strong>This event fires on both selecting and unselecting a row</strong> (so you need only one listener for both), and a boolean is returned to know the selected state.',
    params: {
      item: 'The associated row item object.',
      index: 'The index of the row being selected (starts at 0) in the current filtering state.',
      selected: 'A boolean representing the selected state of the clicked row.',
      selectedRows: 'An array containing all the expanded rows objects.'
    }
  },
  'row-expand': {
    description: '<strong>This event fires on both expanding and collapsing a row</strong> (so you need only one listener for both), and a boolean is returned to know the expanded state.',
    params: {
      item: 'The associated row item object.',
      index: 'The index of the row being expanded (starts at 0) in the current filtering state.',
      expanded: 'A boolean representing the expanded state of the clicked row.',
      expandedRows: 'An array containing all the expanded rows objects.'
    }
  },
  'update:sort': {
    description: 'Emitted every time the sorting string is updated by a user interaction.',
    params: {
      '[String]': 'The currently applied sorting on the table rows. E.g. <code>+firstName</code>'
    }
  },
  'update:selected-rows': {
    description: 'Emitted every time the selected-rows array changes. To be used with <code>:selected-rows.sync</code> in Vue 2 or <code>v-model:selected-rows</code> in Vue 3.',
    params: {
      '[Array]': 'The current array of selected rows.'
    }
  },
  'update:expanded-rows': {
    description: 'Emitted every time the expanded-rows array changes. To be used with <code>:expanded-rows.sync</code> in Vue 2 or <code>v-model:expanded-rows</code> in Vue 3.',
    params: {
      '[Array]': 'The current array of expanded rows.'
    }
  },
  'column-resize': {
    description: 'Emitted on mouseup after a column has been resized.',
    params: {
      index: 'The index (starting from 0) of the resizer that was moved (also the index of the column on the left of the resizer).',
      widths: 'An array containing all the new widths of the columns after resizing.'
    }
  }
}

export default {
  data: () => ({
    propsDescs,
    slots
  }),

  computed: {
    // Reads all the props and events directly from the component, so that as soon as a new prop or event
    // is added it will appear even if no description is yet provided.
    props () {
      return WTable.props
    },
    events () {
      return WTable.emits.reduce((obj, label) => (obj[label] = events[label] || {}) && obj, {})
    }
  }
}
</script>
