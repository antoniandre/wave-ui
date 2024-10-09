import{r,o as w,g as h,a as n,w as l,d as t,b as o,t as b,_ as g,Z as C,D as O,$ as T}from"./index-GCsNrMay.js";const E={class:"w-flex wrap my1"},P={class:"w-flex wrap my1"},D={class:"w-flex align-center"},S={class:"title3 ml10"},j={class:"pr2"};function M(a,e,y,V,k,p){const d=r("w-radios"),s=r("w-radio"),c=r("w-card"),u=r("title-link"),v=r("alert"),m=r("example"),f=r("w-icon"),I=r("w-tag");return w(),h("div",null,[n(c,{"bg-color":a.$store.state.darkMode?"grey-dark5":"blue-light5"},{default:l(()=>[e[15]||(e[15]=t("p",{class:"mb3"},"What it looks like:",-1)),n(d,{modelValue:a.selection1,"onUpdate:modelValue":e[0]||(e[0]=i=>a.selection1=i),items:a.radios1,inline:""},null,8,["modelValue","items"]),e[16]||(e[16]=t("div",{class:"title4 mt4"},"States",-1)),t("div",null,[t("div",E,[n(s,{class:"mr3 mb1","model-value":!0,label:"Checked"}),n(s,{class:"mr3 mb1","model-value":!0,disabled:"",label:"Checked &amp; disabled"}),n(s,{class:"mr3 mb1","model-value":!0,readonly:"",label:"Checked &amp; readonly"})]),t("div",P,[n(s,{class:"mr3 mb1","model-value":!1,label:"Unchecked"}),n(s,{class:"mr3 mb1","model-value":!1,disabled:"",label:"Unchecked &amp; disabled"}),n(s,{class:"mr3 mb1","model-value":!1,readonly:"",label:"Unchecked &amp; readonly"})])])]),_:1},8,["bg-color"]),e[68]||(e[68]=t("p",{class:"mt12"},[o("There are 2 components: "),t("span",{class:"code"},"w-radio"),o(" & "),t("span",{class:"code"},"w-radios"),o(`.
The later is a group of radio buttons for convenience.`)],-1)),e[69]||(e[69]=t("p",null,"Let's start with the basic component.",-1)),n(u,{class:"title1 mt12",h2:"",slug:"w-radio"},{default:l(()=>e[17]||(e[17]=[o("<w-radio>")])),_:1}),e[70]||(e[70]=t("div",{class:"w-divider"},null,-1)),n(v,{tip:""},{default:l(()=>e[18]||(e[18]=[t("div",{class:"title3"},"Important notes",-1),t("strong",{class:"title5"},"Name attribute",-1),t("p",{class:"mb4"},[o("With individual radio buttons (using "),t("span",{class:"code"},"<w-radio>"),o("), the "),t("code",null,"name"),o(` prop is
needed for the radios to work together. This is how HTML knows they are part of the same group
of choices.`),t("br"),o(`
But when you use a group of radio buttons via `),t("span",{class:"code"},"<w-radios>"),o(`, Wave UI will add the
name attributes for you.`)],-1),t("strong",{class:"title5"},"Form validation",-1),t("p",null,[o("When a validation is needed on radio buttons, each individual radio button ("),t("span",{class:"code"},"w-radio"),o(`)
has a separate validation message.`),t("br"),o(`
If you want only one validation for a group of radio buttons, you must use the `),t("span",{class:"code"},"w-radios"),o(`
component.
`)],-1)])),_:1}),n(m,null,{html:l(()=>e[28]||(e[28]=[o(`<div class="title4 mb2">1. Here is a single radio button</div>
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
</w-radio>`)])),js:l(()=>e[29]||(e[29]=[o(`data: () => ({
  radio2: false,
  radio3: false
})
`)])),default:l(()=>[e[30]||(e[30]=t("div",{class:"title4 mb2"},"1. Here is a single radio button",-1)),n(s,null,{default:l(()=>e[19]||(e[19]=[o("I am single - not very useful")])),_:1}),e[31]||(e[31]=t("div",{class:"title4 mt8 mb2"},"2. Here is a duo",-1)),n(s,{class:"mr2",name:"radio1"},{default:l(()=>e[20]||(e[20]=[o("Option 1")])),_:1}),n(s,{name:"radio1"},{default:l(()=>e[21]||(e[21]=[o("Option 2")])),_:1}),e[32]||(e[32]=t("div",{class:"title4 mt8 mb2"},"3. A trio using v-model",-1)),n(s,{class:"mr2",modelValue:a.radio2,"onUpdate:modelValue":e[1]||(e[1]=i=>a.radio2=i),"return-value":"option 1"},{default:l(()=>e[22]||(e[22]=[o("Option 1")])),_:1},8,["modelValue"]),n(s,{class:"mr2",modelValue:a.radio2,"onUpdate:modelValue":e[2]||(e[2]=i=>a.radio2=i),"return-value":"option 2"},{default:l(()=>e[23]||(e[23]=[o("Option 2")])),_:1},8,["modelValue"]),n(s,{modelValue:a.radio2,"onUpdate:modelValue":e[3]||(e[3]=i=>a.radio2=i),"return-value":"option 3"},{default:l(()=>e[24]||(e[24]=[o("Option 3")])),_:1},8,["modelValue"]),e[33]||(e[33]=t("div",{class:"title4 mt8 mb2"},"4. A trio using v-model and a set name",-1)),n(s,{class:"mr2",modelValue:a.radio3,"onUpdate:modelValue":e[4]||(e[4]=i=>a.radio3=i),name:"radio3","return-value":"option 1"},{default:l(()=>e[25]||(e[25]=[o("Option 1")])),_:1},8,["modelValue"]),n(s,{class:"mr2",modelValue:a.radio3,"onUpdate:modelValue":e[5]||(e[5]=i=>a.radio3=i),name:"radio3","return-value":"option 2"},{default:l(()=>e[26]||(e[26]=[o("Option 2")])),_:1},8,["modelValue"]),n(s,{modelValue:a.radio3,"onUpdate:modelValue":e[6]||(e[6]=i=>a.radio3=i),name:"radio3","return-value":"option 3"},{default:l(()=>e[27]||(e[27]=[o("Option 3")])),_:1},8,["modelValue"])]),_:1}),e[71]||(e[71]=t("p",null,[o(`The above example (case 3 & 4) shows that the radio buttons work without the name attribute,
using a v-model, but the navigation using the keyboard arrows will not work as the names are not
provided.`),t("br"),o(`
Case 4 is fully operational. `),t("span",{class:"code"},":tada:"),o(`
(Keyboard arrows navigation is a browser choice, Safari doesn't have it)`),t("br"),t("strong",null,[o("Note that when you use the "),t("span",{class:"code"},"w-radios"),o(` component, a unique name is set by default so you don't
have to worry about it if you don't need it.
`)])],-1)),n(u,{h2:""},{default:l(()=>e[34]||(e[34]=[o("Custom label in w-radio")])),_:1}),e[72]||(e[72]=t("p",null,[t("span",{class:"code"},"w-radio"),o(" provides a default slot to customize the content.")],-1)),n(m,{"content-class":"mt3"},{html:l(()=>e[39]||(e[39]=[o(`<w-radio class="mr5" name="radio1">
  <span class="pr1">Choice 1 has an icon</span>
  <w-icon md>mdi mdi-star</w-icon>
</w-radio>

<w-radio name="radio1">
  <w-tag bg-color="green-light5" color="green-dark2">
    Choice 2 is a tag
    <w-icon class="ml1">mdi mdi-heart</w-icon>
  </w-tag>
</w-radio>`)])),default:l(()=>[n(s,{class:"mr5",name:"radio4"},{default:l(()=>[e[36]||(e[36]=t("span",{class:"pr1"},"Choice 1 has an icon",-1)),n(f,{md:""},{default:l(()=>e[35]||(e[35]=[o("mdi mdi-star")])),_:1})]),_:1}),n(s,{name:"radio4"},{default:l(()=>[n(I,{"bg-color":"green-light5",color:"green-dark2"},{default:l(()=>[e[38]||(e[38]=o("Choice 2 is a tag")),n(f,{class:"ml1"},{default:l(()=>e[37]||(e[37]=[o("mdi mdi-heart")])),_:1})]),_:1})]),_:1})]),_:1}),n(v,{tip:""},{default:l(()=>e[40]||(e[40]=[o("As seen in this example, the "),t("span",{class:"code"},"w-radio",-1),o(` component allows you to have complete freedom
in your radio buttons.`),t("br",null,null,-1),o(`
But because in most cases you won't need that, the `),t("span",{class:"code"},"w-radios",-1),o(` component will make you go
much faster.
`)])),_:1}),n(u,{class:"title1 mt12",h2:"",slug:"w-radios"},{default:l(()=>e[41]||(e[41]=[o("<w-radios>")])),_:1}),e[73]||(e[73]=t("div",{class:"w-divider"},null,-1)),e[74]||(e[74]=t("p",{class:"my5"},[o("The "),t("span",{class:"code"},"w-radios"),o(` component allows a fast and easy rendering of
multiple radio buttons by passing the items through a prop.`),t("br"),o(`
It accepts an inline parameter to display the radio buttons inline,
and allows you to customize the label of each radio button through slot.
`)],-1)),n(u,{class:"title2 primary",h3:""},{default:l(()=>e[42]||(e[42]=[o("V-model")])),_:1}),n(v,{info:""},{default:l(()=>e[43]||(e[43]=[o("If a value is set in the choice's data, it will be returned through the v-model when selected."),t("br",null,null,-1),o(`
If no value is set, the choice's label will be returned instead.`)])),_:1}),e[75]||(e[75]=t("p",null,"The v-model can also be preset, or updated externally.",-1)),n(m,null,{html:l(()=>e[45]||(e[45]=[o(`<div class="w-flex align-center">
  <w-radios
    v-model="selection"
    :items="radioItems">
  </w-radios>

  <div class="title3 ml10">
    v-model: `+b("{{ selection || 'null' }}")+`
  </div>
</div>`)])),js:l(()=>e[46]||(e[46]=[o(`data: () => ({
  selection: 1,
  radioItems: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`)])),default:l(()=>[t("div",D,[n(d,{modelValue:a.selection1,"onUpdate:modelValue":e[7]||(e[7]=i=>a.selection1=i),items:a.radios1},null,8,["modelValue","items"]),t("div",S,[e[44]||(e[44]=o("v-model: ")),t("code",null,b(a.selection1||"null"),1)])])]),_:1}),n(u,{h2:""},{default:l(()=>e[47]||(e[47]=[o("Inline layout")])),_:1}),n(m,{"content-class":"mt3"},{html:l(()=>e[48]||(e[48]=[o('<w-radios :items="radioItems" inline></w-radios>')])),js:l(()=>e[49]||(e[49]=[o(`data: () => ({
  radioItems: [
    { label: 'Choice 1' },
    { label: 'Choice 2' },
    { label: 'Choice 3' }
  ]
})
`)])),default:l(()=>[n(d,{items:a.radios2,inline:""},null,8,["items"])]),_:1}),n(u,{h2:""},{default:l(()=>e[50]||(e[50]=[o("Custom label content")])),_:1}),e[76]||(e[76]=t("p",null,[t("span",{class:"code"},"w-radios"),o(" also provides a slot to customize the label of each radio button: "),t("code",null,"item"),o(".")],-1)),e[77]||(e[77]=t("p",null,"The great thing is that you can access any custom data from this slot!",-1)),n(m,null,{html:l(()=>e[51]||(e[51]=[o(`<w-radios
  v-model="selection"
  :items="radioItems"
  color="green">
  <template #item="{ item }">
    <span class="pr2">`+b("{{ item.label }}")+`</span>
    <w-icon class="success">`+b("{{ item.icon }}")+`</w-icon>
  </template>
</w-radios>`)])),js:l(()=>e[52]||(e[52]=[o(`data: () => ({
  selection: 'Square',
  radioItems: [
    { label: 'Square', icon: 'mdi mdi-square' },
    { label: 'Circle', icon: 'mdi mdi-circle' },
    { label: 'Triangle', icon: 'mdi mdi-triangle' }
  ],
})
`)])),default:l(()=>[n(d,{modelValue:a.selection5,"onUpdate:modelValue":e[8]||(e[8]=i=>a.selection5=i),items:a.radios3,color:"green"},{item:l(({item:i})=>[t("span",j,b(i.label),1),n(f,{class:"success"},{default:l(()=>[o(b(i.icon),1)]),_:2},1024)]),_:1},8,["modelValue","items"])]),_:1}),e[78]||(e[78]=t("div",{class:"w-divider grey-light5 my12"},null,-1)),n(u,{h2:""},{default:l(()=>e[53]||(e[53]=[o("Color")])),_:1}),e[79]||(e[79]=t("p",null,[o("By default the "),t("span",{class:"code"},"w-radio"),o(" & "),t("span",{class:"code"},"w-radios"),o(` components will use the
primary color.`),t("br"),o(`
You can provide a different color with the `),t("code",null,"color"),o(` option, or you can even set a different
color per item by providing a `),t("code",null,"color"),o(` attribute in each of the item objects.
`)],-1)),n(u,{h3:"",slug:"w-radios--colors"},{default:l(()=>e[54]||(e[54]=[t("span",{class:"code"},"w-radios",-1),o(" colors")])),_:1}),n(m,null,{html:l(()=>e[57]||(e[57]=[o(`<w-radios
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
</w-radios>`)])),js:l(()=>e[58]||(e[58]=[o(`data: () => ({
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
`)])),default:l(()=>[n(d,{class:"mr2",modelValue:a.selection6,"onUpdate:modelValue":e[9]||(e[9]=i=>a.selection6=i),items:a.radios1,color:"purple"},{default:l(()=>e[55]||(e[55]=[o("Option 1")])),_:1},8,["modelValue","items"]),e[59]||(e[59]=t("div",{class:"title4 mt8 mb2"},"Different color per item",-1)),n(d,{modelValue:a.selection7,"onUpdate:modelValue":e[10]||(e[10]=i=>a.selection7=i),items:a.radios4},{default:l(()=>e[56]||(e[56]=[o("Option 2")])),_:1},8,["modelValue","items"])]),_:1}),n(u,{h3:"",slug:"w-radio--colors"},{default:l(()=>e[60]||(e[60]=[t("span",{class:"code"},"w-radio",-1),o(" colors")])),_:1}),n(m,null,{html:l(()=>e[65]||(e[65]=[o(`<w-radio
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
`)])),js:l(()=>e[66]||(e[66]=[o(`data: () => ({
  selection1: 1,
  selection2: 1
})`)])),default:l(()=>[n(s,{class:"mr2",modelValue:a.selection3,"onUpdate:modelValue":e[11]||(e[11]=i=>a.selection3=i),name:"radio5",color:"teal-light1","return-value":1},{default:l(()=>e[61]||(e[61]=[o("Option 1")])),_:1},8,["modelValue"]),n(s,{modelValue:a.selection3,"onUpdate:modelValue":e[12]||(e[12]=i=>a.selection3=i),name:"radio5",color:"teal-light1","return-value":2},{default:l(()=>e[62]||(e[62]=[o("Option 2")])),_:1},8,["modelValue"]),e[67]||(e[67]=t("div",{class:"title4 mt8 mb2"},"Different color per item",-1)),n(s,{class:"mr2",modelValue:a.selection4,"onUpdate:modelValue":e[13]||(e[13]=i=>a.selection4=i),name:"radio6",color:"pink-light3","return-value":1},{default:l(()=>e[63]||(e[63]=[o("Option 1")])),_:1},8,["modelValue"]),n(s,{modelValue:a.selection4,"onUpdate:modelValue":e[14]||(e[14]=i=>a.selection4=i),name:"radio6",color:"blue-light1","return-value":2},{default:l(()=>e[64]||(e[64]=[o("Option 2")])),_:1},8,["modelValue"])]),_:1})])}const $={data:()=>({selection1:1,selection2:1,selection3:1,selection4:1,selection5:"Square",selection6:1,selection7:1,radio2:!1,radio3:!1,radios1:[{label:"Choice 1",value:1},{label:"Choice 2",value:2},{label:"Choice 3",value:3}],radios2:[{label:"Choice 1"},{label:"Choice 2"},{label:"Choice 3"}],radios3:[{label:"Square",icon:"mdi mdi-square"},{label:"Circle",icon:"mdi mdi-circle"},{label:"Triangle",icon:"mdi mdi-triangle"}],radios4:[{label:"Choice 1",value:1,color:"amber"},{label:"Choice 2",value:2,color:"warning"},{label:"Choice 3",value:3,color:"error"}]})},q=g($,[["render",M]]);function B(a,e,y,V,k,p){const d=r("title-link"),s=r("component-api");return w(),h("div",null,[e[2]||(e[2]=t("a",{id:"api",name:"api"},null,-1)),e[3]||(e[3]=t("div",{class:"w-divider my12"},null,-1)),n(d,{class:"title1",h2:"",slug:"w-radios-api"},{default:l(()=>e[0]||(e[0]=[o("<w-radios> API")])),_:1}),n(s,{class:"mt0",items:p.radiosProps,descriptions:a.radios.propsDescs,title:"Props"},null,8,["items","descriptions"]),n(s,{items:a.radios.slots,title:"Slots"},null,8,["items"]),n(s,{items:p.radiosEvents,title:"Events"},null,8,["items"]),e[4]||(e[4]=t("div",{class:"w-divider my12"},null,-1)),n(d,{class:"title1",h2:"",slug:"w-radio-api"},{default:l(()=>e[1]||(e[1]=[o("<w-radio> API")])),_:1}),n(s,{class:"mt0",items:p.radioProps,descriptions:a.radio.propsDescs,title:"Props"},null,8,["items","descriptions"]),n(s,{items:a.radio.slots,title:"Slots"},null,8,["items"]),n(s,{items:p.radioEvents,title:"Events"},null,8,["items"])])}const A={propsDescs:{items:"An array of radio button items to display. Each item object should contain at least a <code>label</code> or a <code>value</code> attribute.",modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide a value (of one of the <code>items</code> objects) to dictate the selected choice.<br>This value gets updated when using a v-model.',labelOnLeft:"Moves the label to the left of each radio button. By default the label is displayed on the right.",itemLabelKey:'The property name (aka "key") in each item object where to find the label of the item (if any).',itemValueKey:'The property name (aka "key") in each item object where to find the value of the item (if any).',itemColorKey:'The property name (aka "key") in each item object where to find the color of the item (if any).',inline:"Displays all the radio buttons inline instead of in column.",color:'Applies a color to the active radio buttons. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',labelColor:`Applies a specific color to the radio buttons' labels. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,name:"Provide a native HTML <code>name</code> attribute to each radio button. If not provided, a unique common name will be computed and applied to all the radio buttons.",disabled:"Disables all the radio buttons making them unreactive to user interactions.",readonly:"The radio button will still look like an interactive radio button except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to each radio button.",validators:'<span class="deep-orange">Only for validation, when the <strong class="code">w-radios</strong> component is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the radio button. Each function will be executed on radio button   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the radio button.'},slots:{item:{description:"Provide a custom content for each radio button label.",params:{item:"The current item object.",index:"The item index in the array of radios. Starts at 1 to be consistent with the <code>item.x</code> slot.",checked:"A boolean representing the checked state of this particular item."}},"item.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the array of radios. Starts at 1 to be consistent with the slot name.",checked:"A boolean representing the checked state of this particular item."}}},events:{input:{description:"Emitted each time any of the radio buttons is toggled.<br>Updates the v-model value in Vue 2.x only.",params:{"[String, Number, Boolean]":"The <code>return-value</code> of the selected radio button.<br>The <code>return-value</code> will be one of the following attributes, if they exist, in this order: the item value, the item label, the item index."}},"update:modelValue":{description:"Emitted each time any of the radio buttons is toggled.<br>Updates the v-model value in Vue 3 only.",params:{"[String, Number, Boolean]":"The <code>return-value</code> of the selected radio button.<br>The <code>return-value</code> will be one of the following attributes, if they exist, in this order: the item value, the item label, the item index."}},focus:{description:"Emitted on each radio button focus.",params:{"[DOM event object]":"The associated focus DOM event."}}}},U={propsDescs:{modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide a boolean to dictate the selected state of the radio button.<br>This value gets updated when using a v-model.',returnValue:"Since the native HTML radio uses the <code>value</code> attribute to define the selected state, the <code>return-value</code> prop let you specify a value to return to the <code>v-model</code> when the radio is selected (instead of returning <code>true</code>).",label:"Sets a visible label for the radio button.",labelOnLeft:"Moves the label to the left of the radio button. By default the label is displayed on the right.",color:'Applies a color to the radio button when active. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',labelColor:`Applies a specific color to the radio button's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,noRipple:"Removes the ripple animation on select.",name:"Provide a native HTML <code>name</code> attribute to the radio button. If not provided, a unique name will be computed.",disabled:"Disables the radio button making it unreactive to user interactions.",readonly:"The radio button will still look like an interactive radio button except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the radio button.",validators:'<span class="deep-orange">Only for validation, when this radio button is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the radio button. Each function will be executed on radio button   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the radio button.'},slots:{default:{description:"The radio button label content."}},events:{input:{description:"Emitted each time the state of the radio button changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"The current state of the radio button."}},"update:modelValue":{description:"Emitted each time the state of the radio button changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"The current state of the radio button."}},focus:{description:"Emitted on each radio button focus.",params:{"[DOM event object]":"The associated focus DOM event."}}}},H={data:()=>({radios:A,radio:U}),computed:{radiosProps(){return{...C.props,...O.props}},radioProps(){return{...T.props,...O.props}},radiosEvents(){return C.emits.reduce((a,e)=>(a[e]=A.events[e]||{})&&a,{})},radioEvents(){return T.emits.reduce((a,e)=>(a[e]=U.events[e]||{})&&a,{})}}},L=g(H,[["render",B]]);function N(a,e,y,V,k,p){const d=r("ui-component-title"),s=r("examples"),c=r("api");return w(),h("main",null,[n(d,{slug:"w-radio-and-w-radios",code:!1},{default:l(()=>e[0]||(e[0]=[t("span",{class:"code"},"w-radio",-1),o(" & "),t("span",{class:"code"},"w-radios",-1)])),_:1}),n(s),n(c)])}const W={components:{Examples:q,Api:L}},R=g(W,[["render",N]]);export{R as default};
