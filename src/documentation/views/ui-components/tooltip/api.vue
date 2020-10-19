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
import WTooltip from '@/wave-ui/components/w-tooltip'

const propsDescs = {
  value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>This prop controls the visibility of the tooltip. Any truthy value will show the tooltip whereas any falsy value will hide it.',
  showOnClick: '',
  color: 'Applies a color to the tooltip\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a color to the tooltip\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  shadow: 'Applies a drop shadow to the tooltip.',
  noBorder: 'Removes the default border from the tooltip element.',
  transition: 'Applies a particular transition to the tooltip element when showing and hiding.<br>Accepts all the transitions listed in the <a href="/transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.',
  tile: 'Removes the default border-radius and sets sharp edges on the tooltip.',
  round: 'Sets a maximum border-radius on the corners of the tooltip, giving it a round look.',
  tooltipClass: 'Applies a custom CSS class to the tooltip element.',
  // Position.
  detachTo: '',
  fixed: 'Sets the CSS position of the tooltip to <code>fixed</code> (absolute by default).',
  top: 'Places the tooltip at the top of the screen when the <code>fixed</code> prop is set to true or at the top of its container otherwise.',
  bottom: 'Places the tooltip at the bottom of the screen when the <code>fixed</code> prop is set to true or at the bottom of its container otherwise.',
  left: 'Places the tooltip at the left of the screen when the <code>fixed</code> prop is set to true or at the left of its container otherwise.',
  right: 'Places the tooltip at the right of the screen when the <code>fixed</code> prop is set to true or at the right of its container otherwise.',
  zIndex: 'Applies a z-index (positive or negative integer) to the tooltip.'
}

const slots = {
  activator: { description: '<strong>This slot is required and must have the v-on="on" directive set on it for the tooltip to toggle correctly.</strong><br>The activator can be any visible DOM element or mounted component.' },
  default: { description: 'The tooltip content.' }
}

const eventsDescs = {
  // input: 'Emitted each time the state of the component changes (when showing or hiding the tooltip). It updates the v-model value in Vue 2.x only.',
  // 'update:modelValue': 'Emitted each time the state of the component changes (when showing or hiding the tooltip). It updates the v-model value in Vue 3 only.'
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
      return WTooltip.props
    },
    events () {
      return WTooltip.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
