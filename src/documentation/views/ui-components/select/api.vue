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
import WSelect from '@/wave-ui/components/w-select'

const propsDescs = {
  name: '',
  disabled: '',
  readonly: '',
  required: '',
  validators: ''
}

const slots = {}

const eventsDescs = {
  input: 'Emitted each time the state of the component changes. It updates the v-model value in Vue 2.x only.<br>An array of booleans is passed as a parameter (representing the expanded state of every accordion item).',
  'update:modelValue': 'Emitted each time the state of the component changes (when an item is expanded or collapsed). It updates the v-model value in Vue 3 only.<br>An array of booleans is passed as a parameter (representing the expanded state of every accordion item).',
  focus: 'Emitted on each item title focus. The focused item is returned as a parameter.'
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
      return WSelect.props
    },
    events () {
      return WSelect.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
