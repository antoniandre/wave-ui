<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WForm from '@/wave-ui/components/w-form'

const propsDescs = {
  value: '<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Contains the status of the form validity at all times. Three values are possible: <code>null</code> when pristine (untouched), <code>false</code> when invalid, <code>true</code> when valid.<br>This value gets updated every time a validation is triggered on a single field or on all the fields at once on form submit.<br>Setting this value to <code>null</code> will reset the form.',
  allowSubmit: 'Native HTML submits the form to the server when all the form elements are valid.<br>Usually and by default, the form submission is prevented and an AJAX call is made from the front end. This is completely up to the developer.',
  noKeyupValidation: 'Prevents the form element validation on keyup (happening by default).',
  noBlurValidation: 'Prevents the form element validation on blur (happening by default).',
  errorPlaceholders: 'Reserves a space under all the form elements so that triggering an error and showing the error message will not change the height of the form.',
  disabled: 'Disables all the form fields all at once, making them unreactive to user interactions.',
  readonly: 'Set all the form fields to readonly all at once. The fields will still look interactive but their value will not be editable by user interaction.',
}

const slots = {
  default: { description: 'The form content.' }
}

const events = {
  submit: {
    description: 'Emitted on form submit.',
    params: {
      '[DOM event object]': 'The associated reset DOM event.'
    }
  },
  'before-validate': {
    description: 'Emitted before validation, every time a validation is triggered.'
  },
  validate: {
    description: 'Emitted on form validate, every time a validation is triggered.<br>Returns a single object containing:',
    params: {
      e: 'The associated DOM event.',
      errorsCount: 'An integer representing the number of errors in the form.'
    }
  },
  success: {
    description: 'Emitted on form success, when there is no error in the form and the validation is successful.<br>Returns a single object containing:',
    params: {
      e: 'The associated DOM event.',
      errorsCount: 'An integer representing the number of errors in the form.'
    }
  },
  error: {
    description: 'Emitted on form error, when there is at least one error in the form and the validation fails.<br>Returns a single object containing:',
    params: {
      e: 'The associated DOM event.',
      errorsCount: 'An integer representing the number of errors in the form.'
    }
  },
  reset: {
    description: 'Emitted on form reset. A reset can be triggered by setting the v-model value to null or by clicking on a reset button.',
    params: {
      '[DOM event object]': 'The associated reset DOM event.'
    }
  },
  input: {
    description: 'Emitted every time the form status changes.<br>Updates the v-model value in Vue 2.x only.',
    params: {
      '[Boolean, Null]': 'The new status of the form: one of <code>null</code> when pristine, <code>false</code> when invalid, <code>true</code> when valid.'
    }
  },
  'update:modelValue': {
    description: 'Emitted every time the form status changes.<br>Updates the v-model value in Vue 3 only.',
    params: {
      '[Boolean, Null]': 'The new status of the form: one of <code>null</code> when pristine, <code>false</code> when invalid, <code>true</code> when valid.'
    }
  },
  'update:errorsCount': {
    description: 'Emitted every time the errorsCount changes. To be used with <code>:errors-count.sync</code> on Vue 2.x or <code>v-model:errors-count</code> on Vue 3.',
    params: {
      '[Integer]': 'The number of errors in the form.'
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
      return WForm.props
    },
    events () {
      return WForm.emits.reduce((obj, label) => (obj[label] = events[label] || {}) && obj, {})
    }
  }
}
</script>
