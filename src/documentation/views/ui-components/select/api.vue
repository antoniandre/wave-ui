<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import FormElementMixin from '@/wave-ui/mixins/form-elements'
import WSelect from '@/wave-ui/components/w-select.vue'

const propsDescs = {
  items: 'Expecting an array of objects. Each object being a select list item, it should include at least a <code>label</code> attribute.',
  modelValue: '<strong class="error"><code>value</code> in Vue 2.</strong><br>The current selection of the select field.<br>Gets updated on selection change.',
  multiple: 'Allows multiple selections. When set to <code>true</code>, the list of choices will stay open after selecting an item.',
  placeholder: 'Provide a placeholder for the select field. If a label is positioned inside, it will be moved above the field so it doesn\'t overlap.',
  label: 'Sets a visible label for the select field.',
  labelPosition: 'Sets the position of the label to one of the following positions: \'left\', \'right\', \'inside\'.',
  innerIconLeft: 'Adds an icon on the left inside the select field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.',
  innerIconRight: 'Adds an icon on the right inside the select field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.',
  // When label is inside, allows to move the label above on focus or when filled.
  staticLabel: 'Prevents moving the label above the select field when the <code>labelPosition</code> is equal to <code>inside</code>. If a placeholder is present, it will be hidden and the label will be displayed instead.<br>When a value is set the static label is replaced by the textual value.',
  itemLabelKey: 'The property name (aka "key") in each item object where to find the label of the item.',
  itemColorKey: 'The property name (aka "key") in each item object where to find the color of the item.<br>By default, the <code>color</code> key of the current item will be used to render this item in this color.<br>You can also provide an empty string to disable this feature.',
  itemValueKey: 'The property name (aka "key") in each item object where to find the value of the item.',
  itemClass: 'Applies a custom CSS class to each select list item.',
  menuClass: 'Applies a custom CSS class to the select list\'s floating menu element.',
  menuProps: 'Internally, the <strong class="code">w-select</strong> component uses the <strong class="code">w-menu</strong> component.<br>This option allows you to pass down to the menu all the props that the <strong class="code">w-menu</strong> component can accept.<br>For instance, you could set <code>:menu-props="{ appendTo: \'.my-scrolling-container\' }"</code>, in order to move the select list floating menu to a particular DOM node, and allowing it to scroll with its container.',
  noUnselect: 'When set to <code>true</code>, forces the select list to always have at least one selected item.<br>For single select lists, it prevents unselecting the selected item but still allows switching selection.<br>For multiple select lists, it will only prevent unselecting the item when it\'s the only remaining selection. ',
  color: 'Applies a color to the select\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  labelColor: 'Applies a specific color to the select\'s label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a color to the select\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  outline: 'The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.',
  round: 'Sets a maximum border-radius on the corners of the select field, giving it a round look.',
  shadow: 'Applies a drop shadow to the select field.',
  tile: 'Removes the default border-radius and sets sharp edges on the select field.',
  fitToContent: 'Fits the select list width to its selected content.',
  dark: false, // Hide the prop. 'When set to true, the text color will be set to white.',
  returnObject: 'The current selection is returned via the <code>value</code> prop or <code>v-model</code> as an array of full objects or a single full object (returning the original as given) when <code>multiple</code> is set to false.',
  name: 'Provide a native HTML <code>name</code> attribute to the select field. If not provided, a unique name will be computed.',
  disabled: 'Disables the select field making it unreactive to user interactions.',
  readonly: 'The select field will still look like an interactive select field except that it is read-only: its current value cannot be changed by user interaction.',
  required: 'Applies the native HTML <code>required</code> attribute to the select field.',
  validators: '<span class="deep-orange">Only for validation, when the select field is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the select field. Each function will be executed on select field validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the select field.'
}

const slots = {
  default: { description: 'The label content, if the <code>label</code> prop is not flexible enough.' },
  selection: {
    description: 'Provide a custom template for the selection string.',
    params: {
      item: 'The selected item(s) object(s). May be an array if <code>multiple</code> is <code>true</code>, or a single object otherwise.'
    }
  },
  item: {
    description: 'Provide a common custom template for all the select list items.',
    params: {
      item: 'The current item object.',
      selected: 'A Boolean representing the selected state of the list item.',
      index: 'The index of the list item.'
    }
  },
  'item.x': {
    description: '<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single select list item: the item at the index <em class="code">x</em>.',
    params: {
      item: 'The current item object.',
      selected: 'A Boolean representing the selected state of the list item.',
      index: 'The index of the list item.'
    }
  },
  'icon-left': { description: 'The left icon, if the <code>innerIconLeft</code> prop is not flexible enough.<br/>' },
  'icon-right': { description: 'The right icon, if the <code>innerIconRight</code> prop is not flexible enough.' }
}

const events = {
  input: {
    description: 'Emitted each time the selected item(s) changes.<br>Updates the v-model value in Vue 2.x only.',
    params: {
      '[Array, Object, Mixed value]': 'The new selected value(s). Array if <code>multiple</code> is set to <code>true</code>, single value otherwise.'
    }
  },
  'update:modelValue': {
    description: 'Emitted each time the selected item(s) changes.<br>Updates the v-model value in Vue 3 only.',
    params: {
      '[Array, Object, Mixed value]': 'The new selected value(s). Array if <code>multiple</code> is set to <code>true</code>, single value otherwise.'
    }
  },
  focus: {
    description: 'Emitted on select focus.',
    params: {
      '[DOM event object]': 'The associated focus DOM event.'
    }
  },
  blur: {
    description: 'Emitted on select blur.',
    params: {
      '[DOM event object]': 'The associated blur DOM event.'
    }
  },
  'item-click': {
    description: 'Emitted on select list item click.',
    params: {
      '[Object]': 'The clicked item object.'
    }
  },
  'item-select': {
    description: 'Emitted on list item select (click or <kbd>enter</kbd> keydown).',
    params: {
      '[Object]': 'The selected item object.'
    }
  },
  'click:inner-icon-left': {
    description: 'Emitted on click of the left inner icon, if any.',
    params: {
      '[DOM event object]': 'The associated click DOM event.'
    }
  },
  'click:inner-icon-right': {
    description: 'Emitted on click of the right inner icon, if any.',
    params: {
      '[DOM event object]': 'The associated click DOM event.'
    }
  }
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
      return WSelect.emits.reduce((obj, label) => {
        obj[label] = events[label] || {}
        return obj
      }, {})
    }
  }
}
</script>
