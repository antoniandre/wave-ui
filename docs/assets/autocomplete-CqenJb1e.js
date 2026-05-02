import{A as e,G as t,P as n,bt as r,c as i,d as a,g as o,h as s,m as c,xt as l}from"./runtime-core.esm-bundler-BuLlhxCm.js";import{t as u}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{B as d,Q as f,z as p}from"./index-DR7O6uV_.js";import{t as m}from"./chunk-NAVWDHVN-BVtaLd4J.js";var h={class:`mt2`},g={class:`mt2`},_={class:`overflow-hidden-demo`};function v(u,d,p,m,v,y){let b=n(`alert`),x=n(`title-link`),S=n(`w-autocomplete`),C=n(`example`),w=n(`w-icon`),T=n(`w-button`),E=n(`w-form`),D=n(`w-card`);return e(),a(`div`,null,[o(b,{tip:``},{default:t(()=>[...d[5]||=[s(`The `,-1),i(`span`,{class:`code`},`w-autocomplete`,-1),s(` component renders its dropdown via `,-1),i(`span`,{class:`code`},`w-menu`,-1),s(`,
so the list is teleported outside the DOM tree and will never be clipped by an
`,-1),i(`span`,{class:`code`},`overflow: hidden`,-1),s(` parent.
`,-1)]]),_:1}),o(x,{h2:``},{default:t(()=>[...d[6]||=[s(`Default`,-1)]]),_:1}),d[75]||=c(`<p>The most basic use. Provide an array of items — each item must have at least a
<code>label</code> property. The user can type to filter the list and click (or press
<kbd>Enter</kbd>) to select an option.</p><p>One great advantage of the Wave UI <strong class="code">w-autocomplete</strong> is the fact that
you can supply a separate <code>searchable</code> string per item that is different
from the displayed label. This lets users search by symbol, code, or other invisible
metadata.</p><p>For instance, in this example you can look for a chemical element by its name,
like literally &quot;Sodium&quot;, but you can also type its atomic number or symbol to find it.</p><p>you can try these interesting matches (for their symbol is not found in their name string):</p><div class="w-flex gap3"><div class="text-center bdrs2 bd1 pa2" style="width:110px;"><div class="element"><div class="title1 mt4 symbol code">Na</div><div class="number code">11</div></div><div class="primary mt2">Sodium</div></div><div class="text-center bdrs2 bd1 pa2" style="width:110px;"><div class="element"><div class="title1 mt4 symbol code">Mg</div><div class="number code">12</div></div><div class="primary mt2">Magnesium</div></div><div class="text-center bdrs2 bd1 pa2" style="width:110px;"><div class="element"><div class="title1 mt4 symbol code">Cr</div><div class="number code">24</div></div><div class="primary mt2">Chromium</div></div></div>`,5),o(C,{"content-class":`py12`,"blank-codepen":[`js`]},{pug:t(()=>[...d[7]||=[s(`w-autocomplete(:items="items")`,-1)]]),html:t(()=>[...d[8]||=[s(`<w-autocomplete :items="items"></w-autocomplete>`,-1)]]),js:t(()=>[...d[9]||=[s(`data: () => ({
  items: [
    { value: 'H',  label: 'Hydrogen',  searchable: 'H, Hydrogen, 1' },
    { value: 'He', label: 'Helium',    searchable: 'He, Helium, 2' },
    { value: 'Li', label: 'Lithium',   searchable: 'Li, Lithium, 3' },
    { value: 'Na', label: 'Sodium',    searchable: 'Na, Sodium, 11' },
    { value: 'Mg', label: 'Magnesium', searchable: 'Mg, Magnesium, 12' },
  ]
})
`,-1)]]),default:t(()=>[o(S,{class:`mb12`,items:u.chemicalElements},null,8,[`items`])]),_:1}),o(x,{h2:``},{default:t(()=>[...d[10]||=[s(`Label and placeholder`,-1)]]),_:1}),d[76]||=i(`p`,null,[s(`The `),i(`span`,{class:`code`},`label`),s(` prop adds a floating label inside the field (default position).
The `),i(`span`,{class:`code`},`placeholder`),s(` prop sets faint helper text visible when the field is empty
and the label has already floated up.`)],-1),o(C,{"content-class":`py12`},{pug:t(()=>[...d[11]||=[s(`w-autocomplete.mb4(:items="items" label="Country")
w-autocomplete.mb4(:items="items" placeholder="Pick a country…")
w-autocomplete.mb4(:items="items" label="Country" placeholder="Pick a country…")`,-1)]]),html:t(()=>[...d[12]||=[s(`<w-autocomplete class="mb4" :items="items" label="Country"></w-autocomplete>
<w-autocomplete class="mb4" :items="items" placeholder="Pick a country…"></w-autocomplete>
<w-autocomplete class="mb4" :items="items" label="Country" placeholder="Pick a country…"></w-autocomplete>`,-1)]]),js:t(()=>[...d[13]||=[s(`data: () => ({
  items: [
    { value: 'fr', label: 'France' },
    { value: 'de', label: 'Germany' },
    { value: 'it', label: 'Italy' },
    { value: 'es', label: 'Spain' },
    { value: 'pt', label: 'Portugal' }
  ]
})
`,-1)]]),default:t(()=>[o(S,{class:`mb4`,items:u.items1,label:`Country`},null,8,[`items`]),o(S,{class:`mb4`,items:u.items1,placeholder:`Pick a country…`},null,8,[`items`]),o(S,{class:`mb4`,items:u.items1,label:`Country`,placeholder:`Pick a country…`},null,8,[`items`])]),_:1}),o(x,{h2:``},{default:t(()=>[...d[14]||=[s(`Label position`,-1)]]),_:1}),d[77]||=i(`p`,null,[s(`Use `),i(`span`,{class:`code`},`label-position`),s(` to place the label `),i(`span`,{class:`code`},`inside`),s(` (default, floating),
`),i(`span`,{class:`code`},`left`),s(`, or `),i(`span`,{class:`code`},`right`),s(`.`)],-1),o(C,{"content-class":`py12`},{pug:t(()=>[...d[15]||=[s(`w-autocomplete.mb4(:items="items" label="Inside (default)" label-position="inside")
w-autocomplete.mb4(:items="items" label="Left" label-position="left")
w-autocomplete.mb4(:items="items" label="Right" label-position="right")`,-1)]]),html:t(()=>[...d[16]||=[s(`<w-autocomplete class="mb4" :items="items" label="Inside (default)" label-position="inside"></w-autocomplete>
<w-autocomplete class="mb4" :items="items" label="Left" label-position="left"></w-autocomplete>
<w-autocomplete class="mb4" :items="items" label="Right" label-position="right"></w-autocomplete>`,-1)]]),js:t(()=>[...d[17]||=[s(`data: () => ({
  items: [
    { value: 'fr', label: 'France' },
    { value: 'de', label: 'Germany' },
    { value: 'it', label: 'Italy' }
  ]
})
`,-1)]]),default:t(()=>[o(S,{class:`mb4`,items:u.items1,label:`Inside (default)`,"label-position":`inside`},null,8,[`items`]),o(S,{class:`mb4`,items:u.items1,label:`Left`,"label-position":`left`},null,8,[`items`]),o(S,{class:`mb4`,items:u.items1,label:`Right`,"label-position":`right`},null,8,[`items`])]),_:1}),o(x,{h2:``},{default:t(()=>[...d[18]||=[s(`Outline, round & shadow`,-1)]]),_:1}),d[78]||=i(`p`,null,[s(`The same styling props available on `),i(`span`,{class:`code`},`w-input`),s(` and `),i(`span`,{class:`code`},`w-select`),s(` are
supported here.`)],-1),o(C,{"content-class":`py12`},{pug:t(()=>[...d[19]||=[s(`w-autocomplete.mb4(:items="items" label="Outline" outline)
w-autocomplete.mb4(:items="items" label="Round" round)
w-autocomplete.mb4(:items="items" label="Shadow" shadow)
w-autocomplete.mb4(:items="items" label="Tile" tile)`,-1)]]),html:t(()=>[...d[20]||=[s(`<w-autocomplete class="mb4" :items="items" label="Outline" outline></w-autocomplete>
<w-autocomplete class="mb4" :items="items" label="Round" round></w-autocomplete>
<w-autocomplete class="mb4" :items="items" label="Shadow" shadow></w-autocomplete>
<w-autocomplete class="mb4" :items="items" label="Tile" tile></w-autocomplete>`,-1)]]),js:t(()=>[...d[21]||=[s(`data: () => ({
  items: [
    { value: 'fr', label: 'France' },
    { value: 'de', label: 'Germany' },
    { value: 'it', label: 'Italy' }
  ]
})
`,-1)]]),default:t(()=>[o(S,{class:`mb4`,items:u.items1,label:`Outline`,outline:``},null,8,[`items`]),o(S,{class:`mb4`,items:u.items1,label:`Round`,round:``},null,8,[`items`]),o(S,{class:`mb4`,items:u.items1,label:`Shadow`,shadow:``},null,8,[`items`]),o(S,{class:`mb4`,items:u.items1,label:`Tile`,tile:``},null,8,[`items`])]),_:1}),o(x,{h2:``},{default:t(()=>[...d[22]||=[s(`Colors`,-1)]]),_:1}),d[79]||=i(`p`,null,[s(`Use `),i(`span`,{class:`code`},`color`),s(`, `),i(`span`,{class:`code`},`bg-color`),s(`, and `),i(`span`,{class:`code`},`label-color`),s(` to theme
the field. All Wave UI color names are accepted.`)],-1),o(C,{"content-class":`py12`},{pug:t(()=>[...d[23]||=[s(`w-autocomplete.mb4(:items="items" label="Success color" color="success")
w-autocomplete.mb4(:items="items" label="Warning + bg" color="warning" bg-color="yellow-light5")
w-autocomplete.mb4(:items="items" label="Pink label" label-color="pink")`,-1)]]),html:t(()=>[...d[24]||=[s(`<w-autocomplete class="mb4" :items="items" label="Success color" color="success"></w-autocomplete>
<w-autocomplete class="mb4" :items="items" label="Warning + bg" color="warning" bg-color="yellow-light5"></w-autocomplete>
<w-autocomplete class="mb4" :items="items" label="Pink label" label-color="pink"></w-autocomplete>`,-1)]]),js:t(()=>[...d[25]||=[s(`data: () => ({
  items: [
    { value: 'fr', label: 'France' },
    { value: 'de', label: 'Germany' },
    { value: 'it', label: 'Italy' }
  ]
})
`,-1)]]),default:t(()=>[o(S,{class:`mb4`,items:u.items1,label:`Success color`,color:`success`},null,8,[`items`]),o(S,{class:`mb4`,items:u.items1,label:`Warning + bg`,color:`warning`,"bg-color":`yellow-light5`},null,8,[`items`]),o(S,{class:`mb4`,items:u.items1,label:`Pink label`,"label-color":`pink`},null,8,[`items`])]),_:1}),o(x,{h2:``},{default:t(()=>[...d[26]||=[s(`Sizes`,-1)]]),_:1}),d[80]||=c(`<p>Use the size props <span class="code">xs</span>, <span class="code">sm</span>, <span class="code">md</span> (default), <span class="code">lg</span>, <span class="code">xl</span>.</p>`,1),o(C,{"content-class":`py12`},{pug:t(()=>[...d[27]||=[s(`w-autocomplete.mb4(:items="items" label="Extra small" xs)
w-autocomplete.mb4(:items="items" label="Small" sm)
w-autocomplete.mb4(:items="items" label="Medium (default)")
w-autocomplete.mb4(:items="items" label="Large" lg)
w-autocomplete.mb4(:items="items" label="Extra large" xl)`,-1)]]),html:t(()=>[...d[28]||=[s(`<w-autocomplete class="mb4" :items="items" label="Extra small" xs></w-autocomplete>
<w-autocomplete class="mb4" :items="items" label="Small" sm></w-autocomplete>
<w-autocomplete class="mb4" :items="items" label="Medium (default)"></w-autocomplete>
<w-autocomplete class="mb4" :items="items" label="Large" lg></w-autocomplete>
<w-autocomplete class="mb4" :items="items" label="Extra large" xl></w-autocomplete>`,-1)]]),js:t(()=>[...d[29]||=[s(`data: () => ({
  items: [
    { value: 'fr', label: 'France' },
    { value: 'de', label: 'Germany' },
    { value: 'it', label: 'Italy' }
  ]
})
`,-1)]]),default:t(()=>[o(S,{class:`mb4`,items:u.items1,label:`Extra small`,xs:``},null,8,[`items`]),o(S,{class:`mb4`,items:u.items1,label:`Small`,sm:``},null,8,[`items`]),o(S,{class:`mb4`,items:u.items1,label:`Medium (default)`},null,8,[`items`]),o(S,{class:`mb4`,items:u.items1,label:`Large`,lg:``},null,8,[`items`]),o(S,{class:`mb4`,items:u.items1,label:`Extra large`,xl:``},null,8,[`items`])]),_:1}),o(x,{h2:``},{default:t(()=>[...d[30]||=[s(`Icons`,-1)]]),_:1}),d[81]||=i(`p`,null,[s(`Use `),i(`span`,{class:`code`},`inner-icon-left`),s(` and/or `),i(`span`,{class:`code`},`inner-icon-right`),s(` to add icons inside
the field. Click events on each icon are exposed via `),i(`span`,{class:`code`},`@click:inner-icon-left`),s(` and
`),i(`span`,{class:`code`},`@click:inner-icon-right`),s(`.`)],-1),o(C,{"content-class":`py12`},{pug:t(()=>[...d[31]||=[s(`w-autocomplete.mb4(:items="items" label="Search" inner-icon-left="wi-search")
w-autocomplete.mb4(
  :items="items"
  label="With both icons"
  inner-icon-left="wi-search"
  inner-icon-right="wi-cross"
  @click:inner-icon-right="onClear")`,-1)]]),html:t(()=>[...d[32]||=[s(`<w-autocomplete class="mb4" :items="items" label="Search" inner-icon-left="wi-search"></w-autocomplete>
<w-autocomplete
  class="mb4"
  :items="items"
  label="With both icons"
  inner-icon-left="wi-search"
  inner-icon-right="wi-cross"
  @click:inner-icon-right="onClear">
</w-autocomplete>`,-1)]]),js:t(()=>[...d[33]||=[s(`methods: {
  onClear () { /* clear handler */ }
}
`,-1)]]),default:t(()=>[o(S,{class:`mb4`,items:u.items1,label:`Search`,"inner-icon-left":`wi-search`},null,8,[`items`]),o(S,{class:`mb4`,items:u.items1,label:`With both icons`,"inner-icon-left":`wi-search`,"inner-icon-right":`wi-cross`,"onClick:innerIconRight":y.iconRightClick},null,8,[`items`,`onClick:innerIconRight`])]),_:1}),o(x,{h2:``},{default:t(()=>[...d[34]||=[s(`Multiple selection`,-1)]]),_:1}),d[82]||=i(`p`,null,[s(`When `),i(`span`,{class:`code`},`multiple`),s(` is set, the user can select several items. Each selection is
shown as a removable chip. Pressing `),i(`kbd`,null,`Backspace`),s(` on an empty input removes the last chip.`)],-1),o(C,{"content-class":`py12`},{pug:t(()=>[...d[35]||=[s(`w-autocomplete(:items="items" label="Countries" multiple v-model="value")
.mt2 Selected: `+l(`{{ value }}`),-1)]]),html:t(()=>[...d[36]||=[s(`<w-autocomplete :items="items" label="Countries" multiple v-model="value"></w-autocomplete>
<div class="mt2">Selected: `+l(`{{ value }}`)+`</div>`,-1)]]),js:t(()=>[...d[37]||=[s(`data: () => ({
  value: null,
  items: [
    { value: 'fr', label: 'France' },
    { value: 'de', label: 'Germany' },
    { value: 'it', label: 'Italy' },
    { value: 'es', label: 'Spain' },
    { value: 'pt', label: 'Portugal' }
  ]
})
`,-1)]]),default:t(()=>[o(S,{class:`mb4`,items:u.items1,label:`Countries`,multiple:``,modelValue:u.multipleVal,"onUpdate:modelValue":d[0]||=e=>u.multipleVal=e},null,8,[`items`,`modelValue`]),i(`div`,h,`Selected: `+l(u.multipleVal||`—`),1)]),_:1}),o(x,{h2:``},{default:t(()=>[...d[38]||=[s(`v-model`,-1)]]),_:1}),d[83]||=i(`p`,null,[s(`Use `),i(`span`,{class:`code`},`v-model`),s(` to read and write the current selection. Single selections emit a
scalar value; `),i(`span`,{class:`code`},`multiple`),s(` selections emit an array.`)],-1),o(C,{"content-class":`py12`},{pug:t(()=>[...d[39]||=[s(`w-autocomplete(:items="items" label="Country" v-model="value")
.mt2 v-model value: `+l(`{{ value }}`),-1)]]),html:t(()=>[...d[40]||=[s(`<w-autocomplete :items="items" label="Country" v-model="value"></w-autocomplete>
<div class="mt2">v-model value: `+l(`{{ value }}`)+`</div>`,-1)]]),js:t(()=>[...d[41]||=[s(`data: () => ({
  value: null,
  items: [
    { value: 'fr', label: 'France' },
    { value: 'de', label: 'Germany' },
    { value: 'it', label: 'Italy' }
  ]
})
`,-1)]]),default:t(()=>[o(S,{class:`mb4`,items:u.items1,label:`Country`,modelValue:u.singleVal,"onUpdate:modelValue":d[1]||=e=>u.singleVal=e},null,8,[`items`,`modelValue`]),i(`div`,g,`v-model value: `+l(u.singleVal||`—`),1)]),_:1}),o(x,{h2:``},{default:t(()=>[...d[42]||=[s(`Disabled & readonly`,-1)]]),_:1}),o(C,{"content-class":`py12`},{pug:t(()=>[...d[43]||=[s(`w-autocomplete.mb4(:items="items" label="Disabled" disabled v-model="value")
w-autocomplete.mb4(:items="items" label="Readonly" readonly v-model="value")`,-1)]]),html:t(()=>[...d[44]||=[s(`<w-autocomplete class="mb4" :items="items" label="Disabled" disabled v-model="value"></w-autocomplete>
<w-autocomplete class="mb4" :items="items" label="Readonly" readonly v-model="value"></w-autocomplete>`,-1)]]),js:t(()=>[...d[45]||=[s(`data: () => ({
  value: 'fr',
  items: [
    { value: 'fr', label: 'France' },
    { value: 'de', label: 'Germany' },
    { value: 'it', label: 'Italy' }
  ]
})
`,-1)]]),default:t(()=>[o(S,{class:`mb4`,items:u.items1,label:`Disabled`,disabled:``,modelValue:u.singleVal,"onUpdate:modelValue":d[2]||=e=>u.singleVal=e},null,8,[`items`,`modelValue`]),o(S,{class:`mb4`,items:u.items1,label:`Readonly`,readonly:``,modelValue:u.singleVal,"onUpdate:modelValue":d[3]||=e=>u.singleVal=e},null,8,[`items`,`modelValue`])]),_:1}),o(x,{h2:``},{default:t(()=>[...d[46]||=[s(`Open on keydown`,-1)]]),_:1}),d[84]||=i(`p`,null,[s(`By default the dropdown opens immediately on focus. Setting `),i(`span`,{class:`code`},`open-on-keydown`),s(`
delays the opening until the user starts typing.`)],-1),o(C,{"content-class":`py12`},{pug:t(()=>[...d[47]||=[s(`w-autocomplete(:items="items" label="Open on keydown" open-on-keydown)`,-1)]]),html:t(()=>[...d[48]||=[s(`<w-autocomplete :items="items" label="Open on keydown" open-on-keydown></w-autocomplete>`,-1)]]),js:t(()=>[...d[49]||=[s(`data: () => ({
  items: [
    { value: 'fr', label: 'France' },
    { value: 'de', label: 'Germany' },
    { value: 'it', label: 'Italy' }
  ]
})
`,-1)]]),default:t(()=>[o(S,{class:`mb4`,items:u.items1,label:`Open on keydown`,"open-on-keydown":``},null,8,[`items`])]),_:1}),o(x,{h2:``},{default:t(()=>[...d[50]||=[s(`No-match message`,-1)]]),_:1}),d[85]||=i(`p`,null,[s(`Customize the message shown when no item matches the search keyword with the
`),i(`span`,{class:`code`},`no-match`),s(` prop or the `),i(`span`,{class:`code`},`no-match`),s(` slot.`)],-1),o(C,{"content-class":`py12`},{pug:t(()=>[...d[52]||=[s(`w-autocomplete.mb4(:items="items" label="Prop message" no-match="Nothing found.")
w-autocomplete.mb4(:items="items" label="Slot message")
  template(#no-match)
    .orange.pa1 🔍 No results — try a different search!`,-1)]]),html:t(()=>[...d[53]||=[s(`<w-autocomplete class="mb4" :items="items" label="Prop message" no-match="Nothing found."></w-autocomplete>
<w-autocomplete class="mb4" :items="items" label="Slot message">
  <template #no-match>
    <div class="orange pa1">🔍 No results — try a different search!</div>
  </template>
</w-autocomplete>`,-1)]]),js:t(()=>[...d[54]||=[s(`data: () => ({
  items: [
    { value: 'fr', label: 'France' },
    { value: 'de', label: 'Germany' }
  ]
})
`,-1)]]),default:t(()=>[o(S,{class:`mb4`,items:u.items1,label:`Prop message`,"no-match":`Nothing found.`},null,8,[`items`]),o(S,{class:`mb4`,items:u.items1,label:`Slot message`},{"no-match":t(()=>[...d[51]||=[i(`div`,{class:`orange pa1`},`🔍 No results — try a different search!`,-1)]]),_:1},8,[`items`])]),_:1}),o(x,{h2:``},{default:t(()=>[...d[55]||=[s(`Custom item slot`,-1)]]),_:1}),d[86]||=i(`p`,null,[s(`Use the `),i(`span`,{class:`code`},`item`),s(` slot to fully customize each dropdown entry.`)],-1),o(C,{"content-class":`py12`},{pug:t(()=>[...d[57]||=[s(`w-autocomplete(:items="items" label="Color")
  template(#item="{ item }")
    w-icon.mr2(:style="{ color: item.hex }") wi-check-circle
    | `+l(`{{ item.label }}`),-1)]]),html:t(()=>[...d[58]||=[s(`<w-autocomplete :items="items" label="Color">
  <template #item="{ item }">
    <w-icon class="mr2" :style="{ color: item.hex }">wi-check-circle</w-icon>
    `+l(`{{ item.label }}`)+`
  </template>
</w-autocomplete>`,-1)]]),js:t(()=>[...d[59]||=[s(`data: () => ({
  items: [
    { value: 'red',   label: 'Red',   hex: '#f44336' },
    { value: 'green', label: 'Green', hex: '#4caf50' },
    { value: 'blue',  label: 'Blue',  hex: '#2196f3' }
  ]
})
`,-1)]]),default:t(()=>[o(S,{class:`mb4`,items:u.colorItems,label:`Color`},{item:t(({item:e})=>[o(w,{class:`mr2`,style:r({color:e.hex})},{default:t(()=>[...d[56]||=[s(`wi-check-circle`,-1)]]),_:1},8,[`style`]),s(l(e.label),1)]),_:1},8,[`items`])]),_:1}),o(x,{h2:``},{default:t(()=>[...d[60]||=[s(`Extra item slot`,-1)]]),_:1}),d[87]||=i(`p`,null,[s(`Append a persistent extra entry at the bottom of the list with the `),i(`span`,{class:`code`},`extra-item`),s(` slot.
This is useful for an "Add new…" or "Create…" action.`)],-1),o(C,{"content-class":`py12`},{pug:t(()=>[...d[63]||=[s(`w-autocomplete(:items="items" label="With extra item" @extra-item-select="onExtraItem")
  template(#extra-item)
    w-icon.mr2 wi-plus
    | Add new country…`,-1)]]),html:t(()=>[...d[64]||=[s(`<w-autocomplete :items="items" label="With extra item" @extra-item-select="onExtraItem">
  <template #extra-item>
    <w-icon class="mr2">wi-plus</w-icon>
    Add new country…
  </template>
</w-autocomplete>`,-1)]]),js:t(()=>[...d[65]||=[s(`methods: {
  onExtraItem () { /* open a dialog or push to the list */ }
}
`,-1)]]),default:t(()=>[o(S,{class:`mb4`,items:u.items1,label:`With extra item`,onExtraItemSelect:y.onExtraItem},{"extra-item":t(()=>[o(w,{class:`mr2`},{default:t(()=>[...d[61]||=[s(`wi-plus`,-1)]]),_:1}),d[62]||=s(`Add new country…`,-1)]),_:1},8,[`items`,`onExtraItemSelect`])]),_:1}),o(x,{h2:``},{default:t(()=>[...d[66]||=[s(`Form validation`,-1)]]),_:1}),d[88]||=i(`p`,null,[s(`When used inside a `),i(`span`,{class:`code`},`w-form`),s(`, the `),i(`span`,{class:`code`},`validators`),s(` prop accepts an array of
functions. Each function receives the current value and must return `),i(`span`,{class:`code`},`true`),s(` when
valid or an error string otherwise.`)],-1),o(C,{"content-class":`py12`},{pug:t(()=>[...d[68]||=[s(`w-form(@submit.prevent="onSubmit")
  w-autocomplete.mb4(
    :items="items"
    label="Required country"
    :validators="[v => !!v || 'Please select a country.']")
  w-button.mt4(type="submit" bg-color="primary") Submit`,-1)]]),html:t(()=>[...d[69]||=[s(`<w-form @submit.prevent="onSubmit">
  <w-autocomplete
    class="mb4"
    :items="items"
    label="Required country"
    :validators="[v => !!v || 'Please select a country.']">
  </w-autocomplete>
  <w-button class="mt4" type="submit" bg-color="primary">Submit</w-button>
</w-form>`,-1)]]),js:t(()=>[...d[70]||=[s(`data: () => ({
  items: [
    { value: 'fr', label: 'France' },
    { value: 'de', label: 'Germany' },
    { value: 'it', label: 'Italy' }
  ]
}),
methods: {
  onSubmit () { /* handle form */ }
}
`,-1)]]),default:t(()=>[o(E,{onSubmit:d[4]||=f(e=>u.submitted=!0,[`prevent`])},{default:t(()=>[o(S,{class:`mb4`,items:u.items1,label:`Required country`,validators:[e=>!!e||`Please select a country.`]},null,8,[`items`,`validators`]),o(T,{class:`mt4`,type:`submit`,"bg-color":`primary`},{default:t(()=>[...d[67]||=[s(`Submit`,-1)]]),_:1})]),_:1})]),_:1}),o(x,{h2:``},{default:t(()=>[...d[71]||=[s(`Inside a hidden-overflow container`,-1)]]),_:1}),d[89]||=i(`p`,null,[s(`Because the dropdown is rendered via `),i(`span`,{class:`code`},`w-menu`),s(`, it escapes any
`),i(`span`,{class:`code`},`overflow: hidden`),s(` parent. The example below places the autocomplete inside a
short, clipped card — the dropdown still appears in full.`)],-1),o(C,null,{pug:t(()=>[...d[72]||=[s(`w-card(content-class="pa4" style="overflow:hidden;max-height:80px")
  w-autocomplete(:items="items" label="Country (clipped parent)")`,-1)]]),html:t(()=>[...d[73]||=[s(`<w-card content-class="pa4" style="overflow:hidden;max-height:80px">
  <w-autocomplete :items="items" label="Country (clipped parent)"></w-autocomplete>
</w-card>`,-1)]]),js:t(()=>[...d[74]||=[s(`data: () => ({
  items: [
    { value: 'fr', label: 'France' },
    { value: 'de', label: 'Germany' },
    { value: 'it', label: 'Italy' },
    { value: 'es', label: 'Spain' }
  ]
})`,-1)]]),default:t(()=>[i(`div`,_,[o(D,{"content-class":`pa4`,style:{overflow:`hidden`,"max-height":`80px`}},{default:t(()=>[o(S,{items:u.items1,label:`Country (clipped parent)`},null,8,[`items`])]),_:1})])]),_:1})])}var y=u({data:()=>({singleVal:null,multipleVal:null,chemicalElements:m.definitions.science.chemical_element.map(e=>({value:e.symbol,label:e.name,searchable:`${e.symbol}, ${e.name}, ${e.atomicNumber}`})),items1:[{value:`fr`,label:`France`},{value:`de`,label:`Germany`},{value:`it`,label:`Italy`},{value:`es`,label:`Spain`},{value:`pt`,label:`Portugal`},{value:`nl`,label:`Netherlands`},{value:`be`,label:`Belgium`},{value:`ch`,label:`Switzerland`},{value:`at`,label:`Austria`},{value:`pl`,label:`Poland`}],colorItems:[{value:`red`,label:`Red`,hex:`#f44336`},{value:`green`,label:`Green`,hex:`#4caf50`},{value:`blue`,label:`Blue`,hex:`#2196f3`},{value:`orange`,label:`Orange`,hex:`#ff9800`},{value:`purple`,label:`Purple`,hex:`#9c27b0`}]}),methods:{iconRightClick(){},onExtraItem(){}}},[[`render`,v]]);function b(r,c,l,u,d,f){let p=n(`title-link`),m=n(`component-api`);return e(),a(`div`,null,[c[1]||=i(`div`,{class:`w-divider my12`},null,-1),o(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[s(`API`,-1)]]),_:1}),o(m,{class:`mt0`,items:f.props,descriptions:r.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),o(m,{items:r.slots,title:`Slots`},null,8,[`items`]),o(m,{items:f.events,title:`Events`},null,8,[`items`])])}var x={items:`Expecting an array of objects. Each object being an autocomplete option, it should include at least a <code>label</code> attribute (or the property specified by <code>item-label-key</code>).`,modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>The current selection. A single value when not using <code>multiple</code>, or an array of values otherwise.<br>Gets updated on item selection/unselection.`,placeholder:`Provide a placeholder for the autocomplete field. If a floating label is present, it will be moved above the field so it doesn't overlap.`,openOnKeydown:`When set, the dropdown menu only opens when the user starts typing, rather than on focus or click.`,multiple:`Allows multiple items to be selected. Selected items are displayed as removable chips.`,allowDuplicates:`When <code>multiple</code> is enabled, allows the same item to be added more than once.`,noMatch:`A string to display in the dropdown when no item matches the current keyword. Defaults to <code>No match.</code>.`,itemLabelKey:`The property name in each item object where to find the item's display label.`,itemValueKey:`The property name in each item object where to find the item's unique value.`,itemSearchableKey:`The property name in each item object where to find the item's searchable string. This may be an aggregation of multiple fields — e.g. symbol, name, and atomic number — for richer matching. Falls back to <code>item-label-key</code> when absent.`,label:`Sets a visible label for the autocomplete field.`,labelPosition:`Sets the position of the label: <code>'inside'</code> (default, floating), <code>'left'</code>, or <code>'right'</code>.`,staticLabel:`Prevents moving the label above the field when <code>labelPosition</code> is <code>'inside'</code>. When a selection is made the static label is replaced by the chip(s).`,innerIconLeft:`Adds an icon on the left inside the autocomplete field. Accepts an icon string: e.g. <code>mdi mdi-magnify</code> or <code>wi-search</code>.`,innerIconRight:`Adds an icon on the right inside the autocomplete field. Accepts an icon string: e.g. <code>wi-cross</code>.`,color:`Applies a color to the autocomplete field's text and focus indicator. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the autocomplete field's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the autocomplete field's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all Wave UI color names.`,outline:`The outline style applies the provided <code>color</code> to the text and border and no background color is set.`,round:`Sets a maximum border-radius on the corners of the field, giving it a pill/round look.`,shadow:`Applies a drop shadow to the autocomplete field.`,tile:`Removes the default border-radius and sets sharp edges on the field.`,dark:!1,light:!1,fitToContent:`Fits the autocomplete field width to its content rather than growing to fill the container.`,menuClass:`Applies a custom CSS class to the floating dropdown menu element.`,menuProps:`Passes additional props down to the internal <strong class="code">w-menu</strong> component.<br>For example: <code>:menu-props="{ appendTo: '.my-scroll-container' }"</code> moves the dropdown to a different DOM target.`,xs:`Extra-small size preset.`,sm:`Small size preset.`,md:`Medium size preset (default).`,lg:`Large size preset.`,xl:`Extra-large size preset.`,id:`Sets an explicit DOM <code>id</code> on the input. If omitted, a stable id is auto-generated with Vue's <code>useId()</code>.`,name:`Provides a native HTML <code>name</code> attribute to the input field. If omitted, a stable unique value is generated.`,disabled:`Disables the autocomplete field making it unreactive to user interactions.`,readonly:`The field will still look interactive but its current value cannot be changed by user interaction.`,required:`Applies the native HTML <code>required</code> attribute to the input field.`,tabindex:`Sets the <code>tabindex</code> on the underlying input element.`,validators:`<span class="deep-orange">Only for validation, when the field is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the field. Each function receives the current value and should return <code>true</code> when valid, or a string containing an error message when invalid.`,noBlurValidation:`<span class="deep-orange">Only when the field is in a <strong class="code">w-form</strong> with <code>validators</code>.</span><br>When <code>true</code>, blur does not validate this field. When <code>false</code>, blur always validates even if the form has <code>no-blur-validation</code>. When unset, inherits the form setting.`},S={default:{description:`The label content, when the <code>label</code> prop is not flexible enough.`},selection:{description:`Provide a custom template for each selected chip.`,params:{item:`The selected item object.`,unselect:`A function — call it to remove this chip from the selection.`}},item:{description:`Provide a custom template for each item in the dropdown list.`,params:{item:`The current item object.`,highlighted:`A Boolean indicating whether this item is currently keyboard-highlighted.`}},"no-match":{description:`Provide a custom "No match" message displayed in the dropdown when no item matches the current keyword.<br>Default: <code>No match.</code>`},"extra-item":{description:`Provide a persistent extra entry appended at the bottom of the dropdown list (e.g. "Add new…"). Selecting it emits the <code>extra-item-select</code> event.`},"icon-left":{description:`The left icon content, when the <code>innerIconLeft</code> prop is not flexible enough.`},"icon-right":{description:`The right icon content, when the <code>innerIconRight</code> prop is not flexible enough.`}},C={input:{description:`Emitted each time the selection changes.<br>Updates the v-model value in Vue 2.x only.`,params:{"[string, number, Array, null]":`The new selected value(s). Array of values if <code>multiple</code> is <code>true</code>, single value otherwise. <code>null</code> when the selection is cleared.`}},"update:modelValue":{description:`Emitted each time the selection changes.<br>Updates the v-model value in Vue 3.`,params:{"[string, number, Array, null]":`The new selected value(s). Array of values if <code>multiple</code> is <code>true</code>, single value otherwise. <code>null</code> when the selection is cleared.`}},focus:{description:`Emitted on autocomplete input focus.`,params:{"[DOM FocusEvent]":`The associated focus DOM event.`}},blur:{description:`Emitted on autocomplete input blur (unless the user clicked inside the dropdown).`,params:{"[DOM FocusEvent]":`The associated blur DOM event.`}},keydown:{description:`Emitted on every keydown event in the input field.`,params:{"[DOM KeyboardEvent]":`The associated keydown DOM event.`}},"item-click":{description:`Emitted when the user clicks a dropdown list item.`,params:{"[Object]":`The clicked item object.`}},"item-select":{description:`Emitted when an item is selected (via click or <kbd>Enter</kbd> keydown).`,params:{"[Object]":`The selected item object.`}},"extra-item-select":{description:`Emitted when the user selects the <code>extra-item</code> slot entry.`},"click:inner-icon-left":{description:`Emitted on click of the left inner icon, if any.`,params:{"[DOM MouseEvent]":`The associated click DOM event.`}},"click:inner-icon-right":{description:`Emitted on click of the right inner icon, if any.`,params:{"[DOM MouseEvent]":`The associated click DOM event.`}}},w=u({data:()=>({propsDescs:x,slots:S}),computed:{props(){return{...p.props,...d.props}},events(){return p.emits.reduce((e,t)=>(e[t]=C[t]||{},e),{})}}},[[`render`,b]]);function T(r,i,c,l,u,d){let f=n(`ui-component-title`),p=n(`examples`),m=n(`api`);return e(),a(`main`,null,[o(f,{slug:`w-autocomplete`},{default:t(()=>[...i[0]||=[s(`w-autocomplete`,-1)]]),_:1}),o(p),o(m)])}var E=u({components:{Examples:y,Api:w}},[[`render`,T]]);export{E as default};