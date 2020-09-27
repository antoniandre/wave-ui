(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["progress-examples-vue"],{"3d36":function(e,r,s){"use strict";s.r(r);var t=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",[s("w-card",{attrs:{"bg-color":"blue-light5"}},[s("p",[e._v("First choose your progress style:")]),s("w-radios",{staticClass:"title3",attrs:{items:e.linearOrCircular,inline:""},model:{value:e.circular,callback:function(r){e.circular=r},expression:"circular"}})],1),e.circular?s("div",[s("title-link",{attrs:{h2:""}},[e._v("Default indeterminate progress & colors")]),e._m(0),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress.ma1(circle)\nw-progress.ma1(circle color="blue")\nw-progress.ma1(circle color="green")\n\n.title3.my6 Mixing colors\nw-progress.ma1(circle color="yellow" bg-color="cyan")\n')]},proxy:!0}],null,!1,680422848)},[s("w-progress",{staticClass:"ma1",attrs:{circle:""}}),s("w-progress",{staticClass:"ma1",attrs:{circle:"",color:"blue"}}),s("w-progress",{staticClass:"ma1",attrs:{circle:"",color:"green"}}),s("h3",[e._v("Mixing colors")]),s("w-progress",{staticClass:"ma1",attrs:{circle:"",color:"yellow","bg-color":"cyan"}})],1),s("title-link",{attrs:{h2:""}},[e._v("Progress value")]),s("p",[e._v("The value can be given as a number or a string.")]),e._m(1),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress.ma1(circle :value="undefined")\nw-progress.ma1.mr8(circle :value="-1")\n\nw-progress.ma1(circle value="0")\nw-progress.ma1(circle value="12.5")\nw-progress.ma1(circle value="25")\nw-progress.ma1(circle value="50")\nw-progress.ma1(circle value="75")\nw-progress.ma1(circle value="100")\n')]},proxy:!0}],null,!1,1436851835)},[s("w-progress",{staticClass:"ma1",attrs:{circle:"",value:void 0}}),s("w-progress",{staticClass:"ma1 mr8",attrs:{circle:"",value:-1}}),s("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"0"}}),s("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"12.5"}}),s("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"25"}}),s("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"50"}}),s("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"75"}}),s("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"100"}})],1),s("h3",[e._v("Updated value example")]),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress(circle :value="progress")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  progress: 0\n}),\n\nmounted () {\n  // Emulating progress.\n  setInterval(() => {\n    this.progress += 10\n    if (this.progress === 100) this.progress = 0\n  }, 700)\n}\n")]},proxy:!0}],null,!1,3148491779)},[s("w-progress",{attrs:{circle:"",value:e.progress}})],1),s("title-link",{attrs:{h2:""}},[e._v("Size & stroke thickness")]),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress.ma1(circle value="38" color="blue")\nw-progress.ma1(circle value="38" size="4em" color="blue")\nw-progress.ma1.mr8(circle value="38" size="5em" color="blue")\n\nw-progress.ma1(circle value="38" size="6em" :stroke="2" color="blue")\nw-progress.ma1(circle value="38" size="6em" :stroke="15" color="blue")\nw-progress.ma1(circle value="38" size="6em" :stroke="40" color="blue")\n')]},proxy:!0}],null,!1,3194890626)},[s("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"38",color:"blue"}}),s("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"38",size:"4em",color:"blue"}}),s("w-progress",{staticClass:"ma1 mr8",attrs:{circle:"",value:"38",size:"5em",color:"blue"}}),s("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"38",size:"6em",stroke:2,color:"blue"}}),s("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"38",size:"6em",stroke:15,color:"blue"}}),s("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"38",size:"6em",stroke:40,color:"blue"}})],1),s("title-link",{attrs:{h2:""}},[e._v("Progress value with label")]),e._m(2),s("p",[e._v("You can customize the label to display the value as you wish.")]),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('p Default label - Custom label\n\nw-progress.ma1.mr8(circle v-model="progress" size="5em" round label)\n\nw-progress.ma1(circle v-model="progress" size="5em" round)\n  strong '+e._s("{{ progress }}")+"%")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  progress: 37.86\n})\n")]},proxy:!0}],null,!1,3861271154)},[s("p",[e._v("Default label   -   Custom label")]),s("w-progress",{staticClass:"ma1 mr8",attrs:{circle:"",size:"5em",round:"",label:""},model:{value:e.progress1,callback:function(r){e.progress1=r},expression:"progress1"}}),s("w-progress",{staticClass:"ma1",attrs:{circle:"",size:"5em",round:""},model:{value:e.progress1,callback:function(r){e.progress1=r},expression:"progress1"}},[s("strong",[e._v(e._s(e.progress1)+"%")])])],1),s("h3",[e._v("Providing a color for the custom label")]),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress.ma1(\n  circle\n  value="38"\n  size="3em"\n  outline\n  round\n  label\n  label-color="indigo-light4")\n')]},proxy:!0}],null,!1,2602075468)},[s("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"38",size:"3em",outline:"",round:"",label:"","label-color":"indigo-light4"}})],1),s("title-link",{attrs:{h2:""}},[e._v("Round linecap & default flat line cap")]),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress.ma1(circle value="38" size="6em" round round-cap)\nw-progress.ma1(circle value="38" size="6em" round)\n')]},proxy:!0}],null,!1,1376934242)},[s("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"38",size:"6em",round:"","round-cap":""}}),s("w-progress",{staticClass:"ma1",attrs:{circle:"",value:"38",size:"6em",round:""}})],1)],1):s("div",[s("title-link",{attrs:{h2:""}},[e._v("Default indeterminate progress & colors")]),e._m(3),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress\nw-progress.mt4(color="blue")\nw-progress.mt4(color="green")\n.title3.my6 Mixing colors\nw-progress.mt4(color="yellow" bg-color="cyan")\n')]},proxy:!0}])},[s("w-progress"),s("w-progress",{staticClass:"mt4",attrs:{color:"blue"}}),s("w-progress",{staticClass:"mt4",attrs:{color:"green"}}),s("h3",[e._v("Mixing colors")]),s("w-progress",{staticClass:"mt4",attrs:{color:"yellow","bg-color":"cyan"}})],1),s("title-link",{attrs:{h2:""}},[e._v("Size")]),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress(value="38" size="1em" color="blue")\nw-progress.mt4(value="38" size="2.5em" color="blue")\n')]},proxy:!0}])},[s("w-progress",{attrs:{value:"38",size:"1em",color:"blue"}}),s("w-progress",{staticClass:"mt4",attrs:{value:"38",size:"2.5em",color:"blue"}})],1),s("title-link",{attrs:{h2:""}},[e._v("Tile & round")]),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress(value="38" size="1.4em" tile color="light-blue")\nw-progress.mt4(value="38" size="1.4em" round color="light-blue")\n')]},proxy:!0}])},[s("w-progress",{attrs:{value:"38",size:"1.4em",tile:"",color:"light-blue"}}),s("w-progress",{staticClass:"mt4",attrs:{value:"38",size:"1.4em",round:"",color:"light-blue"}})],1),s("title-link",{attrs:{h2:""}},[e._v("Outline & shadow")]),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress(value="38" size="1em" outline round color="light-blue")\nw-progress.mt4(value="38" size="1em" shadow color="light-blue")\n')]},proxy:!0}])},[s("w-progress",{attrs:{value:"38",size:"1em",outline:"",round:"",color:"light-blue"}}),s("w-progress",{staticClass:"mt4",attrs:{value:"38",size:"1em",shadow:"",color:"light-blue"}})],1),s("title-link",{attrs:{h2:""}},[e._v("Stripes (only if determinate)")]),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress(\n  value="38"\n  size="1em"\n  outline\n  round\n  color="light-blue"\n  stripes)\nw-progress.mt4(\n  value="38"\n  size="1.4em"\n  outline\n  round\n  color="primary"\n  stripes)\n')]},proxy:!0}])},[s("w-progress",{attrs:{value:"38",size:"1em",outline:"",round:"",color:"light-blue",stripes:""}}),s("w-progress",{staticClass:"mt4",attrs:{value:"38",size:"1.4em",outline:"",round:"",color:"primary",stripes:""}})],1),s("title-link",{attrs:{h2:""}},[e._v("Progress value with label")]),s("h3",[e._v("Default label")]),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress(v-model="progress" size="1.3em" round color="primary" label)\nw-progress.mt4(v-model="progress" size="1.3em" outline round label)')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  progress: 37.86\n})\n")]},proxy:!0}])},[s("w-progress",{attrs:{size:"1.3em",round:"",color:"primary",label:""},model:{value:e.progress1,callback:function(r){e.progress1=r},expression:"progress1"}}),s("w-progress",{staticClass:"mt4",attrs:{size:"1.3em",outline:"",round:"",label:""},model:{value:e.progress1,callback:function(r){e.progress1=r},expression:"progress1"}})],1),s("h3",[e._v("Custom label")]),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress(v-model="progress" size="1.5em" outline round)\n  strong '+e._s("{{ progress }}")+"%")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  progress: 37.86\n})\n")]},proxy:!0}])},[s("w-progress",{staticClass:"mt3",attrs:{size:"1.5em",outline:"",round:""},model:{value:e.progress1,callback:function(r){e.progress1=r},expression:"progress1"}},[s("strong",[e._v(e._s(e.progress1)+"%")])])],1),s("h3",[e._v("Providing a color for the custom label")]),e._m(4),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress(\n  value="50.3"\n  size="2em"\n  outline\n  round\n  label\n  label-color="indigo-light4")\n')]},proxy:!0}])},[s("w-progress",{staticClass:"mt2",attrs:{value:"50.3",size:"2em",outline:"",round:"",label:"","label-color":"indigo-light4"}})],1),s("title-link",{attrs:{h2:""}},[e._v("Round linecap & default flat line cap")]),s("example",{attrs:{reactive:""},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-progress(value="38" size="2em" round round-cap)\nw-progress.mt4(value="38" size="2em" round)')]},proxy:!0}])},[s("w-progress",{attrs:{value:"38",size:"2em",round:"","round-cap":""}}),s("w-progress",{staticClass:"mt4",attrs:{value:"38",size:"2em",round:""}})],1)],1)],1)},l=[function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("p",[e._v("Like in most components, you can set a "),s("code",[e._v("color")]),e._v(" for the text and a "),s("code",[e._v("bg-color")]),e._v(" for the\nbackground."),s("br"),e._v("\nBy default, the progress foreground color is "),s("code",[e._v("primary")]),e._v(".")])},function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("p",[e._v("When the value is "),s("code",[e._v("undefined")]),e._v(", "),s("code",[e._v("-1")]),e._v(" or not provided at all, it will be assumed\nto be indeterminate.")])},function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("p",[e._v("The default label displays the rounded value without the "),s("code",[e._v("%")]),e._v(" sign, so it fits in smaller circles.")])},function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("p",[e._v("Like in most components, you can set a "),s("code",[e._v("color")]),e._v(" for the text and a "),s("code",[e._v("bg-color")]),e._v(" for the\nbackground.")])},function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("p",[e._v("The color of the label should be readable on both the progress and the background."),s("br"),e._v("\nSo you are free to decide what is the best color.")])}],o={data:function(){return{progress1:37.86,progress:0,linearOrCircular:[{label:"Linear",value:!1},{label:"Circular",value:!0}],circular:!0,intervalId:null}},mounted:function(){var e=this;this.intervalId=setInterval((function(){e.progress+=10,100===e.progress&&(e.progress=0)}),700)},beforeDestroy:function(){clearInterval(this.intervalId)}},a=o,n=s("2877"),i=Object(n["a"])(a,t,l,!1,null,null,null);r["default"]=i.exports}}]);
//# sourceMappingURL=progress-examples-vue.8953f47e.js.map