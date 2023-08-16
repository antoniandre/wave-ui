import{n as i,a as s}from"./index.e31dd236.js";var c=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",{staticStyle:{"max-width":"1000px"}},[e("title-link",{attrs:{h2:"",slug:"show-and-hide-with-v-model"}},[r._v("Show / hide with v-model")]),r._m(0),e("example",{attrs:{"content-class":"pt5"},scopedSlots:r._u([{key:"pug",fn:function(){return[r._v('w-button(@click="showAlert = !showAlert" outline) '+r._s(r.showAlert?"Hide":"Show")+` alert

w-transition-expand(y)
  w-alert(v-if="showAlert" color="success") The alert is now visible.`)]},proxy:!0},{key:"html",fn:function(){return[r._v(`<w-button
  @click="showAlert = !showAlert"
  outline>
  `+r._s(r.showAlert?"Hide":"Show")+` alert
</w-button>

<w-transition-expand y>
  <w-alert v-if="showAlert" color="success">
    The alert is now visible.
  </w-alert>
</w-transition-expand>`)]},proxy:!0},{key:"js",fn:function(){return[r._v(`data: () => ({
  showAlert: false
})
`)]},proxy:!0}])},[e("w-button",{attrs:{outline:""},on:{click:function(a){r.showAlert=!r.showAlert}}},[r._v(r._s(r.showAlert?"Hide":"Show")+" alert")]),e("w-transition-expand",{attrs:{y:""}},[r.showAlert?e("w-alert",{attrs:{color:"success"}},[r._v("The alert is now visible.")]):r._e()],1)],1),e("title-link",{attrs:{h2:""}},[r._v("Colors")]),r._m(1),e("example",{attrs:{"content-class":"py0"},scopedSlots:r._u([{key:"pug",fn:function(){return[r._v(`w-alert(color="primary") This is an alert with a primary color.
w-alert(bg-color="primary" color="white") This is an alert with a primary background color.
w-alert(color="pink") This is an alert with a pink color.
w-alert(bg-color="pink" color="white") This is an alert with a pink background color.

p You can even mix different colors and background colors.
w-alert(bg-color="purple" color="cyan-light4") This is an alert with a purple background and cyan color.
w-alert(bg-color="cyan-light4" color="purple") This is an alert with a cyan background and purple color.`)]},proxy:!0},{key:"html",fn:function(){return[r._v(`<w-alert color="primary">
  This is an alert with a primary color.
</w-alert>

<w-alert bg-color="primary" color="white">
  This is an alert with a primary background color.
</w-alert>

<w-alert color="pink">
  This is an alert with a pink color.
</w-alert>

<w-alert bg-color="pink" color="white">
  This is an alert with a pink background color.
</w-alert>

<p>
  You can even mix different colors and background colors.
</p>

<w-alert bg-color="purple" color="cyan-light4">
  This is an alert with a purple background and cyan color.
</w-alert>

<w-alert bg-color="cyan-light4" color="purple">
  This is an alert with a cyan background and purple color.
</w-alert>
`)]},proxy:!0}])},[e("w-alert",{attrs:{color:"primary"}},[r._v("This is an alert with a primary color.")]),e("w-alert",{attrs:{"bg-color":"primary",color:"white"}},[r._v("This is an alert with a primary background color.")]),e("w-alert",{attrs:{color:"pink"}},[r._v("This is an alert with a pink color.")]),e("w-alert",{attrs:{"bg-color":"pink",color:"white"}},[r._v("This is an alert with a pink background color.")]),e("p",[r._v("You can even mix different colors and background colors.")]),e("w-alert",{attrs:{"bg-color":"purple",color:"cyan-light4"}},[r._v("This is an alert with a purple background and cyan color.")]),e("w-alert",{attrs:{"bg-color":"cyan-light4",color:"purple"}},[r._v("This is an alert with a cyan background and purple color.")])],1),e("title-link",{attrs:{h2:"",slug:"types"}},[r._v("Types (adds an icon)")]),e("h3",[r._v("Normal")]),e("example",{attrs:{"content-class":"py0"},scopedSlots:r._u([{key:"pug",fn:function(){return[r._v(`w-alert(success) This is a success alert.
w-alert(warning) This is a warning alert.
w-alert(error) This is an error alert.
w-alert(info) This is an info alert.`)]},proxy:!0},{key:"html",fn:function(){return[r._v(`<w-alert success>This is a success alert.</w-alert>
<w-alert warning>This is a warning alert.</w-alert>
<w-alert error>This is an error alert.</w-alert>
<w-alert info>This is an info alert.</w-alert>
`)]},proxy:!0}])},[e("w-alert",{attrs:{success:""}},[r._v("This is a success alert.")]),e("w-alert",{attrs:{warning:""}},[r._v("This is a warning alert.")]),e("w-alert",{attrs:{error:""}},[r._v("This is an error alert.")]),e("w-alert",{attrs:{info:""}},[r._v("This is an info alert.")])],1),e("h3",[r._v("Plain")]),e("example",{attrs:{"content-class":"py0"},scopedSlots:r._u([{key:"pug",fn:function(){return[r._v(`w-alert(success plain) This is a success alert.
w-alert(warning plain) This is a warning alert.
w-alert(error plain) This is an error alert.
w-alert(info plain) This is an info alert.`)]},proxy:!0},{key:"html",fn:function(){return[r._v(`<w-alert success plain>This is a success alert.</w-alert>
<w-alert warning plain>This is a warning alert.</w-alert>
<w-alert error plain>This is an error alert.</w-alert>
<w-alert info plain>This is an info alert.</w-alert>
`)]},proxy:!0}])},[e("w-alert",{attrs:{success:"",plain:""}},[r._v("This is a success alert.")]),e("w-alert",{attrs:{warning:"",plain:""}},[r._v("This is a warning alert.")]),e("w-alert",{attrs:{error:"",plain:""}},[r._v("This is an error alert.")]),e("w-alert",{attrs:{info:"",plain:""}},[r._v("This is an info alert.")])],1),e("title-link",{attrs:{h2:""}},[r._v("Custom icon")]),e("example",{attrs:{"content-class":"py0"},scopedSlots:r._u([{key:"pug",fn:function(){return[r._v('w-alert(bg-color="yellow-light5" color="amber" icon="wi-star") This is an alert with a custom icon.')]},proxy:!0},{key:"html",fn:function(){return[r._v(`<w-alert
  bg-color="yellow-light5"
  color="amber"
  icon="wi-star">
  This is an alert with a custom icon.
</w-alert>
`)]},proxy:!0}])},[e("w-alert",{attrs:{"bg-color":"yellow-light5",color:"amber",icon:"wi-star"}},[r._v("This is an alert with a custom icon.")])],1),e("title-link",{attrs:{h2:""}},[r._v("Icon outside")]),e("example",{attrs:{"content-class":"py0"},scopedSlots:r._u([{key:"pug",fn:function(){return[r._v(`w-alert(success icon-outside) This is a success alert.
w-alert(warning icon-outside) This is a warning alert.
w-alert(error icon-outside) This is an error alert.
w-alert(info icon-outside) This is an info alert.
w-alert(bg-color="yellow-light5" color="amber" icon="mdi mdi-star-circle" icon-outside)
  | This is an alert with a custom icon.`)]},proxy:!0},{key:"html",fn:function(){return[r._v(`<w-alert success icon-outside>This is a success alert.</w-alert>
<w-alert warning icon-outside>This is a warning alert.</w-alert>
<w-alert error icon-outside>This is an error alert.</w-alert>
<w-alert info icon-outside>This is an info alert.</w-alert>
<w-alert
  bg-color="yellow-light5"
  color="amber"
  icon="mdi mdi-star-circle"
  icon-outside>
  This is an alert with a custom icon.
</w-alert>
`)]},proxy:!0}])},[e("w-alert",{attrs:{success:"","icon-outside":""}},[r._v("This is a success alert.")]),e("w-alert",{attrs:{warning:"","icon-outside":""}},[r._v("This is a warning alert.")]),e("w-alert",{attrs:{error:"","icon-outside":""}},[r._v("This is an error alert.")]),e("w-alert",{attrs:{info:"","icon-outside":""}},[r._v("This is an info alert.")]),e("w-alert",{attrs:{"bg-color":"yellow-light5",color:"amber",icon:"mdi mdi-star-circle","icon-outside":""}},[r._v("This is an alert with a custom icon.")])],1),e("title-link",{attrs:{h2:""}},[r._v("Outline")]),e("example",{attrs:{"content-class":"py0"},scopedSlots:r._u([{key:"pug",fn:function(){return[r._v(`w-alert(color="primary" outline) This is a normal alert with a primary color.
w-alert(success outline) This is a success alert.
w-alert(warning outline) This is a warning alert.
w-alert(error outline) This is an error alert.
w-alert(info outline) This is an info alert.`)]},proxy:!0},{key:"html",fn:function(){return[r._v(`<w-alert color="primary" outline>This is a normal alert with a primary color.</w-alert>
<w-alert success outline>This is a success alert.</w-alert>
<w-alert warning outline>This is a warning alert.</w-alert>
<w-alert error outline>This is an error alert.</w-alert>
<w-alert info outline>This is an info alert.</w-alert>
`)]},proxy:!0}])},[e("w-alert",{attrs:{color:"primary",outline:""}},[r._v("This is a normal alert with a primary color.")]),e("w-alert",{attrs:{success:"",outline:""}},[r._v("This is a success alert.")]),e("w-alert",{attrs:{warning:"",outline:""}},[r._v("This is a warning alert.")]),e("w-alert",{attrs:{error:"",outline:""}},[r._v("This is an error alert.")]),e("w-alert",{attrs:{info:"",outline:""}},[r._v("This is an info alert.")])],1),e("title-link",{attrs:{h2:""}},[r._v("Borders")]),e("example",{attrs:{"content-class":"py0"},scopedSlots:r._u([{key:"pug",fn:function(){return[r._v(`w-alert(success light no-border) This is a success alert with no border.
w-alert(color="primary" no-border) This is a normal alert with no border.
w-alert(bg-color="cyan-light4" color="purple" no-border) This is an alert with a cyan background, purple color and no border.
.w-flex.wrap.ma-2
  w-alert.grow.ma2(color="primary" border-left) This is a normal alert with a left border.
  w-alert.grow.ma2(color="primary" border-right) This is a normal alert with a right border.
.w-flex.wrap.mx-2.mt2
  w-alert.grow.ma2(color="primary" border-top) This is a normal alert with a top border.
  w-alert.grow.ma2(color="primary" border-bottom) This is a normal alert with a left border.`)]},proxy:!0},{key:"html",fn:function(){return[r._v(`<w-alert success light no-border>This is a success alert with no border.</w-alert>
<w-alert color="primary" no-border>This is a normal alert with no border.</w-alert>
<w-alert
  bg-color="cyan-light4"
  color="purple"
  no-border>
  This is an alert with a cyan background, purple color and no border.
</w-alert>
<div class="w-flex wrap ma-2">
  <w-alert
    class="grow ma2"
    color="primary"
    border-left>
    This is a normal alert with a left border.
  </w-alert>
  <w-alert
    class="grow ma2"
    color="primary"
    border-right>
    This is a normal alert with a right border.
  </w-alert>
</div>
<div class="w-flex wrap mx-2 mt2">
  <w-alert
    class="grow ma2"
    color="primary"
    border-top>
    This is a normal alert with a top border.
  </w-alert>
  <w-alert
    class="grow ma2"
    color="primary"
    border-bottom>
    This is a normal alert with a left border.
  </w-alert>
</div>
`)]},proxy:!0}])},[e("w-alert",{attrs:{success:"",light:"","no-border":""}},[r._v("This is a success alert with no border.")]),e("w-alert",{attrs:{color:"primary","no-border":""}},[r._v("This is a normal alert with no border.")]),e("w-alert",{attrs:{"bg-color":"cyan-light4",color:"purple","no-border":""}},[r._v("This is an alert with a cyan background, purple color and no border.")]),e("div",{staticClass:"w-flex wrap ma-2"},[e("w-alert",{staticClass:"grow ma2",attrs:{color:"primary","border-left":""}},[r._v("This is a normal alert with a left border.")]),e("w-alert",{staticClass:"grow ma2",attrs:{color:"primary","border-right":""}},[r._v("This is a normal alert with a right border.")])],1),e("div",{staticClass:"w-flex wrap mx-2 mt2"},[e("w-alert",{staticClass:"grow ma2",attrs:{color:"primary","border-top":""}},[r._v("This is a normal alert with a top border.")]),e("w-alert",{staticClass:"grow ma2",attrs:{color:"primary","border-bottom":""}},[r._v("This is a normal alert with a left border.")])],1)],1),e("title-link",{attrs:{h2:""}},[r._v("Tile, round & shadow")]),e("example",{attrs:{"content-class":"py0"},scopedSlots:r._u([{key:"pug",fn:function(){return[r._v(`w-alert(color="primary" tile) This is a tile alert.
w-alert(color="primary" round) This is a round alert.
w-alert(color="primary" shadow) This is a normal alert with a shadow.`)]},proxy:!0},{key:"html",fn:function(){return[r._v(`<w-alert color="primary" tile>This is a tile alert.</w-alert>
<w-alert color="primary" round>This is a round alert.</w-alert>
<w-alert color="primary" shadow>This is a normal alert with a shadow.</w-alert>
`)]},proxy:!0}])},[e("w-alert",{attrs:{color:"primary",tile:""}},[r._v("This is a tile alert.")]),e("w-alert",{attrs:{color:"primary",round:""}},[r._v("This is a round alert.")]),e("w-alert",{attrs:{color:"primary",shadow:""}},[r._v("This is a normal alert with a shadow.")])],1),e("title-link",{attrs:{h2:""}},[r._v("Dismiss")]),e("example",{scopedSlots:r._u([{key:"pug",fn:function(){return[r._v(`w-alert.mt0.mb2(v-model="dismissible1" color="primary" dismiss) This is a dismissible alert.
w-alert.my2(v-model="dismissible2" dismiss error) This is a dismissible error type alert.
w-alert.my2(v-model="dismissible3" color="amber" dismiss round) This is a dismissible round alert.
w-button.mt2(
  @click="dismissible1 = dismissible2 = dismissible3 = true"
  :disabled="dismissible1 && dismissible2 && dismissible3") Reset alerts`)]},proxy:!0},{key:"html",fn:function(){return[r._v(`<w-alert
  v-model="dismissible1"
  color="primary"
  dismiss>
  This is a dismissible alert.
</w-alert>
<w-alert
  v-model="dismissible2"
  dismiss
  error>
  This is a dismissible error type alert.
</w-alert>
<w-alert
  v-model="dismissible3"
  color="amber"
  dismiss
  round>
  This is a dismissible round alert.
</w-alert>
<w-button
  @click="dismissible1 = dismissible2 = dismissible3 = true"
  :disabled="dismissible1 && dismissible2 && dismissible3">
  Reset alerts
</button>`)]},proxy:!0},{key:"js",fn:function(){return[r._v(`data: () => ({
  dismissible1: true,
  dismissible2: true,
  dismissible3: true
})
`)]},proxy:!0}])},[e("w-alert",{staticClass:"mt0 mb2",attrs:{color:"primary",dismiss:""},model:{value:r.dismissible1,callback:function(a){r.dismissible1=a},expression:"dismissible1"}},[r._v("This is a dismissible alert.")]),e("w-alert",{staticClass:"my2",attrs:{dismiss:"",error:""},model:{value:r.dismissible2,callback:function(a){r.dismissible2=a},expression:"dismissible2"}},[r._v("This is a dismissible error type alert.")]),e("w-alert",{staticClass:"my2",attrs:{color:"amber",dismiss:"",round:""},model:{value:r.dismissible3,callback:function(a){r.dismissible3=a},expression:"dismissible3"}},[r._v("This is a dismissible round alert.")]),e("w-button",{staticClass:"mt2",attrs:{disabled:r.dismissible1&&r.dismissible2&&r.dismissible3},on:{click:function(a){r.dismissible1=r.dismissible2=r.dismissible3=!0}}},[r._v("Reset alerts")])],1),e("title-link",{attrs:{h2:""}},[r._v("Sizes")]),e("example",{attrs:{"content-class":"py0"},scopedSlots:r._u([{key:"pug",fn:function(){return[r._v(`w-alert(info xs) This is an extra small alert.
w-alert(info sm) This is a small alert.
w-alert(info md) This is a medium alert.
w-alert(info lg) This is a large alert.
w-alert(info xl) This is an extra large alert.`)]},proxy:!0},{key:"html",fn:function(){return[r._v(`<w-alert info xs>This is an extra small alert.</w-alert>
<w-alert info sm>This is a small alert.</w-alert>
<w-alert info md>This is a medium alert.</w-alert>
<w-alert info lg>This is a large alert.</w-alert>
<w-alert info xl>This is an extra large alert.</w-alert>`)]},proxy:!0}])},[e("w-alert",{attrs:{info:"",xs:""}},[r._v("This is an extra small alert.")]),e("w-alert",{attrs:{info:"",sm:""}},[r._v("This is a small alert.")]),e("w-alert",{attrs:{info:"",md:""}},[r._v("This is a medium alert.")]),e("w-alert",{attrs:{info:"",lg:""}},[r._v("This is a large alert.")]),e("w-alert",{attrs:{info:"",xl:""}},[r._v("This is an extra large alert.")])],1)],1)},h=[function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("p",[r._v(`By default alerts are visible, but if a value or v-model is provided,
it will show or hide according to it.`),e("br"),r._v(`
Like in this example you can add a transition to animate its apparition.`)])},function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("p",[r._v("Like in most components, you can apply a color to the text with the "),e("code",[r._v("color")]),r._v(` attribute,
and a color to the background with the `),e("code",[r._v("bg-color")]),r._v(" attribute.")])}];const d={data:()=>({showAlert:!1,dismissible1:!0,dismissible2:!0,dismissible3:!0})},o={};var w=i(d,c,h,!1,u,null,null,null);function u(r){for(let t in o)this[t]=o[t]}var m=function(){return w.exports}(),p=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",[e("div",{staticClass:"w-divider my12"}),e("title-link",{staticClass:"title1",attrs:{h2:""}},[r._v("API")]),e("component-api",{staticClass:"mt0",attrs:{items:r.props,descriptions:r.propsDescs,title:"Props"}}),e("component-api",{attrs:{items:r.slots,title:"Slots"}}),e("component-api",{attrs:{items:r.events,title:"Events"}})],1)},b=[];const v={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>This prop controls the visibility of the alert. Any truthy value will show the alert whereas any falsy value will hide it.',color:`Applies a color to the alert's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the alert's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:"Applies a drop shadow to the alert container.",tile:"Removes the default border-radius and sets sharp edges on the alert container.",round:"Sets a maximum border-radius on the corners of the alert container, giving it a round look.",icon:"Provide a custom icon string (e.g. <code>mdi mdi-star</code>) to display on the left of the alert message.",iconOutside:"If an icon is provided, this option changes the style and displays the icon on the left border.",plain:'Emphasizes a "typed" alert (one of <code>success</code>, <code>info</code>, <code>warning</code>, <code>error</code>) by applying a white text color and a full opacity background of the chosen type color.',dismiss:"Adds a close button (cross icon) on the right in the alert. Clicking on this button hides the alert.",success:"Sets the type of the alert, applying the <code>success</code> class (green color) and adding a success icon on the left in the alert.",info:"Sets the type of the alert, applying the <code>info</code> class (blue color) and adding an info icon on the left in the alert.",warning:"Sets the type of the alert, applying the <code>warning</code> class (orange color) and adding a warning icon on the left in the alert.",error:"Sets the type of the alert, applying the <code>error</code> class (red color) and adding an error icon on the left in the alert.",xs:"Sets the size of the alert.",sm:"Sets the size of the alert.",md:"Sets the size of the alert.",lg:"Sets the size of the alert.",xl:"Sets the size of the alert.",noBorder:"Removes the default border from the alert container.",borderLeft:"Adds a left border on the alert. Only one side-border can be applied at the same time.",borderRight:"Adds a right border on the alert. Only one side-border can be applied at the same time.",borderTop:"Adds a top border on the alert. Only one side-border can be applied at the same time.",borderBottom:"Adds a bottom border on the alert. Only one side-border can be applied at the same time.",outline:"The outline style applies the provided <code>color</code> (by default the color is inherited) to the text and border and no background color is set."},f={content:{description:"The alert content."}},y={input:"Emitted on alert dismiss/hide.<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted on alert dismiss/hide.<br>Updates the v-model value in Vue 3 only.",close:"Emitted on alert dismiss/hide."},_={data:()=>({propsDescs:v,slots:f}),computed:{props(){return s.props},events(){return s.emits.reduce((r,t)=>(r[t]={description:y[t]||""})&&r,{})}}},l={};var g=i(_,p,b,!1,T,null,null,null);function T(r){for(let t in l)this[t]=l[t]}var x=function(){return g.exports}(),k=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("main",[e("ui-component-title",[r._v("w-alert")]),e("examples"),e("api")],1)},S=[];const A={components:{Examples:m,Api:x}},n={};var $=i(A,k,S,!1,C,null,null,null);function C(r){for(let t in n)this[t]=n[t]}var R=function(){return $.exports}();export{R as default};
