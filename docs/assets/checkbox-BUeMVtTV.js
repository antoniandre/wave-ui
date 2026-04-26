import{N as e,W as t,bt as n,c as r,d as i,g as a,h as o,k as s}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as c}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{F as l,N as u,P as d}from"./index-D3Rumh9E.js";var f={class:`w-flex wrap my1`},p={class:`w-flex wrap my1`},m={class:`w-flex wrap my1`},h={class:`ml6`},g={class:`ml1`},_={class:`ml6`},v={class:`ml1`},y={class:`w-flex align-center`},b={class:`title3 ml8`},x={class:`ml1`},S={class:`w-flex align-center`},C={class:`title3 ml8`},w={class:`ml1`},T={class:`pr2`};function E(c,l,u,d,E,D){let O=e(`w-checkboxes`),k=e(`w-checkbox`),A=e(`w-card`),j=e(`title-link`),M=e(`w-flex`),N=e(`example`),P=e(`alert`),F=e(`w-icon`),I=e(`w-tag`),L=e(`w-button`);return s(),i(`div`,null,[a(A,{"bg-color":c.$store.state.darkMode?`grey-dark5`:`blue-light5`},{default:t(()=>[l[14]||=r(`p`,{class:`mb3`},`What it looks like:`,-1),a(O,{items:c.checkboxes1,inline:``},null,8,[`items`]),l[15]||=r(`div`,{class:`title4 mt4`},`States`,-1),r(`div`,null,[r(`div`,f,[a(k,{class:`mr3 mb1`,"model-value":!0,label:`Checked`}),a(k,{class:`mr3 mb1`,"model-value":!0,disabled:``,label:`Checked &amp; disabled`}),a(k,{class:`mr3 mb1`,"model-value":!0,readonly:``,label:`Checked &amp; readonly`})]),r(`div`,p,[a(k,{class:`mr3 mb1`,"model-value":!1,label:`Unchecked`}),a(k,{class:`mr3 mb1`,"model-value":!1,disabled:``,label:`Unchecked &amp; disabled`}),a(k,{class:`mr3 mb1`,"model-value":!1,readonly:``,label:`Unchecked &amp; readonly`})]),r(`div`,m,[a(k,{class:`mr3 mb1`,"model-value":!0,indeterminate:``,label:`Indeterminate`}),a(k,{class:`mr3 mb1`,"model-value":!0,disabled:``,indeterminate:``,label:`Indeterminate &amp; disabled`}),a(k,{class:`mr3 mb1`,"model-value":!0,readonly:``,indeterminate:``,label:`Indeterminate &amp; readonly`})])])]),_:1},8,[`bg-color`]),l[72]||=r(`p`,{class:`mt12`},[o(`There are 2 components: `),r(`span`,{class:`code`},`w-checkbox`),o(` & `),r(`span`,{class:`code`},`w-checkboxes`),o(`.
The later is a group of checkboxes for convenience.
`)],-1),l[73]||=r(`p`,null,[o(`In most cases what you need is the `),r(`span`,{class:`code`},`w-checkboxes`),o(` component below, but let's start with the
basic component as it might be useful in single checkboxes and edge cases.
`)],-1),a(j,{class:`title1 mt12`,h2:``,slug:`w-checkbox`},{default:t(()=>[...l[16]||=[o(`<w-checkbox>`,-1)]]),_:1}),l[74]||=r(`div`,{class:`w-divider`},null,-1),a(N,null,{html:t(()=>[...l[24]||=[o(`<div class="title4 mb2">Basic use</div>
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
</w-flex>`,-1)]]),js:t(()=>[...l[25]||=[o(`data: () => ({
  selection1: false,
  selection2: [false, false, false]
})
`,-1)]]),default:t(()=>[l[26]||=r(`div`,{class:`title4 mb2`},`Basic use`,-1),a(k,null,{default:t(()=>[...l[17]||=[o(`Single option`,-1)]]),_:1}),l[27]||=r(`div`,{class:`title4 mt8 mb2`},`Using v-model on a single checkbox`,-1),a(M,{class:`align-center`},{default:t(()=>[a(k,{modelValue:c.selection1,"onUpdate:modelValue":l[0]||=e=>c.selection1=e},{default:t(()=>[...l[18]||=[o(`Single option`,-1)]]),_:1},8,[`modelValue`]),r(`span`,h,[l[19]||=o(`v-model:`,-1),r(`code`,g,n(c.selection1),1)])]),_:1}),l[28]||=r(`div`,{class:`title4 mt8 mb2`},`Using an array of v-model for multiple checkboxes`,-1),a(M,{class:`align-center`},{default:t(()=>[a(k,{class:`mr2`,modelValue:c.selection2[0],"onUpdate:modelValue":l[1]||=e=>c.selection2[0]=e},{default:t(()=>[...l[20]||=[o(`Option 1`,-1)]]),_:1},8,[`modelValue`]),a(k,{class:`mr2`,modelValue:c.selection2[1],"onUpdate:modelValue":l[2]||=e=>c.selection2[1]=e},{default:t(()=>[...l[21]||=[o(`Option 2`,-1)]]),_:1},8,[`modelValue`]),a(k,{modelValue:c.selection2[2],"onUpdate:modelValue":l[3]||=e=>c.selection2[2]=e},{default:t(()=>[...l[22]||=[o(`Option 3`,-1)]]),_:1},8,[`modelValue`]),r(`span`,_,[l[23]||=o(`v-model:`,-1),r(`code`,v,n(c.selection2),1)])]),_:1})]),_:1}),a(P,{info:``},{default:t(()=>[...l[29]||=[o(`Unlike the radio buttons, checkboxes don't need the `,-1),r(`code`,null,`name`,-1),o(` prop in addition to the `,-1),r(`code`,null,`v-model`,-1),o(`
to work together and control with arrow keys since the default HTML behavior does not include control from
the keyboard arrows (you can navigate with `,-1),r(`kbd`,null,`tab`,-1),o(` and toggle with `,-1),r(`kbd`,null,`space`,-1),o(` or `,-1),r(`kbd`,null,`enter`,-1),o(`).`,-1),r(`br`,null,null,-1),o(`
When you use a group of checkboxes via <w-checkboxes>, Wave UI will add the name attributes for you.
`,-1)]]),_:1}),a(P,{tip:``},{default:t(()=>[...l[30]||=[r(`strong`,{class:`title5`},`Form validation`,-1),r(`p`,null,[o(`When a validation is needed on checkboxes, each individual checkbox (`),r(`span`,{class:`code`},`w-checkbox`),o(`) has a
separate validation message.`),r(`br`),o(`
If you want only one validation for a group of checkboxes you must use the `),r(`span`,{class:`code`},`w-checkboxes`),o(` component.
`)],-1)]]),_:1}),a(j,{h2:``},{default:t(()=>[...l[31]||=[o(`Custom label in w-checkbox`,-1)]]),_:1}),l[75]||=r(`p`,null,[r(`code`,null,`w-checkbox`),o(` provides a default slot to customize the content.`)],-1),a(N,{"content-class":`mt3`},{html:t(()=>[...l[36]||=[o(`<w-checkbox class="mr5" name="checkbox1">
  <span class="pr1">Choice 1 has an icon</span>
  <w-icon md>mdi mdi-star</w-icon>
</w-checkbox>

<w-checkbox name="checkbox1">
  <w-tag bg-color="green-light5" color="green-dark2">
    Choice 2 is a tag
    <w-icon class="ml1">mdi mdi-heart</w-icon>
  </w-tag>
</w-checkbox>
`,-1)]]),default:t(()=>[a(k,{class:`mr5`,name:`checkbox4`},{default:t(()=>[l[33]||=r(`span`,{class:`pr1`},`Choice 1 has an icon`,-1),a(F,{md:``},{default:t(()=>[...l[32]||=[o(`mdi mdi-star`,-1)]]),_:1})]),_:1}),a(k,{name:`checkbox4`},{default:t(()=>[a(I,{"bg-color":`green-light5`,color:`green-dark2`},{default:t(()=>[l[35]||=o(`Choice 2 is a tag`,-1),a(F,{class:`ml1`},{default:t(()=>[...l[34]||=[o(`mdi mdi-heart`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(P,{class:`mt8`,tip:``},{default:t(()=>[...l[37]||=[o(`As seen in this example, the `,-1),r(`span`,{class:`code`},`w-checkbox`,-1),o(` component allows you to have complete freedom
regarding your checkboxes content, style and layout.`,-1),r(`br`,null,null,-1),o(`
But because in most cases you won't need that, the `,-1),r(`span`,{class:`code`},`w-checkboxes`,-1),o(` component will make you
go much faster.
`,-1)]]),_:1}),a(j,{class:`title1 mt12`,h2:``,slug:`w-checkboxes`},{default:t(()=>[...l[38]||=[o(`<w-checkboxes>`,-1)]]),_:1}),l[76]||=r(`div`,{class:`w-divider`},null,-1),l[77]||=r(`p`,{class:`my5`},[o(`The `),r(`span`,{class:`code`},`w-checkboxes`),o(` component allows a fast and easy rendering of
multiple checkboxes by passing the items through a prop.`),r(`br`),o(`
It accepts an inline parameter to display the checkboxes inline,
and allows you to customize the label of each checkbox through slot.
`)],-1),a(j,{class:`title2 primary`,h3:``},{default:t(()=>[...l[39]||=[o(`V-model`,-1)]]),_:1}),a(P,{info:``},{default:t(()=>[...l[40]||=[o(`If a value is set in the choice's data, it will be returned through the v-model when selected.`,-1),r(`br`,null,null,-1),o(`
If no value is set, the choice's label will be returned instead.`,-1)]]),_:1}),a(N,null,{html:t(()=>[...l[42]||=[o(`<div class="w-flex align-center">
  <w-checkboxes v-model="selection" :items="checkboxes"></w-checkboxes>
  <div class="title3 ml8">v-model: `+n(`{{ selection || '[]' }}`)+`</div>
</div>`,-1)]]),js:t(()=>[...l[43]||=[o(`data: () => ({
  selection: [],
  checkboxes: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`,-1)]]),default:t(()=>[r(`div`,y,[a(O,{modelValue:c.selection1b,"onUpdate:modelValue":l[4]||=e=>c.selection1b=e,items:c.checkboxes1},null,8,[`modelValue`,`items`]),r(`div`,b,[l[41]||=o(`v-model:`,-1),r(`code`,x,n(c.selection1b||`[]`),1)])])]),_:1}),l[78]||=r(`p`,null,`The v-model can also be preset, or updated externally.`,-1),a(N,null,{html:t(()=>[...l[46]||=[o(`<div class="w-flex align-center">
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
</div>`,-1)]]),js:t(()=>[...l[47]||=[o(`data: () => ({
  selection: [],
  checkboxes: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`,-1)]]),default:t(()=>[r(`div`,S,[r(`div`,null,[a(O,{modelValue:c.selection3,"onUpdate:modelValue":l[5]||=e=>c.selection3=e,items:c.checkboxes1},null,8,[`modelValue`,`items`]),a(L,{class:`mt2`,onClick:l[6]||=e=>c.selection3=c.selection3.length?[]:[2]},{default:t(()=>[...l[44]||=[o(`Toggle checkbox 2`,-1)]]),_:1})]),r(`div`,C,[l[45]||=o(`v-model:`,-1),r(`code`,w,n(c.selection3||`[]`),1)])])]),_:1}),a(j,{h2:``},{default:t(()=>[...l[48]||=[o(`Layout`,-1)]]),_:1}),a(N,null,{html:t(()=>[...l[49]||=[o(`<div class="title4 mb2">Default column layout</div>
<w-checkboxes :items="checkboxes"></w-checkboxes>

<div class="title4 mt6 mb2">Inline layout</div>
<w-checkboxes :items="checkboxes" inline></w-checkboxes>`,-1)]]),js:t(()=>[...l[50]||=[o(`data: () => ({
  checkboxes: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`,-1)]]),default:t(()=>[l[51]||=r(`div`,{class:`title4 mb2`},`Default column layout`,-1),a(O,{items:c.checkboxes1},null,8,[`items`]),l[52]||=r(`div`,{class:`title4 mt6 mb2`},`Inline layout`,-1),a(O,{items:c.checkboxes1,inline:``},null,8,[`items`])]),_:1}),a(j,{h2:``},{default:t(()=>[...l[53]||=[o(`Custom label content`,-1)]]),_:1}),l[79]||=r(`p`,null,[r(`span`,{class:`code`},`w-checkboxes`),o(` provides a slot to customize the label of each checkbox button: `),r(`code`,null,`item`),o(`.`)],-1),a(N,null,{html:t(()=>[...l[54]||=[o(`<w-checkboxes :items="checkboxes" color="green">
  <template #item="{ item }">
    <span class="pr2">`+n(`{{ item.label }}`)+`</span>
    <w-icon class="deep-purple">`+n(`{{ item.icon }}`)+`</w-icon>
  </template>
</w-checkboxes>`,-1)]]),js:t(()=>[...l[55]||=[o(`data: () => ({
  checkboxes: [
    { label: 'Square', icon: 'mdi mdi-square' },
    { label: 'Circle', icon: 'mdi mdi-circle' },
    { label: 'Triangle', icon: 'mdi mdi-triangle' }
  ]
})
`,-1)]]),default:t(()=>[a(O,{items:c.checkboxes3,color:`green`},{item:t(({item:e})=>[r(`span`,T,n(e.label),1),a(F,{class:`deep-purple`},{default:t(()=>[o(n(e.icon),1)]),_:2},1024)]),_:1},8,[`items`])]),_:1}),l[80]||=r(`div`,{class:`w-divider grey-light5 my12`},null,-1),a(j,{h2:``},{default:t(()=>[...l[56]||=[o(`Round checkboxes`,-1)]]),_:1}),a(N,{"content-class":`mt3`},{html:t(()=>[...l[57]||=[o(`<w-checkboxes
  v-model="selection"
  :items="checkboxes"
  round
  inline>
</w-checkboxes>`,-1)]]),js:t(()=>[...l[58]||=[o(`data: () => ({
  selection: [1],
  checkboxes: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`,-1)]]),default:t(()=>[a(O,{modelValue:c.selection8,"onUpdate:modelValue":l[7]||=e=>c.selection8=e,items:c.checkboxes1,round:``,inline:``},null,8,[`modelValue`,`items`])]),_:1}),a(j,{h2:``},{default:t(()=>[...l[59]||=[o(`Color`,-1)]]),_:1}),l[81]||=r(`p`,null,[o(`By default the `),r(`span`,{class:`code`},`w-checkbox`),o(` & `),r(`span`,{class:`code`},`w-checkboxes`),o(` components will use the
primary color.`),r(`br`),o(`
You can provide a different color with the `),r(`code`,null,`color`),o(` option, or you can even set a different
color per item by providing a `),r(`code`,null,`color`),o(` attribute in each of the item objects.
`)],-1),a(j,{h3:``,slug:`w-checkboxes--colors`},{default:t(()=>[...l[60]||=[r(`span`,{class:`code`},`w-checkboxes`,-1),o(` colors`,-1)]]),_:1}),a(N,null,{html:t(()=>[...l[61]||=[o(`<w-checkboxes
  v-model="selection1"
  :items="checkboxes1"
  color="purple">
</w-checkboxes>

<div class="title4 mt8 mb2">Different color per item</div>
<w-checkboxes
  v-model="selection2"
  :items="checkboxes2">
</w-checkboxes>`,-1)]]),js:t(()=>[...l[62]||=[o(`data: () => ({
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
})`,-1)]]),default:t(()=>[a(O,{modelValue:c.selection4,"onUpdate:modelValue":l[8]||=e=>c.selection4=e,items:c.checkboxes1,color:`purple`},null,8,[`modelValue`,`items`]),l[63]||=r(`div`,{class:`title4 mt8 mb2`},`Different color per item`,-1),a(O,{modelValue:c.selection7,"onUpdate:modelValue":l[9]||=e=>c.selection7=e,items:c.checkboxes4},null,8,[`modelValue`,`items`])]),_:1}),a(j,{h3:``,slug:`w-checkbox--colors`},{default:t(()=>[...l[64]||=[r(`span`,{class:`code`},`w-checkbox`,-1),o(` colors`,-1)]]),_:1}),a(N,null,{html:t(()=>[...l[69]||=[o(`<w-checkbox
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
</w-checkbox>`,-1)]]),js:t(()=>[...l[70]||=[o(`data: () => ({
  selection1: [true, true],
  selection2: [true, true],
  checkboxes: [
    { label: 'Choice 1' },
    { label: 'Choice 2' },
    { label: 'Choice 3' }
  ]
})`,-1)]]),default:t(()=>[a(k,{class:`mr2`,modelValue:c.selection5[0],"onUpdate:modelValue":l[10]||=e=>c.selection5[0]=e,color:`teal-light1`},{default:t(()=>[...l[65]||=[o(`Option 1`,-1)]]),_:1},8,[`modelValue`]),a(k,{modelValue:c.selection5[1],"onUpdate:modelValue":l[11]||=e=>c.selection5[1]=e,color:`teal-light1`},{default:t(()=>[...l[66]||=[o(`Option 2`,-1)]]),_:1},8,[`modelValue`]),l[71]||=r(`div`,{class:`title4 mt8 mb2`},`Different color per item`,-1),a(k,{class:`mr2`,modelValue:c.selection6[0],"onUpdate:modelValue":l[12]||=e=>c.selection6[0]=e,color:`pink-light3`},{default:t(()=>[...l[67]||=[o(`Option 1`,-1)]]),_:1},8,[`modelValue`]),a(k,{modelValue:c.selection6[1],"onUpdate:modelValue":l[13]||=e=>c.selection6[1]=e,color:`blue-light1`},{default:t(()=>[...l[68]||=[o(`Option 2`,-1)]]),_:1},8,[`modelValue`])]),_:1})])}var D=c({data:()=>({selection1:!1,selection1b:[],selection2:[!1,!1,!1],selection3:[2],selection4:[1,2,3],selection5:[!0,!0],selection6:[!0,!0],selection7:[1,2,3],selection8:[1],checkboxes1:[{label:`Choice 1`,value:1},{label:`Choice 2`,value:2},{label:`Choice 3`,value:3}],checkboxes2:[{label:`Choice 1`},{label:`Choice 2`},{label:`Choice 3`},{label:`Choice 4`}],checkboxes3:[{label:`Square`,icon:`mdi mdi-square`},{label:`Circle`,icon:`mdi mdi-circle`},{label:`Triangle`,icon:`mdi mdi-triangle`}],checkboxes4:[{label:`Choice 1`,value:1,color:`amber`},{label:`Choice 2`,value:2,color:`warning`},{label:`Choice 3`,value:3,color:`error`}]})},[[`render`,E]]);function O(n,c,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return s(),i(`div`,null,[c[2]||=r(`a`,{id:`api`,name:`api`},null,-1),c[3]||=r(`div`,{class:`w-divider my12`},null,-1),a(p,{class:`title1`,h2:``,slug:`w-checkboxes-api`},{default:t(()=>[...c[0]||=[o(`<w-checkboxes> API`,-1)]]),_:1}),a(m,{class:`mt0`,items:f.checkboxesProps,descriptions:n.checkboxes.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),a(m,{items:n.checkboxes.slots,title:`Slots`},null,8,[`items`]),a(m,{items:f.checkboxesEvents,title:`Events`},null,8,[`items`]),c[4]||=r(`div`,{class:`w-divider my12`},null,-1),a(p,{class:`title1`,h2:``,slug:`w-checkbox-api`},{default:t(()=>[...c[1]||=[o(`<w-checkbox> API`,-1)]]),_:1}),a(m,{class:`mt0`,items:f.checkboxProps,descriptions:n.checkbox.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),a(m,{items:n.checkbox.slots,title:`Slots`},null,8,[`items`]),a(m,{items:f.checkboxEvents,title:`Events`},null,8,[`items`])])}var k={propsDescs:{id:`Present on the wrapper for API consistency; each inner <code>w-checkbox</code> gets its own stable <code>id</code> automatically (SSR-safe). Use <code>name</code> for the shared HTML <code>name</code> on every checkbox.`,items:`An array of checkbox items to display. Each item object should contain at least a <code>label</code> or a <code>value</code> attribute.`,modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide an array of values to dictate the checked state of all the checkboxes.<br>This value gets updated when using a v-model.`,returnValues:`When set to <code>true</code>, the return value of the w-checkboxes component will be an array of <code>returnValue</code>s of each item that is checked. If set to false and by default, the return value will be an array of booleans.`,labelOnLeft:`Moves the label to the left of each checkbox.`,itemLabelKey:`The property name (aka "key") in each item object where to find the label of the item (if any).`,itemValueKey:`The property name (aka "key") in each item object where to find the value of the item (if any).`,itemColorKey:`The property name (aka "key") in each item object where to find the color of the item (if any).`,inline:`Displays all the checkboxes inline instead of in column.`,round:`Displays round checkboxes instead of square ones.`,color:`Applies a color to the active checkbox. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the checkboxes labels. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,name:`Provide a native HTML <code>name</code> attribute shared by every checkbox in the group. If omitted, a unique shared name is generated (SSR-safe).`,disabled:`Disables all the checkboxes making them unreactive to user interactions.`,readonly:`The checkbox will still look like an interactive checkbox except that it is read-only: its current value cannot be changed by user interaction.`,required:`Applies the native HTML <code>required</code> attribute to each checkbox.`,validators:`<span class="deep-orange">Only for validation, when the <strong class="code">w-checkboxes</strong> component is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the checkbox. Each function will be executed on checkbox   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the checkbox.`,noBlurValidation:`<span class="deep-orange">Only when the group is in a <strong class="code">w-form</strong> with <code>validators</code>.</span><br>When <code>true</code>, blur does not validate this field. When <code>false</code>, blur always validates even if the form has <code>no-blur-validation</code>. When unset, inherit the form setting.`},slots:{item:{description:`Provide a custom content for each checkbox label.`,params:{item:`The current item object.`,index:`The item index in the array of radios. Starts at 1 to be consistent with the <code>item.x</code> slot.`,checked:`A boolean representing the checked state of this particular item.`}},"item.x":{description:`<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single item: the item at the index <em class="code">x</em>.`,params:{item:`The current item object.`,index:`The item index in the array of radios. Starts at 1 to be consistent with the slot name.`,checked:`A boolean representing the checked state of this particular item.`}}},events:{input:{description:`Emitted each time any of the checkboxes is toggled.<br>Updates the v-model value in Vue 2.x only.`,params:{"[Array]":`Array of <code>return-value</code> of each checked checkbox.<br>The <code>return-value</code> is one of the following attributes, if they exist, in this order: the item value, the item label, the item index.`}},"update:modelValue":{description:`Emitted each time any of the checkboxes is toggled.<br>Updates the v-model value in Vue 3 only.`,params:{"[Array]":`Array of <code>return-value</code> of each checked checkbox.<br>The <code>return-value</code> is one of the following attributes, if they exist, in this order: the item value, the item label, the item index.`}},focus:{description:`Emitted on each checkbox focus.`,params:{"[DOM event object]":`The associated focus DOM event.`}}}},A={propsDescs:{id:`Sets the native HTML <code>id</code> and ties it to adjacent <code>&lt;label for&gt;</code> bindings. If omitted, Wave UI generates a stable id.`,modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide a boolean to dictate the checked state the checkbox.<br>This value gets updated when using a v-model.`,returnValue:`Since the native HTML checkbox element uses the <code>value</code> attribute to define the checked state, the <code>return-value</code> prop let you specify a value to return to the <code>v-model</code> when the checkbox is checked (instead of returning <code>true</code>).`,label:`Sets a visible label for the checkbox.`,labelOnLeft:`Moves the label to the left of the checkbox. By default the label is displayed on the right.`,color:`Applies a color to the checkbox when active. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the checkbox's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,noRipple:`Removes the ripple animation on check.`,indeterminate:`Applies an indeterminate state on the checkbox. E.g. when it represents the selected state of a collection of elements where some are checked and some not.`,round:`Displays a round checkbox instead of a square one.`,name:`Provide a native HTML <code>name</code> attribute to the checkbox. If omitted, a unique value is generated with the same stable mechanism as the default id (SSR-safe).`,disabled:`Disables the checkbox making it unreactive to user interactions.`,readonly:`The checkbox will still look like an interactive checkbox except that it is read-only: its current value cannot be changed by user interaction.`,required:`Applies the native HTML <code>required</code> attribute to the checkbox.`,validators:`<span class="deep-orange">Only for validation, when the checkbox is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the checkbox. Each function will be executed on checkbox   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the checkbox.`,noBlurValidation:`<span class="deep-orange">Only when the checkbox is in a <strong class="code">w-form</strong> with <code>validators</code>.</span><br>When <code>true</code>, blur does not validate this field. When <code>false</code>, blur always validates even if the form has <code>no-blur-validation</code>. When unset, inherit the form setting.`},slots:{default:{description:`The checkbox label content.`}},events:{input:{description:`Emitted each time the state of the checkbox changes.<br>Updates the v-model value in Vue 2.x only.`,params:{"[Boolean]":`The current state of the checkbox.`}},"update:modelValue":{description:`Emitted each time the state of the checkbox changes.<br>Updates the v-model value in Vue 3 only.`,params:{"[Boolean]":`The current state of the checkbox.`}},focus:{description:`Emitted on each checkbox focus.`,params:{"[DOM event object]":`The associated focus DOM event.`}}}},j=c({data:()=>({checkboxes:k,checkbox:A}),computed:{checkboxesProps(){return{...u.props,...l.props}},checkboxProps(){return{...d.props,...l.props}},checkboxesEvents(){return u.emits.reduce((e,t)=>(e[t]=k.events[t]||{},e),{})},checkboxEvents(){return d.emits.reduce((e,t)=>(e[t]=A.events[t]||{},e),{})}}},[[`render`,O]]);function M(n,c,l,u,d,f){let p=e(`ui-component-title`),m=e(`examples`),h=e(`api`);return s(),i(`main`,null,[a(p,{slug:`w-checkbox-and-w-checkboxes`,code:!1},{default:t(()=>[...c[0]||=[r(`span`,{class:`code`},`w-checkbox`,-1),o(` & `,-1),r(`span`,{class:`code`},`w-checkboxes`,-1)]]),_:1}),a(m),a(h)])}var N=c({components:{Examples:D,Api:j}},[[`render`,M]]);export{N as default};