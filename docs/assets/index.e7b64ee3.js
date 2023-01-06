import{r as p,o as h,f as m,a as r,w as e,b as t,d as s,l as D,v as k,i as O,_ as b,K as C}from"./index.8b2cb3df.js";const T=s("p",null,[t("The "),s("strong",{class:"code"},"w-drawer"),t(` component can be placed in a deeper structure than the root of
the site.`)],-1),P=O(`<p>The <strong class="code">w-drawer</strong> component accepts a <span class="code">width</span> or <span class="code">height</span> parameter
depending on its position on screen to override the default one.</p><p class="grey-light1"><span class="code grey-light1">width</span> and <span class="code grey-light1">height</span> are called so for simplicity but
they internally translate to <span class="code grey-light1">max-width</span> and <span class="code grey-light1">max-height</span>
to fit on small screens.
</p>`,2),V=s("p",{class:"mb4"},"Open a blue 60px-height bottom drawer",-1),S=O(`<p>The <code>push-content</code> prop can be used on <code>left</code> and <code>right</code> positions.
It will allow the drawer to push the content either on the left or right when it&#39;s open.<br>
To use the push-content layout, an explicit drawer <code>width</code> is required (don&#39;t only set a
width via CSS). Any valid CSS width will work.<br>
The pushable content should be provided via the <code>pushable</code> slot.</p>`,1),N={class:"py12 w-flex column align-center justify-center"},A=s("p",{class:"mb3"},"Pushable content",-1),_=s("div",{class:"ma2"},"Drawer content",-1),j={class:"py12 w-flex column align-center justify-center"},R=s("p",{class:"mb3"},"Pushable content",-1),B=s("div",{class:"ma2"},"Drawer content",-1),L=s("span",null,"Open top drawer with a:",-1),x=s("p",{class:"mt4"},[s("strong",null,"Note:"),t(` with no overlay the underneath content will be clickable and the drawer
will not close.
To allow closing the drawer when clicking outside of it, you can set a transparent background
on the overlay.
`)],-1),U=s("p",null,"A persistent drawer stays open when clicking outside or pressing the escape key.",-1),I=s("p",null,`The cookie notice is a good use case of a persistent drawer, it will not let you click
anything until you accept.`,-1),E={class:"w-flex pa2 align-center wrap"},H={class:"w-flex align-center py1"},z=s("span",{class:"grey-dark3"},`Our website uses cookies to give you the best user experience.
To continue browsing this site you must agree.`,-1),W=s("div",{class:"spacer"},null,-1),Y=s("p",null,`You can then store the result of the acceptation in the localStorage when the user clicks
the button.`,-1),q={class:"w-flex align-center justify-center fill-height"},F=s("div",{class:"w-flex fill-height align-center justify-center"},"You can customize the background color as well.",-1);function J(n,o,f,g,v,w){const i=p("title-link"),l=p("w-button"),c=p("example"),u=p("w-drawer"),$=p("w-card"),y=p("w-icon"),d=p("ssh-pre");return h(),m("div",null,[r(i,{h2:""},{default:e(()=>[t("Basic")]),_:1}),r(c,{"content-class":"w-flex align-center wrap"},{pug:e(()=>[t(`w-button(@click="openDrawer = true" outline) Open drawer

w-drawer(v-model="openDrawer")`)]),html:e(()=>[t(`<w-button @click="openDrawer = true" outline>
  Open drawer
</w-button>

<w-drawer v-model="openDrawer" />`)]),js:e(()=>[t(`data: () => ({
  openDrawer: false
})
`)]),default:e(()=>[r(l,{onClick:o[0]||(o[0]=a=>n.openRightDrawer=!n.openRightDrawer),outline:""},{default:e(()=>[t("Open drawer")]),_:1})]),_:1}),r(i,{h2:""},{default:e(()=>[t("Positions")]),_:1}),r(c,{"content-class":"w-flex align-center wrap"},{pug:e(()=>[t(`w-button.ma1(
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
`)]),html:e(()=>[t(`<w-button
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
`)]),js:e(()=>[t(`data: () => ({
  openDrawer: false
}),

computed: {
  position () {
    return this.openDrawer || 'right'
  }
}
`)]),default:e(()=>[r(l,{class:"ma1",onClick:o[1]||(o[1]=a=>n.openLeftDrawer=!n.openLeftDrawer),outline:""},{default:e(()=>[t("Open left drawer")]),_:1}),r(l,{class:"ma1",onClick:o[2]||(o[2]=a=>n.openRightDrawer=!n.openRightDrawer),outline:""},{default:e(()=>[t("Open right drawer")]),_:1}),r(l,{class:"ma1",onClick:o[3]||(o[3]=a=>{n.noOverlay=!1,n.openTopDrawer=!n.openTopDrawer}),outline:""},{default:e(()=>[t("Open top drawer")]),_:1}),r(l,{class:"ma1",onClick:o[4]||(o[4]=a=>n.openBottomDrawer=!n.openBottomDrawer),outline:""},{default:e(()=>[t("Open bottom drawer")]),_:1})]),_:1}),r(i,{h3:""},{default:e(()=>[t("Absolute position")]),_:1}),T,r(c,{"content-class":"relative justify-center d-flex"},{pug:e(()=>[t(`w-card.ma6.grow.text-center(bg-color="amber-light5" title="w-card")
  w-button.my12(@click="openDrawer = true" text) Open drawer

  w-drawer(v-model="openDrawer" absolute width="160px")`)]),html:e(()=>[t(`<w-card
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
</w-card>`)]),js:e(()=>[t(`data: () => ({
  openDrawer: false
})
`)]),default:e(()=>[r($,{class:"ma6 grow text-center","bg-color":"amber-light5",title:"w-card"},{default:e(()=>[r(l,{class:"my12",onClick:o[5]||(o[5]=a=>n.openAbsoluteDrawer=!0),text:""},{default:e(()=>[t("Open drawer")]),_:1}),r(u,{modelValue:n.openAbsoluteDrawer,"onUpdate:modelValue":o[6]||(o[6]=a=>n.openAbsoluteDrawer=a),absolute:"",width:"160px"},null,8,["modelValue"])]),_:1})]),_:1}),r(i,{h2:""},{default:e(()=>[t("Control width or height")]),_:1}),P,r(c,null,{pug:e(()=>[t(`p.mb4 Open a blue 60px-height bottom drawer

w-button(@click="openDrawer = true" outline) Open drawer

w-drawer(
  v-model="openDrawer"
  bg-color="blue-light4"
  bottom
  height="60px")`)]),html:e(()=>[t(`<p class="mb4">Open a blue 60px-height bottom drawer</p>
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
</w-drawer>`)]),js:e(()=>[t(`data: () => ({
  openDrawer: false
})
`)]),default:e(()=>[V,r(l,{onClick:o[7]||(o[7]=a=>{n.bottomDrawerHeight="60px",n.openBottomDrawer=!0}),outline:""},{default:e(()=>[t("Open drawer")]),_:1})]),_:1}),r(i,{h2:""},{default:e(()=>[t("Push content")]),_:1}),S,r(c,{"content-class":"relative pa0","app-props-string":"","blank-codepen":["css"]},{pug:e(()=>[t(`w-drawer(
  v-model="openDrawer"
  push-content
  :overlay-opacity="0.15"
  width="160px")
  template(#pushable)
    w-flex.py12(column align-center justify-center)
      p.mb3 Pushable content
      w-button(@click="openDrawer = true" outline).
        Open drawer
  .ma2 Drawer content`)]),html:e(()=>[t(`<w-drawer
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
</w-drawer>`)]),js:e(()=>[t(`data: () => ({
  openDrawer: false
})
`)]),default:e(()=>[r(u,{modelValue:n.openPushContentRightDrawer,"onUpdate:modelValue":o[9]||(o[9]=a=>n.openPushContentRightDrawer=a),"push-content":"","overlay-opacity":.15,width:"160px"},{pushable:e(()=>[s("div",N,[A,r(l,{onClick:o[8]||(o[8]=a=>n.openPushContentRightDrawer=!0),outline:""},{default:e(()=>[t("Open drawer")]),_:1})])]),default:e(()=>[_]),_:1},8,["modelValue","overlay-opacity"])]),_:1}),r(c,{"content-class":"relative pa0","app-props-string":"","blank-codepen":["css"]},{pug:e(()=>[t(`w-drawer(
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
  .ma2 Drawer content`)]),html:e(()=>[t(`<w-drawer
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
</w-drawer>`)]),js:e(()=>[t(`data: () => ({
  openDrawer: false
})
`)]),default:e(()=>[r(u,{modelValue:n.openPushContentLeftDrawer,"onUpdate:modelValue":o[11]||(o[11]=a=>n.openPushContentLeftDrawer=a),"push-content":"","overlay-opacity":.15,left:"",width:"160px"},{pushable:e(()=>[s("div",j,[R,r(l,{onClick:o[10]||(o[10]=a=>n.openPushContentLeftDrawer=!0),outline:""},{default:e(()=>[t("Open drawer")]),_:1})])]),default:e(()=>[B]),_:1},8,["modelValue","overlay-opacity"])]),_:1}),r(i,{h2:""},{default:e(()=>[t("No overlay & custom color overlay")]),_:1}),r(c,{"content-class":"w-flex align-center wrap"},{pug:e(()=>[t(`span Open top drawer with a:

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
    icon="wi-cross")`)]),html:e(()=>[t(`<span>Open top drawer with a:</span>
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
</w-drawer>`)]),js:e(()=>[t(`data: () => ({
  openDrawer: false,
  noOverlay: false,
  overlayColor: ''
})
`)]),default:e(()=>[L,r(l,{class:"ma1",onClick:o[12]||(o[12]=a=>{n.noOverlay=!1,n.overlayColor="rgba(35, 71, 129, 0.5)",n.openTopDrawer=!n.openTopDrawer}),outline:""},{default:e(()=>[t("Custom color overlay")]),_:1}),r(l,{class:"ma1",onClick:o[13]||(o[13]=a=>{n.noOverlay=!1,n.overlayColor="transparent",n.openTopDrawer=!n.openTopDrawer}),outline:""},{default:e(()=>[t("Transparent overlay")]),_:1}),r(l,{class:"ma1",onClick:o[14]||(o[14]=a=>{n.noOverlay=!0,n.overlayColor="",n.openTopDrawer=!n.openTopDrawer}),outline:""},{default:e(()=>[t("No overlay")]),_:1})]),_:1}),x,r(i,{h2:""},{default:e(()=>[t("Persistent drawers")]),_:1}),U,r(c,{"content-class":"w-flex align-center"},{pug:e(()=>[t(`w-button(@click="openDrawer = true" outline).
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
    icon="wi-cross")`)]),html:e(()=>[t(`<w-button
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
</w-drawer>`)]),js:e(()=>[t(`data: () => ({
  openDrawer: false
})
`)]),default:e(()=>[r(l,{onClick:o[15]||(o[15]=a=>{n.persistent=!0,n.openBottomDrawer=!0}),outline:""},{default:e(()=>[t("Persistent drawer")]),_:1})]),_:1}),r(i,{h2:""},{default:e(()=>[t("Cookie notice example")]),_:1}),I,r(c,{"content-class":"w-flex align-center"},{pug:e(()=>[t(`w-button(@click="showCookieNotice = true" outline).
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
      | I agree`)]),html:e(()=>[t(`<w-button
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
</w-drawer>`)]),js:e(()=>[t(`data: () => ({
  showCookieNotice: false
})
`)]),default:e(()=>[r(l,{onClick:o[16]||(o[16]=a=>n.showCookieNotice=!0),outline:""},{default:e(()=>[t("Show the cookie notice")]),_:1}),r(u,{modelValue:n.showCookieNotice,"onUpdate:modelValue":o[18]||(o[18]=a=>n.showCookieNotice=a),"content-class":"cookie-notice","overlay-color":"transparent",persistent:"","fit-content":"",bottom:""},{default:e(()=>[s("div",E,[s("div",H,[r(y,{class:"mr3",xl:""},{default:e(()=>[t("wi-info-circle")]),_:1}),z]),W,r(l,{sm:"",onClick:o[17]||(o[17]=a=>n.showCookieNotice=!1)},{default:e(()=>[r(y,{class:"mr2"},{default:e(()=>[t("mdi mdi-cookie")]),_:1}),t("I agree")]),_:1})])]),_:1},8,["modelValue"])]),_:1}),Y,D(r(d,{language:"html-vue",label:"Template"},{default:e(()=>[t(`<w-button
  class="ml-auto"
  @click="acceptCookies"
  sm
  absolute>
  <w-icon class="mr2">wi-check</w-icon>
  I agree
</w-button>
`)]),_:1},512),[[k,!n.$store.state.usePug]]),D(r(d,{language:"pug",label:"Template"},{default:e(()=>[t(`w-button.ml-auto(@click="acceptCookies" sm absolute)
  w-icon.mr2 wi-check
  | I agree
`)]),_:1},512),[[k,n.$store.state.usePug]]),r(d,{language:"js",label:"Javascript"},{default:e(()=>[t(`acceptCookies () {
  localStorage.acceptCookies = 'yes'
  this.showCookieNotice = false
}
`)]),_:1}),r(u,{modelValue:n.openLeftDrawer,"onUpdate:modelValue":o[21]||(o[21]=a=>n.openLeftDrawer=a),left:""},{default:e(()=>[r(l,{class:"button--close",onClick:o[19]||(o[19]=a=>n.openLeftDrawer=!n.openLeftDrawer),sm:"",outline:"",absolute:"",round:"",icon:"wi-cross"}),s("div",q,[r(l,{onClick:o[20]||(o[20]=a=>{n.openLeftDrawer=!1,n.openRightDrawer=!0})},{default:e(()=>[t(`Show right drawer
`)]),_:1})])]),_:1},8,["modelValue"]),r(u,{modelValue:n.openRightDrawer,"onUpdate:modelValue":o[23]||(o[23]=a=>n.openRightDrawer=a)},{default:e(()=>[r(l,{class:"button--close",onClick:o[22]||(o[22]=a=>n.openRightDrawer=!n.openRightDrawer),sm:"",outline:"",absolute:"",round:"",icon:"wi-cross"})]),_:1},8,["modelValue"]),r(u,{modelValue:n.openTopDrawer,"onUpdate:modelValue":o[25]||(o[25]=a=>n.openTopDrawer=a),top:"","no-overlay":n.noOverlay,"overlay-color":n.overlayColor},{default:e(()=>[r(l,{class:"button--close",onClick:o[24]||(o[24]=a=>n.openTopDrawer=!n.openTopDrawer),sm:"",outline:"",absolute:"",round:"",icon:"wi-cross"})]),_:1},8,["modelValue","no-overlay","overlay-color"]),r(u,{modelValue:n.openBottomDrawer,"onUpdate:modelValue":o[27]||(o[27]=a=>n.openBottomDrawer=a),bottom:"",persistent:n.persistent,height:n.bottomDrawerHeight,"bg-color":"blue-light4",onClose:o[28]||(o[28]=a=>{n.bottomDrawerHeight=null,n.persistent=!1})},{default:e(()=>[r(l,{class:"button--close",sm:"",onClick:o[26]||(o[26]=a=>n.openBottomDrawer=!n.openBottomDrawer),outline:"",absolute:"",round:"",icon:"wi-cross"}),F]),_:1},8,["modelValue","persistent","height"])])}const K={data:()=>({openLeftDrawer:!1,openRightDrawer:!1,openTopDrawer:!1,openBottomDrawer:!1,openAbsoluteDrawer:!1,openPushContentLeftDrawer:!1,openPushContentRightDrawer:!1,noOverlay:!1,overlayColor:"",bottomDrawerHeight:0,persistent:!1,showCookieNotice:!1})},M=b(K,[["render",J]]),G=s("div",{class:"w-divider my12"},null,-1);function Q(n,o,f,g,v,w){const i=p("title-link"),l=p("component-api");return h(),m("div",null,[G,r(i,{class:"title1",h2:""},{default:e(()=>[t("API")]),_:1}),r(l,{class:"mt0",items:w.props,descriptions:n.propsDescs,title:"Props"},null,8,["items","descriptions"]),r(l,{items:n.slots,title:"Slots"},null,8,["items"]),r(l,{items:w.events,title:"Events"},null,8,["items"])])}const X={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the drawer. Any truthy value will show the drawer whereas any falsy value will hide it.',left:"Places the drawer at the left of the screen, or at the left of its container when the <code>absolute</code> prop is set to true.",right:"Places the drawer at the right of the screen, or at the right of its container when the <code>absolute</code> prop is set to true.",top:"Places the drawer at the top of the screen, or at the top of its container when the <code>absolute</code> prop is set to true.",bottom:"Places the drawer at the bottom of the screen, or at the bottom of its container when the <code>absolute</code> prop is set to true.",persistent:"When set to true, clicking outside of the drawer or pressing the escape key will not close the drawer.<br>A bounce animation will give the user a feedback that this drawer needs attention and cannot be closed.",persistentNoAnimation:"When this and the <code>persistent</code> props are set to true, clicking outside of the drawer or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user).",pushContent:"The <code>push-content</code> prop can be used on <code>left</code> and <code>right</code> positions.<br>It will allow the drawer to push the content either on the left or right when it's open.<br>To use the push-content layout, an explicit drawer <code>width</code> is required (don't only set a width via CSS). Any valid CSS width will work.<br>The pushable content should be provided via the <code>pushable</code> slot.",fitContent:"Fits the drawer to its content (sets the width and height to auto).",width:"Sets a width on the drawer when its position is <code>left</code> or <code>right</code>.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",height:"Sets a height on the drawer when its position is <code>top</code> or <code>bottom</code>.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",absolute:"Sets the CSS position of the drawer container to <code>absolute</code>.",zIndex:"Applies a z-index (positive or negative integer) to the drawer.",color:`Applies a color to the drawer's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the drawer's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,noOverlay:"Removes the default full screen overlay underneath the open drawer.",overlayColor:'Provide a custom background color for the drawer background overlay (<code>rgba(0, 0, 0, 0.3)</code> by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',overlayOpacity:"Provide a custom opacity for the drawer background overlay.",drawerClass:"Applies a custom CSS class to the drawer container."},Z={default:{description:"The drawer content."},pushable:{description:"When using the <code>push-content</code> prop, defines the outside HTML content to be pushed by the drawer when it opens."}},ee={input:"Emitted on drawer close.<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted on drawer close.<br>Updates the v-model value in Vue 3 only.",close:"Emitted on drawer close."},ne={data:()=>({propsDescs:X,slots:Z}),computed:{props(){return C.props},events(){return C.emits.reduce((n,o)=>(n[o]={description:ee[o]||""})&&n,{})}}},oe=b(ne,[["render",Q]]);function te(n,o,f,g,v,w){const i=p("ui-component-title"),l=p("examples"),c=p("api");return h(),m("main",null,[r(i,null,{default:e(()=>[t("w-drawer")]),_:1}),r(l),r(c)])}const re={components:{Examples:M,Api:oe}},le=b(re,[["render",te]]);export{le as default};
