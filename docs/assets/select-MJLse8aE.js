import{N as e,W as t,bt as n,c as r,d as i,g as a,h as o,j as s,k as c,l,m as u,r as d}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as f}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{B as p,p as m}from"./index-CRFKPP-0.js";var h={class:`ml2`},g={class:`ml2`},_={class:`ml2`},v={key:1,class:`px2`},y={class:`ml1`};function b(f,p,m,b,x,S){let C=e(`alert`),w=e(`title-link`),T=e(`w-select`),E=e(`example`),D=e(`w-flex`),O=e(`w-icon`),k=e(`w-tag`);return c(),i(`div`,null,[a(C,{info:``},{default:t(()=>[...p[4]||=[o(`The `,-1),r(`span`,{class:`code`},`w-select`,-1),o(` component can be placed in a hidden overflow container and the dropdown
menu will still be fully visible when open.`,-1),r(`br`,null,null,-1),o(`
This is because the select dropdown menu is placed at the `,-1),r(`span`,{class:`code`},`.w-app`,-1),o(` level in the DOM,
just so you don't have to worry about this annoying case.
`,-1)]]),_:1}),a(w,{h2:``},{default:t(()=>[...p[5]||=[o(`Basic`,-1)]]),_:1}),p[122]||=r(`p`,null,[o(`This is the most basic use of the `),r(`span`,{class:`code`},`w-select`),o(` component. No label, no v-model, only items.`)],-1),a(E,null,{pug:t(()=>[...p[6]||=[o(`w-select(:items="items")`,-1)]]),html:t(()=>[...p[7]||=[o(`<w-select :items="items"></w-select>`,-1)]]),js:t(()=>[...p[8]||=[o(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`,-1)]]),default:t(()=>[a(T,{items:f.items1},null,8,[`items`])]),_:1}),a(w,{h2:``},{default:t(()=>[...p[9]||=[o(`Label and / or placeholder`,-1)]]),_:1}),p[123]||=r(`p`,null,[o(`The select list can have a label or not and a placeholder or not.`),r(`br`)],-1),a(E,null,{pug:t(()=>[...p[10]||=[o(`w-select(:items="items" label="Label")
w-select.mt4(:items="items" placeholder="Placeholder")
w-select.mt4(:items="items" label="Label" placeholder="Placeholder")`,-1)]]),html:t(()=>[...p[11]||=[o(`<w-select
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
`,-1)]]),js:t(()=>[...p[12]||=[o(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`,-1)]]),default:t(()=>[a(T,{items:f.items1,label:`Label`},null,8,[`items`]),a(T,{class:`mt4`,items:f.items1,placeholder:`Placeholder`},null,8,[`items`]),a(T,{class:`mt4`,items:f.items1,label:`Label`,placeholder:`Placeholder`},null,8,[`items`])]),_:1}),a(C,{tip:``},{default:t(()=>[...p[13]||=[o(`The items of the select list should have a label, which is by default expected in each item
object under the `,-1),r(`code`,null,`label`,-1),o(` name.`,-1),r(`br`,null,null,-1),o(`
If this is a constraint, you can use the option `,-1),r(`code`,null,`item-label-key`,-1),o(` to specify the name of another
attribute to be used instead.
`,-1)]]),_:1}),a(w,{h2:``},{default:t(()=>[...p[14]||=[o(`Outline`,-1)]]),_:1}),a(E,null,{pug:t(()=>[...p[16]||=[o(`w-select(:items="items" outline) Label`,-1)]]),html:t(()=>[...p[17]||=[o(`<w-select :items="items" outline>Label</w-select>`,-1)]]),js:t(()=>[...p[18]||=[o(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`,-1)]]),default:t(()=>[a(T,{items:f.items1,outline:``},{default:t(()=>[...p[15]||=[o(`Label`,-1)]]),_:1},8,[`items`])]),_:1}),a(w,{h2:``},{default:t(()=>[...p[19]||=[o(`Colors`,-1)]]),_:1}),p[124]||=r(`p`,{class:`mb4`},[o(`Like in most components, you can set a `),r(`code`,null,`color`),o(` for the text and a `),r(`code`,null,`bg-color`),o(` for the
background.`),r(`br`),o(`
By default, the text has the "`),r(`span`,{class:`code`},`primary`),o(`" color.`)],-1),a(w,{h3:``,slug:`default-style`},{default:t(()=>[...p[20]||=[o(`Default style (Underline)`,-1)]]),_:1}),a(E,null,{pug:t(()=>[...p[23]||=[o(`w-select(:items="items" color="blue") Label
w-select.mt4(:items="items" bg-color="blue-light5" color="blue-dark3") Label`,-1)]]),html:t(()=>[...p[24]||=[o(`<w-select
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
</w-select>`,-1)]]),js:t(()=>[...p[25]||=[o(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`,-1)]]),default:t(()=>[a(T,{items:f.items1,color:`blue`},{default:t(()=>[...p[21]||=[o(`Label`,-1)]]),_:1},8,[`items`]),a(T,{class:`mt4`,items:f.items1,"bg-color":`blue-light5`,color:`blue-dark3`},{default:t(()=>[...p[22]||=[o(`Label`,-1)]]),_:1},8,[`items`])]),_:1}),a(w,{h3:``},{default:t(()=>[...p[26]||=[o(`Outline style`,-1)]]),_:1}),a(E,null,{pug:t(()=>[...p[29]||=[o(`w-select(:items="items" outline color="blue") Label
w-select.mt4(:items="items" outline bg-color="blue-light5" color="blue-dark3") Label`,-1)]]),html:t(()=>[...p[30]||=[o(`<w-select
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
</w-select>`,-1)]]),js:t(()=>[...p[31]||=[o(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`,-1)]]),default:t(()=>[a(T,{items:f.items1,outline:``,color:`blue`},{default:t(()=>[...p[27]||=[o(`Label`,-1)]]),_:1},8,[`items`]),a(T,{class:`mt4`,items:f.items1,outline:``,"bg-color":`blue-light5`,color:`blue-dark3`},{default:t(()=>[...p[28]||=[o(`Label`,-1)]]),_:1},8,[`items`])]),_:1}),a(w,{h3:``},{default:t(()=>[...p[32]||=[o(`List items colors`,-1)]]),_:1}),p[125]||=r(`p`,null,[o(`If an item object contains the key `),r(`code`,null,`color`),o(`, it will naturally be used by the
`),r(`strong`,{class:`code`},`w-select`),o(` component to display this list item in this color.`),r(`br`),o(`
To disable this you can set the `),r(`code`,null,`item-color-key`),o(` prop to an empty string.`)],-1),a(E,null,{pug:t(()=>[...p[34]||=[o(`w-select(:items="items") Pick a color`,-1)]]),html:t(()=>[...p[35]||=[o(`<w-select :items="items">
  Pick a color
</w-select>`,-1)]]),js:t(()=>[...p[36]||=[o(`data: () => ({
  items: [
    { label: 'Amber', color: 'amber' },
    { label: 'Warning', color: 'warning' },
    { label: 'Error', color: 'error' },
    { label: 'Pink', color: 'pink' }
  ]
})
`,-1)]]),default:t(()=>[a(T,{items:f.items4},{default:t(()=>[...p[33]||=[o(`Pick a color`,-1)]]),_:1},8,[`items`])]),_:1}),a(w,{h2:``},{default:t(()=>[...p[37]||=[o(`Shadow`,-1)]]),_:1}),a(E,null,{pug:t(()=>[...p[40]||=[o(`.title4.mb2 Default style (Underline)
w-select(:items="items" shadow) Label

.title4.mt6.mb2 Outline style
w-select(:items="items" outline shadow) Label`,-1)]]),html:t(()=>[...p[41]||=[o(`<div class="title4 mb2">
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
</w-select>`,-1)]]),js:t(()=>[...p[42]||=[o(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`,-1)]]),default:t(()=>[p[43]||=r(`div`,{class:`title4`},`Default style (Underline)`,-1),a(T,{items:f.items1,shadow:``},{default:t(()=>[...p[38]||=[o(`Label`,-1)]]),_:1},8,[`items`]),p[44]||=r(`div`,{class:`title4 mt6`},`Outline style`,-1),a(T,{items:f.items1,outline:``,shadow:``},{default:t(()=>[...p[39]||=[o(`Label`,-1)]]),_:1},8,[`items`])]),_:1}),a(w,{h2:``},{default:t(()=>[...p[45]||=[o(`Tile & round`,-1)]]),_:1}),a(E,null,{pug:t(()=>[...p[50]||=[o(`.title4 Default style (Underline)
w-select.mt3(:items="items" bg-color="purple-light5" tile) Tile
w-select.mt4(:items="items" bg-color="purple-light5" round) Round

.title4.mt6 Outline style
w-select.mt3(:items="items" outline tile) Tile
w-select.mt4(:items="items" outline round) Round`,-1)]]),html:t(()=>[...p[51]||=[o(`<div class="title4">
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
`,-1)]]),js:t(()=>[...p[52]||=[o(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`,-1)]]),default:t(()=>[p[53]||=r(`div`,{class:`title4`},`Default style (Underline)`,-1),a(T,{items:f.items1,"bg-color":`purple-light5`,tile:``},{default:t(()=>[...p[46]||=[o(`Tile`,-1)]]),_:1},8,[`items`]),a(T,{class:`mt4`,items:f.items1,"bg-color":`purple-light5`,round:``},{default:t(()=>[...p[47]||=[o(`Round`,-1)]]),_:1},8,[`items`]),p[54]||=r(`div`,{class:`title4 mt6`},`Outline style`,-1),a(T,{items:f.items1,outline:``,tile:``},{default:t(()=>[...p[48]||=[o(`Tile`,-1)]]),_:1},8,[`items`]),a(T,{class:`mt4`,items:f.items1,outline:``,round:``},{default:t(()=>[...p[49]||=[o(`Round`,-1)]]),_:1},8,[`items`])]),_:1}),a(w,{h2:``},{default:t(()=>[...p[55]||=[o(`Fit to content`,-1)]]),_:1}),a(E,null,{pug:t(()=>[...p[57]||=[o(`w-select(
  :items="items"
  placeholder="Select an item"
  fit-to-content) Fit to content`,-1)]]),html:t(()=>[...p[58]||=[o(`<w-select
  :items="items"
  placeholder="Select an item"
  fit-to-content>
  Fit to content
</w-select>
`,-1)]]),js:t(()=>[...p[59]||=[o(`data: () => ({
  items: [
    { label: '1st item' },
    { label: 'Second item' },
    { label: 'Third & longest item' }
  ]
})
`,-1)]]),default:t(()=>[a(T,{items:f.items5,placeholder:`Select an item`,"fit-to-content":``},{default:t(()=>[...p[56]||=[o(`Fit to content`,-1)]]),_:1},8,[`items`])]),_:1}),a(w,{h2:``},{default:t(()=>[...p[60]||=[o(`Multiple selection`,-1)]]),_:1}),a(E,null,{pug:t(()=>[...p[61]||=[o(`w-select(:items="items" multiple)`,-1)]]),html:t(()=>[...p[62]||=[o(`<w-select :items="items" multiple></w-select>`,-1)]]),js:t(()=>[...p[63]||=[o(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`,-1)]]),default:t(()=>[a(T,{items:f.items1,multiple:``},null,8,[`items`])]),_:1}),a(w,{h2:``},{default:t(()=>[...p[64]||=[o(`V-model`,-1)]]),_:1}),a(C,{tip:``},{default:t(()=>[...p[65]||=[o(`By default, the `,-1),r(`span`,{class:`code`},`w-select`,-1),o(` component expects the items to have a `,-1),r(`code`,null,`model-value`,-1),o(` attribute.`,-1),r(`br`,null,null,-1),o(`
If this is a constraint, you can use the option `,-1),r(`code`,null,`item-value-key`,-1),o(` to specify the name of another
attribute to be used instead (must have a unique value), like an id for instance.`,-1)]]),_:1}),a(E,null,{pug:t(()=>[...p[67]||=[o(`w-select(v-model="selection" :items="items" multiple)
w-flex.align-center.mt4
  span v-model:
  code.ml2 `+n(`{{ selection }}`),-1)]]),html:t(()=>[...p[68]||=[o(`<w-select
  v-model="selection"
  :items="items"
  multiple>
</w-select>

<w-flex class="align-center mt4">
  <span>v-model:</span>
  <code class="ml2">`+n(`{{ selection }}`)+`</code>
</w-flex>`,-1)]]),js:t(()=>[...p[69]||=[o(`data: () => ({
  items: [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 }
  ],
  selection: [1, 3]
})
`,-1)]]),default:t(()=>[a(T,{modelValue:f.vModelSelect1,"onUpdate:modelValue":p[0]||=e=>f.vModelSelect1=e,items:f.items3,multiple:``},null,8,[`modelValue`,`items`]),a(D,{class:`align-center mt4`},{default:t(()=>[p[66]||=r(`span`,null,`v-model:`,-1),r(`code`,h,n(f.vModelSelect1),1)]),_:1})]),_:1}),a(w,{h3:``},{default:t(()=>[...p[70]||=[o(`Without values (using labels)`,-1)]]),_:1}),p[126]||=r(`p`,null,`If no values are provided in the items objects, the labels will be used to identify the selected items.`,-1),a(E,null,{pug:t(()=>[...p[72]||=[o(`w-select(v-model="selection" :items="items" multiple)
w-flex.align-center.mt4
  span v-model:
  code.ml2 `+n(`{{ selection }}`),-1)]]),html:t(()=>[...p[73]||=[o(`<w-select
  v-model="selection"
  :items="items"
  multiple>
</w-select>

<w-flex class="align-center mt4">
  <span>v-model:</span>
  <code class="ml2">`+n(`{{ selection }}`)+`</code>
</w-flex>`,-1)]]),js:t(()=>[...p[74]||=[o(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ],
  selection: ['Item 1', 'Item 3']
})
`,-1)]]),default:t(()=>[a(T,{modelValue:f.vModelSelect2,"onUpdate:modelValue":p[1]||=e=>f.vModelSelect2=e,items:f.items1,multiple:``},null,8,[`modelValue`,`items`]),a(D,{class:`align-center mt4`},{default:t(()=>[p[71]||=r(`span`,null,`v-model:`,-1),r(`code`,g,n(f.vModelSelect2),1)]),_:1})]),_:1}),a(w,{h3:``},{default:t(()=>[...p[75]||=[o(`Using full objects in v-model`,-1)]]),_:1}),p[127]||=r(`p`,null,[o(`If it's more convenient for you, you can ask the `),r(`span`,{class:`code`},`w-select`),o(` component to return the
full items objects in the selection.`),r(`br`),o(`
You then have the choice to provide an array of either values or full objects in the v-model,
if you want to prefill the select list.`)],-1),p[128]||=r(`p`,null,null,-1),a(E,null,{pug:t(()=>[...p[77]||=[o(`w-select(v-model="selection" :items="items" multiple return-object)
w-flex.align-center.mt4
  span v-model:
  code.ml2 `+n(`{{ selection }}`),-1)]]),html:t(()=>[...p[78]||=[o(`<w-select
  v-model="selection"
  :items="items"
  multiple
  return-object>
</w-select>

<w-flex class="align-center mt4">
  <span>v-model:</span>
  <code class="ml2">`+n(`{{ selection }}`)+`</code>
</w-flex>`,-1)]]),js:t(()=>[...p[79]||=[o(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ],
  selection: [{ label: 'Item 3' }]
})
`,-1)]]),default:t(()=>[a(T,{modelValue:f.vModelSelect3,"onUpdate:modelValue":p[2]||=e=>f.vModelSelect3=e,items:f.items1,multiple:``,"return-object":``},null,8,[`modelValue`,`items`]),a(D,{class:`align-center mt4`},{default:t(()=>[p[76]||=r(`span`,null,`v-model:`,-1),r(`code`,_,n(f.vModelSelect3),1)]),_:1})]),_:1}),a(w,{h2:``},{default:t(()=>[...p[80]||=[o(`Label position`,-1)]]),_:1}),p[129]||=r(`p`,null,`By default the label is positioned inside, you can also place it on the left or right outside of
the select list.`,-1),a(E,null,{pug:t(()=>[...p[81]||=[o(`w-select(:items="items" label="Select an item")
w-select.mt4(:items="items" label="Select an item" label-position="left")
w-select.mt4(:items="items" label="Select an item" label-position="right")`,-1)]]),html:t(()=>[...p[82]||=[o(`<w-select
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
</w-select>`,-1)]]),js:t(()=>[...p[83]||=[o(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`,-1)]]),default:t(()=>[a(T,{items:f.items1,label:`Select an item`},null,8,[`items`]),a(T,{class:`mt4`,items:f.items1,label:`Select an item`,"label-position":`left`},null,8,[`items`]),a(T,{class:`mt4`,items:f.items1,label:`Select an item`,"label-position":`right`},null,8,[`items`])]),_:1}),a(w,{h2:``},{default:t(()=>[...p[84]||=[o(`Custom label`,-1)]]),_:1}),p[130]||=r(`p`,null,[o(`It is convenient to have the label inside the `),r(`span`,{class:`code`},`w-select`),o(` component to let it handle
the field focus event on label click.`),r(`br`),o(`
The `),r(`span`,{class:`code`},`label`),o(` prop accepts any HTML, but because passing complex html via a prop is not fun,
there is also a prop for setting the label wish will grant more freedom.
`)],-1),a(E,null,{pug:t(()=>[...p[92]||=[o(`w-select(:items="items" label-position="inside" outline)
  w-icon.orange mdi mdi-arrow-right
  span.purple.mx1 Inside
  w-icon.orange mdi mdi-arrow-left
w-select.mt4(:items="items" label-position="left" outline)
  span.green.mr1 Left
  w-icon.orange mdi mdi-arrow-right
w-select.mt4(:items="items" label-position="right" outline)
  w-icon.orange mdi mdi-arrow-left
  span.red.ml1 Right`,-1)]]),html:t(()=>[...p[93]||=[o(`<w-select
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
`,-1)]]),js:t(()=>[...p[94]||=[o(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`,-1)]]),default:t(()=>[a(T,{items:f.items1,"label-position":`inside`,outline:``},{default:t(()=>[a(O,{class:`orange`},{default:t(()=>[...p[85]||=[o(`mdi mdi-arrow-right`,-1)]]),_:1}),p[87]||=r(`span`,{class:`purple mx1`},`Inside`,-1),a(O,{class:`orange`},{default:t(()=>[...p[86]||=[o(`mdi mdi-arrow-left`,-1)]]),_:1})]),_:1},8,[`items`]),a(T,{class:`mt4`,items:f.items1,"label-position":`left`,outline:``},{default:t(()=>[p[89]||=r(`span`,{class:`green mr1`},`Left`,-1),a(O,{class:`orange`},{default:t(()=>[...p[88]||=[o(`mdi mdi-arrow-right`,-1)]]),_:1})]),_:1},8,[`items`]),a(T,{class:`mt4`,items:f.items1,"label-position":`right`,outline:``},{default:t(()=>[a(O,{class:`orange`},{default:t(()=>[...p[90]||=[o(`mdi mdi-arrow-left`,-1)]]),_:1}),p[91]||=r(`span`,{class:`red ml1`},`Right`,-1)]),_:1},8,[`items`])]),_:1}),a(w,{h2:``},{default:t(()=>[...p[95]||=[o(`Custom selection string`,-1)]]),_:1}),p[131]||=r(`p`,null,[o(`The selection string is customizable through the `),r(`code`,null,`selection`),o(` slot.`),r(`br`),o(`
For consistency, the name of the provided parameter containing the selected item(s) is `),r(`code`,null,`item`),o(`,
whether you use a multiple or single select list.`)],-1),a(E,null,{pug:t(()=>[...p[96]||=[o(`w-select(:items="items" v-model="selection" multiple)
  template(#selection="{ item }")
    w-tag.mr2(v-for="(item, i) in item" :key="i" bg-color="grey-light4")
      | `+n(`{{ item.label }}`),-1)]]),html:t(()=>[...p[97]||=[o(`<w-select :items="items" v-model="selection" multiple>
  <template #selection="{ item }">
    <w-tag
      class="mr2"
      v-for="(item, i) in item"
      :key="i"
      bg-color="grey-light4">
      `+n(`{{ item.label }}`)+`
    </w-tag>
  </template>
</w-select>`,-1)]]),js:t(()=>[...p[98]||=[o(`data: () => ({
  items: [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 }
  ],
  selection: [1, 3]
})
`,-1)]]),default:t(()=>[a(T,{items:f.items3,modelValue:f.customSelection,"onUpdate:modelValue":p[3]||=e=>f.customSelection=e,multiple:``},{selection:t(({item:e})=>[(c(!0),i(d,null,s(e,(e,r)=>(c(),l(k,{class:`mr2`,key:r,"bg-color":`grey-light4`},{default:t(()=>[o(n(e.label),1)]),_:2},1024))),128))]),_:1},8,[`items`,`modelValue`])]),_:1}),a(w,{h2:``},{default:t(()=>[...p[99]||=[o(`Custom list items`,-1)]]),_:1}),a(E,null,{pug:t(()=>[...p[101]||=[o(`w-select(:items="items")
  template(#item="{ item, selected }")
    w-icon.primary(v-if="selected") wi-check
    span.px2(v-else)
    span.ml1 `+n(`{{ item.label }}`)+`
    w-tag.ml2(bg-color="grey-light4" xs) `+n(`{{ item.value }}`),-1)]]),html:t(()=>[...p[102]||=[o(`<w-select :items="items">
  <template #item="{ item, selected }">
    <w-icon v-if="selected" class="primary">wi-check</w-icon>
    <span v-else class="px2"></span>

    <span class="ml1">`+n(`{{ item.label }}`)+`</span>

    <w-tag class="ml2" bg-color="grey-light4" xs>
      `+n(`{{ item.value }}`)+`
    </w-tag>
  </template>
</w-select>`,-1)]]),js:t(()=>[...p[103]||=[o(`data: () => ({
  items: [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 }
  ]
})
`,-1)]]),default:t(()=>[a(T,{items:f.items3},{item:t(({item:e,selected:s})=>[s?(c(),l(O,{key:0,class:`primary`},{default:t(()=>[...p[100]||=[o(`wi-check`,-1)]]),_:1})):(c(),i(`span`,v)),r(`span`,y,n(e.label),1),a(k,{class:`ml2`,"bg-color":`grey-light4`,xs:``},{default:t(()=>[o(n(e.value),1)]),_:2},1024)]),_:1},8,[`items`])]),_:1}),a(w,{h2:``},{default:t(()=>[...p[104]||=[o(`Inner icons`,-1)]]),_:1}),a(E,null,{pug:t(()=>[...p[105]||=[o(`.title4.mb2 Label outside
w-select(:items="items" label="Select" label-position="left" outline inner-icon-left="mdi mdi-star")
w-select.mt4(:items="items" label="Select" label-position="right" outline inner-icon-right="mdi mdi-arrow-down")

.title4.mt6.mb2 Label inside
w-select(:items="items" label="Select" label-position="inside" outline inner-icon-left="mdi mdi-star")
w-select.mt4(:items="items" label="Select" label-position="inside" outline inner-icon-right="mdi mdi-arrow-down")`,-1)]]),html:t(()=>[...p[106]||=[o(`<div class="title4 mb2">
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
</w-select>`,-1)]]),js:t(()=>[...p[107]||=[o(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`,-1)]]),default:t(()=>[p[108]||=r(`div`,{class:`title4 mb2`},`Label outside`,-1),a(T,{items:f.items1,label:`Select`,"label-position":`left`,outline:``,"inner-icon-left":`mdi mdi-star`},null,8,[`items`]),a(T,{class:`mt4`,items:f.items1,label:`Select`,"label-position":`right`,outline:``,"inner-icon-right":`mdi mdi-arrow-down`},null,8,[`items`]),p[109]||=r(`div`,{class:`title4 mt6 mb2`},`Label inside`,-1),a(T,{items:f.items1,label:`Select`,"label-position":`inside`,outline:``,"inner-icon-left":`mdi mdi-star`},null,8,[`items`]),a(T,{class:`mt4`,items:f.items1,label:`Select`,"label-position":`inside`,outline:``,"inner-icon-right":`mdi mdi-arrow-down`},null,8,[`items`])]),_:1}),a(w,{h2:``},{default:t(()=>[...p[110]||=[o(`Disabled & readonly`,-1)]]),_:1}),a(E,null,{pug:t(()=>[...p[111]||=[o(`w-select.mb4(
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
  readonly)`,-1)]]),html:t(()=>[...p[112]||=[o(`<w-select
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
`,-1)]]),js:t(()=>[...p[113]||=[o(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})`,-1)]]),default:t(()=>[a(T,{class:`mb4`,items:f.items1,label:`Disabled & empty`,outline:``,disabled:``},null,8,[`items`]),a(T,{class:`mb4`,items:f.items1,label:`Disabled & filled`,"model-value":`Item 1`,outline:``,disabled:``},null,8,[`items`]),a(T,{class:`mb4`,items:f.items1,label:`Readonly & empty`,outline:``,readonly:``},null,8,[`items`]),a(T,{items:f.items1,"model-value":`Item 1`,label:`Readonly & filled`,outline:``,readonly:``},null,8,[`items`])]),_:1}),r(`p`,null,[p[114]||=r(`strong`,{class:`mr1`},`Note:`,-1),p[115]||=o(`You can also disable any specific list item by adding a `,-1),p[116]||=r(`code`,null,`disabled: true`,-1),p[117]||=o(` property in it:`,-1),a(T,{class:`ml2`,placeholder:`select an item`,"fit-to-content":``,items:[{label:`Item 1`},{label:`Disabled item 2`,disabled:!0},{label:`Item 3`}]})]),a(w,{h2:``},{default:t(()=>[...p[118]||=[o(`Sizes`,-1)]]),_:1}),p[132]||=u(`<p>The field height can be controlled with the preset size props <code>xs</code>, <code>sm</code>, <code>md</code>,
<code>lg</code> and <code>xl</code>, or directly via the CSS variable <code>--w-size</code>.</p>`,1),a(E,null,{pug:t(()=>[...p[119]||=[o(`w-select.mb3(xs :items="items" label="Extra small" outline)
w-select.mb3(sm :items="items" label="Small" outline)
w-select.mb3(md :items="items" label="Medium (default)" outline)
w-select.mb3(lg :items="items" label="Large" outline)
w-select(xl :items="items" label="Extra large" outline)`,-1)]]),html:t(()=>[...p[120]||=[o(`<w-select class="mb3" xs :items="items" label="Extra small" outline></w-select>
<w-select class="mb3" sm :items="items" label="Small" outline></w-select>
<w-select class="mb3" md :items="items" label="Medium (default)" outline></w-select>
<w-select class="mb3" lg :items="items" label="Large" outline></w-select>
<w-select xl :items="items" label="Extra large" outline></w-select>`,-1)]]),js:t(()=>[...p[121]||=[o(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})`,-1)]]),default:t(()=>[a(T,{class:`mb3`,xs:``,items:f.items1,label:`Extra small`,outline:``},null,8,[`items`]),a(T,{class:`mb3`,sm:``,items:f.items1,label:`Small`,outline:``},null,8,[`items`]),a(T,{class:`mb3`,md:``,items:f.items1,label:`Medium (default)`,outline:``},null,8,[`items`]),a(T,{class:`mb3`,lg:``,items:f.items1,label:`Large`,outline:``},null,8,[`items`]),a(T,{xl:``,items:f.items1,label:`Extra large`,outline:``},null,8,[`items`])]),_:1})])}var x=f({data:()=>({items1:[{label:`Item 1`},{label:`Item 2`},{label:`Item 3`}],items2:[{label:`Item 1`},{label:`Item 2`},{label:`Item 3`},{label:`Item 4`},{label:`Item 5`,disabled:!0}],items3:[{label:`Item 1`,value:1},{label:`Item 2`,value:2},{label:`Item 3`,value:3}],items4:[{label:`Amber`,color:`amber`},{label:`Warning`,color:`warning`},{label:`Error`,color:`error`},{label:`Pink`,color:`pink`}],items5:[{label:`1st item`},{label:`Second item`},{label:`Third & longest item`}],vModelSelect1:[1,3],customSelection:[1,3],vModelSelect2:[`Item 1`,`Item 3`],vModelSelect3:[{label:`Item 3`}]})},[[`render`,b]]);function S(n,s,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return c(),i(`div`,null,[s[1]||=r(`div`,{class:`w-divider my12`},null,-1),a(p,{class:`title1`,h2:``},{default:t(()=>[...s[0]||=[o(`API`,-1)]]),_:1}),a(m,{class:`mt0`,items:f.props,descriptions:n.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),a(m,{items:n.slots,title:`Slots`},null,8,[`items`]),a(m,{items:f.events,title:`Events`},null,8,[`items`]),a(m,{items:n.methods,title:`Methods`},null,8,[`items`])])}var C={id:`Sets an explicit DOM <code>id</code> when you need a fixed value (e.g. SSR, tests, or external labels). If omitted, a stable id is auto-generated with Vue’s <code>useId()</code>.<br>When set, the dropdown listbox id becomes <code>&lt;your-id&gt;__listbox</code> (used for ARIA and list item ids).`,items:`Expecting an array of objects. Each object being a select list item, it should include at least a <code>label</code> attribute.`,modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>The current selection of the select field.<br>Gets updated on selection change.`,multiple:`Allows multiple selections. When set to <code>true</code>, the list of choices will stay open after selecting an item.`,placeholder:`Provide a placeholder for the select field. If a label is positioned inside, it will be moved above the field so it doesn't overlap.`,label:`Sets a visible label for the select field.`,labelPosition:`Sets the position of the label to one of the following positions: 'left', 'right', 'inside'.`,innerIconLeft:`Adds an icon on the left inside the select field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.`,innerIconRight:`Adds an icon on the right inside the select field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.`,staticLabel:`Prevents moving the label above the select field when the <code>labelPosition</code> is equal to <code>inside</code>. If a placeholder is present, it will be hidden and the label will be displayed instead.<br>When a value is set the static label is replaced by the textual value.`,itemLabelKey:`The property name (aka "key") in each item object where to find the label of the item.`,itemColorKey:`The property name (aka "key") in each item object where to find the color of the item.<br>By default, the <code>color</code> key of the current item will be used to render this item in this color.<br>You can also provide an empty string to disable this feature.`,itemValueKey:`The property name (aka "key") in each item object where to find the value of the item.`,itemClass:`Applies a custom CSS class to each select list item.`,menuClass:`Applies a custom CSS class to the select list's floating menu element.`,menuProps:`Internally, the <strong class="code">w-select</strong> component uses the <strong class="code">w-menu</strong> component.<br>This option allows you to pass down to the menu all the props that the <strong class="code">w-menu</strong> component can accept.<br>For instance, you could set <code>:menu-props="{ appendTo: '.my-scrolling-container' }"</code>, in order to move the select list floating menu to a particular DOM node, and allowing it to scroll with its container.`,noUnselect:`When set to <code>true</code>, forces the select list to always have at least one selected item.<br>For single select lists, it prevents unselecting the selected item but still allows switching selection.<br>For multiple select lists, it will only prevent unselecting the item when it's the only remaining selection. `,color:`Applies a color to the select's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the select's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the select's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,outline:`The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.`,round:`Sets a maximum border-radius on the corners of the select field, giving it a round look.`,shadow:`Applies a drop shadow to the select field.`,tile:`Removes the default border-radius and sets sharp edges on the select field.`,fitToContent:`Fits the select list width to its selected content.`,dark:!1,returnObject:`The current selection is returned via the <code>value</code> prop or <code>v-model</code> as an array of full objects or a single full object (returning the original as given) when <code>multiple</code> is set to false.`,name:`Provide a native HTML <code>name</code> attribute to the select field. If omitted, a unique value is generated with the same stable mechanism as the default id (SSR-safe).`,disabled:`Disables the select field making it unreactive to user interactions.`,readonly:`The select field will still look like an interactive select field except that it is read-only: its current value cannot be changed by user interaction.`,required:`Applies the native HTML <code>required</code> attribute to the select field.`,validators:`<span class="deep-orange">Only for validation, when the select field is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the select field. Each function will be executed on select field validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the select field.`,noBlurValidation:`<span class="deep-orange">Only when the select is in a <strong class="code">w-form</strong> with <code>validators</code>.</span><br>When <code>true</code>, blur does not validate this field. When <code>false</code>, blur always validates even if the form has <code>no-blur-validation</code>. When unset, inherit the form setting.`,xs:`Sets the height of the select field to extra small (~20 px at 14 px base font size).<br>Equivalent to setting the CSS variable <code>--w-size</code> to the corresponding value.`,sm:`Sets the height of the select field to small (~24 px at 14 px base font size).<br>Equivalent to setting the CSS variable <code>--w-size</code> to the corresponding value.`,md:`Sets the height of the select field to medium, which is the same as the default height (~28 px at 14 px base font size).`,lg:`Sets the height of the select field to large (~32 px at 14 px base font size).<br>Equivalent to setting the CSS variable <code>--w-size</code> to the corresponding value.`,xl:`Sets the height of the select field to extra large (~38 px at 14 px base font size).<br>Equivalent to setting the CSS variable <code>--w-size</code> to the corresponding value.`},w={default:{description:`The label content, if the <code>label</code> prop is not flexible enough.`},selection:{description:`Provide a custom template for the selection string.`,params:{item:`The selected item(s) object(s). May be an array if <code>multiple</code> is <code>true</code>, or a single object otherwise.`}},item:{description:`Provide a common custom template for all the select list items.`,params:{item:`The current item object.`,selected:`A Boolean representing the selected state of the list item.`,index:`The index of the list item.`}},"item.x":{description:`<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single select list item: the item at the index <em class="code">x</em>.`,params:{item:`The current item object.`,selected:`A Boolean representing the selected state of the list item.`,index:`The index of the list item.`}},"icon-left":{description:`The left icon, if the <code>innerIconLeft</code> prop is not flexible enough.<br/>`},"icon-right":{description:`The right icon, if the <code>innerIconRight</code> prop is not flexible enough.`}},T={input:{description:`Emitted each time the selected item(s) changes.<br>Updates the v-model value in Vue 2.x only.`,params:{"[Array, Object, Mixed value]":`The new selected value(s). Array if <code>multiple</code> is set to <code>true</code>, single value otherwise.`}},"update:modelValue":{description:`Emitted each time the selected item(s) changes.<br>Updates the v-model value in Vue 3 only.`,params:{"[Array, Object, Mixed value]":`The new selected value(s). Array if <code>multiple</code> is set to <code>true</code>, single value otherwise.`}},focus:{description:`Emitted on select focus.`,params:{"[DOM event object]":`The associated focus DOM event.`}},blur:{description:`Emitted on select blur.`,params:{"[DOM event object]":`The associated blur DOM event.`}},"item-click":{description:`Emitted on select list item click.`,params:{"[Object]":`The clicked item object.`}},"item-select":{description:`Emitted on list item select (click or <kbd>enter</kbd> keydown).`,params:{"[Object]":`The selected item object.`}},"click:inner-icon-left":{description:`Emitted on click of the left inner icon, if any.`,params:{"[DOM event object]":`The associated click DOM event.`}},"click:inner-icon-right":{description:`Emitted on click of the right inner icon, if any.`,params:{"[DOM event object]":`The associated click DOM event.`}}},E={focus:{description:`Focuses the selection field and opens the dropdown when closed. Also runs when <code>v-focus</code> is used. No-op when <code>disabled</code> or <code>readonly</code>.`}},D=f({data:()=>({propsDescs:C,slots:w,methods:E}),computed:{props(){return{...m.props,...p.props}},events(){return m.emits.reduce((e,t)=>(e[t]=T[t]||{},e),{})}}},[[`render`,S]]);function O(n,r,s,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return c(),i(`main`,null,[a(f,null,{default:t(()=>[...r[0]||=[o(`w-select`,-1)]]),_:1}),a(p),a(m)])}var k=f({components:{Examples:x,Api:D}},[[`render`,O]]);export{k as default};