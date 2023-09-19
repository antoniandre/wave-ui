import{r,o as g,g as b,a as i,w as t,b as e,t as s,d as n,n as k,_ as f,q as _}from"./index.bf2cfd71.js";const C=n("p",{class:"grey-light2 my4"},`Now that you've seen the default accordion in real context, all the examples of this page will have a
light blue background and accordions a white background to help visualize where they end.
`,-1),T={class:"mt3"},S={class:"ml1"},j=n("p",null,[e(`You can expand one or multiple panes by default by providing a v-model array of booleans:
`),n("span",{class:"code"},"true"),e(" to expand, "),n("span",{class:"code"},"false"),e(" to collapse the item.")],-1),A={class:"mt3"},E={class:"ml1"},V=n("p",null,[e("Specify which pane should be disabled - expanded or collapsed - by adding the "),n("span",{class:"code"},"disabled"),e(` property
directly in the object.`)],-1),D=n("p",null,[e("Like in most components, you can set a "),n("code",null,"color"),e(" for the text and a "),n("code",null,"bg-color"),e(` for the
background.`),n("br"),e(`
No background color is set by default and the text color is inherited.`)],-1),P=n("p",null,[e("The colors are set in the data in each item object."),n("br"),e(`
the default mapping for the color is the `),n("code",null,"color"),e(` key, but you can customize it with the
`),n("code",null,"item-color-key"),e(" prop.")],-1),$={class:"mt3"},U={class:"ml1"},B={class:"mt3"},L={class:"ml1"},R=n("p",null,[e("Customize all the tab items titles and/or content via the single slot "),n("code",null,"item-title"),e(`, and/or
all the tab items content via the single slot `),n("code",null,"item-content"),e(".")],-1),Y=n("p",null,[e("No problem, Wave UI's got you covered."),n("br"),e(`
If you don't need data objects at all, you can simply define a number of items: `),n("code",null,':items="3"'),e(`.
`)],-1),N=n("p",null,[e("Here is an example of 3 totally diferent pane titles and contents using more lines of code."),n("br"),e(`
This time, an array of object is defined to show you can also do a mix of contents coming from the
the component's data or directly in the template.`)],-1),Q=n("p",null,"This content has a checklist.",-1),G=n("div",{class:"title4"},"To do",-1),H=n("em",null,"This is the 2nd item",-1),M=n("p",null,"The full content here is custom and completely distinct and independent from the other items.",-1),W={class:"ml1"},O=n("strong",null,"This is the 3rd item",-1),z=n("p",null,"Do you want to check the project on Github?",-1),K=n("p",null,[e("With the option "),n("code",null,"icon-rotate90"),e(`, the icon will initially point to the left and will
rotate 90 degrees clockwise when expanding.`)],-1),F=n("div",{class:"title4"},"Icon on the left",-1),J=n("div",{class:"title4 mt6"},"Icon on the right",-1),X=n("div",{class:"title4"},"One custom icon (only expand)",-1),Z=n("div",{class:"title4 mt6"},"Two custom icons (expand & collapse)",-1),ee=n("div",{class:"title4 mt6"},"No icon",-1),te=n("div",{class:"title4 mt6"},"Icon on the right",-1);function ie(o,c,v,w,x,u){const m=r("title-link"),a=r("w-accordion"),d=r("example"),h=r("w-button"),p=r("w-icon"),y=r("w-alert"),q=r("w-tag"),I=r("w-list");return g(),b("div",null,[i(m,{h2:""},{default:t(()=>[e("Basic")]),_:1}),i(a,{items:o.items},null,8,["items"]),C,i(d,{"content-class":"pa4"},{pug:t(()=>[e(`w-accordion(v-model="accordion" :items="items")

div.mt3
  | v-model:
  code.ml1 `+s("{{ accordion }}"))]),html:t(()=>[e(`<w-accordion v-model="accordion" :items="items" />

<div class="mt3">
  v-model:
  <code class="ml1">`+s("{{ accordion }}")+`</code>
</div>`)]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[i(a,{class:"discrete--bg",modelValue:o.accordion1,"onUpdate:modelValue":c[0]||(c[0]=l=>o.accordion1=l),items:o.items},null,8,["modelValue","items"]),n("div",T,[e("v-model:"),n("code",S,s(o.accordion1),1)])]),_:1}),i(m,{h2:""},{default:t(()=>[e("Expanded by default")]),_:1}),j,i(d,{"content-class":"pa4"},{pug:t(()=>[e(`w-accordion(v-model="accordion" :items="items")

div.mt3
  | v-model:
  code.ml1 `+s("{{ accordion }}"))]),html:t(()=>[e(`<w-accordion v-model="accordion" :items="items" />

<div class="mt3">
  v-model:
  <code class="ml1">`+s("{{ accordion }}")+`</code>
</div>`)]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[i(a,{class:"discrete--bg",modelValue:o.accordion2,"onUpdate:modelValue":c[1]||(c[1]=l=>o.accordion2=l),items:o.items},null,8,["modelValue","items"]),n("div",A,[e("v-model:"),n("code",E,s(o.accordion2),1)])]),_:1}),i(m,{h2:""},{default:t(()=>[e("Disabled pane")]),_:1}),V,i(d,{"content-class":"pa4"},{pug:t(()=>[e('w-accordion(v-model="accordion" :items="items")')]),html:t(()=>[e('<w-accordion v-model="accordion" :items="items" />')]),js:t(()=>[e(`data: () => ({
  items: [
    { title: 'Item 1 - disabled collapsed', content: 'Disabled', disabled: true },
    { title: 'Item 2 - disabled expanded', content: 'You can\\'t collapse this pane.', disabled: true },
    { title: 'Item 3 - fully enabled', content: 'You can toggle this pane to expand and collapse.' }
  ],
  accordion: [false, true, true]
})
`)]),default:t(()=>[i(a,{class:"discrete--bg",modelValue:o.accordion3,"onUpdate:modelValue":c[2]||(c[2]=l=>o.accordion3=l),items:o.itemsDisabled},null,8,["modelValue","items"])]),_:1}),i(m,{h2:""},{default:t(()=>[e("Shadow")]),_:1}),i(d,{"content-class":"pa4"},{pug:t(()=>[e('w-accordion(:items="items" shadow)')]),html:t(()=>[e('<w-accordion :items="items" shadow />')]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[i(a,{class:"discrete--bg",items:o.items,shadow:""},null,8,["items"])]),_:1}),i(m,{h2:""},{default:t(()=>[e("Color & background color")]),_:1}),D,i(d,{"content-class":"pa4"},{pug:t(()=>[e(`w-accordion(:items="items" color="amber-dark1")

w-accordion.mt6(:items="items" bg-color="`+s(o.$store.state.darkMode?"indigo-dark6":"yellow-light5")+'")',1)]),html:t(()=>[e(`<w-accordion :items="items" color="amber-dark1"></w-accordion>

<w-accordion class="mt6" :items="items" bg-color="`+s(o.$store.state.darkMode?"indigo-dark6":"yellow-light5")+'"></w-accordion>',1)]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[i(a,{class:"discrete--bg",items:o.items,color:"amber-dark1"},null,8,["items"]),i(a,{class:"mt6",items:o.items,"bg-color":o.$store.state.darkMode?"indigo-dark6":"yellow-light5"},null,8,["items","bg-color"])]),_:1}),i(m,{h3:""},{default:t(()=>[e("Different color per item")]),_:1}),P,i(d,{"content-class":"pa4"},{pug:t(()=>[e('w-accordion(:items="items")')]),html:t(()=>[e('<w-accordion :items="items" />')]),js:t(()=>[e(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1', color: 'amber' },
    { title: 'Item 2', content: 'Content 2', color: 'warning' },
    { title: 'Item 3', content: 'Content 3', color: 'error' }
  ]
})
`)]),default:t(()=>[i(a,{class:"discrete--bg",items:o.items2},null,8,["items"])]),_:1}),i(m,{h2:""},{default:t(()=>[e("Expand a single item at a time")]),_:1}),i(d,{"content-class":"pa4"},{pug:t(()=>[e(`w-accordion(v-model="accordion" :items="items" expand-single)

div.mt3
  | v-model:
  code.ml1 `+s("{{ accordion }}"))]),html:t(()=>[e(`<w-accordion
  v-model="accordion"
  :items="items"
  expand-single>
</w-accordion>

<div class="mt3">
  v-model:
  <code class="ml1">`+s("{{ accordion }}")+`</code>
</div>`)]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[i(a,{class:"discrete--bg",modelValue:o.accordion4,"onUpdate:modelValue":c[3]||(c[3]=l=>o.accordion4=l),items:o.items,"expand-single":""},null,8,["modelValue","items"]),n("div",$,[e("v-model:"),n("code",U,s(o.accordion4),1)])]),_:1}),i(m,{h2:""},{default:t(()=>[e("External control")]),_:1}),i(d,{"content-class":"pa4"},{pug:t(()=>[e(`w-button.mr2(@click="accordion = Array&#40;3&#41;.fill&#40;true&#41;" sm) Expand all
w-button(@click="accordion = Array&#40;3&#41;.fill&#40;false&#41;" sm) Collapse all

w-accordion.mt4(v-model="accordion" :items="items")

div.mt3
  | v-model:
  code.ml1 `+s("{{ accordion }}"))]),html:t(()=>[e(`<w-button
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
  <code class="ml1">`+s("{{ accordion }}")+`</code>
</div>`)]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[i(h,{class:"mr2",onClick:c[4]||(c[4]=l=>o.accordion5=Array(3).fill(!0)),sm:""},{default:t(()=>[e("Expand all")]),_:1}),i(h,{onClick:c[5]||(c[5]=l=>o.accordion5=Array(3).fill(!1)),sm:""},{default:t(()=>[e("Collapse all")]),_:1}),i(a,{class:"mt4 discrete--bg",modelValue:o.accordion5,"onUpdate:modelValue":c[6]||(c[6]=l=>o.accordion5=l),items:o.items},null,8,["modelValue","items"]),n("div",B,[e("v-model:"),n("code",L,s(o.accordion5),1)])]),_:1}),i(m,{h2:"",slug:"custom-rendering"},{default:t(()=>[e("Custom rendering (via slots)")]),_:1}),R,i(d,{"content-class":"pa4"},{pug:t(()=>[e(`w-accordion(:items="items" content-class="pa0")
  template(#item-title="{ item }")
    w-icon(lg :color="item.itemColor") `+s("{{ item.icon }}")+`
    .title3.my0.ml2(:class="item.itemColor") `+s("{{ item.title }}")+`
  template(#item-content="{ item }")
    w-alert.my0.pb3(border-left tile :color="item.itemColor" v-html="item.content")`,1)]),html:t(()=>[e(`<w-accordion :items="items" content-class="pa0">
  <template #item-title="{ item }">
    <w-icon lg :color="item.itemColor">
      `+s("{{ item.icon }}")+`
    </w-icon>
    <div class="title3 ml2" :class="item.itemColor">
      `+s("{{ item.title }}")+`
    </div>
  </template>
  <template #item-content="{ item }") />
    <w-alert
      class="my0 pb3"
      border-left
      tile
      :color="item.itemColor"
      v-html="item.content" />
  </template>`,1)]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[i(a,{class:"discrete--bg",items:o.items,"content-class":"pa0"},{"item-title":t(({item:l})=>[i(p,{lg:"",color:l.itemColor},{default:t(()=>[e(s(l.icon),1)]),_:2},1032,["color"]),n("div",{class:k(["title3 my0 ml2",l.itemColor])},s(l.title),3)]),"item-content":t(({item:l})=>[i(y,{class:"my0 pb3","border-left":"",tile:"",color:l.itemColor,innerHTML:l.content},null,8,["color","innerHTML"])]),_:1},8,["items"])]),_:1}),i(m,{h2:""},{default:t(()=>[e("Do you (really) need even more flexibility?")]),_:1}),Y,i(d,{"content-class":"pa4"},{pug:t(()=>[e(`w-accordion(:items="3")
  template(#item-title.1) Item title 1
  template(#item-content.1) Item content 1

  template(#item-title.2) Item title 2
  template(#item-content.2) Item content 2

  template(#item-title.3) Item title 3
  template(#item-content.3) Item content 3`)]),html:t(()=>[e(`<w-accordion :items="3">
  <template #item-title.1>Item title 1</template>
  <template #item-content.1>Item content 1</template>

  <template #item-title.2>Item title 2</template>
  <template #item-content.2>Item content 2</template>

  <template #item-title.3>Item title 3</template>
  <template #item-content.3>Item content 3</template>
</w-accordion>
`)]),default:t(()=>[i(a,{class:"discrete--bg",items:3},{"item-title.1":t(()=>[e("Item title 1")]),"item-content.1":t(()=>[e("Item content 1")]),"item-title.2":t(()=>[e("Item title 2")]),"item-content.2":t(()=>[e("Item content 2")]),"item-title.3":t(()=>[e("Item title 3")]),"item-content.3":t(()=>[e("Item content 3")]),_:1})]),_:1}),N,i(d,{"content-class":"pa4"},{pug:t(()=>[e(`w-accordion(:items="items")
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
      code.ml1 `+s("{{ item }}")+`

  template(#item-title.item3)
    strong This is the 3rd item
    w-icon.ml1(md color="pink") mdi mdi-emoticon-kiss-outline
  template(#item-content.item3)
    p Do you want to check the project on Github?
    w-button.mt1(bg-color="primary" route="https://github.com/antoniandre/wave-ui")
      | Github
      w-icon.ml2(sm) mdi mdi-open-in-new`)]),html:t(()=>[e(`<w-accordion :items="items">
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
      <code class="ml1">`+s("{{ item }}")+`</code>
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
</w-accordion>`)]),js:t(()=>[e(`data: () => ({
  items: [
    { id: 'item1' },
    { id: 'item2' },
    { id: 'item3' }
  ]
})
`)]),default:t(()=>[i(a,{class:"discrete--bg",items:o.itemsCustom},{"item-title.item1":t(()=>[e("This is the 1st item"),i(q,{class:"ml2",color:"red",sm:"",outline:""},{default:t(()=>[e("HOT")]),_:1})]),"item-content.item1":t(()=>[Q,G,i(I,{checklist:"",color:"primary",items:[{label:"do this"},{label:"do that next"}]})]),"item-title.item2":t(()=>[i(p,{class:"mr1",md:"",color:"amber"},{default:t(()=>[e("mdi mdi-emoticon-excited-outline")]),_:1}),H]),"item-content.item2":t(({item:l})=>[M,n("p",null,[e("You also have access to the item's data if you need:"),n("code",W,s(l),1)])]),"item-title.item3":t(()=>[O,i(p,{class:"ml1",md:"",color:"pink"},{default:t(()=>[e("mdi mdi-emoticon-kiss-outline")]),_:1})]),"item-content.item3":t(()=>[z,i(h,{class:"mt1","bg-color":"primary",route:"https://github.com/antoniandre/wave-ui"},{default:t(()=>[e("Github"),i(p,{class:"ml2",sm:""},{default:t(()=>[e("mdi mdi-open-in-new")]),_:1})]),_:1})]),_:1},8,["items"])]),_:1}),i(m,{h2:""},{default:t(()=>[e("Toggle icon options")]),_:1}),i(m,{h3:""},{default:t(()=>[e("Alternative style")]),_:1}),K,i(d,{"content-class":"pa4"},{pug:t(()=>[e(`.title4 Icon on the left
w-accordion(:items="items" icon-rotate90)

.title4.mt6 Icon on the right
w-accordion(:items="items" icon-rotate90 expand-icon-right)`)]),html:t(()=>[e(`<div class="title4">
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
</w-accordion>`)]),js:t(()=>[e(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' }
  ]
})
`)]),default:t(()=>[F,i(a,{class:"discrete--bg",items:o.items,"expand-icon-rotate90":""},null,8,["items"]),J,i(a,{class:"discrete--bg",items:o.items,"expand-icon-rotate90":"","expand-icon-right":""},null,8,["items"])]),_:1}),i(m,{h3:""},{default:t(()=>[e("More options")]),_:1}),i(d,{"content-class":"pa4"},{pug:t(()=>[e(`.title4 1 custom icon (only expand)
w-accordion(:items="items" expand-icon="wi-chevron-down")

.title4.mt6 2 custom icons (expand & collapse)
w-accordion(:items="items" expand-icon="wi-plus" collapse-icon="wi-minus")

.title4.mt6 No icon
w-accordion(:items="items" :expand-icon="false" title-class="py2")

.title4.mt6 Icon on the right
w-accordion(:items="items" expand-icon-right)`)]),html:t(()=>[e(`<div class="title4 mb2">
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
</w-accordion>`)]),js:t(()=>[e(`data: () => ({
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
})`)]),default:t(()=>[X,i(a,{class:"discrete--bg",items:o.items,"expand-icon":"wi-chevron-down"},null,8,["items"]),Z,i(a,{class:"discrete--bg",items:o.items,"expand-icon":"wi-plus","collapse-icon":"wi-minus"},null,8,["items"]),ee,i(a,{class:"discrete--bg",items:o.items,"expand-icon":!1,"title-class":"py2"},null,8,["items"]),te,i(a,{class:"discrete--bg",items:o.items,"expand-icon-right":""},null,8,["items"])]),_:1})])}const ne={data:()=>({items:[{title:"Item 1",content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.",icon:"mdi mdi-home",itemColor:"blue"},{title:"Item 2",content:"Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!",icon:"mdi mdi-github",itemColor:"green"},{title:"Item 3",content:"Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.",icon:"mdi mdi-codepen",itemColor:"orange"}],items2:[{title:"Item 1",content:"content 1",color:"amber"},{title:"Item 2",content:"content 2",color:"warning"},{title:"Item 3",content:"content 3",color:"error"}],itemsDisabled:[{title:"Item 1 - disabled collapsed",content:"Disabled",disabled:!0},{title:"Item 2 - disabled expanded",content:"You can't collapse this pane.",disabled:!0},{title:"Item 3 - fully enabled",content:"You can toggle this pane to expand and collapse."}],itemsCustom:[{id:"item1"},{id:"item2"},{id:"item3"}],accordion1:[],accordion2:[!1,!0,!1],accordion3:[!1,!0,!0],accordion4:[],accordion5:[]})},oe=f(ne,[["render",ie]]),ae=n("div",{class:"w-divider my12"},null,-1);function se(o,c,v,w,x,u){const m=r("title-link"),a=r("component-api");return g(),b("div",null,[ae,i(m,{class:"title1",h2:""},{default:t(()=>[e("API")]),_:1}),i(a,{class:"mt0",items:u.props,descriptions:o.propsDescs,title:"Props"},null,8,["items","descriptions"]),i(a,{items:o.slots,title:"Slots"},null,8,["items"]),i(a,{items:u.events,title:"Events"},null,8,["items"])])}const le={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide an array of booleans to dictate the state (expanded and collapsed) of all the accordion items. This value gets updated by the accordion when using a v-model.',color:'Applies a text color on each accordion item. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a background color on each accordion item. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',items:'Expecting an array of objects. Each object being an accordion item, it should include a <code>title</code> and <code>content</code> attributes.<br>Alternatively, you can provide an integer number (call it <em class="code">x</em>), to loop through and create <em class="code">x</em> items in the accordion. You can then use the individual slots <code>item-title.x</code> &amp; <code>item-content.x</code> to define each item title and content.',itemTitleKey:"Specifies the name of the attribute in each item object where to find the item's title string.",itemContentKey:"Specifies the name of the attribute in each item object where to find the item's content string.",itemColorKey:"Specifies the name of the attribute in each item object where to find the item's desired color string. This allows a different color for each accordion item.",itemClass:"Applies a custom CSS class (or space separated classes) on every item container (which includes both the title and the content of the item).",titleClass:"Applies a custom CSS class (or space separated classes) on every title container.",contentClass:"Applies a custom CSS class (or space separated classes) on every content container.",expandIcon:"Specifies the name of the icon to display in the toggle button. If set to false or empty string, the button will be removed.",expandIconRight:"When set to true, the expand button will be placed at the right end of the item's title.",expandIconRotate90:"With this option, the expand icon will initially point to the right, then point down on expand with a clockwise rotation of 90 degrees.",expandIconProps:'An object of props to pass down to the <strong class="code">w-icon</strong> component for more control on the expand icon.<br>Example of use: <code>&lt;w-accordion :items="items" :expand-icon-props="{ flipY: true }"&gt;&lt;/w-accordion&gt;</code>',expandSingle:"Specifies the accordion behavior, whether only one item can be expanded at a time or multiple. When set to true, expanding another item than the one already expanded is still possible, but it will collapse the other expanded item.",collapseIcon:"Provide a different icon than the expand icon, to show when the accordion item is expanded. By default and when empty, there is no collapse icon: the expand icon rotates to show a closing ability.",shadow:"Applies a shadow to the whole accordion container.",duration:"Specify the duration in millisecond of the expand/collapse animation."},ce={"item-title":{description:"Provide a custom title for every item. Applies to all the items, but can be overridden by the <code>item-title.x</code> slot.",params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.",expanded:"A boolean representing the expanded state of the accordion item."}},"item-title.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom title for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.",expanded:"A boolean representing the expanded state of the accordion item."}},"item-content":{description:"Provide a custom content for every item. Applies to all the items, but can be overridden by the <code>item-content.x</code> slot.",params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.",expanded:"A boolean representing the expanded state of the accordion item."}},"item-content.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.",expanded:"A boolean representing the expanded state of the accordion item."}}},me={input:{description:"Emitted each time the state of the accordion changes (when an item is expanded or collapsed).<br>Updates the v-model value in Vue 2.x only.",params:{"[Array]":"An array of booleans representing the expanded state of each accordion item."}},"update:modelValue":{description:"Emitted each time the state of the accordion changes (when an item is expanded or collapsed).<br>Updates the v-model value in Vue 3 only.",params:{"[Array]":"An array of booleans representing the expanded state of each accordion item."}},focus:{description:"Emitted on each accordion item title focus.",params:{"[Object]":"The focused accordion item object."}}},de={data:()=>({propsDescs:le,slots:ce}),computed:{props(){return _.props},events(){return _.emits.reduce((o,c)=>(o[c]=me[c]||{})&&o,{})}}},re=f(de,[["render",se]]);function ue(o,c,v,w,x,u){const m=r("ui-component-title"),a=r("examples"),d=r("api");return g(),b("main",null,[i(m,null,{default:t(()=>[e("w-accordion")]),_:1}),i(a),i(d)])}const pe={components:{Examples:oe,Api:re}},ge=f(pe,[["render",ue]]);export{ge as default};
