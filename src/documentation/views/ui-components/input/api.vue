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
import WInput from '@/wave-ui/components/w-input'

const propsDescs = {
  value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>',
  type: '',
  label: 'Sets a visible label for the component.',
  labelPosition: 'Sets the position of the label to one of the following positions: \'left\', \'right\', \'inside\'.',
  innerIconLeft: '',
  innerIconRight: '',
  staticLabel: '',
  placeholder: 'Provide a placeholder for the input field. If a label is positioned inside, it will be moved above the field so it doesn\'t overlap.',
  color: 'Applies a color to the input field\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a color to the input field\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  minlength: '',
  maxlength: '',
  step: '',
  min: '',
  max: '',
  dark: false, // Hide the prop. 'When set to true, the text color will be set to white.',
  outline: 'The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.',
  round: 'Sets a maximum border-radius on the corners of the input field, giving it a round look.',
  shadow: 'Applies a drop shadow to the input field.',
  tile: 'Removes the default border-radius and sets sharp edges on the input field.',
  name: 'Provide a native HTML <code>name</code> attribute to the input field. If not provided, a unique name will be computed.',
  disabled: 'Disables the input field making it unreactive to user interactions.',
  readonly: 'The input field will still look like an interactive input field except that it is read-only: its current value cannot be changed by user interaction.',
  required: 'Applies the native HTML <code>required</code> attribute to the input field.',
  validators: '<span class="deep-orange">Only for validation, when the input field is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the input field. Each function will be executed on input field validation and should return true when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the input field.'
}

const slots = {
  default: { description: 'The label content, if the label prop is not flexible enough.' }
}

const eventsDescs = {
  input: 'Emitted each time the input text changes. It updates the v-model value in Vue 2.x only.<br>The new input value is passed as a parameter.',
  'update:modelValue': 'Emitted each time the input text changes. It updates the v-model value in Vue 3 only.<br>The new input value is passed as a parameter.',
  focus: 'Emitted on input focus. The focus DOM event is returned as a parameter.',
  blur: 'Emitted on input blur. The blur DOM event is returned as a parameter.',
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
      return { ...WInput.props, ...FormElementMixin.props }
    },
    events () {
      return WInput.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
