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
import WButton from '@/wave-ui/components/w-button'

const propsDescs = {
  color: '',
  bgColor: '',
  dark: '',
  outline: '',
  text: '',
  round: '',
  shadow: '',
  tile: '',
  to: '',
  forceLink: '',
  type: '',
  disabled: '',
  loading: '',
  icon: '',
  absolute: '',
  fixed: '',
  top: '',
  bottom: '',
  left: '',
  right: '',
  zIndex: '',
  width: '',
  height: '',
  xs: '',
  sm: '',
  md: '',
  lg: '',
  xl: ''
}

const slots = {
  default: { description: 'The button content.' },
  loading: { description: 'Provide a custom loading content, if the default spinner doesn\'t fit.' }
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
      return WButton.props
    },
    events () {
      return WButton.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
