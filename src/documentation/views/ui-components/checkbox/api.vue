<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API
  alert.mb6(info) This API will soon be more detailed.

  api.mt0(:items="props" :descriptions="propsDescriptions" title="Props")

  api(:items="slots" title="Slots")

  api(:items="events" title="Events")
</template>

<script>
import WCheckbox from '@/wave-ui/components/w-checkbox'

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
      return WCheckbox.props
    }
  }
}
</script>
