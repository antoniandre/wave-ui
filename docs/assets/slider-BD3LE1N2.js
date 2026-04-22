import{H as e,N as t,c as n,d as r,g as i,h as a,k as o,vt as s}from"./runtime-core.esm-bundler-DPe36P4s.js";import{t as c}from"./_plugin-vue_export-helper-S3RvzygF.js";import{f as l}from"./index-CmUoOmTq.js";var u={class:`mt4`},d={class:`ml1`},f={class:`mt4`},p={class:`ml1`},m={class:`mt4`},h={class:`ml1`},g={class:`mt4`},_={class:`ml1`},v={class:`mt4`},y={class:`ml1`};function b(c,l,b,x,S,C){let w=t(`title-link`),T=t(`w-slider`),E=t(`example`),D=t(`w-button`),O=t(`w-flex`),k=t(`w-icon`);return o(),r(`div`,null,[i(w,{h2:``},{default:e(()=>[...l[8]||=[a(`Default`,-1)]]),_:1}),l[47]||=n(`p`,null,[a(`By default the range will have the `),n(`code`,null,`primary`),a(` color.`)],-1),i(E,{"content-class":`pa6`},{html:e(()=>[...l[9]||=[a(`<w-slider :model-value="50"></w-slider>
`,-1)]]),default:e(()=>[i(T,{"model-value":50})]),_:1}),i(w,{h2:``},{default:e(()=>[...l[10]||=[a(`V-model & external controls`,-1)]]),_:1}),i(E,{"content-class":`px6`},{html:e(()=>[...l[12]||=[a(`<w-flex align-center>
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
  <code class="ml1">`+s(`{{ sliderValue }}`)+`</code>
</div>`,-1)]]),js:e(()=>[...l[13]||=[a(`data: () => ({
  sliderValue: 50
})
`,-1)]]),default:e(()=>[i(O,{"align-center":``},{default:e(()=>[i(D,{onClick:l[0]||=e=>c.sliderValue-=5,icon:`wi-minus`,"bg-color":`success`,sm:``}),i(T,{class:`mx3 grow`,modelValue:c.sliderValue,"onUpdate:modelValue":l[1]||=e=>c.sliderValue=e,color:`green`},null,8,[`modelValue`]),i(D,{onClick:l[2]||=e=>c.sliderValue+=5,icon:`wi-plus`,"bg-color":`success`,sm:``})]),_:1}),n(`div`,u,[l[11]||=a(`v-model:`,-1),n(`code`,d,s(c.sliderValue),1)])]),_:1}),i(w,{h2:``},{default:e(()=>[...l[14]||=[a(`Min & max`,-1)]]),_:1}),i(E,{"content-class":`px6`},{html:e(()=>[...l[17]||=[a(`<div class="title4 mb4">From 4 to 5</div>
<w-slider
  v-model="sliderValue"
  :min="4"
  :max="5">
</w-slider>

<div class="mt4">
  v-model:
  <code class="ml1">`+s(`{{ sliderValue }}`)+`</code>
</div>

<div class="title4 mt8 mb4">From -10 to 10</div>
<w-slider
  v-model="slider2Value"
  :min="-10"
  :max="10">
</w-slider>

<div class="mt4">
  v-model:
  <code class="ml1">`+s(`{{ slider2Value }}`)+`</code>
</div>`,-1)]]),js:e(()=>[...l[18]||=[a(`data: () => ({
  sliderValue: 4.5,
  slider2Value: 0
})
`,-1)]]),default:e(()=>[l[19]||=n(`div`,{class:`title4 mb4`},`From 4 to 5`,-1),i(T,{modelValue:c.minMaxValue,"onUpdate:modelValue":l[3]||=e=>c.minMaxValue=e,min:4,max:5},null,8,[`modelValue`]),n(`div`,f,[l[15]||=a(`v-model:`,-1),n(`code`,p,s(c.minMaxValue),1)]),l[20]||=n(`div`,{class:`title4 mt8 mb4`},`From -10 to 10`,-1),i(T,{modelValue:c.minMaxValue2,"onUpdate:modelValue":l[4]||=e=>c.minMaxValue2=e,min:-10,max:10},null,8,[`modelValue`]),n(`div`,m,[l[16]||=a(`v-model:`,-1),n(`code`,h,s(c.minMaxValue2),1)])]),_:1}),i(w,{h2:``},{default:e(()=>[...l[21]||=[a(`Disabled & readonly`,-1)]]),_:1}),i(E,{"content-class":`px6`},{html:e(()=>[...l[22]||=[a(`<w-slider class="mt2" :model-value="50" disabled></w-slider>
<w-slider class="mt8" :model-value="50" readonly></w-slider>
`,-1)]]),default:e(()=>[i(T,{class:`mt2`,"model-value":50,disabled:``}),i(T,{class:`mt8`,"model-value":50,readonly:``})]),_:1}),i(w,{h2:``},{default:e(()=>[...l[23]||=[a(`Labels on the left & right`,-1)]]),_:1}),i(E,{"content-class":`px6`},{html:e(()=>[...l[28]||=[a(`<w-slider
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
`,-1)]]),default:e(()=>[i(T,{class:`mt2`,"model-value":50,"label-left":`0`,"label-right":`100`}),i(T,{class:`mt6`,"model-value":50,"label-left":`Left`}),i(T,{class:`mt6`,"model-value":50,"label-right":`Right`}),i(T,{class:`mt12`,"model-value":50},{"label-left":e(()=>[l[25]||=n(`span`,null,`Weight`,-1),i(k,{class:`ml2 green`},{default:e(()=>[...l[24]||=[a(`mdi mdi-feather`,-1)]]),_:1})]),"label-right":e(()=>[i(k,{class:`red`},{default:e(()=>[...l[26]||=[a(`mdi mdi-weight`,-1)]]),_:1}),i(k,{class:`red`},{default:e(()=>[...l[27]||=[a(`mdi mdi-weight`,-1)]]),_:1})]),_:1})]),_:1}),i(w,{h2:``},{default:e(()=>[...l[29]||=[a(`Thumb label`,-1)]]),_:1}),i(E,{"content-class":`pt12 px8`},{html:e(()=>[...l[30]||=[a(`<w-slider
  class="mt12"
  :model-value="24"
  thumb-label
  color="primary-light3">
</w-slider>
`,-1)]]),default:e(()=>[i(T,{class:`mb4`,"model-value":24,"thumb-label":``,color:`primary-light3`})]),_:1}),i(w,{h3:``,slug:`custom-label-with-label-slot`},{default:e(()=>[...l[31]||=[a(`Customize the label with the `,-1),n(`span`,{class:`code`},`label`,-1),a(` slot`,-1)]]),_:1}),i(E,{"content-class":`pt12 pb8 px8`},{html:e(()=>[...l[32]||=[a(`<w-slider
  class="ma12"
  :model-value="46.3"
  thumb-label
  color="primary-light3">
  <template #label="{ value }">
    `+s(`{{ parseInt(value * 10) / 10 }}`)+`%
  </template>
</w-slider>
`,-1)]]),default:e(()=>[i(T,{"model-value":46.3,"thumb-label":``,color:`primary-light3`},{label:e(({value:e})=>[a(s(~~(e*10)/10)+`%`,1)]),_:1})]),_:1}),i(w,{h3:``},{default:e(()=>[...l[33]||=[a(`Droplet style label`,-1)]]),_:1}),l[48]||=n(`p`,null,`With this option you can have a more modern look, but the drawback is that it can't contain long texts.`,-1),l[49]||=n(`p`,null,[a(`It is a breeze to override the droplet label size via CSS, this will suffice:`),n(`code`,null,`.w-slider {font-size: 1.4em}`)],-1),l[50]||=n(`p`,null,[a(`If you need you can also adjust the content font-size with:`),n(`code`,null,`.w-slider__thumb-label div {font-size: 2em;}`)],-1),l[51]||=n(`p`,null,[a(`It is also possible to add classes to the thumb label through the `),n(`code`,null,`thumb-label-class`),a(` option
to add a color for instance.`)],-1),i(E,{"content-class":`pt12 pl10 pr12`},{html:e(()=>[...l[34]||=[a(`<w-slider
  class="ma12"
  :model-value="30"
  thumb-label="droplet">
</w-slider>

<w-slider
  class="big-label.ma12"
  :model-value="60"
  thumb-label="droplet"
  thumb-label-class="info--bg">
</w-slider>`,-1)]]),css:e(()=>[...l[35]||=[a(`.big-label {font-size: 1.4em;}
`,-1)]]),default:e(()=>[i(T,{class:`mt2 mb12`,"model-value":30,"thumb-label":`droplet`}),i(T,{class:`big-label mt12 mb4`,"model-value":60,"thumb-label":`droplet`,"thumb-label-class":`info--bg`})]),_:1}),i(w,{h2:``},{default:e(()=>[...l[36]||=[a(`Steps`,-1)]]),_:1}),l[52]||=n(`p`,null,[a(`There is no step by default to ensure a very smooth movement while dragging. This also means that
the v-model will contain decimals.`),n(`br`),a(`
If you don't want to deal with decimals you can use the `),n(`code`,null,`step`),a(` option to make the slider only
stop on integer values.`)],-1),i(E,{"content-class":`px6`},{html:e(()=>[...l[39]||=[a(`<div class="title4 mb4">Step = 1</div>
<w-slider v-model="sliderValue" :step="1"></w-slider>
<div class="mt4">
  v-model:
  <code class="ml1">`+s(`{{ sliderValue }}`)+`</code>
</div>

<div class="title4 mt8 mb4">Step = 10</div>
<w-slider v-model="slider2Value" :step="10"></w-slider>
<div class="mt4">
  v-model:
  <code class="ml1">`+s(`{{ slider2Value }}`)+`</code>
</div>`,-1)]]),js:e(()=>[...l[40]||=[a(`data: () => ({
  sliderValue: 50,
  slider2Value: 50
})
`,-1)]]),default:e(()=>[l[41]||=n(`div`,{class:`title4 mb4`},`Step = 1`,-1),i(T,{modelValue:c.sliderStepsValue1,"onUpdate:modelValue":l[5]||=e=>c.sliderStepsValue1=e,step:1},null,8,[`modelValue`]),n(`div`,g,[l[37]||=a(`v-model:`,-1),n(`code`,_,s(c.sliderStepsValue1),1)]),l[42]||=n(`div`,{class:`title4 mt8 mb4`},`Step = 10`,-1),i(T,{modelValue:c.sliderStepsValue2,"onUpdate:modelValue":l[6]||=e=>c.sliderStepsValue2=e,step:10},null,8,[`modelValue`]),n(`div`,v,[l[38]||=a(`v-model:`,-1),n(`code`,y,s(c.sliderStepsValue2),1)])]),_:1}),i(w,{h2:``},{default:e(()=>[...l[43]||=[a(`Step labels`,-1)]]),_:1}),i(E,{"content-class":`px6`},{html:e(()=>[...l[44]||=[a(`<div class="title4 mb4">Default step labels</div>
<w-slider
  v-model="sliderValue"
  color="primary-light2"
  :step="20"
  step-labels>
</w-slider>`,-1)]]),js:e(()=>[...l[45]||=[a(`data: () => ({
  sliderValue: 40
})`,-1)]]),default:e(()=>[l[46]||=n(`div`,{class:`title4 mb4`},`Default step labels`,-1),i(T,{modelValue:c.sliderStepsValue3,"onUpdate:modelValue":l[7]||=e=>c.sliderStepsValue3=e,color:`primary-light2`,step:20,"step-labels":``},null,8,[`modelValue`])]),_:1})])}var x=c({data:()=>({sliderValue:50,minMaxValue:4.5,minMaxValue2:0,sliderStepsValue1:50,sliderStepsValue2:50,sliderStepsValue3:40,sliderStepsValue4:40,sliderStepsValue5:40})},[[`render`,b]]);function S(s,c,l,u,d,f){let p=t(`title-link`),m=t(`component-api`);return o(),r(`div`,null,[c[1]||=n(`div`,{class:`w-divider my12`},null,-1),i(p,{class:`title1`,h2:``},{default:e(()=>[...c[0]||=[a(`API`,-1)]]),_:1}),i(m,{class:`mt0`,items:f.props,descriptions:s.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),i(m,{items:s.slots,title:`Slots`},null,8,[`items`]),i(m,{items:f.events,title:`Events`},null,8,[`items`])])}var C={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>Dictates the range selection of the slider. When the user changes the range, the <code>v-model</code> value will be updated.`,color:`Applies a foreground color to the slider. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the slider's left and right labels. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a background color to the slider's track. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,stepLabels:`A Boolean to display or hide the labels of each steps under the slider.<br>A future version will allow passing an array of custom labels.`,thumblabel:`Sets a visible label for the slider.`,thumbLabelClass:`Applies a custom CSS class to the slider's thumb label.`,trackClass:`Applies a custom CSS class to the slider's track.`,rangeClass:`Applies a custom CSS class to the slider's highlighted range.`,step:`Sets an incremental/decremental integer or floating step number for the slider, e.g. <code>0.3</code>.`,min:`Sets an integer or floating minimum number for the slider.`,max:`Sets an integer or floating maximum number for the slider.`,labelLeft:`Defines a label to display on the left of the slider.`,labelRight:`Defines a label to display on the right of the slider.`,name:`Provide a native HTML <code>name</code> attribute to the slider. If not provided, a unique name will be computed.`,disabled:`Disables the slider making it unreactive to user interactions.`,readonly:`The slider will still look like an interactive slider except that it is read-only: its current value cannot be changed by user interaction.`,required:`Applies the native HTML <code>required</code> attribute to the slider.`,validators:`<span class="deep-orange">Only for validation, when the slider is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the slider. Each function will be executed on slider   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the slider.`},w={},T={input:{description:`Emitted each time the slider range changes.<br>Updates the v-model value in Vue 2.x only.`,params:{"[Number]":`The current value of the slider.`}},"update:modelValue":{description:`Emitted each time the slider range changes.<br>Updates the v-model value in Vue 3 only.`,params:{"[Number]":`The current value of the slider.`}},focus:{description:`Emitted when the slider is focused (the thumb button).`,params:{"[DOM event object]":`The associated focus DOM event.`}}},E=c({data:()=>({propsDescs:C,slots:w}),computed:{props(){return l.props},events(){return l.emits.reduce((e,t)=>(e[t]=T[t]||{})&&e,{})}}},[[`render`,S]]);function D(n,s,c,l,u,d){let f=t(`ui-component-title`),p=t(`examples`),m=t(`api`);return o(),r(`main`,null,[i(f,null,{default:e(()=>[...s[0]||=[a(`w-slider`,-1)]]),_:1}),i(p),i(m)])}var O=c({components:{Examples:x,Api:E}},[[`render`,D]]);export{O as default};