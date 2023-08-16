import{n as a,W as s}from"./index.e31dd236.js";var m=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("title-link",{attrs:{h2:""}},[t._v("Basic")]),e("w-accordion",{staticClass:"white--bg",attrs:{items:t.items}}),e("p",{staticClass:"grey-light2 my4"},[t._v(`Now that you've seen the default accordion in real context, all the examples of this page will have a
light blue background and accordions a white background to help visualize where they end.
`)]),e("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-accordion(v-model="accordion" :items="items")

div.mt3
  | v-model:
  code.ml1 `+t._s("{{ accordion }}"))]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-accordion v-model="accordion" :items="items" />

<div class="mt3">
  v-model:
  <code class="ml1">`+t._s("{{ accordion }}")+`</code>
</div>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
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
`)]},proxy:!0}])},[e("w-accordion",{staticClass:"white--bg",attrs:{items:t.items},model:{value:t.accordion1,callback:function(i){t.accordion1=i},expression:"accordion1"}}),e("div",{staticClass:"mt3"},[t._v("v-model:"),e("code",{staticClass:"ml1"},[t._v(t._s(t.accordion1))])])],1),e("title-link",{attrs:{h2:""}},[t._v("Expanded by default")]),t._m(0),e("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-accordion(v-model="accordion" :items="items")

div.mt3
  | v-model:
  code.ml1 `+t._s("{{ accordion }}"))]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-accordion v-model="accordion" :items="items" />

<div class="mt3">
  v-model:
  <code class="ml1">`+t._s("{{ accordion }}")+`</code>
</div>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
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
`)]},proxy:!0}])},[e("w-accordion",{staticClass:"white--bg",attrs:{items:t.items},model:{value:t.accordion2,callback:function(i){t.accordion2=i},expression:"accordion2"}}),e("div",{staticClass:"mt3"},[t._v("v-model:"),e("code",{staticClass:"ml1"},[t._v(t._s(t.accordion2))])])],1),e("title-link",{attrs:{h2:""}},[t._v("Disabled pane")]),t._m(1),e("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-accordion(v-model="accordion" :items="items")')]},proxy:!0},{key:"html",fn:function(){return[t._v('<w-accordion v-model="accordion" :items="items" />')]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  items: [
    { title: 'Item 1 - disabled collapsed', content: 'Disabled', disabled: true },
    { title: 'Item 2 - disabled expanded', content: 'You can\\'t collapse this pane.', disabled: true },
    { title: 'Item 3 - fully enabled', content: 'You can toggle this pane to expand and collapse.' }
  ],
  accordion: [false, true, true]
})
`)]},proxy:!0}])},[e("w-accordion",{staticClass:"white--bg",attrs:{items:t.itemsDisabled},model:{value:t.accordion3,callback:function(i){t.accordion3=i},expression:"accordion3"}})],1),e("title-link",{attrs:{h2:""}},[t._v("Shadow")]),e("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-accordion(:items="items" shadow)')]},proxy:!0},{key:"html",fn:function(){return[t._v('<w-accordion :items="items" shadow />')]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
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
`)]},proxy:!0}])},[e("w-accordion",{staticClass:"white--bg",attrs:{items:t.items,shadow:""}})],1),e("title-link",{attrs:{h2:""}},[t._v("Color & background color")]),t._m(2),e("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-accordion(:items="items" color="amber-dark1")

w-accordion.mt6(:items="items" bg-color="yellow-light5")`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-accordion :items="items" color="amber-dark1"></w-accordion>

<w-accordion class="mt6" :items="items" bg-color="yellow-light5"></w-accordion>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
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
`)]},proxy:!0}])},[e("w-accordion",{staticClass:"white--bg",attrs:{items:t.items,color:"amber-dark1"}}),e("w-accordion",{staticClass:"mt6",attrs:{items:t.items,"bg-color":"yellow-light5"}})],1),e("title-link",{attrs:{h3:""}},[t._v("Different color per item")]),t._m(3),e("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-accordion(:items="items")')]},proxy:!0},{key:"html",fn:function(){return[t._v('<w-accordion :items="items" />')]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1', color: 'amber' },
    { title: 'Item 2', content: 'Content 2', color: 'warning' },
    { title: 'Item 3', content: 'Content 3', color: 'error' }
  ]
})
`)]},proxy:!0}])},[e("w-accordion",{staticClass:"white--bg",attrs:{items:t.items2}})],1),e("title-link",{attrs:{h2:""}},[t._v("Expand a single item at a time")]),e("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-accordion(v-model="accordion" :items="items" expand-single)

div.mt3
  | v-model:
  code.ml1 `+t._s("{{ accordion }}"))]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-accordion
  v-model="accordion"
  :items="items"
  expand-single>
</w-accordion>

<div class="mt3">
  v-model:
  <code class="ml1">`+t._s("{{ accordion }}")+`</code>
</div>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
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
`)]},proxy:!0}])},[e("w-accordion",{staticClass:"white--bg",attrs:{items:t.items,"expand-single":""},model:{value:t.accordion4,callback:function(i){t.accordion4=i},expression:"accordion4"}}),e("div",{staticClass:"mt3"},[t._v("v-model:"),e("code",{staticClass:"ml1"},[t._v(t._s(t.accordion4))])])],1),e("title-link",{attrs:{h2:""}},[t._v("External control")]),e("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-button.mr2(@click="accordion = Array&#40;3&#41;.fill&#40;true&#41;" sm) Expand all
w-button(@click="accordion = Array&#40;3&#41;.fill&#40;false&#41;" sm) Collapse all

w-accordion.mt4(v-model="accordion" :items="items")

div.mt3
  | v-model:
  code.ml1 `+t._s("{{ accordion }}"))]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-button
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
  <code class="ml1">`+t._s("{{ accordion }}")+`</code>
</div>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
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
`)]},proxy:!0}])},[e("w-button",{staticClass:"mr2",attrs:{sm:""},on:{click:function(i){t.accordion5=Array(3).fill(!0)}}},[t._v("Expand all")]),e("w-button",{attrs:{sm:""},on:{click:function(i){t.accordion5=Array(3).fill(!1)}}},[t._v("Collapse all")]),e("w-accordion",{staticClass:"mt4 white--bg",attrs:{items:t.items},model:{value:t.accordion5,callback:function(i){t.accordion5=i},expression:"accordion5"}}),e("div",{staticClass:"mt3"},[t._v("v-model:"),e("code",{staticClass:"ml1"},[t._v(t._s(t.accordion5))])])],1),e("title-link",{attrs:{h2:"",slug:"custom-rendering"}},[t._v("Custom rendering (via slots)")]),t._m(4),e("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-accordion(:items="items" content-class="pa0")
  template(#item-title="{ item }")
    w-icon(lg :color="item.itemColor") `+t._s("{{ item.icon }}")+`
    .title3.my0.ml2(:class="item.itemColor") `+t._s("{{ item.title }}")+`
  template(#item-content="{ item }")
    w-alert.my0.pb3(border-left tile :color="item.itemColor" v-html="item.content")`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-accordion :items="items" content-class="pa0">
  <template #item-title="{ item }">
    <w-icon lg :color="item.itemColor">
      `+t._s("{{ item.icon }}")+`
    </w-icon>
    <div class="title3 ml2" :class="item.itemColor">
      `+t._s("{{ item.title }}")+`
    </div>
  </template>
  <template #item-content="{ item }") />
    <w-alert
      class="my0 pb3"
      border-left
      tile
      :color="item.itemColor"
      v-html="item.content" />
  </template>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
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
`)]},proxy:!0}])},[e("w-accordion",{staticClass:"white--bg",attrs:{items:t.items,"content-class":"pa0"},scopedSlots:t._u([{key:"item-title",fn:function(i){var o=i.item;return[e("w-icon",{attrs:{lg:"",color:o.itemColor}},[t._v(t._s(o.icon))]),e("div",{staticClass:"title3 my0 ml2",class:o.itemColor},[t._v(t._s(o.title))])]}},{key:"item-content",fn:function(i){var o=i.item;return[e("w-alert",{staticClass:"my0 pb3",attrs:{"border-left":"",tile:"",color:o.itemColor},domProps:{innerHTML:t._s(o.content)}})]}}])})],1),e("title-link",{attrs:{h2:""}},[t._v("Do you (really) need even more flexibility?")]),t._m(5),e("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-accordion(:items="3")
  template(#item-title.1) Item title 1
  template(#item-content.1) Item content 1

  template(#item-title.2) Item title 2
  template(#item-content.2) Item content 2

  template(#item-title.3) Item title 3
  template(#item-content.3) Item content 3`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-accordion :items="3">
  <template #item-title.1>Item title 1</template>
  <template #item-content.1>Item content 1</template>

  <template #item-title.2>Item title 2</template>
  <template #item-content.2>Item content 2</template>

  <template #item-title.3>Item title 3</template>
  <template #item-content.3>Item content 3</template>
</w-accordion>
`)]},proxy:!0}])},[e("w-accordion",{staticClass:"white--bg",attrs:{items:3},scopedSlots:t._u([{key:"item-title.1",fn:function(){return[t._v("Item title 1")]},proxy:!0},{key:"item-content.1",fn:function(){return[t._v("Item content 1")]},proxy:!0},{key:"item-title.2",fn:function(){return[t._v("Item title 2")]},proxy:!0},{key:"item-content.2",fn:function(){return[t._v("Item content 2")]},proxy:!0},{key:"item-title.3",fn:function(){return[t._v("Item title 3")]},proxy:!0},{key:"item-content.3",fn:function(){return[t._v("Item content 3")]},proxy:!0}])})],1),t._m(6),e("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-accordion(:items="items")
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
      code.ml1 `+t._s("{{ item }}")+`

  template(#item-title.item3)
    strong This is the 3rd item
    w-icon.ml1(md color="pink") mdi mdi-emoticon-kiss-outline
  template(#item-content.item3)
    p Do you want to check the project on Github?
    w-button.mt1(bg-color="primary" route="https://github.com/antoniandre/wave-ui")
      | Github
      w-icon.ml2(sm) mdi mdi-open-in-new`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-accordion :items="items">
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
      <code class="ml1">`+t._s("{{ item }}")+`</code>
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
</w-accordion>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  items: [
    { id: 'item1' },
    { id: 'item2' },
    { id: 'item3' }
  ]
})
`)]},proxy:!0}])},[e("w-accordion",{staticClass:"white--bg",attrs:{items:t.itemsCustom},scopedSlots:t._u([{key:"item-title.item1",fn:function(){return[t._v("This is the 1st item"),e("w-tag",{staticClass:"ml2",attrs:{color:"red",sm:"",outline:""}},[t._v("HOT")])]},proxy:!0},{key:"item-content.item1",fn:function(){return[e("p",[t._v("This content has a checklist.")]),e("div",{staticClass:"title4"},[t._v("To do")]),e("w-list",{attrs:{checklist:"",color:"primary",items:[{label:"do this"},{label:"do that next"}]}})]},proxy:!0},{key:"item-title.item2",fn:function(){return[e("w-icon",{staticClass:"mr1",attrs:{md:"",color:"amber"}},[t._v("mdi mdi-emoticon-excited-outline")]),e("em",[t._v("This is the 2nd item")])]},proxy:!0},{key:"item-content.item2",fn:function(i){var o=i.item;return[e("p",[t._v("The full content here is custom and completely distinct and independent from the other items.")]),e("p",[t._v("You also have access to the item's data if you need:"),e("code",{staticClass:"ml1"},[t._v(t._s(o))])])]}},{key:"item-title.item3",fn:function(){return[e("strong",[t._v("This is the 3rd item")]),e("w-icon",{staticClass:"ml1",attrs:{md:"",color:"pink"}},[t._v("mdi mdi-emoticon-kiss-outline")])]},proxy:!0},{key:"item-content.item3",fn:function(){return[e("p",[t._v("Do you want to check the project on Github?")]),e("w-button",{staticClass:"mt1",attrs:{"bg-color":"primary",route:"https://github.com/antoniandre/wave-ui"}},[t._v("Github"),e("w-icon",{staticClass:"ml2",attrs:{sm:""}},[t._v("mdi mdi-open-in-new")])],1)]},proxy:!0}])})],1),e("title-link",{attrs:{h2:""}},[t._v("Toggle icon options")]),e("title-link",{attrs:{h3:""}},[t._v("Alternative style")]),t._m(7),e("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`.title4 Icon on the left
w-accordion(:items="items" icon-rotate90)

.title4.mt6 Icon on the right
w-accordion(:items="items" icon-rotate90 expand-icon-right)`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<div class="title4">
  Icon on the left
</div>
<w-accordion
  :items="items"
  icon-rotate90>
</w-accordion>

<div class="title4 mt8">
  Icon on the right
</div>
<w-accordion
  :items="items"
  icon-rotate90
  expand-icon-right>
</w-accordion>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' }
  ]
})
`)]},proxy:!0}])},[e("div",{staticClass:"title4"},[t._v("Icon on the left")]),e("w-accordion",{staticClass:"white--bg",attrs:{items:t.items,"expand-icon-rotate90":""}}),e("div",{staticClass:"title4 mt6"},[t._v("Icon on the right")]),e("w-accordion",{staticClass:"white--bg",attrs:{items:t.items,"expand-icon-rotate90":"","expand-icon-right":""}})],1),e("title-link",{attrs:{h3:""}},[t._v("More options")]),e("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`.title4 1 custom icon (only expand)
w-accordion(:items="items" expand-icon="wi-chevron-down")

.title4.mt6 2 custom icons (expand & collapse)
w-accordion(:items="items" expand-icon="wi-plus" collapse-icon="wi-minus")

.title4.mt6 No icon
w-accordion(:items="items" :expand-icon="false" title-class="py2")

.title4.mt6 Icon on the right
w-accordion(:items="items" expand-icon-right)`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<div class="title4 mb2">
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
</w-accordion>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
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
})`)]},proxy:!0}])},[e("div",{staticClass:"title4"},[t._v("One custom icon (only expand)")]),e("w-accordion",{staticClass:"white--bg",attrs:{items:t.items,"expand-icon":"wi-chevron-down"}}),e("div",{staticClass:"title4 mt6"},[t._v("Two custom icons (expand & collapse)")]),e("w-accordion",{staticClass:"white--bg",attrs:{items:t.items,"expand-icon":"wi-plus","collapse-icon":"wi-minus"}}),e("div",{staticClass:"title4 mt6"},[t._v("No icon")]),e("w-accordion",{staticClass:"white--bg",attrs:{items:t.items,"expand-icon":!1,"title-class":"py2"}}),e("div",{staticClass:"title4 mt6"},[t._v("Icon on the right")]),e("w-accordion",{staticClass:"white--bg",attrs:{items:t.items,"expand-icon-right":""}})],1)],1)},d=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v(`You can expand one or multiple panes by default by providing a v-model array of booleans:
`),e("span",{staticClass:"code"},[t._v("true")]),t._v(" to expand, "),e("span",{staticClass:"code"},[t._v("false")]),t._v(" to collapse the item.")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("Specify which pane should be disabled - expanded or collapsed - by adding the "),e("span",{staticClass:"code"},[t._v("disabled")]),t._v(` property
directly in the object.`)])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("Like in most components, you can set a "),e("code",[t._v("color")]),t._v(" for the text and a "),e("code",[t._v("bg-color")]),t._v(` for the
background.`),e("br"),t._v(`
No background color is set by default and the text color is inherited.`)])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("The colors are set in the data in each item object."),e("br"),t._v(`
the default mapping for the color is the `),e("code",[t._v("color")]),t._v(` key, but you can customize it with the
`),e("code",[t._v("item-color-key")]),t._v(" prop.")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("Customize all the tab items titles and/or content via the single slot "),e("code",[t._v("item-title")]),t._v(`, and/or
all the tab items content via the single slot `),e("code",[t._v("item-content")]),t._v(".")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("No problem, Wave UI's got you covered."),e("br"),t._v(`
If you don't need data objects at all, you can simply define a number of items: `),e("code",[t._v(':items="3"')]),t._v(`.
`)])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("Here is an example of 3 totally diferent pane titles and contents using more lines of code."),e("br"),t._v(`
This time, an array of object is defined to show you can also do a mix of contents coming from the
the component's data or directly in the template.`)])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("With the option "),e("code",[t._v("icon-rotate90")]),t._v(`, the icon will initially point to the left and will
rotate 90 degrees clockwise when expanding.`)])}];const u={data:()=>({items:[{title:"Item 1",content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.",icon:"mdi mdi-home",itemColor:"blue"},{title:"Item 2",content:"Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!",icon:"mdi mdi-github",itemColor:"green"},{title:"Item 3",content:"Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.",icon:"mdi mdi-codepen",itemColor:"orange"}],items2:[{title:"Item 1",content:"content 1",color:"amber"},{title:"Item 2",content:"content 2",color:"warning"},{title:"Item 3",content:"content 3",color:"error"}],itemsDisabled:[{title:"Item 1 - disabled collapsed",content:"Disabled",disabled:!0},{title:"Item 2 - disabled expanded",content:"You can't collapse this pane.",disabled:!0},{title:"Item 3 - fully enabled",content:"You can toggle this pane to expand and collapse."}],itemsCustom:[{id:"item1"},{id:"item2"},{id:"item3"}],accordion1:[],accordion2:[!1,!0,!1],accordion3:[!1,!0,!0],accordion4:[],accordion5:[]})},c={};var p=a(u,m,d,!1,h,null,null,null);function h(t){for(let n in c)this[n]=c[n]}var v=function(){return p.exports}(),f=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"w-divider my12"}),e("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),e("component-api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),e("component-api",{attrs:{items:t.slots,title:"Slots"}}),e("component-api",{attrs:{items:t.events,title:"Events"}})],1)},_=[];const b={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide an array of booleans to dictate the state (expanded and collapsed) of all the accordion items. This value gets updated by the accordion when using a v-model.',color:'Applies a text color on each accordion item. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a background color on each accordion item. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',items:'Expecting an array of objects. Each object being an accordion item, it should include a <code>title</code> and <code>content</code> attributes.<br>Alternatively, you can provide an integer number (call it <em class="code">x</em>), to loop through and create <em class="code">x</em> items in the accordion. You can then use the individual slots <code>item-title.x</code> &amp; <code>item-content.x</code> to define each item title and content.',itemTitleKey:"Specifies the name of the attribute in each item object where to find the item's title string.",itemContentKey:"Specifies the name of the attribute in each item object where to find the item's content string.",itemColorKey:"Specifies the name of the attribute in each item object where to find the item's desired color string. This allows a different color for each accordion item.",itemClass:"Applies a custom CSS class (or space separated classes) on every item container (which includes both the title and the content of the item).",titleClass:"Applies a custom CSS class (or space separated classes) on every title container.",contentClass:"Applies a custom CSS class (or space separated classes) on every content container.",expandIcon:"Specifies the name of the icon to display in the toggle button. If set to false or empty string, the button will be removed.",expandIconRight:"When set to true, the expand button will be placed at the right end of the item's title.",expandIconRotate90:"With this option, the expand icon will initially point to the right, then point down on expand with a clockwise rotation of 90 degrees.",expandIconProps:'An object of props to pass down to the <strong class="code">w-icon</strong> component for more control on the expand icon.<br>Example of use: <code>&lt;w-accordion :items="items" :expand-icon-props="{ flipY: true }"&gt;&lt;/w-accordion&gt;</code>',expandSingle:"Specifies the accordion behavior, whether only one item can be expanded at a time or multiple. When set to true, expanding another item than the one already expanded is still possible, but it will collapse the other expanded item.",collapseIcon:"Provide a different icon than the expand icon, to show when the accordion item is expanded. By default and when empty, there is no collapse icon: the expand icon rotates to show a closing ability.",shadow:"Applies a shadow to the whole accordion container.",duration:"Specify the duration in millisecond of the expand/collapse animation."},g={"item-title":{description:"Provide a custom title for every item. Applies to all the items, but can be overridden by the <code>item-title.x</code> slot.",params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.",expanded:"A boolean representing the expanded state of the accordion item."}},"item-title.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom title for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.",expanded:"A boolean representing the expanded state of the accordion item."}},"item-content":{description:"Provide a custom content for every item. Applies to all the items, but can be overridden by the <code>item-content.x</code> slot.",params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.",expanded:"A boolean representing the expanded state of the accordion item."}},"item-content.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.",expanded:"A boolean representing the expanded state of the accordion item."}}},x={input:{description:"Emitted each time the state of the accordion changes (when an item is expanded or collapsed).<br>Updates the v-model value in Vue 2.x only.",params:{"[Array]":"An array of booleans representing the expanded state of each accordion item."}},"update:modelValue":{description:"Emitted each time the state of the accordion changes (when an item is expanded or collapsed).<br>Updates the v-model value in Vue 3 only.",params:{"[Array]":"An array of booleans representing the expanded state of each accordion item."}},focus:{description:"Emitted on each accordion item title focus.",params:{"[Object]":"The focused accordion item object."}}},y={data:()=>({propsDescs:b,slots:g}),computed:{props(){return s.props},events(){return s.emits.reduce((t,n)=>(t[n]=x[n]||{})&&t,{})}}},r={};var w=a(y,f,_,!1,k,null,null,null);function k(t){for(let n in r)this[n]=r[n]}var C=function(){return w.exports}(),q=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",[e("ui-component-title",[t._v("w-accordion")]),e("examples"),e("api")],1)},I=[];const S={components:{Examples:v,Api:C}},l={};var T=a(S,q,I,!1,E,null,null,null);function E(t){for(let n in l)this[n]=l[n]}var A=function(){return T.exports}();export{A as default};
