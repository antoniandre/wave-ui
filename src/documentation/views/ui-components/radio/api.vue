<template lang="pug">
div
  .w-divider.my12

  //- w-radios.
  title-link.title1(h2 slug="w-radios-api") &lt;w-radios&gt; API
  alert.mb6(info) The props will soon be more detailed.

  api.mt0(:items="radiosProps" :descriptions="radios.propsDescs" title="Props")

  api(:items="radios.slots" title="Slots")

  api(:items="radiosEvents" title="Events")

  .w-divider.my12

  //- w-radio.
  title-link.title1(h2 slug="w-radio-api") &lt;w-radio&gt; API

  api.mt0(:items="radioProps" :descriptions="radio.propsDescs" title="Props")

  api(:items="radio.slots" title="Slots")

  api(:items="radioEvents" title="Events")
</template>

<script>
import FormElementMixin from '@/wave-ui/mixins/form-elements'
import WRadios from '@/wave-ui/components/w-radios'
import WRadio from '@/wave-ui/components/w-radio'

const radios = {
  propsDescs: {
    items: '',
    value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>',
    labelOnLeft: '',
    itemLabelKey: '',
    itemValueKey: '',
    itemColorKey: '',
    inline: '',
    color: 'Applies a color to the active radio buttons. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
    name: '',
    disabled: '',
    readonly: '',
    required: '',
    validators: ''
  },
  slots: {
    item: { description: 'Provide a custom content for each radio button label.' }
  },
  eventsDescs: {
    input: 'Emitted each time any of the radio buttons is toggled. It updates the v-model value in Vue 2.x only.<br>The return-value of the selected radio button is passed as a parameter.<br>The return-value will be one of these attributes, if they exist, in this order: the item value, the item label, the item index.',
    'update:modelValue': 'Emitted each time any of the radio buttons is toggled. It updates the v-model value in Vue 3 only.<br>The return-value of the selected radio button is passed as a parameter.<br>The return-value will be one of these attributes, if they exist, in this order: the item value, the item label, the item index.',
    focus: 'Emitted on each radio button focus. The focus DOM event is returned as a parameter.'
  }
}

const radio = {
  propsDescs: {
    value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>',
    returnValue: '',
    label: '',
    labelOnLeft: '',
    color: 'Applies a color to the radio button when active. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
    noRipple: '',
    name: '',
    disabled: '',
    readonly: '',
    required: '',
    validators: ''
  },
  slots: {
    default: { description: 'The radio button label content.' }
  },
  eventsDescs: {
    input: 'Emitted each time the state of the radio button changes. It updates the v-model value in Vue 2.x only.<br>A boolean for the current state is passed as a parameter.',
    'update:modelValue': 'Emitted each time the state of the radio button changes. It updates the v-model value in Vue 3 only.<br>A boolean for the current state is passed as a parameter.',
    focus: 'Emitted on each radio button focus. The focus DOM event is returned as a parameter.'
  }
}

export default {
  data: () => ({
    radios,
    radio
  }),

  computed: {
    // Reads all the props and events directly from the component, so that as soon as a new prop or event
    // is added it will appear even if no description is yet provided.
    radiosProps () {
      return { ...WRadios.props, ...FormElementMixin.props }
    },
    radioProps () {
      return { ...WRadio.props, ...FormElementMixin.props }
    },
    radiosEvents () {
      return WRadios.emits.reduce((obj, label) => (obj[label] = { description: radios.eventsDescs[label] || '' }) && obj, {})
    },
    radioEvents () {
      return WRadio.emits.reduce((obj, label) => (obj[label] = { description: radio.eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
