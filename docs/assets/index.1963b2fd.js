import{n as r,m as a}from"./index.6bc87caa.js";import"./vendor.748d1766.js";var c=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("title-link",{attrs:{h2:""}},[e._v("Basic")]),t("example",{attrs:{"content-class":"w-flex align-center wrap"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-button(@click="openDrawer = true" outline) Open drawer

w-drawer(v-model="openDrawer")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-button @click="openDrawer = true" outline>
  Open drawer
</w-button>

<w-drawer v-model="openDrawer" />`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  openDrawer: false
})
`)]},proxy:!0}])},[t("w-button",{attrs:{outline:""},on:{click:function(n){e.openRightDrawer=!e.openRightDrawer}}},[e._v("Open drawer")])],1),t("title-link",{attrs:{h2:""}},[e._v("Positions")]),t("example",{attrs:{"content-class":"w-flex align-center wrap"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-button.ma1(
  @click="openDrawer = 'left'"
  outline) Open left drawer

w-button.ma1(
  @click="openDrawer = 'right'"
  outline) Open right drawer

w-button.ma1(
  @click="openDrawer = 'top'"
  outline) Open top drawer

w-button.ma1(
  @click="openDrawer = 'bottom'"
  outline) Open bottom drawer

w-drawer(v-model="openDrawer" :[position]="true")
  w-button(
    @click="openDrawer = false"
    sm
    outline
    round
    absolute
    icon="wi-cross")
`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-button
  class="ma1"
  @click="openDrawer = 'left'"
  outline>
  Open left drawer
</w-button>

<w-button
  class="ma1"
  @click="openDrawer = 'right'"
  outline>
  Open right drawer
</w-button>

<w-button
  class="ma1"
  @click="openDrawer = 'top'"
  outline>
  Open top drawer
</w-button>

<w-button
  class="ma1"
  @click="openDrawer = 'bottom'"
  outline>
  Open bottom drawer
</w-button>

<w-drawer
  v-model="openDrawer"
  :[position]="true">
  <w-button
    @click="openDrawer = false"
    sm
    outline
    round
    absolute
    icon="wi-cross">
  </w-button>
</w-drawer>
`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  openDrawer: false
}),

computed: {
  position () {
    return this.openDrawer || 'right'
  }
}
`)]},proxy:!0}])},[t("w-button",{staticClass:"ma1",attrs:{outline:""},on:{click:function(n){e.openLeftDrawer=!e.openLeftDrawer}}},[e._v("Open left drawer")]),t("w-button",{staticClass:"ma1",attrs:{outline:""},on:{click:function(n){e.openRightDrawer=!e.openRightDrawer}}},[e._v("Open right drawer")]),t("w-button",{staticClass:"ma1",attrs:{outline:""},on:{click:function(n){e.noOverlay=!1,e.openTopDrawer=!e.openTopDrawer}}},[e._v("Open top drawer")]),t("w-button",{staticClass:"ma1",attrs:{outline:""},on:{click:function(n){e.openBottomDrawer=!e.openBottomDrawer}}},[e._v("Open bottom drawer")])],1),t("title-link",{attrs:{h3:""}},[e._v("Absolute position")]),e._m(0),t("example",{attrs:{"content-class":"relative justify-center d-flex"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-card.ma6.grow.text-center(bg-color="amber-light5" title="w-card")
  w-button.my12(@click="openDrawer = true" text) Open drawer

  w-drawer(v-model="openDrawer" absolute width="160px")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-card
  class="ma6 grow text-center"
  bg-color="amber-light5"
  title="w-card">
  <w-button class="my12" @click="openDrawer = true" text>
    Open drawer
  </w-button>

  <w-drawer
    v-model="openDrawer"
    absolute
    width="160px">
  </w-drawer>
</w-card>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  openDrawer: false
})
`)]},proxy:!0}])},[t("w-card",{staticClass:"ma6 grow text-center",attrs:{"bg-color":"amber-light5",title:"w-card"}},[t("w-button",{staticClass:"my12",attrs:{text:""},on:{click:function(n){e.openAbsoluteDrawer=!0}}},[e._v("Open drawer")]),t("w-drawer",{attrs:{absolute:"",width:"160px"},model:{value:e.openAbsoluteDrawer,callback:function(n){e.openAbsoluteDrawer=n},expression:"openAbsoluteDrawer"}})],1)],1),t("title-link",{attrs:{h2:""}},[e._v("Control width or height")]),e._m(1),e._m(2),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`p.mb4 Open a blue 60px-height bottom drawer

w-button(@click="openDrawer = true" outline) Open drawer

w-drawer(
  v-model="openDrawer"
  bg-color="blue-light4"
  bottom
  height="60px")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<p class="mb4">Open a blue 60px-height bottom drawer</p>
<w-button
  @click="openDrawer = true"
  outline>
  Open drawer
</w-button>

<w-drawer
  v-model="openDrawer"
  bg-color="blue-light4"
  bottom
  height="60px">
  <w-button
    @click="openDrawer = false"
    icon="wi-cross"
    sm
    outline
    round
    absolute>
  </w-button>
</w-drawer>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  openDrawer: false
})
`)]},proxy:!0}])},[t("p",{staticClass:"mb4"},[e._v("Open a blue 60px-height bottom drawer")]),t("w-button",{attrs:{outline:""},on:{click:function(n){e.bottomDrawerHeight="60px",e.openBottomDrawer=!0}}},[e._v("Open drawer")])],1),t("title-link",{attrs:{h2:""}},[e._v("Push content")]),e._m(3),t("example",{attrs:{"content-class":"relative pa0","app-props-string":"","blank-codepen":["css"]},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-drawer(
  v-model="openDrawer"
  push-content
  :overlay-opacity="0.15"
  width="160px")
  template(#pushable)
    w-flex.py12(column align-center justify-center)
      p.mb3 Pushable content
      w-button(@click="openDrawer = true" outline).
        Open drawer
  .ma2 Drawer content`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-drawer
  v-model="openDrawer"
  push-content
  :overlay-opacity="0.15"
  width="160px">

  <template #pushable>
    <w-flex class="py12" column align-center justify-center>
      <p class="mb3">Pushable content</p>
      <w-button @click="openDrawer = true" outline>
        Open drawer
      </w-button>
    </w-flex>
  </template>

  <div class="ma2">Drawer content</div>
</w-drawer>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  openDrawer: false
})
`)]},proxy:!0}])},[t("w-drawer",{attrs:{"push-content":"","overlay-opacity":.15,width:"160px"},scopedSlots:e._u([{key:"pushable",fn:function(){return[t("div",{staticClass:"py12 w-flex column align-center justify-center"},[t("p",{staticClass:"mb3"},[e._v("Pushable content")]),t("w-button",{attrs:{outline:""},on:{click:function(n){e.openPushContentRightDrawer=!0}}},[e._v("Open drawer")])],1)]},proxy:!0}]),model:{value:e.openPushContentRightDrawer,callback:function(n){e.openPushContentRightDrawer=n},expression:"openPushContentRightDrawer"}},[t("div",{staticClass:"ma2"},[e._v("Drawer content")])])],1),t("example",{attrs:{"content-class":"relative pa0","app-props-string":"","blank-codepen":["css"]},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-drawer(
  v-model="openDrawer"
  push-content
  :overlay-opacity="0.15"
  left
  width="160px")
  template(#pushable)
    w-flex.py12(column align-center justify-center)
      p.mb3 Pushable content
      w-button(@click="openDrawer = true" outline).
        Open drawer
  .ma2 Drawer content`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-drawer
  v-model="openDrawer"
  push-content
  :overlay-opacity="0.15"
  left
  width="160px">

  <template #pushable>
    <w-flex class="py12" column align-center justify-center>
      <p class="mb3">Pushable content</p>
      <w-button @click="openDrawer = true" outline>
        Open drawer
      </w-button>
    </w-flex>
  </template>

  <div class="ma2">Drawer content</div>
</w-drawer>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  openDrawer: false
})
`)]},proxy:!0}])},[t("w-drawer",{attrs:{"push-content":"","overlay-opacity":.15,left:"",width:"160px"},scopedSlots:e._u([{key:"pushable",fn:function(){return[t("div",{staticClass:"py12 w-flex column align-center justify-center"},[t("p",{staticClass:"mb3"},[e._v("Pushable content")]),t("w-button",{attrs:{outline:""},on:{click:function(n){e.openPushContentLeftDrawer=!0}}},[e._v("Open drawer")])],1)]},proxy:!0}]),model:{value:e.openPushContentLeftDrawer,callback:function(n){e.openPushContentLeftDrawer=n},expression:"openPushContentLeftDrawer"}},[t("div",{staticClass:"ma2"},[e._v("Drawer content")])])],1),t("title-link",{attrs:{h2:""}},[e._v("No overlay & custom color overlay")]),t("example",{attrs:{"content-class":"w-flex align-center wrap"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`span Open top drawer with a:

w-button.ma1(
  @click="noOverlay = false;overlayColor = 'rgba&#40;35, 71, 129, 0.5&#41;';openDrawer = !openDrawer"
  outline) Custom color overlay

w-button.ma1(
  @click="noOverlay = false;overlayColor = 'transparent';openDrawer = !openDrawer"
  outline) Transparent overlay

w-button.ma1(
  @click="noOverlay = true;overlayColor = '';openDrawer = !openDrawer"
  outline) No overlay

w-drawer(
  v-model="openDrawer"
  top
  :no-overlay="noOverlay"
  :overlay-color="overlayColor")
  w-button(
    @click="openDrawer = false"
    sm
    outline
    absolute
    round
    icon="wi-cross")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<span>Open top drawer with a:</span>
<w-button
  class="ma1"
  @click="noOverlay = false;overlayColor = 'rgba(35, 71, 129, 0.5&#041;';openDrawer = !openDrawer"
  outline>
  Custom color overlay
</w-button>

<w-button
  class="ma1"
  @click="noOverlay = false;overlayColor = 'transparent';openDrawer = !openDrawer"
  outline>
  Transparent overlay
</w-button>

<w-button
  class="ma1"
  @click="noOverlay = true;overlayColor = '';openDrawer = !openDrawer"
  outline>
  No overlay
</w-button>

<w-drawer
  v-model="openDrawer"
  top
  :no-overlay="noOverlay"
  :overlay-color="overlayColor">
  <w-button
    @click="openDrawer = false"
    sm
    outline
    absolute
    round
    icon="wi-cross">
  </w-button>
</w-drawer>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  openDrawer: false,
  noOverlay: false,
  overlayColor: ''
})
`)]},proxy:!0}])},[t("span",[e._v("Open top drawer with a:")]),t("w-button",{staticClass:"ma1",attrs:{outline:""},on:{click:function(n){e.noOverlay=!1,e.overlayColor="rgba(35, 71, 129, 0.5)",e.openTopDrawer=!e.openTopDrawer}}},[e._v("Custom color overlay")]),t("w-button",{staticClass:"ma1",attrs:{outline:""},on:{click:function(n){e.noOverlay=!1,e.overlayColor="transparent",e.openTopDrawer=!e.openTopDrawer}}},[e._v("Transparent overlay")]),t("w-button",{staticClass:"ma1",attrs:{outline:""},on:{click:function(n){e.noOverlay=!0,e.overlayColor="",e.openTopDrawer=!e.openTopDrawer}}},[e._v("No overlay")])],1),e._m(4),t("title-link",{attrs:{h2:""}},[e._v("Persistent drawers")]),t("p",[e._v("A persistent drawer stays open when clicking outside or pressing the escape key.")]),t("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-button(@click="openDrawer = true" outline).
  Persistent drawer

w-drawer(
  v-model="openDrawer"
  bottom
  persistent
  bg-color="blue-light4")
  w-button(
    sm
    @click="openDrawer = false"
    outline
    absolute
    round
    icon="wi-cross")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-button
  @click="openDrawer = true"
  outline>
  Persistent drawer
</w-button>

<w-drawer
  v-model="openDrawer"
  bottom
  persistent
  bg-color="blue-light4">

  <w-button
    sm
    @click="openDrawer = false"
    outline
    absolute
    round
    icon="wi-cross">
  </w-button>

  <div class="w-flex fill-height align-center justify-center">
    You can customize the background color as well.
  </div>
</w-drawer>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  openDrawer: false
})
`)]},proxy:!0}])},[t("w-button",{attrs:{outline:""},on:{click:function(n){e.persistent=!0,e.openBottomDrawer=!0}}},[e._v("Persistent drawer")])],1),t("title-link",{attrs:{h2:""}},[e._v("Cookie notice example")]),t("p",[e._v(`The cookie notice is a good use case of a persistent drawer, it will not let you click
anything until you accept.`)]),t("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-button(@click="showCookieNotice = true" outline).
  Show the cookie notice

w-drawer(
  v-model="showCookieNotice"
  content-class="cookie-notice"
  overlay-color="transparent"
  persistent
  fit-content
  bottom)
  w-flex.pa2(align-center wrap)
    w-flex.py1(align-center)
      w-icon.mr3(xl) wi-info-circle
      span.grey-dark3.
        Our website uses cookies to give you the best user experience.
        To continue browsing this site you must agree.
    .spacer
    w-button(sm @click="showCookieNotice = false")
      w-icon.mr2 mdi mdi-cookie
      | I agree`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-button
  @click="showCookieNotice = true"
  outline>
  Show the cookie notice
</w-button>

<w-drawer
  v-model="showCookieNotice"
  content-class="cookie-notice"
  overlay-color="transparent"
  persistent
  fit-content
  bottom>
  <div class="w-flex pa2 align-center wrap">
    <div class="w-flex align-center">
      <w-icon class="mr3" xl>
        wi-info-circle
      </w-icon>
        <span class="grey-dark3">
        Our website uses cookies to give you the best user experience.
        To continue browsing this site you must agree.
      </span>
    </div>
    <div class="spacer" />
    <w-button sm @click="showCookieNotice = false">
      <w-icon class="mr2">mdi mdi-cookie</w-icon>
      I agree
    </w-button>
  </div>
</w-drawer>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  showCookieNotice: false
})
`)]},proxy:!0}])},[t("w-button",{attrs:{outline:""},on:{click:function(n){e.showCookieNotice=!0}}},[e._v("Show the cookie notice")]),t("w-drawer",{attrs:{"content-class":"cookie-notice","overlay-color":"transparent",persistent:"","fit-content":"",bottom:""},model:{value:e.showCookieNotice,callback:function(n){e.showCookieNotice=n},expression:"showCookieNotice"}},[t("div",{staticClass:"w-flex pa2 align-center wrap"},[t("div",{staticClass:"w-flex align-center py1"},[t("w-icon",{staticClass:"mr3",attrs:{xl:""}},[e._v("wi-info-circle")]),t("span",{staticClass:"grey-dark3"},[e._v(`Our website uses cookies to give you the best user experience.
To continue browsing this site you must agree.`)])],1),t("div",{staticClass:"spacer"}),t("w-button",{attrs:{sm:""},on:{click:function(n){e.showCookieNotice=!1}}},[t("w-icon",{staticClass:"mr2"},[e._v("mdi mdi-cookie")]),e._v("I agree")],1)],1)])],1),t("p",[e._v(`You can then store the result of the acceptation in the localStorage when the user clicks
the button.`)]),t("ssh-pre",{directives:[{name:"show",rawName:"v-show",value:!e.$store.state.usePug,expression:"!$store.state.usePug"}],attrs:{language:"html-vue",label:"Template"}},[e._v(`<w-button
  class="ml-auto"
  @click="acceptCookies"
  sm
  absolute>
  <w-icon class="mr2">wi-check</w-icon>
  I agree
</w-button>
`)]),t("ssh-pre",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.usePug,expression:"$store.state.usePug"}],attrs:{language:"pug",label:"Template"}},[e._v(`w-button.ml-auto(@click="acceptCookies" sm absolute)
  w-icon.mr2 wi-check
  | I agree
`)]),t("ssh-pre",{attrs:{language:"js",label:"Javascript"}},[e._v(`acceptCookies () {
  localStorage.acceptCookies = 'yes'
  this.showCookieNotice = false
}
`)]),t("w-drawer",{attrs:{left:""},model:{value:e.openLeftDrawer,callback:function(n){e.openLeftDrawer=n},expression:"openLeftDrawer"}},[t("w-button",{staticClass:"button--close",attrs:{sm:"",outline:"",absolute:"",round:"",icon:"wi-cross"},on:{click:function(n){e.openLeftDrawer=!e.openLeftDrawer}}}),t("div",{staticClass:"w-flex align-center justify-center fill-height"},[t("w-button",{on:{click:function(n){e.openLeftDrawer=!1,e.openRightDrawer=!0}}},[e._v(`Show right drawer
`)])],1)],1),t("w-drawer",{model:{value:e.openRightDrawer,callback:function(n){e.openRightDrawer=n},expression:"openRightDrawer"}},[t("w-button",{staticClass:"button--close",attrs:{sm:"",outline:"",absolute:"",round:"",icon:"wi-cross"},on:{click:function(n){e.openRightDrawer=!e.openRightDrawer}}})],1),t("w-drawer",{attrs:{top:"","no-overlay":e.noOverlay,"overlay-color":e.overlayColor},model:{value:e.openTopDrawer,callback:function(n){e.openTopDrawer=n},expression:"openTopDrawer"}},[t("w-button",{staticClass:"button--close",attrs:{sm:"",outline:"",absolute:"",round:"",icon:"wi-cross"},on:{click:function(n){e.openTopDrawer=!e.openTopDrawer}}})],1),t("w-drawer",{attrs:{bottom:"",persistent:e.persistent,height:e.bottomDrawerHeight,"bg-color":"blue-light4"},on:{close:function(n){e.bottomDrawerHeight=null,e.persistent=!1}},model:{value:e.openBottomDrawer,callback:function(n){e.openBottomDrawer=n},expression:"openBottomDrawer"}},[t("w-button",{staticClass:"button--close",attrs:{sm:"",outline:"",absolute:"",round:"",icon:"wi-cross"},on:{click:function(n){e.openBottomDrawer=!e.openBottomDrawer}}}),t("div",{staticClass:"w-flex fill-height align-center justify-center"},[e._v("You can customize the background color as well.")])],1)],1)},u=[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[e._v("The "),t("strong",{staticClass:"code"},[e._v("w-drawer")]),e._v(` component can be placed in a deeper structure than the root of
the site.`)])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[e._v("The "),t("strong",{staticClass:"code"},[e._v("w-drawer")]),e._v(" component accepts a "),t("span",{staticClass:"code"},[e._v("width")]),e._v(" or "),t("span",{staticClass:"code"},[e._v("height")]),e._v(` parameter
depending on its position on screen to override the default one.`)])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",{staticClass:"grey-light1"},[t("span",{staticClass:"code grey-light1"},[e._v("width")]),e._v(" and "),t("span",{staticClass:"code grey-light1"},[e._v("height")]),e._v(` are called so for simplicity but
they internally translate to `),t("span",{staticClass:"code grey-light1"},[e._v("max-width")]),e._v(" and "),t("span",{staticClass:"code grey-light1"},[e._v("max-height")]),e._v(`
to fit on small screens.
`)])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[e._v("The "),t("code",[e._v("push-content")]),e._v(" prop can be used on "),t("code",[e._v("left")]),e._v(" and "),t("code",[e._v("right")]),e._v(` positions.
It will allow the drawer to push the content either on the left or right when it's open.`),t("br"),e._v(`
To use the push-content layout, an explicit drawer `),t("code",[e._v("width")]),e._v(` is required (don't only set a
width via CSS). Any valid CSS width will work.`),t("br"),e._v(`
The pushable content should be provided via the `),t("code",[e._v("pushable")]),e._v(" slot.")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",{staticClass:"mt4"},[t("strong",[e._v("Note:")]),e._v(` with no overlay the underneath content will be clickable and the drawer
will not close.
To allow closing the drawer when clicking outside of it, you can set a transparent background
on the overlay.
`)])}];const p={data:()=>({openLeftDrawer:!1,openRightDrawer:!1,openTopDrawer:!1,openBottomDrawer:!1,openAbsoluteDrawer:!1,openPushContentLeftDrawer:!1,openPushContentRightDrawer:!1,noOverlay:!1,overlayColor:"",bottomDrawerHeight:0,persistent:!1,showCookieNotice:!1})},s={};var w=r(p,c,u,!1,d,null,null,null);function d(e){for(let o in s)this[o]=s[o]}var h=function(){return w.exports}(),v=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("div",{staticClass:"w-divider my12"}),t("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),t("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),t("component-api",{attrs:{items:e.slots,title:"Slots"}}),t("component-api",{attrs:{items:e.events,title:"Events"}})],1)},f=[];const m={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>This prop controls the visibility of the drawer. Any truthy value will show the drawer whereas any falsy value will hide it.',left:"Places the drawer at the left of the screen, or at the left of its container when the <code>absolute</code> prop is set to true.",right:"Places the drawer at the right of the screen, or at the right of its container when the <code>absolute</code> prop is set to true.",top:"Places the drawer at the top of the screen, or at the top of its container when the <code>absolute</code> prop is set to true.",bottom:"Places the drawer at the bottom of the screen, or at the bottom of its container when the <code>absolute</code> prop is set to true.",persistent:"When set to true, clicking outside of the drawer or pressing the escape key will not close the drawer.<br>A bounce animation will give the user a feedback that this drawer needs attention and cannot be closed.",persistentNoAnimation:"When this and the <code>persistent</code> props are set to true, clicking outside of the drawer or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user).",pushContent:"The <code>push-content</code> prop can be used on <code>left</code> and <code>right</code> positions.<br>It will allow the drawer to push the content either on the left or right when it's open.<br>To use the push-content layout, an explicit drawer <code>width</code> is required (don't only set a width via CSS). Any valid CSS width will work.<br>The pushable content should be provided via the <code>pushable</code> slot.",fitContent:"Fits the drawer to its content (sets the width and height to auto).",width:"Sets a width on the drawer when its position is <code>left</code> or <code>right</code>.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",height:"Sets a height on the drawer when its position is <code>top</code> or <code>bottom</code>.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",absolute:"Sets the CSS position of the drawer container to <code>absolute</code>.",zIndex:"Applies a z-index (positive or negative integer) to the drawer.",color:`Applies a color to the drawer's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the drawer's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,noOverlay:"Removes the default full screen overlay underneath the open drawer.",overlayColor:'Provide a custom background color for the drawer background overlay (<code>rgba(0, 0, 0, 0.3)</code> by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',overlayOpacity:"Provide a custom opacity for the drawer background overlay."},b={default:{description:"The drawer content."},pushable:{description:"When using the <code>push-content</code> prop, defines the outside HTML content to be pushed by the drawer when it opens."}},_={input:"Emitted on drawer close.<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted on drawer close.<br>Updates the v-model value in Vue 3 only.",close:"Emitted on drawer close."},y={data:()=>({propsDescs:m,slots:b}),computed:{props(){return a.props},events(){return a.emits.reduce((e,o)=>(e[o]={description:_[o]||""})&&e,{})}}},l={};var g=r(y,v,f,!1,k,null,null,null);function k(e){for(let o in l)this[o]=l[o]}var D=function(){return g.exports}(),x=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("main",[t("ui-component-title",[e._v("w-drawer")]),t("examples"),t("api")],1)},C=[];const O={components:{Examples:h,Api:D}},i={};var $=r(O,x,C,!1,P,null,null,null);function P(e){for(let o in i)this[o]=i[o]}var j=function(){return $.exports}();export{j as default};
