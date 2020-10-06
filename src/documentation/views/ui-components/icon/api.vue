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
import WIcon from '@/wave-ui/components/w-icon'

const propsDescs = {
  tag: '',
  color: '',
  bgColor: '',
  xs: '',
  sm: '',
  md: '',
  lg: '',
  xl: '',
  spin: '',
  rotate45: '',
  rotate90: '',
  rotate135: '',
  rotate180: '',
  rotate225: '',
  rotate270: '',
  rotate315: '',
  flipX: '',
  flipY: '',
  size: ''
}

const slots = {
  default: { description: 'Provide the icon to use as a string. E.g. `mdi mdi-home`.' }
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
      return WIcon.props
    },
    events () {
      return WIcon.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
