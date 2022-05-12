var P=Object.defineProperty;var C=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var O=(n,i,r)=>i in n?P(n,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[i]=r,b=(n,i)=>{for(var r in i||(i={}))D.call(i,r)&&O(n,r,i[r]);if(C)for(var r of C(i))S.call(i,r)&&O(n,r,i[r]);return n};import{r as d,o as w,f as g,a as t,w as a,b as o,h as p,e,_ as y,bR as T,bz as A,bS as U}from"./index.9037a58f.js";const j=o("p",{class:"mb3"},"What it looks like:",-1),q=o("div",{class:"title4 mt4"},"States",-1),M={class:"w-flex wrap"},B=o("p",{class:"mt12"},[e("There are 2 components: "),o("span",{class:"code"},"w-radio"),e(" & "),o("span",{class:"code"},"w-radios"),e(`.
The later is a group of radio buttons for convenience.`)],-1),H=o("p",null,"Let's start with the basic component.",-1),L=e("<w-radio>"),N=o("div",{class:"w-divider"},null,-1),W=o("div",{class:"title3"},"Important notes",-1),R=o("strong",{class:"title5"},"Name attribute",-1),z=o("p",{class:"mb4"},[e("With individual radio buttons (using "),o("span",{class:"code"},"<w-radio>"),e("), the "),o("code",null,"name"),e(` prop is
needed for the radios to work together. This is how HTML knows they are part of the same group
of choices.`),o("br"),e(`
But when you use a group of radio buttons via `),o("span",{class:"code"},"<w-radios>"),e(`, Wave UI will add the
name attributes for you.`)],-1),K=o("strong",{class:"title5"},"Form validation",-1),x=o("p",null,[e("When a validation is needed on radio buttons, each individual radio button ("),o("span",{class:"code"},"w-radio"),e(`)
has a separate validation message.`),o("br"),e(`
If you want only one validation for a group of radio buttons, you must use the `),o("span",{class:"code"},"w-radios"),e(`
component.
`)],-1),F=o("div",{class:"title4 mb2"},"1. Here is a single radio button",-1),Y=e("I am single - not very useful"),G=o("div",{class:"title4 mt8 mb2"},"2. Here is a duo",-1),J=e("Option 1"),Q=e("Option 2"),X=o("div",{class:"title4 mt8 mb2"},"3. A trio using v-model",-1),Z=e("Option 1"),ee=e("Option 2"),oe=e("Option 3"),te=o("div",{class:"title4 mt8 mb2"},"4. A trio using v-model and a set name",-1),ae=e("Option 1"),ne=e("Option 2"),ie=e("Option 3"),se=e(`<div class="title4 mb2">1. Here is a single radio button</div>
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
</w-radio>`),le=e(`data: () => ({
  radio2: false,
  radio3: false
})
`),re=o("p",null,[e(`The above example (case 3 & 4) shows that the radio buttons work without the name attribute,
using a v-model, but the navigation using the keyboard arrows will not work as the names are not
provided.`),o("br"),e(`
Case 4 is fully operational. `),o("span",{class:"code"},":tada:"),e(`
(Keyboard arrows navigation is a browser choice, Safari doesn't have it)`),o("br"),o("strong",null,[e("Note that when you use the "),o("span",{class:"code"},"w-radios"),e(` component, a unique name is set by default so you don't
have to worry about it if you don't need it.
`)])],-1),de=e("Custom label in w-radio"),ce=o("p",null,[o("span",{class:"code"},"w-radio"),e(" provides a default slot to customize the content.")],-1),ue=o("span",{class:"pr1"},"Choice 1 has an icon",-1),me=e("mdi mdi-star"),he=e("Choice 2 is a tag"),pe=e("mdi mdi-heart"),be=e(`<w-radio class="mr5" name="radio1">
  <span class="pr1">Choice 1 has an icon</span>
  <w-icon md>mdi mdi-star</w-icon>
</w-radio>

<w-radio name="radio1">
  <w-tag bg-color="green-light5" color="green-dark2">
    Choice 2 is a tag
    <w-icon class="ml1">mdi mdi-heart</w-icon>
  </w-tag>
</w-radio>`),ve=e("As seen in this example, the "),_e=o("span",{class:"code"},"w-radio",-1),fe=e(` component allows you to have complete freedom
in your radio buttons.`),we=o("br",null,null,-1),ge=e(`
But because in most cases you won't need that, the `),ye=o("span",{class:"code"},"w-radios",-1),Ve=e(` component will make you go
much faster.
`),ke=e("<w-radios>"),Ce=o("div",{class:"w-divider"},null,-1),Oe=o("p",{class:"my5"},[e("The "),o("span",{class:"code"},"w-radios"),e(` component allows a fast and easy rendering of
multiple radio buttons by passing the items through a prop.`),o("br"),e(`
It accepts an inline parameter to display the radio buttons inline,
and allows you to customize the label of each radio button through slot.
`)],-1),Te=e("V-model"),Ae=e("If a value is set in the choice's data, it will be returned through the v-model when selected."),Ue=o("br",null,null,-1),$e=e(`
If no value is set, the choice's label will be returned instead.`),Ie=o("p",null,"The v-model can also be preset, or updated externally.",-1),Ee={class:"w-flex align-center"},Pe={class:"title3 ml10"},De=e("v-model: "),Se=e(`<div class="w-flex align-center">
  <w-radios
    v-model="selection"
    :items="radioItems">
  </w-radios>

  <div class="title3 ml10">
    v-model: `+p("{{ selection || 'null' }}")+`
  </div>
</div>`),je=e(`data: () => ({
  selection: 1,
  radioItems: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`),qe=e("Inline layout"),Me=e('<w-radios :items="radioItems" inline></w-radios>'),Be=e(`data: () => ({
  radioItems: [
    { label: 'Choice 1' },
    { label: 'Choice 2' },
    { label: 'Choice 3' }
  ]
})
`),He=e("Custom label content"),Le=o("p",null,[o("span",{class:"code"},"w-radios"),e(" also provides a slot to customize the label of each radio button: "),o("code",null,"item"),e(".")],-1),Ne=o("p",null,"The great thing is that you can access any custom data from this slot!",-1),We={class:"pr2"},Re=e(`data: () => ({
  selection: 'Square',
  radioItems: [
    { label: 'Square', icon: 'mdi mdi-square' },
    { label: 'Circle', icon: 'mdi mdi-circle' },
    { label: 'Triangle', icon: 'mdi mdi-triangle' }
  ],
})
`),ze=o("div",{class:"w-divider grey-light5 my12"},null,-1),Ke=e("Color"),xe=o("p",null,[e("By default the "),o("span",{class:"code"},"w-radio"),e(" & "),o("span",{class:"code"},"w-radios"),e(` components will use the
primary color.`),o("br"),e(`
You can provide a different color with the `),o("code",null,"color"),e(` option, or you can even set a different
color per item by providing a `),o("code",null,"color"),e(` attribute in each of the item objects.
`)],-1),Fe=o("span",{class:"code"},"w-radios",-1),Ye=e(" colors"),Ge=e("Option 1"),Je=o("div",{class:"title4 mt8 mb2"},"Different color per item",-1),Qe=e("Option 2"),Xe=e(`<w-radios
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
</w-radios>`),Ze=e(`data: () => ({
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
`),eo=o("span",{class:"code"},"w-radio",-1),oo=e(" colors"),to=e("Option 1"),ao=e("Option 2"),no=o("div",{class:"title4 mt8 mb2"},"Different color per item",-1),io=e("Option 1"),so=e("Option 2"),lo=e(`<w-radio
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
`),ro=e(`data: () => ({
  selection1: 1,
  selection2: 1
})`);function co(n,i,r,V,k,h){const c=d("w-radios"),l=d("w-radio"),v=d("w-card"),u=d("title-link"),_=d("alert"),m=d("example"),f=d("w-icon"),E=d("w-tag");return w(),g("div",null,[t(v,{"bg-color":"blue-light5"},{default:a(()=>[j,t(c,{modelValue:n.selection1,"onUpdate:modelValue":i[0]||(i[0]=s=>n.selection1=s),items:n.radios1,inline:""},null,8,["modelValue","items"]),q,o("div",M,[t(l,{class:"mr3 mb1","model-value":!0,label:"Checked"}),t(l,{class:"mr3 mb1","model-value":!1,label:"Unchecked"}),t(l,{class:"mr3 mb1","model-value":!0,disabled:"",label:"Checked &amp; disabled"}),t(l,{class:"mr3 mb1","model-value":!1,disabled:"",label:"Unchecked &amp; disabled"})])]),_:1}),B,H,t(u,{class:"title1 mt12",h2:"",slug:"w-radio"},{default:a(()=>[L]),_:1}),N,t(_,{tip:""},{default:a(()=>[W,R,z,K,x]),_:1}),t(m,null,{html:a(()=>[se]),js:a(()=>[le]),default:a(()=>[F,t(l,null,{default:a(()=>[Y]),_:1}),G,t(l,{class:"mr2",name:"radio1"},{default:a(()=>[J]),_:1}),t(l,{name:"radio1"},{default:a(()=>[Q]),_:1}),X,t(l,{class:"mr2",modelValue:n.radio2,"onUpdate:modelValue":i[1]||(i[1]=s=>n.radio2=s),"return-value":"option 1"},{default:a(()=>[Z]),_:1},8,["modelValue"]),t(l,{class:"mr2",modelValue:n.radio2,"onUpdate:modelValue":i[2]||(i[2]=s=>n.radio2=s),"return-value":"option 2"},{default:a(()=>[ee]),_:1},8,["modelValue"]),t(l,{modelValue:n.radio2,"onUpdate:modelValue":i[3]||(i[3]=s=>n.radio2=s),"return-value":"option 3"},{default:a(()=>[oe]),_:1},8,["modelValue"]),te,t(l,{class:"mr2",modelValue:n.radio3,"onUpdate:modelValue":i[4]||(i[4]=s=>n.radio3=s),name:"radio3","return-value":"option 1"},{default:a(()=>[ae]),_:1},8,["modelValue"]),t(l,{class:"mr2",modelValue:n.radio3,"onUpdate:modelValue":i[5]||(i[5]=s=>n.radio3=s),name:"radio3","return-value":"option 2"},{default:a(()=>[ne]),_:1},8,["modelValue"]),t(l,{modelValue:n.radio3,"onUpdate:modelValue":i[6]||(i[6]=s=>n.radio3=s),name:"radio3","return-value":"option 3"},{default:a(()=>[ie]),_:1},8,["modelValue"])]),_:1}),re,t(u,{h2:""},{default:a(()=>[de]),_:1}),ce,t(m,{"content-class":"mt3"},{html:a(()=>[be]),default:a(()=>[t(l,{class:"mr5",name:"radio4"},{default:a(()=>[ue,t(f,{md:""},{default:a(()=>[me]),_:1})]),_:1}),t(l,{name:"radio4"},{default:a(()=>[t(E,{"bg-color":"green-light5",color:"green-dark2"},{default:a(()=>[he,t(f,{class:"ml1"},{default:a(()=>[pe]),_:1})]),_:1})]),_:1})]),_:1}),t(_,{tip:""},{default:a(()=>[ve,_e,fe,we,ge,ye,Ve]),_:1}),t(u,{class:"title1 mt12",h2:"",slug:"w-radios"},{default:a(()=>[ke]),_:1}),Ce,Oe,t(u,{class:"title2 primary",h3:""},{default:a(()=>[Te]),_:1}),t(_,{info:""},{default:a(()=>[Ae,Ue,$e]),_:1}),Ie,t(m,null,{html:a(()=>[Se]),js:a(()=>[je]),default:a(()=>[o("div",Ee,[t(c,{modelValue:n.selection1,"onUpdate:modelValue":i[7]||(i[7]=s=>n.selection1=s),items:n.radios1},null,8,["modelValue","items"]),o("div",Pe,[De,o("code",null,p(n.selection1||"null"),1)])])]),_:1}),t(u,{h2:""},{default:a(()=>[qe]),_:1}),t(m,{"content-class":"mt3"},{html:a(()=>[Me]),js:a(()=>[Be]),default:a(()=>[t(c,{items:n.radios2,inline:""},null,8,["items"])]),_:1}),t(u,{h2:""},{default:a(()=>[He]),_:1}),Le,Ne,t(m,null,{html:a(()=>[e(`<w-radios
  v-model="selection"
  :items="radioItems"
  color="green">
  <template #item="{ item }">
    <span class="pr2">`+p("{{ item.label }}")+`</span>
    <w-icon class="success">`+p("{{ item.icon }}")+`</w-icon>
  </template>
</w-radios>`,1)]),js:a(()=>[Re]),default:a(()=>[t(c,{modelValue:n.selection5,"onUpdate:modelValue":i[8]||(i[8]=s=>n.selection5=s),items:n.radios3,color:"green"},{item:a(({item:s})=>[o("span",We,p(s.label),1),t(f,{class:"success"},{default:a(()=>[e(p(s.icon),1)]),_:2},1024)]),_:1},8,["modelValue","items"])]),_:1}),ze,t(u,{h2:""},{default:a(()=>[Ke]),_:1}),xe,t(u,{h3:"",slug:"w-radios--colors"},{default:a(()=>[Fe,Ye]),_:1}),t(m,null,{html:a(()=>[Xe]),js:a(()=>[Ze]),default:a(()=>[t(c,{class:"mr2",modelValue:n.selection6,"onUpdate:modelValue":i[9]||(i[9]=s=>n.selection6=s),items:n.radios1,color:"purple"},{default:a(()=>[Ge]),_:1},8,["modelValue","items"]),Je,t(c,{modelValue:n.selection7,"onUpdate:modelValue":i[10]||(i[10]=s=>n.selection7=s),items:n.radios4},{default:a(()=>[Qe]),_:1},8,["modelValue","items"])]),_:1}),t(u,{h3:"",slug:"w-radio--colors"},{default:a(()=>[eo,oo]),_:1}),t(m,null,{html:a(()=>[lo]),js:a(()=>[ro]),default:a(()=>[t(l,{class:"mr2",modelValue:n.selection3,"onUpdate:modelValue":i[11]||(i[11]=s=>n.selection3=s),name:"radio5",color:"teal-light1","return-value":1},{default:a(()=>[to]),_:1},8,["modelValue"]),t(l,{modelValue:n.selection3,"onUpdate:modelValue":i[12]||(i[12]=s=>n.selection3=s),name:"radio5",color:"teal-light1","return-value":2},{default:a(()=>[ao]),_:1},8,["modelValue"]),no,t(l,{class:"mr2",modelValue:n.selection4,"onUpdate:modelValue":i[13]||(i[13]=s=>n.selection4=s),name:"radio6",color:"pink-light3","return-value":1},{default:a(()=>[io]),_:1},8,["modelValue"]),t(l,{modelValue:n.selection4,"onUpdate:modelValue":i[14]||(i[14]=s=>n.selection4=s),name:"radio6",color:"blue-light1","return-value":2},{default:a(()=>[so]),_:1},8,["modelValue"])]),_:1})])}const uo={data:()=>({selection1:1,selection2:1,selection3:1,selection4:1,selection5:"Square",selection6:1,selection7:1,radio2:!1,radio3:!1,radios1:[{label:"Choice 1",value:1},{label:"Choice 2",value:2},{label:"Choice 3",value:3}],radios2:[{label:"Choice 1"},{label:"Choice 2"},{label:"Choice 3"}],radios3:[{label:"Square",icon:"mdi mdi-square"},{label:"Circle",icon:"mdi mdi-circle"},{label:"Triangle",icon:"mdi mdi-triangle"}],radios4:[{label:"Choice 1",value:1,color:"amber"},{label:"Choice 2",value:2,color:"warning"},{label:"Choice 3",value:3,color:"error"}]})};var mo=y(uo,[["render",co]]);const ho=o("a",{id:"api",name:"api"},null,-1),po=o("div",{class:"w-divider my12"},null,-1),bo=e("<w-radios> API"),vo=o("div",{class:"w-divider my12"},null,-1),_o=e("<w-radio> API");function fo(n,i,r,V,k,h){const c=d("title-link"),l=d("component-api");return w(),g("div",null,[ho,po,t(c,{class:"title1",h2:"",slug:"w-radios-api"},{default:a(()=>[bo]),_:1}),t(l,{class:"mt0",items:h.radiosProps,descriptions:n.radios.propsDescs,title:"Props"},null,8,["items","descriptions"]),t(l,{items:n.radios.slots,title:"Slots"},null,8,["items"]),t(l,{items:h.radiosEvents,title:"Events"},null,8,["items"]),vo,t(c,{class:"title1",h2:"",slug:"w-radio-api"},{default:a(()=>[_o]),_:1}),t(l,{class:"mt0",items:h.radioProps,descriptions:n.radio.propsDescs,title:"Props"},null,8,["items","descriptions"]),t(l,{items:n.radio.slots,title:"Slots"},null,8,["items"]),t(l,{items:h.radioEvents,title:"Events"},null,8,["items"])])}const $={propsDescs:{items:"An array of radio button items to display. Each item object should contain at least a <code>label</code> or a <code>value</code> attribute.",modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide a value (of one of the <code>items</code> objects) to dictate the selected choice.<br>This value gets updated when using a v-model.',labelOnLeft:"Moves the label to the left of each radio button. By default the label is displayed on the right.",itemLabelKey:'The property name (aka "key") in each item object where to find the label of the item (if any).',itemValueKey:'The property name (aka "key") in each item object where to find the value of the item (if any).',itemColorKey:'The property name (aka "key") in each item object where to find the color of the item (if any).',inline:"Displays all the radio buttons inline instead of in column.",color:'Applies a color to the active radio buttons. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',labelColor:`Applies a specific color to the radio buttons' labels. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,name:"Provide a native HTML <code>name</code> attribute to each radio button. If not provided, a unique common name will be computed and applied to all the radio buttons.",disabled:"Disables all the radio buttons making them unreactive to user interactions.",readonly:"The radio button will still look like an interactive radio button except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to each radio button.",validators:'<span class="deep-orange">Only for validation, when the <strong class="code">w-radios</strong> component is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the radio button. Each function will be executed on radio button   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the radio button.'},slots:{item:{description:"Provide a custom content for each radio button label.",params:{item:"The current item object.",index:"The item index in the array of radios. Starts at 1 to be consistent with the <code>item.x</code> slot.",checked:"A boolean representing the checked state of this particular item."}},"item.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the array of radios. Starts at 1 to be consistent with the slot name.",checked:"A boolean representing the checked state of this particular item."}}},events:{input:{description:"Emitted each time any of the radio buttons is toggled.<br>Updates the v-model value in Vue 2.x only.",params:{"[String, Number, Boolean]":"The <code>return-value</code> of the selected radio button.<br>The <code>return-value</code> will be one of the following attributes, if they exist, in this order: the item value, the item label, the item index."}},"update:modelValue":{description:"Emitted each time any of the radio buttons is toggled.<br>Updates the v-model value in Vue 3 only.",params:{"[String, Number, Boolean]":"The <code>return-value</code> of the selected radio button.<br>The <code>return-value</code> will be one of the following attributes, if they exist, in this order: the item value, the item label, the item index."}},focus:{description:"Emitted on each radio button focus.",params:{"[DOM event object]":"The associated focus DOM event."}}}},I={propsDescs:{modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide a boolean to dictate the selected state of the radio button.<br>This value gets updated when using a v-model.',returnValue:"Since the native HTML radio uses the <code>value</code> attribute to define the selected state, the <code>return-value</code> prop let you specify a value to return to the <code>v-model</code> when the radio is selected (instead of returning <code>true</code>).",label:"Sets a visible label for the radio button.",labelOnLeft:"Moves the label to the left of the radio button. By default the label is displayed on the right.",color:'Applies a color to the radio button when active. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',labelColor:`Applies a specific color to the radio button's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,noRipple:"Removes the ripple animation on select.",name:"Provide a native HTML <code>name</code> attribute to the radio button. If not provided, a unique name will be computed.",disabled:"Disables the radio button making it unreactive to user interactions.",readonly:"The radio button will still look like an interactive radio button except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the radio button.",validators:'<span class="deep-orange">Only for validation, when this radio button is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the radio button. Each function will be executed on radio button   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the radio button.'},slots:{default:{description:"The radio button label content."}},events:{input:{description:"Emitted each time the state of the radio button changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"The current state of the radio button."}},"update:modelValue":{description:"Emitted each time the state of the radio button changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"The current state of the radio button."}},focus:{description:"Emitted on each radio button focus.",params:{"[DOM event object]":"The associated focus DOM event."}}}},wo={data:()=>({radios:$,radio:I}),computed:{radiosProps(){return b(b({},T.props),A.props)},radioProps(){return b(b({},U.props),A.props)},radiosEvents(){return T.emits.reduce((n,i)=>(n[i]=$.events[i]||{})&&n,{})},radioEvents(){return U.emits.reduce((n,i)=>(n[i]=I.events[i]||{})&&n,{})}}};var go=y(wo,[["render",fo]]);const yo=o("span",{class:"code"},"w-radio",-1),Vo=e(" & "),ko=o("span",{class:"code"},"w-radios",-1);function Co(n,i,r,V,k,h){const c=d("ui-component-title"),l=d("examples"),v=d("api");return w(),g("main",null,[t(c,{slug:"w-radio-and-w-radios",code:!1},{default:a(()=>[yo,Vo,ko]),_:1}),t(l),t(v)])}const Oo={components:{Examples:mo,Api:go}};var Uo=y(Oo,[["render",Co]]);export{Uo as default};
