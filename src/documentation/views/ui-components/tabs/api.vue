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
import WTabs from '@/wave-ui/components/w-tabs'

const propsDescs = {
  value: '',
  color: 'Applies a color to the each tab title\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a color to the each tab title\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  items: '',
  titleClass: 'Applies a custom CSS class to the tab title.',
  activeClass: 'Applies a custom CSS class to the active tab title.',
  noSlider: '',
  sliderColor: 'Provide a custom color for the tabs slider (<code>primary</code> by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  contentClass: 'Applies a custom CSS class to the tab content.',
  transition: '',
  fillBar: '',
  center: '',
  right: '',
  card: ''
}

const slots = {
  'item-title': { description: 'Provide a custom title for every tab. Applies to all the tabs, but can be overridden by the <code>item-title.x</code> slot.' },
  'item-title.x': { description: '<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom title for a single tab: the tab at the index <em class="code">x</em>.' },
  'item-content': { description: 'Provide a custom content for every tab. Applies to all the tabs, but can be overridden by the <code>item-content.x</code> slot.' },
  'item-content.x': { description: '<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single tab: the tab at the index <em class="code">x</em>.' }
}

const eventsDescs = {
  input: 'Emitted each time the current tab changes. It updates the v-model value in Vue 2.x only.<br>An array of booleans is passed as a parameter (representing the active state of every tab).',
  'update:modelValue': 'Emitted each time the current tab changes. It updates the v-model value in Vue 3 only.<br>An array of booleans is passed as a parameter (representing the active state of every tab).',
  focus: 'Emitted on each tab title focus. The focus DOM event is returned as a parameter.'
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
      return WTabs.props
    },
    events () {
      return WTabs.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
