import{N as e,W as t,_t as n,bt as r,c as i,d as a,g as o,h as s,k as c}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as l}from"./plugin-vue_export-helper-B80Cc4Ui.js";import{H as u,U as d}from"./index-BhRaCC4I.js";var f={class:`mt3`},p={class:`ml1`},m={class:`mt3`},h={class:`ml1`},g={class:`mt3`},_={class:`ml1`},v={class:`mt3`},y={class:`ml1`},b={class:`ml1`};function x(l,u,d,x,S,C){let w=e(`alert`),T=e(`title-link`),E=e(`w-accordion`),D=e(`example`),O=e(`w-button`),k=e(`w-icon`),A=e(`w-alert`),j=e(`w-tag`),M=e(`w-list`),N=e(`w-accordion-item`);return c(),a(`div`,null,[o(w,{info:``},{default:t(()=>[...u[7]||=[i(`p`,null,`Two components are available:`,-1),i(`ul`,null,[i(`li`,null,[i(`strong`,{class:`code`},`w-accordion`),s(`: The root accordion component.`)]),i(`li`,{class:`mt2`},[i(`strong`,{class:`code`},`w-accordion-item`),s(`: An optional component if you don't need / prefer not to use
the `),i(`code`,null,`items`),s(` prop.`)])],-1)]]),_:1}),o(T,{h2:``},{default:t(()=>[...u[8]||=[s(`Basic`,-1)]]),_:1}),o(E,{items:l.items},null,8,[`items`]),u[104]||=i(`p`,{class:`grey-light2 my4`},`Now that you've seen the default accordion in real context, all the accordions of this page will have a
light blue background in order to help visualize their edges.
`,-1),o(D,{"content-class":`pa4`},{pug:t(()=>[...u[10]||=[s(`w-accordion(v-model="accordion" :items="items")

div.mt3
  | v-model:
  code.ml1 `+r(`{{ accordion }}`),-1)]]),html:t(()=>[...u[11]||=[s(`<w-accordion v-model="accordion" :items="items" />

<div class="mt3">
  v-model:
  <code class="ml1">`+r(`{{ accordion }}`)+`</code>
</div>`,-1)]]),js:t(()=>[...u[12]||=[s(`data: () => ({
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
`,-1)]]),default:t(()=>[o(E,{class:`discrete--bg`,modelValue:l.accordion1,"onUpdate:modelValue":u[0]||=e=>l.accordion1=e,items:l.items},null,8,[`modelValue`,`items`]),i(`div`,f,[u[9]||=s(`v-model:`,-1),i(`code`,p,r(l.accordion1),1)])]),_:1}),o(T,{h2:``},{default:t(()=>[...u[13]||=[s(`Expanded by default`,-1)]]),_:1}),u[105]||=i(`p`,null,[s(`You can expand one or multiple panes by default by providing a v-model array of booleans:
`),i(`span`,{class:`code`},`true`),s(` to expand, `),i(`span`,{class:`code`},`false`),s(` to collapse the item.`)],-1),o(D,{"content-class":`pa4`},{pug:t(()=>[...u[15]||=[s(`w-accordion(v-model="accordion" :items="items")

div.mt3
  | v-model:
  code.ml1 `+r(`{{ accordion }}`),-1)]]),html:t(()=>[...u[16]||=[s(`<w-accordion v-model="accordion" :items="items" />

<div class="mt3">
  v-model:
  <code class="ml1">`+r(`{{ accordion }}`)+`</code>
</div>`,-1)]]),js:t(()=>[...u[17]||=[s(`data: () => ({
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
`,-1)]]),default:t(()=>[o(E,{class:`discrete--bg`,modelValue:l.accordion2,"onUpdate:modelValue":u[1]||=e=>l.accordion2=e,items:l.items},null,8,[`modelValue`,`items`]),i(`div`,m,[u[14]||=s(`v-model:`,-1),i(`code`,h,r(l.accordion2),1)])]),_:1}),o(T,{h2:``},{default:t(()=>[...u[18]||=[s(`Disabled pane`,-1)]]),_:1}),u[106]||=i(`p`,null,[s(`Specify which pane should be disabled - expanded or collapsed - by adding the `),i(`span`,{class:`code`},`disabled`),s(` property
directly in the object.`)],-1),o(D,{"content-class":`pa4`},{pug:t(()=>[...u[19]||=[s(`w-accordion(v-model="accordion" :items="items")`,-1)]]),html:t(()=>[...u[20]||=[s(`<w-accordion v-model="accordion" :items="items" />`,-1)]]),js:t(()=>[...u[21]||=[s(`data: () => ({
  items: [
    { title: 'Item 1 - disabled collapsed', content: 'Disabled', disabled: true },
    { title: 'Item 2 - disabled expanded', content: 'You can\\'t collapse this pane.', disabled: true },
    { title: 'Item 3 - fully enabled', content: 'You can toggle this pane to expand and collapse.' }
  ],
  accordion: [false, true, true]
})
`,-1)]]),default:t(()=>[o(E,{class:`discrete--bg`,modelValue:l.accordion3,"onUpdate:modelValue":u[2]||=e=>l.accordion3=e,items:l.itemsDisabled},null,8,[`modelValue`,`items`])]),_:1}),o(T,{h2:``},{default:t(()=>[...u[22]||=[s(`Shadow`,-1)]]),_:1}),o(D,{"content-class":`pa4`},{pug:t(()=>[...u[23]||=[s(`w-accordion(:items="items" shadow)`,-1)]]),html:t(()=>[...u[24]||=[s(`<w-accordion :items="items" shadow />`,-1)]]),js:t(()=>[...u[25]||=[s(`data: () => ({
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
`,-1)]]),default:t(()=>[o(E,{class:`discrete--bg`,items:l.items,shadow:``},null,8,[`items`])]),_:1}),o(T,{h2:``},{default:t(()=>[...u[26]||=[s(`Color & background color`,-1)]]),_:1}),u[107]||=i(`p`,null,[s(`Like in most components, you can set a `),i(`code`,null,`color`),s(` for the text and a `),i(`code`,null,`bg-color`),s(` for the
background.`),i(`br`),s(`
No background color is set by default and the text color is inherited.`)],-1),o(D,{"content-class":`pa4`},{pug:t(()=>[s(`w-accordion(:items="items" color="amber-dark1")

w-accordion.mt6(:items="items" bg-color="`+r(l.$store.state.darkMode?`indigo-dark6`:`yellow-light5`)+`")`,1)]),html:t(()=>[s(`<w-accordion :items="items" color="amber-dark1"></w-accordion>

<w-accordion class="mt6" :items="items" bg-color="`+r(l.$store.state.darkMode?`indigo-dark6`:`yellow-light5`)+`"></w-accordion>`,1)]),js:t(()=>[...u[27]||=[s(`data: () => ({
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
`,-1)]]),default:t(()=>[o(E,{class:`discrete--bg`,items:l.items,color:`amber-dark1`},null,8,[`items`]),o(E,{class:`mt6`,items:l.items,"bg-color":l.$store.state.darkMode?`indigo-dark6`:`yellow-light5`},null,8,[`items`,`bg-color`])]),_:1}),o(T,{h3:``},{default:t(()=>[...u[28]||=[s(`Different color per item`,-1)]]),_:1}),u[108]||=i(`p`,null,[s(`The colors are set in the data in each item object.`),i(`br`),s(`
the default mapping for the color is the `),i(`code`,null,`color`),s(` key, but you can customize it with the
`),i(`code`,null,`item-color-key`),s(` prop.`)],-1),o(D,{"content-class":`pa4`},{pug:t(()=>[...u[29]||=[s(`w-accordion(:items="items")`,-1)]]),html:t(()=>[...u[30]||=[s(`<w-accordion :items="items" />`,-1)]]),js:t(()=>[...u[31]||=[s(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1', color: 'amber' },
    { title: 'Item 2', content: 'Content 2', color: 'warning' },
    { title: 'Item 3', content: 'Content 3', color: 'error' }
  ]
})
`,-1)]]),default:t(()=>[o(E,{class:`discrete--bg`,items:l.items2},null,8,[`items`])]),_:1}),o(T,{h2:``},{default:t(()=>[...u[32]||=[s(`Expand a single item at a time`,-1)]]),_:1}),o(D,{"content-class":`pa4`},{pug:t(()=>[...u[34]||=[s(`w-accordion(v-model="accordion" :items="items" expand-single)

div.mt3
  | v-model:
  code.ml1 `+r(`{{ accordion }}`),-1)]]),html:t(()=>[...u[35]||=[s(`<w-accordion
  v-model="accordion"
  :items="items"
  expand-single>
</w-accordion>

<div class="mt3">
  v-model:
  <code class="ml1">`+r(`{{ accordion }}`)+`</code>
</div>`,-1)]]),js:t(()=>[...u[36]||=[s(`data: () => ({
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
`,-1)]]),default:t(()=>[o(E,{class:`discrete--bg`,modelValue:l.accordion4,"onUpdate:modelValue":u[3]||=e=>l.accordion4=e,items:l.items,"expand-single":``},null,8,[`modelValue`,`items`]),i(`div`,g,[u[33]||=s(`v-model:`,-1),i(`code`,_,r(l.accordion4),1)])]),_:1}),o(T,{h2:``},{default:t(()=>[...u[37]||=[s(`External control`,-1)]]),_:1}),o(D,{"content-class":`pa4`},{pug:t(()=>[...u[41]||=[s(`w-button.mr2(@click="accordion = Array&#40;3&#41;.fill&#40;true&#41;" sm) Expand all
w-button(@click="accordion = Array&#40;3&#41;.fill&#40;false&#41;" sm) Collapse all

w-accordion.mt4(v-model="accordion" :items="items")

div.mt3
  | v-model:
  code.ml1 `+r(`{{ accordion }}`),-1)]]),html:t(()=>[...u[42]||=[s(`<w-button
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
  <code class="ml1">`+r(`{{ accordion }}`)+`</code>
</div>`,-1)]]),js:t(()=>[...u[43]||=[s(`data: () => ({
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
`,-1)]]),default:t(()=>[o(O,{class:`mr2`,onClick:u[4]||=e=>l.accordion5=[,,,].fill(!0),sm:``},{default:t(()=>[...u[38]||=[s(`Expand all`,-1)]]),_:1}),o(O,{onClick:u[5]||=e=>l.accordion5=[,,,].fill(!1),sm:``},{default:t(()=>[...u[39]||=[s(`Collapse all`,-1)]]),_:1}),o(E,{class:`mt4 discrete--bg`,modelValue:l.accordion5,"onUpdate:modelValue":u[6]||=e=>l.accordion5=e,items:l.items},null,8,[`modelValue`,`items`]),i(`div`,v,[u[40]||=s(`v-model:`,-1),i(`code`,y,r(l.accordion5),1)])]),_:1}),o(T,{h2:``},{default:t(()=>[...u[44]||=[s(`Custom rendering via slots`,-1)]]),_:1}),u[109]||=i(`p`,null,[s(`Customize all the tab items titles and/or content via the single slot `),i(`code`,null,`item-title`),s(`, and/or
all the tab items content via the single slot `),i(`code`,null,`item-content`),s(`.`)],-1),o(D,{"content-class":`pa4`},{pug:t(()=>[...u[45]||=[s(`w-accordion(:items="items" content-class="pa0")
  template(#item-title="{ item }")
    w-icon(lg :color="item.itemColor") `+r(`{{ item.icon }}`)+`
    .title3.my0.ml2(:class="item.itemColor") `+r(`{{ item.title }}`)+`
  template(#item-content="{ item }")
    w-alert.my0.pb3(border-left tile :color="item.itemColor" v-html="item.content")`,-1)]]),html:t(()=>[...u[46]||=[s(`<w-accordion :items="items" content-class="pa0">
  <template #item-title="{ item }">
    <w-icon lg :color="item.itemColor">
      `+r(`{{ item.icon }}`)+`
    </w-icon>
    <div class="title3 ml2" :class="item.itemColor">
      `+r(`{{ item.title }}`)+`
    </div>
  </template>
  <template #item-content="{ item }") />
    <w-alert
      class="my0 pb3"
      border-left
      tile
      :color="item.itemColor"
      v-html="item.content" />
  </template>`,-1)]]),js:t(()=>[...u[47]||=[s(`data: () => ({
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
`,-1)]]),default:t(()=>[o(E,{class:`discrete--bg`,items:l.items,"content-class":`pa0`},{"item-title":t(({item:e})=>[o(k,{lg:``,color:e.itemColor},{default:t(()=>[s(r(e.icon),1)]),_:2},1032,[`color`]),i(`div`,{class:n([`title3 my0 ml2`,e.itemColor])},r(e.title),3)]),"item-content":t(({item:e})=>[o(A,{class:`my0 pb3`,"border-left":``,tile:``,color:e.itemColor,innerHTML:e.content},null,8,[`color`,`innerHTML`])]),_:1},8,[`items`])]),_:1}),o(T,{h3:``,slug:`slots--different-title-and-content`},{default:t(()=>[...u[48]||=[s(`Different title and content layouts per item`,-1)]]),_:1}),u[110]||=i(`p`,null,[s(`Here is a more complex example using slots to render 3 totally diferent pane titles and contents.`),i(`br`),s(`
This time, an array of object is defined to show you can also do a mix of contents coming from the
the component's data or directly in the template.`)],-1),o(D,{"content-class":`pa4`},{pug:t(()=>[...u[62]||=[s(`w-accordion(:items="items")
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
      code.ml1 `+r(`{{ item }}`)+`

  template(#item-title.item3)
    strong This is the 3rd item
    w-icon.ml1(md color="pink") mdi mdi-emoticon-kiss-outline
  template(#item-content.item3)
    p Do you want to check the project on Github?
    w-button.mt1(bg-color="primary" route="https://github.com/antoniandre/wave-ui")
      | Github
      w-icon.ml2(sm) mdi mdi-open-in-new`,-1)]]),html:t(()=>[...u[63]||=[s(`<w-accordion :items="items">
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
      <code class="ml1">`+r(`{{ item }}`)+`</code>
    </p>
  </template>

  <template #item-title.item3>
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
</w-accordion>`,-1)]]),js:t(()=>[...u[64]||=[s(`data: () => ({
  items: [
    { id: 'item1' },
    { id: 'item2' },
    { id: 'item3' }
  ]
})
`,-1)]]),default:t(()=>[o(E,{class:`discrete--bg`,items:l.itemsCustom},{"item-title.item1":t(()=>[u[50]||=s(`This is the 1st item`,-1),o(j,{class:`ml2`,color:`red`,sm:``,outline:``},{default:t(()=>[...u[49]||=[s(`HOT`,-1)]]),_:1})]),"item-content.item1":t(()=>[u[51]||=i(`p`,null,`This content has a checklist.`,-1),u[52]||=i(`div`,{class:`title4`},`To do`,-1),o(M,{checklist:``,color:`primary`,items:[{label:`do this`},{label:`do that next`}]})]),"item-title.item2":t(()=>[o(k,{class:`mr1`,md:``,color:`amber`},{default:t(()=>[...u[53]||=[s(`mdi mdi-emoticon-excited-outline`,-1)]]),_:1}),u[54]||=i(`em`,null,`This is the 2nd item`,-1)]),"item-content.item2":t(({item:e})=>[u[56]||=i(`p`,null,`The full content here is custom and completely distinct and independent from the other items.`,-1),i(`p`,null,[u[55]||=s(`You also have access to the item's data if you need:`,-1),i(`code`,b,r(e),1)])]),"item-title.item3":t(()=>[u[58]||=i(`strong`,null,`This is the 3rd item`,-1),o(k,{class:`ml1`,md:``,color:`pink`},{default:t(()=>[...u[57]||=[s(`mdi mdi-emoticon-kiss-outline`,-1)]]),_:1})]),"item-content.item3":t(()=>[u[61]||=i(`p`,null,`Do you want to check the project on Github?`,-1),o(O,{class:`mt1`,"bg-color":`primary`,route:`https://github.com/antoniandre/wave-ui`},{default:t(()=>[u[60]||=s(`Github`,-1),o(k,{class:`ml2`,sm:``},{default:t(()=>[...u[59]||=[s(`mdi mdi-open-in-new`,-1)]]),_:1})]),_:1})]),_:1},8,[`items`])]),_:1}),o(T,{h2:``,slug:`w-accordion-item`},{default:t(()=>[...u[65]||=[s(`Custom rendering via `,-1),i(`span`,{class:`code`},`w-accordion-item`,-1)]]),_:1}),u[111]||=i(`p`,null,[s(`If you don't need data objects at all and all the items layouts will be different,
using the `),i(`strong`,{class:`code`},`w-accordion-item`),s(` component is a more flexible and straightforward approach.
`)],-1),o(D,{"content-class":`pa4`},{pug:t(()=>[...u[72]||=[s(`w-accordion
  w-accordion-item
    template(#title) Item title 1
    template(#content) Item content 1

  w-accordion-item
    template(#title) Item title 2
    template(#content) Item content 2

  w-accordion-item
    template(#title) Item title 3
    template(#content) Item content 3`,-1)]]),html:t(()=>[...u[73]||=[s(`<w-accordion>
  <w-accordion-item>
    <template #title>Item title 1</template>
    <template #content>Item content 1</template>
  </w-accordion-item>

  <w-accordion-item>
    <template #title>Item title 2</template>
    <template #content>Item content 2</template>
  </w-accordion-item>

  <w-accordion-item>
    <template #title>Item title 3</template>
    <template #content>Item content 3</template>
  </w-accordion-item>
</w-accordion>
`,-1)]]),default:t(()=>[o(E,{class:`discrete--bg`},{default:t(()=>[o(N,null,{title:t(()=>[...u[66]||=[s(`Item title 1`,-1)]]),content:t(()=>[...u[67]||=[s(`Item content 1`,-1)]]),_:1}),o(N,null,{title:t(()=>[...u[68]||=[s(`Item title 2`,-1)]]),content:t(()=>[...u[69]||=[s(`Item content 2`,-1)]]),_:1}),o(N,null,{title:t(()=>[...u[70]||=[s(`Item title 3`,-1)]]),content:t(()=>[...u[71]||=[s(`Item content 3`,-1)]]),_:1})]),_:1})]),_:1}),o(T,{h3:``,slug:`w-accordion-item--different-title-and-content`},{default:t(()=>[...u[74]||=[s(`Different title and content layouts per item`,-1)]]),_:1}),u[112]||=i(`p`,null,[s(`Same example as `),i(`a`,{href:`#slots--different-title-and-content`},`above`),s(` but using the `),i(`strong`,{class:`code`},`w-accordion-item`),s(` component.`)],-1),o(D,{"content-class":`pa4`},{pug:t(()=>[...u[87]||=[s(`w-accordion(:items="items")
  w-accordion-item
    template(#title)
      | This is the 1st item
      w-tag.ml2(color="red" sm outline) HOT
    template(#content)
      p This content has a checklist.
      .title4 To do
      w-list(checklist color="primary" :items="[{ label: 'do this' }, { label: 'do that next' }]")

  w-accordion-item
    template(#title)
      w-icon.mr1(md color="amber") mdi mdi-emoticon-excited-outline
      em This is the 2nd item
    template(#content)
      p The full content here is custom and completely distinct and independent from the other items.

  w-accordion-item
    template(#title)
      strong This is the 3rd item
      w-icon.ml1(md color="pink") mdi mdi-emoticon-kiss-outline
    template(#content)
      p Do you want to check the project on Github?
      w-button.mt1(bg-color="primary" route="https://github.com/antoniandre/wave-ui")
        | Github
        w-icon.ml2(sm) mdi mdi-open-in-new`,-1)]]),html:t(()=>[...u[88]||=[s(`<w-accordion>
  <w-accordion-item>
    <template #title>
      This is the 1st item
      <w-tag class="ml2" color="red" sm outline>HOT</w-tag>
    </template>
    <template #content>
      <p>This content has a checklist.</p>
      <div class="title4 my3">To do</div>
      <w-list
        checklist
        color="primary"
        :items="[{ label: 'do this' }, { label: 'do that next' }]" />
    </template>
  </w-accordion-item>

  <w-accordion-item>
    <template #title>
      <w-icon class="mr1" md color="amber">
        mdi mdi-emoticon-excited-outline
      </w-icon>
      <em>This is the 2nd item</em>
    </template>
    <template #content>
      <p>
        The full content here is custom and completely distinct and independent from the other items.
      </p>
    </template>
  </w-accordion-item>

  <w-accordion-item>
    <template #title>
      <strong> This is the 3rd item</strong>
      <w-icon class="ml1" md color="pink">
        mdi mdi-emoticon-kiss-outline
      </w-icon>
    </template>
    <template #content>
      <p>Do you want to check the project on Github?</p>
      <w-button
        class="mt1"
        route="https://github.com/antoniandre/wave-ui">
        Github
        <w-icon class="ml2" sm>mdi mdi-open-in-new</w-icon>
      </w-button>
    </template>
  </w-accordion-item>
</w-accordion>
`,-1)]]),default:t(()=>[o(E,{class:`discrete--bg`},{default:t(()=>[o(N,null,{title:t(()=>[u[76]||=s(`This is the 1st item`,-1),o(j,{class:`ml2`,color:`red`,sm:``,outline:``},{default:t(()=>[...u[75]||=[s(`HOT`,-1)]]),_:1})]),content:t(()=>[u[77]||=i(`p`,null,`This content has a checklist.`,-1),u[78]||=i(`div`,{class:`title4`},`To do`,-1),o(M,{checklist:``,color:`primary`,items:[{label:`do this`},{label:`do that next`}]})]),_:1}),o(N,null,{title:t(()=>[o(k,{class:`mr1`,md:``,color:`amber`},{default:t(()=>[...u[79]||=[s(`mdi mdi-emoticon-excited-outline`,-1)]]),_:1}),u[80]||=i(`em`,null,`This is the 2nd item`,-1)]),content:t(()=>[...u[81]||=[i(`p`,null,`The full content here is custom and completely distinct and independent from the other items.`,-1)]]),_:1}),o(N,null,{title:t(()=>[u[83]||=i(`strong`,null,`This is the 3rd item`,-1),o(k,{class:`ml1`,md:``,color:`pink`},{default:t(()=>[...u[82]||=[s(`mdi mdi-emoticon-kiss-outline`,-1)]]),_:1})]),content:t(()=>[u[86]||=i(`p`,null,`Do you want to check the project on Github?`,-1),o(O,{class:`mt1`,"bg-color":`primary`,route:`https://github.com/antoniandre/wave-ui`},{default:t(()=>[u[85]||=s(`Github`,-1),o(k,{class:`ml2`,sm:``},{default:t(()=>[...u[84]||=[s(`mdi mdi-open-in-new`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(T,{h2:``},{default:t(()=>[...u[89]||=[s(`Toggle icon options`,-1)]]),_:1}),o(T,{h3:``},{default:t(()=>[...u[90]||=[s(`Alternative style`,-1)]]),_:1}),u[113]||=i(`p`,null,[s(`With the option `),i(`code`,null,`icon-rotate90`),s(`, the icon will initially point to the left and will
rotate 90 degrees clockwise when expanding.`)],-1),o(D,{"content-class":`pa4`},{pug:t(()=>[...u[91]||=[s(`.title4 Icon on the left
w-accordion(:items="items" icon-rotate90)

.title4.mt6 Icon on the right
w-accordion(:items="items" icon-rotate90 expand-icon-right)`,-1)]]),html:t(()=>[...u[92]||=[s(`<div class="title4">
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
</w-accordion>`,-1)]]),js:t(()=>[...u[93]||=[s(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' }
  ]
})
`,-1)]]),default:t(()=>[u[94]||=i(`div`,{class:`title4`},`Icon on the left`,-1),o(E,{class:`discrete--bg`,items:l.items,"expand-icon-rotate90":``},null,8,[`items`]),u[95]||=i(`div`,{class:`title4 mt6`},`Icon on the right`,-1),o(E,{class:`discrete--bg`,items:l.items,"expand-icon-rotate90":``,"expand-icon-right":``},null,8,[`items`])]),_:1}),o(T,{h3:``},{default:t(()=>[...u[96]||=[s(`More options`,-1)]]),_:1}),o(D,{"content-class":`pa4`},{pug:t(()=>[...u[97]||=[s(`.title4 1 custom icon (only expand)
w-accordion(:items="items" expand-icon="wi-chevron-down")

.title4.mt6 2 custom icons (expand & collapse)
w-accordion(:items="items" expand-icon="wi-plus" collapse-icon="wi-minus")

.title4.mt6 No icon
w-accordion(:items="items" :expand-icon="false" title-class="py2")

.title4.mt6 Icon on the right
w-accordion(:items="items" expand-icon-right)`,-1)]]),html:t(()=>[...u[98]||=[s(`<div class="title4 mb2">
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
</w-accordion>`,-1)]]),js:t(()=>[...u[99]||=[s(`data: () => ({
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
})`,-1)]]),default:t(()=>[u[100]||=i(`div`,{class:`title4`},`One custom icon (only expand)`,-1),o(E,{class:`discrete--bg`,items:l.items,"expand-icon":`wi-chevron-down`},null,8,[`items`]),u[101]||=i(`div`,{class:`title4 mt6`},`Two custom icons (expand & collapse)`,-1),o(E,{class:`discrete--bg`,items:l.items,"expand-icon":`wi-plus`,"collapse-icon":`wi-minus`},null,8,[`items`]),u[102]||=i(`div`,{class:`title4 mt6`},`No icon`,-1),o(E,{class:`discrete--bg`,items:l.items,"expand-icon":!1,"title-class":`py2`},null,8,[`items`]),u[103]||=i(`div`,{class:`title4 mt6`},`Icon on the right`,-1),o(E,{class:`discrete--bg`,items:l.items,"expand-icon-right":``},null,8,[`items`])]),_:1})])}var S=l({data:()=>({items:[{title:`Item 1`,content:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.`,icon:`mdi mdi-home`,itemColor:`blue`},{title:`Item 2`,content:`Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!`,icon:`mdi mdi-github`,itemColor:`green`},{title:`Item 3`,content:`Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.`,icon:`mdi mdi-codepen`,itemColor:`orange`}],items2:[{title:`Item 1`,content:`content 1`,color:`amber`},{title:`Item 2`,content:`content 2`,color:`warning`},{title:`Item 3`,content:`content 3`,color:`error`}],itemsDisabled:[{title:`Item 1 - disabled collapsed`,content:`Disabled`,disabled:!0},{title:`Item 2 - disabled expanded`,content:`You can't collapse this pane.`,disabled:!0},{title:`Item 3 - fully enabled`,content:`You can toggle this pane to expand and collapse.`}],itemsCustom:[{id:`item1`},{id:`item2`},{id:`item3`}],accordion1:[],accordion2:[!1,!0,!1],accordion3:[!1,!0,!0],accordion4:[],accordion5:[]})},[[`render`,x]]);function C(n,r,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return c(),a(`div`,null,[r[2]||=i(`div`,{class:`w-divider my12`},null,-1),o(p,{class:`title1`,h2:``},{default:t(()=>[...r[0]||=[s(`API`,-1)]]),_:1}),o(m,{class:`mt0`,items:f.props,descriptions:n.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),o(p,{class:`title1 mt12`,h2:``,slug:`w-accordion-item-api`},{default:t(()=>[...r[1]||=[s(`<w-accordion-item> API`,-1)]]),_:1}),o(m,{class:`mt0`,items:f.accordionItemProps,descriptions:n.accordionItemPropsDescs,title:`Props`},null,8,[`items`,`descriptions`]),o(m,{items:n.slots,title:`w-accordion Slots`},null,8,[`items`]),o(m,{class:`mt12`,items:n.slotsAccordionItem,title:`w-accordion-item Slots`},null,8,[`items`]),o(m,{items:f.events,title:`Events`},null,8,[`items`])])}var w={title:`The title of the accordion item.`,content:`The content of the accordion item.`,expanded:`Whether this item starts expanded.`,disabled:`Disables interaction with this item.`,noRipple:`When <code>true</code>, disables the pointer ripple for this item title only. When omitted, it follows the parent accordion then <code>$waveui.config.ripple</code>.`},T={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide an array of booleans to dictate the state (expanded and collapsed) of all the accordion items. This value gets updated by the accordion when using a v-model.`,color:`Applies a text color on each accordion item. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a background color on each accordion item. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,items:`Required when not using the <strong class="code">w-accordion-item</strong> component, but redundant otherwise.<br>Expecting an array of objects. Each object being an accordion item, it should include a <code>title</code> and <code>content</code> attributes.<br><div class="w-tag white grey-dark4--bg size--xs w-tag--round bd2">DEPRECATED</div>: you can also provide an integer number (call it <em class="code">x</em>), to loop through and create <em class="code">x</em> items in the accordion.<br>You can (not deprecated) use the individual slots <code>item-title.x</code> &amp; <code>item-content.x</code> to define each item title and content.`,itemTitleKey:`Specifies the name of the property in each item object where to find the item's title string.`,itemContentKey:`Specifies the name of the property in each item object where to find the item's content string.`,itemColorKey:`Specifies the name of the property in each item object where to find the item's desired color string. This allows a different color for each accordion item.`,itemClass:`Applies a custom CSS class (or space separated classes) on every item container (which includes both the title and the content of the item).`,titleClass:`Applies a custom CSS class (or space separated classes) on every title container.`,contentClass:`Applies a custom CSS class (or space separated classes) on every content container.`,expandIcon:`Specifies the name of the icon to display in the toggle button. If set to false or empty string, the button will be removed.`,expandIconRight:`When set to true, the expand button will be placed at the right end of the item's title.`,expandIconRotate90:`With this option, the expand icon will initially point to the right, then point down on expand with a clockwise rotation of 90 degrees.`,expandIconProps:`An object of props to pass down to the <strong class="code">w-icon</strong> component for more control on the expand icon.<br>Example of use: <code>&lt;w-accordion :items="items" :expand-icon-props="{ flipY: true }"&gt;&lt;/w-accordion&gt;</code>`,expandSingle:`Specifies the accordion behavior, whether only one item can be expanded at a time or multiple. When set to true, expanding another item than the one already expanded is still possible, but it will collapse the other expanded item.`,collapseIcon:`Provide a different icon than the expand icon, to show when the accordion item is expanded. By default and when empty, there is no collapse icon: the expand icon rotates to show a closing ability.`,shadow:`Applies a shadow to the whole accordion container.`,duration:`Specify the duration in millisecond of the expand/collapse animation.`,keepInDom:`<span class="grey text-italic">Will deactivate the <code>keep-alive</code> prop.</span> When set to <code>true</code>, every panel content stays in the DOM when collapsed (hidden with <code>v-show</code>), unless the item is removed from the accordion.<br>Note that the <code>mounted</code> hook will be run once per panel, as soon as it is appended to the DOM.<br>The default behavior is to keep panel contents alive when <code>keep-alive</code> is enabled, but unmount collapsed panels from the DOM.`,keepAlive:`When set to <code>true</code> and by default, each panel content is kept alive. Which means that the state of the components inside a panel will be maintained when collapsing and expanding it, and the <code>mounted</code> hook will only be run the first time it is opened.<br>When explicitly set to <code>false</code>, the panel state will be reset upon each reopening, and the <code>mounted</code> hook will be run again.<br>The default behavior is to keep panel contents alive, but unmount collapsed panels from the DOM (unless <code>keep-in-dom</code> is used).<br>You can read more about the keep-alive behavior in the <a href="https://vuejs.org/guide/built-ins/keep-alive.html" target="_blank">Vue official documentation for keep-alive <i class="w-icon mdi mdi-open-in-new"></i></a>.`,noRipple:`When <code>true</code>, disables the pointer ripple on item titles for all items. By default, ripple follows <code>$waveui.config.ripple</code>. Override per item with <code>no-ripple</code> on <code>w-accordion-item</code>.`},E={"item-title":{description:`Provide a custom title for every item. Applies to all the items, but can be overridden by the <code>item-title.x</code> slot.`,params:{item:`The current item object.`,index:`The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.`,expanded:`A boolean representing the expanded state of the accordion item.`}},"item-title.x":{description:`<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom title for a single item: the item at the index <em class="code">x</em>.`,params:{item:`The current item object.`,index:`The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.`,expanded:`A boolean representing the expanded state of the accordion item.`}},"item-content":{description:`Provide a custom content for every item. Applies to all the items, but can be overridden by the <code>item-content.x</code> slot.`,params:{item:`The current item object.`,index:`The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.`,expanded:`A boolean representing the expanded state of the accordion item.`}},"item-content.x":{description:`<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single item: the item at the index <em class="code">x</em>.`,params:{item:`The current item object.`,index:`The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.`,expanded:`A boolean representing the expanded state of the accordion item.`}}},D={title:{description:`Provide a custom title for every item (you could use the title prop instead).`,params:{item:`The current item object.`,index:`The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.`,expanded:`A boolean representing the expanded state of the accordion item.`}},content:{description:`Provide a custom content for every item (you could use the content prop instead).`,params:{item:`The current item object.`,index:`The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.`,expanded:`A boolean representing the expanded state of the accordion item.`}}},O={input:{description:`Emitted each time the state of the accordion changes (when an item is expanded or collapsed).<br>Updates the v-model value in Vue 2.x only.`,params:{"[Array]":`An array of booleans representing the expanded state of each accordion item.`}},"update:modelValue":{description:`Emitted each time the state of the accordion changes (when an item is expanded or collapsed).<br>Updates the v-model value in Vue 3 only.`,params:{"[Array]":`An array of booleans representing the expanded state of each accordion item.`}},focus:{description:`Emitted on each accordion item title focus.`,params:{"[Object]":`The focused accordion item object.`}}},k=l({data:()=>({propsDescs:T,accordionItemPropsDescs:w,slots:E,slotsAccordionItem:D}),computed:{props(){return u.props},accordionItemProps(){return{noRipple:{type:Boolean},...d.props}},events(){return u.emits.reduce((e,t)=>(e[t]=O[t]||{},e),{})}}},[[`render`,C]]);function A(n,r,i,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return c(),a(`main`,null,[o(f,null,{default:t(()=>[...r[0]||=[s(`w-accordion`,-1)]]),_:1}),o(p),o(m)])}var j=l({components:{Examples:S,Api:k}},[[`render`,A]]);export{j as default};
