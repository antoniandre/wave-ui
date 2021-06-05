<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WButton from '@/wave-ui/components/w-button.vue'

const propsDescs = {
  color: 'Applies a color to the button\'s text.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if either <code>outline</code> or <code>text</code> is set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a color to the button\'s background.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if neither <code>outline</code> nor <code>text</code> are set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  dark: 'When set to true, the text color will be set to white.',
  outline: 'The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.',
  text: 'Sets the background of the button to transparent. On mouse hover the button background is set to a very light opacity of the given <code>color</code> (primary by default).',
  round: 'Sets a maximum border-radius on the corners of the button, giving it a round look.',
  shadow: 'Applies a drop shadow to the button.',
  tile: 'Removes the default border-radius and sets sharp edges on the button.',
  route: 'When provided, the button becomes a link to this route. A <code>router-link</code> will be generated if you use Vue Router, or a normal link otherwise.',
  forceLink: 'In some cases, you may want to use a normal link instead of a <code>router-link</code>, for instance when using anchor links (starting with <code>#</code>), you can use the <code>force-link</code> prop to force a normal link.',
  type: 'Applies a native HTML <code>type</code> attribute.',
  disabled: 'Disables the button making it unreactive to user interactions.',
  loading: 'Sets the loading state of the button. While loading, the button is unclickable and a spinner is displayed instead of the button label.',
  icon: 'Sets the button to a round icon style, containing only an icon.<br>Accepts a string: e.g. <code>mdi mdi-home</code>.',
  absolute: 'Sets the CSS position of the button to <code>absolute</code>.',
  fixed: 'Sets the CSS position of the button to <code>fixed</code>.',
  top: 'Places the button at the top of the screen when the <code>fixed</code> prop is set to true or at the top of its container when the <code>absolute</code> prop is set to true.',
  bottom: 'Places the button at the bottom of the screen when the <code>fixed</code> prop is set to true or at the bottom of its container when the <code>absolute</code> prop is set to true.',
  left: 'Places the button at the left of the screen when the <code>fixed</code> prop is set to true or at the left of its container when the <code>absolute</code> prop is set to true.',
  right: 'Places the button at the right of the screen when the <code>fixed</code> prop is set to true or at the right of its container when the <code>absolute</code> prop is set to true.',
  zIndex: 'Applies a z-index (positive or negative integer) to the button.',
  width: 'Sets a width on the button.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.',
  height: 'Sets a height on the button.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.',
  xs: 'Sets the size of the button.',
  sm: 'Sets the size of the button.',
  md: 'Sets the size of the button.',
  lg: 'Sets the size of the button.',
  xl: 'Sets the size of the button.'
}

const slots = {
  default: { description: 'The button content.' },
  loading: { description: 'Provide a custom loading content, if the default spinner doesn\'t suit in your app.' }
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
