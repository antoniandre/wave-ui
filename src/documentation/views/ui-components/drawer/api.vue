<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WDrawer from '@/wave-ui/components/w-drawer.vue'

const propsDescs = {
  value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>This prop controls the visibility of the drawer. Any truthy value will show the drawer whereas any falsy value will hide it.',
  left: 'Places the drawer at the left of the screen, or at the left of its container when the <code>absolute</code> prop is set to true.',
  right: 'Places the drawer at the right of the screen, or at the right of its container when the <code>absolute</code> prop is set to true.',
  top: 'Places the drawer at the top of the screen, or at the top of its container when the <code>absolute</code> prop is set to true.',
  bottom: 'Places the drawer at the bottom of the screen, or at the bottom of its container when the <code>absolute</code> prop is set to true.',
  persistent: 'When set to true, clicking outside of the drawer or pressing the escape key will not close the drawer.<br>A bounce animation will give the user a feedback that this drawer needs attention and cannot be closed.',
  persistentNoAnimation: 'When this and the <code>persistent</code> props are set to true, clicking outside of the drawer or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user).',
  pushContent: 'The <code>push-content</code> prop can be used on <code>left</code> and <code>right</code> positions.<br>It will allow the drawer to push the content either on the left or right when it\'s open.<br>To use the push-content layout, an explicit drawer <code>width</code> is required (don\'t only set a width via CSS). Any valid CSS width will work.<br>The pushable content should be provided via the <code>pushable</code> slot.',
  fitContent: 'Fits the drawer to its content (sets the width and height to auto).',
  width: 'Sets a width on the drawer when its position is <code>left</code> or <code>right</code>.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.',
  height: 'Sets a height on the drawer when its position is <code>top</code> or <code>bottom</code>.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.',
  absolute: 'Sets the CSS position of the drawer container to <code>absolute</code>.',
  zIndex: 'Applies a z-index (positive or negative integer) to the drawer.',
  color: 'Applies a color to the drawer\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a color to the drawer\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  noOverlay: 'Removes the default full screen overlay underneath the open drawer.',
  overlayColor: 'Provide a custom background color for the drawer background overlay (<code>rgba(0, 0, 0, 0.3)</code> by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  overlayOpacity: 'Provide a custom opacity for the drawer background overlay.'
}

const slots = {
  default: { description: 'The drawer content.' },
  pushable: { description: 'When using the <code>push-content</code> prop, defines the outside HTML content to be pushed by the drawer when it opens.' }
}

const eventsDescs = {
  input: 'Emitted on drawer close.<br>Updates the v-model value in Vue 2.x only.',
  'update:modelValue': 'Emitted on drawer close.<br>Updates the v-model value in Vue 3 only.',
  close: 'Emitted on drawer close.'
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
      return WDrawer.props
    },
    events () {
      return WDrawer.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
