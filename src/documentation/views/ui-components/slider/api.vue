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
import WSlider from '@/wave-ui/components/w-slider'

const propsDescs = {
  value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>',
  color: 'Applies a foreground color to the slider. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  bgColor: 'Applies a background color to the slider\'s track. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  stepLabels: '',
  thumblabel: 'Sets a visible label for the slider.',
  thumbLabelClass: 'Applies a custom CSS class to the slider\'s thumb label.',
  trackClass: 'Applies a custom CSS class to the slider\'s track.',
  rangeClass: 'Applies a custom CSS class to the slider\'s highlighted range.',
  min: '',
  max: '',
  step: '',
  labelLeft: '',
  labelRight: '',
  name: 'Provide a native HTML <code>name</code> attribute to the slider. If not provided, a unique name will be computed.',
  disabled: 'Disables the slider making it unreactive to user interactions.',
  readonly: 'The slider will still look like an interactive slider except that it is read-only: its current value cannot be changed by user interaction.',
  required: 'Applies the native HTML <code>required</code> attribute to the slider.',
  validators: '<span class="deep-orange">Only for validation, when the slider is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the slider. Each function will be executed on slider validation and should return true when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the slider.'
}

const slots = {}

const eventsDescs = {
  input: 'Emitted each time the slider range changes. It updates the v-model value in Vue 2.x only.<br>The current value of the slider is passed as a parameter.',
  'update:modelValue': 'Emitted each time the slider range changes. It updates the v-model value in Vue 3 only.<br>The current value of the slider is passed as a parameter.',
  focus: 'Emitted when the slider is focused (the thumb button). The native focus event is returned as a parameter.'
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
      return WSlider.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
