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
import WNotification from '@/wave-ui/components/w-notification'

const propsDescs = {
  value: 'This prop controls the visibility of the notification. Any truthy value will show the notification whereas any falsy value will hide it.',
  transition: 'Applies a particular transition to this component when showing and hiding.<br>Check all the transitions that apply to this component in the <a href="#transitions">Transitions</a> example.',
  timeout: '',
  absolute: '',
  top: '',
  bottom: '',
  left: '',
  right: '',
  zIndex: 'Applies a z-index (positive or negative integer) to the notification.',
  success: '',
  info: '',
  warning: '',
  error: '',
  color: 'Applies a color to the notification\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a color to the notification\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  shadow: 'Applies a drop shadow to the notification.',
  tile: 'Removes the default border-radius and sets sharp edges on the notification.',
  round: 'Sets a maximum border-radius on the corners of the notification, giving it a round look.',
  plain: '',
  noBorder: 'Removes the default border from the notification container.',
  borderLeft: '',
  borderRight: '',
  borderTop: '',
  borderBottom: '',
  outline: '',
  dismiss: '',
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
  input: 'Emitted on notification dismiss/hide. It updates the v-model value in Vue 2.x only.',
  'update:modelValue': 'Emitted on notification dismiss/hide. It updates the v-model value in Vue 3 only.',
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
