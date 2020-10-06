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
import WDrawer from '@/wave-ui/components/w-drawer'

const propsDescs = {
  value: '',
  left: '',
  right: '',
  top: '',
  bottom: '',
  persistent: '',
  persistentNoAnimation: '',
  fitContent: '',
  width: '',
  height: '',
  zIndex: '',
  color: '',
  bgColor: '',
  noOverlay: '',
  overlayColor: '',
  overlayOpacity: ''
}

const slots = {
  default: { description: 'The drawer content.' }
}

const eventsDescs = {
  input: 'Emitted on drawer close. It updates the v-model value in Vue 2.x only.',
  'update:modelValue': 'Emitted on drawer close. It updates the v-model value in Vue 3 only.',
  close: 'Emitted on drawer close.'
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
      return WDrawer.props
    },
    events () {
      return WDrawer.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
