import{n as s,o as r}from"./index.6bc87caa.js";import"./vendor.748d1766.js";var d=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("alert",{staticClass:"mt6",attrs:{tip:""}},[t("ul",[t("li",{staticClass:"title5"},[e._v("The "),t("span",{staticClass:"code"},[e._v("w-form")]),e._v(" component is used for validation.")]),t("li",[e._v("A "),t("span",{staticClass:"code"},[e._v("w-form")]),e._v(` is invisible and has no style by default. You can put it in a
`),t("span",{staticClass:"code"},[e._v("w-card")]),e._v(" (or put a "),t("span",{staticClass:"code"},[e._v("w-card")]),e._v(` in it) to have some style. Alternatively,
you can apply colors and spaces CSS classes on it (e.g. `),t("span",{staticClass:"code"},[e._v(".blue--bg")]),e._v(", "),t("span",{staticClass:"code"},[e._v(".pa4")]),e._v(").")]),t("li",[e._v("The "),t("span",{staticClass:"code"},[e._v("w-form")]),e._v(" tag translates to a "),t("span",{staticClass:"code"},[e._v("<form>")]),e._v(" tag.")])])]),t("title-link",{attrs:{h2:""}},[e._v("How it works")]),t("div",{staticClass:"title3"},[e._v("The validation works in 3 steps:")]),t("ol",[t("li",{staticClass:"title4"},[e._v("Add one or more validator functions on the field you want validated"),t("ssh-pre",{staticClass:"body",attrs:{language:"html-vue",label:"Vue template"}},[e._v('<w-input label="First name" :validators="[validators.required]"></w-input>')]),t("ssh-pre",{staticClass:"body",attrs:{language:"js",label:"Javascript"}},[e._v(`data: () => ({
  validators: {
    required: value => !!value || 'This field is required'
  }
})`)])],1),t("li",{staticClass:"mt6 title4"},[e._v("Wrap the field in a "),t("span",{staticClass:"code"},[e._v("w-form")]),e._v(" and add a submit button"),t("ssh-pre",{staticClass:"body",attrs:{language:"html-vue",label:"Vue template"}},[e._v(`<w-form>
  <w-input label="First name" :validators="[validators.required]"></w-input>

  <w-button type="submit">Submit</w-button>
</w-form>`)])],1),e._m(0)]),t("alert",{attrs:{tip:""}},[t("strong",[e._v("As of version 1.14.4")]),t("p",[e._v(`It is also possible to trigger a particular field validation programmatically via
`),t("code",[e._v("this.$refs.myField.validate()")]),e._v(`. all the validator functions associated on this field will be
re-run.
`)])]),t("title-link",{staticClass:"mt10",attrs:{h3:""}},[e._v("Creating a validator function")]),e._m(1),t("ssh-pre",{attrs:{language:"js",label:"Javascript"}},[e._v(`data: () => ({
  validators: {
    required: value => !!value || 'This field is required'
    // Other validators...
  }
})
`)]),t("w-divider",{staticClass:"mt12"}),t("title-link",{attrs:{h2:""}},[e._v("Basic validation")]),e._m(2),t("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<w-form v-model="valid">
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
      `+e._s("{{ valid === false ? 'false' : valid || 'null' }}")+`
    </code>
    <w-button type="submit" :disabled="valid === false">
      Validate
    </w-button>
  </div>
</w-form>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  valid: null,
  validators: {
    required: value => !!value || 'This field is required'
  }
})`)]},proxy:!0}])},[t("w-form",{model:{value:e.form1.valid,callback:function(n){e.$set(e.form1,"valid",n)},expression:"form1.valid"}},[t("w-input",{attrs:{label:"First name",validators:[e.validators.required,e.validators.alphabetical]}}),t("w-input",{staticClass:"mt3",attrs:{label:"Last name",validators:[e.validators.required]}}),t("div",{staticClass:"text-right mt6"},[t("strong",[e._v("v-model:")]),t("code",{staticClass:"ml2 mr4"},[e._v(e._s(e.form1.valid===!1?"false":e.form1.valid||"null"))]),t("w-button",{attrs:{type:"submit",disabled:e.form1.valid===!1}},[e._v("Validate")])],1)],1)],1),t("alert",{attrs:{warning:""}},[t("strong",[e._v("Heads up!")]),t("div",[e._v("The v-model value has 3 states: "),t("code",[e._v("true")]),e._v(" and "),t("code",[e._v("false")]),e._v(` for success and error, but also
`),t("code",[e._v("null")]),e._v(" for pristine."),t("br"),e._v(`
Pristine represents the moment where the form is still untouched, neither valid, nor invalid.`)])]),t("alert",{attrs:{success:""}},[e._v(`Even in the most advanced case, Wave UI's form validation is fairly simple, it doesn't
require you to use `),t("code",[e._v("$refs")]),e._v(`.
`)]),t("title-link",{attrs:{h2:""}},[e._v("Direct submission to a server")]),e._m(3),e._m(4),t("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<w-form
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
</w-form>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  validators: {
    required: value => !!value || 'This field is required'
  }
})
`)]},proxy:!0}])},[t("w-form",{attrs:{action:"test.php",method:"post",target:"_blank","allow-submit":""}},[t("w-input",{attrs:{label:"First name",validators:[e.validators.required]}}),t("w-input",{staticClass:"mt3",attrs:{label:"Last name",validators:[e.validators.required]}}),t("div",{staticClass:"text-right mt6"},[t("w-button",{attrs:{type:"submit"}},[e._v("Validate")])],1)],1)],1),t("alert",{attrs:{tip:""}},[e._v(`To submit a form via the HTML standard way like in this example, you need to add
the `),t("code",[e._v("action")]),e._v(" attribute and optionally a "),t("code",[e._v("method")]),e._v(` attribute.
`)]),t("title-link",{attrs:{h2:""}},[e._v("Validate on submit, on blur, on keyup")]),e._m(5),t("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<w-form no-keyup-validation no-blur-validation>
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
</w-form>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  validators: {
    required: value => !!value || 'This field is required'
  }
})
`)]},proxy:!0}])},[t("w-form",{attrs:{"no-keyup-validation":"","no-blur-validation":""}},[t("w-input",{attrs:{label:"First name",validators:[e.validators.required]}}),t("w-input",{staticClass:"mt3",attrs:{label:"Last name",validators:[e.validators.required]}}),t("div",{staticClass:"text-right mt6"},[t("w-button",{attrs:{type:"submit"}},[e._v("Validate")])],1)],1)],1),t("title-link",{attrs:{h2:""}},[e._v("Reset the form")]),e._m(6),t("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<w-form v-model="valid">
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
</w-form>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  valid: null,
  validators: {
    required: value => !!value || 'This field is required'
  }
})
`)]},proxy:!0}])},[t("w-form",{model:{value:e.form4.valid,callback:function(n){e.$set(e.form4,"valid",n)},expression:"form4.valid"}},[t("w-input",{attrs:{label:"First name",validators:[e.validators.required]}}),t("w-input",{staticClass:"mt3",attrs:{label:"Last name",validators:[e.validators.required]}}),t("div",{staticClass:"text-right mt6"},[t("w-button",{staticClass:"my1 mr2",attrs:{"bg-color":"warning",type:"reset"}},[e._v("Reset")]),t("w-button",{staticClass:"my1",attrs:{type:"submit"}},[e._v("Validate")])],1)],1)],1),t("title-link",{attrs:{h2:""}},[e._v("On validate, on success & on error events")]),t("p",{staticClass:"title5"},[e._v("These events are fired on submit.")]),e._m(7),t("alert",{attrs:{tip:""}},[e._v("The form status is always accurate (through the "),t("span",{staticClass:"code"},[e._v("v-model")]),e._v("), and the "),t("code",[e._v("error")]),e._v(` &
`),t("code",[e._v("success")]),e._v(" events return the "),t("span",{staticClass:"code"},[e._v("errorsCount")]),e._v("."),t("br"),e._v(`
So the only thing you could be missing at this point is the exact number of errors between the
submission attempts (if you need it) since a `),t("span",{staticClass:"code"},[e._v("keyup")]),e._v(" or "),t("span",{staticClass:"code"},[e._v("blur")]),e._v(` event may trigger
an error or success on that element. The next example introduces the `),t("code",[e._v("errors-count")]),e._v(` syncing
for this purpose.`)]),t("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<w-alert
  :success="success"
  :error="error"
  :info="!success && !error">
  `+e._s("{{ !success && !error ? 'The form is still pristine' : (success ? 'Success' : 'Error') }}")+`
</w-alert>

<p>
  The form has been validated `+e._s("{{ validated }}")+` time(s).
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
</w-form>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  success: null,
  error: null,
  validated: 0,
  validators: {
    required: value => !!value || 'This field is required'
  }
})
`)]},proxy:!0}])},[t("w-alert",{attrs:{success:e.form5.success,error:e.form5.error,info:!e.form5.success&&!e.form5.error}},[e._v(e._s(!e.form5.success&&!e.form5.error?"The form is still pristine":e.form5.success?"Success":"Error"))]),t("p",[e._v("The form has been validated "+e._s(e.form5.validated)+" time(s).")]),t("w-form",{on:{validate:function(n){e.form5.validated++,e.form5.success=e.form5.error=!1},success:function(n){e.form5.success=!0},error:function(n){e.form5.error=!0}}},[t("w-input",{attrs:{label:"First name",validators:[e.validators.required]}}),t("w-input",{staticClass:"mt3",attrs:{label:"Last name",validators:[e.validators.required]}}),t("div",{staticClass:"text-right mt6"},[t("w-button",{attrs:{type:"submit"}},[e._v("Validate")])],1)],1)],1),t("title-link",{attrs:{h2:"",slug:"advanced-validation"}},[e._v("Advanced validation with everything")]),e._m(8),e._m(9),t("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<w-card class="white--bg" content-class="pa0">
  <div class="message-box">
    <w-transition-fade>
      <w-alert
        class="my0 text-light"
        v-if="form.submitted"
        success
        no-border>
        The form is valid, ready to send it!
      </w-alert>

      <w-alert
        class="my0 text-light"
        v-else-if="form.valid === false"
        error
        no-border>
        The form has `+e._s("{{ form.errorsCount }}")+` errors.
      </w-alert>
    </w-transition-fade>
  </div>

  <w-form
    class="px8 pt2 pb12"
    v-model="form.valid"
    :errors-count.sync="form.errorsCount"
    @validate="onValidate"
    @success="onSuccess">

    <w-input
      required
      label="First name"
      :validators="[validators.required]">
    </w-input>

    <w-input
      class="mt3"
      required
      label="Last name"
      :validators="[validators.required]">
    </w-input>

    <w-input
      class="mt3"
      disabled
      required
      label="User name"
      :validators="[validators.required]">
    </w-input>

    <w-flex class="mt4" wrap align-center justify-end>
      <w-checkbox
        required
        :validators="[validators.consent]">
        I agree to the terms & conditions
      </w-checkbox>

      <div class="spacer" />

      <w-button
        class="my1 mr2"
        bg-color="warning"
        type="reset"
        @click="form.submitted = form.sent = false">
        Reset
      </w-button>

      <w-button
        class="my1"
        type="submit"
        :disabled="form.valid === false"
        :loading="form.submitted && !form.sent">
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
</w-card>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
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
}`)]},proxy:!0},{key:"css",fn:function(){return[e._v(`.message-box {min-height: 35px;}
`)]},proxy:!0}])},[t("w-card",{staticClass:"white--bg",attrs:{"content-class":"pa0"}},[t("div",{staticClass:"message-box"},[t("w-transition-fade",[e.form6.submitted?t("w-alert",{staticClass:"my0 text-light",attrs:{success:"","no-border":""}},[e._v("The form is valid, ready to send it!")]):e.form6.valid===!1?t("w-alert",{staticClass:"my0 text-light",attrs:{error:"","no-border":""}},[e._v("The form has "+e._s(e.form6.errorsCount)+" errors.")]):e._e()],1)],1),t("w-form",{staticClass:"px8 pt2 pb12",attrs:{"errors-count":e.form6.errorsCount},on:{"update:errorsCount":function(n){return e.$set(e.form6,"errorsCount",n)},"update:errors-count":function(n){return e.$set(e.form6,"errorsCount",n)},validate:e.onValidate,success:e.onSuccess},model:{value:e.form6.valid,callback:function(n){e.$set(e.form6,"valid",n)},expression:"form6.valid"}},[t("w-input",{attrs:{required:"",label:"First name",validators:[e.validators.required]}}),t("w-input",{staticClass:"mt3",attrs:{required:"",label:"Last name",validators:[e.validators.required]}}),t("w-input",{staticClass:"mt3",attrs:{disabled:"",required:"",label:"User name",validators:[e.validators.required]}}),t("w-flex",{staticClass:"mt4",attrs:{wrap:"","align-center":"","justify-end":""}},[t("w-checkbox",{attrs:{required:"",validators:[e.validators.consent]}},[e._v("I agree to the terms & conditions")]),t("div",{staticClass:"spacer"}),t("w-button",{staticClass:"my1 mr2",attrs:{"bg-color":"warning",type:"reset"},on:{click:function(n){e.form6.submitted=e.form6.sent=!1}}},[e._v("Reset")]),t("w-button",{staticClass:"my1",attrs:{type:"submit",disabled:e.form6.valid===!1,loading:e.form6.submitted&&!e.form6.sent}},[e._v("Validate")])],1)],1),t("w-notification",{attrs:{success:"",transition:"bounce",absolute:"",plain:"",round:"",bottom:""},model:{value:e.form6.sent,callback:function(n){e.$set(e.form6,"sent",n)},expression:"form6.sent"}},[e._v("The form was sent successfully!")])],1)],1),t("title-link",{attrs:{h2:""}},[e._v("Disabled & readonly form")]),e._m(10),t("alert",{attrs:{warning:""}},[t("strong",[e._v("Attention")]),t("div",[e._v("Wave UI will not reset the validity of the fields when you toggle the "),t("code",[e._v("disabled")]),e._v(`
or `),t("code",[e._v("readonly")]),e._v(" prop on the "),t("strong",{staticClass:"code"},[e._v("w-form")]),e._v(`: the field is becoming uneditable but
may contain invalid data.`)])]),t("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<w-button
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
</w-form>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
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
`)]},proxy:!0}])},[t("w-button",{attrs:{outline:!e.form7.disabled},on:{click:function(n){e.form7.readonly=!1,e.form7.disabled=!e.form7.disabled}}},[e._v("Form disabled")]),t("w-button",{staticClass:"ml2",attrs:{outline:!e.form7.readonly},on:{click:function(n){e.form7.disabled=!1,e.form7.readonly=!e.form7.readonly}}},[e._v("Form readonly")]),t("w-form",{staticClass:"mt4",attrs:{disabled:e.form7.disabled,readonly:e.form7.readonly},model:{value:e.form7.valid,callback:function(n){e.$set(e.form7,"valid",n)},expression:"form7.valid"}},[t("w-input",{attrs:{label:"First name",validators:[e.validators.required,e.validators.alphabetical]}}),t("w-input",{staticClass:"mt3",attrs:{label:"Last name",validators:[e.validators.required]}}),t("w-flex",{staticClass:"mt4",attrs:{"justify-end":""}},[t("w-button",{attrs:{type:"reset","bg-color":"warning"}},[e._v("Reset")]),t("w-button",{staticClass:"ml2",attrs:{type:"submit",disabled:e.form7.valid===!1}},[e._v("Validate")])],1)],1)],1),t("title-link",{attrs:{h2:""}},[e._v("Asynchronous validations")]),t("p",[e._v("You may want to validate a field on server side, for this you can use an asynchronous validator.")]),t("alert",{attrs:{tip:""}},[e._v("You should first be familiar with Promises and "),t("span",{staticClass:"code"},[e._v("async")]),e._v("/"),t("span",{staticClass:"code"},[e._v("await")]),e._v(`.
If you're not you can read about it
`),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function",target:"_blank"}},[e._v("here")]),e._v(".")]),e._m(11),t("example",{attrs:{"content-class":"pa6"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<w-form error-placeholders>
  <w-input
    label="Username"
    :validators="[validators.required, validators.username]"
    :inner-icon-right="form.loading ? 'mdi mdi-autorenew w-icon--spin' : ''"
    :loading="form.loading"
    autocomplete="off">
  </w-input>
</w-form>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`// Here we need access to \`this\`, so we can't use an arrow function.
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
`)]},proxy:!0}])},[t("w-form",{attrs:{"error-placeholders":""}},[t("w-input",{attrs:{label:"Username",validators:[e.validators.required,e.validators.username],"inner-icon-right":e.form1.loading?"mdi mdi-autorenew w-icon--spin":"",loading:e.form1.loading,autocomplete:"off"}})],1)],1),t("title-link",{attrs:{h3:""}},[e._v("Loading bar color")]),e._m(12),t("w-input",{staticClass:"mt5",attrs:{label:"Username",loading:!0,"progress-color":"cyan",autocomplete:"off"}})],1)},u=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("li",{staticClass:"mt6 title4"},[e._v("That's enough"),t("p",{staticClass:"body"},[e._v("you can let the "),t("span",{staticClass:"code"},[e._v("w-form")]),e._v(" component do the rest!"),t("br"),e._v(`
But you might want more options, discover them in the examples bellow.
`)])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v(`A validator is a custom function that tells Wave UI if the field is valid or invalid when the
validation happens. It must return either `),t("span",{staticClass:"code"},[e._v("true")]),e._v(` or a string containing an error
message in case of invalidaty. An empty string also works.`),t("br"),e._v(`
The current value of the field is always passed in parameter to the validator.`),t("br"),t("br"),e._v(`

In the following snippet, the value is converted to boolean (`),t("code",[e._v("!!")]),e._v(`), and if falsy
(e.g. empty string) the JavaScript engine will continue through the `),t("code",[e._v("||")]),e._v(` and will return
a string to Wave UI, meaning the field is invalid.`)])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("In this example and by default, the fields are validated on "),t("span",{staticClass:"code"},[e._v("keyup")]),e._v(", on "),t("span",{staticClass:"code"},[e._v("blur")]),e._v(`,
and on `),t("span",{staticClass:"code"},[e._v("submit")]),e._v("."),t("br"),e._v(`
The v-model on the `),t("span",{staticClass:"code"},[e._v("w-form")]),e._v(" gets updated with the form status.")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",{staticClass:"mt6"},[e._v("The "),t("span",{staticClass:"code"},[e._v("w-form")]),e._v(` prevents the form submission by default - for modern usage where an AJAX
call is made on success (`),t("a",{attrs:{href:"#advanced-validation"}},[e._v("see the last example: Advanced validation")]),e._v(`).
`),t("br"),e._v(`
But in case you need to send the form as is to the server, you can set the `),t("code",[e._v("allow-submit")]),e._v(`
option to `),t("span",{staticClass:"code"},[e._v("true")]),e._v(" and provide a URL via the usual "),t("code",[e._v("action")]),e._v(` attribute, and optionally
set a `),t("code",[e._v("method")]),e._v(" attribute. Just like a normal "),t("span",{staticClass:"code"},[e._v("<form>")]),e._v(" tag."),t("br"),t("br"),e._v(`

The `),t("span",{staticClass:"code"},[e._v("w-form")]),e._v(` will handle the validation and prevent the form submission
until the form is valid. Once the form is valid, the form submission will not be prevented and the
data will be submitted to the URL set in the `),t("code",[e._v("action")]),e._v(" attribute.")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",{staticClass:"mt2"},[e._v("In this example, the form data will be submitted in another tab to a fake "),t("span",{staticClass:"code"},[e._v("test.php")]),e._v(`.
`)])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("By default the validation happens on "),t("span",{staticClass:"code"},[e._v("keyup")]),e._v(", on "),t("span",{staticClass:"code"},[e._v("blur")]),e._v(` and on
`),t("span",{staticClass:"code"},[e._v("submit")]),e._v(". You can disable the "),t("span",{staticClass:"code"},[e._v("keyup")]),e._v(" and "),t("span",{staticClass:"code"},[e._v("blur")]),e._v(` validations
with `),t("code",[e._v("no-keyup-validation")]),e._v(" and "),t("code",[e._v("no-blur-validation")]),e._v(".")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("Once the form is invalid, you can reset it with a basic HTML reset button, like in this example."),t("br"),e._v(`
Alternatively, you can programmatically reset the form and all its element by setting the form
value (or v-model) to `),t("code",[e._v("null")]),e._v(", like pristine.")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ul",[t("li",{staticClass:"mt1"},[t("code",[e._v("before-validate")]),e._v(` is always fired as soon as a submission is attempted (e.g. submit
button click), prior validation.`)]),t("li",{staticClass:"mt1"},[t("code",[e._v("validate")]),e._v(" is always fired as soon as a submission is attempted, after validation.")]),t("li",{staticClass:"mt1"},[t("code",[e._v("success")]),e._v(` is fired after submission when the validation is successful.
You should send the data to the server from this hook.`)]),t("li",{staticClass:"mt1"},[t("code",[e._v("error")]),e._v(` is fired after submission when the validation is failing.
You can show an error message from this hook.`)])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("This example shows a full form validation and lifecycle - everything you could need."),t("br")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ul",[t("li",[e._v("It handles the error and success states of the form elements on keyup, on blur and submit.")]),t("li",[e._v("It allows resetting the form.")]),t("li",[e._v(`It keeps track of the form errors count at any time and displays a global message using the fired
`),t("span",{staticClass:"code"},[e._v("w-form")]),e._v(" custom events."),t("br")]),t("li",[e._v(`When the form is valid and submitted, it simulates a form sending to a backend and displays
a notification.`)])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("You can add the "),t("code",[e._v("disabled")]),e._v(" or "),t("code",[e._v("readonly")]),e._v(" prop on the "),t("strong",{staticClass:"code"},[e._v("w-form")]),e._v(` tag to
disable all the fields or set them all to readonly.`)])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v(`This example presents a common case: checking if a username is already in use from a user
registration page.`),t("br"),e._v(`
If you type exactly `),t("code",[e._v("waveui")]),e._v(` which is already taken, an error message will appear after
connecting to a server, via an Axios request for instance.`),t("br"),e._v(`
A spinner is also displayed while the server is being requested.
`)])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("You can provide a custom loading bar color via the prop "),t("code",[e._v("progress-color")]),e._v("."),t("br"),e._v(`
Example with `),t("code",[e._v('progress-color="cyan"')]),e._v(":")])}];const v={data(){return{form1:{valid:null,loading:!1},form2:{valid:null},form3:{valid:null},form4:{valid:null},form5:{valid:null,error:null,success:null,validated:0},form6:{valid:null,submitted:!1,sent:!1,errorsCount:0},form7:{valid:null,disabled:!1,readonly:!1},validators:{username:async e=>(this.form1.loading=!0,await new Promise(a=>setTimeout(a,800)),this.form1.loading=!1,e!=="waveui"||"This username is already in use"),required:e=>!!e||"This field is required",alphabetical:e=>/^[a-z \-']+$/i.test(e)||"This field only accepts letters.",consent:e=>!!e||"You must agree"}}},methods:{onSuccess(){setTimeout(()=>this.form6.sent=!0,2e3)},onValidate(){this.form6.sent=!1,this.form6.submitted=this.form6.errorsCount===0}}},i={};var c=s(v,d,u,!1,m,null,null,null);function m(e){for(let a in i)this[a]=i[a]}var f=function(){return c.exports}(),p=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"w-divider my12"}),t("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),t("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),t("component-api",{attrs:{items:e.slots,title:"Slots"}}),t("component-api",{attrs:{items:e.events,title:"Events"}})],1)},_=[];const h={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Contains the status of the form validity at all times. Three values are possible: <code>null</code> when pristine (untouched), <code>false</code> when invalid, <code>true</code> when valid.<br>This value gets updated every time a validation is triggered on a single field or on all the fields at once on form submit.<br>Setting this value to <code>null</code> will reset the form.',allowSubmit:"Native HTML submits the form to the server when all the form elements are valid.<br>Usually and by default, the form submission is prevented and an AJAX call is made from the front end. This is completely up to the developer.",noKeyupValidation:"Prevents the form element validation on keyup (happening by default).",noBlurValidation:"Prevents the form element validation on blur (happening by default).",errorPlaceholders:"Reserves a space under all the form elements so that triggering an error and showing the error message will not change the height of the form.",disabled:"Disables all the form fields all at once, making them unreactive to user interactions.",readonly:"Set all the form fields to readonly all at once. The fields will still look interactive but their value will not be editable by user interaction."},b={default:{description:"The form content."}},w={submit:{description:"Emitted on form submit.",params:{"[DOM event object]":"The associated reset DOM event."}},"before-validate":{description:"Emitted before validation, every time a validation is triggered."},validate:{description:"Emitted on form validate, every time a validation is triggered.<br>Returns a single object containing:",params:{e:"The associated DOM event.",errorsCount:"An integer representing the number of errors in the form."}},success:{description:"Emitted on form success, when there is no error in the form and the validation is successful.<br>Returns a single object containing:",params:{e:"The associated DOM event.",errorsCount:"An integer representing the number of errors in the form."}},error:{description:"Emitted on form error, when there is at least one error in the form and the validation fails.<br>Returns a single object containing:",params:{e:"The associated DOM event.",errorsCount:"An integer representing the number of errors in the form."}},reset:{description:"Emitted on form reset. A reset can be triggered by setting the v-model value to null or by clicking on a reset button.",params:{"[DOM event object]":"The associated reset DOM event."}},input:{description:"Emitted every time the form status changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean, Null]":"The new status of the form: one of <code>null</code> when pristine, <code>false</code> when invalid, <code>true</code> when valid."}},"update:modelValue":{description:"Emitted every time the form status changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean, Null]":"The new status of the form: one of <code>null</code> when pristine, <code>false</code> when invalid, <code>true</code> when valid."}},"update:errorsCount":{description:"Emitted every time the errorsCount changes. To be used with <code>:errors-count.sync</code> on Vue 2.x or <code>v-model:errors-count</code> on Vue 3.",params:{"[Integer]":"The number of errors in the form."}}},y={data:()=>({propsDescs:h,slots:b}),computed:{props(){return r.props},events(){return r.emits.reduce((e,a)=>(e[a]=w[a]||{})&&e,{})}}},o={};var g=s(y,p,_,!1,C,null,null,null);function C(e){for(let a in o)this[a]=o[a]}var x=function(){return g.exports}(),k=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("main",[t("ui-component-title",[e._v("w-form")]),t("examples"),t("api")],1)},q=[];const T={components:{Examples:f,Api:x}},l={};var $=s(T,k,q,!1,E,null,null,null);function E(e){for(let a in l)this[a]=l[a]}var F=function(){return $.exports}();export{F as default};
