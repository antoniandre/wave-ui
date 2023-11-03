<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WMenu from '@/wave-ui/components/w-menu.vue'

const propsDescs = {
  value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>This prop controls the visibility of the menu. Any truthy value will show the menu whereas any falsy value will hide it.',
  showOnHover: 'Triggers the menu apparition on activator hover instead of click by default. A mouseleave on the activator will hide the menu.',
  hideOnMenuClick: 'Hides the menu when a click is made inside the menu. For instance when selecting a list item inside a menu.',
  color: 'Applies a color to the menu\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a color to the menu\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  shadow: 'Applies a drop shadow to the menu element.',
  custom: 'By default, the menu layout is a <strong class="code">w-card</strong>. To have more flexibility, you can set this option to <code>true</code>.',
  tile: 'Removes the default border-radius and sets sharp edges on the menu.',
  round: 'Sets a maximum border-radius on the corners of the menu, giving it a round look.',
  arrow: 'Adds a small triangle on the edge of the menu, pointing toward the activator.',
  noBorder: 'Removes the default border from the menu element.',
  transition: 'Applies a particular transition to the menu element when showing and hiding.<br>Accepts all the transitions listed in the <a href="transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.',
  menuClass: 'Provide custom CSS classes for the menu element.',
  titleClass: 'Provide custom CSS classes for the menu\'s title when using the default card layout (when not using the <code>custom</code> prop).',
  contentClass: 'Provide custom CSS classes for the menu\'s content when using the default card layout (when not using the <code>custom</code> prop).',
  appendTo: 'Moves the menu element to another DOM element.<br>Accepts a valid query selector string. If the string is invalid, or the node is not found or if <code>true</code> is provided, <span class="code">.w-app</span> will be the target.<br>The default root is the <span class="code">w-app</span> or the <code>w-dialog</code> or <code>w-drawer</code> or <code>w-menu</code> or <code>w-overlay</code> it is placed in.',
  noPosition: 'Skip the menu positioning calculation, if you prefer to set it via CSS. Setting this prop to <code>true</code> will also disable the side positioning (top, left, right, bottom) and the alignments.',
  fixed: 'Sets the CSS position of the menu to <code>fixed</code> (absolute by default).',
  top: 'Places the menu at the top of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the top of its container otherwise.',
  bottom: 'Places the menu at the bottom of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the bottom of its container otherwise.',
  left: 'Places the menu at the left of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the left of its container otherwise.',
  right: 'Places the menu at the right of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the right of its container otherwise.',
  alignTop: 'Aligns the top of the menu with the top of the activator.',
  alignBottom: 'Aligns the bottom of the menu with the bottom of the activator.',
  alignLeft: 'Aligns the left side of the menu with the left side of the activator.',
  alignRight: 'Aligns the right side of the menu with the right side of the activator.',
  zIndex: 'Applies a z-index (positive or negative integer) to the menu.',
  minWidth: 'Sets a min-width on the menu.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value, or even the string <code>activator</code> to dinamically use the activator width as the min width.',
  maxWidth: 'Sets a max-width on the menu.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value, or even the string <code>activator</code> to dinamically use the activator width as the max width.',
  overlay: 'Displays a full screen overlay underneath the menu (uses the <span class="code">w-overlay</span> component).',
  overlayClass: 'Provide custom CSS classes for the <span class="code">w-overlay</span> component.',
  overlayProps: 'An object of props to pass down to the <span class="code">w-overlay</span> component for more control.',
  persistent: 'When set to <code>true</code>, clicking outside of the menu will not close the menu.',
  activator: 'Allows you to define one or multiple external activators for the menu through a DOM selector string.<br>This way, you don\'t need to use the <code>activator</code> slot, and you can activate the menu from different activators.',
  delay: 'A delay - in milliseconds - before opening the menu.<br>A small delay may help the menu position computing if the menu content changes at the moment the activator is activated. For instance, when defining multiple activators opening the same menu with different content.'
}

const slots = {
  activator: { description: '<strong>This slot is required and must have the <code>v-on="on"</code> directive set on it for the menu to toggle correctly.</strong><br>The activator can be any visible DOM element or mounted component.' },
  title: { description: 'By default (when <code>custom</code> is set to false), the menu uses a <span class="code">w-card</span>. This slot allows a custom title for the <span class="code">w-card</span>.' },
  default: { description: 'The menu content.' },
  actions: { description: 'By default (when <code>custom</code> is set to false), the menu uses a <span class="code">w-card</span>. This slot allows setting the actions slot of the <span class="code">w-card</span>.' }
}

const eventsDescs = {
  input: 'Emitted each time the state of the component changes (when opening or closing the menu).<br>Updates the v-model value in Vue 2.x only.',
  'update:modelValue': 'Emitted each time the state of the component changes (when opening or closing the menu).<br>Updates the v-model value in Vue 3 only.',
  close: 'Emitted on menu close.',
  open: 'Emitted on menu open.'
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
      return WMenu.props
    },
    events () {
      return WMenu.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
