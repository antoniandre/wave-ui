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
import WOverlay from '@/wave-ui/components/w-overlay'

const propsDescs = {}

const slots = {
  default: { description: 'The overlay content.' }
}

const eventsDescs = {
  input: 'Emitted on overlay hide. It updates the v-model value in Vue 2.x only.',
  'update:modelValue': 'Emitted on overlay hide. It updates the v-model value in Vue 3 only.',
  close: 'Emitted on overlay hide.',
  click: 'Emitted on every overlay click. Whether the <code>persistent</code> option is set to true or false.'
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
      return WOverlay.props
    },
    events () {
      return WOverlay.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
