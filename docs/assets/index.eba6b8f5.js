import{r as l,o as b,f as g,a as n,w as s,b as t,h as v,e,c as V,d as I,i as y,_ as q,N as A}from"./index.372af10f.js";const j=t("ul",null,[t("li",{class:"title5"},[e("The "),t("span",{class:"code"},"w-form"),e(" component is used for validation.")]),t("li",null,[e("A "),t("span",{class:"code"},"w-form"),e(` is invisible and has no style by default. You can put it in a
`),t("span",{class:"code"},"w-card"),e(" (or put a "),t("span",{class:"code"},"w-card"),e(` in it) to have some style. Alternatively,
you can apply colors and spaces CSS classes on it (e.g. `),t("span",{class:"code"},".blue--bg"),e(", "),t("span",{class:"code"},".pa4"),e(").")]),t("li",null,[e("The "),t("span",{class:"code"},"w-form"),e(" tag translates to a "),t("span",{class:"code"},"<form>"),e(" tag.")])],-1),E=e("How it works"),R=t("div",{class:"title3"},"The validation works in 3 steps:",-1),D={class:"title4"},O=e("Add one or more validator functions on the field you want validated"),B=e('<w-input label="First name" :validators="[validators.required]"></w-input>'),M=e(`data: () => ({
  validators: {
    required: value => !!value || 'This field is required'
  }
})`),P={class:"mt6 title4"},Y=e("Wrap the field in a "),N=t("span",{class:"code"},"w-form",-1),W=e(" and add a submit button"),J=e(`<w-form>
  <w-input label="First name" :validators="[validators.required]"></w-input>

  <w-button type="submit">Submit</w-button>
</w-form>`),H=t("li",{class:"mt6 title4"},[e("That's enough"),t("p",{class:"body"},[e("you can let the "),t("span",{class:"code"},"w-form"),e(" component do the rest!"),t("br"),e(`
But you might want more options, discover them in the examples bellow.
`)])],-1),z=t("strong",null,"As of version 1.14.4",-1),X=t("p",null,[e(`It is also possible to trigger a particular field validation programmatically via
`),t("code",null,"this.$refs.myField.validate()"),e(`. all the validator functions associated on this field will be
re-run.
`)],-1),K=e("Creating a validator function"),G=t("p",null,[e(`A validator is a custom function that tells Wave UI if the field is valid or invalid when the
validation happens. It must return either `),t("span",{class:"code"},"true"),e(` or a string containing an error
message in case of invalidaty. An empty string also works.`),t("br"),e(`
The current value of the field is always passed in parameter to the validator.`),t("br"),t("br"),e(`

In the following snippet, the value is converted to boolean (`),t("code",null,"!!"),e(`), and if falsy
(e.g. empty string) the JavaScript engine will continue through the `),t("code",null,"||"),e(` and will return
a string to Wave UI, meaning the field is invalid.`)],-1),Q=e(`data: () => ({
  validators: {
    required: value => !!value || 'This field is required'
    // Other validators...
  }
})
`),Z=e("Basic validation"),$=t("p",null,[e("In this example and by default, the fields are validated on "),t("span",{class:"code"},"keyup"),e(", on "),t("span",{class:"code"},"blur"),e(`,
and on `),t("span",{class:"code"},"submit"),e("."),t("br"),e(`
The v-model on the `),t("span",{class:"code"},"w-form"),e(" gets updated with the form status.")],-1),ee={class:"text-right mt6"},te=t("strong",null,"v-model:",-1),ne={class:"ml2 mr4"},se=e("Validate"),oe=e(`<w-form v-model="valid">
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
</w-form>`),ae=e(`data: () => ({
  valid: null,
  validators: {
    required: value => !!value || 'This field is required'
  }
})`),le=t("strong",null,"Heads up!",-1),ie=t("div",null,[e("The v-model value has 3 states: "),t("code",null,"true"),e(" and "),t("code",null,"false"),e(` for success and error, but also
`),t("code",null,"null"),e(" for pristine."),t("br"),e(`
Pristine represents the moment where the form is still untouched, neither valid, nor invalid.`)],-1),re=e(`Even in the most advanced case, Wave UI's form validation is fairly simple, it doesn't
require you to use `),de=t("code",null,"$refs",-1),ue=e(`.
`),ce=e("Direct submission to a server"),me=y(`<p class="mt6">The <span class="code">w-form</span> prevents the form submission by default - for modern usage where an AJAX
call is made on success (<a href="#advanced-validation">see the last example: Advanced validation</a>).
<br>
But in case you need to send the form as is to the server, you can set the <code>allow-submit</code>
option to <span class="code">true</span> and provide a URL via the usual <code>action</code> attribute, and optionally
set a <code>method</code> attribute. Just like a normal <span class="code">&lt;form&gt;</span> tag.<br><br>

The <span class="code">w-form</span> will handle the validation and prevent the form submission
until the form is valid. Once the form is valid, the form submission will not be prevented and the
data will be submitted to the URL set in the <code>action</code> attribute.</p><p class="mt2">In this example, the form data will be submitted in another tab to a fake <span class="code">test.php</span>.
</p>`,2),he={class:"text-right mt6"},fe=e("Validate"),ve=e(`<w-form
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
</w-form>`),pe=e(`data: () => ({
  validators: {
    required: value => !!value || 'This field is required'
  }
})
`),_e=e(`To submit a form via the HTML standard way like in this example, you need to add
the `),be=t("code",null,"action",-1),we=e(" attribute and optionally a "),ge=t("code",null,"method",-1),ye=e(` attribute.
`),qe=e("Validate on submit, on blur, on keyup"),Te=y(`<p>By default the validation happens on <span class="code">keyup</span>, on <span class="code">blur</span> and on
<span class="code">submit</span>. You can disable the <span class="code">keyup</span> and <span class="code">blur</span> validations
with <code>no-keyup-validation</code> and <code>no-blur-validation</code>.</p>`,1),xe={class:"text-right mt6"},ke=e("Validate"),Ve=e(`<w-form no-keyup-validation no-blur-validation>
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
</w-form>`),Ae=e(`data: () => ({
  validators: {
    required: value => !!value || 'This field is required'
  }
})
`),Ce=e("Reset the form"),Se=t("p",null,[e("Once the form is invalid, you can reset it with a basic HTML reset button, like in this example."),t("br"),e(`
Alternatively, you can programmatically reset the form and all its element by setting the form
value (or v-model) to `),t("code",null,"null"),e(", like pristine.")],-1),Fe={class:"text-right mt6"},Ue=e("Reset"),Le=e("Validate"),Ie=e(`<w-form v-model="valid">
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
</w-form>`),je=e(`data: () => ({
  valid: null,
  validators: {
    required: value => !!value || 'This field is required'
  }
})
`),Ee=e("On validate, on success & on error events"),Re=y(`<p class="title5">These events are fired on submit.</p><ul><li class="mt1"><code>before-validate</code> is always fired as soon as a submission is attempted (e.g. submit
button click), prior validation.</li><li class="mt1"><code>validate</code> is always fired as soon as a submission is attempted, after validation.</li><li class="mt1"><code>success</code> is fired after submission when the validation is successful.
You should send the data to the server from this hook.</li><li class="mt1"><code>error</code> is fired after submission when the validation is failing.
You can show an error message from this hook.</li></ul>`,2),De=e("The form status is always accurate (through the "),Oe=t("span",{class:"code"},"v-model",-1),Be=e("), and the "),Me=t("code",null,"error",-1),Pe=e(` &
`),Ye=t("code",null,"success",-1),Ne=e(" events return the "),We=t("span",{class:"code"},"errorsCount",-1),Je=e("."),He=t("br",null,null,-1),ze=e(`
So the only thing you could be missing at this point is the exact number of errors between the
submission attempts (if you need it) since a `),Xe=t("span",{class:"code"},"keyup",-1),Ke=e(" or "),Ge=t("span",{class:"code"},"blur",-1),Qe=e(` event may trigger
an error or success on that element. The next example introduces the `),Ze=t("code",null,"errors-count",-1),$e=e(` syncing
for this purpose.`),et={class:"text-right mt6"},tt=e("Validate"),nt=e(`data: () => ({
  success: null,
  error: null,
  validated: 0,
  validators: {
    required: value => !!value || 'This field is required'
  }
})
`),st=e("Advanced validation with everything"),ot=t("p",null,[e("This example shows a full form validation and lifecycle - everything you could need."),t("br")],-1),at=t("ul",null,[t("li",null,"It handles the error and success states of the form elements on keyup, on blur and submit."),t("li",null,"It allows resetting the form."),t("li",null,[e(`It keeps track of the form errors count at any time and displays a global message using the fired
`),t("span",{class:"code"},"w-form"),e(" custom events."),t("br")]),t("li",null,`When the form is valid and submitted, it simulates a form sending to a backend and displays
a notification.`)],-1),lt={class:"message-box"},it=e("The form is valid, ready to send it!"),rt=e("I agree to the terms & conditions"),dt=t("div",{class:"spacer"},null,-1),ut=e("Reset"),ct=e("Validate"),mt=e("The form was sent successfully!"),ht=e(`data: () => ({
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
}`),ft=e(`.message-box {min-height: 35px;}
`),vt=e("Disabled & readonly form"),pt=t("p",null,[e("You can add the "),t("code",null,"disabled"),e(" or "),t("code",null,"readonly"),e(" prop on the "),t("strong",{class:"code"},"w-form"),e(` tag to
disable all the fields or set them all to readonly.`)],-1),_t=t("strong",null,"Attention",-1),bt=t("div",null,[e("Wave UI will not reset the validity of the fields when you toggle the "),t("code",null,"disabled"),e(`
or `),t("code",null,"readonly"),e(" prop on the "),t("strong",{class:"code"},"w-form"),e(`: the field is becoming uneditable but
may contain invalid data.`)],-1),wt=e("Form disabled"),gt=e("Form readonly"),yt=e("Reset"),qt=e("Validate"),Tt=e(`<w-button
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
</w-form>`),xt=e(`data: () => ({
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
`),kt=e("Asynchronous validations"),Vt=t("p",null,"You may want to validate a field on server side, for this you can use an asynchronous validator.",-1),At=e("You should first be familiar with Promises and "),Ct=t("span",{class:"code"},"async",-1),St=e("/"),Ft=t("span",{class:"code"},"await",-1),Ut=e(`.
If you're not you can read about it
`),Lt=t("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function",target:"_blank"},"here",-1),It=e("."),jt=t("p",null,[e(`This example presents a common case: checking if a username is already in use from a user
registration page.`),t("br"),e(`
If you type exactly `),t("code",null,"waveui"),e(` which is already taken, an error message will appear after
connecting to a server, via an Axios request for instance.`),t("br"),e(`
A spinner is also displayed while the server is being requested.
`)],-1),Et=e(`<w-form error-placeholders>
  <w-input
    label="Username"
    :validators="[validators.required, validators.username]"
    :inner-icon-right="form.loading ? 'mdi mdi-autorenew w-icon--spin' : ''"
    :loading="form.loading"
    autocomplete="off">
  </w-input>
</w-form>`),Rt=e(`// Here we need access to \`this\`, so we can't use an arrow function.
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
`),Dt=e("Loading bar color"),Ot=t("p",null,[e("You can provide a custom loading bar color via the prop "),t("code",null,"progress-color"),e("."),t("br"),e(`
Example with `),t("code",null,'progress-color="cyan"'),e(":")],-1);function Bt(u,a,T,x,o,p){const c=l("alert"),i=l("title-link"),_=l("ssh-pre"),C=l("w-divider"),r=l("w-input"),m=l("w-button"),h=l("w-form"),f=l("example"),w=l("w-alert"),S=l("w-transition-fade"),F=l("w-checkbox"),k=l("w-flex"),U=l("w-notification"),L=l("w-card");return b(),g("div",null,[n(c,{class:"mt6",tip:""},{default:s(()=>[j]),_:1}),n(i,{h2:""},{default:s(()=>[E]),_:1}),R,t("ol",null,[t("li",D,[O,n(_,{class:"body",language:"html-vue",label:"Vue template"},{default:s(()=>[B]),_:1}),n(_,{class:"body",language:"js",label:"Javascript"},{default:s(()=>[M]),_:1})]),t("li",P,[Y,N,W,n(_,{class:"body",language:"html-vue",label:"Vue template"},{default:s(()=>[J]),_:1})]),H]),n(c,{tip:""},{default:s(()=>[z,X]),_:1}),n(i,{class:"mt10",h3:""},{default:s(()=>[K]),_:1}),G,n(_,{language:"js",label:"Javascript"},{default:s(()=>[Q]),_:1}),n(C,{class:"mt12"}),n(i,{h2:""},{default:s(()=>[Z]),_:1}),$,n(f,null,{html:s(()=>[oe]),js:s(()=>[ae]),default:s(()=>[n(h,{modelValue:o.form1.valid,"onUpdate:modelValue":a[0]||(a[0]=d=>o.form1.valid=d)},{default:s(()=>[n(r,{label:"First name",validators:[o.validators.required,o.validators.alphabetical]},null,8,["validators"]),n(r,{class:"mt3",label:"Last name",validators:[o.validators.required]},null,8,["validators"]),t("div",ee,[te,t("code",ne,v(o.form1.valid===!1?"false":o.form1.valid||"null"),1),n(m,{type:"submit",disabled:o.form1.valid===!1},{default:s(()=>[se]),_:1},8,["disabled"])])]),_:1},8,["modelValue"])]),_:1}),n(c,{warning:""},{default:s(()=>[le,ie]),_:1}),n(c,{success:""},{default:s(()=>[re,de,ue]),_:1}),n(i,{h2:""},{default:s(()=>[ce]),_:1}),me,n(f,null,{html:s(()=>[ve]),js:s(()=>[pe]),default:s(()=>[n(h,{action:"test.php",method:"post",target:"_blank","allow-submit":""},{default:s(()=>[n(r,{label:"First name",validators:[o.validators.required]},null,8,["validators"]),n(r,{class:"mt3",label:"Last name",validators:[o.validators.required]},null,8,["validators"]),t("div",he,[n(m,{type:"submit"},{default:s(()=>[fe]),_:1})])]),_:1})]),_:1}),n(c,{tip:""},{default:s(()=>[_e,be,we,ge,ye]),_:1}),n(i,{h2:""},{default:s(()=>[qe]),_:1}),Te,n(f,null,{html:s(()=>[Ve]),js:s(()=>[Ae]),default:s(()=>[n(h,{"no-keyup-validation":"","no-blur-validation":""},{default:s(()=>[n(r,{label:"First name",validators:[o.validators.required]},null,8,["validators"]),n(r,{class:"mt3",label:"Last name",validators:[o.validators.required]},null,8,["validators"]),t("div",xe,[n(m,{type:"submit"},{default:s(()=>[ke]),_:1})])]),_:1})]),_:1}),n(i,{h2:""},{default:s(()=>[Ce]),_:1}),Se,n(f,null,{html:s(()=>[Ie]),js:s(()=>[je]),default:s(()=>[n(h,{modelValue:o.form4.valid,"onUpdate:modelValue":a[1]||(a[1]=d=>o.form4.valid=d)},{default:s(()=>[n(r,{label:"First name",validators:[o.validators.required]},null,8,["validators"]),n(r,{class:"mt3",label:"Last name",validators:[o.validators.required]},null,8,["validators"]),t("div",Fe,[n(m,{class:"my1 mr2","bg-color":"warning",type:"reset"},{default:s(()=>[Ue]),_:1}),n(m,{class:"my1",type:"submit"},{default:s(()=>[Le]),_:1})])]),_:1},8,["modelValue"])]),_:1}),n(i,{h2:""},{default:s(()=>[Ee]),_:1}),Re,n(c,{tip:""},{default:s(()=>[De,Oe,Be,Me,Pe,Ye,Ne,We,Je,He,ze,Xe,Ke,Ge,Qe,Ze,$e]),_:1}),n(f,null,{html:s(()=>[e(`<w-alert
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
</w-form>`,1)]),js:s(()=>[nt]),default:s(()=>[n(w,{success:o.form5.success,error:o.form5.error,info:!o.form5.success&&!o.form5.error},{default:s(()=>[e(v(!o.form5.success&&!o.form5.error?"The form is still pristine":o.form5.success?"Success":"Error"),1)]),_:1},8,["success","error","info"]),t("p",null,"The form has been validated "+v(o.form5.validated)+" time(s).",1),n(h,{onValidate:a[2]||(a[2]=d=>{o.form5.validated++,o.form5.success=o.form5.error=!1}),onSuccess:a[3]||(a[3]=d=>o.form5.success=!0),onError:a[4]||(a[4]=d=>o.form5.error=!0)},{default:s(()=>[n(r,{label:"First name",validators:[o.validators.required]},null,8,["validators"]),n(r,{class:"mt3",label:"Last name",validators:[o.validators.required]},null,8,["validators"]),t("div",et,[n(m,{type:"submit"},{default:s(()=>[tt]),_:1})])]),_:1})]),_:1}),n(i,{h2:"",slug:"advanced-validation"},{default:s(()=>[st]),_:1}),ot,at,n(f,null,{html:s(()=>[e(`<w-card class="white--bg" content-class="pa0">
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
</w-card>`,1)]),js:s(()=>[ht]),css:s(()=>[ft]),default:s(()=>[n(L,{class:"white--bg","content-class":"pa0"},{default:s(()=>[t("div",lt,[n(S,null,{default:s(()=>[o.form6.submitted?(b(),V(w,{key:0,class:"my0 text-light",success:"","no-border":""},{default:s(()=>[it]),_:1})):o.form6.valid===!1?(b(),V(w,{key:1,class:"my0 text-light",error:"","no-border":""},{default:s(()=>[e("The form has "+v(o.form6.errorsCount)+" errors.",1)]),_:1})):I("",!0)]),_:1})]),n(h,{class:"px8 pt2 pb12",modelValue:o.form6.valid,"onUpdate:modelValue":a[6]||(a[6]=d=>o.form6.valid=d),"errors-count":o.form6.errorsCount,"onUpdate:errors-count":a[7]||(a[7]=d=>o.form6.errorsCount=d),onValidate:p.onValidate,onSuccess:p.onSuccess},{default:s(()=>[n(r,{required:"",label:"First name",validators:[o.validators.required]},null,8,["validators"]),n(r,{class:"mt3",required:"",label:"Last name",validators:[o.validators.required]},null,8,["validators"]),n(r,{class:"mt3",disabled:"",label:"User name"}),n(k,{class:"mt4",wrap:"","align-center":"","justify-end":""},{default:s(()=>[n(F,{required:"",validators:[o.validators.consent]},{default:s(()=>[rt]),_:1},8,["validators"]),dt,n(m,{class:"my1 mr2","bg-color":"warning",type:"reset",onClick:a[5]||(a[5]=d=>o.form6.submitted=o.form6.sent=!1)},{default:s(()=>[ut]),_:1}),n(m,{class:"my1",type:"submit",disabled:o.form6.valid===!1,loading:o.form6.submitted&&!o.form6.sent},{default:s(()=>[ct]),_:1},8,["disabled","loading"])]),_:1})]),_:1},8,["modelValue","errors-count","onValidate","onSuccess"]),n(U,{modelValue:o.form6.sent,"onUpdate:modelValue":a[8]||(a[8]=d=>o.form6.sent=d),success:"",transition:"bounce",absolute:"",plain:"",round:"",bottom:""},{default:s(()=>[mt]),_:1},8,["modelValue"])]),_:1})]),_:1}),n(i,{h2:""},{default:s(()=>[vt]),_:1}),pt,n(c,{warning:""},{default:s(()=>[_t,bt]),_:1}),n(f,null,{html:s(()=>[Tt]),js:s(()=>[xt]),default:s(()=>[n(m,{outline:!o.form7.disabled,onClick:a[9]||(a[9]=d=>{o.form7.readonly=!1,o.form7.disabled=!o.form7.disabled})},{default:s(()=>[wt]),_:1},8,["outline"]),n(m,{class:"ml2",outline:!o.form7.readonly,onClick:a[10]||(a[10]=d=>{o.form7.disabled=!1,o.form7.readonly=!o.form7.readonly})},{default:s(()=>[gt]),_:1},8,["outline"]),n(h,{class:"mt4",modelValue:o.form7.valid,"onUpdate:modelValue":a[11]||(a[11]=d=>o.form7.valid=d),disabled:o.form7.disabled,readonly:o.form7.readonly},{default:s(()=>[n(r,{label:"First name",validators:[o.validators.required,o.validators.alphabetical]},null,8,["validators"]),n(r,{class:"mt3",label:"Last name",validators:[o.validators.required]},null,8,["validators"]),n(k,{class:"mt4","justify-end":""},{default:s(()=>[n(m,{type:"reset","bg-color":"warning"},{default:s(()=>[yt]),_:1}),n(m,{class:"ml2",type:"submit",disabled:o.form7.valid===!1},{default:s(()=>[qt]),_:1},8,["disabled"])]),_:1})]),_:1},8,["modelValue","disabled","readonly"])]),_:1}),n(i,{h2:""},{default:s(()=>[kt]),_:1}),Vt,n(c,{tip:""},{default:s(()=>[At,Ct,St,Ft,Ut,Lt,It]),_:1}),jt,n(f,{"content-class":"pa6"},{html:s(()=>[Et]),js:s(()=>[Rt]),default:s(()=>[n(h,{"error-placeholders":""},{default:s(()=>[n(r,{label:"Username",validators:[o.validators.required,o.validators.username],"inner-icon-right":o.form1.loading?"mdi mdi-autorenew w-icon--spin":"",loading:o.form1.loading,autocomplete:"off"},null,8,["validators","inner-icon-right","loading"])]),_:1})]),_:1}),n(i,{h3:""},{default:s(()=>[Dt]),_:1}),Ot,n(r,{class:"mt5",label:"Username",loading:!0,"progress-color":"cyan",autocomplete:"off"})])}const Mt={data(){return{form1:{valid:null,loading:!1},form2:{valid:null},form3:{valid:null},form4:{valid:null},form5:{valid:null,error:null,success:null,validated:0},form6:{valid:null,submitted:!1,sent:!1,errorsCount:0},form7:{valid:null,disabled:!1,readonly:!1},validators:{username:async u=>(this.form1.loading=!0,await new Promise(a=>setTimeout(a,800)),this.form1.loading=!1,u!=="waveui"||"This username is already in use"),required:u=>!!u||"This field is required",alphabetical:u=>/^[a-z \-']+$/i.test(u)||"This field only accepts letters.",consent:u=>!!u||"You must agree"}}},methods:{onSuccess(){setTimeout(()=>this.form6.sent=!0,2e3)},onValidate(){this.form6.sent=!1,this.form6.submitted=this.form6.errorsCount===0}}};var Pt=q(Mt,[["render",Bt]]);const Yt=t("div",{class:"w-divider my12"},null,-1),Nt=e("API");function Wt(u,a,T,x,o,p){const c=l("title-link"),i=l("component-api");return b(),g("div",null,[Yt,n(c,{class:"title1",h2:""},{default:s(()=>[Nt]),_:1}),n(i,{class:"mt0",items:p.props,descriptions:u.propsDescs,title:"Props"},null,8,["items","descriptions"]),n(i,{items:u.slots,title:"Slots"},null,8,["items"]),n(i,{items:p.events,title:"Events"},null,8,["items"])])}const Jt={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Contains the status of the form validity at all times. Three values are possible: <code>null</code> when pristine (untouched), <code>false</code> when invalid, <code>true</code> when valid.<br>This value gets updated every time a validation is triggered on a single field or on all the fields at once on form submit.<br>Setting this value to <code>null</code> will reset the form.',allowSubmit:"Native HTML submits the form to the server when all the form elements are valid.<br>Usually and by default, the form submission is prevented and an AJAX call is made from the front end. This is completely up to the developer.",noKeyupValidation:"Prevents the form element validation on keyup (happening by default).",noBlurValidation:"Prevents the form element validation on blur (happening by default).",errorPlaceholders:"Reserves a space under all the form elements so that triggering an error and showing the error message will not change the height of the form.",disabled:"Disables all the form fields all at once, making them unreactive to user interactions.",readonly:"Set all the form fields to readonly all at once. The fields will still look interactive but their value will not be editable by user interaction.",validationColor:'Applies a specific color to any input field failing the validation.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.'},Ht={default:{description:"The form content."}},zt={submit:{description:"Emitted on form submit.",params:{"[DOM event object]":"The associated reset DOM event."}},"before-validate":{description:"Emitted before validation, every time a validation is triggered."},validate:{description:"Emitted on form validate, every time a validation is triggered.<br>Returns a single object containing:",params:{e:"The associated DOM event.",errorsCount:"An integer representing the number of errors in the form."}},success:{description:"Emitted on form success, when there is no error in the form and the validation is successful.<br>Returns a single object containing:",params:{e:"The associated DOM event.",errorsCount:"An integer representing the number of errors in the form."}},error:{description:"Emitted on form error, when there is at least one error in the form and the validation fails.<br>Returns a single object containing:",params:{e:"The associated DOM event.",errorsCount:"An integer representing the number of errors in the form."}},reset:{description:"Emitted on form reset. A reset can be triggered by setting the v-model value to null or by clicking on a reset button.",params:{"[DOM event object]":"The associated reset DOM event."}},input:{description:"Emitted every time the form status changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean, Null]":"The new status of the form: one of <code>null</code> when pristine, <code>false</code> when invalid, <code>true</code> when valid."}},"update:modelValue":{description:"Emitted every time the form status changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean, Null]":"The new status of the form: one of <code>null</code> when pristine, <code>false</code> when invalid, <code>true</code> when valid."}},"update:errorsCount":{description:"Emitted every time the errorsCount changes. To be used with <code>:errors-count.sync</code> in Vue 2 or <code>v-model:errors-count</code> in Vue 3.",params:{"[Integer]":"The number of errors in the form."}}},Xt={data:()=>({propsDescs:Jt,slots:Ht}),computed:{props(){return A.props},events(){return A.emits.reduce((u,a)=>(u[a]=zt[a]||{})&&u,{})}}};var Kt=q(Xt,[["render",Wt]]);const Gt=e("w-form");function Qt(u,a,T,x,o,p){const c=l("ui-component-title"),i=l("examples"),_=l("api");return b(),g("main",null,[n(c,null,{default:s(()=>[Gt]),_:1}),n(i),n(_)])}const Zt={components:{Examples:Pt,Api:Kt}};var en=q(Zt,[["render",Qt]]);export{en as default};
