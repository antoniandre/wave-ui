<template lang="pug">
div
  title-link.mt4.code(h1 slug="w-form")
    | w-form
    w-tag.ml3(bg-color="orange" lg color="white") In Progress

  alert.mt6(info)
    .title5 The #[span.code w-form] component is used for validation.

    | A #[span.code w-form] is invisible and has no style by default. You can put it in a
    | #[span.code w-card] (or put a #[span.code w-card] in it) to have some style or apply colors
    | and spaces CSS classes.

  title-link(h2) Basic validation
  example
    w-form.pa6.blue-light5--bg(v-model="form1.valid")
      w-input(label="First name" :validation="validations.firstName")
      w-input(label="Last name" :validation="validations.lastName")
      .text-right.mt6
        | v-model:
        code.ml2.mr4 {{ form1.valid === false ? 'false' : form1.valid || 'null' }}
        //- @todo: validation on keyup.
        //- w-button(type="submit" :disabled="form1.valid === false") Validate
        w-button(type="submit") Validate
    template(#pug).
      w-form.pa6.blue-light5--bg(v-model="valid")
        w-input(label="First name" :validation="validations.required")
        w-input(label="Last name" :validation="validations.required")
        .text-right.mt6
          | v-model:
          code.ml2.mr4 {{ "\{\{ valid === false ? 'false' : valid || 'null' \}\}" }}
          w-button(type="submit") Validate
    template(#js).
      data: () => ({
        valid: null,
        validations: {
          required: value => !!value || 'This field is required'
        }
      })

  title-link(h2) Submission to a server
  p.mt6.
    The #[span.code w-form] prevents the form submission by default - for modern usage where an AJAX
    call is made on success (#[a(href="#advanced-validation") see the next example: Advanced validation]).#[br]
    But in case you need to send the form as is to the server you can set the #[code allow-submit]
    option to #[span.code true].
  p.mt2.
    In this example, the #[span.code w-form] will handle the validation and block the form submission
    until the form is valid. Then the form will be submitted in another tab to a fake #[span.code test.php].

  example
    w-form(action="test.php" method="post" target="_blank" allow-submit)
      w-input(label="First name" :validation="validations.firstName")
      w-input(label="Last name" :validation="validations.lastName")
      .text-right.mt6
        w-button(type="submit") Validate
    template(#pug).
      w-form(action="test.php" method="post" target="_blank" allow-submit)
        w-input(label="First name" :validation="validations.required")
        w-input(label="Last name" :validation="validations.required")
        .text-right.mt6
          w-button(type="submit") Validate
    template(#js).
      data: () => ({
        valid: null,
        validations: {
          required: value => !!value || 'This field is required'
        }
      })

  title-link(h2) Advanced validation
  p This example shows a simple yet complete lifecycle of a form.
  p.
    It handles the error and success states of the form elements, displays a global message using the
    fired w-form custom events, simulates a form sending to a backend and displays a notification when
    the form is sent.
  example
    w-card.white--bg(content-class="pa0")
      .message-box
        w-transition-fade
          w-alert.my0.text-light(v-if="form3.valid" success no-border)
            | The form is valid, ready to send it!
          w-alert.my0.text-light(v-else-if="form3.valid === false" error no-border)
            | The form has {{ form3.errorsCountSynced }} errors.
      w-form.px8.pt2.pb12(
        v-model="form3.valid"
        :errors-count.sync="form3.errorsCountSynced"
        @validate="form3.sent = false"
        @success="onSuccess(3)"
        @error="form3.errorsCount = $event.errorsCount")
        w-input(required label="First name" :validation="validations.firstName")
        w-input(required label="Last name" :validation="validations.lastName")
        w-input(disabled required label="User name" :validation="validations.firstName")
        w-input.d-iflex(
          value=""
          type="number"
          step="500"
          min="0"
          label="Timeout:"
          label-position="left"
          style="max-width: 110px"
          :validation="validations.firstName"
          required)
        span.ml2 ms

        w-flex.mt4(wrap align-center justify-end)
          w-checkbox(required :validation="validations.consent") I agree to the terms &amp; conditions
          .spacer
          code {{ form3.errorsCountSynced }}
          w-button.mr2(bg-color="warning" type="reset" @click="form3.valid = null") Reset
          w-button(type="submit" :loading="form3.valid && !form3.sent") Validate
      w-notification(
        v-model="form3.sent"
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
            w-button(type="submit" :loading="form.valid &amp;&amp; !form.sent") Validate

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
      valid: null
    },
    form2: {
      valid: null
    },
    form3: {
      valid: null,
      sent: false,
      errorsCount: 0,
      errorsCountSynced: 0
    },
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
