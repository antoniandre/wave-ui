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
import WForm from '@/wave-ui/components/w-form'

const propsDescs = {
  value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>',
  allowSubmit: '',
  noKeyupValidation: '',
  noBlurValidation: '',
  errorPlaceholders: ''
}

const slots = {
  default: { description: 'The form content.' }
}

const eventsDescs = {
  submit: 'Emmited on form submit.',
  'before-validate': 'Emmited before validation, every time a validation is triggered.',
  validate: 'Emmited on form validate, every time a validation is triggered.',
  success: 'Emmited on form success, when there is no error in the form and the validation is successful.',
  error: 'Emmited on form error, when there is at least one error in the form and the validation fails.',
  reset: 'Emmited on form reset. A reset can be triggered by setting the v-model value to null or by clicking on a reset button.',
  input: 'Emmited every time the form status changes. It updates the v-model value in Vue 2.x only.<br>The new status value is passed as a parameter.',
  'update:modelValue': 'Emmited every time the form status changes. It updates the v-model value in Vue 3 only.<br>The new status value is passed as a parameter.',
  'update:errorsCount': 'Emmited every time the errorsCount changes. To be used with <code>:errors-count.sync</code> on Vue 2.x or <code>v-model:errors-count</code> on Vue 3.'
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
      return WForm.props
    },
    events () {
      return WForm.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
