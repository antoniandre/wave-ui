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
import WAlert from '@/wave-ui/components/w-alert'

const propsDescs = {
  value: '',
  color: '',
  bgColor: '',
  shadow: '',
  tile: '',
  round: '',
  icon: '',
  iconOutside: '',
  plain: '',
  dismiss: '',
  success: '',
  info: '',
  warning: '',
  error: '',
  xs: '',
  sm: '',
  md: '',
  lg: '',
  xl: '',
  noBorder: '',
  borderLeft: '',
  borderRight: '',
  borderTop: '',
  borderBottom: '',
  outline: ''
}

const slots = {
  content: { description: 'The alert content.' }
}

const eventsDescs = {
  input: 'Emitted on alert dismiss/hide. It updates the v-model value in Vue 2.x only.',
  'update:modelValue': 'Emitted on alert dismiss/hide. It updates the v-model value in Vue 3 only.',
  close: 'Emitted on alert dismiss/hide.',
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
      return WAlert.props
    },
    events () {
      return WAlert.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
