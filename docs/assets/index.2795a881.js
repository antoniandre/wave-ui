import{r as m,o as h,g as b,a as e,w as t,b as l,t as c,d as s,_ as v,a4 as V}from"./index.bf2cfd71.js";const S=s("p",null,[l("By default the range will have the "),s("code",null,"primary"),l(" color.")],-1),x={class:"mt4"},k={class:"ml1"},$=s("div",{class:"title4 mb4"},"From 4 to 5",-1),A={class:"mt4"},C={class:"ml1"},D=s("div",{class:"title4 mt8 mb4"},"From -10 to 10",-1),M={class:"mt4"},T={class:"ml1"},L=s("span",null,"Weight",-1),U=s("span",{class:"code"},"label",-1),z=s("p",null,"With this option you can have a more modern look, but the drawback is that it can't contain long texts.",-1),E=s("p",null,[l("It is a breeze to override the droplet label size via CSS, this will suffice:"),s("code",null,".w-slider {font-size: 1.4em}")],-1),I=s("p",null,[l("If you need you can also adjust the content font-size with:"),s("code",null,".w-slider__thumb-label div {font-size: 2em;}")],-1),N=s("p",null,[l("It is also possible to add classes to the thumb label through the "),s("code",null,"thumb-label-class"),l(` option
to add a color for instance.`)],-1),P=s("p",null,[l(`There is no step by default to ensure a very smooth movement while dragging. This also means that
the v-model will contain decimals.`),s("br"),l(`
If you don't want to deal with decimals you can use the `),s("code",null,"step"),l(` option to make the slider only
stop on integer values.`)],-1),W=s("div",{class:"title4 mb4"},"Step = 1",-1),j={class:"mt4"},B={class:"ml1"},F=s("div",{class:"title4 mt8 mb4"},"Step = 10",-1),q={class:"mt4"},O={class:"ml1"},R=s("div",{class:"title4 mb4"},"Default step labels",-1);function H(o,n,f,w,g,u){const d=m("title-link"),a=m("w-slider"),r=m("example"),_=m("w-button"),y=m("w-flex"),p=m("w-icon");return h(),b("div",null,[e(d,{h2:""},{default:t(()=>[l("Default")]),_:1}),S,e(r,{"content-class":"pa6"},{html:t(()=>[l(`<w-slider :model-value="50"></w-slider>
`)]),default:t(()=>[e(a,{"model-value":50})]),_:1}),e(d,{h2:""},{default:t(()=>[l("V-model & external controls")]),_:1}),e(r,{"content-class":"px6"},{html:t(()=>[l(`<w-flex align-center>
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
</div>`)]),js:t(()=>[l(`data: () => ({
  sliderValue: 50
})
`)]),default:t(()=>[e(y,{"align-center":""},{default:t(()=>[e(_,{onClick:n[0]||(n[0]=i=>o.sliderValue-=5),icon:"wi-minus","bg-color":"success",sm:""}),e(a,{class:"mx3 grow",modelValue:o.sliderValue,"onUpdate:modelValue":n[1]||(n[1]=i=>o.sliderValue=i),color:"green"},null,8,["modelValue"]),e(_,{onClick:n[2]||(n[2]=i=>o.sliderValue+=5),icon:"wi-plus","bg-color":"success",sm:""})]),_:1}),s("div",x,[l("v-model:"),s("code",k,c(o.sliderValue),1)])]),_:1}),e(d,{h2:""},{default:t(()=>[l("Min & max")]),_:1}),e(r,{"content-class":"px6"},{html:t(()=>[l(`<div class="title4 mb4">From 4 to 5</div>
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
</div>`)]),js:t(()=>[l(`data: () => ({
  sliderValue: 4.5,
  slider2Value: 0
})
`)]),default:t(()=>[$,e(a,{modelValue:o.minMaxValue,"onUpdate:modelValue":n[3]||(n[3]=i=>o.minMaxValue=i),min:4,max:5},null,8,["modelValue"]),s("div",A,[l("v-model:"),s("code",C,c(o.minMaxValue),1)]),D,e(a,{modelValue:o.minMaxValue2,"onUpdate:modelValue":n[4]||(n[4]=i=>o.minMaxValue2=i),min:-10,max:10},null,8,["modelValue"]),s("div",M,[l("v-model:"),s("code",T,c(o.minMaxValue2),1)])]),_:1}),e(d,{h2:""},{default:t(()=>[l("Disabled & readonly")]),_:1}),e(r,{"content-class":"px6"},{html:t(()=>[l(`<w-slider class="mt2" :model-value="50" disabled></w-slider>
<w-slider class="mt8" :model-value="50" readonly></w-slider>
`)]),default:t(()=>[e(a,{class:"mt2","model-value":50,disabled:""}),e(a,{class:"mt8","model-value":50,readonly:""})]),_:1}),e(d,{h2:""},{default:t(()=>[l("Labels on the left & right")]),_:1}),e(r,{"content-class":"px6"},{html:t(()=>[l(`<w-slider
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
`)]),default:t(()=>[e(a,{class:"mt2","model-value":50,"label-left":"0","label-right":"100"}),e(a,{class:"mt6","model-value":50,"label-left":"Left"}),e(a,{class:"mt6","model-value":50,"label-right":"Right"}),e(a,{class:"mt12","model-value":50},{"label-left":t(()=>[L,e(p,{class:"ml2 green"},{default:t(()=>[l("mdi mdi-feather")]),_:1})]),"label-right":t(()=>[e(p,{class:"red"},{default:t(()=>[l("mdi mdi-weight")]),_:1}),e(p,{class:"red"},{default:t(()=>[l("mdi mdi-weight")]),_:1})]),_:1})]),_:1}),e(d,{h2:""},{default:t(()=>[l("Thumb label")]),_:1}),e(r,{"content-class":"pt12 px8"},{html:t(()=>[l(`<w-slider
  class="mt12"
  :model-value="24"
  thumb-label
  color="primary-light3">
</w-slider>
`)]),default:t(()=>[e(a,{class:"mb4","model-value":24,"thumb-label":"",color:"primary-light3"})]),_:1}),e(d,{h3:"",slug:"custom-label-with-label-slot"},{default:t(()=>[l("Customize the label with the "),U,l(" slot")]),_:1}),e(r,{"content-class":"pt12 pb8 px8"},{html:t(()=>[l(`<w-slider
  class="ma12"
  :model-value="46.3"
  thumb-label
  color="primary-light3">
  <template #label="{ value }">
    `+c("{{ parseInt(value * 10) / 10 }}")+`%
  </template>
</w-slider>
`,1)]),default:t(()=>[e(a,{"model-value":46.3,"thumb-label":"",color:"primary-light3"},{label:t(({value:i})=>[l(c(~~(i*10)/10)+"%",1)]),_:1})]),_:1}),e(d,{h3:""},{default:t(()=>[l("Droplet style label")]),_:1}),z,E,I,N,e(r,{"content-class":"pt12 pl10 pr12"},{html:t(()=>[l(`<w-slider
  class="ma12"
  :model-value="30"
  thumb-label="droplet">
</w-slider>

<w-slider
  class="big-label.ma12"
  :model-value="60"
  thumb-label="droplet"
  thumb-label-class="info--bg">
</w-slider>`)]),css:t(()=>[l(`.big-label {font-size: 1.4em;}
`)]),default:t(()=>[e(a,{class:"mt2 mb12","model-value":30,"thumb-label":"droplet"}),e(a,{class:"big-label mt12 mb4","model-value":60,"thumb-label":"droplet","thumb-label-class":"info--bg"})]),_:1}),e(d,{h2:""},{default:t(()=>[l("Steps")]),_:1}),P,e(r,{"content-class":"px6"},{html:t(()=>[l(`<div class="title4 mb4">Step = 1</div>
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
</div>`)]),js:t(()=>[l(`data: () => ({
  sliderValue: 50,
  slider2Value: 50
})
`)]),default:t(()=>[W,e(a,{modelValue:o.sliderStepsValue1,"onUpdate:modelValue":n[5]||(n[5]=i=>o.sliderStepsValue1=i),step:1},null,8,["modelValue"]),s("div",j,[l("v-model:"),s("code",B,c(o.sliderStepsValue1),1)]),F,e(a,{modelValue:o.sliderStepsValue2,"onUpdate:modelValue":n[6]||(n[6]=i=>o.sliderStepsValue2=i),step:10},null,8,["modelValue"]),s("div",q,[l("v-model:"),s("code",O,c(o.sliderStepsValue2),1)])]),_:1}),e(d,{h2:""},{default:t(()=>[l("Step labels")]),_:1}),e(r,{"content-class":"px6"},{html:t(()=>[l(`<div class="title4 mb4">Default step labels</div>
<w-slider
  v-model="sliderValue"
  color="primary-light2"
  :step="20"
  step-labels>
</w-slider>`)]),js:t(()=>[l(`data: () => ({
  sliderValue: 40
})`)]),default:t(()=>[R,e(a,{modelValue:o.sliderStepsValue3,"onUpdate:modelValue":n[7]||(n[7]=i=>o.sliderStepsValue3=i),color:"primary-light2",step:20,"step-labels":""},null,8,["modelValue"])]),_:1})])}const G={data:()=>({sliderValue:50,minMaxValue:4.5,minMaxValue2:0,sliderStepsValue1:50,sliderStepsValue2:50,sliderStepsValue3:40,sliderStepsValue4:40,sliderStepsValue5:40})},J=v(G,[["render",H]]),K=s("div",{class:"w-divider my12"},null,-1);function Q(o,n,f,w,g,u){const d=m("title-link"),a=m("component-api");return h(),b("div",null,[K,e(d,{class:"title1",h2:""},{default:t(()=>[l("API")]),_:1}),e(a,{class:"mt0",items:u.props,descriptions:o.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(a,{items:o.slots,title:"Slots"},null,8,["items"]),e(a,{items:u.events,title:"Events"},null,8,["items"])])}const X={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Dictates the range selection of the slider. When the user changes the range, the <code>v-model</code> value will be updated.',color:'Applies a foreground color to the slider. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',labelColor:`Applies a specific color to the slider's left and right labels. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a background color to the slider's track. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,stepLabels:"A Boolean to display or hide the labels of each steps under the slider.<br>A future version will allow passing an array of custom labels.",thumblabel:"Sets a visible label for the slider.",thumbLabelClass:"Applies a custom CSS class to the slider's thumb label.",trackClass:"Applies a custom CSS class to the slider's track.",rangeClass:"Applies a custom CSS class to the slider's highlighted range.",step:"Sets an incremental/decremental integer or floating step number for the slider, e.g. <code>0.3</code>.",min:"Sets an integer or floating minimum number for the slider.",max:"Sets an integer or floating maximum number for the slider.",labelLeft:"Defines a label to display on the left of the slider.",labelRight:"Defines a label to display on the right of the slider.",name:"Provide a native HTML <code>name</code> attribute to the slider. If not provided, a unique name will be computed.",disabled:"Disables the slider making it unreactive to user interactions.",readonly:"The slider will still look like an interactive slider except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the slider.",validators:'<span class="deep-orange">Only for validation, when the slider is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the slider. Each function will be executed on slider   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the slider.'},Y={},Z={input:{description:"Emitted each time the slider range changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Number]":"The current value of the slider."}},"update:modelValue":{description:"Emitted each time the slider range changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Number]":"The current value of the slider."}},focus:{description:"Emitted when the slider is focused (the thumb button).",params:{"[DOM event object]":"The associated focus DOM event."}}},ee={data:()=>({propsDescs:X,slots:Y}),computed:{props(){return V.props},events(){return V.emits.reduce((o,n)=>(o[n]=Z[n]||{})&&o,{})}}},le=v(ee,[["render",Q]]);function te(o,n,f,w,g,u){const d=m("ui-component-title"),a=m("examples"),r=m("api");return h(),b("main",null,[e(d,null,{default:t(()=>[l("w-slider")]),_:1}),e(a),e(r)])}const se={components:{Examples:J,Api:le}},ae=v(se,[["render",te]]);export{ae as default};
