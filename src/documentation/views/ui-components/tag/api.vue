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
import WTag from '@/wave-ui/components/w-tag'

const propsDescs = {
  value: '',
  color: '',
  bgColor: '',
  dark: '',
  shadow: '',
  tile: '',
  round: '',
  closable: '',
  outline: '',
  xs: '',
  sm: '',
  md: '',
  lg: '',
  xl: '',
  width: '',
  height: ''
}

const slots = {
  default: { description: 'The tag content.' }
}

const eventsDescs = {
  input: 'For vue 2 only.<br>If a value or v-model is provided, the tag becomes toggleable on click.<br>On click, it updates the v-model value in Vue 2.x only.<br>The boolean value is passed as a parameter.',
  'update:modelValue': 'For vue 3 only.<br>If a model-value or v-model is provided, the tag becomes toggleable on click.<br>On click, it updates the v-model value in Vue 3 only.<br>The boolean value is passed as a parameter.',
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
      return WTag.props
    },
    events () {
      return WTag.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
