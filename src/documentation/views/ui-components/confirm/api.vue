<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API
  alert.mb6(info) The missing props descriptions will be added shortly (all the props are already listed).

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WConfirm from '@/wave-ui/components/w-confirm.vue'

const propsDescs = {
  color: 'Applies a color to the main button\'s text.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if either <code>outline</code> or <code>text</code> is set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a color to the main button\'s background.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if neither <code>outline</code> nor <code>text</code> are set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  icon: 'Sets the button to a round icon style, containing only an icon.<br>Accepts a string: e.g. <code>mdi mdi-home</code>.',
  mainButton: '',
  noCancel: '',
  cancelButton: '',
  confirmButton: '',
  inline: '',
  menu: '',
  noArrow: '',
  top: 'Places the menu above the main button.',
  bottom: 'Places the below the main button.',
  left: 'Places the menu on the left of the main button.',
  right: 'Places the menu at the right of the main button.',
  alignTop: 'Aligns the top of the menu with the top of the main button.',
  alignBottom: 'Aligns the bottom of the menu with the bottom of the main button.',
  alignLeft: 'Aligns the left side of the menu with the left side of the main button.',
  alignRight: 'Aligns the right side of the menu with the right side of the main button.',
  transition: 'Applies a particular transition to the menu element when showing and hiding.<br>Accepts all the transitions listed in the <a href="/transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.',
  persistent: 'When set to <code>true</code>, clicking outside of the menu will not close the menu.'
}

const slots = {}

const events = {}

export default {
  data: () => ({
    propsDescs,
    slots
  }),

  computed: {
    // Reads all the props and events directly from the component, so that as soon as a new prop or event
    // is added it will appear even if no description is yet provided.
    props () {
      return WConfirm.props
    },
    events () {
      return WConfirm.emits.reduce((obj, label) => (obj[label] = events[label] || {}) && obj, {})
    }
  }
}
</script>
