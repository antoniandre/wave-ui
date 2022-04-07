var x=Object.defineProperty;var g=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var k=(s,n,c)=>n in s?x(s,n,{enumerable:!0,configurable:!0,writable:!0,value:c}):s[n]=c,w=(s,n)=>{for(var c in n||(n={}))A.call(n,c)&&k(s,c,n[c]);if(g)for(var c of g(n))D.call(n,c)&&k(s,c,n[c]);return s};import{r as d,o as p,e as v,f as e,w as t,i as l,t as o,g as i}from"./vendor.e64646cc.js";import{_ as f,G as O,F as T}from"./index.f3654a4f.js";const E=l("On, off & disabled"),S=l(`<w-switch
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
`),U=l("V-model"),B={class:"title3 mb0"},M=l("v-model value:"),j={class:"ml2"},C=l(`<w-switch class="mr6" v-model="value"></w-switch>
<span class="title3 mb0">
  v-model value:
  <code class="ml2">`+o("{{ value }}")+`</code>
</span>`),I=l(`data: () => ({
  value: true
})
`),P=l("Colors"),W=l(`w-switch.ma2(:model-value="true" color="pink")
w-switch.ma2(:model-value="true" color="error")
w-switch.ma2(:model-value="true" color="warning")
w-switch.ma2(:model-value="true" color="success")
w-switch.ma2(:model-value="true" color="info")`),q=l(`<w-switch
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
`),L=l("Thin version"),N=l(`w-switch.ma2(:model-value="true" thin label="On")
w-switch.ma2(:model-value="false" thin label="Off")
w-switch.ma2(:model-value="true" disabled thin label="On disabled")
w-switch.ma2(:model-value="false" disabled thin label="Off disabled")`),F=l(`<w-switch
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
`),H=l("Track slot"),R=i("p",null,[l("You can easily add some custom content in the switch track via the "),i("code",null,"#track"),l(" slot."),i("br")],-1),Y=l("If the "),G=i("strong",{class:"code"},"w-switch",-1),z=l(` width is too small for your custom content, it's very easy to
increase its width with CSS like in this example, and the component elements will adapt:`),J=i("div",{class:"w-switch--custom-track"},".w-switch--custom-track .w-switch__input {width: 55px;}",-1),K=l(`w-switch.ma4(v-model="value")
  template(#track)
    small `+o("{{ value ? 'on' : 'off' }}")+`

w-switch.w-switch--wide.ma4(v-model="value")
  template(#track)
    strong `+o("{{ value ? 'on' : 'off' }}")),Q=l(`<w-switch v-model="value" class="ma4">
  <template #track>
    <small>`+o("{{ value ? 'on' : 'off' }}")+`</small>
  </template>
</w-switch>

<w-switch v-model="value" class="ma4 w-switch--wide">
  <template #track>
    <strong>`+o("{{ value ? 'on' : 'off' }}")+`</strong>
  </template>
</w-switch>`),X=l(`data: () => ({
  value: true
})`),Z=l(`/* Adapt text color according to the background color. */
.w-switch__track {color: #666;}
.w-switch--on .w-switch__track {color: #fff;}

/* Wider switch. */
.w-switch--wide .w-switch__input {width: 55px;}
.w-switch--wide .w-switch__track {width: 35px;text-align: center;}
`),ee=l("Thumb slot"),te=i("p",null,[l("It is possible to add an icon or any kind of content in the switch thumb via the "),i("code",null,"#thumb"),l(`
slot.`),i("br"),l(`
You can also fit and style the element with minimum CSS.`)],-1),le=l(`w-switch.ma4(v-model="value" label="On")
  template(#thumb)
    small `+o("{{ value ? 'on' : 'off' }}")+`

w-switch.ma4(v-model="value" label="Dark theme")
  template(#thumb)
    w-icon `+o("{{ value ? 'mdi mdi-white-balance-sunny' : 'mdi mdi-weather-night' }}")),se=l(`<w-switch v-model="value" class="ma4">
  <template #thumb>
    <small>`+o("{{ value ? 'on' : 'off' }}")+`</small>
  </template>
</w-switch>

<w-switch v-model="value" class="ma4">
  <template #thumb>
    <w-icon>
      `+o("{{ value ? 'mdi mdi-white-balance-sunny' : 'mdi mdi-weather-night' }}")+`
    </w-icon>
  </template>
</w-switch>`),ne=l(`data: () => ({
  value: true
})`);function ae(s,n,c,_,b,h){const r=d("title-link"),a=d("w-switch"),m=d("example"),y=d("ssh-pre"),V=d("alert"),$=d("w-icon");return p(),v("div",null,[e(r,{h2:"",slug:"on-off-and-disabled"},{default:t(()=>[E]),_:1}),e(m,{"content-class":"pt4"},{pug:t(()=>[]),html:t(()=>[S]),default:t(()=>[e(a,{class:"ma2","model-value":!0,label:"On"}),e(a,{class:"ma2","model-value":!1,label:"Off"}),e(a,{class:"ma2","model-value":!0,disabled:"",label:"On disabled"}),e(a,{class:"ma2","model-value":!1,disabled:"",label:"Off disabled"})]),_:1}),e(r,{h2:""},{default:t(()=>[U]),_:1}),e(m,{"content-class":"w-flex wrap align-center"},{pug:t(()=>[l(`w-switch.mr6(v-model="value")
span.title3.mb0
  | v-model value:
  code.ml2 `+o(s.value),1)]),html:t(()=>[C]),js:t(()=>[I]),default:t(()=>[e(a,{class:"mr6",modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=u=>s.value=u)},null,8,["modelValue"]),i("span",B,[M,i("code",j,o(s.value),1)])]),_:1}),e(r,{h2:""},{default:t(()=>[P]),_:1}),e(m,{"content-class":"pt4"},{pug:t(()=>[W]),html:t(()=>[q]),default:t(()=>[e(a,{class:"ma2","model-value":!0,color:"pink"}),e(a,{class:"ma2","model-value":!0,color:"error"}),e(a,{class:"ma2","model-value":!0,color:"warning"}),e(a,{class:"ma2","model-value":!0,color:"success"}),e(a,{class:"ma2","model-value":!0,color:"info"})]),_:1}),e(r,{h2:""},{default:t(()=>[L]),_:1}),e(m,{"content-class":"pt5"},{pug:t(()=>[N]),html:t(()=>[F]),default:t(()=>[e(a,{class:"ma2","model-value":!0,thin:"",label:"On"}),e(a,{class:"ma2","model-value":!1,thin:"",label:"Off"}),e(a,{class:"ma2","model-value":!0,disabled:"",thin:"",label:"On disabled"}),e(a,{class:"ma2","model-value":!1,disabled:"",thin:"",label:"Off disabled"})]),_:1}),e(r,{h2:""},{default:t(()=>[H]),_:1}),R,e(V,{tip:""},{default:t(()=>[Y,G,z,e(y,{language:"css"},{default:t(()=>[J]),_:1})]),_:1}),e(m,{"content-class":"pt5"},{pug:t(()=>[K]),html:t(()=>[Q]),js:t(()=>[X]),css:t(()=>[Z]),default:t(()=>[e(a,{class:"ma4",modelValue:s.value2,"onUpdate:modelValue":n[1]||(n[1]=u=>s.value2=u)},{track:t(()=>[i("small",null,o(s.value2?"on":"off"),1)]),_:1},8,["modelValue"]),e(a,{class:"w-switch--wide ma4",modelValue:s.value2,"onUpdate:modelValue":n[2]||(n[2]=u=>s.value2=u)},{track:t(()=>[i("strong",null,o(s.value2?"on":"off"),1)]),_:1},8,["modelValue"])]),_:1}),e(r,{h2:""},{default:t(()=>[ee]),_:1}),te,e(m,{"content-class":"pt5"},{pug:t(()=>[le]),html:t(()=>[se]),js:t(()=>[ne]),default:t(()=>[e(a,{class:"ma4",modelValue:s.value3,"onUpdate:modelValue":n[3]||(n[3]=u=>s.value3=u)},{thumb:t(()=>[i("small",null,o(s.value3?"on":"off"),1)]),_:1},8,["modelValue"]),e(a,{class:"ma4",modelValue:s.value3,"onUpdate:modelValue":n[4]||(n[4]=u=>s.value3=u),label:"Dark theme"},{thumb:t(()=>[e($,null,{default:t(()=>[l(o(s.value3?"mdi mdi-white-balance-sunny":"mdi mdi-weather-night"),1)]),_:1})]),_:1},8,["modelValue"])]),_:1})])}const oe={data:()=>({value:!0,value2:!0,value3:!0})};var ie=f(oe,[["render",ae]]);const ce=i("div",{class:"w-divider my12"},null,-1),de=l("API");function re(s,n,c,_,b,h){const r=d("title-link"),a=d("component-api");return p(),v("div",null,[ce,e(r,{class:"title1",h2:""},{default:t(()=>[de]),_:1}),e(a,{class:"mt0",items:h.props,descriptions:s.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(a,{items:s.slots,title:"Slots"},null,8,["items"]),e(a,{items:h.events,title:"Events"},null,8,["items"])])}const ue={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Dictates the state of the switch. When the user toggles the switch, the <code>v-model</code> value will be updated.',label:"Sets a visible label for the switch.",labelOnLeft:"Moves the label to the left of the switch. By default the label is displayed on the right.",color:'Applies a color to the switch. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',thin:"Applies a thiner style to the switch.",noRipple:"Removes the ripple animation on activation.",name:"Provide a native HTML <code>name</code> attribute to the switch. If not provided, a unique name will be computed.",disabled:"Disables the switch making it unreactive to user interactions.",readonly:"The switch will still look like an interactive switch except that it is read-only: its current state cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the switch.",validators:'<span class="deep-orange">Only for validation, when the switch is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the switch. Each function will be executed on switch   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the switch.'},me={default:{description:"The switch label content, if the label prop is not flexible enough."},track:{description:"Optional switch track content."},thumb:{description:"Optional switch thumb content. Useful to place an icon or small text."}},he={input:{description:"Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"A boolean representing the current state of the switch."}},"update:modelValue":{description:"Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"A boolean representing the current state of the switch."}},focus:{description:"Emitted on switch focus.",params:{"[DOM event object]":"The associated focus DOM event."}}},we={data:()=>({propsDescs:ue,slots:me}),computed:{props(){return w(w({},O.props),T.props)},events(){return O.emits.reduce((s,n)=>(s[n]=he[n]||{})&&s,{})}}};var pe=f(we,[["render",re]]);const ve=l("w-switch");function fe(s,n,c,_,b,h){const r=d("ui-component-title"),a=d("examples"),m=d("api");return p(),v("main",null,[e(r,null,{default:t(()=>[ve]),_:1}),e(a),e(m)])}const _e={components:{Examples:ie,Api:pe}};var Oe=f(_e,[["render",fe]]);export{Oe as default};
