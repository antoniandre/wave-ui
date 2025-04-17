import{r as c,g as u,o as p,b as s,a as i,h as V,e as t,w as l,t as o,d as y,_ as f,W as I}from"./index-B6QByf_F.js";const j={class:"lists-demo"},A={class:"w-flex wrap"},S={class:"grow"},T={class:"grow"},$={class:"w-flex align-center justify-space-between"},E={key:0},W={class:"code"},D={class:"title3 mt2"},U={key:0,class:"ml2"},N={key:1,class:"ml2"},P={class:"grow"},z={class:"grow"},K={class:"grow"},M={class:"grow"};function O(n,e,h,g,k,b){const m=c("w-list"),r=c("title-link"),d=c("example"),w=c("w-icon"),C=c("w-radios"),v=c("w-flex"),x=c("router-view");return p(),u("div",j,[e[65]||(e[65]=s("p",null,[t("The "),s("span",{class:"code"},"w-list"),t(" component has multiple uses:")],-1)),i(m,{items:4,icon:"wi-check"},{"item.1":l(()=>e[8]||(e[8]=[t("Simple list with or without icons")])),"item.2":l(()=>e[9]||(e[9]=[t("Checklists")])),"item.3":l(()=>e[10]||(e[10]=[t("Navigation menus")])),"item.4":l(()=>e[11]||(e[11]=[t("List of selectable items")])),_:1}),i(r,{h2:""},{default:l(()=>e[12]||(e[12]=[t("Basic lists")])),_:1}),i(d,null,{pug:l(()=>e[15]||(e[15]=[t(`.w-flex.wrap
  .grow
    .title3 Most basic
    w-list(:items="items")
  .grow
    .title3 With icons
    w-list(:items="items" icon="wi-check")`)])),html:l(()=>e[16]||(e[16]=[t(`<w-flex wrap>
  <div class="grow">
    <div class="title3 mb6">Most basic</div>
    <w-list :items="items"></w-list>
  </div>

  <div class="grow">
    <div class="title3 mb6">With icons</div>
    <w-list :items="items" icon="wi-check"></w-list>
  </div>
</w-flex>`)])),js:l(()=>e[17]||(e[17]=[t(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' },
    { label: 'Item 4' },
    { label: 'Item 5', disabled: true }
  ]
})
`)])),default:l(()=>[s("div",A,[s("div",S,[e[13]||(e[13]=s("div",{class:"title3"},"Most basic",-1)),i(m,{items:n.listItems1},null,8,["items"])]),s("div",T,[e[14]||(e[14]=s("div",{class:"title3"},"With icons",-1)),i(m,{items:n.listItems1,icon:"wi-check"},null,8,["items"])])])]),_:1}),i(r,{h2:""},{default:l(()=>e[18]||(e[18]=[t("Color & hoverable")])),_:1}),e[66]||(e[66]=s("p",null,[t("Like in most components, you can set a "),s("code",null,"color"),t(" for the text and a "),s("code",null,"bg-color"),t(` for the
background.`)],-1)),i(d,null,{pug:l(()=>e[19]||(e[19]=[t(`w-list(:items="items" color="pink" hover)
br
w-list(:items="items" bg-color="blue-light5" color="primary" hover)`)])),html:l(()=>e[20]||(e[20]=[t(`<w-list
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
</w-list>`)])),js:l(()=>e[21]||(e[21]=[t(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' },
    { label: 'Item 4' }
  ]
})
`)])),default:l(()=>[i(m,{items:n.listItems4,color:"pink",hover:""},null,8,["items"]),e[22]||(e[22]=s("br",null,null,-1)),i(m,{items:n.listItems4,"bg-color":"blue-light5",color:"primary",hover:""},null,8,["items"])]),_:1}),i(r,{h3:""},{default:l(()=>e[23]||(e[23]=[t("Different color per item")])),_:1}),i(d,null,{pug:l(()=>e[24]||(e[24]=[t('w-list(:items="items" hover)')])),html:l(()=>e[25]||(e[25]=[t('<w-list :items="items" hover></w-list>')])),js:l(()=>e[26]||(e[26]=[t(`data: () => ({
  items: [
    { label: 'Item 1', color: 'amber' },
    { label: 'Item 2', color: 'warning' },
    { label: 'Item 3', color: 'error' },
    { label: 'Item 4', color: 'pink' }
  ]
})
`)])),default:l(()=>[i(m,{items:n.listItems5,hover:""},null,8,["items"])]),_:1}),i(r,{h3:""},{default:l(()=>e[27]||(e[27]=[t("Selection-only color")])),_:1}),e[67]||(e[67]=V(`<p class="grey-light1">In addition to the hover effect, the items may also be selectable (as per the
<a href="#selectable-list-items">Selectable list items example</a>),
but in this example we are only demonstrating the selection color.</p><p>You may want a default color for all the items, but a different color for the selection only.<br>
You can use the <code>selection-color</code> option for this purpose.</p><p>If no <code>color</code> and no <code>selection-color</code> are set, the <code>selection-color</code> will be set
to primary by default.<br>
In that case, if you don&#39;t want to default to the primary color, you can explicitly set
<code>selection-color</code> to a falsy value (false, null, or empty string), or another color.</p>`,3)),i(d,null,{pug:l(()=>e[28]||(e[28]=[t(`w-list(
  :model-value="['Item 2']"
  :items="items"
  selection-color="pink"
  multiple)`)])),html:l(()=>e[29]||(e[29]=[t(`<w-list
  :model-value="['Item 2']"
  :items="items"
  selection-color="pink"
  multiple>
</w-list>`)])),js:l(()=>e[30]||(e[30]=[t(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' },
    { label: 'Item 4' }
  ]
})
`)])),default:l(()=>[i(m,{"model-value":["Item 2"],items:n.listItems4,"selection-color":"pink",multiple:""},null,8,["items"])]),_:1}),i(r,{h2:""},{default:l(()=>e[31]||(e[31]=[t("Custom rendering")])),_:1}),e[68]||(e[68]=s("p",null,[t("In this example, we don't use the component's data at all."),s("br"),t(`
You can easily define items directly in the template and have a different custom layout for every
list item just like in this example.`)],-1)),i(d,null,{pug:l(()=>e[33]||(e[33]=[t(`w-list(:items="5" hover)
  template(#item="{ index }")
    | Item `+o("{{ index }}")+`
  template(#item.3)
    strong This is the great item #3`)])),html:l(()=>e[34]||(e[34]=[t(`<w-list :items="5" hover>
  <template #item="{ index }">`+o("{{ index }}")+`</template>
  <template #item.3>
    <strong>This is the great item #3</strong>
  </template>
</w-list>
`)])),default:l(()=>[i(m,{items:5,hover:""},{item:l(({index:a})=>[t("Item "+o(a),1)]),"item.3":l(()=>e[32]||(e[32]=[s("strong",null,"This is the great item #3",-1)])),_:1})]),_:1}),e[69]||(e[69]=s("p",null,[t("It's up to you to define your your list contents in the component's data or directly in the template."),s("br"),t(`
In this example each item has a different icon stored in the data object.`)],-1)),i(d,null,{pug:l(()=>e[35]||(e[35]=[t(`w-list(:items="items" hover)
  template(#item="{ item }")
    w-flex(align-center justify-space-between)
      | `+o("{{ item.label }}")+`
      w-icon(md) `+o("{{ item.icon }}"))])),html:l(()=>e[36]||(e[36]=[t(`<w-list :items="items" hover>
  <template #item="{ item }">
    <w-flex align-center justify-space-between>
      `+o("{{ item.label }}")+`
      <w-icon md>`+o("{{ item.icon }}")+`</w-icon>
    </w-flex>
  </template>
</w-list>`)])),js:l(()=>e[37]||(e[37]=[t(`data: () => ({
  items: [
    { label: 'Star', icon: 'mdi mdi-star' },
    { label: 'Check', icon: 'mdi mdi-check' },
    { label: 'Cross', icon: 'mdi mdi-close' },
    { label: 'Info', icon: 'mdi mdi-information' },
    { label: 'Warning', icon: 'mdi mdi-alert' },
    { label: 'Disabled', icon: 'mdi mdi-minus-circle' }
  ]
})
`)])),default:l(()=>[i(m,{items:n.listItems2,hover:""},{item:l(({item:a})=>[s("div",$,[t(o(a.label),1),i(w,{md:""},{default:l(()=>[t(o(a.icon),1)]),_:2},1024)])]),_:1},8,["items"])]),_:1}),i(r,{h2:""},{default:l(()=>e[38]||(e[38]=[t("Selectable list items")])),_:1}),e[70]||(e[70]=s("p",null,[t("If you provide a "),s("code",null,"v-model"),t(" or a "),s("code",null,"model-value"),t(", the list items become selectable.")],-1)),i(d,null,{pug:l(()=>e[42]||(e[42]=[t(`w-radios.mb6(v-model="multiple" :items="radios" inline)
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
    code `+o("{{ itemClicked }}")+`
.title3.mt2
  | Selected item:
  code.ml2(v-if="!multiple || Array.isArray&#40;selection&#41;").
    `+o("{{ selection || 'null' }}")+`
  code.ml2(v-else-if="multiple").
    `+o("{{ selection ? [selection] : '[]' }}"))])),html:l(()=>e[43]||(e[43]=[t(`<w-radios v-model="multiple" :items="radios" inline></w-radios>

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
    <code>`+o("{{ itemClicked }}")+`</code>
  </div>
</w-flex>

<div class="title3 mt2">
  Selected item:
  <code v-if="!multiple || Array.isArray(selection)" class="ml2">
    `+o("{{ selection || 'null' }}")+`
  </code>
  <code v-else-if="multiple" class="ml2">
    `+o("{{ selection ? [selection] : '[]' }}")+`
  </code>
</div>`)])),js:l(()=>e[44]||(e[44]=[t(`data: () => ({
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
})`)])),default:l(()=>[i(C,{class:"mb6",modelValue:n.multiple,"onUpdate:modelValue":e[0]||(e[0]=a=>n.multiple=a),items:n.radios,inline:""},null,8,["modelValue","items"]),i(v,{wrap:"","align-center":""},{default:l(()=>[i(m,{class:"grow mr4",modelValue:n.selection1,"onUpdate:modelValue":e[1]||(e[1]=a=>n.selection1=a),items:n.listItems1,color:"deep-purple",multiple:n.multiple,onItemClick:e[2]||(e[2]=a=>n.itemClicked=a)},null,8,["modelValue","items","multiple"]),n.itemClicked?(p(),u("div",E,[e[39]||(e[39]=s("div",{class:"title3"},[t("clicked item ("),s("span",{class:"code"},"item-click"),t(" event):")],-1)),e[40]||(e[40]=s("br",null,null,-1)),s("span",W,o(n.itemClicked),1)])):y("",!0)]),_:1}),s("div",D,[e[41]||(e[41]=t("Selected item:")),!n.multiple||Array.isArray(n.selection1)?(p(),u("code",U,o(n.selection1||"null"),1)):n.multiple?(p(),u("code",N,o(n.selection1?[n.selection1]:"[]"),1)):y("",!0)])]),_:1}),e[71]||(e[71]=s("p",null,[t("Note: you can get the list selection from the v-model, or by listening to the "),s("span",{class:"code"},"input"),t(" event.")],-1)),i(r,{h2:""},{default:l(()=>e[45]||(e[45]=[t("Checklists")])),_:1}),i(d,null,{pug:l(()=>e[52]||(e[52]=[t(`w-flex(wrap basis-zero :gap="3")
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
        span `+o("{{ item.label }}")+`
        .spacer
        w-icon(md) `+o("{{ item.icon }}")+`
  .grow
    .title3.mb4 Custom rendering & styles
    w-list.custom(
      v-model="selection4"
      :items="listItems2"
      item-value-key="id"
      checklist
      color="primary")
      template(#item="{ item }")
        span `+o("{{ item.label }}")+`
        .spacer
        w-icon(md) `+o("{{ item.icon }}"))])),html:l(()=>e[53]||(e[53]=[t(`<w-flex wrap basis-zero :gap="3">
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
        <span>`+o("{{ item.label }}")+`</span>
        <div class="spacer"></div>
        <w-icon md>`+o("{{ item.icon }}")+`</w-icon>
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
        <span>`+o("{{ item.label }}")+`</span>
        <div class="spacer"></div>
        <w-icon md>`+o("{{ item.icon }}")+`</w-icon>
      </template>
    </w-list>
  </div>
</w-flex>`)])),js:l(()=>e[54]||(e[54]=[t(`data: () => ({
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
})`)])),css:l(()=>e[55]||(e[55]=[t(`.w-list.custom .w-list__item-label:before {display: none;}
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
`)])),default:l(()=>[i(v,{wrap:"","basis-zero":"",gap:3},{default:l(()=>[s("div",P,[e[46]||(e[46]=s("div",{class:"title3 mb4"},"Default",-1)),i(m,{modelValue:n.selection3,"onUpdate:modelValue":e[3]||(e[3]=a=>n.selection3=a),items:n.listItems1,checklist:"",color:"green"},null,8,["modelValue","items"])]),s("div",z,[e[47]||(e[47]=s("div",{class:"title3 mb4"},"Round checkboxes",-1)),i(m,{modelValue:n.selection4,"onUpdate:modelValue":e[4]||(e[4]=a=>n.selection4=a),items:n.listItems1,checklist:"","round-checkboxes":"",color:"green"},null,8,["modelValue","items"])])]),_:1}),i(v,{class:"mt4",wrap:"","basis-zero":"",gap:3},{default:l(()=>[s("div",K,[e[49]||(e[49]=s("div",{class:"title3 mb4"},"Custom rendering, default styles",-1)),i(m,{modelValue:n.selection6,"onUpdate:modelValue":e[5]||(e[5]=a=>n.selection6=a),items:n.listItems2,"item-value-key":"id",checklist:"",color:"primary"},{item:l(({item:a})=>[s("span",null,o(a.label),1),e[48]||(e[48]=s("div",{class:"spacer"},null,-1)),i(w,{md:""},{default:l(()=>[t(o(a.icon),1)]),_:2},1024)]),_:1},8,["modelValue","items"])]),s("div",M,[e[51]||(e[51]=s("div",{class:"title3 mb4"},"Custom rendering & styles",-1)),i(m,{class:"custom",modelValue:n.selection7,"onUpdate:modelValue":e[6]||(e[6]=a=>n.selection7=a),items:n.listItems2,"item-value-key":"id",checklist:"",color:"primary"},{item:l(({item:a})=>[s("span",null,o(a.label),1),e[50]||(e[50]=s("div",{class:"spacer"},null,-1)),i(w,{md:""},{default:l(()=>[t(o(a.icon),1)]),_:2},1024)]),_:1},8,["modelValue","items"])])]),_:1})]),_:1}),i(r,{h3:""},{default:l(()=>e[56]||(e[56]=[t("Checklist colors")])),_:1}),e[72]||(e[72]=s("p",null,"A checklist can have all the color options that the normal list can have, even a different color per item.",-1)),i(d,null,{pug:l(()=>e[57]||(e[57]=[t('w-list(v-model="selection5" :items="items" checklist)')])),html:l(()=>e[58]||(e[58]=[t(`<w-list
  v-model="selection"
  :items="items"
  checklist>
</w-list>`)])),js:l(()=>e[59]||(e[59]=[t(`data: () => ({
  items: [
    { label: 'Item 1', value: 1, color: 'amber' },
    { label: 'Item 2', value: 2, color: 'warning' },
    { label: 'Item 3', value: 3, color: 'error' },
    { label: 'Item 4', value: 4, color: 'pink' }
  ],
  selection: [1, 2, 3, 4]
})
`)])),default:l(()=>[i(m,{modelValue:n.selection5,"onUpdate:modelValue":e[7]||(e[7]=a=>n.selection5=a),items:n.listItems5,checklist:""},null,8,["modelValue","items"])]),_:1}),i(r,{h2:""},{default:l(()=>e[60]||(e[60]=[t("Navigation lists")])),_:1}),e[73]||(e[73]=s("p",null,[t("The navigation list expects a "),s("code",null,"route"),t(" attribute in the items that are links."),s("br"),t(`
If you are using Vue Router, all the links will automatically be `),s("strong",{class:"code"},"router-link"),t("s."),s("br")],-1)),e[74]||(e[74]=s("p",null,[t("It is possible to disable a link with a "),s("code",null,"disabled: true"),t(" attribute in the item.")],-1)),i(d,null,{pug:l(()=>e[62]||(e[62]=[t(`w-list(:items="items" nav color="primary")
  template(#item="{ item }")
    span `+o("{{ item.label }")+`}
    .spacer
    w-icon(md) `+o("{{ item.icon }}"))])),html:l(()=>e[63]||(e[63]=[t(`<w-list :items="items" nav color="primary">
  <template #item="{ item }">
    <span>`+o("{{ item.label }}")+`</span>
    <div class="spacer"></div>
    <w-icon md>`+o("{{ item.icon }}")+`</w-icon>
  </template>
</w-list>`)])),js:l(()=>e[64]||(e[64]=[t(`data: () => ({
  items: [
    { label: 'Star', id: 'star', icon: 'mdi mdi-star', route: '/w-list/star' },
    { label: 'Check', id: 'check', icon: 'mdi mdi-check', route: '/w-list/check' },
    { label: 'Cross', id: 'cross', icon: 'mdi mdi-close', route: '/w-list/cross' },
    { label: 'Info', id: 'info', icon: 'mdi mdi-information', route: '/w-list/info' },
    { label: 'Warning', id: 'warning', icon: 'mdi mdi-alert', route: '/w-list/warning' },
    { label: 'Disabled', id: 'disabled', icon: 'mdi mdi-minus-circle', route: '/w-list/disabled', disabled: true }
  ]
})`)])),default:l(()=>[i(m,{items:n.listItems2,nav:"",color:"primary"},{item:l(({item:a})=>[s("span",null,o(a.label),1),e[61]||(e[61]=s("div",{class:"spacer"},null,-1)),i(w,{md:""},{default:l(()=>[t(o(a.icon),1)]),_:2},1024)]),_:1},8,["items"])]),_:1}),i(x)])}const R={data:()=>({radios:[{label:"Single selection",value:!1},{label:"Multiple selections",value:!0}],multiple:!1,listItems1:[{label:"Item 1",value:1},{label:"Item 2",value:2},{label:"Item 3",value:3},{label:"Item 4",value:4},{label:"Item 5",value:5,disabled:!0}],listItems2:[{label:"Star",id:"star",icon:"mdi mdi-star",route:"/w-list/star"},{label:"Check",id:"check",icon:"mdi mdi-check",route:"/w-list/check"},{label:"Cross",id:"cross",icon:"mdi mdi-close",route:"/w-list/cross"},{label:"Info",id:"info",icon:"mdi mdi-information",route:"/w-list/info"},{label:"Warning",id:"warning",icon:"mdi mdi-alert",route:"/w-list/warning"},{label:"Disabled",id:"disabled",icon:"mdi mdi-minus-circle",route:"/w-list/disabled",disabled:!0}],listItems3:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"},{label:"Item 5",disabled:!0}],listItems4:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"}],listItems5:[{label:"Item 1",value:1,color:"amber"},{label:"Item 2",value:2,color:"warning"},{label:"Item 3",value:3,color:"error"},{label:"Item 4",value:4,color:"pink"}],selection1:2,selection2:"check",selection3:[1,3],selection4:[1,3],selection5:[1,2,3,4],selection6:["star","cross"],selection7:["star","cross"],itemClicked:null})},B=f(R,[["render",O]]);function L(n,e,h,g,k,b){const m=c("title-link"),r=c("component-api");return p(),u("div",null,[e[1]||(e[1]=s("div",{class:"w-divider my12"},null,-1)),i(m,{class:"title1",h2:""},{default:l(()=>e[0]||(e[0]=[t("API")])),_:1}),i(r,{class:"mt0",items:b.props,descriptions:n.propsDescs,title:"Props"},null,8,["items","descriptions"]),i(r,{items:n.slots,title:"Slots"},null,8,["items"]),i(r,{items:b.events,title:"Events"},null,8,["items"])])}const Y={items:'Expecting an array of objects. Each object being a list item, it should include at least a <code>label</code> attribute.<br>Alternatively, you can provide an integer number (call it <em class="code">x</em>), to loop through and create <em class="code">x</em> items in the list. You can then use the individual slots <code>item-title.x</code> &amp; <code>item-content.x</code> to define each item.',modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide an array of values if <code>multiple</code> is set to true, or a single value otherwise, to dictate the selected state of the list items.<br>Also accepts full objects when <code>return-object</code> is set to true.<br>This value gets updated when using a v-model.',checklist:"Sets the type of list to checklist: each item has a checkbox.",roundCheckboxes:"When <code>checklist</code> is true, displays round checkboxes instead of square ones.",multiple:"When selectable, allows multiple selections. A checklist always has multiple selections.",addIds:"When set to true, will add an id on the list and all the list items.<br>Useful for accessibility aria fields for instance.",hover:"On mouseover, highlights the list items with the given <code>color</code>. Also adds a small vertical padding on the list items to space them.",color:`Applies a color to the list items's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the list items's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,selectionColor:`Applies a color to the selected list items's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,nav:"Set the list as a navigation menu. All the items having a `route` attribute will be converted to link or router-link if vue-router is present.",icon:"A global icon string to apply to all the list items. E.g. <code>mdi mdi-home</code>.",itemLabelKey:'The property name (aka "key") in each item object where to find the label of the item.',itemValueKey:'The property name (aka "key") in each item object where to find the value of the item.',itemClassKey:'The property name (aka "key") in each item object where to find an optional CSS class for this item.',itemColorKey:'The property name (aka "key") in each item object where to find an optional color for this item.',itemRouteKey:'The property name (aka "key") in each item object where to find an optional route for this item, to be used in <code>nav</code> lists.<br>Since we usually set a <code>to</code> prop for router-links/nuxt-links, and <code>href</code> for <span class="code">&lt;a&gt;</span> tags, the <code>route</code> option unifies both.',itemClass:"Applies a custom CSS class to every list item.",depth:!1,returnObject:"The current list selection is returned via the <code>value</code> prop or <code>v-model</code> as an array of full objects or a single full object (returning the original as given) when <code>multiple</code> is set to false.",arrowsNavigation:'Allows the navigation through the list items with the keyboard arrows up and down, when set to true and when the items are selectable (the <strong class="code">w-list</strong> has a <code>value</code> or <code>v-model</code>, or is a <code>nav</code> or <code>checklist</code>).',noUnselect:"Once at least one item is selected, prevents the list to have no selection. Clicking an item when only this one is selected will not unselect it."},q={item:{description:"Provide a custom content for every item. Applies to all the items, but can be overridden by the <code>item.x</code> slot.",params:{item:"The current item object.",index:"The item index in the list. Starts at 1 to be consistent with the <code>item.x</code> slot.",selected:"A boolean representing the selected state of the current item."}},"item.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the list. Starts at 1 to be consistent with the slot name.",selected:"A boolean representing the selected state of the current item."}}},F={input:{description:"Emitted each time the state of the list changes.<br>Updates the <code>v-model</code> value in Vue 2.x only.",params:{"[Array]":"An array of values of all the selected list items."}},"update:modelValue":{description:"Emitted each time the state of the list changes (when an item is selected or unselected).<br>Updates the v-model value in Vue 3 only.",params:{"[Array]":"An array of values of all the selected list items."}},"item-click":{description:"Emitted on each list item click.",params:{"[Object]":"The clicked list item's object."}},"item-select":{description:"Emitted on each list item selection or unselection (via click or keyboard <kbd>enter</kbd> key when focused).",params:{"[Object]":"The selected list item's object."}},"keydown:enter":{description:"Emitted on <kbd>enter</kbd> key down, when the focus is on any of the list items."},"keydown:escape":{description:"Emitted on <kbd>escape</kbd> key down, when the focus is on any of the list items."}},G={data:()=>({propsDescs:Y,slots:q}),computed:{props(){return I.props},events(){return I.emits.reduce((n,e)=>(n[e]=F[e]||{},n),{})}}},H=f(G,[["render",L]]);function J(n,e,h,g,k,b){const m=c("ui-component-title"),r=c("examples"),d=c("api");return p(),u("main",null,[i(m,null,{default:l(()=>e[0]||(e[0]=[t("w-list")])),_:1}),i(r),i(d)])}const Q={components:{Examples:B,Api:H}},Z=f(Q,[["render",J]]);export{Z as default};
