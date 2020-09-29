(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["dialog-examples-vue"],{"77ae":function(e,l,o){"use strict";o.r(l);var t=function(){var e=this,l=e.$createElement,o=e._self._c||l;return o("div",[o("p",[e._v("This dialog contains some basic options for the w-dialog.")]),o("example",{attrs:{"content-class":"pt5"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-button.px4.mr6.shrink(@click="dialog.show = true" bg-color="primary" dark) Open dialog\nw-dialog(\n  v-model="dialog.show"\n  :fullscreen="dialog.fullscreen"\n  :width="dialog.width"\n  :persistent="dialog.persistent"\n  :persistent-no-animation="dialog.persistentNoAnimation"\n  title-class="primary-light1--bg white")\n  template(#title="")\n    w-icon.mr2 mdi mdi-tune\n    | Control panel\n  w-checkbox.d-flex.mt2(v-model="dialog.fullscreen" label="Fullscreen")\n  w-checkbox.d-flex.mt2(v-model="dialog.persistent" label="Persistent (try to click outside)")\n  w-checkbox.d-flex.mt2(\n    v-model="dialog.persistentNoAnimation"\n    :disabled="!dialog.persistent"\n    label="Persistent with no animation")\n  .w-flex.mt6.no-grow\n    span.mr2 Width:\n    w-radios(\n      v-model="dialog.width"\n      :items="[{ value: 300, label: \'300px\' }, { value: 500, label: \'500px\' }]"\n      inline)\n  template(#actions="")\n    .spacer\n    w-button(@click="dialog.show = false") Close')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  dialog: {\n    show: false,\n    fullscreen: false,\n    persistent: false,\n    persistentNoAnimation: false,\n    width: 300\n  }\n})\n")]},proxy:!0}])},[o("w-button",{staticClass:"px4 mr6 shrink",attrs:{"bg-color":"primary",dark:""},on:{click:function(l){e.dialog1.show=!0}}},[e._v("Open dialog")]),o("w-dialog",{attrs:{fullscreen:e.dialog1.fullscreen,width:e.dialog1.width,persistent:e.dialog1.persistent,"persistent-no-animation":e.dialog1.persistentNoAnimation,"title-class":"primary-light1--bg white"},scopedSlots:e._u([{key:"title",fn:function(){return[o("w-icon",{staticClass:"mr2"},[e._v("mdi mdi-tune")]),e._v("Control panel")]},proxy:!0},{key:"actions",fn:function(){return[o("div",{staticClass:"spacer"}),o("w-button",{on:{click:function(l){e.dialog1.show=!1}}},[e._v("Close")])]},proxy:!0}]),model:{value:e.dialog1.show,callback:function(l){e.$set(e.dialog1,"show",l)},expression:"dialog1.show"}},[o("w-checkbox",{staticClass:"d-flex mt2",attrs:{label:"Fullscreen"},model:{value:e.dialog1.fullscreen,callback:function(l){e.$set(e.dialog1,"fullscreen",l)},expression:"dialog1.fullscreen"}}),o("w-checkbox",{staticClass:"d-flex mt2",attrs:{label:"Persistent (try to click outside)"},model:{value:e.dialog1.persistent,callback:function(l){e.$set(e.dialog1,"persistent",l)},expression:"dialog1.persistent"}}),o("w-checkbox",{staticClass:"d-flex mt2",attrs:{disabled:!e.dialog1.persistent,label:"Persistent with no animation"},model:{value:e.dialog1.persistentNoAnimation,callback:function(l){e.$set(e.dialog1,"persistentNoAnimation",l)},expression:"dialog1.persistentNoAnimation"}}),o("div",{staticClass:"w-flex mt6 no-grow"},[o("span",{staticClass:"mr2"},[e._v("Width:")]),o("w-radios",{attrs:{items:[{value:300,label:"300px"},{value:500,label:"500px"}],inline:""},model:{value:e.dialog1.width,callback:function(l){e.$set(e.dialog1,"width",l)},expression:"dialog1.width"}})],1),o("div",{staticClass:"mt4 mb-2 grey-light1"},[e._v("The "),o("span",{staticClass:"code grey-light1"},[e._v("width")]),e._v(" prop is called so for simplicity, but it internally translates to\na "),o("span",{staticClass:"code grey-light1"},[e._v("max-width")]),e._v(" to fit on small screens.\n")])],1)],1),o("title-link",{attrs:{h2:""}},[e._v("Persistent prompt dialog")]),o("example",{attrs:{"content-class":"pt5"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-button.px4(@click="dialog.show = true" bg-color="primary" dark) Open dialog\nw-dialog(v-model="dialog.show" title="Terms and conditions" persistent :width="550")\n  | Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,\n  | quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas\n  | odit dolor labore eveniet at vel sequi nostrum.#[br]#[br]\n  | Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi\n  | dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi\n  | aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.\n  template(#actions="")\n    .spacer\n    w-button.mr2(@click="dialog.show = false" bg-color="error") I disagree\n    w-button(@click="dialog.show = false" bg-color="success") I agree')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  dialog: { show: false }\n})\n")]},proxy:!0}])},[o("w-button",{staticClass:"px4",attrs:{"bg-color":"primary",dark:""},on:{click:function(l){e.dialog2.show=!0}}},[e._v("Open dialog")]),o("w-dialog",{attrs:{title:"Terms and conditions",persistent:"",width:550},scopedSlots:e._u([{key:"actions",fn:function(){return[o("div",{staticClass:"spacer"}),o("w-button",{staticClass:"mr2",attrs:{"bg-color":"error"},on:{click:function(l){e.dialog2.show=!1}}},[e._v("I disagree")]),o("w-button",{attrs:{"bg-color":"success"},on:{click:function(l){e.dialog2.show=!1}}},[e._v("I agree")])]},proxy:!0}]),model:{value:e.dialog2.show,callback:function(l){e.$set(e.dialog2,"show",l)},expression:"dialog2.show"}},[e._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,\nquisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas\nodit dolor labore eveniet at vel sequi nostrum."),o("br"),o("br"),e._v("\nVoluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi\ndolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi\naliquid dolore quo amet deserunt asperiores placeat maxime perferendis.")])],1),o("title-link",{attrs:{h2:""}},[e._v("Nesting")]),o("example",{attrs:{"content-class":"pt5"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-button.px4(@click="dialog1.show = true" bg-color="primary" dark) Open dialog\nw-dialog(v-model="dialog1.show" :width="600" title="Dialog 1")\n  p Lorem ipsum, dolor sit amet consectetur adipisicing elit...\n  w-button.mt6(@click="dialog2.show = true" bg-color="indigo-light1" dark) Open dialog 2\n\n  template(#actions="")\n    .spacer\n    w-button(@click="dialog1.show = false" bg-color="error" dark) Close\n\nw-dialog(v-model="dialog2.show" :width="250" title="Dialog 2")\n  w-button.my6(@click="dialog2.show = false" bg-color="error" dark) Close')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  dialog1: { show: false },\n  dialog2: { show: false }\n})\n")]},proxy:!0}])},[o("w-button",{staticClass:"px4",attrs:{"bg-color":"primary",dark:""},on:{click:function(l){e.dialog3.show=!0}}},[e._v("Open dialog")]),o("w-dialog",{attrs:{width:600,title:"Dialog 1","content-class":"text-center"},scopedSlots:e._u([{key:"actions",fn:function(){return[o("div",{staticClass:"spacer"}),o("w-button",{attrs:{"bg-color":"error",dark:""},on:{click:function(l){e.dialog3.show=!1}}},[e._v("Close")])]},proxy:!0}]),model:{value:e.dialog3.show,callback:function(l){e.$set(e.dialog3,"show",l)},expression:"dialog3.show"}},[o("p",[e._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit...")]),o("w-button",{staticClass:"mt6",attrs:{"bg-color":"indigo-light1",dark:""},on:{click:function(l){e.dialog4.show=!0}}},[e._v("Open dialog 2")])],1),o("w-dialog",{attrs:{width:250,title:"Dialog 2","content-class":"text-center"},model:{value:e.dialog4.show,callback:function(l){e.$set(e.dialog4,"show",l)},expression:"dialog4.show"}},[o("w-button",{staticClass:"my6",attrs:{"bg-color":"error",dark:""},on:{click:function(l){e.dialog4.show=!1}}},[e._v("Close")])],1)],1),o("title-link",{attrs:{h2:""}},[e._v("Transitions")]),o("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.w-flex\n  w-button.px4.mr6(@click="dialog.show = true" bg-color="primary" dark) Open dialog\n  .w-flex.wrap\n    div.ma2\n      .title3.mb2 Transition names\n      w-radios(\n        v-model="dialog.transition"\n        :items="transitions"\n        item-value="label"\n        @change="dialog.fullscreen = null")\n        template(#label="{ item }")\n          code '+e._s("{{ item.label }}")+'\n    div.ma2\n      .title3.mb2 Slide transitions for fullscreen\n      w-radios(\n        v-model="dialog.transition"\n        :items="transitionsForFullscreen"\n        item-value="label"\n        @change="dialog.fullscreen = null")\n        template(#label="{ item }")\n          code '+e._s("{{ item.label }}")+'\n      w-checkbox.mt2(\n        :value="dialog.fullscreen === null ? fullscreenTransition : dialog.fullscreen"\n        @change="dialog.fullscreen = $event"\n        label="Fullscreen dialog")\nw-dialog(\n  v-model="dialog.show"\n  :width="(dialog.fullscreen === null ? fullscreenTransition : dialog.fullscreen) ? 0 : 400"\n  :fullscreen="dialog.fullscreen === null ? fullscreenTransition : dialog.fullscreen"\n  :transition="dialog.transition"\n  title="Dialog with custom transition"\n  content-class="w-flex align-center justify-center")\n  w-button.my6(@click="dialog.show = false" bg-color="error" dark) Close')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  dialog: {\n    show: false,\n    fullscreen: false,\n    transition: 'fade'\n  },\n  transitions: [\n    { label: 'fade' },\n    { label: 'slide-fade-up' },\n    { label: 'slide-fade-down' },\n    { label: 'slide-fade-left' },\n    { label: 'slide-fade-right' },\n    { label: 'scale' },\n    { label: 'scale-fade' },\n    { label: 'bounce' },\n    { label: 'none', value: '' }\n  ],\n  transitionsForFullscreen: [\n    { label: 'slide-up' },\n    { label: 'slide-down' },\n    { label: 'slide-left' },\n    { label: 'slide-right' }\n  ]\n}),\n\ncomputed: {\n  fullscreenTransition () {\n    return this.transitionsForFullscreen.map(item => item.label).includes(this.dialog.transition)\n  }\n}\n")]},proxy:!0}])},[o("div",{staticClass:"w-flex"},[o("w-button",{staticClass:"px4 mr6",attrs:{"bg-color":"primary",dark:""},on:{click:function(l){e.dialog5.show=!0}}},[e._v("Open dialog")]),o("div",{staticClass:"w-flex wrap"},[o("div",{staticClass:"ma2"},[o("div",{staticClass:"title3 mb2"},[e._v("Transition names")]),o("w-radios",{attrs:{items:e.transitions,"item-value":"label"},on:{change:function(l){e.dialog5.fullscreen=null}},scopedSlots:e._u([{key:"label",fn:function(l){var t=l.item;return[o("code",[e._v(e._s(t.label))])]}}]),model:{value:e.dialog5.transition,callback:function(l){e.$set(e.dialog5,"transition",l)},expression:"dialog5.transition"}})],1),o("div",{staticClass:"ma2"},[o("div",{staticClass:"title3 mb2"},[e._v("Slide transitions for fullscreen")]),o("w-radios",{attrs:{items:e.transitionsForFullscreen,"item-value":"label"},on:{change:function(l){e.dialog5.fullscreen=null}},scopedSlots:e._u([{key:"label",fn:function(l){var t=l.item;return[o("code",[e._v(e._s(t.label))])]}}]),model:{value:e.dialog5.transition,callback:function(l){e.$set(e.dialog5,"transition",l)},expression:"dialog5.transition"}}),o("w-checkbox",{staticClass:"mt2",attrs:{value:null===e.dialog5.fullscreen?e.fullscreenTransition:e.dialog5.fullscreen,label:"Fullscreen dialog"},on:{change:function(l){e.dialog5.fullscreen=l}}})],1)])],1),o("w-dialog",{attrs:{width:(null===e.dialog5.fullscreen?e.fullscreenTransition:e.dialog5.fullscreen)?0:400,fullscreen:null===e.dialog5.fullscreen?e.fullscreenTransition:e.dialog5.fullscreen,transition:e.dialog5.transition,title:"Dialog with custom transition","content-class":"w-flex align-center justify-center"},model:{value:e.dialog5.show,callback:function(l){e.$set(e.dialog5,"show",l)},expression:"dialog5.show"}},[o("w-button",{staticClass:"my6",attrs:{"bg-color":"error",dark:""},on:{click:function(l){e.dialog5.show=!1}}},[e._v("Close")])],1)],1),o("title-link",{attrs:{h2:""}},[e._v("Overlay opacity and color")]),o("example",{attrs:{"content-class":"pt5"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-button.px4(@click="dialog.show = true" bg-color="primary" dark) Open control panel\nw-dialog(\n  v-model="dialog.show"\n  :width="500"\n  :overlay-opacity="dialog.overlayChoice === \'opacity\' && dialog.overlayOpacity"\n  :overlay-color="dialog.overlayChoice !== \'opacity\' && dialog.overlayChoice")\n  template(#title="")\n    w-icon.mr2 mdi mdi-tune\n    | Control panel\n  w-radio.d-flex.mt1(v-model="dialog.overlayChoice" return-value="opacity")\n    | Overlay opacity\n    input.ml2(v-model="dialog.overlayOpacity" type="number" step="0.1" min="0" max="1")\n  w-radio.d-flex.mt1(v-model="dialog.overlayChoice" return-value="rgba(35, 71, 129, 0.5)") Custom color: transparent blue\n  w-radio.d-flex.mt1(v-model="dialog.overlayChoice" return-value="#e91e63") Custom color: opaque pink\n  w-radio.d-flex.mt1(v-model="dialog.overlayChoice" return-value="transparent") Custom color: transparent\n  template(#actions="")\n    .spacer\n    w-button(@click="dialog.show = false" bg-color="error" dark) Close')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  dialog: {\n    show: false,\n    overlayOpacity: 0.3,\n    overlayChoice: 'opacity'\n  }\n})")]},proxy:!0}])},[o("w-button",{staticClass:"px4",attrs:{"bg-color":"primary",dark:""},on:{click:function(l){e.dialog6.show=!0}}},[e._v("Open control panel")]),o("w-dialog",{attrs:{width:500,"overlay-opacity":"opacity"===e.dialog6.overlayChoice&&e.dialog6.overlayOpacity,"overlay-color":"opacity"!==e.dialog6.overlayChoice&&e.dialog6.overlayChoice},scopedSlots:e._u([{key:"title",fn:function(){return[o("w-icon",{staticClass:"mr2"},[e._v("mdi mdi-tune")]),e._v("Control panel")]},proxy:!0},{key:"actions",fn:function(){return[o("div",{staticClass:"spacer"}),o("w-button",{attrs:{"bg-color":"error",dark:""},on:{click:function(l){e.dialog6.show=!1}}},[e._v("Close")])]},proxy:!0}]),model:{value:e.dialog6.show,callback:function(l){e.$set(e.dialog6,"show",l)},expression:"dialog6.show"}},[o("w-radio",{staticClass:"d-flex mt1",attrs:{"return-value":"opacity"},model:{value:e.dialog6.overlayChoice,callback:function(l){e.$set(e.dialog6,"overlayChoice",l)},expression:"dialog6.overlayChoice"}},[e._v("Overlay opacity"),o("input",{directives:[{name:"model",rawName:"v-model",value:e.dialog6.overlayOpacity,expression:"dialog6.overlayOpacity"}],staticClass:"ml2",attrs:{type:"number",step:"0.1",min:"0",max:"1"},domProps:{value:e.dialog6.overlayOpacity},on:{input:function(l){l.target.composing||e.$set(e.dialog6,"overlayOpacity",l.target.value)}}})]),o("w-radio",{staticClass:"d-flex mt1",attrs:{"return-value":"rgba(35, 71, 129, 0.5)"},model:{value:e.dialog6.overlayChoice,callback:function(l){e.$set(e.dialog6,"overlayChoice",l)},expression:"dialog6.overlayChoice"}},[e._v("Custom color: transparent blue")]),o("w-radio",{staticClass:"d-flex mt1",attrs:{"return-value":"#e91e63"},model:{value:e.dialog6.overlayChoice,callback:function(l){e.$set(e.dialog6,"overlayChoice",l)},expression:"dialog6.overlayChoice"}},[e._v("Custom color: opaque pink")]),o("w-radio",{staticClass:"d-flex mt1",attrs:{"return-value":"transparent"},model:{value:e.dialog6.overlayChoice,callback:function(l){e.$set(e.dialog6,"overlayChoice",l)},expression:"dialog6.overlayChoice"}},[e._v("Custom color: transparent")])],1)],1)],1)},i=[],a=(o("caad"),o("d81d"),o("2532"),{data:function(){return{dialog1:{show:!1,fullscreen:!1,persistent:!1,persistentNoAnimation:!1,width:300},dialog2:{show:!1},dialog3:{show:!1},dialog4:{show:!1},dialog5:{show:!1,fullscreen:!1,transition:"fade"},dialog6:{show:!1,overlayOpacity:.3,overlayChoice:"opacity"},transitions:[{label:"fade"},{label:"slide-fade-up"},{label:"slide-fade-down"},{label:"slide-fade-left"},{label:"slide-fade-right"},{label:"scale"},{label:"scale-fade"},{label:"bounce"},{label:"none",value:""}],transitionsForFullscreen:[{label:"slide-up"},{label:"slide-down"},{label:"slide-left"},{label:"slide-right"}]}},computed:{fullscreenTransition:function(){return this.transitionsForFullscreen.map((function(e){return e.label})).includes(this.dialog5.transition)}}}),n=a,s=o("2877"),r=Object(s["a"])(n,t,i,!1,null,null,null);l["default"]=r.exports}}]);
//# sourceMappingURL=dialog-examples-vue.a40214c3.js.map