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
import WDialog from '@/wave-ui/components/w-dialog'

const propsDescs = {
  value: '',
  width: '',
  fullscreen: '',
  persistent: '',
  persistentNoAnimation: '',
  tile: '',
  title: '',
  transition: '',
  titleClass: '',
  contentClass: '',
  overlayColor: '',
  overlayOpacity: ''
}

const slots = {
  title: { description: 'The dialog uses a <span class="code">w-card</span>. This slot allows a custom title for the <span class="code">w-card</span>.' },
  default: { description: 'The dialog content.' },
  actions: { description: 'The dialog uses a <span class="code">w-card</span>. This slot allows setting the actions slot of the <span class="code">w-card</span>.' }
}

const eventsDescs = {
  input: 'Emitted on dialog close. It updates the v-model value in Vue 2.x only.',
  'update:modelValue': 'Emitted on dialog close. It updates the v-model value in Vue 3 only.',
  close: 'Emitted on dialog close.',
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
      return WDialog.props
    },
    events () {
      return WDialog.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
