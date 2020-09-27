<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  api.mt0(:items="props" :descriptions="propsDescriptions" title="Props")

  api(:items="slots" title="Slots")

  api(:items="events" title="Events")
</template>

<script>
import WOverlay from '@/wave-ui/components/w-overlay'

const propsDescriptions = {
}

const slots = {}

const events = {}

export default {
  data: () => ({
    propsDescriptions,
    slots,
    events
  }),

  computed: {
    props () {
      return WOverlay.props
    }
  }
}
</script>
