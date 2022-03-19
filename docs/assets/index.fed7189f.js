import{r as d,o as _,e as T,f as n,w as t,g as o,t as i,i as e,B as V}from"./vendor.e64646cc.js";import{_ as f,I as x}from"./index.90e40c3f.js";const j=e("Basic"),$=e('w-tabs(:items="tabs")'),B=e('<w-tabs :items="tabs"></w-tabs>'),P=e(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3 has a long title', content: 'Tab 3 content.' }
  ]
})
`),I=e("Align center and right"),U=e(`w-tabs(:items="tabs" center)
br
w-tabs(:items="tabs" right)`),E=e(`<w-tabs :items="tabs" center></w-tabs>
<br />
<w-tabs :items="tabs" right></w-tabs>`),N=e(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' }
  ]
})
`),F=e("Fill bar & disabled items"),K=e("Fill bar"),W=e(`w-switch.mb3(v-model="fillBar") Fill bar
w-tabs(:items="tabs" :fill-bar="fillBar")`),D=e(`<w-switch v-model="fillBar" class="mb3">
  Fill bar
</w-switch>

<w-tabs :items="tabs" :fill-bar="fillBar"></w-tabs>`),L=e(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ],
  fillBar: true
})
`),M=e("V-model"),Y=o("strong",null,"Since version 1.21.0",-1),H=e(", the v-model/value only accepts a numeric tab index (previously an array of boolean)."),R=o("p",null,[e("It is possible to open a particular tab programmatically via "),o("code",null,"v-model"),e(" or "),o("code",null,"model-value"),e(".")],-1),q=e("v-model:"),z={class:"ml2"},O=e(`w-tabs(v-model="activeTab" :items="tabs")
strong
  | v-model:
  code.ml2 `+i("{{ activeTab }}")),G=e(`<w-tabs v-model="activeTab" :items="tabs"></w-tabs>

<strong>
  v-model:
  <code class="ml2">
    `+i("{{ activeTab }}")+`
  </code>
</strong>`),J=e(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ],
  activeTab: 2
})
`),Q=e("Colors"),X=o("p",null,[e("Like in most components, you can set a "),o("code",null,"color"),e(" for the text and a "),o("code",null,"bg-color"),e(` for the
background. You can also set a `),o("code",null,"slider-color"),e(" and an "),o("code",null,"active-class"),e(`.
`)],-1),Z=o("div",{class:"title3"},"Color & bg-color",-1),tt=e('w-tabs(:items="tabs" color="blue" bg-color="indigo-light5")'),et=e(`<w-tabs
  :items="tabs"
  color="blue"
  bg-color="indigo-light5">
</w-tabs>`),nt=e(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})
`),at=o("div",{class:"title3 mt4"},"Slider color",-1),st=e('w-tabs(:items="tabs" slider-color="blue-light2")'),ot=e(`<w-tabs
  :items="tabs"
  slider-color="blue-light2">
</w-tabs>`),it=e(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})
`),lt=o("div",{class:"title3"},"Active class",-1),ct=e(`w-tabs(
  :items="tabs"
  color="blue"
  active-class="pink"
  slider-color="pink")`),bt=e(`<w-tabs
  :items="tabs"
  color="blue"
  active-class="pink"
  slider-color="pink">
</w-tabs>`),rt=e(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})
`),dt=e("No slider"),mt=e("Slider"),ut=e(`w-switch.mb3(v-model="tabsSlider") Slider
w-tabs(:items="tabs" :no-slider="!tabsSlider" active-class="pink")`),ht=e(`<w-switch class="mb3" v-model="tabsSlider">
  Slider
</w-switch>

<w-tabs
  :items="tabs"
  :no-slider="!tabsSlider"
  active-class="pink">
</w-tabs>`),pt=e(`data: () => ({
  tabsSlider: false,
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})
`),_t=e("Content transitions"),Tt=o("p",null,"Change tab to see the transition.",-1),ft=e(`w-radios.mb3(:items="transitions" v-model="transition")
w-tabs(:items="tabs" :transition="transition")`),wt=e(`<w-radios
  class="mb3"
  :items="transitions"
  v-model="transition">
</w-radios>

<w-tabs
  :items="tabs"
  :transition="transition">
</w-tabs>`),gt=e(`data: () => ({
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
`),vt=e("Add / remove tabs"),Ct=o("p",null,`The tabs will naturally try to fit in the available space. But if they can't fit because there are
too many, a scrollbar will allow navigation to all the tabs.`,-1),kt=e("Number of tabs:"),xt=e(`w-flex.mb3(align-center)
  | Number of tabs:
  w-button.mx2(icon="wi-minus" sm @click="tabsCount -= tabsCount < 1 ? 0 : 1")
  code `+i("{{ tabsCount }}")+`
  w-button.mx2(icon="wi-plus" sm @click="tabsCount++")
w-tabs(:items="tabsCount")
  template(#item-title="{ index }") Tab `+i("{{ index }}")+`
  template(#item-content="{ index }") Content `+i("{{ index }}")),yt=e(`<w-flex class="mb3" align-center>
  Number of tabs:
  <w-button
    class="mx2"
    icon="wi-minus"
    sm
    @click="tabsCount -= tabsCount < 1 ? 0 : 1">
  </w-button>

  <code>`+i("{{ tabsCount }}")+`</code>

  <w-button
    class="mx2"
    icon="wi-plus"
    sm
    @click="tabsCount++">
  </w-button>
</w-flex>

<w-tabs :items="tabsCount">
  <template #item-title="{ index }">
    Tab `+i("{{ index }}")+`
  </template>

  <template #item-content="{ index }">
    Content `+i("{{ index }}")+`
  </template>
</w-tabs>`),At=e(`data: () => ({
  tabsCount: 3
})
`),St=e("Card style tabs"),Vt=e('w-tabs(:items="tabs" card)'),jt=e('<w-tabs :items="tabs" card></w-tabs>'),$t=e(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3 has a long title', content: 'Tab 3 content.' }
  ]
})
`),Bt=e("Close button"),Pt=e("When using a close button, don't forget to stop the click propagation "),It=o("code",null,"@click.stop",-1),Ut=e(` to prevent
the navigation to the tab that you are deleting!`),Et=e("Reset tabs"),Nt=e(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' }
  ]
})
`),Ft=e("Customizing the tabs title & contents"),Kt=e("mdi mdi-star"),Wt={class:"green"},Dt=e("mdi mdi-heart"),Lt={class:"pink mx1"},Mt=e("mdi mdi-heart"),Yt=o("div",{class:"title3"},"This is a custom tab content.",-1),Ht=["innerHTML"],Rt=e(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' }
  ]
})
`),qt=e("Adding a tabs bar extra element"),zt=o("p",null,[e("You can add extra elements at the right of the tabs title bar via the "),o("code",null,"tabs-bar-extra"),e(" slot.")],-1),Ot=e(`<w-tabs
  ref="tabs"
  :items="tabs.tabsCount"
  v-model="tabs.currentTab">
  <template #item-title="{ index }">
    Item title `+i("{{ index }}")+`
  </template>

  <template #item-content="{ index }">
    Item content `+i("{{ index }}")+`
  </template>

  <template #tabs-bar-extra>
    <w-button
      icon="wi-plus"
      @click="tabs.tabsCount++;tabs.currentTab = tabs.tabsCount - 1"
      class="bdrsr mr2">
    </w-button>
  </template>
</w-tabs>`),Gt=e(`data: () => ({
  tabs: {
    tabsCount: 3,
    currentTab: 1
  }
})
`),Jt=e("Refreshing the slider width or position"),Qt=o("p",null,[e("By default there is no data watcher on the tabs title to recalculate the slider width or position."),o("br"),e(`
But you may need to update the slider width for various reasons.
Thanks to the `),o("code",null,"updateSlider"),e(" method, this is quite straightforward."),o("br"),e(`
In this scenario, the slider width is updated on title change from the `),o("strong",{class:"code"},"w-input"),e(` field,
so the slider width adapts to the number of characters on the current tab's title.`)],-1),Xt=e(`w-tabs(ref="tabs" :items="tabs")
  template(#item-content="{ item }")
    w-input.my6(v-model="item.title" label="Tab title" @keyup="onTitleChange")`),Zt=e(`<w-tabs ref="tabs" :items="tabs">
  <template #item-content="{ item }">
    <w-input
      v-model="item.title"
      class="my6"
      label="Tab title"
      @keyup="onTitleChange">
    </w-input>
  </template>
</w-tabs>`),te=e(`data: () => ({
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
}`);function ee(a,l,w,g,v,m){const b=d("title-link"),c=d("w-tabs"),r=d("example"),C=d("w-switch"),k=d("alert"),y=d("w-radios"),u=d("w-button"),A=d("w-flex"),h=d("w-icon"),S=d("w-input");return _(),T("div",null,[n(b,{h2:""},{default:t(()=>[j]),_:1}),n(r,null,{pug:t(()=>[$]),html:t(()=>[B]),js:t(()=>[P]),default:t(()=>[n(c,{items:a.tabs1},null,8,["items"])]),_:1}),n(b,{h2:""},{default:t(()=>[I]),_:1}),n(r,null,{pug:t(()=>[U]),html:t(()=>[E]),js:t(()=>[N]),default:t(()=>[n(c,{items:a.tabs4.items,center:""},null,8,["items"]),n(c,{class:"mt4",items:a.tabs4.items,right:""},null,8,["items"])]),_:1}),n(b,{h2:""},{default:t(()=>[F]),_:1}),n(r,null,{pug:t(()=>[W]),html:t(()=>[D]),js:t(()=>[L]),default:t(()=>[n(C,{class:"mb3",modelValue:a.tabs2.fillBar,"onUpdate:modelValue":l[0]||(l[0]=s=>a.tabs2.fillBar=s)},{default:t(()=>[K]),_:1},8,["modelValue"]),n(c,{items:a.tabs2.items,"fill-bar":a.tabs2.fillBar},null,8,["items","fill-bar"])]),_:1}),n(b,{h2:""},{default:t(()=>[M]),_:1}),n(k,{warning:""},{default:t(()=>[Y,H]),_:1}),R,n(r,null,{pug:t(()=>[O]),html:t(()=>[G]),js:t(()=>[J]),default:t(()=>[n(c,{class:"mb2",modelValue:a.tabs2.active,"onUpdate:modelValue":l[1]||(l[1]=s=>a.tabs2.active=s),items:a.tabs2.items},null,8,["modelValue","items"]),o("strong",null,[q,o("code",z,i(a.tabs2.active),1)])]),_:1}),n(b,{h2:""},{default:t(()=>[Q]),_:1}),X,Z,n(r,null,{pug:t(()=>[tt]),html:t(()=>[et]),js:t(()=>[nt]),default:t(()=>[n(c,{items:a.tabs2.items,color:"blue","bg-color":"indigo-light5"},null,8,["items"])]),_:1}),at,n(r,null,{pug:t(()=>[st]),html:t(()=>[ot]),js:t(()=>[it]),default:t(()=>[n(c,{items:a.tabs2.items,"slider-color":"blue-light2"},null,8,["items"])]),_:1}),lt,n(r,null,{pug:t(()=>[ct]),html:t(()=>[bt]),js:t(()=>[rt]),default:t(()=>[n(c,{items:a.tabs2.items,color:"blue","active-class":"pink","slider-color":"pink"},null,8,["items"])]),_:1}),n(b,{h2:""},{default:t(()=>[dt]),_:1}),n(r,null,{pug:t(()=>[ut]),html:t(()=>[ht]),js:t(()=>[pt]),default:t(()=>[n(C,{class:"mb3",modelValue:a.tabs2.slider,"onUpdate:modelValue":l[2]||(l[2]=s=>a.tabs2.slider=s)},{default:t(()=>[mt]),_:1},8,["modelValue"]),n(c,{items:a.tabs2.items,"no-slider":!a.tabs2.slider,"active-class":"pink"},null,8,["items","no-slider"])]),_:1}),n(b,{h2:""},{default:t(()=>[_t]),_:1}),Tt,n(r,null,{pug:t(()=>[ft]),html:t(()=>[wt]),js:t(()=>[gt]),default:t(()=>[n(y,{class:"mb3",items:a.transitions,modelValue:a.tabs4.transition,"onUpdate:modelValue":l[3]||(l[3]=s=>a.tabs4.transition=s)},null,8,["items","modelValue"]),n(c,{items:a.tabs4.items,transition:a.tabs4.transition},null,8,["items","transition"])]),_:1}),n(b,{h2:""},{default:t(()=>[vt]),_:1}),Ct,n(r,null,{pug:t(()=>[xt]),html:t(()=>[yt]),js:t(()=>[At]),default:t(()=>[n(A,{class:"mb3","align-center":""},{default:t(()=>[kt,n(u,{class:"mx2",icon:"wi-minus",sm:"",onClick:l[4]||(l[4]=s=>a.tabs3.tabsCount-=a.tabs3.tabsCount<1?0:1)}),o("code",null,i(a.tabs3.tabsCount),1),n(u,{class:"mx2",icon:"wi-plus",sm:"",onClick:l[5]||(l[5]=s=>a.tabs3.tabsCount++)})]),_:1}),n(c,{items:a.tabs3.tabsCount},{"item-title":t(({index:s})=>[e("Tab "+i(s),1)]),"item-content":t(({index:s})=>[e("Content "+i(s),1)]),_:1},8,["items"])]),_:1}),n(b,{h2:""},{default:t(()=>[St]),_:1}),n(r,null,{pug:t(()=>[Vt]),html:t(()=>[jt]),js:t(()=>[$t]),default:t(()=>[n(c,{items:a.tabs1,card:""},null,8,["items"])]),_:1}),n(b,{h2:""},{default:t(()=>[Bt]),_:1}),n(k,{tip:""},{default:t(()=>[Pt,It,Ut]),_:1}),n(r,null,{pug:t(()=>[e(`w-tabs(:items="tabs" card)
  template(#item-title="{ item, index }")
    | `+i("{{ item.title }}")+`
    w-button.ml1.mr-1(
      @click.stop="tabs.splice(index - 1, 1)"
      icon="wi-cross"
      outline
      xs)`,1)]),html:t(()=>[e(`<w-tabs :items="tabs" card>
  <template #item-title="{ item, index }">
    `+i("{{ item.title }}")+`
    <w-button
      class="ml1 mr-1"
      @click.stop="tabs.splice(index - 1, 1)"
      icon="wi-cross"
      outline
      xs>
    </w-button>
  </template>
</w-tabs>`,1)]),js:t(()=>[Nt]),default:t(()=>[n(c,{items:a.tabs6.items,card:""},{"item-title":t(({item:s,index:p})=>[e(i(s.title),1),n(u,{class:"ml1 mr-1",onClick:V(pe=>a.tabs6.items.splice(p-1,1),["stop"]),icon:"wi-cross",outline:"",xs:""},null,8,["onClick"])]),_:1},8,["items"]),n(u,{class:"mt4","bg-color":"primary",onClick:l[6]||(l[6]=s=>a.tabs6.items=a.tabs6.originals.slice(0)),disabled:a.tabs6.items.length===3},{default:t(()=>[Et]),_:1},8,["disabled"])]),_:1}),n(b,{h2:""},{default:t(()=>[Ft]),_:1}),n(r,null,{pug:t(()=>[e(`w-tabs(:items="tabs" card)
  template(#item-title="{ item }")
    w-icon.mr1.green mdi mdi-star
    span.green `+i("{{ item.title }}")+`
  template(#item-title.3="{ item }")
    w-icon.pink mdi mdi-heart
    span.pink.mx1 `+i("{{ item.title }}")+`
    w-icon.pink mdi mdi-heart
  template(#item-content.1="{ item }")
    .title3 This is a custom tab content.
    div(v-html="item.content")`,1)]),html:t(()=>[e(`<w-tabs :items="tabs" card>
  <template #item-title="{ item }">
    <w-icon class="mr1 green">
      mdi mdi-star
    </w-icon>

    <span class="green">
      `+i("{{ item.title }}")+`
    </span>
  </template>

  <template #item-title.3="{ item }">
    <w-icon class="pink">
      mdi mdi-heart
    </w-icon>

    <span class="pink mx1">
      `+i("{{ item.title }}")+`
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
</w-tabs>`,1)]),js:t(()=>[Rt]),default:t(()=>[n(c,{items:a.tabs5,card:""},{"item-title":t(({item:s})=>[n(h,{class:"mr1 green"},{default:t(()=>[Kt]),_:1}),o("span",Wt,i(s.title),1)]),"item-title.3":t(({item:s})=>[n(h,{class:"pink"},{default:t(()=>[Dt]),_:1}),o("span",Lt,i(s.title),1),n(h,{class:"pink"},{default:t(()=>[Mt]),_:1})]),"item-content.1":t(({item:s})=>[Yt,o("div",{innerHTML:s.content},null,8,Ht)]),_:1},8,["items"])]),_:1}),n(b,{h2:""},{default:t(()=>[qt]),_:1}),zt,n(r,null,{pug:t(()=>[e(`w-tabs(ref="tabs" :items="tabs.tabsCount" v-model="tabs.currentTab")
  template(#item-title="{ index }") Item title `+i(a.index)+`
  template(#item-content="{ index }") Item content `+i(a.index)+`
  template(#tabs-bar-extra)
    w-button.bdrsr.mr2(
      icon="wi-plus"
      @click="tabs.tabsCount++;tabs.currentTab = tabs.tabsCount - 1")`,1)]),html:t(()=>[Ot]),js:t(()=>[Gt]),default:t(()=>[n(c,{ref:"tabs",items:a.tabs7.tabsCount,modelValue:a.tabs7.currentTab,"onUpdate:modelValue":l[8]||(l[8]=s=>a.tabs7.currentTab=s)},{"item-title":t(({index:s})=>[e("Item title "+i(s),1)]),"item-content":t(({index:s})=>[e("Item content "+i(s),1)]),"tabs-bar-extra":t(()=>[n(u,{class:"bdrsr mr2",icon:"wi-plus",onClick:l[7]||(l[7]=s=>{a.tabs7.tabsCount++,a.tabs7.currentTab=a.tabs7.tabsCount-1})})]),_:1},8,["items","modelValue"])]),_:1}),n(b,{h2:""},{default:t(()=>[Jt]),_:1}),Qt,n(r,null,{pug:t(()=>[Xt]),html:t(()=>[Zt]),js:t(()=>[te]),default:t(()=>[n(c,{ref:"tabs",items:a.tabs8},{"item-content":t(({item:s})=>[n(S,{class:"my6",modelValue:s.title,"onUpdate:modelValue":p=>s.title=p,label:"Tab title",onKeyup:m.onTitleChange},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:1},8,["items"])]),_:1})])}const ne={data:()=>({tabs1:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3 has a long title",content:"Tab 3 content."}],tabs2:{items:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."},{title:"Tab 4",content:"Tab 4 content."},{title:"Tab 5",content:"Tab 5 content.",disabled:!0}],active:2,fillBar:!0,slider:!1},tabs3:{tabsCount:3},tabs4:{items:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."}],transition:"fade"},tabs5:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."}],tabs6:{items:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."}],originals:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."}]},tabs7:{tabsCount:3,currentTab:1},tabs8:[{title:"Tab 1"},{title:"Tab 2"},{title:"Tab 3"}],transitions:[{label:"default",value:""},{label:"fade"},{label:"slide-fade-up"},{label:"slide-fade-down"},{label:"slide-fade-left"},{label:"slide-fade-right"},{label:"scale-fade"},{label:"none",value:!1}]}),methods:{onTitleChange(){this.$nextTick(this.$refs.tabs.updateSlider)}}};var ae=f(ne,[["render",ee]]);const se=o("div",{class:"w-divider my12"},null,-1),oe=e("API");function ie(a,l,w,g,v,m){const b=d("title-link"),c=d("component-api");return _(),T("div",null,[se,n(b,{class:"title1",h2:""},{default:t(()=>[oe]),_:1}),n(c,{class:"mt0",items:m.props,descriptions:a.propsDescs,title:"Props"},null,8,["items","descriptions"]),n(c,{items:a.slots,title:"Slots"},null,8,["items"]),n(c,{items:m.events,title:"Events"},null,8,["items"])])}const le={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide a tab index (a number starting from 0) to open it. This value gets updated when using a v-model.',color:`Applies a color to the each tab title's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the each tab title's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,items:'Expecting an array of objects. Each object being an tab item, it should include a <code>title</code> and <code>content</code> attributes.<br>Alternatively, you can provide an integer number (call it <em class="code">x</em>), to loop through and create <em class="code">x</em> tabs. You can then use the individual slots <code>item-title.x</code> &amp; <code>item-content.x</code> to define each item title and content.',itemTitleKey:"Specifies the name of the attribute in each item object where to find the item's title string.",itemContentKey:"Specifies the name of the attribute in each item object where to find the item's content string.",titleClass:"Applies a custom CSS class to the tab title.",activeClass:"Applies a custom CSS class to the active tab title.",noSlider:"When set to true, removes the slider underneath the active tab title.",sliderColor:'Provide a custom color for the tabs slider (<code>primary</code> by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',contentClass:"Applies a custom CSS class to the tab content.",transition:'Applies a particular transition to the tab contents when switching tab.<br>Check all the transitions that apply to this component in the <a href="#content-transitions">Content transitions</a> example.',fillBar:"When set to true, the tabs titles will occupy the full available width.",center:"Centers the tabs titles.",right:"Aligns the tabs titles to the right.",card:"Applies the card style on all the tabs titles."},ce={"item-title":{description:"Provide a custom title for every tab. Applies to all the tabs, but can be overridden by the <code>item-title.x</code> slot.",params:{item:"The current tab object.",index:"The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.",active:"A boolean representing the active state of the tab."}},"item-title.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom title for a single tab: the tab at the index <em class="code">x</em>.',params:{item:"The current tab object.",index:"The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.",active:"A boolean representing the active state of the tab."}},"item-content":{description:"Provide a custom content for every tab. Applies to all the tabs, but can be overridden by the <code>item-content.x</code> slot.",params:{item:"The current tab object.",index:"The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.",active:"A boolean representing the active state of the tab."}},"item-content.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single tab: the tab at the index <em class="code">x</em>.',params:{item:"The current tab object.",index:"The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.",active:"A boolean representing the active state of the tab."}}},be={input:{description:"Emitted each time the current tab changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Array]":"An array of booleans representing the active state of each tab."}},"update:modelValue":{description:"Emitted each time the current tab changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Array]":"An array of booleans representing the active state of each tab."}},focus:{description:"Emitted on each tab title focus.",params:{"[Object]":"The focused tab item object."}}},re={data:()=>({propsDescs:le,slots:ce}),computed:{props(){return x.props},events(){return x.emits.reduce((a,l)=>(a[l]=be[l]||{})&&a,{})}}};var de=f(re,[["render",ie]]);const me=e("w-tabs");function ue(a,l,w,g,v,m){const b=d("ui-component-title"),c=d("examples"),r=d("api");return _(),T("main",null,[n(b,null,{default:t(()=>[me]),_:1}),n(c),n(r)])}const he={components:{Examples:ae,Api:de}};var fe=f(he,[["render",ue]]);export{fe as default};
