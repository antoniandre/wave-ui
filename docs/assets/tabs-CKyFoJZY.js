import{N as e,W as t,bt as n,c as r,d as i,g as a,h as o,k as s}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as c}from"./plugin-vue_export-helper-B80Cc4Ui.js";import{Z as l,c as u}from"./index-BhRaCC4I.js";var d={class:`ml2`},f={class:`green`},p={class:`pink mx1`},m=[`innerHTML`];function h(c,u,h,g,_,v){let y=e(`title-link`),b=e(`w-tabs`),x=e(`example`),S=e(`w-switch`),C=e(`alert`),w=e(`w-radios`),T=e(`w-button`),E=e(`w-flex`),D=e(`w-icon`),O=e(`w-input`);return s(),i(`div`,null,[a(y,{h2:``},{default:t(()=>[...u[9]||=[o(`Basic`,-1)]]),_:1}),a(x,null,{pug:t(()=>[...u[10]||=[o(`w-tabs(:items="tabs")`,-1)]]),html:t(()=>[...u[11]||=[o(`<w-tabs :items="tabs"></w-tabs>`,-1)]]),js:t(()=>[...u[12]||=[o(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3 has a long title', content: 'Tab 3 content.' }
  ]
})
`,-1)]]),default:t(()=>[a(b,{items:c.tabs1},null,8,[`items`])]),_:1}),a(y,{h2:``},{default:t(()=>[...u[13]||=[o(`Align center and right`,-1)]]),_:1}),a(x,null,{pug:t(()=>[...u[14]||=[o(`w-tabs(:items="tabs" center)
br
w-tabs(:items="tabs" right)`,-1)]]),html:t(()=>[...u[15]||=[o(`<w-tabs :items="tabs" center></w-tabs>
<br />
<w-tabs :items="tabs" right></w-tabs>`,-1)]]),js:t(()=>[...u[16]||=[o(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' }
  ]
})
`,-1)]]),default:t(()=>[a(b,{items:c.tabs4.items,center:``},null,8,[`items`]),a(b,{class:`mt4`,items:c.tabs4.items,right:``},null,8,[`items`])]),_:1}),a(y,{h2:``},{default:t(()=>[...u[17]||=[o(`Fill bar & disabled items`,-1)]]),_:1}),a(x,null,{pug:t(()=>[...u[19]||=[o(`w-switch.mb3(v-model="fillBar") Fill bar
w-tabs(:items="tabs" :fill-bar="fillBar")`,-1)]]),html:t(()=>[...u[20]||=[o(`<w-switch v-model="fillBar" class="mb3">
  Fill bar
</w-switch>

<w-tabs :items="tabs" :fill-bar="fillBar"></w-tabs>`,-1)]]),js:t(()=>[...u[21]||=[o(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ],
  fillBar: true
})
`,-1)]]),default:t(()=>[a(S,{class:`mb3`,modelValue:c.tabs2.fillBar,"onUpdate:modelValue":u[0]||=e=>c.tabs2.fillBar=e},{default:t(()=>[...u[18]||=[o(`Fill bar`,-1)]]),_:1},8,[`modelValue`]),a(b,{items:c.tabs2.items,"fill-bar":c.tabs2.fillBar},null,8,[`items`,`fill-bar`])]),_:1}),a(y,{h2:``},{default:t(()=>[...u[22]||=[o(`V-model`,-1)]]),_:1}),a(C,{warning:``},{default:t(()=>[...u[23]||=[r(`strong`,null,`Since version 1.21.0`,-1),o(`, the v-model/value only accepts a numeric tab index (previously an array of boolean).`,-1)]]),_:1}),u[84]||=r(`p`,null,[o(`It is possible to open a particular tab programmatically via `),r(`code`,null,`v-model`),o(` or `),r(`code`,null,`model-value`),o(`.`)],-1),a(x,null,{pug:t(()=>[...u[25]||=[o(`w-tabs(v-model="activeTab" :items="tabs")
strong
  | v-model:
  code.ml2 `+n(`{{ activeTab }}`),-1)]]),html:t(()=>[...u[26]||=[o(`<w-tabs v-model="activeTab" :items="tabs"></w-tabs>

<strong>
  v-model:
  <code class="ml2">
    `+n(`{{ activeTab }}`)+`
  </code>
</strong>`,-1)]]),js:t(()=>[...u[27]||=[o(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ],
  activeTab: 2
})
`,-1)]]),default:t(()=>[a(b,{class:`mb2`,modelValue:c.tabs2.active,"onUpdate:modelValue":u[1]||=e=>c.tabs2.active=e,items:c.tabs2.items},null,8,[`modelValue`,`items`]),r(`strong`,null,[u[24]||=o(`v-model:`,-1),r(`code`,d,n(c.tabs2.active),1)])]),_:1}),a(y,{h2:``},{default:t(()=>[...u[28]||=[o(`Colors`,-1)]]),_:1}),u[85]||=r(`p`,null,[o(`Like in most components, you can set a `),r(`code`,null,`color`),o(` for the text and a `),r(`code`,null,`bg-color`),o(` for the
background. You can also set a `),r(`code`,null,`slider-color`),o(` and an `),r(`code`,null,`active-class`),o(`.
`)],-1),u[86]||=r(`div`,{class:`title3`},`Color & bg-color`,-1),a(x,null,{pug:t(()=>[o(`w-tabs(:items="tabs" color="blue" bg-color="`+n(c.$store.state.darkMode?`indigo-dark6`:`indigo-light5`)+`")`,1)]),html:t(()=>[o(`<w-tabs
  :items="tabs"
  color="blue"
  bg-color="`+n(c.$store.state.darkMode?`indigo-dark6`:`indigo-light5`)+`">
</w-tabs>`,1)]),js:t(()=>[...u[29]||=[o(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})
`,-1)]]),default:t(()=>[a(b,{items:c.tabs2.items,color:`blue`,"bg-color":c.$store.state.darkMode?`indigo-dark6`:`indigo-light5`},null,8,[`items`,`bg-color`])]),_:1}),u[87]||=r(`div`,{class:`title3 mt4`},`Slider color`,-1),a(x,null,{pug:t(()=>[...u[30]||=[o(`w-tabs(:items="tabs" slider-color="blue-light2")`,-1)]]),html:t(()=>[...u[31]||=[o(`<w-tabs
  :items="tabs"
  slider-color="blue-light2">
</w-tabs>`,-1)]]),js:t(()=>[...u[32]||=[o(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})
`,-1)]]),default:t(()=>[a(b,{items:c.tabs2.items,"slider-color":`blue-light2`},null,8,[`items`])]),_:1}),u[88]||=r(`div`,{class:`title3`},`Active class`,-1),a(x,null,{pug:t(()=>[...u[33]||=[o(`w-tabs(
  :items="tabs"
  color="blue"
  active-class="pink"
  slider-color="pink")`,-1)]]),html:t(()=>[...u[34]||=[o(`<w-tabs
  :items="tabs"
  color="blue"
  active-class="pink"
  slider-color="pink">
</w-tabs>`,-1)]]),js:t(()=>[...u[35]||=[o(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})
`,-1)]]),default:t(()=>[a(b,{items:c.tabs2.items,color:`blue`,"active-class":`pink`,"slider-color":`pink`},null,8,[`items`])]),_:1}),a(y,{h2:``},{default:t(()=>[...u[36]||=[o(`Pill slider`,-1)]]),_:1}),a(x,null,{pug:t(()=>[...u[37]||=[o(`w-tabs(:items="tabs" pill-slider)`,-1)]]),html:t(()=>[...u[38]||=[o(`<w-tabs :items="tabs" pill-slider></w-tabs>`,-1)]]),js:t(()=>[...u[39]||=[o(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})`,-1)]]),default:t(()=>[a(b,{items:c.tabs2.items,"pill-slider":``},null,8,[`items`])]),_:1}),a(y,{h3:``},{default:t(()=>[...u[40]||=[o(`Example of a different style, involving some external CSS`,-1)]]),_:1}),a(x,{reactive:``},{pug:t(()=>[...u[41]||=[o(`w-tabs(:items="tabs" pill-slider)`,-1)]]),html:t(()=>[...u[42]||=[o(`<w-tabs :items="tabs" pill-slider></w-tabs>`,-1)]]),js:t(()=>[...u[43]||=[o(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})`,-1)]]),css:t(()=>[o(`.w-app .w-tabs {border: none;}
.w-app .w-tabs__bar {
  display: inline-flex;
  margin-bottom: 12px;
  padding: 0;
  background: `+n(c.$store.state.darkMode?`#181818`:`#eee`)+`;
  border-radius: 6px;
  border: 1px solid `+n(c.$store.state.darkMode?`#222`:`#ddd`)+`;
  z-index: 0;
  overflow: visible;
}
.w-app .w-tabs__slider {
  opacity: 1;
  background-color: `+n(c.$store.state.darkMode?`#2c2c2c`:`#fff`)+`;
  bottom: 0;
  height: 100%;
  border-radius: 6px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
}
.w-app .w-tabs__bar-item {
  padding: 2px 10px;
  font-size: 1.1rem;
}
.w-app .w-tabs__bar-item  > * {z-index: 1;}

.w-app .w-tabs__bar-item:before {
  content: '';
  position: absolute;
  top: 25%;
  bottom: 25%;
  right: 100%;
  transform: translateX(-50%);
  border-left: 1px solid `+n(c.$store.state.darkMode?`#262626`:`#d2d2d2`)+`;
  display: block;
  opacity: 1;
}
.w-app .w-tabs__bar-item:first-child:before {display: none;}
`,1)]),default:t(()=>[a(b,{class:`macos-tabs`,items:c.tabs2.items,"pill-slider":``},null,8,[`items`])]),_:1}),a(y,{h2:``},{default:t(()=>[...u[44]||=[o(`No slider`,-1)]]),_:1}),a(x,null,{pug:t(()=>[...u[46]||=[o(`w-switch.mb3(v-model="tabsSlider") Slider
w-tabs(:items="tabs" :no-slider="!tabsSlider" active-class="pink")`,-1)]]),html:t(()=>[...u[47]||=[o(`<w-switch class="mb3" v-model="tabsSlider">
  Slider
</w-switch>

<w-tabs
  :items="tabs"
  :no-slider="!tabsSlider"
  active-class="pink">
</w-tabs>`,-1)]]),js:t(()=>[...u[48]||=[o(`data: () => ({
  tabsSlider: false,
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})
`,-1)]]),default:t(()=>[a(S,{class:`mb3`,modelValue:c.tabs2.slider,"onUpdate:modelValue":u[2]||=e=>c.tabs2.slider=e},{default:t(()=>[...u[45]||=[o(`Slider`,-1)]]),_:1},8,[`modelValue`]),a(b,{items:c.tabs2.items,"no-slider":!c.tabs2.slider,"active-class":`pink`},null,8,[`items`,`no-slider`])]),_:1}),a(y,{h2:``},{default:t(()=>[...u[49]||=[o(`Content transitions`,-1)]]),_:1}),u[89]||=r(`p`,null,`Change tab to see the transition.`,-1),a(x,null,{pug:t(()=>[...u[50]||=[o(`w-radios.mb3(:items="transitions" v-model="transition")
w-tabs(:items="tabs" :transition="transition")`,-1)]]),html:t(()=>[...u[51]||=[o(`<w-radios
  class="mb3"
  :items="transitions"
  v-model="transition">
</w-radios>

<w-tabs
  :items="tabs"
  :transition="transition">
</w-tabs>`,-1)]]),js:t(()=>[...u[52]||=[o(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' }
  ],
  transition: 'fade',
  transitions: [
    { label: 'default', value: '' },
    { label: 'fade' },
    { label: 'slide-fade-up' },
    { label: 'slide-fade-down' },
    { label: 'slide-fade-left' },
    { label: 'slide-fade-right' },
    { label: 'scale-fade' },
    { label: 'none', value: false }
  ]
})
`,-1)]]),default:t(()=>[a(w,{class:`mb3`,items:c.transitions,modelValue:c.tabs4.transition,"onUpdate:modelValue":u[3]||=e=>c.tabs4.transition=e},null,8,[`items`,`modelValue`]),a(b,{items:c.tabs4.items,transition:c.tabs4.transition},null,8,[`items`,`transition`])]),_:1}),a(y,{h2:``},{default:t(()=>[...u[53]||=[o(`Add / remove tabs`,-1)]]),_:1}),u[90]||=r(`p`,null,`The tabs will naturally try to fit in the available space. But if they can't fit because there are
too many, a scrollbar will allow navigation to all the tabs.`,-1),a(x,null,{pug:t(()=>[...u[55]||=[o(`w-flex.mb3(align-center)
  | Number of tabs:
  w-button.mx2(icon="wi-minus" sm @click="tabsCount -= tabsCount < 1 ? 0 : 1")
  code `+n(`{{ tabsCount }}`)+`
  w-button.mx2(icon="wi-plus" sm @click="tabsCount++")
w-tabs(:items="tabsCount")
  template(#item-title="{ index }") Tab `+n(`{{ index }}`)+`
  template(#item-content="{ index }") Content `+n(`{{ index }}`),-1)]]),html:t(()=>[...u[56]||=[o(`<w-flex class="mb3" align-center>
  Number of tabs:
  <w-button
    class="mx2"
    icon="wi-minus"
    sm
    @click="tabsCount -= tabsCount < 1 ? 0 : 1">
  </w-button>

  <code>`+n(`{{ tabsCount }}`)+`</code>

  <w-button
    class="mx2"
    icon="wi-plus"
    sm
    @click="tabsCount++">
  </w-button>
</w-flex>

<w-tabs :items="tabsCount">
  <template #item-title="{ index }">
    Tab `+n(`{{ index }}`)+`
  </template>

  <template #item-content="{ index }">
    Content `+n(`{{ index }}`)+`
  </template>
</w-tabs>`,-1)]]),js:t(()=>[...u[57]||=[o(`data: () => ({
  tabsCount: 3
})
`,-1)]]),default:t(()=>[a(E,{class:`mb3`,"align-center":``},{default:t(()=>[u[54]||=o(`Number of tabs:`,-1),a(T,{class:`mx2`,icon:`wi-minus`,sm:``,onClick:u[4]||=e=>c.tabs3.tabsCount-=c.tabs3.tabsCount<1?0:1}),r(`code`,null,n(c.tabs3.tabsCount),1),a(T,{class:`mx2`,icon:`wi-plus`,sm:``,onClick:u[5]||=e=>c.tabs3.tabsCount++})]),_:1}),a(b,{items:c.tabs3.tabsCount},{"item-title":t(({index:e})=>[o(`Tab `+n(e),1)]),"item-content":t(({index:e})=>[o(`Content `+n(e),1)]),_:1},8,[`items`])]),_:1}),a(y,{h2:``},{default:t(()=>[...u[58]||=[o(`Card style tabs`,-1)]]),_:1}),a(x,null,{pug:t(()=>[...u[59]||=[o(`w-tabs(:items="tabs" card)`,-1)]]),html:t(()=>[...u[60]||=[o(`<w-tabs :items="tabs" card></w-tabs>`,-1)]]),js:t(()=>[...u[61]||=[o(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3 has a long title', content: 'Tab 3 content.' }
  ]
})
`,-1)]]),default:t(()=>[a(b,{items:c.tabs1,card:``},null,8,[`items`])]),_:1}),a(y,{h2:``},{default:t(()=>[...u[62]||=[o(`Close button`,-1)]]),_:1}),a(C,{tip:``},{default:t(()=>[...u[63]||=[o(`When using a close button, don't forget to stop the click propagation `,-1),r(`code`,null,`@click.stop`,-1),o(` to prevent
the navigation to the tab that you are deleting!`,-1)]]),_:1}),a(x,null,{pug:t(()=>[...u[65]||=[o(`w-tabs(:items="tabs" card)
  template(#item-title="{ item, index }")
    | `+n(`{{ item.title }}`)+`
    w-button.ml1.mr-1(
      @click.stop="tabs.splice(index - 1, 1)"
      icon="wi-cross"
      outline
      xs)`,-1)]]),html:t(()=>[...u[66]||=[o(`<w-tabs :items="tabs" card>
  <template #item-title="{ item, index }">
    `+n(`{{ item.title }}`)+`
    <w-button
      class="ml1 mr-1"
      @click.stop="tabs.splice(index - 1, 1)"
      icon="wi-cross"
      outline
      xs>
    </w-button>
  </template>
</w-tabs>`,-1)]]),js:t(()=>[...u[67]||=[o(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' }
  ]
})
`,-1)]]),default:t(()=>[a(b,{items:c.tabs6.items,card:``},{"item-title":t(({item:e,index:t})=>[o(n(e.title),1),a(T,{class:`ml1 mr-1`,onClick:l(e=>c.tabs6.items.splice(t-1,1),[`stop`]),icon:`wi-cross`,outline:``,xs:``},null,8,[`onClick`])]),_:1},8,[`items`]),a(T,{class:`mt4`,"bg-color":`primary`,onClick:u[6]||=e=>c.tabs6.items=c.tabs6.originals.slice(0),disabled:c.tabs6.items.length===3},{default:t(()=>[...u[64]||=[o(`Reset tabs`,-1)]]),_:1},8,[`disabled`])]),_:1}),a(y,{h2:``},{default:t(()=>[...u[68]||=[o(`Customizing the tabs title & contents`,-1)]]),_:1}),a(x,null,{pug:t(()=>[...u[73]||=[o(`w-tabs(:items="tabs" card)
  template(#item-title="{ item }")
    w-icon.mr1.green mdi mdi-star
    span.green `+n(`{{ item.title }}`)+`
  template(#item-title.3="{ item }")
    w-icon.pink mdi mdi-heart
    span.pink.mx1 `+n(`{{ item.title }}`)+`
    w-icon.pink mdi mdi-heart
  template(#item-content.1="{ item }")
    .title3 This is a custom tab content.
    div(v-html="item.content")`,-1)]]),html:t(()=>[...u[74]||=[o(`<w-tabs :items="tabs" card>
  <template #item-title="{ item }">
    <w-icon class="mr1 green">
      mdi mdi-star
    </w-icon>

    <span class="green">
      `+n(`{{ item.title }}`)+`
    </span>
  </template>

  <template #item-title.3="{ item }">
    <w-icon class="pink">
      mdi mdi-heart
    </w-icon>

    <span class="pink mx1">
      `+n(`{{ item.title }}`)+`
    </span>

    <w-icon class="pink">
      mdi mdi-heart
    </w-icon>
  </template>

  <template #item-content.1="{ item }">
    <div class="title3">
      This is a custom tab content.
    </div>

    <div v-html="item.content"></div>
  </template>
</w-tabs>`,-1)]]),js:t(()=>[...u[75]||=[o(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' }
  ]
})
`,-1)]]),default:t(()=>[a(b,{items:c.tabs5,card:``},{"item-title":t(({item:e})=>[a(D,{class:`mr1 green`},{default:t(()=>[...u[69]||=[o(`mdi mdi-star`,-1)]]),_:1}),r(`span`,f,n(e.title),1)]),"item-title.3":t(({item:e})=>[a(D,{class:`pink`},{default:t(()=>[...u[70]||=[o(`mdi mdi-heart`,-1)]]),_:1}),r(`span`,p,n(e.title),1),a(D,{class:`pink`},{default:t(()=>[...u[71]||=[o(`mdi mdi-heart`,-1)]]),_:1})]),"item-content.1":t(({item:e})=>[u[72]||=r(`div`,{class:`title3`},`This is a custom tab content.`,-1),r(`div`,{innerHTML:e.content},null,8,m)]),_:1},8,[`items`])]),_:1}),a(y,{h2:``},{default:t(()=>[...u[76]||=[o(`Adding a tabs bar extra element`,-1)]]),_:1}),u[91]||=r(`p`,null,[o(`You can add extra elements at the right of the tabs title bar via the `),r(`code`,null,`tabs-bar-extra`),o(` slot.`),r(`br`),o(`
Once the tabs are updated (in the next Vue tick), you can open the newly added tab.`)],-1),a(x,null,{pug:t(()=>[...u[77]||=[o(`w-tabs(:items="tabs.tabsCount" v-model="tabs.currentTab")
  template(#item-title="{ index }") Item title `+n(`{{ index }}`)+`
  template(#item-content="{ index }") Item content `+n(`{{ index }}`)+`
  template(#tabs-bar-extra)
    w-button.bdrsr.mr2(
      icon="wi-plus"
      @click="tabs.tabsCount++;$nextTick(() => tabs.currentTab = tabs.tabsCount - 1)")`,-1)]]),html:t(()=>[...u[78]||=[o(`<w-tabs
  :items="tabs.tabsCount"
  v-model="tabs.currentTab">
  <template #item-title="{ index }">
    Item title `+n(`{{ index }}`)+`
  </template>

  <template #item-content="{ index }">
    Item content `+n(`{{ index }}`)+`
  </template>

  <template #tabs-bar-extra>
    <w-button
      icon="wi-plus"
      @click="tabs.tabsCount++;$nextTick(() => tabs.currentTab = tabs.tabsCount - 1)"
      class="bdrsr mr2">
    </w-button>
  </template>
</w-tabs>`,-1)]]),js:t(()=>[...u[79]||=[o(`data: () => ({
  tabs: {
    tabsCount: 3,
    currentTab: 1
  }
})
`,-1)]]),default:t(()=>[a(b,{items:c.tabs7.tabsCount,modelValue:c.tabs7.currentTab,"onUpdate:modelValue":u[8]||=e=>c.tabs7.currentTab=e},{"item-title":t(({index:e})=>[o(`Item title `+n(e),1)]),"item-content":t(({index:e})=>[o(`Item content `+n(e),1)]),"tabs-bar-extra":t(()=>[a(T,{class:`bdrsr mr2`,icon:`wi-plus`,onClick:u[7]||=e=>{c.tabs7.tabsCount++,c.$nextTick(()=>c.tabs7.currentTab=c.tabs7.tabsCount-1)}})]),_:1},8,[`items`,`modelValue`])]),_:1}),a(y,{h2:``},{default:t(()=>[...u[80]||=[o(`Refreshing the slider width or position`,-1)]]),_:1}),u[92]||=r(`p`,null,[o(`By default there is no data watcher on the tabs title to recalculate the slider width or position.`),r(`br`),o(`
But you may need to update the slider width for various reasons.
Thanks to the `),r(`code`,null,`updateSlider`),o(` method, this is quite straightforward.`),r(`br`),o(`
In this scenario, the slider width is updated on title change from the `),r(`strong`,{class:`code`},`w-input`),o(` field,
so the slider width adapts to the number of characters on the current tab's title.`)],-1),a(x,null,{pug:t(()=>[...u[81]||=[o(`w-tabs(ref="tabs" :items="tabs")
  template(#item-content="{ item }")
    w-input.my6(v-model="item.title" label="Tab title" @keyup="onTitleChange")`,-1)]]),html:t(()=>[...u[82]||=[o(`<w-tabs ref="tabs" :items="tabs">
  <template #item-content="{ item }">
    <w-input
      v-model="item.title"
      class="my6"
      label="Tab title"
      @keyup="onTitleChange">
    </w-input>
  </template>
</w-tabs>`,-1)]]),js:t(()=>[...u[83]||=[o(`data: () => ({
  tabs: [
    { title: 'Tab 1' },
    { title: 'Tab 2' },
    { title: 'Tab 3' }
  ]
}),

methods: {
  onTitleChange () {
    this.$refs.tabs.updateSlider()
  }
})`,-1)]]),default:t(()=>[a(b,{ref:`tabs`,items:c.tabs8},{"item-content":t(({item:e})=>[a(O,{class:`my6`,modelValue:e.title,"onUpdate:modelValue":t=>e.title=t,label:`Tab title`,onKeyup:v.onTitleChange},null,8,[`modelValue`,`onUpdate:modelValue`,`onKeyup`])]),_:1},8,[`items`])]),_:1})])}var g=c({data:()=>({tabs1:[{title:`Tab 1`,content:`Tab 1 content.`},{title:`Tab 2`,content:`Tab 2 content.`},{title:`Tab 3 has a long title`,content:`Tab 3 content.`}],tabs2:{items:[{title:`Tab 1`,content:`Tab 1 content.`},{title:`Tab 2`,content:`Tab 2 content.`},{title:`Tab 3`,content:`Tab 3 content.`},{title:`Tab 4`,content:`Tab 4 content.`},{title:`Tab 5`,content:`Tab 5 content.`,disabled:!0}],active:2,fillBar:!0,slider:!1},tabs3:{tabsCount:3},tabs4:{items:[{title:`Tab 1`,content:`Tab 1 content.`},{title:`Tab 2`,content:`Tab 2 content.`},{title:`Tab 3`,content:`Tab 3 content.`}],transition:`fade`},tabs5:[{title:`Tab 1`,content:`Tab 1 content.`},{title:`Tab 2`,content:`Tab 2 content.`},{title:`Tab 3`,content:`Tab 3 content.`}],tabs6:{items:[{title:`Tab 1`,content:`Tab 1 content.`},{title:`Tab 2`,content:`Tab 2 content.`},{title:`Tab 3`,content:`Tab 3 content.`}],originals:[{title:`Tab 1`,content:`Tab 1 content.`},{title:`Tab 2`,content:`Tab 2 content.`},{title:`Tab 3`,content:`Tab 3 content.`}]},tabs7:{tabsCount:3,currentTab:1},tabs8:[{title:`Tab 1`},{title:`Tab 2`},{title:`Tab 3`}],transitions:[{label:`default`,value:``},{label:`fade`},{label:`slide-fade-up`},{label:`slide-fade-down`},{label:`slide-fade-left`},{label:`slide-fade-right`},{label:`scale-fade`},{label:`none`,value:!1}]}),methods:{onTitleChange(){this.$nextTick(this.$refs.tabs.updateSlider)}}},[[`render`,h]]);function _(n,c,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return s(),i(`div`,null,[c[1]||=r(`div`,{class:`w-divider my12`},null,-1),a(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[o(`API`,-1)]]),_:1}),a(m,{class:`mt0`,items:f.props,descriptions:n.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),a(m,{items:n.slots,title:`Slots`},null,8,[`items`]),a(m,{items:f.events,title:`Events`},null,8,[`items`])])}var v={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide a tab index (a number starting from 0) to open it. This value gets updated when using a v-model.`,color:`Applies a color to the each tab title's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the each tab title's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,items:`Expecting an array of objects. Each object being an tab item, it should include a <code>title</code> and <code>content</code> attributes.<br>Alternatively, you can provide an integer number (call it <em class="code">x</em>), to loop through and create <em class="code">x</em> tabs. You can then use the individual slots <code>item-title.x</code> &amp; <code>item-content.x</code> to define each item title and content.`,itemIdKey:`Specifies the property on each tab item that holds a stable unique key (default: <code>id</code>). You should set it when you add, remove, or reorder tabs dynamically so selection and transitions stay correct.<br>If missing on an item, Wave UI injects a stable key derived from Vue’s <code>useId()</code> and the tab index so server HTML and client hydration stay in sync (no reliance on internal Vue instance ids).`,itemTitleKey:`Specifies the name of the property in each item object where to find the item's title string.`,itemContentKey:`Specifies the name of the property in each item object where to find the item's content string.`,titleClass:`Applies a custom CSS class to the tab title.`,activeClass:`Applies a custom CSS class to the active tab title.`,noSlider:`When set to <code>true</code>, removes the slider under the active tab title.`,pillSlider:`When set to <code>true</code>, places the slider under the active tab title text in a pill shape.`,sliderColor:`Provide a custom color for the tabs slider (<code>primary</code> by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,contentClass:`Applies a custom CSS class to the tab content.`,transition:`Applies a particular transition to the tab contents when switching tab.<br>Check all the transitions that apply to this component in the <a href="#content-transitions">Content transitions</a> example.`,fillBar:`When set to <code>true</code>, the tabs titles will occupy the full available width.`,center:`Centers the tabs titles.`,right:`Aligns the tabs titles to the right.`,card:`Applies the card style on all the tabs titles.`,keepInDom:`<span class="grey text-italic">Will deactivate the <code>keep-alive</code> prop.</span> When set to <code>true</code>, the tabs will always stay in the DOM (even when not the active tab), unless they are deleted in the tabs array.<br>Note that the <code>mounted</code> hook will be run once per tab, as soon as they are appended to the DOM.<br>The default behavior is to keep the tabs alive, but unmount any inactive tab from the DOM.`,keepAlive:`When set to <code>true</code> and by default, the tabs will be kept alive. Which means that the state of the components in each tab will be maintained when switching tabs and the <code>mounted</code> hook will only be run the first time it is open.<br>When explicitly set to <code>false</code>, the tab state will be reset upon each reopening, and the <code>mounted</code> hook will be run again.<br>The default behavior is to keep the tabs alive, but unmount any inactive tab from the DOM.<br>You can read more about the keep-alive behavior in the <a href="https://vuejs.org/guide/built-ins/keep-alive.html" target="_blank">Vue official documentation for keep-alive <i class="w-icon mdi mdi-open-in-new"></i></a>.`,noRipple:`When <code>true</code>, disables the pointer ripple on this tabs instance. By default, ripple follows <code>$waveui.config.ripple</code>.`},y={"item-title":{description:`Provide a custom title for every tab. Applies to all the tabs, but can be overridden by the <code>item-title.x</code> slot.`,params:{item:`The current tab object.`,index:`The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.`,active:`A boolean representing the active state of the tab.`}},"item-title.x":{description:`<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom title for a single tab: the tab at the index <em class="code">x</em>.`,params:{item:`The current tab object.`,index:`The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.`,active:`A boolean representing the active state of the tab.`}},"item-content":{description:`Provide a custom content for every tab. Applies to all the tabs, but can be overridden by the <code>item-content.x</code> slot.`,params:{item:`The current tab object.`,index:`The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.`,active:`A boolean representing the active state of the tab.`}},"item-content.x":{description:`<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single tab: the tab at the index <em class="code">x</em>.`,params:{item:`The current tab object.`,index:`The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.`,active:`A boolean representing the active state of the tab.`}}},b={input:{description:`Emitted each time the current tab changes.<br>Updates the v-model value in Vue 2.x only.`,params:{"[Array]":`An array of booleans representing the active state of each tab.`}},"update:modelValue":{description:`Emitted each time the current tab changes.<br>Updates the v-model value in Vue 3 only.`,params:{"[Array]":`An array of booleans representing the active state of each tab.`}},focus:{description:`Emitted on each tab title focus.`,params:{"[Object]":`The focused tab item object.`}}},x=c({data:()=>({propsDescs:v,slots:y}),computed:{props(){return u.props},events(){return u.emits.reduce((e,t)=>(e[t]=b[t]||{},e),{})}}},[[`render`,_]]);function S(n,r,c,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return s(),i(`main`,null,[a(f,null,{default:t(()=>[...r[0]||=[o(`w-tabs`,-1)]]),_:1}),a(p),a(m)])}var C=c({components:{Examples:g,Api:x}},[[`render`,S]]);export{C as default};
