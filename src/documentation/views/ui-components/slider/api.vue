<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WSlider from '@/wave-ui/components/w-slider'

const propsDescs = {
  value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Dictates the range selection of the slider. When the user changes the range, the <code>v-model</code> value will be updated.',
  color: 'Applies a foreground color to the slider. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a background color to the slider\'s track. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  stepLabels: 'A Boolean to display or hide the labels of each steps under the slider.<br>A future version will allow passing an array of custom labels.',
  thumblabel: 'Sets a visible label for the slider.',
  thumbLabelClass: 'Applies a custom CSS class to the slider\'s thumb label.',
  trackClass: 'Applies a custom CSS class to the slider\'s track.',
  rangeClass: 'Applies a custom CSS class to the slider\'s highlighted range.',
  step: 'Sets an incremental/decremental integer or floating step number for the slider, e.g. <code>0.3</code>.',
  min: 'Sets an integer or floating minimum number for the slider.',
  max: 'Sets an integer or floating maximum number for the slider.',
  labelLeft: 'Defines a label to display on the left of the slider.',
  labelRight: 'Defines a label to display on the right of the slider.',
  name: 'Provide a native HTML <code>name</code> attribute to the slider. If not provided, a unique name will be computed.',
  disabled: 'Disables the slider making it unreactive to user interactions.',
  readonly: 'The slider will still look like an interactive slider except that it is read-only: its current value cannot be changed by user interaction.',
  required: 'Applies the native HTML <code>required</code> attribute to the slider.',
  validators: '<span class="deep-orange">Only for validation, when the slider is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the slider. Each function will be executed on slider validation and should return true when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the slider.'
}

const slots = {}

const events = {
  input: {
    description: 'Emitted each time the slider range changes.<br>Updates the v-model value in Vue 2.x only.',
    params: {
      '[Number]': 'The current value of the slider.'
    }
  },
  'update:modelValue': {
    description: 'Emitted each time the slider range changes.<br>Updates the v-model value in Vue 3 only.',
    params: {
      '[Number]': 'The current value of the slider.'
    }
  },
  focus: {
    description: 'Emitted when the slider is focused (the thumb button).',
    params: {
      '[DOM event object]': 'The associated focus DOM event.'
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
      return WSlider.props
    },
    events () {
      return WSlider.emits.reduce((obj, label) => (obj[label] = events[label] || {}) && obj, {})
    }
  }
}
</script>
