<template lang="pug">
div
  .w-divider.my12
  //- w-checkboxes.
  title-link.title1(h2 slug="w-checkboxes-api") &lt;w-checkboxes&gt; API
  alert.mb6(info) The props will soon be more detailed.

  api.mt0(:items="checkboxesProps" :descriptions="checkboxes.propsDescs" title="Props")

  api(:items="checkboxes.slots" title="Slots")

  api(:items="checkboxesEvents" title="Events")

  .w-divider.my12

  //- w-checkbox.
  title-link.title1(h2 slug="w-checkbox-api") &lt;w-checkbox&gt; API
  api.mt0(:items="checkboxProps" :descriptions="checkbox.propsDescs" title="Props")

  api(:items="checkbox.slots" title="Slots")

  api(:items="checkboxEvents" title="Events")
</template>

<script>
import WCheckboxes from '@/wave-ui/components/w-checkboxes'
import WCheckbox from '@/wave-ui/components/w-checkbox'

const checkboxes = {
  propsDescs: {
    items: '',
    value: '',
    labelOnLeft: '',
    itemLabel: '',
    itemValue: '',
    itemColor: '',
    inline: '',
    round: '',
    color: '',
    name: '',
    disabled: '',
    readonly: '',
    required: '',
    validators: ''
  },
  slots: {
    item: { description: '' }
  },
  eventsDescs: {
    input: 'Emitted each time any of the checkboxes is toggled. It updates the v-model value in Vue 2.x only.<br>An array of boolean representing the current state of each checkbox is passed as a parameter.',
    'update:modelValue': 'Emitted each time any of the checkboxes is toggled. It updates the v-model value in Vue 3 only.<br>An array of boolean representing the current state of each checkbox is passed as a parameter.',
    focus: 'Emitted on each checkbox focus. The focus DOM event is returned as a parameter.'
  }
}

const checkbox = {
  propsDescs: {
    value: '',
    returnValue: '',
    label: '',
    labelOnLeft: '',
    color: '',
    noRipple: '',
    indeterminate: '',
    round: '',
    name: '',
    disabled: '',
    readonly: '',
    required: '',
    validators: ''
  },
  slots: {
    default: { description: '' }
  },
  eventsDescs: {
    input: 'Emitted each time the state of the checkbox changes. It updates the v-model value in Vue 2.x only.<br>A boolean for the current state is passed as a parameter.',
    'update:modelValue': 'Emitted each time the state of the checkbox changes. It updates the v-model value in Vue 3 only.<br>A boolean for the current state is passed as a parameter.',
    focus: 'Emitted on each checkbox focus. The focus DOM event is returned as a parameter.'
  }
}

export default {
  data: () => ({
    checkboxes,
    checkbox
  }),

  computed: {
    // Reads all the props and events directly from the component, so that as soon as a new prop or event
    // is added it will appear even if no description is yet provided.
    checkboxesProps () {
      return WCheckboxes.props
    },
    checkboxProps () {
      return WCheckbox.props
    },
    checkboxesEvents () {
      return WCheckboxes.emits.reduce((obj, label) => (obj[label] = { description: checkboxes.eventsDescs[label] || '' }) && obj, {})
    },
    checkboxEvents () {
      return WCheckbox.emits.reduce((obj, label) => (obj[label] = { description: checkbox.eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
