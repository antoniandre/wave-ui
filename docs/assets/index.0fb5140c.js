import{n,K as r}from"./index.6bc87caa.js";import"./vendor.748d1766.js";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("title-link",{attrs:{h2:""}},[t._v("Default tag & outline")]),e("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-tag class="mr4">tag</w-tag>
<w-tag outline>tag</w-tag>
`)]},proxy:!0}])},[e("w-tag",{staticClass:"mr4"},[t._v("tag")]),e("w-tag",{attrs:{outline:""}},[t._v("tag")])],1),e("title-link",{attrs:{h2:""}},[t._v("Colors")]),t._m(0),e("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-tag class="mr4" color="primary">tag</w-tag>
<w-tag class="mr4" bg-color="primary">tag</w-tag>
<w-tag bg-color="primary" color="yellow">tag</w-tag>
`)]},proxy:!0}])},[e("w-tag",{staticClass:"mr4",attrs:{color:"primary"}},[t._v("tag")]),e("w-tag",{staticClass:"mr4",attrs:{"bg-color":"primary"}},[t._v("tag")]),e("w-tag",{attrs:{"bg-color":"primary",color:"yellow"}},[t._v("tag")])],1),e("title-link",{attrs:{h2:""}},[t._v("Round, tile & shadow")]),e("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-tag
  class="mr4"
  bg-color="primary"
  round>
  round
</w-tag>

<w-tag
  class="mr4"
  bg-color="primary"
  tile>
  tile
</w-tag>

<w-tag
  color="primary"
  shadow>
  shadow
</w-tag>
`)]},proxy:!0}])},[e("w-tag",{staticClass:"mr4",attrs:{"bg-color":"primary",round:""}},[t._v("round")]),e("w-tag",{staticClass:"mr4",attrs:{"bg-color":"primary",tile:""}},[t._v("tile")]),e("w-tag",{attrs:{color:"primary",shadow:""}},[t._v("shadow")])],1),e("title-link",{attrs:{h2:""}},[t._v("Sizes")]),t._m(1),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<div class="w-flex wrap align-center">
  <w-tag
    class="ma1"
    color="primary"
    xs>
    extra
    small
  </w-tag>

  <w-tag
    class="ma1"
    color="primary"
    sm>
    small
  </w-tag>

  <w-tag
    class="ma1"
    color="primary"
    md>
    medium
  </w-tag>

  <w-tag
    class="ma1"
    color="primary"
    lg>
    large
  </w-tag>

  <w-tag
    class="ma1"
    color="primary"
    xl>
    extra
    large
  </w-tag>
</div>

<div class="title3 my4">
  Custom width and height
</div>

<w-tag
  outline
  color="primary"
  xl
  width="10em"
  height="3em">
  a bigger tag
</w-tag>
`)]},proxy:!0}])},[e("div",{staticClass:"w-flex wrap align-center"},[e("w-tag",{staticClass:"ma1",attrs:{color:"primary",xs:""}},[t._v("extra small")]),e("w-tag",{staticClass:"ma1",attrs:{color:"primary",sm:""}},[t._v("small")]),e("w-tag",{staticClass:"ma1",attrs:{color:"primary",md:""}},[t._v("medium")]),e("w-tag",{staticClass:"ma1",attrs:{color:"primary",lg:""}},[t._v("large")]),e("w-tag",{staticClass:"ma1",attrs:{color:"primary",xl:""}},[t._v("extra large")])],1),e("div",{staticClass:"title3 my4"},[t._v("Custom width and height")]),e("w-tag",{attrs:{outline:"",color:"primary",xl:"",width:"10em",height:"3em"}},[t._v("a bigger tag")])],1),e("title-link",{attrs:{h2:""}},[t._v("Custom content")]),e("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-tag color="pink-light1" bg-color="pink-light5">
  <w-icon class="mr1" sm>
    mdi mdi-heart
  </w-icon>
  like it
</w-tag>
`)]},proxy:!0}])},[e("w-tag",{attrs:{color:"pink-light1","bg-color":"pink-light5"}},[e("w-icon",{staticClass:"mr1",attrs:{sm:""}},[t._v("mdi mdi-heart")]),t._v("like it")],1)],1),e("title-link",{attrs:{h2:""}},[t._v("Toggleable state & closable")]),t._m(2),e("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-tag
  v-model="tagOn"
  :bg-color="tagOn ? 'primary' : 'primary-light2'"
  dark
  lg>
  `+t._s("{{ tagOn ? 'active' : 'inactive' }}")+`
</w-tag>

<span class="ml4">
  Value:
  <code class="ml1">`+t._s("{{ tagOn }}")+`</code>
</span>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  tagOn: false
})
`)]},proxy:!0}])},[e("w-tag",{attrs:{"bg-color":t.tagOn1?"primary":"primary-light2",dark:"",lg:""},model:{value:t.tagOn1,callback:function(o){t.tagOn1=o},expression:"tagOn1"}},[t._v(t._s(t.tagOn1?"active":"inactive"))]),e("span",{staticClass:"ml4"},[t._v("Value:"),e("code",{staticClass:"ml1"},[t._v(t._s(t.tagOn1))])])],1),e("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-tag
  v-model="tagOn"
  :color="tagOn ? 'primary' : 'grey'"
  lg
  round
  outline
  width="5.5em">
  <w-icon v-if="tagOn" class="ml-1 mr1">wi-check</w-icon>
  `+t._s("{{ tagOn ? 'active' : 'inactive' }}")+`
</w-tag>

<span class="ml4">
  Value:
  <code class="ml1">`+t._s("{{ tagOn }}")+`</code>
</span>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  tagOn: false
})
`)]},proxy:!0}])},[e("w-tag",{attrs:{color:t.tagOn1?"primary":"grey",lg:"",round:"",outline:"",width:"5.5em"},model:{value:t.tagOn1,callback:function(o){t.tagOn1=o},expression:"tagOn1"}},[t.tagOn1?e("w-icon",{staticClass:"ml-1 mr1"},[t._v("wi-check")]):t._e(),t._v(t._s(t.tagOn1?"active":"inactive"))],1),e("span",{staticClass:"ml4"},[t._v("Value:"),e("code",{staticClass:"ml1"},[t._v(t._s(t.tagOn1))])])],1),e("h3",[t._v("Closable tag")]),e("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-tag
  v-model="tagOn"
  closable
  lg
  :outline="tagOn"
  color="primary"
  :width="145">
  v-model & close
</w-tag>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  tagOn: true
})`)]},proxy:!0}])},[e("w-tag",{attrs:{closable:"",lg:"",outline:t.tagOn2,color:"primary",width:145},model:{value:t.tagOn2,callback:function(o){t.tagOn2=o},expression:"tagOn2"}},[t._v("v-model & close")])],1)],1)},g=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v("Like in most components, you can set a "),e("code",[t._v("color")]),t._v(" for the text and a "),e("code",[t._v("bg-color")]),t._v(` for the
background.`)])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v("The tag size can be controlled via the preset sizes "),e("code",[t._v("xs")]),t._v(", "),e("code",[t._v("sm")]),t._v(", "),e("code",[t._v("md")]),t._v(`,
`),e("code",[t._v("lg")]),t._v(", "),e("code",[t._v("xl")]),t._v(", or via the "),e("code",[t._v("width")]),t._v(" and "),e("code",[t._v("height")]),t._v(" props.")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v("When a tag has a "),e("code",[t._v("v-model")]),t._v(" or "),e("code",[t._v("value")]),t._v(`, it becomes toggleable (two different states) and clickable.
When the user clicks it, its `),e("code",[t._v("v-model")]),t._v(" boolean value is updated.")])}];const d={data:()=>({tagOn1:!1,tagOn2:!0})},l={};var m=n(d,i,g,!1,v,null,null,null);function v(t){for(let a in l)this[a]=l[a]}var u=function(){return m.exports}(),_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"w-divider my12"}),e("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),e("component-api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),e("component-api",{attrs:{items:t.slots,title:"Slots"}}),e("component-api",{attrs:{items:t.events,title:"Events"}})],1)},p=[];const h={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>When a tag has a <code>v-model</code> or <code>value</code>, it becomes toggleable (two different states) and clickable. When the user clicks it, its <code>v-model</code> boolean value is updated.',color:`Applies a color to the tag's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the tag's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,dark:"When set to true, the text color will be set to white.",shadow:"Applies a drop shadow to the tag and removes the default border.",tile:"Removes the default border-radius and sets sharp edges on the tag.",round:"Sets a maximum border-radius on the corners of the tag, giving it a round look.",closable:"Adds a close button in the tag. On click of that button, the <code>v-model</code> boolean value is updated. You can then decide to hide the tag with a v-if or v-show based on the <code>v-model</code> value.",outline:"The outline style applies the provided <code>color</code> (by default the color is inherited) to the text and border and no background color is set.",noBorder:"Removes the default border from the tag element.",xs:"Sets the size of the tag.",sm:"Sets the size of the tag.",md:"Sets the size of the tag.",lg:"Sets the size of the tag.",xl:"Sets the size of the tag.",width:"Sets a width on the tag.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",height:"Sets a height on the tag.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value."},w={default:{description:"The tag content."}},f={input:{description:"For vue 2 only.<br>If a <code>value</code> or <code>v-model</code> is provided, the tag becomes toggleable on click (two states).<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"A Boolean representing the active state of the tag."}},"update:modelValue":{description:"For vue 3 only.<br>If a <code>model-value</code> or <code>v-model</code> is provided, the tag becomes toggleable on click (two states).<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"A Boolean representing the active state of the tag."}}},y={data:()=>({propsDescs:h,slots:w}),computed:{props(){return r.props},events(){return r.emits.reduce((t,a)=>(t[a]=f[a]||{})&&t,{})}}},s={};var b=n(y,_,p,!1,x,null,null,null);function x(t){for(let a in s)this[a]=s[a]}var k=function(){return b.exports}(),O=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",[e("ui-component-title",[t._v("w-tag")]),e("examples"),e("api")],1)},C=[];const S={components:{Examples:u,Api:k}},c={};var $=n(S,O,C,!1,A,null,null,null);function A(t){for(let a in c)this[a]=c[a]}var V=function(){return $.exports}();export{V as default};
