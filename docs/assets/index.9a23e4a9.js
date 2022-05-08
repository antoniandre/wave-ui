var x=Object.defineProperty;var g=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var k=(a,s,c)=>s in a?x(a,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[s]=c,w=(a,s)=>{for(var c in s||(s={}))A.call(s,c)&&k(a,c,s[c]);if(g)for(var c of g(s))D.call(s,c)&&k(a,c,s[c]);return a};import{r as d,o as p,f as v,a as e,w as t,e as l,h as o,b as i,_ as f,bY as O,bz as T}from"./index.9037a58f.js";const E=l("On, off & disabled"),S=l(`<w-switch
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
`),U=l("V-model"),B={class:"title3 mb0"},C=l("v-model value:"),M={class:"ml2"},P=l(`<w-switch class="mr6" v-model="value"></w-switch>
<span class="title3 mb0">
  v-model value:
  <code class="ml2">`+o("{{ value }}")+`</code>
</span>`),I=l(`data: () => ({
  value: true
})
`),N=l("Colors"),W=l(`w-switch.ma2(:model-value="true" color="pink")
w-switch.ma2(:model-value="true" color="error")
w-switch.ma2(:model-value="true" color="warning")
w-switch.ma2(:model-value="true" color="success")
w-switch.ma2(:model-value="true" color="info")`),j=l(`<w-switch
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
`),q=l("Thin version"),L=l(`w-switch.ma2(:model-value="true" thin label="On")
w-switch.ma2(:model-value="false" thin label="Off")
w-switch.ma2(:model-value="true" disabled thin label="On disabled")
w-switch.ma2(:model-value="false" disabled thin label="Off disabled")`),Y=l(`<w-switch
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
`),H=l("Track slot"),R=i("p",null,[l("You can easily add some custom content in the switch track via the "),i("code",null,"#track"),l(" slot."),i("br")],-1),z=l("If the "),F=i("strong",{class:"code"},"w-switch",-1),G=l(` width is too small for your custom content, it's very easy to
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
    w-icon `+o("{{ value ? 'mdi mdi-weather-night' : 'mdi mdi-white-balance-sunny' }}")),ae=l(`<w-switch v-model="value" class="ma4">
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
</w-switch>`),se=l(`data: () => ({
  value: true
})`);function ne(a,s,c,_,b,m){const r=d("title-link"),n=d("w-switch"),u=d("example"),y=d("ssh-pre"),V=d("alert"),$=d("w-icon");return p(),v("div",null,[e(r,{h2:"",slug:"on-off-and-disabled"},{default:t(()=>[E]),_:1}),e(u,{"content-class":"pt4"},{pug:t(()=>[]),html:t(()=>[S]),default:t(()=>[e(n,{class:"ma2","model-value":!0,label:"On"}),e(n,{class:"ma2","model-value":!1,label:"Off"}),e(n,{class:"ma2","model-value":!0,disabled:"",label:"On disabled"}),e(n,{class:"ma2","model-value":!1,disabled:"",label:"Off disabled"})]),_:1}),e(r,{h2:""},{default:t(()=>[U]),_:1}),e(u,{"content-class":"w-flex wrap align-center"},{pug:t(()=>[l(`w-switch.mr6(v-model="value")
span.title3.mb0
  | v-model value:
  code.ml2 `+o(a.value),1)]),html:t(()=>[P]),js:t(()=>[I]),default:t(()=>[e(n,{class:"mr6",modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=h=>a.value=h)},null,8,["modelValue"]),i("span",B,[C,i("code",M,o(a.value),1)])]),_:1}),e(r,{h2:""},{default:t(()=>[N]),_:1}),e(u,{"content-class":"pt4"},{pug:t(()=>[W]),html:t(()=>[j]),default:t(()=>[e(n,{class:"ma2","model-value":!0,color:"pink"}),e(n,{class:"ma2","model-value":!0,color:"error"}),e(n,{class:"ma2","model-value":!0,color:"warning"}),e(n,{class:"ma2","model-value":!0,color:"success"}),e(n,{class:"ma2","model-value":!0,color:"info"})]),_:1}),e(r,{h2:""},{default:t(()=>[q]),_:1}),e(u,{"content-class":"pt5"},{pug:t(()=>[L]),html:t(()=>[Y]),default:t(()=>[e(n,{class:"ma2","model-value":!0,thin:"",label:"On"}),e(n,{class:"ma2","model-value":!1,thin:"",label:"Off"}),e(n,{class:"ma2","model-value":!0,disabled:"",thin:"",label:"On disabled"}),e(n,{class:"ma2","model-value":!1,disabled:"",thin:"",label:"Off disabled"})]),_:1}),e(r,{h2:""},{default:t(()=>[H]),_:1}),R,e(V,{tip:""},{default:t(()=>[z,F,G,e(y,{language:"css"},{default:t(()=>[J]),_:1})]),_:1}),e(u,{"content-class":"pt5"},{pug:t(()=>[K]),html:t(()=>[Q]),js:t(()=>[X]),css:t(()=>[Z]),default:t(()=>[e(n,{class:"ma4",modelValue:a.value2,"onUpdate:modelValue":s[1]||(s[1]=h=>a.value2=h)},{track:t(()=>[i("small",null,o(a.value2?"on":"off"),1)]),_:1},8,["modelValue"]),e(n,{class:"w-switch--wide ma4",modelValue:a.value2,"onUpdate:modelValue":s[2]||(s[2]=h=>a.value2=h)},{track:t(()=>[i("strong",null,o(a.value2?"on":"off"),1)]),_:1},8,["modelValue"])]),_:1}),e(r,{h2:""},{default:t(()=>[ee]),_:1}),te,e(u,{"content-class":"pt5"},{pug:t(()=>[le]),html:t(()=>[ae]),js:t(()=>[se]),default:t(()=>[e(n,{class:"ma4",modelValue:a.value3,"onUpdate:modelValue":s[3]||(s[3]=h=>a.value3=h)},{thumb:t(()=>[i("small",null,o(a.value3?"on":"off"),1)]),_:1},8,["modelValue"]),e(n,{class:"ma4",modelValue:a.value3,"onUpdate:modelValue":s[4]||(s[4]=h=>a.value3=h),label:"Dark theme"},{thumb:t(()=>[e($,null,{default:t(()=>[l(o(a.value3?"mdi mdi-weather-night":"mdi mdi-white-balance-sunny"),1)]),_:1})]),_:1},8,["modelValue"])]),_:1})])}const oe={data:()=>({value:!0,value2:!0,value3:!0})};var ie=f(oe,[["render",ne]]);const ce=i("div",{class:"w-divider my12"},null,-1),de=l("API");function re(a,s,c,_,b,m){const r=d("title-link"),n=d("component-api");return p(),v("div",null,[ce,e(r,{class:"title1",h2:""},{default:t(()=>[de]),_:1}),e(n,{class:"mt0",items:m.props,descriptions:a.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(n,{items:a.slots,title:"Slots"},null,8,["items"]),e(n,{items:m.events,title:"Events"},null,8,["items"])])}const he={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Dictates the state of the switch. When the user toggles the switch, the <code>v-model</code> value will be updated.',label:"Sets a visible label for the switch.",labelOnLeft:"Moves the label to the left of the switch. By default the label is displayed on the right.",color:'Applies a color to the switch. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',labelColor:`Applies a specific color to the switch's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,thin:"Applies a thiner style to the switch.",noRipple:"Removes the ripple animation on activation.",name:"Provide a native HTML <code>name</code> attribute to the switch. If not provided, a unique name will be computed.",disabled:"Disables the switch making it unreactive to user interactions.",readonly:"The switch will still look like an interactive switch except that it is read-only: its current state cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the switch.",validators:'<span class="deep-orange">Only for validation, when the switch is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the switch. Each function will be executed on switch   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the switch.'},ue={default:{description:"The switch label content, if the label prop is not flexible enough."},track:{description:"Optional switch track content."},thumb:{description:"Optional switch thumb content. Useful to place an icon or small text."}},me={input:{description:"Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"A boolean representing the current state of the switch."}},"update:modelValue":{description:"Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"A boolean representing the current state of the switch."}},focus:{description:"Emitted on switch focus.",params:{"[DOM event object]":"The associated focus DOM event."}}},we={data:()=>({propsDescs:he,slots:ue}),computed:{props(){return w(w({},O.props),T.props)},events(){return O.emits.reduce((a,s)=>(a[s]=me[s]||{})&&a,{})}}};var pe=f(we,[["render",re]]);const ve=l("w-switch");function fe(a,s,c,_,b,m){const r=d("ui-component-title"),n=d("examples"),u=d("api");return p(),v("main",null,[e(r,null,{default:t(()=>[ve]),_:1}),e(n),e(u)])}const _e={components:{Examples:ie,Api:pe}};var ke=f(_e,[["render",fe]]);export{ke as default};
