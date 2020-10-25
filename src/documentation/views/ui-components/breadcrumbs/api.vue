<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API
  alert.mb6(info) The missing props descriptions will be added shortly (all the props are already listed).

  api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  api(:items="slots" title="Slots")

  api(:items="events" title="Events")
</template>

<script>
import WBreadcrumbs from '@/wave-ui/components/w-breadcrumbs'

const propsDescs = {
  color: 'Applies a text color to the breadcrumb\'s links.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if either <code>outline</code> or <code>text</code> is set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  separatorColor: 'Applies a text color (also applies to icons) to the breadcrumb\'s separators.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if either <code>outline</code> or <code>text</code> is set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  icon: 'Provide a custom icon for the separators.',
  linkLastItem: 'When set to true, and if the last item has a provided route, the last item will be a link.',
  xs: 'Sets the font size of the items.',
  sm: 'Sets the font size of the items.',
  md: 'Sets the font size of the items.',
  lg: 'Sets the font size of the items.',
  xl: 'Sets the font size of the items.'
}

const slots = {
  separator: {
    description: 'Provide a custom template for the breadcrumbs\' separator.',
    parameters: []
  },
  item: {
    description: 'Provide a custom template for the breadcrumbs\' item.',
    parameters: []
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
