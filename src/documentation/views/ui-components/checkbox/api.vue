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
import FormElementMixin from '@/wave-ui/mixins/form-elements'
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
    round: 'Sets a maximum border-radius on the corners of the component, giving it a round look.',
    color: 'Applies a color to the active checkboxes. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
    name: '',
    disabled: '',
    readonly: '',
    required: '',
    validators: ''
  },
  slots: {
    item: { description: 'Provide a custom content for each checkbox label.' }
  },
  eventsDescs: {
    input: 'Emitted each time any of the checkboxes is toggled. It updates the v-model value in Vue 2.x only.<br>An array of return-value of each checked checkbox is passed as a parameter.<br>A return-value is, in this order (if they exist), either: the item value, the item label, the item index.',
    'update:modelValue': 'Emitted each time any of the checkboxes is toggled. It updates the v-model value in Vue 3 only.<br>An array of return-value of each checked checkbox is passed as a parameter.<br>A return-value is, in this order (if they exist), either: the item value, the item label, the item index.',
    focus: 'Emitted on each checkbox focus. The focus DOM event is returned as a parameter.'
  }
}

const checkbox = {
  propsDescs: {
    value: '',
    returnValue: '',
    label: '',
    labelOnLeft: '',
    color: 'Applies a color to the checkbox when active. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
    noRipple: '',
    indeterminate: '',
    round: 'Sets a maximum border-radius on the corners of the component, giving it a round look.',
    name: '',
    disabled: '',
    readonly: '',
    required: '',
    validators: ''
  },
  slots: {
    default: { description: 'The checkbox label content.' }
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
      return { ...WCheckboxes.props, ...FormElementMixin.props }
    },
    checkboxProps () {
      return { ...WCheckbox.props, ...FormElementMixin.props }
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
