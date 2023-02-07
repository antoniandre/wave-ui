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
  modelValue: '<strong class="error"><code>value</code> in Vue 2.</strong><br>This value gets updated with the tree selected item when using a <code>v-model</code> and when <code>selectable</code> is set to <code>true</code>.',
  data: 'The object or array to display in a tree view. Any item must be an object which contain at least a <code>label</code> attribute. Any children of an item must be placed in an array in the <code>children</code> attribute. E.g.<br><pre>[\n  {\n    label: \'Item 1\',\n    children: [\n      { label: \'Child 1\' },\n      { label: \'Child 2\' }\n    ]\n  },\n  { label: \'Item 2\' }\n]</pre>',
  depth: false, // Hide.
  branchClass: 'Adds the specified CSS class to all the branch-type items.<br>Any item that has children is a branch, and any item marked with the <code>branch</code> boolean attribute in its object.',
  leafClass: 'Adds the specified CSS class to all the leaf-type items.<br>Any item that that don\'t contain children is a leaf.',
  branchIcon: 'Provide an icon for all the branch items.',
  branchOpenIcon: 'Provide an icon for any branch item that is open.',
  leafIcon: 'Provide an icon for all the leaf items.',
  expandIcon: 'Provide a custom icon for the expand button. Set to <code>false</code> to remove the expand button (keeping the expand ability on the label itself).',
  expandOpenIcon: 'Provide a custom icon for all the expand button when it is open - if it should be different than the <code>expandIcon</code>.',
  expandAll: 'Expand all the expandable branches of the tree by default, including sub-items.',
  deepReactivity: 'By default the tree items key-value pairs will not be watched as this is a more expensive operation. This means that if you want to have reactivity when you modify a key or value, like the label, you will need to add the <code>deep-reactivity</code> option.<br><a href="https://vuejs.org/guide/essentials/watchers.html#deep-watchers" target="_blank">Read on deep watchers on the Vue.js official documentation<i class="ml1 w-icon mdi mdi-open-in-new"></i></a>',
  unexpandableEmpty: 'When set to <code>true</code>, this will remove the expand button and ability off any branch item label that is empty (has no children).',
  disabled: 'When set to <code>true</code>, disables the tree interactivity (expand, collapse selection, click, tab).',
  noTransition: 'When set to <code>true</code>, disables the expand/collapse transition.',
  selectable: 'Make any item of the tree selectable, via click or via the keyboard arrow keys and <kbd>tab</kbd> key.',
  counts: 'Display the branch children counts on each branch item.',
  iconColor: 'Define a color for all the items icons.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  itemIconKey: 'Specifies the name of the optional attribute in each item object where to find the item\'s icon.',
  itemIconColorKey: 'Specifies the name of the optional attribute in each item object where to find the item\'s icon color.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  itemRouteKey: 'Specifies the name of the optional attribute in each item object where to find the item\'s route. It can be an internal or external link.<br>If the link is internal and Vue Router is detected, it will use a &lt;router-link&gt; tag.',
  itemDisabledKey: 'Specifies the name of the optional attribute in each item object, that will disable the interactivity of this item (expand, collapse selection, click, tab).'
}

const slots = {
  item: {
    description: 'Provide a custom template for all the items (includes the item icon if any, label, and count if active).',
    params: {
      item: 'The current tree item object.',
      depth: 'The item depth in the tree. Starts at 0 for the root.',
      open: 'A boolean representing the open state of the tree item.'
    }
  }
}

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
