<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WList from '@/wave-ui/components/w-list'

const propsDescs = {
  items: 'Expecting an array of objects. Each object being a list item, it should include at least a <code>label</code> attribute.<br>Alternatively, you can provide an integer number (call it <em class="code">x</em>), to loop through and create <em class="code">x</em> items in the list. You can then use the individual slots <code>item-title.x</code> &amp; <code>item-content.x</code> to define each item.',
  value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Provide an array of values if <code>multiple</code> is set to true, or a single value otherwise, to dictate the selected state of the list items.<br>Also accepts full objects when <code>return-object</code> is set to true.<br>This value gets updated when using a v-model.',
  checklist: 'Sets the type of list to checklist: each item has a checkbox.',
  roundCheckboxes: 'When <code>checklist</code> is true, displays round checkboxes instead of square ones.',
  multiple: 'When selectable, allows multiple selections. A checklist always has multiple selections.',
  addIds: 'When set to true, will add an id on the list and all the list items.<br>Useful for accessibility aria fields for instance.',
  hover: 'On mouseover, highlights the list items with the given <code>color</code>. Also adds a small vertical padding on the list items to space them.',
  color: 'Applies a color to the list items\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a color to the list items\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  selectionColor: 'Applies a color to the selected list items\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  nav: 'Set the list as a navigation menu. All the items having a `route` attribute will be converted to link or router-link if vue-router is present.',
  icon: 'A global icon string to apply to all the list items. E.g. <code>mdi mdi-home</code>.',
  itemLabelKey: 'The property name (aka key) in each item object where to find the label of the item.',
  itemValueKey: 'The property name (aka key) in each item object where to find the value of the item.',
  itemColorKey: 'The property name (aka key) in each item object where to find the color of the item.',
  itemClass: 'Applies a custom CSS class to every list item.',
  depth: false, // Hide this prop.
  returnObject: 'The current list selection is returned via the <code>value</code> prop or <code>v-model</code> as an array of full objects or a single full object (returning the original as given) when <code>multiple</code> is set to false.',
  arrowsNavigation: 'Allows the navigation through the list items with the keyboard arrows up and down, when set to true and when the items are selectable (the <strong class="code">w-list</strong> has a <code>value</code> or <code>v-model</code>, or is a <code>nav</code> or <code>checklist</code>).',
  noUnselect: 'Once at least one item is selected, prevents the list to have no selection. Clicking an item when only this one is selected will not unselect it.'
}

const slots = {
  item: {
    description: 'Provide a custom content for every item. Applies to all the items, but can be overridden by the <code>item.x</code> slot.',
    params: {
      item: 'The current item object.',
      index: 'The item index in the list. Starts at 1 to be consistent with the <code>item.x</code> slot.',
      selected: 'A boolean representing the selected state of the current item.'
    }
  },
  'item.x': {
    description: '<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single item: the item at the index <em class="code">x</em>.',
    params: {
      item: 'The current item object.',
      index: 'The item index in the list. Starts at 1 to be consistent with the <code>item.x</code> slot.',
      selected: 'A boolean representing the selected state of the current item.'
    }
  }
}

const events = {
  input: {
    description: 'Emitted each time the state of the list changes.<br>Updates the <code>v-model</code> value in Vue 2.x only.',
    params: {
      '[Array]': 'An array of values of all the selected list items.'
    }
  },
  'update:modelValue': {
    description: 'Emitted each time the state of the list changes (when an item is selected or unselected).<br>Updates the v-model value in Vue 3 only.',
    params: {
      '[Array]': 'An array of values of all the selected list items.'
    }
  },
  // focus: {
  //   description: 'Emitted on each list item title focus.',
  //   params: {
  //     '[DOM event object]': 'The associated focus DOM event.'
  //   }
  // },
  'item-click': {
    description: 'Emitted on each list item click.',
    params: {
      '[Object]': 'The clicked list item\'s object.'
    }
  },
  'item-select': {
    description: 'Emitted on each list item selection or unselection (via click or keyboard <kbd>enter</kbd> key when focused).',
    params: {
      '[Object]': 'The selected list item\'s object.'
    }
  },
  'keydown:enter': {
    description: 'Emitted on <kbd>enter</kbd> key down, when the focus is on any of the list items.'
  },
  'keydown:escape': {
    description: 'Emitted on <kbd>escape</kbd> key down, when the focus is on any of the list items.'
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
      return WList.props
    },
    events () {
      return WList.emits.reduce((obj, label) => (obj[label] = events[label] || {}) && obj, {})
    }
  }
}
</script>
