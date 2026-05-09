import{A as e,G as t,P as n,c as r,d as i,g as a,h as o,m as s,xt as c}from"./runtime-core.esm-bundler-BuLlhxCm.js";import{t as l}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{B as u,l as d}from"./index-DQuwyAuI.js";var f={class:`title3 mb0`},p={class:`ml2`};function m(l,u,d,m,h,g){let _=n(`title-link`),v=n(`w-switch`),y=n(`example`),b=n(`ssh-pre`),x=n(`alert`),S=n(`w-icon`);return e(),i(`div`,null,[a(_,{h2:``,slug:`on-off-and-disabled`},{default:t(()=>[...u[5]||=[o(`On, off & disabled`,-1)]]),_:1}),a(y,{"content-class":`pt4`},{pug:t(()=>[...u[6]||=[]]),html:t(()=>[...u[7]||=[o(`<w-switch
  class="ma2"
  :model-value="true"
  label="On">
</w-switch>

<w-switch
  class="ma2"
  :model-value="false"
  label="Off">
</w-switch>

<w-switch
  class="ma2"
  :model-value="true"
  disabled
  label="On disabled">
</w-switch>

<w-switch
  class="ma2"
  :model-value="false"
  disabled
  label="Off disabled">
</w-switch>
`,-1)]]),default:t(()=>[a(v,{class:`ma2`,"model-value":!0,label:`On`}),a(v,{class:`ma2`,"model-value":!1,label:`Off`}),a(v,{class:`ma2`,"model-value":!0,disabled:``,label:`On disabled`}),a(v,{class:`ma2`,"model-value":!1,disabled:``,label:`Off disabled`})]),_:1}),a(_,{h2:``},{default:t(()=>[...u[8]||=[o(`V-model`,-1)]]),_:1}),a(y,{"content-class":`w-flex wrap align-center`},{pug:t(()=>[o(`w-switch.mr6(v-model="value")
span.title3.mb0
  | v-model value:
  code.ml2 `+c(l.value),1)]),html:t(()=>[...u[10]||=[o(`<w-switch class="mr6" v-model="value"></w-switch>
<span class="title3 mb0">
  v-model value:
  <code class="ml2">`+c(`{{ value }}`)+`</code>
</span>`,-1)]]),js:t(()=>[...u[11]||=[o(`data: () => ({
  value: true
})
`,-1)]]),default:t(()=>[a(v,{class:`mr6`,modelValue:l.value,"onUpdate:modelValue":u[0]||=e=>l.value=e},null,8,[`modelValue`]),r(`span`,f,[u[9]||=o(`v-model value:`,-1),r(`code`,p,c(l.value),1)])]),_:1}),a(_,{h2:``},{default:t(()=>[...u[12]||=[o(`Colors`,-1)]]),_:1}),a(y,{"content-class":`pt4`},{pug:t(()=>[...u[13]||=[o(`w-switch.ma2(:model-value="true" color="pink")
w-switch.ma2(:model-value="true" color="error")
w-switch.ma2(:model-value="true" color="warning")
w-switch.ma2(:model-value="true" color="success")
w-switch.ma2(:model-value="true" color="info")`,-1)]]),html:t(()=>[...u[14]||=[o(`<w-switch
  class="ma2"
  :model-value="true"
  color="pink">
</w-switch>

<w-switch
  class="ma2"
  :model-value="true"
  color="error">
</w-switch>

<w-switch
  class="ma2"
  :model-value="true"
  color="warning">
</w-switch>

<w-switch
  class="ma2"
  :model-value="true"
  color="success">
</w-switch>

<w-switch
  class="ma2"
  :model-value="true"
  color="info">
</w-switch>
`,-1)]]),default:t(()=>[a(v,{class:`ma2`,"model-value":!0,color:`pink`}),a(v,{class:`ma2`,"model-value":!0,color:`error`}),a(v,{class:`ma2`,"model-value":!0,color:`warning`}),a(v,{class:`ma2`,"model-value":!0,color:`success`}),a(v,{class:`ma2`,"model-value":!0,color:`info`})]),_:1}),a(_,{h2:``},{default:t(()=>[...u[15]||=[o(`Thin version`,-1)]]),_:1}),a(y,{"content-class":`pt5`},{pug:t(()=>[...u[16]||=[o(`w-switch.ma2(:model-value="true" thin label="On")
w-switch.ma2(:model-value="false" thin label="Off")
w-switch.ma2(:model-value="true" disabled thin label="On disabled")
w-switch.ma2(:model-value="false" disabled thin label="Off disabled")`,-1)]]),html:t(()=>[...u[17]||=[o(`<w-switch
  class="ma2"
  :model-value="true"
  thin label="On">
</w-switch>

<w-switch
  class="ma2"
  :model-value="false"
  thin label="Off">
</w-switch>

<w-switch
  class="ma2"
  :model-value="true"
  disabled
  thin
  label="On disabled">
</w-switch>

<w-switch
  class="ma2"
  :model-value="false"
  disabled
  thin
  label="Off disabled">
</w-switch>
`,-1)]]),default:t(()=>[a(v,{class:`ma2`,"model-value":!0,thin:``,label:`On`}),a(v,{class:`ma2`,"model-value":!1,thin:``,label:`Off`}),a(v,{class:`ma2`,"model-value":!0,disabled:``,thin:``,label:`On disabled`}),a(v,{class:`ma2`,"model-value":!1,disabled:``,thin:``,label:`Off disabled`})]),_:1}),a(_,{h2:``},{default:t(()=>[...u[18]||=[o(`Track slot`,-1)]]),_:1}),u[37]||=r(`p`,null,[o(`You can easily add some custom content in the switch track via the `),r(`code`,null,`#track`),o(` slot.`),r(`br`)],-1),a(x,{tip:``},{default:t(()=>[u[20]||=o(`If the `,-1),u[21]||=r(`strong`,{class:`code`},`w-switch`,-1),u[22]||=o(` width is too small for your custom content, it's very easy to
increase its width with CSS like in this example, and the component elements will adapt:`,-1),a(b,{language:`css`,dark:l.$store.state.darkMode},{default:t(()=>[...u[19]||=[r(`div`,{class:`w-switch--custom-track`},`.w-switch--custom-track .w-switch__input {width: 55px;}`,-1)]]),_:1},8,[`dark`])]),_:1}),a(y,{"content-class":`pt5`},{pug:t(()=>[...u[23]||=[o(`w-switch.ma4(v-model="value")
  template(#track)
    small `+c(`{{ value ? 'on' : 'off' }}`)+`

w-switch.w-switch--wide.ma4(v-model="value")
  template(#track)
    strong `+c(`{{ value ? 'on' : 'off' }}`),-1)]]),html:t(()=>[...u[24]||=[o(`<w-switch v-model="value" class="ma4">
  <template #track>
    <small>`+c(`{{ value ? 'on' : 'off' }}`)+`</small>
  </template>
</w-switch>

<w-switch v-model="value" class="ma4 w-switch--wide">
  <template #track>
    <strong>`+c(`{{ value ? 'on' : 'off' }}`)+`</strong>
  </template>
</w-switch>`,-1)]]),js:t(()=>[...u[25]||=[o(`data: () => ({
  value: true
})`,-1)]]),css:t(()=>[...u[26]||=[o(`/* Adapt text color according to the background color. */
.w-switch__track {color: #666;}
.w-switch--on .w-switch__track {color: #fff;}

/* Wider switch. */
.w-switch--wide .w-switch__input {width: 55px;}
.w-switch--wide .w-switch__track {width: 35px;text-align: center;}
`,-1)]]),default:t(()=>[a(v,{class:`ma4`,modelValue:l.value2,"onUpdate:modelValue":u[1]||=e=>l.value2=e},{track:t(()=>[r(`small`,null,c(l.value2?`on`:`off`),1)]),_:1},8,[`modelValue`]),a(v,{class:`w-switch--wide ma4`,modelValue:l.value2,"onUpdate:modelValue":u[2]||=e=>l.value2=e},{track:t(()=>[r(`strong`,null,c(l.value2?`on`:`off`),1)]),_:1},8,[`modelValue`])]),_:1}),a(_,{h2:``},{default:t(()=>[...u[27]||=[o(`Thumb slot`,-1)]]),_:1}),u[38]||=r(`p`,null,[o(`It is possible to add an icon or any kind of content in the switch thumb via the `),r(`code`,null,`#thumb`),o(`
slot.`),r(`br`),o(`
You can also fit and style the element with minimum CSS.`)],-1),a(y,{"content-class":`pt5`},{pug:t(()=>[...u[28]||=[o(`w-switch.ma4(v-model="value" label="On")
  template(#thumb)
    small `+c(`{{ value ? 'on' : 'off' }}`)+`

w-switch.ma4(v-model="value" label="Dark theme")
  template(#thumb)
    w-icon `+c(`{{ value ? 'mdi mdi-weather-night' : 'mdi mdi-white-balance-sunny' }}`),-1)]]),html:t(()=>[...u[29]||=[o(`<w-switch v-model="value" class="ma4">
  <template #thumb>
    <small>`+c(`{{ value ? 'on' : 'off' }}`)+`</small>
  </template>
</w-switch>

<w-switch v-model="value" class="ma4">
  <template #thumb>
    <w-icon>
      `+c(`{{ value ? 'mdi mdi-weather-night' : 'mdi mdi-white-balance-sunny' }}`)+`
    </w-icon>
  </template>
</w-switch>`,-1)]]),js:t(()=>[...u[30]||=[o(`data: () => ({
  value: true
})
`,-1)]]),default:t(()=>[a(v,{class:`ma4`,modelValue:l.value3,"onUpdate:modelValue":u[3]||=e=>l.value3=e},{thumb:t(()=>[r(`small`,null,c(l.value3?`on`:`off`),1)]),_:1},8,[`modelValue`]),a(v,{class:`ma4`,modelValue:l.value3,"onUpdate:modelValue":u[4]||=e=>l.value3=e,label:`Dark theme`},{thumb:t(()=>[a(S,null,{default:t(()=>[o(c(l.value3?`mdi mdi-weather-night`:`mdi mdi-white-balance-sunny`),1)]),_:1})]),_:1},8,[`modelValue`])]),_:1}),a(_,{h2:``},{default:t(()=>[...u[31]||=[o(`Loading`,-1)]]),_:1}),u[39]||=r(`p`,null,`If a number is given it will be the value of the progress. If true is given, the progress will
be indefinitely spinning.`,-1),a(y,{"content-class":`pt4`},{pug:t(()=>[...u[32]||=[o(`w-switch.ma2(:model-value="true" :loading="43")
w-switch.ma2(:model-value="true" loading)`,-1)]]),html:t(()=>[...u[33]||=[o(`<w-switch
  class="ma2"
  :model-value="true"
  :loading="43">
</w-switch>

<w-switch
  class="ma2"
  :model-value="true"
  loading>
</w-switch>
`,-1)]]),default:t(()=>[a(v,{class:`ma2`,"model-value":!0,loading:43}),a(v,{class:`ma2`,"model-value":!0,loading:``})]),_:1}),a(_,{h2:``},{default:t(()=>[...u[34]||=[o(`Sizes`,-1)]]),_:1}),u[40]||=s(`<p>The switch size can be controlled with the preset size props <code>xs</code>, <code>sm</code>, <code>md</code>,
<code>lg</code> and <code>xl</code>, or directly via the CSS variable <code>--w-size</code>.</p>`,1),a(y,{"content-class":`align-center`},{pug:t(()=>[...u[35]||=[o(`w-switch.ma2(xs :model-value="true" label="xs")
w-switch.ma2(sm :model-value="true" label="sm")
w-switch.ma2(md :model-value="true" label="md")
w-switch.ma2(lg :model-value="true" label="lg")
w-switch.ma2(xl :model-value="true" label="xl")`,-1)]]),html:t(()=>[...u[36]||=[o(`<w-switch class="ma2" xs :model-value="true" label="xs"></w-switch>
<w-switch class="ma2" sm :model-value="true" label="sm"></w-switch>
<w-switch class="ma2" md :model-value="true" label="md"></w-switch>
<w-switch class="ma2" lg :model-value="true" label="lg"></w-switch>
<w-switch class="ma2" xl :model-value="true" label="xl"></w-switch>`,-1)]]),default:t(()=>[a(v,{class:`ma2`,xs:``,"model-value":!0,label:`xs`}),a(v,{class:`ma2`,sm:``,"model-value":!0,label:`sm`}),a(v,{class:`ma2`,md:``,"model-value":!0,label:`md`}),a(v,{class:`ma2`,lg:``,"model-value":!0,label:`lg`}),a(v,{class:`ma2`,xl:``,"model-value":!0,label:`xl`})]),_:1})])}var h=l({data:()=>({value:!0,value2:!0,value3:!0})},[[`render`,m]]);function g(s,c,l,u,d,f){let p=n(`title-link`),m=n(`component-api`);return e(),i(`div`,null,[c[1]||=r(`div`,{class:`w-divider my12`},null,-1),a(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[o(`API`,-1)]]),_:1}),a(m,{class:`mt0`,items:f.props,descriptions:s.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),a(m,{items:s.slots,title:`Slots`},null,8,[`items`]),a(m,{items:f.events,title:`Events`},null,8,[`items`])])}var _={id:`Sets the native HTML <code>id</code> and ties it to adjacent <code>&lt;label for&gt;</code> bindings. If omitted, Wave UI generates a stable id.`,modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>Dictates the state of the switch. When the user toggles the switch, the <code>v-model</code> value will be updated.`,label:`Sets a visible label for the switch.`,labelOnLeft:`Moves the label to the left of the switch. By default the label is displayed on the right.`,color:`Applies a color to the switch. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the switch's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,thin:`Applies a thiner style to the switch.`,noRipple:`Removes the ripple animation on activation.`,name:`Provide a native HTML <code>name</code> attribute to the switch. If omitted, a unique value is generated with the same stable mechanism as the default id (SSR-safe).`,disabled:`Disables the switch making it unreactive to user interactions.`,readonly:`The switch will still look like an interactive switch except that it is read-only: its current state cannot be changed by user interaction.`,required:`Applies the native HTML <code>required</code> attribute to the switch.`,validators:`<span class="deep-orange">Only for validation, when the switch is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the switch. Each function will be executed on switch   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the switch.`,noBlurValidation:`<span class="deep-orange">Only when the switch is in a <strong class="code">w-form</strong> with <code>validators</code>.</span><br>When <code>true</code>, blur does not validate this field. When <code>false</code>, blur always validates even if the form has <code>no-blur-validation</code>. When unset, inherit the form setting.`,loading:`When set to <code>true</code>, displays an indefinite-value progress circle inside the switch thumb. If a number is given, it will be the value of the progress.`,xs:`Sets the switch size to extra small (~12 px thumb at 14 px base font size).<br>Equivalent to setting the CSS variable <code>--w-size</code> to the corresponding value.`,sm:`Sets the switch size to small (~16 px thumb at 14 px base font size).<br>Equivalent to setting the CSS variable <code>--w-size</code> to the corresponding value.`,md:`Sets the switch size to medium, which is the same as the default size (~18 px thumb at 14 px base font size).`,lg:`Sets the switch size to large (~20 px thumb at 14 px base font size).<br>Equivalent to setting the CSS variable <code>--w-size</code> to the corresponding value.`,xl:`Sets the switch size to extra large (~24 px thumb at 14 px base font size).<br>Equivalent to setting the CSS variable <code>--w-size</code> to the corresponding value.`},v={default:{description:`The switch label content, if the label prop is not flexible enough.`},track:{description:`Optional switch track content.`},thumb:{description:`Optional switch thumb content. Useful to place an icon or small text.`}},y={input:{description:`Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 2.x only.`,params:{"[Boolean]":`A boolean representing the current state of the switch.`}},"update:modelValue":{description:`Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 3 only.`,params:{"[Boolean]":`A boolean representing the current state of the switch.`}},focus:{description:`Emitted on switch focus.`,params:{"[DOM event object]":`The associated focus DOM event.`}}},b=l({data:()=>({propsDescs:_,slots:v}),computed:{props(){return{...d.props,...u.props}},events(){return d.emits.reduce((e,t)=>(e[t]=y[t]||{})&&e,{})}}},[[`render`,g]]);function x(r,s,c,l,u,d){let f=n(`ui-component-title`),p=n(`examples`),m=n(`api`);return e(),i(`main`,null,[a(f,null,{default:t(()=>[...s[0]||=[o(`w-switch`,-1)]]),_:1}),a(p),a(m)])}var S=l({components:{Examples:h,Api:b}},[[`render`,x]]);export{S as default};