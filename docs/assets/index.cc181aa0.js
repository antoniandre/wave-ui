var P=Object.defineProperty;var C=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var T=(n,l,h)=>l in n?P(n,l,{enumerable:!0,configurable:!0,writable:!0,value:h}):n[l]=h,p=(n,l)=>{for(var h in l||(l={}))I.call(l,h)&&T(n,h,l[h]);if(C)for(var h of C(l))S.call(l,h)&&T(n,h,l[h]);return n};import{r as a,o as f,f as x,a as o,w as s,b as t,h as r,e}from"./vendor.c30f2c6c.js";import{_ as w,g as U,F as O,h as $}from"./index.76d51146.js";const M=t("p",{class:"mb3"},"What it looks like:",-1),q=t("div",{class:"title4 mt4"},"States",-1),B={class:"w-flex wrap"},L=t("p",{class:"mt12"},[e("There are 2 components: "),t("span",{class:"code"},"w-checkbox"),e(" & "),t("span",{class:"code"},"w-checkboxes"),e(`.
The later is a group of checkboxes for convenience.
`)],-1),W=t("p",null,[e("In most cases what you need is the "),t("span",{class:"code"},"w-checkboxes"),e(` component bellow, but let's start with the
basic component as it might be useful in single checkboxes and edge cases.
`)],-1),H=e("<w-checkbox>"),z=t("div",{class:"w-divider"},null,-1),F=t("div",{class:"title4 mb2"},"Basic use",-1),K=e("Single option"),N=t("div",{class:"title4 mt8 mb2"},"Using v-model on a single checkbox",-1),R=e("Single option"),Y={class:"ml6"},G=e("v-model:"),J={class:"ml1"},Q=t("div",{class:"title4 mt8 mb2"},"Using an array of v-model for multiple checkboxes",-1),X=e("Option 1"),Z=e("Option 2"),ee=e("Option 3"),oe={class:"ml6"},te=e("v-model:"),se={class:"ml1"},ne=e(`<div class="title4 mb2">Basic use</div>
<w-checkbox>Single option</w-checkbox>

<div class="title4 mt8 mb2">Using v-model on a single checkbox</div>
<w-flex class="align-center">
  <w-checkbox v-model="selection1">Single option</w-checkbox>

  <span class="ml6">
    v-model:
    <code class="ml1">`+r("{{ selection1 }}")+`</code>
  </span>
</w-flex>

<div class="title4 mt8 mb2">Using an array of v-model for multiple checkboxes</div>
<w-flex class="align-center">
  <w-checkbox class="mr2" v-model="selection2[0]">Option 1</w-checkbox>
  <w-checkbox class="mr2" v-model="selection2[1]">Option 2</w-checkbox>
  <w-checkbox v-model="selection2[2]">Option 3</w-checkbox>

  <span class="ml6">
    v-model:
    <code class="ml1">`+r("{{ selection2 }}")+`</code>
  </span>
</w-flex>`),le=e(`data: () => ({
  selection1: false,
  selection2: [false, false, false]
})
`),ce=e("Unlike the radio buttons, checkboxes don't need the "),ie=t("code",null,"name",-1),ae=e(" prop in addition to the "),de=t("code",null,"v-model",-1),he=e(`
to work together and control with arrow keys since the default HTML behavior does not include control from
the keyboard arrows (you can navigate with `),re=t("kbd",null,"tab",-1),me=e(" and toggle with "),ue=t("kbd",null,"space",-1),be=e(" or "),pe=t("kbd",null,"enter",-1),_e=e(")."),ke=t("br",null,null,-1),ve=e(`
When you use a group of checkboxes via <w-checkboxes>, Wave UI will add the name attributes for you.
`),fe=t("strong",{class:"title5"},"Form validation",-1),xe=t("p",null,[e("When a validation is needed on checkboxes, each individual checkbox ("),t("span",{class:"code"},"w-checkbox"),e(`) has a
separate validation message.`),t("br"),e(`
If you want only one validation for a group of checkboxes you must use the `),t("span",{class:"code"},"w-checkboxes"),e(` component.
`)],-1),we=e("Custom label in w-checkbox"),ge=t("p",null,[t("code",null,"w-checkbox"),e(" provides a default slot to customize the content.")],-1),ye=t("span",{class:"pr1"},"Choice 1 has an icon",-1),Ve=e("mdi mdi-star"),Ce=e("Choice 2 is a tag"),Te=e("mdi mdi-heart"),Ue=e(`<w-checkbox class="mr5" name="checkbox1">
  <span class="pr1">Choice 1 has an icon</span>
  <w-icon md>mdi mdi-star</w-icon>
</w-checkbox>

<w-checkbox name="checkbox1">
  <w-tag bg-color="green-light5" color="green-dark2">
    Choice 2 is a tag
    <w-icon class="ml1">mdi mdi-heart</w-icon>
  </w-tag>
</w-checkbox>
`),Oe=e("As seen in this example, the "),$e=t("span",{class:"code"},"w-checkbox",-1),Ae=e(` component allows you to have complete freedom
regarding your checkboxes content, style and layout.`),De=t("br",null,null,-1),Ee=e(`
But because in most cases you won't need that, the `),je=t("span",{class:"code"},"w-checkboxes",-1),Pe=e(` component will make you
go much faster.
`),Ie=e("<w-checkboxes>"),Se=t("div",{class:"w-divider"},null,-1),Me=t("p",{class:"my5"},[e("The "),t("span",{class:"code"},"w-checkboxes"),e(` component allows a fast and easy rendering of
multiple checkboxes by passing the items through a prop.`),t("br"),e(`
It accepts an inline parameter to display the checkboxes inline,
and allows you to customize the label of each checkbox through slot.
`)],-1),qe=e("V-model"),Be=e("If a value is set in the choice's data, it will be returned through the v-model when selected."),Le=t("br",null,null,-1),We=e(`
If no value is set, the choice's label will be returned instead.`),He={class:"w-flex align-center"},ze={class:"title3 ml8"},Fe=e("v-model:"),Ke={class:"ml1"},Ne=e(`<div class="w-flex align-center">
  <w-checkboxes v-model="selection" :items="checkboxes"></w-checkboxes>
  <div class="title3 ml8">v-model: `+r("{{ selection || '[]' }}")+`</div>
</div>`),Re=e(`data: () => ({
  selection: [],
  checkboxes: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`),Ye=t("p",null,"The v-model can also be preset, or updated externally.",-1),Ge={class:"w-flex align-center"},Je=e("Toggle checkbox 2"),Qe={class:"title3 ml8"},Xe=e("v-model:"),Ze={class:"ml1"},eo=e(`<div class="w-flex align-center">
  <div>
    <w-checkboxes v-model="selection" :items="checkboxes"></w-checkboxes>
    <w-button class="mt2" @click="selection = selection.length ? [] : [2]">
      Toggle checkbox 2
    </w-button>
  </div>

  <div class="title3 ml8">
    v-model:
    <code class="ml1">`+r("{{ selection || '[]' }}")+`</code>
  </div>
</div>`),oo=e(`data: () => ({
  selection: [],
  checkboxes: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`),to=e("Layout"),so=t("div",{class:"title4 mb2"},"Default column layout",-1),no=t("div",{class:"title4 mt6 mb2"},"Inline layout",-1),lo=e(`<div class="title4 mb2">Default column layout</div>
<w-checkboxes :items="checkboxes"></w-checkboxes>

<div class="title4 mt6 mb2">Inline layout</div>
<w-checkboxes :items="checkboxes" inline></w-checkboxes>`),co=e(`data: () => ({
  checkboxes: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`),io=e("Custom label content"),ao=t("p",null,[t("span",{class:"code"},"w-checkboxes"),e(" provides a slot to customize the label of each checkbox button: "),t("code",null,"item"),e(".")],-1),ho={class:"pr2"},ro=e(`data: () => ({
  checkboxes: [
    { label: 'Square', icon: 'mdi mdi-square' },
    { label: 'Circle', icon: 'mdi mdi-circle' },
    { label: 'Triangle', icon: 'mdi mdi-triangle' }
  ]
})
`),mo=t("div",{class:"w-divider grey-light5 my12"},null,-1),uo=e("Round checkboxes"),bo=e(`<w-checkboxes
  v-model="selection"
  :items="checkboxes"
  round
  inline>
</w-checkboxes>`),po=e(`data: () => ({
  selection: [1],
  checkboxes: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`),_o=e("Color"),ko=t("p",null,[e("By default the "),t("span",{class:"code"},"w-checkbox"),e(" & "),t("span",{class:"code"},"w-checkboxes"),e(` components will use the
primary color.`),t("br"),e(`
You can provide a different color with the `),t("code",null,"color"),e(` option, or you can even set a different
color per item by providing a `),t("code",null,"color"),e(` attribute in each of the item objects.
`)],-1),vo=t("span",{class:"code"},"w-checkboxes",-1),fo=e(" colors"),xo=t("div",{class:"title4 mt8 mb2"},"Different color per item",-1),wo=e(`<w-checkboxes
  v-model="selection1"
  :items="checkboxes1"
  color="purple">
</w-checkboxes>

<div class="title4 mt8 mb2">Different color per item</div>
<w-checkboxes
  v-model="selection2"
  :items="checkboxes2">
</w-checkboxes>`),go=e(`data: () => ({
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
})`),yo=t("span",{class:"code"},"w-checkbox",-1),Vo=e(" colors"),Co=e("Option 1"),To=e("Option 2"),Uo=t("div",{class:"title4 mt8 mb2"},"Different color per item",-1),Oo=e("Option 1"),$o=e("Option 2"),Ao=e(`<w-checkbox
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
</w-checkbox>`),Do=e(`data: () => ({
  selection1: [true, true],
  selection2: [true, true],
  checkboxes: [
    { label: 'Choice 1' },
    { label: 'Choice 2' },
    { label: 'Choice 3' }
  ]
})`);function Eo(n,l,h,g,y,b){const d=a("w-checkboxes"),i=a("w-checkbox"),k=a("w-card"),m=a("title-link"),V=a("w-flex"),u=a("example"),_=a("alert"),v=a("w-icon"),E=a("w-tag"),j=a("w-button");return f(),x("div",null,[o(k,{"bg-color":"blue-light5"},{default:s(()=>[M,o(d,{items:n.checkboxes1,inline:""},null,8,["items"]),q,t("div",B,[o(i,{class:"mr3 mb1","model-value":!0,label:"Checked"}),o(i,{class:"mr3 mb1","model-value":!1,label:"Unchecked"}),o(i,{class:"mr3 mb1","model-value":!0,indeterminate:"",label:"Indeterminate"}),o(i,{class:"mr3 mb1","model-value":!0,disabled:"",label:"Checked &amp; disabled"}),o(i,{class:"mr3 mb1","model-value":!1,disabled:"",label:"Unchecked &amp; disabled"}),o(i,{class:"mr3 mb1","model-value":!0,disabled:"",indeterminate:"",label:"Indeterminate &amp; disabled"})])]),_:1}),L,W,o(m,{class:"title1 mt12",h2:"",slug:"w-checkbox"},{default:s(()=>[H]),_:1}),z,o(u,null,{html:s(()=>[ne]),js:s(()=>[le]),default:s(()=>[F,o(i,null,{default:s(()=>[K]),_:1}),N,o(V,{class:"align-center"},{default:s(()=>[o(i,{modelValue:n.selection1,"onUpdate:modelValue":l[0]||(l[0]=c=>n.selection1=c)},{default:s(()=>[R]),_:1},8,["modelValue"]),t("span",Y,[G,t("code",J,r(n.selection1),1)])]),_:1}),Q,o(V,{class:"align-center"},{default:s(()=>[o(i,{class:"mr2",modelValue:n.selection2[0],"onUpdate:modelValue":l[1]||(l[1]=c=>n.selection2[0]=c)},{default:s(()=>[X]),_:1},8,["modelValue"]),o(i,{class:"mr2",modelValue:n.selection2[1],"onUpdate:modelValue":l[2]||(l[2]=c=>n.selection2[1]=c)},{default:s(()=>[Z]),_:1},8,["modelValue"]),o(i,{modelValue:n.selection2[2],"onUpdate:modelValue":l[3]||(l[3]=c=>n.selection2[2]=c)},{default:s(()=>[ee]),_:1},8,["modelValue"]),t("span",oe,[te,t("code",se,r(n.selection2),1)])]),_:1})]),_:1}),o(_,{info:""},{default:s(()=>[ce,ie,ae,de,he,re,me,ue,be,pe,_e,ke,ve]),_:1}),o(_,{tip:""},{default:s(()=>[fe,xe]),_:1}),o(m,{h2:""},{default:s(()=>[we]),_:1}),ge,o(u,{"content-class":"mt3"},{html:s(()=>[Ue]),default:s(()=>[o(i,{class:"mr5",name:"checkbox4"},{default:s(()=>[ye,o(v,{md:""},{default:s(()=>[Ve]),_:1})]),_:1}),o(i,{name:"checkbox4"},{default:s(()=>[o(E,{"bg-color":"green-light5",color:"green-dark2"},{default:s(()=>[Ce,o(v,{class:"ml1"},{default:s(()=>[Te]),_:1})]),_:1})]),_:1})]),_:1}),o(_,{class:"mt8",tip:""},{default:s(()=>[Oe,$e,Ae,De,Ee,je,Pe]),_:1}),o(m,{class:"title1 mt12",h2:"",slug:"w-checkboxes"},{default:s(()=>[Ie]),_:1}),Se,Me,o(m,{class:"title2 primary",h3:""},{default:s(()=>[qe]),_:1}),o(_,{info:""},{default:s(()=>[Be,Le,We]),_:1}),o(u,null,{html:s(()=>[Ne]),js:s(()=>[Re]),default:s(()=>[t("div",He,[o(d,{modelValue:n.selection1b,"onUpdate:modelValue":l[4]||(l[4]=c=>n.selection1b=c),items:n.checkboxes1},null,8,["modelValue","items"]),t("div",ze,[Fe,t("code",Ke,r(n.selection1b||"[]"),1)])])]),_:1}),Ye,o(u,null,{html:s(()=>[eo]),js:s(()=>[oo]),default:s(()=>[t("div",Ge,[t("div",null,[o(d,{modelValue:n.selection3,"onUpdate:modelValue":l[5]||(l[5]=c=>n.selection3=c),items:n.checkboxes1},null,8,["modelValue","items"]),o(j,{class:"mt2",onClick:l[6]||(l[6]=c=>n.selection3=n.selection3.length?[]:[2])},{default:s(()=>[Je]),_:1})]),t("div",Qe,[Xe,t("code",Ze,r(n.selection3||"[]"),1)])])]),_:1}),o(m,{h2:""},{default:s(()=>[to]),_:1}),o(u,null,{html:s(()=>[lo]),js:s(()=>[co]),default:s(()=>[so,o(d,{items:n.checkboxes1},null,8,["items"]),no,o(d,{items:n.checkboxes1,inline:""},null,8,["items"])]),_:1}),o(m,{h2:""},{default:s(()=>[io]),_:1}),ao,o(u,null,{html:s(()=>[e(`<w-checkboxes :items="checkboxes" color="green">
  <template #item="{ item }">
    <span class="pr2">`+r("{{ item.label }}")+`</span>
    <w-icon class="deep-purple">`+r("{{ item.icon }}")+`</w-icon>
  </template>
</w-checkboxes>`,1)]),js:s(()=>[ro]),default:s(()=>[o(d,{items:n.checkboxes3,color:"green"},{item:s(({item:c})=>[t("span",ho,r(c.label),1),o(v,{class:"deep-purple"},{default:s(()=>[e(r(c.icon),1)]),_:2},1024)]),_:1},8,["items"])]),_:1}),mo,o(m,{h2:""},{default:s(()=>[uo]),_:1}),o(u,{"content-class":"mt3"},{html:s(()=>[bo]),js:s(()=>[po]),default:s(()=>[o(d,{modelValue:n.selection8,"onUpdate:modelValue":l[7]||(l[7]=c=>n.selection8=c),items:n.checkboxes1,round:"",inline:""},null,8,["modelValue","items"])]),_:1}),o(m,{h2:""},{default:s(()=>[_o]),_:1}),ko,o(m,{h3:"",slug:"w-checkboxes--colors"},{default:s(()=>[vo,fo]),_:1}),o(u,null,{html:s(()=>[wo]),js:s(()=>[go]),default:s(()=>[o(d,{modelValue:n.selection4,"onUpdate:modelValue":l[8]||(l[8]=c=>n.selection4=c),items:n.checkboxes1,color:"purple"},null,8,["modelValue","items"]),xo,o(d,{modelValue:n.selection7,"onUpdate:modelValue":l[9]||(l[9]=c=>n.selection7=c),items:n.checkboxes4},null,8,["modelValue","items"])]),_:1}),o(m,{h3:"",slug:"w-checkbox--colors"},{default:s(()=>[yo,Vo]),_:1}),o(u,null,{html:s(()=>[Ao]),js:s(()=>[Do]),default:s(()=>[o(i,{class:"mr2",modelValue:n.selection5[0],"onUpdate:modelValue":l[10]||(l[10]=c=>n.selection5[0]=c),color:"teal-light1"},{default:s(()=>[Co]),_:1},8,["modelValue"]),o(i,{modelValue:n.selection5[1],"onUpdate:modelValue":l[11]||(l[11]=c=>n.selection5[1]=c),color:"teal-light1"},{default:s(()=>[To]),_:1},8,["modelValue"]),Uo,o(i,{class:"mr2",modelValue:n.selection6[0],"onUpdate:modelValue":l[12]||(l[12]=c=>n.selection6[0]=c),color:"pink-light3"},{default:s(()=>[Oo]),_:1},8,["modelValue"]),o(i,{modelValue:n.selection6[1],"onUpdate:modelValue":l[13]||(l[13]=c=>n.selection6[1]=c),color:"blue-light1"},{default:s(()=>[$o]),_:1},8,["modelValue"])]),_:1})])}const jo={data:()=>({selection1:!1,selection1b:[],selection2:[!1,!1,!1],selection3:[2],selection4:[1,2,3],selection5:[!0,!0],selection6:[!0,!0],selection7:[1,2,3],selection8:[1],checkboxes1:[{label:"Choice 1",value:1},{label:"Choice 2",value:2},{label:"Choice 3",value:3}],checkboxes2:[{label:"Choice 1"},{label:"Choice 2"},{label:"Choice 3"},{label:"Choice 4"}],checkboxes3:[{label:"Square",icon:"mdi mdi-square"},{label:"Circle",icon:"mdi mdi-circle"},{label:"Triangle",icon:"mdi mdi-triangle"}],checkboxes4:[{label:"Choice 1",value:1,color:"amber"},{label:"Choice 2",value:2,color:"warning"},{label:"Choice 3",value:3,color:"error"}]})};var Po=w(jo,[["render",Eo]]);const Io=t("a",{id:"api",name:"api"},null,-1),So=t("div",{class:"w-divider my12"},null,-1),Mo=e("<w-checkboxes> API"),qo=t("div",{class:"w-divider my12"},null,-1),Bo=e("<w-checkbox> API");function Lo(n,l,h,g,y,b){const d=a("title-link"),i=a("component-api");return f(),x("div",null,[Io,So,o(d,{class:"title1",h2:"",slug:"w-checkboxes-api"},{default:s(()=>[Mo]),_:1}),o(i,{class:"mt0",items:b.checkboxesProps,descriptions:n.checkboxes.propsDescs,title:"Props"},null,8,["items","descriptions"]),o(i,{items:n.checkboxes.slots,title:"Slots"},null,8,["items"]),o(i,{items:b.checkboxesEvents,title:"Events"},null,8,["items"]),qo,o(d,{class:"title1",h2:"",slug:"w-checkbox-api"},{default:s(()=>[Bo]),_:1}),o(i,{class:"mt0",items:b.checkboxProps,descriptions:n.checkbox.propsDescs,title:"Props"},null,8,["items","descriptions"]),o(i,{items:n.checkbox.slots,title:"Slots"},null,8,["items"]),o(i,{items:b.checkboxEvents,title:"Events"},null,8,["items"])])}const A={propsDescs:{items:"An array of checkbox items to display. Each item object should contain at least a <code>label</code> or a <code>value</code> attribute.",modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide an array of values to dictate the checked state of all the checkboxes.<br>This value gets updated when using a v-model.',labelOnLeft:"Moves the label to the left of each checkbox.",itemLabelKey:'The property name (aka "key") in each item object where to find the label of the item (if any).',itemValueKey:'The property name (aka "key") in each item object where to find the value of the item (if any).',itemColorKey:'The property name (aka "key") in each item object where to find the color of the item (if any).',inline:"Displays all the checkboxes inline instead of in column.",round:"Displays round checkboxes instead of square ones.",color:'Applies a color to the active checkbox. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',name:"Provide a native HTML <code>name</code> attribute to the checkbox. If not provided, a unique common name will be computed and applied to all the checkboxes.",disabled:"Disables all the checkboxes making them unreactive to user interactions.",readonly:"The checkbox will still look like an interactive checkbox except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to each checkbox.",validators:'<span class="deep-orange">Only for validation, when the <strong class="code">w-checkboxes</strong> component is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the checkbox. Each function will be executed on checkbox   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the checkbox.'},slots:{item:{description:"Provide a custom content for each checkbox label.",params:{item:"The current item object.",index:"The item index in the array of radios. Starts at 1 to be consistent with the <code>item.x</code> slot.",checked:"A boolean representing the checked state of this particular item."}},"item.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the array of radios. Starts at 1 to be consistent with the slot name.",checked:"A boolean representing the checked state of this particular item."}}},events:{input:{description:"Emitted each time any of the checkboxes is toggled.<br>Updates the v-model value in Vue 2.x only.",params:{"[Array]":"Array of <code>return-value</code> of each checked checkbox.<br>The <code>return-value</code> is one of the following attributes, if they exist, in this order: the item value, the item label, the item index."}},"update:modelValue":{description:"Emitted each time any of the checkboxes is toggled.<br>Updates the v-model value in Vue 3 only.",params:{"[Array]":"Array of <code>return-value</code> of each checked checkbox.<br>The <code>return-value</code> is one of the following attributes, if they exist, in this order: the item value, the item label, the item index."}},focus:{description:"Emitted on each checkbox focus.",params:{"[DOM event object]":"The associated focus DOM event."}}}},D={propsDescs:{modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide a boolean to dictate the checked state the checkbox.<br>This value gets updated when using a v-model.',returnValue:"Since the native HTML checkbox element uses the <code>value</code> attribute to define the checked state, the <code>return-value</code> prop let you specify a value to return to the <code>v-model</code> when the checkbox is checked (instead of returning <code>true</code>).",label:"Sets a visible label for the checkbox.",labelOnLeft:"Moves the label to the left of the checkbox. By default the label is displayed on the right.",color:'Applies a color to the checkbox when active. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',noRipple:"Removes the ripple animation on check.",indeterminate:"Applies an indeterminate state on the checkbox. E.g. when it represents the selected state of a collection of elements where some are checked and some not.",round:"Displays a round checkbox instead of a square one.",name:"Provide a native HTML <code>name</code> attribute to the checkbox. If not provided, a unique name will be computed.",disabled:"Disables the checkbox making it unreactive to user interactions.",readonly:"The checkbox will still look like an interactive checkbox except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the checkbox.",validators:'<span class="deep-orange">Only for validation, when the checkbox is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the checkbox. Each function will be executed on checkbox   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the checkbox.'},slots:{default:{description:"The checkbox label content."}},events:{input:{description:"Emitted each time the state of the checkbox changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"The current state of the checkbox."}},"update:modelValue":{description:"Emitted each time the state of the checkbox changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"The current state of the checkbox."}},focus:{description:"Emitted on each checkbox focus.",params:{"[DOM event object]":"The associated focus DOM event."}}}},Wo={data:()=>({checkboxes:A,checkbox:D}),computed:{checkboxesProps(){return p(p({},U.props),O.props)},checkboxProps(){return p(p({},$.props),O.props)},checkboxesEvents(){return U.emits.reduce((n,l)=>(n[l]=A.events[l]||{})&&n,{})},checkboxEvents(){return $.emits.reduce((n,l)=>(n[l]=D.events[l]||{})&&n,{})}}};var Ho=w(Wo,[["render",Lo]]);const zo=t("span",{class:"code"},"w-checkbox",-1),Fo=e(" & "),Ko=t("span",{class:"code"},"w-checkboxes",-1);function No(n,l,h,g,y,b){const d=a("ui-component-title"),i=a("examples"),k=a("api");return f(),x("main",null,[o(d,{slug:"w-checkbox-and-w-checkboxes",code:!1},{default:s(()=>[zo,Fo,Ko]),_:1}),o(i),o(k)])}const Ro={components:{Examples:Po,Api:Ho}};var Qo=w(Ro,[["render",No]]);export{Qo as default};
