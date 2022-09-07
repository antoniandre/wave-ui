import{r as i,o as k,f as v,a as o,w as s,b as t,h,e,_ as f,D as V,E as C,G as T}from"./index.6a386ae5.js";const $=t("p",{class:"mb3"},"What it looks like:",-1),E=t("div",{class:"title4 mt4"},"States",-1),P={class:"w-flex wrap"},j=t("p",{class:"mt12"},[e("There are 2 components: "),t("span",{class:"code"},"w-checkbox"),e(" & "),t("span",{class:"code"},"w-checkboxes"),e(`.
The later is a group of checkboxes for convenience.
`)],-1),I=t("p",null,[e("In most cases what you need is the "),t("span",{class:"code"},"w-checkboxes"),e(` component bellow, but let's start with the
basic component as it might be useful in single checkboxes and edge cases.
`)],-1),S=e("<w-checkbox>"),M=t("div",{class:"w-divider"},null,-1),q=t("div",{class:"title4 mb2"},"Basic use",-1),B=e("Single option"),L=t("div",{class:"title4 mt8 mb2"},"Using v-model on a single checkbox",-1),W=e("Single option"),H={class:"ml6"},N=e("v-model:"),z={class:"ml1"},K=t("div",{class:"title4 mt8 mb2"},"Using an array of v-model for multiple checkboxes",-1),R=e("Option 1"),F=e("Option 2"),G=e("Option 3"),Y={class:"ml6"},J=e("v-model:"),Q={class:"ml1"},X=e(`<div class="title4 mb2">Basic use</div>
<w-checkbox>Single option</w-checkbox>

<div class="title4 mt8 mb2">Using v-model on a single checkbox</div>
<w-flex class="align-center">
  <w-checkbox v-model="selection1">Single option</w-checkbox>

  <span class="ml6">
    v-model:
    <code class="ml1">`+h("{{ selection1 }}")+`</code>
  </span>
</w-flex>

<div class="title4 mt8 mb2">Using an array of v-model for multiple checkboxes</div>
<w-flex class="align-center">
  <w-checkbox class="mr2" v-model="selection2[0]">Option 1</w-checkbox>
  <w-checkbox class="mr2" v-model="selection2[1]">Option 2</w-checkbox>
  <w-checkbox v-model="selection2[2]">Option 3</w-checkbox>

  <span class="ml6">
    v-model:
    <code class="ml1">`+h("{{ selection2 }}")+`</code>
  </span>
</w-flex>`),Z=e(`data: () => ({
  selection1: false,
  selection2: [false, false, false]
})
`),ee=e("Unlike the radio buttons, checkboxes don't need the "),oe=t("code",null,"name",-1),te=e(" prop in addition to the "),se=t("code",null,"v-model",-1),le=e(`
to work together and control with arrow keys since the default HTML behavior does not include control from
the keyboard arrows (you can navigate with `),ne=t("kbd",null,"tab",-1),ce=e(" and toggle with "),ae=t("kbd",null,"space",-1),ie=e(" or "),de=t("kbd",null,"enter",-1),he=e(")."),re=t("br",null,null,-1),me=e(`
When you use a group of checkboxes via <w-checkboxes>, Wave UI will add the name attributes for you.
`),ue=t("strong",{class:"title5"},"Form validation",-1),be=t("p",null,[e("When a validation is needed on checkboxes, each individual checkbox ("),t("span",{class:"code"},"w-checkbox"),e(`) has a
separate validation message.`),t("br"),e(`
If you want only one validation for a group of checkboxes you must use the `),t("span",{class:"code"},"w-checkboxes"),e(` component.
`)],-1),pe=e("Custom label in w-checkbox"),_e=t("p",null,[t("code",null,"w-checkbox"),e(" provides a default slot to customize the content.")],-1),ke=t("span",{class:"pr1"},"Choice 1 has an icon",-1),ve=e("mdi mdi-star"),fe=e("Choice 2 is a tag"),xe=e("mdi mdi-heart"),we=e(`<w-checkbox class="mr5" name="checkbox1">
  <span class="pr1">Choice 1 has an icon</span>
  <w-icon md>mdi mdi-star</w-icon>
</w-checkbox>

<w-checkbox name="checkbox1">
  <w-tag bg-color="green-light5" color="green-dark2">
    Choice 2 is a tag
    <w-icon class="ml1">mdi mdi-heart</w-icon>
  </w-tag>
</w-checkbox>
`),ge=e("As seen in this example, the "),ye=t("span",{class:"code"},"w-checkbox",-1),Ve=e(` component allows you to have complete freedom
regarding your checkboxes content, style and layout.`),Ce=t("br",null,null,-1),Te=e(`
But because in most cases you won't need that, the `),Ue=t("span",{class:"code"},"w-checkboxes",-1),Ae=e(` component will make you
go much faster.
`),Oe=e("<w-checkboxes>"),De=t("div",{class:"w-divider"},null,-1),$e=t("p",{class:"my5"},[e("The "),t("span",{class:"code"},"w-checkboxes"),e(` component allows a fast and easy rendering of
multiple checkboxes by passing the items through a prop.`),t("br"),e(`
It accepts an inline parameter to display the checkboxes inline,
and allows you to customize the label of each checkbox through slot.
`)],-1),Ee=e("V-model"),Pe=e("If a value is set in the choice's data, it will be returned through the v-model when selected."),je=t("br",null,null,-1),Ie=e(`
If no value is set, the choice's label will be returned instead.`),Se={class:"w-flex align-center"},Me={class:"title3 ml8"},qe=e("v-model:"),Be={class:"ml1"},Le=e(`<div class="w-flex align-center">
  <w-checkboxes v-model="selection" :items="checkboxes"></w-checkboxes>
  <div class="title3 ml8">v-model: `+h("{{ selection || '[]' }}")+`</div>
</div>`),We=e(`data: () => ({
  selection: [],
  checkboxes: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`),He=t("p",null,"The v-model can also be preset, or updated externally.",-1),Ne={class:"w-flex align-center"},ze=e("Toggle checkbox 2"),Ke={class:"title3 ml8"},Re=e("v-model:"),Fe={class:"ml1"},Ge=e(`<div class="w-flex align-center">
  <div>
    <w-checkboxes v-model="selection" :items="checkboxes"></w-checkboxes>
    <w-button class="mt2" @click="selection = selection.length ? [] : [2]">
      Toggle checkbox 2
    </w-button>
  </div>

  <div class="title3 ml8">
    v-model:
    <code class="ml1">`+h("{{ selection || '[]' }}")+`</code>
  </div>
</div>`),Ye=e(`data: () => ({
  selection: [],
  checkboxes: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`),Je=e("Layout"),Qe=t("div",{class:"title4 mb2"},"Default column layout",-1),Xe=t("div",{class:"title4 mt6 mb2"},"Inline layout",-1),Ze=e(`<div class="title4 mb2">Default column layout</div>
<w-checkboxes :items="checkboxes"></w-checkboxes>

<div class="title4 mt6 mb2">Inline layout</div>
<w-checkboxes :items="checkboxes" inline></w-checkboxes>`),eo=e(`data: () => ({
  checkboxes: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`),oo=e("Custom label content"),to=t("p",null,[t("span",{class:"code"},"w-checkboxes"),e(" provides a slot to customize the label of each checkbox button: "),t("code",null,"item"),e(".")],-1),so={class:"pr2"},lo=e(`data: () => ({
  checkboxes: [
    { label: 'Square', icon: 'mdi mdi-square' },
    { label: 'Circle', icon: 'mdi mdi-circle' },
    { label: 'Triangle', icon: 'mdi mdi-triangle' }
  ]
})
`),no=t("div",{class:"w-divider grey-light5 my12"},null,-1),co=e("Round checkboxes"),ao=e(`<w-checkboxes
  v-model="selection"
  :items="checkboxes"
  round
  inline>
</w-checkboxes>`),io=e(`data: () => ({
  selection: [1],
  checkboxes: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`),ho=e("Color"),ro=t("p",null,[e("By default the "),t("span",{class:"code"},"w-checkbox"),e(" & "),t("span",{class:"code"},"w-checkboxes"),e(` components will use the
primary color.`),t("br"),e(`
You can provide a different color with the `),t("code",null,"color"),e(` option, or you can even set a different
color per item by providing a `),t("code",null,"color"),e(` attribute in each of the item objects.
`)],-1),mo=t("span",{class:"code"},"w-checkboxes",-1),uo=e(" colors"),bo=t("div",{class:"title4 mt8 mb2"},"Different color per item",-1),po=e(`<w-checkboxes
  v-model="selection1"
  :items="checkboxes1"
  color="purple">
</w-checkboxes>

<div class="title4 mt8 mb2">Different color per item</div>
<w-checkboxes
  v-model="selection2"
  :items="checkboxes2">
</w-checkboxes>`),_o=e(`data: () => ({
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
})`),ko=t("span",{class:"code"},"w-checkbox",-1),vo=e(" colors"),fo=e("Option 1"),xo=e("Option 2"),wo=t("div",{class:"title4 mt8 mb2"},"Different color per item",-1),go=e("Option 1"),yo=e("Option 2"),Vo=e(`<w-checkbox
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
</w-checkbox>`),Co=e(`data: () => ({
  selection1: [true, true],
  selection2: [true, true],
  checkboxes: [
    { label: 'Choice 1' },
    { label: 'Choice 2' },
    { label: 'Choice 3' }
  ]
})`);function To(l,n,x,w,g,u){const d=i("w-checkboxes"),a=i("w-checkbox"),p=i("w-card"),r=i("title-link"),y=i("w-flex"),m=i("example"),b=i("alert"),_=i("w-icon"),O=i("w-tag"),D=i("w-button");return k(),v("div",null,[o(p,{"bg-color":"blue-light5"},{default:s(()=>[$,o(d,{items:l.checkboxes1,inline:""},null,8,["items"]),E,t("div",P,[o(a,{class:"mr3 mb1","model-value":!0,label:"Checked"}),o(a,{class:"mr3 mb1","model-value":!1,label:"Unchecked"}),o(a,{class:"mr3 mb1","model-value":!0,indeterminate:"",label:"Indeterminate"}),o(a,{class:"mr3 mb1","model-value":!0,disabled:"",label:"Checked &amp; disabled"}),o(a,{class:"mr3 mb1","model-value":!1,disabled:"",label:"Unchecked &amp; disabled"}),o(a,{class:"mr3 mb1","model-value":!0,disabled:"",indeterminate:"",label:"Indeterminate &amp; disabled"})])]),_:1}),j,I,o(r,{class:"title1 mt12",h2:"",slug:"w-checkbox"},{default:s(()=>[S]),_:1}),M,o(m,null,{html:s(()=>[X]),js:s(()=>[Z]),default:s(()=>[q,o(a,null,{default:s(()=>[B]),_:1}),L,o(y,{class:"align-center"},{default:s(()=>[o(a,{modelValue:l.selection1,"onUpdate:modelValue":n[0]||(n[0]=c=>l.selection1=c)},{default:s(()=>[W]),_:1},8,["modelValue"]),t("span",H,[N,t("code",z,h(l.selection1),1)])]),_:1}),K,o(y,{class:"align-center"},{default:s(()=>[o(a,{class:"mr2",modelValue:l.selection2[0],"onUpdate:modelValue":n[1]||(n[1]=c=>l.selection2[0]=c)},{default:s(()=>[R]),_:1},8,["modelValue"]),o(a,{class:"mr2",modelValue:l.selection2[1],"onUpdate:modelValue":n[2]||(n[2]=c=>l.selection2[1]=c)},{default:s(()=>[F]),_:1},8,["modelValue"]),o(a,{modelValue:l.selection2[2],"onUpdate:modelValue":n[3]||(n[3]=c=>l.selection2[2]=c)},{default:s(()=>[G]),_:1},8,["modelValue"]),t("span",Y,[J,t("code",Q,h(l.selection2),1)])]),_:1})]),_:1}),o(b,{info:""},{default:s(()=>[ee,oe,te,se,le,ne,ce,ae,ie,de,he,re,me]),_:1}),o(b,{tip:""},{default:s(()=>[ue,be]),_:1}),o(r,{h2:""},{default:s(()=>[pe]),_:1}),_e,o(m,{"content-class":"mt3"},{html:s(()=>[we]),default:s(()=>[o(a,{class:"mr5",name:"checkbox4"},{default:s(()=>[ke,o(_,{md:""},{default:s(()=>[ve]),_:1})]),_:1}),o(a,{name:"checkbox4"},{default:s(()=>[o(O,{"bg-color":"green-light5",color:"green-dark2"},{default:s(()=>[fe,o(_,{class:"ml1"},{default:s(()=>[xe]),_:1})]),_:1})]),_:1})]),_:1}),o(b,{class:"mt8",tip:""},{default:s(()=>[ge,ye,Ve,Ce,Te,Ue,Ae]),_:1}),o(r,{class:"title1 mt12",h2:"",slug:"w-checkboxes"},{default:s(()=>[Oe]),_:1}),De,$e,o(r,{class:"title2 primary",h3:""},{default:s(()=>[Ee]),_:1}),o(b,{info:""},{default:s(()=>[Pe,je,Ie]),_:1}),o(m,null,{html:s(()=>[Le]),js:s(()=>[We]),default:s(()=>[t("div",Se,[o(d,{modelValue:l.selection1b,"onUpdate:modelValue":n[4]||(n[4]=c=>l.selection1b=c),items:l.checkboxes1},null,8,["modelValue","items"]),t("div",Me,[qe,t("code",Be,h(l.selection1b||"[]"),1)])])]),_:1}),He,o(m,null,{html:s(()=>[Ge]),js:s(()=>[Ye]),default:s(()=>[t("div",Ne,[t("div",null,[o(d,{modelValue:l.selection3,"onUpdate:modelValue":n[5]||(n[5]=c=>l.selection3=c),items:l.checkboxes1},null,8,["modelValue","items"]),o(D,{class:"mt2",onClick:n[6]||(n[6]=c=>l.selection3=l.selection3.length?[]:[2])},{default:s(()=>[ze]),_:1})]),t("div",Ke,[Re,t("code",Fe,h(l.selection3||"[]"),1)])])]),_:1}),o(r,{h2:""},{default:s(()=>[Je]),_:1}),o(m,null,{html:s(()=>[Ze]),js:s(()=>[eo]),default:s(()=>[Qe,o(d,{items:l.checkboxes1},null,8,["items"]),Xe,o(d,{items:l.checkboxes1,inline:""},null,8,["items"])]),_:1}),o(r,{h2:""},{default:s(()=>[oo]),_:1}),to,o(m,null,{html:s(()=>[e(`<w-checkboxes :items="checkboxes" color="green">
  <template #item="{ item }">
    <span class="pr2">`+h("{{ item.label }}")+`</span>
    <w-icon class="deep-purple">`+h("{{ item.icon }}")+`</w-icon>
  </template>
</w-checkboxes>`,1)]),js:s(()=>[lo]),default:s(()=>[o(d,{items:l.checkboxes3,color:"green"},{item:s(({item:c})=>[t("span",so,h(c.label),1),o(_,{class:"deep-purple"},{default:s(()=>[e(h(c.icon),1)]),_:2},1024)]),_:1},8,["items"])]),_:1}),no,o(r,{h2:""},{default:s(()=>[co]),_:1}),o(m,{"content-class":"mt3"},{html:s(()=>[ao]),js:s(()=>[io]),default:s(()=>[o(d,{modelValue:l.selection8,"onUpdate:modelValue":n[7]||(n[7]=c=>l.selection8=c),items:l.checkboxes1,round:"",inline:""},null,8,["modelValue","items"])]),_:1}),o(r,{h2:""},{default:s(()=>[ho]),_:1}),ro,o(r,{h3:"",slug:"w-checkboxes--colors"},{default:s(()=>[mo,uo]),_:1}),o(m,null,{html:s(()=>[po]),js:s(()=>[_o]),default:s(()=>[o(d,{modelValue:l.selection4,"onUpdate:modelValue":n[8]||(n[8]=c=>l.selection4=c),items:l.checkboxes1,color:"purple"},null,8,["modelValue","items"]),bo,o(d,{modelValue:l.selection7,"onUpdate:modelValue":n[9]||(n[9]=c=>l.selection7=c),items:l.checkboxes4},null,8,["modelValue","items"])]),_:1}),o(r,{h3:"",slug:"w-checkbox--colors"},{default:s(()=>[ko,vo]),_:1}),o(m,null,{html:s(()=>[Vo]),js:s(()=>[Co]),default:s(()=>[o(a,{class:"mr2",modelValue:l.selection5[0],"onUpdate:modelValue":n[10]||(n[10]=c=>l.selection5[0]=c),color:"teal-light1"},{default:s(()=>[fo]),_:1},8,["modelValue"]),o(a,{modelValue:l.selection5[1],"onUpdate:modelValue":n[11]||(n[11]=c=>l.selection5[1]=c),color:"teal-light1"},{default:s(()=>[xo]),_:1},8,["modelValue"]),wo,o(a,{class:"mr2",modelValue:l.selection6[0],"onUpdate:modelValue":n[12]||(n[12]=c=>l.selection6[0]=c),color:"pink-light3"},{default:s(()=>[go]),_:1},8,["modelValue"]),o(a,{modelValue:l.selection6[1],"onUpdate:modelValue":n[13]||(n[13]=c=>l.selection6[1]=c),color:"blue-light1"},{default:s(()=>[yo]),_:1},8,["modelValue"])]),_:1})])}const Uo={data:()=>({selection1:!1,selection1b:[],selection2:[!1,!1,!1],selection3:[2],selection4:[1,2,3],selection5:[!0,!0],selection6:[!0,!0],selection7:[1,2,3],selection8:[1],checkboxes1:[{label:"Choice 1",value:1},{label:"Choice 2",value:2},{label:"Choice 3",value:3}],checkboxes2:[{label:"Choice 1"},{label:"Choice 2"},{label:"Choice 3"},{label:"Choice 4"}],checkboxes3:[{label:"Square",icon:"mdi mdi-square"},{label:"Circle",icon:"mdi mdi-circle"},{label:"Triangle",icon:"mdi mdi-triangle"}],checkboxes4:[{label:"Choice 1",value:1,color:"amber"},{label:"Choice 2",value:2,color:"warning"},{label:"Choice 3",value:3,color:"error"}]})};var Ao=f(Uo,[["render",To]]);const Oo=t("a",{id:"api",name:"api"},null,-1),Do=t("div",{class:"w-divider my12"},null,-1),$o=e("<w-checkboxes> API"),Eo=t("div",{class:"w-divider my12"},null,-1),Po=e("<w-checkbox> API");function jo(l,n,x,w,g,u){const d=i("title-link"),a=i("component-api");return k(),v("div",null,[Oo,Do,o(d,{class:"title1",h2:"",slug:"w-checkboxes-api"},{default:s(()=>[$o]),_:1}),o(a,{class:"mt0",items:u.checkboxesProps,descriptions:l.checkboxes.propsDescs,title:"Props"},null,8,["items","descriptions"]),o(a,{items:l.checkboxes.slots,title:"Slots"},null,8,["items"]),o(a,{items:u.checkboxesEvents,title:"Events"},null,8,["items"]),Eo,o(d,{class:"title1",h2:"",slug:"w-checkbox-api"},{default:s(()=>[Po]),_:1}),o(a,{class:"mt0",items:u.checkboxProps,descriptions:l.checkbox.propsDescs,title:"Props"},null,8,["items","descriptions"]),o(a,{items:l.checkbox.slots,title:"Slots"},null,8,["items"]),o(a,{items:u.checkboxEvents,title:"Events"},null,8,["items"])])}const U={propsDescs:{items:"An array of checkbox items to display. Each item object should contain at least a <code>label</code> or a <code>value</code> attribute.",modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide an array of values to dictate the checked state of all the checkboxes.<br>This value gets updated when using a v-model.',labelOnLeft:"Moves the label to the left of each checkbox.",itemLabelKey:'The property name (aka "key") in each item object where to find the label of the item (if any).',itemValueKey:'The property name (aka "key") in each item object where to find the value of the item (if any).',itemColorKey:'The property name (aka "key") in each item object where to find the color of the item (if any).',inline:"Displays all the checkboxes inline instead of in column.",round:"Displays round checkboxes instead of square ones.",color:'Applies a color to the active checkbox. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',labelColor:'Applies a specific color to the checkboxes labels. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',name:"Provide a native HTML <code>name</code> attribute to the checkbox. If not provided, a unique common name will be computed and applied to all the checkboxes.",disabled:"Disables all the checkboxes making them unreactive to user interactions.",readonly:"The checkbox will still look like an interactive checkbox except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to each checkbox.",validators:'<span class="deep-orange">Only for validation, when the <strong class="code">w-checkboxes</strong> component is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the checkbox. Each function will be executed on checkbox   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the checkbox.'},slots:{item:{description:"Provide a custom content for each checkbox label.",params:{item:"The current item object.",index:"The item index in the array of radios. Starts at 1 to be consistent with the <code>item.x</code> slot.",checked:"A boolean representing the checked state of this particular item."}},"item.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the array of radios. Starts at 1 to be consistent with the slot name.",checked:"A boolean representing the checked state of this particular item."}}},events:{input:{description:"Emitted each time any of the checkboxes is toggled.<br>Updates the v-model value in Vue 2.x only.",params:{"[Array]":"Array of <code>return-value</code> of each checked checkbox.<br>The <code>return-value</code> is one of the following attributes, if they exist, in this order: the item value, the item label, the item index."}},"update:modelValue":{description:"Emitted each time any of the checkboxes is toggled.<br>Updates the v-model value in Vue 3 only.",params:{"[Array]":"Array of <code>return-value</code> of each checked checkbox.<br>The <code>return-value</code> is one of the following attributes, if they exist, in this order: the item value, the item label, the item index."}},focus:{description:"Emitted on each checkbox focus.",params:{"[DOM event object]":"The associated focus DOM event."}}}},A={propsDescs:{modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide a boolean to dictate the checked state the checkbox.<br>This value gets updated when using a v-model.',returnValue:"Since the native HTML checkbox element uses the <code>value</code> attribute to define the checked state, the <code>return-value</code> prop let you specify a value to return to the <code>v-model</code> when the checkbox is checked (instead of returning <code>true</code>).",label:"Sets a visible label for the checkbox.",labelOnLeft:"Moves the label to the left of the checkbox. By default the label is displayed on the right.",color:'Applies a color to the checkbox when active. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',labelColor:`Applies a specific color to the checkbox's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,noRipple:"Removes the ripple animation on check.",indeterminate:"Applies an indeterminate state on the checkbox. E.g. when it represents the selected state of a collection of elements where some are checked and some not.",round:"Displays a round checkbox instead of a square one.",name:"Provide a native HTML <code>name</code> attribute to the checkbox. If not provided, a unique name will be computed.",disabled:"Disables the checkbox making it unreactive to user interactions.",readonly:"The checkbox will still look like an interactive checkbox except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the checkbox.",validators:'<span class="deep-orange">Only for validation, when the checkbox is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the checkbox. Each function will be executed on checkbox   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the checkbox.'},slots:{default:{description:"The checkbox label content."}},events:{input:{description:"Emitted each time the state of the checkbox changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"The current state of the checkbox."}},"update:modelValue":{description:"Emitted each time the state of the checkbox changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"The current state of the checkbox."}},focus:{description:"Emitted on each checkbox focus.",params:{"[DOM event object]":"The associated focus DOM event."}}}},Io={data:()=>({checkboxes:U,checkbox:A}),computed:{checkboxesProps(){return{...V.props,...C.props}},checkboxProps(){return{...T.props,...C.props}},checkboxesEvents(){return V.emits.reduce((l,n)=>(l[n]=U.events[n]||{})&&l,{})},checkboxEvents(){return T.emits.reduce((l,n)=>(l[n]=A.events[n]||{})&&l,{})}}};var So=f(Io,[["render",jo]]);const Mo=t("span",{class:"code"},"w-checkbox",-1),qo=e(" & "),Bo=t("span",{class:"code"},"w-checkboxes",-1);function Lo(l,n,x,w,g,u){const d=i("ui-component-title"),a=i("examples"),p=i("api");return k(),v("main",null,[o(d,{slug:"w-checkbox-and-w-checkboxes",code:!1},{default:s(()=>[Mo,qo,Bo]),_:1}),o(a),o(p)])}const Wo={components:{Examples:Ao,Api:So}};var No=f(Wo,[["render",Lo]]);export{No as default};
