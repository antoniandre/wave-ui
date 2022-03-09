var x=Object.defineProperty;var _=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var g=(l,a,o)=>a in l?x(l,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[a]=o,h=(l,a)=>{for(var o in a||(a={}))k.call(a,o)&&g(l,o,a[o]);if(_)for(var o of _(a))y.call(a,o)&&g(l,o,a[o]);return l};import{r as c,o as u,f as m,a as e,w as s,e as n,h as w,b as p}from"./vendor.c30f2c6c.js";import{_ as v,G as O,F as V}from"./index.76d51146.js";const A=n("On, off & disabled"),E=n(`<w-switch
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
`),D=n("V-model"),T={class:"title3 mb0"},B=n("v-model value:"),M={class:"ml2"},P=n(`<w-switch class="mr6" v-model="value"></w-switch>
<span class="title3 mb0">
  v-model value:
  <code class="ml2">`+w("{{ value }}")+`</code>
</span>`),S=n(`data: () => ({
  value: true
})
`),j=n("Colors"),q=n(`w-switch.ma2(:model-value="true" color="pink")
w-switch.ma2(:model-value="true" color="error")
w-switch.ma2(:model-value="true" color="warning")
w-switch.ma2(:model-value="true" color="success")
w-switch.ma2(:model-value="true" color="info")`),C=n(`<w-switch
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
`),L=n("Thin version"),N=n(`w-switch.ma2(:model-value="true" thin label="On")
w-switch.ma2(:model-value="false" thin label="Off")
w-switch.ma2(:model-value="true" disabled thin label="On disabled")
w-switch.ma2(:model-value="false" disabled thin label="Off disabled")`),U=n(`<w-switch
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
</w-switch>`);function W(l,a,o,f,b,r){const i=c("title-link"),t=c("w-switch"),d=c("example");return u(),m("div",null,[e(i,{h2:"",slug:"on-off-and-disabled"},{default:s(()=>[A]),_:1}),e(d,{"content-class":"pt4"},{pug:s(()=>[]),html:s(()=>[E]),default:s(()=>[e(t,{class:"ma2","model-value":!0,label:"On"}),e(t,{class:"ma2","model-value":!1,label:"Off"}),e(t,{class:"ma2","model-value":!0,disabled:"",label:"On disabled"}),e(t,{class:"ma2","model-value":!1,disabled:"",label:"Off disabled"})]),_:1}),e(i,{h2:""},{default:s(()=>[D]),_:1}),e(d,{"content-class":"w-flex wrap align-center"},{pug:s(()=>[n(`w-switch.mr6(v-model="value")
span.title3.mb0
  | v-model value:
  code.ml2 `+w(l.value),1)]),html:s(()=>[P]),js:s(()=>[S]),default:s(()=>[e(t,{class:"mr6",modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=$=>l.value=$)},null,8,["modelValue"]),p("span",T,[B,p("code",M,w(l.value),1)])]),_:1}),e(i,{h2:""},{default:s(()=>[j]),_:1}),e(d,{"content-class":"pt4"},{pug:s(()=>[q]),html:s(()=>[C]),default:s(()=>[e(t,{class:"ma2","model-value":!0,color:"pink"}),e(t,{class:"ma2","model-value":!0,color:"error"}),e(t,{class:"ma2","model-value":!0,color:"warning"}),e(t,{class:"ma2","model-value":!0,color:"success"}),e(t,{class:"ma2","model-value":!0,color:"info"})]),_:1}),e(i,{h2:""},{default:s(()=>[L]),_:1}),e(d,{"content-class":"pt5"},{pug:s(()=>[N]),html:s(()=>[U]),default:s(()=>[e(t,{class:"ma2","model-value":!0,thin:"",label:"On"}),e(t,{class:"ma2","model-value":!1,thin:"",label:"Off"}),e(t,{class:"ma2","model-value":!0,disabled:"",thin:"",label:"On disabled"}),e(t,{class:"ma2","model-value":!1,disabled:"",thin:"",label:"Off disabled"})]),_:1})])}const F={data:()=>({value:!0})};var H=v(F,[["render",W]]);const I=p("div",{class:"w-divider my12"},null,-1),R=n("API");function G(l,a,o,f,b,r){const i=c("title-link"),t=c("component-api");return u(),m("div",null,[I,e(i,{class:"title1",h2:""},{default:s(()=>[R]),_:1}),e(t,{class:"mt0",items:r.props,descriptions:l.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(t,{items:l.slots,title:"Slots"},null,8,["items"]),e(t,{items:r.events,title:"Events"},null,8,["items"])])}const z={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Dictates the state of the switch. When the user toggles the switch, the <code>v-model</code> value will be updated.',label:"Sets a visible label for the switch.",labelOnLeft:"Moves the label to the left of the switch. By default the label is displayed on the right.",color:'Applies a color to the switch. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',thin:"Applies a thiner style to the switch.",noRipple:"Removes the ripple animation on activation.",name:"Provide a native HTML <code>name</code> attribute to the switch. If not provided, a unique name will be computed.",disabled:"Disables the switch making it unreactive to user interactions.",readonly:"The switch will still look like an interactive switch except that it is read-only: its current state cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the switch.",validators:'<span class="deep-orange">Only for validation, when the switch is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the switch. Each function will be executed on switch   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the switch.'},J={default:{description:"The switch label content, if the label prop is not flexible enough."}},K={input:{description:"Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"A boolean representing the current state of the switch."}},"update:modelValue":{description:"Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"A boolean representing the current state of the switch."}},focus:{description:"Emitted on switch focus.",params:{"[DOM event object]":"The associated focus DOM event."}}},Q={data:()=>({propsDescs:z,slots:J}),computed:{props(){return h(h({},O.props),V.props)},events(){return O.emits.reduce((l,a)=>(l[a]=K[a]||{})&&l,{})}}};var X=v(Q,[["render",G]]);const Y=n("w-switch");function Z(l,a,o,f,b,r){const i=c("ui-component-title"),t=c("examples"),d=c("api");return u(),m("main",null,[e(i,null,{default:s(()=>[Y]),_:1}),e(t),e(d)])}const ee={components:{Examples:H,Api:X}};var ae=v(ee,[["render",Z]]);export{ae as default};
