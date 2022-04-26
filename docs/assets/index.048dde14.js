import{r as c,o as h,f as m,a as r,w as e,b as l,b5 as _,bo as D,e as t,i as C,_ as b,bF as k}from"./index.35c68787.js";const $=t("Basic"),T=t("Open drawer"),P=t(`w-button(@click="openDrawer = true" outline) Open drawer

w-drawer(v-model="openDrawer")`),V=t(`<w-button @click="openDrawer = true" outline>
  Open drawer
</w-button>

<w-drawer v-model="openDrawer" />`),N=t(`data: () => ({
  openDrawer: false
})
`),S=t("Positions"),A=t("Open left drawer"),j=t("Open right drawer"),R=t("Open top drawer"),B=t("Open bottom drawer"),L=t(`w-button.ma1(
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
`),x=t(`<w-button
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
`),U=t(`data: () => ({
  openDrawer: false
}),

computed: {
  position () {
    return this.openDrawer || 'right'
  }
}
`),I=t("Absolute position"),E=l("p",null,[t("The "),l("strong",{class:"code"},"w-drawer"),t(` component can be placed in a deeper structure than the root of
the site.`)],-1),H=t("Open drawer"),z=t(`w-card.ma6.grow.text-center(bg-color="amber-light5" title="w-card")
  w-button.my12(@click="openDrawer = true" text) Open drawer

  w-drawer(v-model="openDrawer" absolute width="160px")`),W=t(`<w-card
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
</w-card>`),Y=t(`data: () => ({
  openDrawer: false
})
`),q=t("Control width or height"),F=C(`<p>The <strong class="code">w-drawer</strong> component accepts a <span class="code">width</span> or <span class="code">height</span> parameter
depending on its position on screen to override the default one.</p><p class="grey-light1"><span class="code grey-light1">width</span> and <span class="code grey-light1">height</span> are called so for simplicity but
they internally translate to <span class="code grey-light1">max-width</span> and <span class="code grey-light1">max-height</span>
to fit on small screens.
</p>`,2),J=l("p",{class:"mb4"},"Open a blue 60px-height bottom drawer",-1),M=t("Open drawer"),G=t(`p.mb4 Open a blue 60px-height bottom drawer

w-button(@click="openDrawer = true" outline) Open drawer

w-drawer(
  v-model="openDrawer"
  bg-color="blue-light4"
  bottom
  height="60px")`),K=t(`<p class="mb4">Open a blue 60px-height bottom drawer</p>
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
</w-drawer>`),Q=t(`data: () => ({
  openDrawer: false
})
`),X=t("Push content"),Z=C(`<p>The <code>push-content</code> prop can be used on <code>left</code> and <code>right</code> positions.
It will allow the drawer to push the content either on the left or right when it&#39;s open.<br>
To use the push-content layout, an explicit drawer <code>width</code> is required (don&#39;t only set a
width via CSS). Any valid CSS width will work.<br>
The pushable content should be provided via the <code>pushable</code> slot.</p>`,1),ee={class:"py12 w-flex column align-center justify-center"},oe=l("p",{class:"mb3"},"Pushable content",-1),ne=t("Open drawer"),te=l("div",{class:"ma2"},"Drawer content",-1),re=t(`w-drawer(
  v-model="openDrawer"
  push-content
  :overlay-opacity="0.15"
  width="160px")
  template(#pushable)
    w-flex.py12(column align-center justify-center)
      p.mb3 Pushable content
      w-button(@click="openDrawer = true" outline).
        Open drawer
  .ma2 Drawer content`),ae=t(`<w-drawer
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
</w-drawer>`),se=t(`data: () => ({
  openDrawer: false
})
`),le={class:"py12 w-flex column align-center justify-center"},ie=l("p",{class:"mb3"},"Pushable content",-1),ce=t("Open drawer"),de=l("div",{class:"ma2"},"Drawer content",-1),pe=t(`w-drawer(
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
  .ma2 Drawer content`),ue=t(`<w-drawer
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
</w-drawer>`),we=t(`data: () => ({
  openDrawer: false
})
`),he=t("No overlay & custom color overlay"),me=l("span",null,"Open top drawer with a:",-1),be=t("Custom color overlay"),fe=t("Transparent overlay"),ge=t("No overlay"),ve=t(`span Open top drawer with a:

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
    icon="wi-cross")`),ye=t(`<span>Open top drawer with a:</span>
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
</w-drawer>`),_e=t(`data: () => ({
  openDrawer: false,
  noOverlay: false,
  overlayColor: ''
})
`),De=l("p",{class:"mt4"},[l("strong",null,"Note:"),t(` with no overlay the underneath content will be clickable and the drawer
will not close.
To allow closing the drawer when clicking outside of it, you can set a transparent background
on the overlay.
`)],-1),ke=t("Persistent drawers"),Ce=l("p",null,"A persistent drawer stays open when clicking outside or pressing the escape key.",-1),Oe=t("Persistent drawer"),$e=t(`w-button(@click="openDrawer = true" outline).
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
    icon="wi-cross")`),Te=t(`<w-button
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
</w-drawer>`),Pe=t(`data: () => ({
  openDrawer: false
})
`),Ve=t("Cookie notice example"),Ne=l("p",null,`The cookie notice is a good use case of a persistent drawer, it will not let you click
anything until you accept.`,-1),Se=t("Show the cookie notice"),Ae={class:"w-flex pa2 align-center wrap"},je={class:"w-flex align-center py1"},Re=t("wi-info-circle"),Be=l("span",{class:"grey-dark3"},`Our website uses cookies to give you the best user experience.
To continue browsing this site you must agree.`,-1),Le=l("div",{class:"spacer"},null,-1),xe=t("mdi mdi-cookie"),Ue=t("I agree"),Ie=t(`w-button(@click="showCookieNotice = true" outline).
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
      | I agree`),Ee=t(`<w-button
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
</w-drawer>`),He=t(`data: () => ({
  showCookieNotice: false
})
`),ze=l("p",null,`You can then store the result of the acceptation in the localStorage when the user clicks
the button.`,-1),We=t(`<w-button
  class="ml-auto"
  @click="acceptCookies"
  sm
  absolute>
  <w-icon class="mr2">wi-check</w-icon>
  I agree
</w-button>
`),Ye=t(`w-button.ml-auto(@click="acceptCookies" sm absolute)
  w-icon.mr2 wi-check
  | I agree
`),qe=t(`acceptCookies () {
  localStorage.acceptCookies = 'yes'
  this.showCookieNotice = false
}
`),Fe={class:"w-flex align-center justify-center fill-height"},Je=t(`Show right drawer
`),Me=l("div",{class:"w-flex fill-height align-center justify-center"},"You can customize the background color as well.",-1);function Ge(o,n,f,g,v,u){const i=c("title-link"),s=c("w-button"),d=c("example"),p=c("w-drawer"),O=c("w-card"),y=c("w-icon"),w=c("ssh-pre");return h(),m("div",null,[r(i,{h2:""},{default:e(()=>[$]),_:1}),r(d,{"content-class":"w-flex align-center wrap"},{pug:e(()=>[P]),html:e(()=>[V]),js:e(()=>[N]),default:e(()=>[r(s,{onClick:n[0]||(n[0]=a=>o.openRightDrawer=!o.openRightDrawer),outline:""},{default:e(()=>[T]),_:1})]),_:1}),r(i,{h2:""},{default:e(()=>[S]),_:1}),r(d,{"content-class":"w-flex align-center wrap"},{pug:e(()=>[L]),html:e(()=>[x]),js:e(()=>[U]),default:e(()=>[r(s,{class:"ma1",onClick:n[1]||(n[1]=a=>o.openLeftDrawer=!o.openLeftDrawer),outline:""},{default:e(()=>[A]),_:1}),r(s,{class:"ma1",onClick:n[2]||(n[2]=a=>o.openRightDrawer=!o.openRightDrawer),outline:""},{default:e(()=>[j]),_:1}),r(s,{class:"ma1",onClick:n[3]||(n[3]=a=>{o.noOverlay=!1,o.openTopDrawer=!o.openTopDrawer}),outline:""},{default:e(()=>[R]),_:1}),r(s,{class:"ma1",onClick:n[4]||(n[4]=a=>o.openBottomDrawer=!o.openBottomDrawer),outline:""},{default:e(()=>[B]),_:1})]),_:1}),r(i,{h3:""},{default:e(()=>[I]),_:1}),E,r(d,{"content-class":"relative justify-center d-flex"},{pug:e(()=>[z]),html:e(()=>[W]),js:e(()=>[Y]),default:e(()=>[r(O,{class:"ma6 grow text-center","bg-color":"amber-light5",title:"w-card"},{default:e(()=>[r(s,{class:"my12",onClick:n[5]||(n[5]=a=>o.openAbsoluteDrawer=!0),text:""},{default:e(()=>[H]),_:1}),r(p,{modelValue:o.openAbsoluteDrawer,"onUpdate:modelValue":n[6]||(n[6]=a=>o.openAbsoluteDrawer=a),absolute:"",width:"160px"},null,8,["modelValue"])]),_:1})]),_:1}),r(i,{h2:""},{default:e(()=>[q]),_:1}),F,r(d,null,{pug:e(()=>[G]),html:e(()=>[K]),js:e(()=>[Q]),default:e(()=>[J,r(s,{onClick:n[7]||(n[7]=a=>{o.bottomDrawerHeight="60px",o.openBottomDrawer=!0}),outline:""},{default:e(()=>[M]),_:1})]),_:1}),r(i,{h2:""},{default:e(()=>[X]),_:1}),Z,r(d,{"content-class":"relative pa0","app-props-string":"","blank-codepen":["css"]},{pug:e(()=>[re]),html:e(()=>[ae]),js:e(()=>[se]),default:e(()=>[r(p,{modelValue:o.openPushContentRightDrawer,"onUpdate:modelValue":n[9]||(n[9]=a=>o.openPushContentRightDrawer=a),"push-content":"","overlay-opacity":.15,width:"160px"},{pushable:e(()=>[l("div",ee,[oe,r(s,{onClick:n[8]||(n[8]=a=>o.openPushContentRightDrawer=!0),outline:""},{default:e(()=>[ne]),_:1})])]),default:e(()=>[te]),_:1},8,["modelValue","overlay-opacity"])]),_:1}),r(d,{"content-class":"relative pa0","app-props-string":"","blank-codepen":["css"]},{pug:e(()=>[pe]),html:e(()=>[ue]),js:e(()=>[we]),default:e(()=>[r(p,{modelValue:o.openPushContentLeftDrawer,"onUpdate:modelValue":n[11]||(n[11]=a=>o.openPushContentLeftDrawer=a),"push-content":"","overlay-opacity":.15,left:"",width:"160px"},{pushable:e(()=>[l("div",le,[ie,r(s,{onClick:n[10]||(n[10]=a=>o.openPushContentLeftDrawer=!0),outline:""},{default:e(()=>[ce]),_:1})])]),default:e(()=>[de]),_:1},8,["modelValue","overlay-opacity"])]),_:1}),r(i,{h2:""},{default:e(()=>[he]),_:1}),r(d,{"content-class":"w-flex align-center wrap"},{pug:e(()=>[ve]),html:e(()=>[ye]),js:e(()=>[_e]),default:e(()=>[me,r(s,{class:"ma1",onClick:n[12]||(n[12]=a=>{o.noOverlay=!1,o.overlayColor="rgba(35, 71, 129, 0.5)",o.openTopDrawer=!o.openTopDrawer}),outline:""},{default:e(()=>[be]),_:1}),r(s,{class:"ma1",onClick:n[13]||(n[13]=a=>{o.noOverlay=!1,o.overlayColor="transparent",o.openTopDrawer=!o.openTopDrawer}),outline:""},{default:e(()=>[fe]),_:1}),r(s,{class:"ma1",onClick:n[14]||(n[14]=a=>{o.noOverlay=!0,o.overlayColor="",o.openTopDrawer=!o.openTopDrawer}),outline:""},{default:e(()=>[ge]),_:1})]),_:1}),De,r(i,{h2:""},{default:e(()=>[ke]),_:1}),Ce,r(d,{"content-class":"w-flex align-center"},{pug:e(()=>[$e]),html:e(()=>[Te]),js:e(()=>[Pe]),default:e(()=>[r(s,{onClick:n[15]||(n[15]=a=>{o.persistent=!0,o.openBottomDrawer=!0}),outline:""},{default:e(()=>[Oe]),_:1})]),_:1}),r(i,{h2:""},{default:e(()=>[Ve]),_:1}),Ne,r(d,{"content-class":"w-flex align-center"},{pug:e(()=>[Ie]),html:e(()=>[Ee]),js:e(()=>[He]),default:e(()=>[r(s,{onClick:n[16]||(n[16]=a=>o.showCookieNotice=!0),outline:""},{default:e(()=>[Se]),_:1}),r(p,{modelValue:o.showCookieNotice,"onUpdate:modelValue":n[18]||(n[18]=a=>o.showCookieNotice=a),"content-class":"cookie-notice","overlay-color":"transparent",persistent:"","fit-content":"",bottom:""},{default:e(()=>[l("div",Ae,[l("div",je,[r(y,{class:"mr3",xl:""},{default:e(()=>[Re]),_:1}),Be]),Le,r(s,{sm:"",onClick:n[17]||(n[17]=a=>o.showCookieNotice=!1)},{default:e(()=>[r(y,{class:"mr2"},{default:e(()=>[xe]),_:1}),Ue]),_:1})])]),_:1},8,["modelValue"])]),_:1}),ze,_(r(w,{language:"html-vue",label:"Template"},{default:e(()=>[We]),_:1},512),[[D,!o.$store.state.usePug]]),_(r(w,{language:"pug",label:"Template"},{default:e(()=>[Ye]),_:1},512),[[D,o.$store.state.usePug]]),r(w,{language:"js",label:"Javascript"},{default:e(()=>[qe]),_:1}),r(p,{modelValue:o.openLeftDrawer,"onUpdate:modelValue":n[21]||(n[21]=a=>o.openLeftDrawer=a),left:""},{default:e(()=>[r(s,{class:"button--close",onClick:n[19]||(n[19]=a=>o.openLeftDrawer=!o.openLeftDrawer),sm:"",outline:"",absolute:"",round:"",icon:"wi-cross"}),l("div",Fe,[r(s,{onClick:n[20]||(n[20]=a=>{o.openLeftDrawer=!1,o.openRightDrawer=!0})},{default:e(()=>[Je]),_:1})])]),_:1},8,["modelValue"]),r(p,{modelValue:o.openRightDrawer,"onUpdate:modelValue":n[23]||(n[23]=a=>o.openRightDrawer=a)},{default:e(()=>[r(s,{class:"button--close",onClick:n[22]||(n[22]=a=>o.openRightDrawer=!o.openRightDrawer),sm:"",outline:"",absolute:"",round:"",icon:"wi-cross"})]),_:1},8,["modelValue"]),r(p,{modelValue:o.openTopDrawer,"onUpdate:modelValue":n[25]||(n[25]=a=>o.openTopDrawer=a),top:"","no-overlay":o.noOverlay,"overlay-color":o.overlayColor},{default:e(()=>[r(s,{class:"button--close",onClick:n[24]||(n[24]=a=>o.openTopDrawer=!o.openTopDrawer),sm:"",outline:"",absolute:"",round:"",icon:"wi-cross"})]),_:1},8,["modelValue","no-overlay","overlay-color"]),r(p,{modelValue:o.openBottomDrawer,"onUpdate:modelValue":n[27]||(n[27]=a=>o.openBottomDrawer=a),bottom:"",persistent:o.persistent,height:o.bottomDrawerHeight,"bg-color":"blue-light4",onClose:n[28]||(n[28]=a=>{o.bottomDrawerHeight=null,o.persistent=!1})},{default:e(()=>[r(s,{class:"button--close",sm:"",onClick:n[26]||(n[26]=a=>o.openBottomDrawer=!o.openBottomDrawer),outline:"",absolute:"",round:"",icon:"wi-cross"}),Me]),_:1},8,["modelValue","persistent","height"])])}const Ke={data:()=>({openLeftDrawer:!1,openRightDrawer:!1,openTopDrawer:!1,openBottomDrawer:!1,openAbsoluteDrawer:!1,openPushContentLeftDrawer:!1,openPushContentRightDrawer:!1,noOverlay:!1,overlayColor:"",bottomDrawerHeight:0,persistent:!1,showCookieNotice:!1})};var Qe=b(Ke,[["render",Ge]]);const Xe=l("div",{class:"w-divider my12"},null,-1),Ze=t("API");function eo(o,n,f,g,v,u){const i=c("title-link"),s=c("component-api");return h(),m("div",null,[Xe,r(i,{class:"title1",h2:""},{default:e(()=>[Ze]),_:1}),r(s,{class:"mt0",items:u.props,descriptions:o.propsDescs,title:"Props"},null,8,["items","descriptions"]),r(s,{items:o.slots,title:"Slots"},null,8,["items"]),r(s,{items:u.events,title:"Events"},null,8,["items"])])}const oo={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the drawer. Any truthy value will show the drawer whereas any falsy value will hide it.',left:"Places the drawer at the left of the screen, or at the left of its container when the <code>absolute</code> prop is set to true.",right:"Places the drawer at the right of the screen, or at the right of its container when the <code>absolute</code> prop is set to true.",top:"Places the drawer at the top of the screen, or at the top of its container when the <code>absolute</code> prop is set to true.",bottom:"Places the drawer at the bottom of the screen, or at the bottom of its container when the <code>absolute</code> prop is set to true.",persistent:"When set to true, clicking outside of the drawer or pressing the escape key will not close the drawer.<br>A bounce animation will give the user a feedback that this drawer needs attention and cannot be closed.",persistentNoAnimation:"When this and the <code>persistent</code> props are set to true, clicking outside of the drawer or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user).",pushContent:"The <code>push-content</code> prop can be used on <code>left</code> and <code>right</code> positions.<br>It will allow the drawer to push the content either on the left or right when it's open.<br>To use the push-content layout, an explicit drawer <code>width</code> is required (don't only set a width via CSS). Any valid CSS width will work.<br>The pushable content should be provided via the <code>pushable</code> slot.",fitContent:"Fits the drawer to its content (sets the width and height to auto).",width:"Sets a width on the drawer when its position is <code>left</code> or <code>right</code>.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",height:"Sets a height on the drawer when its position is <code>top</code> or <code>bottom</code>.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",absolute:"Sets the CSS position of the drawer container to <code>absolute</code>.",zIndex:"Applies a z-index (positive or negative integer) to the drawer.",color:`Applies a color to the drawer's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the drawer's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,noOverlay:"Removes the default full screen overlay underneath the open drawer.",overlayColor:'Provide a custom background color for the drawer background overlay (<code>rgba(0, 0, 0, 0.3)</code> by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',overlayOpacity:"Provide a custom opacity for the drawer background overlay."},no={default:{description:"The drawer content."},pushable:{description:"When using the <code>push-content</code> prop, defines the outside HTML content to be pushed by the drawer when it opens."}},to={input:"Emitted on drawer close.<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted on drawer close.<br>Updates the v-model value in Vue 3 only.",close:"Emitted on drawer close."},ro={data:()=>({propsDescs:oo,slots:no}),computed:{props(){return k.props},events(){return k.emits.reduce((o,n)=>(o[n]={description:to[n]||""})&&o,{})}}};var ao=b(ro,[["render",eo]]);const so=t("w-drawer");function lo(o,n,f,g,v,u){const i=c("ui-component-title"),s=c("examples"),d=c("api");return h(),m("main",null,[r(i,null,{default:e(()=>[so]),_:1}),r(s),r(d)])}const io={components:{Examples:Qe,Api:ao}};var po=b(io,[["render",lo]]);export{po as default};
