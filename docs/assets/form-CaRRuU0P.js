import{N as e,W as t,_t as n,bt as r,c as i,d as a,g as o,h as s,k as c,l,m as u,u as d}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as f}from"./plugin-vue_export-helper-B80Cc4Ui.js";import{D as p}from"./index-BhRaCC4I.js";var m={class:`title4`},h={class:`mt6 title4`},g={class:`text-right mt6`},_={class:`ml2 mr4`},v={class:`text-right mt6`},y={class:`text-right mt6`},b={class:`text-right mt6`},x={class:`text-right mt6`},S={class:`message-box`};function C(f,p,C,w,T,E){let D=e(`alert`),O=e(`title-link`),k=e(`ssh-pre`),A=e(`w-divider`),j=e(`w-input`),M=e(`w-button`),N=e(`w-form`),P=e(`example`),F=e(`w-alert`),I=e(`w-transition-fade`),L=e(`w-checkbox`),R=e(`w-flex`),z=e(`w-notification`),B=e(`w-card`);return c(),a(`div`,null,[o(D,{class:`mt6`,tip:``},{default:t(()=>[...p[12]||=[i(`ul`,null,[i(`li`,{class:`title5`},[s(`The `),i(`span`,{class:`code`},`w-form`),s(` component is used for validation.`)]),i(`li`,null,[s(`A `),i(`span`,{class:`code`},`w-form`),s(` is invisible and has no style by default. You can put it in a
`),i(`span`,{class:`code`},`w-card`),s(` (or put a `),i(`span`,{class:`code`},`w-card`),s(` in it) to have some style. Alternatively,
you can apply colors and spaces CSS classes on it (e.g. `),i(`span`,{class:`code`},`.blue--bg`),s(`, `),i(`span`,{class:`code`},`.pa4`),s(`).`)]),i(`li`,null,[s(`The `),i(`span`,{class:`code`},`w-form`),s(` tag translates to a `),i(`span`,{class:`code`},`<form>`),s(` tag.`)])],-1)]]),_:1}),o(O,{h2:``},{default:t(()=>[...p[13]||=[s(`How it works`,-1)]]),_:1}),p[82]||=i(`div`,{class:`title3`},`The validation works in 3 steps:`,-1),i(`ol`,null,[i(`li`,m,[p[16]||=s(`Add one or more validator functions on the field you want validated`,-1),o(k,{class:`body`,language:`html-vue`,label:`Vue template`,dark:f.$store.state.darkMode},{default:t(()=>[...p[14]||=[s(`<w-input label="First name" :validators="[validators.required]"></w-input>`,-1)]]),_:1},8,[`dark`]),o(k,{class:`body`,language:`js`,label:`Javascript`,dark:f.$store.state.darkMode},{default:t(()=>[...p[15]||=[s(`data: () => ({
  validators: {
    required: value => !!value || 'This field is required'
  }
})`,-1)]]),_:1},8,[`dark`])]),i(`li`,h,[p[18]||=s(`Wrap the field in a `,-1),p[19]||=i(`span`,{class:`code`},`w-form`,-1),p[20]||=s(` and add a submit button`,-1),o(k,{class:`body`,language:`html-vue`,label:`Vue template`,dark:f.$store.state.darkMode},{default:t(()=>[...p[17]||=[s(`<w-form>
  <w-input label="First name" :validators="[validators.required]"></w-input>

  <w-button type="submit">Submit</w-button>
</w-form>`,-1)]]),_:1},8,[`dark`])]),p[21]||=i(`li`,{class:`mt6 title4`},[s(`That's enough`),i(`p`,{class:`body`},[s(`you can let the `),i(`span`,{class:`code`},`w-form`),s(` component do the rest!`),i(`br`),s(`
But you might want more options, discover them in the examples below.
`)])],-1)]),o(D,{tip:``},{default:t(()=>[...p[22]||=[i(`strong`,null,`As of version 1.14.4`,-1),i(`p`,null,[s(`It is also possible to trigger a particular field validation programmatically via
`),i(`code`,null,`this.$refs.myField.validate()`),s(`. all the validator functions associated on this field will be
re-run.
`)],-1)]]),_:1}),o(O,{class:`mt10`,h3:``},{default:t(()=>[...p[23]||=[s(`Creating a validator function`,-1)]]),_:1}),p[83]||=i(`p`,null,[s(`A validator is a custom function that tells Wave UI if the field is valid or invalid when the
validation happens. It must return either `),i(`span`,{class:`code`},`true`),s(` or a string containing an error
message in case of invalidaty. An empty string also works.`),i(`br`),s(`
The current value of the field is always passed in parameter to the validator.`),i(`br`),i(`br`),s(`

In the following snippet, the value is converted to boolean (`),i(`code`,null,`!!`),s(`), and if falsy
(e.g. empty string) the JavaScript engine will continue through the `),i(`code`,null,`||`),s(` and will return
a string to Wave UI, meaning the field is invalid.`)],-1),o(k,{language:`js`,label:`Javascript`,dark:f.$store.state.darkMode},{default:t(()=>[...p[24]||=[s(`data: () => ({
  validators: {
    required: value => !!value || 'This field is required'
    // Other validators...
  }
})
`,-1)]]),_:1},8,[`dark`]),o(A,{class:`mt12`}),o(O,{h2:``},{default:t(()=>[...p[25]||=[s(`Basic validation`,-1)]]),_:1}),p[84]||=i(`p`,null,[s(`In this example and by default, the fields are validated on `),i(`span`,{class:`code`},`keyup`),s(`, on `),i(`span`,{class:`code`},`blur`),s(`,
and on `),i(`span`,{class:`code`},`submit`),s(`.`),i(`br`),s(`
The v-model on the `),i(`span`,{class:`code`},`w-form`),s(` gets updated with the form status.`)],-1),o(P,null,{pug:t(()=>[...p[28]||=[s(`w-form(v-model="valid")
  w-input(label="First name" :validators="[validators.required, validators.alphabetical]")
  w-input.mt3(label="Last name" :validators="[validators.required]")
  .text-right.mt6
    strong v-model:
    code.ml2.mr4 `+r(`{{ valid === false ? 'false' : valid || 'null' }}`)+`
    w-button(type="submit" :disabled="valid === false") Validate`,-1)]]),html:t(()=>[...p[29]||=[s(`<w-form v-model="valid">
  <w-input
    label="First name"
    :validators="[validators.required]">
  </w-input>

  <w-input
    class="mt3"
    label="Last name"
    :validators="[validators.required]">
  </w-input>

  <div class="text-right mt6">
    <strong>v-model:</strong>
    <code class="ml2 mr4">
      `+r(`{{ valid === false ? 'false' : valid || 'null' }}`)+`
    </code>
    <w-button type="submit" :disabled="valid === false">
      Validate
    </w-button>
  </div>
</w-form>`,-1)]]),js:t(()=>[...p[30]||=[s(`data: () => ({
  valid: null,
  validators: {
    required: value => !!value || 'This field is required'
  }
})`,-1)]]),default:t(()=>[o(N,{modelValue:T.form1.valid,"onUpdate:modelValue":p[0]||=e=>T.form1.valid=e},{default:t(()=>[o(j,{label:`First name`,validators:[T.validators.required,T.validators.alphabetical]},null,8,[`validators`]),o(j,{class:`mt3`,label:`Last name`,validators:[T.validators.required]},null,8,[`validators`]),i(`div`,g,[p[27]||=i(`strong`,null,`v-model:`,-1),i(`code`,_,r(T.form1.valid===!1?`false`:T.form1.valid||`null`),1),o(M,{type:`submit`,disabled:T.form1.valid===!1},{default:t(()=>[...p[26]||=[s(`Validate`,-1)]]),_:1},8,[`disabled`])])]),_:1},8,[`modelValue`])]),_:1}),o(D,{warning:``},{default:t(()=>[...p[31]||=[i(`strong`,null,`Heads up!`,-1),i(`div`,null,[s(`The v-model value has 3 states: `),i(`code`,null,`true`),s(` and `),i(`code`,null,`false`),s(` for success and error, but also
`),i(`code`,null,`null`),s(` for pristine.`),i(`br`),s(`
Pristine represents the moment where the form is still untouched, neither valid, nor invalid.`)],-1)]]),_:1}),o(D,{success:``},{default:t(()=>[...p[32]||=[s(`Even in the most advanced case, Wave UI's form validation is fairly simple, it doesn't
require you to use `,-1),i(`code`,null,`$refs`,-1),s(`.
`,-1)]]),_:1}),o(O,{h2:``},{default:t(()=>[...p[33]||=[s(`Direct submission to a server`,-1)]]),_:1}),p[85]||=u(`<p class="mt6">The <span class="code">w-form</span> prevents the form submission by default - for modern usage where an AJAX
call is made on success (<a href="#advanced-validation">see the last example: Advanced validation</a>).
<br>
But in case you need to send the form as is to the server, you can set the <code>allow-submit</code>
option to <span class="code">true</span> and provide a URL via the usual <code>action</code> attribute, and optionally
set a <code>method</code> attribute. Just like a normal <span class="code">&lt;form&gt;</span> tag.<br><br>

The <span class="code">w-form</span> will handle the validation and prevent the form submission
until the form is valid. Once the form is valid, the form submission will not be prevented and the
data will be submitted to the URL set in the <code>action</code> attribute.</p><p class="mt2">In this example, the form data will be submitted in another tab to a fake <span class="code">test.php</span>.
</p>`,2),o(P,null,{pug:t(()=>[...p[35]||=[s(`w-form(action="test.php" method="post" target="_blank" allow-submit)
  w-input(label="First name" :validators="[validators.required]")
  w-input.mt3(label="Last name" :validators="[validators.required]")
  .text-right.mt6
    w-button(type="submit") Validate`,-1)]]),html:t(()=>[...p[36]||=[s(`<w-form
  action="test.php"
  method="post"
  target="_blank"
  allow-submit>

  <w-input
    label="First name"
    :validators="[validators.required]">
  </w-input>

  <w-input
    class="mt3"
    label="Last name"
    :validators="[validators.required]">
  </w-input>

  <div class="text-right mt6">
    <w-button type="submit">Validate</w-button>
  </div>
</w-form>`,-1)]]),js:t(()=>[...p[37]||=[s(`data: () => ({
  validators: {
    required: value => !!value || 'This field is required'
  }
})
`,-1)]]),default:t(()=>[o(N,{action:`test.php`,method:`post`,target:`_blank`,"allow-submit":``},{default:t(()=>[o(j,{label:`First name`,validators:[T.validators.required]},null,8,[`validators`]),o(j,{class:`mt3`,label:`Last name`,validators:[T.validators.required]},null,8,[`validators`]),i(`div`,v,[o(M,{type:`submit`},{default:t(()=>[...p[34]||=[s(`Validate`,-1)]]),_:1})])]),_:1})]),_:1}),o(D,{tip:``},{default:t(()=>[...p[38]||=[s(`To submit a form via the HTML standard way like in this example, you need to add
the `,-1),i(`code`,null,`action`,-1),s(` attribute and optionally a `,-1),i(`code`,null,`method`,-1),s(` attribute.
`,-1)]]),_:1}),o(O,{h2:``},{default:t(()=>[...p[39]||=[s(`Validate on submit, on blur, on keyup`,-1)]]),_:1}),p[86]||=u(`<p>By default the validation happens on <span class="code">keyup</span>, on <span class="code">blur</span> and on
<span class="code">submit</span>. You can disable the <span class="code">keyup</span> and <span class="code">blur</span> validations
with <code>no-keyup-validation</code> and <code>no-blur-validation</code>.</p>`,1),o(P,null,{pug:t(()=>[...p[41]||=[s(`w-form(no-keyup-validation no-blur-validation)
  w-input(label="First name" :validators="[validators.required]")
  w-input.mt3(label="Last name" :validators="[validators.required]")
  .text-right.mt6
    w-button(type="submit") Validate`,-1)]]),html:t(()=>[...p[42]||=[s(`<w-form no-keyup-validation no-blur-validation>
  <w-input
    label="First name"
    :validators="[validators.required]">
  </w-input>

  <w-input
    class="mt3"
    label="Last name"
    :validators="[validators.required]">
  </w-input>

  <div class="text-right mt6">
    <w-button type="submit">Validate</w-button>
  </div>
</w-form>`,-1)]]),js:t(()=>[...p[43]||=[s(`data: () => ({
  validators: {
    required: value => !!value || 'This field is required'
  }
})
`,-1)]]),default:t(()=>[o(N,{"no-keyup-validation":``,"no-blur-validation":``},{default:t(()=>[o(j,{label:`First name`,validators:[T.validators.required]},null,8,[`validators`]),o(j,{class:`mt3`,label:`Last name`,validators:[T.validators.required]},null,8,[`validators`]),i(`div`,y,[o(M,{type:`submit`},{default:t(()=>[...p[40]||=[s(`Validate`,-1)]]),_:1})])]),_:1})]),_:1}),o(O,{h2:``},{default:t(()=>[...p[44]||=[s(`Reset the form`,-1)]]),_:1}),p[87]||=i(`p`,null,[s(`Once the form is invalid, you can reset it with a basic HTML reset button, like in this example.`),i(`br`),s(`
Alternatively, you can programmatically reset the form and all its element by setting the form
value (or v-model) to `),i(`code`,null,`null`),s(`, like pristine.`)],-1),o(P,null,{pug:t(()=>[...p[47]||=[s(`w-form(v-model="valid")
  w-input(label="First name" :validators="[validators.required]")
  w-input.mt3(label="Last name" :validators="[validators.required]")
  .text-right.mt6
    w-button.my1.mr2(bg-color="warning" type="reset") Reset
    w-button.my1(type="submit") Validate`,-1)]]),html:t(()=>[...p[48]||=[s(`<w-form v-model="valid">
  <w-input
    label="First name"
    :validators="[validators.required]">
  </w-input>

  <w-input
    class="mt3"
    label="Last name"
    :validators="[validators.required]">
  </w-input>

  <div class="text-right mt6">
    <w-button
      class="my1 mr2"
      bg-color="warning"
      type="reset">
      Reset
    </w-button>
    <w-button
      class="my1"
      type="submit">
      Validate
    </w-button>
  </div>
</w-form>`,-1)]]),js:t(()=>[...p[49]||=[s(`data: () => ({
  valid: null,
  validators: {
    required: value => !!value || 'This field is required'
  }
})
`,-1)]]),default:t(()=>[o(N,{modelValue:T.form4.valid,"onUpdate:modelValue":p[1]||=e=>T.form4.valid=e},{default:t(()=>[o(j,{label:`First name`,validators:[T.validators.required]},null,8,[`validators`]),o(j,{class:`mt3`,label:`Last name`,validators:[T.validators.required]},null,8,[`validators`]),i(`div`,b,[o(M,{class:`my1 mr2`,"bg-color":`warning`,type:`reset`},{default:t(()=>[...p[45]||=[s(`Reset`,-1)]]),_:1}),o(M,{class:`my1`,type:`submit`},{default:t(()=>[...p[46]||=[s(`Validate`,-1)]]),_:1})])]),_:1},8,[`modelValue`])]),_:1}),o(O,{h2:``},{default:t(()=>[...p[50]||=[s(`On validate, on success & on error events`,-1)]]),_:1}),p[88]||=u(`<p class="title5">These events are fired on submit.</p><ul><li class="mt1"><code>before-validate</code> is always fired as soon as a submission is attempted (e.g. submit
button click), prior validation.</li><li class="mt1"><code>validate</code> is always fired as soon as a submission is attempted, after validation.</li><li class="mt1"><code>success</code> is fired after submission when the validation is successful.
You should send the data to the server from this hook.</li><li class="mt1"><code>error</code> is fired after submission when the validation is failing.
You can show an error message from this hook.</li></ul>`,2),o(D,{tip:``},{default:t(()=>[...p[51]||=[s(`The form status is always accurate (through the `,-1),i(`span`,{class:`code`},`v-model`,-1),s(`), and the `,-1),i(`code`,null,`error`,-1),s(` &
`,-1),i(`code`,null,`success`,-1),s(` events return the `,-1),i(`span`,{class:`code`},`errorsCount`,-1),s(`.`,-1),i(`br`,null,null,-1),s(`
So the only thing you could be missing at this point is the exact number of errors between the
submission attempts (if you need it) since a `,-1),i(`span`,{class:`code`},`keyup`,-1),s(` or `,-1),i(`span`,{class:`code`},`blur`,-1),s(` event may trigger
an error or success on that element. The next example introduces the `,-1),i(`code`,null,`errors-count`,-1),s(` syncing
for this purpose.`,-1)]]),_:1}),o(P,null,{pug:t(()=>[...p[53]||=[s(`w-alert(
  :success="success"
  :error="error"
  :info="!success && !error").
  `+r(`{{ !success && !error ? 'The form is still pristine' : (success ? 'Success' : 'Error') }}`)+`
p The form has been validated `+r(`{{ validated }}`)+` time(s).

w-form(
  @validate="validated++;success = error = false"
  @success="success = true"
  @error="error = true")
  w-input(label="First name" :validators="[validators.required]")
  w-input.mt3(label="Last name" :validators="[validators.required]")

  .text-right.mt6
    w-button(type="submit") Validate`,-1)]]),html:t(()=>[...p[54]||=[s(`<w-alert
  :success="success"
  :error="error"
  :info="!success && !error">
  `+r(`{{ !success && !error ? 'The form is still pristine' : (success ? 'Success' : 'Error') }}`)+`
</w-alert>

<p>
  The form has been validated `+r(`{{ validated }}`)+` time(s).
</p>

<w-form
  @validate="validated++;success = error = false"
  @success="success = true"
  @error="error = true">

  <w-input
    label="First name"
    :validators="[validators.required]">
  </w-input>

  <w-input
    class="mt3"
    label="Last name"
    :validators="[validators.required]">
  </w-input>

  <div class="text-right mt6">
    <w-button type="submit">Validate</w-button>
  </div>
</w-form>`,-1)]]),js:t(()=>[...p[55]||=[s(`data: () => ({
  success: null,
  error: null,
  validated: 0,
  validators: {
    required: value => !!value || 'This field is required'
  }
})
`,-1)]]),default:t(()=>[o(F,{success:T.form5.success,error:T.form5.error,info:!T.form5.success&&!T.form5.error},{default:t(()=>[s(r(!T.form5.success&&!T.form5.error?`The form is still pristine`:T.form5.success?`Success`:`Error`),1)]),_:1},8,[`success`,`error`,`info`]),i(`p`,null,`The form has been validated `+r(T.form5.validated)+` time(s).`,1),o(N,{onValidate:p[2]||=e=>{T.form5.validated++,T.form5.success=T.form5.error=!1},onSuccess:p[3]||=e=>T.form5.success=!0,onError:p[4]||=e=>T.form5.error=!0},{default:t(()=>[o(j,{label:`First name`,validators:[T.validators.required]},null,8,[`validators`]),o(j,{class:`mt3`,label:`Last name`,validators:[T.validators.required]},null,8,[`validators`]),i(`div`,x,[o(M,{type:`submit`},{default:t(()=>[...p[52]||=[s(`Validate`,-1)]]),_:1})])]),_:1})]),_:1}),o(O,{h2:``,slug:`advanced-validation`},{default:t(()=>[...p[56]||=[s(`Advanced validation with everything`,-1)]]),_:1}),p[89]||=i(`p`,null,[s(`This example shows a full form validation and lifecycle - everything you could need.`),i(`br`)],-1),p[90]||=i(`ul`,null,[i(`li`,null,`It handles the error and success states of the form elements on keyup, on blur and submit.`),i(`li`,null,`It allows resetting the form.`),i(`li`,null,[s(`It keeps track of the form errors count at any time and displays a global message using the fired
`),i(`span`,{class:`code`},`w-form`),s(` custom events.`),i(`br`)]),i(`li`,null,`When the form is valid and submitted, it simulates a form sending to a backend and displays
a notification.`)],-1),o(P,null,{pug:t(()=>[...p[63]||=[s(`w-card(content-class="pa0")
  .message-box
    w-transition-fade
      w-alert.my0.text-light(v-if="form.submitted" success no-border)
        | The form is valid, ready to send it!
      w-alert.my0.text-light(v-else-if="form.valid === false" error no-border)
        | The form has `+r(`{{ form.errorsCount }}`)+` errors.
  w-form.px8.pt2.pb12(
    v-model="form.valid"
    v-model:errors-count="form.errorsCount"
    @validate="onValidate"
    @success="onSuccess")
    w-input(required label="First name" :validators="[validators.required]")
    w-input.mt3(required label="Last name" :validators="[validators.required]")
    w-input.mt3(disabled label="User name")

    w-flex.mt4(wrap align-center justify-end)
      w-checkbox(required :validators="[validators.consent]") I agree to the terms & conditions
      .spacer
      w-button.my1.mr2(
        bg-color="warning"
        type="reset"
        @click="form.submitted = form.sent = false") Reset
      w-button.my1(
        type="submit"
        :disabled="form.valid === false"
        :loading="form.submitted && !form.sent") Validate
  w-notification(
    v-model="form.sent"
    success
    transition="bounce"
    absolute
    plain
    round
    bottom) The form was sent successfully!`,-1)]]),html:t(()=>[...p[64]||=[s(`<w-card content-class="pa0">
  <div class="message-box">
    <w-transition-fade>
      <w-alert
        v-if="form.submitted"
        success
        no-border
        class="my0 text-light">
        The form is valid, ready to send it!
      </w-alert>

      <w-alert
        v-else-if="form.valid === false"
        error
        no-border
        class="my0 text-light">
        The form has `+r(`{{ form.errorsCount }}`)+` errors.
      </w-alert>
    </w-transition-fade>
  </div>

  <w-form
    v-model="form.valid"
    v-model:errors-count="form.errorsCount"
    @validate="onValidate"
    @success="onSuccess"
    class="px8 pt2 pb12">

    <w-input
      required
      label="First name"
      :validators="[validators.required]">
    </w-input>

    <w-input
      required
      label="Last name"
      :validators="[validators.required]"
      class="mt3">
    </w-input>

    <w-input
      disabled
      label="User name"]
      class="mt3">
    </w-input>

    <w-flex wrap align-center justify-end class="mt4">
      <w-checkbox
        required
        :validators="[validators.consent]">
        I agree to the terms & conditions
      </w-checkbox>

      <div class="spacer" />

      <w-button
        bg-color="warning"
        type="reset"
        @click="form.submitted = form.sent = false"
        class="my1 mr2">
        Reset
      </w-button>

      <w-button
        type="submit"
        :disabled="form.valid === false"
        :loading="form.submitted && !form.sent"
        class="my1">
        Validate
      </w-button>
    </w-flex>
  </w-form>

  <w-notification
    v-model="form.sent"
    success
    transition="bounce"
    absolute
    plain
    round
    bottom>
    The form was sent successfully!
  </w-notification>
</w-card>`,-1)]]),js:t(()=>[...p[65]||=[s(`data: () => ({
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
}`,-1)]]),css:t(()=>[...p[66]||=[s(`.message-box {min-height: 35px;}
`,-1)]]),default:t(()=>[o(B,{"content-class":`pa0`,class:n(f.$store.state.darkMode?`grey-dark6--bg`:`white--bg`)},{default:t(()=>[i(`div`,S,[o(I,null,{default:t(()=>[T.form6.submitted?(c(),l(F,{key:0,class:`my0 text-light`,success:``,"no-border":``},{default:t(()=>[...p[57]||=[s(`The form is valid, ready to send it!`,-1)]]),_:1})):T.form6.valid===!1?(c(),l(F,{key:1,class:`my0 text-light`,error:``,"no-border":``},{default:t(()=>[s(`The form has `+r(T.form6.errorsCount)+` errors.`,1)]),_:1})):d(``,!0)]),_:1})]),o(N,{class:`px8 pt2 pb12`,modelValue:T.form6.valid,"onUpdate:modelValue":p[6]||=e=>T.form6.valid=e,"errors-count":T.form6.errorsCount,"onUpdate:errorsCount":p[7]||=e=>T.form6.errorsCount=e,onValidate:E.onValidate,onSuccess:E.onSuccess},{default:t(()=>[o(j,{required:``,label:`First name`,validators:[T.validators.required]},null,8,[`validators`]),o(j,{class:`mt3`,required:``,label:`Last name`,validators:[T.validators.required]},null,8,[`validators`]),o(j,{class:`mt3`,disabled:``,label:`User name`}),o(R,{class:`mt4`,wrap:``,"align-center":``,"justify-end":``},{default:t(()=>[o(L,{required:``,validators:[T.validators.consent]},{default:t(()=>[...p[58]||=[s(`I agree to the terms & conditions`,-1)]]),_:1},8,[`validators`]),p[61]||=i(`div`,{class:`spacer`},null,-1),o(M,{class:`my1 mr2`,"bg-color":`warning`,type:`reset`,onClick:p[5]||=e=>T.form6.submitted=T.form6.sent=!1},{default:t(()=>[...p[59]||=[s(`Reset`,-1)]]),_:1}),o(M,{class:`my1`,type:`submit`,disabled:T.form6.valid===!1,loading:T.form6.submitted&&!T.form6.sent},{default:t(()=>[...p[60]||=[s(`Validate`,-1)]]),_:1},8,[`disabled`,`loading`])]),_:1})]),_:1},8,[`modelValue`,`errors-count`,`onValidate`,`onSuccess`]),o(z,{modelValue:T.form6.sent,"onUpdate:modelValue":p[8]||=e=>T.form6.sent=e,success:``,transition:`bounce`,absolute:``,plain:``,round:``,bottom:``},{default:t(()=>[...p[62]||=[s(`The form was sent successfully!`,-1)]]),_:1},8,[`modelValue`])]),_:1},8,[`class`])]),_:1}),o(O,{h2:``},{default:t(()=>[...p[67]||=[s(`Disabled & readonly form`,-1)]]),_:1}),p[91]||=i(`p`,null,[s(`You can add the `),i(`code`,null,`disabled`),s(` or `),i(`code`,null,`readonly`),s(` prop on the `),i(`strong`,{class:`code`},`w-form`),s(` tag to
disable all the fields or set them all to readonly.`)],-1),o(D,{warning:``},{default:t(()=>[...p[68]||=[i(`strong`,null,`Attention`,-1),i(`div`,null,[s(`Wave UI will not reset the validity of the fields when you toggle the `),i(`code`,null,`disabled`),s(`
or `),i(`code`,null,`readonly`),s(` prop on the `),i(`strong`,{class:`code`},`w-form`),s(`: the field is becoming uneditable but
may contain invalid data.`)],-1)]]),_:1}),o(P,null,{pug:t(()=>[...p[73]||=[s(`w-button(
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
    w-button.ml2(type="submit" :disabled="form.valid === false") Validate`,-1)]]),html:t(()=>[...p[74]||=[s(`<w-button
  :outline="!form.disabled"
  @click="form.readonly = false;form.disabled = !form.disabled">
  Form disabled
</w-button>
<w-button
  class="ml2"
  :outline="!form.readonly"
  @click="form.disabled = false;form.readonly = !form.readonly">
  Form readonly
</w-button>

<w-form
  v-model="form.valid"
  :disabled="form.disabled"
  :readonly="form.readonly"
  class="mt4">
  <w-input
    label="First name"
    :validators="[validators.required, validators.alphabetical]">
  </w-input>
  <w-input
    label="Last name"
    :validators="[validators.required]"
    class="mt3">
  </w-input>

  <w-flex justify-end class="mt4">
    <w-button
      type="reset"
      bg-color="warning">
      Reset
    </w-button>
    <w-button
      type="submit"
      :disabled="form.valid === false"
      class="ml2">
      Validate
    </w-button>
  </w-flex>
</w-form>`,-1)]]),js:t(()=>[...p[75]||=[s(`data: () => ({
  form: {
    valid: null,
    disabled: false,
    readonly: false
  },
  validators: {
    required: value => !!value || 'This field is required',
    alphabetical: value => /^[a-z \\-']+$/i.test(value) || 'This field only accepts letters.'
  }
})
`,-1)]]),default:t(()=>[o(M,{outline:!T.form7.disabled,onClick:p[9]||=e=>{T.form7.readonly=!1,T.form7.disabled=!T.form7.disabled}},{default:t(()=>[...p[69]||=[s(`Form disabled`,-1)]]),_:1},8,[`outline`]),o(M,{class:`ml2`,outline:!T.form7.readonly,onClick:p[10]||=e=>{T.form7.disabled=!1,T.form7.readonly=!T.form7.readonly}},{default:t(()=>[...p[70]||=[s(`Form readonly`,-1)]]),_:1},8,[`outline`]),o(N,{class:`mt4`,modelValue:T.form7.valid,"onUpdate:modelValue":p[11]||=e=>T.form7.valid=e,disabled:T.form7.disabled,readonly:T.form7.readonly},{default:t(()=>[o(j,{label:`First name`,validators:[T.validators.required,T.validators.alphabetical]},null,8,[`validators`]),o(j,{class:`mt3`,label:`Last name`,validators:[T.validators.required]},null,8,[`validators`]),o(R,{class:`mt4`,"justify-end":``},{default:t(()=>[o(M,{type:`reset`,"bg-color":`warning`},{default:t(()=>[...p[71]||=[s(`Reset`,-1)]]),_:1}),o(M,{class:`ml2`,type:`submit`,disabled:T.form7.valid===!1},{default:t(()=>[...p[72]||=[s(`Validate`,-1)]]),_:1},8,[`disabled`])]),_:1})]),_:1},8,[`modelValue`,`disabled`,`readonly`])]),_:1}),o(O,{h2:``},{default:t(()=>[...p[76]||=[s(`Asynchronous validations`,-1)]]),_:1}),p[92]||=i(`p`,null,`You may want to validate a field on server side, for this you can use an asynchronous validator.`,-1),o(D,{tip:``},{default:t(()=>[...p[77]||=[s(`You should first be familiar with Promises and `,-1),i(`span`,{class:`code`},`async`,-1),s(`/`,-1),i(`span`,{class:`code`},`await`,-1),s(`.
If you're not you can read about it
`,-1),i(`a`,{href:`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function`,target:`_blank`},`here`,-1),s(`.`,-1)]]),_:1}),p[93]||=i(`p`,null,[s(`This example presents a common case: checking if a username is already in use from a user
registration page.`),i(`br`),s(`
If you type exactly `),i(`code`,null,`waveui`),s(` which is already taken, an error message will appear after
connecting to a server, via an Axios request for instance.`),i(`br`),s(`
A spinner is also displayed while the server is being requested.
`)],-1),o(P,{"content-class":`pa6`},{pug:t(()=>[...p[78]||=[s(`w-form(error-placeholders)
  w-input(
    label="Username"
    :validators="[validators.required, validators.username]"
    :inner-icon-right="loading ? 'mdi mdi-autorenew w-icon--spin' : ''"
    :loading="loading"
    autocomplete="off")`,-1)]]),html:t(()=>[...p[79]||=[s(`<w-form error-placeholders>
  <w-input
    label="Username"
    :validators="[validators.required, validators.username]"
    :inner-icon-right="loading ? 'mdi mdi-autorenew w-icon--spin' : ''"
    :loading="loading"
    autocomplete="off">
  </w-input>
</w-form>`,-1)]]),js:t(()=>[...p[80]||=[s(`// Here we need access to \`this\`, so we can't use an arrow function.
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
`,-1)]]),default:t(()=>[o(N,{"error-placeholders":``},{default:t(()=>[o(j,{label:`Username`,validators:[T.validators.required,T.validators.username],"inner-icon-right":T.form1.loading?`mdi mdi-autorenew w-icon--spin`:``,loading:T.form1.loading,autocomplete:`off`},null,8,[`validators`,`inner-icon-right`,`loading`])]),_:1})]),_:1}),o(O,{h3:``},{default:t(()=>[...p[81]||=[s(`Loading bar color`,-1)]]),_:1}),p[94]||=i(`p`,null,[s(`You can provide a custom loading bar color via the prop `),i(`code`,null,`progress-color`),s(`.`),i(`br`),s(`
Example with `),i(`code`,null,`progress-color="cyan"`),s(`:`)],-1),o(j,{class:`mt5`,label:`Username`,loading:!0,"progress-color":`cyan`,autocomplete:`off`})])}var w=f({data(){return{form1:{valid:null,loading:!1},form2:{valid:null},form3:{valid:null},form4:{valid:null},form5:{valid:null,error:null,success:null,validated:0},form6:{valid:null,submitted:!1,sent:!1,errorsCount:0},form7:{valid:null,disabled:!1,readonly:!1},validators:{username:async e=>(this.form1.loading=!0,await new Promise(e=>setTimeout(e,800)),this.form1.loading=!1,e!==`waveui`||`This username is already in use`),required:e=>!!e||`This field is required`,alphabetical:e=>/^[a-z \-']+$/i.test(e)||`This field only accepts letters.`,consent:e=>!!e||`You must agree`}}},methods:{onSuccess(){setTimeout(()=>this.form6.sent=!0,2e3)},onValidate(){this.form6.sent=!1,this.form6.submitted=this.form6.errorsCount===0}}},[[`render`,C]]);function T(n,r,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return c(),a(`div`,null,[r[1]||=i(`div`,{class:`w-divider my12`},null,-1),o(p,{class:`title1`,h2:``},{default:t(()=>[...r[0]||=[s(`API`,-1)]]),_:1}),o(m,{class:`mt0`,items:f.props,descriptions:n.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),o(m,{items:n.slots,title:`Slots`},null,8,[`items`]),o(m,{items:f.events,title:`Events`},null,8,[`items`])])}var E={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>Contains the status of the form validity at all times. Three values are possible: <code>null</code> when pristine (untouched), <code>false</code> when invalid, <code>true</code> when valid.<br>This value gets updated every time a validation is triggered on a single field or on all the fields at once on form submit.<br>Setting this value to <code>null</code> will reset the form.`,allowSubmit:`Native HTML submits the form to the server when all the form elements are valid.<br>Usually and by default, the form submission is prevented and an AJAX call is made from the front end. This is completely up to the developer.`,noKeyupValidation:`Prevents the form element validation on keyup (happening by default).`,noBlurValidation:`Prevents validation on blur for every field in the form (blur validation is on by default).<br>Individual fields can override with their own <code>no-blur-validation</code> prop (see <code>w-input</code> and other form controls).`,errorPlaceholders:`Reserves a space under all the form elements so that triggering an error and showing the error message will not change the height of the form.`,disabled:`Disables all the form fields all at once, making them unreactive to user interactions.`,readonly:`Set all the form fields to readonly all at once. The fields will still look interactive but their value will not be editable by user interaction.`,validationColor:`Applies a specific color to any input field failing the validation.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`},D={default:{description:`The form content.`}},O={submit:{description:`Emitted on form submit.`,params:{"[DOM event object]":`The associated reset DOM event.`}},"before-validate":{description:`Emitted before validation, every time a validation is triggered.`},validate:{description:`Emitted on form validate, every time a validation is triggered.<br>Returns a single object containing:`,params:{e:`The associated DOM event.`,errorsCount:`An integer representing the number of errors in the form.`}},success:{description:`Emitted on form success, when there is no error in the form and the validation is successful.<br>Returns a single object containing:`,params:{e:`The associated DOM event.`,errorsCount:`An integer representing the number of errors in the form.`}},error:{description:`Emitted on form error, when there is at least one error in the form and the validation fails.<br>Returns a single object containing:`,params:{e:`The associated DOM event.`,errorsCount:`An integer representing the number of errors in the form.`}},reset:{description:`Emitted on form reset. A reset can be triggered by setting the v-model value to null or by clicking on a reset button.`,params:{"[DOM event object]":`The associated reset DOM event.`}},input:{description:`Emitted every time the form status changes.<br>Updates the v-model value in Vue 2.x only.`,params:{"[Boolean, Null]":`The new status of the form: one of <code>null</code> when pristine, <code>false</code> when invalid, <code>true</code> when valid.`}},"update:modelValue":{description:`Emitted every time the form status changes.<br>Updates the v-model value in Vue 3 only.`,params:{"[Boolean, Null]":`The new status of the form: one of <code>null</code> when pristine, <code>false</code> when invalid, <code>true</code> when valid.`}},"update:errorsCount":{description:`Emitted every time the errorsCount changes. To be used with <code>:errors-count.sync</code> in Vue 2 or <code>v-model:errors-count</code> in Vue 3.`,params:{"[Integer]":`The number of errors in the form.`}}},k=f({data:()=>({propsDescs:E,slots:D}),computed:{props(){return p.props},events(){return p.emits.reduce((e,t)=>(e[t]=O[t]||{},e),{})}}},[[`render`,T]]);function A(n,r,i,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return c(),a(`main`,null,[o(f,null,{default:t(()=>[...r[0]||=[s(`w-form`,-1)]]),_:1}),o(p),o(m)])}var j=f({components:{Examples:w,Api:k}},[[`render`,A]]);export{j as default};
