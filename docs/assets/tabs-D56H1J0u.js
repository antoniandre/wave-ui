import{N as e,U as t,c as n,d as r,g as i,h as a,k as o,yt as s}from"./runtime-core.esm-bundler-BAjkj7eY.js";import{l as c}from"./runtime-dom.esm-bundler-Cc0sF0om.js";import{t as l}from"./_plugin-vue_export-helper-S3RvzygF.js";import{c as u}from"./index-CI5qOTMg.js";var d={class:`ml2`},f={class:`green`},p={class:`pink mx1`},m=[`innerHTML`];function h(l,u,h,g,_,v){let y=e(`title-link`),b=e(`w-tabs`),x=e(`example`),S=e(`w-switch`),C=e(`alert`),w=e(`w-radios`),T=e(`w-button`),E=e(`w-flex`),D=e(`w-icon`),O=e(`w-input`);return o(),r(`div`,null,[i(y,{h2:``},{default:t(()=>[...u[9]||=[a(`Basic`,-1)]]),_:1}),i(x,null,{pug:t(()=>[...u[10]||=[a(`w-tabs(:items="tabs")`,-1)]]),html:t(()=>[...u[11]||=[a(`<w-tabs :items="tabs"></w-tabs>`,-1)]]),js:t(()=>[...u[12]||=[a(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3 has a long title', content: 'Tab 3 content.' }
  ]
})
`,-1)]]),default:t(()=>[i(b,{items:l.tabs1},null,8,[`items`])]),_:1}),i(y,{h2:``},{default:t(()=>[...u[13]||=[a(`Align center and right`,-1)]]),_:1}),i(x,null,{pug:t(()=>[...u[14]||=[a(`w-tabs(:items="tabs" center)
br
w-tabs(:items="tabs" right)`,-1)]]),html:t(()=>[...u[15]||=[a(`<w-tabs :items="tabs" center></w-tabs>
<br />
<w-tabs :items="tabs" right></w-tabs>`,-1)]]),js:t(()=>[...u[16]||=[a(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' }
  ]
})
`,-1)]]),default:t(()=>[i(b,{items:l.tabs4.items,center:``},null,8,[`items`]),i(b,{class:`mt4`,items:l.tabs4.items,right:``},null,8,[`items`])]),_:1}),i(y,{h2:``},{default:t(()=>[...u[17]||=[a(`Fill bar & disabled items`,-1)]]),_:1}),i(x,null,{pug:t(()=>[...u[19]||=[a(`w-switch.mb3(v-model="fillBar") Fill bar
w-tabs(:items="tabs" :fill-bar="fillBar")`,-1)]]),html:t(()=>[...u[20]||=[a(`<w-switch v-model="fillBar" class="mb3">
  Fill bar
</w-switch>

<w-tabs :items="tabs" :fill-bar="fillBar"></w-tabs>`,-1)]]),js:t(()=>[...u[21]||=[a(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ],
  fillBar: true
})
`,-1)]]),default:t(()=>[i(S,{class:`mb3`,modelValue:l.tabs2.fillBar,"onUpdate:modelValue":u[0]||=e=>l.tabs2.fillBar=e},{default:t(()=>[...u[18]||=[a(`Fill bar`,-1)]]),_:1},8,[`modelValue`]),i(b,{items:l.tabs2.items,"fill-bar":l.tabs2.fillBar},null,8,[`items`,`fill-bar`])]),_:1}),i(y,{h2:``},{default:t(()=>[...u[22]||=[a(`V-model`,-1)]]),_:1}),i(C,{warning:``},{default:t(()=>[...u[23]||=[n(`strong`,null,`Since version 1.21.0`,-1),a(`, the v-model/value only accepts a numeric tab index (previously an array of boolean).`,-1)]]),_:1}),u[84]||=n(`p`,null,[a(`It is possible to open a particular tab programmatically via `),n(`code`,null,`v-model`),a(` or `),n(`code`,null,`model-value`),a(`.`)],-1),i(x,null,{pug:t(()=>[...u[25]||=[a(`w-tabs(v-model="activeTab" :items="tabs")
strong
  | v-model:
  code.ml2 `+s(`{{ activeTab }}`),-1)]]),html:t(()=>[...u[26]||=[a(`<w-tabs v-model="activeTab" :items="tabs"></w-tabs>

<strong>
  v-model:
  <code class="ml2">
    `+s(`{{ activeTab }}`)+`
  </code>
</strong>`,-1)]]),js:t(()=>[...u[27]||=[a(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ],
  activeTab: 2
})
`,-1)]]),default:t(()=>[i(b,{class:`mb2`,modelValue:l.tabs2.active,"onUpdate:modelValue":u[1]||=e=>l.tabs2.active=e,items:l.tabs2.items},null,8,[`modelValue`,`items`]),n(`strong`,null,[u[24]||=a(`v-model:`,-1),n(`code`,d,s(l.tabs2.active),1)])]),_:1}),i(y,{h2:``},{default:t(()=>[...u[28]||=[a(`Colors`,-1)]]),_:1}),u[85]||=n(`p`,null,[a(`Like in most components, you can set a `),n(`code`,null,`color`),a(` for the text and a `),n(`code`,null,`bg-color`),a(` for the
background. You can also set a `),n(`code`,null,`slider-color`),a(` and an `),n(`code`,null,`active-class`),a(`.
`)],-1),u[86]||=n(`div`,{class:`title3`},`Color & bg-color`,-1),i(x,null,{pug:t(()=>[a(`w-tabs(:items="tabs" color="blue" bg-color="`+s(l.$store.state.darkMode?`indigo-dark6`:`indigo-light5`)+`")`,1)]),html:t(()=>[a(`<w-tabs
  :items="tabs"
  color="blue"
  bg-color="`+s(l.$store.state.darkMode?`indigo-dark6`:`indigo-light5`)+`">
</w-tabs>`,1)]),js:t(()=>[...u[29]||=[a(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})
`,-1)]]),default:t(()=>[i(b,{items:l.tabs2.items,color:`blue`,"bg-color":l.$store.state.darkMode?`indigo-dark6`:`indigo-light5`},null,8,[`items`,`bg-color`])]),_:1}),u[87]||=n(`div`,{class:`title3 mt4`},`Slider color`,-1),i(x,null,{pug:t(()=>[...u[30]||=[a(`w-tabs(:items="tabs" slider-color="blue-light2")`,-1)]]),html:t(()=>[...u[31]||=[a(`<w-tabs
  :items="tabs"
  slider-color="blue-light2">
</w-tabs>`,-1)]]),js:t(()=>[...u[32]||=[a(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})
`,-1)]]),default:t(()=>[i(b,{items:l.tabs2.items,"slider-color":`blue-light2`},null,8,[`items`])]),_:1}),u[88]||=n(`div`,{class:`title3`},`Active class`,-1),i(x,null,{pug:t(()=>[...u[33]||=[a(`w-tabs(
  :items="tabs"
  color="blue"
  active-class="pink"
  slider-color="pink")`,-1)]]),html:t(()=>[...u[34]||=[a(`<w-tabs
  :items="tabs"
  color="blue"
  active-class="pink"
  slider-color="pink">
</w-tabs>`,-1)]]),js:t(()=>[...u[35]||=[a(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})
`,-1)]]),default:t(()=>[i(b,{items:l.tabs2.items,color:`blue`,"active-class":`pink`,"slider-color":`pink`},null,8,[`items`])]),_:1}),i(y,{h2:``},{default:t(()=>[...u[36]||=[a(`Pill slider`,-1)]]),_:1}),i(x,null,{pug:t(()=>[...u[37]||=[a(`w-tabs(:items="tabs" pill-slider)`,-1)]]),html:t(()=>[...u[38]||=[a(`<w-tabs :items="tabs" pill-slider></w-tabs>`,-1)]]),js:t(()=>[...u[39]||=[a(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})`,-1)]]),default:t(()=>[i(b,{items:l.tabs2.items,"pill-slider":``},null,8,[`items`])]),_:1}),i(y,{h3:``},{default:t(()=>[...u[40]||=[a(`Example of a different style, involving some external CSS`,-1)]]),_:1}),i(x,{reactive:``},{pug:t(()=>[...u[41]||=[a(`w-tabs(:items="tabs" pill-slider)`,-1)]]),html:t(()=>[...u[42]||=[a(`<w-tabs :items="tabs" pill-slider></w-tabs>`,-1)]]),js:t(()=>[...u[43]||=[a(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})`,-1)]]),css:t(()=>[a(`.w-app .w-tabs {border: none;}
.w-app .w-tabs__bar {
  display: inline-flex;
  margin-bottom: 12px;
  padding: 0;
  background: `+s(l.$store.state.darkMode?`#181818`:`#eee`)+`;
  border-radius: 6px;
  border: 1px solid `+s(l.$store.state.darkMode?`#222`:`#ddd`)+`;
  z-index: 0;
  overflow: visible;
}
.w-app .w-tabs__slider {
  opacity: 1;
  background-color: `+s(l.$store.state.darkMode?`#2c2c2c`:`#fff`)+`;
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
  border-left: 1px solid `+s(l.$store.state.darkMode?`#262626`:`#d2d2d2`)+`;
  display: block;
  opacity: 1;
}
.w-app .w-tabs__bar-item:first-child:before {display: none;}
`,1)]),default:t(()=>[i(b,{class:`macos-tabs`,items:l.tabs2.items,"pill-slider":``},null,8,[`items`])]),_:1}),i(y,{h2:``},{default:t(()=>[...u[44]||=[a(`No slider`,-1)]]),_:1}),i(x,null,{pug:t(()=>[...u[46]||=[a(`w-switch.mb3(v-model="tabsSlider") Slider
w-tabs(:items="tabs" :no-slider="!tabsSlider" active-class="pink")`,-1)]]),html:t(()=>[...u[47]||=[a(`<w-switch class="mb3" v-model="tabsSlider">
  Slider
</w-switch>

<w-tabs
  :items="tabs"
  :no-slider="!tabsSlider"
  active-class="pink">
</w-tabs>`,-1)]]),js:t(()=>[...u[48]||=[a(`data: () => ({
  tabsSlider: false,
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})
`,-1)]]),default:t(()=>[i(S,{class:`mb3`,modelValue:l.tabs2.slider,"onUpdate:modelValue":u[2]||=e=>l.tabs2.slider=e},{default:t(()=>[...u[45]||=[a(`Slider`,-1)]]),_:1},8,[`modelValue`]),i(b,{items:l.tabs2.items,"no-slider":!l.tabs2.slider,"active-class":`pink`},null,8,[`items`,`no-slider`])]),_:1}),i(y,{h2:``},{default:t(()=>[...u[49]||=[a(`Content transitions`,-1)]]),_:1}),u[89]||=n(`p`,null,`Change tab to see the transition.`,-1),i(x,null,{pug:t(()=>[...u[50]||=[a(`w-radios.mb3(:items="transitions" v-model="transition")
w-tabs(:items="tabs" :transition="transition")`,-1)]]),html:t(()=>[...u[51]||=[a(`<w-radios
  class="mb3"
  :items="transitions"
  v-model="transition">
</w-radios>

<w-tabs
  :items="tabs"
  :transition="transition">
</w-tabs>`,-1)]]),js:t(()=>[...u[52]||=[a(`data: () => ({
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
`,-1)]]),default:t(()=>[i(w,{class:`mb3`,items:l.transitions,modelValue:l.tabs4.transition,"onUpdate:modelValue":u[3]||=e=>l.tabs4.transition=e},null,8,[`items`,`modelValue`]),i(b,{items:l.tabs4.items,transition:l.tabs4.transition},null,8,[`items`,`transition`])]),_:1}),i(y,{h2:``},{default:t(()=>[...u[53]||=[a(`Add / remove tabs`,-1)]]),_:1}),u[90]||=n(`p`,null,`The tabs will naturally try to fit in the available space. But if they can't fit because there are
too many, a scrollbar will allow navigation to all the tabs.`,-1),i(x,null,{pug:t(()=>[...u[55]||=[a(`w-flex.mb3(align-center)
  | Number of tabs:
  w-button.mx2(icon="wi-minus" sm @click="tabsCount -= tabsCount < 1 ? 0 : 1")
  code `+s(`{{ tabsCount }}`)+`
  w-button.mx2(icon="wi-plus" sm @click="tabsCount++")
w-tabs(:items="tabsCount")
  template(#item-title="{ index }") Tab `+s(`{{ index }}`)+`
  template(#item-content="{ index }") Content `+s(`{{ index }}`),-1)]]),html:t(()=>[...u[56]||=[a(`<w-flex class="mb3" align-center>
  Number of tabs:
  <w-button
    class="mx2"
    icon="wi-minus"
    sm
    @click="tabsCount -= tabsCount < 1 ? 0 : 1">
  </w-button>

  <code>`+s(`{{ tabsCount }}`)+`</code>

  <w-button
    class="mx2"
    icon="wi-plus"
    sm
    @click="tabsCount++">
  </w-button>
</w-flex>

<w-tabs :items="tabsCount">
  <template #item-title="{ index }">
    Tab `+s(`{{ index }}`)+`
  </template>

  <template #item-content="{ index }">
    Content `+s(`{{ index }}`)+`
  </template>
</w-tabs>`,-1)]]),js:t(()=>[...u[57]||=[a(`data: () => ({
  tabsCount: 3
})
`,-1)]]),default:t(()=>[i(E,{class:`mb3`,"align-center":``},{default:t(()=>[u[54]||=a(`Number of tabs:`,-1),i(T,{class:`mx2`,icon:`wi-minus`,sm:``,onClick:u[4]||=e=>l.tabs3.tabsCount-=l.tabs3.tabsCount<1?0:1}),n(`code`,null,s(l.tabs3.tabsCount),1),i(T,{class:`mx2`,icon:`wi-plus`,sm:``,onClick:u[5]||=e=>l.tabs3.tabsCount++})]),_:1}),i(b,{items:l.tabs3.tabsCount},{"item-title":t(({index:e})=>[a(`Tab `+s(e),1)]),"item-content":t(({index:e})=>[a(`Content `+s(e),1)]),_:1},8,[`items`])]),_:1}),i(y,{h2:``},{default:t(()=>[...u[58]||=[a(`Card style tabs`,-1)]]),_:1}),i(x,null,{pug:t(()=>[...u[59]||=[a(`w-tabs(:items="tabs" card)`,-1)]]),html:t(()=>[...u[60]||=[a(`<w-tabs :items="tabs" card></w-tabs>`,-1)]]),js:t(()=>[...u[61]||=[a(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3 has a long title', content: 'Tab 3 content.' }
  ]
})
`,-1)]]),default:t(()=>[i(b,{items:l.tabs1,card:``},null,8,[`items`])]),_:1}),i(y,{h2:``},{default:t(()=>[...u[62]||=[a(`Close button`,-1)]]),_:1}),i(C,{tip:``},{default:t(()=>[...u[63]||=[a(`When using a close button, don't forget to stop the click propagation `,-1),n(`code`,null,`@click.stop`,-1),a(` to prevent
the navigation to the tab that you are deleting!`,-1)]]),_:1}),i(x,null,{pug:t(()=>[...u[65]||=[a(`w-tabs(:items="tabs" card)
  template(#item-title="{ item, index }")
    | `+s(`{{ item.title }}`)+`
    w-button.ml1.mr-1(
      @click.stop="tabs.splice(index - 1, 1)"
      icon="wi-cross"
      outline
      xs)`,-1)]]),html:t(()=>[...u[66]||=[a(`<w-tabs :items="tabs" card>
  <template #item-title="{ item, index }">
    `+s(`{{ item.title }}`)+`
    <w-button
      class="ml1 mr-1"
      @click.stop="tabs.splice(index - 1, 1)"
      icon="wi-cross"
      outline
      xs>
    </w-button>
  </template>
</w-tabs>`,-1)]]),js:t(()=>[...u[67]||=[a(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' }
  ]
})
`,-1)]]),default:t(()=>[i(b,{items:l.tabs6.items,card:``},{"item-title":t(({item:e,index:t})=>[a(s(e.title),1),i(T,{class:`ml1 mr-1`,onClick:c(e=>l.tabs6.items.splice(t-1,1),[`stop`]),icon:`wi-cross`,outline:``,xs:``},null,8,[`onClick`])]),_:1},8,[`items`]),i(T,{class:`mt4`,"bg-color":`primary`,onClick:u[6]||=e=>l.tabs6.items=l.tabs6.originals.slice(0),disabled:l.tabs6.items.length===3},{default:t(()=>[...u[64]||=[a(`Reset tabs`,-1)]]),_:1},8,[`disabled`])]),_:1}),i(y,{h2:``},{default:t(()=>[...u[68]||=[a(`Customizing the tabs title & contents`,-1)]]),_:1}),i(x,null,{pug:t(()=>[...u[73]||=[a(`w-tabs(:items="tabs" card)
  template(#item-title="{ item }")
    w-icon.mr1.green mdi mdi-star
    span.green `+s(`{{ item.title }}`)+`
  template(#item-title.3="{ item }")
    w-icon.pink mdi mdi-heart
    span.pink.mx1 `+s(`{{ item.title }}`)+`
    w-icon.pink mdi mdi-heart
  template(#item-content.1="{ item }")
    .title3 This is a custom tab content.
    div(v-html="item.content")`,-1)]]),html:t(()=>[...u[74]||=[a(`<w-tabs :items="tabs" card>
  <template #item-title="{ item }">
    <w-icon class="mr1 green">
      mdi mdi-star
    </w-icon>

    <span class="green">
      `+s(`{{ item.title }}`)+`
    </span>
  </template>

  <template #item-title.3="{ item }">
    <w-icon class="pink">
      mdi mdi-heart
    </w-icon>

    <span class="pink mx1">
      `+s(`{{ item.title }}`)+`
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
</w-tabs>`,-1)]]),js:t(()=>[...u[75]||=[a(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' }
  ]
})
`,-1)]]),default:t(()=>[i(b,{items:l.tabs5,card:``},{"item-title":t(({item:e})=>[i(D,{class:`mr1 green`},{default:t(()=>[...u[69]||=[a(`mdi mdi-star`,-1)]]),_:1}),n(`span`,f,s(e.title),1)]),"item-title.3":t(({item:e})=>[i(D,{class:`pink`},{default:t(()=>[...u[70]||=[a(`mdi mdi-heart`,-1)]]),_:1}),n(`span`,p,s(e.title),1),i(D,{class:`pink`},{default:t(()=>[...u[71]||=[a(`mdi mdi-heart`,-1)]]),_:1})]),"item-content.1":t(({item:e})=>[u[72]||=n(`div`,{class:`title3`},`This is a custom tab content.`,-1),n(`div`,{innerHTML:e.content},null,8,m)]),_:1},8,[`items`])]),_:1}),i(y,{h2:``},{default:t(()=>[...u[76]||=[a(`Adding a tabs bar extra element`,-1)]]),_:1}),u[91]||=n(`p`,null,[a(`You can add extra elements at the right of the tabs title bar via the `),n(`code`,null,`tabs-bar-extra`),a(` slot.`),n(`br`),a(`
Once the tabs are updated (in the next Vue tick), you can open the newly added tab.`)],-1),i(x,null,{pug:t(()=>[...u[77]||=[a(`w-tabs(:items="tabs.tabsCount" v-model="tabs.currentTab")
  template(#item-title="{ index }") Item title `+s(`{{ index }}`)+`
  template(#item-content="{ index }") Item content `+s(`{{ index }}`)+`
  template(#tabs-bar-extra)
    w-button.bdrsr.mr2(
      icon="wi-plus"
      @click="tabs.tabsCount++;$nextTick(() => tabs.currentTab = tabs.tabsCount - 1)")`,-1)]]),html:t(()=>[...u[78]||=[a(`<w-tabs
  :items="tabs.tabsCount"
  v-model="tabs.currentTab">
  <template #item-title="{ index }">
    Item title `+s(`{{ index }}`)+`
  </template>

  <template #item-content="{ index }">
    Item content `+s(`{{ index }}`)+`
  </template>

  <template #tabs-bar-extra>
    <w-button
      icon="wi-plus"
      @click="tabs.tabsCount++;$nextTick(() => tabs.currentTab = tabs.tabsCount - 1)"
      class="bdrsr mr2">
    </w-button>
  </template>
</w-tabs>`,-1)]]),js:t(()=>[...u[79]||=[a(`data: () => ({
  tabs: {
    tabsCount: 3,
    currentTab: 1
  }
})
`,-1)]]),default:t(()=>[i(b,{items:l.tabs7.tabsCount,modelValue:l.tabs7.currentTab,"onUpdate:modelValue":u[8]||=e=>l.tabs7.currentTab=e},{"item-title":t(({index:e})=>[a(`Item title `+s(e),1)]),"item-content":t(({index:e})=>[a(`Item content `+s(e),1)]),"tabs-bar-extra":t(()=>[i(T,{class:`bdrsr mr2`,icon:`wi-plus`,onClick:u[7]||=e=>{l.tabs7.tabsCount++,l.$nextTick(()=>l.tabs7.currentTab=l.tabs7.tabsCount-1)}})]),_:1},8,[`items`,`modelValue`])]),_:1}),i(y,{h2:``},{default:t(()=>[...u[80]||=[a(`Refreshing the slider width or position`,-1)]]),_:1}),u[92]||=n(`p`,null,[a(`By default there is no data watcher on the tabs title to recalculate the slider width or position.`),n(`br`),a(`
But you may need to update the slider width for various reasons.
Thanks to the `),n(`code`,null,`updateSlider`),a(` method, this is quite straightforward.`),n(`br`),a(`
In this scenario, the slider width is updated on title change from the `),n(`strong`,{class:`code`},`w-input`),a(` field,
so the slider width adapts to the number of characters on the current tab's title.`)],-1),i(x,null,{pug:t(()=>[...u[81]||=[a(`w-tabs(ref="tabs" :items="tabs")
  template(#item-content="{ item }")
    w-input.my6(v-model="item.title" label="Tab title" @keyup="onTitleChange")`,-1)]]),html:t(()=>[...u[82]||=[a(`<w-tabs ref="tabs" :items="tabs">
  <template #item-content="{ item }">
    <w-input
      v-model="item.title"
      class="my6"
      label="Tab title"
      @keyup="onTitleChange">
    </w-input>
  </template>
</w-tabs>`,-1)]]),js:t(()=>[...u[83]||=[a(`data: () => ({
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
}`,-1)]]),default:t(()=>[i(b,{ref:`tabs`,items:l.tabs8},{"item-content":t(({item:e})=>[i(O,{class:`my6`,modelValue:e.title,"onUpdate:modelValue":t=>e.title=t,label:`Tab title`,onKeyup:v.onTitleChange},null,8,[`modelValue`,`onUpdate:modelValue`,`onKeyup`])]),_:1},8,[`items`])]),_:1})])}var g=l({data:()=>({tabs1:[{title:`Tab 1`,content:`Tab 1 content.`},{title:`Tab 2`,content:`Tab 2 content.`},{title:`Tab 3 has a long title`,content:`Tab 3 content.`}],tabs2:{items:[{title:`Tab 1`,content:`Tab 1 content.`},{title:`Tab 2`,content:`Tab 2 content.`},{title:`Tab 3`,content:`Tab 3 content.`},{title:`Tab 4`,content:`Tab 4 content.`},{title:`Tab 5`,content:`Tab 5 content.`,disabled:!0}],active:2,fillBar:!0,slider:!1},tabs3:{tabsCount:3},tabs4:{items:[{title:`Tab 1`,content:`Tab 1 content.`},{title:`Tab 2`,content:`Tab 2 content.`},{title:`Tab 3`,content:`Tab 3 content.`}],transition:`fade`},tabs5:[{title:`Tab 1`,content:`Tab 1 content.`},{title:`Tab 2`,content:`Tab 2 content.`},{title:`Tab 3`,content:`Tab 3 content.`}],tabs6:{items:[{title:`Tab 1`,content:`Tab 1 content.`},{title:`Tab 2`,content:`Tab 2 content.`},{title:`Tab 3`,content:`Tab 3 content.`}],originals:[{title:`Tab 1`,content:`Tab 1 content.`},{title:`Tab 2`,content:`Tab 2 content.`},{title:`Tab 3`,content:`Tab 3 content.`}]},tabs7:{tabsCount:3,currentTab:1},tabs8:[{title:`Tab 1`},{title:`Tab 2`},{title:`Tab 3`}],transitions:[{label:`default`,value:``},{label:`fade`},{label:`slide-fade-up`},{label:`slide-fade-down`},{label:`slide-fade-left`},{label:`slide-fade-right`},{label:`scale-fade`},{label:`none`,value:!1}]}),methods:{onTitleChange(){this.$nextTick(this.$refs.tabs.updateSlider)}}},[[`render`,h]]);function _(s,c,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return o(),r(`div`,null,[c[1]||=n(`div`,{class:`w-divider my12`},null,-1),i(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[a(`API`,-1)]]),_:1}),i(m,{class:`mt0`,items:f.props,descriptions:s.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),i(m,{items:s.slots,title:`Slots`},null,8,[`items`]),i(m,{items:f.events,title:`Events`},null,8,[`items`])])}var v={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide a tab index (a number starting from 0) to open it. This value gets updated when using a v-model.`,color:`Applies a color to the each tab title's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the each tab title's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,items:`Expecting an array of objects. Each object being an tab item, it should include a <code>title</code> and <code>content</code> attributes.<br>Alternatively, you can provide an integer number (call it <em class="code">x</em>), to loop through and create <em class="code">x</em> tabs. You can then use the individual slots <code>item-title.x</code> &amp; <code>item-content.x</code> to define each item title and content.`,itemIdKey:`Specifies the property on each tab item that holds a stable unique key (default: <code>id</code>). You should set it when you add, remove, or reorder tabs dynamically so selection and transitions stay correct.<br>If missing on an item, Wave UI injects a stable key derived from Vue’s <code>useId()</code> and the tab index so server HTML and client hydration stay in sync (no reliance on internal Vue instance ids).`,itemTitleKey:`Specifies the name of the property in each item object where to find the item's title string.`,itemContentKey:`Specifies the name of the property in each item object where to find the item's content string.`,titleClass:`Applies a custom CSS class to the tab title.`,activeClass:`Applies a custom CSS class to the active tab title.`,noSlider:`When set to <code>true</code>, removes the slider under the active tab title.`,pillSlider:`When set to <code>true</code>, places the slider under the active tab title text in a pill shape.`,sliderColor:`Provide a custom color for the tabs slider (<code>primary</code> by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,contentClass:`Applies a custom CSS class to the tab content.`,transition:`Applies a particular transition to the tab contents when switching tab.<br>Check all the transitions that apply to this component in the <a href="#content-transitions">Content transitions</a> example.`,fillBar:`When set to <code>true</code>, the tabs titles will occupy the full available width.`,center:`Centers the tabs titles.`,right:`Aligns the tabs titles to the right.`,card:`Applies the card style on all the tabs titles.`,keepInDom:`<span class="grey text-italic">Will deactivate the <code>keep-alive</code> prop.</span> When set to <code>true</code>, the tabs will always stay in the DOM (even when not the active tab), unless they are deleted in the tabs array.<br>Note that the <code>mounted</code> hook will be run once per tab, as soon as they are appended to the DOM.<br>The default behavior is to keep the tabs alive, but unmount any inactive tab from the DOM.`,keepAlive:`When set to <code>true</code> and by default, the tabs will be kept alive. Which means that the state of the components in each tab will be maintained when switching tabs and the <code>mounted</code> hook will only be run the first time it is open.<br>When explicitly set to <code>false</code>, the tab state will be reset upon each reopening, and the <code>mounted</code> hook will be run again.<br>The default behavior is to keep the tabs alive, but unmount any inactive tab from the DOM.<br>You can read more about the keep-alive behavior in the <a href="https://vuejs.org/guide/built-ins/keep-alive.html" target="_blank">Vue official documentation for keep-alive <i class="w-icon mdi mdi-open-in-new"></i></a>.`},y={"item-title":{description:`Provide a custom title for every tab. Applies to all the tabs, but can be overridden by the <code>item-title.x</code> slot.`,params:{item:`The current tab object.`,index:`The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.`,active:`A boolean representing the active state of the tab.`}},"item-title.x":{description:`<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom title for a single tab: the tab at the index <em class="code">x</em>.`,params:{item:`The current tab object.`,index:`The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.`,active:`A boolean representing the active state of the tab.`}},"item-content":{description:`Provide a custom content for every tab. Applies to all the tabs, but can be overridden by the <code>item-content.x</code> slot.`,params:{item:`The current tab object.`,index:`The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.`,active:`A boolean representing the active state of the tab.`}},"item-content.x":{description:`<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single tab: the tab at the index <em class="code">x</em>.`,params:{item:`The current tab object.`,index:`The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.`,active:`A boolean representing the active state of the tab.`}}},b={input:{description:`Emitted each time the current tab changes.<br>Updates the v-model value in Vue 2.x only.`,params:{"[Array]":`An array of booleans representing the active state of each tab.`}},"update:modelValue":{description:`Emitted each time the current tab changes.<br>Updates the v-model value in Vue 3 only.`,params:{"[Array]":`An array of booleans representing the active state of each tab.`}},focus:{description:`Emitted on each tab title focus.`,params:{"[Object]":`The focused tab item object.`}}},x=l({data:()=>({propsDescs:v,slots:y}),computed:{props(){return u.props},events(){return u.emits.reduce((e,t)=>(e[t]=b[t]||{},e),{})}}},[[`render`,_]]);function S(n,s,c,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return o(),r(`main`,null,[i(f,null,{default:t(()=>[...s[0]||=[a(`w-tabs`,-1)]]),_:1}),i(p),i(m)])}var C=l({components:{Examples:g,Api:x}},[[`render`,S]]);export{C as default};