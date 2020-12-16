<template lang="pug">
div
  .w-divider.my12
  //- w-checkboxes.
  title-link.title1(h2 slug="w-checkboxes-api") &lt;w-checkboxes&gt; API

  component-api.mt0(:items="checkboxesProps" :descriptions="checkboxes.propsDescs" title="Props")

  component-api(:items="checkboxes.slots" title="Slots")

  component-api(:items="checkboxesEvents" title="Events")

  .w-divider.my12

  //- w-checkbox.
  title-link.title1(h2 slug="w-checkbox-api") &lt;w-checkbox&gt; API
  component-api.mt0(:items="checkboxProps" :descriptions="checkbox.propsDescs" title="Props")

  component-api(:items="checkbox.slots" title="Slots")

  component-api(:items="checkboxEvents" title="Events")
</template>

<script>
import FormElementMixin from '@/wave-ui/mixins/form-elements'
import WCheckboxes from '@/wave-ui/components/w-checkboxes'
import WCheckbox from '@/wave-ui/components/w-checkbox'

const checkboxes = {
  propsDescs: {
    items: 'An array of checkbox items to display. Each item object should contain at least a <code>label</code> or a <code>value</code> attribute.',
    value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Provide an array of values to dictate the checked state of all the checkboxes.<br>This value gets updated when using a v-model.',
    labelOnLeft: 'Moves the label to the left of each checkbox.',
    itemLabelKey: 'The property name (aka key) in each item object where to find the label of the item (if any).',
    itemValueKey: 'The property name (aka key) in each item object where to find the value of the item (if any).',
    itemColorKey: 'The property name (aka key) in each item object where to find the color of the item (if any).',
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
  events: {
    input: {
      description: 'Emitted each time any of the checkboxes is toggled.<br>Updates the v-model value in Vue 2.x only.',
      params: {
        '[Array]': 'Array of <code>return-value</code> of each checked checkbox.<br>The <code>return-value</code> is one of the following attributes, if they exist, in this order: the item value, the item label, the item index.'
      }
    },
    'update:modelValue': {
      description: 'Emitted each time any of the checkboxes is toggled.<br>Updates the v-model value in Vue 3 only.',
      params: {
        '[Array]': 'Array of <code>return-value</code> of each checked checkbox.<br>The <code>return-value</code> is one of the following attributes, if they exist, in this order: the item value, the item label, the item index.'
      }
    },
    focus: {
      description: 'Emitted on each checkbox focus.',
      params: {
        '[DOM event object]': 'The associated focus DOM event.'
      }
    }
  }
}

const checkbox = {
  propsDescs: {
    value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Provide a boolean to dictate the checked state the checkbox.<br>This value gets updated when using a v-model.',
    returnValue: 'Since the native HTML checkbox element uses the <code>value</code> attribute to define the checked state, the <code>return-value</code> prop let you specify a value to return to the <code>v-model</code> when the checkbox is checked (instead of returning <code>true</code>).',
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
  events: {
    input: {
      description: 'Emitted each time the state of the checkbox changes.<br>Updates the v-model value in Vue 2.x only.',
      params: {
        '[Boolean]': 'The current state of the checkbox.'
      }
    },
    'update:modelValue': {
      description: 'Emitted each time the state of the checkbox changes.<br>Updates the v-model value in Vue 3 only.',
      params: {
        '[Boolean]': 'The current state of the checkbox.'
      }
    },
    focus: {
      description: 'Emitted on each checkbox focus.',
      params: {
        '[DOM event object]': 'The associated focus DOM event.'
      }
    }
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
      return WCheckboxes.emits.reduce((obj, label) => (obj[label] = checkboxes.events[label] || {}) && obj, {})
    },
    checkboxEvents () {
      return WCheckbox.emits.reduce((obj, label) => (obj[label] = checkbox.events[label] || {}) && obj, {})
    }
  }
}
</script>
