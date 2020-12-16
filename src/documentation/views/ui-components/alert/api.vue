<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WAlert from '@/wave-ui/components/w-alert'

const propsDescs = {
  value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>This prop controls the visibility of the alert. Any truthy value will show the alert whereas any falsy value will hide it.',
  color: 'Applies a color to the alert\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a color to the alert\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  shadow: 'Applies a drop shadow to the alert container.',
  tile: 'Removes the default border-radius and sets sharp edges on the alert container.',
  round: 'Sets a maximum border-radius on the corners of the alert container, giving it a round look.',
  icon: 'Provide a custom icon string (e.g. <code>mdi mdi-star</code>) to display on the left of the alert message.',
  iconOutside: 'If an icon is provided, this option changes the style and displays the icon on the left border.',
  plain: 'Emphasizes a "typed" alert (one of <code>success</code>, <code>info</code>, <code>warning</code>, <code>error</code>) by applying a white text color and a full opacity background of the chosen type color.',
  dismiss: 'Adds a close button (cross icon) on the right in the alert. Clicking on this button hides the alert.',
  success: 'Sets the type of the alert, applying the <code>success</code> class (green color) and adding a success icon on the left in the alert.',
  info: 'Sets the type of the alert, applying the <code>info</code> class (blue color) and adding an info icon on the left in the alert.',
  warning: 'Sets the type of the alert, applying the <code>warning</code> class (orange color) and adding a warning icon on the left in the alert.',
  error: 'Sets the type of the alert, applying the <code>error</code> class (red color) and adding an error icon on the left in the alert.',
  xs: 'Sets the size of the alert.',
  sm: 'Sets the size of the alert.',
  md: 'Sets the size of the alert.',
  lg: 'Sets the size of the alert.',
  xl: 'Sets the size of the alert.',
  noBorder: 'Removes the default border from the alert container.',
  borderLeft: 'Adds a left border on the alert. Only one side-border can be applied at the same time.',
  borderRight: 'Adds a right border on the alert. Only one side-border can be applied at the same time.',
  borderTop: 'Adds a top border on the alert. Only one side-border can be applied at the same time.',
  borderBottom: 'Adds a bottom border on the alert. Only one side-border can be applied at the same time.',
  outline: 'The outline style applies the provided <code>color</code> (by default the color is inherited) to the text and border and no background color is set.'
}

const slots = {
  content: { description: 'The alert content.' }
}

const eventsDescs = {
  input: 'Emitted on alert dismiss/hide.<br>Updates the v-model value in Vue 2.x only.',
  'update:modelValue': 'Emitted on alert dismiss/hide.<br>Updates the v-model value in Vue 3 only.',
  close: 'Emitted on alert dismiss/hide.'
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
      return WAlert.props
    },
    events () {
      return WAlert.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
