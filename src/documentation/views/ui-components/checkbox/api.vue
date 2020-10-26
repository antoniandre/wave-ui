<template lang="pug">
div
  .w-divider.my12
  //- w-checkboxes.
  title-link.title1(h2 slug="w-checkboxes-api") &lt;w-checkboxes&gt; API
  alert.mb6(info) The missing props descriptions will be added shortly (all the props are already listed).

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
    value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>',
    labelOnLeft: 'Moves the label to the left of each checkbox.',
    itemLabelKey: 'The property name (aka key) in each item object where to find the label of the item.',
    itemValueKey: 'The property name (aka key) in each item object where to find the value of the item.',
    itemColorKey: 'The property name (aka key) in each item object where to find the color of the item.',
    inline: 'Displays all the checkboxes inline instead of in column.',
    round: 'Displays round checkboxes instead of square ones.',
    color: 'Applies a color to the active checkbox. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
    name: 'Provide a native HTML <code>name</code> attribute to the checkbox. If not provided, a unique common name will be computed and applied to all the checkboxes.',
    disabled: 'Disables all the checkboxes making them unreactive to user interactions.',
    readonly: 'The checkbox will still look like an interactive checkbox except that it is read-only: its current value cannot be changed by user interaction.',
    required: 'Applies the native HTML <code>required</code> attribute to each checkbox.',
    validators: '<span class="deep-orange">Only for validation, when the <strong class="code">w-checkboxes</strong> component is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the checkbox. Each function will be executed on checkbox validation and should return true when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the checkbox.'
  },
  slots: {
    item: { description: 'Provide a custom content for each checkbox label.' }
  },
  eventsDescs: {
    input: 'Emitted each time any of the checkboxes is toggled.<br>Updates the v-model value in Vue 2.x only.<br>An array of return-value of each checked checkbox is passed as a parameter.<br>A return-value is, in this order (if they exist), either: the item value, the item label, the item index.',
    'update:modelValue': 'Emitted each time any of the checkboxes is toggled.<br>Updates the v-model value in Vue 3 only.<br>An array of return-value of each checked checkbox is passed as a parameter.<br>A return-value is, in this order (if they exist), either: the item value, the item label, the item index.',
    focus: 'Emitted on each checkbox focus. The focus DOM event is returned as a parameter.'
  }
}

const checkbox = {
  propsDescs: {
    value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>',
    returnvalue: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>',
    label: 'Sets a visible label for the checkbox.',
    labelOnLeft: 'Moves the label to the left of the checkbox. By default the label is displayed on the right.',
    color: 'Applies a color to the checkbox when active. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
    noRipple: 'Removes the ripple animation on check.',
    indeterminate: 'Applies an indeterminate state on the checkbox. E.g. when it represents the selected state of a collection of elements where some are checked and some not.',
    round: 'Displays a round checkbox instead of a square one.',
    name: 'Provide a native HTML <code>name</code> attribute to the checkbox. If not provided, a unique name will be computed.',
    disabled: 'Disables the checkbox making it unreactive to user interactions.',
    readonly: 'The checkbox will still look like an interactive checkbox except that it is read-only: its current value cannot be changed by user interaction.',
    required: 'Applies the native HTML <code>required</code> attribute to the checkbox.',
    validators: '<span class="deep-orange">Only for validation, when the checkbox is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the checkbox. Each function will be executed on checkbox validation and should return true when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the checkbox.'
  },
  slots: {
    default: { description: 'The checkbox label content.' }
  },
  eventsDescs: {
    input: 'Emitted each time the state of the checkbox changes.<br>Updates the v-model value in Vue 2.x only.<br>A boolean for the current state is passed as a parameter.',
    'update:modelValue': 'Emitted each time the state of the checkbox changes.<br>Updates the v-model value in Vue 3 only.<br>A boolean for the current state is passed as a parameter.',
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
