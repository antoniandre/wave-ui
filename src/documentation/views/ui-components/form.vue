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
          w-alert.my0.text-light(v-if="form1.valid" success no-border)
            | The form is valid, ready to send it!
          w-alert.my0.text-light(v-else-if="form1.valid === false" error no-border)
            | The form has {{ form1.errorsCount }} errors.
      w-form.px8.pt2.pb12(
        v-model="form1.valid"
        @validate="form1.sent = false"
        @success="onSuccess(1)"
        @error="form1.errorsCount = $event.errorsCount")
        w-input(required label="First name" :validation="validations.firstName")
        w-input(required label="Last name" :validation="validations.lastName")
        w-input(disabled required label="User name" :validation="validations.firstName")
        w-flex.mt4(wrap align-center justify-end)
          w-checkbox(required :validation="validations.consent") I agree to the terms &amp; conditions
          .spacer
          w-button(bg-color="primary" type="submit" :loading="form1.valid && !form1.sent") Validate
      w-notification(
        v-model="form1.sent"
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
            w-alert.my0.text-light(v-if="form.valid" success no-border)
              | The form is valid, ready to send it!
            w-alert.my0.text-light(v-else-if="form.valid === false" error no-border)
              | The form has {{ '\{\{ form.errorsCount \}\}' }} errors.

        w-form.px8.pt2.pb12(
          v-model="form.valid"
          @validate="form.sent = false"
          @success="onSuccess"
          @error="form.errorsCount = $event.errorsCount")
          w-input(required label="First name" :validation="validations.firstName")
          w-input(required label="Last name" :validation="validations.lastName")
          w-flex.mt4(wrap align-center justify-end)
            w-checkbox I agree to the terms &amp; conditions
            .spacer
            w-button(bg-color="primary" type="submit" :loading="form.valid &amp;&amp; !form.sent") Validate

        w-notification(
          v-model="form.sent"
          success
          transition="bounce"
          absolute
          plain
          round
          bottom) The form was sent successfully!
    template(#js).
      data: () => ({
        form: {
          valid: null,
          sent: false,
          errorsCount: 0
        },
        validations: {
          firstName: value => !!value || 'This field is required',
          lastName: value => !!value || 'This field is required'
        }
      }),

      methods: {
        onSuccess () {
          setTimeout(() => (this.form.sent = true), 2000)
        }
      }
    template(#css).
      .message-box {min-height: 35px;}
</template>

<script>
export default {
  data: () => ({
    form1: {
      valid: null,
      sent: false,
      errorsCount: 0
    },
    // form2: {
    //   valid: null,
    //   sent: false,
    //   errorsCount: 0
    // }
    validations: {
      firstName: value => !!value || 'This field is required',
      lastName: value => !!value || 'This field is required',
      consent: value => !!value || 'You must agree'
    }
  }),

  methods: {
    onSuccess (id) {
      setTimeout(() => (this[`form${id}`].sent = true), 2000)
    }
  }
}
</script>

<style lang="scss">
.message-box {min-height: 35px;}
</style>
