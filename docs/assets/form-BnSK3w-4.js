import{N as e,U as t,c as n,d as r,g as i,gt as a,h as o,k as s,l as c,m as l,u,yt as d}from"./runtime-core.esm-bundler-BAjkj7eY.js";import{t as f}from"./_plugin-vue_export-helper-S3RvzygF.js";import{D as p}from"./index-DJwFRA2S.js";var m={class:`title4`},h={class:`mt6 title4`},g={class:`text-right mt6`},_={class:`ml2 mr4`},v={class:`text-right mt6`},y={class:`text-right mt6`},b={class:`text-right mt6`},x={class:`text-right mt6`},S={class:`message-box`};function C(f,p,C,w,T,E){let D=e(`alert`),O=e(`title-link`),k=e(`ssh-pre`),A=e(`w-divider`),j=e(`w-input`),M=e(`w-button`),N=e(`w-form`),P=e(`example`),F=e(`w-alert`),I=e(`w-transition-fade`),L=e(`w-checkbox`),R=e(`w-flex`),z=e(`w-notification`),B=e(`w-card`);return s(),r(`div`,null,[i(D,{class:`mt6`,tip:``},{default:t(()=>[...p[12]||=[n(`ul`,null,[n(`li`,{class:`title5`},[o(`The `),n(`span`,{class:`code`},`w-form`),o(` component is used for validation.`)]),n(`li`,null,[o(`A `),n(`span`,{class:`code`},`w-form`),o(` is invisible and has no style by default. You can put it in a
`),n(`span`,{class:`code`},`w-card`),o(` (or put a `),n(`span`,{class:`code`},`w-card`),o(` in it) to have some style. Alternatively,
you can apply colors and spaces CSS classes on it (e.g. `),n(`span`,{class:`code`},`.blue--bg`),o(`, `),n(`span`,{class:`code`},`.pa4`),o(`).`)]),n(`li`,null,[o(`The `),n(`span`,{class:`code`},`w-form`),o(` tag translates to a `),n(`span`,{class:`code`},`<form>`),o(` tag.`)])],-1)]]),_:1}),i(O,{h2:``},{default:t(()=>[...p[13]||=[o(`How it works`,-1)]]),_:1}),p[82]||=n(`div`,{class:`title3`},`The validation works in 3 steps:`,-1),n(`ol`,null,[n(`li`,m,[p[16]||=o(`Add one or more validator functions on the field you want validated`,-1),i(k,{class:`body`,language:`html-vue`,label:`Vue template`,dark:f.$store.state.darkMode},{default:t(()=>[...p[14]||=[o(`<w-input label="First name" :validators="[validators.required]"></w-input>`,-1)]]),_:1},8,[`dark`]),i(k,{class:`body`,language:`js`,label:`Javascript`,dark:f.$store.state.darkMode},{default:t(()=>[...p[15]||=[o(`data: () => ({
  validators: {
    required: value => !!value || 'This field is required'
  }
})`,-1)]]),_:1},8,[`dark`])]),n(`li`,h,[p[18]||=o(`Wrap the field in a `,-1),p[19]||=n(`span`,{class:`code`},`w-form`,-1),p[20]||=o(` and add a submit button`,-1),i(k,{class:`body`,language:`html-vue`,label:`Vue template`,dark:f.$store.state.darkMode},{default:t(()=>[...p[17]||=[o(`<w-form>
  <w-input label="First name" :validators="[validators.required]"></w-input>

  <w-button type="submit">Submit</w-button>
</w-form>`,-1)]]),_:1},8,[`dark`])]),p[21]||=n(`li`,{class:`mt6 title4`},[o(`That's enough`),n(`p`,{class:`body`},[o(`you can let the `),n(`span`,{class:`code`},`w-form`),o(` component do the rest!`),n(`br`),o(`
But you might want more options, discover them in the examples below.
`)])],-1)]),i(D,{tip:``},{default:t(()=>[...p[22]||=[n(`strong`,null,`As of version 1.14.4`,-1),n(`p`,null,[o(`It is also possible to trigger a particular field validation programmatically via
`),n(`code`,null,`this.$refs.myField.validate()`),o(`. all the validator functions associated on this field will be
re-run.
`)],-1)]]),_:1}),i(O,{class:`mt10`,h3:``},{default:t(()=>[...p[23]||=[o(`Creating a validator function`,-1)]]),_:1}),p[83]||=n(`p`,null,[o(`A validator is a custom function that tells Wave UI if the field is valid or invalid when the
validation happens. It must return either `),n(`span`,{class:`code`},`true`),o(` or a string containing an error
message in case of invalidaty. An empty string also works.`),n(`br`),o(`
The current value of the field is always passed in parameter to the validator.`),n(`br`),n(`br`),o(`

In the following snippet, the value is converted to boolean (`),n(`code`,null,`!!`),o(`), and if falsy
(e.g. empty string) the JavaScript engine will continue through the `),n(`code`,null,`||`),o(` and will return
a string to Wave UI, meaning the field is invalid.`)],-1),i(k,{language:`js`,label:`Javascript`,dark:f.$store.state.darkMode},{default:t(()=>[...p[24]||=[o(`data: () => ({
  validators: {
    required: value => !!value || 'This field is required'
    // Other validators...
  }
})
`,-1)]]),_:1},8,[`dark`]),i(A,{class:`mt12`}),i(O,{h2:``},{default:t(()=>[...p[25]||=[o(`Basic validation`,-1)]]),_:1}),p[84]||=n(`p`,null,[o(`In this example and by default, the fields are validated on `),n(`span`,{class:`code`},`keyup`),o(`, on `),n(`span`,{class:`code`},`blur`),o(`,
and on `),n(`span`,{class:`code`},`submit`),o(`.`),n(`br`),o(`
The v-model on the `),n(`span`,{class:`code`},`w-form`),o(` gets updated with the form status.`)],-1),i(P,null,{pug:t(()=>[...p[28]||=[o(`w-form(v-model="valid")
  w-input(label="First name" :validators="[validators.required, validators.alphabetical]")
  w-input.mt3(label="Last name" :validators="[validators.required]")
  .text-right.mt6
    strong v-model:
    code.ml2.mr4 `+d(`{{ valid === false ? 'false' : valid || 'null' }}`)+`
    w-button(type="submit" :disabled="valid === false") Validate`,-1)]]),html:t(()=>[...p[29]||=[o(`<w-form v-model="valid">
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
      `+d(`{{ valid === false ? 'false' : valid || 'null' }}`)+`
    </code>
    <w-button type="submit" :disabled="valid === false">
      Validate
    </w-button>
  </div>
</w-form>`,-1)]]),js:t(()=>[...p[30]||=[o(`data: () => ({
  valid: null,
  validators: {
    required: value => !!value || 'This field is required'
  }
})`,-1)]]),default:t(()=>[i(N,{modelValue:T.form1.valid,"onUpdate:modelValue":p[0]||=e=>T.form1.valid=e},{default:t(()=>[i(j,{label:`First name`,validators:[T.validators.required,T.validators.alphabetical]},null,8,[`validators`]),i(j,{class:`mt3`,label:`Last name`,validators:[T.validators.required]},null,8,[`validators`]),n(`div`,g,[p[27]||=n(`strong`,null,`v-model:`,-1),n(`code`,_,d(T.form1.valid===!1?`false`:T.form1.valid||`null`),1),i(M,{type:`submit`,disabled:T.form1.valid===!1},{default:t(()=>[...p[26]||=[o(`Validate`,-1)]]),_:1},8,[`disabled`])])]),_:1},8,[`modelValue`])]),_:1}),i(D,{warning:``},{default:t(()=>[...p[31]||=[n(`strong`,null,`Heads up!`,-1),n(`div`,null,[o(`The v-model value has 3 states: `),n(`code`,null,`true`),o(` and `),n(`code`,null,`false`),o(` for success and error, but also
`),n(`code`,null,`null`),o(` for pristine.`),n(`br`),o(`
Pristine represents the moment where the form is still untouched, neither valid, nor invalid.`)],-1)]]),_:1}),i(D,{success:``},{default:t(()=>[...p[32]||=[o(`Even in the most advanced case, Wave UI's form validation is fairly simple, it doesn't
require you to use `,-1),n(`code`,null,`$refs`,-1),o(`.
`,-1)]]),_:1}),i(O,{h2:``},{default:t(()=>[...p[33]||=[o(`Direct submission to a server`,-1)]]),_:1}),p[85]||=l(`<p class="mt6">The <span class="code">w-form</span> prevents the form submission by default - for modern usage where an AJAX
call is made on success (<a href="#advanced-validation">see the last example: Advanced validation</a>).
<br>
But in case you need to send the form as is to the server, you can set the <code>allow-submit</code>
option to <span class="code">true</span> and provide a URL via the usual <code>action</code> attribute, and optionally
set a <code>method</code> attribute. Just like a normal <span class="code">&lt;form&gt;</span> tag.<br><br>

The <span class="code">w-form</span> will handle the validation and prevent the form submission
until the form is valid. Once the form is valid, the form submission will not be prevented and the
data will be submitted to the URL set in the <code>action</code> attribute.</p><p class="mt2">In this example, the form data will be submitted in another tab to a fake <span class="code">test.php</span>.
</p>`,2),i(P,null,{pug:t(()=>[...p[35]||=[o(`w-form(action="test.php" method="post" target="_blank" allow-submit)
  w-input(label="First name" :validators="[validators.required]")
  w-input.mt3(label="Last name" :validators="[validators.required]")
  .text-right.mt6
    w-button(type="submit") Validate`,-1)]]),html:t(()=>[...p[36]||=[o(`<w-form
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
</w-form>`,-1)]]),js:t(()=>[...p[37]||=[o(`data: () => ({
  validators: {
    required: value => !!value || 'This field is required'
  }
})
`,-1)]]),default:t(()=>[i(N,{action:`test.php`,method:`post`,target:`_blank`,"allow-submit":``},{default:t(()=>[i(j,{label:`First name`,validators:[T.validators.required]},null,8,[`validators`]),i(j,{class:`mt3`,label:`Last name`,validators:[T.validators.required]},null,8,[`validators`]),n(`div`,v,[i(M,{type:`submit`},{default:t(()=>[...p[34]||=[o(`Validate`,-1)]]),_:1})])]),_:1})]),_:1}),i(D,{tip:``},{default:t(()=>[...p[38]||=[o(`To submit a form via the HTML standard way like in this example, you need to add
the `,-1),n(`code`,null,`action`,-1),o(` attribute and optionally a `,-1),n(`code`,null,`method`,-1),o(` attribute.
`,-1)]]),_:1}),i(O,{h2:``},{default:t(()=>[...p[39]||=[o(`Validate on submit, on blur, on keyup`,-1)]]),_:1}),p[86]||=l(`<p>By default the validation happens on <span class="code">keyup</span>, on <span class="code">blur</span> and on
<span class="code">submit</span>. You can disable the <span class="code">keyup</span> and <span class="code">blur</span> validations
with <code>no-keyup-validation</code> and <code>no-blur-validation</code>.</p>`,1),i(P,null,{pug:t(()=>[...p[41]||=[o(`w-form(no-keyup-validation no-blur-validation)
  w-input(label="First name" :validators="[validators.required]")
  w-input.mt3(label="Last name" :validators="[validators.required]")
  .text-right.mt6
    w-button(type="submit") Validate`,-1)]]),html:t(()=>[...p[42]||=[o(`<w-form no-keyup-validation no-blur-validation>
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
</w-form>`,-1)]]),js:t(()=>[...p[43]||=[o(`data: () => ({
  validators: {
    required: value => !!value || 'This field is required'
  }
})
`,-1)]]),default:t(()=>[i(N,{"no-keyup-validation":``,"no-blur-validation":``},{default:t(()=>[i(j,{label:`First name`,validators:[T.validators.required]},null,8,[`validators`]),i(j,{class:`mt3`,label:`Last name`,validators:[T.validators.required]},null,8,[`validators`]),n(`div`,y,[i(M,{type:`submit`},{default:t(()=>[...p[40]||=[o(`Validate`,-1)]]),_:1})])]),_:1})]),_:1}),i(O,{h2:``},{default:t(()=>[...p[44]||=[o(`Reset the form`,-1)]]),_:1}),p[87]||=n(`p`,null,[o(`Once the form is invalid, you can reset it with a basic HTML reset button, like in this example.`),n(`br`),o(`
Alternatively, you can programmatically reset the form and all its element by setting the form
value (or v-model) to `),n(`code`,null,`null`),o(`, like pristine.`)],-1),i(P,null,{pug:t(()=>[...p[47]||=[o(`w-form(v-model="valid")
  w-input(label="First name" :validators="[validators.required]")
  w-input.mt3(label="Last name" :validators="[validators.required]")
  .text-right.mt6
    w-button.my1.mr2(bg-color="warning" type="reset") Reset
    w-button.my1(type="submit") Validate`,-1)]]),html:t(()=>[...p[48]||=[o(`<w-form v-model="valid">
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
</w-form>`,-1)]]),js:t(()=>[...p[49]||=[o(`data: () => ({
  valid: null,
  validators: {
    required: value => !!value || 'This field is required'
  }
})
`,-1)]]),default:t(()=>[i(N,{modelValue:T.form4.valid,"onUpdate:modelValue":p[1]||=e=>T.form4.valid=e},{default:t(()=>[i(j,{label:`First name`,validators:[T.validators.required]},null,8,[`validators`]),i(j,{class:`mt3`,label:`Last name`,validators:[T.validators.required]},null,8,[`validators`]),n(`div`,b,[i(M,{class:`my1 mr2`,"bg-color":`warning`,type:`reset`},{default:t(()=>[...p[45]||=[o(`Reset`,-1)]]),_:1}),i(M,{class:`my1`,type:`submit`},{default:t(()=>[...p[46]||=[o(`Validate`,-1)]]),_:1})])]),_:1},8,[`modelValue`])]),_:1}),i(O,{h2:``},{default:t(()=>[...p[50]||=[o(`On validate, on success & on error events`,-1)]]),_:1}),p[88]||=l(`<p class="title5">These events are fired on submit.</p><ul><li class="mt1"><code>before-validate</code> is always fired as soon as a submission is attempted (e.g. submit
button click), prior validation.</li><li class="mt1"><code>validate</code> is always fired as soon as a submission is attempted, after validation.</li><li class="mt1"><code>success</code> is fired after submission when the validation is successful.
You should send the data to the server from this hook.</li><li class="mt1"><code>error</code> is fired after submission when the validation is failing.
You can show an error message from this hook.</li></ul>`,2),i(D,{tip:``},{default:t(()=>[...p[51]||=[o(`The form status is always accurate (through the `,-1),n(`span`,{class:`code`},`v-model`,-1),o(`), and the `,-1),n(`code`,null,`error`,-1),o(` &
`,-1),n(`code`,null,`success`,-1),o(` events return the `,-1),n(`span`,{class:`code`},`errorsCount`,-1),o(`.`,-1),n(`br`,null,null,-1),o(`
So the only thing you could be missing at this point is the exact number of errors between the
submission attempts (if you need it) since a `,-1),n(`span`,{class:`code`},`keyup`,-1),o(` or `,-1),n(`span`,{class:`code`},`blur`,-1),o(` event may trigger
an error or success on that element. The next example introduces the `,-1),n(`code`,null,`errors-count`,-1),o(` syncing
for this purpose.`,-1)]]),_:1}),i(P,null,{pug:t(()=>[...p[53]||=[o(`w-alert(
  :success="success"
  :error="error"
  :info="!success && !error").
  `+d(`{{ !success && !error ? 'The form is still pristine' : (success ? 'Success' : 'Error') }}`)+`
p The form has been validated `+d(`{{ validated }}`)+` time(s).

w-form(
  @validate="validated++;success = error = false"
  @success="success = true"
  @error="error = true")
  w-input(label="First name" :validators="[validators.required]")
  w-input.mt3(label="Last name" :validators="[validators.required]")

  .text-right.mt6
    w-button(type="submit") Validate`,-1)]]),html:t(()=>[...p[54]||=[o(`<w-alert
  :success="success"
  :error="error"
  :info="!success && !error">
  `+d(`{{ !success && !error ? 'The form is still pristine' : (success ? 'Success' : 'Error') }}`)+`
</w-alert>

<p>
  The form has been validated `+d(`{{ validated }}`)+` time(s).
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
</w-form>`,-1)]]),js:t(()=>[...p[55]||=[o(`data: () => ({
  success: null,
  error: null,
  validated: 0,
  validators: {
    required: value => !!value || 'This field is required'
  }
})
`,-1)]]),default:t(()=>[i(F,{success:T.form5.success,error:T.form5.error,info:!T.form5.success&&!T.form5.error},{default:t(()=>[o(d(!T.form5.success&&!T.form5.error?`The form is still pristine`:T.form5.success?`Success`:`Error`),1)]),_:1},8,[`success`,`error`,`info`]),n(`p`,null,`The form has been validated `+d(T.form5.validated)+` time(s).`,1),i(N,{onValidate:p[2]||=e=>{T.form5.validated++,T.form5.success=T.form5.error=!1},onSuccess:p[3]||=e=>T.form5.success=!0,onError:p[4]||=e=>T.form5.error=!0},{default:t(()=>[i(j,{label:`First name`,validators:[T.validators.required]},null,8,[`validators`]),i(j,{class:`mt3`,label:`Last name`,validators:[T.validators.required]},null,8,[`validators`]),n(`div`,x,[i(M,{type:`submit`},{default:t(()=>[...p[52]||=[o(`Validate`,-1)]]),_:1})])]),_:1})]),_:1}),i(O,{h2:``,slug:`advanced-validation`},{default:t(()=>[...p[56]||=[o(`Advanced validation with everything`,-1)]]),_:1}),p[89]||=n(`p`,null,[o(`This example shows a full form validation and lifecycle - everything you could need.`),n(`br`)],-1),p[90]||=n(`ul`,null,[n(`li`,null,`It handles the error and success states of the form elements on keyup, on blur and submit.`),n(`li`,null,`It allows resetting the form.`),n(`li`,null,[o(`It keeps track of the form errors count at any time and displays a global message using the fired
`),n(`span`,{class:`code`},`w-form`),o(` custom events.`),n(`br`)]),n(`li`,null,`When the form is valid and submitted, it simulates a form sending to a backend and displays
a notification.`)],-1),i(P,null,{pug:t(()=>[...p[63]||=[o(`w-card(content-class="pa0")
  .message-box
    w-transition-fade
      w-alert.my0.text-light(v-if="form.submitted" success no-border)
        | The form is valid, ready to send it!
      w-alert.my0.text-light(v-else-if="form.valid === false" error no-border)
        | The form has `+d(`{{ form.errorsCount }}`)+` errors.
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
    bottom) The form was sent successfully!`,-1)]]),html:t(()=>[...p[64]||=[o(`<w-card content-class="pa0">
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
        The form has `+d(`{{ form.errorsCount }}`)+` errors.
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
</w-card>`,-1)]]),js:t(()=>[...p[65]||=[o(`data: () => ({
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
}`,-1)]]),css:t(()=>[...p[66]||=[o(`.message-box {min-height: 35px;}
`,-1)]]),default:t(()=>[i(B,{"content-class":`pa0`,class:a(f.$store.state.darkMode?`grey-dark6--bg`:`white--bg`)},{default:t(()=>[n(`div`,S,[i(I,null,{default:t(()=>[T.form6.submitted?(s(),c(F,{key:0,class:`my0 text-light`,success:``,"no-border":``},{default:t(()=>[...p[57]||=[o(`The form is valid, ready to send it!`,-1)]]),_:1})):T.form6.valid===!1?(s(),c(F,{key:1,class:`my0 text-light`,error:``,"no-border":``},{default:t(()=>[o(`The form has `+d(T.form6.errorsCount)+` errors.`,1)]),_:1})):u(``,!0)]),_:1})]),i(N,{class:`px8 pt2 pb12`,modelValue:T.form6.valid,"onUpdate:modelValue":p[6]||=e=>T.form6.valid=e,"errors-count":T.form6.errorsCount,"onUpdate:errorsCount":p[7]||=e=>T.form6.errorsCount=e,onValidate:E.onValidate,onSuccess:E.onSuccess},{default:t(()=>[i(j,{required:``,label:`First name`,validators:[T.validators.required]},null,8,[`validators`]),i(j,{class:`mt3`,required:``,label:`Last name`,validators:[T.validators.required]},null,8,[`validators`]),i(j,{class:`mt3`,disabled:``,label:`User name`}),i(R,{class:`mt4`,wrap:``,"align-center":``,"justify-end":``},{default:t(()=>[i(L,{required:``,validators:[T.validators.consent]},{default:t(()=>[...p[58]||=[o(`I agree to the terms & conditions`,-1)]]),_:1},8,[`validators`]),p[61]||=n(`div`,{class:`spacer`},null,-1),i(M,{class:`my1 mr2`,"bg-color":`warning`,type:`reset`,onClick:p[5]||=e=>T.form6.submitted=T.form6.sent=!1},{default:t(()=>[...p[59]||=[o(`Reset`,-1)]]),_:1}),i(M,{class:`my1`,type:`submit`,disabled:T.form6.valid===!1,loading:T.form6.submitted&&!T.form6.sent},{default:t(()=>[...p[60]||=[o(`Validate`,-1)]]),_:1},8,[`disabled`,`loading`])]),_:1})]),_:1},8,[`modelValue`,`errors-count`,`onValidate`,`onSuccess`]),i(z,{modelValue:T.form6.sent,"onUpdate:modelValue":p[8]||=e=>T.form6.sent=e,success:``,transition:`bounce`,absolute:``,plain:``,round:``,bottom:``},{default:t(()=>[...p[62]||=[o(`The form was sent successfully!`,-1)]]),_:1},8,[`modelValue`])]),_:1},8,[`class`])]),_:1}),i(O,{h2:``},{default:t(()=>[...p[67]||=[o(`Disabled & readonly form`,-1)]]),_:1}),p[91]||=n(`p`,null,[o(`You can add the `),n(`code`,null,`disabled`),o(` or `),n(`code`,null,`readonly`),o(` prop on the `),n(`strong`,{class:`code`},`w-form`),o(` tag to
disable all the fields or set them all to readonly.`)],-1),i(D,{warning:``},{default:t(()=>[...p[68]||=[n(`strong`,null,`Attention`,-1),n(`div`,null,[o(`Wave UI will not reset the validity of the fields when you toggle the `),n(`code`,null,`disabled`),o(`
or `),n(`code`,null,`readonly`),o(` prop on the `),n(`strong`,{class:`code`},`w-form`),o(`: the field is becoming uneditable but
may contain invalid data.`)],-1)]]),_:1}),i(P,null,{pug:t(()=>[...p[73]||=[o(`w-button(
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
    w-button.ml2(type="submit" :disabled="form.valid === false") Validate`,-1)]]),html:t(()=>[...p[74]||=[o(`<w-button
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
</w-form>`,-1)]]),js:t(()=>[...p[75]||=[o(`data: () => ({
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
`,-1)]]),default:t(()=>[i(M,{outline:!T.form7.disabled,onClick:p[9]||=e=>{T.form7.readonly=!1,T.form7.disabled=!T.form7.disabled}},{default:t(()=>[...p[69]||=[o(`Form disabled`,-1)]]),_:1},8,[`outline`]),i(M,{class:`ml2`,outline:!T.form7.readonly,onClick:p[10]||=e=>{T.form7.disabled=!1,T.form7.readonly=!T.form7.readonly}},{default:t(()=>[...p[70]||=[o(`Form readonly`,-1)]]),_:1},8,[`outline`]),i(N,{class:`mt4`,modelValue:T.form7.valid,"onUpdate:modelValue":p[11]||=e=>T.form7.valid=e,disabled:T.form7.disabled,readonly:T.form7.readonly},{default:t(()=>[i(j,{label:`First name`,validators:[T.validators.required,T.validators.alphabetical]},null,8,[`validators`]),i(j,{class:`mt3`,label:`Last name`,validators:[T.validators.required]},null,8,[`validators`]),i(R,{class:`mt4`,"justify-end":``},{default:t(()=>[i(M,{type:`reset`,"bg-color":`warning`},{default:t(()=>[...p[71]||=[o(`Reset`,-1)]]),_:1}),i(M,{class:`ml2`,type:`submit`,disabled:T.form7.valid===!1},{default:t(()=>[...p[72]||=[o(`Validate`,-1)]]),_:1},8,[`disabled`])]),_:1})]),_:1},8,[`modelValue`,`disabled`,`readonly`])]),_:1}),i(O,{h2:``},{default:t(()=>[...p[76]||=[o(`Asynchronous validations`,-1)]]),_:1}),p[92]||=n(`p`,null,`You may want to validate a field on server side, for this you can use an asynchronous validator.`,-1),i(D,{tip:``},{default:t(()=>[...p[77]||=[o(`You should first be familiar with Promises and `,-1),n(`span`,{class:`code`},`async`,-1),o(`/`,-1),n(`span`,{class:`code`},`await`,-1),o(`.
If you're not you can read about it
`,-1),n(`a`,{href:`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function`,target:`_blank`},`here`,-1),o(`.`,-1)]]),_:1}),p[93]||=n(`p`,null,[o(`This example presents a common case: checking if a username is already in use from a user
registration page.`),n(`br`),o(`
If you type exactly `),n(`code`,null,`waveui`),o(` which is already taken, an error message will appear after
connecting to a server, via an Axios request for instance.`),n(`br`),o(`
A spinner is also displayed while the server is being requested.
`)],-1),i(P,{"content-class":`pa6`},{pug:t(()=>[...p[78]||=[o(`w-form(error-placeholders)
  w-input(
    label="Username"
    :validators="[validators.required, validators.username]"
    :inner-icon-right="loading ? 'mdi mdi-autorenew w-icon--spin' : ''"
    :loading="loading"
    autocomplete="off")`,-1)]]),html:t(()=>[...p[79]||=[o(`<w-form error-placeholders>
  <w-input
    label="Username"
    :validators="[validators.required, validators.username]"
    :inner-icon-right="loading ? 'mdi mdi-autorenew w-icon--spin' : ''"
    :loading="loading"
    autocomplete="off">
  </w-input>
</w-form>`,-1)]]),js:t(()=>[...p[80]||=[o(`// Here we need access to \`this\`, so we can't use an arrow function.
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
`,-1)]]),default:t(()=>[i(N,{"error-placeholders":``},{default:t(()=>[i(j,{label:`Username`,validators:[T.validators.required,T.validators.username],"inner-icon-right":T.form1.loading?`mdi mdi-autorenew w-icon--spin`:``,loading:T.form1.loading,autocomplete:`off`},null,8,[`validators`,`inner-icon-right`,`loading`])]),_:1})]),_:1}),i(O,{h3:``},{default:t(()=>[...p[81]||=[o(`Loading bar color`,-1)]]),_:1}),p[94]||=n(`p`,null,[o(`You can provide a custom loading bar color via the prop `),n(`code`,null,`progress-color`),o(`.`),n(`br`),o(`
Example with `),n(`code`,null,`progress-color="cyan"`),o(`:`)],-1),i(j,{class:`mt5`,label:`Username`,loading:!0,"progress-color":`cyan`,autocomplete:`off`})])}var w=f({data(){return{form1:{valid:null,loading:!1},form2:{valid:null},form3:{valid:null},form4:{valid:null},form5:{valid:null,error:null,success:null,validated:0},form6:{valid:null,submitted:!1,sent:!1,errorsCount:0},form7:{valid:null,disabled:!1,readonly:!1},validators:{username:async e=>(this.form1.loading=!0,await new Promise(e=>setTimeout(e,800)),this.form1.loading=!1,e!==`waveui`||`This username is already in use`),required:e=>!!e||`This field is required`,alphabetical:e=>/^[a-z \-']+$/i.test(e)||`This field only accepts letters.`,consent:e=>!!e||`You must agree`}}},methods:{onSuccess(){setTimeout(()=>this.form6.sent=!0,2e3)},onValidate(){this.form6.sent=!1,this.form6.submitted=this.form6.errorsCount===0}}},[[`render`,C]]);function T(a,c,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return s(),r(`div`,null,[c[1]||=n(`div`,{class:`w-divider my12`},null,-1),i(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[o(`API`,-1)]]),_:1}),i(m,{class:`mt0`,items:f.props,descriptions:a.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),i(m,{items:a.slots,title:`Slots`},null,8,[`items`]),i(m,{items:f.events,title:`Events`},null,8,[`items`])])}var E={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>Contains the status of the form validity at all times. Three values are possible: <code>null</code> when pristine (untouched), <code>false</code> when invalid, <code>true</code> when valid.<br>This value gets updated every time a validation is triggered on a single field or on all the fields at once on form submit.<br>Setting this value to <code>null</code> will reset the form.`,allowSubmit:`Native HTML submits the form to the server when all the form elements are valid.<br>Usually and by default, the form submission is prevented and an AJAX call is made from the front end. This is completely up to the developer.`,noKeyupValidation:`Prevents the form element validation on keyup (happening by default).`,noBlurValidation:`Prevents validation on blur for every field in the form (blur validation is on by default).<br>Individual fields can override with their own <code>no-blur-validation</code> prop (see <code>w-input</code> and other form controls).`,errorPlaceholders:`Reserves a space under all the form elements so that triggering an error and showing the error message will not change the height of the form.`,disabled:`Disables all the form fields all at once, making them unreactive to user interactions.`,readonly:`Set all the form fields to readonly all at once. The fields will still look interactive but their value will not be editable by user interaction.`,validationColor:`Applies a specific color to any input field failing the validation.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`},D={default:{description:`The form content.`}},O={submit:{description:`Emitted on form submit.`,params:{"[DOM event object]":`The associated reset DOM event.`}},"before-validate":{description:`Emitted before validation, every time a validation is triggered.`},validate:{description:`Emitted on form validate, every time a validation is triggered.<br>Returns a single object containing:`,params:{e:`The associated DOM event.`,errorsCount:`An integer representing the number of errors in the form.`}},success:{description:`Emitted on form success, when there is no error in the form and the validation is successful.<br>Returns a single object containing:`,params:{e:`The associated DOM event.`,errorsCount:`An integer representing the number of errors in the form.`}},error:{description:`Emitted on form error, when there is at least one error in the form and the validation fails.<br>Returns a single object containing:`,params:{e:`The associated DOM event.`,errorsCount:`An integer representing the number of errors in the form.`}},reset:{description:`Emitted on form reset. A reset can be triggered by setting the v-model value to null or by clicking on a reset button.`,params:{"[DOM event object]":`The associated reset DOM event.`}},input:{description:`Emitted every time the form status changes.<br>Updates the v-model value in Vue 2.x only.`,params:{"[Boolean, Null]":`The new status of the form: one of <code>null</code> when pristine, <code>false</code> when invalid, <code>true</code> when valid.`}},"update:modelValue":{description:`Emitted every time the form status changes.<br>Updates the v-model value in Vue 3 only.`,params:{"[Boolean, Null]":`The new status of the form: one of <code>null</code> when pristine, <code>false</code> when invalid, <code>true</code> when valid.`}},"update:errorsCount":{description:`Emitted every time the errorsCount changes. To be used with <code>:errors-count.sync</code> in Vue 2 or <code>v-model:errors-count</code> in Vue 3.`,params:{"[Integer]":`The number of errors in the form.`}}},k=f({data:()=>({propsDescs:E,slots:D}),computed:{props(){return p.props},events(){return p.emits.reduce((e,t)=>(e[t]=O[t]||{},e),{})}}},[[`render`,T]]);function A(n,a,c,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return s(),r(`main`,null,[i(f,null,{default:t(()=>[...a[0]||=[o(`w-form`,-1)]]),_:1}),i(p),i(m)])}var j=f({components:{Examples:w,Api:k}},[[`render`,A]]);export{j as default};