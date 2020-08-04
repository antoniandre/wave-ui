<template lang="pug">
div
  title-link.mt4.code(h1 slug="w-form")
    | w-form
    w-tag.ml3(bg-color="orange" lg color="white") In Progress

  title-link(h2) Form &amp; validation
  p This example shows a simple yet complete lifecycle of a form.
  p.
    It handles the error and success states of the form elements, displays a global message using the
    fired w-form custom events, simulates a form sending to a backend and displays a notification when
    the form is sent.
  example
    w-card.white--bg(content-class="pa0")
      .message-box
        w-transition-fade
          w-alert.my0.text-light(v-if="formValid1" success no-border)
            | The form is valid, ready to send it!
          w-alert.my0.text-light(v-else-if="formValid1 === false" error no-border)
            | The form has errors.
      w-form.px8.pt2.pb12(
        v-model="formValid1"
        @validate="formSent1 = false"
        @success="onSuccess(1)"
        @error="")
        w-input(required label="First name" :validation="validations.firstName")
        w-flex.mt4(wrap align-center justify-end)
          w-checkbox(required :validation="validations.consent") I agree to the terms &amp; conditions
          .spacer
          w-button(bg-color="primary" type="submit" :loading="formValid1 && !formSent1") Validate
      w-notification(
        v-model="formSent1"
        success
        transition="bounce"
        absolute
        plain
        round
        bottom) The form was sent successfully!
    template(#pug).
      w-card.white--bg(content-class="pa0")
        .message-box
          w-transition-fade
            w-alert.my0.text-light(v-if="formValid" success no-border)
              | The form is valid, ready to send it!
            w-alert.my0.text-light(v-else-if="formValid === false" error no-border)
              | The form has errors.

        w-form.px8.pt2.pb12(
          v-model="formValid"
          @validate="formSent = false"
          @success="onSuccess"
          @error="")
          w-input(required label="First name" :validation="validations.firstName")
          w-flex.mt4(wrap align-center justify-end)
            w-checkbox I agree to the terms &amp; conditions
            .spacer
            w-button(bg-color="primary" type="submit" :loading="formValid &amp;&amp; !formSent") Validate

        w-notification(
          v-model="formSent"
          success
          transition="bounce"
          absolute
          plain
          round
          bottom) The form was sent successfully!
    template(#js).
      data: () => ({
        formValid: null,
        formSent: false,
        validations: {
          firstName: value => !!value || 'This field is required'
        }
      }),

      methods: {
        onSuccess () {
          setTimeout(() => (this.formSent = true), 2000)
        }
      }
    template(#css).
      .message-box {min-height: 35px;}
</template>

<script>
export default {
  data: () => ({
    formValid1: null,
    formSent1: false,
    // formValid2: null,
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
      setTimeout(() => (this[`formSent${id}`] = true), 2000)
    }
  }
}
</script>

<style lang="scss">
.message-box {min-height: 35px;}
</style>
