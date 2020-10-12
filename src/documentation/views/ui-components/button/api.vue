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
import WButton from '@/wave-ui/components/w-button'

const propsDescs = {
  color: 'Applies a color to the button\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a color to the button\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  dark: '',
  outline: '',
  text: '',
  round: 'Sets a maximum border-radius on the corners of the button, giving it a round look.',
  shadow: 'Applies a drop shadow to the button.',
  tile: 'Removes the default border-radius and sets sharp edges on the button.',
  to: '',
  forceLink: '',
  type: '',
  disabled: '',
  loading: '',
  icon: '',
  absolute: '',
  fixed: '',
  top: '',
  bottom: '',
  left: '',
  right: '',
  zIndex: '',
  width: '',
  height: '',
  xs: 'Sets the size of the button.',
  sm: 'Sets the size of the button.',
  md: 'Sets the size of the button.',
  lg: 'Sets the size of the button.',
  xl: 'Sets the size of the button.'
}

const slots = {
  default: { description: 'The button content.' },
  loading: { description: 'Provide a custom loading content, if the default spinner doesn\'t fit.' }
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
      return WButton.props
    },
    events () {
      return WButton.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
