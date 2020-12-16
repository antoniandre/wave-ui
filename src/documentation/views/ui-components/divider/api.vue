<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WDivider from '@/wave-ui/components/w-divider'

const propsDescs = {
  color: 'Provide a color for the divider. Accepts all the color names of the color palette, status colors, or custom colors (learn more about all the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  vertical: 'When set to true, the divider will display vertically.'
}

const slots = {
  default: { description: 'An optional HTML content to display in the middle of the divider.' }
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
      return WDivider.props
    },
    events () {
      return WDivider.emits.reduce((obj, label) => (obj[label] = events[label] || {}) && obj, {})
    }
  }
}
</script>
