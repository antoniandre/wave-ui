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
import WProgress from '@/wave-ui/components/w-progress'

const propsDescs = {
  value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>',
  label: '',
  roundCap: '',
  color: 'Applies a foreground color to the progress. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a color to the progress\' background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  labelColor: 'Applies a color to the progress label\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  size: '',

  // Circular progress thickness.
  circle: '',
  stroke: '',

  // For linear progress.
  shadow: 'Applies a drop shadow to the component.',
  tile: 'Removes the default border-radius and sets sharp edges on the component.',
  round: 'Sets a maximum border-radius on the corners of the component, giving it a round look.',
  outline: 'When using the linear progress, the outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the progress, border and label and no background color is set.',
  stripes: '',
  absolute: 'Sets the CSS position of the element to <code>absolute</code>.',
  fixed: 'Sets the CSS position of the element to <code>fixed</code>.',
  top: '',
  bottom: '',
  zIndex: 'Applies a z-index (positive or negative integer) to the progress.'
}

const slots = {
  default: { description: 'Provide a custom progress label.' }
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
      return WProgress.props
    },
    events () {
      return WProgress.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
