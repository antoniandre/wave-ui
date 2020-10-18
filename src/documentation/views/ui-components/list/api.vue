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
import WList from '@/wave-ui/components/w-list'

const propsDescs = {
  items: '',
  value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>',
  checklist: 'Sets the type of list to checklist: each item has a checkbox.',
  roundCheckboxes: 'When <code>checklist</code> is true, displays round checkboxes instead of square ones.',
  multiple: 'When selectable, allows multiple selections. A checklist always has multiple selections.',
  addIds: 'When set to true, will add an id on the list and all the list items.<br>Useful for accessibility aria fields for instance.',
  hover: '',
  color: 'Applies a color to the list items\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a color to the list items\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  nav: 'Set the list as a navigation menu. All the items having a `route` attribute will be converted to link or router-link if vue-router is present.',
  icon: 'A global icon string to apply to all the list items.',
  itemLabelKey: 'The property name (aka key) in each item object where to find the label of the item.',
  itemValueKey: 'The property name (aka key) in each item object where to find the value of the item.',
  itemColorKey: 'The property name (aka key) in each item object where to find the color of the item.',
  itemClass: 'Applies a custom CSS class to every list item.',
  depth: false, // Hide this prop.
  returnObject: '',
  arrowsNavigation: ''
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

const eventsDescs = {
  input: 'Emitted each time the state of the component changes. It updates the <code>v-model</code> value in Vue 2.x only.<br>An array of values of all the selected list items is passed as a parameter.',
  'update:modelValue': 'Emitted each time the state of the component changes (when an item is selected or unselected). It updates the v-model value in Vue 3 only.<br>An array of values of all the selected list items is passed as a parameter.',
  focus: 'Emitted on each item title focus. The focused item is returned as a parameter.',
  'item-click': 'Emitted on each item click. The clicked item is returned as a parameter.',
  'keydown:escape': 'Emitted on escape key press, when the focus is on any of the list items.'
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
      return WList.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
