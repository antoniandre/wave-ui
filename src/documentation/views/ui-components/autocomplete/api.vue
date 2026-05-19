<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")

  component-api(:items="methods" title="Methods")
</template>

<script>
import FormElementMixin from '@/wave-ui/mixins/form-elements'
import WAutocomplete from '@/wave-ui/components/w-autocomplete.vue'

const propsDescs = {
  // Data props.
  items: 'Expecting an array of objects. Each object being an autocomplete option, it should include at least a <code>label</code> attribute (or the property specified by <code>item-label-key</code>).',
  modelValue: '<strong class="error"><code>value</code> in Vue 2.</strong><br>The current selection. A single value when not using <code>multiple</code>, or an array of values otherwise.<br>Gets updated on item selection/unselection.',
  placeholder: 'Provide a placeholder for the autocomplete field. If a floating label is present, it will be moved above the field so it doesn\'t overlap.',
  openOnKeydown: 'When set, the dropdown menu only opens when the user starts typing, rather than on focus or click.',
  multiple: 'Allows multiple items to be selected. Selected items are displayed as removable chips.',
  allowDuplicates: 'When <code>multiple</code> is enabled, allows the same item to be added more than once.',
  noMatch: 'A string to display in the dropdown when no item matches the current keyword. Defaults to <code>No match.</code>.',
  itemLabelKey: 'The property name in each item object where to find the item\'s display label.',
  itemValueKey: 'The property name in each item object where to find the item\'s unique value.',
  itemSearchableKey: 'The property name in each item object where to find the item\'s searchable string. This may be an aggregation of multiple fields — e.g. symbol, name, and atomic number — for richer matching. Falls back to <code>item-label-key</code> when absent.',

  // Appearance props.
  label: 'Sets a visible label for the autocomplete field.',
  labelPosition: 'Sets the position of the label: <code>\'inside\'</code> (default, floating), <code>\'left\'</code>, or <code>\'right\'</code>.',
  staticLabel: 'Prevents moving the label above the field when <code>labelPosition</code> is <code>\'inside\'</code>. When a selection is made the static label is replaced by the chip(s).',
  innerIconLeft: 'Adds an icon on the left inside the autocomplete field. Accepts an icon string: e.g. <code>mdi mdi-magnify</code> or <code>wi-search</code>.',
  innerIconRight: 'Adds an icon on the right inside the autocomplete field. Accepts an icon string: e.g. <code>wi-cross</code>.',
  color: 'Applies a color to the autocomplete field\'s text and focus indicator. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a color to the autocomplete field\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  labelColor: 'Applies a specific color to the autocomplete field\'s label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all Wave UI color names.',
  outline: 'The outline style applies the provided <code>color</code> to the text and border and no background color is set.',
  round: 'Sets a maximum border-radius on the corners of the field, giving it a pill/round look.',
  shadow: 'Applies a drop shadow to the autocomplete field.',
  tile: 'Removes the default border-radius and sets sharp edges on the field.',
  dark: false, // Hide the prop.
  light: false, // Hide the prop.
  fitToContent: 'Fits the autocomplete field width to its content rather than growing to fill the container.',
  menuClass: 'Applies a custom CSS class to the floating dropdown menu element.',
  menuProps: 'Passes additional props down to the internal <strong class="code">w-menu</strong> component.<br>For example: <code>:menu-props="{ appendTo: \'.my-scroll-container\' }"</code> moves the dropdown to a different DOM target.',

  // Sizes.
  xs: 'Extra-small size preset.',
  sm: 'Small size preset.',
  md: 'Medium size preset (default).',
  lg: 'Large size preset.',
  xl: 'Extra-large size preset.',

  // Form element mixin props.
  id: 'Sets an explicit DOM <code>id</code> on the input. If omitted, a stable id is auto-generated with Vue\'s <code>useId()</code>.',
  name: 'Provides a native HTML <code>name</code> attribute to the input field. If omitted, a stable unique value is generated.',
  disabled: 'Disables the autocomplete field making it unreactive to user interactions.',
  readonly: 'The field will still look interactive but its current value cannot be changed by user interaction.',
  required: 'Applies the native HTML <code>required</code> attribute to the input field.',
  tabindex: 'Sets the <code>tabindex</code> on the underlying input element.',
  validators: '<span class="deep-orange">Only for validation, when the field is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the field. Each function receives the current value and should return <code>true</code> when valid, or a string containing an error message when invalid.',
  noBlurValidation: '<span class="deep-orange">Only when the field is in a <strong class="code">w-form</strong> with <code>validators</code>.</span><br>When <code>true</code>, blur does not validate this field. When <code>false</code>, blur always validates even if the form has <code>no-blur-validation</code>. When unset, inherits the form setting.'
}

const slots = {
  default: {
    description: 'The label content, when the <code>label</code> prop is not flexible enough.'
  },
  selection: {
    description: 'Provide a custom template for each selected chip.',
    params: {
      item: 'The selected item object.',
      unselect: 'A function — call it to remove this chip from the selection.'
    }
  },
  item: {
    description: 'Provide a custom template for each item in the dropdown list.',
    params: {
      item: 'The current item object.',
      highlighted: 'A Boolean indicating whether this item is currently keyboard-highlighted.'
    }
  },
  'no-match': {
    description: 'Provide a custom "No match" message displayed in the dropdown when no item matches the current keyword.<br>Default: <code>No match.</code>'
  },
  'extra-item': {
    description: 'Provide a persistent extra entry appended at the bottom of the dropdown list (e.g. "Add new…"). Selecting it emits the <code>extra-item-select</code> event.'
  },
  'icon-left': {
    description: 'The left icon content, when the <code>innerIconLeft</code> prop is not flexible enough.'
  },
  'icon-right': {
    description: 'The right icon content, when the <code>innerIconRight</code> prop is not flexible enough.'
  }
}

const events = {
  input: {
    description: 'Emitted each time the selection changes.<br>Updates the v-model value in Vue 2.x only.',
    params: {
      '[string, number, Array, null]': 'The new selected value(s). Array of values if <code>multiple</code> is <code>true</code>, single value otherwise. <code>null</code> when the selection is cleared.'
    }
  },
  'update:modelValue': {
    description: 'Emitted each time the selection changes.<br>Updates the v-model value in Vue 3.',
    params: {
      '[string, number, Array, null]': 'The new selected value(s). Array of values if <code>multiple</code> is <code>true</code>, single value otherwise. <code>null</code> when the selection is cleared.'
    }
  },
  focus: {
    description: 'Emitted on autocomplete input focus.',
    params: {
      '[DOM FocusEvent]': 'The associated focus DOM event.'
    }
  },
  blur: {
    description: 'Emitted on autocomplete input blur (unless the user clicked inside the dropdown).',
    params: {
      '[DOM FocusEvent]': 'The associated blur DOM event.'
    }
  },
  keydown: {
    description: 'Emitted on every keydown event in the input field.',
    params: {
      '[DOM KeyboardEvent]': 'The associated keydown DOM event.'
    }
  },
  'item-click': {
    description: 'Emitted when the user clicks a dropdown list item.',
    params: {
      '[Object]': 'The clicked item object.'
    }
  },
  'item-select': {
    description: 'Emitted when an item is selected (via click or <kbd>Enter</kbd> keydown).',
    params: {
      '[Object]': 'The selected item object.'
    }
  },
  'extra-item-select': {
    description: 'Emitted when the user selects the <code>extra-item</code> slot entry.'
  },
  'click:inner-icon-left': {
    description: 'Emitted on click of the left inner icon, if any.',
    params: {
      '[DOM MouseEvent]': 'The associated click DOM event.'
    }
  },
  'click:inner-icon-right': {
    description: 'Emitted on click of the right inner icon, if any.',
    params: {
      '[DOM MouseEvent]': 'The associated click DOM event.'
    }
  }
}

const methods = {
  focus: {
    description: 'Focuses the inner native control. Also runs when the <code>v-focus</code> directive is used. Callable via <code>this.$refs.field.focus()</code>. No-op when <code>disabled</code> or <code>readonly</code>.'
  }
}

export default {
  data: () => ({
    propsDescs,
    slots,
    methods
  }),

  computed: {
    props () {
      return { ...WAutocomplete.props, ...FormElementMixin.props }
    },
    events () {
      return WAutocomplete.emits.reduce((obj, label) => {
        obj[label] = events[label] || {}
        return obj
      }, {})
    }
  }
}
</script>
