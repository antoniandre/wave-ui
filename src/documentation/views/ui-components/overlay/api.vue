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
import WOverlay from '@/wave-ui/components/w-overlay'

const propsDescs = {
  value: 'This prop controls the visibility of the overlay. Any truthy value will show the overlay whereas any falsy value will hide it.',
  opacity: 'Sets a custom opacity on the overlay.',
  bgColor: 'Applies a color to the overlay\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  zIndex: 'Applies a z-index (positive or negative integer) to the overlay.',
  persistent: 'When set to true, clicking outside of the overlay or pressing the escape key will not close the overlay.<br>A bounce animation will give the user a feedback that the overlay content needs attention and cannot be closed.',
  persistentNoAnimation: 'When this and the <code>persistent</code> props are set to true, clicking outside of the overlay or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user).'
}

const slots = {
  default: { description: 'The overlay content, if any.' }
}

const eventsDescs = {
  input: 'Emitted on overlay hide. It updates the v-model value in Vue 2.x only.',
  'update:modelValue': 'Emitted on overlay hide. It updates the v-model value in Vue 3 only.',
  close: 'Emitted on overlay hide.',
  click: 'Emitted on every overlay click. Whether the <code>persistent</code> option is set to true or false.'
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
      return WOverlay.props
    },
    events () {
      return WOverlay.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
