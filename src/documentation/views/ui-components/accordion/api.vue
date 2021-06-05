<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WAccordion from '@/wave-ui/components/w-accordion.vue'

const propsDescs = {
  value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Provide an array of booleans to dictate the state (expanded and collapsed) of all the accordion items. This value gets updated by the accordion when using a v-model.',
  color: 'Applies a text color on each accordion item. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a background color on each accordion item. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  items: 'Expecting an array of objects. Each object being an accordion item, it should include a <code>title</code> and <code>content</code> attributes.<br>Alternatively, you can provide an integer number (call it <em class="code">x</em>), to loop through and create <em class="code">x</em> items in the accordion. You can then use the individual slots <code>item-title.x</code> &amp; <code>item-content.x</code> to define each item title and content.',
  itemTitleKey: 'Specifies the name of the attribute in each item object where to find the item\'s title string.',
  itemContentKey: 'Specifies the name of the attribute in each item object where to find the item\'s content string.',
  itemColorKey: 'Specifies the name of the attribute in each item object where to find the item\'s desired color string. This allows a different color for each accordion item.',
  itemClass: 'Applies a custom CSS class (or space separated classes) on every item container (which includes both the title and the content of the item).',
  titleClass: 'Applies a custom CSS class (or space separated classes) on every title container.',
  contentClass: 'Applies a custom CSS class (or space separated classes) on every content container.',
  expandIcon: 'Specifies the name of the icon to display in the toggle button. If set to false or empty string, the button will be removed.',
  expandIconRight: 'When set to true, the expand button will be placed at the right end of the item\'s title.',
  expandSingle: 'Specifies the accordion behavior, whether only one item can be expanded at a time or multiple. When set to true, expanding another item than the one already expanded is still possible, but it will collapse the other expanded item.',
  collapseIcon: 'Provide a different icon than the expand icon, to show when the accordion item is expanded. By default and when empty, there is no collapse icon: the expand icon rotates to show a closing ability.',
  shadow: 'Applies a shadow to the whole accordion container.'
}

const slots = {
  'item-title': {
    description: 'Provide a custom title for every item. Applies to all the items, but can be overridden by the <code>item-title.x</code> slot.',
    params: {
      item: 'The current item object.',
      index: 'The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.',
      expanded: 'A boolean representing the expanded state of the accordion item.'
    }
  },
  'item-title.x': {
    description: '<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom title for a single item: the item at the index <em class="code">x</em>.',
    params: {
      item: 'The current item object.',
      index: 'The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.',
      expanded: 'A boolean representing the expanded state of the accordion item.'
    }
  },
  'item-content': {
    description: 'Provide a custom content for every item. Applies to all the items, but can be overridden by the <code>item-content.x</code> slot.',
    params: {
      item: 'The current item object.',
      index: 'The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.',
      expanded: 'A boolean representing the expanded state of the accordion item.'
    }
  },
  'item-content.x': {
    description: '<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single item: the item at the index <em class="code">x</em>.',
    params: {
      item: 'The current item object.',
      index: 'The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.',
      expanded: 'A boolean representing the expanded state of the accordion item.'
    }
  }
}

const events = {
  input: {
    description: 'Emitted each time the state of the accordion changes (when an item is expanded or collapsed).<br>Updates the v-model value in Vue 2.x only.',
    params: {
      '[Array]': 'An array of booleans representing the expanded state of each accordion item.'
    }
  },
  'update:modelValue': {
    description: 'Emitted each time the state of the accordion changes (when an item is expanded or collapsed).<br>Updates the v-model value in Vue 3 only.',
    params: {
      '[Array]': 'An array of booleans representing the expanded state of each accordion item.'
    }
  },
  focus: {
    description: 'Emitted on each accordion item title focus.',
    params: {
      '[Object]': 'The focused accordion item object.'
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
      return WAccordion.props
    },
    events () {
      return WAccordion.emits.reduce((obj, label) => (obj[label] = events[label] || {}) && obj, {})
    }
  }
}
</script>
