<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API
  alert.mb6(info) The missing props descriptions will be added shortly (all the props are already listed).

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WTable from '@/wave-ui/components/w-table'

const propsDescs = {}

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
      item: 'The full item object of to the row being rendered.',
      index: 'The index of the row being rendered. Starts at 1.',
      select: 'When using <code>selectable-rows</code>: the select function to call on &lt;tr&gt; click (or on a custom event).',
      classes: 'The internally computed CSS classes to apply to this &lt;tr&gt;. Given as an object.'
    }
  },
  'item-cell': {
    description: 'Provide a custom item cell template (each &lt;td&gt; of each item row).',
    params: {
      item: 'The full item object of to the row being rendered.',
      header: 'The related header object of the current column of the cell being rendered.',
      label: 'The content of the cell being rendered.',
      index: 'The index of the cell in the row being rendered. Starts at 1.'
    }
  }
}

const events = {
  'row-click': {
    description: '',
    params: {
      'item': 'The associated row item object.',
      'index': 'The index of the row being clicked (starts at 0) in the current filtering state.'
    }
  },
  'row-select': {
    description: '<strong>This event fires on both selecting and unselecting a row</strong> (so you need only one listener for both), and a boolean is returned to know the selected state.',
    params: {
      item: 'The associated row item object.',
      index: 'The index of the row being selected (starts at 0) in the current filtering state.',
      selected: 'A boolean representing the selected state of the clicked row.',
      selectedRows: ''
    }
  },
  'row-expand': {
    description: '<strong>This event fires on both expanding and collapsing a row</strong> (so you need only one listener for both), and a boolean is returned to know the expanded state.',
    params: {
      item: 'The associated row item object.',
      index: 'The index of the row being expanded (starts at 0) in the current filtering state.',
      selected: 'A boolean representing the selected state of the clicked row.',
      selectedRows: ''
    }
  },
  'update:sort': {
    description: 'Emitted every time the sorting string is updated by a user interaction.',
    params: {
      '[String]': 'The currently applied sorting on the table rows. E.g. <code>+firstName</code>'
    }
  },
  'update:selected-rows': {
    description: 'Emitted every time the selected-rows array changes. To be used with <code>:selected-rows.sync</code> on Vue 2.x or <code>v-model:selected-rows</code> on Vue 3.',
    params: {
      '[Array]': 'The current array of selected rows.'
    }
  },
  'update:expanded-rows': {
    description: 'Emitted every time the expanded-rows array changes. To be used with <code>:expanded-rows.sync</code> on Vue 2.x or <code>v-model:expanded-rows</code> on Vue 3.',
    params: {
      '[Array]': 'The current array of expanded rows.'
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
