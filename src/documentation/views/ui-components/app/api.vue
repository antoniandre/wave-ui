<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WApp from '@/wave-ui/components/w-app.vue'

const propsDescs = {
  block: 'Sets the layout to <code>display: block</code>. By default the layout is: <code>display: flex</code>, <code>flex-direction: column</code>.',
  row: 'Sets the layout to display in a row when using the default flex layout (column by default).',
  alignCenter: 'Applies the CSS property: <code>align-items: center;</code>.',
  alignEnd: 'Applies the CSS property: <code>align-items: flex-end;</code>.',
  justifyCenter: 'Applies the CSS property: <code>justify-content: center;</code>.',
  justifyEnd: 'Applies the CSS property: <code>justify-content: end;</code>.',
  justifySpaceBetween: 'Applies the CSS property: <code>justify-content: space-between;</code>.',
  justifySpaceAround: 'Applies the CSS property: <code>justify-content: space-around;</code>.',
  justifySpaceEvenly: 'Applies the CSS property: <code>justify-content: space-evenly;</code>.',
  textCenter: 'Applies the CSS property: <code>text-align: center;</code>.',
  textRight: 'Applies the CSS property: <code>text-align: right;</code>.'
}

const slots = {
  default: { description: 'The content of the app.' }
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
      return WApp.props
    },
    events () {
      return (WApp.emits || []).reduce((obj, label) => {
        obj[label] = { description: eventsDescs[label] || '' }
        return obj
      }, {})
    }
  }
}
</script>
