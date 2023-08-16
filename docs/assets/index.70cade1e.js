import{n as t,z as l}from"./index.e31dd236.js";var i=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",[r("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("Circular progress & linear progress")]),r("p",{staticClass:"my4"},[e._v("First choose your progress style:")]),r("w-tabs",{attrs:{items:[{title:"Circular"},{title:"Linear"}],card:"","content-class":"pl6"},scopedSlots:e._u([{key:"item-content.1",fn:function(){return[r("title-link",{attrs:{h2:""}},[e._v("Default indeterminate progress & colors")]),r("p",[e._v("Like in most components, you can set a "),r("code",[e._v("color")]),e._v(" for the text and a "),r("code",[e._v("bg-color")]),e._v(` for the
background.`),r("br"),e._v(`
By default, the progress foreground color is `),r("code",[e._v("primary")]),e._v(".")]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-progress.ma1(circle)
w-progress.ma1(circle color="blue")
w-progress.ma1(circle color="green")

.title3.my6 Mixing colors
w-progress.ma1(circle color="yellow" bg-color="cyan")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-progress class="ma1" circle></w-progress>
<w-progress class="ma1" circle color="blue"></w-progress>
<w-progress class="ma1" circle color="green"></w-progress>

<div class="title3 my6">Mixing colors</div>
<w-progress
  class="ma1"
  circle
  color="yellow"
  bg-color="cyan">
</w-progress>
`)]},proxy:!0}])},[r("w-progress",{staticClass:"ma1",attrs:{circle:""}}),r("w-progress",{staticClass:"ma1",attrs:{circle:"",color:"blue"}}),r("w-progress",{staticClass:"ma1",attrs:{circle:"",color:"green"}}),r("h3",[e._v("Mixing colors")]),r("w-progress",{staticClass:"ma1",attrs:{circle:"",color:"yellow","bg-color":"cyan"}})],1),r("title-link",{attrs:{h2:""}},[e._v("Progress value")]),r("p",[e._v("The value can be given as a number or a string.")]),r("p",[e._v("When the value is "),r("code",[e._v("undefined")]),e._v(", "),r("code",[e._v("-1")]),e._v(` or not provided at all, it will be assumed
indeterminate.`)]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-progress.ma1(circle :value="undefined")
w-progress.ma1.mr8(circle :value="-1")

w-progress.ma1(circle value="0")
w-progress.ma1(circle value="12.5")
w-progress.ma1(circle value="25")
w-progress.ma1(circle value="50")
w-progress.ma1(circle value="75")
w-progress.ma1(circle value="100")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-progress class="ma1" circle :value="undefined"></w-progress>
<w-progress class="ma1 mr8" circle :value="-1"></w-progress>

<w-progress class="ma1" circle value="0"></w-progress>
<w-progress class="ma1" circle value="12.5"></w-progress>
<w-progress class="ma1" circle value="25"></w-progress>
<w-progress class="ma1" circle value="50"></w-progress>
<w-progress class="ma1" circle value="75"></w-progress>
<w-progress class="ma1" circle value="100"></w-progress>
`)]},proxy:!0}])},[r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:void 0}}),r("w-progress",{staticClass:"ma1 mr8",attrs:{circle:"",value:-1}}),r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"0"}}),r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"12.5"}}),r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"25"}}),r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"50"}}),r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"75"}}),r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"100"}})],1),r("h3",[e._v("Updated value example")]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress(circle :value="progress")')]},proxy:!0},{key:"html",fn:function(){return[e._v('<w-progress circle :value="progress"></w-progress>')]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  progress: 0
}),

mounted () {
  // Emulating progress.
  setInterval(() => {
    this.progress += 10
    if (this.progress === 100) this.progress = 0
  }, 700)
}
`)]},proxy:!0}])},[r("w-progress",{attrs:{circle:"",value:e.progress}})],1),r("title-link",{attrs:{h2:""}},[e._v("Size & stroke thickness")]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-progress.ma1(circle value="38" color="blue")
w-progress.ma1(circle value="38" size="4em" color="blue")
w-progress.ma1.mr8(circle value="38" size="5em" color="blue")

w-progress.ma1(circle value="38" size="6em" :stroke="2" color="blue")
w-progress.ma1(circle value="38" size="6em" :stroke="15" color="blue")
w-progress.ma1(circle value="38" size="6em" :stroke="40" color="blue")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-progress
  class="ma1"
  circle
  value="38"
  color="blue">
</w-progress>

<w-progress
  class="ma1"
  circle
  value="38"
  size="4em"
  color="blue">
</w-progress>

<w-progress
  class="ma1 mr8"
  circle
  value="38"
  size="5em"
  color="blue">
</w-progress>

<w-progress
  class="ma1"
  circle
  value="38"
  size="6em"
  :stroke="2"
  color="blue">
</w-progress>

<w-progress
  class="ma1"
  circle
  value="38"
  size="6em"
  :stroke="15"
  color="blue">
</w-progress>

<w-progress
  class="ma1"
  circle
  value="38"
  size="6em"
  :stroke="40"
  color="blue">
</w-progress>
`)]},proxy:!0}])},[r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"38",color:"blue"}}),r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"38",size:"4em",color:"blue"}}),r("w-progress",{staticClass:"ma1 mr8",attrs:{circle:"",value:"38",size:"5em",color:"blue"}}),r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"38",size:"6em",stroke:2,color:"blue"}}),r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"38",size:"6em",stroke:15,color:"blue"}}),r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"38",size:"6em",stroke:40,color:"blue"}})],1),r("title-link",{attrs:{h2:""}},[e._v("Progress value with label")]),r("p",[e._v("The default label displays the rounded value without the "),r("code",[e._v("%")]),e._v(" sign, so it fits in smaller circles.")]),r("p",[e._v("You can customize the label to display the value as you wish.")]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`p Default label - Custom label

w-progress.ma1.mr8(circle v-model="progress" size="5em" label)

w-progress.ma1(circle v-model="progress" size="5em")
  strong `+e._s("{{ progress }}")+"%")]},proxy:!0},{key:"html",fn:function(){return[e._v(`<p>Default label - Custom label</p>

<w-progress
  class="ma1 mr8"
  circle
  v-model="progress"
  size="5em"
  label>
</w-progress>

<w-progress
  class="ma1"
  circle
  v-model="progress"
  size="5em">
  <strong>`+e._s("{{ progress }}")+`%</strong>
</w-progress>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  progress: 37.86
})
`)]},proxy:!0}])},[r("p",[e._v("Default label \xA0 - \xA0 Custom label")]),r("w-progress",{staticClass:"ma1 mr8",attrs:{circle:"",size:"5em",label:""},model:{value:e.progress1,callback:function(o){e.progress1=o},expression:"progress1"}}),r("w-progress",{staticClass:"ma1",attrs:{circle:"",size:"5em"},model:{value:e.progress1,callback:function(o){e.progress1=o},expression:"progress1"}},[r("strong",[e._v(e._s(e.progress1)+"%")])])],1),r("h3",[e._v("Providing a color for the custom label")]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-progress.ma1(
  circle
  value="38"
  size="3em"
  label
  label-color="indigo-light4")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-progress
  class="ma1"
  circle
  value="38"
  size="3em"
  label
  label-color="indigo-light4">
</w-progress>
`)]},proxy:!0}])},[r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"38",size:"3em",label:"","label-color":"indigo-light4"}})],1),r("title-link",{attrs:{h2:""}},[e._v("Round linecap & default flat line cap")]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-progress.ma1(circle value="38" size="6em" round-cap)
w-progress.ma1(circle value="38" size="6em")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-progress
  class="ma1"
  circle
  value="38"
  size="6em"
  round-cap>
</w-progress>

<w-progress
  class="ma1"
  circle
  value="38"
  size="6em">
</w-progress>
`)]},proxy:!0}])},[r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"38",size:"6em","round-cap":""}}),r("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"38",size:"6em"}})],1)]},proxy:!0},{key:"item-content.2",fn:function(){return[r("title-link",{attrs:{h2:""}},[e._v("Default indeterminate progress & colors")]),r("p",[e._v("Like in most components, you can set a "),r("code",[e._v("color")]),e._v(" for the text and a "),r("code",[e._v("bg-color")]),e._v(` for the
background.`)]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-progress
w-progress.mt4(color="blue")
w-progress.mt4(color="green")
.title3.my6 Mixing colors
w-progress.mt4(color="yellow" bg-color="cyan")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-progress></w-progress>
<w-progress class="mt4" color="blue"></w-progress>
<w-progress class="mt4" color="green"></w-progress>
<div class="title3 my6">Mixing colors</div>
<w-progress class="mt4" color="yellow" bg-color="cyan"></w-progress>
`)]},proxy:!0}])},[r("w-progress"),r("w-progress",{staticClass:"mt4",attrs:{color:"blue"}}),r("w-progress",{staticClass:"mt4",attrs:{color:"green"}}),r("h3",[e._v("Mixing colors")]),r("w-progress",{staticClass:"mt4",attrs:{color:"yellow","bg-color":"cyan"}})],1),r("title-link",{attrs:{h2:""}},[e._v("Size")]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-progress(value="38" size="1em" color="blue")
w-progress.mt4(value="38" size="2.5em" color="blue")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-progress value="38" size="1em" color="blue"></w-progress>
<w-progress class="mt4" value="38" size="2.5em" color="blue"></w-progress>
`)]},proxy:!0}])},[r("w-progress",{attrs:{value:"38",size:"1em",color:"blue"}}),r("w-progress",{staticClass:"mt4",attrs:{value:"38",size:"2.5em",color:"blue"}})],1),r("title-link",{attrs:{h2:""}},[e._v("Tile & round")]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-progress(value="38" size="1.4em" tile color="light-blue")
w-progress.mt4(value="38" size="1.4em" round color="light-blue")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-progress
  value="38"
  size="1.4em"
  tile
  color="light-blue">
</w-progress>

<w-progress
  class="mt4"
  value="38"
  size="1.4em"
  round
  color="light-blue">
</w-progress>
`)]},proxy:!0}])},[r("w-progress",{attrs:{value:"38",size:"1.4em",tile:"",color:"light-blue"}}),r("w-progress",{staticClass:"mt4",attrs:{value:"38",size:"1.4em",round:"",color:"light-blue"}})],1),r("title-link",{attrs:{h2:""}},[e._v("Outline & shadow")]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-progress(
  value="38"
  size="1em"
  outline
  round
  color="light-blue")
w-progress.mt4(
  value="38"
  size="1em"
  shadow
  color="light-blue")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-progress
  value="38"
  size="1em"
  outline
  round
  color="light-blue">
</w-progress>

<w-progress
  class="mt4"
  value="38"
  size="1em"
  shadow
  color="light-blue">
</w-progress>
`)]},proxy:!0}])},[r("w-progress",{attrs:{value:"38",size:"1em",outline:"",round:"",color:"light-blue"}}),r("w-progress",{staticClass:"mt4",attrs:{value:"38",size:"1em",shadow:"",color:"light-blue"}})],1),r("title-link",{attrs:{h2:""}},[e._v("Stripes (only if determinate)")]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-progress(
  value="38"
  size="1em"
  outline
  round
  color="light-blue"
  stripes)

w-progress.mt4(
  value="38"
  size="1.4em"
  outline
  round
  color="primary"
  stripes)`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-progress
  value="38"
  size="1em"
  outline
  round
  color="light-blue"
  stripes>
</w-progress>

<w-progress
  class="mt4"
  value="38"
  size="1.4em"
  outline
  round
  color="primary"
  stripes>
</w-progress>
`)]},proxy:!0}])},[r("w-progress",{attrs:{value:"38",size:"1em",outline:"",round:"",color:"light-blue",stripes:""}}),r("w-progress",{staticClass:"mt4",attrs:{value:"38",size:"1.4em",outline:"",round:"",color:"primary",stripes:""}})],1),r("title-link",{attrs:{h2:""}},[e._v("Progress value with label")]),r("h3",[e._v("Default label")]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-progress(v-model="progress" size="1.3em" round color="primary" label)
w-progress.mt4(v-model="progress" size="1.3em" outline round label)`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-progress
  v-model="progress"
  size="1.3em"
  round
  color="primary"
  label>
</w-progress>

<w-progress
  class="mt4"
  v-model="progress"
  size="1.3em"
  outline
  round
  label>
</w-progress>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  progress: 37.86
})
`)]},proxy:!0}])},[r("w-progress",{attrs:{size:"1.3em",round:"",color:"primary",label:""},model:{value:e.progress1,callback:function(o){e.progress1=o},expression:"progress1"}}),r("w-progress",{staticClass:"mt4",attrs:{size:"1.3em",outline:"",round:"",label:""},model:{value:e.progress1,callback:function(o){e.progress1=o},expression:"progress1"}})],1),r("h3",[e._v("Custom label")]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-progress(v-model="progress" size="1.5em" outline round)
  strong `+e._s("{{ progress }}")+"%")]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-progress v-model="progress" size="1.5em" outline round>
  <strong>`+e._s("{{ progress }}")+`%</strong>
</w-progress>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  progress: 37.86
})
`)]},proxy:!0}])},[r("w-progress",{staticClass:"mt3",attrs:{size:"1.5em",outline:"",round:""},model:{value:e.progress1,callback:function(o){e.progress1=o},expression:"progress1"}},[r("strong",[e._v(e._s(e.progress1)+"%")])])],1),r("h3",[e._v("Providing a color for the custom label")]),r("p",[e._v("The color of the label should be readable on both the progress and the background."),r("br"),e._v(`
So you are free to decide what is the best color.`)]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-progress(
  value="50.3"
  size="2em"
  outline
  round
  label
  label-color="indigo-light4")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-progress
  value="50.3"
  size="2em"
  outline
  round
  label
  label-color="indigo-light4">
</w-progress>
`)]},proxy:!0}])},[r("w-progress",{staticClass:"mt2",attrs:{value:"50.3",size:"2em",outline:"",round:"",label:"","label-color":"indigo-light4"}})],1),r("title-link",{attrs:{h2:""}},[e._v("Round linecap & default flat line cap")]),r("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-progress(value="38" size="2em" round round-cap)
w-progress.mt4(value="38" size="2em" round)`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-progress value="38" size="2em" round round-cap></w-progress>
<w-progress class="mt4" value="38" size="2em" round></w-progress>`)]},proxy:!0}])},[r("w-progress",{attrs:{value:"38",size:"2em",round:"","round-cap":""}}),r("w-progress",{staticClass:"mt4",attrs:{value:"38",size:"2em",round:""}})],1)]},proxy:!0}])})],1)},u=[];const p={data:()=>({progress1:37.86,progress:0,linearOrCircular:[{label:"Linear",value:!1},{label:"Circular",value:!0}],circular:!0,intervalId:null}),mounted(){this.intervalId=setInterval(()=>{this.progress+=10,this.progress===100&&(this.progress=0)},700)},beforeDestroy(){clearInterval(this.intervalId)}},n={};var g=t(p,i,u,!1,m,"49ca5452",null,null);function m(e){for(let s in n)this[s]=n[s]}var v=function(){return g.exports}(),d=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",[r("div",{staticClass:"w-divider my12"}),r("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),r("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),r("component-api",{attrs:{items:e.slots,title:"Slots"}}),r("component-api",{attrs:{items:e.events,title:"Events"}})],1)},w=[];const h={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Accepts a percentage value (ranging from 0 to 100) as a number or a string.<br>If the value is <code>undefined</code>, <code>-1</code> or not provided at all, it will be assumed indeterminate.',label:"Shows or hides the label of the progress containing the current progress value.",roundCap:"Applies a round line-cap to the progress.",color:'Applies a foreground color to the progress. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:`Applies a color to the progress' background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a color to the progress label's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,size:"Sets the size of the progress element: the width if circular, or the height if linear.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",circle:"Sets the progress style to circle.",stroke:"Only applies to a circular progress.<br>Sets the thickness of the circular progress.",shadow:"Only applies to a linear progress.<br>Applies a drop shadow to the progress bar.",tile:"Only applies to a linear progress.<br>Removes the default border-radius and sets sharp edges on the progress bar.",round:"Only applies to a linear progress.<br>Sets a maximum border-radius on the corners of the progress, giving it a round look.",outline:"Only applies to a linear progress.<br>When using the linear progress, the outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the progress, border and label and no background color is set.",stripes:"Only applies to a linear progress.<br>Applies an animated stripes background on the progress bar.",absolute:"Sets the CSS position of the progress element to <code>absolute</code>.",fixed:"Sets the CSS position of the progress element to <code>fixed</code>.",top:"Places the progress element at the top of the screen when the <code>fixed</code> prop is set to true or at the top of its container when the <code>absolute</code> prop is set to true.",bottom:"Places the progress element at the bottom of the screen when the <code>fixed</code> prop is set to true or at the bottom of its container when the <code>absolute</code> prop is set to true.",zIndex:"Applies a z-index (positive or negative integer) to the progress element."},_={default:{description:"Provide a custom progress label."}},f={},b={data:()=>({propsDescs:h,slots:_}),computed:{props(){return l.props},events(){return l.emits.reduce((e,s)=>(e[s]={description:f[s]||""})&&e,{})}}},a={};var y=t(b,d,w,!1,x,null,null,null);function x(e){for(let s in a)this[s]=a[s]}var k=function(){return y.exports}(),z=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("main",[r("ui-component-title",[e._v("w-progress")]),r("examples"),r("api")],1)},C=[];const S={components:{Examples:v,Api:k}},c={};var $=t(S,z,C,!1,A,null,null,null);function A(e){for(let s in c)this[s]=c[s]}var D=function(){return $.exports}();export{D as default};
