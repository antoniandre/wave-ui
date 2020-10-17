<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API
  alert.mb6(info) The props will soon be more detailed.

  api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  api(:items="slots" title="Slots")

  api(:items="events" title="Events")
</template>

<script>
import WTimeline from '@/wave-ui/components/w-timeline'

const propsDescs = {}

const slots = {
  item: {
    description: 'Provide a custom template for every item. Applies to all the items, but can be overridden by the <code>item.x</code> slot.',
    params: {
      item: 'The current item object.',
      index: 'The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.'
    }
  },
  'item.x': {
    description: '<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom template for a single item: the item at the index <em class="code">x</em>.',
    params: {
      item: 'The current item object.',
      index: 'The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.'
    }
  }
}

const eventsDescs = {}

export default {
  data: () => ({
    propsDescs,
    slots
  }),

  computed: {
    // Reads all the props and events directly from the component, so that as soon as a new prop or event
    // is added it will appear even if no description is yet provided.
    props () {
      return WTimeline.props
    },
    events () {
      return WTimeline.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
