import{r as u,g as f,o as p,a as n,b as s,w as l,e as t,t as d,F as M,k as D,c as j,_ as y,a3 as L,G as A}from"./index-Tdht9LZF.js";const P={class:"ml2"},O={class:"ml2"},V={class:"ml2"},R={key:1,class:"px2"},E={class:"ml1"};function U(i,e,h,I,k,w){const b=u("alert"),m=u("title-link"),o=u("w-select"),a=u("example"),g=u("w-flex"),c=u("w-icon"),S=u("w-tag");return p(),f("div",null,[n(b,{info:""},{default:l(()=>e[4]||(e[4]=[t("The "),s("span",{class:"code"},"w-select",-1),t(` component can be placed in a hidden overflow container and the dropdown
menu will still be fully visible when open.`),s("br",null,null,-1),t(`
This is because the select dropdown menu is placed at the `),s("span",{class:"code"},".w-app",-1),t(` level in the DOM,
just so you don't have to worry about this annoying case.
`)])),_:1}),n(m,{h2:""},{default:l(()=>e[5]||(e[5]=[t("Basic")])),_:1}),e[118]||(e[118]=s("p",null,[t("This is the most basic use of the "),s("span",{class:"code"},"w-select"),t(" component. No label, no v-model, only items.")],-1)),n(a,null,{pug:l(()=>e[6]||(e[6]=[t('w-select(:items="items")')])),html:l(()=>e[7]||(e[7]=[t('<w-select :items="items"></w-select>')])),js:l(()=>e[8]||(e[8]=[t(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)])),default:l(()=>[n(o,{items:i.items1},null,8,["items"])]),_:1}),n(m,{h2:""},{default:l(()=>e[9]||(e[9]=[t("Label and / or placeholder")])),_:1}),e[119]||(e[119]=s("p",null,[t("The select list can have a label or not and a placeholder or not."),s("br")],-1)),n(a,null,{pug:l(()=>e[10]||(e[10]=[t(`w-select(:items="items" label="Label")
w-select.mt4(:items="items" placeholder="Placeholder")
w-select.mt4(:items="items" label="Label" placeholder="Placeholder")`)])),html:l(()=>e[11]||(e[11]=[t(`<w-select
  :items="items"
  label="Label">
</w-select>

<w-select
  class="mt4"
  :items="items"
  placeholder="Placeholder">
</w-select>

<w-select
  class="mt4"
  :items="items"
  label="Label"
  placeholder="Placeholder">
</w-select>
`)])),js:l(()=>e[12]||(e[12]=[t(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)])),default:l(()=>[n(o,{items:i.items1,label:"Label"},null,8,["items"]),n(o,{class:"mt4",items:i.items1,placeholder:"Placeholder"},null,8,["items"]),n(o,{class:"mt4",items:i.items1,label:"Label",placeholder:"Placeholder"},null,8,["items"])]),_:1}),n(b,{tip:""},{default:l(()=>e[13]||(e[13]=[t(`The items of the select list should have a label, which is by default expected in each item
object under the `),s("code",null,"label",-1),t(" name."),s("br",null,null,-1),t(`
If this is a constraint, you can use the option `),s("code",null,"item-label-key",-1),t(` to specify the name of another
attribute to be used instead.
`)])),_:1}),n(m,{h2:""},{default:l(()=>e[14]||(e[14]=[t("Outline")])),_:1}),n(a,null,{pug:l(()=>e[16]||(e[16]=[t('w-select(:items="items" outline) Label')])),html:l(()=>e[17]||(e[17]=[t('<w-select :items="items" outline>Label</w-select>')])),js:l(()=>e[18]||(e[18]=[t(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)])),default:l(()=>[n(o,{items:i.items1,outline:""},{default:l(()=>e[15]||(e[15]=[t("Label")])),_:1},8,["items"])]),_:1}),n(m,{h2:""},{default:l(()=>e[19]||(e[19]=[t("Colors")])),_:1}),e[120]||(e[120]=s("p",{class:"mb4"},[t("Like in most components, you can set a "),s("code",null,"color"),t(" for the text and a "),s("code",null,"bg-color"),t(` for the
background.`),s("br"),t(`
By default, the text has the "`),s("span",{class:"code"},"primary"),t('" color.')],-1)),n(m,{h3:"",slug:"default-style"},{default:l(()=>e[20]||(e[20]=[t("Default style (Underline)")])),_:1}),n(a,null,{pug:l(()=>e[23]||(e[23]=[t(`w-select(:items="items" color="blue") Label
w-select.mt4(:items="items" bg-color="blue-light5" color="blue-dark3") Label`)])),html:l(()=>e[24]||(e[24]=[t(`<w-select
  :items="items"
  color="blue">
  Label
</w-select>

<w-select
  class="mt4"
  :items="items"
  bg-color="blue-light5"
  color="blue-dark3">
  Label
</w-select>`)])),js:l(()=>e[25]||(e[25]=[t(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)])),default:l(()=>[n(o,{items:i.items1,color:"blue"},{default:l(()=>e[21]||(e[21]=[t("Label")])),_:1},8,["items"]),n(o,{class:"mt4",items:i.items1,"bg-color":"blue-light5",color:"blue-dark3"},{default:l(()=>e[22]||(e[22]=[t("Label")])),_:1},8,["items"])]),_:1}),n(m,{h3:""},{default:l(()=>e[26]||(e[26]=[t("Outline style")])),_:1}),n(a,null,{pug:l(()=>e[29]||(e[29]=[t(`w-select(:items="items" outline color="blue") Label
w-select.mt4(:items="items" outline bg-color="blue-light5" color="blue-dark3") Label`)])),html:l(()=>e[30]||(e[30]=[t(`<w-select
  :items="items"
  outline
  color="blue">
  Label
</w-select>

<w-select
  class="mt4"
  :items="items"
  outline
  bg-color="blue-light5"
  color="blue-dark3">
  Label
</w-select>`)])),js:l(()=>e[31]||(e[31]=[t(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)])),default:l(()=>[n(o,{items:i.items1,outline:"",color:"blue"},{default:l(()=>e[27]||(e[27]=[t("Label")])),_:1},8,["items"]),n(o,{class:"mt4",items:i.items1,outline:"","bg-color":"blue-light5",color:"blue-dark3"},{default:l(()=>e[28]||(e[28]=[t("Label")])),_:1},8,["items"])]),_:1}),n(m,{h3:""},{default:l(()=>e[32]||(e[32]=[t("List items colors")])),_:1}),e[121]||(e[121]=s("p",null,[t("If an item object contains the key "),s("code",null,"color"),t(`, it will naturally be used by the
`),s("strong",{class:"code"},"w-select"),t(" component to display this list item in this color."),s("br"),t(`
To disable this you can set the `),s("code",null,"item-color-key"),t(" prop to an empty string.")],-1)),n(a,null,{pug:l(()=>e[34]||(e[34]=[t('w-select(:items="items") Pick a color')])),html:l(()=>e[35]||(e[35]=[t(`<w-select :items="items">
  Pick a color
</w-select>`)])),js:l(()=>e[36]||(e[36]=[t(`data: () => ({
  items: [
    { label: 'Amber', color: 'amber' },
    { label: 'Warning', color: 'warning' },
    { label: 'Error', color: 'error' },
    { label: 'Pink', color: 'pink' }
  ]
})
`)])),default:l(()=>[n(o,{items:i.items4},{default:l(()=>e[33]||(e[33]=[t("Pick a color")])),_:1},8,["items"])]),_:1}),n(m,{h2:""},{default:l(()=>e[37]||(e[37]=[t("Shadow")])),_:1}),n(a,null,{pug:l(()=>e[40]||(e[40]=[t(`.title4.mb2 Default style (Underline)
w-select(:items="items" shadow) Label

.title4.mt6.mb2 Outline style
w-select(:items="items" outline shadow) Label`)])),html:l(()=>e[41]||(e[41]=[t(`<div class="title4 mb2">
  Default style (Underline)
</div>

<w-select :items="items" shadow>
  Label
</w-select>

<div class="title4 mt6 mb2">
  Outline style
</div>

<w-select :items="items" outline shadow>
  Label
</w-select>`)])),js:l(()=>e[42]||(e[42]=[t(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)])),default:l(()=>[e[43]||(e[43]=s("div",{class:"title4"},"Default style (Underline)",-1)),n(o,{items:i.items1,shadow:""},{default:l(()=>e[38]||(e[38]=[t("Label")])),_:1},8,["items"]),e[44]||(e[44]=s("div",{class:"title4 mt6"},"Outline style",-1)),n(o,{items:i.items1,outline:"",shadow:""},{default:l(()=>e[39]||(e[39]=[t("Label")])),_:1},8,["items"])]),_:1}),n(m,{h2:""},{default:l(()=>e[45]||(e[45]=[t("Tile & round")])),_:1}),n(a,null,{pug:l(()=>e[50]||(e[50]=[t(`.title4 Default style (Underline)
w-select.mt3(:items="items" bg-color="purple-light5" tile) Tile
w-select.mt4(:items="items" bg-color="purple-light5" round) Round

.title4.mt6 Outline style
w-select.mt3(:items="items" outline tile) Tile
w-select.mt4(:items="items" outline round) Round`)])),html:l(()=>e[51]||(e[51]=[t(`<div class="title4">
  Default style (Underline)
</div>

<w-select
  class="mt3"
  :items="items"
  bg-color="purple-light5"
  tile>
  Tile
</w-select>

<w-select
  class="mt4"
  :items="items"
  bg-color="purple-light5"
  round>
  Round
</w-select>

<div class="title4 mt6">
  Outline style
</div>

<w-select
  class="mt3"
  :items="items"
  outline
  tile>
  Tile
</w-select>

<w-select
  class="mt4"
  :items="items"
  outline
  round>
  Round
</w-select>
`)])),js:l(()=>e[52]||(e[52]=[t(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)])),default:l(()=>[e[53]||(e[53]=s("div",{class:"title4"},"Default style (Underline)",-1)),n(o,{items:i.items1,"bg-color":"purple-light5",tile:""},{default:l(()=>e[46]||(e[46]=[t("Tile")])),_:1},8,["items"]),n(o,{class:"mt4",items:i.items1,"bg-color":"purple-light5",round:""},{default:l(()=>e[47]||(e[47]=[t("Round")])),_:1},8,["items"]),e[54]||(e[54]=s("div",{class:"title4 mt6"},"Outline style",-1)),n(o,{items:i.items1,outline:"",tile:""},{default:l(()=>e[48]||(e[48]=[t("Tile")])),_:1},8,["items"]),n(o,{class:"mt4",items:i.items1,outline:"",round:""},{default:l(()=>e[49]||(e[49]=[t("Round")])),_:1},8,["items"])]),_:1}),n(m,{h2:""},{default:l(()=>e[55]||(e[55]=[t("Fit to content")])),_:1}),n(a,null,{pug:l(()=>e[57]||(e[57]=[t(`w-select(
  :items="items"
  placeholder="Select an item"
  fit-to-content) Fit to content`)])),html:l(()=>e[58]||(e[58]=[t(`<w-select
  :items="items"
  placeholder="Select an item"
  fit-to-content>
  Fit to content
</w-select>
`)])),js:l(()=>e[59]||(e[59]=[t(`data: () => ({
  items: [
    { label: '1st item' },
    { label: 'Second item' },
    { label: 'Third & longest item' }
  ]
})
`)])),default:l(()=>[n(o,{items:i.items5,placeholder:"Select an item","fit-to-content":""},{default:l(()=>e[56]||(e[56]=[t("Fit to content")])),_:1},8,["items"])]),_:1}),n(m,{h2:""},{default:l(()=>e[60]||(e[60]=[t("Multiple selection")])),_:1}),n(a,null,{pug:l(()=>e[61]||(e[61]=[t('w-select(:items="items" multiple)')])),html:l(()=>e[62]||(e[62]=[t('<w-select :items="items" multiple></w-select>')])),js:l(()=>e[63]||(e[63]=[t(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)])),default:l(()=>[n(o,{items:i.items1,multiple:""},null,8,["items"])]),_:1}),n(m,{h2:""},{default:l(()=>e[64]||(e[64]=[t("V-model")])),_:1}),n(b,{tip:""},{default:l(()=>e[65]||(e[65]=[t("By default, the "),s("span",{class:"code"},"w-select",-1),t(" component expects the items to have a "),s("code",null,"model-value",-1),t(" attribute."),s("br",null,null,-1),t(`
If this is a constraint, you can use the option `),s("code",null,"item-value-key",-1),t(` to specify the name of another
attribute to be used instead (must have a unique value), like an id for instance.`)])),_:1}),n(a,null,{pug:l(()=>e[67]||(e[67]=[t(`w-select(v-model="selection" :items="items" multiple)
w-flex.align-center.mt4
  span v-model:
  code.ml2 `+d("{{ selection }}"))])),html:l(()=>e[68]||(e[68]=[t(`<w-select
  v-model="selection"
  :items="items"
  multiple>
</w-select>

<w-flex class="align-center mt4">
  <span>v-model:</span>
  <code class="ml2">`+d("{{ selection }}")+`</code>
</w-flex>`)])),js:l(()=>e[69]||(e[69]=[t(`data: () => ({
  items: [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 }
  ],
  selection: [1, 3]
})
`)])),default:l(()=>[n(o,{modelValue:i.vModelSelect1,"onUpdate:modelValue":e[0]||(e[0]=r=>i.vModelSelect1=r),items:i.items3,multiple:""},null,8,["modelValue","items"]),n(g,{class:"align-center mt4"},{default:l(()=>[e[66]||(e[66]=s("span",null,"v-model:",-1)),s("code",P,d(i.vModelSelect1),1)]),_:1})]),_:1}),n(m,{h3:""},{default:l(()=>e[70]||(e[70]=[t("Without values (using labels)")])),_:1}),e[122]||(e[122]=s("p",null,"If no values are provided in the items objects, the labels will be used to identify the selected items.",-1)),n(a,null,{pug:l(()=>e[72]||(e[72]=[t(`w-select(v-model="selection" :items="items" multiple)
w-flex.align-center.mt4
  span v-model:
  code.ml2 `+d("{{ selection }}"))])),html:l(()=>e[73]||(e[73]=[t(`<w-select
  v-model="selection"
  :items="items"
  multiple>
</w-select>

<w-flex class="align-center mt4">
  <span>v-model:</span>
  <code class="ml2">`+d("{{ selection }}")+`</code>
</w-flex>`)])),js:l(()=>e[74]||(e[74]=[t(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ],
  selection: ['Item 1', 'Item 3']
})
`)])),default:l(()=>[n(o,{modelValue:i.vModelSelect2,"onUpdate:modelValue":e[1]||(e[1]=r=>i.vModelSelect2=r),items:i.items1,multiple:""},null,8,["modelValue","items"]),n(g,{class:"align-center mt4"},{default:l(()=>[e[71]||(e[71]=s("span",null,"v-model:",-1)),s("code",O,d(i.vModelSelect2),1)]),_:1})]),_:1}),n(m,{h3:""},{default:l(()=>e[75]||(e[75]=[t("Using full objects in v-model")])),_:1}),e[123]||(e[123]=s("p",null,[t("If it's more convenient for you, you can ask the "),s("span",{class:"code"},"w-select"),t(` component to return the
full items objects in the selection.`),s("br"),t(`
You then have the choice to provide an array of either values or full objects in the v-model,
if you want to prefill the select list.`)],-1)),e[124]||(e[124]=s("p",null,null,-1)),n(a,null,{pug:l(()=>e[77]||(e[77]=[t(`w-select(v-model="selection" :items="items" multiple return-object)
w-flex.align-center.mt4
  span v-model:
  code.ml2 `+d("{{ selection }}"))])),html:l(()=>e[78]||(e[78]=[t(`<w-select
  v-model="selection"
  :items="items"
  multiple
  return-object>
</w-select>

<w-flex class="align-center mt4">
  <span>v-model:</span>
  <code class="ml2">`+d("{{ selection }}")+`</code>
</w-flex>`)])),js:l(()=>e[79]||(e[79]=[t(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ],
  selection: [{ label: 'Item 3' }]
})
`)])),default:l(()=>[n(o,{modelValue:i.vModelSelect3,"onUpdate:modelValue":e[2]||(e[2]=r=>i.vModelSelect3=r),items:i.items1,multiple:"","return-object":""},null,8,["modelValue","items"]),n(g,{class:"align-center mt4"},{default:l(()=>[e[76]||(e[76]=s("span",null,"v-model:",-1)),s("code",V,d(i.vModelSelect3),1)]),_:1})]),_:1}),n(m,{h2:""},{default:l(()=>e[80]||(e[80]=[t("Label position")])),_:1}),e[125]||(e[125]=s("p",null,`By default the label is positioned inside, you can also place it on the left or right outside of
the select list.`,-1)),n(a,null,{pug:l(()=>e[81]||(e[81]=[t(`w-select(:items="items" label="Select an item")
w-select.mt4(:items="items" label="Select an item" label-position="left")
w-select.mt4(:items="items" label="Select an item" label-position="right")`)])),html:l(()=>e[82]||(e[82]=[t(`<w-select
  :items="items"
  label="Select an item">
</w-select>

<w-select
  class="mt4"
  :items="items"
  label="Select an item"
  label-position="left">
</w-select>

<w-select
  class="mt4"
  :items="items"
  label="Select an item"
  label-position="right">
</w-select>`)])),js:l(()=>e[83]||(e[83]=[t(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)])),default:l(()=>[n(o,{items:i.items1,label:"Select an item"},null,8,["items"]),n(o,{class:"mt4",items:i.items1,label:"Select an item","label-position":"left"},null,8,["items"]),n(o,{class:"mt4",items:i.items1,label:"Select an item","label-position":"right"},null,8,["items"])]),_:1}),n(m,{h2:""},{default:l(()=>e[84]||(e[84]=[t("Custom label")])),_:1}),e[126]||(e[126]=s("p",null,[t("It is convenient to have the label inside the "),s("span",{class:"code"},"w-select"),t(` component to let it handle
the field focus event on label click.`),s("br"),t(`
The `),s("span",{class:"code"},"label"),t(` prop accepts any HTML, but because passing complex html via a prop is not fun,
there is also a prop for setting the label wish will grant more freedom.
`)],-1)),n(a,null,{pug:l(()=>e[92]||(e[92]=[t(`w-select(:items="items" label-position="inside" outline)
  w-icon.orange mdi mdi-arrow-right
  span.purple.mx1 Inside
  w-icon.orange mdi mdi-arrow-left
w-select.mt4(:items="items" label-position="left" outline)
  span.green.mr1 Left
  w-icon.orange mdi mdi-arrow-right
w-select.mt4(:items="items" label-position="right" outline)
  w-icon.orange mdi mdi-arrow-left
  span.red.ml1 Right`)])),html:l(()=>e[93]||(e[93]=[t(`<w-select
  :items="items"
  label-position="inside"
  outline>
  <w-icon class="orange">mdi mdi-arrow-right</w-icon>
  <span class="purple mx1">Inside</span>
  <w-icon class="orange">mdi mdi-arrow-left</w-icon>
</w-select>

<w-select
  class="mt4"
  :items="items"
  label-position="left"
  outline>
  <span class="green mr1">Left</span>
  <w-icon class="orange">mdi mdi-arrow-right</w-icon>
</w-select>

<w-select
  class="mt4"
  :items="items"
  label-position="right"
  outline>
  <w-icon class="orange">mdi mdi-arrow-left</w-icon>
  <span class="red ml1">Right</span>
</w-select>
`)])),js:l(()=>e[94]||(e[94]=[t(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)])),default:l(()=>[n(o,{items:i.items1,"label-position":"inside",outline:""},{default:l(()=>[n(c,{class:"orange"},{default:l(()=>e[85]||(e[85]=[t("mdi mdi-arrow-right")])),_:1}),e[87]||(e[87]=s("span",{class:"purple mx1"},"Inside",-1)),n(c,{class:"orange"},{default:l(()=>e[86]||(e[86]=[t("mdi mdi-arrow-left")])),_:1})]),_:1},8,["items"]),n(o,{class:"mt4",items:i.items1,"label-position":"left",outline:""},{default:l(()=>[e[89]||(e[89]=s("span",{class:"green mr1"},"Left",-1)),n(c,{class:"orange"},{default:l(()=>e[88]||(e[88]=[t("mdi mdi-arrow-right")])),_:1})]),_:1},8,["items"]),n(o,{class:"mt4",items:i.items1,"label-position":"right",outline:""},{default:l(()=>[n(c,{class:"orange"},{default:l(()=>e[90]||(e[90]=[t("mdi mdi-arrow-left")])),_:1}),e[91]||(e[91]=s("span",{class:"red ml1"},"Right",-1))]),_:1},8,["items"])]),_:1}),n(m,{h2:""},{default:l(()=>e[95]||(e[95]=[t("Custom selection string")])),_:1}),e[127]||(e[127]=s("p",null,[t("The selection string is customizable through the "),s("code",null,"selection"),t(" slot."),s("br"),t(`
For consistency, the name of the provided parameter containing the selected item(s) is `),s("code",null,"item"),t(`,
whether you use a multiple or single select list.`)],-1)),n(a,null,{pug:l(()=>e[96]||(e[96]=[t(`w-select(:items="items" v-model="selection" multiple)
  template(#selection="{ item }")
    w-tag.mr2(v-for="(item, i) in item" :key="i" bg-color="grey-light4")
      | `+d("{{ item.label }}"))])),html:l(()=>e[97]||(e[97]=[t(`<w-select :items="items" v-model="selection" multiple>
  <template #selection="{ item }">
    <w-tag
      class="mr2"
      v-for="(item, i) in item"
      :key="i"
      bg-color="grey-light4">
      `+d("{{ item.label }}")+`
    </w-tag>
  </template>
</w-select>`)])),js:l(()=>e[98]||(e[98]=[t(`data: () => ({
  items: [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 }
  ],
  selection: [1, 3]
})
`)])),default:l(()=>[n(o,{items:i.items3,modelValue:i.customSelection,"onUpdate:modelValue":e[3]||(e[3]=r=>i.customSelection=r),multiple:""},{selection:l(({item:r})=>[(p(!0),f(M,null,D(r,(v,T)=>(p(),j(S,{class:"mr2",key:T,"bg-color":"grey-light4"},{default:l(()=>[t(d(v.label),1)]),_:2},1024))),128))]),_:1},8,["items","modelValue"])]),_:1}),n(m,{h2:""},{default:l(()=>e[99]||(e[99]=[t("Custom list items")])),_:1}),n(a,null,{pug:l(()=>e[101]||(e[101]=[t(`w-select(:items="items")
  template(#item="{ item, selected }")
    w-icon.primary(v-if="selected") wi-check
    span.px2(v-else)
    span.ml1 `+d("{{ item.label }}")+`
    w-tag.ml2(bg-color="grey-light4" xs) `+d("{{ item.value }}"))])),html:l(()=>e[102]||(e[102]=[t(`<w-select :items="items">
  <template #item="{ item, selected }">
    <w-icon v-if="selected" class="primary">wi-check</w-icon>
    <span v-else class="px2"></span>

    <span class="ml1">`+d("{{ item.label }}")+`</span>

    <w-tag class="ml2" bg-color="grey-light4" xs>
      `+d("{{ item.value }}")+`
    </w-tag>
  </template>
</w-select>`)])),js:l(()=>e[103]||(e[103]=[t(`data: () => ({
  items: [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 }
  ]
})
`)])),default:l(()=>[n(o,{items:i.items3},{item:l(({item:r,selected:v})=>[v?(p(),j(c,{key:0,class:"primary"},{default:l(()=>e[100]||(e[100]=[t("wi-check")])),_:1})):(p(),f("span",R)),s("span",E,d(r.label),1),n(S,{class:"ml2","bg-color":"grey-light4",xs:""},{default:l(()=>[t(d(r.value),1)]),_:2},1024)]),_:1},8,["items"])]),_:1}),n(m,{h2:""},{default:l(()=>e[104]||(e[104]=[t("Inner icons")])),_:1}),n(a,null,{pug:l(()=>e[105]||(e[105]=[t(`.title4.mb2 Label outside
w-select(:items="items" label="Select" label-position="left" outline inner-icon-left="mdi mdi-star")
w-select.mt4(:items="items" label="Select" label-position="right" outline inner-icon-right="mdi mdi-arrow-down")

.title4.mt6.mb2 Label inside
w-select(:items="items" label="Select" label-position="inside" outline inner-icon-left="mdi mdi-star")
w-select.mt4(:items="items" label="Select" label-position="inside" outline inner-icon-right="mdi mdi-arrow-down")`)])),html:l(()=>e[106]||(e[106]=[t(`<div class="title4 mb2">
  Label outside
</div>

<w-select
  :items="items"
  label="Select"
  label-position="left"
  outline
  inner-icon-left="mdi mdi-star">
</w-select>

<w-select
  class="mt4"
  :items="items"
  label="Select"
  label-position="right"
  outline
  inner-icon-right="mdi mdi-arrow-down">
</w-select>

<div class="title4 mt6 mb2">
  Label inside
</div>

<w-select
  :items="items"
  label="Select"
  label-position="inside"
  outline
  inner-icon-left="mdi mdi-star">
</w-select>

<w-select
  class="mt4"
  :items="items"
  label="Select"
  label-position="inside"
  outline
  inner-icon-right="mdi mdi-arrow-down">
</w-select>`)])),js:l(()=>e[107]||(e[107]=[t(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)])),default:l(()=>[e[108]||(e[108]=s("div",{class:"title4 mb2"},"Label outside",-1)),n(o,{items:i.items1,label:"Select","label-position":"left",outline:"","inner-icon-left":"mdi mdi-star"},null,8,["items"]),n(o,{class:"mt4",items:i.items1,label:"Select","label-position":"right",outline:"","inner-icon-right":"mdi mdi-arrow-down"},null,8,["items"]),e[109]||(e[109]=s("div",{class:"title4 mt6 mb2"},"Label inside",-1)),n(o,{items:i.items1,label:"Select","label-position":"inside",outline:"","inner-icon-left":"mdi mdi-star"},null,8,["items"]),n(o,{class:"mt4",items:i.items1,label:"Select","label-position":"inside",outline:"","inner-icon-right":"mdi mdi-arrow-down"},null,8,["items"])]),_:1}),n(m,{h2:""},{default:l(()=>e[110]||(e[110]=[t("Disabled & readonly")])),_:1}),n(a,null,{pug:l(()=>e[111]||(e[111]=[t(`w-select.mb4(
  :items="items"
  label="Disabled & empty"
  outline
  disabled)
w-select.mb4(
  :items="items"
  model-value="Item 1"
  label="Disabled & filled"
  outline
  disabled)
w-select.mb4(
  :items="items"
  label="Readonly & empty"
  outline
  readonly)
w-select(
  :items="items"
  model-value="Item 1"
  label="Readonly & filled"
  outline
  readonly)`)])),html:l(()=>e[112]||(e[112]=[t(`<w-select
  class="mb4"
  :items="items"
  label="Disabled & empty"
  outline
  disabled>
</w-select>

<w-select
  class="mb4"
  :items="items"
  value="Item 1"
  label="Disabled & filled"
  outline
  disabled>
</w-select>

<w-select
  class="mb4"
  :items="items"
  label="Readonly & empty"
  outline
  readonly>
</w-select>

<w-select
  :items="items"
  value="Item 1"
  label="Readonly & filled"
  outline
  readonly>
</w-select>
`)])),js:l(()=>e[113]||(e[113]=[t(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})`)])),default:l(()=>[n(o,{class:"mb4",items:i.items1,label:"Disabled & empty",outline:"",disabled:""},null,8,["items"]),n(o,{class:"mb4",items:i.items1,label:"Disabled & filled","model-value":"Item 1",outline:"",disabled:""},null,8,["items"]),n(o,{class:"mb4",items:i.items1,label:"Readonly & empty",outline:"",readonly:""},null,8,["items"]),n(o,{items:i.items1,"model-value":"Item 1",label:"Readonly & filled",outline:"",readonly:""},null,8,["items"])]),_:1}),s("p",null,[e[114]||(e[114]=s("strong",{class:"mr1"},"Note:",-1)),e[115]||(e[115]=t("You can also disable any specific list item by adding a ")),e[116]||(e[116]=s("code",null,"disabled: true",-1)),e[117]||(e[117]=t(" property in it:")),n(o,{class:"ml2",placeholder:"select an item","fit-to-content":"",items:[{label:"Item 1"},{label:"Disabled item 2",disabled:!0},{label:"Item 3"}]})])])}const C={data:()=>({items1:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"}],items2:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"},{label:"Item 5",disabled:!0}],items3:[{label:"Item 1",value:1},{label:"Item 2",value:2},{label:"Item 3",value:3}],items4:[{label:"Amber",color:"amber"},{label:"Warning",color:"warning"},{label:"Error",color:"error"},{label:"Pink",color:"pink"}],items5:[{label:"1st item"},{label:"Second item"},{label:"Third & longest item"}],vModelSelect1:[1,3],customSelection:[1,3],vModelSelect2:["Item 1","Item 3"],vModelSelect3:[{label:"Item 3"}]})},$=y(C,[["render",U]]);function x(i,e,h,I,k,w){const b=u("title-link"),m=u("component-api");return p(),f("div",null,[e[1]||(e[1]=s("div",{class:"w-divider my12"},null,-1)),n(b,{class:"title1",h2:""},{default:l(()=>e[0]||(e[0]=[t("API")])),_:1}),n(m,{class:"mt0",items:w.props,descriptions:i.propsDescs,title:"Props"},null,8,["items","descriptions"]),n(m,{items:i.slots,title:"Slots"},null,8,["items"]),n(m,{items:w.events,title:"Events"},null,8,["items"])])}const F={items:"Expecting an array of objects. Each object being a select list item, it should include at least a <code>label</code> attribute.",modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>The current selection of the select field.<br>Gets updated on selection change.',multiple:"Allows multiple selections. When set to <code>true</code>, the list of choices will stay open after selecting an item.",placeholder:"Provide a placeholder for the select field. If a label is positioned inside, it will be moved above the field so it doesn't overlap.",label:"Sets a visible label for the select field.",labelPosition:"Sets the position of the label to one of the following positions: 'left', 'right', 'inside'.",innerIconLeft:"Adds an icon on the left inside the select field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",innerIconRight:"Adds an icon on the right inside the select field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",staticLabel:"Prevents moving the label above the select field when the <code>labelPosition</code> is equal to <code>inside</code>. If a placeholder is present, it will be hidden and the label will be displayed instead.<br>When a value is set the static label is replaced by the textual value.",itemLabelKey:'The property name (aka "key") in each item object where to find the label of the item.',itemColorKey:'The property name (aka "key") in each item object where to find the color of the item.<br>By default, the <code>color</code> key of the current item will be used to render this item in this color.<br>You can also provide an empty string to disable this feature.',itemValueKey:'The property name (aka "key") in each item object where to find the value of the item.',itemClass:"Applies a custom CSS class to each select list item.",menuClass:"Applies a custom CSS class to the select list's floating menu element.",menuProps:`Internally, the <strong class="code">w-select</strong> component uses the <strong class="code">w-menu</strong> component.<br>This option allows you to pass down to the menu all the props that the <strong class="code">w-menu</strong> component can accept.<br>For instance, you could set <code>:menu-props="{ appendTo: '.my-scrolling-container' }"</code>, in order to move the select list floating menu to a particular DOM node, and allowing it to scroll with its container.`,noUnselect:"When set to <code>true</code>, forces the select list to always have at least one selected item.<br>For single select lists, it prevents unselecting the selected item but still allows switching selection.<br>For multiple select lists, it will only prevent unselecting the item when it's the only remaining selection. ",color:`Applies a color to the select's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the select's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the select's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,outline:"The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.",round:"Sets a maximum border-radius on the corners of the select field, giving it a round look.",shadow:"Applies a drop shadow to the select field.",tile:"Removes the default border-radius and sets sharp edges on the select field.",fitToContent:"Fits the select list width to its selected content.",dark:!1,returnObject:"The current selection is returned via the <code>value</code> prop or <code>v-model</code> as an array of full objects or a single full object (returning the original as given) when <code>multiple</code> is set to false.",name:"Provide a native HTML <code>name</code> attribute to the select field. If not provided, a unique name will be computed.",disabled:"Disables the select field making it unreactive to user interactions.",readonly:"The select field will still look like an interactive select field except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the select field.",validators:'<span class="deep-orange">Only for validation, when the select field is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the select field. Each function will be executed on select field validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the select field.'},B={default:{description:"The label content, if the <code>label</code> prop is not flexible enough."},selection:{description:"Provide a custom template for the selection string.",params:{item:"The selected item(s) object(s). May be an array if <code>multiple</code> is <code>true</code>, or a single object otherwise."}},item:{description:"Provide a common custom template for all the select list items.",params:{item:"The current item object.",selected:"A Boolean representing the selected state of the list item.",index:"The index of the list item."}},"item.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single select list item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",selected:"A Boolean representing the selected state of the list item.",index:"The index of the list item."}},"icon-left":{description:"The left icon, if the <code>innerIconLeft</code> prop is not flexible enough.<br/>"},"icon-right":{description:"The right icon, if the <code>innerIconRight</code> prop is not flexible enough."}},W={input:{description:"Emitted each time the selected item(s) changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Array, Object, Mixed value]":"The new selected value(s). Array if <code>multiple</code> is set to <code>true</code>, single value otherwise."}},"update:modelValue":{description:"Emitted each time the selected item(s) changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Array, Object, Mixed value]":"The new selected value(s). Array if <code>multiple</code> is set to <code>true</code>, single value otherwise."}},focus:{description:"Emitted on select focus.",params:{"[DOM event object]":"The associated focus DOM event."}},blur:{description:"Emitted on select blur.",params:{"[DOM event object]":"The associated blur DOM event."}},"item-click":{description:"Emitted on select list item click.",params:{"[Object]":"The clicked item object."}},"item-select":{description:"Emitted on list item select (click or <kbd>enter</kbd> keydown).",params:{"[Object]":"The selected item object."}},"click:inner-icon-left":{description:"Emitted on click of the left inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}},"click:inner-icon-right":{description:"Emitted on click of the right inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}}},N={data:()=>({propsDescs:F,slots:B}),computed:{props(){return{...L.props,...A.props}},events(){return L.emits.reduce((i,e)=>(i[e]=W[e]||{})&&i,{})}}},q=y(N,[["render",x]]);function H(i,e,h,I,k,w){const b=u("ui-component-title"),m=u("examples"),o=u("api");return p(),f("main",null,[n(b,null,{default:l(()=>e[0]||(e[0]=[t("w-select")])),_:1}),n(m),n(o)])}const K={components:{Examples:$,Api:q}},G=y(K,[["render",H]]);export{G as default};
