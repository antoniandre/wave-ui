<template lang="pug">
div
  title-link.mt4.code(h1 slug="w-form")
    | w-form
    w-tag.ml3(bg-color="red" color="white") Coming soon

  title-link(h2) Form &amp; validation
  w-card.pa6
    w-transition-expand(y)
      w-alert(v-if="formSuccess1" success outline) The form is valid, ready to send it!
      w-alert(v-else-if="formSuccess1 === false" error outline) The form has errors.
    w-transition-expand(y)
      w-alert(v-if="formSent1" success) The form was sent successfully!

    w-form(v-model="formSuccess1" @validate="formSent1 = false" @success="onSuccess(1)" @error="")
      w-input(required label="First name" :validation="validations.firstName")
      w-flex.mt4(wrap align-center justify-end)
        w-checkbox(required :validation="validations.consent") I agree
        .spacer
        w-button(type="submit") Validate

  //- title-link(h2) Version 2
  //- w-card.pa6
    w-transition-expand(y)
      w-alert(v-if="formSuccess2" success outline) The form is valid, ready to send it!
      w-alert(v-else-if="formSuccess2 === false" error outline) The form has errors.
    w-transition-expand(y)
      w-alert(v-if="formSent2" success) The form was sent successfully!

    w-form(v-model="formSuccess2" @validate="formSent2 = false" @success="onSuccess(2)" @error="")
      w-input(label="First name" :validation="validations.firstName")
      w-flex.mt4(wrap align-center justify-end)
        w-checkbox(:validation="validations.consent") I agree
        .spacer
        w-button(type="submit") Validate
</template>

<script>
export default {
  data: () => ({
    formSuccess1: null,
    formSent1: false,
    // formSuccess2: null,
    // formSent2: false,
    validations: {
      firstName: value => !!value || 'This field is required',
      consent: value => !!value || 'You must agree'
    }
  }),

  computed: {
  },

  methods: {
    onSuccess (id) {
      console.log('Success, it worked!')
      setTimeout(() => (this[`formSent${id}`] = true), 1000)
    }
  }
}
</script>
