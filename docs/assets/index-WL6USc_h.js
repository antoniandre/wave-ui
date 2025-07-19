import{r as p,g as f,o as g,a as r,b as s,h as D,p as C,w as o,e as t,t as m,n as P,v as O,_ as c,M as $}from"./index-CrSk8JxI.js";const V={class:"py12 w-flex column align-center justify-center"},S={class:"py12 w-flex column align-center justify-center"},N={class:"w-flex pa2 align-center wrap"},A={class:"w-flex align-center py1"},j={class:"w-flex align-center justify-center fill-height"};function R(n,e,v,h,k,w){const i=p("title-link"),a=p("w-button"),d=p("example"),u=p("w-drawer"),T=p("w-card"),y=p("w-icon"),b=p("ssh-pre");return g(),f("div",null,[r(i,{h2:""},{default:o(()=>e[29]||(e[29]=[t("Basic")])),_:1,__:[29]}),r(d,{"content-class":"w-flex align-center wrap"},{pug:o(()=>e[31]||(e[31]=[t(`w-button(@click="openDrawer = true" outline) Open drawer

w-drawer(v-model="openDrawer")`)])),html:o(()=>e[32]||(e[32]=[t(`<w-button @click="openDrawer = true" outline>
  Open drawer
</w-button>

<w-drawer v-model="openDrawer" />`)])),js:o(()=>e[33]||(e[33]=[t(`data: () => ({
  openDrawer: false
})
`)])),default:o(()=>[r(a,{onClick:e[0]||(e[0]=l=>n.openRightDrawer=!n.openRightDrawer),outline:""},{default:o(()=>e[30]||(e[30]=[t("Open drawer")])),_:1,__:[30]})]),_:1}),r(i,{h2:""},{default:o(()=>e[34]||(e[34]=[t("Positions")])),_:1,__:[34]}),r(d,{"content-class":"w-flex align-center wrap"},{pug:o(()=>e[39]||(e[39]=[t(`w-button.ma1(
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
`)])),html:o(()=>e[40]||(e[40]=[t(`<w-button
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
`)])),js:o(()=>e[41]||(e[41]=[t(`data: () => ({
  openDrawer: false
}),

computed: {
  position () {
    return this.openDrawer || 'right'
  }
}
`)])),default:o(()=>[r(a,{class:"ma1",onClick:e[1]||(e[1]=l=>n.openLeftDrawer=!n.openLeftDrawer),outline:""},{default:o(()=>e[35]||(e[35]=[t("Open left drawer")])),_:1,__:[35]}),r(a,{class:"ma1",onClick:e[2]||(e[2]=l=>n.openRightDrawer=!n.openRightDrawer),outline:""},{default:o(()=>e[36]||(e[36]=[t("Open right drawer")])),_:1,__:[36]}),r(a,{class:"ma1",onClick:e[3]||(e[3]=l=>{n.noOverlay=!1,n.openTopDrawer=!n.openTopDrawer}),outline:""},{default:o(()=>e[37]||(e[37]=[t("Open top drawer")])),_:1,__:[37]}),r(a,{class:"ma1",onClick:e[4]||(e[4]=l=>n.openBottomDrawer=!n.openBottomDrawer),outline:""},{default:o(()=>e[38]||(e[38]=[t("Open bottom drawer")])),_:1,__:[38]})]),_:1}),r(i,{h3:""},{default:o(()=>e[42]||(e[42]=[t("Absolute position")])),_:1,__:[42]}),e[89]||(e[89]=s("p",null,[t("The "),s("strong",{class:"code"},"w-drawer"),t(` component can be placed in a deeper structure than the root of
the site.`)],-1)),r(d,{"content-class":"relative justify-center d-flex"},{pug:o(()=>[t('w-card.ma6.grow.text-center(bg-color="'+m(n.$store.state.darkMode?"grey-dark6":"amber-light5")+`" title="w-card")
  w-button.my12(@click="openDrawer = true" text) Open drawer

  w-drawer(v-model="openDrawer" absolute width="160px")`,1)]),html:o(()=>[t(`<w-card
  class="ma6 grow text-center"
  bg-color="`+m(n.$store.state.darkMode?"grey-dark6":"amber-light5")+`"
  title="w-card">
  <w-button class="my12" @click="openDrawer = true" text>
    Open drawer
  </w-button>

  <w-drawer
    v-model="openDrawer"
    absolute
    width="160px">
  </w-drawer>
</w-card>`,1)]),js:o(()=>e[44]||(e[44]=[t(`data: () => ({
  openDrawer: false
})
`)])),default:o(()=>[r(T,{class:"ma6 grow text-center","bg-color":n.$store.state.darkMode?"grey-dark6":"amber-light5",title:"w-card"},{default:o(()=>[r(a,{class:"my12",onClick:e[5]||(e[5]=l=>n.openAbsoluteDrawer=!0),text:""},{default:o(()=>e[43]||(e[43]=[t("Open drawer")])),_:1,__:[43]}),r(u,{modelValue:n.openAbsoluteDrawer,"onUpdate:modelValue":e[6]||(e[6]=l=>n.openAbsoluteDrawer=l),absolute:"",width:"160px"},null,8,["modelValue"])]),_:1},8,["bg-color"])]),_:1}),r(i,{h2:""},{default:o(()=>e[45]||(e[45]=[t("Control width or height")])),_:1,__:[45]}),e[90]||(e[90]=D(`<p>The <strong class="code">w-drawer</strong> component accepts a <span class="code">width</span> or <span class="code">height</span> parameter
depending on its position on screen to override the default one.</p><p class="grey-light1"><span class="code grey-light1">width</span> and <span class="code grey-light1">height</span> are called so for simplicity but
they internally translate to <span class="code grey-light1">max-width</span> and <span class="code grey-light1">max-height</span>
to fit on small screens.
</p>`,2)),r(d,null,{pug:o(()=>e[47]||(e[47]=[t(`p.mb4 Open a blue 60px-height bottom drawer

w-button(@click="openDrawer = true" outline) Open drawer

w-drawer(
  v-model="openDrawer"
  bg-color="blue-light4"
  bottom
  height="60px")`)])),html:o(()=>e[48]||(e[48]=[t(`<p class="mb4">Open a blue 60px-height bottom drawer</p>
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
</w-drawer>`)])),js:o(()=>e[49]||(e[49]=[t(`data: () => ({
  openDrawer: false
})
`)])),default:o(()=>[e[50]||(e[50]=s("p",{class:"mb4"},"Open a blue 60px-height bottom drawer",-1)),r(a,{onClick:e[7]||(e[7]=l=>{n.bottomDrawerHeight="60px",n.openBottomDrawer=!0}),outline:""},{default:o(()=>e[46]||(e[46]=[t("Open drawer")])),_:1,__:[46]})]),_:1,__:[50]}),r(i,{h2:""},{default:o(()=>e[51]||(e[51]=[t("Push content")])),_:1,__:[51]}),e[91]||(e[91]=D(`<p>The <code>push-content</code> prop can be used on <code>left</code> and <code>right</code> positions.
It will allow the drawer to push the content either on the left or right when it&#39;s open.<br>
To use the push-content layout, an explicit drawer <code>width</code> is required (don&#39;t only set a
width via CSS). Any valid CSS width will work.<br>
The pushable content should be provided via the <code>pushable</code> slot.</p>`,1)),r(d,{"content-class":"relative pa0","blank-codepen":["css"]},{pug:o(()=>e[55]||(e[55]=[t(`w-drawer(
  v-model="openDrawer"
  push-content
  :overlay-opacity="0.15"
  width="160px")
  template(#pushable)
    w-flex.py12(column align-center justify-center)
      p.mb3 Pushable content
      w-button(@click="openDrawer = true" outline).
        Open drawer
  .ma2 Drawer content`)])),html:o(()=>e[56]||(e[56]=[t(`<w-drawer
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
</w-drawer>`)])),js:o(()=>e[57]||(e[57]=[t(`data: () => ({
  openDrawer: false
})
`)])),default:o(()=>[r(u,{modelValue:n.openPushContentRightDrawer,"onUpdate:modelValue":e[9]||(e[9]=l=>n.openPushContentRightDrawer=l),"push-content":"","overlay-opacity":.15,width:"160px"},{pushable:o(()=>[s("div",V,[e[53]||(e[53]=s("p",{class:"mb3"},"Pushable content",-1)),r(a,{onClick:e[8]||(e[8]=l=>n.openPushContentRightDrawer=!0),outline:""},{default:o(()=>e[52]||(e[52]=[t("Open drawer")])),_:1,__:[52]})])]),default:o(()=>[e[54]||(e[54]=s("div",{class:"ma2"},"Drawer content",-1))]),_:1,__:[54]},8,["modelValue"])]),_:1}),r(d,{"content-class":"relative pa0","blank-codepen":["css"]},{pug:o(()=>e[61]||(e[61]=[t(`w-drawer(
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
  .ma2 Drawer content`)])),html:o(()=>e[62]||(e[62]=[t(`<w-drawer
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
</w-drawer>`)])),js:o(()=>e[63]||(e[63]=[t(`data: () => ({
  openDrawer: false
})
`)])),default:o(()=>[r(u,{modelValue:n.openPushContentLeftDrawer,"onUpdate:modelValue":e[11]||(e[11]=l=>n.openPushContentLeftDrawer=l),"push-content":"","overlay-opacity":.15,left:"",width:"160px"},{pushable:o(()=>[s("div",S,[e[59]||(e[59]=s("p",{class:"mb3"},"Pushable content",-1)),r(a,{onClick:e[10]||(e[10]=l=>n.openPushContentLeftDrawer=!0),outline:""},{default:o(()=>e[58]||(e[58]=[t("Open drawer")])),_:1,__:[58]})])]),default:o(()=>[e[60]||(e[60]=s("div",{class:"ma2"},"Drawer content",-1))]),_:1,__:[60]},8,["modelValue"])]),_:1}),r(i,{h2:""},{default:o(()=>e[64]||(e[64]=[t("No overlay & custom color overlay")])),_:1,__:[64]}),r(d,{"content-class":"w-flex align-center wrap"},{pug:o(()=>e[68]||(e[68]=[t(`span Open top drawer with a:

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
    icon="wi-cross")`)])),html:o(()=>e[69]||(e[69]=[t(`<span>Open top drawer with a:</span>
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
</w-drawer>`)])),js:o(()=>e[70]||(e[70]=[t(`data: () => ({
  openDrawer: false,
  noOverlay: false,
  overlayColor: ''
})
`)])),default:o(()=>[e[71]||(e[71]=s("span",null,"Open top drawer with a:",-1)),r(a,{class:"ma1",onClick:e[12]||(e[12]=l=>{n.noOverlay=!1,n.overlayColor="rgba(35, 71, 129, 0.5)",n.openTopDrawer=!n.openTopDrawer}),outline:""},{default:o(()=>e[65]||(e[65]=[t("Custom color overlay")])),_:1,__:[65]}),r(a,{class:"ma1",onClick:e[13]||(e[13]=l=>{n.noOverlay=!1,n.overlayColor="transparent",n.openTopDrawer=!n.openTopDrawer}),outline:""},{default:o(()=>e[66]||(e[66]=[t("Transparent overlay")])),_:1,__:[66]}),r(a,{class:"ma1",onClick:e[14]||(e[14]=l=>{n.noOverlay=!0,n.overlayColor="",n.openTopDrawer=!n.openTopDrawer}),outline:""},{default:o(()=>e[67]||(e[67]=[t("No overlay")])),_:1,__:[67]})]),_:1,__:[71]}),e[92]||(e[92]=s("p",{class:"mt4"},[s("strong",null,"Note:"),t(` with no overlay the underneath content will be clickable and the drawer
will not close.
To allow closing the drawer when clicking outside of it, you can set a transparent background
on the overlay.
`)],-1)),r(i,{h2:""},{default:o(()=>e[72]||(e[72]=[t("Persistent drawers")])),_:1,__:[72]}),e[93]||(e[93]=s("p",null,"A persistent drawer stays open when clicking outside or pressing the escape key.",-1)),r(d,{"content-class":"w-flex align-center"},{pug:o(()=>e[74]||(e[74]=[t(`w-button(@click="openDrawer = true" outline).
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
    icon="wi-cross")`)])),html:o(()=>e[75]||(e[75]=[t(`<w-button
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
</w-drawer>`)])),js:o(()=>e[76]||(e[76]=[t(`data: () => ({
  openDrawer: false
})
`)])),default:o(()=>[r(a,{onClick:e[15]||(e[15]=l=>{n.persistent=!0,n.openBottomDrawer=!0}),outline:""},{default:o(()=>e[73]||(e[73]=[t("Persistent drawer")])),_:1,__:[73]})]),_:1}),r(i,{h2:""},{default:o(()=>e[77]||(e[77]=[t("Cookie notice example")])),_:1,__:[77]}),e[94]||(e[94]=s("p",null,`The cookie notice is a good use case of a persistent drawer, it will not let you click
anything until you accept.`,-1)),r(d,{"content-class":"w-flex align-center"},{pug:o(()=>[t(`w-button(@click="showCookieNotice = true" outline).
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
      span.`+m(n.$store.state.darkMode?"grey-light4":"grey-dark3")+`.
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
        <span class="`+m(n.$store.state.darkMode?"grey-light4":"grey-dark3")+`">
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
</w-drawer>`,1)]),js:o(()=>e[83]||(e[83]=[t(`data: () => ({
  showCookieNotice: false
})
`)])),default:o(()=>[r(a,{onClick:e[16]||(e[16]=l=>n.showCookieNotice=!0),outline:""},{default:o(()=>e[78]||(e[78]=[t("Show the cookie notice")])),_:1,__:[78]}),r(u,{modelValue:n.showCookieNotice,"onUpdate:modelValue":e[18]||(e[18]=l=>n.showCookieNotice=l),"content-class":"cookie-notice","overlay-color":"transparent",persistent:"","fit-content":"",bottom:""},{default:o(()=>[s("div",N,[s("div",A,[r(y,{class:"mr3",xl:""},{default:o(()=>e[79]||(e[79]=[t("mdi mdi-cookie")])),_:1,__:[79]}),s("span",{class:P(n.$store.state.darkMode?"grey-light4":"grey-dark3")},`Our website uses cookies to give you the best user experience.
To continue browsing this site you must agree.`,2)]),e[82]||(e[82]=s("div",{class:"spacer"},null,-1)),r(a,{sm:"",onClick:e[17]||(e[17]=l=>n.showCookieNotice=!1)},{default:o(()=>[r(y,{class:"mr2"},{default:o(()=>e[80]||(e[80]=[t("mdi mdi-check")])),_:1,__:[80]}),e[81]||(e[81]=t("I agree"))]),_:1,__:[81]})])]),_:1},8,["modelValue"])]),_:1}),e[95]||(e[95]=s("p",null,`You can then store the result of the acceptation in the localStorage when the user clicks
the button.`,-1)),C(r(b,{dark:n.$store.state.darkMode,language:"html-vue",label:"Template"},{default:o(()=>e[84]||(e[84]=[t(`<w-button
  class="ml-auto"
  @click="acceptCookies"
  sm
  absolute>
  <w-icon class="mr2">wi-check</w-icon>
  I agree
</w-button>
`)])),_:1,__:[84]},8,["dark"]),[[O,!n.$store.state.usePug]]),C(r(b,{dark:n.$store.state.darkMode,language:"pug",label:"Template"},{default:o(()=>e[85]||(e[85]=[t(`w-button.ml-auto(@click="acceptCookies" sm absolute)
  w-icon.mr2 wi-check
  | I agree
`)])),_:1,__:[85]},8,["dark"]),[[O,n.$store.state.usePug]]),r(b,{language:"js",label:"Javascript",dark:n.$store.state.darkMode},{default:o(()=>e[86]||(e[86]=[t(`acceptCookies () {
  localStorage.acceptCookies = 'yes'
  this.showCookieNotice = false
}
`)])),_:1,__:[86]},8,["dark"]),r(u,{modelValue:n.openLeftDrawer,"onUpdate:modelValue":e[21]||(e[21]=l=>n.openLeftDrawer=l),left:""},{default:o(()=>[r(a,{class:"button--close",onClick:e[19]||(e[19]=l=>n.openLeftDrawer=!n.openLeftDrawer),sm:"",outline:"",absolute:"",round:"",icon:"wi-cross"}),s("div",j,[r(a,{onClick:e[20]||(e[20]=l=>{n.openLeftDrawer=!1,n.openRightDrawer=!0})},{default:o(()=>e[87]||(e[87]=[t(`Show right drawer
`)])),_:1,__:[87]})])]),_:1},8,["modelValue"]),r(u,{modelValue:n.openRightDrawer,"onUpdate:modelValue":e[23]||(e[23]=l=>n.openRightDrawer=l)},{default:o(()=>[r(a,{class:"button--close",onClick:e[22]||(e[22]=l=>n.openRightDrawer=!n.openRightDrawer),sm:"",outline:"",absolute:"",round:"",icon:"wi-cross"})]),_:1},8,["modelValue"]),r(u,{modelValue:n.openTopDrawer,"onUpdate:modelValue":e[25]||(e[25]=l=>n.openTopDrawer=l),top:"","no-overlay":n.noOverlay,"overlay-color":n.overlayColor},{default:o(()=>[r(a,{class:"button--close",onClick:e[24]||(e[24]=l=>n.openTopDrawer=!n.openTopDrawer),sm:"",outline:"",absolute:"",round:"",icon:"wi-cross"})]),_:1},8,["modelValue","no-overlay","overlay-color"]),r(u,{modelValue:n.openBottomDrawer,"onUpdate:modelValue":e[27]||(e[27]=l=>n.openBottomDrawer=l),bottom:"",persistent:n.persistent,height:n.bottomDrawerHeight,"bg-color":"blue-light4",onClose:e[28]||(e[28]=l=>{n.bottomDrawerHeight=null,n.persistent=!1})},{default:o(()=>[r(a,{class:"button--close",sm:"",onClick:e[26]||(e[26]=l=>n.openBottomDrawer=!n.openBottomDrawer),outline:"",absolute:"",round:"",icon:"wi-cross"}),e[88]||(e[88]=s("div",{class:"w-flex fill-height align-center justify-center black"},"You can customize the background color as well.",-1))]),_:1,__:[88]},8,["modelValue","persistent","height"])])}const B={data:()=>({openLeftDrawer:!1,openRightDrawer:!1,openTopDrawer:!1,openBottomDrawer:!1,openAbsoluteDrawer:!1,openPushContentLeftDrawer:!1,openPushContentRightDrawer:!1,noOverlay:!1,overlayColor:"",bottomDrawerHeight:0,persistent:!1,showCookieNotice:!1})},L=c(B,[["render",R]]);function M(n,e,v,h,k,w){const i=p("title-link"),a=p("component-api");return g(),f("div",null,[e[1]||(e[1]=s("div",{class:"w-divider my12"},null,-1)),r(i,{class:"title1",h2:""},{default:o(()=>e[0]||(e[0]=[t("API")])),_:1,__:[0]}),r(a,{class:"mt0",items:w.props,descriptions:n.propsDescs,title:"Props"},null,8,["items","descriptions"]),r(a,{items:n.slots,title:"Slots"},null,8,["items"]),r(a,{items:w.events,title:"Events"},null,8,["items"])])}const U={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the drawer. Any truthy value will show the drawer whereas any falsy value will hide it.',left:"Places the drawer at the left of the screen, or at the left of its container when the <code>absolute</code> prop is set to true.",right:"Places the drawer at the right of the screen, or at the right of its container when the <code>absolute</code> prop is set to true.",top:"Places the drawer at the top of the screen, or at the top of its container when the <code>absolute</code> prop is set to true.",bottom:"Places the drawer at the bottom of the screen, or at the bottom of its container when the <code>absolute</code> prop is set to true.",persistent:"When set to true, clicking outside of the drawer or pressing the escape key will not close the drawer.<br>A bounce animation will give the user a feedback that this drawer needs attention and cannot be closed.",persistentNoAnimation:"When this and the <code>persistent</code> props are set to true, clicking outside of the drawer or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user).",pushContent:"The <code>push-content</code> prop can be used on <code>left</code> and <code>right</code> positions.<br>It will allow the drawer to push the content either on the left or right when it's open.<br>To use the push-content layout, an explicit drawer <code>width</code> is required (don't only set a width via CSS). Any valid CSS width will work.<br>The pushable content should be provided via the <code>pushable</code> slot.",fitContent:"Fits the drawer to its content (sets the width and height to auto).",width:"Sets a width on the drawer when its position is <code>left</code> or <code>right</code>.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",height:"Sets a height on the drawer when its position is <code>top</code> or <code>bottom</code>.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",absolute:"Sets the CSS position of the drawer container to <code>absolute</code>.",zIndex:"Applies a z-index (positive or negative integer) to the drawer.",color:`Applies a color to the drawer's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the drawer's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,noOverlay:"Removes the default full screen overlay underneath the open drawer.",overlayColor:'Provide a custom background color for the drawer background overlay (<code>rgba(0, 0, 0, 0.3)</code> by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',overlayOpacity:"Provide a custom opacity for the drawer background overlay.",drawerClass:"Applies a custom CSS class to the drawer container."},I={default:{description:"The drawer content."},pushable:{description:"When using the <code>push-content</code> prop, defines the outside HTML content to be pushed by the drawer when it opens."}},E={input:"Emitted on drawer close.<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted on drawer close.<br>Updates the v-model value in Vue 3 only.",close:"Emitted on drawer close."},z={data:()=>({propsDescs:U,slots:I}),computed:{props(){return $.props},events(){return $.emits.reduce((n,e)=>(n[e]={description:E[e]||""})&&n,{})}}},H=c(z,[["render",M]]);function W(n,e,v,h,k,w){const i=p("ui-component-title"),a=p("examples"),d=p("api");return g(),f("main",null,[r(i,null,{default:o(()=>e[0]||(e[0]=[t("w-drawer")])),_:1,__:[0]}),r(a),r(d)])}const Y={components:{Examples:L,Api:H}},F=c(Y,[["render",W]]);export{F as default};
