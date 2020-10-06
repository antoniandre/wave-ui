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
  value: '',
  checklist: '',
  roundCheckboxes: '',
  multiple: 'When selectable, this allows a multiple selections.',
  addIds: 'When set to true, will add an id on the list and on all the list items.<br>Useful for accessibility aria fields for instance.',
  hover: '',
  color: '',
  bgColor: '',
  nav: 'Set the list as a navigation menu. All the items having a `route` attribute will be converted to link or router-link if vue-router is present.',
  icon: '',
  itemLabel: '',
  itemValue: '',
  itemColor: '',
  itemClass: '',
  depth: '',
  returnObject: '',
  arrowsNavigation: ''
}

const slots = {
  item: { description: 'Provide a custom content for every item. Applies to all the items, but can be overridden by the <code>item.x</code> slot.' },
  'item.x': { description: '<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single item: the item at the index <em class="code">x</em>.' }
}

const eventsDescs = {
  input: 'Emitted each time the state of the component changes. It updates the v-model value in Vue 2.x only.<br>An array of booleans is passed as a parameter (representing the expanded state of every accordion item).',
  'update:modelValue': 'Emitted each time the state of the component changes (when an item is expanded or collapsed). It updates the v-model value in Vue 3 only.<br>An array of booleans is passed as a parameter (representing the expanded state of every accordion item).',
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
