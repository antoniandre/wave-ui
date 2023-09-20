import{r,o as f,g as w,a as t,w as a,d as o,b as e,t as h,_ as g,$ as k,C,a0 as O}from"./index.bf2cfd71.js";const I=o("p",{class:"mb3"},"What it looks like:",-1),$=o("div",{class:"title4 mt4"},"States",-1),E={class:"w-flex wrap my1"},P={class:"w-flex wrap my1"},D=o("p",{class:"mt12"},[e("There are 2 components: "),o("span",{class:"code"},"w-radio"),e(" & "),o("span",{class:"code"},"w-radios"),e(`.
The later is a group of radio buttons for convenience.`)],-1),S=o("p",null,"Let's start with the basic component.",-1),j=o("div",{class:"w-divider"},null,-1),M=o("div",{class:"title3"},"Important notes",-1),q=o("strong",{class:"title5"},"Name attribute",-1),B=o("p",{class:"mb4"},[e("With individual radio buttons (using "),o("span",{class:"code"},"<w-radio>"),e("), the "),o("code",null,"name"),e(` prop is
needed for the radios to work together. This is how HTML knows they are part of the same group
of choices.`),o("br"),e(`
But when you use a group of radio buttons via `),o("span",{class:"code"},"<w-radios>"),e(`, Wave UI will add the
name attributes for you.`)],-1),H=o("strong",{class:"title5"},"Form validation",-1),L=o("p",null,[e("When a validation is needed on radio buttons, each individual radio button ("),o("span",{class:"code"},"w-radio"),e(`)
has a separate validation message.`),o("br"),e(`
If you want only one validation for a group of radio buttons, you must use the `),o("span",{class:"code"},"w-radios"),e(`
component.
`)],-1),N=o("div",{class:"title4 mb2"},"1. Here is a single radio button",-1),W=o("div",{class:"title4 mt8 mb2"},"2. Here is a duo",-1),K=o("div",{class:"title4 mt8 mb2"},"3. A trio using v-model",-1),R=o("div",{class:"title4 mt8 mb2"},"4. A trio using v-model and a set name",-1),z=o("p",null,[e(`The above example (case 3 & 4) shows that the radio buttons work without the name attribute,
using a v-model, but the navigation using the keyboard arrows will not work as the names are not
provided.`),o("br"),e(`
Case 4 is fully operational. `),o("span",{class:"code"},":tada:"),e(`
(Keyboard arrows navigation is a browser choice, Safari doesn't have it)`),o("br"),o("strong",null,[e("Note that when you use the "),o("span",{class:"code"},"w-radios"),e(` component, a unique name is set by default so you don't
have to worry about it if you don't need it.
`)])],-1),x=o("p",null,[o("span",{class:"code"},"w-radio"),e(" provides a default slot to customize the content.")],-1),F=o("span",{class:"pr1"},"Choice 1 has an icon",-1),Y=o("span",{class:"code"},"w-radio",-1),G=o("br",null,null,-1),J=o("span",{class:"code"},"w-radios",-1),Q=o("div",{class:"w-divider"},null,-1),X=o("p",{class:"my5"},[e("The "),o("span",{class:"code"},"w-radios"),e(` component allows a fast and easy rendering of
multiple radio buttons by passing the items through a prop.`),o("br"),e(`
It accepts an inline parameter to display the radio buttons inline,
and allows you to customize the label of each radio button through slot.
`)],-1),Z=o("br",null,null,-1),ee=o("p",null,"The v-model can also be preset, or updated externally.",-1),oe={class:"w-flex align-center"},te={class:"title3 ml10"},ae=o("p",null,[o("span",{class:"code"},"w-radios"),e(" also provides a slot to customize the label of each radio button: "),o("code",null,"item"),e(".")],-1),ne=o("p",null,"The great thing is that you can access any custom data from this slot!",-1),ie={class:"pr2"},le=o("div",{class:"w-divider grey-light5 my12"},null,-1),se=o("p",null,[e("By default the "),o("span",{class:"code"},"w-radio"),e(" & "),o("span",{class:"code"},"w-radios"),e(` components will use the
primary color.`),o("br"),e(`
You can provide a different color with the `),o("code",null,"color"),e(` option, or you can even set a different
color per item by providing a `),o("code",null,"color"),e(` attribute in each of the item objects.
`)],-1),re=o("span",{class:"code"},"w-radios",-1),de=o("div",{class:"title4 mt8 mb2"},"Different color per item",-1),ce=o("span",{class:"code"},"w-radio",-1),ue=o("div",{class:"title4 mt8 mb2"},"Different color per item",-1);function me(n,i,_,y,V,m){const d=r("w-radios"),s=r("w-radio"),p=r("w-card"),c=r("title-link"),b=r("alert"),u=r("example"),v=r("w-icon"),U=r("w-tag");return f(),w("div",null,[t(p,{"bg-color":n.$store.state.darkMode?"grey-dark5":"blue-light5"},{default:a(()=>[I,t(d,{modelValue:n.selection1,"onUpdate:modelValue":i[0]||(i[0]=l=>n.selection1=l),items:n.radios1,inline:""},null,8,["modelValue","items"]),$,o("div",null,[o("div",E,[t(s,{class:"mr3 mb1","model-value":!0,label:"Checked"}),t(s,{class:"mr3 mb1","model-value":!0,disabled:"",label:"Checked &amp; disabled"}),t(s,{class:"mr3 mb1","model-value":!0,readonly:"",label:"Checked &amp; readonly"})]),o("div",P,[t(s,{class:"mr3 mb1","model-value":!1,label:"Unchecked"}),t(s,{class:"mr3 mb1","model-value":!1,disabled:"",label:"Unchecked &amp; disabled"}),t(s,{class:"mr3 mb1","model-value":!1,readonly:"",label:"Unchecked &amp; readonly"})])])]),_:1},8,["bg-color"]),D,S,t(c,{class:"title1 mt12",h2:"",slug:"w-radio"},{default:a(()=>[e("<w-radio>")]),_:1}),j,t(b,{tip:""},{default:a(()=>[M,q,B,H,L]),_:1}),t(u,null,{html:a(()=>[e(`<div class="title4 mb2">1. Here is a single radio button</div>
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
</w-radio>`)]),js:a(()=>[e(`data: () => ({
  radio2: false,
  radio3: false
})
`)]),default:a(()=>[N,t(s,null,{default:a(()=>[e("I am single - not very useful")]),_:1}),W,t(s,{class:"mr2",name:"radio1"},{default:a(()=>[e("Option 1")]),_:1}),t(s,{name:"radio1"},{default:a(()=>[e("Option 2")]),_:1}),K,t(s,{class:"mr2",modelValue:n.radio2,"onUpdate:modelValue":i[1]||(i[1]=l=>n.radio2=l),"return-value":"option 1"},{default:a(()=>[e("Option 1")]),_:1},8,["modelValue"]),t(s,{class:"mr2",modelValue:n.radio2,"onUpdate:modelValue":i[2]||(i[2]=l=>n.radio2=l),"return-value":"option 2"},{default:a(()=>[e("Option 2")]),_:1},8,["modelValue"]),t(s,{modelValue:n.radio2,"onUpdate:modelValue":i[3]||(i[3]=l=>n.radio2=l),"return-value":"option 3"},{default:a(()=>[e("Option 3")]),_:1},8,["modelValue"]),R,t(s,{class:"mr2",modelValue:n.radio3,"onUpdate:modelValue":i[4]||(i[4]=l=>n.radio3=l),name:"radio3","return-value":"option 1"},{default:a(()=>[e("Option 1")]),_:1},8,["modelValue"]),t(s,{class:"mr2",modelValue:n.radio3,"onUpdate:modelValue":i[5]||(i[5]=l=>n.radio3=l),name:"radio3","return-value":"option 2"},{default:a(()=>[e("Option 2")]),_:1},8,["modelValue"]),t(s,{modelValue:n.radio3,"onUpdate:modelValue":i[6]||(i[6]=l=>n.radio3=l),name:"radio3","return-value":"option 3"},{default:a(()=>[e("Option 3")]),_:1},8,["modelValue"])]),_:1}),z,t(c,{h2:""},{default:a(()=>[e("Custom label in w-radio")]),_:1}),x,t(u,{"content-class":"mt3"},{html:a(()=>[e(`<w-radio class="mr5" name="radio1">
  <span class="pr1">Choice 1 has an icon</span>
  <w-icon md>mdi mdi-star</w-icon>
</w-radio>

<w-radio name="radio1">
  <w-tag bg-color="green-light5" color="green-dark2">
    Choice 2 is a tag
    <w-icon class="ml1">mdi mdi-heart</w-icon>
  </w-tag>
</w-radio>`)]),default:a(()=>[t(s,{class:"mr5",name:"radio4"},{default:a(()=>[F,t(v,{md:""},{default:a(()=>[e("mdi mdi-star")]),_:1})]),_:1}),t(s,{name:"radio4"},{default:a(()=>[t(U,{"bg-color":"green-light5",color:"green-dark2"},{default:a(()=>[e("Choice 2 is a tag"),t(v,{class:"ml1"},{default:a(()=>[e("mdi mdi-heart")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,{tip:""},{default:a(()=>[e("As seen in this example, the "),Y,e(` component allows you to have complete freedom
in your radio buttons.`),G,e(`
But because in most cases you won't need that, the `),J,e(` component will make you go
much faster.
`)]),_:1}),t(c,{class:"title1 mt12",h2:"",slug:"w-radios"},{default:a(()=>[e("<w-radios>")]),_:1}),Q,X,t(c,{class:"title2 primary",h3:""},{default:a(()=>[e("V-model")]),_:1}),t(b,{info:""},{default:a(()=>[e("If a value is set in the choice's data, it will be returned through the v-model when selected."),Z,e(`
If no value is set, the choice's label will be returned instead.`)]),_:1}),ee,t(u,null,{html:a(()=>[e(`<div class="w-flex align-center">
  <w-radios
    v-model="selection"
    :items="radioItems">
  </w-radios>

  <div class="title3 ml10">
    v-model: `+h("{{ selection || 'null' }}")+`
  </div>
</div>`)]),js:a(()=>[e(`data: () => ({
  selection: 1,
  radioItems: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`)]),default:a(()=>[o("div",oe,[t(d,{modelValue:n.selection1,"onUpdate:modelValue":i[7]||(i[7]=l=>n.selection1=l),items:n.radios1},null,8,["modelValue","items"]),o("div",te,[e("v-model: "),o("code",null,h(n.selection1||"null"),1)])])]),_:1}),t(c,{h2:""},{default:a(()=>[e("Inline layout")]),_:1}),t(u,{"content-class":"mt3"},{html:a(()=>[e('<w-radios :items="radioItems" inline></w-radios>')]),js:a(()=>[e(`data: () => ({
  radioItems: [
    { label: 'Choice 1' },
    { label: 'Choice 2' },
    { label: 'Choice 3' }
  ]
})
`)]),default:a(()=>[t(d,{items:n.radios2,inline:""},null,8,["items"])]),_:1}),t(c,{h2:""},{default:a(()=>[e("Custom label content")]),_:1}),ae,ne,t(u,null,{html:a(()=>[e(`<w-radios
  v-model="selection"
  :items="radioItems"
  color="green">
  <template #item="{ item }">
    <span class="pr2">`+h("{{ item.label }}")+`</span>
    <w-icon class="success">`+h("{{ item.icon }}")+`</w-icon>
  </template>
</w-radios>`,1)]),js:a(()=>[e(`data: () => ({
  selection: 'Square',
  radioItems: [
    { label: 'Square', icon: 'mdi mdi-square' },
    { label: 'Circle', icon: 'mdi mdi-circle' },
    { label: 'Triangle', icon: 'mdi mdi-triangle' }
  ],
})
`)]),default:a(()=>[t(d,{modelValue:n.selection5,"onUpdate:modelValue":i[8]||(i[8]=l=>n.selection5=l),items:n.radios3,color:"green"},{item:a(({item:l})=>[o("span",ie,h(l.label),1),t(v,{class:"success"},{default:a(()=>[e(h(l.icon),1)]),_:2},1024)]),_:1},8,["modelValue","items"])]),_:1}),le,t(c,{h2:""},{default:a(()=>[e("Color")]),_:1}),se,t(c,{h3:"",slug:"w-radios--colors"},{default:a(()=>[re,e(" colors")]),_:1}),t(u,null,{html:a(()=>[e(`<w-radios
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
</w-radios>`)]),js:a(()=>[e(`data: () => ({
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
`)]),default:a(()=>[t(d,{class:"mr2",modelValue:n.selection6,"onUpdate:modelValue":i[9]||(i[9]=l=>n.selection6=l),items:n.radios1,color:"purple"},{default:a(()=>[e("Option 1")]),_:1},8,["modelValue","items"]),de,t(d,{modelValue:n.selection7,"onUpdate:modelValue":i[10]||(i[10]=l=>n.selection7=l),items:n.radios4},{default:a(()=>[e("Option 2")]),_:1},8,["modelValue","items"])]),_:1}),t(c,{h3:"",slug:"w-radio--colors"},{default:a(()=>[ce,e(" colors")]),_:1}),t(u,null,{html:a(()=>[e(`<w-radio
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
`)]),js:a(()=>[e(`data: () => ({
  selection1: 1,
  selection2: 1
})`)]),default:a(()=>[t(s,{class:"mr2",modelValue:n.selection3,"onUpdate:modelValue":i[11]||(i[11]=l=>n.selection3=l),name:"radio5",color:"teal-light1","return-value":1},{default:a(()=>[e("Option 1")]),_:1},8,["modelValue"]),t(s,{modelValue:n.selection3,"onUpdate:modelValue":i[12]||(i[12]=l=>n.selection3=l),name:"radio5",color:"teal-light1","return-value":2},{default:a(()=>[e("Option 2")]),_:1},8,["modelValue"]),ue,t(s,{class:"mr2",modelValue:n.selection4,"onUpdate:modelValue":i[13]||(i[13]=l=>n.selection4=l),name:"radio6",color:"pink-light3","return-value":1},{default:a(()=>[e("Option 1")]),_:1},8,["modelValue"]),t(s,{modelValue:n.selection4,"onUpdate:modelValue":i[14]||(i[14]=l=>n.selection4=l),name:"radio6",color:"blue-light1","return-value":2},{default:a(()=>[e("Option 2")]),_:1},8,["modelValue"])]),_:1})])}const he={data:()=>({selection1:1,selection2:1,selection3:1,selection4:1,selection5:"Square",selection6:1,selection7:1,radio2:!1,radio3:!1,radios1:[{label:"Choice 1",value:1},{label:"Choice 2",value:2},{label:"Choice 3",value:3}],radios2:[{label:"Choice 1"},{label:"Choice 2"},{label:"Choice 3"}],radios3:[{label:"Square",icon:"mdi mdi-square"},{label:"Circle",icon:"mdi mdi-circle"},{label:"Triangle",icon:"mdi mdi-triangle"}],radios4:[{label:"Choice 1",value:1,color:"amber"},{label:"Choice 2",value:2,color:"warning"},{label:"Choice 3",value:3,color:"error"}]})},pe=g(he,[["render",me]]),be=o("a",{id:"api",name:"api"},null,-1),ve=o("div",{class:"w-divider my12"},null,-1),fe=o("div",{class:"w-divider my12"},null,-1);function we(n,i,_,y,V,m){const d=r("title-link"),s=r("component-api");return f(),w("div",null,[be,ve,t(d,{class:"title1",h2:"",slug:"w-radios-api"},{default:a(()=>[e("<w-radios> API")]),_:1}),t(s,{class:"mt0",items:m.radiosProps,descriptions:n.radios.propsDescs,title:"Props"},null,8,["items","descriptions"]),t(s,{items:n.radios.slots,title:"Slots"},null,8,["items"]),t(s,{items:m.radiosEvents,title:"Events"},null,8,["items"]),fe,t(d,{class:"title1",h2:"",slug:"w-radio-api"},{default:a(()=>[e("<w-radio> API")]),_:1}),t(s,{class:"mt0",items:m.radioProps,descriptions:n.radio.propsDescs,title:"Props"},null,8,["items","descriptions"]),t(s,{items:n.radio.slots,title:"Slots"},null,8,["items"]),t(s,{items:m.radioEvents,title:"Events"},null,8,["items"])])}const T={propsDescs:{items:"An array of radio button items to display. Each item object should contain at least a <code>label</code> or a <code>value</code> attribute.",modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide a value (of one of the <code>items</code> objects) to dictate the selected choice.<br>This value gets updated when using a v-model.',labelOnLeft:"Moves the label to the left of each radio button. By default the label is displayed on the right.",itemLabelKey:'The property name (aka "key") in each item object where to find the label of the item (if any).',itemValueKey:'The property name (aka "key") in each item object where to find the value of the item (if any).',itemColorKey:'The property name (aka "key") in each item object where to find the color of the item (if any).',inline:"Displays all the radio buttons inline instead of in column.",color:'Applies a color to the active radio buttons. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',labelColor:`Applies a specific color to the radio buttons' labels. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,name:"Provide a native HTML <code>name</code> attribute to each radio button. If not provided, a unique common name will be computed and applied to all the radio buttons.",disabled:"Disables all the radio buttons making them unreactive to user interactions.",readonly:"The radio button will still look like an interactive radio button except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to each radio button.",validators:'<span class="deep-orange">Only for validation, when the <strong class="code">w-radios</strong> component is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the radio button. Each function will be executed on radio button   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the radio button.'},slots:{item:{description:"Provide a custom content for each radio button label.",params:{item:"The current item object.",index:"The item index in the array of radios. Starts at 1 to be consistent with the <code>item.x</code> slot.",checked:"A boolean representing the checked state of this particular item."}},"item.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the array of radios. Starts at 1 to be consistent with the slot name.",checked:"A boolean representing the checked state of this particular item."}}},events:{input:{description:"Emitted each time any of the radio buttons is toggled.<br>Updates the v-model value in Vue 2.x only.",params:{"[String, Number, Boolean]":"The <code>return-value</code> of the selected radio button.<br>The <code>return-value</code> will be one of the following attributes, if they exist, in this order: the item value, the item label, the item index."}},"update:modelValue":{description:"Emitted each time any of the radio buttons is toggled.<br>Updates the v-model value in Vue 3 only.",params:{"[String, Number, Boolean]":"The <code>return-value</code> of the selected radio button.<br>The <code>return-value</code> will be one of the following attributes, if they exist, in this order: the item value, the item label, the item index."}},focus:{description:"Emitted on each radio button focus.",params:{"[DOM event object]":"The associated focus DOM event."}}}},A={propsDescs:{modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide a boolean to dictate the selected state of the radio button.<br>This value gets updated when using a v-model.',returnValue:"Since the native HTML radio uses the <code>value</code> attribute to define the selected state, the <code>return-value</code> prop let you specify a value to return to the <code>v-model</code> when the radio is selected (instead of returning <code>true</code>).",label:"Sets a visible label for the radio button.",labelOnLeft:"Moves the label to the left of the radio button. By default the label is displayed on the right.",color:'Applies a color to the radio button when active. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',labelColor:`Applies a specific color to the radio button's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,noRipple:"Removes the ripple animation on select.",name:"Provide a native HTML <code>name</code> attribute to the radio button. If not provided, a unique name will be computed.",disabled:"Disables the radio button making it unreactive to user interactions.",readonly:"The radio button will still look like an interactive radio button except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the radio button.",validators:'<span class="deep-orange">Only for validation, when this radio button is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the radio button. Each function will be executed on radio button   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the radio button.'},slots:{default:{description:"The radio button label content."}},events:{input:{description:"Emitted each time the state of the radio button changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"The current state of the radio button."}},"update:modelValue":{description:"Emitted each time the state of the radio button changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"The current state of the radio button."}},focus:{description:"Emitted on each radio button focus.",params:{"[DOM event object]":"The associated focus DOM event."}}}},ge={data:()=>({radios:T,radio:A}),computed:{radiosProps(){return{...k.props,...C.props}},radioProps(){return{...O.props,...C.props}},radiosEvents(){return k.emits.reduce((n,i)=>(n[i]=T.events[i]||{})&&n,{})},radioEvents(){return O.emits.reduce((n,i)=>(n[i]=A.events[i]||{})&&n,{})}}},_e=g(ge,[["render",we]]),ye=o("span",{class:"code"},"w-radio",-1),Ve=o("span",{class:"code"},"w-radios",-1);function ke(n,i,_,y,V,m){const d=r("ui-component-title"),s=r("examples"),p=r("api");return f(),w("main",null,[t(d,{slug:"w-radio-and-w-radios",code:!1},{default:a(()=>[ye,e(" & "),Ve]),_:1}),t(s),t(p)])}const Ce={components:{Examples:pe,Api:_e}},Te=g(Ce,[["render",ke]]);export{Te as default};
