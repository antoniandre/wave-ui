<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WProgress from '@/wave-ui/components/w-progress.vue'

const propsDescs = {
  value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Accepts a percentage value (ranging from 0 to 100) as a number or a string.<br>If the value is <code>undefined</code>, <code>-1</code> or not provided at all, it will be assumed indeterminate.',
  label: 'Shows or hides the label of the progress containing the current progress value.',
  roundCap: 'Applies a round line-cap to the progress.',
  color: 'Applies a foreground color to the progress. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a color to the progress\' background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  labelColor: 'Applies a color to the progress label\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  size: 'Sets the size of the progress element: the width if circular, or the height if linear.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.',
  circle: 'Sets the progress style to circle.',
  stroke: 'Only applies to a circular progress.<br>Sets the thickness of the circular progress.',
  // For linear progress.
  shadow: 'Only applies to a linear progress.<br>Applies a drop shadow to the progress bar.',
  tile: 'Only applies to a linear progress.<br>Removes the default border-radius and sets sharp edges on the progress bar.',
  round: 'Only applies to a linear progress.<br>Sets a maximum border-radius on the corners of the progress, giving it a round look.',
  outline: 'Only applies to a linear progress.<br>When using the linear progress, the outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the progress, border and label and no background color is set.',
  stripes: 'Only applies to a linear progress.<br>Applies an animated stripes background on the progress bar.',
  // Position.
  absolute: 'Sets the CSS position of the progress element to <code>absolute</code>.',
  fixed: 'Sets the CSS position of the progress element to <code>fixed</code>.',
  top: 'Places the progress element at the top of the screen when the <code>fixed</code> prop is set to true or at the top of its container when the <code>absolute</code> prop is set to true.',
  bottom: 'Places the progress element at the bottom of the screen when the <code>fixed</code> prop is set to true or at the bottom of its container when the <code>absolute</code> prop is set to true.',
  zIndex: 'Applies a z-index (positive or negative integer) to the progress element.'
}

const slots = {
  default: { description: 'Provide a custom progress label.' }
}

const eventsDescs = {}

export default {
  data: () => ({
    propsDescs,
    slots
  }),

  computed: {
    // Reads all the props and events directly from the component, so that as soon as a new prop or event
    // is added it will appear even if no description is yet provided.
    props () {
      return WProgress.props
    },
    events () {
      return WProgress.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
