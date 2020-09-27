<template lang="pug">
div
  .w-divider.my12

  //- w-radios.
  title-link.title1(h2 slug="w-radios-api") &lt;w-radios&gt; API
  alert.mb6(info) This API will soon be more detailed.

  api.mt0(:items="radiosProps" :descriptions="radios.propsDesc" title="Props")

  api(:items="radios.slots" title="Slots")

  api(:items="radios.events" title="Events")

  //- w-radio.
  title-link.title1(h2 slug="w-radio-api") &lt;w-radio&gt; API

  api.mt0(:items="radioProps" :descriptions="radio.propsDesc" title="Props")

  api(:items="radio.slots" title="Slots")

  api(:items="radio.events" title="Events")
</template>

<script>
import WRadios from '@/wave-ui/components/w-radios'
import WRadio from '@/wave-ui/components/w-radio'

const radios = {
  propsDesc: {},
  slots: {},
  events: {}
}

const radio = {
  propsDesc: {},
  slots: {},
  events: {}
}

export default {
  data: () => ({
    radios,
    radio
  }),

  computed: {
    radiosProps () {
      return WRadios.props
    },
    radioProps () {
      return WRadio.props
    }
  }
}
</script>
