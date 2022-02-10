import{n as a,W as s}from"./index.6bc87caa.js";import"./vendor.748d1766.js";var m=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[t("title-link",{attrs:{h2:""}},[e._v("Basic")]),t("w-accordion",{staticClass:"white--bg",attrs:{items:e.items}}),t("p",{staticClass:"grey-light2 my4"},[e._v(`Now that you've seen the default accordion in real context, all the examples of this page will have a
light blue background and accordions a white background to help visualize where they end.
`)]),t("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-accordion(v-model="accordion" :items="items")

div.mt3
  | v-model:
  code.ml1 `+e._s("{{ accordion }}"))]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-accordion v-model="accordion" :items="items" />

<div class="mt3">
  v-model:
  <code class="ml1">`+e._s("{{ accordion }}")+`</code>
</div>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    {
      title: 'Item 1',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.'
    },
    {
      title: 'Item 2',
      content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!'
    },
    {
      title: 'Item 3',
      content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.'
    }
  ],
  accordion: []
})
`)]},proxy:!0}])},[t("w-accordion",{staticClass:"white--bg",attrs:{items:e.items},model:{value:e.accordion1,callback:function(n){e.accordion1=n},expression:"accordion1"}}),t("div",{staticClass:"mt3"},[e._v("v-model:"),t("code",{staticClass:"ml1"},[e._v(e._s(e.accordion1))])])],1),t("title-link",{attrs:{h2:""}},[e._v("Expanded by default")]),e._m(0),t("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-accordion(v-model="accordion" :items="items")

div.mt3
  | v-model:
  code.ml1 `+e._s("{{ accordion }}"))]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-accordion v-model="accordion" :items="items" />

<div class="mt3">
  v-model:
  <code class="ml1">`+e._s("{{ accordion }}")+`</code>
</div>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    {
      title: 'Item 1',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.'
    },
    {
      title: 'Item 2',
      content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!'
    },
    {
      title: 'Item 3',
      content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.'
    }
  ],
  accordion: [false, true, false]
})
`)]},proxy:!0}])},[t("w-accordion",{staticClass:"white--bg",attrs:{items:e.items},model:{value:e.accordion2,callback:function(n){e.accordion2=n},expression:"accordion2"}}),t("div",{staticClass:"mt3"},[e._v("v-model:"),t("code",{staticClass:"ml1"},[e._v(e._s(e.accordion2))])])],1),t("title-link",{attrs:{h2:""}},[e._v("Disabled pane")]),e._m(1),t("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-accordion(v-model="accordion" :items="items")')]},proxy:!0},{key:"html",fn:function(){return[e._v('<w-accordion v-model="accordion" :items="items" />')]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { title: 'Item 1 - disabled collapsed', content: 'Disabled', disabled: true },
    { title: 'Item 2 - disabled expanded', content: 'You can\\'t collapse this pane.', disabled: true },
    { title: 'Item 3 - fully enabled', content: 'You can toggle this pane to expand and collapse.' }
  ],
  accordion: [false, true, true]
})
`)]},proxy:!0}])},[t("w-accordion",{staticClass:"white--bg",attrs:{items:e.itemsDisabled},model:{value:e.accordion3,callback:function(n){e.accordion3=n},expression:"accordion3"}})],1),t("title-link",{attrs:{h2:""}},[e._v("Shadow")]),t("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-accordion(:items="items" shadow)')]},proxy:!0},{key:"html",fn:function(){return[e._v('<w-accordion :items="items" shadow />')]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    {
      title: 'Item 1',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.'
    },
    {
      title: 'Item 2',
      content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!'
    },
    {
      title: 'Item 3',
      content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.'
    }
  ]
})
`)]},proxy:!0}])},[t("w-accordion",{staticClass:"white--bg",attrs:{items:e.items,shadow:""}})],1),t("title-link",{attrs:{h2:""}},[e._v("Color & background color")]),e._m(2),t("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-accordion(:items="items" color="amber-dark1")

w-accordion.mt6(:items="items" bg-color="yellow-light5")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-accordion :items="items" color="amber-dark1"></w-accordion>

<w-accordion class="mt6" :items="items" bg-color="yellow-light5"></w-accordion>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    {
      title: 'Item 1',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.'
    },
    {
      title: 'Item 2',
      content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!'
    },
    {
      title: 'Item 3',
      content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.'
    }
  ]
})
`)]},proxy:!0}])},[t("w-accordion",{staticClass:"white--bg",attrs:{items:e.items,color:"amber-dark1"}}),t("w-accordion",{staticClass:"mt6",attrs:{items:e.items,"bg-color":"yellow-light5"}})],1),t("title-link",{attrs:{h3:""}},[e._v("Different color per item")]),e._m(3),t("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-accordion(:items="items")')]},proxy:!0},{key:"html",fn:function(){return[e._v('<w-accordion :items="items" />')]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1', color: 'amber' },
    { title: 'Item 2', content: 'Content 2', color: 'warning' },
    { title: 'Item 3', content: 'Content 3', color: 'error' }
  ]
})
`)]},proxy:!0}])},[t("w-accordion",{staticClass:"white--bg",attrs:{items:e.items2}})],1),t("title-link",{attrs:{h2:""}},[e._v("Expand a single item at a time")]),t("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-accordion(v-model="accordion" :items="items" expand-single)

div.mt3
  | v-model:
  code.ml1 `+e._s("{{ accordion }}"))]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-accordion
  v-model="accordion"
  :items="items"
  expand-single>
</w-accordion>

<div class="mt3">
  v-model:
  <code class="ml1">`+e._s("{{ accordion }}")+`</code>
</div>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    {
      title: 'Item 1',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.'
    },
    {
      title: 'Item 2',
      content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!'
    },
    {
      title: 'Item 3',
      content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.'
    }
  ],
  accordion: []
})
`)]},proxy:!0}])},[t("w-accordion",{staticClass:"white--bg",attrs:{items:e.items,"expand-single":""},model:{value:e.accordion4,callback:function(n){e.accordion4=n},expression:"accordion4"}}),t("div",{staticClass:"mt3"},[e._v("v-model:"),t("code",{staticClass:"ml1"},[e._v(e._s(e.accordion4))])])],1),t("title-link",{attrs:{h2:""}},[e._v("External control")]),t("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-button.mr2(@click="accordion = Array&#40;3&#41;.fill&#40;true&#41;" sm) Expand all
w-button(@click="accordion = Array&#40;3&#41;.fill&#40;false&#41;" sm) Collapse all

w-accordion.mt4(v-model="accordion" :items="items")

div.mt3
  | v-model:
  code.ml1 `+e._s("{{ accordion }}"))]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-button
  class="mr2"
  @click="accordion = Array&#40;3&#41;.fill&#40;true&#41;"
  sm>
  Expand all
</w-button>
<w-button
  @click="accordion = Array&#40;3&#41;.fill&#40;false&#41;"
  sm>
  Collapse all
</w-button>

<w-accordion class="mt4" v-model="accordion" :items="items" />

<div class="mt3">
  v-model:
  <code class="ml1">`+e._s("{{ accordion }}")+`</code>
</div>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    {
      title: 'Item 1',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.'
    },
    {
      title: 'Item 2',
      content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!'
    },
    {
      title: 'Item 3',
      content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.'
    }
  ],
  accordion: []
})
`)]},proxy:!0}])},[t("w-button",{staticClass:"mr2",attrs:{sm:""},on:{click:function(n){e.accordion5=Array(3).fill(!0)}}},[e._v("Expand all")]),t("w-button",{attrs:{sm:""},on:{click:function(n){e.accordion5=Array(3).fill(!1)}}},[e._v("Collapse all")]),t("w-accordion",{staticClass:"mt4 white--bg",attrs:{items:e.items},model:{value:e.accordion5,callback:function(n){e.accordion5=n},expression:"accordion5"}}),t("div",{staticClass:"mt3"},[e._v("v-model:"),t("code",{staticClass:"ml1"},[e._v(e._s(e.accordion5))])])],1),t("title-link",{attrs:{h2:"",slug:"custom-rendering"}},[e._v("Custom rendering (via slots)")]),e._m(4),t("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-accordion(:items="items" content-class="pa0")
  template(#item-title="{ item }")
    w-icon(lg :color="item.itemColor") `+e._s("{{ item.icon }}")+`
    .title3.my0.ml2(:class="item.itemColor") `+e._s("{{ item.title }}")+`
  template(#item-content="{ item }")
    w-alert.my0.pb3(border-left tile :color="item.itemColor" v-html="item.content")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-accordion :items="items" content-class="pa0">
  <template #item-title="{ item }">
    <w-icon lg :color="item.itemColor">
      `+e._s("{{ item.icon }}")+`
    </w-icon>
    <div class="title3 ml2" :class="item.itemColor">
      `+e._s("{{ item.title }}")+`
    </div>
  </template>
  <template #item-content="{ item }") />
    <w-alert
      class="my0 pb3"
      border-left
      tile
      :color="item.itemColor"
      v-html="item.content" />
  </template>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    {
      title: 'Item 1',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.',
      icon: 'mdi mdi-home',
      itemColor: 'blue'
    },
    {
      title: 'Item 2',
      content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!',
      icon: 'mdi mdi-github',
      itemColor: 'green'
    },
    {
      title: 'Item 3',
      content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.',
      icon: 'mdi mdi-codepen',
      itemColor: 'orange'
    }
  ]
})
`)]},proxy:!0}])},[t("w-accordion",{staticClass:"white--bg",attrs:{items:e.items,"content-class":"pa0"},scopedSlots:e._u([{key:"item-title",fn:function(n){var o=n.item;return[t("w-icon",{attrs:{lg:"",color:o.itemColor}},[e._v(e._s(o.icon))]),t("div",{staticClass:"title3 my0 ml2",class:o.itemColor},[e._v(e._s(o.title))])]}},{key:"item-content",fn:function(n){var o=n.item;return[t("w-alert",{staticClass:"my0 pb3",attrs:{"border-left":"",tile:"",color:o.itemColor},domProps:{innerHTML:e._s(o.content)}})]}}])})],1),t("title-link",{attrs:{h2:""}},[e._v("Do you (really) need even more flexibility?")]),e._m(5),t("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-accordion(:items="3")
  template(#item-title.1) Item title 1
  template(#item-content.1) Item content 1

  template(#item-title.2) Item title 2
  template(#item-content.2) Item content 2

  template(#item-title.3) Item title 3
  template(#item-content.3) Item content 3`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-accordion :items="3">
  <template #item-title.1>Item title 1</template>
  <template #item-content.1>Item content 1</template>

  <template #item-title.2>Item title 2</template>
  <template #item-content.2>Item content 2</template>

  <template #item-title.3>Item title 3</template>
  <template #item-content.3>Item content 3</template>
</w-accordion>
`)]},proxy:!0}])},[t("w-accordion",{staticClass:"white--bg",attrs:{items:3},scopedSlots:e._u([{key:"item-title.1",fn:function(){return[e._v("Item title 1")]},proxy:!0},{key:"item-content.1",fn:function(){return[e._v("Item content 1")]},proxy:!0},{key:"item-title.2",fn:function(){return[e._v("Item title 2")]},proxy:!0},{key:"item-content.2",fn:function(){return[e._v("Item content 2")]},proxy:!0},{key:"item-title.3",fn:function(){return[e._v("Item title 3")]},proxy:!0},{key:"item-content.3",fn:function(){return[e._v("Item content 3")]},proxy:!0}])})],1),e._m(6),t("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-accordion(:items="items")
  template(#item-title.item1)
    | This is the 1st item
    w-tag.ml2(color="red" sm outline) HOT
  template(#item-content.item1)
    p This content has a checklist.
    .title4 To do
    w-list(checklist color="primary" :items="[{ label: 'do this' }, { label: 'do that next' }]")

  template(#item-title.item2)
    w-icon.mr1(md color="amber") mdi mdi-emoticon-excited-outline
    em This is the 2nd item
  template(#item-content.item2="{ item }")
    p The full content here is custom and completely distinct and independent from the other items.
    p
      | You also have access to the item's data if you need:
      code.ml1 `+e._s("{{ item }}")+`

  template(#item-title.item3)
    strong This is the 3rd item
    w-icon.ml1(md color="pink") mdi mdi-emoticon-kiss-outline
  template(#item-content.item3)
    p Do you want to check the project on Github?
    w-button.mt1(bg-color="primary" route="https://github.com/antoniandre/wave-ui")
      | Github
      w-icon.ml2(sm) mdi mdi-open-in-new`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-accordion :items="items">
  <template #item-title.item1>
    This is the 1st item
    <w-tag class="ml2" color="red" sm outline>HOT</w-tag>
  </template>
  <template #item-content.item1>
    <p>This content has a checklist.</p>
    <div class="title4 my3">To do</div>
    <w-list
      checklist
      color="primary"
      :items="[{ label: 'do this' }, { label: 'do that next' }]" />
  </template>

  <template #item-title.item2>
    <w-icon class="mr1" md color="amber">
      mdi mdi-emoticon-excited-outline
    </w-icon>
    <em>This is the 2nd item</em>
  </template>
  <template #item-content.item2="{ item }">
    <p>
      The full content here is custom and completely distinct and independent from the other items.
    </p>
    <p>
      You also have access to the item's data if you need:
      <code class="ml1">`+e._s("{{ item }}")+`</code>
    </p>
  </template>

  <template #item-title.item3="">
    <strong> This is the 3rd item</strong>
    <w-icon class="ml1" md color="pink">
      mdi mdi-emoticon-kiss-outline
    </w-icon>
  </template>
  <template #item-content.item3>
    <p>Do you want to check the project on Github?</p>
    <w-button
      class="mt1"

      route="https://github.com/antoniandre/wave-ui">
      Github
      <w-icon class="ml2" sm>mdi mdi-open-in-new</w-icon>
    </w-button>
  </template>
</w-accordion>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { id: 'item1' },
    { id: 'item2' },
    { id: 'item3' }
  ]
})
`)]},proxy:!0}])},[t("w-accordion",{staticClass:"white--bg",attrs:{items:e.itemsCustom},scopedSlots:e._u([{key:"item-title.item1",fn:function(){return[e._v("This is the 1st item"),t("w-tag",{staticClass:"ml2",attrs:{color:"red",sm:"",outline:""}},[e._v("HOT")])]},proxy:!0},{key:"item-content.item1",fn:function(){return[t("p",[e._v("This content has a checklist.")]),t("div",{staticClass:"title4"},[e._v("To do")]),t("w-list",{attrs:{checklist:"",color:"primary",items:[{label:"do this"},{label:"do that next"}]}})]},proxy:!0},{key:"item-title.item2",fn:function(){return[t("w-icon",{staticClass:"mr1",attrs:{md:"",color:"amber"}},[e._v("mdi mdi-emoticon-excited-outline")]),t("em",[e._v("This is the 2nd item")])]},proxy:!0},{key:"item-content.item2",fn:function(n){var o=n.item;return[t("p",[e._v("The full content here is custom and completely distinct and independent from the other items.")]),t("p",[e._v("You also have access to the item's data if you need:"),t("code",{staticClass:"ml1"},[e._v(e._s(o))])])]}},{key:"item-title.item3",fn:function(){return[t("strong",[e._v("This is the 3rd item")]),t("w-icon",{staticClass:"ml1",attrs:{md:"",color:"pink"}},[e._v("mdi mdi-emoticon-kiss-outline")])]},proxy:!0},{key:"item-content.item3",fn:function(){return[t("p",[e._v("Do you want to check the project on Github?")]),t("w-button",{staticClass:"mt1",attrs:{"bg-color":"primary",route:"https://github.com/antoniandre/wave-ui"}},[e._v("Github"),t("w-icon",{staticClass:"ml2",attrs:{sm:""}},[e._v("mdi mdi-open-in-new")])],1)]},proxy:!0}])})],1),t("title-link",{attrs:{h2:""}},[e._v("Toggle icon options")]),t("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`.title4 1 custom icon (only expand)
w-accordion(:items="items" expand-icon="wi-chevron-down")

.title4.mt6 2 custom icons (expand & collapse)
w-accordion(:items="items" expand-icon="wi-plus" collapse-icon="wi-minus")

.title4.mt6 No icon
w-accordion(:items="items" :expand-icon="false" title-class="py2")

.title4.mt6 Icon on the right
w-accordion(:items="items" expand-icon-right)`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<div class="title4 mb2">
  1 custom icon (only expand)
</div>
<w-accordion
  :items="items"
  expand-icon="wi-chevron-down">
</w-accordion>

<div class="title4 mt8 mb2">
  2 custom icons (expand & collapse)
</div>
<w-accordion
  :items="items"
  expand-icon="wi-plus"
  collapse-icon="wi-minus">
</w-accordion>

<div class="title4 mt8 mb2">
  No icon
</div>
<w-accordion
  :items="items"
  :expand-icon="false"
  title-class="py2">
</w-accordion>

<div class="title4 mt8 mb2">
  Icon on the right
</div>
<w-accordion
  :items="items"
  expand-icon-right>
</w-accordion>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    {
      title: 'Item 1',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.'
    },
    {
      title: 'Item 2',
      content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!'
    },
    {
      title: 'Item 3',
      content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.'
    }
  ]
})`)]},proxy:!0}])},[t("div",{staticClass:"title4"},[e._v("1 custom icon (only expand)")]),t("w-accordion",{staticClass:"white--bg",attrs:{items:e.items,"expand-icon":"wi-chevron-down"}}),t("div",{staticClass:"title4 mt6"},[e._v("2 custom icons (expand & collapse)")]),t("w-accordion",{staticClass:"white--bg",attrs:{items:e.items,"expand-icon":"wi-plus","collapse-icon":"wi-minus"}}),t("div",{staticClass:"title4 mt6"},[e._v("No icon")]),t("w-accordion",{staticClass:"white--bg",attrs:{items:e.items,"expand-icon":!1,"title-class":"py2"}}),t("div",{staticClass:"title4 mt6"},[e._v("Icon on the right")]),t("w-accordion",{staticClass:"white--bg",attrs:{items:e.items,"expand-icon-right":""}})],1)],1)},u=[function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("p",[e._v(`You can expand one or multiple panes by default by providing a v-model array of booleans:
`),t("span",{staticClass:"code"},[e._v("true")]),e._v(" to expand, "),t("span",{staticClass:"code"},[e._v("false")]),e._v(" to collapse the item.")])},function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("p",[e._v("Specify which pane should be disabled - expanded or collapsed - by adding the "),t("span",{staticClass:"code"},[e._v("disabled")]),e._v(` property
directly in the object.`)])},function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("p",[e._v("Like in most components, you can set a "),t("code",[e._v("color")]),e._v(" for the text and a "),t("code",[e._v("bg-color")]),e._v(` for the
background.`),t("br"),e._v(`
No background color is set by default and the text color is inherited.`)])},function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("p",[e._v("The colors are set in the data in each item object."),t("br"),e._v(`
the default mapping for the color is the `),t("code",[e._v("color")]),e._v(` key, but you can customize it with the
`),t("code",[e._v("item-color-key")]),e._v(" prop.")])},function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("p",[e._v("Customize all the tab items titles and/or content via the single slot "),t("code",[e._v("item-title")]),e._v(`, and/or
all the tab items content via the single slot `),t("code",[e._v("item-content")]),e._v(".")])},function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("p",[e._v("No problem, Wave UI's got you covered."),t("br"),e._v(`
If you don't need data objects at all, you can simply define a number of items: `),t("code",[e._v(':items="3"')]),e._v(`.
`)])},function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("p",[e._v("Here is an example of 3 totally diferent pane titles and contents using more lines of code."),t("br"),e._v(`
This time, an array of object is defined to show you can also do a mix of contents coming from the
the component's data or directly in the template.`)])}];const d={data:()=>({items:[{title:"Item 1",content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.",icon:"mdi mdi-home",itemColor:"blue"},{title:"Item 2",content:"Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!",icon:"mdi mdi-github",itemColor:"green"},{title:"Item 3",content:"Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.",icon:"mdi mdi-codepen",itemColor:"orange"}],items2:[{title:"Item 1",content:"content 1",color:"amber"},{title:"Item 2",content:"content 2",color:"warning"},{title:"Item 3",content:"content 3",color:"error"}],itemsDisabled:[{title:"Item 1 - disabled collapsed",content:"Disabled",disabled:!0},{title:"Item 2 - disabled expanded",content:"You can't collapse this pane.",disabled:!0},{title:"Item 3 - fully enabled",content:"You can toggle this pane to expand and collapse."}],itemsCustom:[{id:"item1"},{id:"item2"},{id:"item3"}],accordion1:[],accordion2:[!1,!0,!1],accordion3:[!1,!0,!0],accordion4:[],accordion5:[]})},c={};var p=a(d,m,u,!1,h,null,null,null);function h(e){for(let i in c)this[i]=c[i]}var v=function(){return p.exports}(),f=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[t("div",{staticClass:"w-divider my12"}),t("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),t("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),t("component-api",{attrs:{items:e.slots,title:"Slots"}}),t("component-api",{attrs:{items:e.events,title:"Events"}})],1)},_=[];const b={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Provide an array of booleans to dictate the state (expanded and collapsed) of all the accordion items. This value gets updated by the accordion when using a v-model.',color:'Applies a text color on each accordion item. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a background color on each accordion item. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',items:'Expecting an array of objects. Each object being an accordion item, it should include a <code>title</code> and <code>content</code> attributes.<br>Alternatively, you can provide an integer number (call it <em class="code">x</em>), to loop through and create <em class="code">x</em> items in the accordion. You can then use the individual slots <code>item-title.x</code> &amp; <code>item-content.x</code> to define each item title and content.',itemTitleKey:"Specifies the name of the attribute in each item object where to find the item's title string.",itemContentKey:"Specifies the name of the attribute in each item object where to find the item's content string.",itemColorKey:"Specifies the name of the attribute in each item object where to find the item's desired color string. This allows a different color for each accordion item.",itemClass:"Applies a custom CSS class (or space separated classes) on every item container (which includes both the title and the content of the item).",titleClass:"Applies a custom CSS class (or space separated classes) on every title container.",contentClass:"Applies a custom CSS class (or space separated classes) on every content container.",expandIcon:"Specifies the name of the icon to display in the toggle button. If set to false or empty string, the button will be removed.",expandIconRight:"When set to true, the expand button will be placed at the right end of the item's title.",expandSingle:"Specifies the accordion behavior, whether only one item can be expanded at a time or multiple. When set to true, expanding another item than the one already expanded is still possible, but it will collapse the other expanded item.",collapseIcon:"Provide a different icon than the expand icon, to show when the accordion item is expanded. By default and when empty, there is no collapse icon: the expand icon rotates to show a closing ability.",shadow:"Applies a shadow to the whole accordion container."},g={"item-title":{description:"Provide a custom title for every item. Applies to all the items, but can be overridden by the <code>item-title.x</code> slot.",params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.",expanded:"A boolean representing the expanded state of the accordion item."}},"item-title.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom title for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.",expanded:"A boolean representing the expanded state of the accordion item."}},"item-content":{description:"Provide a custom content for every item. Applies to all the items, but can be overridden by the <code>item-content.x</code> slot.",params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.",expanded:"A boolean representing the expanded state of the accordion item."}},"item-content.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.",expanded:"A boolean representing the expanded state of the accordion item."}}},x={input:{description:"Emitted each time the state of the accordion changes (when an item is expanded or collapsed).<br>Updates the v-model value in Vue 2.x only.",params:{"[Array]":"An array of booleans representing the expanded state of each accordion item."}},"update:modelValue":{description:"Emitted each time the state of the accordion changes (when an item is expanded or collapsed).<br>Updates the v-model value in Vue 3 only.",params:{"[Array]":"An array of booleans representing the expanded state of each accordion item."}},focus:{description:"Emitted on each accordion item title focus.",params:{"[Object]":"The focused accordion item object."}}},y={data:()=>({propsDescs:b,slots:g}),computed:{props(){return s.props},events(){return s.emits.reduce((e,i)=>(e[i]=x[i]||{})&&e,{})}}},r={};var w=a(y,f,_,!1,k,null,null,null);function k(e){for(let i in r)this[i]=r[i]}var C=function(){return w.exports}(),q=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("main",[t("ui-component-title",[e._v("w-accordion")]),t("examples"),t("api")],1)},I=[];const S={components:{Examples:v,Api:C}},l={};var T=a(S,q,I,!1,j,null,null,null);function j(e){for(let i in l)this[i]=l[i]}var $=function(){return T.exports}();export{$ as default};
