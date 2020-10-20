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
import WIcon from '@/wave-ui/components/w-icon'

const propsDescs = {
  tag: '',
  color: 'Applies a color to the icon\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a color to the icon\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  xs: 'Sets the size of the icon (font-size).',
  sm: 'Sets the size of the icon (font-size).',
  md: 'Sets the size of the icon (font-size).',
  lg: 'Sets the size of the icon (font-size).',
  xl: 'Sets the size of the icon (font-size).',
  spin: '',
  rotate45: '',
  rotate90: '',
  rotate135: '',
  rotate180: '',
  rotate225: '',
  rotate270: '',
  rotate315: '',
  flipX: '',
  flipY: '',
  size: 'Sets the font-size of the icon.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.'
}

const slots = {
  default: { description: 'Provide the icon to use as a string. E.g. `mdi mdi-home`.' }
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
      return WIcon.props
    },
    events () {
      return WIcon.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
