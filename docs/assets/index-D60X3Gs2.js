import{r as d,o as c,g as h,a as t,w as l,b as n,t as o,d as i,_ as p,a6 as g,D as V}from"./index-CSsuy43z.js";const $={class:"title3 mb0"},A={class:"ml2"};function D(a,e,v,f,b,w){const r=d("title-link"),s=d("w-switch"),u=d("example"),k=d("ssh-pre"),O=d("alert"),y=d("w-icon");return c(),h("div",null,[t(r,{h2:"",slug:"on-off-and-disabled"},{default:l(()=>e[5]||(e[5]=[n("On, off & disabled")])),_:1}),t(u,{"content-class":"pt4"},{pug:l(()=>e[6]||(e[6]=[])),html:l(()=>e[7]||(e[7]=[n(`<w-switch
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
`)])),default:l(()=>[t(s,{class:"ma2","model-value":!0,label:"On"}),t(s,{class:"ma2","model-value":!1,label:"Off"}),t(s,{class:"ma2","model-value":!0,disabled:"",label:"On disabled"}),t(s,{class:"ma2","model-value":!1,disabled:"",label:"Off disabled"})]),_:1}),t(r,{h2:""},{default:l(()=>e[8]||(e[8]=[n("V-model")])),_:1}),t(u,{"content-class":"w-flex wrap align-center"},{pug:l(()=>[n(`w-switch.mr6(v-model="value")
span.title3.mb0
  | v-model value:
  code.ml2 `+o(a.value),1)]),html:l(()=>e[10]||(e[10]=[n(`<w-switch class="mr6" v-model="value"></w-switch>
<span class="title3 mb0">
  v-model value:
  <code class="ml2">`+o("{{ value }}")+`</code>
</span>`)])),js:l(()=>e[11]||(e[11]=[n(`data: () => ({
  value: true
})
`)])),default:l(()=>[t(s,{class:"mr6",modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=m=>a.value=m)},null,8,["modelValue"]),i("span",$,[e[9]||(e[9]=n("v-model value:")),i("code",A,o(a.value),1)])]),_:1}),t(r,{h2:""},{default:l(()=>e[12]||(e[12]=[n("Colors")])),_:1}),t(u,{"content-class":"pt4"},{pug:l(()=>e[13]||(e[13]=[n(`w-switch.ma2(:model-value="true" color="pink")
w-switch.ma2(:model-value="true" color="error")
w-switch.ma2(:model-value="true" color="warning")
w-switch.ma2(:model-value="true" color="success")
w-switch.ma2(:model-value="true" color="info")`)])),html:l(()=>e[14]||(e[14]=[n(`<w-switch
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
`)])),default:l(()=>[t(s,{class:"ma2","model-value":!0,color:"pink"}),t(s,{class:"ma2","model-value":!0,color:"error"}),t(s,{class:"ma2","model-value":!0,color:"warning"}),t(s,{class:"ma2","model-value":!0,color:"success"}),t(s,{class:"ma2","model-value":!0,color:"info"})]),_:1}),t(r,{h2:""},{default:l(()=>e[15]||(e[15]=[n("Thin version")])),_:1}),t(u,{"content-class":"pt5"},{pug:l(()=>e[16]||(e[16]=[n(`w-switch.ma2(:model-value="true" thin label="On")
w-switch.ma2(:model-value="false" thin label="Off")
w-switch.ma2(:model-value="true" disabled thin label="On disabled")
w-switch.ma2(:model-value="false" disabled thin label="Off disabled")`)])),html:l(()=>e[17]||(e[17]=[n(`<w-switch
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
`)])),default:l(()=>[t(s,{class:"ma2","model-value":!0,thin:"",label:"On"}),t(s,{class:"ma2","model-value":!1,thin:"",label:"Off"}),t(s,{class:"ma2","model-value":!0,disabled:"",thin:"",label:"On disabled"}),t(s,{class:"ma2","model-value":!1,disabled:"",thin:"",label:"Off disabled"})]),_:1}),t(r,{h2:""},{default:l(()=>e[18]||(e[18]=[n("Track slot")])),_:1}),e[34]||(e[34]=i("p",null,[n("You can easily add some custom content in the switch track via the "),i("code",null,"#track"),n(" slot."),i("br")],-1)),t(O,{tip:""},{default:l(()=>[e[20]||(e[20]=n("If the ")),e[21]||(e[21]=i("strong",{class:"code"},"w-switch",-1)),e[22]||(e[22]=n(` width is too small for your custom content, it's very easy to
increase its width with CSS like in this example, and the component elements will adapt:`)),t(k,{language:"css",dark:a.$store.state.darkMode},{default:l(()=>e[19]||(e[19]=[i("div",{class:"w-switch--custom-track"},".w-switch--custom-track .w-switch__input {width: 55px;}",-1)])),_:1},8,["dark"])]),_:1}),t(u,{"content-class":"pt5"},{pug:l(()=>e[23]||(e[23]=[n(`w-switch.ma4(v-model="value")
  template(#track)
    small `+o("{{ value ? 'on' : 'off' }}")+`

w-switch.w-switch--wide.ma4(v-model="value")
  template(#track)
    strong `+o("{{ value ? 'on' : 'off' }}"))])),html:l(()=>e[24]||(e[24]=[n(`<w-switch v-model="value" class="ma4">
  <template #track>
    <small>`+o("{{ value ? 'on' : 'off' }}")+`</small>
  </template>
</w-switch>

<w-switch v-model="value" class="ma4 w-switch--wide">
  <template #track>
    <strong>`+o("{{ value ? 'on' : 'off' }}")+`</strong>
  </template>
</w-switch>`)])),js:l(()=>e[25]||(e[25]=[n(`data: () => ({
  value: true
})`)])),css:l(()=>e[26]||(e[26]=[n(`/* Adapt text color according to the background color. */
.w-switch__track {color: #666;}
.w-switch--on .w-switch__track {color: #fff;}

/* Wider switch. */
.w-switch--wide .w-switch__input {width: 55px;}
.w-switch--wide .w-switch__track {width: 35px;text-align: center;}
`)])),default:l(()=>[t(s,{class:"ma4",modelValue:a.value2,"onUpdate:modelValue":e[1]||(e[1]=m=>a.value2=m)},{track:l(()=>[i("small",null,o(a.value2?"on":"off"),1)]),_:1},8,["modelValue"]),t(s,{class:"w-switch--wide ma4",modelValue:a.value2,"onUpdate:modelValue":e[2]||(e[2]=m=>a.value2=m)},{track:l(()=>[i("strong",null,o(a.value2?"on":"off"),1)]),_:1},8,["modelValue"])]),_:1}),t(r,{h2:""},{default:l(()=>e[27]||(e[27]=[n("Thumb slot")])),_:1}),e[35]||(e[35]=i("p",null,[n("It is possible to add an icon or any kind of content in the switch thumb via the "),i("code",null,"#thumb"),n(`
slot.`),i("br"),n(`
You can also fit and style the element with minimum CSS.`)],-1)),t(u,{"content-class":"pt5"},{pug:l(()=>e[28]||(e[28]=[n(`w-switch.ma4(v-model="value" label="On")
  template(#thumb)
    small `+o("{{ value ? 'on' : 'off' }}")+`

w-switch.ma4(v-model="value" label="Dark theme")
  template(#thumb)
    w-icon `+o("{{ value ? 'mdi mdi-weather-night' : 'mdi mdi-white-balance-sunny' }}"))])),html:l(()=>e[29]||(e[29]=[n(`<w-switch v-model="value" class="ma4">
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
</w-switch>`)])),js:l(()=>e[30]||(e[30]=[n(`data: () => ({
  value: true
})
`)])),default:l(()=>[t(s,{class:"ma4",modelValue:a.value3,"onUpdate:modelValue":e[3]||(e[3]=m=>a.value3=m)},{thumb:l(()=>[i("small",null,o(a.value3?"on":"off"),1)]),_:1},8,["modelValue"]),t(s,{class:"ma4",modelValue:a.value3,"onUpdate:modelValue":e[4]||(e[4]=m=>a.value3=m),label:"Dark theme"},{thumb:l(()=>[t(y,null,{default:l(()=>[n(o(a.value3?"mdi mdi-weather-night":"mdi mdi-white-balance-sunny"),1)]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(r,{h2:""},{default:l(()=>e[31]||(e[31]=[n("Loading")])),_:1}),e[36]||(e[36]=i("p",null,`If a number is given it will be the value of the progress. If true is given, the progress will
be indefinitely spinning.`,-1)),t(u,{"content-class":"pt4"},{pug:l(()=>e[32]||(e[32]=[n(`w-switch.ma2(:model-value="true" :loading="43")
w-switch.ma2(:model-value="true" loading)`)])),html:l(()=>e[33]||(e[33]=[n(`<w-switch
  class="ma2"
  :model-value="true"
  :loading="43">
</w-switch>

<w-switch
  class="ma2"
  :model-value="true"
  loading>
</w-switch>`)])),default:l(()=>[t(s,{class:"ma2","model-value":!0,loading:43}),t(s,{class:"ma2","model-value":!0,loading:""})]),_:1})])}const x={data:()=>({value:!0,value2:!0,value3:!0})},T=p(x,[["render",D]]);function E(a,e,v,f,b,w){const r=d("title-link"),s=d("component-api");return c(),h("div",null,[e[1]||(e[1]=i("div",{class:"w-divider my12"},null,-1)),t(r,{class:"title1",h2:""},{default:l(()=>e[0]||(e[0]=[n("API")])),_:1}),t(s,{class:"mt0",items:w.props,descriptions:a.propsDescs,title:"Props"},null,8,["items","descriptions"]),t(s,{items:a.slots,title:"Slots"},null,8,["items"]),t(s,{items:w.events,title:"Events"},null,8,["items"])])}const S={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Dictates the state of the switch. When the user toggles the switch, the <code>v-model</code> value will be updated.',label:"Sets a visible label for the switch.",labelOnLeft:"Moves the label to the left of the switch. By default the label is displayed on the right.",color:'Applies a color to the switch. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',labelColor:`Applies a specific color to the switch's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,thin:"Applies a thiner style to the switch.",noRipple:"Removes the ripple animation on activation.",name:"Provide a native HTML <code>name</code> attribute to the switch. If not provided, a unique name will be computed.",disabled:"Disables the switch making it unreactive to user interactions.",readonly:"The switch will still look like an interactive switch except that it is read-only: its current state cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the switch.",validators:'<span class="deep-orange">Only for validation, when the switch is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the switch. Each function will be executed on switch   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the switch.',loading:"When set to <code>true</code>, displays an indefinite-value progress circle inside the switch thumb. If a number is given, it will be the value of the progress."},U={default:{description:"The switch label content, if the label prop is not flexible enough."},track:{description:"Optional switch track content."},thumb:{description:"Optional switch thumb content. Useful to place an icon or small text."}},I={input:{description:"Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"A boolean representing the current state of the switch."}},"update:modelValue":{description:"Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"A boolean representing the current state of the switch."}},focus:{description:"Emitted on switch focus.",params:{"[DOM event object]":"The associated focus DOM event."}}},M={data:()=>({propsDescs:S,slots:U}),computed:{props(){return{...g.props,...V.props}},events(){return g.emits.reduce((a,e)=>(a[e]=I[e]||{})&&a,{})}}},B=p(M,[["render",E]]);function C(a,e,v,f,b,w){const r=d("ui-component-title"),s=d("examples"),u=d("api");return c(),h("main",null,[t(r,null,{default:l(()=>e[0]||(e[0]=[n("w-switch")])),_:1}),t(s),t(u)])}const P={components:{Examples:T,Api:B}},L=p(P,[["render",C]]);export{L as default};
