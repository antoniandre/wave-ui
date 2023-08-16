import{n as a,G as n}from"./index.e31dd236.js";var d=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[t("title-link",{attrs:{h2:""}},[e._v("Default")]),e._m(0),t("example",{attrs:{"content-class":"pa6"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<w-slider :value="50"></w-slider>
`)]},proxy:!0}])},[t("w-slider",{attrs:{value:50}})],1),t("title-link",{attrs:{h2:""}},[e._v("V-model & external controls")]),t("example",{attrs:{"content-class":"px6"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<w-flex align-center>
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
  <code class="ml1">`+e._s("{{ sliderValue }}")+`</code>
</div>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  sliderValue: 50
})
`)]},proxy:!0}])},[t("w-flex",{attrs:{"align-center":""}},[t("w-button",{attrs:{icon:"wi-minus","bg-color":"success",sm:""},on:{click:function(s){e.sliderValue-=5}}}),t("w-slider",{staticClass:"mx3 grow",attrs:{color:"green"},model:{value:e.sliderValue,callback:function(s){e.sliderValue=s},expression:"sliderValue"}}),t("w-button",{attrs:{icon:"wi-plus","bg-color":"success",sm:""},on:{click:function(s){e.sliderValue+=5}}})],1),t("div",{staticClass:"mt4"},[e._v("v-model:"),t("code",{staticClass:"ml1"},[e._v(e._s(e.sliderValue))])])],1),t("title-link",{attrs:{h2:""}},[e._v("Min & max")]),t("example",{attrs:{"content-class":"px6"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<div class="title4 mb4">From 4 to 5</div>
<w-slider
  v-model="sliderValue"
  :min="4"
  :max="5">
</w-slider>

<div class="mt4">
  v-model:
  <code class="ml1">`+e._s("{{ sliderValue }}")+`</code>
</div>

<div class="title4 mt8 mb4">From -10 to 10</div>
<w-slider
  v-model="slider2Value"
  :min="-10"
  :max="10">
</w-slider>

<div class="mt4">
  v-model:
  <code class="ml1">`+e._s("{{ slider2Value }}")+`</code>
</div>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  sliderValue: 4.5,
  slider2Value: 0
})
`)]},proxy:!0}])},[t("div",{staticClass:"title4 mb4"},[e._v("From 4 to 5")]),t("w-slider",{attrs:{min:4,max:5},model:{value:e.minMaxValue,callback:function(s){e.minMaxValue=s},expression:"minMaxValue"}}),t("div",{staticClass:"mt4"},[e._v("v-model:"),t("code",{staticClass:"ml1"},[e._v(e._s(e.minMaxValue))])]),t("div",{staticClass:"title4 mt8 mb4"},[e._v("From -10 to 10")]),t("w-slider",{attrs:{min:-10,max:10},model:{value:e.minMaxValue2,callback:function(s){e.minMaxValue2=s},expression:"minMaxValue2"}}),t("div",{staticClass:"mt4"},[e._v("v-model:"),t("code",{staticClass:"ml1"},[e._v(e._s(e.minMaxValue2))])])],1),t("title-link",{attrs:{h2:""}},[e._v("Disabled & readonly")]),t("example",{attrs:{"content-class":"px6"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<w-slider class="mt2" :value="50" disabled></w-slider>
<w-slider class="mt8" :value="50" readonly></w-slider>
`)]},proxy:!0}])},[t("w-slider",{staticClass:"mt2",attrs:{value:50,disabled:""}}),t("w-slider",{staticClass:"mt8",attrs:{value:50,readonly:""}})],1),t("title-link",{attrs:{h2:""}},[e._v("Labels on the left & right")]),t("example",{attrs:{"content-class":"px6"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<w-slider
  class="mt2"
  :value="50"
  label-left="0"
  label-right="100">
</w-slider>

<w-slider
  class="mt6"
  :value="50"
  label-left="Left">
</w-slider>

<w-slider
  class="mt6"
  :value="50"
  label-right="Right">
</w-slider>

<w-slider
  class="mt12"
  :value="50">
  <template #label-left>
    <span>Weight</span>
    <w-icon class="ml2 green">mdi mdi-feather</w-icon>
  </template>
  <template #label-right>
    <w-icon class="red">mdi mdi-weight</w-icon>
    <w-icon class="red">mdi mdi-weight</w-icon>
  </template>
</w-slider>
`)]},proxy:!0}])},[t("w-slider",{staticClass:"mt2",attrs:{value:50,"label-left":"0","label-right":"100"}}),t("w-slider",{staticClass:"mt6",attrs:{value:50,"label-left":"Left"}}),t("w-slider",{staticClass:"mt6",attrs:{value:50,"label-right":"Right"}}),t("w-slider",{staticClass:"mt12",attrs:{value:50},scopedSlots:e._u([{key:"label-left",fn:function(){return[t("span",[e._v("Weight")]),t("w-icon",{staticClass:"ml2 green"},[e._v("mdi mdi-feather")])]},proxy:!0},{key:"label-right",fn:function(){return[t("w-icon",{staticClass:"red"},[e._v("mdi mdi-weight")]),t("w-icon",{staticClass:"red"},[e._v("mdi mdi-weight")])]},proxy:!0}])})],1),t("title-link",{attrs:{h2:""}},[e._v("Thumb label")]),t("example",{attrs:{"content-class":"pt12 px8"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<w-slider
  class="mt12"
  :value="24"
  thumb-label
  color="primary-light3">
</w-slider>
`)]},proxy:!0}])},[t("w-slider",{staticClass:"mb4",attrs:{value:24,"thumb-label":"",color:"primary-light3"}})],1),t("title-link",{attrs:{h3:"",slug:"custom-label-with-label-slot"}},[e._v("Customize the label with the "),t("span",{staticClass:"code"},[e._v("label")]),e._v(" slot")]),t("example",{attrs:{"content-class":"pt12 pb8 px8"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<w-slider
  class="ma12"
  :value="46.3"
  thumb-label
  color="primary-light3">
  <template #label="{ value }">
    `+e._s("{{ parseInt(value * 10) / 10 }}")+`%
  </template>
</w-slider>
`)]},proxy:!0}])},[t("w-slider",{attrs:{value:46.3,"thumb-label":"",color:"primary-light3"},scopedSlots:e._u([{key:"label",fn:function(s){var c=s.value;return[e._v(e._s(~~(c*10)/10)+"%")]}}])})],1),t("title-link",{attrs:{h3:""}},[e._v("Droplet style label")]),t("p",[e._v("With this option you can have a more modern look, but the drawback is that it can't contain long texts.")]),e._m(1),e._m(2),e._m(3),t("example",{attrs:{"content-class":"pt12 pl10 pr12"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<w-slider
  class="ma12"
  :value="30"
  thumb-label="droplet">
</w-slider>

<w-slider
  class="big-label.ma12"
  :value="60"
  thumb-label="droplet"
  thumb-label-class="info--bg">
</w-slider>`)]},proxy:!0},{key:"css",fn:function(){return[e._v(`.big-label {font-size: 1.4em;}
`)]},proxy:!0}])},[t("w-slider",{staticClass:"mt2 mb12",attrs:{value:30,"thumb-label":"droplet"}}),t("w-slider",{staticClass:"big-label mt12 mb4",attrs:{value:60,"thumb-label":"droplet","thumb-label-class":"info--bg"}})],1),t("title-link",{attrs:{h2:""}},[e._v("Steps")]),e._m(4),t("example",{attrs:{"content-class":"px6"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<div class="title4 mb4">Step = 1</div>
<w-slider v-model="sliderValue" :step="1"></w-slider>
<div class="mt4">
  v-model:
  <code class="ml1">`+e._s("{{ sliderValue }}")+`</code>
</div>

<div class="title4 mt8 mb4">Step = 10</div>
<w-slider v-model="slider2Value" :step="10"></w-slider>
<div class="mt4">
  v-model:
  <code class="ml1">`+e._s("{{ slider2Value }}")+`</code>
</div>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  sliderValue: 50,
  slider2Value: 50
})
`)]},proxy:!0}])},[t("div",{staticClass:"title4 mb4"},[e._v("Step = 1")]),t("w-slider",{attrs:{step:1},model:{value:e.sliderStepsValue1,callback:function(s){e.sliderStepsValue1=s},expression:"sliderStepsValue1"}}),t("div",{staticClass:"mt4"},[e._v("v-model:"),t("code",{staticClass:"ml1"},[e._v(e._s(e.sliderStepsValue1))])]),t("div",{staticClass:"title4 mt8 mb4"},[e._v("Step = 10")]),t("w-slider",{attrs:{step:10},model:{value:e.sliderStepsValue2,callback:function(s){e.sliderStepsValue2=s},expression:"sliderStepsValue2"}}),t("div",{staticClass:"mt4"},[e._v("v-model:"),t("code",{staticClass:"ml1"},[e._v(e._s(e.sliderStepsValue2))])])],1),t("title-link",{attrs:{h2:""}},[e._v("Step labels")]),t("example",{attrs:{"content-class":"px6"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<div class="title4 mb4">Default step labels</div>
<w-slider
  v-model="sliderValue"
  color="primary-light2"
  :step="20"
  step-labels>
</w-slider>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  sliderValue: 40
})`)]},proxy:!0}])},[t("div",{staticClass:"title4 mb4"},[e._v("Default step labels")]),t("w-slider",{attrs:{color:"primary-light2",step:20,"step-labels":""},model:{value:e.sliderStepsValue3,callback:function(s){e.sliderStepsValue3=s},expression:"sliderStepsValue3"}})],1)],1)},u=[function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("p",[e._v("By default the range will have the "),t("code",[e._v("primary")]),e._v(" color.")])},function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("p",[e._v("It is a breeze to override the droplet label size via CSS, this will suffice:"),t("code",[e._v(".w-slider {font-size: 1.4em}")])])},function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("p",[e._v("If you need you can also adjust the content font-size with:"),t("code",[e._v(".w-slider__thumb-label div {font-size: 2em;}")])])},function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("p",[e._v("It is also possible to add classes to the thumb label through the "),t("code",[e._v("thumb-label-class")]),e._v(` option
to add a color for instance.`)])},function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("p",[e._v(`There is no step by default to ensure a very smooth movement while dragging. This also means that
the v-model will contain decimals.`),t("br"),e._v(`
If you don't want to deal with decimals you can use the `),t("code",[e._v("step")]),e._v(` option to make the slider only
stop on integer values.`)])}];const m={data:()=>({sliderValue:50,minMaxValue:4.5,minMaxValue2:0,sliderStepsValue1:50,sliderStepsValue2:50,sliderStepsValue3:40,sliderStepsValue4:40,sliderStepsValue5:40})},r={};var v=a(m,d,u,!1,p,null,null,null);function p(e){for(let l in r)this[l]=r[l]}var h=function(){return v.exports}(),_=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[t("div",{staticClass:"w-divider my12"}),t("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),t("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),t("component-api",{attrs:{items:e.slots,title:"Slots"}}),t("component-api",{attrs:{items:e.events,title:"Events"}})],1)},b=[];const f={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Dictates the range selection of the slider. When the user changes the range, the <code>v-model</code> value will be updated.',color:'Applies a foreground color to the slider. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',labelColor:`Applies a specific color to the slider's left and right labels. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a background color to the slider's track. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,stepLabels:"A Boolean to display or hide the labels of each steps under the slider.<br>A future version will allow passing an array of custom labels.",thumblabel:"Sets a visible label for the slider.",thumbLabelClass:"Applies a custom CSS class to the slider's thumb label.",trackClass:"Applies a custom CSS class to the slider's track.",rangeClass:"Applies a custom CSS class to the slider's highlighted range.",step:"Sets an incremental/decremental integer or floating step number for the slider, e.g. <code>0.3</code>.",min:"Sets an integer or floating minimum number for the slider.",max:"Sets an integer or floating maximum number for the slider.",labelLeft:"Defines a label to display on the left of the slider.",labelRight:"Defines a label to display on the right of the slider.",name:"Provide a native HTML <code>name</code> attribute to the slider. If not provided, a unique name will be computed.",disabled:"Disables the slider making it unreactive to user interactions.",readonly:"The slider will still look like an interactive slider except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the slider.",validators:'<span class="deep-orange">Only for validation, when the slider is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the slider. Each function will be executed on slider   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the slider.'},w={},g={input:{description:"Emitted each time the slider range changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Number]":"The current value of the slider."}},"update:modelValue":{description:"Emitted each time the slider range changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Number]":"The current value of the slider."}},focus:{description:"Emitted when the slider is focused (the thumb button).",params:{"[DOM event object]":"The associated focus DOM event."}}},x={data:()=>({propsDescs:f,slots:w}),computed:{props(){return n.props},events(){return n.emits.reduce((e,l)=>(e[l]=g[l]||{})&&e,{})}}},i={};var y=a(x,_,b,!1,V,null,null,null);function V(e){for(let l in i)this[l]=i[l]}var k=function(){return y.exports}(),S=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("main",[t("ui-component-title",[e._v("w-slider")]),t("examples"),t("api")],1)},C=[];const $={components:{Examples:h,Api:k}},o={};var M=a($,S,C,!1,A,null,null,null);function A(e){for(let l in o)this[l]=o[l]}var D=function(){return M.exports}();export{D as default};
