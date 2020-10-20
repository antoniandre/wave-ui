<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API
  alert.mb6(info) The missing props descriptions will be added shortly (all the props are already listed).

  api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  api(:items="slots" title="Slots")

  api(:items="events" title="Events")
</template>

<script>
import FormElementMixin from '@/wave-ui/mixins/form-elements'
import WSelect from '@/wave-ui/components/w-select'

const propsDescs = {
  items: '',
  value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>',
  multiple: 'Allows multiple selections. When set to true, the list of choices will stay open after selecting an item.',
  placeholder: 'Provide a placeholder for the select field. If a label is positioned inside, it will be moved above the field so it doesn\'t overlap.',
  label: 'Sets a visible label for the select field.',
  labelPosition: 'Sets the position of the label to one of the following positions: \'left\', \'right\', \'inside\'.',
  innerIconLeft: '',
  innerIconRight: '',
  // When label is inside, allows to move the label above on focus or when filled.
  staticLabel: '',
  itemLabelKey: 'The property name (aka key) in each item object where to find the label of the item.',
  itemValueKey: 'The property name (aka key) in each item object where to find the value of the item.',
  itemClass: 'Applies a custom CSS class to each seelct list item.',
  menuClass: 'Applies a custom CSS class to the select list\'s floatting menu element.',
  color: 'Applies a color to the select\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a color to the select\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  outline: 'The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.',
  round: 'Sets a maximum border-radius on the corners of the select field, giving it a round look.',
  shadow: 'Applies a drop shadow to the select field.',
  tile: 'Removes the default border-radius and sets sharp edges on the select field.',
  dark: false, // Hide the prop. 'When set to true, the text color will be set to white.',
  returnObject: '',
  name: 'Provide a native HTML <code>name</code> attribute to the select field. If not provided, a unique name will be computed.',
  disabled: 'Disables the select field making it unreactive to user interactions.',
  readonly: 'The select field will still look like an interactive select field except that it is read-only: its current value cannot be changed by user interaction.',
  required: 'Applies the native HTML <code>required</code> attribute to the select field.',
  validators: '<span class="deep-orange">Only for validation, when the select field is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the select field. Each function will be executed on select field validation and should return true when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the select field.'
}

const slots = {
  default: { description: 'The label content, if the label prop is not flexible enough.' },
  selection: { description: 'Provide a custom template for the selection string.<br>This slot provides the parameter <code>item</code> containing the selected item(s) object(s). It may be an array if <code>multiple</code> is true, or a single object otherwise.' },
  item: { description: 'Provide a common custom template for all the list items.<br>This slot provides the parameter <code>item</code> containing the current item object.' },
}

const eventsDescs = {
  input: 'Emitted each time the selected item(s) changes. It updates the v-model value in Vue 2.x only.<br>The new selected value(s) is/are passed as a parameter.',
  'update:modelValue': 'Emitted each time the selected item(s) changes. It updates the v-model value in Vue 3 only.<br>The new selected value(s) is/are passed as a parameter.',
  focus: 'Emitted on select focus. The focus DOM event is returned as a parameter.',
  blur: 'Emitted on select blur. The blur DOM event is returned as a parameter.',
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
      return { ...WSelect.props, ...FormElementMixin.props }
    },
    events () {
      return WSelect.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
