var d=Object.defineProperty;var l=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var i=(t,s,e)=>s in t?d(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,a=(t,s)=>{for(var e in s||(s={}))w.call(s,e)&&i(t,e,s[e]);if(l)for(var e of l(s))v.call(s,e)&&i(t,e,s[e]);return t};import{n,H as o,F as m}from"./index.6bc87caa.js";import"./vendor.748d1766.js";var p=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("title-link",{attrs:{h2:"",slug:"on-off-and-disabled"}},[t._v("On, off & disabled")]),e("example",{attrs:{"content-class":"pt4"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-switch
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
`)]},proxy:!0}])},[e("w-switch",{staticClass:"mr6",model:{value:t.value,callback:function(h){t.value=h},expression:"value"}}),e("span",{staticClass:"title3 mb0"},[t._v("v-model value:"),e("code",{staticClass:"ml2"},[t._v(t._s(t.value))])])],1),e("title-link",{attrs:{h2:""}},[t._v("Colors")]),e("example",{attrs:{"content-class":"pt4"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-switch
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
</w-switch>`)]},proxy:!0}])},[e("w-switch",{staticClass:"ma2",attrs:{value:!0,thin:"",label:"On"}}),e("w-switch",{staticClass:"ma2",attrs:{value:!1,thin:"",label:"Off"}}),e("w-switch",{staticClass:"ma2",attrs:{value:!0,disabled:"",thin:"",label:"On disabled"}}),e("w-switch",{staticClass:"ma2",attrs:{value:!1,disabled:"",thin:"",label:"Off disabled"}})],1)],1)},f=[];const _={data:()=>({value:!0})},r={};var b=n(_,p,f,!1,g,null,null,null);function g(t){for(let s in r)this[s]=r[s]}var x=function(){return b.exports}(),y=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"w-divider my12"}),e("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),e("component-api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),e("component-api",{attrs:{items:t.slots,title:"Slots"}}),e("component-api",{attrs:{items:t.events,title:"Events"}})],1)},C=[];const O={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Dictates the state of the switch. When the user toggles the switch, the <code>v-model</code> value will be updated.',label:"Sets a visible label for the switch.",labelOnLeft:"Moves the label to the left of the switch. By default the label is displayed on the right.",color:'Applies a color to the switch. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',thin:"Applies a thiner style to the switch.",noRipple:"Removes the ripple animation on activation.",name:"Provide a native HTML <code>name</code> attribute to the switch. If not provided, a unique name will be computed.",disabled:"Disables the switch making it unreactive to user interactions.",readonly:"The switch will still look like an interactive switch except that it is read-only: its current state cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the switch.",validators:'<span class="deep-orange">Only for validation, when the switch is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the switch. Each function will be executed on switch   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the switch.'},k={default:{description:"The switch label content, if the label prop is not flexible enough."}},$={input:{description:"Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"A boolean representing the current state of the switch."}},"update:modelValue":{description:"Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"A boolean representing the current state of the switch."}},focus:{description:"Emitted on switch focus.",params:{"[DOM event object]":"The associated focus DOM event."}}},E={data:()=>({propsDescs:O,slots:k}),computed:{props(){return a(a({},o.props),m.props)},events(){return o.emits.reduce((t,s)=>(t[s]=$[s]||{})&&t,{})}}},c={};var S=n(E,y,C,!1,A,null,null,null);function A(t){for(let s in c)this[s]=c[s]}var M=function(){return S.exports}(),j=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("main",[e("ui-component-title",[t._v("w-switch")]),e("examples"),e("api")],1)},D=[];const T={components:{Examples:x,Api:M}},u={};var F=n(T,j,D,!1,R,null,null,null);function R(t){for(let s in u)this[s]=u[s]}var B=function(){return F.exports}();export{B as default};
