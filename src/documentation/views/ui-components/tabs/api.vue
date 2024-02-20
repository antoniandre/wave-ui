<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WTabs from '@/wave-ui/components/w-tabs/index.vue'

const propsDescs = {
  value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Provide a tab index (a number starting from 0) to open it. This value gets updated when using a v-model.',
  color: 'Applies a color to the each tab title\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a color to the each tab title\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  items: 'Expecting an array of objects. Each object being an tab item, it should include a <code>title</code> and <code>content</code> attributes.<br>Alternatively, you can provide an integer number (call it <em class="code">x</em>), to loop through and create <em class="code">x</em> tabs. You can then use the individual slots <code>item-title.x</code> &amp; <code>item-content.x</code> to define each item title and content.',
  itemIdKey: 'Specifies the name of the property in each item object where to find the item\'s unique ID.<br>Having a unique ID is important when injecting and replacing tabs. If no unique id is provided, Wave UI will generate one and <strong>inject it in each item</strong>.',
  itemTitleKey: 'Specifies the name of the property in each item object where to find the item\'s title string.',
  itemContentKey: 'Specifies the name of the property in each item object where to find the item\'s content string.',
  titleClass: 'Applies a custom CSS class to the tab title.',
  activeClass: 'Applies a custom CSS class to the active tab title.',
  noSlider: 'When set to <code>true</code>, removes the slider under the active tab title.',
  pillSlider: 'When set to <code>true</code>, places the slider under the active tab title text in a pill shape.',
  sliderColor: 'Provide a custom color for the tabs slider (<code>primary</code> by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  contentClass: 'Applies a custom CSS class to the tab content.',
  transition: 'Applies a particular transition to the tab contents when switching tab.<br>Check all the transitions that apply to this component in the <a href="#content-transitions">Content transitions</a> example.',
  fillBar: 'When set to <code>true</code>, the tabs titles will occupy the full available width.',
  center: 'Centers the tabs titles.',
  right: 'Aligns the tabs titles to the right.',
  card: 'Applies the card style on all the tabs titles.',
  keepInDom: '<span class="grey text-italic">Will deactivate the <code>keep-alive</code> prop.</span> When set to <code>true</code>, the tabs will always stay in the DOM (even when not the active tab), unless they are deleted in the tabs array.<br>Note that the <code>mounted</code> hook will be run once per tab, as soon as they are appended to the DOM.<br>The default behavior is to keep the tabs alive, but unmount any inactive tab from the DOM.',
  keepAlive: 'When set to <code>true</code> and by default, the tabs will be kept alive. Which means that the state of the components in each tab will be maintained when switching tabs and the <code>mounted</code> hook will only be run the first time it is open.<br>When explicitly set to <code>false</code>, the tab state will be reset upon each reopening, and the <code>mounted</code> hook will be run again.<br>The default behavior is to keep the tabs alive, but unmount any inactive tab from the DOM.<br>You can read more about the keep-alive behavior in the <a href="https://vuejs.org/guide/built-ins/keep-alive.html" target="_blank">Vue official documentation for keep-alive <i class="w-icon mdi mdi-open-in-new"></i></a>.'
}

const slots = {
  'item-title': {
    description: 'Provide a custom title for every tab. Applies to all the tabs, but can be overridden by the <code>item-title.x</code> slot.',
    params: {
      item: 'The current tab object.',
      index: 'The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.',
      active: 'A boolean representing the active state of the tab.'
    }
  },
  'item-title.x': {
    description: '<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom title for a single tab: the tab at the index <em class="code">x</em>.',
    params: {
      item: 'The current tab object.',
      index: 'The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.',
      active: 'A boolean representing the active state of the tab.'
    }
  },
  'item-content': {
    description: 'Provide a custom content for every tab. Applies to all the tabs, but can be overridden by the <code>item-content.x</code> slot.',
    params: {
      item: 'The current tab object.',
      index: 'The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.',
      active: 'A boolean representing the active state of the tab.'
    }
  },
  'item-content.x': {
    description: '<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single tab: the tab at the index <em class="code">x</em>.',
    params: {
      item: 'The current tab object.',
      index: 'The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.',
      active: 'A boolean representing the active state of the tab.'
    }
  }

}

const events = {
  input: {
    description: 'Emitted each time the current tab changes.<br>Updates the v-model value in Vue 2.x only.',
    params: {
      '[Array]': 'An array of booleans representing the active state of each tab.'
    }
  },
  'update:modelValue': {
    description: 'Emitted each time the current tab changes.<br>Updates the v-model value in Vue 3 only.',
    params: {
      '[Array]': 'An array of booleans representing the active state of each tab.'
    }
  },
  focus: {
    description: 'Emitted on each tab title focus.',
    params: {
      '[Object]': 'The focused tab item object.'
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
      return WTabs.props
    },
    events () {
      return WTabs.emits.reduce((obj, label) => (obj[label] = events[label] || {}) && obj, {})
    }
  }
}
</script>
