import{n as s,u as o}from"./index.e31dd236.js";var m=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"lists-demo"},[e._m(0),t("w-list",{attrs:{items:4,icon:"wi-check"},scopedSlots:e._u([{key:"item.1",fn:function(){return[e._v("Simple list with or without icons")]},proxy:!0},{key:"item.2",fn:function(){return[e._v("Checklists")]},proxy:!0},{key:"item.3",fn:function(){return[e._v("Navigation menus")]},proxy:!0},{key:"item.4",fn:function(){return[e._v("List of selectable items")]},proxy:!0}])}),t("title-link",{attrs:{h2:""}},[e._v("Basic lists")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`.w-flex.wrap
  .grow
    .title3 Most basic
    w-list(:items="items")
  .grow
    .title3 With icons
    w-list(:items="items" icon="wi-check")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-flex wrap>
  <div class="grow">
    <div class="title3 mb6">Most basic</div>
    <w-list :items="items"></w-list>
  </div>

  <div class="grow">
    <div class="title3 mb6">With icons</div>
    <w-list :items="items" icon="wi-check"></w-list>
  </div>
</w-flex>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' },
    { label: 'Item 4' },
    { label: 'Item 5', disabled: true }
  ]
})
`)]},proxy:!0}])},[t("div",{staticClass:"w-flex wrap"},[t("div",{staticClass:"grow"},[t("div",{staticClass:"title3"},[e._v("Most basic")]),t("w-list",{attrs:{items:e.listItems1}})],1),t("div",{staticClass:"grow"},[t("div",{staticClass:"title3"},[e._v("With icons")]),t("w-list",{attrs:{items:e.listItems1,icon:"wi-check"}})],1)])]),t("title-link",{attrs:{h2:""}},[e._v("Color & hoverable")]),e._m(1),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-list(:items="items" color="pink" hover)
br
w-list(:items="items" bg-color="blue-light5" color="primary" hover)`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-list
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
</w-list>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' },
    { label: 'Item 4' }
  ]
})
`)]},proxy:!0}])},[t("w-list",{attrs:{items:e.listItems4,color:"pink",hover:""}}),t("br"),t("w-list",{attrs:{items:e.listItems4,"bg-color":"blue-light5",color:"primary",hover:""}})],1),t("title-link",{attrs:{h3:""}},[e._v("Different color per item")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-list(:items="items" hover)')]},proxy:!0},{key:"html",fn:function(){return[e._v('<w-list :items="items" hover></w-list>')]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Item 1', color: 'amber' },
    { label: 'Item 2', color: 'warning' },
    { label: 'Item 3', color: 'error' },
    { label: 'Item 4', color: 'pink' }
  ]
})
`)]},proxy:!0}])},[t("w-list",{attrs:{items:e.listItems5,hover:""}})],1),t("title-link",{attrs:{h3:""}},[e._v("Selection-only color")]),e._m(2),e._m(3),e._m(4),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-list(:value="['Item 2']" :items="items" selection-color="pink" multiple)`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-list
  :value="['Item 2']"
  :items="items"
  selection-color="pink"
  multiple>
</w-list>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' },
    { label: 'Item 4' }
  ]
})
`)]},proxy:!0}])},[t("w-list",{attrs:{value:["Item 2"],items:e.listItems4,"selection-color":"pink",multiple:""}})],1),t("title-link",{attrs:{h2:""}},[e._v("Custom rendering")]),e._m(5),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-list(:items="5" hover)
  template(#item="{ index }")
    | Item `+e._s("{{ index }}")+`
  template(#item.3)
    strong This is the great item #3`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-list :items="5" hover>
  <template #item="{ index }">`+e._s("{{ index }}")+`</template>
  <template #item.3>
    <strong>This is the great item #3</strong>
  </template>
</w-list>
`)]},proxy:!0}])},[t("w-list",{attrs:{items:5,hover:""},scopedSlots:e._u([{key:"item",fn:function(l){var n=l.index;return[e._v("Item "+e._s(n))]}},{key:"item.3",fn:function(){return[t("strong",[e._v("This is the great item #3")])]},proxy:!0}])})],1),e._m(6),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-list(:items="items" hover)
  template(#item="{ item }")
    w-flex(align-center justify-space-between)
      | `+e._s("{{ item.label }}")+`
      w-icon(md) `+e._s("{{ item.icon }}"))]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-list :items="items" hover>
  <template #item="{ item }">
    <w-flex align-center justify-space-between>
      `+e._s("{{ item.label }}")+`
      <w-icon md>`+e._s("{{ item.icon }}")+`</w-icon>
    </w-flex>
  </template>
</w-list>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Star', icon: 'mdi mdi-star' },
    { label: 'Check', icon: 'mdi mdi-check' },
    { label: 'Cross', icon: 'mdi mdi-close' },
    { label: 'Info', icon: 'mdi mdi-information' },
    { label: 'Warning', icon: 'mdi mdi-alert' },
    { label: 'Disabled', icon: 'mdi mdi-minus-circle' }
  ]
})
`)]},proxy:!0}])},[t("w-list",{attrs:{items:e.listItems2,hover:""},scopedSlots:e._u([{key:"item",fn:function(l){var n=l.item;return[t("div",{staticClass:"w-flex align-center justify-space-between"},[e._v(e._s(n.label)),t("w-icon",{attrs:{md:""}},[e._v(e._s(n.icon))])],1)]}}])})],1),t("title-link",{attrs:{h2:""}},[e._v("Selectable list items")]),e._m(7),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-radios.mb6(v-model="multiple" :items="radios" inline)
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
    code `+e._s("{{ itemClicked }}")+`
.title3.mt2
  | Selected item:
  code.ml2(v-if="!multiple || Array.isArray&#40;selection&#41;").
    `+e._s("{{ selection || 'null' }}")+`
  code.ml2(v-else-if="multiple").
    `+e._s("{{ selection ? [selection] : '[]' }}"))]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-radios v-model="multiple" :items="radios" inline></w-radios>

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
    <code>`+e._s("{{ itemClicked }}")+`</code>
  </div>
</w-flex>

<div class="title3 mt2">
  Selected item:
  <code v-if="!multiple || Array.isArray(selection)" class="ml2">
    `+e._s("{{ selection || 'null' }}")+`
  </code>
  <code v-else-if="multiple" class="ml2">
    `+e._s("{{ selection ? [selection] : '[]' }}")+`
  </code>
</div>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
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
})`)]},proxy:!0}])},[t("w-radios",{staticClass:"mb6",attrs:{items:e.radios,inline:""},model:{value:e.multiple,callback:function(l){e.multiple=l},expression:"multiple"}}),t("w-flex",{attrs:{wrap:"","align-center":""}},[t("w-list",{staticClass:"grow mr4",attrs:{items:e.listItems1,color:"deep-purple",multiple:e.multiple},on:{"item-click":function(l){e.itemClicked=l}},model:{value:e.selection1,callback:function(l){e.selection1=l},expression:"selection1"}}),e.itemClicked?t("div",[t("div",{staticClass:"title3"},[e._v("clicked item ("),t("span",{staticClass:"code"},[e._v("item-click")]),e._v(" event):")]),t("br"),t("span",{staticClass:"code"},[e._v(e._s(e.itemClicked))])]):e._e()],1),t("div",{staticClass:"title3 mt2"},[e._v("Selected item:"),!e.multiple||Array.isArray(e.selection1)?t("code",{staticClass:"ml2"},[e._v(e._s(e.selection1||"null"))]):e.multiple?t("code",{staticClass:"ml2"},[e._v(e._s(e.selection1?[e.selection1]:"[]"))]):e._e()])],1),e._m(8),t("title-link",{attrs:{h2:""}},[e._v("Checklists")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-flex(wrap basis-zero :gap="3")
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
        span `+e._s("{{ item.label }}")+`
        .spacer
        w-icon(md) `+e._s("{{ item.icon }}")+`
  .grow
    .title3.mb4 Custom rendering & styles
    w-list.custom(
      v-model="selection4"
      :items="listItems2"
      item-value-key="id"
      checklist
      color="primary")
      template(#item="{ item }")
        span `+e._s("{{ item.label }}")+`
        .spacer
        w-icon(md) `+e._s("{{ item.icon }}"))]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-flex wrap basis-zero :gap="3">
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
        <span>`+e._s("{{ item.label }}")+`</span>
        <div class="spacer"></div>
        <w-icon md>`+e._s("{{ item.icon }}")+`</w-icon>
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
        <span>`+e._s("{{ item.label }}")+`</span>
        <div class="spacer"></div>
        <w-icon md>`+e._s("{{ item.icon }}")+`</w-icon>
      </template>
    </w-list>
  </div>
</w-flex>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
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
})`)]},proxy:!0},{key:"css",fn:function(){return[e._v(`.w-list.custom .w-list__item-label:before {display: none;}
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
`)]},proxy:!0}])},[t("w-flex",{attrs:{wrap:"","basis-zero":"",gap:3}},[t("div",{staticClass:"grow"},[t("div",{staticClass:"title3 mb4"},[e._v("Default")]),t("w-list",{attrs:{items:e.listItems1,checklist:"",color:"green"},model:{value:e.selection3,callback:function(l){e.selection3=l},expression:"selection3"}})],1),t("div",{staticClass:"grow"},[t("div",{staticClass:"title3 mb4"},[e._v("Round checkboxes")]),t("w-list",{attrs:{items:e.listItems1,checklist:"","round-checkboxes":"",color:"green"},model:{value:e.selection4,callback:function(l){e.selection4=l},expression:"selection4"}})],1)]),t("w-flex",{staticClass:"mt4",attrs:{wrap:"","basis-zero":"",gap:3}},[t("div",{staticClass:"grow"},[t("div",{staticClass:"title3 mb4"},[e._v("Custom rendering, default styles")]),t("w-list",{attrs:{items:e.listItems2,"item-value-key":"id",checklist:"",color:"primary"},scopedSlots:e._u([{key:"item",fn:function(l){var n=l.item;return[t("span",[e._v(e._s(n.label))]),t("div",{staticClass:"spacer"}),t("w-icon",{attrs:{md:""}},[e._v(e._s(n.icon))])]}}]),model:{value:e.selection6,callback:function(l){e.selection6=l},expression:"selection6"}})],1),t("div",{staticClass:"grow"},[t("div",{staticClass:"title3 mb4"},[e._v("Custom rendering & styles")]),t("w-list",{staticClass:"custom",attrs:{items:e.listItems2,"item-value-key":"id",checklist:"",color:"primary"},scopedSlots:e._u([{key:"item",fn:function(l){var n=l.item;return[t("span",[e._v(e._s(n.label))]),t("div",{staticClass:"spacer"}),t("w-icon",{attrs:{md:""}},[e._v(e._s(n.icon))])]}}]),model:{value:e.selection7,callback:function(l){e.selection7=l},expression:"selection7"}})],1)])],1),t("title-link",{attrs:{h3:""}},[e._v("Checklist colors")]),t("p",[e._v("A checklist can have all the color options that the normal list can have, even a different color per item.")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-list(v-model="selection5" :items="items" checklist)')]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-list
  v-model="selection"
  :items="items"
  checklist>
</w-list>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Item 1', value: 1, color: 'amber' },
    { label: 'Item 2', value: 2, color: 'warning' },
    { label: 'Item 3', value: 3, color: 'error' },
    { label: 'Item 4', value: 4, color: 'pink' }
  ],
  selection: [1, 2, 3, 4]
})
`)]},proxy:!0}])},[t("w-list",{attrs:{items:e.listItems5,checklist:""},model:{value:e.selection5,callback:function(l){e.selection5=l},expression:"selection5"}})],1),t("title-link",{attrs:{h2:""}},[e._v("Navigation lists")]),e._m(9),e._m(10),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-list(:items="items" nav color="primary")
  template(#item="{ item }")
    span `+e._s("{{ item.label }")+`}
    .spacer
    w-icon(md) `+e._s("{{ item.icon }}"))]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-list :items="items" nav color="primary">
  <template #item="{ item }">
    <span>`+e._s("{{ item.label }}")+`</span>
    <div class="spacer"></div>
    <w-icon md>`+e._s("{{ item.icon }}")+`</w-icon>
  </template>
</w-list>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Star', id: 'star', icon: 'mdi mdi-star', route: '/w-list/star' },
    { label: 'Check', id: 'check', icon: 'mdi mdi-check', route: '/w-list/check' },
    { label: 'Cross', id: 'cross', icon: 'mdi mdi-close', route: '/w-list/cross' },
    { label: 'Info', id: 'info', icon: 'mdi mdi-information', route: '/w-list/info' },
    { label: 'Warning', id: 'warning', icon: 'mdi mdi-alert', route: '/w-list/warning' },
    { label: 'Disabled', id: 'disabled', icon: 'mdi mdi-minus-circle', route: '/w-list/disabled', disabled: true }
  ]
})`)]},proxy:!0}])},[t("w-list",{attrs:{items:e.listItems2,nav:"",color:"primary"},scopedSlots:e._u([{key:"item",fn:function(l){var n=l.item;return[t("span",[e._v(e._s(n.label))]),t("div",{staticClass:"spacer"}),t("w-icon",{attrs:{md:""}},[e._v(e._s(n.icon))])]}}])})],1),t("router-view")],1)},d=[function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("p",[e._v("The "),t("span",{staticClass:"code"},[e._v("w-list")]),e._v(" component has multiple uses:")])},function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("p",[e._v("Like in most components, you can set a "),t("code",[e._v("color")]),e._v(" for the text and a "),t("code",[e._v("bg-color")]),e._v(` for the
background.`)])},function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("p",{staticClass:"grey-light1"},[e._v(`In addition to the hover effect, the items may also be selectable (as per the
`),t("a",{attrs:{href:"#selectable-list-items"}},[e._v("Selectable list items example")]),e._v(`),
but in this example we are only demonstrating the selection color.`)])},function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("p",[e._v("You may want a default color for all the items, but a different color for the selection only."),t("br"),e._v(`
You can use the `),t("code",[e._v("selection-color")]),e._v(" option for this purpose.")])},function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("p",[e._v("If no "),t("code",[e._v("color")]),e._v(" and no "),t("code",[e._v("selection-color")]),e._v(" are set, the "),t("code",[e._v("selection-color")]),e._v(` will be set
to primary by default.`),t("br"),e._v(`
In that case, if you don't want to default to the primary color, you can explicitly set
`),t("code",[e._v("selection-color")]),e._v(" to a falsy value (false, null, or empty string), or another color.")])},function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("p",[e._v("In this example, we don't use the component's data at all."),t("br"),e._v(`
You can easily define items directly in the template and have a different custom layout for every
list item just like in this example.`)])},function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("p",[e._v("It's up to you to define your your list contents in the component's data or directly in the template."),t("br"),e._v(`
In this example each item has a different icon stored in the data object.`)])},function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("p",[e._v("If you provide a "),t("code",[e._v("v-model")]),e._v(" or a "),t("code",[e._v("value")]),e._v(", the list items become selectable.")])},function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("p",[e._v("Note: you can get the list selection from the v-model, or by listening to the "),t("span",{staticClass:"code"},[e._v("input")]),e._v(" event.")])},function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("p",[e._v("The navigation list expects a "),t("code",[e._v("route")]),e._v(" attribute in the items that are links."),t("br"),e._v(`
If you are using Vue Router, all the links will automatically be `),t("strong",{staticClass:"code"},[e._v("router-link")]),e._v("s."),t("br")])},function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("p",[e._v("It is possible to disable a link with a "),t("code",[e._v("disabled: true")]),e._v(" attribute in the item.")])}];const u={data:()=>({radios:[{label:"Single selection",value:!1},{label:"Multiple selections",value:!0}],multiple:!1,listItems1:[{label:"Item 1",value:1},{label:"Item 2",value:2},{label:"Item 3",value:3},{label:"Item 4",value:4},{label:"Item 5",value:5,disabled:!0}],listItems2:[{label:"Star",id:"star",icon:"mdi mdi-star",route:"/w-list/star"},{label:"Check",id:"check",icon:"mdi mdi-check",route:"/w-list/check"},{label:"Cross",id:"cross",icon:"mdi mdi-close",route:"/w-list/cross"},{label:"Info",id:"info",icon:"mdi mdi-information",route:"/w-list/info"},{label:"Warning",id:"warning",icon:"mdi mdi-alert",route:"/w-list/warning"},{label:"Disabled",id:"disabled",icon:"mdi mdi-minus-circle",route:"/w-list/disabled",disabled:!0}],listItems3:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"},{label:"Item 5",disabled:!0}],listItems4:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"}],listItems5:[{label:"Item 1",value:1,color:"amber"},{label:"Item 2",value:2,color:"warning"},{label:"Item 3",value:3,color:"error"},{label:"Item 4",value:4,color:"pink"}],selection1:2,selection2:"check",selection3:[1,3],selection4:[1,3],selection5:[1,2,3,4],selection6:["star","cross"],selection7:["star","cross"],itemClicked:null})},a={};var v=s(u,m,d,!1,p,null,null,null);function p(e){for(let i in a)this[i]=a[i]}var h=function(){return v.exports}(),_=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[t("div",{staticClass:"w-divider my12"}),t("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),t("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),t("component-api",{attrs:{items:e.slots,title:"Slots"}}),t("component-api",{attrs:{items:e.events,title:"Events"}})],1)},b=[];const f={items:'Expecting an array of objects. Each object being a list item, it should include at least a <code>label</code> attribute.<br>Alternatively, you can provide an integer number (call it <em class="code">x</em>), to loop through and create <em class="code">x</em> items in the list. You can then use the individual slots <code>item-title.x</code> &amp; <code>item-content.x</code> to define each item.',value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Provide an array of values if <code>multiple</code> is set to true, or a single value otherwise, to dictate the selected state of the list items.<br>Also accepts full objects when <code>return-object</code> is set to true.<br>This value gets updated when using a v-model.',checklist:"Sets the type of list to checklist: each item has a checkbox.",roundCheckboxes:"When <code>checklist</code> is true, displays round checkboxes instead of square ones.",multiple:"When selectable, allows multiple selections. A checklist always has multiple selections.",addIds:"When set to true, will add an id on the list and all the list items.<br>Useful for accessibility aria fields for instance.",hover:"On mouseover, highlights the list items with the given <code>color</code>. Also adds a small vertical padding on the list items to space them.",color:`Applies a color to the list items's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the list items's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,selectionColor:`Applies a color to the selected list items's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,nav:"Set the list as a navigation menu. All the items having a `route` attribute will be converted to link or router-link if vue-router is present.",icon:"A global icon string to apply to all the list items. E.g. <code>mdi mdi-home</code>.",itemLabelKey:'The property name (aka "key") in each item object where to find the label of the item.',itemValueKey:'The property name (aka "key") in each item object where to find the value of the item.',itemClassKey:'The property name (aka "key") in each item object where to find an optional CSS class for this item.',itemColorKey:'The property name (aka "key") in each item object where to find an optional color for this item.',itemRouteKey:'The property name (aka "key") in each item object where to find an optional route for this item, to be used in <code>nav</code> lists.<br>Since we usually set a <code>to</code> prop for router-links/nuxt-links, and <code>href</code> for <span class="code">&lt;a&gt;</span> tags, the <code>route</code> option unifies both.',itemClass:"Applies a custom CSS class to every list item.",depth:!1,returnObject:"The current list selection is returned via the <code>value</code> prop or <code>v-model</code> as an array of full objects or a single full object (returning the original as given) when <code>multiple</code> is set to false.",arrowsNavigation:'Allows the navigation through the list items with the keyboard arrows up and down, when set to true and when the items are selectable (the <strong class="code">w-list</strong> has a <code>value</code> or <code>v-model</code>, or is a <code>nav</code> or <code>checklist</code>).',noUnselect:"Once at least one item is selected, prevents the list to have no selection. Clicking an item when only this one is selected will not unselect it."},w={item:{description:"Provide a custom content for every item. Applies to all the items, but can be overridden by the <code>item.x</code> slot.",params:{item:"The current item object.",index:"The item index in the list. Starts at 1 to be consistent with the <code>item.x</code> slot.",selected:"A boolean representing the selected state of the current item."}},"item.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the list. Starts at 1 to be consistent with the slot name.",selected:"A boolean representing the selected state of the current item."}}},y={input:{description:"Emitted each time the state of the list changes.<br>Updates the <code>v-model</code> value in Vue 2.x only.",params:{"[Array]":"An array of values of all the selected list items."}},"update:modelValue":{description:"Emitted each time the state of the list changes (when an item is selected or unselected).<br>Updates the v-model value in Vue 3 only.",params:{"[Array]":"An array of values of all the selected list items."}},"item-click":{description:"Emitted on each list item click.",params:{"[Object]":"The clicked list item's object."}},"item-select":{description:"Emitted on each list item selection or unselection (via click or keyboard <kbd>enter</kbd> key when focused).",params:{"[Object]":"The selected list item's object."}},"keydown:enter":{description:"Emitted on <kbd>enter</kbd> key down, when the focus is on any of the list items."},"keydown:escape":{description:"Emitted on <kbd>escape</kbd> key down, when the focus is on any of the list items."}},k={data:()=>({propsDescs:f,slots:w}),computed:{props(){return o.props},events(){return o.emits.reduce((e,i)=>(e[i]=y[i]||{})&&e,{})}}},r={};var g=s(k,_,b,!1,x,null,null,null);function x(e){for(let i in r)this[i]=r[i]}var I=function(){return g.exports}(),C=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("main",[t("ui-component-title",[e._v("w-list")]),t("examples"),t("api")],1)},S=[];const j={components:{Examples:h,Api:I}},c={};var A=s(j,C,S,!1,$,null,null,null);function $(e){for(let i in c)this[i]=c[i]}var T=function(){return A.exports}();export{T as default};
