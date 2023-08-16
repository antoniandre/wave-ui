import{n,J as l,F as r}from"./index.e31dd236.js";var u=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("title-link",{attrs:{h2:"",slug:"on-off-and-disabled"}},[t._v("On, off & disabled")]),e("example",{attrs:{"content-class":"pt4"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-switch
  class="ma2"
  :value="true"
  label="On">
</w-switch>

<w-switch
  class="ma2"
  :value="false"
  label="Off">
</w-switch>

<w-switch
  class="ma2"
  :value="true"
  disabled
  label="On disabled">
</w-switch>

<w-switch
  class="ma2"
  :value="false"
  disabled
  label="Off disabled">
</w-switch>
`)]},proxy:!0}])},[e("w-switch",{staticClass:"ma2",attrs:{value:!0,label:"On"}}),e("w-switch",{staticClass:"ma2",attrs:{value:!1,label:"Off"}}),e("w-switch",{staticClass:"ma2",attrs:{value:!0,disabled:"",label:"On disabled"}}),e("w-switch",{staticClass:"ma2",attrs:{value:!1,disabled:"",label:"Off disabled"}})],1),e("title-link",{attrs:{h2:""}},[t._v("V-model")]),e("example",{attrs:{"content-class":"w-flex wrap align-center"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-switch class="mr6" v-model="value"></w-switch>
<span class="title3 mb0">
  v-model value:
  <code class="ml2">`+t._s("{{ value }}")+`</code>
</span>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  value: true
})
`)]},proxy:!0}])},[e("w-switch",{staticClass:"mr6",model:{value:t.value,callback:function(a){t.value=a},expression:"value"}}),e("span",{staticClass:"title3 mb0"},[t._v("v-model value:"),e("code",{staticClass:"ml2"},[t._v(t._s(t.value))])])],1),e("title-link",{attrs:{h2:""}},[t._v("Colors")]),e("example",{attrs:{"content-class":"pt4"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-switch
  class="ma2"
  :value="true"
  color="pink">
</w-switch>

<w-switch
  class="ma2"
  :value="true"
  color="error">
</w-switch>

<w-switch
  class="ma2"
  :value="true"
  color="warning">
</w-switch>

<w-switch
  class="ma2"
  :value="true"
  color="success">
</w-switch>

<w-switch
  class="ma2"
  :value="true"
  color="info">
</w-switch>
`)]},proxy:!0}])},[e("w-switch",{staticClass:"ma2",attrs:{value:!0,color:"pink"}}),e("w-switch",{staticClass:"ma2",attrs:{value:!0,color:"error"}}),e("w-switch",{staticClass:"ma2",attrs:{value:!0,color:"warning"}}),e("w-switch",{staticClass:"ma2",attrs:{value:!0,color:"success"}}),e("w-switch",{staticClass:"ma2",attrs:{value:!0,color:"info"}})],1),e("title-link",{attrs:{h2:""}},[t._v("Thin version")]),e("example",{attrs:{"content-class":"pt5"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-switch
  class="ma2"
  :value="true"
  thin label="On">
</w-switch>

<w-switch
  class="ma2"
  :value="false"
  thin label="Off">
</w-switch>

<w-switch
  class="ma2"
  :value="true"
  disabled
  thin
  label="On disabled">
</w-switch>

<w-switch
  class="ma2"
  :value="false"
  disabled
  thin
  label="Off disabled">
</w-switch>
`)]},proxy:!0}])},[e("w-switch",{staticClass:"ma2",attrs:{value:!0,thin:"",label:"On"}}),e("w-switch",{staticClass:"ma2",attrs:{value:!1,thin:"",label:"Off"}}),e("w-switch",{staticClass:"ma2",attrs:{value:!0,disabled:"",thin:"",label:"On disabled"}}),e("w-switch",{staticClass:"ma2",attrs:{value:!1,disabled:"",thin:"",label:"Off disabled"}})],1),e("title-link",{attrs:{h2:""}},[t._v("Track slot")]),t._m(0),e("alert",{attrs:{tip:""}},[t._v("If the "),e("strong",{staticClass:"code"},[t._v("w-switch")]),t._v(` width is too small for your custom content, it's very easy to
increase its width with CSS like in this example, and the component elements will adapt:`),e("ssh-pre",{attrs:{language:"css"}},[e("div",{staticClass:"w-switch--custom-track"},[t._v(".w-switch--custom-track .w-switch__input {width: 55px;}")])])],1),e("example",{attrs:{"content-class":"pt5"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-switch.ma4(v-model="value")
  template(#track)
    small `+t._s("{{ value ? 'on' : 'off' }}")+`

w-switch.w-switch--wide.ma4(v-model="value")
  template(#track)
    strong `+t._s("{{ value ? 'on' : 'off' }}"))]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-switch v-model="value" class="ma4">
  <template #track>
    <small>`+t._s("{{ value ? 'on' : 'off' }}")+`</small>
  </template>
</w-switch>

<w-switch v-model="value" class="ma4 w-switch--wide">
  <template #track>
    <strong>`+t._s("{{ value ? 'on' : 'off' }}")+`</strong>
  </template>
</w-switch>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  value: true
})`)]},proxy:!0},{key:"css",fn:function(){return[t._v(`/* Adapt text color according to the background color. */
.w-switch__track {color: #666;}
.w-switch--on .w-switch__track {color: #fff;}

/* Wider switch. */
.w-switch--wide .w-switch__input {width: 55px;}
.w-switch--wide .w-switch__track {width: 35px;text-align: center;}
`)]},proxy:!0}])},[e("w-switch",{staticClass:"ma4",scopedSlots:t._u([{key:"track",fn:function(){return[e("small",[t._v(t._s(t.value2?"on":"off"))])]},proxy:!0}]),model:{value:t.value2,callback:function(a){t.value2=a},expression:"value2"}}),e("w-switch",{staticClass:"w-switch--wide ma4",scopedSlots:t._u([{key:"track",fn:function(){return[e("strong",[t._v(t._s(t.value2?"on":"off"))])]},proxy:!0}]),model:{value:t.value2,callback:function(a){t.value2=a},expression:"value2"}})],1),e("title-link",{attrs:{h2:""}},[t._v("Thumb slot")]),t._m(1),e("example",{attrs:{"content-class":"pt5"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-switch.ma4(v-model="value" label="On")
  template(#thumb)
    small `+t._s("{{ value ? 'on' : 'off' }}")+`

w-switch.ma4(v-model="value" label="Dark theme")
  template(#thumb)
    w-icon `+t._s("{{ value ? 'mdi mdi-weather-night' : 'mdi mdi-white-balance-sunny' }}"))]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-switch v-model="value" class="ma4">
  <template #thumb>
    <small>`+t._s("{{ value ? 'on' : 'off' }}")+`</small>
  </template>
</w-switch>

<w-switch v-model="value" class="ma4">
  <template #thumb>
    <w-icon>
      `+t._s("{{ value ? 'mdi mdi-weather-night' : 'mdi mdi-white-balance-sunny' }}")+`
    </w-icon>
  </template>
</w-switch>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  value: true
})
`)]},proxy:!0}])},[e("w-switch",{staticClass:"ma4",scopedSlots:t._u([{key:"thumb",fn:function(){return[e("small",[t._v(t._s(t.value3?"on":"off"))])]},proxy:!0}]),model:{value:t.value3,callback:function(a){t.value3=a},expression:"value3"}}),e("w-switch",{staticClass:"ma4",attrs:{label:"Dark theme"},scopedSlots:t._u([{key:"thumb",fn:function(){return[e("w-icon",[t._v(t._s(t.value3?"mdi mdi-weather-night":"mdi mdi-white-balance-sunny"))])]},proxy:!0}]),model:{value:t.value3,callback:function(a){t.value3=a},expression:"value3"}})],1),e("title-link",{attrs:{h2:""}},[t._v("Loading")]),e("p",[t._v(`If a number is given it will be the value of the progress. If true is given, the progress will
be indefinitely spinning.`)]),e("example",{attrs:{"content-class":"pt4"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-switch.ma2(:value="true" :loading="43")
w-switch.ma2(:value="true" loading)`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-switch
  class="ma2"
  :value="true"
  :loading="43">
</w-switch>

<w-switch
  class="ma2"
  :value="true"
  loading>
</w-switch>`)]},proxy:!0}])},[e("w-switch",{staticClass:"ma2",attrs:{value:!0,loading:43}}),e("w-switch",{staticClass:"ma2",attrs:{value:!0,loading:""}})],1)],1)},h=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("You can easily add some custom content in the switch track via the "),e("code",[t._v("#track")]),t._v(" slot."),e("br")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("It is possible to add an icon or any kind of content in the switch thumb via the "),e("code",[t._v("#thumb")]),t._v(`
slot.`),e("br"),t._v(`
You can also fit and style the element with minimum CSS.`)])}];const w={data:()=>({value:!0,value2:!0,value3:!0})},i={};var v=n(w,u,h,!1,d,null,null,null);function d(t){for(let s in i)this[s]=i[s]}var m=function(){return v.exports}(),p=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"w-divider my12"}),e("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),e("component-api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),e("component-api",{attrs:{items:t.slots,title:"Slots"}}),e("component-api",{attrs:{items:t.events,title:"Events"}})],1)},f=[];const _={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Dictates the state of the switch. When the user toggles the switch, the <code>v-model</code> value will be updated.',label:"Sets a visible label for the switch.",labelOnLeft:"Moves the label to the left of the switch. By default the label is displayed on the right.",color:'Applies a color to the switch. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',labelColor:`Applies a specific color to the switch's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,thin:"Applies a thinner style to the switch.",noRipple:"Removes the ripple animation on activation.",name:"Provide a native HTML <code>name</code> attribute to the switch. If not provided, a unique name will be computed.",disabled:"Disables the switch making it unreactive to user interactions.",readonly:"The switch will still look like an interactive switch except that it is read-only: its current state cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the switch.",validators:'<span class="deep-orange">Only for validation, when the switch is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the switch. Each function will be executed on switch   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the switch.',loading:"When set to <code>true</code>, displays an indefinite-value progress circle inside the switch thumb. If a number is given, it will be the value of the progress."},b={default:{description:"The switch label content, if the label prop is not flexible enough."},track:{description:"Optional switch track content."},thumb:{description:"Optional switch thumb content. Useful to place an icon or small text."}},g={input:{description:"Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"A boolean representing the current state of the switch."}},"update:modelValue":{description:"Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"A boolean representing the current state of the switch."}},focus:{description:"Emitted on switch focus.",params:{"[DOM event object]":"The associated focus DOM event."}}},y={data:()=>({propsDescs:_,slots:b}),computed:{props(){return{...l.props,...r.props}},events(){return l.emits.reduce((t,s)=>(t[s]=g[s]||{})&&t,{})}}},o={};var k=n(y,p,f,!1,x,null,null,null);function x(t){for(let s in o)this[s]=o[s]}var C=function(){return k.exports}(),O=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("main",[e("ui-component-title",[t._v("w-switch")]),e("examples"),e("api")],1)},S=[];const $={components:{Examples:m,Api:C}},c={};var A=n($,O,S,!1,E,null,null,null);function E(t){for(let s in c)this[s]=c[s]}var D=function(){return A.exports}();export{D as default};
