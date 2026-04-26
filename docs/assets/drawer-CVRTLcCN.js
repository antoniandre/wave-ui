import{G as e,N as t,W as n,_t as r,bt as i,c as a,d as o,g as s,h as c,k as l,m as u}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as d}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{O as f,X as p}from"./index-D3Rumh9E.js";var m={class:`py12 w-flex column align-center justify-center`},h={class:`py12 w-flex column align-center justify-center`},g={class:`w-flex pa2 align-center wrap`},_={class:`w-flex align-center py1`},v={class:`w-flex align-center justify-center fill-height`};function y(d,f,y,b,x,S){let C=t(`title-link`),w=t(`w-button`),T=t(`example`),E=t(`w-drawer`),D=t(`w-card`),O=t(`w-icon`),k=t(`ssh-pre`);return l(),o(`div`,null,[s(C,{h2:``},{default:n(()=>[...f[29]||=[c(`Basic`,-1)]]),_:1}),s(T,{"content-class":`w-flex align-center wrap`},{pug:n(()=>[...f[31]||=[c(`w-button(@click="openDrawer = true" outline) Open drawer

w-drawer(v-model="openDrawer")`,-1)]]),html:n(()=>[...f[32]||=[c(`<w-button @click="openDrawer = true" outline>
  Open drawer
</w-button>

<w-drawer v-model="openDrawer" />`,-1)]]),js:n(()=>[...f[33]||=[c(`data: () => ({
  openDrawer: false
})
`,-1)]]),default:n(()=>[s(w,{onClick:f[0]||=e=>d.openRightDrawer=!d.openRightDrawer,outline:``},{default:n(()=>[...f[30]||=[c(`Open drawer`,-1)]]),_:1})]),_:1}),s(C,{h2:``},{default:n(()=>[...f[34]||=[c(`Positions`,-1)]]),_:1}),s(T,{"content-class":`w-flex align-center wrap`},{pug:n(()=>[...f[39]||=[c(`w-button.ma1(
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
`,-1)]]),html:n(()=>[...f[40]||=[c(`<w-button
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
`,-1)]]),js:n(()=>[...f[41]||=[c(`data: () => ({
  openDrawer: false
}),

computed: {
  position () {
    return this.openDrawer || 'right'
  }
}
`,-1)]]),default:n(()=>[s(w,{class:`ma1`,onClick:f[1]||=e=>d.openLeftDrawer=!d.openLeftDrawer,outline:``},{default:n(()=>[...f[35]||=[c(`Open left drawer`,-1)]]),_:1}),s(w,{class:`ma1`,onClick:f[2]||=e=>d.openRightDrawer=!d.openRightDrawer,outline:``},{default:n(()=>[...f[36]||=[c(`Open right drawer`,-1)]]),_:1}),s(w,{class:`ma1`,onClick:f[3]||=e=>{d.noOverlay=!1,d.openTopDrawer=!d.openTopDrawer},outline:``},{default:n(()=>[...f[37]||=[c(`Open top drawer`,-1)]]),_:1}),s(w,{class:`ma1`,onClick:f[4]||=e=>d.openBottomDrawer=!d.openBottomDrawer,outline:``},{default:n(()=>[...f[38]||=[c(`Open bottom drawer`,-1)]]),_:1})]),_:1}),s(C,{h3:``},{default:n(()=>[...f[42]||=[c(`Absolute position`,-1)]]),_:1}),f[89]||=a(`p`,null,[c(`The `),a(`strong`,{class:`code`},`w-drawer`),c(` component can be placed in a deeper structure than the root of
the site.`)],-1),s(T,{"content-class":`relative justify-center d-flex`},{pug:n(()=>[c(`w-card.ma6.grow.text-center(bg-color="`+i(d.$store.state.darkMode?`grey-dark6`:`amber-light5`)+`" title="w-card")
  w-button.my12(@click="openDrawer = true" text) Open drawer

  w-drawer(v-model="openDrawer" absolute width="160px")`,1)]),html:n(()=>[c(`<w-card
  class="ma6 grow text-center"
  bg-color="`+i(d.$store.state.darkMode?`grey-dark6`:`amber-light5`)+`"
  title="w-card">
  <w-button class="my12" @click="openDrawer = true" text>
    Open drawer
  </w-button>

  <w-drawer
    v-model="openDrawer"
    absolute
    width="160px">
  </w-drawer>
</w-card>`,1)]),js:n(()=>[...f[44]||=[c(`data: () => ({
  openDrawer: false
})
`,-1)]]),default:n(()=>[s(D,{class:`ma6 grow text-center`,"bg-color":d.$store.state.darkMode?`grey-dark6`:`amber-light5`,title:`w-card`},{default:n(()=>[s(w,{class:`my12`,onClick:f[5]||=e=>d.openAbsoluteDrawer=!0,text:``},{default:n(()=>[...f[43]||=[c(`Open drawer`,-1)]]),_:1}),s(E,{modelValue:d.openAbsoluteDrawer,"onUpdate:modelValue":f[6]||=e=>d.openAbsoluteDrawer=e,absolute:``,width:`160px`},null,8,[`modelValue`])]),_:1},8,[`bg-color`])]),_:1}),s(C,{h2:``},{default:n(()=>[...f[45]||=[c(`Control width or height`,-1)]]),_:1}),f[90]||=u(`<p>The <strong class="code">w-drawer</strong> component accepts a <span class="code">width</span> or <span class="code">height</span> parameter
depending on its position on screen to override the default one.</p><p class="grey-light1"><span class="code grey-light1">width</span> and <span class="code grey-light1">height</span> are called so for simplicity but
they internally translate to <span class="code grey-light1">max-width</span> and <span class="code grey-light1">max-height</span>
to fit on small screens.
</p>`,2),s(T,null,{pug:n(()=>[...f[47]||=[c(`p.mb4 Open a blue 60px-height bottom drawer

w-button(@click="openDrawer = true" outline) Open drawer

w-drawer(
  v-model="openDrawer"
  bg-color="blue-light4"
  bottom
  height="60px")`,-1)]]),html:n(()=>[...f[48]||=[c(`<p class="mb4">Open a blue 60px-height bottom drawer</p>
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
</w-drawer>`,-1)]]),js:n(()=>[...f[49]||=[c(`data: () => ({
  openDrawer: false
})
`,-1)]]),default:n(()=>[f[50]||=a(`p`,{class:`mb4`},`Open a blue 60px-height bottom drawer`,-1),s(w,{onClick:f[7]||=e=>{d.bottomDrawerHeight=`60px`,d.openBottomDrawer=!0},outline:``},{default:n(()=>[...f[46]||=[c(`Open drawer`,-1)]]),_:1})]),_:1}),s(C,{h2:``},{default:n(()=>[...f[51]||=[c(`Push content`,-1)]]),_:1}),f[91]||=u(`<p>The <code>push-content</code> prop can be used on <code>left</code> and <code>right</code> positions.
It will allow the drawer to push the content either on the left or right when it&#39;s open.<br>
To use the push-content layout, an explicit drawer <code>width</code> is required (don&#39;t only set a
width via CSS). Any valid CSS width will work.<br>
The pushable content should be provided via the <code>pushable</code> slot.</p>`,1),s(T,{"content-class":`relative pa0`,"blank-codepen":[`css`]},{pug:n(()=>[...f[55]||=[c(`w-drawer(
  v-model="openDrawer"
  push-content
  :overlay-opacity="0.15"
  width="160px")
  template(#pushable)
    w-flex.py12(column align-center justify-center)
      p.mb3 Pushable content
      w-button(@click="openDrawer = true" outline).
        Open drawer
  .ma2 Drawer content`,-1)]]),html:n(()=>[...f[56]||=[c(`<w-drawer
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
</w-drawer>`,-1)]]),js:n(()=>[...f[57]||=[c(`data: () => ({
  openDrawer: false
})
`,-1)]]),default:n(()=>[s(E,{modelValue:d.openPushContentRightDrawer,"onUpdate:modelValue":f[9]||=e=>d.openPushContentRightDrawer=e,"push-content":``,"overlay-opacity":.15,width:`160px`},{pushable:n(()=>[a(`div`,m,[f[53]||=a(`p`,{class:`mb3`},`Pushable content`,-1),s(w,{onClick:f[8]||=e=>d.openPushContentRightDrawer=!0,outline:``},{default:n(()=>[...f[52]||=[c(`Open drawer`,-1)]]),_:1})])]),default:n(()=>[f[54]||=a(`div`,{class:`ma2`},`Drawer content`,-1)]),_:1},8,[`modelValue`])]),_:1}),s(T,{"content-class":`relative pa0`,"blank-codepen":[`css`]},{pug:n(()=>[...f[61]||=[c(`w-drawer(
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
  .ma2 Drawer content`,-1)]]),html:n(()=>[...f[62]||=[c(`<w-drawer
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
</w-drawer>`,-1)]]),js:n(()=>[...f[63]||=[c(`data: () => ({
  openDrawer: false
})
`,-1)]]),default:n(()=>[s(E,{modelValue:d.openPushContentLeftDrawer,"onUpdate:modelValue":f[11]||=e=>d.openPushContentLeftDrawer=e,"push-content":``,"overlay-opacity":.15,left:``,width:`160px`},{pushable:n(()=>[a(`div`,h,[f[59]||=a(`p`,{class:`mb3`},`Pushable content`,-1),s(w,{onClick:f[10]||=e=>d.openPushContentLeftDrawer=!0,outline:``},{default:n(()=>[...f[58]||=[c(`Open drawer`,-1)]]),_:1})])]),default:n(()=>[f[60]||=a(`div`,{class:`ma2`},`Drawer content`,-1)]),_:1},8,[`modelValue`])]),_:1}),s(C,{h2:``},{default:n(()=>[...f[64]||=[c(`No overlay & custom color overlay`,-1)]]),_:1}),s(T,{"content-class":`w-flex align-center wrap`},{pug:n(()=>[...f[68]||=[c(`span Open top drawer with a:

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
    icon="wi-cross")`,-1)]]),html:n(()=>[...f[69]||=[c(`<span>Open top drawer with a:</span>
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
</w-drawer>`,-1)]]),js:n(()=>[...f[70]||=[c(`data: () => ({
  openDrawer: false,
  noOverlay: false,
  overlayColor: ''
})
`,-1)]]),default:n(()=>[f[71]||=a(`span`,null,`Open top drawer with a:`,-1),s(w,{class:`ma1`,onClick:f[12]||=e=>{d.noOverlay=!1,d.overlayColor=`rgba(35, 71, 129, 0.5)`,d.openTopDrawer=!d.openTopDrawer},outline:``},{default:n(()=>[...f[65]||=[c(`Custom color overlay`,-1)]]),_:1}),s(w,{class:`ma1`,onClick:f[13]||=e=>{d.noOverlay=!1,d.overlayColor=`transparent`,d.openTopDrawer=!d.openTopDrawer},outline:``},{default:n(()=>[...f[66]||=[c(`Transparent overlay`,-1)]]),_:1}),s(w,{class:`ma1`,onClick:f[14]||=e=>{d.noOverlay=!0,d.overlayColor=``,d.openTopDrawer=!d.openTopDrawer},outline:``},{default:n(()=>[...f[67]||=[c(`No overlay`,-1)]]),_:1})]),_:1}),f[92]||=a(`p`,{class:`mt4`},[a(`strong`,null,`Note:`),c(` with no overlay the underneath content will be clickable and the drawer
will not close.
To allow closing the drawer when clicking outside of it, you can set a transparent background
on the overlay.
`)],-1),s(C,{h2:``},{default:n(()=>[...f[72]||=[c(`Persistent drawers`,-1)]]),_:1}),f[93]||=a(`p`,null,`A persistent drawer stays open when clicking outside or pressing the escape key.`,-1),s(T,{"content-class":`w-flex align-center`},{pug:n(()=>[...f[74]||=[c(`w-button(@click="openDrawer = true" outline).
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
    icon="wi-cross")`,-1)]]),html:n(()=>[...f[75]||=[c(`<w-button
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
</w-drawer>`,-1)]]),js:n(()=>[...f[76]||=[c(`data: () => ({
  openDrawer: false
})
`,-1)]]),default:n(()=>[s(w,{onClick:f[15]||=e=>{d.persistent=!0,d.openBottomDrawer=!0},outline:``},{default:n(()=>[...f[73]||=[c(`Persistent drawer`,-1)]]),_:1})]),_:1}),s(C,{h2:``},{default:n(()=>[...f[77]||=[c(`Cookie notice example`,-1)]]),_:1}),f[94]||=a(`p`,null,`The cookie notice is a good use case of a persistent drawer, it will not let you click
anything until you accept.`,-1),s(T,{"content-class":`w-flex align-center`},{pug:n(()=>[c(`w-button(@click="showCookieNotice = true" outline).
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
      span.`+i(d.$store.state.darkMode?`grey-light4`:`grey-dark3`)+`.
        Our website uses cookies to give you the best user experience.
        To continue browsing this site you must agree.
    .spacer
    w-button(sm @click="showCookieNotice = false")
      w-icon.mr2 mdi mdi-check
      | I agree`,1)]),html:n(()=>[c(`<w-button
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
        <span class="`+i(d.$store.state.darkMode?`grey-light4`:`grey-dark3`)+`">
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
</w-drawer>`,1)]),js:n(()=>[...f[83]||=[c(`data: () => ({
  showCookieNotice: false
})
`,-1)]]),default:n(()=>[s(w,{onClick:f[16]||=e=>d.showCookieNotice=!0,outline:``},{default:n(()=>[...f[78]||=[c(`Show the cookie notice`,-1)]]),_:1}),s(E,{modelValue:d.showCookieNotice,"onUpdate:modelValue":f[18]||=e=>d.showCookieNotice=e,"content-class":`cookie-notice`,"overlay-color":`transparent`,persistent:``,"fit-content":``,bottom:``},{default:n(()=>[a(`div`,g,[a(`div`,_,[s(O,{class:`mr3`,xl:``},{default:n(()=>[...f[79]||=[c(`mdi mdi-cookie`,-1)]]),_:1}),a(`span`,{class:r(d.$store.state.darkMode?`grey-light4`:`grey-dark3`)},`Our website uses cookies to give you the best user experience.
To continue browsing this site you must agree.`,2)]),f[82]||=a(`div`,{class:`spacer`},null,-1),s(w,{sm:``,onClick:f[17]||=e=>d.showCookieNotice=!1},{default:n(()=>[s(O,{class:`mr2`},{default:n(()=>[...f[80]||=[c(`mdi mdi-check`,-1)]]),_:1}),f[81]||=c(`I agree`,-1)]),_:1})])]),_:1},8,[`modelValue`])]),_:1}),f[95]||=a(`p`,null,`You can then store the result of the acceptation in the localStorage when the user clicks
the button.`,-1),e(s(k,{dark:d.$store.state.darkMode,language:`html-vue`,label:`Template`},{default:n(()=>[...f[84]||=[c(`<w-button
  class="ml-auto"
  @click="acceptCookies"
  sm
  absolute>
  <w-icon class="mr2">wi-check</w-icon>
  I agree
</w-button>
`,-1)]]),_:1},8,[`dark`]),[[p,!d.$store.state.usePug]]),e(s(k,{dark:d.$store.state.darkMode,language:`pug`,label:`Template`},{default:n(()=>[...f[85]||=[c(`w-button.ml-auto(@click="acceptCookies" sm absolute)
  w-icon.mr2 wi-check
  | I agree
`,-1)]]),_:1},8,[`dark`]),[[p,d.$store.state.usePug]]),s(k,{language:`js`,label:`Javascript`,dark:d.$store.state.darkMode},{default:n(()=>[...f[86]||=[c(`acceptCookies () {
  localStorage.acceptCookies = 'yes'
  this.showCookieNotice = false
}
`,-1)]]),_:1},8,[`dark`]),s(E,{modelValue:d.openLeftDrawer,"onUpdate:modelValue":f[21]||=e=>d.openLeftDrawer=e,left:``},{default:n(()=>[s(w,{class:`button--close`,onClick:f[19]||=e=>d.openLeftDrawer=!d.openLeftDrawer,sm:``,outline:``,absolute:``,round:``,icon:`wi-cross`}),a(`div`,v,[s(w,{onClick:f[20]||=e=>{d.openLeftDrawer=!1,d.openRightDrawer=!0}},{default:n(()=>[...f[87]||=[c(`Show right drawer
`,-1)]]),_:1})])]),_:1},8,[`modelValue`]),s(E,{modelValue:d.openRightDrawer,"onUpdate:modelValue":f[23]||=e=>d.openRightDrawer=e},{default:n(()=>[s(w,{class:`button--close`,onClick:f[22]||=e=>d.openRightDrawer=!d.openRightDrawer,sm:``,outline:``,absolute:``,round:``,icon:`wi-cross`})]),_:1},8,[`modelValue`]),s(E,{modelValue:d.openTopDrawer,"onUpdate:modelValue":f[25]||=e=>d.openTopDrawer=e,top:``,"no-overlay":d.noOverlay,"overlay-color":d.overlayColor},{default:n(()=>[s(w,{class:`button--close`,onClick:f[24]||=e=>d.openTopDrawer=!d.openTopDrawer,sm:``,outline:``,absolute:``,round:``,icon:`wi-cross`})]),_:1},8,[`modelValue`,`no-overlay`,`overlay-color`]),s(E,{modelValue:d.openBottomDrawer,"onUpdate:modelValue":f[27]||=e=>d.openBottomDrawer=e,bottom:``,persistent:d.persistent,height:d.bottomDrawerHeight,"bg-color":`blue-light4`,onClose:f[28]||=e=>{d.bottomDrawerHeight=null,d.persistent=!1}},{default:n(()=>[s(w,{class:`button--close`,sm:``,onClick:f[26]||=e=>d.openBottomDrawer=!d.openBottomDrawer,outline:``,absolute:``,round:``,icon:`wi-cross`}),f[88]||=a(`div`,{class:`w-flex fill-height align-center justify-center black`},`You can customize the background color as well.`,-1)]),_:1},8,[`modelValue`,`persistent`,`height`])])}var b=d({data:()=>({openLeftDrawer:!1,openRightDrawer:!1,openTopDrawer:!1,openBottomDrawer:!1,openAbsoluteDrawer:!1,openPushContentLeftDrawer:!1,openPushContentRightDrawer:!1,noOverlay:!1,overlayColor:``,bottomDrawerHeight:0,persistent:!1,showCookieNotice:!1})},[[`render`,y]]);function x(e,r,i,u,d,f){let p=t(`title-link`),m=t(`component-api`);return l(),o(`div`,null,[r[1]||=a(`div`,{class:`w-divider my12`},null,-1),s(p,{class:`title1`,h2:``},{default:n(()=>[...r[0]||=[c(`API`,-1)]]),_:1}),s(m,{class:`mt0`,items:f.props,descriptions:e.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),s(m,{items:e.slots,title:`Slots`},null,8,[`items`]),s(m,{items:f.events,title:`Events`},null,8,[`items`])])}var S={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the drawer. Any truthy value will show the drawer whereas any falsy value will hide it.`,left:`Places the drawer at the left of the screen, or at the left of its container when the <code>absolute</code> prop is set to true.`,right:`Places the drawer at the right of the screen, or at the right of its container when the <code>absolute</code> prop is set to true.`,top:`Places the drawer at the top of the screen, or at the top of its container when the <code>absolute</code> prop is set to true.`,bottom:`Places the drawer at the bottom of the screen, or at the bottom of its container when the <code>absolute</code> prop is set to true.`,persistent:`When set to true, clicking outside of the drawer or pressing the escape key will not close the drawer.<br>A bounce animation will give the user a feedback that this drawer needs attention and cannot be closed.`,persistentNoAnimation:`When this and the <code>persistent</code> props are set to true, clicking outside of the drawer or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user).`,pushContent:`The <code>push-content</code> prop can be used on <code>left</code> and <code>right</code> positions.<br>It will allow the drawer to push the content either on the left or right when it's open.<br>To use the push-content layout, an explicit drawer <code>width</code> is required (don't only set a width via CSS). Any valid CSS width will work.<br>The pushable content should be provided via the <code>pushable</code> slot.`,fitContent:`Fits the drawer to its content (sets the width and height to auto).`,width:`Sets a width on the drawer when its position is <code>left</code> or <code>right</code>.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.`,height:`Sets a height on the drawer when its position is <code>top</code> or <code>bottom</code>.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.`,absolute:`Sets the CSS position of the drawer container to <code>absolute</code>.`,zIndex:`Applies a z-index (positive or negative integer) to the drawer.`,color:`Applies a color to the drawer's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the drawer's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,noOverlay:`Removes the default full screen overlay underneath the open drawer.`,overlayColor:`Provide a custom background color for the drawer background overlay (<code>rgba(0, 0, 0, 0.3)</code> by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,overlayOpacity:`Provide a custom opacity for the drawer background overlay.`,drawerClass:`Applies a custom CSS class to the drawer container.`},C={default:{description:`The drawer content.`},pushable:{description:`When using the <code>push-content</code> prop, defines the outside HTML content to be pushed by the drawer when it opens.`}},w={input:`Emitted on drawer close.<br>Updates the v-model value in Vue 2.x only.`,"update:modelValue":`Emitted on drawer close.<br>Updates the v-model value in Vue 3 only.`,close:`Emitted on drawer close.`},T=d({data:()=>({propsDescs:S,slots:C}),computed:{props(){return f.props},events(){return f.emits.reduce((e,t)=>(e[t]={description:w[t]||``})&&e,{})}}},[[`render`,x]]);function E(e,r,i,a,u,d){let f=t(`ui-component-title`),p=t(`examples`),m=t(`api`);return l(),o(`main`,null,[s(f,null,{default:n(()=>[...r[0]||=[c(`w-drawer`,-1)]]),_:1}),s(p),s(m)])}var D=d({components:{Examples:b,Api:T}},[[`render`,E]]);export{D as default};