import{r as c,o as v,g as f,a as t,w as n,d as l,b as o,t as d,_ as x,C,D as T,E as U}from"./index-CM5cc9pa.js";const P={class:"w-flex wrap my1"},I={class:"w-flex wrap my1"},j={class:"w-flex wrap my1"},M={class:"ml6"},S={class:"ml1"},$={class:"ml6"},q={class:"ml1"},B={class:"w-flex align-center"},L={class:"title3 ml8"},W={class:"ml1"},H={class:"w-flex align-center"},N={class:"title3 ml8"},z={class:"ml1"},K={class:"pr2"};function R(s,e,w,g,y,b){const r=c("w-checkboxes"),i=c("w-checkbox"),p=c("w-card"),m=c("title-link"),V=c("w-flex"),u=c("example"),h=c("alert"),k=c("w-icon"),D=c("w-tag"),E=c("w-button");return v(),f("div",null,[t(p,{"bg-color":s.$store.state.darkMode?"grey-dark5":"blue-light5"},{default:n(()=>[e[14]||(e[14]=l("p",{class:"mb3"},"What it looks like:",-1)),t(r,{items:s.checkboxes1,inline:""},null,8,["items"]),e[15]||(e[15]=l("div",{class:"title4 mt4"},"States",-1)),l("div",null,[l("div",P,[t(i,{class:"mr3 mb1","model-value":!0,label:"Checked"}),t(i,{class:"mr3 mb1","model-value":!0,disabled:"",label:"Checked &amp; disabled"}),t(i,{class:"mr3 mb1","model-value":!0,readonly:"",label:"Checked &amp; readonly"})]),l("div",I,[t(i,{class:"mr3 mb1","model-value":!1,label:"Unchecked"}),t(i,{class:"mr3 mb1","model-value":!1,disabled:"",label:"Unchecked &amp; disabled"}),t(i,{class:"mr3 mb1","model-value":!1,readonly:"",label:"Unchecked &amp; readonly"})]),l("div",j,[t(i,{class:"mr3 mb1","model-value":!0,indeterminate:"",label:"Indeterminate"}),t(i,{class:"mr3 mb1","model-value":!0,disabled:"",indeterminate:"",label:"Indeterminate &amp; disabled"}),t(i,{class:"mr3 mb1","model-value":!0,readonly:"",indeterminate:"",label:"Indeterminate &amp; readonly"})])])]),_:1},8,["bg-color"]),e[72]||(e[72]=l("p",{class:"mt12"},[o("There are 2 components: "),l("span",{class:"code"},"w-checkbox"),o(" & "),l("span",{class:"code"},"w-checkboxes"),o(`.
The later is a group of checkboxes for convenience.
`)],-1)),e[73]||(e[73]=l("p",null,[o("In most cases what you need is the "),l("span",{class:"code"},"w-checkboxes"),o(` component below, but let's start with the
basic component as it might be useful in single checkboxes and edge cases.
`)],-1)),t(m,{class:"title1 mt12",h2:"",slug:"w-checkbox"},{default:n(()=>e[16]||(e[16]=[o("<w-checkbox>")])),_:1}),e[74]||(e[74]=l("div",{class:"w-divider"},null,-1)),t(u,null,{html:n(()=>e[24]||(e[24]=[o(`<div class="title4 mb2">Basic use</div>
<w-checkbox>Single option</w-checkbox>

<div class="title4 mt8 mb2">Using v-model on a single checkbox</div>
<w-flex class="align-center">
  <w-checkbox v-model="selection1">Single option</w-checkbox>

  <span class="ml6">
    v-model:
    <code class="ml1">`+d("{{ selection1 }}")+`</code>
  </span>
</w-flex>

<div class="title4 mt8 mb2">Using an array of v-model for multiple checkboxes</div>
<w-flex class="align-center">
  <w-checkbox class="mr2" v-model="selection2[0]">Option 1</w-checkbox>
  <w-checkbox class="mr2" v-model="selection2[1]">Option 2</w-checkbox>
  <w-checkbox v-model="selection2[2]">Option 3</w-checkbox>

  <span class="ml6">
    v-model:
    <code class="ml1">`+d("{{ selection2 }}")+`</code>
  </span>
</w-flex>`)])),js:n(()=>e[25]||(e[25]=[o(`data: () => ({
  selection1: false,
  selection2: [false, false, false]
})
`)])),default:n(()=>[e[26]||(e[26]=l("div",{class:"title4 mb2"},"Basic use",-1)),t(i,null,{default:n(()=>e[17]||(e[17]=[o("Single option")])),_:1}),e[27]||(e[27]=l("div",{class:"title4 mt8 mb2"},"Using v-model on a single checkbox",-1)),t(V,{class:"align-center"},{default:n(()=>[t(i,{modelValue:s.selection1,"onUpdate:modelValue":e[0]||(e[0]=a=>s.selection1=a)},{default:n(()=>e[18]||(e[18]=[o("Single option")])),_:1},8,["modelValue"]),l("span",M,[e[19]||(e[19]=o("v-model:")),l("code",S,d(s.selection1),1)])]),_:1}),e[28]||(e[28]=l("div",{class:"title4 mt8 mb2"},"Using an array of v-model for multiple checkboxes",-1)),t(V,{class:"align-center"},{default:n(()=>[t(i,{class:"mr2",modelValue:s.selection2[0],"onUpdate:modelValue":e[1]||(e[1]=a=>s.selection2[0]=a)},{default:n(()=>e[20]||(e[20]=[o("Option 1")])),_:1},8,["modelValue"]),t(i,{class:"mr2",modelValue:s.selection2[1],"onUpdate:modelValue":e[2]||(e[2]=a=>s.selection2[1]=a)},{default:n(()=>e[21]||(e[21]=[o("Option 2")])),_:1},8,["modelValue"]),t(i,{modelValue:s.selection2[2],"onUpdate:modelValue":e[3]||(e[3]=a=>s.selection2[2]=a)},{default:n(()=>e[22]||(e[22]=[o("Option 3")])),_:1},8,["modelValue"]),l("span",$,[e[23]||(e[23]=o("v-model:")),l("code",q,d(s.selection2),1)])]),_:1})]),_:1}),t(h,{info:""},{default:n(()=>e[29]||(e[29]=[o("Unlike the radio buttons, checkboxes don't need the "),l("code",null,"name",-1),o(" prop in addition to the "),l("code",null,"v-model",-1),o(`
to work together and control with arrow keys since the default HTML behavior does not include control from
the keyboard arrows (you can navigate with `),l("kbd",null,"tab",-1),o(" and toggle with "),l("kbd",null,"space",-1),o(" or "),l("kbd",null,"enter",-1),o(")."),l("br",null,null,-1),o(`
When you use a group of checkboxes via <w-checkboxes>, Wave UI will add the name attributes for you.
`)])),_:1}),t(h,{tip:""},{default:n(()=>e[30]||(e[30]=[l("strong",{class:"title5"},"Form validation",-1),l("p",null,[o("When a validation is needed on checkboxes, each individual checkbox ("),l("span",{class:"code"},"w-checkbox"),o(`) has a
separate validation message.`),l("br"),o(`
If you want only one validation for a group of checkboxes you must use the `),l("span",{class:"code"},"w-checkboxes"),o(` component.
`)],-1)])),_:1}),t(m,{h2:""},{default:n(()=>e[31]||(e[31]=[o("Custom label in w-checkbox")])),_:1}),e[75]||(e[75]=l("p",null,[l("code",null,"w-checkbox"),o(" provides a default slot to customize the content.")],-1)),t(u,{"content-class":"mt3"},{html:n(()=>e[36]||(e[36]=[o(`<w-checkbox class="mr5" name="checkbox1">
  <span class="pr1">Choice 1 has an icon</span>
  <w-icon md>mdi mdi-star</w-icon>
</w-checkbox>

<w-checkbox name="checkbox1">
  <w-tag bg-color="green-light5" color="green-dark2">
    Choice 2 is a tag
    <w-icon class="ml1">mdi mdi-heart</w-icon>
  </w-tag>
</w-checkbox>
`)])),default:n(()=>[t(i,{class:"mr5",name:"checkbox4"},{default:n(()=>[e[33]||(e[33]=l("span",{class:"pr1"},"Choice 1 has an icon",-1)),t(k,{md:""},{default:n(()=>e[32]||(e[32]=[o("mdi mdi-star")])),_:1})]),_:1}),t(i,{name:"checkbox4"},{default:n(()=>[t(D,{"bg-color":"green-light5",color:"green-dark2"},{default:n(()=>[e[35]||(e[35]=o("Choice 2 is a tag")),t(k,{class:"ml1"},{default:n(()=>e[34]||(e[34]=[o("mdi mdi-heart")])),_:1})]),_:1})]),_:1})]),_:1}),t(h,{class:"mt8",tip:""},{default:n(()=>e[37]||(e[37]=[o("As seen in this example, the "),l("span",{class:"code"},"w-checkbox",-1),o(` component allows you to have complete freedom
regarding your checkboxes content, style and layout.`),l("br",null,null,-1),o(`
But because in most cases you won't need that, the `),l("span",{class:"code"},"w-checkboxes",-1),o(` component will make you
go much faster.
`)])),_:1}),t(m,{class:"title1 mt12",h2:"",slug:"w-checkboxes"},{default:n(()=>e[38]||(e[38]=[o("<w-checkboxes>")])),_:1}),e[76]||(e[76]=l("div",{class:"w-divider"},null,-1)),e[77]||(e[77]=l("p",{class:"my5"},[o("The "),l("span",{class:"code"},"w-checkboxes"),o(` component allows a fast and easy rendering of
multiple checkboxes by passing the items through a prop.`),l("br"),o(`
It accepts an inline parameter to display the checkboxes inline,
and allows you to customize the label of each checkbox through slot.
`)],-1)),t(m,{class:"title2 primary",h3:""},{default:n(()=>e[39]||(e[39]=[o("V-model")])),_:1}),t(h,{info:""},{default:n(()=>e[40]||(e[40]=[o("If a value is set in the choice's data, it will be returned through the v-model when selected."),l("br",null,null,-1),o(`
If no value is set, the choice's label will be returned instead.`)])),_:1}),t(u,null,{html:n(()=>e[42]||(e[42]=[o(`<div class="w-flex align-center">
  <w-checkboxes v-model="selection" :items="checkboxes"></w-checkboxes>
  <div class="title3 ml8">v-model: `+d("{{ selection || '[]' }}")+`</div>
</div>`)])),js:n(()=>e[43]||(e[43]=[o(`data: () => ({
  selection: [],
  checkboxes: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`)])),default:n(()=>[l("div",B,[t(r,{modelValue:s.selection1b,"onUpdate:modelValue":e[4]||(e[4]=a=>s.selection1b=a),items:s.checkboxes1},null,8,["modelValue","items"]),l("div",L,[e[41]||(e[41]=o("v-model:")),l("code",W,d(s.selection1b||"[]"),1)])])]),_:1}),e[78]||(e[78]=l("p",null,"The v-model can also be preset, or updated externally.",-1)),t(u,null,{html:n(()=>e[46]||(e[46]=[o(`<div class="w-flex align-center">
  <div>
    <w-checkboxes v-model="selection" :items="checkboxes"></w-checkboxes>
    <w-button class="mt2" @click="selection = selection.length ? [] : [2]">
      Toggle checkbox 2
    </w-button>
  </div>

  <div class="title3 ml8">
    v-model:
    <code class="ml1">`+d("{{ selection || '[]' }}")+`</code>
  </div>
</div>`)])),js:n(()=>e[47]||(e[47]=[o(`data: () => ({
  selection: [],
  checkboxes: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`)])),default:n(()=>[l("div",H,[l("div",null,[t(r,{modelValue:s.selection3,"onUpdate:modelValue":e[5]||(e[5]=a=>s.selection3=a),items:s.checkboxes1},null,8,["modelValue","items"]),t(E,{class:"mt2",onClick:e[6]||(e[6]=a=>s.selection3=s.selection3.length?[]:[2])},{default:n(()=>e[44]||(e[44]=[o("Toggle checkbox 2")])),_:1})]),l("div",N,[e[45]||(e[45]=o("v-model:")),l("code",z,d(s.selection3||"[]"),1)])])]),_:1}),t(m,{h2:""},{default:n(()=>e[48]||(e[48]=[o("Layout")])),_:1}),t(u,null,{html:n(()=>e[49]||(e[49]=[o(`<div class="title4 mb2">Default column layout</div>
<w-checkboxes :items="checkboxes"></w-checkboxes>

<div class="title4 mt6 mb2">Inline layout</div>
<w-checkboxes :items="checkboxes" inline></w-checkboxes>`)])),js:n(()=>e[50]||(e[50]=[o(`data: () => ({
  checkboxes: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`)])),default:n(()=>[e[51]||(e[51]=l("div",{class:"title4 mb2"},"Default column layout",-1)),t(r,{items:s.checkboxes1},null,8,["items"]),e[52]||(e[52]=l("div",{class:"title4 mt6 mb2"},"Inline layout",-1)),t(r,{items:s.checkboxes1,inline:""},null,8,["items"])]),_:1}),t(m,{h2:""},{default:n(()=>e[53]||(e[53]=[o("Custom label content")])),_:1}),e[79]||(e[79]=l("p",null,[l("span",{class:"code"},"w-checkboxes"),o(" provides a slot to customize the label of each checkbox button: "),l("code",null,"item"),o(".")],-1)),t(u,null,{html:n(()=>e[54]||(e[54]=[o(`<w-checkboxes :items="checkboxes" color="green">
  <template #item="{ item }">
    <span class="pr2">`+d("{{ item.label }}")+`</span>
    <w-icon class="deep-purple">`+d("{{ item.icon }}")+`</w-icon>
  </template>
</w-checkboxes>`)])),js:n(()=>e[55]||(e[55]=[o(`data: () => ({
  checkboxes: [
    { label: 'Square', icon: 'mdi mdi-square' },
    { label: 'Circle', icon: 'mdi mdi-circle' },
    { label: 'Triangle', icon: 'mdi mdi-triangle' }
  ]
})
`)])),default:n(()=>[t(r,{items:s.checkboxes3,color:"green"},{item:n(({item:a})=>[l("span",K,d(a.label),1),t(k,{class:"deep-purple"},{default:n(()=>[o(d(a.icon),1)]),_:2},1024)]),_:1},8,["items"])]),_:1}),e[80]||(e[80]=l("div",{class:"w-divider grey-light5 my12"},null,-1)),t(m,{h2:""},{default:n(()=>e[56]||(e[56]=[o("Round checkboxes")])),_:1}),t(u,{"content-class":"mt3"},{html:n(()=>e[57]||(e[57]=[o(`<w-checkboxes
  v-model="selection"
  :items="checkboxes"
  round
  inline>
</w-checkboxes>`)])),js:n(()=>e[58]||(e[58]=[o(`data: () => ({
  selection: [1],
  checkboxes: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`)])),default:n(()=>[t(r,{modelValue:s.selection8,"onUpdate:modelValue":e[7]||(e[7]=a=>s.selection8=a),items:s.checkboxes1,round:"",inline:""},null,8,["modelValue","items"])]),_:1}),t(m,{h2:""},{default:n(()=>e[59]||(e[59]=[o("Color")])),_:1}),e[81]||(e[81]=l("p",null,[o("By default the "),l("span",{class:"code"},"w-checkbox"),o(" & "),l("span",{class:"code"},"w-checkboxes"),o(` components will use the
primary color.`),l("br"),o(`
You can provide a different color with the `),l("code",null,"color"),o(` option, or you can even set a different
color per item by providing a `),l("code",null,"color"),o(` attribute in each of the item objects.
`)],-1)),t(m,{h3:"",slug:"w-checkboxes--colors"},{default:n(()=>e[60]||(e[60]=[l("span",{class:"code"},"w-checkboxes",-1),o(" colors")])),_:1}),t(u,null,{html:n(()=>e[61]||(e[61]=[o(`<w-checkboxes
  v-model="selection1"
  :items="checkboxes1"
  color="purple">
</w-checkboxes>

<div class="title4 mt8 mb2">Different color per item</div>
<w-checkboxes
  v-model="selection2"
  :items="checkboxes2">
</w-checkboxes>`)])),js:n(()=>e[62]||(e[62]=[o(`data: () => ({
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
})`)])),default:n(()=>[t(r,{modelValue:s.selection4,"onUpdate:modelValue":e[8]||(e[8]=a=>s.selection4=a),items:s.checkboxes1,color:"purple"},null,8,["modelValue","items"]),e[63]||(e[63]=l("div",{class:"title4 mt8 mb2"},"Different color per item",-1)),t(r,{modelValue:s.selection7,"onUpdate:modelValue":e[9]||(e[9]=a=>s.selection7=a),items:s.checkboxes4},null,8,["modelValue","items"])]),_:1}),t(m,{h3:"",slug:"w-checkbox--colors"},{default:n(()=>e[64]||(e[64]=[l("span",{class:"code"},"w-checkbox",-1),o(" colors")])),_:1}),t(u,null,{html:n(()=>e[69]||(e[69]=[o(`<w-checkbox
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
</w-checkbox>`)])),js:n(()=>e[70]||(e[70]=[o(`data: () => ({
  selection1: [true, true],
  selection2: [true, true],
  checkboxes: [
    { label: 'Choice 1' },
    { label: 'Choice 2' },
    { label: 'Choice 3' }
  ]
})`)])),default:n(()=>[t(i,{class:"mr2",modelValue:s.selection5[0],"onUpdate:modelValue":e[10]||(e[10]=a=>s.selection5[0]=a),color:"teal-light1"},{default:n(()=>e[65]||(e[65]=[o("Option 1")])),_:1},8,["modelValue"]),t(i,{modelValue:s.selection5[1],"onUpdate:modelValue":e[11]||(e[11]=a=>s.selection5[1]=a),color:"teal-light1"},{default:n(()=>e[66]||(e[66]=[o("Option 2")])),_:1},8,["modelValue"]),e[71]||(e[71]=l("div",{class:"title4 mt8 mb2"},"Different color per item",-1)),t(i,{class:"mr2",modelValue:s.selection6[0],"onUpdate:modelValue":e[12]||(e[12]=a=>s.selection6[0]=a),color:"pink-light3"},{default:n(()=>e[67]||(e[67]=[o("Option 1")])),_:1},8,["modelValue"]),t(i,{modelValue:s.selection6[1],"onUpdate:modelValue":e[13]||(e[13]=a=>s.selection6[1]=a),color:"blue-light1"},{default:n(()=>e[68]||(e[68]=[o("Option 2")])),_:1},8,["modelValue"])]),_:1})])}const F={data:()=>({selection1:!1,selection1b:[],selection2:[!1,!1,!1],selection3:[2],selection4:[1,2,3],selection5:[!0,!0],selection6:[!0,!0],selection7:[1,2,3],selection8:[1],checkboxes1:[{label:"Choice 1",value:1},{label:"Choice 2",value:2},{label:"Choice 3",value:3}],checkboxes2:[{label:"Choice 1"},{label:"Choice 2"},{label:"Choice 3"},{label:"Choice 4"}],checkboxes3:[{label:"Square",icon:"mdi mdi-square"},{label:"Circle",icon:"mdi mdi-circle"},{label:"Triangle",icon:"mdi mdi-triangle"}],checkboxes4:[{label:"Choice 1",value:1,color:"amber"},{label:"Choice 2",value:2,color:"warning"},{label:"Choice 3",value:3,color:"error"}]})},Y=x(F,[["render",R]]);function G(s,e,w,g,y,b){const r=c("title-link"),i=c("component-api");return v(),f("div",null,[e[2]||(e[2]=l("a",{id:"api",name:"api"},null,-1)),e[3]||(e[3]=l("div",{class:"w-divider my12"},null,-1)),t(r,{class:"title1",h2:"",slug:"w-checkboxes-api"},{default:n(()=>e[0]||(e[0]=[o("<w-checkboxes> API")])),_:1}),t(i,{class:"mt0",items:b.checkboxesProps,descriptions:s.checkboxes.propsDescs,title:"Props"},null,8,["items","descriptions"]),t(i,{items:s.checkboxes.slots,title:"Slots"},null,8,["items"]),t(i,{items:b.checkboxesEvents,title:"Events"},null,8,["items"]),e[4]||(e[4]=l("div",{class:"w-divider my12"},null,-1)),t(r,{class:"title1",h2:"",slug:"w-checkbox-api"},{default:n(()=>e[1]||(e[1]=[o("<w-checkbox> API")])),_:1}),t(i,{class:"mt0",items:b.checkboxProps,descriptions:s.checkbox.propsDescs,title:"Props"},null,8,["items","descriptions"]),t(i,{items:s.checkbox.slots,title:"Slots"},null,8,["items"]),t(i,{items:b.checkboxEvents,title:"Events"},null,8,["items"])])}const A={propsDescs:{items:"An array of checkbox items to display. Each item object should contain at least a <code>label</code> or a <code>value</code> attribute.",modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide an array of values to dictate the checked state of all the checkboxes.<br>This value gets updated when using a v-model.',returnValues:"When set to <code>true</code>, the return value of the w-checkboxes component will be an array of <code>returnValue</code>s of each item that is checked. If set to false and by default, the return value will be an array of booleans.",labelOnLeft:"Moves the label to the left of each checkbox.",itemLabelKey:'The property name (aka "key") in each item object where to find the label of the item (if any).',itemValueKey:'The property name (aka "key") in each item object where to find the value of the item (if any).',itemColorKey:'The property name (aka "key") in each item object where to find the color of the item (if any).',inline:"Displays all the checkboxes inline instead of in column.",round:"Displays round checkboxes instead of square ones.",color:'Applies a color to the active checkbox. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',labelColor:'Applies a specific color to the checkboxes labels. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',name:"Provide a native HTML <code>name</code> attribute to the checkbox. If not provided, a unique common name will be computed and applied to all the checkboxes.",disabled:"Disables all the checkboxes making them unreactive to user interactions.",readonly:"The checkbox will still look like an interactive checkbox except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to each checkbox.",validators:'<span class="deep-orange">Only for validation, when the <strong class="code">w-checkboxes</strong> component is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the checkbox. Each function will be executed on checkbox   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the checkbox.'},slots:{item:{description:"Provide a custom content for each checkbox label.",params:{item:"The current item object.",index:"The item index in the array of radios. Starts at 1 to be consistent with the <code>item.x</code> slot.",checked:"A boolean representing the checked state of this particular item."}},"item.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the array of radios. Starts at 1 to be consistent with the slot name.",checked:"A boolean representing the checked state of this particular item."}}},events:{input:{description:"Emitted each time any of the checkboxes is toggled.<br>Updates the v-model value in Vue 2.x only.",params:{"[Array]":"Array of <code>return-value</code> of each checked checkbox.<br>The <code>return-value</code> is one of the following attributes, if they exist, in this order: the item value, the item label, the item index."}},"update:modelValue":{description:"Emitted each time any of the checkboxes is toggled.<br>Updates the v-model value in Vue 3 only.",params:{"[Array]":"Array of <code>return-value</code> of each checked checkbox.<br>The <code>return-value</code> is one of the following attributes, if they exist, in this order: the item value, the item label, the item index."}},focus:{description:"Emitted on each checkbox focus.",params:{"[DOM event object]":"The associated focus DOM event."}}}},O={propsDescs:{modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide a boolean to dictate the checked state the checkbox.<br>This value gets updated when using a v-model.',returnValue:"Since the native HTML checkbox element uses the <code>value</code> attribute to define the checked state, the <code>return-value</code> prop let you specify a value to return to the <code>v-model</code> when the checkbox is checked (instead of returning <code>true</code>).",label:"Sets a visible label for the checkbox.",labelOnLeft:"Moves the label to the left of the checkbox. By default the label is displayed on the right.",color:'Applies a color to the checkbox when active. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',labelColor:`Applies a specific color to the checkbox's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,noRipple:"Removes the ripple animation on check.",indeterminate:"Applies an indeterminate state on the checkbox. E.g. when it represents the selected state of a collection of elements where some are checked and some not.",round:"Displays a round checkbox instead of a square one.",name:"Provide a native HTML <code>name</code> attribute to the checkbox. If not provided, a unique name will be computed.",disabled:"Disables the checkbox making it unreactive to user interactions.",readonly:"The checkbox will still look like an interactive checkbox except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the checkbox.",validators:'<span class="deep-orange">Only for validation, when the checkbox is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the checkbox. Each function will be executed on checkbox   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the checkbox.'},slots:{default:{description:"The checkbox label content."}},events:{input:{description:"Emitted each time the state of the checkbox changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"The current state of the checkbox."}},"update:modelValue":{description:"Emitted each time the state of the checkbox changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"The current state of the checkbox."}},focus:{description:"Emitted on each checkbox focus.",params:{"[DOM event object]":"The associated focus DOM event."}}}},J={data:()=>({checkboxes:A,checkbox:O}),computed:{checkboxesProps(){return{...C.props,...T.props}},checkboxProps(){return{...U.props,...T.props}},checkboxesEvents(){return C.emits.reduce((s,e)=>(s[e]=A.events[e]||{})&&s,{})},checkboxEvents(){return U.emits.reduce((s,e)=>(s[e]=O.events[e]||{})&&s,{})}}},Q=x(J,[["render",G]]);function X(s,e,w,g,y,b){const r=c("ui-component-title"),i=c("examples"),p=c("api");return v(),f("main",null,[t(r,{slug:"w-checkbox-and-w-checkboxes",code:!1},{default:n(()=>e[0]||(e[0]=[l("span",{class:"code"},"w-checkbox",-1),o(" & "),l("span",{class:"code"},"w-checkboxes",-1)])),_:1}),t(i),t(p)])}const Z={components:{Examples:Y,Api:Q}},ee=x(Z,[["render",X]]);export{ee as default};
