<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WBreadcrumbs from '@/wave-ui/components/w-breadcrumbs'

const propsDescs = {
  color: 'Applies a text color to the breadcrumb\'s links.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  separatorColor: 'Applies a text color (also applies to icons) to the breadcrumb\'s separators.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  icon: 'Provide a custom icon for the separators.',
  items: 'An array of items to display in the breadcrumbs. Each item must be an object containing a <code>label</code> and a <code>route</code>.<br>If no route is found the item will be wrapped in a span instead of a link.',
  linkLastItem: 'When set to true, and if the last item has a provided route, the last item will be a link.',
  itemLabelKey: 'The property name (aka key) in each item object where to find the label of the item.',
  itemRouteKey: 'The property name (aka key) in each item object where to find the link of the item.',
  xs: 'Sets the font size of the items.',
  sm: 'Sets the font size of the items.',
  md: 'Sets the font size of the items.',
  lg: 'Sets the font size of the items.',
  xl: 'Sets the font size of the items.'
}

const slots = {
  separator: {
    description: 'Provide a custom template for the breadcrumbs\' separator.',
    params: {
      index: 'The separator index in the array of items. Starts at 1.'
    }
  },
  item: {
    description: 'Provide a custom template for the breadcrumbs\' item.',
    params: {
      item: 'The current item object.',
      index: 'The item index in the array of items. Starts at 1.',
      isLast: 'A boolean indicating if the current item is the last one. May be useful if you want a particular template for the current page.'
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
      return WBreadcrumbs.props
    },
    events () {
      return WBreadcrumbs.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
