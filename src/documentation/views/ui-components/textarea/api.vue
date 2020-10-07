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
import Wtextarea from '@/wave-ui/components/w-textarea'

const propsDescs = {
  value: '',
  label: '',
  labelPosition: '',
  innerIconLeft: '',
  innerIconRight: '',
  // When label is inside, allows to move the label above on focus or when filled.
  staticLabel: '',
  placeholder: '',
  color: '',
  bgColor: '',
  dark: '',
  outline: '',
  shadow: '',
  noAutogrow: '',
  resizable: '',
  tile: '',
  rows: '',
  cols: '',
  name: '',
  disabled: '',
  readonly: '',
  required: '',
  validators: ''
}

const slots = {
  default: { description: 'The label content, if the label prop is not flexible enough.' }
}

const eventsDescs = {
  input: 'Emitted each time the textarea text changes. It updates the v-model value in Vue 2.x only.<br>The new textarea value is passed as a parameter.',
  'update:modelValue': 'Emitted each time the textarea text changes. It updates the v-model value in Vue 3 only.<br>The new textarea value is passed as a parameter.',
  focus: 'Emitted on textarea focus. The focus DOM event is returned as a parameter.',
  blur: 'Emitted on textarea blur. The blur DOM event is returned as a parameter.',
  'click:inner-icon-left': 'Emitted on click of the left inner icon, if any.',
  'click:inner-icon-right': 'Emitted on click of the right inner icon, if any.'
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
      return { ...Wtextarea.props, ...FormElementMixin.props }
    },
    events () {
      return Wtextarea.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
