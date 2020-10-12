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
import WBadge from '@/wave-ui/components/w-badge'

const propsDescs = {
  value: 'This prop controls the visibility of the badge. Any truthy value will show the badge whereas any falsy value will hide it.',
  xs: 'Sets the size of the badge.',
  sm: 'Sets the size of the badge.',
  md: 'Sets the size of the badge.',
  lg: 'Sets the size of the badge.',
  xl: 'Sets the size of the badge.',
  top: '',
  left: '',
  right: '',
  bottom: '',
  overlap: '',
  inline: '',
  color: 'Applies a color to the badge\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a color to the badge\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  size: '',
  dark: '',
  badgeClass: 'Applies a custom CSS class to the badge element.',
  outline: '',
  shadow: 'Applies a drop shadow to the badge.',
  dot: 'Displays a much smaller dot with no content in it.',
  round: 'Forces the badge to be round, when the content is too wide and causes a natural increase of the badge width.',
  transition: ''
}

const slots = {
  default: { description: 'The element receiving the badge. Can be any visible DOM element or mounted component.' },
  badge: { description: 'The badge content.' }
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
      return WBadge.props
    },
    events () {
      return WBadge.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
