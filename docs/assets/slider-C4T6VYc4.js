import{N as e,W as t,bt as n,c as r,d as i,g as a,h as o,k as s}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as c}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{F as l,f as u}from"./index-DH7838aH.js";var d={class:`mt4`},f={class:`ml1`},p={class:`mt4`},m={class:`ml1`},h={class:`mt4`},g={class:`ml1`},_={class:`mt4`},v={class:`ml1`},y={class:`mt4`},b={class:`ml1`};function x(c,l,u,x,S,C){let w=e(`title-link`),T=e(`w-slider`),E=e(`example`),D=e(`w-button`),O=e(`w-flex`),k=e(`w-icon`);return s(),i(`div`,null,[a(w,{h2:``},{default:t(()=>[...l[8]||=[o(`Default`,-1)]]),_:1}),l[47]||=r(`p`,null,[o(`By default the range will have the `),r(`code`,null,`primary`),o(` color.`)],-1),a(E,{"content-class":`pa6`},{html:t(()=>[...l[9]||=[o(`<w-slider :model-value="50"></w-slider>
`,-1)]]),default:t(()=>[a(T,{"model-value":50})]),_:1}),a(w,{h2:``},{default:t(()=>[...l[10]||=[o(`V-model & external controls`,-1)]]),_:1}),a(E,{"content-class":`px6`},{html:t(()=>[...l[12]||=[o(`<w-flex align-center>
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
  <code class="ml1">`+n(`{{ sliderValue }}`)+`</code>
</div>`,-1)]]),js:t(()=>[...l[13]||=[o(`data: () => ({
  sliderValue: 50
})
`,-1)]]),default:t(()=>[a(O,{"align-center":``},{default:t(()=>[a(D,{onClick:l[0]||=e=>c.sliderValue-=5,icon:`wi-minus`,"bg-color":`success`,sm:``}),a(T,{class:`mx3 grow`,modelValue:c.sliderValue,"onUpdate:modelValue":l[1]||=e=>c.sliderValue=e,color:`green`},null,8,[`modelValue`]),a(D,{onClick:l[2]||=e=>c.sliderValue+=5,icon:`wi-plus`,"bg-color":`success`,sm:``})]),_:1}),r(`div`,d,[l[11]||=o(`v-model:`,-1),r(`code`,f,n(c.sliderValue),1)])]),_:1}),a(w,{h2:``},{default:t(()=>[...l[14]||=[o(`Min & max`,-1)]]),_:1}),a(E,{"content-class":`px6`},{html:t(()=>[...l[17]||=[o(`<div class="title4 mb4">From 4 to 5</div>
<w-slider
  v-model="sliderValue"
  :min="4"
  :max="5">
</w-slider>

<div class="mt4">
  v-model:
  <code class="ml1">`+n(`{{ sliderValue }}`)+`</code>
</div>

<div class="title4 mt8 mb4">From -10 to 10</div>
<w-slider
  v-model="slider2Value"
  :min="-10"
  :max="10">
</w-slider>

<div class="mt4">
  v-model:
  <code class="ml1">`+n(`{{ slider2Value }}`)+`</code>
</div>`,-1)]]),js:t(()=>[...l[18]||=[o(`data: () => ({
  sliderValue: 4.5,
  slider2Value: 0
})
`,-1)]]),default:t(()=>[l[19]||=r(`div`,{class:`title4 mb4`},`From 4 to 5`,-1),a(T,{modelValue:c.minMaxValue,"onUpdate:modelValue":l[3]||=e=>c.minMaxValue=e,min:4,max:5},null,8,[`modelValue`]),r(`div`,p,[l[15]||=o(`v-model:`,-1),r(`code`,m,n(c.minMaxValue),1)]),l[20]||=r(`div`,{class:`title4 mt8 mb4`},`From -10 to 10`,-1),a(T,{modelValue:c.minMaxValue2,"onUpdate:modelValue":l[4]||=e=>c.minMaxValue2=e,min:-10,max:10},null,8,[`modelValue`]),r(`div`,h,[l[16]||=o(`v-model:`,-1),r(`code`,g,n(c.minMaxValue2),1)])]),_:1}),a(w,{h2:``},{default:t(()=>[...l[21]||=[o(`Disabled & readonly`,-1)]]),_:1}),a(E,{"content-class":`px6`},{html:t(()=>[...l[22]||=[o(`<w-slider class="mt2" :model-value="50" disabled></w-slider>
<w-slider class="mt8" :model-value="50" readonly></w-slider>
`,-1)]]),default:t(()=>[a(T,{class:`mt2`,"model-value":50,disabled:``}),a(T,{class:`mt8`,"model-value":50,readonly:``})]),_:1}),a(w,{h2:``},{default:t(()=>[...l[23]||=[o(`Labels on the left & right`,-1)]]),_:1}),a(E,{"content-class":`px6`},{html:t(()=>[...l[28]||=[o(`<w-slider
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
`,-1)]]),default:t(()=>[a(T,{class:`mt2`,"model-value":50,"label-left":`0`,"label-right":`100`}),a(T,{class:`mt6`,"model-value":50,"label-left":`Left`}),a(T,{class:`mt6`,"model-value":50,"label-right":`Right`}),a(T,{class:`mt12`,"model-value":50},{"label-left":t(()=>[l[25]||=r(`span`,null,`Weight`,-1),a(k,{class:`ml2 green`},{default:t(()=>[...l[24]||=[o(`mdi mdi-feather`,-1)]]),_:1})]),"label-right":t(()=>[a(k,{class:`red`},{default:t(()=>[...l[26]||=[o(`mdi mdi-weight`,-1)]]),_:1}),a(k,{class:`red`},{default:t(()=>[...l[27]||=[o(`mdi mdi-weight`,-1)]]),_:1})]),_:1})]),_:1}),a(w,{h2:``},{default:t(()=>[...l[29]||=[o(`Thumb label`,-1)]]),_:1}),a(E,{"content-class":`pt12 px8`},{html:t(()=>[...l[30]||=[o(`<w-slider
  class="mt12"
  :model-value="24"
  thumb-label
  color="primary-light3">
</w-slider>
`,-1)]]),default:t(()=>[a(T,{class:`mb4`,"model-value":24,"thumb-label":``,color:`primary-light3`})]),_:1}),a(w,{h3:``,slug:`custom-label-with-label-slot`},{default:t(()=>[...l[31]||=[o(`Customize the label with the `,-1),r(`span`,{class:`code`},`label`,-1),o(` slot`,-1)]]),_:1}),a(E,{"content-class":`pt12 pb8 px8`},{html:t(()=>[...l[32]||=[o(`<w-slider
  class="ma12"
  :model-value="46.3"
  thumb-label
  color="primary-light3">
  <template #label="{ value }">
    `+n(`{{ parseInt(value * 10) / 10 }}`)+`%
  </template>
</w-slider>
`,-1)]]),default:t(()=>[a(T,{"model-value":46.3,"thumb-label":``,color:`primary-light3`},{label:t(({value:e})=>[o(n(~~(e*10)/10)+`%`,1)]),_:1})]),_:1}),a(w,{h3:``},{default:t(()=>[...l[33]||=[o(`Droplet style label`,-1)]]),_:1}),l[48]||=r(`p`,null,`With this option you can have a more modern look, but the drawback is that it can't contain long texts.`,-1),l[49]||=r(`p`,null,[o(`It is a breeze to override the droplet label size via CSS, this will suffice:`),r(`code`,null,`.w-slider {font-size: 1.4em}`)],-1),l[50]||=r(`p`,null,[o(`If you need you can also adjust the content font-size with:`),r(`code`,null,`.w-slider__thumb-label div {font-size: 2em;}`)],-1),l[51]||=r(`p`,null,[o(`It is also possible to add classes to the thumb label through the `),r(`code`,null,`thumb-label-class`),o(` option
to add a color for instance.`)],-1),a(E,{"content-class":`pt12 pl10 pr12`},{html:t(()=>[...l[34]||=[o(`<w-slider
  class="ma12"
  :model-value="30"
  thumb-label="droplet">
</w-slider>

<w-slider
  class="big-label.ma12"
  :model-value="60"
  thumb-label="droplet"
  thumb-label-class="info--bg">
</w-slider>`,-1)]]),css:t(()=>[...l[35]||=[o(`.big-label {font-size: 1.4em;}
`,-1)]]),default:t(()=>[a(T,{class:`mt2 mb12`,"model-value":30,"thumb-label":`droplet`}),a(T,{class:`big-label mt12 mb4`,"model-value":60,"thumb-label":`droplet`,"thumb-label-class":`info--bg`})]),_:1}),a(w,{h2:``},{default:t(()=>[...l[36]||=[o(`Steps`,-1)]]),_:1}),l[52]||=r(`p`,null,[o(`There is no step by default to ensure a very smooth movement while dragging. This also means that
the v-model will contain decimals.`),r(`br`),o(`
If you don't want to deal with decimals you can use the `),r(`code`,null,`step`),o(` option to make the slider only
stop on integer values.`)],-1),a(E,{"content-class":`px6`},{html:t(()=>[...l[39]||=[o(`<div class="title4 mb4">Step = 1</div>
<w-slider v-model="sliderValue" :step="1"></w-slider>
<div class="mt4">
  v-model:
  <code class="ml1">`+n(`{{ sliderValue }}`)+`</code>
</div>

<div class="title4 mt8 mb4">Step = 10</div>
<w-slider v-model="slider2Value" :step="10"></w-slider>
<div class="mt4">
  v-model:
  <code class="ml1">`+n(`{{ slider2Value }}`)+`</code>
</div>`,-1)]]),js:t(()=>[...l[40]||=[o(`data: () => ({
  sliderValue: 50,
  slider2Value: 50
})
`,-1)]]),default:t(()=>[l[41]||=r(`div`,{class:`title4 mb4`},`Step = 1`,-1),a(T,{modelValue:c.sliderStepsValue1,"onUpdate:modelValue":l[5]||=e=>c.sliderStepsValue1=e,step:1},null,8,[`modelValue`]),r(`div`,_,[l[37]||=o(`v-model:`,-1),r(`code`,v,n(c.sliderStepsValue1),1)]),l[42]||=r(`div`,{class:`title4 mt8 mb4`},`Step = 10`,-1),a(T,{modelValue:c.sliderStepsValue2,"onUpdate:modelValue":l[6]||=e=>c.sliderStepsValue2=e,step:10},null,8,[`modelValue`]),r(`div`,y,[l[38]||=o(`v-model:`,-1),r(`code`,b,n(c.sliderStepsValue2),1)])]),_:1}),a(w,{h2:``},{default:t(()=>[...l[43]||=[o(`Step labels`,-1)]]),_:1}),a(E,{"content-class":`px6`},{html:t(()=>[...l[44]||=[o(`<div class="title4 mb4">Default step labels</div>
<w-slider
  v-model="sliderValue"
  color="primary-light2"
  :step="20"
  step-labels>
</w-slider>`,-1)]]),js:t(()=>[...l[45]||=[o(`data: () => ({
  sliderValue: 40
})`,-1)]]),default:t(()=>[l[46]||=r(`div`,{class:`title4 mb4`},`Default step labels`,-1),a(T,{modelValue:c.sliderStepsValue3,"onUpdate:modelValue":l[7]||=e=>c.sliderStepsValue3=e,color:`primary-light2`,step:20,"step-labels":``},null,8,[`modelValue`])]),_:1})])}var S=c({data:()=>({sliderValue:50,minMaxValue:4.5,minMaxValue2:0,sliderStepsValue1:50,sliderStepsValue2:50,sliderStepsValue3:40,sliderStepsValue4:40,sliderStepsValue5:40})},[[`render`,x]]);function C(n,c,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return s(),i(`div`,null,[c[1]||=r(`div`,{class:`w-divider my12`},null,-1),a(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[o(`API`,-1)]]),_:1}),a(m,{class:`mt0`,items:f.props,descriptions:n.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),a(m,{items:n.slots,title:`Slots`},null,8,[`items`]),a(m,{items:f.events,title:`Events`},null,8,[`items`])])}var w={id:`Sets the base DOM <code>id</code> for the slider control. If omitted, Wave UI generates stable ids. The thumb button uses <code>&lt;your-id&gt;__thumb</code> when <code>id</code> is set, or an auto-generated <code>button--…</code> id otherwise.`,modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>Dictates the range selection of the slider. When the user changes the range, the <code>v-model</code> value will be updated.`,color:`Applies a foreground color to the slider. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the slider's left and right labels. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a background color to the slider's track. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,stepLabels:`A Boolean to display or hide the labels of each steps under the slider.<br>A future version will allow passing an array of custom labels.`,thumblabel:`Sets a visible label for the slider.`,thumbLabelClass:`Applies a custom CSS class to the slider's thumb label.`,trackClass:`Applies a custom CSS class to the slider's track.`,rangeClass:`Applies a custom CSS class to the slider's highlighted range.`,step:`Sets an incremental/decremental integer or floating step number for the slider, e.g. <code>0.3</code>.`,min:`Sets an integer or floating minimum number for the slider.`,max:`Sets an integer or floating maximum number for the slider.`,labelLeft:`Defines a label to display on the left of the slider.`,labelRight:`Defines a label to display on the right of the slider.`,name:`Provide a native HTML <code>name</code> attribute to the slider. If omitted, a unique value is generated with the same stable mechanism as the default id (SSR-safe).`,disabled:`Disables the slider making it unreactive to user interactions.`,readonly:`The slider will still look like an interactive slider except that it is read-only: its current value cannot be changed by user interaction.`,required:`Applies the native HTML <code>required</code> attribute to the slider.`,validators:`<span class="deep-orange">Only for validation, when the slider is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the slider. Each function will be executed on slider   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the slider.`,noBlurValidation:`<span class="deep-orange">Only when the slider is in a <strong class="code">w-form</strong> with <code>validators</code>.</span><br>When <code>true</code>, blur does not validate this field. When <code>false</code>, blur always validates even if the form has <code>no-blur-validation</code>. When unset, inherit the form setting.`},T={},E={input:{description:`Emitted each time the slider range changes.<br>Updates the v-model value in Vue 2.x only.`,params:{"[Number]":`The current value of the slider.`}},"update:modelValue":{description:`Emitted each time the slider range changes.<br>Updates the v-model value in Vue 3 only.`,params:{"[Number]":`The current value of the slider.`}},focus:{description:`Emitted when the slider is focused (the thumb button).`,params:{"[DOM event object]":`The associated focus DOM event.`}}},D=c({data:()=>({propsDescs:w,slots:T}),computed:{props(){return{...u.props,...l.props}},events(){return u.emits.reduce((e,t)=>(e[t]=E[t]||{})&&e,{})}}},[[`render`,C]]);function O(n,r,c,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return s(),i(`main`,null,[a(f,null,{default:t(()=>[...r[0]||=[o(`w-slider`,-1)]]),_:1}),a(p),a(m)])}var k=c({components:{Examples:S,Api:D}},[[`render`,O]]);export{k as default};