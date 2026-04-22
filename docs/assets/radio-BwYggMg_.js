import{H as e,N as t,c as n,d as r,g as i,h as a,k as o,vt as s}from"./runtime-core.esm-bundler-DPe36P4s.js";import{t as c}from"./_plugin-vue_export-helper-S3RvzygF.js";import{t as l}from"./form-elements-Bk29BSHS.js";import{_ as u,g as d}from"./index-CmUoOmTq.js";var f={class:`w-flex wrap my1`},p={class:`w-flex wrap my1`},m={class:`w-flex align-center`},h={class:`title3 ml10`},g={class:`pr2`};function _(c,l,u,d,_,v){let y=t(`w-radios`),b=t(`w-radio`),x=t(`w-card`),S=t(`title-link`),C=t(`alert`),w=t(`example`),T=t(`w-icon`),E=t(`w-tag`);return o(),r(`div`,null,[i(x,{"bg-color":c.$store.state.darkMode?`grey-dark5`:`blue-light5`},{default:e(()=>[l[15]||=n(`p`,{class:`mb3`},`What it looks like:`,-1),i(y,{modelValue:c.selection1,"onUpdate:modelValue":l[0]||=e=>c.selection1=e,items:c.radios1,inline:``},null,8,[`modelValue`,`items`]),l[16]||=n(`div`,{class:`title4 mt4`},`States`,-1),n(`div`,null,[n(`div`,f,[i(b,{class:`mr3 mb1`,"model-value":!0,label:`Checked`}),i(b,{class:`mr3 mb1`,"model-value":!0,disabled:``,label:`Checked &amp; disabled`}),i(b,{class:`mr3 mb1`,"model-value":!0,readonly:``,label:`Checked &amp; readonly`})]),n(`div`,p,[i(b,{class:`mr3 mb1`,"model-value":!1,label:`Unchecked`}),i(b,{class:`mr3 mb1`,"model-value":!1,disabled:``,label:`Unchecked &amp; disabled`}),i(b,{class:`mr3 mb1`,"model-value":!1,readonly:``,label:`Unchecked &amp; readonly`})])])]),_:1},8,[`bg-color`]),l[68]||=n(`p`,{class:`mt12`},[a(`There are 2 components: `),n(`span`,{class:`code`},`w-radio`),a(` & `),n(`span`,{class:`code`},`w-radios`),a(`.
The later is a group of radio buttons for convenience.`)],-1),l[69]||=n(`p`,null,`Let's start with the basic component.`,-1),i(S,{class:`title1 mt12`,h2:``,slug:`w-radio`},{default:e(()=>[...l[17]||=[a(`<w-radio>`,-1)]]),_:1}),l[70]||=n(`div`,{class:`w-divider`},null,-1),i(C,{tip:``},{default:e(()=>[...l[18]||=[n(`div`,{class:`title3`},`Important notes`,-1),n(`strong`,{class:`title5`},`Name attribute`,-1),n(`p`,{class:`mb4`},[a(`With individual radio buttons (using `),n(`span`,{class:`code`},`<w-radio>`),a(`), the `),n(`code`,null,`name`),a(` prop is
needed for the radios to work together. This is how HTML knows they are part of the same group
of choices.`),n(`br`),a(`
But when you use a group of radio buttons via `),n(`span`,{class:`code`},`<w-radios>`),a(`, Wave UI will add the
name attributes for you.`)],-1),n(`strong`,{class:`title5`},`Form validation`,-1),n(`p`,null,[a(`When a validation is needed on radio buttons, each individual radio button (`),n(`span`,{class:`code`},`w-radio`),a(`)
has a separate validation message.`),n(`br`),a(`
If you want only one validation for a group of radio buttons, you must use the `),n(`span`,{class:`code`},`w-radios`),a(`
component.
`)],-1)]]),_:1}),i(w,null,{html:e(()=>[...l[28]||=[a(`<div class="title4 mb2">1. Here is a single radio button</div>
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
</w-radio>`,-1)]]),js:e(()=>[...l[29]||=[a(`data: () => ({
  radio2: false,
  radio3: false
})
`,-1)]]),default:e(()=>[l[30]||=n(`div`,{class:`title4 mb2`},`1. Here is a single radio button`,-1),i(b,null,{default:e(()=>[...l[19]||=[a(`I am single - not very useful`,-1)]]),_:1}),l[31]||=n(`div`,{class:`title4 mt8 mb2`},`2. Here is a duo`,-1),i(b,{class:`mr2`,name:`radio1`},{default:e(()=>[...l[20]||=[a(`Option 1`,-1)]]),_:1}),i(b,{name:`radio1`},{default:e(()=>[...l[21]||=[a(`Option 2`,-1)]]),_:1}),l[32]||=n(`div`,{class:`title4 mt8 mb2`},`3. A trio using v-model`,-1),i(b,{class:`mr2`,modelValue:c.radio2,"onUpdate:modelValue":l[1]||=e=>c.radio2=e,"return-value":`option 1`},{default:e(()=>[...l[22]||=[a(`Option 1`,-1)]]),_:1},8,[`modelValue`]),i(b,{class:`mr2`,modelValue:c.radio2,"onUpdate:modelValue":l[2]||=e=>c.radio2=e,"return-value":`option 2`},{default:e(()=>[...l[23]||=[a(`Option 2`,-1)]]),_:1},8,[`modelValue`]),i(b,{modelValue:c.radio2,"onUpdate:modelValue":l[3]||=e=>c.radio2=e,"return-value":`option 3`},{default:e(()=>[...l[24]||=[a(`Option 3`,-1)]]),_:1},8,[`modelValue`]),l[33]||=n(`div`,{class:`title4 mt8 mb2`},`4. A trio using v-model and a set name`,-1),i(b,{class:`mr2`,modelValue:c.radio3,"onUpdate:modelValue":l[4]||=e=>c.radio3=e,name:`radio3`,"return-value":`option 1`},{default:e(()=>[...l[25]||=[a(`Option 1`,-1)]]),_:1},8,[`modelValue`]),i(b,{class:`mr2`,modelValue:c.radio3,"onUpdate:modelValue":l[5]||=e=>c.radio3=e,name:`radio3`,"return-value":`option 2`},{default:e(()=>[...l[26]||=[a(`Option 2`,-1)]]),_:1},8,[`modelValue`]),i(b,{modelValue:c.radio3,"onUpdate:modelValue":l[6]||=e=>c.radio3=e,name:`radio3`,"return-value":`option 3`},{default:e(()=>[...l[27]||=[a(`Option 3`,-1)]]),_:1},8,[`modelValue`])]),_:1}),l[71]||=n(`p`,null,[a(`The above example (case 3 & 4) shows that the radio buttons work without the name attribute,
using a v-model, but the navigation using the keyboard arrows will not work as the names are not
provided.`),n(`br`),a(`
Case 4 is fully operational. `),n(`span`,{class:`code`},`:tada:`),a(`
(Keyboard arrows navigation is a browser choice, Safari doesn't have it)`),n(`br`),n(`strong`,null,[a(`Note that when you use the `),n(`span`,{class:`code`},`w-radios`),a(` component, a unique name is set by default so you don't
have to worry about it if you don't need it.
`)])],-1),i(S,{h2:``},{default:e(()=>[...l[34]||=[a(`Custom label in w-radio`,-1)]]),_:1}),l[72]||=n(`p`,null,[n(`span`,{class:`code`},`w-radio`),a(` provides a default slot to customize the content.`)],-1),i(w,{"content-class":`mt3`},{html:e(()=>[...l[39]||=[a(`<w-radio class="mr5" name="radio1">
  <span class="pr1">Choice 1 has an icon</span>
  <w-icon md>mdi mdi-star</w-icon>
</w-radio>

<w-radio name="radio1">
  <w-tag bg-color="green-light5" color="green-dark2">
    Choice 2 is a tag
    <w-icon class="ml1">mdi mdi-heart</w-icon>
  </w-tag>
</w-radio>`,-1)]]),default:e(()=>[i(b,{class:`mr5`,name:`radio4`},{default:e(()=>[l[36]||=n(`span`,{class:`pr1`},`Choice 1 has an icon`,-1),i(T,{md:``},{default:e(()=>[...l[35]||=[a(`mdi mdi-star`,-1)]]),_:1})]),_:1}),i(b,{name:`radio4`},{default:e(()=>[i(E,{"bg-color":`green-light5`,color:`green-dark2`},{default:e(()=>[l[38]||=a(`Choice 2 is a tag`,-1),i(T,{class:`ml1`},{default:e(()=>[...l[37]||=[a(`mdi mdi-heart`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),i(C,{tip:``},{default:e(()=>[...l[40]||=[a(`As seen in this example, the `,-1),n(`span`,{class:`code`},`w-radio`,-1),a(` component allows you to have complete freedom
in your radio buttons.`,-1),n(`br`,null,null,-1),a(`
But because in most cases you won't need that, the `,-1),n(`span`,{class:`code`},`w-radios`,-1),a(` component will make you go
much faster.
`,-1)]]),_:1}),i(S,{class:`title1 mt12`,h2:``,slug:`w-radios`},{default:e(()=>[...l[41]||=[a(`<w-radios>`,-1)]]),_:1}),l[73]||=n(`div`,{class:`w-divider`},null,-1),l[74]||=n(`p`,{class:`my5`},[a(`The `),n(`span`,{class:`code`},`w-radios`),a(` component allows a fast and easy rendering of
multiple radio buttons by passing the items through a prop.`),n(`br`),a(`
It accepts an inline parameter to display the radio buttons inline,
and allows you to customize the label of each radio button through slot.
`)],-1),i(S,{class:`title2 primary`,h3:``},{default:e(()=>[...l[42]||=[a(`V-model`,-1)]]),_:1}),i(C,{info:``},{default:e(()=>[...l[43]||=[a(`If a value is set in the choice's data, it will be returned through the v-model when selected.`,-1),n(`br`,null,null,-1),a(`
If no value is set, the choice's label will be returned instead.`,-1)]]),_:1}),l[75]||=n(`p`,null,`The v-model can also be preset, or updated externally.`,-1),i(w,null,{html:e(()=>[...l[45]||=[a(`<div class="w-flex align-center">
  <w-radios
    v-model="selection"
    :items="radioItems">
  </w-radios>

  <div class="title3 ml10">
    v-model: `+s(`{{ selection || 'null' }}`)+`
  </div>
</div>`,-1)]]),js:e(()=>[...l[46]||=[a(`data: () => ({
  selection: 1,
  radioItems: [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 }
  ]
})
`,-1)]]),default:e(()=>[n(`div`,m,[i(y,{modelValue:c.selection1,"onUpdate:modelValue":l[7]||=e=>c.selection1=e,items:c.radios1},null,8,[`modelValue`,`items`]),n(`div`,h,[l[44]||=a(`v-model: `,-1),n(`code`,null,s(c.selection1||`null`),1)])])]),_:1}),i(S,{h2:``},{default:e(()=>[...l[47]||=[a(`Inline layout`,-1)]]),_:1}),i(w,{"content-class":`mt3`},{html:e(()=>[...l[48]||=[a(`<w-radios :items="radioItems" inline></w-radios>`,-1)]]),js:e(()=>[...l[49]||=[a(`data: () => ({
  radioItems: [
    { label: 'Choice 1' },
    { label: 'Choice 2' },
    { label: 'Choice 3' }
  ]
})
`,-1)]]),default:e(()=>[i(y,{items:c.radios2,inline:``},null,8,[`items`])]),_:1}),i(S,{h2:``},{default:e(()=>[...l[50]||=[a(`Custom label content`,-1)]]),_:1}),l[76]||=n(`p`,null,[n(`span`,{class:`code`},`w-radios`),a(` also provides a slot to customize the label of each radio button: `),n(`code`,null,`item`),a(`.`)],-1),l[77]||=n(`p`,null,`The great thing is that you can access any custom data from this slot!`,-1),i(w,null,{html:e(()=>[...l[51]||=[a(`<w-radios
  v-model="selection"
  :items="radioItems"
  color="green">
  <template #item="{ item }">
    <span class="pr2">`+s(`{{ item.label }}`)+`</span>
    <w-icon class="success">`+s(`{{ item.icon }}`)+`</w-icon>
  </template>
</w-radios>`,-1)]]),js:e(()=>[...l[52]||=[a(`data: () => ({
  selection: 'Square',
  radioItems: [
    { label: 'Square', icon: 'mdi mdi-square' },
    { label: 'Circle', icon: 'mdi mdi-circle' },
    { label: 'Triangle', icon: 'mdi mdi-triangle' }
  ],
})
`,-1)]]),default:e(()=>[i(y,{modelValue:c.selection5,"onUpdate:modelValue":l[8]||=e=>c.selection5=e,items:c.radios3,color:`green`},{item:e(({item:t})=>[n(`span`,g,s(t.label),1),i(T,{class:`success`},{default:e(()=>[a(s(t.icon),1)]),_:2},1024)]),_:1},8,[`modelValue`,`items`])]),_:1}),l[78]||=n(`div`,{class:`w-divider grey-light5 my12`},null,-1),i(S,{h2:``},{default:e(()=>[...l[53]||=[a(`Color`,-1)]]),_:1}),l[79]||=n(`p`,null,[a(`By default the `),n(`span`,{class:`code`},`w-radio`),a(` & `),n(`span`,{class:`code`},`w-radios`),a(` components will use the
primary color.`),n(`br`),a(`
You can provide a different color with the `),n(`code`,null,`color`),a(` option, or you can even set a different
color per item by providing a `),n(`code`,null,`color`),a(` attribute in each of the item objects.
`)],-1),i(S,{h3:``,slug:`w-radios--colors`},{default:e(()=>[...l[54]||=[n(`span`,{class:`code`},`w-radios`,-1),a(` colors`,-1)]]),_:1}),i(w,null,{html:e(()=>[...l[57]||=[a(`<w-radios
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
</w-radios>`,-1)]]),js:e(()=>[...l[58]||=[a(`data: () => ({
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
`,-1)]]),default:e(()=>[i(y,{class:`mr2`,modelValue:c.selection6,"onUpdate:modelValue":l[9]||=e=>c.selection6=e,items:c.radios1,color:`purple`},{default:e(()=>[...l[55]||=[a(`Option 1`,-1)]]),_:1},8,[`modelValue`,`items`]),l[59]||=n(`div`,{class:`title4 mt8 mb2`},`Different color per item`,-1),i(y,{modelValue:c.selection7,"onUpdate:modelValue":l[10]||=e=>c.selection7=e,items:c.radios4},{default:e(()=>[...l[56]||=[a(`Option 2`,-1)]]),_:1},8,[`modelValue`,`items`])]),_:1}),i(S,{h3:``,slug:`w-radio--colors`},{default:e(()=>[...l[60]||=[n(`span`,{class:`code`},`w-radio`,-1),a(` colors`,-1)]]),_:1}),i(w,null,{html:e(()=>[...l[65]||=[a(`<w-radio
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
`,-1)]]),js:e(()=>[...l[66]||=[a(`data: () => ({
  selection1: 1,
  selection2: 1
})`,-1)]]),default:e(()=>[i(b,{class:`mr2`,modelValue:c.selection3,"onUpdate:modelValue":l[11]||=e=>c.selection3=e,name:`radio5`,color:`teal-light1`,"return-value":1},{default:e(()=>[...l[61]||=[a(`Option 1`,-1)]]),_:1},8,[`modelValue`]),i(b,{modelValue:c.selection3,"onUpdate:modelValue":l[12]||=e=>c.selection3=e,name:`radio5`,color:`teal-light1`,"return-value":2},{default:e(()=>[...l[62]||=[a(`Option 2`,-1)]]),_:1},8,[`modelValue`]),l[67]||=n(`div`,{class:`title4 mt8 mb2`},`Different color per item`,-1),i(b,{class:`mr2`,modelValue:c.selection4,"onUpdate:modelValue":l[13]||=e=>c.selection4=e,name:`radio6`,color:`pink-light3`,"return-value":1},{default:e(()=>[...l[63]||=[a(`Option 1`,-1)]]),_:1},8,[`modelValue`]),i(b,{modelValue:c.selection4,"onUpdate:modelValue":l[14]||=e=>c.selection4=e,name:`radio6`,color:`blue-light1`,"return-value":2},{default:e(()=>[...l[64]||=[a(`Option 2`,-1)]]),_:1},8,[`modelValue`])]),_:1})])}var v=c({data:()=>({selection1:1,selection2:1,selection3:1,selection4:1,selection5:`Square`,selection6:1,selection7:1,radio2:!1,radio3:!1,radios1:[{label:`Choice 1`,value:1},{label:`Choice 2`,value:2},{label:`Choice 3`,value:3}],radios2:[{label:`Choice 1`},{label:`Choice 2`},{label:`Choice 3`}],radios3:[{label:`Square`,icon:`mdi mdi-square`},{label:`Circle`,icon:`mdi mdi-circle`},{label:`Triangle`,icon:`mdi mdi-triangle`}],radios4:[{label:`Choice 1`,value:1,color:`amber`},{label:`Choice 2`,value:2,color:`warning`},{label:`Choice 3`,value:3,color:`error`}]})},[[`render`,_]]);function y(s,c,l,u,d,f){let p=t(`title-link`),m=t(`component-api`);return o(),r(`div`,null,[c[2]||=n(`a`,{id:`api`,name:`api`},null,-1),c[3]||=n(`div`,{class:`w-divider my12`},null,-1),i(p,{class:`title1`,h2:``,slug:`w-radios-api`},{default:e(()=>[...c[0]||=[a(`<w-radios> API`,-1)]]),_:1}),i(m,{class:`mt0`,items:f.radiosProps,descriptions:s.radios.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),i(m,{items:s.radios.slots,title:`Slots`},null,8,[`items`]),i(m,{items:f.radiosEvents,title:`Events`},null,8,[`items`]),c[4]||=n(`div`,{class:`w-divider my12`},null,-1),i(p,{class:`title1`,h2:``,slug:`w-radio-api`},{default:e(()=>[...c[1]||=[a(`<w-radio> API`,-1)]]),_:1}),i(m,{class:`mt0`,items:f.radioProps,descriptions:s.radio.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),i(m,{items:s.radio.slots,title:`Slots`},null,8,[`items`]),i(m,{items:f.radioEvents,title:`Events`},null,8,[`items`])])}var b={propsDescs:{items:`An array of radio button items to display. Each item object should contain at least a <code>label</code> or a <code>value</code> attribute.`,modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide a value (of one of the <code>items</code> objects) to dictate the selected choice.<br>This value gets updated when using a v-model.`,labelOnLeft:`Moves the label to the left of each radio button. By default the label is displayed on the right.`,itemLabelKey:`The property name (aka "key") in each item object where to find the label of the item (if any).`,itemValueKey:`The property name (aka "key") in each item object where to find the value of the item (if any).`,itemColorKey:`The property name (aka "key") in each item object where to find the color of the item (if any).`,inline:`Displays all the radio buttons inline instead of in column.`,color:`Applies a color to the active radio buttons. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the radio buttons' labels. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,name:`Provide a native HTML <code>name</code> attribute to each radio button. If not provided, a unique common name will be computed and applied to all the radio buttons.`,disabled:`Disables all the radio buttons making them unreactive to user interactions.`,readonly:`The radio button will still look like an interactive radio button except that it is read-only: its current value cannot be changed by user interaction.`,required:`Applies the native HTML <code>required</code> attribute to each radio button.`,validators:`<span class="deep-orange">Only for validation, when the <strong class="code">w-radios</strong> component is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the radio button. Each function will be executed on radio button   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the radio button.`},slots:{item:{description:`Provide a custom content for each radio button label.`,params:{item:`The current item object.`,index:`The item index in the array of radios. Starts at 1 to be consistent with the <code>item.x</code> slot.`,checked:`A boolean representing the checked state of this particular item.`}},"item.x":{description:`<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single item: the item at the index <em class="code">x</em>.`,params:{item:`The current item object.`,index:`The item index in the array of radios. Starts at 1 to be consistent with the slot name.`,checked:`A boolean representing the checked state of this particular item.`}}},events:{input:{description:`Emitted each time any of the radio buttons is toggled.<br>Updates the v-model value in Vue 2.x only.`,params:{"[String, Number, Boolean]":`The <code>return-value</code> of the selected radio button.<br>The <code>return-value</code> will be one of the following attributes, if they exist, in this order: the item value, the item label, the item index.`}},"update:modelValue":{description:`Emitted each time any of the radio buttons is toggled.<br>Updates the v-model value in Vue 3 only.`,params:{"[String, Number, Boolean]":`The <code>return-value</code> of the selected radio button.<br>The <code>return-value</code> will be one of the following attributes, if they exist, in this order: the item value, the item label, the item index.`}},focus:{description:`Emitted on each radio button focus.`,params:{"[DOM event object]":`The associated focus DOM event.`}}}},x={propsDescs:{modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide a boolean to dictate the selected state of the radio button.<br>This value gets updated when using a v-model.`,returnValue:`Since the native HTML radio uses the <code>value</code> attribute to define the selected state, the <code>return-value</code> prop let you specify a value to return to the <code>v-model</code> when the radio is selected (instead of returning <code>true</code>).`,label:`Sets a visible label for the radio button.`,labelOnLeft:`Moves the label to the left of the radio button. By default the label is displayed on the right.`,color:`Applies a color to the radio button when active. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the radio button's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,noRipple:`Removes the ripple animation on select.`,name:`Provide a native HTML <code>name</code> attribute to the radio button. If not provided, a unique name will be computed.`,disabled:`Disables the radio button making it unreactive to user interactions.`,readonly:`The radio button will still look like an interactive radio button except that it is read-only: its current value cannot be changed by user interaction.`,required:`Applies the native HTML <code>required</code> attribute to the radio button.`,validators:`<span class="deep-orange">Only for validation, when this radio button is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the radio button. Each function will be executed on radio button   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the radio button.`},slots:{default:{description:`The radio button label content.`}},events:{input:{description:`Emitted each time the state of the radio button changes.<br>Updates the v-model value in Vue 2.x only.`,params:{"[Boolean]":`The current state of the radio button.`}},"update:modelValue":{description:`Emitted each time the state of the radio button changes.<br>Updates the v-model value in Vue 3 only.`,params:{"[Boolean]":`The current state of the radio button.`}},focus:{description:`Emitted on each radio button focus.`,params:{"[DOM event object]":`The associated focus DOM event.`}}}},S=c({data:()=>({radios:b,radio:x}),computed:{radiosProps(){return{...d.props,...l.props}},radioProps(){return{...u.props,...l.props}},radiosEvents(){return d.emits.reduce((e,t)=>(e[t]=b.events[t]||{},e),{})},radioEvents(){return u.emits.reduce((e,t)=>(e[t]=x.events[t]||{},e),{})}}},[[`render`,y]]);function C(s,c,l,u,d,f){let p=t(`ui-component-title`),m=t(`examples`),h=t(`api`);return o(),r(`main`,null,[i(p,{slug:`w-radio-and-w-radios`,code:!1},{default:e(()=>[...c[0]||=[n(`span`,{class:`code`},`w-radio`,-1),a(` & `,-1),n(`span`,{class:`code`},`w-radios`,-1)]]),_:1}),i(m),i(h)])}var w=c({components:{Examples:v,Api:S}},[[`render`,C]]);export{w as default};