<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  api(:items="slots" title="Slots")

  api(:items="events" title="Events")
</template>

<script>
import WDivider from '@/wave-ui/components/w-divider'

const propsDescs = {
  color: 'Provide a text color for the component. Accepts all the color names of the color palette, status colors, or custom colors (learn more about all the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex will not work.',
  vertical: 'When set to true, the divider will display vertically.'
}

const slots = {}

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
      return WDivider.props
    },
    events () {
      return WDivider.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
