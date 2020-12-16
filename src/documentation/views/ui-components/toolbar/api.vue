<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WToolbar from '@/wave-ui/components/w-toolbar'

const propsDescs = {
  color: 'Applies a color to the toolbar\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a color to the toolbar\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  absolute: 'Sets the CSS position of the toolbar to <code>absolute</code>.',
  fixed: 'Sets the CSS position of the toolbar to <code>fixed</code>.',
  bottom: 'Applies a border at the top of the toolbar, unless the <code>no-border</code> prop is set to true. Also removes the default bottom border.',
  height: 'Sets a height on the toolbar.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.',
  noBorder: 'Removes the default border (top or bottom) from the toolbar.',
  shadow: 'Applies a drop shadow to the toolbar.'
}

const slots = {
  default: { description: 'The toolbar content.' }
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
      return WToolbar.props
    },
    events () {
      return WToolbar.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
