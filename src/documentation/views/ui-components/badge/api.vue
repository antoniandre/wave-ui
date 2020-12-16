<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WBadge from '@/wave-ui/components/w-badge'

const propsDescs = {
  value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>This prop controls the visibility of the badge. Any truthy value will show the badge whereas any falsy value will hide it.',
  xs: 'Sets the size of the badge (font-size).',
  sm: 'Sets the size of the badge (font-size).',
  md: 'Sets the size of the badge (font-size).',
  lg: 'Sets the size of the badge (font-size).',
  xl: 'Sets the size of the badge (font-size).',
  top: 'Places the badge at the top of its activator, either on the left or right (right by default).',
  left: 'Places the badge at the left of its activator, either at the top or bottom (top by default).',
  right: 'Places the badge at the right of its activator, either at the top or bottom (top by default).',
  bottom: 'Places the badge at the bottom of its activator, either on the left or right (right by default).',
  overlap: 'Overlaps the activator element narrowing the distance between the activator and the badge.',
  inline: 'Displays the badge inline, in a <code>static</code> position instead of <code>absolute</code> by default.',
  color: 'Applies a color to the badge\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a color to the badge\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  size: 'Sets the font-size of the badge.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.',
  dark: 'When set to true, the text color will be set to white.',
  badgeClass: 'Applies a custom CSS class to the badge element.',
  outline: 'The outline style applies the provided <code>color</code> (by default the color is inherited) to the text and border and no background color is set.',
  shadow: 'Applies a drop shadow to the badge.',
  dot: 'Displays a much smaller dot with no content in it.',
  round: 'Forces the badge to be round, when the content is too wide and causes a natural increase of the badge width.',
  transition: 'Applies a particular transition to the badge when showing and hiding.<br>Check all the transitions that apply to the badge component in the <a href="#transitions">Transitions</a> example.'
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
