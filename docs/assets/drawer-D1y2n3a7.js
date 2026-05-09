import{A as e,G as t,K as n,P as r,c as i,d as a,g as o,h as s,m as c,vt as l,xt as u}from"./runtime-core.esm-bundler-BuLlhxCm.js";import{t as d}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{O as f,X as p}from"./index-CsKLTiYy.js";var m={class:`py12 w-flex column align-center justify-center`},h={class:`py12 w-flex column align-center justify-center`},g={class:`w-flex pa2 align-center wrap`},_={class:`w-flex align-center py1`},v={class:`w-flex align-center justify-center fill-height`};function y(d,f,y,b,x,S){let C=r(`title-link`),w=r(`w-button`),T=r(`example`),E=r(`w-drawer`),D=r(`w-card`),O=r(`w-icon`),k=r(`ssh-pre`);return e(),a(`div`,null,[o(C,{h2:``},{default:t(()=>[...f[29]||=[s(`Basic`,-1)]]),_:1}),o(T,{"content-class":`w-flex align-center wrap`},{pug:t(()=>[...f[31]||=[s(`w-button(@click="openDrawer = true" outline) Open drawer

w-drawer(v-model="openDrawer")`,-1)]]),html:t(()=>[...f[32]||=[s(`<w-button @click="openDrawer = true" outline>
  Open drawer
</w-button>

<w-drawer v-model="openDrawer" />`,-1)]]),js:t(()=>[...f[33]||=[s(`data: () => ({
  openDrawer: false
})
`,-1)]]),default:t(()=>[o(w,{onClick:f[0]||=e=>d.openRightDrawer=!d.openRightDrawer,outline:``},{default:t(()=>[...f[30]||=[s(`Open drawer`,-1)]]),_:1})]),_:1}),o(C,{h2:``},{default:t(()=>[...f[34]||=[s(`Positions`,-1)]]),_:1}),o(T,{"content-class":`w-flex align-center wrap`},{pug:t(()=>[...f[39]||=[s(`w-button.ma1(
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
`,-1)]]),html:t(()=>[...f[40]||=[s(`<w-button
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
`,-1)]]),js:t(()=>[...f[41]||=[s(`data: () => ({
  openDrawer: false
}),

computed: {
  position () {
    return this.openDrawer || 'right'
  }
}
`,-1)]]),default:t(()=>[o(w,{class:`ma1`,onClick:f[1]||=e=>d.openLeftDrawer=!d.openLeftDrawer,outline:``},{default:t(()=>[...f[35]||=[s(`Open left drawer`,-1)]]),_:1}),o(w,{class:`ma1`,onClick:f[2]||=e=>d.openRightDrawer=!d.openRightDrawer,outline:``},{default:t(()=>[...f[36]||=[s(`Open right drawer`,-1)]]),_:1}),o(w,{class:`ma1`,onClick:f[3]||=e=>{d.noOverlay=!1,d.openTopDrawer=!d.openTopDrawer},outline:``},{default:t(()=>[...f[37]||=[s(`Open top drawer`,-1)]]),_:1}),o(w,{class:`ma1`,onClick:f[4]||=e=>d.openBottomDrawer=!d.openBottomDrawer,outline:``},{default:t(()=>[...f[38]||=[s(`Open bottom drawer`,-1)]]),_:1})]),_:1}),o(C,{h3:``},{default:t(()=>[...f[42]||=[s(`Absolute position`,-1)]]),_:1}),f[89]||=i(`p`,null,[s(`The `),i(`strong`,{class:`code`},`w-drawer`),s(` component can be placed in a deeper structure than the root of
the site.`)],-1),o(T,{"content-class":`relative justify-center d-flex`},{pug:t(()=>[s(`w-card.ma6.grow.text-center(bg-color="`+u(d.$store.state.darkMode?`grey-dark6`:`amber-light5`)+`" title="w-card")
  w-button.my12(@click="openDrawer = true" text) Open drawer

  w-drawer(v-model="openDrawer" absolute width="160px")`,1)]),html:t(()=>[s(`<w-card
  class="ma6 grow text-center"
  bg-color="`+u(d.$store.state.darkMode?`grey-dark6`:`amber-light5`)+`"
  title="w-card">
  <w-button class="my12" @click="openDrawer = true" text>
    Open drawer
  </w-button>

  <w-drawer
    v-model="openDrawer"
    absolute
    width="160px">
  </w-drawer>
</w-card>`,1)]),js:t(()=>[...f[44]||=[s(`data: () => ({
  openDrawer: false
})
`,-1)]]),default:t(()=>[o(D,{class:`ma6 grow text-center`,"bg-color":d.$store.state.darkMode?`grey-dark6`:`amber-light5`,title:`w-card`},{default:t(()=>[o(w,{class:`my12`,onClick:f[5]||=e=>d.openAbsoluteDrawer=!0,text:``},{default:t(()=>[...f[43]||=[s(`Open drawer`,-1)]]),_:1}),o(E,{modelValue:d.openAbsoluteDrawer,"onUpdate:modelValue":f[6]||=e=>d.openAbsoluteDrawer=e,absolute:``,width:`160px`},null,8,[`modelValue`])]),_:1},8,[`bg-color`])]),_:1}),o(C,{h2:``},{default:t(()=>[...f[45]||=[s(`Control width or height`,-1)]]),_:1}),f[90]||=c(`<p>The <strong class="code">w-drawer</strong> component accepts a <span class="code">width</span> or <span class="code">height</span> parameter
depending on its position on screen to override the default one.</p><p class="grey-light1"><span class="code grey-light1">width</span> and <span class="code grey-light1">height</span> are called so for simplicity but
they internally translate to <span class="code grey-light1">max-width</span> and <span class="code grey-light1">max-height</span>
to fit on small screens.
</p>`,2),o(T,null,{pug:t(()=>[...f[47]||=[s(`p.mb4 Open a blue 60px-height bottom drawer

w-button(@click="openDrawer = true" outline) Open drawer

w-drawer(
  v-model="openDrawer"
  bg-color="blue-light4"
  bottom
  height="60px")`,-1)]]),html:t(()=>[...f[48]||=[s(`<p class="mb4">Open a blue 60px-height bottom drawer</p>
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
</w-drawer>`,-1)]]),js:t(()=>[...f[49]||=[s(`data: () => ({
  openDrawer: false
})
`,-1)]]),default:t(()=>[f[50]||=i(`p`,{class:`mb4`},`Open a blue 60px-height bottom drawer`,-1),o(w,{onClick:f[7]||=e=>{d.bottomDrawerHeight=`60px`,d.openBottomDrawer=!0},outline:``},{default:t(()=>[...f[46]||=[s(`Open drawer`,-1)]]),_:1})]),_:1}),o(C,{h2:``},{default:t(()=>[...f[51]||=[s(`Push content`,-1)]]),_:1}),f[91]||=c(`<p>The <code>push-content</code> prop can be used on <code>left</code> and <code>right</code> positions.
It will allow the drawer to push the content either on the left or right when it&#39;s open.<br>
To use the push-content layout, an explicit drawer <code>width</code> is required (don&#39;t only set a
width via CSS). Any valid CSS width will work.<br>
The pushable content should be provided via the <code>pushable</code> slot.</p>`,1),o(T,{"content-class":`relative pa0`,"blank-codepen":[`css`]},{pug:t(()=>[...f[55]||=[s(`w-drawer(
  v-model="openDrawer"
  push-content
  :overlay-opacity="0.15"
  width="160px")
  template(#pushable)
    w-flex.py12(column align-center justify-center)
      p.mb3 Pushable content
      w-button(@click="openDrawer = true" outline).
        Open drawer
  .ma2 Drawer content`,-1)]]),html:t(()=>[...f[56]||=[s(`<w-drawer
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
</w-drawer>`,-1)]]),js:t(()=>[...f[57]||=[s(`data: () => ({
  openDrawer: false
})
`,-1)]]),default:t(()=>[o(E,{modelValue:d.openPushContentRightDrawer,"onUpdate:modelValue":f[9]||=e=>d.openPushContentRightDrawer=e,"push-content":``,"overlay-opacity":.15,width:`160px`},{pushable:t(()=>[i(`div`,m,[f[53]||=i(`p`,{class:`mb3`},`Pushable content`,-1),o(w,{onClick:f[8]||=e=>d.openPushContentRightDrawer=!0,outline:``},{default:t(()=>[...f[52]||=[s(`Open drawer`,-1)]]),_:1})])]),default:t(()=>[f[54]||=i(`div`,{class:`ma2`},`Drawer content`,-1)]),_:1},8,[`modelValue`])]),_:1}),o(T,{"content-class":`relative pa0`,"blank-codepen":[`css`]},{pug:t(()=>[...f[61]||=[s(`w-drawer(
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
  .ma2 Drawer content`,-1)]]),html:t(()=>[...f[62]||=[s(`<w-drawer
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
</w-drawer>`,-1)]]),js:t(()=>[...f[63]||=[s(`data: () => ({
  openDrawer: false
})
`,-1)]]),default:t(()=>[o(E,{modelValue:d.openPushContentLeftDrawer,"onUpdate:modelValue":f[11]||=e=>d.openPushContentLeftDrawer=e,"push-content":``,"overlay-opacity":.15,left:``,width:`160px`},{pushable:t(()=>[i(`div`,h,[f[59]||=i(`p`,{class:`mb3`},`Pushable content`,-1),o(w,{onClick:f[10]||=e=>d.openPushContentLeftDrawer=!0,outline:``},{default:t(()=>[...f[58]||=[s(`Open drawer`,-1)]]),_:1})])]),default:t(()=>[f[60]||=i(`div`,{class:`ma2`},`Drawer content`,-1)]),_:1},8,[`modelValue`])]),_:1}),o(C,{h2:``},{default:t(()=>[...f[64]||=[s(`No overlay & custom color overlay`,-1)]]),_:1}),o(T,{"content-class":`w-flex align-center wrap`},{pug:t(()=>[...f[68]||=[s(`span Open top drawer with a:

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
    icon="wi-cross")`,-1)]]),html:t(()=>[...f[69]||=[s(`<span>Open top drawer with a:</span>
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
</w-drawer>`,-1)]]),js:t(()=>[...f[70]||=[s(`data: () => ({
  openDrawer: false,
  noOverlay: false,
  overlayColor: ''
})
`,-1)]]),default:t(()=>[f[71]||=i(`span`,null,`Open top drawer with a:`,-1),o(w,{class:`ma1`,onClick:f[12]||=e=>{d.noOverlay=!1,d.overlayColor=`rgba(35, 71, 129, 0.5)`,d.openTopDrawer=!d.openTopDrawer},outline:``},{default:t(()=>[...f[65]||=[s(`Custom color overlay`,-1)]]),_:1}),o(w,{class:`ma1`,onClick:f[13]||=e=>{d.noOverlay=!1,d.overlayColor=`transparent`,d.openTopDrawer=!d.openTopDrawer},outline:``},{default:t(()=>[...f[66]||=[s(`Transparent overlay`,-1)]]),_:1}),o(w,{class:`ma1`,onClick:f[14]||=e=>{d.noOverlay=!0,d.overlayColor=``,d.openTopDrawer=!d.openTopDrawer},outline:``},{default:t(()=>[...f[67]||=[s(`No overlay`,-1)]]),_:1})]),_:1}),f[92]||=i(`p`,{class:`mt4`},[i(`strong`,null,`Note:`),s(` with no overlay the underneath content will be clickable and the drawer
will not close.
To allow closing the drawer when clicking outside of it, you can set a transparent background
on the overlay.
`)],-1),o(C,{h2:``},{default:t(()=>[...f[72]||=[s(`Persistent drawers`,-1)]]),_:1}),f[93]||=i(`p`,null,`A persistent drawer stays open when clicking outside or pressing the escape key.`,-1),o(T,{"content-class":`w-flex align-center`},{pug:t(()=>[...f[74]||=[s(`w-button(@click="openDrawer = true" outline).
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
    icon="wi-cross")`,-1)]]),html:t(()=>[...f[75]||=[s(`<w-button
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
</w-drawer>`,-1)]]),js:t(()=>[...f[76]||=[s(`data: () => ({
  openDrawer: false
})
`,-1)]]),default:t(()=>[o(w,{onClick:f[15]||=e=>{d.persistent=!0,d.openBottomDrawer=!0},outline:``},{default:t(()=>[...f[73]||=[s(`Persistent drawer`,-1)]]),_:1})]),_:1}),o(C,{h2:``},{default:t(()=>[...f[77]||=[s(`Cookie notice example`,-1)]]),_:1}),f[94]||=i(`p`,null,`The cookie notice is a good use case of a persistent drawer, it will not let you click
anything until you accept.`,-1),o(T,{"content-class":`w-flex align-center`},{pug:t(()=>[s(`w-button(@click="showCookieNotice = true" outline).
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
      span.`+u(d.$store.state.darkMode?`grey-light4`:`grey-dark3`)+`.
        Our website uses cookies to give you the best user experience.
        To continue browsing this site you must agree.
    .spacer
    w-button(sm @click="showCookieNotice = false")
      w-icon.mr2 mdi mdi-check
      | I agree`,1)]),html:t(()=>[s(`<w-button
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
        <span class="`+u(d.$store.state.darkMode?`grey-light4`:`grey-dark3`)+`">
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
</w-drawer>`,1)]),js:t(()=>[...f[83]||=[s(`data: () => ({
  showCookieNotice: false
})
`,-1)]]),default:t(()=>[o(w,{onClick:f[16]||=e=>d.showCookieNotice=!0,outline:``},{default:t(()=>[...f[78]||=[s(`Show the cookie notice`,-1)]]),_:1}),o(E,{modelValue:d.showCookieNotice,"onUpdate:modelValue":f[18]||=e=>d.showCookieNotice=e,"content-class":`cookie-notice`,"overlay-color":`transparent`,persistent:``,"fit-content":``,bottom:``},{default:t(()=>[i(`div`,g,[i(`div`,_,[o(O,{class:`mr3`,xl:``},{default:t(()=>[...f[79]||=[s(`mdi mdi-cookie`,-1)]]),_:1}),i(`span`,{class:l(d.$store.state.darkMode?`grey-light4`:`grey-dark3`)},`Our website uses cookies to give you the best user experience.
To continue browsing this site you must agree.`,2)]),f[82]||=i(`div`,{class:`spacer`},null,-1),o(w,{sm:``,onClick:f[17]||=e=>d.showCookieNotice=!1},{default:t(()=>[o(O,{class:`mr2`},{default:t(()=>[...f[80]||=[s(`mdi mdi-check`,-1)]]),_:1}),f[81]||=s(`I agree`,-1)]),_:1})])]),_:1},8,[`modelValue`])]),_:1}),f[95]||=i(`p`,null,`You can then store the result of the acceptation in the localStorage when the user clicks
the button.`,-1),n(o(k,{dark:d.$store.state.darkMode,language:`html-vue`,label:`Template`},{default:t(()=>[...f[84]||=[s(`<w-button
  class="ml-auto"
  @click="acceptCookies"
  sm
  absolute>
  <w-icon class="mr2">wi-check</w-icon>
  I agree
</w-button>
`,-1)]]),_:1},8,[`dark`]),[[p,!d.$store.state.usePug]]),n(o(k,{dark:d.$store.state.darkMode,language:`pug`,label:`Template`},{default:t(()=>[...f[85]||=[s(`w-button.ml-auto(@click="acceptCookies" sm absolute)
  w-icon.mr2 wi-check
  | I agree
`,-1)]]),_:1},8,[`dark`]),[[p,d.$store.state.usePug]]),o(k,{language:`js`,label:`Javascript`,dark:d.$store.state.darkMode},{default:t(()=>[...f[86]||=[s(`acceptCookies () {
  localStorage.acceptCookies = 'yes'
  this.showCookieNotice = false
}
`,-1)]]),_:1},8,[`dark`]),o(E,{modelValue:d.openLeftDrawer,"onUpdate:modelValue":f[21]||=e=>d.openLeftDrawer=e,left:``},{default:t(()=>[o(w,{class:`button--close`,onClick:f[19]||=e=>d.openLeftDrawer=!d.openLeftDrawer,sm:``,outline:``,absolute:``,round:``,icon:`wi-cross`}),i(`div`,v,[o(w,{onClick:f[20]||=e=>{d.openLeftDrawer=!1,d.openRightDrawer=!0}},{default:t(()=>[...f[87]||=[s(`Show right drawer
`,-1)]]),_:1})])]),_:1},8,[`modelValue`]),o(E,{modelValue:d.openRightDrawer,"onUpdate:modelValue":f[23]||=e=>d.openRightDrawer=e},{default:t(()=>[o(w,{class:`button--close`,onClick:f[22]||=e=>d.openRightDrawer=!d.openRightDrawer,sm:``,outline:``,absolute:``,round:``,icon:`wi-cross`})]),_:1},8,[`modelValue`]),o(E,{modelValue:d.openTopDrawer,"onUpdate:modelValue":f[25]||=e=>d.openTopDrawer=e,top:``,"no-overlay":d.noOverlay,"overlay-color":d.overlayColor},{default:t(()=>[o(w,{class:`button--close`,onClick:f[24]||=e=>d.openTopDrawer=!d.openTopDrawer,sm:``,outline:``,absolute:``,round:``,icon:`wi-cross`})]),_:1},8,[`modelValue`,`no-overlay`,`overlay-color`]),o(E,{modelValue:d.openBottomDrawer,"onUpdate:modelValue":f[27]||=e=>d.openBottomDrawer=e,bottom:``,persistent:d.persistent,height:d.bottomDrawerHeight,"bg-color":`blue-light4`,onClose:f[28]||=e=>{d.bottomDrawerHeight=null,d.persistent=!1}},{default:t(()=>[o(w,{class:`button--close`,sm:``,onClick:f[26]||=e=>d.openBottomDrawer=!d.openBottomDrawer,outline:``,absolute:``,round:``,icon:`wi-cross`}),f[88]||=i(`div`,{class:`w-flex fill-height align-center justify-center black`},`You can customize the background color as well.`,-1)]),_:1},8,[`modelValue`,`persistent`,`height`])])}var b=d({data:()=>({openLeftDrawer:!1,openRightDrawer:!1,openTopDrawer:!1,openBottomDrawer:!1,openAbsoluteDrawer:!1,openPushContentLeftDrawer:!1,openPushContentRightDrawer:!1,noOverlay:!1,overlayColor:``,bottomDrawerHeight:0,persistent:!1,showCookieNotice:!1})},[[`render`,y]]);function x(n,c,l,u,d,f){let p=r(`title-link`),m=r(`component-api`);return e(),a(`div`,null,[c[1]||=i(`div`,{class:`w-divider my12`},null,-1),o(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[s(`API`,-1)]]),_:1}),o(m,{class:`mt0`,items:f.props,descriptions:n.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),o(m,{items:n.slots,title:`Slots`},null,8,[`items`]),o(m,{items:f.events,title:`Events`},null,8,[`items`])])}var S={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the drawer. Any truthy value will show the drawer whereas any falsy value will hide it.`,left:`Places the drawer at the left of the screen, or at the left of its container when the <code>absolute</code> prop is set to true.`,right:`Places the drawer at the right of the screen, or at the right of its container when the <code>absolute</code> prop is set to true.`,top:`Places the drawer at the top of the screen, or at the top of its container when the <code>absolute</code> prop is set to true.`,bottom:`Places the drawer at the bottom of the screen, or at the bottom of its container when the <code>absolute</code> prop is set to true.`,persistent:`When set to true, clicking outside of the drawer or pressing the escape key will not close the drawer.<br>A bounce animation will give the user a feedback that this drawer needs attention and cannot be closed.`,persistentNoAnimation:`When this and the <code>persistent</code> props are set to true, clicking outside of the drawer or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user).`,pushContent:`The <code>push-content</code> prop can be used on <code>left</code> and <code>right</code> positions.<br>It will allow the drawer to push the content either on the left or right when it's open.<br>To use the push-content layout, an explicit drawer <code>width</code> is required (don't only set a width via CSS). Any valid CSS width will work.<br>The pushable content should be provided via the <code>pushable</code> slot.`,fitContent:`Fits the drawer to its content (sets the width and height to auto).`,width:`Sets a width on the drawer when its position is <code>left</code> or <code>right</code>.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.`,height:`Sets a height on the drawer when its position is <code>top</code> or <code>bottom</code>.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.`,absolute:`Sets the CSS position of the drawer container to <code>absolute</code>.`,zIndex:`Applies a z-index (positive or negative integer) to the drawer.`,color:`Applies a color to the drawer's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the drawer's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,noOverlay:`Removes the default full screen overlay underneath the open drawer.`,overlayColor:`Provide a custom background color for the drawer background overlay (<code>rgba(0, 0, 0, 0.3)</code> by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,overlayOpacity:`Provide a custom opacity for the drawer background overlay.`,drawerClass:`Applies a custom CSS class to the drawer container.`},C={default:{description:`The drawer content.`},pushable:{description:`When using the <code>push-content</code> prop, defines the outside HTML content to be pushed by the drawer when it opens.`}},w={input:`Emitted on drawer close.<br>Updates the v-model value in Vue 2.x only.`,"update:modelValue":`Emitted on drawer close.<br>Updates the v-model value in Vue 3 only.`,close:`Emitted on drawer close.`},T=d({data:()=>({propsDescs:S,slots:C}),computed:{props(){return f.props},events(){return f.emits.reduce((e,t)=>(e[t]={description:w[t]||``})&&e,{})}}},[[`render`,x]]);function E(n,i,c,l,u,d){let f=r(`ui-component-title`),p=r(`examples`),m=r(`api`);return e(),a(`main`,null,[o(f,null,{default:t(()=>[...i[0]||=[s(`w-drawer`,-1)]]),_:1}),o(p),o(m)])}var D=d({components:{Examples:b,Api:T}},[[`render`,E]]);export{D as default};