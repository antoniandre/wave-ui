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
import WNotification from '@/wave-ui/components/w-notification'

const propsDescs = {
  value: '',
  transition: '',
  timeout: '',
  absolute: '',
  top: '',
  bottom: '',
  left: '',
  right: '',
  zIndex: '',
  success: '',
  info: '',
  warning: '',
  error: '',
  color: '',
  bgColor: '',
  shadow: '',
  tile: '',
  round: '',
  plain: '',
  noBorder: '',
  borderLeft: '',
  borderRight: '',
  borderTop: '',
  borderBottom: '',
  outline: '',
  dismiss: '',
  xs: '',
  sm: '',
  md: '',
  lg: '',
  xl: '',
}

const slots = {
  default: { description: 'The notification content.' }
}

const eventsDescs = {
  input: 'Emitted on notification dismiss/hide. It updates the v-model value in Vue 2.x only.',
  'update:modelValue': 'Emitted on notification dismiss/hide. It updates the v-model value in Vue 3 only.',
  close: 'Emitted on notification dismiss/hide.'
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
      return WNotification.props
    },
    events () {
      return WNotification.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
