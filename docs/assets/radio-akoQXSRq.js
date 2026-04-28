import{N as e,W as t,bt as n,c as r,d as i,g as a,h as o,k as s}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as c}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{F as l,_ as u,g as d}from"./index-DH7838aH.js";var f={class:`w-flex wrap my1`},p={class:`w-flex wrap my1`},m={class:`w-flex align-center`},h={class:`title3 ml10`},g={class:`pr2`};function _(c,l,u,d,_,v){let y=e(`w-radios`),b=e(`w-radio`),x=e(`w-card`),S=e(`title-link`),C=e(`alert`),w=e(`example`),T=e(`w-icon`),E=e(`w-tag`);return s(),i(`div`,null,[a(x,{"bg-color":c.$store.state.darkMode?`grey-dark5`:`blue-light5`},{default:t(()=>[l[15]||=r(`p`,{class:`mb3`},`What it looks like:`,-1),a(y,{modelValue:c.selection1,"onUpdate:modelValue":l[0]||=e=>c.selection1=e,items:c.radios1,inline:``},null,8,[`modelValue`,`items`]),l[16]||=r(`div`,{class:`title4 mt4`},`States`,-1),r(`div`,null,[r(`div`,f,[a(b,{class:`mr3 mb1`,"model-value":!0,label:`Checked`}),a(b,{class:`mr3 mb1`,"model-value":!0,disabled:``,label:`Checked &amp; disabled`}),a(b,{class:`mr3 mb1`,"model-value":!0,readonly:``,label:`Checked &amp; readonly`})]),r(`div`,p,[a(b,{class:`mr3 mb1`,"model-value":!1,label:`Unchecked`}),a(b,{class:`mr3 mb1`,"model-value":!1,disabled:``,label:`Unchecked &amp; disabled`}),a(b,{class:`mr3 mb1`,"model-value":!1,readonly:``,label:`Unchecked &amp; readonly`})])])]),_:1},8,[`bg-color`]),l[68]||=r(`p`,{class:`mt12`},[o(`There are 2 components: `),r(`span`,{class:`code`},`w-radio`),o(` & `),r(`span`,{class:`code`},`w-radios`),o(`.
The later is a group of radio buttons for convenience.`)],-1),l[69]||=r(`p`,null,`Let's start with the basic component.`,-1),a(S,{class:`title1 mt12`,h2:``,slug:`w-radio`},{default:t(()=>[...l[17]||=[o(`<w-radio>`,-1)]]),_:1}),l[70]||=r(`div`,{class:`w-divider`},null,-1),a(C,{tip:``},{default:t(()=>[...l[18]||=[r(`div`,{class:`title3`},`Important notes`,-1),r(`strong`,{class:`title5`},`Name attribute`,-1),r(`p`,{class:`mb4`},[o(`With individual radio buttons (using `),r(`span`,{class:`code`},`<w-radio>`),o(`), the `),r(`code`,null,`name`),o(` prop is
needed for the radios to work together. This is how HTML knows they are part of the same group
of choices.`),r(`br`),o(`
But when you use a group of radio buttons via `),r(`span`,{class:`code`},`<w-radios>`),o(`, Wave UI will add the
name attributes for you.`)],-1),r(`strong`,{class:`title5`},`Form validation`,-1),r(`p`,null,[o(`When a validation is needed on radio buttons, each individual radio button (`),r(`span`,{class:`code`},`w-radio`),o(`)
has a separate validation message.`),r(`br`),o(`
If you want only one validation for a group of radio buttons, you must use the `),r(`span`,{class:`code`},`w-radios`),o(`
component.
`)],-1)]]),_:1}),a(w,null,{html:t(()=>[...l[28]||=[o(`<div class="title4 mb2">1. Here is a single radio button</div>
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
</w-radio>`,-1)]]),js:t(()=>[...l[29]||=[o(`data: () => ({
  radio2: false,
  radio3: false
})
`,-1)]]),default:t(()=>[l[30]||=r(`div`,{class:`title4 mb2`},`1. Here is a single radio button`,-1),a(b,null,{default:t(()=>[...l[19]||=[o(`I am single - not very useful`,-1)]]),_:1}),l[31]||=r(`div`,{class:`title4 mt8 mb2`},`2. Here is a duo`,-1),a(b,{class:`mr2`,name:`radio1`},{default:t(()=>[...l[20]||=[o(`Option 1`,-1)]]),_:1}),a(b,{name:`radio1`},{default:t(()=>[...l[21]||=[o(`Option 2`,-1)]]),_:1}),l[32]||=r(`div`,{class:`title4 mt8 mb2`},`3. A trio using v-model`,-1),a(b,{class:`mr2`,modelValue:c.radio2,"onUpdate:modelValue":l[1]||=e=>c.radio2=e,"return-value":`option 1`},{default:t(()=>[...l[22]||=[o(`Option 1`,-1)]]),_:1},8,[`modelValue`]),a(b,{class:`mr2`,modelValue:c.radio2,"onUpdate:modelValue":l[2]||=e=>c.radio2=e,"return-value":`option 2`},{default:t(()=>[...l[23]||=[o(`Option 2`,-1)]]),_:1},8,[`modelValue`]),a(b,{modelValue:c.radio2,"onUpdate:modelValue":l[3]||=e=>c.radio2=e,"return-value":`option 3`},{default:t(()=>[...l[24]||=[o(`Option 3`,-1)]]),_:1},8,[`modelValue`]),l[33]||=r(`div`,{class:`title4 mt8 mb2`},`4. A trio using v-model and a set name`,-1),a(b,{class:`mr2`,modelValue:c.radio3,"onUpdate:modelValue":l[4]||=e=>c.radio3=e,name:`radio3`,"return-value":`option 1`},{default:t(()=>[...l[25]||=[o(`Option 1`,-1)]]),_:1},8,[`modelValue`]),a(b,{class:`mr2`,modelValue:c.radio3,"onUpdate:modelValue":l[5]||=e=>c.radio3=e,name:`radio3`,"return-value":`option 2`},{default:t(()=>[...l[26]||=[o(`Option 2`,-1)]]),_:1},8,[`modelValue`]),a(b,{modelValue:c.radio3,"onUpdate:modelValue":l[6]||=e=>c.radio3=e,name:`radio3`,"return-value":`option 3`},{default:t(()=>[...l[27]||=[o(`Option 3`,-1)]]),_:1},8,[`modelValue`])]),_:1}),l[71]||=r(`p`,null,[o(`The above example (case 3 & 4) shows that the radio buttons work without the name attribute,
using a v-model, but the navigation using the keyboard arrows will not work as the names are not
provided.`),r(`br`),o(`
Case 4 is fully operational. `),r(`span`,{class:`code`},`:tada:`),o(`
(Keyboard arrows navigation is a browser choice, Safari doesn't have it)`),r(`br`),r(`strong`,null,[o(`Note that when you use the `),r(`span`,{class:`code`},`w-radios`),o(` component, a shared unique `),r(`code`,null,`name`),o(` (and stable per-radio `),r(`code`,null,`id`),o(` values) are set by default so you don't
have to worry about them if you don't need to override them.
`)])],-1),a(S,{h2:``},{default:t(()=>[...l[34]||=[o(`Custom label in w-radio`,-1)]]),_:1}),l[72]||=r(`p`,null,[r(`span`,{class:`code`},`w-radio`),o(` provides a default slot to customize the content.`)],-1),a(w,{"content-class":`mt3`},{html:t(()=>[...l[39]||=[o(`<w-radio class="mr5" name="radio1">
  <span class="pr1">Choice 1 has an icon</span>
  <w-icon md>mdi mdi-star</w-icon>
</w-radio>

<w-radio name="radio1">
  <w-tag bg-color="green-light5" color="green-dark2">
    Choice 2 is a tag
    <w-icon class="ml1">mdi mdi-heart</w-icon>
  </w-tag>
</w-radio>`,-1)]]),default:t(()=>[a(b,{class:`mr5`,name:`radio4`},{default:t(()=>[l[36]||=r(`span`,{class:`pr1`},`Choice 1 has an icon`,-1),a(T,{md:``},{default:t(()=>[...l[35]||=[o(`mdi mdi-star`,-1)]]),_:1})]),_:1}),a(b,{name:`radio4`},{default:t(()=>[a(E,{"bg-color":`green-light5`,color:`green-dark2`},{default:t(()=>[l[38]||=o(`Choice 2 is a tag`,-1),a(T,{class:`ml1`},{default:t(()=>[...l[37]||=[o(`mdi mdi-heart`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(C,{tip:``},{default:t(()=>[...l[40]||=[o(`As seen in this example, the `,-1),r(`span`,{class:`code`},`w-radio`,-1),o(` component allows you to have complete freedom
in your radio buttons.`,-1),r(`br`,null,null,-1),o(`
But because in most cases you won't need that, the `,-1),r(`span`,{class:`code`},`w-radios`,-1),o(` component will make you go
much faster.
`,-1)]]),_:1}),a(S,{class:`title1 mt12`,h2:``,slug:`w-radios`},{default:t(()=>[...l[41]||=[o(`<w-radios>`,-1)]]),_:1}),l[73]||=r(`div`,{class:`w-divider`},null,-1),l[74]||=r(`p`,{class:`my5`},[o(`The `),r(`span`,{class:`code`},`w-radios`),o(` component allows a fast and easy rendering of
multiple radio buttons by passing the items through a prop.`),r(`br`),o(`
It accepts an inline parameter to display the radio buttons inline,
and allows you to customize the label of each radio button through slot.
`)],-1),a(S,{class:`title2 primary`,h3:``},{default:t(()=>[...l[42]||=[o(`V-model`,-1)]]),_:1}),a(C,{info:``},{default:t(()=>[...l[43]||=[o(`If a value is set in the choice's data, it will be returned through the v-model when selected.`,-1),r(`br`,null,null,-1),o(`
If no value is set, the choice's label will be returned instead.`,-1)]]),_:1}),l[75]||=r(`p`,null,`The v-model can also be preset, or updated externally.`,-1),a(w,null,{html:t(()=>[...l[45]||=[o(`<div class="w-flex align-center">
  <w-radios
    v-model="selection"
    :items="radioItems">
  </w-radios>

  <div class="title3 ml10">
    v-model: `+n(`{{ selection || 'null' }}`)+`
  </div>
</div>`,-1)]]),js:t(()=>[...l[46]||=[o(`data: () => ({
  selection: 1,
  radioItems: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`,-1)]]),default:t(()=>[r(`div`,m,[a(y,{modelValue:c.selection1,"onUpdate:modelValue":l[7]||=e=>c.selection1=e,items:c.radios1},null,8,[`modelValue`,`items`]),r(`div`,h,[l[44]||=o(`v-model: `,-1),r(`code`,null,n(c.selection1||`null`),1)])])]),_:1}),a(S,{h2:``},{default:t(()=>[...l[47]||=[o(`Inline layout`,-1)]]),_:1}),a(w,{"content-class":`mt3`},{html:t(()=>[...l[48]||=[o(`<w-radios :items="radioItems" inline></w-radios>`,-1)]]),js:t(()=>[...l[49]||=[o(`data: () => ({
  radioItems: [
    { label: 'Choice 1' },
    { label: 'Choice 2' },
    { label: 'Choice 3' }
  ]
})
`,-1)]]),default:t(()=>[a(y,{items:c.radios2,inline:``},null,8,[`items`])]),_:1}),a(S,{h2:``},{default:t(()=>[...l[50]||=[o(`Custom label content`,-1)]]),_:1}),l[76]||=r(`p`,null,[r(`span`,{class:`code`},`w-radios`),o(` also provides a slot to customize the label of each radio button: `),r(`code`,null,`item`),o(`.`)],-1),l[77]||=r(`p`,null,`The great thing is that you can access any custom data from this slot!`,-1),a(w,null,{html:t(()=>[...l[51]||=[o(`<w-radios
  v-model="selection"
  :items="radioItems"
  color="green">
  <template #item="{ item }">
    <span class="pr2">`+n(`{{ item.label }}`)+`</span>
    <w-icon class="success">`+n(`{{ item.icon }}`)+`</w-icon>
  </template>
</w-radios>`,-1)]]),js:t(()=>[...l[52]||=[o(`data: () => ({
  selection: 'Square',
  radioItems: [
    { label: 'Square', icon: 'mdi mdi-square' },
    { label: 'Circle', icon: 'mdi mdi-circle' },
    { label: 'Triangle', icon: 'mdi mdi-triangle' }
  ],
})
`,-1)]]),default:t(()=>[a(y,{modelValue:c.selection5,"onUpdate:modelValue":l[8]||=e=>c.selection5=e,items:c.radios3,color:`green`},{item:t(({item:e})=>[r(`span`,g,n(e.label),1),a(T,{class:`success`},{default:t(()=>[o(n(e.icon),1)]),_:2},1024)]),_:1},8,[`modelValue`,`items`])]),_:1}),l[78]||=r(`div`,{class:`w-divider grey-light5 my12`},null,-1),a(S,{h2:``},{default:t(()=>[...l[53]||=[o(`Color`,-1)]]),_:1}),l[79]||=r(`p`,null,[o(`By default the `),r(`span`,{class:`code`},`w-radio`),o(` & `),r(`span`,{class:`code`},`w-radios`),o(` components will use the
primary color.`),r(`br`),o(`
You can provide a different color with the `),r(`code`,null,`color`),o(` option, or you can even set a different
color per item by providing a `),r(`code`,null,`color`),o(` attribute in each of the item objects.
`)],-1),a(S,{h3:``,slug:`w-radios--colors`},{default:t(()=>[...l[54]||=[r(`span`,{class:`code`},`w-radios`,-1),o(` colors`,-1)]]),_:1}),a(w,null,{html:t(()=>[...l[57]||=[o(`<w-radios
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
</w-radios>`,-1)]]),js:t(()=>[...l[58]||=[o(`data: () => ({
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
`,-1)]]),default:t(()=>[a(y,{class:`mr2`,modelValue:c.selection6,"onUpdate:modelValue":l[9]||=e=>c.selection6=e,items:c.radios1,color:`purple`},{default:t(()=>[...l[55]||=[o(`Option 1`,-1)]]),_:1},8,[`modelValue`,`items`]),l[59]||=r(`div`,{class:`title4 mt8 mb2`},`Different color per item`,-1),a(y,{modelValue:c.selection7,"onUpdate:modelValue":l[10]||=e=>c.selection7=e,items:c.radios4},{default:t(()=>[...l[56]||=[o(`Option 2`,-1)]]),_:1},8,[`modelValue`,`items`])]),_:1}),a(S,{h3:``,slug:`w-radio--colors`},{default:t(()=>[...l[60]||=[r(`span`,{class:`code`},`w-radio`,-1),o(` colors`,-1)]]),_:1}),a(w,null,{html:t(()=>[...l[65]||=[o(`<w-radio
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
`,-1)]]),js:t(()=>[...l[66]||=[o(`data: () => ({
  selection1: 1,
  selection2: 1
})`,-1)]]),default:t(()=>[a(b,{class:`mr2`,modelValue:c.selection3,"onUpdate:modelValue":l[11]||=e=>c.selection3=e,name:`radio5`,color:`teal-light1`,"return-value":1},{default:t(()=>[...l[61]||=[o(`Option 1`,-1)]]),_:1},8,[`modelValue`]),a(b,{modelValue:c.selection3,"onUpdate:modelValue":l[12]||=e=>c.selection3=e,name:`radio5`,color:`teal-light1`,"return-value":2},{default:t(()=>[...l[62]||=[o(`Option 2`,-1)]]),_:1},8,[`modelValue`]),l[67]||=r(`div`,{class:`title4 mt8 mb2`},`Different color per item`,-1),a(b,{class:`mr2`,modelValue:c.selection4,"onUpdate:modelValue":l[13]||=e=>c.selection4=e,name:`radio6`,color:`pink-light3`,"return-value":1},{default:t(()=>[...l[63]||=[o(`Option 1`,-1)]]),_:1},8,[`modelValue`]),a(b,{modelValue:c.selection4,"onUpdate:modelValue":l[14]||=e=>c.selection4=e,name:`radio6`,color:`blue-light1`,"return-value":2},{default:t(()=>[...l[64]||=[o(`Option 2`,-1)]]),_:1},8,[`modelValue`])]),_:1})])}var v=c({data:()=>({selection1:1,selection2:1,selection3:1,selection4:1,selection5:`Square`,selection6:1,selection7:1,radio2:!1,radio3:!1,radios1:[{label:`Choice 1`,value:1},{label:`Choice 2`,value:2},{label:`Choice 3`,value:3}],radios2:[{label:`Choice 1`},{label:`Choice 2`},{label:`Choice 3`}],radios3:[{label:`Square`,icon:`mdi mdi-square`},{label:`Circle`,icon:`mdi mdi-circle`},{label:`Triangle`,icon:`mdi mdi-triangle`}],radios4:[{label:`Choice 1`,value:1,color:`amber`},{label:`Choice 2`,value:2,color:`warning`},{label:`Choice 3`,value:3,color:`error`}]})},[[`render`,_]]);function y(n,c,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return s(),i(`div`,null,[c[2]||=r(`a`,{id:`api`,name:`api`},null,-1),c[3]||=r(`div`,{class:`w-divider my12`},null,-1),a(p,{class:`title1`,h2:``,slug:`w-radios-api`},{default:t(()=>[...c[0]||=[o(`<w-radios> API`,-1)]]),_:1}),a(m,{class:`mt0`,items:f.radiosProps,descriptions:n.radios.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),a(m,{items:n.radios.slots,title:`Slots`},null,8,[`items`]),a(m,{items:f.radiosEvents,title:`Events`},null,8,[`items`]),c[4]||=r(`div`,{class:`w-divider my12`},null,-1),a(p,{class:`title1`,h2:``,slug:`w-radio-api`},{default:t(()=>[...c[1]||=[o(`<w-radio> API`,-1)]]),_:1}),a(m,{class:`mt0`,items:f.radioProps,descriptions:n.radio.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),a(m,{items:n.radio.slots,title:`Slots`},null,8,[`items`]),a(m,{items:f.radioEvents,title:`Events`},null,8,[`items`])])}var b={propsDescs:{id:`Present on the wrapper for API consistency; each inner <code>w-radio</code> gets its own stable <code>id</code> automatically (SSR-safe). Use <code>name</code> for the shared HTML <code>name</code> on every radio.`,items:`An array of radio button items to display. Each item object should contain at least a <code>label</code> or a <code>value</code> attribute.`,modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide a value (of one of the <code>items</code> objects) to dictate the selected choice.<br>This value gets updated when using a v-model.`,labelOnLeft:`Moves the label to the left of each radio button. By default the label is displayed on the right.`,itemLabelKey:`The property name (aka "key") in each item object where to find the label of the item (if any).`,itemValueKey:`The property name (aka "key") in each item object where to find the value of the item (if any).`,itemColorKey:`The property name (aka "key") in each item object where to find the color of the item (if any).`,inline:`Displays all the radio buttons inline instead of in column.`,color:`Applies a color to the active radio buttons. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the radio buttons' labels. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,name:`Provide a native HTML <code>name</code> attribute shared by every radio in the group. If omitted, a unique shared name is generated (SSR-safe).`,disabled:`Disables all the radio buttons making them unreactive to user interactions.`,readonly:`The radio button will still look like an interactive radio button except that it is read-only: its current value cannot be changed by user interaction.`,required:`Applies the native HTML <code>required</code> attribute to each radio button.`,validators:`<span class="deep-orange">Only for validation, when the <strong class="code">w-radios</strong> component is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the radio button. Each function will be executed on radio button   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the radio button.`,noBlurValidation:`<span class="deep-orange">Only when the group is in a <strong class="code">w-form</strong> with <code>validators</code>.</span><br>When <code>true</code>, blur does not validate this field. When <code>false</code>, blur always validates even if the form has <code>no-blur-validation</code>. When unset, inherit the form setting.`},slots:{item:{description:`Provide a custom content for each radio button label.`,params:{item:`The current item object.`,index:`The item index in the array of radios. Starts at 1 to be consistent with the <code>item.x</code> slot.`,checked:`A boolean representing the checked state of this particular item.`}},"item.x":{description:`<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single item: the item at the index <em class="code">x</em>.`,params:{item:`The current item object.`,index:`The item index in the array of radios. Starts at 1 to be consistent with the slot name.`,checked:`A boolean representing the checked state of this particular item.`}}},events:{input:{description:`Emitted each time any of the radio buttons is toggled.<br>Updates the v-model value in Vue 2.x only.`,params:{"[String, Number, Boolean]":`The <code>return-value</code> of the selected radio button.<br>The <code>return-value</code> will be one of the following attributes, if they exist, in this order: the item value, the item label, the item index.`}},"update:modelValue":{description:`Emitted each time any of the radio buttons is toggled.<br>Updates the v-model value in Vue 3 only.`,params:{"[String, Number, Boolean]":`The <code>return-value</code> of the selected radio button.<br>The <code>return-value</code> will be one of the following attributes, if they exist, in this order: the item value, the item label, the item index.`}},focus:{description:`Emitted on each radio button focus.`,params:{"[DOM event object]":`The associated focus DOM event.`}}}},x={propsDescs:{id:`Sets the native HTML <code>id</code> and ties it to adjacent <code>&lt;label for&gt;</code> bindings. If omitted, Wave UI generates a stable id.`,modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide a boolean to dictate the selected state of the radio button.<br>This value gets updated when using a v-model.`,returnValue:`Since the native HTML radio uses the <code>value</code> attribute to define the selected state, the <code>return-value</code> prop let you specify a value to return to the <code>v-model</code> when the radio is selected (instead of returning <code>true</code>).`,label:`Sets a visible label for the radio button.`,labelOnLeft:`Moves the label to the left of the radio button. By default the label is displayed on the right.`,color:`Applies a color to the radio button when active. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the radio button's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,noRipple:`Removes the ripple animation on select.`,name:`Provide a native HTML <code>name</code> attribute to the radio button. If omitted, a unique value is generated with the same stable mechanism as the default id (SSR-safe).`,disabled:`Disables the radio button making it unreactive to user interactions.`,readonly:`The radio button will still look like an interactive radio button except that it is read-only: its current value cannot be changed by user interaction.`,required:`Applies the native HTML <code>required</code> attribute to the radio button.`,validators:`<span class="deep-orange">Only for validation, when this radio button is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the radio button. Each function will be executed on radio button   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the radio button.`,noBlurValidation:`<span class="deep-orange">Only when the radio is in a <strong class="code">w-form</strong> with <code>validators</code>.</span><br>When <code>true</code>, blur does not validate this field. When <code>false</code>, blur always validates even if the form has <code>no-blur-validation</code>. When unset, inherit the form setting.`},slots:{default:{description:`The radio button label content.`}},events:{input:{description:`Emitted each time the state of the radio button changes.<br>Updates the v-model value in Vue 2.x only.`,params:{"[Boolean]":`The current state of the radio button.`}},"update:modelValue":{description:`Emitted each time the state of the radio button changes.<br>Updates the v-model value in Vue 3 only.`,params:{"[Boolean]":`The current state of the radio button.`}},focus:{description:`Emitted on each radio button focus.`,params:{"[DOM event object]":`The associated focus DOM event.`}}}},S=c({data:()=>({radios:b,radio:x}),computed:{radiosProps(){return{...d.props,...l.props}},radioProps(){return{...u.props,...l.props}},radiosEvents(){return d.emits.reduce((e,t)=>(e[t]=b.events[t]||{},e),{})},radioEvents(){return u.emits.reduce((e,t)=>(e[t]=x.events[t]||{},e),{})}}},[[`render`,y]]);function C(n,c,l,u,d,f){let p=e(`ui-component-title`),m=e(`examples`),h=e(`api`);return s(),i(`main`,null,[a(p,{slug:`w-radio-and-w-radios`,code:!1},{default:t(()=>[...c[0]||=[r(`span`,{class:`code`},`w-radio`,-1),o(` & `,-1),r(`span`,{class:`code`},`w-radios`,-1)]]),_:1}),a(m),a(h)])}var w=c({components:{Examples:v,Api:S}},[[`render`,C]]);export{w as default};