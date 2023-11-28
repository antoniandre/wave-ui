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
import WAutocomplete from '@/wave-ui/components/w-autocomplete.vue'

const propsDescs = {}

const slots = {
  'no-match': {
    description: 'Provide a custom "No match" message to display in the selection menu when there is no match.<br>Default message is <code>No match.</code>.'
  }
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
      return WAutocomplete.props
    },
    events () {
      return WAutocomplete.emits.reduce((obj, label) => (obj[label] = events[label] || {}) && obj, {})
    }
  }
}
</script>
