import{r as d,o as m,g as b,a as r,w as o,b as t,t as w,d as s,n as P,l as D,v as C,h as $,_ as f,K as O}from"./index.bf2cfd71.js";const V=s("p",null,[t("The "),s("strong",{class:"code"},"w-drawer"),t(` component can be placed in a deeper structure than the root of
the site.`)],-1),S=$(`<p>The <strong class="code">w-drawer</strong> component accepts a <span class="code">width</span> or <span class="code">height</span> parameter
depending on its position on screen to override the default one.</p><p class="grey-light1"><span class="code grey-light1">width</span> and <span class="code grey-light1">height</span> are called so for simplicity but
they internally translate to <span class="code grey-light1">max-width</span> and <span class="code grey-light1">max-height</span>
to fit on small screens.
</p>`,2),N=s("p",{class:"mb4"},"Open a blue 60px-height bottom drawer",-1),A=$(`<p>The <code>push-content</code> prop can be used on <code>left</code> and <code>right</code> positions.
It will allow the drawer to push the content either on the left or right when it&#39;s open.<br>
To use the push-content layout, an explicit drawer <code>width</code> is required (don&#39;t only set a
width via CSS). Any valid CSS width will work.<br>
The pushable content should be provided via the <code>pushable</code> slot.</p>`,1),j={class:"py12 w-flex column align-center justify-center"},R=s("p",{class:"mb3"},"Pushable content",-1),B=s("div",{class:"ma2"},"Drawer content",-1),L={class:"py12 w-flex column align-center justify-center"},_=s("p",{class:"mb3"},"Pushable content",-1),M=s("div",{class:"ma2"},"Drawer content",-1),U=s("span",null,"Open top drawer with a:",-1),I=s("p",{class:"mt4"},[s("strong",null,"Note:"),t(` with no overlay the underneath content will be clickable and the drawer
will not close.
To allow closing the drawer when clicking outside of it, you can set a transparent background
on the overlay.
`)],-1),E=s("p",null,"A persistent drawer stays open when clicking outside or pressing the escape key.",-1),z=s("p",null,`The cookie notice is a good use case of a persistent drawer, it will not let you click
anything until you accept.`,-1),H={class:"w-flex pa2 align-center wrap"},W={class:"w-flex align-center py1"},Y=s("div",{class:"spacer"},null,-1),q=s("p",null,`You can then store the result of the acceptation in the localStorage when the user clicks
the button.`,-1),x={class:"w-flex align-center justify-center fill-height"},F=s("div",{class:"w-flex fill-height align-center justify-center black"},"You can customize the background color as well.",-1);function J(e,n,g,v,k,u){const i=d("title-link"),l=d("w-button"),p=d("example"),c=d("w-drawer"),T=d("w-card"),y=d("w-icon"),h=d("ssh-pre");return m(),b("div",null,[r(i,{h2:""},{default:o(()=>[t("Basic")]),_:1}),r(p,{"content-class":"w-flex align-center wrap"},{pug:o(()=>[t(`w-button(@click="openDrawer = true" outline) Open drawer

w-drawer(v-model="openDrawer")`)]),html:o(()=>[t(`<w-button @click="openDrawer = true" outline>
  Open drawer
</w-button>

<w-drawer v-model="openDrawer" />`)]),js:o(()=>[t(`data: () => ({
  openDrawer: false
})
`)]),default:o(()=>[r(l,{onClick:n[0]||(n[0]=a=>e.openRightDrawer=!e.openRightDrawer),outline:""},{default:o(()=>[t("Open drawer")]),_:1})]),_:1}),r(i,{h2:""},{default:o(()=>[t("Positions")]),_:1}),r(p,{"content-class":"w-flex align-center wrap"},{pug:o(()=>[t(`w-button.ma1(
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
`)]),html:o(()=>[t(`<w-button
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
`)]),js:o(()=>[t(`data: () => ({
  openDrawer: false
}),

computed: {
  position () {
    return this.openDrawer || 'right'
  }
}
`)]),default:o(()=>[r(l,{class:"ma1",onClick:n[1]||(n[1]=a=>e.openLeftDrawer=!e.openLeftDrawer),outline:""},{default:o(()=>[t("Open left drawer")]),_:1}),r(l,{class:"ma1",onClick:n[2]||(n[2]=a=>e.openRightDrawer=!e.openRightDrawer),outline:""},{default:o(()=>[t("Open right drawer")]),_:1}),r(l,{class:"ma1",onClick:n[3]||(n[3]=a=>{e.noOverlay=!1,e.openTopDrawer=!e.openTopDrawer}),outline:""},{default:o(()=>[t("Open top drawer")]),_:1}),r(l,{class:"ma1",onClick:n[4]||(n[4]=a=>e.openBottomDrawer=!e.openBottomDrawer),outline:""},{default:o(()=>[t("Open bottom drawer")]),_:1})]),_:1}),r(i,{h3:""},{default:o(()=>[t("Absolute position")]),_:1}),V,r(p,{"content-class":"relative justify-center d-flex"},{pug:o(()=>[t('w-card.ma6.grow.text-center(bg-color="'+w(e.$store.state.darkMode?"grey-dark6":"amber-light5")+`" title="w-card")
  w-button.my12(@click="openDrawer = true" text) Open drawer

  w-drawer(v-model="openDrawer" absolute width="160px")`,1)]),html:o(()=>[t(`<w-card
  class="ma6 grow text-center"
  bg-color="`+w(e.$store.state.darkMode?"grey-dark6":"amber-light5")+`"
  title="w-card">
  <w-button class="my12" @click="openDrawer = true" text>
    Open drawer
  </w-button>

  <w-drawer
    v-model="openDrawer"
    absolute
    width="160px">
  </w-drawer>
</w-card>`,1)]),js:o(()=>[t(`data: () => ({
  openDrawer: false
})
`)]),default:o(()=>[r(T,{class:"ma6 grow text-center","bg-color":e.$store.state.darkMode?"grey-dark6":"amber-light5",title:"w-card"},{default:o(()=>[r(l,{class:"my12",onClick:n[5]||(n[5]=a=>e.openAbsoluteDrawer=!0),text:""},{default:o(()=>[t("Open drawer")]),_:1}),r(c,{modelValue:e.openAbsoluteDrawer,"onUpdate:modelValue":n[6]||(n[6]=a=>e.openAbsoluteDrawer=a),absolute:"",width:"160px"},null,8,["modelValue"])]),_:1},8,["bg-color"])]),_:1}),r(i,{h2:""},{default:o(()=>[t("Control width or height")]),_:1}),S,r(p,null,{pug:o(()=>[t(`p.mb4 Open a blue 60px-height bottom drawer

w-button(@click="openDrawer = true" outline) Open drawer

w-drawer(
  v-model="openDrawer"
  bg-color="blue-light4"
  bottom
  height="60px")`)]),html:o(()=>[t(`<p class="mb4">Open a blue 60px-height bottom drawer</p>
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
</w-drawer>`)]),js:o(()=>[t(`data: () => ({
  openDrawer: false
})
`)]),default:o(()=>[N,r(l,{onClick:n[7]||(n[7]=a=>{e.bottomDrawerHeight="60px",e.openBottomDrawer=!0}),outline:""},{default:o(()=>[t("Open drawer")]),_:1})]),_:1}),r(i,{h2:""},{default:o(()=>[t("Push content")]),_:1}),A,r(p,{"content-class":"relative pa0","blank-codepen":["css"]},{pug:o(()=>[t(`w-drawer(
  v-model="openDrawer"
  push-content
  :overlay-opacity="0.15"
  width="160px")
  template(#pushable)
    w-flex.py12(column align-center justify-center)
      p.mb3 Pushable content
      w-button(@click="openDrawer = true" outline).
        Open drawer
  .ma2 Drawer content`)]),html:o(()=>[t(`<w-drawer
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
</w-drawer>`)]),js:o(()=>[t(`data: () => ({
  openDrawer: false
})
`)]),default:o(()=>[r(c,{modelValue:e.openPushContentRightDrawer,"onUpdate:modelValue":n[9]||(n[9]=a=>e.openPushContentRightDrawer=a),"push-content":"","overlay-opacity":.15,width:"160px"},{pushable:o(()=>[s("div",j,[R,r(l,{onClick:n[8]||(n[8]=a=>e.openPushContentRightDrawer=!0),outline:""},{default:o(()=>[t("Open drawer")]),_:1})])]),default:o(()=>[B]),_:1},8,["modelValue"])]),_:1}),r(p,{"content-class":"relative pa0","blank-codepen":["css"]},{pug:o(()=>[t(`w-drawer(
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
  .ma2 Drawer content`)]),html:o(()=>[t(`<w-drawer
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
</w-drawer>`)]),js:o(()=>[t(`data: () => ({
  openDrawer: false
})
`)]),default:o(()=>[r(c,{modelValue:e.openPushContentLeftDrawer,"onUpdate:modelValue":n[11]||(n[11]=a=>e.openPushContentLeftDrawer=a),"push-content":"","overlay-opacity":.15,left:"",width:"160px"},{pushable:o(()=>[s("div",L,[_,r(l,{onClick:n[10]||(n[10]=a=>e.openPushContentLeftDrawer=!0),outline:""},{default:o(()=>[t("Open drawer")]),_:1})])]),default:o(()=>[M]),_:1},8,["modelValue"])]),_:1}),r(i,{h2:""},{default:o(()=>[t("No overlay & custom color overlay")]),_:1}),r(p,{"content-class":"w-flex align-center wrap"},{pug:o(()=>[t(`span Open top drawer with a:

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
    icon="wi-cross")`)]),html:o(()=>[t(`<span>Open top drawer with a:</span>
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
</w-drawer>`)]),js:o(()=>[t(`data: () => ({
  openDrawer: false,
  noOverlay: false,
  overlayColor: ''
})
`)]),default:o(()=>[U,r(l,{class:"ma1",onClick:n[12]||(n[12]=a=>{e.noOverlay=!1,e.overlayColor="rgba(35, 71, 129, 0.5)",e.openTopDrawer=!e.openTopDrawer}),outline:""},{default:o(()=>[t("Custom color overlay")]),_:1}),r(l,{class:"ma1",onClick:n[13]||(n[13]=a=>{e.noOverlay=!1,e.overlayColor="transparent",e.openTopDrawer=!e.openTopDrawer}),outline:""},{default:o(()=>[t("Transparent overlay")]),_:1}),r(l,{class:"ma1",onClick:n[14]||(n[14]=a=>{e.noOverlay=!0,e.overlayColor="",e.openTopDrawer=!e.openTopDrawer}),outline:""},{default:o(()=>[t("No overlay")]),_:1})]),_:1}),I,r(i,{h2:""},{default:o(()=>[t("Persistent drawers")]),_:1}),E,r(p,{"content-class":"w-flex align-center"},{pug:o(()=>[t(`w-button(@click="openDrawer = true" outline).
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
    icon="wi-cross")`)]),html:o(()=>[t(`<w-button
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

  <div class="w-flex fill-height align-center justify-center black">
    You can customize the background color as well.
  </div>
</w-drawer>`)]),js:o(()=>[t(`data: () => ({
  openDrawer: false
})
`)]),default:o(()=>[r(l,{onClick:n[15]||(n[15]=a=>{e.persistent=!0,e.openBottomDrawer=!0}),outline:""},{default:o(()=>[t("Persistent drawer")]),_:1})]),_:1}),r(i,{h2:""},{default:o(()=>[t("Cookie notice example")]),_:1}),z,r(p,{"content-class":"w-flex align-center"},{pug:o(()=>[t(`w-button(@click="showCookieNotice = true" outline).
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
      w-icon.mr3(xl) mdi mdi-cookie
      span.`+w(e.$store.state.darkMode?"grey-light4":"grey-dark3")+`.
        Our website uses cookies to give you the best user experience.
        To continue browsing this site you must agree.
    .spacer
    w-button(sm @click="showCookieNotice = false")
      w-icon.mr2 mdi mdi-check
      | I agree`,1)]),html:o(()=>[t(`<w-button
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
        mdi mdi-cookie
      </w-icon>
        <span class="`+w(e.$store.state.darkMode?"grey-light4":"grey-dark3")+`">
        Our website uses cookies to give you the best user experience.
        To continue browsing this site you must agree.
      </span>
    </div>
    <div class="spacer" />
    <w-button sm @click="showCookieNotice = false">
      <w-icon class="mr2">mdi mdi-check</w-icon>
      I agree
    </w-button>
  </div>
</w-drawer>`,1)]),js:o(()=>[t(`data: () => ({
  showCookieNotice: false
})
`)]),default:o(()=>[r(l,{onClick:n[16]||(n[16]=a=>e.showCookieNotice=!0),outline:""},{default:o(()=>[t("Show the cookie notice")]),_:1}),r(c,{modelValue:e.showCookieNotice,"onUpdate:modelValue":n[18]||(n[18]=a=>e.showCookieNotice=a),"content-class":"cookie-notice","overlay-color":"transparent",persistent:"","fit-content":"",bottom:""},{default:o(()=>[s("div",H,[s("div",W,[r(y,{class:"mr3",xl:""},{default:o(()=>[t("mdi mdi-cookie")]),_:1}),s("span",{class:P(e.$store.state.darkMode?"grey-light4":"grey-dark3")},`Our website uses cookies to give you the best user experience.
To continue browsing this site you must agree.`,2)]),Y,r(l,{sm:"",onClick:n[17]||(n[17]=a=>e.showCookieNotice=!1)},{default:o(()=>[r(y,{class:"mr2"},{default:o(()=>[t("mdi mdi-check")]),_:1}),t("I agree")]),_:1})])]),_:1},8,["modelValue"])]),_:1}),q,D(r(h,{dark:e.$store.state.darkMode,language:"html-vue",label:"Template"},{default:o(()=>[t(`<w-button
  class="ml-auto"
  @click="acceptCookies"
  sm
  absolute>
  <w-icon class="mr2">wi-check</w-icon>
  I agree
</w-button>
`)]),_:1},8,["dark"]),[[C,!e.$store.state.usePug]]),D(r(h,{dark:e.$store.state.darkMode,language:"pug",label:"Template"},{default:o(()=>[t(`w-button.ml-auto(@click="acceptCookies" sm absolute)
  w-icon.mr2 wi-check
  | I agree
`)]),_:1},8,["dark"]),[[C,e.$store.state.usePug]]),r(h,{language:"js",label:"Javascript",dark:e.$store.state.darkMode},{default:o(()=>[t(`acceptCookies () {
  localStorage.acceptCookies = 'yes'
  this.showCookieNotice = false
}
`)]),_:1},8,["dark"]),r(c,{modelValue:e.openLeftDrawer,"onUpdate:modelValue":n[21]||(n[21]=a=>e.openLeftDrawer=a),left:""},{default:o(()=>[r(l,{class:"button--close",onClick:n[19]||(n[19]=a=>e.openLeftDrawer=!e.openLeftDrawer),sm:"",outline:"",absolute:"",round:"",icon:"wi-cross"}),s("div",x,[r(l,{onClick:n[20]||(n[20]=a=>{e.openLeftDrawer=!1,e.openRightDrawer=!0})},{default:o(()=>[t(`Show right drawer
`)]),_:1})])]),_:1},8,["modelValue"]),r(c,{modelValue:e.openRightDrawer,"onUpdate:modelValue":n[23]||(n[23]=a=>e.openRightDrawer=a)},{default:o(()=>[r(l,{class:"button--close",onClick:n[22]||(n[22]=a=>e.openRightDrawer=!e.openRightDrawer),sm:"",outline:"",absolute:"",round:"",icon:"wi-cross"})]),_:1},8,["modelValue"]),r(c,{modelValue:e.openTopDrawer,"onUpdate:modelValue":n[25]||(n[25]=a=>e.openTopDrawer=a),top:"","no-overlay":e.noOverlay,"overlay-color":e.overlayColor},{default:o(()=>[r(l,{class:"button--close",onClick:n[24]||(n[24]=a=>e.openTopDrawer=!e.openTopDrawer),sm:"",outline:"",absolute:"",round:"",icon:"wi-cross"})]),_:1},8,["modelValue","no-overlay","overlay-color"]),r(c,{modelValue:e.openBottomDrawer,"onUpdate:modelValue":n[27]||(n[27]=a=>e.openBottomDrawer=a),bottom:"",persistent:e.persistent,height:e.bottomDrawerHeight,"bg-color":"blue-light4",onClose:n[28]||(n[28]=a=>{e.bottomDrawerHeight=null,e.persistent=!1})},{default:o(()=>[r(l,{class:"button--close",sm:"",onClick:n[26]||(n[26]=a=>e.openBottomDrawer=!e.openBottomDrawer),outline:"",absolute:"",round:"",icon:"wi-cross"}),F]),_:1},8,["modelValue","persistent","height"])])}const K={data:()=>({openLeftDrawer:!1,openRightDrawer:!1,openTopDrawer:!1,openBottomDrawer:!1,openAbsoluteDrawer:!1,openPushContentLeftDrawer:!1,openPushContentRightDrawer:!1,noOverlay:!1,overlayColor:"",bottomDrawerHeight:0,persistent:!1,showCookieNotice:!1})},G=f(K,[["render",J]]),Q=s("div",{class:"w-divider my12"},null,-1);function X(e,n,g,v,k,u){const i=d("title-link"),l=d("component-api");return m(),b("div",null,[Q,r(i,{class:"title1",h2:""},{default:o(()=>[t("API")]),_:1}),r(l,{class:"mt0",items:u.props,descriptions:e.propsDescs,title:"Props"},null,8,["items","descriptions"]),r(l,{items:e.slots,title:"Slots"},null,8,["items"]),r(l,{items:u.events,title:"Events"},null,8,["items"])])}const Z={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the drawer. Any truthy value will show the drawer whereas any falsy value will hide it.',left:"Places the drawer at the left of the screen, or at the left of its container when the <code>absolute</code> prop is set to true.",right:"Places the drawer at the right of the screen, or at the right of its container when the <code>absolute</code> prop is set to true.",top:"Places the drawer at the top of the screen, or at the top of its container when the <code>absolute</code> prop is set to true.",bottom:"Places the drawer at the bottom of the screen, or at the bottom of its container when the <code>absolute</code> prop is set to true.",persistent:"When set to true, clicking outside of the drawer or pressing the escape key will not close the drawer.<br>A bounce animation will give the user a feedback that this drawer needs attention and cannot be closed.",persistentNoAnimation:"When this and the <code>persistent</code> props are set to true, clicking outside of the drawer or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user).",pushContent:"The <code>push-content</code> prop can be used on <code>left</code> and <code>right</code> positions.<br>It will allow the drawer to push the content either on the left or right when it's open.<br>To use the push-content layout, an explicit drawer <code>width</code> is required (don't only set a width via CSS). Any valid CSS width will work.<br>The pushable content should be provided via the <code>pushable</code> slot.",fitContent:"Fits the drawer to its content (sets the width and height to auto).",width:"Sets a width on the drawer when its position is <code>left</code> or <code>right</code>.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",height:"Sets a height on the drawer when its position is <code>top</code> or <code>bottom</code>.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",absolute:"Sets the CSS position of the drawer container to <code>absolute</code>.",zIndex:"Applies a z-index (positive or negative integer) to the drawer.",color:`Applies a color to the drawer's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the drawer's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,noOverlay:"Removes the default full screen overlay underneath the open drawer.",overlayColor:'Provide a custom background color for the drawer background overlay (<code>rgba(0, 0, 0, 0.3)</code> by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',overlayOpacity:"Provide a custom opacity for the drawer background overlay.",drawerClass:"Applies a custom CSS class to the drawer container."},ee={default:{description:"The drawer content."},pushable:{description:"When using the <code>push-content</code> prop, defines the outside HTML content to be pushed by the drawer when it opens."}},oe={input:"Emitted on drawer close.<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted on drawer close.<br>Updates the v-model value in Vue 3 only.",close:"Emitted on drawer close."},ne={data:()=>({propsDescs:Z,slots:ee}),computed:{props(){return O.props},events(){return O.emits.reduce((e,n)=>(e[n]={description:oe[n]||""})&&e,{})}}},te=f(ne,[["render",X]]);function re(e,n,g,v,k,u){const i=d("ui-component-title"),l=d("examples"),p=d("api");return m(),b("main",null,[r(i,null,{default:o(()=>[t("w-drawer")]),_:1}),r(l),r(p)])}const ae={components:{Examples:G,Api:te}},se=f(ae,[["render",re]]);export{se as default};
