<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import FormElementMixin from '@/wave-ui/mixins/form-elements'
import WSwitch from '@/wave-ui/components/w-switch'

const propsDescs = {
  value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Dictates the state of the switch. When the user toggles the switch, the <code>v-model</code> value will be updated.',
  label: 'Sets a visible label for the switch.',
  labelOnLeft: 'Moves the label to the left of the switch. By default the label is displayed on the right.',
  color: 'Applies a color to the switch. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',
  thin: 'Applies a thiner style to the switch.',
  noRipple: 'Removes the ripple animation on activation.',
  name: 'Provide a native HTML <code>name</code> attribute to the switch. If not provided, a unique name will be computed.',
  disabled: 'Disables the switch making it unreactive to user interactions.',
  readonly: 'The switch will still look like an interactive switch except that it is read-only: its current state cannot be changed by user interaction.',
  required: 'Applies the native HTML <code>required</code> attribute to the switch.',
  validators: '<span class="deep-orange">Only for validation, when the switch is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the switch. Each function will be executed on switch validation and should return true when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the switch.'
}

const slots = {
  default: { description: 'The switch label content, if the label prop is not flexible enough.' }
}

const events = {
    input: {
      description: 'Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 2.x only.',
      params: {
        '[Boolean]': 'A boolean representing the current state of the switch.'
      }
    },
    'update:modelValue': {
      description: 'Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 3 only.',
      params: {
        '[Boolean]': 'A boolean representing the current state of the switch.'
      }
    },
    focus: {
      description: 'Emitted on switch focus.',
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
      return { ...WSwitch.props, ...FormElementMixin.props }
    },
    events () {
      return WSwitch.emits.reduce((obj, label) => (obj[label] = events[label] || {}) && obj, {})
    }
  }
}
</script>
