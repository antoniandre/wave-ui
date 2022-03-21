import{n as e,N as o}from"./index.6bc87caa.js";import"./vendor.748d1766.js";var i=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[t("title-link",{attrs:{h2:""}},[s._v("Simple toolbar with shadow")]),t("example",{attrs:{"content-class":"pa4"},scopedSlots:s._u([{key:"html",fn:function(){return[s._v(`<w-toolbar shadow>
  <div class="title2">Title</div>
  <div class="spacer"></div>
  <span class="ml2">Item 1</span>
  <span class="ml2">Item 2</span>
  <span class="ml2">Item 3</span>
</w-toolbar>

<w-toolbar shadow class="mt6 py1">
  <w-icon color="light-blue-dark3" size="2.5em">wi-wave</w-icon>
  <div class="title3">Wave UI</div>
  <div class="spacer"></div>
  <w-button icon="mdi mdi-home" text lg class="ml3"></w-button>
  <w-button icon="mdi mdi-chat" text lg class="ml3"></w-button>
  <w-button icon="mdi mdi-email" text lg class="ml3"></w-button>
</w-toolbar>
`)]},proxy:!0}])},[t("w-toolbar",{attrs:{shadow:""}},[t("div",{staticClass:"title2 my0"},[s._v("Title")]),t("div",{staticClass:"spacer"}),t("span",{staticClass:"ml2"},[s._v("Item 1")]),t("span",{staticClass:"ml2"},[s._v("Item 2")]),t("span",{staticClass:"ml2"},[s._v("Item 3")])]),t("w-toolbar",{staticClass:"mt6 py1",attrs:{shadow:""}},[t("w-icon",{staticClass:"mr3",staticStyle:{color:"#497ca2"},attrs:{size:"2.5em"}},[s._v("wi-wave")]),t("div",{staticClass:"title3 my0"},[s._v("Wave UI")]),t("div",{staticClass:"spacer"}),t("w-button",{staticClass:"ml3",attrs:{icon:"mdi mdi-home",text:"",lg:""}}),t("w-button",{staticClass:"ml3",attrs:{icon:"mdi mdi-chat",text:"",lg:""}}),t("w-button",{staticClass:"ml3",attrs:{icon:"mdi mdi-email",text:"",lg:""}})],1)],1),t("title-link",{attrs:{h2:""}},[s._v("Background color & text color")]),s._m(0),t("example",{attrs:{"content-class":"pa4"},scopedSlots:s._u([{key:"html",fn:function(){return[s._v(`<w-toolbar bg-color="blue-light5" color="blue-dark3">
  <div class="title2">Title</div>
  <div class="spacer"></div>
  <span class="ml2">Item 1</span>
  <span class="ml2">Item 2</span>
  <span class="ml2">Item 3</span>
</w-toolbar>
`)]},proxy:!0}])},[t("w-toolbar",{attrs:{"bg-color":"blue-light5",color:"blue-dark3"}},[t("div",{staticClass:"title2 my0"},[s._v("Title")]),t("div",{staticClass:"spacer"}),t("span",{staticClass:"ml2"},[s._v("Item 1")]),t("span",{staticClass:"ml2"},[s._v("Item 2")]),t("span",{staticClass:"ml2"},[s._v("Item 3")])])],1),t("title-link",{attrs:{h2:""}},[s._v("Toolbars inside w-card")]),t("p",[s._v(`The w-card component will detect if there is a toolbar in the title slot or in the actions
slot and will remove the default padding and border on this slot if there is.
`)]),t("example",{scopedSlots:s._u([{key:"html",fn:function(){return[s._v(`<w-flex wrap :gap="4" class="mt4">
  <w-card>
    <template #title>
      <w-toolbar>
        <div class="title2">Top Bar</div>
        <div class="spacer"></div>
        <span class="ml2">Item 1</span>
        <span class="ml2">Item 2</span>
        <span class="ml2">Item 3</span>
      </w-toolbar>
    </template>
  </w-card>

  <w-card>
    <template #actions>
      <w-toolbar bottom>
        <div class="title2">Bottom Bar</div>
        <div class="spacer"></div>
        <span class="ml2">Item 1</span>
        <span class="ml2">Item 2</span>
        <span class="ml2">Item 3</span>
      </w-toolbar>
    </template>
  </w-card>
</w-flex>

<h3>With shadow</h3>

<w-flex wrap :gap="4" class="mt4">
  <w-card>
    <template #title>
      <w-toolbar shadow>
        <div class="title2">Top Bar</div>
        <div class="spacer"></div>
        <span class="ml2">Item 1</span>
        <span class="ml2">Item 2</span>
        <span class="ml2">Item 3</span>
      </w-toolbar>
    </template>
  </w-card>

  <w-card>
    <template #actions>
      <w-toolbar bottom shadow>
        <div class="title2">Bottom Bar</div>
        <div class="spacer"></div>
        <span class="ml2">Item 1</span>
        <span class="ml2">Item 2</span>
        <span class="ml2">Item 3</span>
      </w-toolbar>
    </template>
  </w-card>
</w-flex>`)]},proxy:!0},{key:"css",fn:function(){return[s._v(`.w-card {
  flex-grow: 1;
  max-width: 550px;
  height: 200px;
}
`)]},proxy:!0}])},[t("w-flex",{staticClass:"mt4",attrs:{wrap:"",gap:4}},[t("w-card",{scopedSlots:s._u([{key:"title",fn:function(){return[t("w-toolbar",[t("div",{staticClass:"title2 my0"},[s._v("Top Bar")]),t("div",{staticClass:"spacer"}),t("span",{staticClass:"ml2"},[s._v("Item 1")]),t("span",{staticClass:"ml2"},[s._v("Item 2")]),t("span",{staticClass:"ml2"},[s._v("Item 3")])])]},proxy:!0}])}),t("w-card",{scopedSlots:s._u([{key:"actions",fn:function(){return[t("w-toolbar",{attrs:{bottom:""}},[t("div",{staticClass:"title2 my0"},[s._v("Bottom Bar")]),t("div",{staticClass:"spacer"}),t("span",{staticClass:"ml2"},[s._v("Item 1")]),t("span",{staticClass:"ml2"},[s._v("Item 2")]),t("span",{staticClass:"ml2"},[s._v("Item 3")])])]},proxy:!0}])})],1),t("h3",[s._v("With shadow")]),t("w-flex",{staticClass:"mt4",attrs:{wrap:"",gap:4}},[t("w-card",{scopedSlots:s._u([{key:"title",fn:function(){return[t("w-toolbar",{attrs:{shadow:""}},[t("div",{staticClass:"title2 my0"},[s._v("Top Bar")]),t("div",{staticClass:"spacer"}),t("span",{staticClass:"ml2"},[s._v("Item 1")]),t("span",{staticClass:"ml2"},[s._v("Item 2")]),t("span",{staticClass:"ml2"},[s._v("Item 3")])])]},proxy:!0}])}),t("w-card",{scopedSlots:s._u([{key:"actions",fn:function(){return[t("w-toolbar",{attrs:{bottom:"",shadow:""}},[t("div",{staticClass:"title2 my0"},[s._v("Bottom Bar")]),t("div",{staticClass:"spacer"}),t("span",{staticClass:"ml2"},[s._v("Item 1")]),t("span",{staticClass:"ml2"},[s._v("Item 2")]),t("span",{staticClass:"ml2"},[s._v("Item 3")])])]},proxy:!0}])})],1)],1),t("title-link",{attrs:{h2:""}},[s._v("Custom toolbar height")]),s._m(1),t("example",{attrs:{"content-class":"pa0"},scopedSlots:s._u([{key:"html",fn:function(){return[s._v(`<w-toolbar bg-color="blue-light5" color="blue-dark3" height="5em" class="py0">
  <div class="title2">Title</div>
  <div class="spacer"></div>
  <span class="mx1">Item 1</span>
  <span class="mx1">Item 2</span>
  <w-divider vertical class="mx2"></w-divider>
  <span class="mx1">Item 3</span>
  <span class="mx1">Item 4</span>
  <w-divider vertical class="mx2"></w-divider>
  <span class="mx1">Item 5</span>
  <span class="mx1">Item 6</span>
</w-toolbar>`)]},proxy:!0}])},[t("w-toolbar",{staticClass:"py0",attrs:{"bg-color":"blue-light5",color:"blue-dark3",height:"5.4em"}},[t("div",{staticClass:"title2 my0"},[s._v("Title")]),t("div",{staticClass:"spacer"}),t("span",{staticClass:"mx1"},[s._v("Item 1")]),t("span",{staticClass:"mx1"},[s._v("Item 2")]),t("w-divider",{staticClass:"mx2",attrs:{vertical:""}}),t("span",{staticClass:"mx1"},[s._v("Item 3")]),t("span",{staticClass:"mx1"},[s._v("Item 4")]),t("w-divider",{staticClass:"mx2",attrs:{vertical:""}}),t("span",{staticClass:"mx1"},[s._v("Item 5")]),t("span",{staticClass:"mx1"},[s._v("Item 6")])],1)],1)],1)},c=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("Like in most components, you can set a "),t("code",[s._v("color")]),s._v(" for the text and a "),t("code",[s._v("bg-color")]),s._v(` for the
background.`)])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("The "),t("code",[s._v("w-toolbar")]),s._v(` component also accepts a height. It can be set as a string with units
or a number of pixels (without unit).
`)])}];const m={},l={};var p=e(m,i,c,!1,d,null,null,null);function d(s){for(let a in l)this[a]=l[a]}var v=function(){return p.exports}(),_=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[t("div",{staticClass:"w-divider my12"}),t("title-link",{staticClass:"title1",attrs:{h2:""}},[s._v("API")]),t("component-api",{staticClass:"mt0",attrs:{items:s.props,descriptions:s.propsDescs,title:"Props"}}),t("component-api",{attrs:{items:s.slots,title:"Slots"}}),t("component-api",{attrs:{items:s.events,title:"Events"}})],1)},u=[];const h={color:`Applies a color to the toolbar's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the toolbar's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,absolute:"Sets the CSS position of the toolbar to <code>absolute</code>.",fixed:"Sets the CSS position of the toolbar to <code>fixed</code>.",bottom:"Applies a border at the top of the toolbar, unless the <code>no-border</code> prop is set to true. Also removes the default bottom border.",height:"Sets a height on the toolbar.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",noBorder:"Removes the default border (top or bottom) from the toolbar.",shadow:"Applies a drop shadow to the toolbar."},w={default:{description:"The toolbar content."}},b={},f={data:()=>({propsDescs:h,slots:w}),computed:{props(){return o.props},events(){return o.emits.reduce((s,a)=>(s[a]={description:b[a]||""})&&s,{})}}},n={};var x=e(f,_,u,!1,C,null,null,null);function C(s){for(let a in n)this[a]=n[a]}var I=function(){return x.exports}(),g=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("main",[t("ui-component-title",[s._v("w-toolbar")]),t("examples"),t("api")],1)},y=[];const k={components:{Examples:v,Api:I}},r={};var S=e(k,g,y,!1,$,null,null,null);function $(s){for(let a in r)this[a]=r[a]}var A=function(){return S.exports}();export{A as default};
