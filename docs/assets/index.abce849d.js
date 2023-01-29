import{r as d,o as T,f as w,a as n,w as t,b as e,h as l,d as i,k as V,_ as f,a8 as k}from"./index.59a44df4.js";const j=i("strong",null,"Since version 1.21.0",-1),$=i("p",null,[e("It is possible to open a particular tab programmatically via "),i("code",null,"v-model"),e(" or "),i("code",null,"model-value"),e(".")],-1),B={class:"ml2"},P=i("p",null,[e("Like in most components, you can set a "),i("code",null,"color"),e(" for the text and a "),i("code",null,"bg-color"),e(` for the
background. You can also set a `),i("code",null,"slider-color"),e(" and an "),i("code",null,"active-class"),e(`.
`)],-1),E=i("div",{class:"title3"},"Color & bg-color",-1),I=i("div",{class:"title3 mt4"},"Slider color",-1),U=i("div",{class:"title3"},"Active class",-1),N=i("p",null,"Change tab to see the transition.",-1),W=i("p",null,`The tabs will naturally try to fit in the available space. But if they can't fit because there are
too many, a scrollbar will allow navigation to all the tabs.`,-1),z=i("code",null,"@click.stop",-1),F={class:"green"},K={class:"pink mx1"},D=i("div",{class:"title3"},"This is a custom tab content.",-1),L=["innerHTML"],M=i("p",null,[e("You can add extra elements at the right of the tabs title bar via the "),i("code",null,"tabs-bar-extra"),e(" slot.")],-1),Y=i("p",null,[e("By default there is no data watcher on the tabs title to recalculate the slider width or position."),i("br"),e(`
But you may need to update the slider width for various reasons.
Thanks to the `),i("code",null,"updateSlider"),e(" method, this is quite straightforward."),i("br"),e(`
In this scenario, the slider width is updated on title change from the `),i("strong",{class:"code"},"w-input"),e(` field,
so the slider width adapts to the number of characters on the current tab's title.`)],-1);function H(a,b,g,v,_,m){const c=d("title-link"),o=d("w-tabs"),r=d("example"),x=d("w-switch"),C=d("alert"),y=d("w-radios"),u=d("w-button"),S=d("w-flex"),p=d("w-icon"),A=d("w-input");return T(),w("div",null,[n(c,{h2:""},{default:t(()=>[e("Basic")]),_:1}),n(r,null,{pug:t(()=>[e('w-tabs(:items="tabs")')]),html:t(()=>[e('<w-tabs :items="tabs"></w-tabs>')]),js:t(()=>[e(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3 has a long title', content: 'Tab 3 content.' }
  ]
})
`)]),default:t(()=>[n(o,{items:a.tabs1},null,8,["items"])]),_:1}),n(c,{h2:""},{default:t(()=>[e("Align center and right")]),_:1}),n(r,null,{pug:t(()=>[e(`w-tabs(:items="tabs" center)
br
w-tabs(:items="tabs" right)`)]),html:t(()=>[e(`<w-tabs :items="tabs" center></w-tabs>
<br />
<w-tabs :items="tabs" right></w-tabs>`)]),js:t(()=>[e(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' }
  ]
})
`)]),default:t(()=>[n(o,{items:a.tabs4.items,center:""},null,8,["items"]),n(o,{class:"mt4",items:a.tabs4.items,right:""},null,8,["items"])]),_:1}),n(c,{h2:""},{default:t(()=>[e("Fill bar & disabled items")]),_:1}),n(r,null,{pug:t(()=>[e(`w-switch.mb3(v-model="fillBar") Fill bar
w-tabs(:items="tabs" :fill-bar="fillBar")`)]),html:t(()=>[e(`<w-switch v-model="fillBar" class="mb3">
  Fill bar
</w-switch>

<w-tabs :items="tabs" :fill-bar="fillBar"></w-tabs>`)]),js:t(()=>[e(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ],
  fillBar: true
})
`)]),default:t(()=>[n(x,{class:"mb3",modelValue:a.tabs2.fillBar,"onUpdate:modelValue":b[0]||(b[0]=s=>a.tabs2.fillBar=s)},{default:t(()=>[e("Fill bar")]),_:1},8,["modelValue"]),n(o,{items:a.tabs2.items,"fill-bar":a.tabs2.fillBar},null,8,["items","fill-bar"])]),_:1}),n(c,{h2:""},{default:t(()=>[e("V-model")]),_:1}),n(C,{warning:""},{default:t(()=>[j,e(", the v-model/value only accepts a numeric tab index (previously an array of boolean).")]),_:1}),$,n(r,null,{pug:t(()=>[e(`w-tabs(v-model="activeTab" :items="tabs")
strong
  | v-model:
  code.ml2 `+l("{{ activeTab }}"))]),html:t(()=>[e(`<w-tabs v-model="activeTab" :items="tabs"></w-tabs>

<strong>
  v-model:
  <code class="ml2">
    `+l("{{ activeTab }}")+`
  </code>
</strong>`)]),js:t(()=>[e(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ],
  activeTab: 2
})
`)]),default:t(()=>[n(o,{class:"mb2",modelValue:a.tabs2.active,"onUpdate:modelValue":b[1]||(b[1]=s=>a.tabs2.active=s),items:a.tabs2.items},null,8,["modelValue","items"]),i("strong",null,[e("v-model:"),i("code",B,l(a.tabs2.active),1)])]),_:1}),n(c,{h2:""},{default:t(()=>[e("Colors")]),_:1}),P,E,n(r,null,{pug:t(()=>[e('w-tabs(:items="tabs" color="blue" bg-color="indigo-light5")')]),html:t(()=>[e(`<w-tabs
  :items="tabs"
  color="blue"
  bg-color="indigo-light5">
</w-tabs>`)]),js:t(()=>[e(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})
`)]),default:t(()=>[n(o,{items:a.tabs2.items,color:"blue","bg-color":"indigo-light5"},null,8,["items"])]),_:1}),I,n(r,null,{pug:t(()=>[e('w-tabs(:items="tabs" slider-color="blue-light2")')]),html:t(()=>[e(`<w-tabs
  :items="tabs"
  slider-color="blue-light2">
</w-tabs>`)]),js:t(()=>[e(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})
`)]),default:t(()=>[n(o,{items:a.tabs2.items,"slider-color":"blue-light2"},null,8,["items"])]),_:1}),U,n(r,null,{pug:t(()=>[e(`w-tabs(
  :items="tabs"
  color="blue"
  active-class="pink"
  slider-color="pink")`)]),html:t(()=>[e(`<w-tabs
  :items="tabs"
  color="blue"
  active-class="pink"
  slider-color="pink">
</w-tabs>`)]),js:t(()=>[e(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})
`)]),default:t(()=>[n(o,{items:a.tabs2.items,color:"blue","active-class":"pink","slider-color":"pink"},null,8,["items"])]),_:1}),n(c,{h2:""},{default:t(()=>[e("Pill slider")]),_:1}),n(r,null,{pug:t(()=>[e('w-tabs(:items="tabs" pill-slider)')]),html:t(()=>[e('<w-tabs :items="tabs" pill-slider></w-tabs>')]),js:t(()=>[e(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})`)]),default:t(()=>[n(o,{items:a.tabs2.items,"pill-slider":""},null,8,["items"])]),_:1}),n(c,{h3:""},{default:t(()=>[e("Example of a different style, involving some external CSS")]),_:1}),n(r,null,{pug:t(()=>[e('w-tabs(:items="tabs" pill-slider)')]),html:t(()=>[e('<w-tabs :items="tabs" pill-slider></w-tabs>')]),js:t(()=>[e(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})`)]),css:t(()=>[e(`.w-app .w-tabs {border: none;}
.w-app .w-tabs__bar {
  display: inline-flex;
  margin-bottom: 12px;
  padding: 0;
  background: #eee;
  border-radius: 6px;
  border: 1px solid #ddd;
  z-index: 0;
  overflow: visible;
}
.w-app .w-tabs__slider {
  opacity: 1;
  background-color: #fff;
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
  border-left: 1px solid #d2d2d2;
  display: block;
  opacity: 1;
}
.w-app .w-tabs__bar-item:first-child:before {display: none;}
`)]),default:t(()=>[n(o,{class:"macos-tabs",items:a.tabs2.items,"pill-slider":""},null,8,["items"])]),_:1}),n(c,{h2:""},{default:t(()=>[e("No slider")]),_:1}),n(r,null,{pug:t(()=>[e(`w-switch.mb3(v-model="tabsSlider") Slider
w-tabs(:items="tabs" :no-slider="!tabsSlider" active-class="pink")`)]),html:t(()=>[e(`<w-switch class="mb3" v-model="tabsSlider">
  Slider
</w-switch>

<w-tabs
  :items="tabs"
  :no-slider="!tabsSlider"
  active-class="pink">
</w-tabs>`)]),js:t(()=>[e(`data: () => ({
  tabsSlider: false,
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})
`)]),default:t(()=>[n(x,{class:"mb3",modelValue:a.tabs2.slider,"onUpdate:modelValue":b[2]||(b[2]=s=>a.tabs2.slider=s)},{default:t(()=>[e("Slider")]),_:1},8,["modelValue"]),n(o,{items:a.tabs2.items,"no-slider":!a.tabs2.slider,"active-class":"pink"},null,8,["items","no-slider"])]),_:1}),n(c,{h2:""},{default:t(()=>[e("Content transitions")]),_:1}),N,n(r,null,{pug:t(()=>[e(`w-radios.mb3(:items="transitions" v-model="transition")
w-tabs(:items="tabs" :transition="transition")`)]),html:t(()=>[e(`<w-radios
  class="mb3"
  :items="transitions"
  v-model="transition">
</w-radios>

<w-tabs
  :items="tabs"
  :transition="transition">
</w-tabs>`)]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[n(y,{class:"mb3",items:a.transitions,modelValue:a.tabs4.transition,"onUpdate:modelValue":b[3]||(b[3]=s=>a.tabs4.transition=s)},null,8,["items","modelValue"]),n(o,{items:a.tabs4.items,transition:a.tabs4.transition},null,8,["items","transition"])]),_:1}),n(c,{h2:""},{default:t(()=>[e("Add / remove tabs")]),_:1}),W,n(r,null,{pug:t(()=>[e(`w-flex.mb3(align-center)
  | Number of tabs:
  w-button.mx2(icon="wi-minus" sm @click="tabsCount -= tabsCount < 1 ? 0 : 1")
  code `+l("{{ tabsCount }}")+`
  w-button.mx2(icon="wi-plus" sm @click="tabsCount++")
w-tabs(:items="tabsCount")
  template(#item-title="{ index }") Tab `+l("{{ index }}")+`
  template(#item-content="{ index }") Content `+l("{{ index }}"))]),html:t(()=>[e(`<w-flex class="mb3" align-center>
  Number of tabs:
  <w-button
    class="mx2"
    icon="wi-minus"
    sm
    @click="tabsCount -= tabsCount < 1 ? 0 : 1">
  </w-button>

  <code>`+l("{{ tabsCount }}")+`</code>

  <w-button
    class="mx2"
    icon="wi-plus"
    sm
    @click="tabsCount++">
  </w-button>
</w-flex>

<w-tabs :items="tabsCount">
  <template #item-title="{ index }">
    Tab `+l("{{ index }}")+`
  </template>

  <template #item-content="{ index }">
    Content `+l("{{ index }}")+`
  </template>
</w-tabs>`)]),js:t(()=>[e(`data: () => ({
  tabsCount: 3
})
`)]),default:t(()=>[n(S,{class:"mb3","align-center":""},{default:t(()=>[e("Number of tabs:"),n(u,{class:"mx2",icon:"wi-minus",sm:"",onClick:b[4]||(b[4]=s=>a.tabs3.tabsCount-=a.tabs3.tabsCount<1?0:1)}),i("code",null,l(a.tabs3.tabsCount),1),n(u,{class:"mx2",icon:"wi-plus",sm:"",onClick:b[5]||(b[5]=s=>a.tabs3.tabsCount++)})]),_:1}),n(o,{items:a.tabs3.tabsCount},{"item-title":t(({index:s})=>[e("Tab "+l(s),1)]),"item-content":t(({index:s})=>[e("Content "+l(s),1)]),_:1},8,["items"])]),_:1}),n(c,{h2:""},{default:t(()=>[e("Card style tabs")]),_:1}),n(r,null,{pug:t(()=>[e('w-tabs(:items="tabs" card)')]),html:t(()=>[e('<w-tabs :items="tabs" card></w-tabs>')]),js:t(()=>[e(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3 has a long title', content: 'Tab 3 content.' }
  ]
})
`)]),default:t(()=>[n(o,{items:a.tabs1,card:""},null,8,["items"])]),_:1}),n(c,{h2:""},{default:t(()=>[e("Close button")]),_:1}),n(C,{tip:""},{default:t(()=>[e("When using a close button, don't forget to stop the click propagation "),z,e(` to prevent
the navigation to the tab that you are deleting!`)]),_:1}),n(r,null,{pug:t(()=>[e(`w-tabs(:items="tabs" card)
  template(#item-title="{ item, index }")
    | `+l("{{ item.title }}")+`
    w-button.ml1.mr-1(
      @click.stop="tabs.splice(index - 1, 1)"
      icon="wi-cross"
      outline
      xs)`,1)]),html:t(()=>[e(`<w-tabs :items="tabs" card>
  <template #item-title="{ item, index }">
    `+l("{{ item.title }}")+`
    <w-button
      class="ml1 mr-1"
      @click.stop="tabs.splice(index - 1, 1)"
      icon="wi-cross"
      outline
      xs>
    </w-button>
  </template>
</w-tabs>`,1)]),js:t(()=>[e(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' }
  ]
})
`)]),default:t(()=>[n(o,{items:a.tabs6.items,card:""},{"item-title":t(({item:s,index:h})=>[e(l(s.title),1),n(u,{class:"ml1 mr-1",onClick:V(at=>a.tabs6.items.splice(h-1,1),["stop"]),icon:"wi-cross",outline:"",xs:""},null,8,["onClick"])]),_:1},8,["items"]),n(u,{class:"mt4","bg-color":"primary",onClick:b[6]||(b[6]=s=>a.tabs6.items=a.tabs6.originals.slice(0)),disabled:a.tabs6.items.length===3},{default:t(()=>[e("Reset tabs")]),_:1},8,["disabled"])]),_:1}),n(c,{h2:""},{default:t(()=>[e("Customizing the tabs title & contents")]),_:1}),n(r,null,{pug:t(()=>[e(`w-tabs(:items="tabs" card)
  template(#item-title="{ item }")
    w-icon.mr1.green mdi mdi-star
    span.green `+l("{{ item.title }}")+`
  template(#item-title.3="{ item }")
    w-icon.pink mdi mdi-heart
    span.pink.mx1 `+l("{{ item.title }}")+`
    w-icon.pink mdi mdi-heart
  template(#item-content.1="{ item }")
    .title3 This is a custom tab content.
    div(v-html="item.content")`,1)]),html:t(()=>[e(`<w-tabs :items="tabs" card>
  <template #item-title="{ item }">
    <w-icon class="mr1 green">
      mdi mdi-star
    </w-icon>

    <span class="green">
      `+l("{{ item.title }}")+`
    </span>
  </template>

  <template #item-title.3="{ item }">
    <w-icon class="pink">
      mdi mdi-heart
    </w-icon>

    <span class="pink mx1">
      `+l("{{ item.title }}")+`
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
</w-tabs>`,1)]),js:t(()=>[e(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' }
  ]
})
`)]),default:t(()=>[n(o,{items:a.tabs5,card:""},{"item-title":t(({item:s})=>[n(p,{class:"mr1 green"},{default:t(()=>[e("mdi mdi-star")]),_:1}),i("span",F,l(s.title),1)]),"item-title.3":t(({item:s})=>[n(p,{class:"pink"},{default:t(()=>[e("mdi mdi-heart")]),_:1}),i("span",K,l(s.title),1),n(p,{class:"pink"},{default:t(()=>[e("mdi mdi-heart")]),_:1})]),"item-content.1":t(({item:s})=>[D,i("div",{innerHTML:s.content},null,8,L)]),_:1},8,["items"])]),_:1}),n(c,{h2:""},{default:t(()=>[e("Adding a tabs bar extra element")]),_:1}),M,n(r,null,{pug:t(()=>[e(`w-tabs(ref="tabs" :items="tabs.tabsCount" v-model="tabs.currentTab")
  template(#item-title="{ index }") Item title `+l("{{ index }}")+`
  template(#item-content="{ index }") Item content `+l("{{ index }}")+`
  template(#tabs-bar-extra)
    w-button.bdrsr.mr2(
      icon="wi-plus"
      @click="tabs.tabsCount++;tabs.currentTab = tabs.tabsCount - 1")`)]),html:t(()=>[e(`<w-tabs
  ref="tabs"
  :items="tabs.tabsCount"
  v-model="tabs.currentTab">
  <template #item-title="{ index }">
    Item title `+l("{{ index }}")+`
  </template>

  <template #item-content="{ index }">
    Item content `+l("{{ index }}")+`
  </template>

  <template #tabs-bar-extra>
    <w-button
      icon="wi-plus"
      @click="tabs.tabsCount++;tabs.currentTab = tabs.tabsCount - 1"
      class="bdrsr mr2">
    </w-button>
  </template>
</w-tabs>`)]),js:t(()=>[e(`data: () => ({
  tabs: {
    tabsCount: 3,
    currentTab: 1
  }
})
`)]),default:t(()=>[n(o,{ref:"tabs",items:a.tabs7.tabsCount,modelValue:a.tabs7.currentTab,"onUpdate:modelValue":b[8]||(b[8]=s=>a.tabs7.currentTab=s)},{"item-title":t(({index:s})=>[e("Item title "+l(s),1)]),"item-content":t(({index:s})=>[e("Item content "+l(s),1)]),"tabs-bar-extra":t(()=>[n(u,{class:"bdrsr mr2",icon:"wi-plus",onClick:b[7]||(b[7]=s=>{a.tabs7.tabsCount++,a.tabs7.currentTab=a.tabs7.tabsCount-1})})]),_:1},8,["items","modelValue"])]),_:1}),n(c,{h2:""},{default:t(()=>[e("Refreshing the slider width or position")]),_:1}),Y,n(r,null,{pug:t(()=>[e(`w-tabs(ref="tabs" :items="tabs")
  template(#item-content="{ item }")
    w-input.my6(v-model="item.title" label="Tab title" @keyup="onTitleChange")`)]),html:t(()=>[e(`<w-tabs ref="tabs" :items="tabs">
  <template #item-content="{ item }">
    <w-input
      v-model="item.title"
      class="my6"
      label="Tab title"
      @keyup="onTitleChange">
    </w-input>
  </template>
</w-tabs>`)]),js:t(()=>[e(`data: () => ({
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
}`)]),default:t(()=>[n(o,{ref:"tabs",items:a.tabs8},{"item-content":t(({item:s})=>[n(A,{class:"my6",modelValue:s.title,"onUpdate:modelValue":h=>s.title=h,label:"Tab title",onKeyup:m.onTitleChange},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:1},8,["items"])]),_:1})])}const R={data:()=>({tabs1:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3 has a long title",content:"Tab 3 content."}],tabs2:{items:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."},{title:"Tab 4",content:"Tab 4 content."},{title:"Tab 5",content:"Tab 5 content.",disabled:!0}],active:2,fillBar:!0,slider:!1},tabs3:{tabsCount:3},tabs4:{items:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."}],transition:"fade"},tabs5:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."}],tabs6:{items:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."}],originals:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."}]},tabs7:{tabsCount:3,currentTab:1},tabs8:[{title:"Tab 1"},{title:"Tab 2"},{title:"Tab 3"}],transitions:[{label:"default",value:""},{label:"fade"},{label:"slide-fade-up"},{label:"slide-fade-down"},{label:"slide-fade-left"},{label:"slide-fade-right"},{label:"scale-fade"},{label:"none",value:!1}]}),methods:{onTitleChange(){this.$nextTick(this.$refs.tabs.updateSlider)}}},q=f(R,[["render",H]]),O=i("div",{class:"w-divider my12"},null,-1);function X(a,b,g,v,_,m){const c=d("title-link"),o=d("component-api");return T(),w("div",null,[O,n(c,{class:"title1",h2:""},{default:t(()=>[e("API")]),_:1}),n(o,{class:"mt0",items:m.props,descriptions:a.propsDescs,title:"Props"},null,8,["items","descriptions"]),n(o,{items:a.slots,title:"Slots"},null,8,["items"]),n(o,{items:m.events,title:"Events"},null,8,["items"])])}const G={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide a tab index (a number starting from 0) to open it. This value gets updated when using a v-model.',color:`Applies a color to the each tab title's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the each tab title's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,items:'Expecting an array of objects. Each object being an tab item, it should include a <code>title</code> and <code>content</code> attributes.<br>Alternatively, you can provide an integer number (call it <em class="code">x</em>), to loop through and create <em class="code">x</em> tabs. You can then use the individual slots <code>item-title.x</code> &amp; <code>item-content.x</code> to define each item title and content.',itemTitleKey:"Specifies the name of the attribute in each item object where to find the item's title string.",itemContentKey:"Specifies the name of the attribute in each item object where to find the item's content string.",titleClass:"Applies a custom CSS class to the tab title.",activeClass:"Applies a custom CSS class to the active tab title.",noSlider:"When set to <code>true</code>, removes the slider bellow the active tab title.",pillSlider:"When set to <code>true</code>, places the slider underneath the active tab title text in pill shape.",sliderColor:'Provide a custom color for the tabs slider (<code>primary</code> by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',contentClass:"Applies a custom CSS class to the tab content.",transition:'Applies a particular transition to the tab contents when switching tab.<br>Check all the transitions that apply to this component in the <a href="#content-transitions">Content transitions</a> example.',fillBar:"When set to <code>true</code>, the tabs titles will occupy the full available width.",center:"Centers the tabs titles.",right:"Aligns the tabs titles to the right.",card:"Applies the card style on all the tabs titles."},J={"item-title":{description:"Provide a custom title for every tab. Applies to all the tabs, but can be overridden by the <code>item-title.x</code> slot.",params:{item:"The current tab object.",index:"The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.",active:"A boolean representing the active state of the tab."}},"item-title.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom title for a single tab: the tab at the index <em class="code">x</em>.',params:{item:"The current tab object.",index:"The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.",active:"A boolean representing the active state of the tab."}},"item-content":{description:"Provide a custom content for every tab. Applies to all the tabs, but can be overridden by the <code>item-content.x</code> slot.",params:{item:"The current tab object.",index:"The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.",active:"A boolean representing the active state of the tab."}},"item-content.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single tab: the tab at the index <em class="code">x</em>.',params:{item:"The current tab object.",index:"The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.",active:"A boolean representing the active state of the tab."}}},Q={input:{description:"Emitted each time the current tab changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Array]":"An array of booleans representing the active state of each tab."}},"update:modelValue":{description:"Emitted each time the current tab changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Array]":"An array of booleans representing the active state of each tab."}},focus:{description:"Emitted on each tab title focus.",params:{"[Object]":"The focused tab item object."}}},Z={data:()=>({propsDescs:G,slots:J}),computed:{props(){return k.props},events(){return k.emits.reduce((a,b)=>(a[b]=Q[b]||{})&&a,{})}}},tt=f(Z,[["render",X]]);function et(a,b,g,v,_,m){const c=d("ui-component-title"),o=d("examples"),r=d("api");return T(),w("main",null,[n(c,null,{default:t(()=>[e("w-tabs")]),_:1}),n(o),n(r)])}const nt={components:{Examples:q,Api:tt}},it=f(nt,[["render",et]]);export{it as default};
