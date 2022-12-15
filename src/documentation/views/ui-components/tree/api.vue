<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API
  alert.mb6(info) The missing props descriptions will be added shortly (all the props are already listed).

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WTree from '@/wave-ui/components/w-tree.vue'

const propsDescs = {
  data: 'The object or array to display in a tree view. Any item must be an object which contain at least a <code>label</code> attribute. Any children of an item must be placed in an array in the <code>children</code> attribute. E.g.<br><pre>[\n  {\n    label: \'Item 1\',\n    children: [\n      { label: \'Child 1\' },\n      { label: \'Child 2\' }\n    ]\n  },\n  { label: \'Item 2\' }\n]</pre>',
  depth: false, // Hide.
  branchClass: 'Adds the specified CSS class to all the branch-type items.<br>Any item that has children is a branch, and any item marked with the <code>branch</code> boolean attribute in its object.',
  leafClass: 'Adds the specified CSS class to all the leaf-type items.<br>Any item that that don\'t contain children is a leaf.',
  branchIcon: 'Provide an icon for all the branch items.',
  branchOpenIcon: 'Provide an icon for any branch item that is open.',
  leafIcon: 'Provide an icon for all the leaf items.',
  expandIcon: 'Provide a custom icon for the expand button. Set to <code>false</code> to remove the expand button (keeping the expand ability on the label itself).',
  expandOpenIcon: 'Provide a custom icon for all the expand button when it is open - if it should be different than the <code>expandIcon</code>.',
  expandAll: '',
  unexpandableEmpty: 'When set to <code>true</code>, this will remove the expand button and ability off any branch item label that is empty (has no children).',
  disabled: 'When set to <code>true</code>, disables the tree interactivity (expand, collapse selection, click, tab).',
  noTransition: 'When set to <code>true</code>, disables the expand/collapse transition.',
  selectable: 'Make any item of the tree selectable, via click or via the keyboard arrow keys and <kbd>tab</kbd> key.',
  counts: 'Display the branch children counts on each branch item.'
}

const slots = {}

const events = {}

export default {
  data: () => ({
    propsDescs,
    slots
  }),

  computed: {
    // Reads all the props and events directly from the component, so that as soon as a new prop or event
    // is added it will appear even if no description is yet provided.
    props () {
      return WTree.props
    },
    events () {
      return WTree.emits.reduce((obj, label) => (obj[label] = events[label] || {}) && obj, {})
    }
  }
}
</script>
