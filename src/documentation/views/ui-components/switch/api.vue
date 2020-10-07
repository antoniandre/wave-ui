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
import FormElementMixin from '@/wave-ui/mixins/form-elements'
import WSwitch from '@/wave-ui/components/w-switch'

const propsDescs = {
  value: '',
  label: '',
  labelOnLeft: '',
  color: '',
  thin: '',
  noRipple: '',
  name: '',
  disabled: '',
  readonly: '',
  required: '',
  validators: ''
}

const slots = {
  default: { description: 'The switch label content, if the label prop is not flexible enough.' }
}

const eventsDescs = {
    input: 'Emitted each time the state of the switch changes. It updates the v-model value in Vue 2.x only.<br>A boolean for the current state is passed as a parameter.',
    'update:modelValue': 'Emitted each time the state of the switch changes. It updates the v-model value in Vue 3 only.<br>A boolean for the current state is passed as a parameter.',
    focus: 'Emitted on switch focus. The focus DOM event is returned as a parameter.',
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
      return { ...WSwitch.props, ...FormElementMixin.props }
    },
    events () {
      return WSwitch.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
