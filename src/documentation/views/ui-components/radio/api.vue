<template lang="pug">
div
  .w-divider.my12

  //- w-radios.
  title-link.title1(h2 slug="w-radios-api") &lt;w-radios&gt; API

  component-api.mt0(:items="radiosProps" :descriptions="radios.propsDescs" title="Props")

  component-api(:items="radios.slots" title="Slots")

  component-api(:items="radiosEvents" title="Events")

  .w-divider.my12

  //- w-radio.
  title-link.title1(h2 slug="w-radio-api") &lt;w-radio&gt; API

  component-api.mt0(:items="radioProps" :descriptions="radio.propsDescs" title="Props")

  component-api(:items="radio.slots" title="Slots")

  component-api(:items="radioEvents" title="Events")
</template>

<script>
import FormElementMixin from '@/wave-ui/mixins/form-elements'
import WRadios from '@/wave-ui/components/w-radios.vue'
import WRadio from '@/wave-ui/components/w-radio.vue'

const radios = {
  propsDescs: {
    items: 'An array of radio button items to display. Each item object should contain at least a <code>label</code> or a <code>value</code> attribute.',
    value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Provide a value (of one of the <code>items</code> objects) to dictate the selected choice.<br>This value gets updated when using a v-model.',
    labelOnLeft: 'Moves the label to the left of each radio button. By default the label is displayed on the right.',
    itemLabelKey: 'The property name (aka key) in each item object where to find the label of the item (if any).',
    itemValueKey: 'The property name (aka key) in each item object where to find the value of the item (if any).',
    itemColorKey: 'The property name (aka key) in each item object where to find the color of the item (if any).',
    inline: 'Displays all the radio buttons inline instead of in column.',
    color: 'Applies a color to the active radio buttons. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
    name: 'Provide a native HTML <code>name</code> attribute to each radio button. If not provided, a unique common name will be computed and applied to all the radio buttons.',
    disabled: 'Disables all the radio buttons making them unreactive to user interactions.',
    readonly: 'The radio button will still look like an interactive radio button except that it is read-only: its current value cannot be changed by user interaction.',
    required: 'Applies the native HTML <code>required</code> attribute to each radio button.',
    validators: '<span class="deep-orange">Only for validation, when the <strong class="code">w-radios</strong> component is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the radio button. Each function will be executed on radio button validation and should return true when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the radio button.'
  },
  slots: {
    item: { description: 'Provide a custom content for each radio button label.' }
  },
  events: {
    input: {
      description: 'Emitted each time any of the radio buttons is toggled.<br>Updates the v-model value in Vue 2.x only.',
      params: {
        '[String, Number, Boolean]': 'The <code>return-value</code> of the selected radio button.<br>The <code>return-value</code> will be one of the following attributes, if they exist, in this order: the item value, the item label, the item index.'
      }
    },
    'update:modelValue': {
      description: 'Emitted each time any of the radio buttons is toggled.<br>Updates the v-model value in Vue 3 only.',
      params: {
        '[String, Number, Boolean]': 'The <code>return-value</code> of the selected radio button.<br>The <code>return-value</code> will be one of the following attributes, if they exist, in this order: the item value, the item label, the item index.'
      }
    },
    focus: {
      description: 'Emitted on each radio button focus.',
      params: {
        '[DOM event object]': 'The associated focus DOM event.'
      }
    }
  }
}

const radio = {
  propsDescs: {
    value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Provide a boolean to dictate the selected state of the radio button.<br>This value gets updated when using a v-model.',
    returnValue: 'Since the native HTML radio uses the <code>value</code> attribute to define the selected state, the <code>return-value</code> prop let you specify a value to return to the <code>v-model</code> when the radio is selected (instead of returning <code>true</code>).',
    label: 'Sets a visible label for the radio button.',
    labelOnLeft: 'Moves the label to the left of the radio button. By default the label is displayed on the right.',
    color: 'Applies a color to the radio button when active. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
    noRipple: 'Removes the ripple animation on select.',
    name: 'Provide a native HTML <code>name</code> attribute to the radio button. If not provided, a unique name will be computed.',
    disabled: 'Disables the radio button making it unreactive to user interactions.',
    readonly: 'The radio button will still look like an interactive radio button except that it is read-only: its current value cannot be changed by user interaction.',
    required: 'Applies the native HTML <code>required</code> attribute to the radio button.',
    validators: '<span class="deep-orange">Only for validation, when this radio button is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the radio button. Each function will be executed on radio button validation and should return true when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the radio button.'
  },
  slots: {
    default: { description: 'The radio button label content.' }
  },
  events: {
    input: {
      description: 'Emitted each time the state of the radio button changes.<br>Updates the v-model value in Vue 2.x only.',
      params: {
        '[Boolean]': 'The current state of the radio button.'
      }
    },
    'update:modelValue': {
      description: 'Emitted each time the state of the radio button changes.<br>Updates the v-model value in Vue 3 only.',
      params: {
        '[Boolean]': 'The current state of the radio button.'
      }
    },
    focus: {
      description: 'Emitted on each radio button focus.',
      params: {
        '[DOM event object]': 'The associated focus DOM event.'
      }
    }
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
      return WRadios.emits.reduce((obj, label) => (obj[label] = radios.events[label] || {}) && obj, {})
    },
    radioEvents () {
      return WRadio.emits.reduce((obj, label) => (obj[label] = radio.events[label] || {}) && obj, {})
    }
  }
}
</script>
