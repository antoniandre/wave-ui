<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

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
  mainButton: 'For more customization, this prop accepts an object of props to pass down to the main button (all the options that the <strong class="code">w-button</strong> component can handle).',
  cancel: 'Accept either <code>false</code> to remove the button, a <span class="code">String</span> for the button label, or an <span class="code">Object</span> in order to define <strong class="code">w-button</strong> props to further customize it (all the options that the <strong class="code">w-button</strong> component can handle).<br>In addition to all the <strong class="code">w-button</strong> props, the object also accepts a <code>label</code> key to customize the button label.<br>The default button label is "Cancel".',
  confirm: 'Accept either a <span class="code">String</span> for the button label, or an <span class="code">Object</span> in order to define <strong class="code">w-button</strong> props to further customize it (all the options that the <strong class="code">w-button</strong> component can handle).<br>In addition to all the <strong class="code">w-button</strong> props, the object also accepts a <code>label</code> key to customize the button label.<br>The default button label is "Confirm".',
  inline: 'Displays the question inline with the buttons, inside the menu.',
  menu: 'For more customization, this prop accepts an object of props to pass down to the menu (all the options that the <strong class="code">w-menu</strong> component can handle).',
  tooltip: 'Accept either <code>false</code> for no tooltip (by default), a <span class="code">String</span> to display as a tooltip on the main button, or an <span class="code">Object</span> in order to define <strong class="code">w-tooltip</strong> props to further customize the tooltip (all the options that the <strong class="code">w-tooltip</strong> component can handle).<br>In addition to all the <strong class="code">w-tooltip</strong> props, the object also accepts a <code>label</code> key to provide the tooltip string in the object.<br>By default, the tooltip shows on hover, and at the bottom.',
  noArrow: 'By default the confirmation menu displays an arrow pointing toward the main button.<br>The arrow can simply be removed with this prop.',
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

const slots = {
  default: { description: 'The main button contents.' },
  question: { description: 'The question to ask for confirmation in the menu.' },
  cancel: { description: 'The cancel button contents, in the menu.' },
  confirm: { description: 'The confirm button contents, in the menu.' }
}

const eventsDescs = {
  cancel: 'Emitted on cancel button click. The menu will also close.',
  confirm: 'Emitted on confirm button click. The menu will also close.'
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
      return WConfirm.props
    },
    events () {
      return WConfirm.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
