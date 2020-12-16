<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WTag from '@/wave-ui/components/w-tag'

const propsDescs = {
  value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>When a tag has a <code>v-model</code> or <code>value</code>, it becomes toggleable (two different states) and clickable. When the user clicks it, its <code>v-model</code> boolean value is updated.',
  color: 'Applies a color to the tag\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a color to the tag\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  dark: 'When set to true, the text color will be set to white.',
  shadow: 'Applies a drop shadow to the tag and removes the default border.',
  tile: 'Removes the default border-radius and sets sharp edges on the tag.',
  round: 'Sets a maximum border-radius on the corners of the tag, giving it a round look.',
  closable: 'Adds a close button in the tag. On click of that button, the <code>v-model</code> boolean value is updated. You can then decide to hide the tag with a v-if or v-show based on the <code>v-model</code> value.',
  outline: 'The outline style applies the provided <code>color</code> (by default the color is inherited) to the text and border and no background color is set.',
  noBorder: 'Removes the default border from the tag element.',
  xs: 'Sets the size of the tag.',
  sm: 'Sets the size of the tag.',
  md: 'Sets the size of the tag.',
  lg: 'Sets the size of the tag.',
  xl: 'Sets the size of the tag.',
  width: 'Sets a width on the tag.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.',
  height: 'Sets a height on the tag.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.'
}

const slots = {
  default: { description: 'The tag content.' }
}

const events = {
  input: {
    description: 'For vue 2 only.<br>If a <code>value</code> or <code>v-model</code> is provided, the tag becomes toggleable on click (two states).<br>Updates the v-model value in Vue 2.x only.',
    params: {
      '[Boolean]': 'A Boolean representing the active state of the tag.'
    }
  },
  'update:modelValue': {
    description: 'For vue 3 only.<br>If a <code>model-value</code> or <code>v-model</code> is provided, the tag becomes toggleable on click (two states).<br>Updates the v-model value in Vue 3 only.',
    params: {
      '[Boolean]': 'A Boolean representing the active state of the tag.'
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
      return WTag.props
    },
    events () {
      return WTag.emits.reduce((obj, label) => (obj[label] = events[label] || {}) && obj, {})
    }
  }
}
</script>
