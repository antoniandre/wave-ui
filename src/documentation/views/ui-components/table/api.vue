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
    description: 'Provide a custom item template (each cell in each item row).',
    params: {
      item: 'The full item object of to the row being rendered.',
      header: 'The related header object of the current column of the cell being rendered.',
      label: 'The content of the cell being rendered.',
      index: 'The index of the cell in the row being rendered. Starts at 1.'
    }
  },
}

const events = {}

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
