<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WAutocomplete from '@/wave-ui/components/w-autocomplete.vue'

const propsDescs = {
  allowDuplicates: 'Allow duplicates',
  itemLabelKey: 'Specifies the name of the property in each item object where to find the item\'s label string to display.',
  itemSearchableKey: 'Specifies the name of the property in each item object where to find the item\'s searchable string. This may be an aggregation of multiple item properties that may be invisible but still useful in the search.',
  itemValueKey: 'Specifies the property name in each item object where to find the value of the item.',
  items: 'Expecting an array of objects. Each object being a select list item, it should include at least a <code>label</code> attribute.',
  modelValue: '<strong class="error"><code>value</code> in Vue 2.</strong><br>The current selection of the autocomplete.<br>Gets updated on item selection/unselection.',
  multiple: 'Allows multiple selections. When set to <code>true</code>, the list of choices will stay open after selecting an item.',
  noMatch: 'A string to display as a menu message when there is no match for the current keyword in the list of options.',
  openOnKeydown: 'Open the dropdown menu on keydown (when the autocomplete has the focus).',
  placeholder: 'Provide a placeholder for the autocomplete, to display when no keyword is entered and there is no selection.'
}

const slots = {
  'no-match': {
    description: 'Provide a custom "No match" HTML message to display in the selection menu when there is no match.<br>Default message is <code>No match.</code>.'
  },
  selection: {
    description: 'Provide a custom selection content/layout to display in each selection pill when one or multiple items are selected.'
  },
  item: {
    description: 'Provide a custom content/layout for each item of the dropdown menu.'
  },
  'extra-item': {
    description: 'Provide a custom content to display as an extra item of the dropdown menu, after the other options.'
  }
}

const events = {
  input: {
    description: 'Emitted each time the selected item(s) changes.<br>Updates the v-model value in Vue 2.x only.',
    params: {
      '[Array, Mixed value]': 'The new selected value(s). Array of values if <code>multiple</code> is set to <code>true</code>, or single value otherwise. The value refers to the value key of the selected item.'
    }
  },
  'update:modelValue': {
    description: 'Emitted each time the selected item(s) changes.<br>Updates the v-model value in Vue 3 only.',
    params: {
      '[Array, Mixed value]': 'The new selected value(s). Array of values if <code>multiple</code> is set to <code>true</code>, or single value otherwise. The value refers to the value key of the selected item.'
    }
  },
  focus: {
    description: 'Emitted on autocomplete focus.',
    params: {
      '[DOM event object]': 'The associated focus DOM event.'
    }
  },
  blur: {
    description: 'Emitted on autocomplete blur.',
    params: {
      '[DOM event object]': 'The associated blur DOM event.'
    }
  },
  'item-click': {
    description: 'Emitted on autocomplete list item click.',
    params: {
      '[Object]': 'The clicked item object.'
    }
  },
  'item-select': {
    description: 'Emitted on list item select (click or <kbd>enter</kbd> keydown).',
    params: {
      '[Object]': 'The selected item object.'
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
      return WAutocomplete.props
    },
    events () {
      return WAutocomplete.emits.reduce((obj, label) => (obj[label] = events[label] || {}) && obj, {})
    }
  }
}
</script>
