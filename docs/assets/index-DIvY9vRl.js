import{r as m,o as w,g as f,a,w as e,b as n,d as l,t as s,j as V,_ as g,a8 as x}from"./index-Bpc6IslX.js";const A={class:"ml2"},B={class:"green"},I={class:"pink mx1"},M=["innerHTML"];function P(i,t,v,h,k,u){const r=m("title-link"),b=m("w-tabs"),d=m("example"),y=m("w-switch"),C=m("alert"),S=m("w-radios"),p=m("w-button"),j=m("w-flex"),c=m("w-icon"),$=m("w-input");return w(),f("div",null,[a(r,{h2:""},{default:e(()=>t[9]||(t[9]=[n("Basic")])),_:1}),a(d,null,{pug:e(()=>t[10]||(t[10]=[n('w-tabs(:items="tabs")')])),html:e(()=>t[11]||(t[11]=[n('<w-tabs :items="tabs"></w-tabs>')])),js:e(()=>t[12]||(t[12]=[n(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3 has a long title', content: 'Tab 3 content.' }
  ]
})
`)])),default:e(()=>[a(b,{items:i.tabs1},null,8,["items"])]),_:1}),a(r,{h2:""},{default:e(()=>t[13]||(t[13]=[n("Align center and right")])),_:1}),a(d,null,{pug:e(()=>t[14]||(t[14]=[n(`w-tabs(:items="tabs" center)
br
w-tabs(:items="tabs" right)`)])),html:e(()=>t[15]||(t[15]=[n(`<w-tabs :items="tabs" center></w-tabs>
<br />
<w-tabs :items="tabs" right></w-tabs>`)])),js:e(()=>t[16]||(t[16]=[n(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' }
  ]
})
`)])),default:e(()=>[a(b,{items:i.tabs4.items,center:""},null,8,["items"]),a(b,{class:"mt4",items:i.tabs4.items,right:""},null,8,["items"])]),_:1}),a(r,{h2:""},{default:e(()=>t[17]||(t[17]=[n("Fill bar & disabled items")])),_:1}),a(d,null,{pug:e(()=>t[19]||(t[19]=[n(`w-switch.mb3(v-model="fillBar") Fill bar
w-tabs(:items="tabs" :fill-bar="fillBar")`)])),html:e(()=>t[20]||(t[20]=[n(`<w-switch v-model="fillBar" class="mb3">
  Fill bar
</w-switch>

<w-tabs :items="tabs" :fill-bar="fillBar"></w-tabs>`)])),js:e(()=>t[21]||(t[21]=[n(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ],
  fillBar: true
})
`)])),default:e(()=>[a(y,{class:"mb3",modelValue:i.tabs2.fillBar,"onUpdate:modelValue":t[0]||(t[0]=o=>i.tabs2.fillBar=o)},{default:e(()=>t[18]||(t[18]=[n("Fill bar")])),_:1},8,["modelValue"]),a(b,{items:i.tabs2.items,"fill-bar":i.tabs2.fillBar},null,8,["items","fill-bar"])]),_:1}),a(r,{h2:""},{default:e(()=>t[22]||(t[22]=[n("V-model")])),_:1}),a(C,{warning:""},{default:e(()=>t[23]||(t[23]=[l("strong",null,"Since version 1.21.0",-1),n(", the v-model/value only accepts a numeric tab index (previously an array of boolean).")])),_:1}),t[84]||(t[84]=l("p",null,[n("It is possible to open a particular tab programmatically via "),l("code",null,"v-model"),n(" or "),l("code",null,"model-value"),n(".")],-1)),a(d,null,{pug:e(()=>t[25]||(t[25]=[n(`w-tabs(v-model="activeTab" :items="tabs")
strong
  | v-model:
  code.ml2 `+s("{{ activeTab }}"))])),html:e(()=>t[26]||(t[26]=[n(`<w-tabs v-model="activeTab" :items="tabs"></w-tabs>

<strong>
  v-model:
  <code class="ml2">
    `+s("{{ activeTab }}")+`
  </code>
</strong>`)])),js:e(()=>t[27]||(t[27]=[n(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ],
  activeTab: 2
})
`)])),default:e(()=>[a(b,{class:"mb2",modelValue:i.tabs2.active,"onUpdate:modelValue":t[1]||(t[1]=o=>i.tabs2.active=o),items:i.tabs2.items},null,8,["modelValue","items"]),l("strong",null,[t[24]||(t[24]=n("v-model:")),l("code",A,s(i.tabs2.active),1)])]),_:1}),a(r,{h2:""},{default:e(()=>t[28]||(t[28]=[n("Colors")])),_:1}),t[85]||(t[85]=l("p",null,[n("Like in most components, you can set a "),l("code",null,"color"),n(" for the text and a "),l("code",null,"bg-color"),n(` for the
background. You can also set a `),l("code",null,"slider-color"),n(" and an "),l("code",null,"active-class"),n(`.
`)],-1)),t[86]||(t[86]=l("div",{class:"title3"},"Color & bg-color",-1)),a(d,null,{pug:e(()=>[n('w-tabs(:items="tabs" color="blue" bg-color="'+s(i.$store.state.darkMode?"indigo-dark6":"indigo-light5")+'")',1)]),html:e(()=>[n(`<w-tabs
  :items="tabs"
  color="blue"
  bg-color="`+s(i.$store.state.darkMode?"indigo-dark6":"indigo-light5")+`">
</w-tabs>`,1)]),js:e(()=>t[29]||(t[29]=[n(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})
`)])),default:e(()=>[a(b,{items:i.tabs2.items,color:"blue","bg-color":i.$store.state.darkMode?"indigo-dark6":"indigo-light5"},null,8,["items","bg-color"])]),_:1}),t[87]||(t[87]=l("div",{class:"title3 mt4"},"Slider color",-1)),a(d,null,{pug:e(()=>t[30]||(t[30]=[n('w-tabs(:items="tabs" slider-color="blue-light2")')])),html:e(()=>t[31]||(t[31]=[n(`<w-tabs
  :items="tabs"
  slider-color="blue-light2">
</w-tabs>`)])),js:e(()=>t[32]||(t[32]=[n(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})
`)])),default:e(()=>[a(b,{items:i.tabs2.items,"slider-color":"blue-light2"},null,8,["items"])]),_:1}),t[88]||(t[88]=l("div",{class:"title3"},"Active class",-1)),a(d,null,{pug:e(()=>t[33]||(t[33]=[n(`w-tabs(
  :items="tabs"
  color="blue"
  active-class="pink"
  slider-color="pink")`)])),html:e(()=>t[34]||(t[34]=[n(`<w-tabs
  :items="tabs"
  color="blue"
  active-class="pink"
  slider-color="pink">
</w-tabs>`)])),js:e(()=>t[35]||(t[35]=[n(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})
`)])),default:e(()=>[a(b,{items:i.tabs2.items,color:"blue","active-class":"pink","slider-color":"pink"},null,8,["items"])]),_:1}),a(r,{h2:""},{default:e(()=>t[36]||(t[36]=[n("Pill slider")])),_:1}),a(d,null,{pug:e(()=>t[37]||(t[37]=[n('w-tabs(:items="tabs" pill-slider)')])),html:e(()=>t[38]||(t[38]=[n('<w-tabs :items="tabs" pill-slider></w-tabs>')])),js:e(()=>t[39]||(t[39]=[n(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})`)])),default:e(()=>[a(b,{items:i.tabs2.items,"pill-slider":""},null,8,["items"])]),_:1}),a(r,{h3:""},{default:e(()=>t[40]||(t[40]=[n("Example of a different style, involving some external CSS")])),_:1}),a(d,{reactive:""},{pug:e(()=>t[41]||(t[41]=[n('w-tabs(:items="tabs" pill-slider)')])),html:e(()=>t[42]||(t[42]=[n('<w-tabs :items="tabs" pill-slider></w-tabs>')])),js:e(()=>t[43]||(t[43]=[n(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})`)])),css:e(()=>[n(`.w-app .w-tabs {border: none;}
.w-app .w-tabs__bar {
  display: inline-flex;
  margin-bottom: 12px;
  padding: 0;
  background: `+s(i.$store.state.darkMode?"#181818":"#eee")+`;
  border-radius: 6px;
  border: 1px solid `+s(i.$store.state.darkMode?"#222":"#ddd")+`;
  z-index: 0;
  overflow: visible;
}
.w-app .w-tabs__slider {
  opacity: 1;
  background-color: `+s(i.$store.state.darkMode?"#2c2c2c":"#fff")+`;
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
  border-left: 1px solid `+s(i.$store.state.darkMode?"#262626":"#d2d2d2")+`;
  display: block;
  opacity: 1;
}
.w-app .w-tabs__bar-item:first-child:before {display: none;}
`,1)]),default:e(()=>[a(b,{class:"macos-tabs",items:i.tabs2.items,"pill-slider":""},null,8,["items"])]),_:1}),a(r,{h2:""},{default:e(()=>t[44]||(t[44]=[n("No slider")])),_:1}),a(d,null,{pug:e(()=>t[46]||(t[46]=[n(`w-switch.mb3(v-model="tabsSlider") Slider
w-tabs(:items="tabs" :no-slider="!tabsSlider" active-class="pink")`)])),html:e(()=>t[47]||(t[47]=[n(`<w-switch class="mb3" v-model="tabsSlider">
  Slider
</w-switch>

<w-tabs
  :items="tabs"
  :no-slider="!tabsSlider"
  active-class="pink">
</w-tabs>`)])),js:e(()=>t[48]||(t[48]=[n(`data: () => ({
  tabsSlider: false,
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})
`)])),default:e(()=>[a(y,{class:"mb3",modelValue:i.tabs2.slider,"onUpdate:modelValue":t[2]||(t[2]=o=>i.tabs2.slider=o)},{default:e(()=>t[45]||(t[45]=[n("Slider")])),_:1},8,["modelValue"]),a(b,{items:i.tabs2.items,"no-slider":!i.tabs2.slider,"active-class":"pink"},null,8,["items","no-slider"])]),_:1}),a(r,{h2:""},{default:e(()=>t[49]||(t[49]=[n("Content transitions")])),_:1}),t[89]||(t[89]=l("p",null,"Change tab to see the transition.",-1)),a(d,null,{pug:e(()=>t[50]||(t[50]=[n(`w-radios.mb3(:items="transitions" v-model="transition")
w-tabs(:items="tabs" :transition="transition")`)])),html:e(()=>t[51]||(t[51]=[n(`<w-radios
  class="mb3"
  :items="transitions"
  v-model="transition">
</w-radios>

<w-tabs
  :items="tabs"
  :transition="transition">
</w-tabs>`)])),js:e(()=>t[52]||(t[52]=[n(`data: () => ({
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
`)])),default:e(()=>[a(S,{class:"mb3",items:i.transitions,modelValue:i.tabs4.transition,"onUpdate:modelValue":t[3]||(t[3]=o=>i.tabs4.transition=o)},null,8,["items","modelValue"]),a(b,{items:i.tabs4.items,transition:i.tabs4.transition},null,8,["items","transition"])]),_:1}),a(r,{h2:""},{default:e(()=>t[53]||(t[53]=[n("Add / remove tabs")])),_:1}),t[90]||(t[90]=l("p",null,`The tabs will naturally try to fit in the available space. But if they can't fit because there are
too many, a scrollbar will allow navigation to all the tabs.`,-1)),a(d,null,{pug:e(()=>t[55]||(t[55]=[n(`w-flex.mb3(align-center)
  | Number of tabs:
  w-button.mx2(icon="wi-minus" sm @click="tabsCount -= tabsCount < 1 ? 0 : 1")
  code `+s("{{ tabsCount }}")+`
  w-button.mx2(icon="wi-plus" sm @click="tabsCount++")
w-tabs(:items="tabsCount")
  template(#item-title="{ index }") Tab `+s("{{ index }}")+`
  template(#item-content="{ index }") Content `+s("{{ index }}"))])),html:e(()=>t[56]||(t[56]=[n(`<w-flex class="mb3" align-center>
  Number of tabs:
  <w-button
    class="mx2"
    icon="wi-minus"
    sm
    @click="tabsCount -= tabsCount < 1 ? 0 : 1">
  </w-button>

  <code>`+s("{{ tabsCount }}")+`</code>

  <w-button
    class="mx2"
    icon="wi-plus"
    sm
    @click="tabsCount++">
  </w-button>
</w-flex>

<w-tabs :items="tabsCount">
  <template #item-title="{ index }">
    Tab `+s("{{ index }}")+`
  </template>

  <template #item-content="{ index }">
    Content `+s("{{ index }}")+`
  </template>
</w-tabs>`)])),js:e(()=>t[57]||(t[57]=[n(`data: () => ({
  tabsCount: 3
})
`)])),default:e(()=>[a(j,{class:"mb3","align-center":""},{default:e(()=>[t[54]||(t[54]=n("Number of tabs:")),a(p,{class:"mx2",icon:"wi-minus",sm:"",onClick:t[4]||(t[4]=o=>i.tabs3.tabsCount-=i.tabs3.tabsCount<1?0:1)}),l("code",null,s(i.tabs3.tabsCount),1),a(p,{class:"mx2",icon:"wi-plus",sm:"",onClick:t[5]||(t[5]=o=>i.tabs3.tabsCount++)})]),_:1}),a(b,{items:i.tabs3.tabsCount},{"item-title":e(({index:o})=>[n("Tab "+s(o),1)]),"item-content":e(({index:o})=>[n("Content "+s(o),1)]),_:1},8,["items"])]),_:1}),a(r,{h2:""},{default:e(()=>t[58]||(t[58]=[n("Card style tabs")])),_:1}),a(d,null,{pug:e(()=>t[59]||(t[59]=[n('w-tabs(:items="tabs" card)')])),html:e(()=>t[60]||(t[60]=[n('<w-tabs :items="tabs" card></w-tabs>')])),js:e(()=>t[61]||(t[61]=[n(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3 has a long title', content: 'Tab 3 content.' }
  ]
})
`)])),default:e(()=>[a(b,{items:i.tabs1,card:""},null,8,["items"])]),_:1}),a(r,{h2:""},{default:e(()=>t[62]||(t[62]=[n("Close button")])),_:1}),a(C,{tip:""},{default:e(()=>t[63]||(t[63]=[n("When using a close button, don't forget to stop the click propagation "),l("code",null,"@click.stop",-1),n(` to prevent
the navigation to the tab that you are deleting!`)])),_:1}),a(d,null,{pug:e(()=>t[65]||(t[65]=[n(`w-tabs(:items="tabs" card)
  template(#item-title="{ item, index }")
    | `+s("{{ item.title }}")+`
    w-button.ml1.mr-1(
      @click.stop="tabs.splice(index - 1, 1)"
      icon="wi-cross"
      outline
      xs)`)])),html:e(()=>t[66]||(t[66]=[n(`<w-tabs :items="tabs" card>
  <template #item-title="{ item, index }">
    `+s("{{ item.title }}")+`
    <w-button
      class="ml1 mr-1"
      @click.stop="tabs.splice(index - 1, 1)"
      icon="wi-cross"
      outline
      xs>
    </w-button>
  </template>
</w-tabs>`)])),js:e(()=>t[67]||(t[67]=[n(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' }
  ]
})
`)])),default:e(()=>[a(b,{items:i.tabs6.items,card:""},{"item-title":e(({item:o,index:T})=>[n(s(o.title),1),a(p,{class:"ml1 mr-1",onClick:V(Y=>i.tabs6.items.splice(T-1,1),["stop"]),icon:"wi-cross",outline:"",xs:""},null,8,["onClick"])]),_:1},8,["items"]),a(p,{class:"mt4","bg-color":"primary",onClick:t[6]||(t[6]=o=>i.tabs6.items=i.tabs6.originals.slice(0)),disabled:i.tabs6.items.length===3},{default:e(()=>t[64]||(t[64]=[n("Reset tabs")])),_:1},8,["disabled"])]),_:1}),a(r,{h2:""},{default:e(()=>t[68]||(t[68]=[n("Customizing the tabs title & contents")])),_:1}),a(d,null,{pug:e(()=>t[73]||(t[73]=[n(`w-tabs(:items="tabs" card)
  template(#item-title="{ item }")
    w-icon.mr1.green mdi mdi-star
    span.green `+s("{{ item.title }}")+`
  template(#item-title.3="{ item }")
    w-icon.pink mdi mdi-heart
    span.pink.mx1 `+s("{{ item.title }}")+`
    w-icon.pink mdi mdi-heart
  template(#item-content.1="{ item }")
    .title3 This is a custom tab content.
    div(v-html="item.content")`)])),html:e(()=>t[74]||(t[74]=[n(`<w-tabs :items="tabs" card>
  <template #item-title="{ item }">
    <w-icon class="mr1 green">
      mdi mdi-star
    </w-icon>

    <span class="green">
      `+s("{{ item.title }}")+`
    </span>
  </template>

  <template #item-title.3="{ item }">
    <w-icon class="pink">
      mdi mdi-heart
    </w-icon>

    <span class="pink mx1">
      `+s("{{ item.title }}")+`
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
</w-tabs>`)])),js:e(()=>t[75]||(t[75]=[n(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' }
  ]
})
`)])),default:e(()=>[a(b,{items:i.tabs5,card:""},{"item-title":e(({item:o})=>[a(c,{class:"mr1 green"},{default:e(()=>t[69]||(t[69]=[n("mdi mdi-star")])),_:1}),l("span",B,s(o.title),1)]),"item-title.3":e(({item:o})=>[a(c,{class:"pink"},{default:e(()=>t[70]||(t[70]=[n("mdi mdi-heart")])),_:1}),l("span",I,s(o.title),1),a(c,{class:"pink"},{default:e(()=>t[71]||(t[71]=[n("mdi mdi-heart")])),_:1})]),"item-content.1":e(({item:o})=>[t[72]||(t[72]=l("div",{class:"title3"},"This is a custom tab content.",-1)),l("div",{innerHTML:o.content},null,8,M)]),_:1},8,["items"])]),_:1}),a(r,{h2:""},{default:e(()=>t[76]||(t[76]=[n("Adding a tabs bar extra element")])),_:1}),t[91]||(t[91]=l("p",null,[n("You can add extra elements at the right of the tabs title bar via the "),l("code",null,"tabs-bar-extra"),n(" slot."),l("br"),n(`
Once the tabs are updated (in the next Vue tick), you can open the newly added tab.`)],-1)),a(d,null,{pug:e(()=>t[77]||(t[77]=[n(`w-tabs(:items="tabs.tabsCount" v-model="tabs.currentTab")
  template(#item-title="{ index }") Item title `+s("{{ index }}")+`
  template(#item-content="{ index }") Item content `+s("{{ index }}")+`
  template(#tabs-bar-extra)
    w-button.bdrsr.mr2(
      icon="wi-plus"
      @click="tabs.tabsCount++;$nextTick(() => tabs.currentTab = tabs.tabsCount - 1)")`)])),html:e(()=>t[78]||(t[78]=[n(`<w-tabs
  :items="tabs.tabsCount"
  v-model="tabs.currentTab">
  <template #item-title="{ index }">
    Item title `+s("{{ index }}")+`
  </template>

  <template #item-content="{ index }">
    Item content `+s("{{ index }}")+`
  </template>

  <template #tabs-bar-extra>
    <w-button
      icon="wi-plus"
      @click="tabs.tabsCount++;$nextTick(() => tabs.currentTab = tabs.tabsCount - 1)"
      class="bdrsr mr2">
    </w-button>
  </template>
</w-tabs>`)])),js:e(()=>t[79]||(t[79]=[n(`data: () => ({
  tabs: {
    tabsCount: 3,
    currentTab: 1
  }
})
`)])),default:e(()=>[a(b,{items:i.tabs7.tabsCount,modelValue:i.tabs7.currentTab,"onUpdate:modelValue":t[8]||(t[8]=o=>i.tabs7.currentTab=o)},{"item-title":e(({index:o})=>[n("Item title "+s(o),1)]),"item-content":e(({index:o})=>[n("Item content "+s(o),1)]),"tabs-bar-extra":e(()=>[a(p,{class:"bdrsr mr2",icon:"wi-plus",onClick:t[7]||(t[7]=o=>{i.tabs7.tabsCount++,i.$nextTick(()=>i.tabs7.currentTab=i.tabs7.tabsCount-1)})})]),_:1},8,["items","modelValue"])]),_:1}),a(r,{h2:""},{default:e(()=>t[80]||(t[80]=[n("Refreshing the slider width or position")])),_:1}),t[92]||(t[92]=l("p",null,[n("By default there is no data watcher on the tabs title to recalculate the slider width or position."),l("br"),n(`
But you may need to update the slider width for various reasons.
Thanks to the `),l("code",null,"updateSlider"),n(" method, this is quite straightforward."),l("br"),n(`
In this scenario, the slider width is updated on title change from the `),l("strong",{class:"code"},"w-input"),n(` field,
so the slider width adapts to the number of characters on the current tab's title.`)],-1)),a(d,null,{pug:e(()=>t[81]||(t[81]=[n(`w-tabs(ref="tabs" :items="tabs")
  template(#item-content="{ item }")
    w-input.my6(v-model="item.title" label="Tab title" @keyup="onTitleChange")`)])),html:e(()=>t[82]||(t[82]=[n(`<w-tabs ref="tabs" :items="tabs">
  <template #item-content="{ item }">
    <w-input
      v-model="item.title"
      class="my6"
      label="Tab title"
      @keyup="onTitleChange">
    </w-input>
  </template>
</w-tabs>`)])),js:e(()=>t[83]||(t[83]=[n(`data: () => ({
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
}`)])),default:e(()=>[a(b,{ref:"tabs",items:i.tabs8},{"item-content":e(({item:o})=>[a($,{class:"my6",modelValue:o.title,"onUpdate:modelValue":T=>o.title=T,label:"Tab title",onKeyup:u.onTitleChange},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:1},8,["items"])]),_:1})])}const W={data:()=>({tabs1:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3 has a long title",content:"Tab 3 content."}],tabs2:{items:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."},{title:"Tab 4",content:"Tab 4 content."},{title:"Tab 5",content:"Tab 5 content.",disabled:!0}],active:2,fillBar:!0,slider:!1},tabs3:{tabsCount:3},tabs4:{items:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."}],transition:"fade"},tabs5:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."}],tabs6:{items:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."}],originals:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."}]},tabs7:{tabsCount:3,currentTab:1},tabs8:[{title:"Tab 1"},{title:"Tab 2"},{title:"Tab 3"}],transitions:[{label:"default",value:""},{label:"fade"},{label:"slide-fade-up"},{label:"slide-fade-down"},{label:"slide-fade-left"},{label:"slide-fade-right"},{label:"scale-fade"},{label:"none",value:!1}]}),methods:{onTitleChange(){this.$nextTick(this.$refs.tabs.updateSlider)}}},D=g(W,[["render",P]]);function U(i,t,v,h,k,u){const r=m("title-link"),b=m("component-api");return w(),f("div",null,[t[1]||(t[1]=l("div",{class:"w-divider my12"},null,-1)),a(r,{class:"title1",h2:""},{default:e(()=>t[0]||(t[0]=[n("API")])),_:1}),a(b,{class:"mt0",items:u.props,descriptions:i.propsDescs,title:"Props"},null,8,["items","descriptions"]),a(b,{items:i.slots,title:"Slots"},null,8,["items"]),a(b,{items:u.events,title:"Events"},null,8,["items"])])}const E={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide a tab index (a number starting from 0) to open it. This value gets updated when using a v-model.',color:`Applies a color to the each tab title's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the each tab title's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,items:'Expecting an array of objects. Each object being an tab item, it should include a <code>title</code> and <code>content</code> attributes.<br>Alternatively, you can provide an integer number (call it <em class="code">x</em>), to loop through and create <em class="code">x</em> tabs. You can then use the individual slots <code>item-title.x</code> &amp; <code>item-content.x</code> to define each item title and content.',itemIdKey:"Specifies the name of the property in each item object where to find the item's unique ID.<br>Having a unique ID is important when injecting and replacing tabs. If no unique id is provided, Wave UI will generate one and <strong>inject it in each item</strong>.",itemTitleKey:"Specifies the name of the property in each item object where to find the item's title string.",itemContentKey:"Specifies the name of the property in each item object where to find the item's content string.",titleClass:"Applies a custom CSS class to the tab title.",activeClass:"Applies a custom CSS class to the active tab title.",noSlider:"When set to <code>true</code>, removes the slider under the active tab title.",pillSlider:"When set to <code>true</code>, places the slider under the active tab title text in a pill shape.",sliderColor:'Provide a custom color for the tabs slider (<code>primary</code> by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',contentClass:"Applies a custom CSS class to the tab content.",transition:'Applies a particular transition to the tab contents when switching tab.<br>Check all the transitions that apply to this component in the <a href="#content-transitions">Content transitions</a> example.',fillBar:"When set to <code>true</code>, the tabs titles will occupy the full available width.",center:"Centers the tabs titles.",right:"Aligns the tabs titles to the right.",card:"Applies the card style on all the tabs titles.",keepInDom:'<span class="grey text-italic">Will deactivate the <code>keep-alive</code> prop.</span> When set to <code>true</code>, the tabs will always stay in the DOM (even when not the active tab), unless they are deleted in the tabs array.<br>Note that the <code>mounted</code> hook will be run once per tab, as soon as they are appended to the DOM.<br>The default behavior is to keep the tabs alive, but unmount any inactive tab from the DOM.',keepAlive:'When set to <code>true</code> and by default, the tabs will be kept alive. Which means that the state of the components in each tab will be maintained when switching tabs and the <code>mounted</code> hook will only be run the first time it is open.<br>When explicitly set to <code>false</code>, the tab state will be reset upon each reopening, and the <code>mounted</code> hook will be run again.<br>The default behavior is to keep the tabs alive, but unmount any inactive tab from the DOM.<br>You can read more about the keep-alive behavior in the <a href="https://vuejs.org/guide/built-ins/keep-alive.html" target="_blank">Vue official documentation for keep-alive <i class="w-icon mdi mdi-open-in-new"></i></a>.'},N={"item-title":{description:"Provide a custom title for every tab. Applies to all the tabs, but can be overridden by the <code>item-title.x</code> slot.",params:{item:"The current tab object.",index:"The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.",active:"A boolean representing the active state of the tab."}},"item-title.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom title for a single tab: the tab at the index <em class="code">x</em>.',params:{item:"The current tab object.",index:"The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.",active:"A boolean representing the active state of the tab."}},"item-content":{description:"Provide a custom content for every tab. Applies to all the tabs, but can be overridden by the <code>item-content.x</code> slot.",params:{item:"The current tab object.",index:"The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.",active:"A boolean representing the active state of the tab."}},"item-content.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single tab: the tab at the index <em class="code">x</em>.',params:{item:"The current tab object.",index:"The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.",active:"A boolean representing the active state of the tab."}}},O={input:{description:"Emitted each time the current tab changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Array]":"An array of booleans representing the active state of each tab."}},"update:modelValue":{description:"Emitted each time the current tab changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Array]":"An array of booleans representing the active state of each tab."}},focus:{description:"Emitted on each tab title focus.",params:{"[Object]":"The focused tab item object."}}},K={data:()=>({propsDescs:E,slots:N}),computed:{props(){return x.props},events(){return x.emits.reduce((i,t)=>(i[t]=O[t]||{})&&i,{})}}},q=g(K,[["render",U]]);function z(i,t,v,h,k,u){const r=m("ui-component-title"),b=m("examples"),d=m("api");return w(),f("main",null,[a(r,null,{default:e(()=>t[0]||(t[0]=[n("w-tabs")])),_:1}),a(b),a(d)])}const F={components:{Examples:D,Api:q}},L=g(F,[["render",z]]);export{L as default};
