import{n as s,P as o}from"./index.e31dd236.js";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("title-link",{attrs:{h2:""}},[t._v("Simple toolbar with shadow")]),a("example",{attrs:{"content-class":"pa4"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-toolbar(shadow)
  .title2 Title
  .spacer
  span.ml2 Item 1
  span.ml2 Item 2
  span.ml2 Item 3

w-toolbar.mt6.py1(shadow)
  w-icon.mr3(size="2.5em" color="light-blue-dark3") wi-wave
  .title3.my0 Wave UI
  .spacer
  w-button.ml3(icon="mdi mdi-home" text lg)
  w-button.ml3(icon="mdi mdi-chat" text lg)
  w-button.ml3(icon="mdi mdi-email" text lg)`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-toolbar shadow>
  <div class="title2">Title</div>
  <div class="spacer"></div>
  <span class="ml2">Item 1</span>
  <span class="ml2">Item 2</span>
  <span class="ml2">Item 3</span>
</w-toolbar>

<w-toolbar shadow class="mt6 py1">
  <w-icon color="light-blue-dark3" size="2.5em">wi-wave</w-icon>
  <div class="title3 mr3">Wave UI</div>
  <div class="spacer"></div>
  <w-button icon="mdi mdi-home" text lg class="ml3"></w-button>
  <w-button icon="mdi mdi-chat" text lg class="ml3"></w-button>
  <w-button icon="mdi mdi-email" text lg class="ml3"></w-button>
</w-toolbar>
`)]},proxy:!0}])},[a("w-toolbar",{attrs:{shadow:""}},[a("div",{staticClass:"title2 my0"},[t._v("Title")]),a("div",{staticClass:"spacer"}),a("span",{staticClass:"ml2"},[t._v("Item 1")]),a("span",{staticClass:"ml2"},[t._v("Item 2")]),a("span",{staticClass:"ml2"},[t._v("Item 3")])]),a("w-toolbar",{staticClass:"mt6 py1",attrs:{shadow:""}},[a("w-icon",{staticClass:"mr3",staticStyle:{color:"#497ca2"},attrs:{size:"2.5em"}},[t._v("wi-wave")]),a("div",{staticClass:"title3 my0"},[t._v("Wave UI")]),a("div",{staticClass:"spacer"}),a("w-button",{staticClass:"ml3",attrs:{icon:"mdi mdi-home",text:"",lg:""}}),a("w-button",{staticClass:"ml3",attrs:{icon:"mdi mdi-chat",text:"",lg:""}}),a("w-button",{staticClass:"ml3",attrs:{icon:"mdi mdi-email",text:"",lg:""}})],1)],1),a("title-link",{attrs:{h2:""}},[t._v("Background color & text color")]),t._m(0),a("example",{attrs:{"content-class":"pa4"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-toolbar(bg-color="blue-light5" color="blue-dark3")
  .title2 Title
  .spacer
  span.ml2 Item 1
  span.ml2 Item 2
  span.ml2 Item 3`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-toolbar bg-color="blue-light5" color="blue-dark3">
  <div class="title2">Title</div>
  <div class="spacer"></div>
  <span class="ml2">Item 1</span>
  <span class="ml2">Item 2</span>
  <span class="ml2">Item 3</span>
</w-toolbar>
`)]},proxy:!0}])},[a("w-toolbar",{attrs:{"bg-color":"blue-light5",color:"blue-dark3"}},[a("div",{staticClass:"title2 my0"},[t._v("Title")]),a("div",{staticClass:"spacer"}),a("span",{staticClass:"ml2"},[t._v("Item 1")]),a("span",{staticClass:"ml2"},[t._v("Item 2")]),a("span",{staticClass:"ml2"},[t._v("Item 3")])])],1),a("title-link",{attrs:{h2:""}},[t._v("Toolbars inside w-card")]),a("p",[t._v(`The w-card component will detect if there is a toolbar in the title slot or in the actions
slot and will remove the default padding and border on this slot if there is.
`)]),a("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-flex.mt4(wrap :gap="4")
  w-card
    template(#title)
      w-toolbar
        .title2 Top Bar
        .spacer
        span.ml2 Item 1
        span.ml2 Item 2
        span.ml2 Item 3

  w-card
    template(#actions)
      w-toolbar(bottom)
        .title2 Bottom Bar
        .spacer
        span.ml2 Item 1
        span.ml2 Item 2
        span.ml2 Item 3`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-flex wrap :gap="4" class="mt4">
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
</w-flex>`)]},proxy:!0},{key:"css",fn:function(){return[t._v(`.w-card {
  flex-grow: 1;
  max-width: 550px;
  height: 200px;
}
`)]},proxy:!0}])},[a("w-flex",{staticClass:"mt4",attrs:{wrap:"",gap:4}},[a("w-card",{scopedSlots:t._u([{key:"title",fn:function(){return[a("w-toolbar",[a("div",{staticClass:"title2 my0"},[t._v("Top Bar")]),a("div",{staticClass:"spacer"}),a("span",{staticClass:"ml2"},[t._v("Item 1")]),a("span",{staticClass:"ml2"},[t._v("Item 2")]),a("span",{staticClass:"ml2"},[t._v("Item 3")])])]},proxy:!0}])}),a("w-card",{scopedSlots:t._u([{key:"actions",fn:function(){return[a("w-toolbar",{attrs:{bottom:""}},[a("div",{staticClass:"title2 my0"},[t._v("Bottom Bar")]),a("div",{staticClass:"spacer"}),a("span",{staticClass:"ml2"},[t._v("Item 1")]),a("span",{staticClass:"ml2"},[t._v("Item 2")]),a("span",{staticClass:"ml2"},[t._v("Item 3")])])]},proxy:!0}])})],1)],1),a("title-link",{attrs:{h3:""}},[t._v("With shadow")]),a("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-flex.mt4(wrap :gap="4")
  w-card
    template(#title)
      w-toolbar(shadow)
        .title2.my0 Top Bar
        .spacer
        span.ml2 Item 1
        span.ml2 Item 2
        span.ml2 Item 3
  w-card
    template(#actions)
      w-toolbar(bottom shadow)
        .title2.my0 Bottom Bar
        .spacer
        span.ml2 Item 1
        span.ml2 Item 2
        span.ml2 Item 3`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-flex wrap :gap="4" class="mt4">
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
</w-flex>`)]},proxy:!0},{key:"css",fn:function(){return[t._v(`.w-card {
  flex-grow: 1;
  max-width: 550px;
  height: 200px;
}
`)]},proxy:!0}])},[a("w-flex",{staticClass:"mt4",attrs:{wrap:"",gap:4}},[a("w-card",{scopedSlots:t._u([{key:"title",fn:function(){return[a("w-toolbar",{attrs:{shadow:""}},[a("div",{staticClass:"title2 my0"},[t._v("Top Bar")]),a("div",{staticClass:"spacer"}),a("span",{staticClass:"ml2"},[t._v("Item 1")]),a("span",{staticClass:"ml2"},[t._v("Item 2")]),a("span",{staticClass:"ml2"},[t._v("Item 3")])])]},proxy:!0}])}),a("w-card",{scopedSlots:t._u([{key:"actions",fn:function(){return[a("w-toolbar",{attrs:{bottom:"",shadow:""}},[a("div",{staticClass:"title2 my0"},[t._v("Bottom Bar")]),a("div",{staticClass:"spacer"}),a("span",{staticClass:"ml2"},[t._v("Item 1")]),a("span",{staticClass:"ml2"},[t._v("Item 2")]),a("span",{staticClass:"ml2"},[t._v("Item 3")])])]},proxy:!0}])})],1)],1),a("title-link",{attrs:{h2:""}},[t._v("Custom toolbar height")]),t._m(1),a("example",{attrs:{"content-class":"pa0"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-toolbar.py0(bg-color="blue-light5" color="blue-dark3" height="5em")
  .title2 Title
  .spacer
  span.mx1 Item 1
  span.mx1 Item 2
  w-divider.mx2(vertical)
  span.mx1 Item 3
  span.mx1 Item 4
  w-divider.mx2(vertical)
  span.mx1 Item 5
  span.mx1 Item 6`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-toolbar
  bg-color="blue-light5"
  color="blue-dark3"
  height="5em"
  class="py0">
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
</w-toolbar>
`)]},proxy:!0}])},[a("w-toolbar",{staticClass:"py0",attrs:{"bg-color":"blue-light5",color:"blue-dark3",height:"5em"}},[a("div",{staticClass:"title2 my0"},[t._v("Title")]),a("div",{staticClass:"spacer"}),a("span",{staticClass:"mx1"},[t._v("Item 1")]),a("span",{staticClass:"mx1"},[t._v("Item 2")]),a("w-divider",{staticClass:"mx2",attrs:{vertical:""}}),a("span",{staticClass:"mx1"},[t._v("Item 3")]),a("span",{staticClass:"mx1"},[t._v("Item 4")]),a("w-divider",{staticClass:"mx2",attrs:{vertical:""}}),a("span",{staticClass:"mx1"},[t._v("Item 5")]),a("span",{staticClass:"mx1"},[t._v("Item 6")])],1)],1),a("title-link",{attrs:{h2:""}},[t._v("Vertical toolbar with absolute position")]),t._m(2),a("example",{attrs:{"content-class":"w-flex"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-card.grow(content-class="pa0")
  w-toolbar(vertical absolute left)
    w-icon(size="2.2em" color="primary") wi-wave

.spacer.no-grow.mx3

w-card.grow(content-class="pa0")
  w-toolbar(vertical absolute right)
    w-icon(size="2.2em" color="primary") wi-wave`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-card class="grow" content-class="pa0">
  <w-toolbar vertical absolute left>
    <w-icon size="2.2em" color="primary">wi-wave</w-icon>
  </w-toolbar>
</w-card>

<div class="spacer no-grow mx3"></div>

<w-card class="grow" content-class="pa0">
  <w-toolbar vertical absolute right>
    <w-icon size="2.2em" color="primary">wi-wave</w-icon>
  </w-toolbar>
</w-card>
`)]},proxy:!0}])},[a("w-card",{staticClass:"grow",attrs:{"content-class":"pa0"}},[a("w-toolbar",{attrs:{vertical:"",absolute:"",left:""}},[a("w-icon",{attrs:{size:"2.2em",color:"primary"}},[t._v("wi-wave")])],1)],1),a("div",{staticClass:"spacer no-grow mx3"}),a("w-card",{staticClass:"grow",attrs:{"content-class":"pa0"}},[a("w-toolbar",{attrs:{vertical:"",absolute:"",right:""}},[a("w-icon",{attrs:{size:"2.2em",color:"primary"}},[t._v("wi-wave")])],1)],1)],1),a("title-link",{attrs:{h2:""}},[t._v("Vertical toolbar")]),a("example",{attrs:{"content-class":"justify-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-card(content-class="pa0 w-flex")
  w-toolbar(vertical)
    w-icon(size="2.2em" color="primary") wi-wave

    //- You could also add a .spacer before & after instead of the \`mya\` class.
    w-divider.mya

    w-button.pa4(icon="mdi mdi-cart" text lg)
    w-button.pa4(icon="mdi mdi-email" text lg)
    w-button.pa4(icon="mdi mdi-chat" text lg)

  w-flex(align-center justify-center) Some content.`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-card content-class="pa0 w-flex">
  <w-toolbar vertical>
    <w-icon color="primary" size="2.2em">wi-wave</w-icon>

    <!-- You could also add a .spacer before & after instead of the \`mya\` class. -->
    <w-divider class="mya"></w-divider>

    <w-button icon="mdi mdi-cart" text lg class="pa4"></w-button>
    <w-button icon="mdi mdi-email" text lg class="pa4"></w-button>
    <w-button icon="mdi mdi-chat" text lg class="pa4"></w-button>
  </w-toolbar>

  <w-flex align-center justify-center>
    Some content.
  </w-flex>
</w-card>`)]},proxy:!0},{key:"css",fn:function(){return[t._v(`.w-card {
  margin: auto;
  max-width: 550px;
  height: 200px;
}`)]},proxy:!0}])},[a("w-card",{staticClass:"mxa",attrs:{"content-class":"pa0 w-flex"}},[a("w-toolbar",{attrs:{vertical:""}},[a("w-icon",{attrs:{size:"2.2em",color:"primary"}},[t._v("wi-wave")]),a("w-divider",{staticClass:"mya"}),a("w-button",{staticClass:"pa4",attrs:{icon:"mdi mdi-cart",text:"",lg:""}}),a("w-button",{staticClass:"pa4",attrs:{icon:"mdi mdi-email",text:"",lg:""}}),a("w-button",{staticClass:"pa4",attrs:{icon:"mdi mdi-chat",text:"",lg:""}})],1),a("w-flex",{attrs:{"align-center":"","justify-center":""}},[t._v("Some content.")])],1)],1)],1)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Like in most components, you can set a "),a("code",[t._v("color")]),t._v(" for the text and a "),a("code",[t._v("bg-color")]),t._v(` for the
background.`)])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("The "),a("code",[t._v("w-toolbar")]),t._v(` component also accepts a height. It can be set as a string with units
or a number of pixels (without unit).
`)])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(`You can use the absolute (or fixed) position to quickly place a toolbar to the left, top,
right or bottom of the container (or screen).`),a("br"),t._v(`
In this case, you may want to add a padding on the content container to compensate the toolbar
if you don't want the toolbar to overlap the content (like in this example).`),a("br"),t._v(`
Alternatively, you can place the toolbar and the content container in a w-flex container so
they will never overlap - like in the next example.`)])}];const m={},n={};var p=s(m,i,c,!1,d,null,null,null);function d(t){for(let e in n)this[e]=n[e]}var v=function(){return p.exports}(),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"w-divider my12"}),a("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),a("component-api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),a("component-api",{attrs:{items:t.slots,title:"Slots"}}),a("component-api",{attrs:{items:t.events,title:"Events"}})],1)},u=[];const h={color:`Applies a color to the toolbar's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the toolbar's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,absolute:"Sets the CSS position of the toolbar to <code>absolute</code> and relative to the closest parent with a position (like normal CSS).",fixed:"Sets the CSS position of the toolbar to <code>fixed</code>.",bottom:"Only applies to horizontal toolbars and can't be combined with the <code>right</code> option.<br>If applied together with the <code>absolute</code> or <code>fixed</code> option, positions the horizontal toolbar at the bottom. By default the toolbar will be at the top.<br>This option also applies a border at the top of the toolbar (unless the <code>no-border</code> prop is set to true), and removes the default bottom border.",right:"Only applies to vertical toolbars and can't be combined with the <code>bottom</code> option.<br>If applied together with the <code>absolute</code> or <code>fixed</code> option, positions the vertical toolbar on the right side. By default the toolbar will be on the left.<br>This option also applies a border at the left of the toolbar (unless the <code>no-border</code> prop is set to true), and removes the default right border.",height:"Only applies to horizontal toolbars.<br>Sets a height on the toolbar.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be considered a pixel value.",width:"Only applies to vertical toolbars.<br>Sets a height on the toolbar.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be considered a pixel value.",noBorder:"Removes the default border (top or bottom) from the toolbar.",shadow:"Applies a drop shadow to the toolbar."},b={default:{description:"The toolbar content."}},_={},f={data:()=>({propsDescs:h,slots:b}),computed:{props(){return o.props},events(){return o.emits.reduce((t,e)=>(t[e]={description:_[e]||""})&&t,{})}}},l={};var x=s(f,w,u,!1,g,null,null,null);function g(t){for(let e in l)this[e]=l[e]}var y=function(){return x.exports}(),I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("ui-component-title",[t._v("w-toolbar")]),a("examples"),a("api")],1)},C=[];const k={components:{Examples:v,Api:y}},r={};var S=s(k,I,C,!1,B,null,null,null);function B(t){for(let e in r)this[e]=r[e]}var $=function(){return S.exports}();export{$ as default};
