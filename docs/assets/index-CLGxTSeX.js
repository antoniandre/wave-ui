import{r,o as g,g as q,a as l,w as s,d as t,b as n,t as v,h,n as I,c as F,f as E,_ as k,M as C}from"./index-CyDhd-Z0.js";const R={class:"title4"},M={class:"mt6 title4"},D={class:"text-right mt6"},O={class:"ml2 mr4"},B={class:"text-right mt6"},P={class:"text-right mt6"},Y={class:"text-right mt6"},N={class:"text-right mt6"},W={class:"message-box"};function J(a,e,T,x,o,c){const m=r("alert"),i=r("title-link"),w=r("ssh-pre"),L=r("w-divider"),d=r("w-input"),f=r("w-button"),p=r("w-form"),b=r("example"),y=r("w-alert"),S=r("w-transition-fade"),A=r("w-checkbox"),V=r("w-flex"),U=r("w-notification"),j=r("w-card");return g(),q("div",null,[l(m,{class:"mt6",tip:""},{default:s(()=>e[12]||(e[12]=[t("ul",null,[t("li",{class:"title5"},[n("The "),t("span",{class:"code"},"w-form"),n(" component is used for validation.")]),t("li",null,[n("A "),t("span",{class:"code"},"w-form"),n(` is invisible and has no style by default. You can put it in a
`),t("span",{class:"code"},"w-card"),n(" (or put a "),t("span",{class:"code"},"w-card"),n(` in it) to have some style. Alternatively,
you can apply colors and spaces CSS classes on it (e.g. `),t("span",{class:"code"},".blue--bg"),n(", "),t("span",{class:"code"},".pa4"),n(").")]),t("li",null,[n("The "),t("span",{class:"code"},"w-form"),n(" tag translates to a "),t("span",{class:"code"},"<form>"),n(" tag.")])],-1)])),_:1}),l(i,{h2:""},{default:s(()=>e[13]||(e[13]=[n("How it works")])),_:1}),e[82]||(e[82]=t("div",{class:"title3"},"The validation works in 3 steps:",-1)),t("ol",null,[t("li",R,[e[16]||(e[16]=n("Add one or more validator functions on the field you want validated")),l(w,{class:"body",language:"html-vue",label:"Vue template",dark:a.$store.state.darkMode},{default:s(()=>e[14]||(e[14]=[n('<w-input label="First name" :validators="[validators.required]"></w-input>')])),_:1},8,["dark"]),l(w,{class:"body",language:"js",label:"Javascript",dark:a.$store.state.darkMode},{default:s(()=>e[15]||(e[15]=[n(`data: () => ({
  validators: {
    required: value => !!value || 'This field is required'
  }
})`)])),_:1},8,["dark"])]),t("li",M,[e[18]||(e[18]=n("Wrap the field in a ")),e[19]||(e[19]=t("span",{class:"code"},"w-form",-1)),e[20]||(e[20]=n(" and add a submit button")),l(w,{class:"body",language:"html-vue",label:"Vue template",dark:a.$store.state.darkMode},{default:s(()=>e[17]||(e[17]=[n(`<w-form>
  <w-input label="First name" :validators="[validators.required]"></w-input>

  <w-button type="submit">Submit</w-button>
</w-form>`)])),_:1},8,["dark"])]),e[21]||(e[21]=t("li",{class:"mt6 title4"},[n("That's enough"),t("p",{class:"body"},[n("you can let the "),t("span",{class:"code"},"w-form"),n(" component do the rest!"),t("br"),n(`
But you might want more options, discover them in the examples below.
`)])],-1))]),l(m,{tip:""},{default:s(()=>e[22]||(e[22]=[t("strong",null,"As of version 1.14.4",-1),t("p",null,[n(`It is also possible to trigger a particular field validation programmatically via
`),t("code",null,"this.$refs.myField.validate()"),n(`. all the validator functions associated on this field will be
re-run.
`)],-1)])),_:1}),l(i,{class:"mt10",h3:""},{default:s(()=>e[23]||(e[23]=[n("Creating a validator function")])),_:1}),e[83]||(e[83]=t("p",null,[n(`A validator is a custom function that tells Wave UI if the field is valid or invalid when the
validation happens. It must return either `),t("span",{class:"code"},"true"),n(` or a string containing an error
message in case of invalidaty. An empty string also works.`),t("br"),n(`
The current value of the field is always passed in parameter to the validator.`),t("br"),t("br"),n(`

In the following snippet, the value is converted to boolean (`),t("code",null,"!!"),n(`), and if falsy
(e.g. empty string) the JavaScript engine will continue through the `),t("code",null,"||"),n(` and will return
a string to Wave UI, meaning the field is invalid.`)],-1)),l(w,{language:"js",label:"Javascript",dark:a.$store.state.darkMode},{default:s(()=>e[24]||(e[24]=[n(`data: () => ({
  validators: {
    required: value => !!value || 'This field is required'
    // Other validators...
  }
})
`)])),_:1},8,["dark"]),l(L,{class:"mt12"}),l(i,{h2:""},{default:s(()=>e[25]||(e[25]=[n("Basic validation")])),_:1}),e[84]||(e[84]=t("p",null,[n("In this example and by default, the fields are validated on "),t("span",{class:"code"},"keyup"),n(", on "),t("span",{class:"code"},"blur"),n(`,
and on `),t("span",{class:"code"},"submit"),n("."),t("br"),n(`
The v-model on the `),t("span",{class:"code"},"w-form"),n(" gets updated with the form status.")],-1)),l(b,null,{pug:s(()=>e[28]||(e[28]=[n(`w-form(v-model="valid")
  w-input(label="First name" :validators="[validators.required, validators.alphabetical]")
  w-input.mt3(label="Last name" :validators="[validators.required]")
  .text-right.mt6
    strong v-model:
    code.ml2.mr4 `+v("{{ valid === false ? 'false' : valid || 'null' }}")+`
    w-button(type="submit" :disabled="valid === false") Validate`)])),html:s(()=>e[29]||(e[29]=[n(`<w-form v-model="valid">
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
      `+v("{{ valid === false ? 'false' : valid || 'null' }}")+`
    </code>
    <w-button type="submit" :disabled="valid === false">
      Validate
    </w-button>
  </div>
</w-form>`)])),js:s(()=>e[30]||(e[30]=[n(`data: () => ({
  valid: null,
  validators: {
    required: value => !!value || 'This field is required'
  }
})`)])),default:s(()=>[l(p,{modelValue:o.form1.valid,"onUpdate:modelValue":e[0]||(e[0]=u=>o.form1.valid=u)},{default:s(()=>[l(d,{label:"First name",validators:[o.validators.required,o.validators.alphabetical]},null,8,["validators"]),l(d,{class:"mt3",label:"Last name",validators:[o.validators.required]},null,8,["validators"]),t("div",D,[e[27]||(e[27]=t("strong",null,"v-model:",-1)),t("code",O,v(o.form1.valid===!1?"false":o.form1.valid||"null"),1),l(f,{type:"submit",disabled:o.form1.valid===!1},{default:s(()=>e[26]||(e[26]=[n("Validate")])),_:1},8,["disabled"])])]),_:1},8,["modelValue"])]),_:1}),l(m,{warning:""},{default:s(()=>e[31]||(e[31]=[t("strong",null,"Heads up!",-1),t("div",null,[n("The v-model value has 3 states: "),t("code",null,"true"),n(" and "),t("code",null,"false"),n(` for success and error, but also
`),t("code",null,"null"),n(" for pristine."),t("br"),n(`
Pristine represents the moment where the form is still untouched, neither valid, nor invalid.`)],-1)])),_:1}),l(m,{success:""},{default:s(()=>e[32]||(e[32]=[n(`Even in the most advanced case, Wave UI's form validation is fairly simple, it doesn't
require you to use `),t("code",null,"$refs",-1),n(`.
`)])),_:1}),l(i,{h2:""},{default:s(()=>e[33]||(e[33]=[n("Direct submission to a server")])),_:1}),e[85]||(e[85]=h(`<p class="mt6">The <span class="code">w-form</span> prevents the form submission by default - for modern usage where an AJAX
call is made on success (<a href="#advanced-validation">see the last example: Advanced validation</a>).
<br>
But in case you need to send the form as is to the server, you can set the <code>allow-submit</code>
option to <span class="code">true</span> and provide a URL via the usual <code>action</code> attribute, and optionally
set a <code>method</code> attribute. Just like a normal <span class="code">&lt;form&gt;</span> tag.<br><br>

The <span class="code">w-form</span> will handle the validation and prevent the form submission
until the form is valid. Once the form is valid, the form submission will not be prevented and the
data will be submitted to the URL set in the <code>action</code> attribute.</p><p class="mt2">In this example, the form data will be submitted in another tab to a fake <span class="code">test.php</span>.
</p>`,2)),l(b,null,{pug:s(()=>e[35]||(e[35]=[n(`w-form(action="test.php" method="post" target="_blank" allow-submit)
  w-input(label="First name" :validators="[validators.required]")
  w-input.mt3(label="Last name" :validators="[validators.required]")
  .text-right.mt6
    w-button(type="submit") Validate`)])),html:s(()=>e[36]||(e[36]=[n(`<w-form
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
</w-form>`)])),js:s(()=>e[37]||(e[37]=[n(`data: () => ({
  validators: {
    required: value => !!value || 'This field is required'
  }
})
`)])),default:s(()=>[l(p,{action:"test.php",method:"post",target:"_blank","allow-submit":""},{default:s(()=>[l(d,{label:"First name",validators:[o.validators.required]},null,8,["validators"]),l(d,{class:"mt3",label:"Last name",validators:[o.validators.required]},null,8,["validators"]),t("div",B,[l(f,{type:"submit"},{default:s(()=>e[34]||(e[34]=[n("Validate")])),_:1})])]),_:1})]),_:1}),l(m,{tip:""},{default:s(()=>e[38]||(e[38]=[n(`To submit a form via the HTML standard way like in this example, you need to add
the `),t("code",null,"action",-1),n(" attribute and optionally a "),t("code",null,"method",-1),n(` attribute.
`)])),_:1}),l(i,{h2:""},{default:s(()=>e[39]||(e[39]=[n("Validate on submit, on blur, on keyup")])),_:1}),e[86]||(e[86]=h(`<p>By default the validation happens on <span class="code">keyup</span>, on <span class="code">blur</span> and on
<span class="code">submit</span>. You can disable the <span class="code">keyup</span> and <span class="code">blur</span> validations
with <code>no-keyup-validation</code> and <code>no-blur-validation</code>.</p>`,1)),l(b,null,{pug:s(()=>e[41]||(e[41]=[n(`w-form(no-keyup-validation no-blur-validation)
  w-input(label="First name" :validators="[validators.required]")
  w-input.mt3(label="Last name" :validators="[validators.required]")
  .text-right.mt6
    w-button(type="submit") Validate`)])),html:s(()=>e[42]||(e[42]=[n(`<w-form no-keyup-validation no-blur-validation>
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
</w-form>`)])),js:s(()=>e[43]||(e[43]=[n(`data: () => ({
  validators: {
    required: value => !!value || 'This field is required'
  }
})
`)])),default:s(()=>[l(p,{"no-keyup-validation":"","no-blur-validation":""},{default:s(()=>[l(d,{label:"First name",validators:[o.validators.required]},null,8,["validators"]),l(d,{class:"mt3",label:"Last name",validators:[o.validators.required]},null,8,["validators"]),t("div",P,[l(f,{type:"submit"},{default:s(()=>e[40]||(e[40]=[n("Validate")])),_:1})])]),_:1})]),_:1}),l(i,{h2:""},{default:s(()=>e[44]||(e[44]=[n("Reset the form")])),_:1}),e[87]||(e[87]=t("p",null,[n("Once the form is invalid, you can reset it with a basic HTML reset button, like in this example."),t("br"),n(`
Alternatively, you can programmatically reset the form and all its element by setting the form
value (or v-model) to `),t("code",null,"null"),n(", like pristine.")],-1)),l(b,null,{pug:s(()=>e[47]||(e[47]=[n(`w-form(v-model="valid")
  w-input(label="First name" :validators="[validators.required]")
  w-input.mt3(label="Last name" :validators="[validators.required]")
  .text-right.mt6
    w-button.my1.mr2(bg-color="warning" type="reset") Reset
    w-button.my1(type="submit") Validate`)])),html:s(()=>e[48]||(e[48]=[n(`<w-form v-model="valid">
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
</w-form>`)])),js:s(()=>e[49]||(e[49]=[n(`data: () => ({
  valid: null,
  validators: {
    required: value => !!value || 'This field is required'
  }
})
`)])),default:s(()=>[l(p,{modelValue:o.form4.valid,"onUpdate:modelValue":e[1]||(e[1]=u=>o.form4.valid=u)},{default:s(()=>[l(d,{label:"First name",validators:[o.validators.required]},null,8,["validators"]),l(d,{class:"mt3",label:"Last name",validators:[o.validators.required]},null,8,["validators"]),t("div",Y,[l(f,{class:"my1 mr2","bg-color":"warning",type:"reset"},{default:s(()=>e[45]||(e[45]=[n("Reset")])),_:1}),l(f,{class:"my1",type:"submit"},{default:s(()=>e[46]||(e[46]=[n("Validate")])),_:1})])]),_:1},8,["modelValue"])]),_:1}),l(i,{h2:""},{default:s(()=>e[50]||(e[50]=[n("On validate, on success & on error events")])),_:1}),e[88]||(e[88]=h(`<p class="title5">These events are fired on submit.</p><ul><li class="mt1"><code>before-validate</code> is always fired as soon as a submission is attempted (e.g. submit
button click), prior validation.</li><li class="mt1"><code>validate</code> is always fired as soon as a submission is attempted, after validation.</li><li class="mt1"><code>success</code> is fired after submission when the validation is successful.
You should send the data to the server from this hook.</li><li class="mt1"><code>error</code> is fired after submission when the validation is failing.
You can show an error message from this hook.</li></ul>`,2)),l(m,{tip:""},{default:s(()=>e[51]||(e[51]=[n("The form status is always accurate (through the "),t("span",{class:"code"},"v-model",-1),n("), and the "),t("code",null,"error",-1),n(` &
`),t("code",null,"success",-1),n(" events return the "),t("span",{class:"code"},"errorsCount",-1),n("."),t("br",null,null,-1),n(`
So the only thing you could be missing at this point is the exact number of errors between the
submission attempts (if you need it) since a `),t("span",{class:"code"},"keyup",-1),n(" or "),t("span",{class:"code"},"blur",-1),n(` event may trigger
an error or success on that element. The next example introduces the `),t("code",null,"errors-count",-1),n(` syncing
for this purpose.`)])),_:1}),l(b,null,{pug:s(()=>e[53]||(e[53]=[n(`w-alert(
  :success="success"
  :error="error"
  :info="!success && !error").
  `+v("{{ !success && !error ? 'The form is still pristine' : (success ? 'Success' : 'Error') }}")+`
p The form has been validated `+v("{{ validated }}")+` time(s).

w-form(
  @validate="validated++;success = error = false"
  @success="success = true"
  @error="error = true")
  w-input(label="First name" :validators="[validators.required]")
  w-input.mt3(label="Last name" :validators="[validators.required]")

  .text-right.mt6
    w-button(type="submit") Validate`)])),html:s(()=>e[54]||(e[54]=[n(`<w-alert
  :success="success"
  :error="error"
  :info="!success && !error">
  `+v("{{ !success && !error ? 'The form is still pristine' : (success ? 'Success' : 'Error') }}")+`
</w-alert>

<p>
  The form has been validated `+v("{{ validated }}")+` time(s).
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
</w-form>`)])),js:s(()=>e[55]||(e[55]=[n(`data: () => ({
  success: null,
  error: null,
  validated: 0,
  validators: {
    required: value => !!value || 'This field is required'
  }
})
`)])),default:s(()=>[l(y,{success:o.form5.success,error:o.form5.error,info:!o.form5.success&&!o.form5.error},{default:s(()=>[n(v(!o.form5.success&&!o.form5.error?"The form is still pristine":o.form5.success?"Success":"Error"),1)]),_:1},8,["success","error","info"]),t("p",null,"The form has been validated "+v(o.form5.validated)+" time(s).",1),l(p,{onValidate:e[2]||(e[2]=u=>{o.form5.validated++,o.form5.success=o.form5.error=!1}),onSuccess:e[3]||(e[3]=u=>o.form5.success=!0),onError:e[4]||(e[4]=u=>o.form5.error=!0)},{default:s(()=>[l(d,{label:"First name",validators:[o.validators.required]},null,8,["validators"]),l(d,{class:"mt3",label:"Last name",validators:[o.validators.required]},null,8,["validators"]),t("div",N,[l(f,{type:"submit"},{default:s(()=>e[52]||(e[52]=[n("Validate")])),_:1})])]),_:1})]),_:1}),l(i,{h2:"",slug:"advanced-validation"},{default:s(()=>e[56]||(e[56]=[n("Advanced validation with everything")])),_:1}),e[89]||(e[89]=t("p",null,[n("This example shows a full form validation and lifecycle - everything you could need."),t("br")],-1)),e[90]||(e[90]=t("ul",null,[t("li",null,"It handles the error and success states of the form elements on keyup, on blur and submit."),t("li",null,"It allows resetting the form."),t("li",null,[n(`It keeps track of the form errors count at any time and displays a global message using the fired
`),t("span",{class:"code"},"w-form"),n(" custom events."),t("br")]),t("li",null,`When the form is valid and submitted, it simulates a form sending to a backend and displays
a notification.`)],-1)),l(b,null,{pug:s(()=>e[63]||(e[63]=[n(`w-card(content-class="pa0")
  .message-box
    w-transition-fade
      w-alert.my0.text-light(v-if="form.submitted" success no-border)
        | The form is valid, ready to send it!
      w-alert.my0.text-light(v-else-if="form.valid === false" error no-border)
        | The form has `+v("{{ form.errorsCount }}")+` errors.
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
    bottom) The form was sent successfully!`)])),html:s(()=>e[64]||(e[64]=[n(`<w-card content-class="pa0">
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
        The form has `+v("{{ form.errorsCount }}")+` errors.
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
</w-card>`)])),js:s(()=>e[65]||(e[65]=[n(`data: () => ({
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
}`)])),css:s(()=>e[66]||(e[66]=[n(`.message-box {min-height: 35px;}
`)])),default:s(()=>[l(j,{"content-class":"pa0",class:I(a.$store.state.darkMode?"grey-dark6--bg":"white--bg")},{default:s(()=>[t("div",W,[l(S,null,{default:s(()=>[o.form6.submitted?(g(),F(y,{key:0,class:"my0 text-light",success:"","no-border":""},{default:s(()=>e[57]||(e[57]=[n("The form is valid, ready to send it!")])),_:1})):o.form6.valid===!1?(g(),F(y,{key:1,class:"my0 text-light",error:"","no-border":""},{default:s(()=>[n("The form has "+v(o.form6.errorsCount)+" errors.",1)]),_:1})):E("",!0)]),_:1})]),l(p,{class:"px8 pt2 pb12",modelValue:o.form6.valid,"onUpdate:modelValue":e[6]||(e[6]=u=>o.form6.valid=u),"errors-count":o.form6.errorsCount,"onUpdate:errorsCount":e[7]||(e[7]=u=>o.form6.errorsCount=u),onValidate:c.onValidate,onSuccess:c.onSuccess},{default:s(()=>[l(d,{required:"",label:"First name",validators:[o.validators.required]},null,8,["validators"]),l(d,{class:"mt3",required:"",label:"Last name",validators:[o.validators.required]},null,8,["validators"]),l(d,{class:"mt3",disabled:"",label:"User name"}),l(V,{class:"mt4",wrap:"","align-center":"","justify-end":""},{default:s(()=>[l(A,{required:"",validators:[o.validators.consent]},{default:s(()=>e[58]||(e[58]=[n("I agree to the terms & conditions")])),_:1},8,["validators"]),e[61]||(e[61]=t("div",{class:"spacer"},null,-1)),l(f,{class:"my1 mr2","bg-color":"warning",type:"reset",onClick:e[5]||(e[5]=u=>o.form6.submitted=o.form6.sent=!1)},{default:s(()=>e[59]||(e[59]=[n("Reset")])),_:1}),l(f,{class:"my1",type:"submit",disabled:o.form6.valid===!1,loading:o.form6.submitted&&!o.form6.sent},{default:s(()=>e[60]||(e[60]=[n("Validate")])),_:1},8,["disabled","loading"])]),_:1})]),_:1},8,["modelValue","errors-count","onValidate","onSuccess"]),l(U,{modelValue:o.form6.sent,"onUpdate:modelValue":e[8]||(e[8]=u=>o.form6.sent=u),success:"",transition:"bounce",absolute:"",plain:"",round:"",bottom:""},{default:s(()=>e[62]||(e[62]=[n("The form was sent successfully!")])),_:1},8,["modelValue"])]),_:1},8,["class"])]),_:1}),l(i,{h2:""},{default:s(()=>e[67]||(e[67]=[n("Disabled & readonly form")])),_:1}),e[91]||(e[91]=t("p",null,[n("You can add the "),t("code",null,"disabled"),n(" or "),t("code",null,"readonly"),n(" prop on the "),t("strong",{class:"code"},"w-form"),n(` tag to
disable all the fields or set them all to readonly.`)],-1)),l(m,{warning:""},{default:s(()=>e[68]||(e[68]=[t("strong",null,"Attention",-1),t("div",null,[n("Wave UI will not reset the validity of the fields when you toggle the "),t("code",null,"disabled"),n(`
or `),t("code",null,"readonly"),n(" prop on the "),t("strong",{class:"code"},"w-form"),n(`: the field is becoming uneditable but
may contain invalid data.`)],-1)])),_:1}),l(b,null,{pug:s(()=>e[73]||(e[73]=[n(`w-button(
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
    w-button.ml2(type="submit" :disabled="form.valid === false") Validate`)])),html:s(()=>e[74]||(e[74]=[n(`<w-button
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
</w-form>`)])),js:s(()=>e[75]||(e[75]=[n(`data: () => ({
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
`)])),default:s(()=>[l(f,{outline:!o.form7.disabled,onClick:e[9]||(e[9]=u=>{o.form7.readonly=!1,o.form7.disabled=!o.form7.disabled})},{default:s(()=>e[69]||(e[69]=[n("Form disabled")])),_:1},8,["outline"]),l(f,{class:"ml2",outline:!o.form7.readonly,onClick:e[10]||(e[10]=u=>{o.form7.disabled=!1,o.form7.readonly=!o.form7.readonly})},{default:s(()=>e[70]||(e[70]=[n("Form readonly")])),_:1},8,["outline"]),l(p,{class:"mt4",modelValue:o.form7.valid,"onUpdate:modelValue":e[11]||(e[11]=u=>o.form7.valid=u),disabled:o.form7.disabled,readonly:o.form7.readonly},{default:s(()=>[l(d,{label:"First name",validators:[o.validators.required,o.validators.alphabetical]},null,8,["validators"]),l(d,{class:"mt3",label:"Last name",validators:[o.validators.required]},null,8,["validators"]),l(V,{class:"mt4","justify-end":""},{default:s(()=>[l(f,{type:"reset","bg-color":"warning"},{default:s(()=>e[71]||(e[71]=[n("Reset")])),_:1}),l(f,{class:"ml2",type:"submit",disabled:o.form7.valid===!1},{default:s(()=>e[72]||(e[72]=[n("Validate")])),_:1},8,["disabled"])]),_:1})]),_:1},8,["modelValue","disabled","readonly"])]),_:1}),l(i,{h2:""},{default:s(()=>e[76]||(e[76]=[n("Asynchronous validations")])),_:1}),e[92]||(e[92]=t("p",null,"You may want to validate a field on server side, for this you can use an asynchronous validator.",-1)),l(m,{tip:""},{default:s(()=>e[77]||(e[77]=[n("You should first be familiar with Promises and "),t("span",{class:"code"},"async",-1),n("/"),t("span",{class:"code"},"await",-1),n(`.
If you're not you can read about it
`),t("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function",target:"_blank"},"here",-1),n(".")])),_:1}),e[93]||(e[93]=t("p",null,[n(`This example presents a common case: checking if a username is already in use from a user
registration page.`),t("br"),n(`
If you type exactly `),t("code",null,"waveui"),n(` which is already taken, an error message will appear after
connecting to a server, via an Axios request for instance.`),t("br"),n(`
A spinner is also displayed while the server is being requested.
`)],-1)),l(b,{"content-class":"pa6"},{pug:s(()=>e[78]||(e[78]=[n(`w-form(error-placeholders)
  w-input(
    label="Username"
    :validators="[validators.required, validators.username]"
    :inner-icon-right="loading ? 'mdi mdi-autorenew w-icon--spin' : ''"
    :loading="loading"
    autocomplete="off")`)])),html:s(()=>e[79]||(e[79]=[n(`<w-form error-placeholders>
  <w-input
    label="Username"
    :validators="[validators.required, validators.username]"
    :inner-icon-right="loading ? 'mdi mdi-autorenew w-icon--spin' : ''"
    :loading="loading"
    autocomplete="off">
  </w-input>
</w-form>`)])),js:s(()=>e[80]||(e[80]=[n(`// Here we need access to \`this\`, so we can't use an arrow function.
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
`)])),default:s(()=>[l(p,{"error-placeholders":""},{default:s(()=>[l(d,{label:"Username",validators:[o.validators.required,o.validators.username],"inner-icon-right":o.form1.loading?"mdi mdi-autorenew w-icon--spin":"",loading:o.form1.loading,autocomplete:"off"},null,8,["validators","inner-icon-right","loading"])]),_:1})]),_:1}),l(i,{h3:""},{default:s(()=>e[81]||(e[81]=[n("Loading bar color")])),_:1}),e[94]||(e[94]=t("p",null,[n("You can provide a custom loading bar color via the prop "),t("code",null,"progress-color"),n("."),t("br"),n(`
Example with `),t("code",null,'progress-color="cyan"'),n(":")],-1)),l(d,{class:"mt5",label:"Username",loading:!0,"progress-color":"cyan",autocomplete:"off"})])}const H={data(){return{form1:{valid:null,loading:!1},form2:{valid:null},form3:{valid:null},form4:{valid:null},form5:{valid:null,error:null,success:null,validated:0},form6:{valid:null,submitted:!1,sent:!1,errorsCount:0},form7:{valid:null,disabled:!1,readonly:!1},validators:{username:async a=>(this.form1.loading=!0,await new Promise(e=>setTimeout(e,800)),this.form1.loading=!1,a!=="waveui"||"This username is already in use"),required:a=>!!a||"This field is required",alphabetical:a=>/^[a-z \-']+$/i.test(a)||"This field only accepts letters.",consent:a=>!!a||"You must agree"}}},methods:{onSuccess(){setTimeout(()=>this.form6.sent=!0,2e3)},onValidate(){this.form6.sent=!1,this.form6.submitted=this.form6.errorsCount===0}}},z=k(H,[["render",J]]);function X(a,e,T,x,o,c){const m=r("title-link"),i=r("component-api");return g(),q("div",null,[e[1]||(e[1]=t("div",{class:"w-divider my12"},null,-1)),l(m,{class:"title1",h2:""},{default:s(()=>e[0]||(e[0]=[n("API")])),_:1}),l(i,{class:"mt0",items:c.props,descriptions:a.propsDescs,title:"Props"},null,8,["items","descriptions"]),l(i,{items:a.slots,title:"Slots"},null,8,["items"]),l(i,{items:c.events,title:"Events"},null,8,["items"])])}const K={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Contains the status of the form validity at all times. Three values are possible: <code>null</code> when pristine (untouched), <code>false</code> when invalid, <code>true</code> when valid.<br>This value gets updated every time a validation is triggered on a single field or on all the fields at once on form submit.<br>Setting this value to <code>null</code> will reset the form.',allowSubmit:"Native HTML submits the form to the server when all the form elements are valid.<br>Usually and by default, the form submission is prevented and an AJAX call is made from the front end. This is completely up to the developer.",noKeyupValidation:"Prevents the form element validation on keyup (happening by default).",noBlurValidation:"Prevents the form element validation on blur (happening by default).",errorPlaceholders:"Reserves a space under all the form elements so that triggering an error and showing the error message will not change the height of the form.",disabled:"Disables all the form fields all at once, making them unreactive to user interactions.",readonly:"Set all the form fields to readonly all at once. The fields will still look interactive but their value will not be editable by user interaction.",validationColor:'Applies a specific color to any input field failing the validation.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.'},G={default:{description:"The form content."}},Q={submit:{description:"Emitted on form submit.",params:{"[DOM event object]":"The associated reset DOM event."}},"before-validate":{description:"Emitted before validation, every time a validation is triggered."},validate:{description:"Emitted on form validate, every time a validation is triggered.<br>Returns a single object containing:",params:{e:"The associated DOM event.",errorsCount:"An integer representing the number of errors in the form."}},success:{description:"Emitted on form success, when there is no error in the form and the validation is successful.<br>Returns a single object containing:",params:{e:"The associated DOM event.",errorsCount:"An integer representing the number of errors in the form."}},error:{description:"Emitted on form error, when there is at least one error in the form and the validation fails.<br>Returns a single object containing:",params:{e:"The associated DOM event.",errorsCount:"An integer representing the number of errors in the form."}},reset:{description:"Emitted on form reset. A reset can be triggered by setting the v-model value to null or by clicking on a reset button.",params:{"[DOM event object]":"The associated reset DOM event."}},input:{description:"Emitted every time the form status changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean, Null]":"The new status of the form: one of <code>null</code> when pristine, <code>false</code> when invalid, <code>true</code> when valid."}},"update:modelValue":{description:"Emitted every time the form status changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean, Null]":"The new status of the form: one of <code>null</code> when pristine, <code>false</code> when invalid, <code>true</code> when valid."}},"update:errorsCount":{description:"Emitted every time the errorsCount changes. To be used with <code>:errors-count.sync</code> in Vue 2 or <code>v-model:errors-count</code> in Vue 3.",params:{"[Integer]":"The number of errors in the form."}}},Z={data:()=>({propsDescs:K,slots:G}),computed:{props(){return C.props},events(){return C.emits.reduce((a,e)=>(a[e]=Q[e]||{})&&a,{})}}},$=k(Z,[["render",X]]);function _(a,e,T,x,o,c){const m=r("ui-component-title"),i=r("examples"),w=r("api");return g(),q("main",null,[l(m,null,{default:s(()=>e[0]||(e[0]=[n("w-form")])),_:1}),l(i),l(w)])}const ee={components:{Examples:z,Api:$}},te=k(ee,[["render",_]]);export{te as default};
