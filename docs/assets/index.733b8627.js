import{r as c,o as m,f as w,a as e,w as t,e as l,h as o,b as i,_ as p,a8 as b,E as y}from"./index.6a386ae5.js";const V=l("On, off & disabled"),$=l(`<w-switch
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
`),x=l("V-model"),A={class:"title3 mb0"},D=l("v-model value:"),E={class:"ml2"},T=l(`<w-switch class="mr6" v-model="value"></w-switch>
<span class="title3 mb0">
  v-model value:
  <code class="ml2">`+o("{{ value }}")+`</code>
</span>`),S=l(`data: () => ({
  value: true
})
`),U=l("Colors"),B=l(`w-switch.ma2(:model-value="true" color="pink")
w-switch.ma2(:model-value="true" color="error")
w-switch.ma2(:model-value="true" color="warning")
w-switch.ma2(:model-value="true" color="success")
w-switch.ma2(:model-value="true" color="info")`),C=l(`<w-switch
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
`),M=l("Thin version"),P=l(`w-switch.ma2(:model-value="true" thin label="On")
w-switch.ma2(:model-value="false" thin label="Off")
w-switch.ma2(:model-value="true" disabled thin label="On disabled")
w-switch.ma2(:model-value="false" disabled thin label="Off disabled")`),I=l(`<w-switch
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
`),N=l("Track slot"),W=i("p",null,[l("You can easily add some custom content in the switch track via the "),i("code",null,"#track"),l(" slot."),i("br")],-1),j=l("If the "),q=i("strong",{class:"code"},"w-switch",-1),L=l(` width is too small for your custom content, it's very easy to
increase its width with CSS like in this example, and the component elements will adapt:`),H=i("div",{class:"w-switch--custom-track"},".w-switch--custom-track .w-switch__input {width: 55px;}",-1),R=l(`w-switch.ma4(v-model="value")
  template(#track)
    small `+o("{{ value ? 'on' : 'off' }}")+`

w-switch.w-switch--wide.ma4(v-model="value")
  template(#track)
    strong `+o("{{ value ? 'on' : 'off' }}")),Y=l(`<w-switch v-model="value" class="ma4">
  <template #track>
    <small>`+o("{{ value ? 'on' : 'off' }}")+`</small>
  </template>
</w-switch>

<w-switch v-model="value" class="ma4 w-switch--wide">
  <template #track>
    <strong>`+o("{{ value ? 'on' : 'off' }}")+`</strong>
  </template>
</w-switch>`),F=l(`data: () => ({
  value: true
})`),z=l(`/* Adapt text color according to the background color. */
.w-switch__track {color: #666;}
.w-switch--on .w-switch__track {color: #fff;}

/* Wider switch. */
.w-switch--wide .w-switch__input {width: 55px;}
.w-switch--wide .w-switch__track {width: 35px;text-align: center;}
`),G=l("Thumb slot"),J=i("p",null,[l("It is possible to add an icon or any kind of content in the switch thumb via the "),i("code",null,"#thumb"),l(`
slot.`),i("br"),l(`
You can also fit and style the element with minimum CSS.`)],-1),K=l(`w-switch.ma4(v-model="value" label="On")
  template(#thumb)
    small `+o("{{ value ? 'on' : 'off' }}")+`

w-switch.ma4(v-model="value" label="Dark theme")
  template(#thumb)
    w-icon `+o("{{ value ? 'mdi mdi-weather-night' : 'mdi mdi-white-balance-sunny' }}")),Q=l(`<w-switch v-model="value" class="ma4">
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
</w-switch>`),X=l(`data: () => ({
  value: true
})`);function Z(s,n,v,f,_,u){const d=c("title-link"),a=c("w-switch"),h=c("example"),g=c("ssh-pre"),k=c("alert"),O=c("w-icon");return m(),w("div",null,[e(d,{h2:"",slug:"on-off-and-disabled"},{default:t(()=>[V]),_:1}),e(h,{"content-class":"pt4"},{pug:t(()=>[]),html:t(()=>[$]),default:t(()=>[e(a,{class:"ma2","model-value":!0,label:"On"}),e(a,{class:"ma2","model-value":!1,label:"Off"}),e(a,{class:"ma2","model-value":!0,disabled:"",label:"On disabled"}),e(a,{class:"ma2","model-value":!1,disabled:"",label:"Off disabled"})]),_:1}),e(d,{h2:""},{default:t(()=>[x]),_:1}),e(h,{"content-class":"w-flex wrap align-center"},{pug:t(()=>[l(`w-switch.mr6(v-model="value")
span.title3.mb0
  | v-model value:
  code.ml2 `+o(s.value),1)]),html:t(()=>[T]),js:t(()=>[S]),default:t(()=>[e(a,{class:"mr6",modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=r=>s.value=r)},null,8,["modelValue"]),i("span",A,[D,i("code",E,o(s.value),1)])]),_:1}),e(d,{h2:""},{default:t(()=>[U]),_:1}),e(h,{"content-class":"pt4"},{pug:t(()=>[B]),html:t(()=>[C]),default:t(()=>[e(a,{class:"ma2","model-value":!0,color:"pink"}),e(a,{class:"ma2","model-value":!0,color:"error"}),e(a,{class:"ma2","model-value":!0,color:"warning"}),e(a,{class:"ma2","model-value":!0,color:"success"}),e(a,{class:"ma2","model-value":!0,color:"info"})]),_:1}),e(d,{h2:""},{default:t(()=>[M]),_:1}),e(h,{"content-class":"pt5"},{pug:t(()=>[P]),html:t(()=>[I]),default:t(()=>[e(a,{class:"ma2","model-value":!0,thin:"",label:"On"}),e(a,{class:"ma2","model-value":!1,thin:"",label:"Off"}),e(a,{class:"ma2","model-value":!0,disabled:"",thin:"",label:"On disabled"}),e(a,{class:"ma2","model-value":!1,disabled:"",thin:"",label:"Off disabled"})]),_:1}),e(d,{h2:""},{default:t(()=>[N]),_:1}),W,e(k,{tip:""},{default:t(()=>[j,q,L,e(g,{language:"css"},{default:t(()=>[H]),_:1})]),_:1}),e(h,{"content-class":"pt5"},{pug:t(()=>[R]),html:t(()=>[Y]),js:t(()=>[F]),css:t(()=>[z]),default:t(()=>[e(a,{class:"ma4",modelValue:s.value2,"onUpdate:modelValue":n[1]||(n[1]=r=>s.value2=r)},{track:t(()=>[i("small",null,o(s.value2?"on":"off"),1)]),_:1},8,["modelValue"]),e(a,{class:"w-switch--wide ma4",modelValue:s.value2,"onUpdate:modelValue":n[2]||(n[2]=r=>s.value2=r)},{track:t(()=>[i("strong",null,o(s.value2?"on":"off"),1)]),_:1},8,["modelValue"])]),_:1}),e(d,{h2:""},{default:t(()=>[G]),_:1}),J,e(h,{"content-class":"pt5"},{pug:t(()=>[K]),html:t(()=>[Q]),js:t(()=>[X]),default:t(()=>[e(a,{class:"ma4",modelValue:s.value3,"onUpdate:modelValue":n[3]||(n[3]=r=>s.value3=r)},{thumb:t(()=>[i("small",null,o(s.value3?"on":"off"),1)]),_:1},8,["modelValue"]),e(a,{class:"ma4",modelValue:s.value3,"onUpdate:modelValue":n[4]||(n[4]=r=>s.value3=r),label:"Dark theme"},{thumb:t(()=>[e(O,null,{default:t(()=>[l(o(s.value3?"mdi mdi-weather-night":"mdi mdi-white-balance-sunny"),1)]),_:1})]),_:1},8,["modelValue"])]),_:1})])}const ee={data:()=>({value:!0,value2:!0,value3:!0})};var te=p(ee,[["render",Z]]);const le=i("div",{class:"w-divider my12"},null,-1),ae=l("API");function se(s,n,v,f,_,u){const d=c("title-link"),a=c("component-api");return m(),w("div",null,[le,e(d,{class:"title1",h2:""},{default:t(()=>[ae]),_:1}),e(a,{class:"mt0",items:u.props,descriptions:s.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(a,{items:s.slots,title:"Slots"},null,8,["items"]),e(a,{items:u.events,title:"Events"},null,8,["items"])])}const ne={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Dictates the state of the switch. When the user toggles the switch, the <code>v-model</code> value will be updated.',label:"Sets a visible label for the switch.",labelOnLeft:"Moves the label to the left of the switch. By default the label is displayed on the right.",color:'Applies a color to the switch. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',labelColor:`Applies a specific color to the switch's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,thin:"Applies a thiner style to the switch.",noRipple:"Removes the ripple animation on activation.",name:"Provide a native HTML <code>name</code> attribute to the switch. If not provided, a unique name will be computed.",disabled:"Disables the switch making it unreactive to user interactions.",readonly:"The switch will still look like an interactive switch except that it is read-only: its current state cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the switch.",validators:'<span class="deep-orange">Only for validation, when the switch is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the switch. Each function will be executed on switch   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the switch.'},oe={default:{description:"The switch label content, if the label prop is not flexible enough."},track:{description:"Optional switch track content."},thumb:{description:"Optional switch thumb content. Useful to place an icon or small text."}},ie={input:{description:"Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"A boolean representing the current state of the switch."}},"update:modelValue":{description:"Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"A boolean representing the current state of the switch."}},focus:{description:"Emitted on switch focus.",params:{"[DOM event object]":"The associated focus DOM event."}}},ce={data:()=>({propsDescs:ne,slots:oe}),computed:{props(){return{...b.props,...y.props}},events(){return b.emits.reduce((s,n)=>(s[n]=ie[n]||{})&&s,{})}}};var de=p(ce,[["render",se]]);const re=l("w-switch");function he(s,n,v,f,_,u){const d=c("ui-component-title"),a=c("examples"),h=c("api");return m(),w("main",null,[e(d,null,{default:t(()=>[re]),_:1}),e(a),e(h)])}const ue={components:{Examples:te,Api:de}};var we=p(ue,[["render",he]]);export{we as default};
