<template lang="pug">
div
  alert.mt6(tip)
    ul
      li.title5 The #[span.code w-form] component is used for validation.
      li.
        A #[span.code w-form] is invisible and has no style by default. You can put it in a
        #[span.code w-card] (or put a #[span.code w-card] in it) to have some style. Alternatively,
        you can apply colors and spaces CSS classes on it (e.g. #[span.code .blue--bg], #[span.code .pa4]).
      li The #[span.code w-form] tag translates to a #[span.code &lt;form&gt;] tag.

  title-link(h2) How it works
  .title3 The validation works in 3 steps:
  ol
    li.title4
      | Add one or more validator functions on the field you want validated
      ssh-pre.body(language="html-vue" label="Vue template").
        &lt;w-input label="First name" :validators="[validators.required]"&gt;&lt;/w-input&gt;
      ssh-pre.body(language="js" label="Javascript").
        data: () => ({
          validators: {
            required: value => !!value || 'This field is required'
          }
        })
    li.mt6.title4
      | Wrap the field in a #[span.code w-form] and add a submit button
      ssh-pre.body(language="html-vue" label="Vue template").
        &lt;w-form&gt;
          &lt;w-input label="First name" :validators="[validators.required]"&gt;&lt;/w-input&gt;

          &lt;w-button type="submit"&gt;Submit&lt;/w-button&gt;
        &lt;/w-form&gt;
    li.mt6.title4
      | That's enough
      p.body.
        you can let the #[span.code w-form] component do the rest!#[br]
        But you might want more options, discover them in the examples bellow.

  alert(tip)
    strong As of version 1.14.4
    p.
      It is also possible to trigger a particular field validation programmatically via
      #[code this.$refs.myField.validate()]. all the validator functions associated on this field will be
      re-run.

  title-link.mt10(h3) Creating a validator function
  p.
    A validator is a custom function that tells Wave UI if the field is valid or invalid when the
    validation happens. It must return either #[span.code true] or a string containing an error
    message in case of invalidaty. An empty string also works.#[br]
    The current value of the field is always passed in parameter to the validator.#[br]#[br]

    In the following snippet, the value is converted to boolean (#[code !!]), and if falsy
    (e.g. empty string) the JavaScript engine will continue through the #[code ||] and will return
    a string to Wave UI, meaning the field is invalid.
  ssh-pre(language="js" label="Javascript").
    data: () => ({
      validators: {
        required: value => !!value || 'This field is required'
        // Other validators...
      }
    })

  w-divider.mt12

  title-link(h2) Basic validation
  p.
    In this example and by default, the fields are validated on #[span.code keyup], on #[span.code blur],
    and on #[span.code submit].#[br]
    The v-model on the #[span.code w-form] gets updated with the form status.
  example
    w-form(v-model="form1.valid")
      w-input(label="First name" :validators="[validators.required, validators.alphabetical]")
      w-input.mt3(label="Last name" :validators="[validators.required]")
      .text-right.mt6
        strong v-model:
        code.ml2.mr4 {{ form1.valid === false ? 'false' : form1.valid || 'null' }}
        w-button(type="submit" :disabled="form1.valid === false") Validate
    template(#html).
      &lt;w-form v-model="valid"&gt;
        &lt;w-input
          label="First name"
          :validators="[validators.required]"&gt;
        &lt;/w-input&gt;

        &lt;w-input
          class="mt3"
          label="Last name"
          :validators="[validators.required]"&gt;
        &lt;/w-input&gt;

        &lt;div class="text-right mt6"&gt;
          &lt;strong&gt;v-model:&lt;/strong&gt;
          &lt;code class="ml2 mr4"&gt;
            {{ "\{\{ valid === false ? 'false' : valid || 'null' \}\}" }}
          &lt;/code&gt;
          &lt;w-button type="submit" :disabled="valid === false"&gt;
            Validate
          &lt;/w-button&gt;
        &lt;/div&gt;
      &lt;/w-form&gt;
    template(#js).
      data: () => ({
        valid: null,
        validators: {
          required: value => !!value || 'This field is required'
        }
      })
  alert(warning)
    strong Heads up!
    div.
      The v-model value has 3 states: #[code true] and #[code false] for success and error, but also
      #[code null] for pristine.#[br]
      Pristine represents the moment where the form is still untouched, neither valid, nor invalid.
  alert(success).
    Even in the most advanced case, Wave UI's form validation is fairly simple, it doesn't
    require you to use #[code $refs].

  title-link(h2) Direct submission to a server
  p.mt6.
    The #[span.code w-form] prevents the form submission by default - for modern usage where an AJAX
    call is made on success (#[a(href="#advanced-validation") see the last example: Advanced validation]).
    #[br]
    But in case you need to send the form as is to the server, you can set the #[code allow-submit]
    option to #[span.code true] and provide a URL via the usual #[code action] attribute, and optionally
    set a #[code method] attribute. Just like a normal #[span.code &lt;form&gt;] tag.#[br]#[br]

    The #[span.code w-form] will handle the validation and prevent the form submission
    until the form is valid. Once the form is valid, the form submission will not be prevented and the
    data will be submitted to the URL set in the #[code action] attribute.
  p.mt2.
    In this example, the form data will be submitted in another tab to a fake #[span.code test.php].

  example
    w-form(action="test.php" method="post" target="_blank" allow-submit)
      w-input(label="First name" :validators="[validators.required]")
      w-input.mt3(label="Last name" :validators="[validators.required]")
      .text-right.mt6
        w-button(type="submit") Validate
    template(#html).
      &lt;w-form
        action="test.php"
        method="post"
        target="_blank"
        allow-submit&gt;

        &lt;w-input
          label="First name"
          :validators="[validators.required]"&gt;
        &lt;/w-input&gt;

        &lt;w-input
          class="mt3"
          label="Last name"
          :validators="[validators.required]"&gt;
        &lt;/w-input&gt;

        &lt;div class="text-right mt6"&gt;
          &lt;w-button type="submit"&gt;Validate&lt;/w-button&gt;
        &lt;/div&gt;
      &lt;/w-form&gt;
    template(#js).
      data: () => ({
        validators: {
          required: value => !!value || 'This field is required'
        }
      })

  alert(tip).
    To submit a form via the HTML standard way like in this example, you need to add
    the #[code action] attribute and optionally a #[code method] attribute.

  title-link(h2) Validate on submit, on blur, on keyup
  p.
    By default the validation happens on #[span.code keyup], on #[span.code blur] and on
    #[span.code submit]. You can disable the #[span.code keyup] and #[span.code blur] validations
    with #[code no-keyup-validation] and #[code no-blur-validation].
  example
    w-form(no-keyup-validation no-blur-validation)
      w-input(label="First name" :validators="[validators.required]")
      w-input.mt3(label="Last name" :validators="[validators.required]")
      .text-right.mt6
        w-button(type="submit") Validate
    template(#html).
      &lt;w-form no-keyup-validation no-blur-validation&gt;
        &lt;w-input
          label="First name"
          :validators="[validators.required]"&gt;
        &lt;/w-input&gt;

        &lt;w-input
          class="mt3"
          label="Last name"
          :validators="[validators.required]"&gt;
        &lt;/w-input&gt;

        &lt;div class="text-right mt6"&gt;
          &lt;w-button type="submit"&gt;Validate&lt;/w-button&gt;
        &lt;/div&gt;
      &lt;/w-form&gt;
    template(#js).
      data: () => ({
        validators: {
          required: value => !!value || 'This field is required'
        }
      })

  title-link(h2) Reset the form
  p.
    Once the form is invalid, you can reset it with a basic HTML reset button, like in this example.#[br]
    Alternatively, you can programmatically reset the form and all its element by setting the form
    value (or v-model) to #[code null], like pristine.
  example
    w-form(v-model="form4.valid")
      w-input(label="First name" :validators="[validators.required]")
      w-input.mt3(label="Last name" :validators="[validators.required]")
      .text-right.mt6
        w-button.my1.mr2(bg-color="warning" type="reset") Reset
        w-button.my1(type="submit") Validate
    template(#html).
      &lt;w-form v-model="valid"&gt;
        &lt;w-input
          label="First name"
          :validators="[validators.required]"&gt;
        &lt;/w-input&gt;

        &lt;w-input
          class="mt3"
          label="Last name"
          :validators="[validators.required]"&gt;
        &lt;/w-input&gt;

        &lt;div class="text-right mt6"&gt;
          &lt;w-button
            class="my1 mr2"
            bg-color="warning"
            type="reset"&gt;
            Reset
          &lt;/w-button&gt;
          &lt;w-button
            class="my1"
            type="submit"&gt;
            Validate
          &lt;/w-button&gt;
        &lt;/div&gt;
      &lt;/w-form&gt;
    template(#js).
      data: () => ({
        valid: null,
        validators: {
          required: value => !!value || 'This field is required'
        }
      })

  title-link(h2) On validate, on success &amp; on error events
  p.title5 These events are fired on submit.
  ul
    li.mt1.
      #[code before-validate] is always fired as soon as a submission is attempted (e.g. submit
      button click), prior validation.
    li.mt1 #[code validate] is always fired as soon as a submission is attempted, after validation.
    li.mt1.
        #[code success] is fired after submission when the validation is successful.
        You should send the data to the server from this hook.
    li.mt1.
        #[code error] is fired after submission when the validation is failing.
        You can show an error message from this hook.
  alert(tip).
    The form status is always accurate (through the #[span.code v-model]), and the #[code error] &amp;
    #[code success] events return the #[span.code errorsCount].#[br]
    So the only thing you could be missing at this point is the exact number of errors between the
    submission attempts (if you need it) since a #[span.code keyup] or #[span.code blur] event may trigger
    an error or success on that element. The next example introduces the #[code errors-count] syncing
    for this purpose.
  example
    w-alert(:success="form5.success" :error="form5.error" :info="!form5.success && !form5.error")
      | {{ !form5.success && !form5.error ? 'The form is still pristine'
      |                                   : (form5.success ? 'Success' : 'Error') }}
    p The form has been validated {{ form5.validated }} time(s).
    w-form(
      @validate="form5.validated++;form5.success = form5.error = false"
      @success="form5.success = true"
      @error="form5.error = true")
      w-input(label="First name" :validators="[validators.required]")
      w-input.mt3(label="Last name" :validators="[validators.required]")
      .text-right.mt6
        w-button(type="submit") Validate
    template(#html).
      &lt;w-alert
        :success="success"
        :error="error"
        :info="!success &amp;&amp; !error"&gt;
        {{ "\{\{ !success && !error ? 'The form is still pristine' : (success ? 'Success' : 'Error') \}\}" }}
      &lt;/w-alert&gt;

      &lt;p&gt;
        The form has been validated {{ '\{\{ validated \}\}' }} time(s).
      &lt;/p&gt;

      &lt;w-form
        @validate="validated++;success = error = false"
        @success="success = true"
        @error="error = true"&gt;

        &lt;w-input
          label="First name"
          :validators="[validators.required]"&gt;
        &lt;/w-input&gt;

        &lt;w-input
          class="mt3"
          label="Last name"
          :validators="[validators.required]"&gt;
        &lt;/w-input&gt;

        &lt;div class="text-right mt6"&gt;
          &lt;w-button type="submit"&gt;Validate&lt;/w-button&gt;
        &lt;/div&gt;
      &lt;/w-form&gt;
    template(#js).
      data: () => ({
        success: null,
        error: null,
        validated: 0,
        validators: {
          required: value => !!value || 'This field is required'
        }
      })

  title-link(h2 slug="advanced-validation") Advanced validation with everything
  p.
    This example shows a full form validation and lifecycle - everything you could need.#[br]
  ul
    li It handles the error and success states of the form elements on keyup, on blur and submit.
    li It allows resetting the form.
    li.
      It keeps track of the form errors count at any time and displays a global message using the fired
      #[span.code w-form] custom events.#[br]
    li.
      When the form is valid and submitted, it simulates a form sending to a backend and displays
      a notification.
  example
    w-card.white--bg(content-class="pa0")
      .message-box
        w-transition-fade
          w-alert.my0.text-light(v-if="form6.submitted" success no-border)
            | The form is valid, ready to send it!
          w-alert.my0.text-light(v-else-if="form6.valid === false" error no-border)
            | The form has {{ form6.errorsCount }} errors.
      w-form.px8.pt2.pb12(
        v-model="form6.valid"
        :errors-count.sync="form6.errorsCount"
        @validate="onValidate"
        @success="onSuccess")
        w-input(required label="First name" :validators="[validators.required]")
        w-input.mt3(required label="Last name" :validators="[validators.required]")
        w-input.mt3(disabled required label="User name" :validators="[validators.required]")

        w-flex.mt4(wrap align-center justify-end)
          w-checkbox(required :validators="[validators.consent]") I agree to the terms &amp; conditions
          .spacer
          w-button.my1.mr2(
            bg-color="warning"
            type="reset"
            @click="form6.submitted = form6.sent = false") Reset
          w-button.my1(
            type="submit"
            :disabled="form6.valid === false"
            :loading="form6.submitted && !form6.sent") Validate
      w-notification(
        v-model="form6.sent"
        success
        transition="bounce"
        absolute
        plain
        round
        bottom) The form was sent successfully!
    template(#html).
      &lt;w-card class="white--bg" content-class="pa0"&gt;
        &lt;div class="message-box"&gt;
          &lt;w-transition-fade&gt;
            &lt;w-alert
              class="my0 text-light"
              v-if="form.submitted"
              success
              no-border&gt;
              The form is valid, ready to send it!
            &lt;/w-alert&gt;

            &lt;w-alert
              class="my0 text-light"
              v-else-if="form.valid === false"
              error
              no-border&gt;
              The form has {{ '\{\{ form.errorsCount \}\}' }} errors.
            &lt;/w-alert&gt;
          &lt;/w-transition-fade&gt;
        &lt;/div&gt;

        &lt;w-form
          class="px8 pt2 pb12"
          v-model="form.valid"
          :errors-count.sync="form.errorsCount"
          @validate="onValidate"
          @success="onSuccess"&gt;

          &lt;w-input
            required
            label="First name"
            :validators="[validators.required]"&gt;
          &lt;/w-input&gt;

          &lt;w-input
            class="mt3"
            required
            label="Last name"
            :validators="[validators.required]"&gt;
          &lt;/w-input&gt;

          &lt;w-input
            class="mt3"
            disabled
            required
            label="User name"
            :validators="[validators.required]"&gt;
          &lt;/w-input&gt;

          &lt;w-flex class="mt4" wrap align-center justify-end&gt;
            &lt;w-checkbox
              required
              :validators="[validators.consent]"&gt;
              I agree to the terms &amp; conditions
            &lt;/w-checkbox&gt;

            &lt;div class="spacer" /&gt;

            &lt;w-button
              class="my1 mr2"
              bg-color="warning"
              type="reset"
              @click="form.submitted = form.sent = false"&gt;
              Reset
            &lt;/w-button&gt;

            &lt;w-button
              class="my1"
              type="submit"
              :disabled="form.valid === false"
              :loading="form.submitted &amp;&amp; !form.sent"&gt;
              Validate
            &lt;/w-button&gt;
          &lt;/w-flex&gt;
        &lt;/w-form&gt;

        &lt;w-notification
          v-model="form.sent"
          success
          transition="bounce"
          absolute
          plain
          round
          bottom&gt;
          The form was sent successfully!
        &lt;/w-notification&gt;
      &lt;/w-card&gt;
    template(#js).
      data: () => ({
        form: {
          valid: null,
          submitted: false,
          sent: false,
          errorsCount: 0
        },
        validators: {
          required: value => !!value || 'This field is required',
          consent: value => !!value || 'You must agree'
        }
      }),

      methods: {
        onSuccess () {
          setTimeout(() => (this.form.sent = true), 2000)
        },
        onValidate () {
          this.form.sent = false
          this.form.submitted = this.form.errorsCount === 0
        }
      }
    template(#css).
      .message-box {min-height: 35px;}

  title-link(h2) Disabled &amp; readonly form
  p.
    You can add the #[code disabled] or #[code readonly] prop on the #[strong.code w-form] tag to
    disable all the fields or set them all to readonly.
  alert(warning)
    strong Caution
    div.
      Wave UI will not reset the validity of the fields when you toggle the #[code disabled]
      or #[code readonly] prop on the #[strong.code w-form]: the field is becoming uneditable but
      may contain invalid data.
  example
    w-button(
      :outline="!form7.disabled"
      @click="form7.readonly = false;form7.disabled = !form7.disabled") Form disabled
    w-button.ml2(
      :outline="!form7.readonly"
      @click="form7.disabled = false;form7.readonly = !form7.readonly") Form readonly

    w-form.mt4(v-model="form7.valid" :disabled="form7.disabled" :readonly="form7.readonly")
      w-input(label="First name" :validators="[validators.required, validators.alphabetical]")
      w-input.mt3(label="Last name" :validators="[validators.required]")
      w-flex.mt4(justify-end)
        w-button(type="reset" bg-color="warning") Reset
        w-button.ml2(type="submit" :disabled="form7.valid === false") Validate
    //- template(#pug).
      w-button(
        :outline="!form.disabled"
        @click="form.readonly = false;form.disabled = !form.disabled") Form disabled
      w-button.ml2(
        :outline="!form.readonly"
        @click="form.disabled = false;form.readonly = !form.readonly") Form readonly

      w-form.mt4(v-model="form.valid" :disabled="form.disabled" :readonly="form.readonly")
        w-input(label="First name" :validators="[validators.required, validators.alphabetical]")
        w-input.mt3(label="Last name" :validators="[validators.required]")
        w-flex.mt4(justify-end)
          w-button(type="reset" bg-color="warning") Reset
          w-button.ml2(type="submit" :disabled="form.valid === false") Validate
    template(#html).
      &lt;w-button
        :outline="!form.disabled"
        @click="form.readonly = false;form.disabled = !form.disabled"&gt;
        Form disabled
      &lt;/w-button&gt;
      &lt;w-button
        class="ml2"
        :outline="!form.readonly"
        @click="form.disabled = false;form.readonly = !form.readonly"&gt;
        Form readonly
      &lt;/w-button&gt;

      &lt;w-form
        v-model="form.valid"
        :disabled="form.disabled"
        :readonly="form.readonly"
        class="mt4"&gt;
        &lt;w-input
          label="First name"
          :validators="[validators.required, validators.alphabetical]"&gt;
        &lt;/w-input&gt;
        &lt;w-input
          label="Last name"
          :validators="[validators.required]"
          class="mt3"&gt;
        &lt;/w-input&gt;

        &lt;w-flex justify-end class="mt4"&gt;
          &lt;w-button
            type="reset"
            bg-color="warning"&gt;
            Reset
          &lt;/w-button&gt;
          &lt;w-button
            type="submit"
            :disabled="form.valid === false"
            class="ml2"&gt;
            Validate
          &lt;/w-button&gt;
        &lt;/w-flex&gt;
      &lt;/w-form&gt;
    template(#js).
      data: () => ({
        form: {
          valid: null,
          disabled: false,
          readonly: false
        },
        validators: {
          required: value => !!value || 'This field is required',
          alphabetical: value => /^[a-z \-']+$/i.test(value) || 'This field only accepts letters.'
        }
      })

  title-link(h2) Asynchronous validations
  p You may want to validate a field on server side, for this you can use an asynchronous validator.
  alert(tip).
    You should first be familiar with Promises and #[span.code async]/#[span.code await].
    If you're not you can read about it
    #[a(href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function" target="_blank") here].
  p.
    This example presents a common case: checking if a username is already in use from a user
    registration page.#[br]
    If you type exactly #[code waveui] which is already taken, an error message will appear after
    connecting to a server, via an Axios request for instance.#[br]
    A spinner is also displayed while the server is being requested.

  example(content-class="pa6")
    w-form(error-placeholders)
      w-input(
        label="Username"
        :validators="[validators.required, validators.username]"
        :inner-icon-right="form1.loading ? 'mdi mdi-autorenew w-icon--spin' : ''"
        :loading="form1.loading"
        autocomplete="off")
    //- template(#pug).
      w-form(error-placeholders)
        w-input(
          label="Username"
          :validators="[validators.required, validators.username]"
          :inner-icon-right="form.loading ? 'mdi mdi-autorenew w-icon--spin' : ''"
          :loading="form1.loading"
          autocomplete="off")
    template(#html).
      &lt;w-form error-placeholders&gt;
        &lt;w-input
          label="Username"
          :validators="[validators.required, validators.username]"
          :inner-icon-right="form.loading ? 'mdi mdi-autorenew w-icon--spin' : ''"
          :loading="form.loading"
          autocomplete="off"&gt;
        &lt;/w-input&gt;
      &lt;/w-form&gt;
    template(#js).
      // Here we need access to `this`, so we can't use an arrow function.
      data () {
        return {
          loading: false,
          validators: {
            required: value => !!value || 'This field is required',
            username: async value => {
              // Display the spinner while loading.
              this.loading = true

              // Simulate a server call: wait for 800ms.
              await new Promise(r => setTimeout(r, 800))

              // Remove the spinner.
              this.loading = false

              // If value is not 'waveui' return true (valid field).
              // Otherwise (||) return the error message.
              return value !== 'waveui' || 'This username is already in use'
            }
          }
        }
      }

  title-link(h3) Loading bar color
  p.
    You can provide a custom loading bar color via the prop #[code progress-color].#[br]
    Example with #[code progress-color="cyan"]:
  w-input.mt5(
    label="Username"
    :loading="true"
    progress-color="cyan"
    autocomplete="off")
</template>

<script>
export default {
  data () {
    return {
      form1: {
        valid: null,
        loading: false
      },
      form2: {
        valid: null
      },
      form3: {
        valid: null
      },
      form4: {
        valid: null
      },
      form5: {
        valid: null,
        error: null,
        success: null,
        validated: 0
      },
      form6: {
        valid: null,
        submitted: false,
        sent: false,
        errorsCount: 0
      },
      form7: {
        valid: null,
        disabled: false,
        readonly: false
      },
      validators: {
        username: async value => {
          this.form1.loading = true
          // Simulate a server call: wait for 800ms.
          await new Promise(r => setTimeout(r, 800))

          this.form1.loading = false
          return value !== 'waveui' || 'This username is already in use'
        },
        required: value => !!value || 'This field is required',
        alphabetical: value => /^[a-z \-']+$/i.test(value) || 'This field only accepts letters.',
        consent: value => !!value || 'You must agree'
      }
    }
  },

  methods: {
    onSuccess () {
      setTimeout(() => (this.form6.sent = true), 2000)
    },
    onValidate () {
      this.form6.sent = false
      this.form6.submitted = this.form6.errorsCount === 0
    }
  }
}
</script>

<style lang="scss">
.message-box {min-height: 35px;}
</style>
