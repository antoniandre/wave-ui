import{N as e,W as t,bt as n,c as r,d as i,g as a,h as o,k as s,m as c,u as l}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as u}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{C as d}from"./index-DH7838aH.js";var f={class:`lists-demo`},p={class:`w-flex wrap`},m={class:`grow`},h={class:`grow`},g={class:`w-flex align-center justify-space-between`},_={key:0},v={class:`code`},y={class:`title3 mt2`},b={key:0,class:`ml2`},x={key:1,class:`ml2`},S={class:`grow`},C={class:`grow`},w={class:`grow`},T={class:`grow`};function E(u,d,E,D,O,k){let A=e(`w-list`),j=e(`title-link`),M=e(`example`),N=e(`w-icon`),P=e(`w-radios`),F=e(`w-flex`),I=e(`router-view`);return s(),i(`div`,f,[d[65]||=r(`p`,null,[o(`The `),r(`span`,{class:`code`},`w-list`),o(` component has multiple uses:`)],-1),a(A,{items:4,icon:`wi-check`},{"item.1":t(()=>[...d[8]||=[o(`Simple list with or without icons`,-1)]]),"item.2":t(()=>[...d[9]||=[o(`Checklists`,-1)]]),"item.3":t(()=>[...d[10]||=[o(`Navigation menus`,-1)]]),"item.4":t(()=>[...d[11]||=[o(`List of selectable items`,-1)]]),_:1}),a(j,{h2:``},{default:t(()=>[...d[12]||=[o(`Basic lists`,-1)]]),_:1}),a(M,null,{pug:t(()=>[...d[15]||=[o(`.w-flex.wrap
  .grow
    .title3 Most basic
    w-list(:items="items")
  .grow
    .title3 With icons
    w-list(:items="items" icon="wi-check")`,-1)]]),html:t(()=>[...d[16]||=[o(`<w-flex wrap>
  <div class="grow">
    <div class="title3 mb6">Most basic</div>
    <w-list :items="items"></w-list>
  </div>

  <div class="grow">
    <div class="title3 mb6">With icons</div>
    <w-list :items="items" icon="wi-check"></w-list>
  </div>
</w-flex>`,-1)]]),js:t(()=>[...d[17]||=[o(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' },
    { label: 'Item 4' },
    { label: 'Item 5', disabled: true }
  ]
})
`,-1)]]),default:t(()=>[r(`div`,p,[r(`div`,m,[d[13]||=r(`div`,{class:`title3`},`Most basic`,-1),a(A,{items:u.listItems1},null,8,[`items`])]),r(`div`,h,[d[14]||=r(`div`,{class:`title3`},`With icons`,-1),a(A,{items:u.listItems1,icon:`wi-check`},null,8,[`items`])])])]),_:1}),a(j,{h2:``},{default:t(()=>[...d[18]||=[o(`Color & hoverable`,-1)]]),_:1}),d[66]||=r(`p`,null,[o(`Like in most components, you can set a `),r(`code`,null,`color`),o(` for the text and a `),r(`code`,null,`bg-color`),o(` for the
background.`)],-1),a(M,null,{pug:t(()=>[...d[19]||=[o(`w-list(:items="items" color="pink" hover)
br
w-list(:items="items" bg-color="blue-light5" color="primary" hover)`,-1)]]),html:t(()=>[...d[20]||=[o(`<w-list
  :items="items"
  color="pink"
  hover>
</w-list>

<br />
<w-list
  :items="items"
  bg-color="blue-light5"
  color="primary"
  hover>
</w-list>`,-1)]]),js:t(()=>[...d[21]||=[o(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' },
    { label: 'Item 4' }
  ]
})
`,-1)]]),default:t(()=>[a(A,{items:u.listItems4,color:`pink`,hover:``},null,8,[`items`]),d[22]||=r(`br`,null,null,-1),a(A,{items:u.listItems4,"bg-color":`blue-light5`,color:`primary`,hover:``},null,8,[`items`])]),_:1}),a(j,{h3:``},{default:t(()=>[...d[23]||=[o(`Different color per item`,-1)]]),_:1}),a(M,null,{pug:t(()=>[...d[24]||=[o(`w-list(:items="items" hover)`,-1)]]),html:t(()=>[...d[25]||=[o(`<w-list :items="items" hover></w-list>`,-1)]]),js:t(()=>[...d[26]||=[o(`data: () => ({
  items: [
    { label: 'Item 1', color: 'amber' },
    { label: 'Item 2', color: 'warning' },
    { label: 'Item 3', color: 'error' },
    { label: 'Item 4', color: 'pink' }
  ]
})
`,-1)]]),default:t(()=>[a(A,{items:u.listItems5,hover:``},null,8,[`items`])]),_:1}),a(j,{h3:``},{default:t(()=>[...d[27]||=[o(`Selection-only color`,-1)]]),_:1}),d[67]||=c(`<p class="grey-light1">In addition to the hover effect, the items may also be selectable (as per the
<a href="#selectable-list-items">Selectable list items example</a>),
but in this example we are only demonstrating the selection color.</p><p>You may want a default color for all the items, but a different color for the selection only.<br>
You can use the <code>selection-color</code> option for this purpose.</p><p>If no <code>color</code> and no <code>selection-color</code> are set, the <code>selection-color</code> will be set
to primary by default.<br>
In that case, if you don&#39;t want to default to the primary color, you can explicitly set
<code>selection-color</code> to a falsy value (false, null, or empty string), or another color.</p>`,3),a(M,null,{pug:t(()=>[...d[28]||=[o(`w-list(
  :model-value="['Item 2']"
  :items="items"
  selection-color="pink"
  multiple)`,-1)]]),html:t(()=>[...d[29]||=[o(`<w-list
  :model-value="['Item 2']"
  :items="items"
  selection-color="pink"
  multiple>
</w-list>`,-1)]]),js:t(()=>[...d[30]||=[o(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' },
    { label: 'Item 4' }
  ]
})
`,-1)]]),default:t(()=>[a(A,{"model-value":[`Item 2`],items:u.listItems4,"selection-color":`pink`,multiple:``},null,8,[`items`])]),_:1}),a(j,{h2:``},{default:t(()=>[...d[31]||=[o(`Custom rendering`,-1)]]),_:1}),d[68]||=r(`p`,null,[o(`In this example, we don't use the component's data at all.`),r(`br`),o(`
You can easily define items directly in the template and have a different custom layout for every
list item just like in this example.`)],-1),a(M,null,{pug:t(()=>[...d[33]||=[o(`w-list(:items="5" hover)
  template(#item="{ index }")
    | Item `+n(`{{ index }}`)+`
  template(#item.3)
    strong This is the great item #3`,-1)]]),html:t(()=>[...d[34]||=[o(`<w-list :items="5" hover>
  <template #item="{ index }">`+n(`{{ index }}`)+`</template>
  <template #item.3>
    <strong>This is the great item #3</strong>
  </template>
</w-list>
`,-1)]]),default:t(()=>[a(A,{items:5,hover:``},{item:t(({index:e})=>[o(`Item `+n(e),1)]),"item.3":t(()=>[...d[32]||=[r(`strong`,null,`This is the great item #3`,-1)]]),_:1})]),_:1}),d[69]||=r(`p`,null,[o(`It's up to you to define your your list contents in the component's data or directly in the template.`),r(`br`),o(`
In this example each item has a different icon stored in the data object.`)],-1),a(M,null,{pug:t(()=>[...d[35]||=[o(`w-list(:items="items" hover)
  template(#item="{ item }")
    w-flex(align-center justify-space-between)
      | `+n(`{{ item.label }}`)+`
      w-icon(md) `+n(`{{ item.icon }}`),-1)]]),html:t(()=>[...d[36]||=[o(`<w-list :items="items" hover>
  <template #item="{ item }">
    <w-flex align-center justify-space-between>
      `+n(`{{ item.label }}`)+`
      <w-icon md>`+n(`{{ item.icon }}`)+`</w-icon>
    </w-flex>
  </template>
</w-list>`,-1)]]),js:t(()=>[...d[37]||=[o(`data: () => ({
  items: [
    { label: 'Star', icon: 'mdi mdi-star' },
    { label: 'Check', icon: 'mdi mdi-check' },
    { label: 'Cross', icon: 'mdi mdi-close' },
    { label: 'Info', icon: 'mdi mdi-information' },
    { label: 'Warning', icon: 'mdi mdi-alert' },
    { label: 'Disabled', icon: 'mdi mdi-minus-circle' }
  ]
})
`,-1)]]),default:t(()=>[a(A,{items:u.listItems2,hover:``},{item:t(({item:e})=>[r(`div`,g,[o(n(e.label),1),a(N,{md:``},{default:t(()=>[o(n(e.icon),1)]),_:2},1024)])]),_:1},8,[`items`])]),_:1}),a(j,{h2:``},{default:t(()=>[...d[38]||=[o(`Selectable list items`,-1)]]),_:1}),d[70]||=r(`p`,null,[o(`If you provide a `),r(`code`,null,`v-model`),o(` or a `),r(`code`,null,`model-value`),o(`, the list items become selectable.`)],-1),a(M,null,{pug:t(()=>[...d[42]||=[o(`w-radios.mb6(v-model="multiple" :items="radios" inline)
w-flex(wrap align-center)
  w-list.mt6.grow.mr4(
    v-model="selection"
    :items="items"
    color="deep-purple"
    :multiple="multiple"
    @item-click="itemClicked = $event")
  div(v-if="itemClicked")
    .title3 clicked item:
    br
    code `+n(`{{ itemClicked }}`)+`
.title3.mt2
  | Selected item:
  code.ml2(v-if="!multiple || Array.isArray&#40;selection&#41;").
    `+n(`{{ selection || 'null' }}`)+`
  code.ml2(v-else-if="multiple").
    `+n(`{{ selection ? [selection] : '[]' }}`),-1)]]),html:t(()=>[...d[43]||=[o(`<w-radios v-model="multiple" :items="radios" inline></w-radios>

<w-flex wrap align-center>
  <w-list
    v-model="selection"
    :items="items"
    color="deep-purple"
    :multiple="multiple"
    @item-click="itemClicked = $event"
    class="mt6 mr4 grow">
  </w-list>

  <div v-if="itemClicked">
    <div class="title3">Clicked item:</div>
    <code>`+n(`{{ itemClicked }}`)+`</code>
  </div>
</w-flex>

<div class="title3 mt2">
  Selected item:
  <code v-if="!multiple || Array.isArray(selection)" class="ml2">
    `+n(`{{ selection || 'null' }}`)+`
  </code>
  <code v-else-if="multiple" class="ml2">
    `+n(`{{ selection ? [selection] : '[]' }}`)+`
  </code>
</div>`,-1)]]),js:t(()=>[...d[44]||=[o(`data: () => ({
  radios: [
    { label: 'Single selection', value: false },
    { label: 'Multiple selections', value: true }
  ],
  multiple: false,
  items: [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 },
    { label: 'Item 4', value: 4 },
    { label: 'Item 5', value: 5, disabled: true }
  ],
  selection: 2,
  itemClicked: null
})`,-1)]]),default:t(()=>[a(P,{class:`mb6`,modelValue:u.multiple,"onUpdate:modelValue":d[0]||=e=>u.multiple=e,items:u.radios,inline:``},null,8,[`modelValue`,`items`]),a(F,{wrap:``,"align-center":``},{default:t(()=>[a(A,{class:`grow mr4`,modelValue:u.selection1,"onUpdate:modelValue":d[1]||=e=>u.selection1=e,items:u.listItems1,color:`deep-purple`,multiple:u.multiple,onItemClick:d[2]||=e=>u.itemClicked=e},null,8,[`modelValue`,`items`,`multiple`]),u.itemClicked?(s(),i(`div`,_,[d[39]||=r(`div`,{class:`title3`},[o(`clicked item (`),r(`span`,{class:`code`},`item-click`),o(` event):`)],-1),d[40]||=r(`br`,null,null,-1),r(`span`,v,n(u.itemClicked),1)])):l(``,!0)]),_:1}),r(`div`,y,[d[41]||=o(`Selected item:`,-1),!u.multiple||Array.isArray(u.selection1)?(s(),i(`code`,b,n(u.selection1||`null`),1)):u.multiple?(s(),i(`code`,x,n(u.selection1?[u.selection1]:`[]`),1)):l(``,!0)])]),_:1}),d[71]||=r(`p`,null,[o(`Note: you can get the list selection from the v-model, or by listening to the `),r(`span`,{class:`code`},`input`),o(` event.`)],-1),a(j,{h2:``},{default:t(()=>[...d[45]||=[o(`Checklists`,-1)]]),_:1}),a(M,null,{pug:t(()=>[...d[52]||=[o(`w-flex(wrap basis-zero :gap="3")
  .grow
    .title3.mb4 Default
    w-list(
      v-model="selection1"
      :items="listItems1"
      checklist
      color="green")
  .grow
    .title3.mb4 Round checkboxes
    w-list(
      v-model="selection2"
      :items="listItems1"
      checklist
      round-checkboxes
      color="green")

w-flex.mt4(wrap basis-zero :gap="3")
  .grow
    .title3.mb4 Custom rendering, default styles
    w-list(
      v-model="selection3"
      :items="listItems2"
      item-value-key="id"
      checklist
      color="primary")
      template(#item="{ item }")
        span `+n(`{{ item.label }}`)+`
        .spacer
        w-icon(md) `+n(`{{ item.icon }}`)+`
  .grow
    .title3.mb4 Custom rendering & styles
    w-list.custom(
      v-model="selection4"
      :items="listItems2"
      item-value-key="id"
      checklist
      color="primary")
      template(#item="{ item }")
        span `+n(`{{ item.label }}`)+`
        .spacer
        w-icon(md) `+n(`{{ item.icon }}`),-1)]]),html:t(()=>[...d[53]||=[o(`<w-flex wrap basis-zero :gap="3">
  <div class="grow">
    <p class="title3 mb4">Default</p>
    <w-list
      v-model="selection1"
      :items="listItems1"
      checklist
      color="green">
    </w-list>
  </div>
  <div class="grow">
    <p class="title3 mb4">Round checkboxes</p>
    <w-list
      v-model="selection2"
      :items="listItems1"
      checklist
      round-checkboxes
      color="green">
    </w-list>
  </div>
</w-flex>

<w-flex wrap basis-zero :gap="3" class="mt4">
  <div class="grow">
    <p class="title3 mb4">Custom rendering, default styles</p>
    <w-list
      v-model="selection3"
      :items="listItems2"
      item-value-key="id"
      checklist
      color="primary">
      <template #item="{ item }">
        <span>`+n(`{{ item.label }}`)+`</span>
        <div class="spacer"></div>
        <w-icon md>`+n(`{{ item.icon }}`)+`</w-icon>
      </template>
    </w-list>
  </div>
  <div class="grow">
    <p class="title3 mb4">Custom rendering & styles</p>
    <w-list
      v-model="selection4"
      :items="listItems2"
      item-value-key="id"
      checklist
      color="primary"
      class="custom">
      <template #item="{ item }">
        <span>`+n(`{{ item.label }}`)+`</span>
        <div class="spacer"></div>
        <w-icon md>`+n(`{{ item.icon }}`)+`</w-icon>
      </template>
    </w-list>
  </div>
</w-flex>`,-1)]]),js:t(()=>[...d[54]||=[o(`data: () => ({
  listItems1: [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 },
    { label: 'Item 4', value: 4 },
    { label: 'Item 5', value: 5, disabled: true }
  ],
  listItems2: [
    { label: 'Star', id: 'star', icon: 'mdi mdi-star' },
    { label: 'Check', id: 'check', icon: 'mdi mdi-check' },
    { label: 'Cross', id: 'cross', icon: 'mdi mdi-close' },
    { label: 'Info', id: 'info', icon: 'mdi mdi-information' },
    { label: 'Warning', id: 'warning', icon: 'mdi mdi-alert' },
    { label: 'Disabled', id: 'disabled', icon: 'mdi mdi-minus-circle', disabled: true }
  ],
  selection1: [1, 3],
  selection2: [1, 3],
  selection3: ['star', 'cross'],
  selection4: ['star', 'cross']
})`,-1)]]),css:t(()=>[...d[55]||=[o(`.w-list.custom .w-list__item-label:before {display: none;}
.w-list.custom .w-list__item-label label {
  position: relative;
  transition: 0.3s ease-in-out;
}
.w-list.custom .w-list__item-label--active label {
  opacity: 0.6;
  color: #999;
}
.w-list.custom .w-list__item-label label:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 0;
  border-top: 1px solid #999;
  pointer-events: none;
  transition: 0.3s ease-in-out;
}
.w-list.custom .w-list__item-label--active label:before {
  width: 100%;
}
`,-1)]]),default:t(()=>[a(F,{wrap:``,"basis-zero":``,gap:3},{default:t(()=>[r(`div`,S,[d[46]||=r(`div`,{class:`title3 mb4`},`Default`,-1),a(A,{modelValue:u.selection3,"onUpdate:modelValue":d[3]||=e=>u.selection3=e,items:u.listItems1,checklist:``,color:`green`},null,8,[`modelValue`,`items`])]),r(`div`,C,[d[47]||=r(`div`,{class:`title3 mb4`},`Round checkboxes`,-1),a(A,{modelValue:u.selection4,"onUpdate:modelValue":d[4]||=e=>u.selection4=e,items:u.listItems1,checklist:``,"round-checkboxes":``,color:`green`},null,8,[`modelValue`,`items`])])]),_:1}),a(F,{class:`mt4`,wrap:``,"basis-zero":``,gap:3},{default:t(()=>[r(`div`,w,[d[49]||=r(`div`,{class:`title3 mb4`},`Custom rendering, default styles`,-1),a(A,{modelValue:u.selection6,"onUpdate:modelValue":d[5]||=e=>u.selection6=e,items:u.listItems2,"item-value-key":`id`,checklist:``,color:`primary`},{item:t(({item:e})=>[r(`span`,null,n(e.label),1),d[48]||=r(`div`,{class:`spacer`},null,-1),a(N,{md:``},{default:t(()=>[o(n(e.icon),1)]),_:2},1024)]),_:1},8,[`modelValue`,`items`])]),r(`div`,T,[d[51]||=r(`div`,{class:`title3 mb4`},`Custom rendering & styles`,-1),a(A,{class:`custom`,modelValue:u.selection7,"onUpdate:modelValue":d[6]||=e=>u.selection7=e,items:u.listItems2,"item-value-key":`id`,checklist:``,color:`primary`},{item:t(({item:e})=>[r(`span`,null,n(e.label),1),d[50]||=r(`div`,{class:`spacer`},null,-1),a(N,{md:``},{default:t(()=>[o(n(e.icon),1)]),_:2},1024)]),_:1},8,[`modelValue`,`items`])])]),_:1})]),_:1}),a(j,{h3:``},{default:t(()=>[...d[56]||=[o(`Checklist colors`,-1)]]),_:1}),d[72]||=r(`p`,null,`A checklist can have all the color options that the normal list can have, even a different color per item.`,-1),a(M,null,{pug:t(()=>[...d[57]||=[o(`w-list(v-model="selection5" :items="items" checklist)`,-1)]]),html:t(()=>[...d[58]||=[o(`<w-list
  v-model="selection"
  :items="items"
  checklist>
</w-list>`,-1)]]),js:t(()=>[...d[59]||=[o(`data: () => ({
  items: [
    { label: 'Item 1', value: 1, color: 'amber' },
    { label: 'Item 2', value: 2, color: 'warning' },
    { label: 'Item 3', value: 3, color: 'error' },
    { label: 'Item 4', value: 4, color: 'pink' }
  ],
  selection: [1, 2, 3, 4]
})
`,-1)]]),default:t(()=>[a(A,{modelValue:u.selection5,"onUpdate:modelValue":d[7]||=e=>u.selection5=e,items:u.listItems5,checklist:``},null,8,[`modelValue`,`items`])]),_:1}),a(j,{h2:``},{default:t(()=>[...d[60]||=[o(`Navigation lists`,-1)]]),_:1}),d[73]||=r(`p`,null,[o(`The navigation list expects a `),r(`code`,null,`route`),o(` attribute in the items that are links.`),r(`br`),o(`
If you are using Vue Router, all the links will automatically be `),r(`strong`,{class:`code`},`router-link`),o(`s.`),r(`br`)],-1),d[74]||=r(`p`,null,[o(`It is possible to disable a link with a `),r(`code`,null,`disabled: true`),o(` attribute in the item.`)],-1),a(M,null,{pug:t(()=>[...d[62]||=[o(`w-list(:items="items" nav color="primary")
  template(#item="{ item }")
    span `+n(`{{ item.label }`)+`}
    .spacer
    w-icon(md) `+n(`{{ item.icon }}`),-1)]]),html:t(()=>[...d[63]||=[o(`<w-list :items="items" nav color="primary">
  <template #item="{ item }">
    <span>`+n(`{{ item.label }}`)+`</span>
    <div class="spacer"></div>
    <w-icon md>`+n(`{{ item.icon }}`)+`</w-icon>
  </template>
</w-list>`,-1)]]),js:t(()=>[...d[64]||=[o(`data: () => ({
  items: [
    { label: 'Star', id: 'star', icon: 'mdi mdi-star', route: '/w-list/star' },
    { label: 'Check', id: 'check', icon: 'mdi mdi-check', route: '/w-list/check' },
    { label: 'Cross', id: 'cross', icon: 'mdi mdi-close', route: '/w-list/cross' },
    { label: 'Info', id: 'info', icon: 'mdi mdi-information', route: '/w-list/info' },
    { label: 'Warning', id: 'warning', icon: 'mdi mdi-alert', route: '/w-list/warning' },
    { label: 'Disabled', id: 'disabled', icon: 'mdi mdi-minus-circle', route: '/w-list/disabled', disabled: true }
  ]
})
`,-1)]]),default:t(()=>[a(A,{items:u.listItems2,nav:``,color:`primary`},{item:t(({item:e})=>[r(`span`,null,n(e.label),1),d[61]||=r(`div`,{class:`spacer`},null,-1),a(N,{md:``},{default:t(()=>[o(n(e.icon),1)]),_:2},1024)]),_:1},8,[`items`])]),_:1}),a(I)])}var D=u({data:()=>({radios:[{label:`Single selection`,value:!1},{label:`Multiple selections`,value:!0}],multiple:!1,listItems1:[{label:`Item 1`,value:1},{label:`Item 2`,value:2},{label:`Item 3`,value:3},{label:`Item 4`,value:4},{label:`Item 5`,value:5,disabled:!0}],listItems2:[{label:`Star`,id:`star`,icon:`mdi mdi-star`,route:`/w-list/star`},{label:`Check`,id:`check`,icon:`mdi mdi-check`,route:`/w-list/check`},{label:`Cross`,id:`cross`,icon:`mdi mdi-close`,route:`/w-list/cross`},{label:`Info`,id:`info`,icon:`mdi mdi-information`,route:`/w-list/info`},{label:`Warning`,id:`warning`,icon:`mdi mdi-alert`,route:`/w-list/warning`},{label:`Disabled`,id:`disabled`,icon:`mdi mdi-minus-circle`,route:`/w-list/disabled`,disabled:!0}],listItems3:[{label:`Item 1`},{label:`Item 2`},{label:`Item 3`},{label:`Item 4`},{label:`Item 5`,disabled:!0}],listItems4:[{label:`Item 1`},{label:`Item 2`},{label:`Item 3`},{label:`Item 4`}],listItems5:[{label:`Item 1`,value:1,color:`amber`},{label:`Item 2`,value:2,color:`warning`},{label:`Item 3`,value:3,color:`error`},{label:`Item 4`,value:4,color:`pink`}],selection1:2,selection2:`check`,selection3:[1,3],selection4:[1,3],selection5:[1,2,3,4],selection6:[`star`,`cross`],selection7:[`star`,`cross`],itemClicked:null})},[[`render`,E]]);function O(n,c,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return s(),i(`div`,null,[c[1]||=r(`div`,{class:`w-divider my12`},null,-1),a(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[o(`API`,-1)]]),_:1}),a(m,{class:`mt0`,items:f.props,descriptions:n.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),a(m,{items:n.slots,title:`Slots`},null,8,[`items`]),a(m,{items:f.events,title:`Events`},null,8,[`items`])])}var k={items:`Expecting an array of objects. Each object being a list item, it should include at least a <code>label</code> attribute.<br>Alternatively, you can provide an integer number (call it <em class="code">x</em>), to loop through and create <em class="code">x</em> items in the list. You can then use the individual slots <code>item-title.x</code> &amp; <code>item-content.x</code> to define each item.`,modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide an array of values if <code>multiple</code> is set to true, or a single value otherwise, to dictate the selected state of the list items.<br>Also accepts full objects when <code>return-object</code> is set to true.<br>This value gets updated when using a v-model.`,checklist:`Sets the type of list to checklist: each item has a checkbox.`,roundCheckboxes:`When <code>checklist</code> is true, displays round checkboxes instead of square ones.`,multiple:`When selectable, allows multiple selections. A checklist always has multiple selections.`,addIds:`When <code>true</code>, assigns a stable <code>id</code> on the list root and every item (SSR-safe). When a string, that value is used as the id prefix instead of an auto-generated one.<br>Useful for <code>aria-*</code> relationships (e.g. <code>w-select</code> passes its listbox prefix here).`,hover:`On mouseover, highlights the list items with the given <code>color</code>. Also adds a small vertical padding on the list items to space them.`,color:`Applies a color to the list items's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the list items's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,selectionColor:`Applies a color to the selected list items's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,nav:"Set the list as a navigation menu. All the items having a `route` attribute will be converted to link or router-link if vue-router is present.",icon:`A global icon string to apply to all the list items. E.g. <code>mdi mdi-home</code>.`,itemLabelKey:`The property name (aka "key") in each item object where to find the label of the item.`,itemValueKey:`The property name (aka "key") in each item object where to find the value of the item.`,itemClassKey:`The property name (aka "key") in each item object where to find an optional CSS class for this item.`,itemColorKey:`The property name (aka "key") in each item object where to find an optional color for this item.`,itemRouteKey:`The property name (aka "key") in each item object where to find an optional route for this item, to be used in <code>nav</code> lists.<br>Since we usually set a <code>to</code> prop for router-links/nuxt-links, and <code>href</code> for <span class="code">&lt;a&gt;</span> tags, the <code>route</code> option unifies both.`,itemClass:`Applies a custom CSS class to every list item.`,depth:!1,returnObject:`The current list selection is returned via the <code>value</code> prop or <code>v-model</code> as an array of full objects or a single full object (returning the original as given) when <code>multiple</code> is set to false.`,arrowsNavigation:`Allows the navigation through the list items with the keyboard arrows up and down, when set to true and when the items are selectable (the <strong class="code">w-list</strong> has a <code>value</code> or <code>v-model</code>, or is a <code>nav</code> or <code>checklist</code>).`,noUnselect:`Once at least one item is selected, prevents the list to have no selection. Clicking an item when only this one is selected will not unselect it.`,noRipple:`When <code>true</code>, disables the pointer ripple on interactive rows for this list. By default, ripple follows <code>$waveui.config.ripple</code>.`},A={item:{description:`Provide a custom content for every item. Applies to all the items, but can be overridden by the <code>item.x</code> slot.`,params:{item:`The current item object.`,index:`The item index in the list. Starts at 1 to be consistent with the <code>item.x</code> slot.`,selected:`A boolean representing the selected state of the current item.`}},"item.x":{description:`<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single item: the item at the index <em class="code">x</em>.`,params:{item:`The current item object.`,index:`The item index in the list. Starts at 1 to be consistent with the slot name.`,selected:`A boolean representing the selected state of the current item.`}}},j={input:{description:`Emitted each time the state of the list changes.<br>Updates the <code>v-model</code> value in Vue 2.x only.`,params:{"[Array]":`An array of values of all the selected list items.`}},"update:modelValue":{description:`Emitted each time the state of the list changes (when an item is selected or unselected).<br>Updates the v-model value in Vue 3 only.`,params:{"[Array]":`An array of values of all the selected list items.`}},"item-click":{description:`Emitted on each list item click.`,params:{"[Object]":`The clicked list item's object.`}},"item-select":{description:`Emitted on each list item selection or unselection (via click or keyboard <kbd>enter</kbd> key when focused).`,params:{"[Object]":`The selected list item's object.`}},"keydown:enter":{description:`Emitted on <kbd>enter</kbd> key down, when the focus is on any of the list items.`},"keydown:escape":{description:`Emitted on <kbd>escape</kbd> key down, when the focus is on any of the list items.`}},M=u({data:()=>({propsDescs:k,slots:A}),computed:{props(){return d.props},events(){return d.emits.reduce((e,t)=>(e[t]=j[t]||{},e),{})}}},[[`render`,O]]);function N(n,r,c,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return s(),i(`main`,null,[a(f,null,{default:t(()=>[...r[0]||=[o(`w-list`,-1)]]),_:1}),a(p),a(m)])}var P=u({components:{Examples:D,Api:M}},[[`render`,N]]);export{P as default};