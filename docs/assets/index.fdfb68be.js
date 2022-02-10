import{n as o,J as l}from"./index.6bc87caa.js";import"./vendor.748d1766.js";var m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("title-link",{attrs:{h2:""}},[t._v("Basic")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-tabs :items="tabs"></w-tabs>')]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3 has a long title', content: 'Tab 3 content.' }
  ]
})
`)]},proxy:!0}])},[e("w-tabs",{attrs:{items:t.tabs1}})],1),e("title-link",{attrs:{h2:""}},[t._v("Align center and right")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-tabs :items="tabs" center></w-tabs>
<w-tabs :items="tabs" right></w-tabs>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' }
  ]
})
`)]},proxy:!0}])},[e("w-tabs",{attrs:{items:t.tabs4.items,center:""}}),e("w-tabs",{staticClass:"mt4",attrs:{items:t.tabs4.items,right:""}})],1),e("title-link",{attrs:{h2:""}},[t._v("Fill bar & disabled items")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-switch v-model="fillBar" class="mb3">
  Fill bar
</w-switch>

<w-tabs :items="tabs" :fill-bar="fillBar"></w-tabs>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ],
  fillBar: true
})
`)]},proxy:!0}])},[e("w-switch",{staticClass:"mb3",model:{value:t.tabs2.fillBar,callback:function(n){t.$set(t.tabs2,"fillBar",n)},expression:"tabs2.fillBar"}},[t._v("Fill bar")]),e("w-tabs",{attrs:{items:t.tabs2.items,"fill-bar":t.tabs2.fillBar}})],1),e("title-link",{attrs:{h2:""}},[t._v("V-model")]),e("alert",{attrs:{warning:""}},[e("strong",[t._v("Since version 1.21.0")]),t._v(", the v-model/value only accepts a numeric tab index (previously an array of boolean).")]),t._m(0),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-tabs v-model="activeTab" :items="tabs"></w-tabs>

<strong>
  v-model:
  <code class="ml2">
    `+t._s("{{ activeTab }}")+`
  </code>
</strong>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ],
  activeTab: 2
})
`)]},proxy:!0}])},[e("w-tabs",{staticClass:"mb2",attrs:{items:t.tabs2.items},model:{value:t.tabs2.active,callback:function(n){t.$set(t.tabs2,"active",n)},expression:"tabs2.active"}}),e("strong",[t._v("v-model:"),e("code",{staticClass:"ml2"},[t._v(t._s(t.tabs2.active))])])],1),e("title-link",{attrs:{h2:""}},[t._v("Colors")]),t._m(1),e("div",{staticClass:"title3"},[t._v("Color & bg-color")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-tabs
  :items="tabs"
  color="blue"
  bg-color="indigo-light5">
</w-tabs>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})
`)]},proxy:!0}])},[e("w-tabs",{attrs:{items:t.tabs2.items,color:"blue","bg-color":"indigo-light5"}})],1),e("div",{staticClass:"title3 mt4"},[t._v("Slider color")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-tabs
  :items="tabs"
  slider-color="blue-light2">
</w-tabs>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})
`)]},proxy:!0}])},[e("w-tabs",{attrs:{items:t.tabs2.items,"slider-color":"blue-light2"}})],1),e("div",{staticClass:"title3"},[t._v("Active class")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-tabs
  :items="tabs"
  color="blue"
  active-class="pink"
  slider-color="pink">
</w-tabs>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})
`)]},proxy:!0}])},[e("w-tabs",{attrs:{items:t.tabs2.items,color:"blue","active-class":"pink","slider-color":"pink"}})],1),e("title-link",{attrs:{h2:""}},[t._v("No slider")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-switch class="mb3" v-model="tabsSlider">
  Slider
</w-switch>

<w-tabs
  :items="tabs"
  :no-slider="!tabsSlider"
  active-class="pink">
</w-tabs>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  tabsSlider: false,
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' },
    { title: 'Tab 4', content: 'Tab 4 content.' },
    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
  ]
})
`)]},proxy:!0}])},[e("w-switch",{staticClass:"mb3",model:{value:t.tabs2.slider,callback:function(n){t.$set(t.tabs2,"slider",n)},expression:"tabs2.slider"}},[t._v("Slider")]),e("w-tabs",{attrs:{items:t.tabs2.items,"no-slider":!t.tabs2.slider,"active-class":"pink"}})],1),e("title-link",{attrs:{h2:""}},[t._v("Content transitions")]),e("p",[t._v("Change tab to see the transition.")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-radios
  class="mb3"
  :items="transitions"
  v-model="transition">
</w-radios>

<w-tabs
  :items="tabs"
  :transition="transition">
</w-tabs>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
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
`)]},proxy:!0}])},[e("w-radios",{staticClass:"mb3",attrs:{items:t.transitions},model:{value:t.tabs4.transition,callback:function(n){t.$set(t.tabs4,"transition",n)},expression:"tabs4.transition"}}),e("w-tabs",{attrs:{items:t.tabs4.items,transition:t.tabs4.transition}})],1),e("title-link",{attrs:{h2:""}},[t._v("Add / remove tabs")]),e("p",[t._v(`The tabs will naturally try to fit in the available space. But if they can't fit because there are
too many, a scrollbar will allow navigation to all the tabs.`)]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-flex class="mb3" align-center>
  Number of tabs:
  <w-button
    class="mx2"
    icon="wi-minus"
    sm
    @click="tabsCount -= tabsCount < 1 ? 0 : 1">
  </w-button>

  <code>`+t._s("{{ tabsCount }}")+`</code>

  <w-button
    class="mx2"
    icon="wi-plus"
    sm
    @click="tabsCount++">
  </w-button>
</w-flex>

<w-tabs :items="tabsCount">
  <template #item-title="{ index }">
    Tab `+t._s("{{ index }}")+`
  </template>

  <template #item-content="{ index }">
    Content `+t._s("{{ index }}")+`
  </template>
</w-tabs>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  tabsCount: 3
})
`)]},proxy:!0}])},[e("w-flex",{staticClass:"mb3",attrs:{"align-center":""}},[t._v("Number of tabs:"),e("w-button",{staticClass:"mx2",attrs:{icon:"wi-minus",sm:""},on:{click:function(n){t.tabs3.tabsCount-=t.tabs3.tabsCount<1?0:1}}}),e("code",[t._v(t._s(t.tabs3.tabsCount))]),e("w-button",{staticClass:"mx2",attrs:{icon:"wi-plus",sm:""},on:{click:function(n){t.tabs3.tabsCount++}}})],1),e("w-tabs",{attrs:{items:t.tabs3.tabsCount},scopedSlots:t._u([{key:"item-title",fn:function(n){var s=n.index;return[t._v("Tab "+t._s(s))]}},{key:"item-content",fn:function(n){var s=n.index;return[t._v("Content "+t._s(s))]}}])})],1),e("title-link",{attrs:{h2:""}},[t._v("Card style tabs")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-tabs :items="tabs" card></w-tabs>')]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3 has a long title', content: 'Tab 3 content.' }
  ]
})
`)]},proxy:!0}])},[e("w-tabs",{attrs:{items:t.tabs1,card:""}})],1),e("title-link",{attrs:{h2:""}},[t._v("Close button")]),e("alert",{attrs:{tip:""}},[t._v("When using a close button, don't forget to stop the click propagation "),e("code",[t._v("@click.stop")]),t._v(` to prevent
the navigation to the tab that you are deleting!`)]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-tabs :items="tabs" card>
  <template #item-title="{ item, index }">
    `+t._s("{{ item.title }}")+`
    <w-button
      class="ml1 mr-1"
      @click.stop="tabs.splice(index - 1, 1)"
      icon="wi-cross"
      outline
      xs>
    </w-button>
  </template>
</w-tabs>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' }
  ]
})
`)]},proxy:!0}])},[e("w-tabs",{attrs:{items:t.tabs6.items,card:""},scopedSlots:t._u([{key:"item-title",fn:function(n){var s=n.item,i=n.index;return[t._v(t._s(s.title)),e("w-button",{staticClass:"ml1 mr-1",attrs:{icon:"wi-cross",outline:"",xs:""},on:{click:function(u){return u.stopPropagation(),t.tabs6.items.splice(i-1,1)}}})]}}])}),e("w-button",{staticClass:"mt4",attrs:{"bg-color":"primary",disabled:t.tabs6.items.length===3},on:{click:function(n){t.tabs6.items=t.tabs6.originals.slice(0)}}},[t._v("Reset tabs")])],1),e("title-link",{attrs:{h2:""}},[t._v("Customizing the tabs title & contents")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-tabs :items="tabs" card>
  <template #item-title="{ item }">
    <w-icon class="mr1 green">
      mdi mdi-star
    </w-icon>

    <span class="green">
      `+t._s("{{ item.title }}")+`
    </span>
  </template>

  <template #item-title.3="{ item }">
    <w-icon class="pink">
      mdi mdi-heart
    </w-icon>

    <span class="pink mx1">
      `+t._s("{{ item.title }}")+`
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
</w-tabs>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  tabs: [
    { title: 'Tab 1', content: 'Tab 1 content.' },
    { title: 'Tab 2', content: 'Tab 2 content.' },
    { title: 'Tab 3', content: 'Tab 3 content.' }
  ]
})
`)]},proxy:!0}])},[e("w-tabs",{attrs:{items:t.tabs5,card:""},scopedSlots:t._u([{key:"item-title",fn:function(n){var s=n.item;return[e("w-icon",{staticClass:"mr1 green"},[t._v("mdi mdi-star")]),e("span",{staticClass:"green"},[t._v(t._s(s.title))])]}},{key:"item-title.3",fn:function(n){var s=n.item;return[e("w-icon",{staticClass:"pink"},[t._v("mdi mdi-heart")]),e("span",{staticClass:"pink mx1"},[t._v(t._s(s.title))]),e("w-icon",{staticClass:"pink"},[t._v("mdi mdi-heart")])]}},{key:"item-content.1",fn:function(n){var s=n.item;return[e("div",{staticClass:"title3"},[t._v("This is a custom tab content.")]),e("div",{domProps:{innerHTML:t._s(s.content)}})]}}])})],1),e("title-link",{attrs:{h2:""}},[t._v("Adding a tabs bar extra element")]),t._m(2),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-tabs
  ref="tabs"
  :items="tabs.tabsCount"
  v-model="tabs.currentTab">
  <template #item-title="{ index }">
    Item title `+t._s("{{ index }}")+`
  </template>

  <template #item-content="{ index }">
    Item content `+t._s("{{ index }}")+`
  </template>

  <template #tabs-bar-extra>
    <w-button
      icon="wi-plus"
      @click="tabs.tabsCount++;tabs.currentTab = tabs.tabsCount - 1"
      class="bdrsr mr2">
    </w-button>
  </template>
</w-tabs>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  tabs: {
    tabsCount: 3,
    currentTab: 1
  }
})
`)]},proxy:!0}])},[e("w-tabs",{ref:"tabs",attrs:{items:t.tabs7.tabsCount},scopedSlots:t._u([{key:"item-title",fn:function(n){var s=n.index;return[t._v("Item title "+t._s(s))]}},{key:"item-content",fn:function(n){var s=n.index;return[t._v("Item content "+t._s(s))]}},{key:"tabs-bar-extra",fn:function(){return[e("w-button",{staticClass:"bdrsr mr2",attrs:{icon:"wi-plus"},on:{click:function(n){t.tabs7.tabsCount++,t.tabs7.currentTab=t.tabs7.tabsCount-1}}})]},proxy:!0}]),model:{value:t.tabs7.currentTab,callback:function(n){t.$set(t.tabs7,"currentTab",n)},expression:"tabs7.currentTab"}})],1),e("title-link",{attrs:{h2:""}},[t._v("Refreshing the slider width or position")]),t._m(3),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-tabs ref="tabs" :items="tabs">
  <template #item-content="{ item }">
    <w-input
      v-model="item.title"
      class="my6"
      label="Tab title"
      @keyup="onTitleChange">
    </w-input>
  </template>
</w-tabs>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
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
}`)]},proxy:!0}])},[e("w-tabs",{ref:"tabs",attrs:{items:t.tabs8},scopedSlots:t._u([{key:"item-content",fn:function(n){var s=n.item;return[e("w-input",{staticClass:"my6",attrs:{label:"Tab title"},on:{keyup:t.onTitleChange},model:{value:s.title,callback:function(i){t.$set(s,"title",i)},expression:"item.title"}})]}}])})],1)],1)},d=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v("It is possible to open a particular tab programmatically via "),e("code",[t._v("v-model")]),t._v(" or "),e("code",[t._v("value")]),t._v(".")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v("Like in most components, you can set a "),e("code",[t._v("color")]),t._v(" for the text and a "),e("code",[t._v("bg-color")]),t._v(` for the
background. You can also set a `),e("code",[t._v("slider-color")]),t._v(" and an "),e("code",[t._v("active-class")]),t._v(`.
`)])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v("You can add extra elements at the right of the tabs title bar via the "),e("code",[t._v("tabs-bar-extra")]),t._v(" slot.")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v("By default there is no data watcher on the tabs title to recalculate the slider width or position."),e("br"),t._v(`
But you may need to update the slider width for various reasons.
Thanks to the `),e("code",[t._v("updateSlider")]),t._v(" method, this is quite straightforward."),e("br"),t._v(`
In this scenario, the slider width is updated on title change from the `),e("strong",{staticClass:"code"},[t._v("w-input")]),t._v(` field,
so the slider width adapts to the number of characters on the current tab's title.`)])}];const p={data:()=>({tabs1:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3 has a long title",content:"Tab 3 content."}],tabs2:{items:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."},{title:"Tab 4",content:"Tab 4 content."},{title:"Tab 5",content:"Tab 5 content.",disabled:!0}],active:2,fillBar:!0,slider:!1},tabs3:{tabsCount:3},tabs4:{items:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."}],transition:"fade"},tabs5:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."}],tabs6:{items:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."}],originals:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."}]},tabs7:{tabsCount:3,currentTab:1},tabs8:[{title:"Tab 1"},{title:"Tab 2"},{title:"Tab 3"}],transitions:[{label:"default",value:""},{label:"fade"},{label:"slide-fade-up"},{label:"slide-fade-down"},{label:"slide-fade-left"},{label:"slide-fade-right"},{label:"scale-fade"},{label:"none",value:!1}]}),methods:{onTitleChange(){this.$refs.tabs.updateSlider()}}},r={};var v=o(p,m,d,!1,h,null,null,null);function h(t){for(let a in r)this[a]=r[a]}var _=function(){return v.exports}(),f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"w-divider my12"}),e("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),e("component-api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),e("component-api",{attrs:{items:t.slots,title:"Slots"}}),e("component-api",{attrs:{items:t.events,title:"Events"}})],1)},T=[];const x={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Provide a tab index (a number starting from 0) to open it. This value gets updated when using a v-model.',color:`Applies a color to the each tab title's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the each tab title's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,items:'Expecting an array of objects. Each object being an tab item, it should include a <code>title</code> and <code>content</code> attributes.<br>Alternatively, you can provide an integer number (call it <em class="code">x</em>), to loop through and create <em class="code">x</em> tabs. You can then use the individual slots <code>item-title.x</code> &amp; <code>item-content.x</code> to define each item title and content.',itemTitleKey:"Specifies the name of the attribute in each item object where to find the item's title string.",itemContentKey:"Specifies the name of the attribute in each item object where to find the item's content string.",titleClass:"Applies a custom CSS class to the tab title.",activeClass:"Applies a custom CSS class to the active tab title.",noSlider:"When set to true, removes the slider underneath the active tab title.",sliderColor:'Provide a custom color for the tabs slider (<code>primary</code> by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',contentClass:"Applies a custom CSS class to the tab content.",transition:'Applies a particular transition to the tab contents when switching tab.<br>Check all the transitions that apply to this component in the <a href="#content-transitions">Content transitions</a> example.',fillBar:"When set to true, the tabs titles will occupy the full available width.",center:"Centers the tabs titles.",right:"Aligns the tabs titles to the right.",card:"Applies the card style on all the tabs titles."},w={"item-title":{description:"Provide a custom title for every tab. Applies to all the tabs, but can be overridden by the <code>item-title.x</code> slot.",params:{item:"The current tab object.",index:"The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.",active:"A boolean representing the active state of the tab."}},"item-title.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom title for a single tab: the tab at the index <em class="code">x</em>.',params:{item:"The current tab object.",index:"The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.",active:"A boolean representing the active state of the tab."}},"item-content":{description:"Provide a custom content for every tab. Applies to all the tabs, but can be overridden by the <code>item-content.x</code> slot.",params:{item:"The current tab object.",index:"The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.",active:"A boolean representing the active state of the tab."}},"item-content.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single tab: the tab at the index <em class="code">x</em>.',params:{item:"The current tab object.",index:"The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.",active:"A boolean representing the active state of the tab."}}},y={input:{description:"Emitted each time the current tab changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Array]":"An array of booleans representing the active state of each tab."}},"update:modelValue":{description:"Emitted each time the current tab changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Array]":"An array of booleans representing the active state of each tab."}},focus:{description:"Emitted on each tab title focus.",params:{"[Object]":"The focused tab item object."}}},g={data:()=>({propsDescs:x,slots:w}),computed:{props(){return l.props},events(){return l.emits.reduce((t,a)=>(t[a]=y[a]||{})&&t,{})}}},c={};var k=o(g,f,T,!1,C,null,null,null);function C(t){for(let a in c)this[a]=c[a]}var S=function(){return k.exports}(),$=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",[e("ui-component-title",[t._v("w-tabs")]),e("examples"),e("api")],1)},j=[];const A={components:{Examples:_,Api:S}},b={};var E=o(A,$,j,!1,B,null,null,null);function B(t){for(let a in b)this[a]=b[a]}var F=function(){return E.exports}();export{F as default};
