var k=Object.defineProperty;var l=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var i=(e,o,t)=>o in e?k(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,s=(e,o)=>{for(var t in o||(o={}))x.call(o,t)&&i(e,t,o[t]);if(l)for(var t of l(o))_.call(o,t)&&i(e,t,o[t]);return e};import{n,g as r,F as h,h as d}from"./index.6bc87caa.js";import"./vendor.748d1766.js";var f=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("w-card",{attrs:{"bg-color":"blue-light5"}},[t("p",{staticClass:"mb3"},[e._v("What it looks like:")]),t("w-checkboxes",{attrs:{items:e.checkboxes1,inline:""}}),t("div",{staticClass:"title4 mt4"},[e._v("States")]),t("div",{staticClass:"w-flex wrap"},[t("w-checkbox",{staticClass:"mr3 mb1",attrs:{value:!0,label:"Checked"}}),t("w-checkbox",{staticClass:"mr3 mb1",attrs:{value:!1,label:"Unchecked"}}),t("w-checkbox",{staticClass:"mr3 mb1",attrs:{value:!0,indeterminate:"",label:"Indeterminate"}}),t("w-checkbox",{staticClass:"mr3 mb1",attrs:{value:!0,disabled:"",label:"Checked &amp; disabled"}}),t("w-checkbox",{staticClass:"mr3 mb1",attrs:{value:!1,disabled:"",label:"Unchecked &amp; disabled"}}),t("w-checkbox",{staticClass:"mr3 mb1",attrs:{value:!0,disabled:"",indeterminate:"",label:"Indeterminate &amp; disabled"}})],1)],1),e._m(0),e._m(1),t("title-link",{staticClass:"title1 mt12",attrs:{h2:"",slug:"w-checkbox"}},[e._v("<w-checkbox>")]),t("div",{staticClass:"w-divider"}),t("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<div class="title4 mb2">Basic use</div>
<w-checkbox>Single option</w-checkbox>

<div class="title4 mt8 mb2">Using v-model on a single checkbox</div>
<w-flex class="align-center">
  <w-checkbox v-model="selection1">Single option</w-checkbox>

  <span class="ml6">
    v-model:
    <code class="ml1">`+e._s("{{ selection1 }}")+`</code>
  </span>
</w-flex>

<div class="title4 mt8 mb2">Using an array of v-model for multiple checkboxes</div>
<w-flex class="align-center">
  <w-checkbox class="mr2" v-model="selection2[0]">Option 1</w-checkbox>
  <w-checkbox class="mr2" v-model="selection2[1]">Option 2</w-checkbox>
  <w-checkbox v-model="selection2[2]">Option 3</w-checkbox>

  <span class="ml6">
    v-model:
    <code class="ml1">`+e._s("{{ selection2 }}")+`</code>
  </span>
</w-flex>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  selection1: false,
  selection2: [false, false, false]
})
`)]},proxy:!0}])},[t("div",{staticClass:"title4 mb2"},[e._v("Basic use")]),t("w-checkbox",[e._v("Single option")]),t("div",{staticClass:"title4 mt8 mb2"},[e._v("Using v-model on a single checkbox")]),t("w-flex",{staticClass:"align-center"},[t("w-checkbox",{model:{value:e.selection1,callback:function(c){e.selection1=c},expression:"selection1"}},[e._v("Single option")]),t("span",{staticClass:"ml6"},[e._v("v-model:"),t("code",{staticClass:"ml1"},[e._v(e._s(e.selection1))])])],1),t("div",{staticClass:"title4 mt8 mb2"},[e._v("Using an array of v-model for multiple checkboxes")]),t("w-flex",{staticClass:"align-center"},[t("w-checkbox",{staticClass:"mr2",model:{value:e.selection2[0],callback:function(c){e.$set(e.selection2,0,c)},expression:"selection2[0]"}},[e._v("Option 1")]),t("w-checkbox",{staticClass:"mr2",model:{value:e.selection2[1],callback:function(c){e.$set(e.selection2,1,c)},expression:"selection2[1]"}},[e._v("Option 2")]),t("w-checkbox",{model:{value:e.selection2[2],callback:function(c){e.$set(e.selection2,2,c)},expression:"selection2[2]"}},[e._v("Option 3")]),t("span",{staticClass:"ml6"},[e._v("v-model:"),t("code",{staticClass:"ml1"},[e._v(e._s(e.selection2))])])],1)],1),t("alert",{attrs:{info:""}},[e._v("Unlike the radio buttons, checkboxes don't need the "),t("code",[e._v("name")]),e._v(" prop in addition to the "),t("code",[e._v("v-model")]),e._v(`
to work together and control with arrow keys since the default HTML behavior does not include control from
the keyboard arrows (you can navigate with `),t("kbd",[e._v("tab")]),e._v(" and toggle with "),t("kbd",[e._v("space")]),e._v(" or "),t("kbd",[e._v("enter")]),e._v(")."),t("br"),e._v(`
When you use a group of checkboxes via <w-checkboxes>, Wave UI will add the name attributes for you.
`)]),t("alert",{attrs:{tip:""}},[t("strong",{staticClass:"title5"},[e._v("Form validation")]),t("p",[e._v("When a validation is needed on checkboxes, each individual checkbox ("),t("span",{staticClass:"code"},[e._v("w-checkbox")]),e._v(`) has a
separate validation message.`),t("br"),e._v(`
If you want only one validation for a group of checkboxes you must use the `),t("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(` component.
`)])]),t("title-link",{attrs:{h2:""}},[e._v("Custom label in w-checkbox")]),e._m(2),t("example",{attrs:{"content-class":"mt3"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<w-checkbox class="mr5" name="checkbox1">
  <span class="pr1">Choice 1 has an icon</span>
  <w-icon md>mdi mdi-star</w-icon>
</w-checkbox>

<w-checkbox name="checkbox1">
  <w-tag bg-color="green-light5" color="green-dark2">
    Choice 2 is a tag
    <w-icon class="ml1">mdi mdi-heart</w-icon>
  </w-tag>
</w-checkbox>
`)]},proxy:!0}])},[t("w-checkbox",{staticClass:"mr5",attrs:{name:"checkbox4"}},[t("span",{staticClass:"pr1"},[e._v("Choice 1 has an icon")]),t("w-icon",{attrs:{md:""}},[e._v("mdi mdi-star")])],1),t("w-checkbox",{attrs:{name:"checkbox4"}},[t("w-tag",{attrs:{"bg-color":"green-light5",color:"green-dark2"}},[e._v("Choice 2 is a tag"),t("w-icon",{staticClass:"ml1"},[e._v("mdi mdi-heart")])],1)],1)],1),t("alert",{staticClass:"mt8",attrs:{tip:""}},[e._v("As seen in this example, the "),t("span",{staticClass:"code"},[e._v("w-checkbox")]),e._v(` component allows you to have complete freedom
regarding your checkboxes content, style and layout.`),t("br"),e._v(`
But because in most cases you won't need that, the `),t("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(` component will make you
go much faster.
`)]),t("title-link",{staticClass:"title1 mt12",attrs:{h2:"",slug:"w-checkboxes"}},[e._v("<w-checkboxes>")]),t("div",{staticClass:"w-divider"}),e._m(3),t("title-link",{staticClass:"title2 primary",attrs:{h3:""}},[e._v("V-model")]),t("alert",{attrs:{info:""}},[e._v("If a value is set in the choice's data, it will be returned through the v-model when selected."),t("br"),e._v(`
If no value is set, the choice's label will be returned instead.`)]),t("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<div class="w-flex align-center">
  <w-checkboxes v-model="selection" :items="checkboxes"></w-checkboxes>
  <div class="title3 ml8">v-model: `+e._s("{{ selection || '[]' }}")+`</div>
</div>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  selection: [],
  checkboxes: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`)]},proxy:!0}])},[t("div",{staticClass:"w-flex align-center"},[t("w-checkboxes",{attrs:{items:e.checkboxes1},model:{value:e.selection1b,callback:function(c){e.selection1b=c},expression:"selection1b"}}),t("div",{staticClass:"title3 ml8"},[e._v("v-model:"),t("code",{staticClass:"ml1"},[e._v(e._s(e.selection1b||"[]"))])])],1)]),t("p",[e._v("The v-model can also be preset, or updated externally.")]),t("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<div class="w-flex align-center">
  <div>
    <w-checkboxes v-model="selection" :items="checkboxes"></w-checkboxes>
    <w-button class="mt2" @click="selection = selection.length ? [] : [2]">
      Toggle checkbox 2
    </w-button>
  </div>

  <div class="title3 ml8">
    v-model:
    <code class="ml1">`+e._s("{{ selection || '[]' }}")+`</code>
  </div>
</div>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  selection: [],
  checkboxes: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`)]},proxy:!0}])},[t("div",{staticClass:"w-flex align-center"},[t("div",[t("w-checkboxes",{attrs:{items:e.checkboxes1},model:{value:e.selection3,callback:function(c){e.selection3=c},expression:"selection3"}}),t("w-button",{staticClass:"mt2",on:{click:function(c){e.selection3=e.selection3.length?[]:[2]}}},[e._v("Toggle checkbox 2")])],1),t("div",{staticClass:"title3 ml8"},[e._v("v-model:"),t("code",{staticClass:"ml1"},[e._v(e._s(e.selection3||"[]"))])])])]),t("title-link",{attrs:{h2:""}},[e._v("Layout")]),t("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<div class="title4 mb2">Default column layout</div>
<w-checkboxes :items="checkboxes"></w-checkboxes>

<div class="title4 mt6 mb2">Inline layout</div>
<w-checkboxes :items="checkboxes" inline></w-checkboxes>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  checkboxes: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`)]},proxy:!0}])},[t("div",{staticClass:"title4 mb2"},[e._v("Default column layout")]),t("w-checkboxes",{attrs:{items:e.checkboxes1}}),t("div",{staticClass:"title4 mt6 mb2"},[e._v("Inline layout")]),t("w-checkboxes",{attrs:{items:e.checkboxes1,inline:""}})],1),t("title-link",{attrs:{h2:""}},[e._v("Custom label content")]),e._m(4),t("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<w-checkboxes :items="checkboxes" color="green">
  <template #item="{ item }">
    <span class="pr2">`+e._s("{{ item.label }}")+`</span>
    <w-icon class="deep-purple">`+e._s("{{ item.icon }}")+`</w-icon>
  </template>
</w-checkboxes>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  checkboxes: [
    { label: 'Square', icon: 'mdi mdi-square' },
    { label: 'Circle', icon: 'mdi mdi-circle' },
    { label: 'Triangle', icon: 'mdi mdi-triangle' }
  ]
})
`)]},proxy:!0}])},[t("w-checkboxes",{attrs:{items:e.checkboxes3,color:"green"},scopedSlots:e._u([{key:"item",fn:function(c){var a=c.item;return[t("span",{staticClass:"pr2"},[e._v(e._s(a.label))]),t("w-icon",{staticClass:"deep-purple"},[e._v(e._s(a.icon))])]}}])})],1),t("div",{staticClass:"w-divider grey-light5 my12"}),t("title-link",{attrs:{h2:""}},[e._v("Round checkboxes")]),t("example",{attrs:{"content-class":"mt3"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<w-checkboxes
  v-model="selection"
  :items="checkboxes"
  round
  inline>
</w-checkboxes>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  selection: [1],
  checkboxes: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`)]},proxy:!0}])},[t("w-checkboxes",{attrs:{items:e.checkboxes1,round:"",inline:""},model:{value:e.selection8,callback:function(c){e.selection8=c},expression:"selection8"}})],1),t("title-link",{attrs:{h2:""}},[e._v("Color")]),e._m(5),t("title-link",{attrs:{h3:"",slug:"w-checkboxes--colors"}},[t("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(" colors")]),t("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<w-checkboxes
  v-model="selection1"
  :items="checkboxes1"
  color="purple">
</w-checkboxes>

<div class="title4 mt8 mb2">Different color per item</div>
<w-checkboxes
  v-model="selection2"
  :items="checkboxes2">
</w-checkboxes>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  selection1: [1, 2, 3],
  checkboxes1: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ],
  selection2: [1, 2, 3],
  checkboxes2: [
    { label: 'Choice 1', value: 1, color: 'amber' },
    { label: 'Choice 2', value: 2, color: 'warning' },
    { label: 'Choice 3', value: 3, color: 'error' }
  ]
})`)]},proxy:!0}])},[t("w-checkboxes",{attrs:{items:e.checkboxes1,color:"purple"},model:{value:e.selection4,callback:function(c){e.selection4=c},expression:"selection4"}}),t("div",{staticClass:"title4 mt8 mb2"},[e._v("Different color per item")]),t("w-checkboxes",{attrs:{items:e.checkboxes4},model:{value:e.selection7,callback:function(c){e.selection7=c},expression:"selection7"}})],1),t("title-link",{attrs:{h3:"",slug:"w-checkbox--colors"}},[t("span",{staticClass:"code"},[e._v("w-checkbox")]),e._v(" colors")]),t("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<w-checkbox
  class="mr2"
  v-model="selection1[0]"
  color="teal-light1">
  Option 1
</w-checkbox>
<w-checkbox
  v-model="selection1[1]"
  color="teal-light1">
  Option 2
</w-checkbox>

<div class="title4 mt8 mb2">Different color per item</div>
<w-checkbox
  class="mr2"
  v-model="selection2[0]"
  color="pink-light3">
  Option 1
</w-checkbox>
<w-checkbox
  v-model="selection2[1]"
  color="blue-light1">
  Option 2
</w-checkbox>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  selection1: [true, true],
  selection2: [true, true],
  checkboxes: [
    { label: 'Choice 1' },
    { label: 'Choice 2' },
    { label: 'Choice 3' }
  ]
})`)]},proxy:!0}])},[t("w-checkbox",{staticClass:"mr2",attrs:{color:"teal-light1"},model:{value:e.selection5[0],callback:function(c){e.$set(e.selection5,0,c)},expression:"selection5[0]"}},[e._v("Option 1")]),t("w-checkbox",{attrs:{color:"teal-light1"},model:{value:e.selection5[1],callback:function(c){e.$set(e.selection5,1,c)},expression:"selection5[1]"}},[e._v("Option 2")]),t("div",{staticClass:"title4 mt8 mb2"},[e._v("Different color per item")]),t("w-checkbox",{staticClass:"mr2",attrs:{color:"pink-light3"},model:{value:e.selection6[0],callback:function(c){e.$set(e.selection6,0,c)},expression:"selection6[0]"}},[e._v("Option 1")]),t("w-checkbox",{attrs:{color:"blue-light1"},model:{value:e.selection6[1],callback:function(c){e.$set(e.selection6,1,c)},expression:"selection6[1]"}},[e._v("Option 2")])],1)],1)},w=[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",{staticClass:"mt12"},[e._v("There are 2 components: "),t("span",{staticClass:"code"},[e._v("w-checkbox")]),e._v(" & "),t("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(`.
The later is a group of checkboxes for convenience.
`)])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[e._v("In most cases what you need is the "),t("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(` component bellow, but let's start with the
basic component as it might be useful in single checkboxes and edge cases.
`)])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[t("code",[e._v("w-checkbox")]),e._v(" provides a default slot to customize the content.")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",{staticClass:"my5"},[e._v("The "),t("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(` component allows a fast and easy rendering of
multiple checkboxes by passing the items through a prop.`),t("br"),e._v(`
It accepts an inline parameter to display the checkboxes inline,
and allows you to customize the label of each checkbox through slot.
`)])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[t("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(" provides a slot to customize the label of each checkbox button: "),t("code",[e._v("item")]),e._v(".")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[e._v("By default the "),t("span",{staticClass:"code"},[e._v("w-checkbox")]),e._v(" & "),t("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(` components will use the
primary color.`),t("br"),e._v(`
You can provide a different color with the `),t("code",[e._v("color")]),e._v(` option, or you can even set a different
color per item by providing a `),t("code",[e._v("color")]),e._v(` attribute in each of the item objects.
`)])}];const g={data:()=>({selection1:!1,selection1b:[],selection2:[!1,!1,!1],selection3:[2],selection4:[1,2,3],selection5:[!0,!0],selection6:[!0,!0],selection7:[1,2,3],selection8:[1],checkboxes1:[{label:"Choice 1",value:1},{label:"Choice 2",value:2},{label:"Choice 3",value:3}],checkboxes2:[{label:"Choice 1"},{label:"Choice 2"},{label:"Choice 3"},{label:"Choice 4"}],checkboxes3:[{label:"Square",icon:"mdi mdi-square"},{label:"Circle",icon:"mdi mdi-circle"},{label:"Triangle",icon:"mdi mdi-triangle"}],checkboxes4:[{label:"Choice 1",value:1,color:"amber"},{label:"Choice 2",value:2,color:"warning"},{label:"Choice 3",value:3,color:"error"}]})},b={};var y=n(g,f,w,!1,C,null,null,null);function C(e){for(let o in b)this[o]=b[o]}var T=function(){return y.exports}(),$=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("a",{attrs:{id:"api",name:"api"}}),t("div",{staticClass:"w-divider my12"}),t("title-link",{staticClass:"title1",attrs:{h2:"",slug:"w-checkboxes-api"}},[e._v("<w-checkboxes> API")]),t("component-api",{staticClass:"mt0",attrs:{items:e.checkboxesProps,descriptions:e.checkboxes.propsDescs,title:"Props"}}),t("component-api",{attrs:{items:e.checkboxes.slots,title:"Slots"}}),t("component-api",{attrs:{items:e.checkboxesEvents,title:"Events"}}),t("div",{staticClass:"w-divider my12"}),t("title-link",{staticClass:"title1",attrs:{h2:"",slug:"w-checkbox-api"}},[e._v("<w-checkbox> API")]),t("component-api",{staticClass:"mt0",attrs:{items:e.checkboxProps,descriptions:e.checkbox.propsDescs,title:"Props"}}),t("component-api",{attrs:{items:e.checkbox.slots,title:"Slots"}}),t("component-api",{attrs:{items:e.checkboxEvents,title:"Events"}})],1)},E=[];const m={propsDescs:{items:"An array of checkbox items to display. Each item object should contain at least a <code>label</code> or a <code>value</code> attribute.",value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Provide an array of values to dictate the checked state of all the checkboxes.<br>This value gets updated when using a v-model.',labelOnLeft:"Moves the label to the left of each checkbox.",itemLabelKey:'The property name (aka "key") in each item object where to find the label of the item (if any).',itemValueKey:'The property name (aka "key") in each item object where to find the value of the item (if any).',itemColorKey:'The property name (aka "key") in each item object where to find the color of the item (if any).',inline:"Displays all the checkboxes inline instead of in column.",round:"Displays round checkboxes instead of square ones.",color:'Applies a color to the active checkbox. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',name:"Provide a native HTML <code>name</code> attribute to the checkbox. If not provided, a unique common name will be computed and applied to all the checkboxes.",disabled:"Disables all the checkboxes making them unreactive to user interactions.",readonly:"The checkbox will still look like an interactive checkbox except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to each checkbox.",validators:'<span class="deep-orange">Only for validation, when the <strong class="code">w-checkboxes</strong> component is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the checkbox. Each function will be executed on checkbox   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the checkbox.'},slots:{item:{description:"Provide a custom content for each checkbox label.",params:{item:"The current item object.",index:"The item index in the array of radios. Starts at 1 to be consistent with the <code>item.x</code> slot.",checked:"A boolean representing the checked state of this particular item."}},"item.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the array of radios. Starts at 1 to be consistent with the slot name.",checked:"A boolean representing the checked state of this particular item."}}},events:{input:{description:"Emitted each time any of the checkboxes is toggled.<br>Updates the v-model value in Vue 2.x only.",params:{"[Array]":"Array of <code>return-value</code> of each checked checkbox.<br>The <code>return-value</code> is one of the following attributes, if they exist, in this order: the item value, the item label, the item index."}},"update:modelValue":{description:"Emitted each time any of the checkboxes is toggled.<br>Updates the v-model value in Vue 3 only.",params:{"[Array]":"Array of <code>return-value</code> of each checked checkbox.<br>The <code>return-value</code> is one of the following attributes, if they exist, in this order: the item value, the item label, the item index."}},focus:{description:"Emitted on each checkbox focus.",params:{"[DOM event object]":"The associated focus DOM event."}}}},v={propsDescs:{value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Provide a boolean to dictate the checked state the checkbox.<br>This value gets updated when using a v-model.',returnValue:"Since the native HTML checkbox element uses the <code>value</code> attribute to define the checked state, the <code>return-value</code> prop let you specify a value to return to the <code>v-model</code> when the checkbox is checked (instead of returning <code>true</code>).",label:"Sets a visible label for the checkbox.",labelOnLeft:"Moves the label to the left of the checkbox. By default the label is displayed on the right.",color:'Applies a color to the checkbox when active. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',noRipple:"Removes the ripple animation on check.",indeterminate:"Applies an indeterminate state on the checkbox. E.g. when it represents the selected state of a collection of elements where some are checked and some not.",round:"Displays a round checkbox instead of a square one.",name:"Provide a native HTML <code>name</code> attribute to the checkbox. If not provided, a unique name will be computed.",disabled:"Disables the checkbox making it unreactive to user interactions.",readonly:"The checkbox will still look like an interactive checkbox except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the checkbox.",validators:'<span class="deep-orange">Only for validation, when the checkbox is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the checkbox. Each function will be executed on checkbox   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the checkbox.'},slots:{default:{description:"The checkbox label content."}},events:{input:{description:"Emitted each time the state of the checkbox changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"The current state of the checkbox."}},"update:modelValue":{description:"Emitted each time the state of the checkbox changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"The current state of the checkbox."}},focus:{description:"Emitted on each checkbox focus.",params:{"[DOM event object]":"The associated focus DOM event."}}}},S={data:()=>({checkboxes:m,checkbox:v}),computed:{checkboxesProps(){return s(s({},r.props),h.props)},checkboxProps(){return s(s({},d.props),h.props)},checkboxesEvents(){return r.emits.reduce((e,o)=>(e[o]=m.events[o]||{})&&e,{})},checkboxEvents(){return d.emits.reduce((e,o)=>(e[o]=v.events[o]||{})&&e,{})}}},u={};var O=n(S,$,E,!1,j,null,null,null);function j(e){for(let o in u)this[o]=u[o]}var A=function(){return O.exports}(),D=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("main",[t("ui-component-title",{attrs:{slug:"w-checkbox-and-w-checkboxes",code:!1}},[t("span",{staticClass:"code"},[e._v("w-checkbox")]),e._v(" & "),t("span",{staticClass:"code"},[e._v("w-checkboxes")])]),t("examples"),t("api")],1)},M=[];const P={components:{Examples:T,Api:A}},p={};var I=n(P,D,M,!1,q,null,null,null);function q(e){for(let o in p)this[o]=p[o]}var W=function(){return I.exports}();export{W as default};
