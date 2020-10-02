<template lang="pug">
div
  .w-divider.my12

  //- w-radios.
  title-link.title1(h2 slug="w-radios-api") &lt;w-radios&gt; API
  alert.mb6(info) This API will soon be more detailed.

  api.mt0(:items="radiosProps" :descriptions="radios.propsDescs" title="Props")

  api(:items="radios.slots" title="Slots")

  api(:items="radiosEvents" title="Events")

  //- w-radio.
  title-link.title1(h2 slug="w-radio-api") &lt;w-radio&gt; API

  api.mt0(:items="radioProps" :descriptions="radio.propsDescs" title="Props")

  api(:items="radio.slots" title="Slots")

  api(:items="radioEvents" title="Events")
</template>

<script>
import WRadios from '@/wave-ui/components/w-radios'
import WRadio from '@/wave-ui/components/w-radio'

const radios = {
  propsDescs: {},
  slots: {},
  eventsDescs: {}
}

const radio = {
  propsDescs: {},
  slots: {},
  eventsDescs: {}
}

export default {
  data: () => ({
    radios,
    radio
  }),

  computed: {
    // Reads all the props and events directly from the component, so that as soon as a new prop or event
    // is added it will appear even if no description is yet provided.
    radiosProps () {
      return WRadios.props
    },
    radioProps () {
      return WRadio.props
    },
    radiosEvents () {
      return WRadios.emits.reduce((obj, label) => (obj[label] = { description: radios.eventsDescs[label] || '' }) && obj, {})
    },
    radioEvents () {
      return WRadio.emits.reduce((obj, label) => (obj[label] = { description: radio.eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
