import{N as e,W as t,bt as n,c as r,d as i,g as a,h as o,k as s}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as c}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{F as l,l as u}from"./index-D3Rumh9E.js";var d={class:`title3 mb0`},f={class:`ml2`};function p(c,l,u,p,m,h){let g=e(`title-link`),_=e(`w-switch`),v=e(`example`),y=e(`ssh-pre`),b=e(`alert`),x=e(`w-icon`);return s(),i(`div`,null,[a(g,{h2:``,slug:`on-off-and-disabled`},{default:t(()=>[...l[5]||=[o(`On, off & disabled`,-1)]]),_:1}),a(v,{"content-class":`pt4`},{pug:t(()=>[...l[6]||=[]]),html:t(()=>[...l[7]||=[o(`<w-switch
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
`,-1)]]),default:t(()=>[a(_,{class:`ma2`,"model-value":!0,label:`On`}),a(_,{class:`ma2`,"model-value":!1,label:`Off`}),a(_,{class:`ma2`,"model-value":!0,disabled:``,label:`On disabled`}),a(_,{class:`ma2`,"model-value":!1,disabled:``,label:`Off disabled`})]),_:1}),a(g,{h2:``},{default:t(()=>[...l[8]||=[o(`V-model`,-1)]]),_:1}),a(v,{"content-class":`w-flex wrap align-center`},{pug:t(()=>[o(`w-switch.mr6(v-model="value")
span.title3.mb0
  | v-model value:
  code.ml2 `+n(c.value),1)]),html:t(()=>[...l[10]||=[o(`<w-switch class="mr6" v-model="value"></w-switch>
<span class="title3 mb0">
  v-model value:
  <code class="ml2">`+n(`{{ value }}`)+`</code>
</span>`,-1)]]),js:t(()=>[...l[11]||=[o(`data: () => ({
  value: true
})
`,-1)]]),default:t(()=>[a(_,{class:`mr6`,modelValue:c.value,"onUpdate:modelValue":l[0]||=e=>c.value=e},null,8,[`modelValue`]),r(`span`,d,[l[9]||=o(`v-model value:`,-1),r(`code`,f,n(c.value),1)])]),_:1}),a(g,{h2:``},{default:t(()=>[...l[12]||=[o(`Colors`,-1)]]),_:1}),a(v,{"content-class":`pt4`},{pug:t(()=>[...l[13]||=[o(`w-switch.ma2(:model-value="true" color="pink")
w-switch.ma2(:model-value="true" color="error")
w-switch.ma2(:model-value="true" color="warning")
w-switch.ma2(:model-value="true" color="success")
w-switch.ma2(:model-value="true" color="info")`,-1)]]),html:t(()=>[...l[14]||=[o(`<w-switch
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
`,-1)]]),default:t(()=>[a(_,{class:`ma2`,"model-value":!0,color:`pink`}),a(_,{class:`ma2`,"model-value":!0,color:`error`}),a(_,{class:`ma2`,"model-value":!0,color:`warning`}),a(_,{class:`ma2`,"model-value":!0,color:`success`}),a(_,{class:`ma2`,"model-value":!0,color:`info`})]),_:1}),a(g,{h2:``},{default:t(()=>[...l[15]||=[o(`Thin version`,-1)]]),_:1}),a(v,{"content-class":`pt5`},{pug:t(()=>[...l[16]||=[o(`w-switch.ma2(:model-value="true" thin label="On")
w-switch.ma2(:model-value="false" thin label="Off")
w-switch.ma2(:model-value="true" disabled thin label="On disabled")
w-switch.ma2(:model-value="false" disabled thin label="Off disabled")`,-1)]]),html:t(()=>[...l[17]||=[o(`<w-switch
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
`,-1)]]),default:t(()=>[a(_,{class:`ma2`,"model-value":!0,thin:``,label:`On`}),a(_,{class:`ma2`,"model-value":!1,thin:``,label:`Off`}),a(_,{class:`ma2`,"model-value":!0,disabled:``,thin:``,label:`On disabled`}),a(_,{class:`ma2`,"model-value":!1,disabled:``,thin:``,label:`Off disabled`})]),_:1}),a(g,{h2:``},{default:t(()=>[...l[18]||=[o(`Track slot`,-1)]]),_:1}),l[34]||=r(`p`,null,[o(`You can easily add some custom content in the switch track via the `),r(`code`,null,`#track`),o(` slot.`),r(`br`)],-1),a(b,{tip:``},{default:t(()=>[l[20]||=o(`If the `,-1),l[21]||=r(`strong`,{class:`code`},`w-switch`,-1),l[22]||=o(` width is too small for your custom content, it's very easy to
increase its width with CSS like in this example, and the component elements will adapt:`,-1),a(y,{language:`css`,dark:c.$store.state.darkMode},{default:t(()=>[...l[19]||=[r(`div`,{class:`w-switch--custom-track`},`.w-switch--custom-track .w-switch__input {width: 55px;}`,-1)]]),_:1},8,[`dark`])]),_:1}),a(v,{"content-class":`pt5`},{pug:t(()=>[...l[23]||=[o(`w-switch.ma4(v-model="value")
  template(#track)
    small `+n(`{{ value ? 'on' : 'off' }}`)+`

w-switch.w-switch--wide.ma4(v-model="value")
  template(#track)
    strong `+n(`{{ value ? 'on' : 'off' }}`),-1)]]),html:t(()=>[...l[24]||=[o(`<w-switch v-model="value" class="ma4">
  <template #track>
    <small>`+n(`{{ value ? 'on' : 'off' }}`)+`</small>
  </template>
</w-switch>

<w-switch v-model="value" class="ma4 w-switch--wide">
  <template #track>
    <strong>`+n(`{{ value ? 'on' : 'off' }}`)+`</strong>
  </template>
</w-switch>`,-1)]]),js:t(()=>[...l[25]||=[o(`data: () => ({
  value: true
})`,-1)]]),css:t(()=>[...l[26]||=[o(`/* Adapt text color according to the background color. */
.w-switch__track {color: #666;}
.w-switch--on .w-switch__track {color: #fff;}

/* Wider switch. */
.w-switch--wide .w-switch__input {width: 55px;}
.w-switch--wide .w-switch__track {width: 35px;text-align: center;}
`,-1)]]),default:t(()=>[a(_,{class:`ma4`,modelValue:c.value2,"onUpdate:modelValue":l[1]||=e=>c.value2=e},{track:t(()=>[r(`small`,null,n(c.value2?`on`:`off`),1)]),_:1},8,[`modelValue`]),a(_,{class:`w-switch--wide ma4`,modelValue:c.value2,"onUpdate:modelValue":l[2]||=e=>c.value2=e},{track:t(()=>[r(`strong`,null,n(c.value2?`on`:`off`),1)]),_:1},8,[`modelValue`])]),_:1}),a(g,{h2:``},{default:t(()=>[...l[27]||=[o(`Thumb slot`,-1)]]),_:1}),l[35]||=r(`p`,null,[o(`It is possible to add an icon or any kind of content in the switch thumb via the `),r(`code`,null,`#thumb`),o(`
slot.`),r(`br`),o(`
You can also fit and style the element with minimum CSS.`)],-1),a(v,{"content-class":`pt5`},{pug:t(()=>[...l[28]||=[o(`w-switch.ma4(v-model="value" label="On")
  template(#thumb)
    small `+n(`{{ value ? 'on' : 'off' }}`)+`

w-switch.ma4(v-model="value" label="Dark theme")
  template(#thumb)
    w-icon `+n(`{{ value ? 'mdi mdi-weather-night' : 'mdi mdi-white-balance-sunny' }}`),-1)]]),html:t(()=>[...l[29]||=[o(`<w-switch v-model="value" class="ma4">
  <template #thumb>
    <small>`+n(`{{ value ? 'on' : 'off' }}`)+`</small>
  </template>
</w-switch>

<w-switch v-model="value" class="ma4">
  <template #thumb>
    <w-icon>
      `+n(`{{ value ? 'mdi mdi-weather-night' : 'mdi mdi-white-balance-sunny' }}`)+`
    </w-icon>
  </template>
</w-switch>`,-1)]]),js:t(()=>[...l[30]||=[o(`data: () => ({
  value: true
})
`,-1)]]),default:t(()=>[a(_,{class:`ma4`,modelValue:c.value3,"onUpdate:modelValue":l[3]||=e=>c.value3=e},{thumb:t(()=>[r(`small`,null,n(c.value3?`on`:`off`),1)]),_:1},8,[`modelValue`]),a(_,{class:`ma4`,modelValue:c.value3,"onUpdate:modelValue":l[4]||=e=>c.value3=e,label:`Dark theme`},{thumb:t(()=>[a(x,null,{default:t(()=>[o(n(c.value3?`mdi mdi-weather-night`:`mdi mdi-white-balance-sunny`),1)]),_:1})]),_:1},8,[`modelValue`])]),_:1}),a(g,{h2:``},{default:t(()=>[...l[31]||=[o(`Loading`,-1)]]),_:1}),l[36]||=r(`p`,null,`If a number is given it will be the value of the progress. If true is given, the progress will
be indefinitely spinning.`,-1),a(v,{"content-class":`pt4`},{pug:t(()=>[...l[32]||=[o(`w-switch.ma2(:model-value="true" :loading="43")
w-switch.ma2(:model-value="true" loading)`,-1)]]),html:t(()=>[...l[33]||=[o(`<w-switch
  class="ma2"
  :model-value="true"
  :loading="43">
</w-switch>

<w-switch
  class="ma2"
  :model-value="true"
  loading>
</w-switch>`,-1)]]),default:t(()=>[a(_,{class:`ma2`,"model-value":!0,loading:43}),a(_,{class:`ma2`,"model-value":!0,loading:``})]),_:1})])}var m=c({data:()=>({value:!0,value2:!0,value3:!0})},[[`render`,p]]);function h(n,c,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return s(),i(`div`,null,[c[1]||=r(`div`,{class:`w-divider my12`},null,-1),a(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[o(`API`,-1)]]),_:1}),a(m,{class:`mt0`,items:f.props,descriptions:n.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),a(m,{items:n.slots,title:`Slots`},null,8,[`items`]),a(m,{items:f.events,title:`Events`},null,8,[`items`])])}var g={id:`Sets the native HTML <code>id</code> and ties it to adjacent <code>&lt;label for&gt;</code> bindings. If omitted, Wave UI generates a stable id.`,modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>Dictates the state of the switch. When the user toggles the switch, the <code>v-model</code> value will be updated.`,label:`Sets a visible label for the switch.`,labelOnLeft:`Moves the label to the left of the switch. By default the label is displayed on the right.`,color:`Applies a color to the switch. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the switch's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,thin:`Applies a thiner style to the switch.`,noRipple:`Removes the ripple animation on activation.`,name:`Provide a native HTML <code>name</code> attribute to the switch. If omitted, a unique value is generated with the same stable mechanism as the default id (SSR-safe).`,disabled:`Disables the switch making it unreactive to user interactions.`,readonly:`The switch will still look like an interactive switch except that it is read-only: its current state cannot be changed by user interaction.`,required:`Applies the native HTML <code>required</code> attribute to the switch.`,validators:`<span class="deep-orange">Only for validation, when the switch is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the switch. Each function will be executed on switch   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the switch.`,noBlurValidation:`<span class="deep-orange">Only when the switch is in a <strong class="code">w-form</strong> with <code>validators</code>.</span><br>When <code>true</code>, blur does not validate this field. When <code>false</code>, blur always validates even if the form has <code>no-blur-validation</code>. When unset, inherit the form setting.`,loading:`When set to <code>true</code>, displays an indefinite-value progress circle inside the switch thumb. If a number is given, it will be the value of the progress.`},_={default:{description:`The switch label content, if the label prop is not flexible enough.`},track:{description:`Optional switch track content.`},thumb:{description:`Optional switch thumb content. Useful to place an icon or small text.`}},v={input:{description:`Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 2.x only.`,params:{"[Boolean]":`A boolean representing the current state of the switch.`}},"update:modelValue":{description:`Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 3 only.`,params:{"[Boolean]":`A boolean representing the current state of the switch.`}},focus:{description:`Emitted on switch focus.`,params:{"[DOM event object]":`The associated focus DOM event.`}}},y=c({data:()=>({propsDescs:g,slots:_}),computed:{props(){return{...u.props,...l.props}},events(){return u.emits.reduce((e,t)=>(e[t]=v[t]||{})&&e,{})}}},[[`render`,h]]);function b(n,r,c,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return s(),i(`main`,null,[a(f,null,{default:t(()=>[...r[0]||=[o(`w-switch`,-1)]]),_:1}),a(p),a(m)])}var x=c({components:{Examples:m,Api:y}},[[`render`,b]]);export{x as default};