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
import WCard from '@/wave-ui/components/w-card'

const propsDescs = {
  color: '',
  bgColor: '',
  shadow: '',
  noBorder: '',
  tile: '',
  title: '',
  titleClass: '',
  contentClass: ''
}

const slots = {
  title: { description: 'The card title, if the <code>title</code> prop isn\'t flexible enough.' },
  default: { description: 'The card content.' },
  actions: { description: 'Some card actions that will be displayed at the bottom of the card.<br>Has a flex layout.' }
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
      return WCard.props
    },
    events () {
      return WCard.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
