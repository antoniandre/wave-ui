import{N as e,W as t,bt as n,c as r,d as i,g as a,h as o,k as s,m as c}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as l}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{B as u,N as d,P as f}from"./index-C4VjH_oM.js";var p={class:`w-flex wrap my1`},m={class:`w-flex wrap my1`},h={class:`w-flex wrap my1`},g={class:`ml6`},_={class:`ml1`},v={class:`ml6`},y={class:`ml1`},b={class:`w-flex align-center`},x={class:`title3 ml8`},S={class:`ml1`},C={class:`w-flex align-center`},w={class:`title3 ml8`},T={class:`ml1`},E={class:`pr2`};function D(l,u,d,f,D,O){let k=e(`w-checkboxes`),A=e(`w-checkbox`),j=e(`w-card`),M=e(`title-link`),N=e(`w-flex`),P=e(`example`),F=e(`alert`),I=e(`w-icon`),L=e(`w-tag`),R=e(`w-button`);return s(),i(`div`,null,[a(j,{"bg-color":l.$store.state.darkMode?`grey-dark5`:`blue-light5`},{default:t(()=>[u[14]||=r(`p`,{class:`mb3`},`What it looks like:`,-1),a(k,{items:l.checkboxes1,inline:``},null,8,[`items`]),u[15]||=r(`div`,{class:`title4 mt4`},`States`,-1),r(`div`,null,[r(`div`,p,[a(A,{class:`mr3 mb1`,"model-value":!0,label:`Checked`}),a(A,{class:`mr3 mb1`,"model-value":!0,disabled:``,label:`Checked &amp; disabled`}),a(A,{class:`mr3 mb1`,"model-value":!0,readonly:``,label:`Checked &amp; readonly`})]),r(`div`,m,[a(A,{class:`mr3 mb1`,"model-value":!1,label:`Unchecked`}),a(A,{class:`mr3 mb1`,"model-value":!1,disabled:``,label:`Unchecked &amp; disabled`}),a(A,{class:`mr3 mb1`,"model-value":!1,readonly:``,label:`Unchecked &amp; readonly`})]),r(`div`,h,[a(A,{class:`mr3 mb1`,"model-value":!0,indeterminate:``,label:`Indeterminate`}),a(A,{class:`mr3 mb1`,"model-value":!0,disabled:``,indeterminate:``,label:`Indeterminate &amp; disabled`}),a(A,{class:`mr3 mb1`,"model-value":!0,readonly:``,indeterminate:``,label:`Indeterminate &amp; readonly`})])])]),_:1},8,[`bg-color`]),u[78]||=r(`p`,{class:`mt12`},[o(`There are 2 components: `),r(`span`,{class:`code`},`w-checkbox`),o(` & `),r(`span`,{class:`code`},`w-checkboxes`),o(`.
The later is a group of checkboxes for convenience.
`)],-1),u[79]||=r(`p`,null,[o(`In most cases what you need is the `),r(`span`,{class:`code`},`w-checkboxes`),o(` component below, but let's start with the
basic component as it might be useful in single checkboxes and edge cases.
`)],-1),a(M,{class:`title1 mt12`,h2:``,slug:`w-checkbox`},{default:t(()=>[...u[16]||=[o(`<w-checkbox>`,-1)]]),_:1}),u[80]||=r(`div`,{class:`w-divider`},null,-1),a(P,null,{html:t(()=>[...u[24]||=[o(`<div class="title4 mb2">Basic use</div>
<w-checkbox>Single option</w-checkbox>

<div class="title4 mt8 mb2">Using v-model on a single checkbox</div>
<w-flex class="align-center">
  <w-checkbox v-model="selection1">Single option</w-checkbox>

  <span class="ml6">
    v-model:
    <code class="ml1">`+n(`{{ selection1 }}`)+`</code>
  </span>
</w-flex>

<div class="title4 mt8 mb2">Using an array of v-model for multiple checkboxes</div>
<w-flex class="align-center">
  <w-checkbox class="mr2" v-model="selection2[0]">Option 1</w-checkbox>
  <w-checkbox class="mr2" v-model="selection2[1]">Option 2</w-checkbox>
  <w-checkbox v-model="selection2[2]">Option 3</w-checkbox>

  <span class="ml6">
    v-model:
    <code class="ml1">`+n(`{{ selection2 }}`)+`</code>
  </span>
</w-flex>`,-1)]]),js:t(()=>[...u[25]||=[o(`data: () => ({
  selection1: false,
  selection2: [false, false, false]
})
`,-1)]]),default:t(()=>[u[26]||=r(`div`,{class:`title4 mb2`},`Basic use`,-1),a(A,null,{default:t(()=>[...u[17]||=[o(`Single option`,-1)]]),_:1}),u[27]||=r(`div`,{class:`title4 mt8 mb2`},`Using v-model on a single checkbox`,-1),a(N,{class:`align-center`},{default:t(()=>[a(A,{modelValue:l.selection1,"onUpdate:modelValue":u[0]||=e=>l.selection1=e},{default:t(()=>[...u[18]||=[o(`Single option`,-1)]]),_:1},8,[`modelValue`]),r(`span`,g,[u[19]||=o(`v-model:`,-1),r(`code`,_,n(l.selection1),1)])]),_:1}),u[28]||=r(`div`,{class:`title4 mt8 mb2`},`Using an array of v-model for multiple checkboxes`,-1),a(N,{class:`align-center`},{default:t(()=>[a(A,{class:`mr2`,modelValue:l.selection2[0],"onUpdate:modelValue":u[1]||=e=>l.selection2[0]=e},{default:t(()=>[...u[20]||=[o(`Option 1`,-1)]]),_:1},8,[`modelValue`]),a(A,{class:`mr2`,modelValue:l.selection2[1],"onUpdate:modelValue":u[2]||=e=>l.selection2[1]=e},{default:t(()=>[...u[21]||=[o(`Option 2`,-1)]]),_:1},8,[`modelValue`]),a(A,{modelValue:l.selection2[2],"onUpdate:modelValue":u[3]||=e=>l.selection2[2]=e},{default:t(()=>[...u[22]||=[o(`Option 3`,-1)]]),_:1},8,[`modelValue`]),r(`span`,v,[u[23]||=o(`v-model:`,-1),r(`code`,y,n(l.selection2),1)])]),_:1})]),_:1}),a(F,{info:``},{default:t(()=>[...u[29]||=[o(`Unlike the radio buttons, checkboxes don't need the `,-1),r(`code`,null,`name`,-1),o(` prop in addition to the `,-1),r(`code`,null,`v-model`,-1),o(`
to work together and control with arrow keys since the default HTML behavior does not include control from
the keyboard arrows (you can navigate with `,-1),r(`kbd`,null,`tab`,-1),o(` and toggle with `,-1),r(`kbd`,null,`space`,-1),o(` or `,-1),r(`kbd`,null,`enter`,-1),o(`).`,-1),r(`br`,null,null,-1),o(`
When you use a group of checkboxes via <w-checkboxes>, Wave UI will add the name attributes for you.
`,-1)]]),_:1}),a(F,{tip:``},{default:t(()=>[...u[30]||=[r(`strong`,{class:`title5`},`Form validation`,-1),r(`p`,null,[o(`When a validation is needed on checkboxes, each individual checkbox (`),r(`span`,{class:`code`},`w-checkbox`),o(`) has a
separate validation message.`),r(`br`),o(`
If you want only one validation for a group of checkboxes you must use the `),r(`span`,{class:`code`},`w-checkboxes`),o(` component.
`)],-1)]]),_:1}),a(M,{h2:``},{default:t(()=>[...u[31]||=[o(`Custom label in w-checkbox`,-1)]]),_:1}),u[81]||=r(`p`,null,[r(`code`,null,`w-checkbox`),o(` provides a default slot to customize the content.`)],-1),a(P,{"content-class":`mt3`},{html:t(()=>[...u[36]||=[o(`<w-checkbox class="mr5" name="checkbox1">
  <span class="pr1">Choice 1 has an icon</span>
  <w-icon md>mdi mdi-star</w-icon>
</w-checkbox>

<w-checkbox name="checkbox1">
  <w-tag bg-color="green-light5" color="green-dark2">
    Choice 2 is a tag
    <w-icon class="ml1">mdi mdi-heart</w-icon>
  </w-tag>
</w-checkbox>
`,-1)]]),default:t(()=>[a(A,{class:`mr5`,name:`checkbox4`},{default:t(()=>[u[33]||=r(`span`,{class:`pr1`},`Choice 1 has an icon`,-1),a(I,{md:``},{default:t(()=>[...u[32]||=[o(`mdi mdi-star`,-1)]]),_:1})]),_:1}),a(A,{name:`checkbox4`},{default:t(()=>[a(L,{"bg-color":`green-light5`,color:`green-dark2`},{default:t(()=>[u[35]||=o(`Choice 2 is a tag`,-1),a(I,{class:`ml1`},{default:t(()=>[...u[34]||=[o(`mdi mdi-heart`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(F,{class:`mt8`,tip:``},{default:t(()=>[...u[37]||=[o(`As seen in this example, the `,-1),r(`span`,{class:`code`},`w-checkbox`,-1),o(` component allows you to have complete freedom
regarding your checkboxes content, style and layout.`,-1),r(`br`,null,null,-1),o(`
But because in most cases you won't need that, the `,-1),r(`span`,{class:`code`},`w-checkboxes`,-1),o(` component will make you
go much faster.
`,-1)]]),_:1}),a(M,{class:`title1 mt12`,h2:``,slug:`w-checkboxes`},{default:t(()=>[...u[38]||=[o(`<w-checkboxes>`,-1)]]),_:1}),u[82]||=r(`div`,{class:`w-divider`},null,-1),u[83]||=r(`p`,{class:`my5`},[o(`The `),r(`span`,{class:`code`},`w-checkboxes`),o(` component allows a fast and easy rendering of
multiple checkboxes by passing the items through a prop.`),r(`br`),o(`
It accepts an inline parameter to display the checkboxes inline,
and allows you to customize the label of each checkbox through slot.
`)],-1),a(M,{class:`title2 primary`,h3:``},{default:t(()=>[...u[39]||=[o(`V-model`,-1)]]),_:1}),a(F,{info:``},{default:t(()=>[...u[40]||=[o(`If a value is set in the choice's data, it will be returned through the v-model when selected.`,-1),r(`br`,null,null,-1),o(`
If no value is set, the choice's label will be returned instead.`,-1)]]),_:1}),a(P,null,{html:t(()=>[...u[42]||=[o(`<div class="w-flex align-center">
  <w-checkboxes v-model="selection" :items="checkboxes"></w-checkboxes>
  <div class="title3 ml8">v-model: `+n(`{{ selection || '[]' }}`)+`</div>
</div>`,-1)]]),js:t(()=>[...u[43]||=[o(`data: () => ({
  selection: [],
  checkboxes: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`,-1)]]),default:t(()=>[r(`div`,b,[a(k,{modelValue:l.selection1b,"onUpdate:modelValue":u[4]||=e=>l.selection1b=e,items:l.checkboxes1},null,8,[`modelValue`,`items`]),r(`div`,x,[u[41]||=o(`v-model:`,-1),r(`code`,S,n(l.selection1b||`[]`),1)])])]),_:1}),u[84]||=r(`p`,null,`The v-model can also be preset, or updated externally.`,-1),a(P,null,{html:t(()=>[...u[46]||=[o(`<div class="w-flex align-center">
  <div>
    <w-checkboxes v-model="selection" :items="checkboxes"></w-checkboxes>
    <w-button class="mt2" @click="selection = selection.length ? [] : [2]">
      Toggle checkbox 2
    </w-button>
  </div>

  <div class="title3 ml8">
    v-model:
    <code class="ml1">`+n(`{{ selection || '[]' }}`)+`</code>
  </div>
</div>`,-1)]]),js:t(()=>[...u[47]||=[o(`data: () => ({
  selection: [],
  checkboxes: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`,-1)]]),default:t(()=>[r(`div`,C,[r(`div`,null,[a(k,{modelValue:l.selection3,"onUpdate:modelValue":u[5]||=e=>l.selection3=e,items:l.checkboxes1},null,8,[`modelValue`,`items`]),a(R,{class:`mt2`,onClick:u[6]||=e=>l.selection3=l.selection3.length?[]:[2]},{default:t(()=>[...u[44]||=[o(`Toggle checkbox 2`,-1)]]),_:1})]),r(`div`,w,[u[45]||=o(`v-model:`,-1),r(`code`,T,n(l.selection3||`[]`),1)])])]),_:1}),a(M,{h2:``},{default:t(()=>[...u[48]||=[o(`Layout`,-1)]]),_:1}),a(P,null,{html:t(()=>[...u[49]||=[o(`<div class="title4 mb2">Default column layout</div>
<w-checkboxes :items="checkboxes"></w-checkboxes>

<div class="title4 mt6 mb2">Inline layout</div>
<w-checkboxes :items="checkboxes" inline></w-checkboxes>`,-1)]]),js:t(()=>[...u[50]||=[o(`data: () => ({
  checkboxes: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`,-1)]]),default:t(()=>[u[51]||=r(`div`,{class:`title4 mb2`},`Default column layout`,-1),a(k,{items:l.checkboxes1},null,8,[`items`]),u[52]||=r(`div`,{class:`title4 mt6 mb2`},`Inline layout`,-1),a(k,{items:l.checkboxes1,inline:``},null,8,[`items`])]),_:1}),a(M,{h2:``},{default:t(()=>[...u[53]||=[o(`Custom label content`,-1)]]),_:1}),u[85]||=r(`p`,null,[r(`span`,{class:`code`},`w-checkboxes`),o(` provides a slot to customize the label of each checkbox button: `),r(`code`,null,`item`),o(`.`)],-1),a(P,null,{html:t(()=>[...u[54]||=[o(`<w-checkboxes :items="checkboxes" color="green">
  <template #item="{ item }">
    <span class="pr2">`+n(`{{ item.label }}`)+`</span>
    <w-icon class="deep-purple">`+n(`{{ item.icon }}`)+`</w-icon>
  </template>
</w-checkboxes>`,-1)]]),js:t(()=>[...u[55]||=[o(`data: () => ({
  checkboxes: [
    { label: 'Square', icon: 'mdi mdi-square' },
    { label: 'Circle', icon: 'mdi mdi-circle' },
    { label: 'Triangle', icon: 'mdi mdi-triangle' }
  ]
})
`,-1)]]),default:t(()=>[a(k,{items:l.checkboxes3,color:`green`},{item:t(({item:e})=>[r(`span`,E,n(e.label),1),a(I,{class:`deep-purple`},{default:t(()=>[o(n(e.icon),1)]),_:2},1024)]),_:1},8,[`items`])]),_:1}),u[86]||=r(`div`,{class:`w-divider grey-light5 my12`},null,-1),a(M,{h2:``},{default:t(()=>[...u[56]||=[o(`Round checkboxes`,-1)]]),_:1}),a(P,{"content-class":`mt3`},{html:t(()=>[...u[57]||=[o(`<w-checkboxes
  v-model="selection"
  :items="checkboxes"
  round
  inline>
</w-checkboxes>`,-1)]]),js:t(()=>[...u[58]||=[o(`data: () => ({
  selection: [1],
  checkboxes: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`,-1)]]),default:t(()=>[a(k,{modelValue:l.selection8,"onUpdate:modelValue":u[7]||=e=>l.selection8=e,items:l.checkboxes1,round:``,inline:``},null,8,[`modelValue`,`items`])]),_:1}),a(M,{h2:``},{default:t(()=>[...u[59]||=[o(`Color`,-1)]]),_:1}),u[87]||=r(`p`,null,[o(`By default the `),r(`span`,{class:`code`},`w-checkbox`),o(` & `),r(`span`,{class:`code`},`w-checkboxes`),o(` components will use the
primary color.`),r(`br`),o(`
You can provide a different color with the `),r(`code`,null,`color`),o(` option, or you can even set a different
color per item by providing a `),r(`code`,null,`color`),o(` attribute in each of the item objects.
`)],-1),a(M,{h3:``,slug:`w-checkboxes--colors`},{default:t(()=>[...u[60]||=[r(`span`,{class:`code`},`w-checkboxes`,-1),o(` colors`,-1)]]),_:1}),a(P,null,{html:t(()=>[...u[61]||=[o(`<w-checkboxes
  v-model="selection1"
  :items="checkboxes1"
  color="purple">
</w-checkboxes>

<div class="title4 mt8 mb2">Different color per item</div>
<w-checkboxes
  v-model="selection2"
  :items="checkboxes2">
</w-checkboxes>`,-1)]]),js:t(()=>[...u[62]||=[o(`data: () => ({
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
})`,-1)]]),default:t(()=>[a(k,{modelValue:l.selection4,"onUpdate:modelValue":u[8]||=e=>l.selection4=e,items:l.checkboxes1,color:`purple`},null,8,[`modelValue`,`items`]),u[63]||=r(`div`,{class:`title4 mt8 mb2`},`Different color per item`,-1),a(k,{modelValue:l.selection7,"onUpdate:modelValue":u[9]||=e=>l.selection7=e,items:l.checkboxes4},null,8,[`modelValue`,`items`])]),_:1}),a(M,{h3:``,slug:`w-checkbox--colors`},{default:t(()=>[...u[64]||=[r(`span`,{class:`code`},`w-checkbox`,-1),o(` colors`,-1)]]),_:1}),a(P,null,{html:t(()=>[...u[69]||=[o(`<w-checkbox
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
</w-checkbox>`,-1)]]),js:t(()=>[...u[70]||=[o(`data: () => ({
  selection1: [true, true],
  selection2: [true, true],
  checkboxes: [
    { label: 'Choice 1' },
    { label: 'Choice 2' },
    { label: 'Choice 3' }
  ]
})
`,-1)]]),default:t(()=>[a(A,{class:`mr2`,modelValue:l.selection5[0],"onUpdate:modelValue":u[10]||=e=>l.selection5[0]=e,color:`teal-light1`},{default:t(()=>[...u[65]||=[o(`Option 1`,-1)]]),_:1},8,[`modelValue`]),a(A,{modelValue:l.selection5[1],"onUpdate:modelValue":u[11]||=e=>l.selection5[1]=e,color:`teal-light1`},{default:t(()=>[...u[66]||=[o(`Option 2`,-1)]]),_:1},8,[`modelValue`]),u[71]||=r(`div`,{class:`title4 mt8 mb2`},`Different color per item`,-1),a(A,{class:`mr2`,modelValue:l.selection6[0],"onUpdate:modelValue":u[12]||=e=>l.selection6[0]=e,color:`pink-light3`},{default:t(()=>[...u[67]||=[o(`Option 1`,-1)]]),_:1},8,[`modelValue`]),a(A,{modelValue:l.selection6[1],"onUpdate:modelValue":u[13]||=e=>l.selection6[1]=e,color:`blue-light1`},{default:t(()=>[...u[68]||=[o(`Option 2`,-1)]]),_:1},8,[`modelValue`])]),_:1}),a(M,{h2:``},{default:t(()=>[...u[72]||=[o(`Sizes`,-1)]]),_:1}),u[88]||=c(`<p>The checkbox size can be controlled with the preset size props <code>xs</code>, <code>sm</code>, <code>md</code>,
<code>lg</code> and <code>xl</code>, or directly via the CSS variable <code>--w-size</code>.</p><p>Individual checkboxes:</p>`,2),a(P,{"content-class":`align-center`},{pug:t(()=>[...u[73]||=[o(`w-checkbox.ma2(xs :model-value="true" label="xs")
w-checkbox.ma2(sm :model-value="true" label="sm")
w-checkbox.ma2(md :model-value="true" label="md")
w-checkbox.ma2(lg :model-value="true" label="lg")
w-checkbox.ma2(xl :model-value="true" label="xl")`,-1)]]),html:t(()=>[...u[74]||=[o(`<w-checkbox class="ma2" xs :model-value="true" label="xs"></w-checkbox>
<w-checkbox class="ma2" sm :model-value="true" label="sm"></w-checkbox>
<w-checkbox class="ma2" md :model-value="true" label="md"></w-checkbox>
<w-checkbox class="ma2" lg :model-value="true" label="lg"></w-checkbox>
<w-checkbox class="ma2" xl :model-value="true" label="xl"></w-checkbox>
`,-1)]]),default:t(()=>[a(A,{class:`ma2`,xs:``,"model-value":!0,label:`xs`}),a(A,{class:`ma2`,sm:``,"model-value":!0,label:`sm`}),a(A,{class:`ma2`,md:``,"model-value":!0,label:`md`}),a(A,{class:`ma2`,lg:``,"model-value":!0,label:`lg`}),a(A,{class:`ma2`,xl:``,"model-value":!0,label:`xl`})]),_:1}),u[89]||=r(`p`,null,[o(`Checkbox groups via `),r(`code`,null,`w-checkboxes`),o(`:`)],-1),a(P,{"content-class":`align-center w-flex column`},{pug:t(()=>[...u[75]||=[o(`w-checkboxes.mb3(xs :items="items" :model-value="[1, 2, 3]" inline)
w-checkboxes.mb3(sm :items="items" :model-value="[1, 2, 3]" inline)
w-checkboxes.mb3(md :items="items" :model-value="[1, 2, 3]" inline)
w-checkboxes.mb3(lg :items="items" :model-value="[1, 2, 3]" inline)
w-checkboxes(xl :items="items" :model-value="[1, 2, 3]" inline)`,-1)]]),html:t(()=>[...u[76]||=[o(`<w-checkboxes class="mb3" xs :items="items" :model-value="[1, 2, 3]" inline></w-checkboxes>
<w-checkboxes class="mb3" sm :items="items" :model-value="[1, 2, 3]" inline></w-checkboxes>
<w-checkboxes class="mb3" md :items="items" :model-value="[1, 2, 3]" inline></w-checkboxes>
<w-checkboxes class="mb3" lg :items="items" :model-value="[1, 2, 3]" inline></w-checkboxes>
<w-checkboxes xl :items="items" :model-value="[1, 2, 3]" inline></w-checkboxes>`,-1)]]),js:t(()=>[...u[77]||=[o(`data: () => ({
  items: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})`,-1)]]),default:t(()=>[a(k,{class:`mb3`,xs:``,items:l.checkboxes1,"model-value":[1,2,3],inline:``},null,8,[`items`]),a(k,{class:`mb3`,sm:``,items:l.checkboxes1,"model-value":[1,2,3],inline:``},null,8,[`items`]),a(k,{class:`mb3`,md:``,items:l.checkboxes1,"model-value":[1,2,3],inline:``},null,8,[`items`]),a(k,{class:`mb3`,lg:``,items:l.checkboxes1,"model-value":[1,2,3],inline:``},null,8,[`items`]),a(k,{xl:``,items:l.checkboxes1,"model-value":[1,2,3],inline:``},null,8,[`items`])]),_:1})])}var O=l({data:()=>({selection1:!1,selection1b:[],selection2:[!1,!1,!1],selection3:[2],selection4:[1,2,3],selection5:[!0,!0],selection6:[!0,!0],selection7:[1,2,3],selection8:[1],checkboxes1:[{label:`Choice 1`,value:1},{label:`Choice 2`,value:2},{label:`Choice 3`,value:3}],checkboxes2:[{label:`Choice 1`},{label:`Choice 2`},{label:`Choice 3`},{label:`Choice 4`}],checkboxes3:[{label:`Square`,icon:`mdi mdi-square`},{label:`Circle`,icon:`mdi mdi-circle`},{label:`Triangle`,icon:`mdi mdi-triangle`}],checkboxes4:[{label:`Choice 1`,value:1,color:`amber`},{label:`Choice 2`,value:2,color:`warning`},{label:`Choice 3`,value:3,color:`error`}]})},[[`render`,D]]);function k(n,c,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return s(),i(`div`,null,[c[2]||=r(`a`,{id:`api`,name:`api`},null,-1),c[3]||=r(`div`,{class:`w-divider my12`},null,-1),a(p,{class:`title1`,h2:``,slug:`w-checkboxes-api`},{default:t(()=>[...c[0]||=[o(`<w-checkboxes> API`,-1)]]),_:1}),a(m,{class:`mt0`,items:f.checkboxesProps,descriptions:n.checkboxes.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),a(m,{items:n.checkboxes.slots,title:`Slots`},null,8,[`items`]),a(m,{items:f.checkboxesEvents,title:`Events`},null,8,[`items`]),a(m,{items:n.checkboxes.methods,title:`Methods`},null,8,[`items`]),c[4]||=r(`div`,{class:`w-divider my12`},null,-1),a(p,{class:`title1`,h2:``,slug:`w-checkbox-api`},{default:t(()=>[...c[1]||=[o(`<w-checkbox> API`,-1)]]),_:1}),a(m,{class:`mt0`,items:f.checkboxProps,descriptions:n.checkbox.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),a(m,{items:n.checkbox.slots,title:`Slots`},null,8,[`items`]),a(m,{items:f.checkboxEvents,title:`Events`},null,8,[`items`]),a(m,{items:n.checkbox.methods,title:`Methods`},null,8,[`items`])])}var A={propsDescs:{id:`Present on the wrapper for API consistency; each inner <code>w-checkbox</code> gets its own stable <code>id</code> automatically (SSR-safe). Use <code>name</code> for the shared HTML <code>name</code> on every checkbox.`,items:`An array of checkbox items to display. Each item object should contain at least a <code>label</code> or a <code>value</code> attribute.`,modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide an array of values to dictate the checked state of all the checkboxes.<br>This value gets updated when using a v-model.`,returnValues:`When set to <code>true</code>, the return value of the w-checkboxes component will be an array of <code>returnValue</code>s of each item that is checked. If set to false and by default, the return value will be an array of booleans.`,labelOnLeft:`Moves the label to the left of each checkbox.`,itemLabelKey:`The property name (aka "key") in each item object where to find the label of the item (if any).`,itemValueKey:`The property name (aka "key") in each item object where to find the value of the item (if any).`,itemColorKey:`The property name (aka "key") in each item object where to find the color of the item (if any).`,inline:`Displays all the checkboxes inline instead of in column.`,round:`Displays round checkboxes instead of square ones.`,color:`Applies a color to the active checkbox. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the checkboxes labels. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,name:`Provide a native HTML <code>name</code> attribute shared by every checkbox in the group. If omitted, a unique shared name is generated (SSR-safe).`,disabled:`Disables all the checkboxes making them unreactive to user interactions.`,readonly:`The checkbox will still look like an interactive checkbox except that it is read-only: its current value cannot be changed by user interaction.`,required:`Applies the native HTML <code>required</code> attribute to each checkbox.`,validators:`<span class="deep-orange">Only for validation, when the <strong class="code">w-checkboxes</strong> component is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the checkbox. Each function will be executed on checkbox   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the checkbox.`,noBlurValidation:`<span class="deep-orange">Only when the group is in a <strong class="code">w-form</strong> with <code>validators</code>.</span><br>When <code>true</code>, blur does not validate this field. When <code>false</code>, blur always validates even if the form has <code>no-blur-validation</code>. When unset, inherit the form setting.`,xs:`Sets all checkboxes to extra small (~12 px at 14 px base font size) via the cascading <code>--w-size</code> CSS variable.`,sm:`Sets all checkboxes to small (~16 px at 14 px base font size) via the cascading <code>--w-size</code> CSS variable.`,md:`Sets all checkboxes to medium, which is the same as the default size (~18 px at 14 px base font size).`,lg:`Sets all checkboxes to large (~20 px at 14 px base font size) via the cascading <code>--w-size</code> CSS variable.`,xl:`Sets all checkboxes to extra large (~24 px at 14 px base font size) via the cascading <code>--w-size</code> CSS variable.`},slots:{item:{description:`Provide a custom content for each checkbox label.`,params:{item:`The current item object.`,index:`The item index in the array of radios. Starts at 1 to be consistent with the <code>item.x</code> slot.`,checked:`A boolean representing the checked state of this particular item.`}},"item.x":{description:`<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single item: the item at the index <em class="code">x</em>.`,params:{item:`The current item object.`,index:`The item index in the array of radios. Starts at 1 to be consistent with the slot name.`,checked:`A boolean representing the checked state of this particular item.`}}},events:{input:{description:`Emitted each time any of the checkboxes is toggled.<br>Updates the v-model value in Vue 2.x only.`,params:{"[Array]":`Array of <code>return-value</code> of each checked checkbox.<br>The <code>return-value</code> is one of the following attributes, if they exist, in this order: the item value, the item label, the item index.`}},"update:modelValue":{description:`Emitted each time any of the checkboxes is toggled.<br>Updates the v-model value in Vue 3 only.`,params:{"[Array]":`Array of <code>return-value</code> of each checked checkbox.<br>The <code>return-value</code> is one of the following attributes, if they exist, in this order: the item value, the item label, the item index.`}},focus:{description:`Emitted on each checkbox focus.`,params:{"[DOM event object]":`The associated focus DOM event.`}}},methods:{focus:{description:`Focuses the first enabled child control. Also runs when <code>v-focus</code> is used. No-op when the group is <code>disabled</code> or <code>readonly</code>.`}}},j={propsDescs:{id:`Sets the native HTML <code>id</code> and ties it to adjacent <code>&lt;label for&gt;</code> bindings. If omitted, Wave UI generates a stable id.`,modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide a boolean to dictate the checked state the checkbox.<br>This value gets updated when using a v-model.`,returnValue:`Since the native HTML checkbox element uses the <code>value</code> attribute to define the checked state, the <code>return-value</code> prop let you specify a value to return to the <code>v-model</code> when the checkbox is checked (instead of returning <code>true</code>).`,label:`Sets a visible label for the checkbox.`,labelOnLeft:`Moves the label to the left of the checkbox. By default the label is displayed on the right.`,color:`Applies a color to the checkbox when active. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the checkbox's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,noRipple:`Removes the ripple animation on check.`,indeterminate:`Applies an indeterminate state on the checkbox. E.g. when it represents the selected state of a collection of elements where some are checked and some not.`,round:`Displays a round checkbox instead of a square one.`,name:`Provide a native HTML <code>name</code> attribute to the checkbox. If omitted, a unique value is generated with the same stable mechanism as the default id (SSR-safe).`,disabled:`Disables the checkbox making it unreactive to user interactions.`,readonly:`The checkbox will still look like an interactive checkbox except that it is read-only: its current value cannot be changed by user interaction.`,required:`Applies the native HTML <code>required</code> attribute to the checkbox.`,validators:`<span class="deep-orange">Only for validation, when the checkbox is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the checkbox. Each function will be executed on checkbox   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the checkbox.`,noBlurValidation:`<span class="deep-orange">Only when the checkbox is in a <strong class="code">w-form</strong> with <code>validators</code>.</span><br>When <code>true</code>, blur does not validate this field. When <code>false</code>, blur always validates even if the form has <code>no-blur-validation</code>. When unset, inherit the form setting.`,xs:`Sets the checkbox size to extra small (~12 px at 14 px base font size).<br>Equivalent to setting the CSS variable <code>--w-size</code> to the corresponding value.`,sm:`Sets the checkbox size to small (~16 px at 14 px base font size).<br>Equivalent to setting the CSS variable <code>--w-size</code> to the corresponding value.`,md:`Sets the checkbox size to medium, which is the same as the default size (~18 px at 14 px base font size).`,lg:`Sets the checkbox size to large (~20 px at 14 px base font size).<br>Equivalent to setting the CSS variable <code>--w-size</code> to the corresponding value.`,xl:`Sets the checkbox size to extra large (~24 px at 14 px base font size).<br>Equivalent to setting the CSS variable <code>--w-size</code> to the corresponding value.`},slots:{default:{description:`The checkbox label content.`}},events:{input:{description:`Emitted each time the state of the checkbox changes.<br>Updates the v-model value in Vue 2.x only.`,params:{"[Boolean]":`The current state of the checkbox.`}},"update:modelValue":{description:`Emitted each time the state of the checkbox changes.<br>Updates the v-model value in Vue 3 only.`,params:{"[Boolean]":`The current state of the checkbox.`}},focus:{description:`Emitted on each checkbox focus.`,params:{"[DOM event object]":`The associated focus DOM event.`}}},methods:{focus:{description:`Focuses the inner native control. Also runs when the <code>v-focus</code> directive is used. Callable via <code>this.$refs.field.focus()</code>. No-op when <code>disabled</code> or <code>readonly</code>.`}}},M=l({data:()=>({checkboxes:A,checkbox:j}),computed:{checkboxesProps(){return{...d.props,...u.props}},checkboxProps(){return{...f.props,...u.props}},checkboxesEvents(){return d.emits.reduce((e,t)=>(e[t]=A.events[t]||{},e),{})},checkboxEvents(){return f.emits.reduce((e,t)=>(e[t]=j.events[t]||{},e),{})}}},[[`render`,k]]);function N(n,c,l,u,d,f){let p=e(`ui-component-title`),m=e(`examples`),h=e(`api`);return s(),i(`main`,null,[a(p,{slug:`w-checkbox-and-w-checkboxes`,code:!1},{default:t(()=>[...c[0]||=[r(`span`,{class:`code`},`w-checkbox`,-1),o(` & `,-1),r(`span`,{class:`code`},`w-checkboxes`,-1)]]),_:1}),a(m),a(h)])}var P=l({components:{Examples:O,Api:M}},[[`render`,N]]);export{P as default};