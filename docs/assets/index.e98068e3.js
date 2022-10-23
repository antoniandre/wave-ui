import{r as c,o as h,f as w,a as e,w as t,b as l,h as o,d as i,_ as p,a5 as _,C as y}from"./index.bf306805.js";const V={class:"title3 mb0"},$={class:"ml2"},x=i("p",null,[l("You can easily add some custom content in the switch track via the "),i("code",null,"#track"),l(" slot."),i("br")],-1),A=i("strong",{class:"code"},"w-switch",-1),D=i("div",{class:"w-switch--custom-track"},".w-switch--custom-track .w-switch__input {width: 55px;}",-1),T=i("p",null,[l("It is possible to add an icon or any kind of content in the switch thumb via the "),i("code",null,"#thumb"),l(`
slot.`),i("br"),l(`
You can also fit and style the element with minimum CSS.`)],-1);function E(n,s,v,f,b,m){const d=c("title-link"),a=c("w-switch"),u=c("example"),g=c("ssh-pre"),k=c("alert"),O=c("w-icon");return h(),w("div",null,[e(d,{h2:"",slug:"on-off-and-disabled"},{default:t(()=>[l("On, off & disabled")]),_:1}),e(u,{"content-class":"pt4"},{pug:t(()=>[]),html:t(()=>[l(`<w-switch
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
`)]),default:t(()=>[e(a,{class:"ma2","model-value":!0,label:"On"}),e(a,{class:"ma2","model-value":!1,label:"Off"}),e(a,{class:"ma2","model-value":!0,disabled:"",label:"On disabled"}),e(a,{class:"ma2","model-value":!1,disabled:"",label:"Off disabled"})]),_:1}),e(d,{h2:""},{default:t(()=>[l("V-model")]),_:1}),e(u,{"content-class":"w-flex wrap align-center"},{pug:t(()=>[l(`w-switch.mr6(v-model="value")
span.title3.mb0
  | v-model value:
  code.ml2 `+o(n.value),1)]),html:t(()=>[l(`<w-switch class="mr6" v-model="value"></w-switch>
<span class="title3 mb0">
  v-model value:
  <code class="ml2">`+o("{{ value }}")+`</code>
</span>`)]),js:t(()=>[l(`data: () => ({
  value: true
})
`)]),default:t(()=>[e(a,{class:"mr6",modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=r=>n.value=r)},null,8,["modelValue"]),i("span",V,[l("v-model value:"),i("code",$,o(n.value),1)])]),_:1}),e(d,{h2:""},{default:t(()=>[l("Colors")]),_:1}),e(u,{"content-class":"pt4"},{pug:t(()=>[l(`w-switch.ma2(:model-value="true" color="pink")
w-switch.ma2(:model-value="true" color="error")
w-switch.ma2(:model-value="true" color="warning")
w-switch.ma2(:model-value="true" color="success")
w-switch.ma2(:model-value="true" color="info")`)]),html:t(()=>[l(`<w-switch
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
`)]),default:t(()=>[e(a,{class:"ma2","model-value":!0,color:"pink"}),e(a,{class:"ma2","model-value":!0,color:"error"}),e(a,{class:"ma2","model-value":!0,color:"warning"}),e(a,{class:"ma2","model-value":!0,color:"success"}),e(a,{class:"ma2","model-value":!0,color:"info"})]),_:1}),e(d,{h2:""},{default:t(()=>[l("Thin version")]),_:1}),e(u,{"content-class":"pt5"},{pug:t(()=>[l(`w-switch.ma2(:model-value="true" thin label="On")
w-switch.ma2(:model-value="false" thin label="Off")
w-switch.ma2(:model-value="true" disabled thin label="On disabled")
w-switch.ma2(:model-value="false" disabled thin label="Off disabled")`)]),html:t(()=>[l(`<w-switch
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
`)]),default:t(()=>[e(a,{class:"ma2","model-value":!0,thin:"",label:"On"}),e(a,{class:"ma2","model-value":!1,thin:"",label:"Off"}),e(a,{class:"ma2","model-value":!0,disabled:"",thin:"",label:"On disabled"}),e(a,{class:"ma2","model-value":!1,disabled:"",thin:"",label:"Off disabled"})]),_:1}),e(d,{h2:""},{default:t(()=>[l("Track slot")]),_:1}),x,e(k,{tip:""},{default:t(()=>[l("If the "),A,l(` width is too small for your custom content, it's very easy to
increase its width with CSS like in this example, and the component elements will adapt:`),e(g,{language:"css"},{default:t(()=>[D]),_:1})]),_:1}),e(u,{"content-class":"pt5"},{pug:t(()=>[l(`w-switch.ma4(v-model="value")
  template(#track)
    small `+o("{{ value ? 'on' : 'off' }}")+`

w-switch.w-switch--wide.ma4(v-model="value")
  template(#track)
    strong `+o("{{ value ? 'on' : 'off' }}"))]),html:t(()=>[l(`<w-switch v-model="value" class="ma4">
  <template #track>
    <small>`+o("{{ value ? 'on' : 'off' }}")+`</small>
  </template>
</w-switch>

<w-switch v-model="value" class="ma4 w-switch--wide">
  <template #track>
    <strong>`+o("{{ value ? 'on' : 'off' }}")+`</strong>
  </template>
</w-switch>`)]),js:t(()=>[l(`data: () => ({
  value: true
})`)]),css:t(()=>[l(`/* Adapt text color according to the background color. */
.w-switch__track {color: #666;}
.w-switch--on .w-switch__track {color: #fff;}

/* Wider switch. */
.w-switch--wide .w-switch__input {width: 55px;}
.w-switch--wide .w-switch__track {width: 35px;text-align: center;}
`)]),default:t(()=>[e(a,{class:"ma4",modelValue:n.value2,"onUpdate:modelValue":s[1]||(s[1]=r=>n.value2=r)},{track:t(()=>[i("small",null,o(n.value2?"on":"off"),1)]),_:1},8,["modelValue"]),e(a,{class:"w-switch--wide ma4",modelValue:n.value2,"onUpdate:modelValue":s[2]||(s[2]=r=>n.value2=r)},{track:t(()=>[i("strong",null,o(n.value2?"on":"off"),1)]),_:1},8,["modelValue"])]),_:1}),e(d,{h2:""},{default:t(()=>[l("Thumb slot")]),_:1}),T,e(u,{"content-class":"pt5"},{pug:t(()=>[l(`w-switch.ma4(v-model="value" label="On")
  template(#thumb)
    small `+o("{{ value ? 'on' : 'off' }}")+`

w-switch.ma4(v-model="value" label="Dark theme")
  template(#thumb)
    w-icon `+o("{{ value ? 'mdi mdi-weather-night' : 'mdi mdi-white-balance-sunny' }}"))]),html:t(()=>[l(`<w-switch v-model="value" class="ma4">
  <template #thumb>
    <small>`+o("{{ value ? 'on' : 'off' }}")+`</small>
  </template>
</w-switch>

<w-switch v-model="value" class="ma4">
  <template #thumb>
    <w-icon>
      `+o("{{ value ? 'mdi mdi-weather-night' : 'mdi mdi-white-balance-sunny' }}")+`
    </w-icon>
  </template>
</w-switch>`)]),js:t(()=>[l(`data: () => ({
  value: true
})`)]),default:t(()=>[e(a,{class:"ma4",modelValue:n.value3,"onUpdate:modelValue":s[3]||(s[3]=r=>n.value3=r)},{thumb:t(()=>[i("small",null,o(n.value3?"on":"off"),1)]),_:1},8,["modelValue"]),e(a,{class:"ma4",modelValue:n.value3,"onUpdate:modelValue":s[4]||(s[4]=r=>n.value3=r),label:"Dark theme"},{thumb:t(()=>[e(O,null,{default:t(()=>[l(o(n.value3?"mdi mdi-weather-night":"mdi mdi-white-balance-sunny"),1)]),_:1})]),_:1},8,["modelValue"])]),_:1})])}const S={data:()=>({value:!0,value2:!0,value3:!0})},U=p(S,[["render",E]]),C=i("div",{class:"w-divider my12"},null,-1);function B(n,s,v,f,b,m){const d=c("title-link"),a=c("component-api");return h(),w("div",null,[C,e(d,{class:"title1",h2:""},{default:t(()=>[l("API")]),_:1}),e(a,{class:"mt0",items:m.props,descriptions:n.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(a,{items:n.slots,title:"Slots"},null,8,["items"]),e(a,{items:m.events,title:"Events"},null,8,["items"])])}const M={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Dictates the state of the switch. When the user toggles the switch, the <code>v-model</code> value will be updated.',label:"Sets a visible label for the switch.",labelOnLeft:"Moves the label to the left of the switch. By default the label is displayed on the right.",color:'Applies a color to the switch. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',labelColor:`Applies a specific color to the switch's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,thin:"Applies a thiner style to the switch.",noRipple:"Removes the ripple animation on activation.",name:"Provide a native HTML <code>name</code> attribute to the switch. If not provided, a unique name will be computed.",disabled:"Disables the switch making it unreactive to user interactions.",readonly:"The switch will still look like an interactive switch except that it is read-only: its current state cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the switch.",validators:'<span class="deep-orange">Only for validation, when the switch is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the switch. Each function will be executed on switch   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the switch.'},P={default:{description:"The switch label content, if the label prop is not flexible enough."},track:{description:"Optional switch track content."},thumb:{description:"Optional switch thumb content. Useful to place an icon or small text."}},I={input:{description:"Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"A boolean representing the current state of the switch."}},"update:modelValue":{description:"Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"A boolean representing the current state of the switch."}},focus:{description:"Emitted on switch focus.",params:{"[DOM event object]":"The associated focus DOM event."}}},N={data:()=>({propsDescs:M,slots:P}),computed:{props(){return{..._.props,...y.props}},events(){return _.emits.reduce((n,s)=>(n[s]=I[s]||{})&&n,{})}}},W=p(N,[["render",B]]);function j(n,s,v,f,b,m){const d=c("ui-component-title"),a=c("examples"),u=c("api");return h(),w("main",null,[e(d,null,{default:t(()=>[l("w-switch")]),_:1}),e(a),e(u)])}const q={components:{Examples:U,Api:W}},H=p(q,[["render",j]]);export{H as default};
