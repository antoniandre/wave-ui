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
  value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>',
  label: 'Sets a visible label for the textarea.',
  labelPosition: 'Sets the position of the label to one of the following positions: \'left\', \'right\', \'inside\'.',
  innerIconLeft: '',
  innerIconRight: '',
  // When label is inside, allows to move the label above on focus or when filled.
  staticLabel: '',
  placeholder: 'Provide a placeholder for the textarea. If a label is positioned inside, it will be moved above the textarea so it doesn\'t overlap.',
  color: 'Applies a color to the textarea\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a color to the textarea\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  dark: false, // Hide the prop. 'When set to true, the text color will be set to white.',
  outline: 'The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.',
  shadow: 'Applies a drop shadow to the textarea.',
  noAutogrow: 'Disables the ability to fit the textarea height to the content.<br>The height will not be smaller than the number of rows set via the <code>rows</code> prop.',
  resizable: 'Allows native resizing of the textarea\'s height.',
  tile: 'Removes the default border-radius and sets sharp edges on the textarea.',
  rows: 'The default and minimum number of rows to display in the textarea.',
  cols: 'Applies the native HTML <code>cols</code> attribute to the textarea.',
  name: 'Provide a native HTML <code>name</code> attribute to the textarea. If not provided, a unique name will be computed.',
  disabled: 'Disables the textarea making it unreactive to user interactions.',
  readonly: 'The textarea will still look like an interactive textarea except that it is read-only: its current content cannot be changed by user interaction.',
  required: 'Applies the native HTML <code>required</code> attribute to the textarea.',
  validators: '<span class="deep-orange">Only for validation, when the textarea is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the textarea. Each function will be executed on textarea validation and should return true when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the textarea.'
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
