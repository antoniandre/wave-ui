import{r as d,o as u,g as p,a as l,w as t,b as e,d as i,t as n,f as _,h as x,_ as v,W as y}from"./index.bf2cfd71.js";const V={class:"lists-demo"},j=i("p",null,[e("The "),i("span",{class:"code"},"w-list"),e(" component has multiple uses:")],-1),A={class:"w-flex wrap"},S={class:"grow"},T=i("div",{class:"title3"},"Most basic",-1),$={class:"grow"},E=i("div",{class:"title3"},"With icons",-1),W=i("p",null,[e("Like in most components, you can set a "),i("code",null,"color"),e(" for the text and a "),i("code",null,"bg-color"),e(` for the
background.`)],-1),D=i("br",null,null,-1),U=x(`<p class="grey-light1">In addition to the hover effect, the items may also be selectable (as per the
<a href="#selectable-list-items">Selectable list items example</a>),
but in this example we are only demonstrating the selection color.</p><p>You may want a default color for all the items, but a different color for the selection only.<br>
You can use the <code>selection-color</code> option for this purpose.</p><p>If no <code>color</code> and no <code>selection-color</code> are set, the <code>selection-color</code> will be set
to primary by default.<br>
In that case, if you don&#39;t want to default to the primary color, you can explicitly set
<code>selection-color</code> to a falsy value (false, null, or empty string), or another color.</p>`,3),N=i("p",null,[e("In this example, we don't use the component's data at all."),i("br"),e(`
You can easily define items directly in the template and have a different custom layout for every
list item just like in this example.`)],-1),P=i("strong",null,"This is the great item #3",-1),z=i("p",null,[e("It's up to you to define your your list contents in the component's data or directly in the template."),i("br"),e(`
In this example each item has a different icon stored in the data object.`)],-1),K={class:"w-flex align-center justify-space-between"},M=i("p",null,[e("If you provide a "),i("code",null,"v-model"),e(" or a "),i("code",null,"model-value"),e(", the list items become selectable.")],-1),O={key:0},R=i("div",{class:"title3"},[e("clicked item ("),i("span",{class:"code"},"item-click"),e(" event):")],-1),B=i("br",null,null,-1),L={class:"code"},Y={class:"title3 mt2"},q={key:0,class:"ml2"},F={key:1,class:"ml2"},G=i("p",null,[e("Note: you can get the list selection from the v-model, or by listening to the "),i("span",{class:"code"},"input"),e(" event.")],-1),H={class:"grow"},J=i("div",{class:"title3 mb4"},"Default",-1),Q={class:"grow"},X=i("div",{class:"title3 mb4"},"Round checkboxes",-1),Z={class:"grow"},ee=i("div",{class:"title3 mb4"},"Custom rendering, default styles",-1),te=i("div",{class:"spacer"},null,-1),le={class:"grow"},ie=i("div",{class:"title3 mb4"},"Custom rendering & styles",-1),se=i("div",{class:"spacer"},null,-1),ne=i("p",null,"A checklist can have all the color options that the normal list can have, even a different color per item.",-1),oe=i("p",null,[e("The navigation list expects a "),i("code",null,"route"),e(" attribute in the items that are links."),i("br"),e(`
If you are using Vue Router, all the links will automatically be `),i("strong",{class:"code"},"router-link"),e("s."),i("br")],-1),ae=i("p",null,[e("It is possible to disable a link with a "),i("code",null,"disabled: true"),e(" attribute in the item.")],-1),ce=i("div",{class:"spacer"},null,-1);function me(s,a,f,g,k,h){const c=d("w-list"),m=d("title-link"),r=d("example"),b=d("w-icon"),I=d("w-radios"),w=d("w-flex"),C=d("router-view");return u(),p("div",V,[j,l(c,{items:4,icon:"wi-check"},{"item.1":t(()=>[e("Simple list with or without icons")]),"item.2":t(()=>[e("Checklists")]),"item.3":t(()=>[e("Navigation menus")]),"item.4":t(()=>[e("List of selectable items")]),_:1}),l(m,{h2:""},{default:t(()=>[e("Basic lists")]),_:1}),l(r,null,{pug:t(()=>[e(`.w-flex.wrap
  .grow
    .title3 Most basic
    w-list(:items="items")
  .grow
    .title3 With icons
    w-list(:items="items" icon="wi-check")`)]),html:t(()=>[e(`<w-flex wrap>
  <div class="grow">
    <div class="title3 mb6">Most basic</div>
    <w-list :items="items"></w-list>
  </div>

  <div class="grow">
    <div class="title3 mb6">With icons</div>
    <w-list :items="items" icon="wi-check"></w-list>
  </div>
</w-flex>`)]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' },
    { label: 'Item 4' },
    { label: 'Item 5', disabled: true }
  ]
})
`)]),default:t(()=>[i("div",A,[i("div",S,[T,l(c,{items:s.listItems1},null,8,["items"])]),i("div",$,[E,l(c,{items:s.listItems1,icon:"wi-check"},null,8,["items"])])])]),_:1}),l(m,{h2:""},{default:t(()=>[e("Color & hoverable")]),_:1}),W,l(r,null,{pug:t(()=>[e(`w-list(:items="items" color="pink" hover)
br
w-list(:items="items" bg-color="blue-light5" color="primary" hover)`)]),html:t(()=>[e(`<w-list
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
</w-list>`)]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' },
    { label: 'Item 4' }
  ]
})
`)]),default:t(()=>[l(c,{items:s.listItems4,color:"pink",hover:""},null,8,["items"]),D,l(c,{items:s.listItems4,"bg-color":"blue-light5",color:"primary",hover:""},null,8,["items"])]),_:1}),l(m,{h3:""},{default:t(()=>[e("Different color per item")]),_:1}),l(r,null,{pug:t(()=>[e('w-list(:items="items" hover)')]),html:t(()=>[e('<w-list :items="items" hover></w-list>')]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Item 1', color: 'amber' },
    { label: 'Item 2', color: 'warning' },
    { label: 'Item 3', color: 'error' },
    { label: 'Item 4', color: 'pink' }
  ]
})
`)]),default:t(()=>[l(c,{items:s.listItems5,hover:""},null,8,["items"])]),_:1}),l(m,{h3:""},{default:t(()=>[e("Selection-only color")]),_:1}),U,l(r,null,{pug:t(()=>[e(`w-list(
  :model-value="['Item 2']"
  :items="items"
  selection-color="pink"
  multiple)`)]),html:t(()=>[e(`<w-list
  :model-value="['Item 2']"
  :items="items"
  selection-color="pink"
  multiple>
</w-list>`)]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' },
    { label: 'Item 4' }
  ]
})
`)]),default:t(()=>[l(c,{"model-value":["Item 2"],items:s.listItems4,"selection-color":"pink",multiple:""},null,8,["items"])]),_:1}),l(m,{h2:""},{default:t(()=>[e("Custom rendering")]),_:1}),N,l(r,null,{pug:t(()=>[e(`w-list(:items="5" hover)
  template(#item="{ index }")
    | Item `+n("{{ index }}")+`
  template(#item.3)
    strong This is the great item #3`)]),html:t(()=>[e(`<w-list :items="5" hover>
  <template #item="{ index }">`+n("{{ index }}")+`</template>
  <template #item.3>
    <strong>This is the great item #3</strong>
  </template>
</w-list>
`)]),default:t(()=>[l(c,{items:5,hover:""},{item:t(({index:o})=>[e("Item "+n(o),1)]),"item.3":t(()=>[P]),_:1})]),_:1}),z,l(r,null,{pug:t(()=>[e(`w-list(:items="items" hover)
  template(#item="{ item }")
    w-flex(align-center justify-space-between)
      | `+n("{{ item.label }}")+`
      w-icon(md) `+n("{{ item.icon }}"),1)]),html:t(()=>[e(`<w-list :items="items" hover>
  <template #item="{ item }">
    <w-flex align-center justify-space-between>
      `+n("{{ item.label }}")+`
      <w-icon md>`+n("{{ item.icon }}")+`</w-icon>
    </w-flex>
  </template>
</w-list>`,1)]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Star', icon: 'mdi mdi-star' },
    { label: 'Check', icon: 'mdi mdi-check' },
    { label: 'Cross', icon: 'mdi mdi-close' },
    { label: 'Info', icon: 'mdi mdi-information' },
    { label: 'Warning', icon: 'mdi mdi-alert' },
    { label: 'Disabled', icon: 'mdi mdi-minus-circle' }
  ]
})
`)]),default:t(()=>[l(c,{items:s.listItems2,hover:""},{item:t(({item:o})=>[i("div",K,[e(n(o.label),1),l(b,{md:""},{default:t(()=>[e(n(o.icon),1)]),_:2},1024)])]),_:1},8,["items"])]),_:1}),l(m,{h2:""},{default:t(()=>[e("Selectable list items")]),_:1}),M,l(r,null,{pug:t(()=>[e(`w-radios.mb6(v-model="multiple" :items="radios" inline)
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
    code `+n("{{ itemClicked }}")+`
.title3.mt2
  | Selected item:
  code.ml2(v-if="!multiple || Array.isArray&#40;selection&#41;").
    `+n("{{ selection || 'null' }}")+`
  code.ml2(v-else-if="multiple").
    `+n("{{ selection ? [selection] : '[]' }}"))]),html:t(()=>[e(`<w-radios v-model="multiple" :items="radios" inline></w-radios>

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
    <code>`+n("{{ itemClicked }}")+`</code>
  </div>
</w-flex>

<div class="title3 mt2">
  Selected item:
  <code v-if="!multiple || Array.isArray(selection)" class="ml2">
    `+n("{{ selection || 'null' }}")+`
  </code>
  <code v-else-if="multiple" class="ml2">
    `+n("{{ selection ? [selection] : '[]' }}")+`
  </code>
</div>`)]),js:t(()=>[e(`data: () => ({
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
})`)]),default:t(()=>[l(I,{class:"mb6",modelValue:s.multiple,"onUpdate:modelValue":a[0]||(a[0]=o=>s.multiple=o),items:s.radios,inline:""},null,8,["modelValue","items"]),l(w,{wrap:"","align-center":""},{default:t(()=>[l(c,{class:"grow mr4",modelValue:s.selection1,"onUpdate:modelValue":a[1]||(a[1]=o=>s.selection1=o),items:s.listItems1,color:"deep-purple",multiple:s.multiple,onItemClick:a[2]||(a[2]=o=>s.itemClicked=o)},null,8,["modelValue","items","multiple"]),s.itemClicked?(u(),p("div",O,[R,B,i("span",L,n(s.itemClicked),1)])):_("",!0)]),_:1}),i("div",Y,[e("Selected item:"),!s.multiple||Array.isArray(s.selection1)?(u(),p("code",q,n(s.selection1||"null"),1)):s.multiple?(u(),p("code",F,n(s.selection1?[s.selection1]:"[]"),1)):_("",!0)])]),_:1}),G,l(m,{h2:""},{default:t(()=>[e("Checklists")]),_:1}),l(r,null,{pug:t(()=>[e(`w-flex(wrap basis-zero :gap="3")
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
        span `+n("{{ item.label }}")+`
        .spacer
        w-icon(md) `+n("{{ item.icon }}")+`
  .grow
    .title3.mb4 Custom rendering & styles
    w-list.custom(
      v-model="selection4"
      :items="listItems2"
      item-value-key="id"
      checklist
      color="primary")
      template(#item="{ item }")
        span `+n("{{ item.label }}")+`
        .spacer
        w-icon(md) `+n("{{ item.icon }}"),1)]),html:t(()=>[e(`<w-flex wrap basis-zero :gap="3">
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
        <span>`+n("{{ item.label }}")+`</span>
        <div class="spacer"></div>
        <w-icon md>`+n("{{ item.icon }}")+`</w-icon>
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
        <span>`+n("{{ item.label }}")+`</span>
        <div class="spacer"></div>
        <w-icon md>`+n("{{ item.icon }}")+`</w-icon>
      </template>
    </w-list>
  </div>
</w-flex>`,1)]),js:t(()=>[e(`data: () => ({
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
})`)]),css:t(()=>[e(`.w-list.custom .w-list__item-label:before {display: none;}
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
`)]),default:t(()=>[l(w,{wrap:"","basis-zero":"",gap:3},{default:t(()=>[i("div",H,[J,l(c,{modelValue:s.selection3,"onUpdate:modelValue":a[3]||(a[3]=o=>s.selection3=o),items:s.listItems1,checklist:"",color:"green"},null,8,["modelValue","items"])]),i("div",Q,[X,l(c,{modelValue:s.selection4,"onUpdate:modelValue":a[4]||(a[4]=o=>s.selection4=o),items:s.listItems1,checklist:"","round-checkboxes":"",color:"green"},null,8,["modelValue","items"])])]),_:1}),l(w,{class:"mt4",wrap:"","basis-zero":"",gap:3},{default:t(()=>[i("div",Z,[ee,l(c,{modelValue:s.selection6,"onUpdate:modelValue":a[5]||(a[5]=o=>s.selection6=o),items:s.listItems2,"item-value-key":"id",checklist:"",color:"primary"},{item:t(({item:o})=>[i("span",null,n(o.label),1),te,l(b,{md:""},{default:t(()=>[e(n(o.icon),1)]),_:2},1024)]),_:1},8,["modelValue","items"])]),i("div",le,[ie,l(c,{class:"custom",modelValue:s.selection7,"onUpdate:modelValue":a[6]||(a[6]=o=>s.selection7=o),items:s.listItems2,"item-value-key":"id",checklist:"",color:"primary"},{item:t(({item:o})=>[i("span",null,n(o.label),1),se,l(b,{md:""},{default:t(()=>[e(n(o.icon),1)]),_:2},1024)]),_:1},8,["modelValue","items"])])]),_:1})]),_:1}),l(m,{h3:""},{default:t(()=>[e("Checklist colors")]),_:1}),ne,l(r,null,{pug:t(()=>[e('w-list(v-model="selection5" :items="items" checklist)')]),html:t(()=>[e(`<w-list
  v-model="selection"
  :items="items"
  checklist>
</w-list>`)]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Item 1', value: 1, color: 'amber' },
    { label: 'Item 2', value: 2, color: 'warning' },
    { label: 'Item 3', value: 3, color: 'error' },
    { label: 'Item 4', value: 4, color: 'pink' }
  ],
  selection: [1, 2, 3, 4]
})
`)]),default:t(()=>[l(c,{modelValue:s.selection5,"onUpdate:modelValue":a[7]||(a[7]=o=>s.selection5=o),items:s.listItems5,checklist:""},null,8,["modelValue","items"])]),_:1}),l(m,{h2:""},{default:t(()=>[e("Navigation lists")]),_:1}),oe,ae,l(r,null,{pug:t(()=>[e(`w-list(:items="items" nav color="primary")
  template(#item="{ item }")
    span `+n("{{ item.label }")+`}
    .spacer
    w-icon(md) `+n("{{ item.icon }}"),1)]),html:t(()=>[e(`<w-list :items="items" nav color="primary">
  <template #item="{ item }">
    <span>`+n("{{ item.label }}")+`</span>
    <div class="spacer"></div>
    <w-icon md>`+n("{{ item.icon }}")+`</w-icon>
  </template>
</w-list>`,1)]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Star', id: 'star', icon: 'mdi mdi-star', route: '/w-list/star' },
    { label: 'Check', id: 'check', icon: 'mdi mdi-check', route: '/w-list/check' },
    { label: 'Cross', id: 'cross', icon: 'mdi mdi-close', route: '/w-list/cross' },
    { label: 'Info', id: 'info', icon: 'mdi mdi-information', route: '/w-list/info' },
    { label: 'Warning', id: 'warning', icon: 'mdi mdi-alert', route: '/w-list/warning' },
    { label: 'Disabled', id: 'disabled', icon: 'mdi mdi-minus-circle', route: '/w-list/disabled', disabled: true }
  ]
})`)]),default:t(()=>[l(c,{items:s.listItems2,nav:"",color:"primary"},{item:t(({item:o})=>[i("span",null,n(o.label),1),ce,l(b,{md:""},{default:t(()=>[e(n(o.icon),1)]),_:2},1024)]),_:1},8,["items"])]),_:1}),l(C)])}const re={data:()=>({radios:[{label:"Single selection",value:!1},{label:"Multiple selections",value:!0}],multiple:!1,listItems1:[{label:"Item 1",value:1},{label:"Item 2",value:2},{label:"Item 3",value:3},{label:"Item 4",value:4},{label:"Item 5",value:5,disabled:!0}],listItems2:[{label:"Star",id:"star",icon:"mdi mdi-star",route:"/w-list/star"},{label:"Check",id:"check",icon:"mdi mdi-check",route:"/w-list/check"},{label:"Cross",id:"cross",icon:"mdi mdi-close",route:"/w-list/cross"},{label:"Info",id:"info",icon:"mdi mdi-information",route:"/w-list/info"},{label:"Warning",id:"warning",icon:"mdi mdi-alert",route:"/w-list/warning"},{label:"Disabled",id:"disabled",icon:"mdi mdi-minus-circle",route:"/w-list/disabled",disabled:!0}],listItems3:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"},{label:"Item 5",disabled:!0}],listItems4:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"}],listItems5:[{label:"Item 1",value:1,color:"amber"},{label:"Item 2",value:2,color:"warning"},{label:"Item 3",value:3,color:"error"},{label:"Item 4",value:4,color:"pink"}],selection1:2,selection2:"check",selection3:[1,3],selection4:[1,3],selection5:[1,2,3,4],selection6:["star","cross"],selection7:["star","cross"],itemClicked:null})},de=v(re,[["render",me]]),ue=i("div",{class:"w-divider my12"},null,-1);function pe(s,a,f,g,k,h){const c=d("title-link"),m=d("component-api");return u(),p("div",null,[ue,l(c,{class:"title1",h2:""},{default:t(()=>[e("API")]),_:1}),l(m,{class:"mt0",items:h.props,descriptions:s.propsDescs,title:"Props"},null,8,["items","descriptions"]),l(m,{items:s.slots,title:"Slots"},null,8,["items"]),l(m,{items:h.events,title:"Events"},null,8,["items"])])}const he={items:'Expecting an array of objects. Each object being a list item, it should include at least a <code>label</code> attribute.<br>Alternatively, you can provide an integer number (call it <em class="code">x</em>), to loop through and create <em class="code">x</em> items in the list. You can then use the individual slots <code>item-title.x</code> &amp; <code>item-content.x</code> to define each item.',modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide an array of values if <code>multiple</code> is set to true, or a single value otherwise, to dictate the selected state of the list items.<br>Also accepts full objects when <code>return-object</code> is set to true.<br>This value gets updated when using a v-model.',checklist:"Sets the type of list to checklist: each item has a checkbox.",roundCheckboxes:"When <code>checklist</code> is true, displays round checkboxes instead of square ones.",multiple:"When selectable, allows multiple selections. A checklist always has multiple selections.",addIds:"When set to true, will add an id on the list and all the list items.<br>Useful for accessibility aria fields for instance.",hover:"On mouseover, highlights the list items with the given <code>color</code>. Also adds a small vertical padding on the list items to space them.",color:`Applies a color to the list items's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the list items's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,selectionColor:`Applies a color to the selected list items's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,nav:"Set the list as a navigation menu. All the items having a `route` attribute will be converted to link or router-link if vue-router is present.",icon:"A global icon string to apply to all the list items. E.g. <code>mdi mdi-home</code>.",itemLabelKey:'The property name (aka "key") in each item object where to find the label of the item.',itemValueKey:'The property name (aka "key") in each item object where to find the value of the item.',itemClassKey:'The property name (aka "key") in each item object where to find an optional CSS class for this item.',itemColorKey:'The property name (aka "key") in each item object where to find an optional color for this item.',itemRouteKey:'The property name (aka "key") in each item object where to find an optional route for this item, to be used in <code>nav</code> lists.<br>Since we usually set a <code>to</code> prop for router-links/nuxt-links, and <code>href</code> for <span class="code">&lt;a&gt;</span> tags, the <code>route</code> option unifies both.',itemClass:"Applies a custom CSS class to every list item.",depth:!1,returnObject:"The current list selection is returned via the <code>value</code> prop or <code>v-model</code> as an array of full objects or a single full object (returning the original as given) when <code>multiple</code> is set to false.",arrowsNavigation:'Allows the navigation through the list items with the keyboard arrows up and down, when set to true and when the items are selectable (the <strong class="code">w-list</strong> has a <code>value</code> or <code>v-model</code>, or is a <code>nav</code> or <code>checklist</code>).',noUnselect:"Once at least one item is selected, prevents the list to have no selection. Clicking an item when only this one is selected will not unselect it."},be={item:{description:"Provide a custom content for every item. Applies to all the items, but can be overridden by the <code>item.x</code> slot.",params:{item:"The current item object.",index:"The item index in the list. Starts at 1 to be consistent with the <code>item.x</code> slot.",selected:"A boolean representing the selected state of the current item."}},"item.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the list. Starts at 1 to be consistent with the slot name.",selected:"A boolean representing the selected state of the current item."}}},we={input:{description:"Emitted each time the state of the list changes.<br>Updates the <code>v-model</code> value in Vue 2.x only.",params:{"[Array]":"An array of values of all the selected list items."}},"update:modelValue":{description:"Emitted each time the state of the list changes (when an item is selected or unselected).<br>Updates the v-model value in Vue 3 only.",params:{"[Array]":"An array of values of all the selected list items."}},"item-click":{description:"Emitted on each list item click.",params:{"[Object]":"The clicked list item's object."}},"item-select":{description:"Emitted on each list item selection or unselection (via click or keyboard <kbd>enter</kbd> key when focused).",params:{"[Object]":"The selected list item's object."}},"keydown:enter":{description:"Emitted on <kbd>enter</kbd> key down, when the focus is on any of the list items."},"keydown:escape":{description:"Emitted on <kbd>escape</kbd> key down, when the focus is on any of the list items."}},ve={data:()=>({propsDescs:he,slots:be}),computed:{props(){return y.props},events(){return y.emits.reduce((s,a)=>(s[a]=we[a]||{})&&s,{})}}},fe=v(ve,[["render",pe]]);function ge(s,a,f,g,k,h){const c=d("ui-component-title"),m=d("examples"),r=d("api");return u(),p("main",null,[l(c,null,{default:t(()=>[e("w-list")]),_:1}),l(m),l(r)])}const ke={components:{Examples:de,Api:fe}},ye=v(ke,[["render",ge]]);export{ye as default};
