<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WDialog from '@/wave-ui/components/w-dialog.vue'

const propsDescs = {
  value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>This prop controls the visibility of the dialog. Any truthy value will show the dialog whereas any falsy value will hide it.',
  width: 'Sets a max-width on the dialog.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.',
  fullscreen: 'Sets the dialog to full-screen.',
  persistent: 'When set to true, clicking outside of the dialog or pressing the escape key will not close the dialog.<br>A bounce animation will give the user a feedback that the dialog needs attention and cannot be closed.',
  persistentNoAnimation: 'When this and the <code>persistent</code> props are set to true, clicking outside of the dialog or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user).',
  tile: 'Removes the default border-radius and sets sharp edges on the dialog.',
  title: 'Provide a dialog title.',
  transition: 'Applies a particular transition to this component when showing and hiding.<br>Accepts all the transitions listed in the <a href="/transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.<br>Test all the transitions in the <a href="#transitions">Transitions</a> example.',
  titleClass: 'Applies a custom CSS class to the dialog\'s title.',
  contentClass: 'Applies a custom CSS class to the dialog\'s content.',
  dialogClass: 'Applies a custom CSS class to the dialog container.',
  overlayColor: 'Provide a custom background color for the dialog background overlay (<code>rgba(0, 0, 0, 0.3)</code> by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  color: 'Applies a text color on the dialog. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a background color on the dialog. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  overlayOpacity: 'Provide a custom opacity for the dialog background overlay.'
}

const slots = {
  title: { description: 'The dialog uses a <span class="code">w-card</span>. This slot allows a custom title for the <span class="code">w-card</span>.' },
  default: { description: 'The dialog content.' },
  actions: { description: 'The dialog uses a <span class="code">w-card</span>. This slot allows setting the actions slot of the <span class="code">w-card</span>.' }
}

const eventsDescs = {
  input: 'Emitted on dialog close.<br>Updates the v-model value in Vue 2.x only.',
  'update:modelValue': 'Emitted on dialog close.<br>Updates the v-model value in Vue 3 only.',
  close: 'Emitted on dialog close.',
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
      return WDialog.props
    },
    events () {
      return WDialog.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
