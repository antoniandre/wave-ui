<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WSpinner from '@/wave-ui/components/w-spinner'

const propsDescs = {
  value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>The <code>value</code> or <code>v-model</code> controls the visibility of the spinner. Any truthy value will show the spinner whereas any falsy value will hide it. If no value/v-model or <code>undefined</code> is provided, the spinner will be visible.',
  color: 'Sets the color of the spinner.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  xs: 'Sets the size of the spinner.',
  sm: 'Sets the size of the spinner.',
  md: 'Sets the size of the spinner.',
  lg: 'Sets the size of the spinner.',
  xl: 'Sets the size of the spinner.',
  size: 'Sets the size of the spinner. Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.',
  bounce: 'Sets the style of the spinner.',
  fade: 'Sets the style of the spinner.'
}

const slots = {}

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
      return WSpinner.props
    },
    events () {
      return WSpinner.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
