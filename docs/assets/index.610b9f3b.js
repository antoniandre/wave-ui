import{r as m,o as p,f as _,a as e,w as t,b as s,h as c,e as l,_ as b,bV as V}from"./index.d441c375.js";const S=l("Default"),x=s("p",null,[l("By default the range will have the "),s("code",null,"primary"),l(" color.")],-1),k=l(`<w-slider :model-value="50"></w-slider>
`),$=l("V-model & external controls"),A={class:"mt4"},C=l("v-model:"),D={class:"ml1"},M=l(`<w-flex align-center>
  <w-button
    @click="sliderValue -= 5"
    icon="wi-minus"
    bg-color="success"
    sm>
  </w-button>

  <w-slider
    class="mx3 grow"
    v-model="sliderValue"
    color="green">
  </w-slider>

  <w-button
    @click="sliderValue += 5"
    icon="wi-plus"
    bg-color="success"
    sm>
  </w-button>
</w-flex>

<div class="mt4">
  v-model:
  <code class="ml1">`+c("{{ sliderValue }}")+`</code>
</div>`),T=l(`data: () => ({
  sliderValue: 50
})
`),L=l("Min & max"),U=s("div",{class:"title4 mb4"},"From 4 to 5",-1),z={class:"mt4"},E=l("v-model:"),I={class:"ml1"},N=s("div",{class:"title4 mt8 mb4"},"From -10 to 10",-1),P={class:"mt4"},W=l("v-model:"),j={class:"ml1"},B=l(`<div class="title4 mb4">From 4 to 5</div>
<w-slider
  v-model="sliderValue"
  :min="4"
  :max="5">
</w-slider>

<div class="mt4">
  v-model:
  <code class="ml1">`+c("{{ sliderValue }}")+`</code>
</div>

<div class="title4 mt8 mb4">From -10 to 10</div>
<w-slider
  v-model="slider2Value"
  :min="-10"
  :max="10">
</w-slider>

<div class="mt4">
  v-model:
  <code class="ml1">`+c("{{ slider2Value }}")+`</code>
</div>`),F=l(`data: () => ({
  sliderValue: 4.5,
  slider2Value: 0
})
`),q=l("Disabled & readonly"),O=l(`<w-slider class="mt2" :model-value="50" disabled></w-slider>
<w-slider class="mt8" :model-value="50" readonly></w-slider>
`),R=l("Labels on the left & right"),H=s("span",null,"Weight",-1),G=l("mdi mdi-feather"),J=l("mdi mdi-weight"),K=l("mdi mdi-weight"),Q=l(`<w-slider
  class="mt2"
  :model-value="50"
  label-left="0"
  label-right="100">
</w-slider>

<w-slider
  class="mt6"
  :model-value="50"
  label-left="Left">
</w-slider>

<w-slider
  class="mt6"
  :model-value="50"
  label-right="Right">
</w-slider>

<w-slider
  class="mt12"
  :model-value="50">
  <template #label-left>
    <span>Weight</span>
    <w-icon class="ml2 green">mdi mdi-feather</w-icon>
  </template>
  <template #label-right>
    <w-icon class="red">mdi mdi-weight</w-icon>
    <w-icon class="red">mdi mdi-weight</w-icon>
  </template>
</w-slider>
`),X=l("Thumb label"),Y=l(`<w-slider
  class="mt12"
  :model-value="24"
  thumb-label
  color="primary-light3">
</w-slider>
`),Z=l("Customize the label with the "),ee=s("span",{class:"code"},"label",-1),le=l(" slot"),te=l("Droplet style label"),se=s("p",null,"With this option you can have a more modern look, but the drawback is that it can't contain long texts.",-1),oe=s("p",null,[l("It is a breeze to override the droplet label size via CSS, this will suffice:"),s("code",null,".w-slider {font-size: 1.4em}")],-1),ne=s("p",null,[l("If you need you can also adjust the content font-size with:"),s("code",null,".w-slider__thumb-label div {font-size: 2em;}")],-1),ae=s("p",null,[l("It is also possible to add classes to the thumb label through the "),s("code",null,"thumb-label-class"),l(` option
to add a color for instance.`)],-1),ie=l(`<w-slider
  class="ma12"
  :model-value="30"
  thumb-label="droplet">
</w-slider>

<w-slider
  class="big-label.ma12"
  :model-value="60"
  thumb-label="droplet"
  thumb-label-class="info--bg">
</w-slider>`),de=l(`.big-label {font-size: 1.4em;}
`),re=l("Steps"),ce=s("p",null,[l(`There is no step by default to ensure a very smooth movement while dragging. This also means that
the v-model will contain decimals.`),s("br"),l(`
If you don't want to deal with decimals you can use the `),s("code",null,"step"),l(` option to make the slider only
stop on integer values.`)],-1),me=s("div",{class:"title4 mb4"},"Step = 1",-1),ue={class:"mt4"},he=l("v-model:"),pe={class:"ml1"},_e=s("div",{class:"title4 mt8 mb4"},"Step = 10",-1),be={class:"mt4"},ve=l("v-model:"),fe={class:"ml1"},we=l(`<div class="title4 mb4">Step = 1</div>
<w-slider v-model="sliderValue" :step="1"></w-slider>
<div class="mt4">
  v-model:
  <code class="ml1">`+c("{{ sliderValue }}")+`</code>
</div>

<div class="title4 mt8 mb4">Step = 10</div>
<w-slider v-model="slider2Value" :step="10"></w-slider>
<div class="mt4">
  v-model:
  <code class="ml1">`+c("{{ slider2Value }}")+`</code>
</div>`),ge=l(`data: () => ({
  sliderValue: 50,
  slider2Value: 50
})
`),Ve=l("Step labels"),ye=s("div",{class:"title4 mb4"},"Default step labels",-1),Se=l(`<div class="title4 mb4">Default step labels</div>
<w-slider
  v-model="sliderValue"
  color="primary-light2"
  :step="20"
  step-labels>
</w-slider>`),xe=l(`data: () => ({
  sliderValue: 40
})`);function ke(o,a,v,f,w,u){const d=m("title-link"),n=m("w-slider"),r=m("example"),g=m("w-button"),y=m("w-flex"),h=m("w-icon");return p(),_("div",null,[e(d,{h2:""},{default:t(()=>[S]),_:1}),x,e(r,{"content-class":"pa6"},{html:t(()=>[k]),default:t(()=>[e(n,{"model-value":50})]),_:1}),e(d,{h2:""},{default:t(()=>[$]),_:1}),e(r,{"content-class":"px6"},{html:t(()=>[M]),js:t(()=>[T]),default:t(()=>[e(y,{"align-center":""},{default:t(()=>[e(g,{onClick:a[0]||(a[0]=i=>o.sliderValue-=5),icon:"wi-minus","bg-color":"success",sm:""}),e(n,{class:"mx3 grow",modelValue:o.sliderValue,"onUpdate:modelValue":a[1]||(a[1]=i=>o.sliderValue=i),color:"green"},null,8,["modelValue"]),e(g,{onClick:a[2]||(a[2]=i=>o.sliderValue+=5),icon:"wi-plus","bg-color":"success",sm:""})]),_:1}),s("div",A,[C,s("code",D,c(o.sliderValue),1)])]),_:1}),e(d,{h2:""},{default:t(()=>[L]),_:1}),e(r,{"content-class":"px6"},{html:t(()=>[B]),js:t(()=>[F]),default:t(()=>[U,e(n,{modelValue:o.minMaxValue,"onUpdate:modelValue":a[3]||(a[3]=i=>o.minMaxValue=i),min:4,max:5},null,8,["modelValue"]),s("div",z,[E,s("code",I,c(o.minMaxValue),1)]),N,e(n,{modelValue:o.minMaxValue2,"onUpdate:modelValue":a[4]||(a[4]=i=>o.minMaxValue2=i),min:-10,max:10},null,8,["modelValue"]),s("div",P,[W,s("code",j,c(o.minMaxValue2),1)])]),_:1}),e(d,{h2:""},{default:t(()=>[q]),_:1}),e(r,{"content-class":"px6"},{html:t(()=>[O]),default:t(()=>[e(n,{class:"mt2","model-value":50,disabled:""}),e(n,{class:"mt8","model-value":50,readonly:""})]),_:1}),e(d,{h2:""},{default:t(()=>[R]),_:1}),e(r,{"content-class":"px6"},{html:t(()=>[Q]),default:t(()=>[e(n,{class:"mt2","model-value":50,"label-left":"0","label-right":"100"}),e(n,{class:"mt6","model-value":50,"label-left":"Left"}),e(n,{class:"mt6","model-value":50,"label-right":"Right"}),e(n,{class:"mt12","model-value":50},{"label-left":t(()=>[H,e(h,{class:"ml2 green"},{default:t(()=>[G]),_:1})]),"label-right":t(()=>[e(h,{class:"red"},{default:t(()=>[J]),_:1}),e(h,{class:"red"},{default:t(()=>[K]),_:1})]),_:1})]),_:1}),e(d,{h2:""},{default:t(()=>[X]),_:1}),e(r,{"content-class":"pt12 px8"},{html:t(()=>[Y]),default:t(()=>[e(n,{class:"mb4","model-value":24,"thumb-label":"",color:"primary-light3"})]),_:1}),e(d,{h3:"",slug:"custom-label-with-label-slot"},{default:t(()=>[Z,ee,le]),_:1}),e(r,{"content-class":"pt12 pb8 px8"},{html:t(()=>[l(`<w-slider
  class="ma12"
  :model-value="46.3"
  thumb-label
  color="primary-light3">
  <template #label="{ value }">
    `+c("{{ parseInt(value * 10) / 10 }}")+`%
  </template>
</w-slider>
`,1)]),default:t(()=>[e(n,{"model-value":46.3,"thumb-label":"",color:"primary-light3"},{label:t(({value:i})=>[l(c(~~(i*10)/10)+"%",1)]),_:1},8,["model-value"])]),_:1}),e(d,{h3:""},{default:t(()=>[te]),_:1}),se,oe,ne,ae,e(r,{"content-class":"pt12 pl10 pr12"},{html:t(()=>[ie]),css:t(()=>[de]),default:t(()=>[e(n,{class:"mt2 mb12","model-value":30,"thumb-label":"droplet"}),e(n,{class:"big-label mt12 mb4","model-value":60,"thumb-label":"droplet","thumb-label-class":"info--bg"})]),_:1}),e(d,{h2:""},{default:t(()=>[re]),_:1}),ce,e(r,{"content-class":"px6"},{html:t(()=>[we]),js:t(()=>[ge]),default:t(()=>[me,e(n,{modelValue:o.sliderStepsValue1,"onUpdate:modelValue":a[5]||(a[5]=i=>o.sliderStepsValue1=i),step:1},null,8,["modelValue"]),s("div",ue,[he,s("code",pe,c(o.sliderStepsValue1),1)]),_e,e(n,{modelValue:o.sliderStepsValue2,"onUpdate:modelValue":a[6]||(a[6]=i=>o.sliderStepsValue2=i),step:10},null,8,["modelValue"]),s("div",be,[ve,s("code",fe,c(o.sliderStepsValue2),1)])]),_:1}),e(d,{h2:""},{default:t(()=>[Ve]),_:1}),e(r,{"content-class":"px6"},{html:t(()=>[Se]),js:t(()=>[xe]),default:t(()=>[ye,e(n,{modelValue:o.sliderStepsValue3,"onUpdate:modelValue":a[7]||(a[7]=i=>o.sliderStepsValue3=i),color:"primary-light2",step:20,"step-labels":""},null,8,["modelValue"])]),_:1})])}const $e={data:()=>({sliderValue:50,minMaxValue:4.5,minMaxValue2:0,sliderStepsValue1:50,sliderStepsValue2:50,sliderStepsValue3:40,sliderStepsValue4:40,sliderStepsValue5:40})};var Ae=b($e,[["render",ke]]);const Ce=s("div",{class:"w-divider my12"},null,-1),De=l("API");function Me(o,a,v,f,w,u){const d=m("title-link"),n=m("component-api");return p(),_("div",null,[Ce,e(d,{class:"title1",h2:""},{default:t(()=>[De]),_:1}),e(n,{class:"mt0",items:u.props,descriptions:o.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(n,{items:o.slots,title:"Slots"},null,8,["items"]),e(n,{items:u.events,title:"Events"},null,8,["items"])])}const Te={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Dictates the range selection of the slider. When the user changes the range, the <code>v-model</code> value will be updated.',color:'Applies a foreground color to the slider. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',labelColor:`Applies a specific color to the slider's left and right labels. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a background color to the slider's track. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,stepLabels:"A Boolean to display or hide the labels of each steps under the slider.<br>A future version will allow passing an array of custom labels.",thumblabel:"Sets a visible label for the slider.",thumbLabelClass:"Applies a custom CSS class to the slider's thumb label.",trackClass:"Applies a custom CSS class to the slider's track.",rangeClass:"Applies a custom CSS class to the slider's highlighted range.",step:"Sets an incremental/decremental integer or floating step number for the slider, e.g. <code>0.3</code>.",min:"Sets an integer or floating minimum number for the slider.",max:"Sets an integer or floating maximum number for the slider.",labelLeft:"Defines a label to display on the left of the slider.",labelRight:"Defines a label to display on the right of the slider.",name:"Provide a native HTML <code>name</code> attribute to the slider. If not provided, a unique name will be computed.",disabled:"Disables the slider making it unreactive to user interactions.",readonly:"The slider will still look like an interactive slider except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the slider.",validators:'<span class="deep-orange">Only for validation, when the slider is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the slider. Each function will be executed on slider   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the slider.'},Le={},Ue={input:{description:"Emitted each time the slider range changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Number]":"The current value of the slider."}},"update:modelValue":{description:"Emitted each time the slider range changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Number]":"The current value of the slider."}},focus:{description:"Emitted when the slider is focused (the thumb button).",params:{"[DOM event object]":"The associated focus DOM event."}}},ze={data:()=>({propsDescs:Te,slots:Le}),computed:{props(){return V.props},events(){return V.emits.reduce((o,a)=>(o[a]=Ue[a]||{})&&o,{})}}};var Ee=b(ze,[["render",Me]]);const Ie=l("w-slider");function Ne(o,a,v,f,w,u){const d=m("ui-component-title"),n=m("examples"),r=m("api");return p(),_("main",null,[e(d,null,{default:t(()=>[Ie]),_:1}),e(n),e(r)])}const Pe={components:{Examples:Ae,Api:Ee}};var je=b(Pe,[["render",Ne]]);export{je as default};
