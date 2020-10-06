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
import WBadge from '@/wave-ui/components/w-badge'

const propsDescs = {
  value: '',
  xs: '',
  sm: '',
  md: '',
  lg: '',
  xl: '',
  top: '',
  left: '',
  right: '',
  bottom: '',
  overlap: '',
  inline: '',
  color: '',
  size: '',
  bgColor: '',
  dark: '',
  badgeClass: '',
  outline: '',
  shadow: '',
  dot: '',
  round: '',
  transition: ''
}

const slots = {
  default: { description: 'The element receiving the badge. Can be any visible DOM element or mounted component.' },
  badge: { description: 'The badge content.' }
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
      return WBadge.props
    },
    events () {
      return WBadge.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
