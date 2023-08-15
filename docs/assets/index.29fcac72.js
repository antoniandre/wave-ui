import{o as v,g as f,a as o,w as l,e as t,b as e,d as r,r as i,_ as x,B as V,C,D as T}from"./index.e084873c.js";const E=t("p",{class:"mb3"},"What it looks like:",-1),$=t("div",{class:"title4 mt4"},"States",-1),P={class:"w-flex wrap"},j=t("p",{class:"mt12"},[e("There are 2 components: "),t("span",{class:"code"},"w-checkbox"),e(" & "),t("span",{class:"code"},"w-checkboxes"),e(`.
The later is a group of checkboxes for convenience.
`)],-1),I=t("p",null,[e("In most cases what you need is the "),t("span",{class:"code"},"w-checkboxes"),e(` component below, but let's start with the
basic component as it might be useful in single checkboxes and edge cases.
`)],-1),M=t("div",{class:"w-divider"},null,-1),S=t("div",{class:"title4 mb2"},"Basic use",-1),q=t("div",{class:"title4 mt8 mb2"},"Using v-model on a single checkbox",-1),B={class:"ml6"},L={class:"ml1"},W=t("div",{class:"title4 mt8 mb2"},"Using an array of v-model for multiple checkboxes",-1),H={class:"ml6"},N={class:"ml1"},z=t("code",null,"name",-1),K=t("code",null,"v-model",-1),R=t("kbd",null,"tab",-1),F=t("kbd",null,"space",-1),Y=t("kbd",null,"enter",-1),G=t("br",null,null,-1),J=t("strong",{class:"title5"},"Form validation",-1),Q=t("p",null,[e("When a validation is needed on checkboxes, each individual checkbox ("),t("span",{class:"code"},"w-checkbox"),e(`) has a
separate validation message.`),t("br"),e(`
If you want only one validation for a group of checkboxes you must use the `),t("span",{class:"code"},"w-checkboxes"),e(` component.
`)],-1),X=t("p",null,[t("code",null,"w-checkbox"),e(" provides a default slot to customize the content.")],-1),Z=t("span",{class:"pr1"},"Choice 1 has an icon",-1),ee=t("span",{class:"code"},"w-checkbox",-1),oe=t("br",null,null,-1),te=t("span",{class:"code"},"w-checkboxes",-1),le=t("div",{class:"w-divider"},null,-1),ne=t("p",{class:"my5"},[e("The "),t("span",{class:"code"},"w-checkboxes"),e(` component allows a fast and easy rendering of
multiple checkboxes by passing the items through a prop.`),t("br"),e(`
It accepts an inline parameter to display the checkboxes inline,
and allows you to customize the label of each checkbox through slot.
`)],-1),se=t("br",null,null,-1),ce={class:"w-flex align-center"},ae={class:"title3 ml8"},ie={class:"ml1"},de=t("p",null,"The v-model can also be preset, or updated externally.",-1),re={class:"w-flex align-center"},he={class:"title3 ml8"},me={class:"ml1"},ue=t("div",{class:"title4 mb2"},"Default column layout",-1),be=t("div",{class:"title4 mt6 mb2"},"Inline layout",-1),pe=t("p",null,[t("span",{class:"code"},"w-checkboxes"),e(" provides a slot to customize the label of each checkbox button: "),t("code",null,"item"),e(".")],-1),ke={class:"pr2"},ve=t("div",{class:"w-divider grey-light5 my12"},null,-1),fe=t("p",null,[e("By default the "),t("span",{class:"code"},"w-checkbox"),e(" & "),t("span",{class:"code"},"w-checkboxes"),e(` components will use the
primary color.`),t("br"),e(`
You can provide a different color with the `),t("code",null,"color"),e(` option, or you can even set a different
color per item by providing a `),t("code",null,"color"),e(` attribute in each of the item objects.
`)],-1),xe=t("span",{class:"code"},"w-checkboxes",-1),we=t("div",{class:"title4 mt8 mb2"},"Different color per item",-1),ge=t("span",{class:"code"},"w-checkbox",-1),_e=t("div",{class:"title4 mt8 mb2"},"Different color per item",-1);function ye(n,s,w,g,_,u){const d=i("w-checkboxes"),a=i("w-checkbox"),p=i("w-card"),h=i("title-link"),y=i("w-flex"),m=i("example"),b=i("alert"),k=i("w-icon"),O=i("w-tag"),D=i("w-button");return v(),f("div",null,[o(p,{"bg-color":n.$store.state.darkMode?"grey-dark5":"blue-light5"},{default:l(()=>[E,o(d,{items:n.checkboxes1,inline:""},null,8,["items"]),$,t("div",P,[o(a,{class:"mr3 mb1","model-value":!0,label:"Checked"}),o(a,{class:"mr3 mb1","model-value":!1,label:"Unchecked"}),o(a,{class:"mr3 mb1","model-value":!0,indeterminate:"",label:"Indeterminate"}),o(a,{class:"mr3 mb1","model-value":!0,disabled:"",label:"Checked &amp; disabled"}),o(a,{class:"mr3 mb1","model-value":!1,disabled:"",label:"Unchecked &amp; disabled"}),o(a,{class:"mr3 mb1","model-value":!0,disabled:"",indeterminate:"",label:"Indeterminate &amp; disabled"})])]),_:1},8,["bg-color"]),j,I,o(h,{class:"title1 mt12",h2:"",slug:"w-checkbox"},{default:l(()=>[e("<w-checkbox>")]),_:1}),M,o(m,null,{html:l(()=>[e(`<div class="title4 mb2">Basic use</div>
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
</w-flex>`)]),js:l(()=>[e(`data: () => ({
  selection1: false,
  selection2: [false, false, false]
})
`)]),default:l(()=>[S,o(a,null,{default:l(()=>[e("Single option")]),_:1}),q,o(y,{class:"align-center"},{default:l(()=>[o(a,{modelValue:n.selection1,"onUpdate:modelValue":s[0]||(s[0]=c=>n.selection1=c)},{default:l(()=>[e("Single option")]),_:1},8,["modelValue"]),t("span",B,[e("v-model:"),t("code",L,r(n.selection1),1)])]),_:1}),W,o(y,{class:"align-center"},{default:l(()=>[o(a,{class:"mr2",modelValue:n.selection2[0],"onUpdate:modelValue":s[1]||(s[1]=c=>n.selection2[0]=c)},{default:l(()=>[e("Option 1")]),_:1},8,["modelValue"]),o(a,{class:"mr2",modelValue:n.selection2[1],"onUpdate:modelValue":s[2]||(s[2]=c=>n.selection2[1]=c)},{default:l(()=>[e("Option 2")]),_:1},8,["modelValue"]),o(a,{modelValue:n.selection2[2],"onUpdate:modelValue":s[3]||(s[3]=c=>n.selection2[2]=c)},{default:l(()=>[e("Option 3")]),_:1},8,["modelValue"]),t("span",H,[e("v-model:"),t("code",N,r(n.selection2),1)])]),_:1})]),_:1}),o(b,{info:""},{default:l(()=>[e("Unlike the radio buttons, checkboxes don't need the "),z,e(" prop in addition to the "),K,e(`
to work together and control with arrow keys since the default HTML behavior does not include control from
the keyboard arrows (you can navigate with `),R,e(" and toggle with "),F,e(" or "),Y,e(")."),G,e(`
When you use a group of checkboxes via <w-checkboxes>, Wave UI will add the name attributes for you.
`)]),_:1}),o(b,{tip:""},{default:l(()=>[J,Q]),_:1}),o(h,{h2:""},{default:l(()=>[e("Custom label in w-checkbox")]),_:1}),X,o(m,{"content-class":"mt3"},{html:l(()=>[e(`<w-checkbox class="mr5" name="checkbox1">
  <span class="pr1">Choice 1 has an icon</span>
  <w-icon md>mdi mdi-star</w-icon>
</w-checkbox>

<w-checkbox name="checkbox1">
  <w-tag bg-color="green-light5" color="green-dark2">
    Choice 2 is a tag
    <w-icon class="ml1">mdi mdi-heart</w-icon>
  </w-tag>
</w-checkbox>
`)]),default:l(()=>[o(a,{class:"mr5",name:"checkbox4"},{default:l(()=>[Z,o(k,{md:""},{default:l(()=>[e("mdi mdi-star")]),_:1})]),_:1}),o(a,{name:"checkbox4"},{default:l(()=>[o(O,{"bg-color":"green-light5",color:"green-dark2"},{default:l(()=>[e("Choice 2 is a tag"),o(k,{class:"ml1"},{default:l(()=>[e("mdi mdi-heart")]),_:1})]),_:1})]),_:1})]),_:1}),o(b,{class:"mt8",tip:""},{default:l(()=>[e("As seen in this example, the "),ee,e(` component allows you to have complete freedom
regarding your checkboxes content, style and layout.`),oe,e(`
But because in most cases you won't need that, the `),te,e(` component will make you
go much faster.
`)]),_:1}),o(h,{class:"title1 mt12",h2:"",slug:"w-checkboxes"},{default:l(()=>[e("<w-checkboxes>")]),_:1}),le,ne,o(h,{class:"title2 primary",h3:""},{default:l(()=>[e("V-model")]),_:1}),o(b,{info:""},{default:l(()=>[e("If a value is set in the choice's data, it will be returned through the v-model when selected."),se,e(`
If no value is set, the choice's label will be returned instead.`)]),_:1}),o(m,null,{html:l(()=>[e(`<div class="w-flex align-center">
  <w-checkboxes v-model="selection" :items="checkboxes"></w-checkboxes>
  <div class="title3 ml8">v-model: `+r("{{ selection || '[]' }}")+`</div>
</div>`)]),js:l(()=>[e(`data: () => ({
  selection: [],
  checkboxes: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`)]),default:l(()=>[t("div",ce,[o(d,{modelValue:n.selection1b,"onUpdate:modelValue":s[4]||(s[4]=c=>n.selection1b=c),items:n.checkboxes1},null,8,["modelValue","items"]),t("div",ae,[e("v-model:"),t("code",ie,r(n.selection1b||"[]"),1)])])]),_:1}),de,o(m,null,{html:l(()=>[e(`<div class="w-flex align-center">
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
</div>`)]),js:l(()=>[e(`data: () => ({
  selection: [],
  checkboxes: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`)]),default:l(()=>[t("div",re,[t("div",null,[o(d,{modelValue:n.selection3,"onUpdate:modelValue":s[5]||(s[5]=c=>n.selection3=c),items:n.checkboxes1},null,8,["modelValue","items"]),o(D,{class:"mt2",onClick:s[6]||(s[6]=c=>n.selection3=n.selection3.length?[]:[2])},{default:l(()=>[e("Toggle checkbox 2")]),_:1})]),t("div",he,[e("v-model:"),t("code",me,r(n.selection3||"[]"),1)])])]),_:1}),o(h,{h2:""},{default:l(()=>[e("Layout")]),_:1}),o(m,null,{html:l(()=>[e(`<div class="title4 mb2">Default column layout</div>
<w-checkboxes :items="checkboxes"></w-checkboxes>

<div class="title4 mt6 mb2">Inline layout</div>
<w-checkboxes :items="checkboxes" inline></w-checkboxes>`)]),js:l(()=>[e(`data: () => ({
  checkboxes: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`)]),default:l(()=>[ue,o(d,{items:n.checkboxes1},null,8,["items"]),be,o(d,{items:n.checkboxes1,inline:""},null,8,["items"])]),_:1}),o(h,{h2:""},{default:l(()=>[e("Custom label content")]),_:1}),pe,o(m,null,{html:l(()=>[e(`<w-checkboxes :items="checkboxes" color="green">
  <template #item="{ item }">
    <span class="pr2">`+r("{{ item.label }}")+`</span>
    <w-icon class="deep-purple">`+r("{{ item.icon }}")+`</w-icon>
  </template>
</w-checkboxes>`,1)]),js:l(()=>[e(`data: () => ({
  checkboxes: [
    { label: 'Square', icon: 'mdi mdi-square' },
    { label: 'Circle', icon: 'mdi mdi-circle' },
    { label: 'Triangle', icon: 'mdi mdi-triangle' }
  ]
})
`)]),default:l(()=>[o(d,{items:n.checkboxes3,color:"green"},{item:l(({item:c})=>[t("span",ke,r(c.label),1),o(k,{class:"deep-purple"},{default:l(()=>[e(r(c.icon),1)]),_:2},1024)]),_:1},8,["items"])]),_:1}),ve,o(h,{h2:""},{default:l(()=>[e("Round checkboxes")]),_:1}),o(m,{"content-class":"mt3"},{html:l(()=>[e(`<w-checkboxes
  v-model="selection"
  :items="checkboxes"
  round
  inline>
</w-checkboxes>`)]),js:l(()=>[e(`data: () => ({
  selection: [1],
  checkboxes: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`)]),default:l(()=>[o(d,{modelValue:n.selection8,"onUpdate:modelValue":s[7]||(s[7]=c=>n.selection8=c),items:n.checkboxes1,round:"",inline:""},null,8,["modelValue","items"])]),_:1}),o(h,{h2:""},{default:l(()=>[e("Color")]),_:1}),fe,o(h,{h3:"",slug:"w-checkboxes--colors"},{default:l(()=>[xe,e(" colors")]),_:1}),o(m,null,{html:l(()=>[e(`<w-checkboxes
  v-model="selection1"
  :items="checkboxes1"
  color="purple">
</w-checkboxes>

<div class="title4 mt8 mb2">Different color per item</div>
<w-checkboxes
  v-model="selection2"
  :items="checkboxes2">
</w-checkboxes>`)]),js:l(()=>[e(`data: () => ({
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
})`)]),default:l(()=>[o(d,{modelValue:n.selection4,"onUpdate:modelValue":s[8]||(s[8]=c=>n.selection4=c),items:n.checkboxes1,color:"purple"},null,8,["modelValue","items"]),we,o(d,{modelValue:n.selection7,"onUpdate:modelValue":s[9]||(s[9]=c=>n.selection7=c),items:n.checkboxes4},null,8,["modelValue","items"])]),_:1}),o(h,{h3:"",slug:"w-checkbox--colors"},{default:l(()=>[ge,e(" colors")]),_:1}),o(m,null,{html:l(()=>[e(`<w-checkbox
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
</w-checkbox>`)]),js:l(()=>[e(`data: () => ({
  selection1: [true, true],
  selection2: [true, true],
  checkboxes: [
    { label: 'Choice 1' },
    { label: 'Choice 2' },
    { label: 'Choice 3' }
  ]
})`)]),default:l(()=>[o(a,{class:"mr2",modelValue:n.selection5[0],"onUpdate:modelValue":s[10]||(s[10]=c=>n.selection5[0]=c),color:"teal-light1"},{default:l(()=>[e("Option 1")]),_:1},8,["modelValue"]),o(a,{modelValue:n.selection5[1],"onUpdate:modelValue":s[11]||(s[11]=c=>n.selection5[1]=c),color:"teal-light1"},{default:l(()=>[e("Option 2")]),_:1},8,["modelValue"]),_e,o(a,{class:"mr2",modelValue:n.selection6[0],"onUpdate:modelValue":s[12]||(s[12]=c=>n.selection6[0]=c),color:"pink-light3"},{default:l(()=>[e("Option 1")]),_:1},8,["modelValue"]),o(a,{modelValue:n.selection6[1],"onUpdate:modelValue":s[13]||(s[13]=c=>n.selection6[1]=c),color:"blue-light1"},{default:l(()=>[e("Option 2")]),_:1},8,["modelValue"])]),_:1})])}const Ve={data:()=>({selection1:!1,selection1b:[],selection2:[!1,!1,!1],selection3:[2],selection4:[1,2,3],selection5:[!0,!0],selection6:[!0,!0],selection7:[1,2,3],selection8:[1],checkboxes1:[{label:"Choice 1",value:1},{label:"Choice 2",value:2},{label:"Choice 3",value:3}],checkboxes2:[{label:"Choice 1"},{label:"Choice 2"},{label:"Choice 3"},{label:"Choice 4"}],checkboxes3:[{label:"Square",icon:"mdi mdi-square"},{label:"Circle",icon:"mdi mdi-circle"},{label:"Triangle",icon:"mdi mdi-triangle"}],checkboxes4:[{label:"Choice 1",value:1,color:"amber"},{label:"Choice 2",value:2,color:"warning"},{label:"Choice 3",value:3,color:"error"}]})},Ce=x(Ve,[["render",ye]]),Te=t("a",{id:"api",name:"api"},null,-1),Ue=t("div",{class:"w-divider my12"},null,-1),Ae=t("div",{class:"w-divider my12"},null,-1);function Oe(n,s,w,g,_,u){const d=i("title-link"),a=i("component-api");return v(),f("div",null,[Te,Ue,o(d,{class:"title1",h2:"",slug:"w-checkboxes-api"},{default:l(()=>[e("<w-checkboxes> API")]),_:1}),o(a,{class:"mt0",items:u.checkboxesProps,descriptions:n.checkboxes.propsDescs,title:"Props"},null,8,["items","descriptions"]),o(a,{items:n.checkboxes.slots,title:"Slots"},null,8,["items"]),o(a,{items:u.checkboxesEvents,title:"Events"},null,8,["items"]),Ae,o(d,{class:"title1",h2:"",slug:"w-checkbox-api"},{default:l(()=>[e("<w-checkbox> API")]),_:1}),o(a,{class:"mt0",items:u.checkboxProps,descriptions:n.checkbox.propsDescs,title:"Props"},null,8,["items","descriptions"]),o(a,{items:n.checkbox.slots,title:"Slots"},null,8,["items"]),o(a,{items:u.checkboxEvents,title:"Events"},null,8,["items"])])}const U={propsDescs:{items:"An array of checkbox items to display. Each item object should contain at least a <code>label</code> or a <code>value</code> attribute.",modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide an array of values to dictate the checked state of all the checkboxes.<br>This value gets updated when using a v-model.',labelOnLeft:"Moves the label to the left of each checkbox.",itemLabelKey:'The property name (aka "key") in each item object where to find the label of the item (if any).',itemValueKey:'The property name (aka "key") in each item object where to find the value of the item (if any).',itemColorKey:'The property name (aka "key") in each item object where to find the color of the item (if any).',inline:"Displays all the checkboxes inline instead of in column.",round:"Displays round checkboxes instead of square ones.",color:'Applies a color to the active checkbox. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',labelColor:'Applies a specific color to the checkboxes labels. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',name:"Provide a native HTML <code>name</code> attribute to the checkbox. If not provided, a unique common name will be computed and applied to all the checkboxes.",disabled:"Disables all the checkboxes making them unreactive to user interactions.",readonly:"The checkbox will still look like an interactive checkbox except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to each checkbox.",validators:'<span class="deep-orange">Only for validation, when the <strong class="code">w-checkboxes</strong> component is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the checkbox. Each function will be executed on checkbox   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the checkbox.'},slots:{item:{description:"Provide a custom content for each checkbox label.",params:{item:"The current item object.",index:"The item index in the array of radios. Starts at 1 to be consistent with the <code>item.x</code> slot.",checked:"A boolean representing the checked state of this particular item."}},"item.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the array of radios. Starts at 1 to be consistent with the slot name.",checked:"A boolean representing the checked state of this particular item."}}},events:{input:{description:"Emitted each time any of the checkboxes is toggled.<br>Updates the v-model value in Vue 2.x only.",params:{"[Array]":"Array of <code>return-value</code> of each checked checkbox.<br>The <code>return-value</code> is one of the following attributes, if they exist, in this order: the item value, the item label, the item index."}},"update:modelValue":{description:"Emitted each time any of the checkboxes is toggled.<br>Updates the v-model value in Vue 3 only.",params:{"[Array]":"Array of <code>return-value</code> of each checked checkbox.<br>The <code>return-value</code> is one of the following attributes, if they exist, in this order: the item value, the item label, the item index."}},focus:{description:"Emitted on each checkbox focus.",params:{"[DOM event object]":"The associated focus DOM event."}}}},A={propsDescs:{modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide a boolean to dictate the checked state the checkbox.<br>This value gets updated when using a v-model.',returnValue:"Since the native HTML checkbox element uses the <code>value</code> attribute to define the checked state, the <code>return-value</code> prop let you specify a value to return to the <code>v-model</code> when the checkbox is checked (instead of returning <code>true</code>).",label:"Sets a visible label for the checkbox.",labelOnLeft:"Moves the label to the left of the checkbox. By default the label is displayed on the right.",color:'Applies a color to the checkbox when active. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',labelColor:`Applies a specific color to the checkbox's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,noRipple:"Removes the ripple animation on check.",indeterminate:"Applies an indeterminate state on the checkbox. E.g. when it represents the selected state of a collection of elements where some are checked and some not.",round:"Displays a round checkbox instead of a square one.",name:"Provide a native HTML <code>name</code> attribute to the checkbox. If not provided, a unique name will be computed.",disabled:"Disables the checkbox making it unreactive to user interactions.",readonly:"The checkbox will still look like an interactive checkbox except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the checkbox.",validators:'<span class="deep-orange">Only for validation, when the checkbox is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the checkbox. Each function will be executed on checkbox   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the checkbox.'},slots:{default:{description:"The checkbox label content."}},events:{input:{description:"Emitted each time the state of the checkbox changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"The current state of the checkbox."}},"update:modelValue":{description:"Emitted each time the state of the checkbox changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"The current state of the checkbox."}},focus:{description:"Emitted on each checkbox focus.",params:{"[DOM event object]":"The associated focus DOM event."}}}},De={data:()=>({checkboxes:U,checkbox:A}),computed:{checkboxesProps(){return{...V.props,...C.props}},checkboxProps(){return{...T.props,...C.props}},checkboxesEvents(){return V.emits.reduce((n,s)=>(n[s]=U.events[s]||{})&&n,{})},checkboxEvents(){return T.emits.reduce((n,s)=>(n[s]=A.events[s]||{})&&n,{})}}},Ee=x(De,[["render",Oe]]),$e=t("span",{class:"code"},"w-checkbox",-1),Pe=t("span",{class:"code"},"w-checkboxes",-1);function je(n,s,w,g,_,u){const d=i("ui-component-title"),a=i("examples"),p=i("api");return v(),f("main",null,[o(d,{slug:"w-checkbox-and-w-checkboxes",code:!1},{default:l(()=>[$e,e(" & "),Pe]),_:1}),o(a),o(p)])}const Ie={components:{Examples:Ce,Api:Ee}},Se=x(Ie,[["render",je]]);export{Se as default};
