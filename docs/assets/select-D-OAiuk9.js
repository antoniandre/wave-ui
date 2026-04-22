import{H as e,N as t,c as n,d as r,g as i,h as a,j as o,k as s,l as c,r as l,vt as u}from"./runtime-core.esm-bundler-DPe36P4s.js";import{t as d}from"./_plugin-vue_export-helper-S3RvzygF.js";import{t as f}from"./form-elements-Bk29BSHS.js";import{p}from"./index-CmUoOmTq.js";var m={class:`ml2`},h={class:`ml2`},g={class:`ml2`},_={key:1,class:`px2`},v={class:`ml1`};function y(d,f,p,y,b,x){let S=t(`alert`),C=t(`title-link`),w=t(`w-select`),T=t(`example`),E=t(`w-flex`),D=t(`w-icon`),O=t(`w-tag`);return s(),r(`div`,null,[i(S,{info:``},{default:e(()=>[...f[4]||=[a(`The `,-1),n(`span`,{class:`code`},`w-select`,-1),a(` component can be placed in a hidden overflow container and the dropdown
menu will still be fully visible when open.`,-1),n(`br`,null,null,-1),a(`
This is because the select dropdown menu is placed at the `,-1),n(`span`,{class:`code`},`.w-app`,-1),a(` level in the DOM,
just so you don't have to worry about this annoying case.
`,-1)]]),_:1}),i(C,{h2:``},{default:e(()=>[...f[5]||=[a(`Basic`,-1)]]),_:1}),f[118]||=n(`p`,null,[a(`This is the most basic use of the `),n(`span`,{class:`code`},`w-select`),a(` component. No label, no v-model, only items.`)],-1),i(T,null,{pug:e(()=>[...f[6]||=[a(`w-select(:items="items")`,-1)]]),html:e(()=>[...f[7]||=[a(`<w-select :items="items"></w-select>`,-1)]]),js:e(()=>[...f[8]||=[a(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`,-1)]]),default:e(()=>[i(w,{items:d.items1},null,8,[`items`])]),_:1}),i(C,{h2:``},{default:e(()=>[...f[9]||=[a(`Label and / or placeholder`,-1)]]),_:1}),f[119]||=n(`p`,null,[a(`The select list can have a label or not and a placeholder or not.`),n(`br`)],-1),i(T,null,{pug:e(()=>[...f[10]||=[a(`w-select(:items="items" label="Label")
w-select.mt4(:items="items" placeholder="Placeholder")
w-select.mt4(:items="items" label="Label" placeholder="Placeholder")`,-1)]]),html:e(()=>[...f[11]||=[a(`<w-select
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
`,-1)]]),js:e(()=>[...f[12]||=[a(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`,-1)]]),default:e(()=>[i(w,{items:d.items1,label:`Label`},null,8,[`items`]),i(w,{class:`mt4`,items:d.items1,placeholder:`Placeholder`},null,8,[`items`]),i(w,{class:`mt4`,items:d.items1,label:`Label`,placeholder:`Placeholder`},null,8,[`items`])]),_:1}),i(S,{tip:``},{default:e(()=>[...f[13]||=[a(`The items of the select list should have a label, which is by default expected in each item
object under the `,-1),n(`code`,null,`label`,-1),a(` name.`,-1),n(`br`,null,null,-1),a(`
If this is a constraint, you can use the option `,-1),n(`code`,null,`item-label-key`,-1),a(` to specify the name of another
attribute to be used instead.
`,-1)]]),_:1}),i(C,{h2:``},{default:e(()=>[...f[14]||=[a(`Outline`,-1)]]),_:1}),i(T,null,{pug:e(()=>[...f[16]||=[a(`w-select(:items="items" outline) Label`,-1)]]),html:e(()=>[...f[17]||=[a(`<w-select :items="items" outline>Label</w-select>`,-1)]]),js:e(()=>[...f[18]||=[a(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`,-1)]]),default:e(()=>[i(w,{items:d.items1,outline:``},{default:e(()=>[...f[15]||=[a(`Label`,-1)]]),_:1},8,[`items`])]),_:1}),i(C,{h2:``},{default:e(()=>[...f[19]||=[a(`Colors`,-1)]]),_:1}),f[120]||=n(`p`,{class:`mb4`},[a(`Like in most components, you can set a `),n(`code`,null,`color`),a(` for the text and a `),n(`code`,null,`bg-color`),a(` for the
background.`),n(`br`),a(`
By default, the text has the "`),n(`span`,{class:`code`},`primary`),a(`" color.`)],-1),i(C,{h3:``,slug:`default-style`},{default:e(()=>[...f[20]||=[a(`Default style (Underline)`,-1)]]),_:1}),i(T,null,{pug:e(()=>[...f[23]||=[a(`w-select(:items="items" color="blue") Label
w-select.mt4(:items="items" bg-color="blue-light5" color="blue-dark3") Label`,-1)]]),html:e(()=>[...f[24]||=[a(`<w-select
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
</w-select>`,-1)]]),js:e(()=>[...f[25]||=[a(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`,-1)]]),default:e(()=>[i(w,{items:d.items1,color:`blue`},{default:e(()=>[...f[21]||=[a(`Label`,-1)]]),_:1},8,[`items`]),i(w,{class:`mt4`,items:d.items1,"bg-color":`blue-light5`,color:`blue-dark3`},{default:e(()=>[...f[22]||=[a(`Label`,-1)]]),_:1},8,[`items`])]),_:1}),i(C,{h3:``},{default:e(()=>[...f[26]||=[a(`Outline style`,-1)]]),_:1}),i(T,null,{pug:e(()=>[...f[29]||=[a(`w-select(:items="items" outline color="blue") Label
w-select.mt4(:items="items" outline bg-color="blue-light5" color="blue-dark3") Label`,-1)]]),html:e(()=>[...f[30]||=[a(`<w-select
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
</w-select>`,-1)]]),js:e(()=>[...f[31]||=[a(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`,-1)]]),default:e(()=>[i(w,{items:d.items1,outline:``,color:`blue`},{default:e(()=>[...f[27]||=[a(`Label`,-1)]]),_:1},8,[`items`]),i(w,{class:`mt4`,items:d.items1,outline:``,"bg-color":`blue-light5`,color:`blue-dark3`},{default:e(()=>[...f[28]||=[a(`Label`,-1)]]),_:1},8,[`items`])]),_:1}),i(C,{h3:``},{default:e(()=>[...f[32]||=[a(`List items colors`,-1)]]),_:1}),f[121]||=n(`p`,null,[a(`If an item object contains the key `),n(`code`,null,`color`),a(`, it will naturally be used by the
`),n(`strong`,{class:`code`},`w-select`),a(` component to display this list item in this color.`),n(`br`),a(`
To disable this you can set the `),n(`code`,null,`item-color-key`),a(` prop to an empty string.`)],-1),i(T,null,{pug:e(()=>[...f[34]||=[a(`w-select(:items="items") Pick a color`,-1)]]),html:e(()=>[...f[35]||=[a(`<w-select :items="items">
  Pick a color
</w-select>`,-1)]]),js:e(()=>[...f[36]||=[a(`data: () => ({
  items: [
    { label: 'Amber', color: 'amber' },
    { label: 'Warning', color: 'warning' },
    { label: 'Error', color: 'error' },
    { label: 'Pink', color: 'pink' }
  ]
})
`,-1)]]),default:e(()=>[i(w,{items:d.items4},{default:e(()=>[...f[33]||=[a(`Pick a color`,-1)]]),_:1},8,[`items`])]),_:1}),i(C,{h2:``},{default:e(()=>[...f[37]||=[a(`Shadow`,-1)]]),_:1}),i(T,null,{pug:e(()=>[...f[40]||=[a(`.title4.mb2 Default style (Underline)
w-select(:items="items" shadow) Label

.title4.mt6.mb2 Outline style
w-select(:items="items" outline shadow) Label`,-1)]]),html:e(()=>[...f[41]||=[a(`<div class="title4 mb2">
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
</w-select>`,-1)]]),js:e(()=>[...f[42]||=[a(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`,-1)]]),default:e(()=>[f[43]||=n(`div`,{class:`title4`},`Default style (Underline)`,-1),i(w,{items:d.items1,shadow:``},{default:e(()=>[...f[38]||=[a(`Label`,-1)]]),_:1},8,[`items`]),f[44]||=n(`div`,{class:`title4 mt6`},`Outline style`,-1),i(w,{items:d.items1,outline:``,shadow:``},{default:e(()=>[...f[39]||=[a(`Label`,-1)]]),_:1},8,[`items`])]),_:1}),i(C,{h2:``},{default:e(()=>[...f[45]||=[a(`Tile & round`,-1)]]),_:1}),i(T,null,{pug:e(()=>[...f[50]||=[a(`.title4 Default style (Underline)
w-select.mt3(:items="items" bg-color="purple-light5" tile) Tile
w-select.mt4(:items="items" bg-color="purple-light5" round) Round

.title4.mt6 Outline style
w-select.mt3(:items="items" outline tile) Tile
w-select.mt4(:items="items" outline round) Round`,-1)]]),html:e(()=>[...f[51]||=[a(`<div class="title4">
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
`,-1)]]),js:e(()=>[...f[52]||=[a(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`,-1)]]),default:e(()=>[f[53]||=n(`div`,{class:`title4`},`Default style (Underline)`,-1),i(w,{items:d.items1,"bg-color":`purple-light5`,tile:``},{default:e(()=>[...f[46]||=[a(`Tile`,-1)]]),_:1},8,[`items`]),i(w,{class:`mt4`,items:d.items1,"bg-color":`purple-light5`,round:``},{default:e(()=>[...f[47]||=[a(`Round`,-1)]]),_:1},8,[`items`]),f[54]||=n(`div`,{class:`title4 mt6`},`Outline style`,-1),i(w,{items:d.items1,outline:``,tile:``},{default:e(()=>[...f[48]||=[a(`Tile`,-1)]]),_:1},8,[`items`]),i(w,{class:`mt4`,items:d.items1,outline:``,round:``},{default:e(()=>[...f[49]||=[a(`Round`,-1)]]),_:1},8,[`items`])]),_:1}),i(C,{h2:``},{default:e(()=>[...f[55]||=[a(`Fit to content`,-1)]]),_:1}),i(T,null,{pug:e(()=>[...f[57]||=[a(`w-select(
  :items="items"
  placeholder="Select an item"
  fit-to-content) Fit to content`,-1)]]),html:e(()=>[...f[58]||=[a(`<w-select
  :items="items"
  placeholder="Select an item"
  fit-to-content>
  Fit to content
</w-select>
`,-1)]]),js:e(()=>[...f[59]||=[a(`data: () => ({
  items: [
    { label: '1st item' },
    { label: 'Second item' },
    { label: 'Third & longest item' }
  ]
})
`,-1)]]),default:e(()=>[i(w,{items:d.items5,placeholder:`Select an item`,"fit-to-content":``},{default:e(()=>[...f[56]||=[a(`Fit to content`,-1)]]),_:1},8,[`items`])]),_:1}),i(C,{h2:``},{default:e(()=>[...f[60]||=[a(`Multiple selection`,-1)]]),_:1}),i(T,null,{pug:e(()=>[...f[61]||=[a(`w-select(:items="items" multiple)`,-1)]]),html:e(()=>[...f[62]||=[a(`<w-select :items="items" multiple></w-select>`,-1)]]),js:e(()=>[...f[63]||=[a(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`,-1)]]),default:e(()=>[i(w,{items:d.items1,multiple:``},null,8,[`items`])]),_:1}),i(C,{h2:``},{default:e(()=>[...f[64]||=[a(`V-model`,-1)]]),_:1}),i(S,{tip:``},{default:e(()=>[...f[65]||=[a(`By default, the `,-1),n(`span`,{class:`code`},`w-select`,-1),a(` component expects the items to have a `,-1),n(`code`,null,`model-value`,-1),a(` attribute.`,-1),n(`br`,null,null,-1),a(`
If this is a constraint, you can use the option `,-1),n(`code`,null,`item-value-key`,-1),a(` to specify the name of another
attribute to be used instead (must have a unique value), like an id for instance.`,-1)]]),_:1}),i(T,null,{pug:e(()=>[...f[67]||=[a(`w-select(v-model="selection" :items="items" multiple)
w-flex.align-center.mt4
  span v-model:
  code.ml2 `+u(`{{ selection }}`),-1)]]),html:e(()=>[...f[68]||=[a(`<w-select
  v-model="selection"
  :items="items"
  multiple>
</w-select>

<w-flex class="align-center mt4">
  <span>v-model:</span>
  <code class="ml2">`+u(`{{ selection }}`)+`</code>
</w-flex>`,-1)]]),js:e(()=>[...f[69]||=[a(`data: () => ({
  items: [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 }
  ],
  selection: [1, 3]
})
`,-1)]]),default:e(()=>[i(w,{modelValue:d.vModelSelect1,"onUpdate:modelValue":f[0]||=e=>d.vModelSelect1=e,items:d.items3,multiple:``},null,8,[`modelValue`,`items`]),i(E,{class:`align-center mt4`},{default:e(()=>[f[66]||=n(`span`,null,`v-model:`,-1),n(`code`,m,u(d.vModelSelect1),1)]),_:1})]),_:1}),i(C,{h3:``},{default:e(()=>[...f[70]||=[a(`Without values (using labels)`,-1)]]),_:1}),f[122]||=n(`p`,null,`If no values are provided in the items objects, the labels will be used to identify the selected items.`,-1),i(T,null,{pug:e(()=>[...f[72]||=[a(`w-select(v-model="selection" :items="items" multiple)
w-flex.align-center.mt4
  span v-model:
  code.ml2 `+u(`{{ selection }}`),-1)]]),html:e(()=>[...f[73]||=[a(`<w-select
  v-model="selection"
  :items="items"
  multiple>
</w-select>

<w-flex class="align-center mt4">
  <span>v-model:</span>
  <code class="ml2">`+u(`{{ selection }}`)+`</code>
</w-flex>`,-1)]]),js:e(()=>[...f[74]||=[a(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ],
  selection: ['Item 1', 'Item 3']
})
`,-1)]]),default:e(()=>[i(w,{modelValue:d.vModelSelect2,"onUpdate:modelValue":f[1]||=e=>d.vModelSelect2=e,items:d.items1,multiple:``},null,8,[`modelValue`,`items`]),i(E,{class:`align-center mt4`},{default:e(()=>[f[71]||=n(`span`,null,`v-model:`,-1),n(`code`,h,u(d.vModelSelect2),1)]),_:1})]),_:1}),i(C,{h3:``},{default:e(()=>[...f[75]||=[a(`Using full objects in v-model`,-1)]]),_:1}),f[123]||=n(`p`,null,[a(`If it's more convenient for you, you can ask the `),n(`span`,{class:`code`},`w-select`),a(` component to return the
full items objects in the selection.`),n(`br`),a(`
You then have the choice to provide an array of either values or full objects in the v-model,
if you want to prefill the select list.`)],-1),f[124]||=n(`p`,null,null,-1),i(T,null,{pug:e(()=>[...f[77]||=[a(`w-select(v-model="selection" :items="items" multiple return-object)
w-flex.align-center.mt4
  span v-model:
  code.ml2 `+u(`{{ selection }}`),-1)]]),html:e(()=>[...f[78]||=[a(`<w-select
  v-model="selection"
  :items="items"
  multiple
  return-object>
</w-select>

<w-flex class="align-center mt4">
  <span>v-model:</span>
  <code class="ml2">`+u(`{{ selection }}`)+`</code>
</w-flex>`,-1)]]),js:e(()=>[...f[79]||=[a(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ],
  selection: [{ label: 'Item 3' }]
})
`,-1)]]),default:e(()=>[i(w,{modelValue:d.vModelSelect3,"onUpdate:modelValue":f[2]||=e=>d.vModelSelect3=e,items:d.items1,multiple:``,"return-object":``},null,8,[`modelValue`,`items`]),i(E,{class:`align-center mt4`},{default:e(()=>[f[76]||=n(`span`,null,`v-model:`,-1),n(`code`,g,u(d.vModelSelect3),1)]),_:1})]),_:1}),i(C,{h2:``},{default:e(()=>[...f[80]||=[a(`Label position`,-1)]]),_:1}),f[125]||=n(`p`,null,`By default the label is positioned inside, you can also place it on the left or right outside of
the select list.`,-1),i(T,null,{pug:e(()=>[...f[81]||=[a(`w-select(:items="items" label="Select an item")
w-select.mt4(:items="items" label="Select an item" label-position="left")
w-select.mt4(:items="items" label="Select an item" label-position="right")`,-1)]]),html:e(()=>[...f[82]||=[a(`<w-select
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
</w-select>`,-1)]]),js:e(()=>[...f[83]||=[a(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`,-1)]]),default:e(()=>[i(w,{items:d.items1,label:`Select an item`},null,8,[`items`]),i(w,{class:`mt4`,items:d.items1,label:`Select an item`,"label-position":`left`},null,8,[`items`]),i(w,{class:`mt4`,items:d.items1,label:`Select an item`,"label-position":`right`},null,8,[`items`])]),_:1}),i(C,{h2:``},{default:e(()=>[...f[84]||=[a(`Custom label`,-1)]]),_:1}),f[126]||=n(`p`,null,[a(`It is convenient to have the label inside the `),n(`span`,{class:`code`},`w-select`),a(` component to let it handle
the field focus event on label click.`),n(`br`),a(`
The `),n(`span`,{class:`code`},`label`),a(` prop accepts any HTML, but because passing complex html via a prop is not fun,
there is also a prop for setting the label wish will grant more freedom.
`)],-1),i(T,null,{pug:e(()=>[...f[92]||=[a(`w-select(:items="items" label-position="inside" outline)
  w-icon.orange mdi mdi-arrow-right
  span.purple.mx1 Inside
  w-icon.orange mdi mdi-arrow-left
w-select.mt4(:items="items" label-position="left" outline)
  span.green.mr1 Left
  w-icon.orange mdi mdi-arrow-right
w-select.mt4(:items="items" label-position="right" outline)
  w-icon.orange mdi mdi-arrow-left
  span.red.ml1 Right`,-1)]]),html:e(()=>[...f[93]||=[a(`<w-select
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
`,-1)]]),js:e(()=>[...f[94]||=[a(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`,-1)]]),default:e(()=>[i(w,{items:d.items1,"label-position":`inside`,outline:``},{default:e(()=>[i(D,{class:`orange`},{default:e(()=>[...f[85]||=[a(`mdi mdi-arrow-right`,-1)]]),_:1}),f[87]||=n(`span`,{class:`purple mx1`},`Inside`,-1),i(D,{class:`orange`},{default:e(()=>[...f[86]||=[a(`mdi mdi-arrow-left`,-1)]]),_:1})]),_:1},8,[`items`]),i(w,{class:`mt4`,items:d.items1,"label-position":`left`,outline:``},{default:e(()=>[f[89]||=n(`span`,{class:`green mr1`},`Left`,-1),i(D,{class:`orange`},{default:e(()=>[...f[88]||=[a(`mdi mdi-arrow-right`,-1)]]),_:1})]),_:1},8,[`items`]),i(w,{class:`mt4`,items:d.items1,"label-position":`right`,outline:``},{default:e(()=>[i(D,{class:`orange`},{default:e(()=>[...f[90]||=[a(`mdi mdi-arrow-left`,-1)]]),_:1}),f[91]||=n(`span`,{class:`red ml1`},`Right`,-1)]),_:1},8,[`items`])]),_:1}),i(C,{h2:``},{default:e(()=>[...f[95]||=[a(`Custom selection string`,-1)]]),_:1}),f[127]||=n(`p`,null,[a(`The selection string is customizable through the `),n(`code`,null,`selection`),a(` slot.`),n(`br`),a(`
For consistency, the name of the provided parameter containing the selected item(s) is `),n(`code`,null,`item`),a(`,
whether you use a multiple or single select list.`)],-1),i(T,null,{pug:e(()=>[...f[96]||=[a(`w-select(:items="items" v-model="selection" multiple)
  template(#selection="{ item }")
    w-tag.mr2(v-for="(item, i) in item" :key="i" bg-color="grey-light4")
      | `+u(`{{ item.label }}`),-1)]]),html:e(()=>[...f[97]||=[a(`<w-select :items="items" v-model="selection" multiple>
  <template #selection="{ item }">
    <w-tag
      class="mr2"
      v-for="(item, i) in item"
      :key="i"
      bg-color="grey-light4">
      `+u(`{{ item.label }}`)+`
    </w-tag>
  </template>
</w-select>`,-1)]]),js:e(()=>[...f[98]||=[a(`data: () => ({
  items: [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 }
  ],
  selection: [1, 3]
})
`,-1)]]),default:e(()=>[i(w,{items:d.items3,modelValue:d.customSelection,"onUpdate:modelValue":f[3]||=e=>d.customSelection=e,multiple:``},{selection:e(({item:t})=>[(s(!0),r(l,null,o(t,(t,n)=>(s(),c(O,{class:`mr2`,key:n,"bg-color":`grey-light4`},{default:e(()=>[a(u(t.label),1)]),_:2},1024))),128))]),_:1},8,[`items`,`modelValue`])]),_:1}),i(C,{h2:``},{default:e(()=>[...f[99]||=[a(`Custom list items`,-1)]]),_:1}),i(T,null,{pug:e(()=>[...f[101]||=[a(`w-select(:items="items")
  template(#item="{ item, selected }")
    w-icon.primary(v-if="selected") wi-check
    span.px2(v-else)
    span.ml1 `+u(`{{ item.label }}`)+`
    w-tag.ml2(bg-color="grey-light4" xs) `+u(`{{ item.value }}`),-1)]]),html:e(()=>[...f[102]||=[a(`<w-select :items="items">
  <template #item="{ item, selected }">
    <w-icon v-if="selected" class="primary">wi-check</w-icon>
    <span v-else class="px2"></span>

    <span class="ml1">`+u(`{{ item.label }}`)+`</span>

    <w-tag class="ml2" bg-color="grey-light4" xs>
      `+u(`{{ item.value }}`)+`
    </w-tag>
  </template>
</w-select>`,-1)]]),js:e(()=>[...f[103]||=[a(`data: () => ({
  items: [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 }
  ]
})
`,-1)]]),default:e(()=>[i(w,{items:d.items3},{item:e(({item:t,selected:o})=>[o?(s(),c(D,{key:0,class:`primary`},{default:e(()=>[...f[100]||=[a(`wi-check`,-1)]]),_:1})):(s(),r(`span`,_)),n(`span`,v,u(t.label),1),i(O,{class:`ml2`,"bg-color":`grey-light4`,xs:``},{default:e(()=>[a(u(t.value),1)]),_:2},1024)]),_:1},8,[`items`])]),_:1}),i(C,{h2:``},{default:e(()=>[...f[104]||=[a(`Inner icons`,-1)]]),_:1}),i(T,null,{pug:e(()=>[...f[105]||=[a(`.title4.mb2 Label outside
w-select(:items="items" label="Select" label-position="left" outline inner-icon-left="mdi mdi-star")
w-select.mt4(:items="items" label="Select" label-position="right" outline inner-icon-right="mdi mdi-arrow-down")

.title4.mt6.mb2 Label inside
w-select(:items="items" label="Select" label-position="inside" outline inner-icon-left="mdi mdi-star")
w-select.mt4(:items="items" label="Select" label-position="inside" outline inner-icon-right="mdi mdi-arrow-down")`,-1)]]),html:e(()=>[...f[106]||=[a(`<div class="title4 mb2">
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
</w-select>`,-1)]]),js:e(()=>[...f[107]||=[a(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`,-1)]]),default:e(()=>[f[108]||=n(`div`,{class:`title4 mb2`},`Label outside`,-1),i(w,{items:d.items1,label:`Select`,"label-position":`left`,outline:``,"inner-icon-left":`mdi mdi-star`},null,8,[`items`]),i(w,{class:`mt4`,items:d.items1,label:`Select`,"label-position":`right`,outline:``,"inner-icon-right":`mdi mdi-arrow-down`},null,8,[`items`]),f[109]||=n(`div`,{class:`title4 mt6 mb2`},`Label inside`,-1),i(w,{items:d.items1,label:`Select`,"label-position":`inside`,outline:``,"inner-icon-left":`mdi mdi-star`},null,8,[`items`]),i(w,{class:`mt4`,items:d.items1,label:`Select`,"label-position":`inside`,outline:``,"inner-icon-right":`mdi mdi-arrow-down`},null,8,[`items`])]),_:1}),i(C,{h2:``},{default:e(()=>[...f[110]||=[a(`Disabled & readonly`,-1)]]),_:1}),i(T,null,{pug:e(()=>[...f[111]||=[a(`w-select.mb4(
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
  readonly)`,-1)]]),html:e(()=>[...f[112]||=[a(`<w-select
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
`,-1)]]),js:e(()=>[...f[113]||=[a(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})`,-1)]]),default:e(()=>[i(w,{class:`mb4`,items:d.items1,label:`Disabled & empty`,outline:``,disabled:``},null,8,[`items`]),i(w,{class:`mb4`,items:d.items1,label:`Disabled & filled`,"model-value":`Item 1`,outline:``,disabled:``},null,8,[`items`]),i(w,{class:`mb4`,items:d.items1,label:`Readonly & empty`,outline:``,readonly:``},null,8,[`items`]),i(w,{items:d.items1,"model-value":`Item 1`,label:`Readonly & filled`,outline:``,readonly:``},null,8,[`items`])]),_:1}),n(`p`,null,[f[114]||=n(`strong`,{class:`mr1`},`Note:`,-1),f[115]||=a(`You can also disable any specific list item by adding a `,-1),f[116]||=n(`code`,null,`disabled: true`,-1),f[117]||=a(` property in it:`,-1),i(w,{class:`ml2`,placeholder:`select an item`,"fit-to-content":``,items:[{label:`Item 1`},{label:`Disabled item 2`,disabled:!0},{label:`Item 3`}]})])])}var b=d({data:()=>({items1:[{label:`Item 1`},{label:`Item 2`},{label:`Item 3`}],items2:[{label:`Item 1`},{label:`Item 2`},{label:`Item 3`},{label:`Item 4`},{label:`Item 5`,disabled:!0}],items3:[{label:`Item 1`,value:1},{label:`Item 2`,value:2},{label:`Item 3`,value:3}],items4:[{label:`Amber`,color:`amber`},{label:`Warning`,color:`warning`},{label:`Error`,color:`error`},{label:`Pink`,color:`pink`}],items5:[{label:`1st item`},{label:`Second item`},{label:`Third & longest item`}],vModelSelect1:[1,3],customSelection:[1,3],vModelSelect2:[`Item 1`,`Item 3`],vModelSelect3:[{label:`Item 3`}]})},[[`render`,y]]);function x(o,c,l,u,d,f){let p=t(`title-link`),m=t(`component-api`);return s(),r(`div`,null,[c[1]||=n(`div`,{class:`w-divider my12`},null,-1),i(p,{class:`title1`,h2:``},{default:e(()=>[...c[0]||=[a(`API`,-1)]]),_:1}),i(m,{class:`mt0`,items:f.props,descriptions:o.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),i(m,{items:o.slots,title:`Slots`},null,8,[`items`]),i(m,{items:f.events,title:`Events`},null,8,[`items`])])}var S={items:`Expecting an array of objects. Each object being a select list item, it should include at least a <code>label</code> attribute.`,modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>The current selection of the select field.<br>Gets updated on selection change.`,multiple:`Allows multiple selections. When set to <code>true</code>, the list of choices will stay open after selecting an item.`,placeholder:`Provide a placeholder for the select field. If a label is positioned inside, it will be moved above the field so it doesn't overlap.`,label:`Sets a visible label for the select field.`,labelPosition:`Sets the position of the label to one of the following positions: 'left', 'right', 'inside'.`,innerIconLeft:`Adds an icon on the left inside the select field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.`,innerIconRight:`Adds an icon on the right inside the select field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.`,staticLabel:`Prevents moving the label above the select field when the <code>labelPosition</code> is equal to <code>inside</code>. If a placeholder is present, it will be hidden and the label will be displayed instead.<br>When a value is set the static label is replaced by the textual value.`,itemLabelKey:`The property name (aka "key") in each item object where to find the label of the item.`,itemColorKey:`The property name (aka "key") in each item object where to find the color of the item.<br>By default, the <code>color</code> key of the current item will be used to render this item in this color.<br>You can also provide an empty string to disable this feature.`,itemValueKey:`The property name (aka "key") in each item object where to find the value of the item.`,itemClass:`Applies a custom CSS class to each select list item.`,menuClass:`Applies a custom CSS class to the select list's floating menu element.`,menuProps:`Internally, the <strong class="code">w-select</strong> component uses the <strong class="code">w-menu</strong> component.<br>This option allows you to pass down to the menu all the props that the <strong class="code">w-menu</strong> component can accept.<br>For instance, you could set <code>:menu-props="{ appendTo: '.my-scrolling-container' }"</code>, in order to move the select list floating menu to a particular DOM node, and allowing it to scroll with its container.`,noUnselect:`When set to <code>true</code>, forces the select list to always have at least one selected item.<br>For single select lists, it prevents unselecting the selected item but still allows switching selection.<br>For multiple select lists, it will only prevent unselecting the item when it's the only remaining selection. `,color:`Applies a color to the select's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the select's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the select's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,outline:`The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.`,round:`Sets a maximum border-radius on the corners of the select field, giving it a round look.`,shadow:`Applies a drop shadow to the select field.`,tile:`Removes the default border-radius and sets sharp edges on the select field.`,fitToContent:`Fits the select list width to its selected content.`,dark:!1,returnObject:`The current selection is returned via the <code>value</code> prop or <code>v-model</code> as an array of full objects or a single full object (returning the original as given) when <code>multiple</code> is set to false.`,name:`Provide a native HTML <code>name</code> attribute to the select field. If not provided, a unique name will be computed.`,disabled:`Disables the select field making it unreactive to user interactions.`,readonly:`The select field will still look like an interactive select field except that it is read-only: its current value cannot be changed by user interaction.`,required:`Applies the native HTML <code>required</code> attribute to the select field.`,validators:`<span class="deep-orange">Only for validation, when the select field is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the select field. Each function will be executed on select field validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the select field.`},C={default:{description:`The label content, if the <code>label</code> prop is not flexible enough.`},selection:{description:`Provide a custom template for the selection string.`,params:{item:`The selected item(s) object(s). May be an array if <code>multiple</code> is <code>true</code>, or a single object otherwise.`}},item:{description:`Provide a common custom template for all the select list items.`,params:{item:`The current item object.`,selected:`A Boolean representing the selected state of the list item.`,index:`The index of the list item.`}},"item.x":{description:`<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single select list item: the item at the index <em class="code">x</em>.`,params:{item:`The current item object.`,selected:`A Boolean representing the selected state of the list item.`,index:`The index of the list item.`}},"icon-left":{description:`The left icon, if the <code>innerIconLeft</code> prop is not flexible enough.<br/>`},"icon-right":{description:`The right icon, if the <code>innerIconRight</code> prop is not flexible enough.`}},w={input:{description:`Emitted each time the selected item(s) changes.<br>Updates the v-model value in Vue 2.x only.`,params:{"[Array, Object, Mixed value]":`The new selected value(s). Array if <code>multiple</code> is set to <code>true</code>, single value otherwise.`}},"update:modelValue":{description:`Emitted each time the selected item(s) changes.<br>Updates the v-model value in Vue 3 only.`,params:{"[Array, Object, Mixed value]":`The new selected value(s). Array if <code>multiple</code> is set to <code>true</code>, single value otherwise.`}},focus:{description:`Emitted on select focus.`,params:{"[DOM event object]":`The associated focus DOM event.`}},blur:{description:`Emitted on select blur.`,params:{"[DOM event object]":`The associated blur DOM event.`}},"item-click":{description:`Emitted on select list item click.`,params:{"[Object]":`The clicked item object.`}},"item-select":{description:`Emitted on list item select (click or <kbd>enter</kbd> keydown).`,params:{"[Object]":`The selected item object.`}},"click:inner-icon-left":{description:`Emitted on click of the left inner icon, if any.`,params:{"[DOM event object]":`The associated click DOM event.`}},"click:inner-icon-right":{description:`Emitted on click of the right inner icon, if any.`,params:{"[DOM event object]":`The associated click DOM event.`}}},T=d({data:()=>({propsDescs:S,slots:C}),computed:{props(){return{...p.props,...f.props}},events(){return p.emits.reduce((e,t)=>(e[t]=w[t]||{},e),{})}}},[[`render`,x]]);function E(n,o,c,l,u,d){let f=t(`ui-component-title`),p=t(`examples`),m=t(`api`);return s(),r(`main`,null,[i(f,null,{default:e(()=>[...o[0]||=[a(`w-select`,-1)]]),_:1}),i(p),i(m)])}var D=d({components:{Examples:b,Api:T}},[[`render`,E]]);export{D as default};