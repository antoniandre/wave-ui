import{r as c,o as b,g as f,a as n,w as i,b as e,d as o,t as l,n as C,_ as v,q as y}from"./index-D5hdT684.js";const T={class:"mt3"},S={class:"ml1"},j={class:"mt3"},A={class:"ml1"},E={class:"mt3"},V={class:"ml1"},D={class:"mt3"},P={class:"ml1"},$={class:"ml1"};function U(a,t,w,h,x,u){const r=c("title-link"),s=c("w-accordion"),d=c("example"),g=c("w-button"),p=c("w-icon"),q=c("w-alert"),I=c("w-tag"),k=c("w-list");return b(),f("div",null,[n(r,{h2:""},{default:i(()=>t[7]||(t[7]=[e("Basic")])),_:1}),n(s,{items:a.items},null,8,["items"]),t[87]||(t[87]=o("p",{class:"grey-light2 my4"},`Now that you've seen the default accordion in real context, all the accordions of this page will have a
light blue background in order to help visualize their edges.
`,-1)),n(d,{"content-class":"pa4"},{pug:i(()=>t[9]||(t[9]=[e(`w-accordion(v-model="accordion" :items="items")

div.mt3
  | v-model:
  code.ml1 `+l("{{ accordion }}"))])),html:i(()=>t[10]||(t[10]=[e(`<w-accordion v-model="accordion" :items="items" />

<div class="mt3">
  v-model:
  <code class="ml1">`+l("{{ accordion }}")+`</code>
</div>`)])),js:i(()=>t[11]||(t[11]=[e(`data: () => ({
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
`)])),default:i(()=>[n(s,{class:"discrete--bg",modelValue:a.accordion1,"onUpdate:modelValue":t[0]||(t[0]=m=>a.accordion1=m),items:a.items},null,8,["modelValue","items"]),o("div",T,[t[8]||(t[8]=e("v-model:")),o("code",S,l(a.accordion1),1)])]),_:1}),n(r,{h2:""},{default:i(()=>t[12]||(t[12]=[e("Expanded by default")])),_:1}),t[88]||(t[88]=o("p",null,[e(`You can expand one or multiple panes by default by providing a v-model array of booleans:
`),o("span",{class:"code"},"true"),e(" to expand, "),o("span",{class:"code"},"false"),e(" to collapse the item.")],-1)),n(d,{"content-class":"pa4"},{pug:i(()=>t[14]||(t[14]=[e(`w-accordion(v-model="accordion" :items="items")

div.mt3
  | v-model:
  code.ml1 `+l("{{ accordion }}"))])),html:i(()=>t[15]||(t[15]=[e(`<w-accordion v-model="accordion" :items="items" />

<div class="mt3">
  v-model:
  <code class="ml1">`+l("{{ accordion }}")+`</code>
</div>`)])),js:i(()=>t[16]||(t[16]=[e(`data: () => ({
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
`)])),default:i(()=>[n(s,{class:"discrete--bg",modelValue:a.accordion2,"onUpdate:modelValue":t[1]||(t[1]=m=>a.accordion2=m),items:a.items},null,8,["modelValue","items"]),o("div",j,[t[13]||(t[13]=e("v-model:")),o("code",A,l(a.accordion2),1)])]),_:1}),n(r,{h2:""},{default:i(()=>t[17]||(t[17]=[e("Disabled pane")])),_:1}),t[89]||(t[89]=o("p",null,[e("Specify which pane should be disabled - expanded or collapsed - by adding the "),o("span",{class:"code"},"disabled"),e(` property
directly in the object.`)],-1)),n(d,{"content-class":"pa4"},{pug:i(()=>t[18]||(t[18]=[e('w-accordion(v-model="accordion" :items="items")')])),html:i(()=>t[19]||(t[19]=[e('<w-accordion v-model="accordion" :items="items" />')])),js:i(()=>t[20]||(t[20]=[e(`data: () => ({
  items: [
    { title: 'Item 1 - disabled collapsed', content: 'Disabled', disabled: true },
    { title: 'Item 2 - disabled expanded', content: 'You can\\'t collapse this pane.', disabled: true },
    { title: 'Item 3 - fully enabled', content: 'You can toggle this pane to expand and collapse.' }
  ],
  accordion: [false, true, true]
})
`)])),default:i(()=>[n(s,{class:"discrete--bg",modelValue:a.accordion3,"onUpdate:modelValue":t[2]||(t[2]=m=>a.accordion3=m),items:a.itemsDisabled},null,8,["modelValue","items"])]),_:1}),n(r,{h2:""},{default:i(()=>t[21]||(t[21]=[e("Shadow")])),_:1}),n(d,{"content-class":"pa4"},{pug:i(()=>t[22]||(t[22]=[e('w-accordion(:items="items" shadow)')])),html:i(()=>t[23]||(t[23]=[e('<w-accordion :items="items" shadow />')])),js:i(()=>t[24]||(t[24]=[e(`data: () => ({
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
`)])),default:i(()=>[n(s,{class:"discrete--bg",items:a.items,shadow:""},null,8,["items"])]),_:1}),n(r,{h2:""},{default:i(()=>t[25]||(t[25]=[e("Color & background color")])),_:1}),t[90]||(t[90]=o("p",null,[e("Like in most components, you can set a "),o("code",null,"color"),e(" for the text and a "),o("code",null,"bg-color"),e(` for the
background.`),o("br"),e(`
No background color is set by default and the text color is inherited.`)],-1)),n(d,{"content-class":"pa4"},{pug:i(()=>[e(`w-accordion(:items="items" color="amber-dark1")

w-accordion.mt6(:items="items" bg-color="`+l(a.$store.state.darkMode?"indigo-dark6":"yellow-light5")+'")',1)]),html:i(()=>[e(`<w-accordion :items="items" color="amber-dark1"></w-accordion>

<w-accordion class="mt6" :items="items" bg-color="`+l(a.$store.state.darkMode?"indigo-dark6":"yellow-light5")+'"></w-accordion>',1)]),js:i(()=>t[26]||(t[26]=[e(`data: () => ({
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
`)])),default:i(()=>[n(s,{class:"discrete--bg",items:a.items,color:"amber-dark1"},null,8,["items"]),n(s,{class:"mt6",items:a.items,"bg-color":a.$store.state.darkMode?"indigo-dark6":"yellow-light5"},null,8,["items","bg-color"])]),_:1}),n(r,{h3:""},{default:i(()=>t[27]||(t[27]=[e("Different color per item")])),_:1}),t[91]||(t[91]=o("p",null,[e("The colors are set in the data in each item object."),o("br"),e(`
the default mapping for the color is the `),o("code",null,"color"),e(` key, but you can customize it with the
`),o("code",null,"item-color-key"),e(" prop.")],-1)),n(d,{"content-class":"pa4"},{pug:i(()=>t[28]||(t[28]=[e('w-accordion(:items="items")')])),html:i(()=>t[29]||(t[29]=[e('<w-accordion :items="items" />')])),js:i(()=>t[30]||(t[30]=[e(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1', color: 'amber' },
    { title: 'Item 2', content: 'Content 2', color: 'warning' },
    { title: 'Item 3', content: 'Content 3', color: 'error' }
  ]
})
`)])),default:i(()=>[n(s,{class:"discrete--bg",items:a.items2},null,8,["items"])]),_:1}),n(r,{h2:""},{default:i(()=>t[31]||(t[31]=[e("Expand a single item at a time")])),_:1}),n(d,{"content-class":"pa4"},{pug:i(()=>t[33]||(t[33]=[e(`w-accordion(v-model="accordion" :items="items" expand-single)

div.mt3
  | v-model:
  code.ml1 `+l("{{ accordion }}"))])),html:i(()=>t[34]||(t[34]=[e(`<w-accordion
  v-model="accordion"
  :items="items"
  expand-single>
</w-accordion>

<div class="mt3">
  v-model:
  <code class="ml1">`+l("{{ accordion }}")+`</code>
</div>`)])),js:i(()=>t[35]||(t[35]=[e(`data: () => ({
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
`)])),default:i(()=>[n(s,{class:"discrete--bg",modelValue:a.accordion4,"onUpdate:modelValue":t[3]||(t[3]=m=>a.accordion4=m),items:a.items,"expand-single":""},null,8,["modelValue","items"]),o("div",E,[t[32]||(t[32]=e("v-model:")),o("code",V,l(a.accordion4),1)])]),_:1}),n(r,{h2:""},{default:i(()=>t[36]||(t[36]=[e("External control")])),_:1}),n(d,{"content-class":"pa4"},{pug:i(()=>t[40]||(t[40]=[e(`w-button.mr2(@click="accordion = Array&#40;3&#41;.fill&#40;true&#41;" sm) Expand all
w-button(@click="accordion = Array&#40;3&#41;.fill&#40;false&#41;" sm) Collapse all

w-accordion.mt4(v-model="accordion" :items="items")

div.mt3
  | v-model:
  code.ml1 `+l("{{ accordion }}"))])),html:i(()=>t[41]||(t[41]=[e(`<w-button
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
  <code class="ml1">`+l("{{ accordion }}")+`</code>
</div>`)])),js:i(()=>t[42]||(t[42]=[e(`data: () => ({
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
`)])),default:i(()=>[n(g,{class:"mr2",onClick:t[4]||(t[4]=m=>a.accordion5=Array(3).fill(!0)),sm:""},{default:i(()=>t[37]||(t[37]=[e("Expand all")])),_:1}),n(g,{onClick:t[5]||(t[5]=m=>a.accordion5=Array(3).fill(!1)),sm:""},{default:i(()=>t[38]||(t[38]=[e("Collapse all")])),_:1}),n(s,{class:"mt4 discrete--bg",modelValue:a.accordion5,"onUpdate:modelValue":t[6]||(t[6]=m=>a.accordion5=m),items:a.items},null,8,["modelValue","items"]),o("div",D,[t[39]||(t[39]=e("v-model:")),o("code",P,l(a.accordion5),1)])]),_:1}),n(r,{h2:"",slug:"custom-rendering"},{default:i(()=>t[43]||(t[43]=[e("Custom rendering (via slots)")])),_:1}),t[92]||(t[92]=o("p",null,[e("Customize all the tab items titles and/or content via the single slot "),o("code",null,"item-title"),e(`, and/or
all the tab items content via the single slot `),o("code",null,"item-content"),e(".")],-1)),n(d,{"content-class":"pa4"},{pug:i(()=>t[44]||(t[44]=[e(`w-accordion(:items="items" content-class="pa0")
  template(#item-title="{ item }")
    w-icon(lg :color="item.itemColor") `+l("{{ item.icon }}")+`
    .title3.my0.ml2(:class="item.itemColor") `+l("{{ item.title }}")+`
  template(#item-content="{ item }")
    w-alert.my0.pb3(border-left tile :color="item.itemColor" v-html="item.content")`)])),html:i(()=>t[45]||(t[45]=[e(`<w-accordion :items="items" content-class="pa0">
  <template #item-title="{ item }">
    <w-icon lg :color="item.itemColor">
      `+l("{{ item.icon }}")+`
    </w-icon>
    <div class="title3 ml2" :class="item.itemColor">
      `+l("{{ item.title }}")+`
    </div>
  </template>
  <template #item-content="{ item }") />
    <w-alert
      class="my0 pb3"
      border-left
      tile
      :color="item.itemColor"
      v-html="item.content" />
  </template>`)])),js:i(()=>t[46]||(t[46]=[e(`data: () => ({
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
`)])),default:i(()=>[n(s,{class:"discrete--bg",items:a.items,"content-class":"pa0"},{"item-title":i(({item:m})=>[n(p,{lg:"",color:m.itemColor},{default:i(()=>[e(l(m.icon),1)]),_:2},1032,["color"]),o("div",{class:C(["title3 my0 ml2",m.itemColor])},l(m.title),3)]),"item-content":i(({item:m})=>[n(q,{class:"my0 pb3","border-left":"",tile:"",color:m.itemColor,innerHTML:m.content},null,8,["color","innerHTML"])]),_:1},8,["items"])]),_:1}),n(r,{h2:""},{default:i(()=>t[47]||(t[47]=[e("Do you (really) need even more flexibility?")])),_:1}),t[93]||(t[93]=o("p",null,[e("No problem, Wave UI's got you covered."),o("br"),e(`
If you don't need data objects at all, you can simply define a number of items: `),o("code",null,':items="3"'),e(`.
`)],-1)),n(d,{"content-class":"pa4"},{pug:i(()=>t[54]||(t[54]=[e(`w-accordion(:items="3")
  template(#item-title.1) Item title 1
  template(#item-content.1) Item content 1

  template(#item-title.2) Item title 2
  template(#item-content.2) Item content 2

  template(#item-title.3) Item title 3
  template(#item-content.3) Item content 3`)])),html:i(()=>t[55]||(t[55]=[e(`<w-accordion :items="3">
  <template #item-title.1>Item title 1</template>
  <template #item-content.1>Item content 1</template>

  <template #item-title.2>Item title 2</template>
  <template #item-content.2>Item content 2</template>

  <template #item-title.3>Item title 3</template>
  <template #item-content.3>Item content 3</template>
</w-accordion>
`)])),default:i(()=>[n(s,{class:"discrete--bg",items:3},{"item-title.1":i(()=>t[48]||(t[48]=[e("Item title 1")])),"item-content.1":i(()=>t[49]||(t[49]=[e("Item content 1")])),"item-title.2":i(()=>t[50]||(t[50]=[e("Item title 2")])),"item-content.2":i(()=>t[51]||(t[51]=[e("Item content 2")])),"item-title.3":i(()=>t[52]||(t[52]=[e("Item title 3")])),"item-content.3":i(()=>t[53]||(t[53]=[e("Item content 3")])),_:1})]),_:1}),t[94]||(t[94]=o("p",null,[e("Here is an example of 3 totally diferent pane titles and contents using more lines of code."),o("br"),e(`
This time, an array of object is defined to show you can also do a mix of contents coming from the
the component's data or directly in the template.`)],-1)),n(d,{"content-class":"pa4"},{pug:i(()=>t[69]||(t[69]=[e(`w-accordion(:items="items")
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
      code.ml1 `+l("{{ item }}")+`

  template(#item-title.item3)
    strong This is the 3rd item
    w-icon.ml1(md color="pink") mdi mdi-emoticon-kiss-outline
  template(#item-content.item3)
    p Do you want to check the project on Github?
    w-button.mt1(bg-color="primary" route="https://github.com/antoniandre/wave-ui")
      | Github
      w-icon.ml2(sm) mdi mdi-open-in-new`)])),html:i(()=>t[70]||(t[70]=[e(`<w-accordion :items="items">
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
      <code class="ml1">`+l("{{ item }}")+`</code>
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
</w-accordion>`)])),js:i(()=>t[71]||(t[71]=[e(`data: () => ({
  items: [
    { id: 'item1' },
    { id: 'item2' },
    { id: 'item3' }
  ]
})
`)])),default:i(()=>[n(s,{class:"discrete--bg",items:a.itemsCustom},{"item-title.item1":i(()=>[t[57]||(t[57]=e("This is the 1st item")),n(I,{class:"ml2",color:"red",sm:"",outline:""},{default:i(()=>t[56]||(t[56]=[e("HOT")])),_:1})]),"item-content.item1":i(()=>[t[58]||(t[58]=o("p",null,"This content has a checklist.",-1)),t[59]||(t[59]=o("div",{class:"title4"},"To do",-1)),n(k,{checklist:"",color:"primary",items:[{label:"do this"},{label:"do that next"}]})]),"item-title.item2":i(()=>[n(p,{class:"mr1",md:"",color:"amber"},{default:i(()=>t[60]||(t[60]=[e("mdi mdi-emoticon-excited-outline")])),_:1}),t[61]||(t[61]=o("em",null,"This is the 2nd item",-1))]),"item-content.item2":i(({item:m})=>[t[63]||(t[63]=o("p",null,"The full content here is custom and completely distinct and independent from the other items.",-1)),o("p",null,[t[62]||(t[62]=e("You also have access to the item's data if you need:")),o("code",$,l(m),1)])]),"item-title.item3":i(()=>[t[65]||(t[65]=o("strong",null,"This is the 3rd item",-1)),n(p,{class:"ml1",md:"",color:"pink"},{default:i(()=>t[64]||(t[64]=[e("mdi mdi-emoticon-kiss-outline")])),_:1})]),"item-content.item3":i(()=>[t[68]||(t[68]=o("p",null,"Do you want to check the project on Github?",-1)),n(g,{class:"mt1","bg-color":"primary",route:"https://github.com/antoniandre/wave-ui"},{default:i(()=>[t[67]||(t[67]=e("Github")),n(p,{class:"ml2",sm:""},{default:i(()=>t[66]||(t[66]=[e("mdi mdi-open-in-new")])),_:1})]),_:1})]),_:1},8,["items"])]),_:1}),n(r,{h2:""},{default:i(()=>t[72]||(t[72]=[e("Toggle icon options")])),_:1}),n(r,{h3:""},{default:i(()=>t[73]||(t[73]=[e("Alternative style")])),_:1}),t[95]||(t[95]=o("p",null,[e("With the option "),o("code",null,"icon-rotate90"),e(`, the icon will initially point to the left and will
rotate 90 degrees clockwise when expanding.`)],-1)),n(d,{"content-class":"pa4"},{pug:i(()=>t[74]||(t[74]=[e(`.title4 Icon on the left
w-accordion(:items="items" icon-rotate90)

.title4.mt6 Icon on the right
w-accordion(:items="items" icon-rotate90 expand-icon-right)`)])),html:i(()=>t[75]||(t[75]=[e(`<div class="title4">
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
</w-accordion>`)])),js:i(()=>t[76]||(t[76]=[e(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' }
  ]
})
`)])),default:i(()=>[t[77]||(t[77]=o("div",{class:"title4"},"Icon on the left",-1)),n(s,{class:"discrete--bg",items:a.items,"expand-icon-rotate90":""},null,8,["items"]),t[78]||(t[78]=o("div",{class:"title4 mt6"},"Icon on the right",-1)),n(s,{class:"discrete--bg",items:a.items,"expand-icon-rotate90":"","expand-icon-right":""},null,8,["items"])]),_:1}),n(r,{h3:""},{default:i(()=>t[79]||(t[79]=[e("More options")])),_:1}),n(d,{"content-class":"pa4"},{pug:i(()=>t[80]||(t[80]=[e(`.title4 1 custom icon (only expand)
w-accordion(:items="items" expand-icon="wi-chevron-down")

.title4.mt6 2 custom icons (expand & collapse)
w-accordion(:items="items" expand-icon="wi-plus" collapse-icon="wi-minus")

.title4.mt6 No icon
w-accordion(:items="items" :expand-icon="false" title-class="py2")

.title4.mt6 Icon on the right
w-accordion(:items="items" expand-icon-right)`)])),html:i(()=>t[81]||(t[81]=[e(`<div class="title4 mb2">
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
</w-accordion>`)])),js:i(()=>t[82]||(t[82]=[e(`data: () => ({
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
})`)])),default:i(()=>[t[83]||(t[83]=o("div",{class:"title4"},"One custom icon (only expand)",-1)),n(s,{class:"discrete--bg",items:a.items,"expand-icon":"wi-chevron-down"},null,8,["items"]),t[84]||(t[84]=o("div",{class:"title4 mt6"},"Two custom icons (expand & collapse)",-1)),n(s,{class:"discrete--bg",items:a.items,"expand-icon":"wi-plus","collapse-icon":"wi-minus"},null,8,["items"]),t[85]||(t[85]=o("div",{class:"title4 mt6"},"No icon",-1)),n(s,{class:"discrete--bg",items:a.items,"expand-icon":!1,"title-class":"py2"},null,8,["items"]),t[86]||(t[86]=o("div",{class:"title4 mt6"},"Icon on the right",-1)),n(s,{class:"discrete--bg",items:a.items,"expand-icon-right":""},null,8,["items"])]),_:1})])}const B={data:()=>({items:[{title:"Item 1",content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.",icon:"mdi mdi-home",itemColor:"blue"},{title:"Item 2",content:"Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!",icon:"mdi mdi-github",itemColor:"green"},{title:"Item 3",content:"Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.",icon:"mdi mdi-codepen",itemColor:"orange"}],items2:[{title:"Item 1",content:"content 1",color:"amber"},{title:"Item 2",content:"content 2",color:"warning"},{title:"Item 3",content:"content 3",color:"error"}],itemsDisabled:[{title:"Item 1 - disabled collapsed",content:"Disabled",disabled:!0},{title:"Item 2 - disabled expanded",content:"You can't collapse this pane.",disabled:!0},{title:"Item 3 - fully enabled",content:"You can toggle this pane to expand and collapse."}],itemsCustom:[{id:"item1"},{id:"item2"},{id:"item3"}],accordion1:[],accordion2:[!1,!0,!1],accordion3:[!1,!0,!0],accordion4:[],accordion5:[]})},L=v(B,[["render",U]]);function R(a,t,w,h,x,u){const r=c("title-link"),s=c("component-api");return b(),f("div",null,[t[1]||(t[1]=o("div",{class:"w-divider my12"},null,-1)),n(r,{class:"title1",h2:""},{default:i(()=>t[0]||(t[0]=[e("API")])),_:1}),n(s,{class:"mt0",items:u.props,descriptions:a.propsDescs,title:"Props"},null,8,["items","descriptions"]),n(s,{items:a.slots,title:"Slots"},null,8,["items"]),n(s,{items:u.events,title:"Events"},null,8,["items"])])}const Y={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide an array of booleans to dictate the state (expanded and collapsed) of all the accordion items. This value gets updated by the accordion when using a v-model.',color:'Applies a text color on each accordion item. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a background color on each accordion item. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',items:'Expecting an array of objects. Each object being an accordion item, it should include a <code>title</code> and <code>content</code> attributes.<br>Alternatively, you can provide an integer number (call it <em class="code">x</em>), to loop through and create <em class="code">x</em> items in the accordion. You can then use the individual slots <code>item-title.x</code> &amp; <code>item-content.x</code> to define each item title and content.',itemTitleKey:"Specifies the name of the property in each item object where to find the item's title string.",itemContentKey:"Specifies the name of the property in each item object where to find the item's content string.",itemColorKey:"Specifies the name of the property in each item object where to find the item's desired color string. This allows a different color for each accordion item.",itemClass:"Applies a custom CSS class (or space separated classes) on every item container (which includes both the title and the content of the item).",titleClass:"Applies a custom CSS class (or space separated classes) on every title container.",contentClass:"Applies a custom CSS class (or space separated classes) on every content container.",expandIcon:"Specifies the name of the icon to display in the toggle button. If set to false or empty string, the button will be removed.",expandIconRight:"When set to true, the expand button will be placed at the right end of the item's title.",expandIconRotate90:"With this option, the expand icon will initially point to the right, then point down on expand with a clockwise rotation of 90 degrees.",expandIconProps:'An object of props to pass down to the <strong class="code">w-icon</strong> component for more control on the expand icon.<br>Example of use: <code>&lt;w-accordion :items="items" :expand-icon-props="{ flipY: true }"&gt;&lt;/w-accordion&gt;</code>',expandSingle:"Specifies the accordion behavior, whether only one item can be expanded at a time or multiple. When set to true, expanding another item than the one already expanded is still possible, but it will collapse the other expanded item.",collapseIcon:"Provide a different icon than the expand icon, to show when the accordion item is expanded. By default and when empty, there is no collapse icon: the expand icon rotates to show a closing ability.",shadow:"Applies a shadow to the whole accordion container.",duration:"Specify the duration in millisecond of the expand/collapse animation."},N={"item-title":{description:"Provide a custom title for every item. Applies to all the items, but can be overridden by the <code>item-title.x</code> slot.",params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.",expanded:"A boolean representing the expanded state of the accordion item."}},"item-title.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom title for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.",expanded:"A boolean representing the expanded state of the accordion item."}},"item-content":{description:"Provide a custom content for every item. Applies to all the items, but can be overridden by the <code>item-content.x</code> slot.",params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.",expanded:"A boolean representing the expanded state of the accordion item."}},"item-content.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.",expanded:"A boolean representing the expanded state of the accordion item."}}},Q={input:{description:"Emitted each time the state of the accordion changes (when an item is expanded or collapsed).<br>Updates the v-model value in Vue 2.x only.",params:{"[Array]":"An array of booleans representing the expanded state of each accordion item."}},"update:modelValue":{description:"Emitted each time the state of the accordion changes (when an item is expanded or collapsed).<br>Updates the v-model value in Vue 3 only.",params:{"[Array]":"An array of booleans representing the expanded state of each accordion item."}},focus:{description:"Emitted on each accordion item title focus.",params:{"[Object]":"The focused accordion item object."}}},G={data:()=>({propsDescs:Y,slots:N}),computed:{props(){return y.props},events(){return y.emits.reduce((a,t)=>(a[t]=Q[t]||{})&&a,{})}}},H=v(G,[["render",R]]);function M(a,t,w,h,x,u){const r=c("ui-component-title"),s=c("examples"),d=c("api");return b(),f("main",null,[n(r,null,{default:i(()=>t[0]||(t[0]=[e("w-accordion")])),_:1}),n(s),n(d)])}const W={components:{Examples:L,Api:H}},z=v(W,[["render",M]]);export{z as default};
