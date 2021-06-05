<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WTimeline from '@/wave-ui/components/w-timeline.vue'

const propsDescs = {
  items: 'The items to display in the timeline. Usually an array of objects containing at least a <code>title</code>.<br>In some cases you may also provide an integer (items count) to loop through. Each item can then be defined in the template using the <code>item.x</code> slot for each iteration of this integer.',
  color: 'Applies a color to both the item bullet or icon, and the item title, on each item.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  icon: 'A global icon string to apply to all the items.',
  itemTitleKey: 'The property name (aka key) in each item object where to find the title of the item.',
  itemContentKey: 'The property name (aka key) in each item object where to find the content of the item.',
  itemIconKey: 'The property name (aka key) in each item object where to find the icon of the item.',
  itemColorKey: 'The property name (aka key) in each item object where to find the color of the item.'
}

const slots = {
  item: {
    description: 'Provide a custom template for every item. Applies to all the items, but can be overridden by the <code>item.x</code> slot.',
    params: {
      item: 'The current item object.',
      index: 'The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.'
    }
  },
  'item.x': {
    description: '<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom template for a single item: the item at the index <em class="code">x</em>.',
    params: {
      item: 'The current item object.',
      index: 'The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.'
    }
  }
}

const eventsDescs = {}

export default {
  data: () => ({
    propsDescs,
    slots
  }),

  computed: {
    // Reads all the props and events directly from the component, so that as soon as a new prop or event
    // is added it will appear even if no description is yet provided.
    props () {
      return WTimeline.props
    },
    events () {
      return WTimeline.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
