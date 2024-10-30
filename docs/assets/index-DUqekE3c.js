import{r as u,o as v,g as f,a as l,w as s,b as t,d as o,t as m,_ as w,a3 as y}from"./index-CM5cc9pa.js";const x={class:"mt4"},k={class:"ml1"},$={class:"mt4"},A={class:"ml1"},C={class:"mt4"},D={class:"ml1"},M={class:"mt4"},T={class:"ml1"},L={class:"mt4"},U={class:"ml1"};function z(n,e,g,c,h,p){const d=u("title-link"),i=u("w-slider"),r=u("example"),V=u("w-button"),S=u("w-flex"),b=u("w-icon");return v(),f("div",null,[l(d,{h2:""},{default:s(()=>e[8]||(e[8]=[t("Default")])),_:1}),e[47]||(e[47]=o("p",null,[t("By default the range will have the "),o("code",null,"primary"),t(" color.")],-1)),l(r,{"content-class":"pa6"},{html:s(()=>e[9]||(e[9]=[t(`<w-slider :model-value="50"></w-slider>
`)])),default:s(()=>[l(i,{"model-value":50})]),_:1}),l(d,{h2:""},{default:s(()=>e[10]||(e[10]=[t("V-model & external controls")])),_:1}),l(r,{"content-class":"px6"},{html:s(()=>e[12]||(e[12]=[t(`<w-flex align-center>
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
  <code class="ml1">`+m("{{ sliderValue }}")+`</code>
</div>`)])),js:s(()=>e[13]||(e[13]=[t(`data: () => ({
  sliderValue: 50
})
`)])),default:s(()=>[l(S,{"align-center":""},{default:s(()=>[l(V,{onClick:e[0]||(e[0]=a=>n.sliderValue-=5),icon:"wi-minus","bg-color":"success",sm:""}),l(i,{class:"mx3 grow",modelValue:n.sliderValue,"onUpdate:modelValue":e[1]||(e[1]=a=>n.sliderValue=a),color:"green"},null,8,["modelValue"]),l(V,{onClick:e[2]||(e[2]=a=>n.sliderValue+=5),icon:"wi-plus","bg-color":"success",sm:""})]),_:1}),o("div",x,[e[11]||(e[11]=t("v-model:")),o("code",k,m(n.sliderValue),1)])]),_:1}),l(d,{h2:""},{default:s(()=>e[14]||(e[14]=[t("Min & max")])),_:1}),l(r,{"content-class":"px6"},{html:s(()=>e[17]||(e[17]=[t(`<div class="title4 mb4">From 4 to 5</div>
<w-slider
  v-model="sliderValue"
  :min="4"
  :max="5">
</w-slider>

<div class="mt4">
  v-model:
  <code class="ml1">`+m("{{ sliderValue }}")+`</code>
</div>

<div class="title4 mt8 mb4">From -10 to 10</div>
<w-slider
  v-model="slider2Value"
  :min="-10"
  :max="10">
</w-slider>

<div class="mt4">
  v-model:
  <code class="ml1">`+m("{{ slider2Value }}")+`</code>
</div>`)])),js:s(()=>e[18]||(e[18]=[t(`data: () => ({
  sliderValue: 4.5,
  slider2Value: 0
})
`)])),default:s(()=>[e[19]||(e[19]=o("div",{class:"title4 mb4"},"From 4 to 5",-1)),l(i,{modelValue:n.minMaxValue,"onUpdate:modelValue":e[3]||(e[3]=a=>n.minMaxValue=a),min:4,max:5},null,8,["modelValue"]),o("div",$,[e[15]||(e[15]=t("v-model:")),o("code",A,m(n.minMaxValue),1)]),e[20]||(e[20]=o("div",{class:"title4 mt8 mb4"},"From -10 to 10",-1)),l(i,{modelValue:n.minMaxValue2,"onUpdate:modelValue":e[4]||(e[4]=a=>n.minMaxValue2=a),min:-10,max:10},null,8,["modelValue"]),o("div",C,[e[16]||(e[16]=t("v-model:")),o("code",D,m(n.minMaxValue2),1)])]),_:1}),l(d,{h2:""},{default:s(()=>e[21]||(e[21]=[t("Disabled & readonly")])),_:1}),l(r,{"content-class":"px6"},{html:s(()=>e[22]||(e[22]=[t(`<w-slider class="mt2" :model-value="50" disabled></w-slider>
<w-slider class="mt8" :model-value="50" readonly></w-slider>
`)])),default:s(()=>[l(i,{class:"mt2","model-value":50,disabled:""}),l(i,{class:"mt8","model-value":50,readonly:""})]),_:1}),l(d,{h2:""},{default:s(()=>e[23]||(e[23]=[t("Labels on the left & right")])),_:1}),l(r,{"content-class":"px6"},{html:s(()=>e[28]||(e[28]=[t(`<w-slider
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
`)])),default:s(()=>[l(i,{class:"mt2","model-value":50,"label-left":"0","label-right":"100"}),l(i,{class:"mt6","model-value":50,"label-left":"Left"}),l(i,{class:"mt6","model-value":50,"label-right":"Right"}),l(i,{class:"mt12","model-value":50},{"label-left":s(()=>[e[25]||(e[25]=o("span",null,"Weight",-1)),l(b,{class:"ml2 green"},{default:s(()=>e[24]||(e[24]=[t("mdi mdi-feather")])),_:1})]),"label-right":s(()=>[l(b,{class:"red"},{default:s(()=>e[26]||(e[26]=[t("mdi mdi-weight")])),_:1}),l(b,{class:"red"},{default:s(()=>e[27]||(e[27]=[t("mdi mdi-weight")])),_:1})]),_:1})]),_:1}),l(d,{h2:""},{default:s(()=>e[29]||(e[29]=[t("Thumb label")])),_:1}),l(r,{"content-class":"pt12 px8"},{html:s(()=>e[30]||(e[30]=[t(`<w-slider
  class="mt12"
  :model-value="24"
  thumb-label
  color="primary-light3">
</w-slider>
`)])),default:s(()=>[l(i,{class:"mb4","model-value":24,"thumb-label":"",color:"primary-light3"})]),_:1}),l(d,{h3:"",slug:"custom-label-with-label-slot"},{default:s(()=>e[31]||(e[31]=[t("Customize the label with the "),o("span",{class:"code"},"label",-1),t(" slot")])),_:1}),l(r,{"content-class":"pt12 pb8 px8"},{html:s(()=>e[32]||(e[32]=[t(`<w-slider
  class="ma12"
  :model-value="46.3"
  thumb-label
  color="primary-light3">
  <template #label="{ value }">
    `+m("{{ parseInt(value * 10) / 10 }}")+`%
  </template>
</w-slider>
`)])),default:s(()=>[l(i,{"model-value":46.3,"thumb-label":"",color:"primary-light3"},{label:s(({value:a})=>[t(m(~~(a*10)/10)+"%",1)]),_:1})]),_:1}),l(d,{h3:""},{default:s(()=>e[33]||(e[33]=[t("Droplet style label")])),_:1}),e[48]||(e[48]=o("p",null,"With this option you can have a more modern look, but the drawback is that it can't contain long texts.",-1)),e[49]||(e[49]=o("p",null,[t("It is a breeze to override the droplet label size via CSS, this will suffice:"),o("code",null,".w-slider {font-size: 1.4em}")],-1)),e[50]||(e[50]=o("p",null,[t("If you need you can also adjust the content font-size with:"),o("code",null,".w-slider__thumb-label div {font-size: 2em;}")],-1)),e[51]||(e[51]=o("p",null,[t("It is also possible to add classes to the thumb label through the "),o("code",null,"thumb-label-class"),t(` option
to add a color for instance.`)],-1)),l(r,{"content-class":"pt12 pl10 pr12"},{html:s(()=>e[34]||(e[34]=[t(`<w-slider
  class="ma12"
  :model-value="30"
  thumb-label="droplet">
</w-slider>

<w-slider
  class="big-label.ma12"
  :model-value="60"
  thumb-label="droplet"
  thumb-label-class="info--bg">
</w-slider>`)])),css:s(()=>e[35]||(e[35]=[t(`.big-label {font-size: 1.4em;}
`)])),default:s(()=>[l(i,{class:"mt2 mb12","model-value":30,"thumb-label":"droplet"}),l(i,{class:"big-label mt12 mb4","model-value":60,"thumb-label":"droplet","thumb-label-class":"info--bg"})]),_:1}),l(d,{h2:""},{default:s(()=>e[36]||(e[36]=[t("Steps")])),_:1}),e[52]||(e[52]=o("p",null,[t(`There is no step by default to ensure a very smooth movement while dragging. This also means that
the v-model will contain decimals.`),o("br"),t(`
If you don't want to deal with decimals you can use the `),o("code",null,"step"),t(` option to make the slider only
stop on integer values.`)],-1)),l(r,{"content-class":"px6"},{html:s(()=>e[39]||(e[39]=[t(`<div class="title4 mb4">Step = 1</div>
<w-slider v-model="sliderValue" :step="1"></w-slider>
<div class="mt4">
  v-model:
  <code class="ml1">`+m("{{ sliderValue }}")+`</code>
</div>

<div class="title4 mt8 mb4">Step = 10</div>
<w-slider v-model="slider2Value" :step="10"></w-slider>
<div class="mt4">
  v-model:
  <code class="ml1">`+m("{{ slider2Value }}")+`</code>
</div>`)])),js:s(()=>e[40]||(e[40]=[t(`data: () => ({
  sliderValue: 50,
  slider2Value: 50
})
`)])),default:s(()=>[e[41]||(e[41]=o("div",{class:"title4 mb4"},"Step = 1",-1)),l(i,{modelValue:n.sliderStepsValue1,"onUpdate:modelValue":e[5]||(e[5]=a=>n.sliderStepsValue1=a),step:1},null,8,["modelValue"]),o("div",M,[e[37]||(e[37]=t("v-model:")),o("code",T,m(n.sliderStepsValue1),1)]),e[42]||(e[42]=o("div",{class:"title4 mt8 mb4"},"Step = 10",-1)),l(i,{modelValue:n.sliderStepsValue2,"onUpdate:modelValue":e[6]||(e[6]=a=>n.sliderStepsValue2=a),step:10},null,8,["modelValue"]),o("div",L,[e[38]||(e[38]=t("v-model:")),o("code",U,m(n.sliderStepsValue2),1)])]),_:1}),l(d,{h2:""},{default:s(()=>e[43]||(e[43]=[t("Step labels")])),_:1}),l(r,{"content-class":"px6"},{html:s(()=>e[44]||(e[44]=[t(`<div class="title4 mb4">Default step labels</div>
<w-slider
  v-model="sliderValue"
  color="primary-light2"
  :step="20"
  step-labels>
</w-slider>`)])),js:s(()=>e[45]||(e[45]=[t(`data: () => ({
  sliderValue: 40
})`)])),default:s(()=>[e[46]||(e[46]=o("div",{class:"title4 mb4"},"Default step labels",-1)),l(i,{modelValue:n.sliderStepsValue3,"onUpdate:modelValue":e[7]||(e[7]=a=>n.sliderStepsValue3=a),color:"primary-light2",step:20,"step-labels":""},null,8,["modelValue"])]),_:1})])}const E={data:()=>({sliderValue:50,minMaxValue:4.5,minMaxValue2:0,sliderStepsValue1:50,sliderStepsValue2:50,sliderStepsValue3:40,sliderStepsValue4:40,sliderStepsValue5:40})},I=w(E,[["render",z]]);function N(n,e,g,c,h,p){const d=u("title-link"),i=u("component-api");return v(),f("div",null,[e[1]||(e[1]=o("div",{class:"w-divider my12"},null,-1)),l(d,{class:"title1",h2:""},{default:s(()=>e[0]||(e[0]=[t("API")])),_:1}),l(i,{class:"mt0",items:p.props,descriptions:n.propsDescs,title:"Props"},null,8,["items","descriptions"]),l(i,{items:n.slots,title:"Slots"},null,8,["items"]),l(i,{items:p.events,title:"Events"},null,8,["items"])])}const P={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Dictates the range selection of the slider. When the user changes the range, the <code>v-model</code> value will be updated.',color:'Applies a foreground color to the slider. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',labelColor:`Applies a specific color to the slider's left and right labels. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a background color to the slider's track. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,stepLabels:"A Boolean to display or hide the labels of each steps under the slider.<br>A future version will allow passing an array of custom labels.",thumblabel:"Sets a visible label for the slider.",thumbLabelClass:"Applies a custom CSS class to the slider's thumb label.",trackClass:"Applies a custom CSS class to the slider's track.",rangeClass:"Applies a custom CSS class to the slider's highlighted range.",step:"Sets an incremental/decremental integer or floating step number for the slider, e.g. <code>0.3</code>.",min:"Sets an integer or floating minimum number for the slider.",max:"Sets an integer or floating maximum number for the slider.",labelLeft:"Defines a label to display on the left of the slider.",labelRight:"Defines a label to display on the right of the slider.",name:"Provide a native HTML <code>name</code> attribute to the slider. If not provided, a unique name will be computed.",disabled:"Disables the slider making it unreactive to user interactions.",readonly:"The slider will still look like an interactive slider except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the slider.",validators:'<span class="deep-orange">Only for validation, when the slider is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the slider. Each function will be executed on slider   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the slider.'},W={},j={input:{description:"Emitted each time the slider range changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Number]":"The current value of the slider."}},"update:modelValue":{description:"Emitted each time the slider range changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Number]":"The current value of the slider."}},focus:{description:"Emitted when the slider is focused (the thumb button).",params:{"[DOM event object]":"The associated focus DOM event."}}},B={data:()=>({propsDescs:P,slots:W}),computed:{props(){return y.props},events(){return y.emits.reduce((n,e)=>(n[e]=j[e]||{})&&n,{})}}},F=w(B,[["render",N]]);function q(n,e,g,c,h,p){const d=u("ui-component-title"),i=u("examples"),r=u("api");return v(),f("main",null,[l(d,null,{default:s(()=>e[0]||(e[0]=[t("w-slider")])),_:1}),l(i),l(r)])}const O={components:{Examples:I,Api:F}},H=w(O,[["render",q]]);export{H as default};
