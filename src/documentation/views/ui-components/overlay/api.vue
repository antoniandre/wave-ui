<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WOverlay from '@/wave-ui/components/w-overlay.vue'

const propsDescs = {
  value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>This prop controls the visibility of the overlay. Any truthy value will show the overlay whereas any falsy value will hide it.',
  opacity: 'Sets a custom opacity on the overlay.',
  bgColor: 'Applies a color to the overlay\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  zIndex: 'Applies a z-index (positive or negative integer) to the overlay.',
  persistent: 'When set to true, clicking outside of the overlay or pressing the escape key will not close the overlay.<br>A bounce animation will give the user a feedback that the overlay content needs attention and cannot be closed.',
  persistentNoAnimation: 'When this and the <code>persistent</code> props are set to true, clicking outside of the overlay or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user).'
}

const slots = {
  default: { description: 'The overlay content, if any.' }
}

const events = {
  input: {
    description: 'Emitted on overlay hide (a click on overlay doesn\'t trigger this event if <code>persistent</code>).<br>Updates the v-model value in Vue 2.x only.',
    params: {
      '[Boolean]': 'Represents the open state of the overlay: false on overlay close.'
    }
  },
  'update:modelValue': {
    description: 'Emitted on overlay hide (a click on overlay doesn\'t trigger this event if <code>persistent</code>).<br>Updates the v-model value in Vue 3 only.',
    params: {
      '[Boolean]': 'Represents the open state of the overlay: false on overlay close.'
    }
  },
  close: {
    description: 'Emitted on overlay hide (a click on overlay doesn\'t trigger this event if <code>persistent</code>).',
    params: {
      '[Boolean]': 'Represents the open state of the overlay: false on overlay close.'
    }
  },
  click: { description: 'Emitted on every overlay click. Whether the <code>persistent</code> prop is set to true or false.',
    params: {
      '[DOM event object]': 'The associated click DOM event.'
    }
  }
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
      return WOverlay.emits.reduce((obj, label) => (obj[label] = events[label] || {}) && obj, {})
    }
  }
}
</script>
