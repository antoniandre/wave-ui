var d=Object.defineProperty;var i=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var s=(t,n,e)=>n in t?d(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,a=(t,n)=>{for(var e in n||(n={}))v.call(n,e)&&s(t,e,n[e]);if(i)for(var e of i(n))g.call(n,e)&&s(t,e,n[e]);return t};import{n as o,B as l,F as p}from"./index.6bc87caa.js";import"./vendor.748d1766.js";var _=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("title-link",{attrs:{h2:""}},[t._v("Default")]),e("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v("w-rating")]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-rating></w-rating>
`)]},proxy:!0}])},[e("w-rating")],1),e("title-link",{attrs:{h2:""}},[t._v("V-model")]),e("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-rating(v-model="rating1")
div.mt2
  strong.mr2 v-model:
  code `+t._s("{{ rating1 }}")+`

w-rating.mt4(v-model="rating2")
div.mt2
  strong.mr2 v-model:
  code `+t._s("{{ rating2 }}"))]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-rating v-model="rating1"></w-rating>
<div class="mt2">
  <strong class="mr2">v-model:</strong>
  <code>`+t._s("{{ rating1 }}")+`</code>
</div>

<w-rating class="mt4" v-model="rating2"></w-rating>
<div class="mt2">
  <strong class="mr2">v-model:</strong>
  <code>`+t._s("{{ rating2 }}")+`</code>
</div>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  rating1: 3,
  rating2: 3.42
})
`)]},proxy:!0}])},[e("w-rating",{model:{value:t.rating1,callback:function(r){t.rating1=r},expression:"rating1"}}),e("div",{staticClass:"mt2"},[e("strong",{staticClass:"mr2"},[t._v("v-model:")]),e("code",[t._v(t._s(t.rating1))])]),e("w-rating",{staticClass:"mt4",model:{value:t.rating2,callback:function(r){t.rating2=r},expression:"rating2"}}),e("div",{staticClass:"mt2"},[e("strong",{staticClass:"mr2"},[t._v("v-model:")]),e("code",[t._v(t._s(t.rating2))])])],1),e("title-link",{attrs:{h2:""}},[t._v("Color")]),t._m(0),e("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-rating.my2(color="green")
br
w-rating.my2(bg-color="light-green" color="yellow")`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-rating
  class="my2"
  color="green">
</w-rating>

<br />

<w-rating
  class="my2"
  bg-color="light-green"
  color="yellow">
</w-rating>
`)]},proxy:!0}])},[e("w-rating",{staticClass:"my2",attrs:{color:"green"}}),e("br"),e("w-rating",{staticClass:"my2",attrs:{"bg-color":"light-green",color:"yellow"}})],1),e("title-link",{attrs:{h2:""}},[t._v("Custom Icons")]),e("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-rating.my2(icon="mdi mdi-heart" :value="3.4")
br
w-rating.my2(icon="mdi mdi-heart-outline" :value="3.4")`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-rating
  class="my2"
  icon="mdi mdi-heart"
  :value="3.4">
</w-rating>

<br />

<w-rating
  class="my2"
  icon="mdi mdi-heart-outline"
  :value="3.4">
</w-rating>
`)]},proxy:!0}])},[e("w-rating",{staticClass:"my2",attrs:{icon:"mdi mdi-heart",value:3.4}}),e("br"),e("w-rating",{staticClass:"my2",attrs:{icon:"mdi mdi-heart-outline",value:3.4}})],1),e("title-link",{attrs:{h2:"",slug:"max"}},[t._v("Max (number of buttons)")]),t._m(1),e("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-rating.my2(:value="2" :max="3")
br
w-rating.my2(:value="6" :max="10")`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-rating class="my2" :value="2" :max="3"></w-rating>
<br />
<w-rating class="my2" :value="6" :max="10"></w-rating>
`)]},proxy:!0}])},[e("w-rating",{staticClass:"my2",attrs:{value:2,max:3}}),e("br"),e("w-rating",{staticClass:"my2",attrs:{value:6,max:10}})],1),e("title-link",{attrs:{h2:""}},[t._v("Sizes")]),t._m(2),e("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-rating.my2(xs)
br
w-rating.my2(sm)
br
w-rating.my2(md)
br
w-rating.my2(lg)
br
w-rating.my2(xl)`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-rating class="my2" xs></w-rating>
<br />
<w-rating class="my2" sm></w-rating>
<br />
<w-rating class="my2" md></w-rating>
<br />
<w-rating class="my2" lg></w-rating>
<br />
<w-rating class="my2" xl></w-rating>
`)]},proxy:!0}])},[e("w-rating",{staticClass:"my2",attrs:{xs:""}}),e("br"),e("w-rating",{staticClass:"my2",attrs:{sm:""}}),e("br"),e("w-rating",{staticClass:"my2",attrs:{md:""}}),e("br"),e("w-rating",{staticClass:"my2",attrs:{lg:""}}),e("br"),e("w-rating",{staticClass:"my2",attrs:{xl:""}})],1),e("title-link",{attrs:{h2:""}},[t._v("Disabled & readonly")]),e("p",[t._v("Use the disabled or readonly options to display a rating but prevent user votes.")]),e("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-rating.my2(:value="3" disabled)
br
w-rating.my2(:value="3" readonly)`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-rating class="my2" :value="3" disabled></w-rating>
<br />
<w-rating class="my2" :value="3" readonly></w-rating>`)]},proxy:!0}])},[e("w-rating",{staticClass:"my2",attrs:{value:3,disabled:""}}),e("br"),e("w-rating",{staticClass:"my2",attrs:{value:3,readonly:""}})],1)],1)},h=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("Like in most components, you can set a "),e("code",[t._v("color")]),t._v(" for the foreground icons (when on) and a "),e("code",[t._v("bg-color")]),t._v(` for the
background icons when off.`),e("br"),t._v(`
The default background color is grey and the default active color is `),e("code",[t._v("primary")]),t._v(".")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("The number of buttons is set via the "),e("code",[t._v("max")]),t._v(" prop."),e("br"),t._v(`
As expected, the `),e("code",[t._v("max")]),t._v(` prop also sets the maximum number you can set or display via the
`),e("span",{staticClass:"code"},[t._v("w-rating")]),t._v(" component."),e("br"),t._v(`
When setting a rating, the component will always return an integer between 1 and `),e("code",[t._v("max")]),t._v(" included.")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("The rating component's size can be controlled via the preset sizes "),e("code",[t._v("xs")]),t._v(", "),e("code",[t._v("sm")]),t._v(`,
`),e("code",[t._v("md")]),t._v(", "),e("code",[t._v("lg")]),t._v(", "),e("code",[t._v("xl")]),t._v(` or via CSS override.
`)])}];const f={data:()=>({rating1:3,rating2:3.42})},c={};var y=o(f,_,h,!1,w,null,null,null);function w(t){for(let n in c)this[n]=c[n]}var b=function(){return y.exports}(),x=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"w-divider my12"}),e("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),e("component-api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),e("component-api",{attrs:{items:t.slots,title:"Slots"}}),e("component-api",{attrs:{items:t.events,title:"Events"}})],1)},k=[];const C={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Dictates the current rating value. When the user rates, the <code>v-model</code> value will be updated.',max:"The total count of buttons (usually stars) to display in the rating component.",icon:"Sets the icon (star by default) of each button of the rating component.<br>Accepts a string: e.g. <code>mdi mdi-home</code>.",color:'Sets the color of the rating active icons (when hovering or when showing the current rating).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Sets color of the background icons (grey by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',xs:"Sets the size of the rating component (font-size).",sm:"Sets the size of the rating component (font-size).",md:"Sets the size of the rating component (font-size).",lg:"Sets the size of the rating component (font-size).",xl:"Sets the size of the rating component (font-size).",noRipple:"Removes the ripple animation on click of one of the buttons.",name:"Provide a native HTML <code>name</code> attribute to the rating component. If not provided, a unique name will be computed.",disabled:"Disables the rating component making it unreactive to user interactions.",readonly:"The rating component will still look like an interactive rating component except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the rating component.",validators:'<span class="deep-orange">Only for validation, when the rating component is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the rating component. Each function will be executed on rating component   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the rating component.'},S={item:{description:"Provide a custom content for each item.",params:{index:"The item index, starting at 1."}}},$={input:{description:"Emitted each time the rating changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Number]":"The current rating."}},"update:modelValue":{description:"Emitted each time the rating changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Number]":"The current rating."}},focus:{description:"Emitted when the rating component is focused (any button).",params:{"[DOM event object]":"The associated focus DOM event."}},blur:{description:"Emitted when the rating component is blurred (any button).",params:{"[DOM event object]":"The associated blur DOM event."}}},z={data:()=>({propsDescs:C,slots:S}),computed:{props(){return a(a({},l.props),p.props)},events(){return l.emits.reduce((t,n)=>(t[n]=$[n]||{})&&t,{})}}},m={};var E=o(z,x,k,!1,T,null,null,null);function T(t){for(let n in m)this[n]=m[n]}var M=function(){return E.exports}(),D=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",[e("ui-component-title",{attrs:{slug:"w-rating"}},[t._v("w-rating")]),e("examples"),e("api")],1)},A=[];const j={components:{Examples:b,Api:M}},u={};var P=o(j,D,A,!1,R,null,null,null);function R(t){for(let n in u)this[n]=u[n]}var W=function(){return P.exports}();export{W as default};
