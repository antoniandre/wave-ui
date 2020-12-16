<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WNotification from '@/wave-ui/components/w-notification'

const propsDescs = {
  value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>This prop controls the visibility of the notification. Any truthy value will show the notification whereas any falsy value will hide it.',
  transition: 'Applies a particular transition to the notification when showing and hiding.<br>Check all the transitions that apply to the notification in the <a href="#transitions">Transitions</a> example.',
  timeout: 'Sets a timer to hide a visible notification after a certain amount of milliseconds. E.g. <code>2000</code> will hide the notification after 2 seconds. A value of <code>0</code> or empty string will keep the notification persistent (no timeout).',
  absolute: 'Sets the CSS position of the notification to <code>absolute</code> (fixed by default).',
  top: 'Places the notification at the top of the screen or at the top of its container if the <code>absolute</code> prop is set to true.',
  bottom: 'Places the notification at the bottom of the screen or at the bottom of its container if the <code>absolute</code> prop is set to true.',
  left: 'Places the notification at the left of the screen or at the left of its container if the <code>absolute</code> prop is set to true.',
  right: 'Places the notification at the right of the screen or at the right of its container if the <code>absolute</code> prop is set to true.',
  zIndex: 'Applies a z-index (positive or negative integer) to the notification.',
  success: 'Sets the type of the notification, applying the <code>success</code> class (green color) and adding a success icon on the left in the notification.',
  info: 'Sets the type of the notification, applying the <code>info</code> class (blue color) and adding an info icon on the left in the notification.',
  warning: 'Sets the type of the notification, applying the <code>warning</code> class (orange color) and adding a warning icon on the left in the notification.',
  error: 'Sets the type of the notification, applying the <code>error</code> class (red color) and adding an error icon on the left in the notification.',
  color: 'Applies a color to the notification\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a color to the notification\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  shadow: 'Applies a drop shadow to the notification.',
  tile: 'Removes the default border-radius and sets sharp edges on the notification.',
  round: 'Sets a maximum border-radius on the corners of the notification, giving it a round look.',
  plain: 'Emphasizes a "typed" notification (one of <code>success</code>, <code>info</code>, <code>warning</code>, <code>error</code>) by applying a white text color and a full opacity background of the chosen type color.',
  dismiss: 'Adds a close button (cross icon) on the right in the notification. Clicking on this button hides the notification.',
  noBorder: 'Removes the default border from the notification container.',
  borderLeft: 'Adds a left border on the notification. Only one side-border can be applied at the same time.',
  borderRight: 'Adds a right border on the notification. Only one side-border can be applied at the same time.',
  borderTop: 'Adds a top border on the notification. Only one side-border can be applied at the same time.',
  borderBottom: 'Adds a bottom border on the notification. Only one side-border can be applied at the same time.',
  outline: 'The outline style applies the provided <code>color</code> (by default the color is inherited) to the text and border and no background color is set.',
  xs: 'Sets the size of the notification.',
  sm: 'Sets the size of the notification.',
  md: 'Sets the size of the notification.',
  lg: 'Sets the size of the notification.',
  xl: 'Sets the size of the notification.',
}

const slots = {
  default: { description: 'The notification content.' }
}

const eventsDescs = {
  input: 'Emitted on notification dismiss/hide.<br>Updates the v-model value in Vue 2.x only.',
  'update:modelValue': 'Emitted on notification dismiss/hide.<br>Updates the v-model value in Vue 3 only.',
  close: 'Emitted on notification dismiss/hide.'
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
      return WNotification.props
    },
    events () {
      return WNotification.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
