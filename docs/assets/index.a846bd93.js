import{n as i,A as r,F as s,B as l}from"./index.e31dd236.js";var h=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("w-card",{attrs:{"bg-color":"blue-light5"}},[t("p",{staticClass:"mb3"},[e._v("What it looks like:")]),t("w-radios",{attrs:{items:e.radios1,inline:""},model:{value:e.selection1,callback:function(a){e.selection1=a},expression:"selection1"}}),t("div",{staticClass:"title4 mt4"},[e._v("States")]),t("div",{staticClass:"w-flex wrap"},[t("w-radio",{staticClass:"mr3 mb1",attrs:{value:!0,label:"Checked"}}),t("w-radio",{staticClass:"mr3 mb1",attrs:{value:!1,label:"Unchecked"}}),t("w-radio",{staticClass:"mr3 mb1",attrs:{value:!0,disabled:"",label:"Checked &amp; disabled"}}),t("w-radio",{staticClass:"mr3 mb1",attrs:{value:!1,disabled:"",label:"Unchecked &amp; disabled"}})],1)],1),e._m(0),t("p",[e._v("Let's start with the basic component.")]),t("title-link",{staticClass:"title1 mt12",attrs:{h2:"",slug:"w-radio"}},[e._v("<w-radio>")]),t("div",{staticClass:"w-divider"}),t("alert",{attrs:{tip:""}},[t("div",{staticClass:"title3"},[e._v("Important notes")]),t("strong",{staticClass:"title5"},[e._v("Name attribute")]),t("p",{staticClass:"mb4"},[e._v("With individual radio buttons (using "),t("span",{staticClass:"code"},[e._v("<w-radio>")]),e._v("), the "),t("code",[e._v("name")]),e._v(` prop is
needed for the radios to work together. This is how HTML knows they are part of the same group
of choices.`),t("br"),e._v(`
But when you use a group of radio buttons via `),t("span",{staticClass:"code"},[e._v("<w-radios>")]),e._v(`, Wave UI will add the
name attributes for you.`)]),t("strong",{staticClass:"title5"},[e._v("Form validation")]),t("p",[e._v("When a validation is needed on radio buttons, each individual radio button ("),t("span",{staticClass:"code"},[e._v("w-radio")]),e._v(`)
has a separate validation message.`),t("br"),e._v(`
If you want only one validation for a group of radio buttons, you must use the `),t("span",{staticClass:"code"},[e._v("w-radios")]),e._v(`
component.
`)])]),t("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<div class="title4 mb2">1. Here is a single radio button</div>
<w-radio>I am single - not very useful</w-radio>

<div class="title4 mt8 mb2">2. Here is a duo</div>
<w-radio class="mr2" name="radio1">Option 1</w-radio>
<w-radio name="radio1">Option 2</w-radio>

<div class="title4 mt8 mb2">3. A trio using v-model</div>
<w-radio
  class="mr2"
  v-model="radio2"
  return-value="option 1">
  Option 1
</w-radio>
<w-radio
  class="mr2"
  v-model="radio2"
  return-value="option 2">
  Option 2
</w-radio>
<w-radio
  v-model="radio2"
  return-value="option 3">
  Option 3
</w-radio>

<div class="title4 mt8 mb2">
  4. A trio using v-model and a set name
</div>
<w-radio
  class="mr2"
  v-model="radio3"
  name="radio3"
  return-value="option 1">
  Option 1
</w-radio>
<w-radio
  class="mr2"
  v-model="radio3"
  name="radio3"
  return-value="option 2">
  Option 2
</w-radio>
<w-radio
  v-model="radio3"
  name="radio3"
  return-value="option 3">
  Option 3
</w-radio>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  radio2: false,
  radio3: false
})
`)]},proxy:!0}])},[t("div",{staticClass:"title4 mb2"},[e._v("1. Here is a single radio button")]),t("w-radio",[e._v("I am single - not very useful")]),t("div",{staticClass:"title4 mt8 mb2"},[e._v("2. Here is a duo")]),t("w-radio",{staticClass:"mr2",attrs:{name:"radio1"}},[e._v("Option 1")]),t("w-radio",{attrs:{name:"radio1"}},[e._v("Option 2")]),t("div",{staticClass:"title4 mt8 mb2"},[e._v("3. A trio using v-model")]),t("w-radio",{staticClass:"mr2",attrs:{"return-value":"option 1"},model:{value:e.radio2,callback:function(a){e.radio2=a},expression:"radio2"}},[e._v("Option 1")]),t("w-radio",{staticClass:"mr2",attrs:{"return-value":"option 2"},model:{value:e.radio2,callback:function(a){e.radio2=a},expression:"radio2"}},[e._v("Option 2")]),t("w-radio",{attrs:{"return-value":"option 3"},model:{value:e.radio2,callback:function(a){e.radio2=a},expression:"radio2"}},[e._v("Option 3")]),t("div",{staticClass:"title4 mt8 mb2"},[e._v("4. A trio using v-model and a set name")]),t("w-radio",{staticClass:"mr2",attrs:{name:"radio3","return-value":"option 1"},model:{value:e.radio3,callback:function(a){e.radio3=a},expression:"radio3"}},[e._v("Option 1")]),t("w-radio",{staticClass:"mr2",attrs:{name:"radio3","return-value":"option 2"},model:{value:e.radio3,callback:function(a){e.radio3=a},expression:"radio3"}},[e._v("Option 2")]),t("w-radio",{attrs:{name:"radio3","return-value":"option 3"},model:{value:e.radio3,callback:function(a){e.radio3=a},expression:"radio3"}},[e._v("Option 3")])],1),e._m(1),t("title-link",{attrs:{h2:""}},[e._v("Custom label in w-radio")]),e._m(2),t("example",{attrs:{"content-class":"mt3"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<w-radio class="mr5" name="radio1">
  <span class="pr1">Choice 1 has an icon</span>
  <w-icon md>mdi mdi-star</w-icon>
</w-radio>

<w-radio name="radio1">
  <w-tag bg-color="green-light5" color="green-dark2">
    Choice 2 is a tag
    <w-icon class="ml1">mdi mdi-heart</w-icon>
  </w-tag>
</w-radio>`)]},proxy:!0}])},[t("w-radio",{staticClass:"mr5",attrs:{name:"radio4"}},[t("span",{staticClass:"pr1"},[e._v("Choice 1 has an icon")]),t("w-icon",{attrs:{md:""}},[e._v("mdi mdi-star")])],1),t("w-radio",{attrs:{name:"radio4"}},[t("w-tag",{attrs:{"bg-color":"green-light5",color:"green-dark2"}},[e._v("Choice 2 is a tag"),t("w-icon",{staticClass:"ml1"},[e._v("mdi mdi-heart")])],1)],1)],1),t("alert",{attrs:{tip:""}},[e._v("As seen in this example, the "),t("span",{staticClass:"code"},[e._v("w-radio")]),e._v(` component allows you to have complete freedom
in your radio buttons.`),t("br"),e._v(`
But because in most cases you won't need that, the `),t("span",{staticClass:"code"},[e._v("w-radios")]),e._v(` component will make you go
much faster.
`)]),t("title-link",{staticClass:"title1 mt12",attrs:{h2:"",slug:"w-radios"}},[e._v("<w-radios>")]),t("div",{staticClass:"w-divider"}),e._m(3),t("title-link",{staticClass:"title2 primary",attrs:{h3:""}},[e._v("V-model")]),t("alert",{attrs:{info:""}},[e._v("If a value is set in the choice's data, it will be returned through the v-model when selected."),t("br"),e._v(`
If no value is set, the choice's label will be returned instead.`)]),t("p",[e._v("The v-model can also be preset, or updated externally.")]),t("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<div class="w-flex align-center">
  <w-radios
    v-model="selection"
    :items="radioItems">
  </w-radios>

  <div class="title3 ml10">
    v-model: `+e._s("{{ selection || 'null' }}")+`
  </div>
</div>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  selection: 1,
  radioItems: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`)]},proxy:!0}])},[t("div",{staticClass:"w-flex align-center"},[t("w-radios",{attrs:{items:e.radios1},model:{value:e.selection1,callback:function(a){e.selection1=a},expression:"selection1"}}),t("div",{staticClass:"title3 ml10"},[e._v("v-model: "),t("code",[e._v(e._s(e.selection1||"null"))])])],1)]),t("title-link",{attrs:{h2:""}},[e._v("Inline layout")]),t("example",{attrs:{"content-class":"mt3"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-radios :items="radioItems" inline></w-radios>')]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  radioItems: [
    { label: 'Choice 1' },
    { label: 'Choice 2' },
    { label: 'Choice 3' }
  ]
})
`)]},proxy:!0}])},[t("w-radios",{attrs:{items:e.radios2,inline:""}})],1),t("title-link",{attrs:{h2:""}},[e._v("Custom label content")]),e._m(4),t("p",[e._v("The great thing is that you can access any custom data from this slot!")]),t("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<w-radios
  v-model="selection"
  :items="radioItems"
  color="green">
  <template #item="{ item }">
    <span class="pr2">`+e._s("{{ item.label }}")+`</span>
    <w-icon class="success">`+e._s("{{ item.icon }}")+`</w-icon>
  </template>
</w-radios>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  selection: 'Square',
  radioItems: [
    { label: 'Square', icon: 'mdi mdi-square' },
    { label: 'Circle', icon: 'mdi mdi-circle' },
    { label: 'Triangle', icon: 'mdi mdi-triangle' }
  ],
})
`)]},proxy:!0}])},[t("w-radios",{attrs:{items:e.radios3,color:"green"},scopedSlots:e._u([{key:"item",fn:function(a){var n=a.item;return[t("span",{staticClass:"pr2"},[e._v(e._s(n.label))]),t("w-icon",{staticClass:"success"},[e._v(e._s(n.icon))])]}}]),model:{value:e.selection5,callback:function(a){e.selection5=a},expression:"selection5"}})],1),t("div",{staticClass:"w-divider grey-light5 my12"}),t("title-link",{attrs:{h2:""}},[e._v("Color")]),e._m(5),t("title-link",{attrs:{h3:"",slug:"w-radios--colors"}},[t("span",{staticClass:"code"},[e._v("w-radios")]),e._v(" colors")]),t("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<w-radios
  class="mr2"
  v-model="selection1"
  :items="radios1"
  color="purple">
  Option 1
</w-radios>

<div class="title4 mt8 mb2">
  Different color per item
</div>

<w-radios
  v-model="selection2"
  :items="radios2">
  Option 2
</w-radios>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  selection1: 1,
  radios1: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ],
  selection2: 1,
  radios2: [
    { label: 'Choice 1', value: 1, color: 'amber' },
    { label: 'Choice 2', value: 2, color: 'warning' },
    { label: 'Choice 3', value: 3, color: 'error' }
  ]
})
`)]},proxy:!0}])},[t("w-radios",{staticClass:"mr2",attrs:{items:e.radios1,color:"purple"},model:{value:e.selection6,callback:function(a){e.selection6=a},expression:"selection6"}},[e._v("Option 1")]),t("div",{staticClass:"title4 mt8 mb2"},[e._v("Different color per item")]),t("w-radios",{attrs:{items:e.radios4},model:{value:e.selection7,callback:function(a){e.selection7=a},expression:"selection7"}},[e._v("Option 2")])],1),t("title-link",{attrs:{h3:"",slug:"w-radio--colors"}},[t("span",{staticClass:"code"},[e._v("w-radio")]),e._v(" colors")]),t("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<w-radio
  class="mr2"
  v-model="selection1"
  name="radio1"
  color="teal-light1"
  :return-value="1">
  Option 1
</w-radio>

<w-radio
  v-model="selection1"
  name="radio1"
  color="teal-light1"
  :return-value="2">
  Option 2
</w-radio>

<div class="title4 mt8 mb2">
  Different color per item
</div>

<w-radio
  class="mr2"
  v-model="selection2"
  name="radio2"
  color="pink-light3"
  :return-value="1">
  Option 1
</w-radio>

<w-radio
  v-model="selection2"
  name="radio2"
  color="blue-light1"
  :return-value="2">
  Option 2
</w-radio>
`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  selection1: 1,
  selection2: 1
})`)]},proxy:!0}])},[t("w-radio",{staticClass:"mr2",attrs:{name:"radio5",color:"teal-light1","return-value":1},model:{value:e.selection3,callback:function(a){e.selection3=a},expression:"selection3"}},[e._v("Option 1")]),t("w-radio",{attrs:{name:"radio5",color:"teal-light1","return-value":2},model:{value:e.selection3,callback:function(a){e.selection3=a},expression:"selection3"}},[e._v("Option 2")]),t("div",{staticClass:"title4 mt8 mb2"},[e._v("Different color per item")]),t("w-radio",{staticClass:"mr2",attrs:{name:"radio6",color:"pink-light3","return-value":1},model:{value:e.selection4,callback:function(a){e.selection4=a},expression:"selection4"}},[e._v("Option 1")]),t("w-radio",{attrs:{name:"radio6",color:"blue-light1","return-value":2},model:{value:e.selection4,callback:function(a){e.selection4=a},expression:"selection4"}},[e._v("Option 2")])],1)],1)},p=[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",{staticClass:"mt12"},[e._v("There are 2 components: "),t("span",{staticClass:"code"},[e._v("w-radio")]),e._v(" & "),t("span",{staticClass:"code"},[e._v("w-radios")]),e._v(`.
The later is a group of radio buttons for convenience.`)])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[e._v(`The above example (case 3 & 4) shows that the radio buttons work without the name attribute,
using a v-model, but the navigation using the keyboard arrows will not work as the names are not
provided.`),t("br"),e._v(`
Case 4 is fully operational. `),t("span",{staticClass:"code"},[e._v(":tada:")]),e._v(`
(Keyboard arrows navigation is a browser choice, Safari doesn't have it)`),t("br"),t("strong",[e._v("Note that when you use the "),t("span",{staticClass:"code"},[e._v("w-radios")]),e._v(` component, a unique name is set by default so you don't
have to worry about it if you don't need it.
`)])])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[t("span",{staticClass:"code"},[e._v("w-radio")]),e._v(" provides a default slot to customize the content.")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",{staticClass:"my5"},[e._v("The "),t("span",{staticClass:"code"},[e._v("w-radios")]),e._v(` component allows a fast and easy rendering of
multiple radio buttons by passing the items through a prop.`),t("br"),e._v(`
It accepts an inline parameter to display the radio buttons inline,
and allows you to customize the label of each radio button through slot.
`)])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[t("span",{staticClass:"code"},[e._v("w-radios")]),e._v(" also provides a slot to customize the label of each radio button: "),t("code",[e._v("item")]),e._v(".")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[e._v("By default the "),t("span",{staticClass:"code"},[e._v("w-radio")]),e._v(" & "),t("span",{staticClass:"code"},[e._v("w-radios")]),e._v(` components will use the
primary color.`),t("br"),e._v(`
You can provide a different color with the `),t("code",[e._v("color")]),e._v(` option, or you can even set a different
color per item by providing a `),t("code",[e._v("color")]),e._v(` attribute in each of the item objects.
`)])}];const b={data:()=>({selection1:1,selection2:1,selection3:1,selection4:1,selection5:"Square",selection6:1,selection7:1,radio2:!1,radio3:!1,radios1:[{label:"Choice 1",value:1},{label:"Choice 2",value:2},{label:"Choice 3",value:3}],radios2:[{label:"Choice 1"},{label:"Choice 2"},{label:"Choice 3"}],radios3:[{label:"Square",icon:"mdi mdi-square"},{label:"Circle",icon:"mdi mdi-circle"},{label:"Triangle",icon:"mdi mdi-triangle"}],radios4:[{label:"Choice 1",value:1,color:"amber"},{label:"Choice 2",value:2,color:"warning"},{label:"Choice 3",value:3,color:"error"}]})},c={};var _=i(b,h,p,!1,f,null,null,null);function f(e){for(let o in c)this[o]=c[o]}var w=function(){return _.exports}(),g=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("a",{attrs:{id:"api",name:"api"}}),t("div",{staticClass:"w-divider my12"}),t("title-link",{staticClass:"title1",attrs:{h2:"",slug:"w-radios-api"}},[e._v("<w-radios> API")]),t("component-api",{staticClass:"mt0",attrs:{items:e.radiosProps,descriptions:e.radios.propsDescs,title:"Props"}}),t("component-api",{attrs:{items:e.radios.slots,title:"Slots"}}),t("component-api",{attrs:{items:e.radiosEvents,title:"Events"}}),t("div",{staticClass:"w-divider my12"}),t("title-link",{staticClass:"title1",attrs:{h2:"",slug:"w-radio-api"}},[e._v("<w-radio> API")]),t("component-api",{staticClass:"mt0",attrs:{items:e.radioProps,descriptions:e.radio.propsDescs,title:"Props"}}),t("component-api",{attrs:{items:e.radio.slots,title:"Slots"}}),t("component-api",{attrs:{items:e.radioEvents,title:"Events"}})],1)},y=[];const d={propsDescs:{items:"An array of radio button items to display. Each item object should contain at least a <code>label</code> or a <code>value</code> attribute.",value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Provide a value (of one of the <code>items</code> objects) to dictate the selected choice.<br>This value gets updated when using a v-model.',labelOnLeft:"Moves the label to the left of each radio button. By default the label is displayed on the right.",itemLabelKey:'The property name (aka "key") in each item object where to find the label of the item (if any).',itemValueKey:'The property name (aka "key") in each item object where to find the value of the item (if any).',itemColorKey:'The property name (aka "key") in each item object where to find the color of the item (if any).',inline:"Displays all the radio buttons inline instead of in column.",color:'Applies a color to the active radio buttons. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',labelColor:`Applies a specific color to the radio buttons' labels. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,name:"Provide a native HTML <code>name</code> attribute to each radio button. If not provided, a unique common name will be computed and applied to all the radio buttons.",disabled:"Disables all the radio buttons making them unreactive to user interactions.",readonly:"The radio button will still look like an interactive radio button except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to each radio button.",validators:'<span class="deep-orange">Only for validation, when the <strong class="code">w-radios</strong> component is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the radio button. Each function will be executed on radio button   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the radio button.'},slots:{item:{description:"Provide a custom content for each radio button label.",params:{item:"The current item object.",index:"The item index in the array of radios. Starts at 1 to be consistent with the <code>item.x</code> slot.",checked:"A boolean representing the checked state of this particular item."}},"item.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the array of radios. Starts at 1 to be consistent with the slot name.",checked:"A boolean representing the checked state of this particular item."}}},events:{input:{description:"Emitted each time any of the radio buttons is toggled.<br>Updates the v-model value in Vue 2.x only.",params:{"[String, Number, Boolean]":"The <code>return-value</code> of the selected radio button.<br>The <code>return-value</code> will be one of the following attributes, if they exist, in this order: the item value, the item label, the item index."}},"update:modelValue":{description:"Emitted each time any of the radio buttons is toggled.<br>Updates the v-model value in Vue 3 only.",params:{"[String, Number, Boolean]":"The <code>return-value</code> of the selected radio button.<br>The <code>return-value</code> will be one of the following attributes, if they exist, in this order: the item value, the item label, the item index."}},focus:{description:"Emitted on each radio button focus.",params:{"[DOM event object]":"The associated focus DOM event."}}}},u={propsDescs:{value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Provide a boolean to dictate the selected state of the radio button.<br>This value gets updated when using a v-model.',returnValue:"Since the native HTML radio uses the <code>value</code> attribute to define the selected state, the <code>return-value</code> prop let you specify a value to return to the <code>v-model</code> when the radio is selected (instead of returning <code>true</code>).",label:"Sets a visible label for the radio button.",labelOnLeft:"Moves the label to the left of the radio button. By default the label is displayed on the right.",color:'Applies a color to the radio button when active. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',labelColor:`Applies a specific color to the radio button's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,noRipple:"Removes the ripple animation on select.",name:"Provide a native HTML <code>name</code> attribute to the radio button. If not provided, a unique name will be computed.",disabled:"Disables the radio button making it unreactive to user interactions.",readonly:"The radio button will still look like an interactive radio button except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the radio button.",validators:'<span class="deep-orange">Only for validation, when this radio button is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the radio button. Each function will be executed on radio button   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the radio button.'},slots:{default:{description:"The radio button label content."}},events:{input:{description:"Emitted each time the state of the radio button changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"The current state of the radio button."}},"update:modelValue":{description:"Emitted each time the state of the radio button changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"The current state of the radio button."}},focus:{description:"Emitted on each radio button focus.",params:{"[DOM event object]":"The associated focus DOM event."}}}},C={data:()=>({radios:d,radio:u}),computed:{radiosProps(){return{...r.props,...s.props}},radioProps(){return{...l.props,...s.props}},radiosEvents(){return r.emits.reduce((e,o)=>(e[o]=d.events[o]||{})&&e,{})},radioEvents(){return l.emits.reduce((e,o)=>(e[o]=u.events[o]||{})&&e,{})}}},m={};var k=i(C,g,y,!1,x,null,null,null);function x(e){for(let o in m)this[o]=m[o]}var O=function(){return k.exports}(),T=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("main",[t("ui-component-title",{attrs:{slug:"w-radio-and-w-radios",code:!1}},[t("span",{staticClass:"code"},[e._v("w-radio")]),e._v(" & "),t("span",{staticClass:"code"},[e._v("w-radios")])]),t("examples"),t("api")],1)},E=[];const S={components:{Examples:w,Api:O}},v={};var A=i(S,T,E,!1,$,null,null,null);function $(e){for(let o in v)this[o]=v[o]}var P=function(){return A.exports}();export{P as default};
