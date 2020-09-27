(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["drawer-examples-vue"],{ffdd:function(o,t,e){"use strict";e.r(t);var r=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{staticClass:"ovh"},[e("title-link",{attrs:{h2:""}},[o._v("Positions")]),e("example",{attrs:{"content-class":"w-flex align-center wrap"},scopedSlots:o._u([{key:"pug",fn:function(){return[o._v('w-button.ma1(\n  @click="showDrawer = \'left\'"\n  outline\n  color="primary") Show left drawer\nw-button.ma1(\n  @click="showDrawer = \'right\'"\n  outline\n  color="primary") Show right drawer\nw-button.ma1(\n  @click="showDrawer = \'top\'"\n  outline\n  color="primary") Show top drawer\nw-button.ma1(\n  @click="showDrawer = \'bottom\'"\n  outline\n  color="primary") Show bottom drawer\n\nw-drawer(\n  :value="!!showDrawer"\n  :[position]="true"\n  @close="showDrawer = false")\n  w-button.button--close(\n    @click="showDrawer = false"\n    sm\n    outline\n    round\n    absolute\n    color="primary"\n    icon="wi-cross")\n')]},proxy:!0},{key:"js",fn:function(){return[o._v("data: () => ({\n  showDrawer: false\n}),\n\ncomputed: {\n  position () {\n    return this.showDrawer || 'right'\n  }\n}\n")]},proxy:!0}])},[e("w-button",{staticClass:"ma1",attrs:{outline:"",color:"primary"},on:{click:function(t){o.showLeftDrawer=!o.showLeftDrawer}}},[o._v("Show left drawer")]),e("w-button",{staticClass:"ma1",attrs:{outline:"",color:"primary"},on:{click:function(t){o.showRightDrawer=!o.showRightDrawer}}},[o._v("Show right drawer")]),e("w-button",{staticClass:"ma1",attrs:{outline:"",color:"primary"},on:{click:function(t){o.noOverlay=!1,o.showTopDrawer=!o.showTopDrawer}}},[o._v("Show top drawer")]),e("w-button",{staticClass:"ma1",attrs:{outline:"",color:"primary"},on:{click:function(t){o.showBottomDrawer=!o.showBottomDrawer}}},[o._v("Show bottom drawer")])],1),e("title-link",{attrs:{h2:""}},[o._v("Control width or height")]),o._m(0),o._m(1),e("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:o._u([{key:"pug",fn:function(){return[o._v('w-button(\n  @click="showDrawer = true"\n  outline\n  color="primary") Show a 60px height bottom drawer\n\nw-drawer(v-model="showDrawer" bottom height="60px")\n  w-button.button--close(\n    @click="showDrawer = false"\n    sm\n    outline\n    round\n    absolute\n    color="primary"\n    icon="wi-cross")')]},proxy:!0},{key:"js",fn:function(){return[o._v("data: () => ({\n  showDrawer: false\n})\n")]},proxy:!0}])},[e("w-button",{attrs:{outline:"",color:"primary"},on:{click:function(t){o.bottomDrawerHeight="60px",o.showBottomDrawer=!o.showBottomDrawer}}},[o._v("Show a 60px height bottom drawer")])],1),e("title-link",{attrs:{h2:""}},[o._v("No overlay & custom color overlay")]),e("example",{attrs:{"content-class":"w-flex align-center wrap"},scopedSlots:o._u([{key:"pug",fn:function(){return[o._v('span Open top drawer with a:\nw-button.ma1(\n  @click="noOverlay = false;overlayColor = \'rgba(35, 71, 129, 0.5&#041;\';showDrawer = !showDrawer"\n  outline\n  color="primary") Custom color overlay\nw-button.ma1(\n  @click="noOverlay = false;overlayColor = \'transparent\';showDrawer = !showDrawer"\n  outline\n  color="primary") Transparent overlay\nw-button.ma1(\n  @click="noOverlay = true;overlayColor = false;showDrawer = !showDrawer"\n  outline\n  color="primary") No overlay\n\nw-drawer(v-model="showDrawer" top :no-overlay="noOverlay" :overlay-color="overlayColor")\n  w-button.button--close(\n    @click="showDrawer = false"\n    sm\n    outline\n    absolute\n    round\n    color="primary"\n    icon="wi-cross")')]},proxy:!0},{key:"js",fn:function(){return[o._v("data: () => ({\n  showDrawer: false,\n  noOverlay: false,\n  overlayColor: false\n})\n")]},proxy:!0}])},[e("span",[o._v("Open top drawer with a:")]),e("w-button",{staticClass:"ma1",attrs:{outline:"",color:"primary"},on:{click:function(t){o.noOverlay=!1,o.overlayColor="rgba(35, 71, 129, 0.5)",o.showTopDrawer=!o.showTopDrawer}}},[o._v("Custom color overlay")]),e("w-button",{staticClass:"ma1",attrs:{outline:"",color:"primary"},on:{click:function(t){o.noOverlay=!1,o.overlayColor="transparent",o.showTopDrawer=!o.showTopDrawer}}},[o._v("Transparent overlay")]),e("w-button",{staticClass:"ma1",attrs:{outline:"",color:"primary"},on:{click:function(t){o.noOverlay=!0,o.overlayColor=!1,o.showTopDrawer=!o.showTopDrawer}}},[o._v("No overlay")])],1),o._m(2),e("title-link",{attrs:{h2:""}},[o._v("Persistent drawers")]),e("p",[o._v("A persistent drawer stays open when clicking outside or pressing the escape key.")]),e("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:o._u([{key:"pug",fn:function(){return[o._v('w-button(@click="showDrawer = true" outline color="primary")\n  | Persistent drawer\n\nw-drawer(\n  v-model="showDrawer"\n  bottom\n  persistent\n  bg-color="blue-light4")\n  w-button.button--close(\n    sm\n    @click="showDrawer = false"\n    outline\n    absolute\n    round\n    icon="wi-cross")\n  .w-flex.fill-height.align-center.justify-center You can customize the background color as well.')]},proxy:!0},{key:"js",fn:function(){return[o._v("data: () => ({\n  showDrawer: false\n})\n")]},proxy:!0}])},[e("w-button",{attrs:{outline:"",color:"primary"},on:{click:function(t){o.persistent=!0,o.showBottomDrawer=!o.showBottomDrawer}}},[o._v("Persistent drawer")])],1),e("title-link",{attrs:{h2:""}},[o._v("Cookie notice example")]),e("p",[o._v("The cookie notice is a good use case of a persistent drawer, it will not let you click\nanything until you accept.")]),e("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:o._u([{key:"pug",fn:function(){return[o._v('w-button(@click="showCookieNotice = true" outline color="primary")\n  | Show the cookie notice\n\nw-drawer(\n  v-model="showCookieNotice"\n  content-class="cookie-notice"\n  overlay-color="transparent"\n  persistent\n  fit-content\n  bottom)\n  .w-flex.pa2.align-center.wrap\n    .w-flex.align-center\n      w-icon.mr3(color="primary" xl) wi-info-circle\n      span.grey-dark3.\n        Our website uses cookies to give you the best user experience.\n        To continue browsing this site you must agree.\n    .spacer\n    w-button(sm bg-color="primary" dark @click="showCookieNotice = false")\n      w-icon.mr2 wi-check\n      | I agree')]},proxy:!0},{key:"js",fn:function(){return[o._v("data: () => ({\n  showCookieNotice: false\n})\n")]},proxy:!0}])},[e("w-button",{attrs:{outline:"",color:"primary"},on:{click:function(t){o.showCookieNotice=!0}}},[o._v("Show the cookie notice")]),e("w-drawer",{attrs:{"content-class":"cookie-notice","overlay-color":"transparent",persistent:"","fit-content":"",bottom:""},model:{value:o.showCookieNotice,callback:function(t){o.showCookieNotice=t},expression:"showCookieNotice"}},[e("div",{staticClass:"w-flex pa2 align-center wrap"},[e("div",{staticClass:"w-flex align-center py1"},[e("w-icon",{staticClass:"mr3",attrs:{color:"primary",xl:""}},[o._v("wi-info-circle")]),e("span",{staticClass:"grey-dark3"},[o._v("Our website uses cookies to give you the best user experience.\nTo continue browsing this site you must agree.")])],1),e("div",{staticClass:"spacer"}),e("w-button",{attrs:{sm:"","bg-color":"primary",dark:""},on:{click:function(t){o.showCookieNotice=!1}}},[e("w-icon",{staticClass:"mr2"},[o._v("wi-check")]),o._v("I agree")],1)],1)])],1),e("p",[o._v("You can then store the result of the acceptation in the localStorage.")]),e("ssh-pre",{attrs:{language:"html-vue",label:"Template"}},[o._v('<w-button\n  class="ml-auto"\n  sm\n  bg-color="primary"\n  dark\n  absolute\n  @click="acceptCookies">\n  <w-icon class="mr2">wi-check</w-icon>\n  I agree\n</w-button>\n')]),e("ssh-pre",{attrs:{language:"js",label:"Javascript"}},[o._v("acceptCookies () {\n  localStorage.acceptCookies = 'yes'\n  this.showCookieNotice = false\n}\n")]),e("w-drawer",{attrs:{left:""},model:{value:o.showLeftDrawer,callback:function(t){o.showLeftDrawer=t},expression:"showLeftDrawer"}},[e("w-button",{staticClass:"button--close",attrs:{sm:"",outline:"",absolute:"",round:"",color:"primary",icon:"wi-cross"},on:{click:function(t){o.showLeftDrawer=!o.showLeftDrawer}}}),e("div",{staticClass:"w-flex align-center justify-center fill-height"},[e("w-button",{attrs:{dark:"","bg-color":"primary"},on:{click:function(t){o.showLeftDrawer=!1,o.showRightDrawer=!0}}},[o._v("Show right drawer")])],1)],1),e("w-drawer",{model:{value:o.showRightDrawer,callback:function(t){o.showRightDrawer=t},expression:"showRightDrawer"}},[e("w-button",{staticClass:"button--close",attrs:{sm:"",outline:"",absolute:"",round:"",color:"primary",icon:"wi-cross"},on:{click:function(t){o.showRightDrawer=!o.showRightDrawer}}})],1),e("w-drawer",{attrs:{top:"","no-overlay":o.noOverlay,"overlay-color":o.overlayColor},model:{value:o.showTopDrawer,callback:function(t){o.showTopDrawer=t},expression:"showTopDrawer"}},[e("w-button",{staticClass:"button--close",attrs:{sm:"",outline:"",absolute:"",round:"",color:"primary",icon:"wi-cross"},on:{click:function(t){o.showTopDrawer=!o.showTopDrawer}}})],1),e("w-drawer",{attrs:{bottom:"",persistent:o.persistent,height:o.bottomDrawerHeight,"bg-color":"blue-light4"},on:{close:function(t){o.bottomDrawerHeight=null,o.persistent=!1}},model:{value:o.showBottomDrawer,callback:function(t){o.showBottomDrawer=t},expression:"showBottomDrawer"}},[e("w-button",{staticClass:"button--close",attrs:{sm:"",outline:"",absolute:"",round:"",icon:"wi-cross"},on:{click:function(t){o.showBottomDrawer=!o.showBottomDrawer}}}),e("div",{staticClass:"w-flex fill-height align-center justify-center"},[o._v("You can customize the background color as well.")])],1)],1)},n=[function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("p",[o._v("The "),e("span",{staticClass:"code"},[o._v("w-drawer")]),o._v(" component accepts a "),e("span",{staticClass:"code"},[o._v("width")]),o._v(" or "),e("span",{staticClass:"code"},[o._v("height")]),o._v(" parameter\ndepending on its position on screen to override the default one.")])},function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("p",{staticClass:"grey-light1"},[e("span",{staticClass:"code grey-light1"},[o._v("width")]),o._v(" and "),e("span",{staticClass:"code grey-light1"},[o._v("height")]),o._v(" are called so for simplicity but\nthey internally translate to "),e("span",{staticClass:"code grey-light1"},[o._v("max-width")]),o._v(" and "),e("span",{staticClass:"code grey-light1"},[o._v("max-height")]),o._v("\nto fit on small screens.\n")])},function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("p",{staticClass:"mt4"},[e("strong",[o._v("Note:")]),o._v(" with no overlay the underneath content will be clickable and the drawer\nwill not close.\nTo allow closing the drawer when clicking outside of it, you can set a transparent background\non the overlay.\n")])}],a={data:function(){return{showLeftDrawer:!1,showRightDrawer:!1,showTopDrawer:!1,showBottomDrawer:!1,noOverlay:!1,overlayColor:!1,bottomDrawerHeight:0,persistent:!1,showCookieNotice:!1}}},s=a,i=e("2877"),l=Object(i["a"])(s,r,n,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=drawer-examples-vue.df4afbce.js.map