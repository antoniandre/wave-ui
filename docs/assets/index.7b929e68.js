import{r,o as b,e as _,f as i,w as t,g as o,t as l,i as e,A as k}from"./vendor.e64646cc.js";import{_ as g,W as x}from"./index.f3654a4f.js";const C=e("Basic"),T=o("p",{class:"grey-light2 my4"},`Now that you've seen the default accordion in real context, all the examples of this page will have a
light blue background and accordions a white background to help visualize where they end.
`,-1),S={class:"mt3"},j=e("v-model:"),A={class:"ml1"},E=e(`w-accordion(v-model="accordion" :items="items")

div.mt3
  | v-model:
  code.ml1 `+l("{{ accordion }}")),D=e(`<w-accordion v-model="accordion" :items="items" />

<div class="mt3">
  v-model:
  <code class="ml1">`+l("{{ accordion }}")+`</code>
</div>`),V=e(`data: () => ({
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
`),P=e("Expanded by default"),$=o("p",null,[e(`You can expand one or multiple panes by default by providing a v-model array of booleans:
`),o("span",{class:"code"},"true"),e(" to expand, "),o("span",{class:"code"},"false"),e(" to collapse the item.")],-1),U={class:"mt3"},B=e("v-model:"),L={class:"ml1"},R=e(`w-accordion(v-model="accordion" :items="items")

div.mt3
  | v-model:
  code.ml1 `+l("{{ accordion }}")),N=e(`<w-accordion v-model="accordion" :items="items" />

<div class="mt3">
  v-model:
  <code class="ml1">`+l("{{ accordion }}")+`</code>
</div>`),Q=e(`data: () => ({
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
`),Y=e("Disabled pane"),G=o("p",null,[e("Specify which pane should be disabled - expanded or collapsed - by adding the "),o("span",{class:"code"},"disabled"),e(` property
directly in the object.`)],-1),H=e('w-accordion(v-model="accordion" :items="items")'),W=e('<w-accordion v-model="accordion" :items="items" />'),z=e(`data: () => ({
  items: [
    { title: 'Item 1 - disabled collapsed', content: 'Disabled', disabled: true },
    { title: 'Item 2 - disabled expanded', content: 'You can\\'t collapse this pane.', disabled: true },
    { title: 'Item 3 - fully enabled', content: 'You can toggle this pane to expand and collapse.' }
  ],
  accordion: [false, true, true]
})
`),O=e("Shadow"),K=e('w-accordion(:items="items" shadow)'),M=e('<w-accordion :items="items" shadow />'),F=e(`data: () => ({
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
`),J=e("Color & background color"),X=o("p",null,[e("Like in most components, you can set a "),o("code",null,"color"),e(" for the text and a "),o("code",null,"bg-color"),e(` for the
background.`),o("br"),e(`
No background color is set by default and the text color is inherited.`)],-1),Z=e(`w-accordion(:items="items" color="amber-dark1")

w-accordion.mt6(:items="items" bg-color="yellow-light5")`),ee=e(`<w-accordion :items="items" color="amber-dark1"></w-accordion>

<w-accordion class="mt6" :items="items" bg-color="yellow-light5"></w-accordion>`),te=e(`data: () => ({
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
`),ie=e("Different color per item"),oe=o("p",null,[e("The colors are set in the data in each item object."),o("br"),e(`
the default mapping for the color is the `),o("code",null,"color"),e(` key, but you can customize it with the
`),o("code",null,"item-color-key"),e(" prop.")],-1),ne=e('w-accordion(:items="items")'),ae=e('<w-accordion :items="items" />'),se=e(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1', color: 'amber' },
    { title: 'Item 2', content: 'Content 2', color: 'warning' },
    { title: 'Item 3', content: 'Content 3', color: 'error' }
  ]
})
`),le=e("Expand a single item at a time"),ce={class:"mt3"},me=e("v-model:"),de={class:"ml1"},re=e(`w-accordion(v-model="accordion" :items="items" expand-single)

div.mt3
  | v-model:
  code.ml1 `+l("{{ accordion }}")),ue=e(`<w-accordion
  v-model="accordion"
  :items="items"
  expand-single>
</w-accordion>

<div class="mt3">
  v-model:
  <code class="ml1">`+l("{{ accordion }}")+`</code>
</div>`),pe=e(`data: () => ({
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
`),he=e("External control"),be=e("Expand all"),_e=e("Collapse all"),ge={class:"mt3"},fe=e("v-model:"),ve={class:"ml1"},we=e(`w-button.mr2(@click="accordion = Array&#40;3&#41;.fill&#40;true&#41;" sm) Expand all
w-button(@click="accordion = Array&#40;3&#41;.fill&#40;false&#41;" sm) Collapse all

w-accordion.mt4(v-model="accordion" :items="items")

div.mt3
  | v-model:
  code.ml1 `+l("{{ accordion }}")),xe=e(`<w-button
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
</div>`),ye=e(`data: () => ({
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
`),qe=e("Custom rendering (via slots)"),Ie=o("p",null,[e("Customize all the tab items titles and/or content via the single slot "),o("code",null,"item-title"),e(`, and/or
all the tab items content via the single slot `),o("code",null,"item-content"),e(".")],-1),ke=e(`data: () => ({
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
`),Ce=e("Do you (really) need even more flexibility?"),Te=o("p",null,[e("No problem, Wave UI's got you covered."),o("br"),e(`
If you don't need data objects at all, you can simply define a number of items: `),o("code",null,':items="3"'),e(`.
`)],-1),Se=e("Item title 1"),je=e("Item content 1"),Ae=e("Item title 2"),Ee=e("Item content 2"),De=e("Item title 3"),Ve=e("Item content 3"),Pe=e(`w-accordion(:items="3")
  template(#item-title.1) Item title 1
  template(#item-content.1) Item content 1

  template(#item-title.2) Item title 2
  template(#item-content.2) Item content 2

  template(#item-title.3) Item title 3
  template(#item-content.3) Item content 3`),$e=e(`<w-accordion :items="3">
  <template #item-title.1>Item title 1</template>
  <template #item-content.1>Item content 1</template>

  <template #item-title.2>Item title 2</template>
  <template #item-content.2>Item content 2</template>

  <template #item-title.3>Item title 3</template>
  <template #item-content.3>Item content 3</template>
</w-accordion>
`),Ue=o("p",null,[e("Here is an example of 3 totally diferent pane titles and contents using more lines of code."),o("br"),e(`
This time, an array of object is defined to show you can also do a mix of contents coming from the
the component's data or directly in the template.`)],-1),Be=e("This is the 1st item"),Le=e("HOT"),Re=o("p",null,"This content has a checklist.",-1),Ne=o("div",{class:"title4"},"To do",-1),Qe=e("mdi mdi-emoticon-excited-outline"),Ye=o("em",null,"This is the 2nd item",-1),Ge=o("p",null,"The full content here is custom and completely distinct and independent from the other items.",-1),He=e("You also have access to the item's data if you need:"),We={class:"ml1"},ze=o("strong",null,"This is the 3rd item",-1),Oe=e("mdi mdi-emoticon-kiss-outline"),Ke=o("p",null,"Do you want to check the project on Github?",-1),Me=e("Github"),Fe=e("mdi mdi-open-in-new"),Je=e(`w-accordion(:items="items")
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
      w-icon.ml2(sm) mdi mdi-open-in-new`),Xe=e(`<w-accordion :items="items">
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
</w-accordion>`),Ze=e(`data: () => ({
  items: [
    { id: 'item1' },
    { id: 'item2' },
    { id: 'item3' }
  ]
})
`),et=e("Toggle icon options"),tt=o("div",{class:"title4"},"1 custom icon (only expand)",-1),it=o("div",{class:"title4 mt6"},"2 custom icons (expand & collapse)",-1),ot=o("div",{class:"title4 mt6"},"No icon",-1),nt=o("div",{class:"title4 mt6"},"Icon on the right",-1),at=e(`.title4 1 custom icon (only expand)
w-accordion(:items="items" expand-icon="wi-chevron-down")

.title4.mt6 2 custom icons (expand & collapse)
w-accordion(:items="items" expand-icon="wi-plus" collapse-icon="wi-minus")

.title4.mt6 No icon
w-accordion(:items="items" :expand-icon="false" title-class="py2")

.title4.mt6 Icon on the right
w-accordion(:items="items" expand-icon-right)`),st=e(`<div class="title4 mb2">
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
</w-accordion>`),lt=e(`data: () => ({
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
})`);function ct(n,c,f,v,w,u){const m=r("title-link"),a=r("w-accordion"),d=r("example"),h=r("w-button"),p=r("w-icon"),y=r("w-alert"),q=r("w-tag"),I=r("w-list");return b(),_("div",null,[i(m,{h2:""},{default:t(()=>[C]),_:1}),i(a,{class:"white--bg",items:n.items},null,8,["items"]),T,i(d,{"content-class":"pa4 aliceblue"},{pug:t(()=>[E]),html:t(()=>[D]),js:t(()=>[V]),default:t(()=>[i(a,{class:"white--bg",modelValue:n.accordion1,"onUpdate:modelValue":c[0]||(c[0]=s=>n.accordion1=s),items:n.items},null,8,["modelValue","items"]),o("div",S,[j,o("code",A,l(n.accordion1),1)])]),_:1}),i(m,{h2:""},{default:t(()=>[P]),_:1}),$,i(d,{"content-class":"pa4 aliceblue"},{pug:t(()=>[R]),html:t(()=>[N]),js:t(()=>[Q]),default:t(()=>[i(a,{class:"white--bg",modelValue:n.accordion2,"onUpdate:modelValue":c[1]||(c[1]=s=>n.accordion2=s),items:n.items},null,8,["modelValue","items"]),o("div",U,[B,o("code",L,l(n.accordion2),1)])]),_:1}),i(m,{h2:""},{default:t(()=>[Y]),_:1}),G,i(d,{"content-class":"pa4 aliceblue"},{pug:t(()=>[H]),html:t(()=>[W]),js:t(()=>[z]),default:t(()=>[i(a,{class:"white--bg",modelValue:n.accordion3,"onUpdate:modelValue":c[2]||(c[2]=s=>n.accordion3=s),items:n.itemsDisabled},null,8,["modelValue","items"])]),_:1}),i(m,{h2:""},{default:t(()=>[O]),_:1}),i(d,{"content-class":"pa4 aliceblue"},{pug:t(()=>[K]),html:t(()=>[M]),js:t(()=>[F]),default:t(()=>[i(a,{class:"white--bg",items:n.items,shadow:""},null,8,["items"])]),_:1}),i(m,{h2:""},{default:t(()=>[J]),_:1}),X,i(d,{"content-class":"pa4 aliceblue"},{pug:t(()=>[Z]),html:t(()=>[ee]),js:t(()=>[te]),default:t(()=>[i(a,{class:"white--bg",items:n.items,color:"amber-dark1"},null,8,["items"]),i(a,{class:"mt6",items:n.items,"bg-color":"yellow-light5"},null,8,["items"])]),_:1}),i(m,{h3:""},{default:t(()=>[ie]),_:1}),oe,i(d,{"content-class":"pa4 aliceblue"},{pug:t(()=>[ne]),html:t(()=>[ae]),js:t(()=>[se]),default:t(()=>[i(a,{class:"white--bg",items:n.items2},null,8,["items"])]),_:1}),i(m,{h2:""},{default:t(()=>[le]),_:1}),i(d,{"content-class":"pa4 aliceblue"},{pug:t(()=>[re]),html:t(()=>[ue]),js:t(()=>[pe]),default:t(()=>[i(a,{class:"white--bg",modelValue:n.accordion4,"onUpdate:modelValue":c[3]||(c[3]=s=>n.accordion4=s),items:n.items,"expand-single":""},null,8,["modelValue","items"]),o("div",ce,[me,o("code",de,l(n.accordion4),1)])]),_:1}),i(m,{h2:""},{default:t(()=>[he]),_:1}),i(d,{"content-class":"pa4 aliceblue"},{pug:t(()=>[we]),html:t(()=>[xe]),js:t(()=>[ye]),default:t(()=>[i(h,{class:"mr2",onClick:c[4]||(c[4]=s=>n.accordion5=Array(3).fill(!0)),sm:""},{default:t(()=>[be]),_:1}),i(h,{onClick:c[5]||(c[5]=s=>n.accordion5=Array(3).fill(!1)),sm:""},{default:t(()=>[_e]),_:1}),i(a,{class:"mt4 white--bg",modelValue:n.accordion5,"onUpdate:modelValue":c[6]||(c[6]=s=>n.accordion5=s),items:n.items},null,8,["modelValue","items"]),o("div",ge,[fe,o("code",ve,l(n.accordion5),1)])]),_:1}),i(m,{h2:"",slug:"custom-rendering"},{default:t(()=>[qe]),_:1}),Ie,i(d,{"content-class":"pa4 aliceblue"},{pug:t(()=>[e(`w-accordion(:items="items" content-class="pa0")
  template(#item-title="{ item }")
    w-icon(lg :color="item.itemColor") `+l("{{ item.icon }}")+`
    .title3.my0.ml2(:class="item.itemColor") `+l("{{ item.title }}")+`
  template(#item-content="{ item }")
    w-alert.my0.pb3(border-left tile :color="item.itemColor" v-html="item.content")`,1)]),html:t(()=>[e(`<w-accordion :items="items" content-class="pa0">
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
  </template>`,1)]),js:t(()=>[ke]),default:t(()=>[i(a,{class:"white--bg",items:n.items,"content-class":"pa0"},{"item-title":t(({item:s})=>[i(p,{lg:"",color:s.itemColor},{default:t(()=>[e(l(s.icon),1)]),_:2},1032,["color"]),o("div",{class:k(["title3 my0 ml2",s.itemColor])},l(s.title),3)]),"item-content":t(({item:s})=>[i(y,{class:"my0 pb3","border-left":"",tile:"",color:s.itemColor,innerHTML:s.content},null,8,["color","innerHTML"])]),_:1},8,["items"])]),_:1}),i(m,{h2:""},{default:t(()=>[Ce]),_:1}),Te,i(d,{"content-class":"pa4 aliceblue"},{pug:t(()=>[Pe]),html:t(()=>[$e]),default:t(()=>[i(a,{class:"white--bg",items:3},{"item-title.1":t(()=>[Se]),"item-content.1":t(()=>[je]),"item-title.2":t(()=>[Ae]),"item-content.2":t(()=>[Ee]),"item-title.3":t(()=>[De]),"item-content.3":t(()=>[Ve]),_:1})]),_:1}),Ue,i(d,{"content-class":"pa4 aliceblue"},{pug:t(()=>[Je]),html:t(()=>[Xe]),js:t(()=>[Ze]),default:t(()=>[i(a,{class:"white--bg",items:n.itemsCustom},{"item-title.item1":t(()=>[Be,i(q,{class:"ml2",color:"red",sm:"",outline:""},{default:t(()=>[Le]),_:1})]),"item-content.item1":t(()=>[Re,Ne,i(I,{checklist:"",color:"primary",items:[{label:"do this"},{label:"do that next"}]})]),"item-title.item2":t(()=>[i(p,{class:"mr1",md:"",color:"amber"},{default:t(()=>[Qe]),_:1}),Ye]),"item-content.item2":t(({item:s})=>[Ge,o("p",null,[He,o("code",We,l(s),1)])]),"item-title.item3":t(()=>[ze,i(p,{class:"ml1",md:"",color:"pink"},{default:t(()=>[Oe]),_:1})]),"item-content.item3":t(()=>[Ke,i(h,{class:"mt1","bg-color":"primary",route:"https://github.com/antoniandre/wave-ui"},{default:t(()=>[Me,i(p,{class:"ml2",sm:""},{default:t(()=>[Fe]),_:1})]),_:1})]),_:1},8,["items"])]),_:1}),i(m,{h2:""},{default:t(()=>[et]),_:1}),i(d,{"content-class":"pa4 aliceblue"},{pug:t(()=>[at]),html:t(()=>[st]),js:t(()=>[lt]),default:t(()=>[tt,i(a,{class:"white--bg",items:n.items,"expand-icon":"wi-chevron-down"},null,8,["items"]),it,i(a,{class:"white--bg",items:n.items,"expand-icon":"wi-plus","collapse-icon":"wi-minus"},null,8,["items"]),ot,i(a,{class:"white--bg",items:n.items,"expand-icon":!1,"title-class":"py2"},null,8,["items"]),nt,i(a,{class:"white--bg",items:n.items,"expand-icon-right":""},null,8,["items"])]),_:1})])}const mt={data:()=>({items:[{title:"Item 1",content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.",icon:"mdi mdi-home",itemColor:"blue"},{title:"Item 2",content:"Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!",icon:"mdi mdi-github",itemColor:"green"},{title:"Item 3",content:"Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.",icon:"mdi mdi-codepen",itemColor:"orange"}],items2:[{title:"Item 1",content:"content 1",color:"amber"},{title:"Item 2",content:"content 2",color:"warning"},{title:"Item 3",content:"content 3",color:"error"}],itemsDisabled:[{title:"Item 1 - disabled collapsed",content:"Disabled",disabled:!0},{title:"Item 2 - disabled expanded",content:"You can't collapse this pane.",disabled:!0},{title:"Item 3 - fully enabled",content:"You can toggle this pane to expand and collapse."}],itemsCustom:[{id:"item1"},{id:"item2"},{id:"item3"}],accordion1:[],accordion2:[!1,!0,!1],accordion3:[!1,!0,!0],accordion4:[],accordion5:[]})};var dt=g(mt,[["render",ct]]);const rt=o("div",{class:"w-divider my12"},null,-1),ut=e("API");function pt(n,c,f,v,w,u){const m=r("title-link"),a=r("component-api");return b(),_("div",null,[rt,i(m,{class:"title1",h2:""},{default:t(()=>[ut]),_:1}),i(a,{class:"mt0",items:u.props,descriptions:n.propsDescs,title:"Props"},null,8,["items","descriptions"]),i(a,{items:n.slots,title:"Slots"},null,8,["items"]),i(a,{items:u.events,title:"Events"},null,8,["items"])])}const ht={modelValue:"Provide an array of booleans to dictate the state (expanded and collapsed) of all the accordion items. This value gets updated by the accordion when using a v-model.",color:'Applies a text color on each accordion item. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a background color on each accordion item. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',items:'Expecting an array of objects. Each object being an accordion item, it should include a <code>title</code> and <code>content</code> attributes.<br>Alternatively, you can provide an integer number (call it <em class="code">x</em>), to loop through and create <em class="code">x</em> items in the accordion. You can then use the individual slots <code>item-title.x</code> &amp; <code>item-content.x</code> to define each item title and content.',itemTitleKey:"Specifies the name of the attribute in each item object where to find the item's title string.",itemContentKey:"Specifies the name of the attribute in each item object where to find the item's content string.",itemColorKey:"Specifies the name of the attribute in each item object where to find the item's desired color string. This allows a different color for each accordion item.",itemClass:"Applies a custom CSS class (or space separated classes) on every item container (which includes both the title and the content of the item).",titleClass:"Applies a custom CSS class (or space separated classes) on every title container.",contentClass:"Applies a custom CSS class (or space separated classes) on every content container.",expandIcon:"Specifies the name of the icon to display in the toggle button. If set to false or empty string, the button will be removed.",expandIconRight:"When set to true, the expand button will be placed at the right end of the item's title.",expandSingle:"Specifies the accordion behavior, whether only one item can be expanded at a time or multiple. When set to true, expanding another item than the one already expanded is still possible, but it will collapse the other expanded item.",collapseIcon:"Provide a different icon than the expand icon, to show when the accordion item is expanded. By default and when empty, there is no collapse icon: the expand icon rotates to show a closing ability.",shadow:"Applies a shadow to the whole accordion container."},bt={"item-title":{description:"Provide a custom title for every item. Applies to all the items, but can be overridden by the <code>item-title.x</code> slot.",params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.",expanded:"A boolean representing the expanded state of the accordion item."}},"item-title.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom title for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.",expanded:"A boolean representing the expanded state of the accordion item."}},"item-content":{description:"Provide a custom content for every item. Applies to all the items, but can be overridden by the <code>item-content.x</code> slot.",params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.",expanded:"A boolean representing the expanded state of the accordion item."}},"item-content.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.",expanded:"A boolean representing the expanded state of the accordion item."}}},_t={input:{description:"Emitted each time the state of the accordion changes (when an item is expanded or collapsed).<br>Updates the v-model value in Vue 2.x only.",params:{"[Array]":"An array of booleans representing the expanded state of each accordion item."}},"update:modelValue":{description:"Emitted each time the state of the accordion changes (when an item is expanded or collapsed).<br>Updates the v-model value in Vue 3 only.",params:{"[Array]":"An array of booleans representing the expanded state of each accordion item."}},focus:{description:"Emitted on each accordion item title focus.",params:{"[Object]":"The focused accordion item object."}}},gt={data:()=>({propsDescs:ht,slots:bt}),computed:{props(){return x.props},events(){return x.emits.reduce((n,c)=>(n[c]=_t[c]||{})&&n,{})}}};var ft=g(gt,[["render",pt]]);const vt=e("w-accordion");function wt(n,c,f,v,w,u){const m=r("ui-component-title"),a=r("examples"),d=r("api");return b(),_("main",null,[i(m,null,{default:t(()=>[vt]),_:1}),i(a),i(d)])}const xt={components:{Examples:dt,Api:ft}};var It=g(xt,[["render",wt]]);export{It as default};
