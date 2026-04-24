import{N as e,U as t,W as n,c as r,d as i,g as a,gt as o,h as s,k as c,m as l,yt as u}from"./runtime-core.esm-bundler-BAjkj7eY.js";import{s as d}from"./runtime-dom.esm-bundler-Cc0sF0om.js";import{t as f}from"./_plugin-vue_export-helper-S3RvzygF.js";import{O as p}from"./index-CI5qOTMg.js";var m={class:`py12 w-flex column align-center justify-center`},h={class:`py12 w-flex column align-center justify-center`},g={class:`w-flex pa2 align-center wrap`},_={class:`w-flex align-center py1`},v={class:`w-flex align-center justify-center fill-height`};function y(f,p,y,b,x,S){let C=e(`title-link`),w=e(`w-button`),T=e(`example`),E=e(`w-drawer`),D=e(`w-card`),O=e(`w-icon`),k=e(`ssh-pre`);return c(),i(`div`,null,[a(C,{h2:``},{default:t(()=>[...p[29]||=[s(`Basic`,-1)]]),_:1}),a(T,{"content-class":`w-flex align-center wrap`},{pug:t(()=>[...p[31]||=[s(`w-button(@click="openDrawer = true" outline) Open drawer

w-drawer(v-model="openDrawer")`,-1)]]),html:t(()=>[...p[32]||=[s(`<w-button @click="openDrawer = true" outline>
  Open drawer
</w-button>

<w-drawer v-model="openDrawer" />`,-1)]]),js:t(()=>[...p[33]||=[s(`data: () => ({
  openDrawer: false
})
`,-1)]]),default:t(()=>[a(w,{onClick:p[0]||=e=>f.openRightDrawer=!f.openRightDrawer,outline:``},{default:t(()=>[...p[30]||=[s(`Open drawer`,-1)]]),_:1})]),_:1}),a(C,{h2:``},{default:t(()=>[...p[34]||=[s(`Positions`,-1)]]),_:1}),a(T,{"content-class":`w-flex align-center wrap`},{pug:t(()=>[...p[39]||=[s(`w-button.ma1(
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
`,-1)]]),html:t(()=>[...p[40]||=[s(`<w-button
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
`,-1)]]),js:t(()=>[...p[41]||=[s(`data: () => ({
  openDrawer: false
}),

computed: {
  position () {
    return this.openDrawer || 'right'
  }
}
`,-1)]]),default:t(()=>[a(w,{class:`ma1`,onClick:p[1]||=e=>f.openLeftDrawer=!f.openLeftDrawer,outline:``},{default:t(()=>[...p[35]||=[s(`Open left drawer`,-1)]]),_:1}),a(w,{class:`ma1`,onClick:p[2]||=e=>f.openRightDrawer=!f.openRightDrawer,outline:``},{default:t(()=>[...p[36]||=[s(`Open right drawer`,-1)]]),_:1}),a(w,{class:`ma1`,onClick:p[3]||=e=>{f.noOverlay=!1,f.openTopDrawer=!f.openTopDrawer},outline:``},{default:t(()=>[...p[37]||=[s(`Open top drawer`,-1)]]),_:1}),a(w,{class:`ma1`,onClick:p[4]||=e=>f.openBottomDrawer=!f.openBottomDrawer,outline:``},{default:t(()=>[...p[38]||=[s(`Open bottom drawer`,-1)]]),_:1})]),_:1}),a(C,{h3:``},{default:t(()=>[...p[42]||=[s(`Absolute position`,-1)]]),_:1}),p[89]||=r(`p`,null,[s(`The `),r(`strong`,{class:`code`},`w-drawer`),s(` component can be placed in a deeper structure than the root of
the site.`)],-1),a(T,{"content-class":`relative justify-center d-flex`},{pug:t(()=>[s(`w-card.ma6.grow.text-center(bg-color="`+u(f.$store.state.darkMode?`grey-dark6`:`amber-light5`)+`" title="w-card")
  w-button.my12(@click="openDrawer = true" text) Open drawer

  w-drawer(v-model="openDrawer" absolute width="160px")`,1)]),html:t(()=>[s(`<w-card
  class="ma6 grow text-center"
  bg-color="`+u(f.$store.state.darkMode?`grey-dark6`:`amber-light5`)+`"
  title="w-card">
  <w-button class="my12" @click="openDrawer = true" text>
    Open drawer
  </w-button>

  <w-drawer
    v-model="openDrawer"
    absolute
    width="160px">
  </w-drawer>
</w-card>`,1)]),js:t(()=>[...p[44]||=[s(`data: () => ({
  openDrawer: false
})
`,-1)]]),default:t(()=>[a(D,{class:`ma6 grow text-center`,"bg-color":f.$store.state.darkMode?`grey-dark6`:`amber-light5`,title:`w-card`},{default:t(()=>[a(w,{class:`my12`,onClick:p[5]||=e=>f.openAbsoluteDrawer=!0,text:``},{default:t(()=>[...p[43]||=[s(`Open drawer`,-1)]]),_:1}),a(E,{modelValue:f.openAbsoluteDrawer,"onUpdate:modelValue":p[6]||=e=>f.openAbsoluteDrawer=e,absolute:``,width:`160px`},null,8,[`modelValue`])]),_:1},8,[`bg-color`])]),_:1}),a(C,{h2:``},{default:t(()=>[...p[45]||=[s(`Control width or height`,-1)]]),_:1}),p[90]||=l(`<p>The <strong class="code">w-drawer</strong> component accepts a <span class="code">width</span> or <span class="code">height</span> parameter
depending on its position on screen to override the default one.</p><p class="grey-light1"><span class="code grey-light1">width</span> and <span class="code grey-light1">height</span> are called so for simplicity but
they internally translate to <span class="code grey-light1">max-width</span> and <span class="code grey-light1">max-height</span>
to fit on small screens.
</p>`,2),a(T,null,{pug:t(()=>[...p[47]||=[s(`p.mb4 Open a blue 60px-height bottom drawer

w-button(@click="openDrawer = true" outline) Open drawer

w-drawer(
  v-model="openDrawer"
  bg-color="blue-light4"
  bottom
  height="60px")`,-1)]]),html:t(()=>[...p[48]||=[s(`<p class="mb4">Open a blue 60px-height bottom drawer</p>
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
</w-drawer>`,-1)]]),js:t(()=>[...p[49]||=[s(`data: () => ({
  openDrawer: false
})
`,-1)]]),default:t(()=>[p[50]||=r(`p`,{class:`mb4`},`Open a blue 60px-height bottom drawer`,-1),a(w,{onClick:p[7]||=e=>{f.bottomDrawerHeight=`60px`,f.openBottomDrawer=!0},outline:``},{default:t(()=>[...p[46]||=[s(`Open drawer`,-1)]]),_:1})]),_:1}),a(C,{h2:``},{default:t(()=>[...p[51]||=[s(`Push content`,-1)]]),_:1}),p[91]||=l(`<p>The <code>push-content</code> prop can be used on <code>left</code> and <code>right</code> positions.
It will allow the drawer to push the content either on the left or right when it&#39;s open.<br>
To use the push-content layout, an explicit drawer <code>width</code> is required (don&#39;t only set a
width via CSS). Any valid CSS width will work.<br>
The pushable content should be provided via the <code>pushable</code> slot.</p>`,1),a(T,{"content-class":`relative pa0`,"blank-codepen":[`css`]},{pug:t(()=>[...p[55]||=[s(`w-drawer(
  v-model="openDrawer"
  push-content
  :overlay-opacity="0.15"
  width="160px")
  template(#pushable)
    w-flex.py12(column align-center justify-center)
      p.mb3 Pushable content
      w-button(@click="openDrawer = true" outline).
        Open drawer
  .ma2 Drawer content`,-1)]]),html:t(()=>[...p[56]||=[s(`<w-drawer
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
</w-drawer>`,-1)]]),js:t(()=>[...p[57]||=[s(`data: () => ({
  openDrawer: false
})
`,-1)]]),default:t(()=>[a(E,{modelValue:f.openPushContentRightDrawer,"onUpdate:modelValue":p[9]||=e=>f.openPushContentRightDrawer=e,"push-content":``,"overlay-opacity":.15,width:`160px`},{pushable:t(()=>[r(`div`,m,[p[53]||=r(`p`,{class:`mb3`},`Pushable content`,-1),a(w,{onClick:p[8]||=e=>f.openPushContentRightDrawer=!0,outline:``},{default:t(()=>[...p[52]||=[s(`Open drawer`,-1)]]),_:1})])]),default:t(()=>[p[54]||=r(`div`,{class:`ma2`},`Drawer content`,-1)]),_:1},8,[`modelValue`])]),_:1}),a(T,{"content-class":`relative pa0`,"blank-codepen":[`css`]},{pug:t(()=>[...p[61]||=[s(`w-drawer(
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
  .ma2 Drawer content`,-1)]]),html:t(()=>[...p[62]||=[s(`<w-drawer
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
</w-drawer>`,-1)]]),js:t(()=>[...p[63]||=[s(`data: () => ({
  openDrawer: false
})
`,-1)]]),default:t(()=>[a(E,{modelValue:f.openPushContentLeftDrawer,"onUpdate:modelValue":p[11]||=e=>f.openPushContentLeftDrawer=e,"push-content":``,"overlay-opacity":.15,left:``,width:`160px`},{pushable:t(()=>[r(`div`,h,[p[59]||=r(`p`,{class:`mb3`},`Pushable content`,-1),a(w,{onClick:p[10]||=e=>f.openPushContentLeftDrawer=!0,outline:``},{default:t(()=>[...p[58]||=[s(`Open drawer`,-1)]]),_:1})])]),default:t(()=>[p[60]||=r(`div`,{class:`ma2`},`Drawer content`,-1)]),_:1},8,[`modelValue`])]),_:1}),a(C,{h2:``},{default:t(()=>[...p[64]||=[s(`No overlay & custom color overlay`,-1)]]),_:1}),a(T,{"content-class":`w-flex align-center wrap`},{pug:t(()=>[...p[68]||=[s(`span Open top drawer with a:

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
    icon="wi-cross")`,-1)]]),html:t(()=>[...p[69]||=[s(`<span>Open top drawer with a:</span>
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
</w-drawer>`,-1)]]),js:t(()=>[...p[70]||=[s(`data: () => ({
  openDrawer: false,
  noOverlay: false,
  overlayColor: ''
})
`,-1)]]),default:t(()=>[p[71]||=r(`span`,null,`Open top drawer with a:`,-1),a(w,{class:`ma1`,onClick:p[12]||=e=>{f.noOverlay=!1,f.overlayColor=`rgba(35, 71, 129, 0.5)`,f.openTopDrawer=!f.openTopDrawer},outline:``},{default:t(()=>[...p[65]||=[s(`Custom color overlay`,-1)]]),_:1}),a(w,{class:`ma1`,onClick:p[13]||=e=>{f.noOverlay=!1,f.overlayColor=`transparent`,f.openTopDrawer=!f.openTopDrawer},outline:``},{default:t(()=>[...p[66]||=[s(`Transparent overlay`,-1)]]),_:1}),a(w,{class:`ma1`,onClick:p[14]||=e=>{f.noOverlay=!0,f.overlayColor=``,f.openTopDrawer=!f.openTopDrawer},outline:``},{default:t(()=>[...p[67]||=[s(`No overlay`,-1)]]),_:1})]),_:1}),p[92]||=r(`p`,{class:`mt4`},[r(`strong`,null,`Note:`),s(` with no overlay the underneath content will be clickable and the drawer
will not close.
To allow closing the drawer when clicking outside of it, you can set a transparent background
on the overlay.
`)],-1),a(C,{h2:``},{default:t(()=>[...p[72]||=[s(`Persistent drawers`,-1)]]),_:1}),p[93]||=r(`p`,null,`A persistent drawer stays open when clicking outside or pressing the escape key.`,-1),a(T,{"content-class":`w-flex align-center`},{pug:t(()=>[...p[74]||=[s(`w-button(@click="openDrawer = true" outline).
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
    icon="wi-cross")`,-1)]]),html:t(()=>[...p[75]||=[s(`<w-button
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
</w-drawer>`,-1)]]),js:t(()=>[...p[76]||=[s(`data: () => ({
  openDrawer: false
})
`,-1)]]),default:t(()=>[a(w,{onClick:p[15]||=e=>{f.persistent=!0,f.openBottomDrawer=!0},outline:``},{default:t(()=>[...p[73]||=[s(`Persistent drawer`,-1)]]),_:1})]),_:1}),a(C,{h2:``},{default:t(()=>[...p[77]||=[s(`Cookie notice example`,-1)]]),_:1}),p[94]||=r(`p`,null,`The cookie notice is a good use case of a persistent drawer, it will not let you click
anything until you accept.`,-1),a(T,{"content-class":`w-flex align-center`},{pug:t(()=>[s(`w-button(@click="showCookieNotice = true" outline).
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
      span.`+u(f.$store.state.darkMode?`grey-light4`:`grey-dark3`)+`.
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
        <span class="`+u(f.$store.state.darkMode?`grey-light4`:`grey-dark3`)+`">
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
</w-drawer>`,1)]),js:t(()=>[...p[83]||=[s(`data: () => ({
  showCookieNotice: false
})
`,-1)]]),default:t(()=>[a(w,{onClick:p[16]||=e=>f.showCookieNotice=!0,outline:``},{default:t(()=>[...p[78]||=[s(`Show the cookie notice`,-1)]]),_:1}),a(E,{modelValue:f.showCookieNotice,"onUpdate:modelValue":p[18]||=e=>f.showCookieNotice=e,"content-class":`cookie-notice`,"overlay-color":`transparent`,persistent:``,"fit-content":``,bottom:``},{default:t(()=>[r(`div`,g,[r(`div`,_,[a(O,{class:`mr3`,xl:``},{default:t(()=>[...p[79]||=[s(`mdi mdi-cookie`,-1)]]),_:1}),r(`span`,{class:o(f.$store.state.darkMode?`grey-light4`:`grey-dark3`)},`Our website uses cookies to give you the best user experience.
To continue browsing this site you must agree.`,2)]),p[82]||=r(`div`,{class:`spacer`},null,-1),a(w,{sm:``,onClick:p[17]||=e=>f.showCookieNotice=!1},{default:t(()=>[a(O,{class:`mr2`},{default:t(()=>[...p[80]||=[s(`mdi mdi-check`,-1)]]),_:1}),p[81]||=s(`I agree`,-1)]),_:1})])]),_:1},8,[`modelValue`])]),_:1}),p[95]||=r(`p`,null,`You can then store the result of the acceptation in the localStorage when the user clicks
the button.`,-1),n(a(k,{dark:f.$store.state.darkMode,language:`html-vue`,label:`Template`},{default:t(()=>[...p[84]||=[s(`<w-button
  class="ml-auto"
  @click="acceptCookies"
  sm
  absolute>
  <w-icon class="mr2">wi-check</w-icon>
  I agree
</w-button>
`,-1)]]),_:1},8,[`dark`]),[[d,!f.$store.state.usePug]]),n(a(k,{dark:f.$store.state.darkMode,language:`pug`,label:`Template`},{default:t(()=>[...p[85]||=[s(`w-button.ml-auto(@click="acceptCookies" sm absolute)
  w-icon.mr2 wi-check
  | I agree
`,-1)]]),_:1},8,[`dark`]),[[d,f.$store.state.usePug]]),a(k,{language:`js`,label:`Javascript`,dark:f.$store.state.darkMode},{default:t(()=>[...p[86]||=[s(`acceptCookies () {
  localStorage.acceptCookies = 'yes'
  this.showCookieNotice = false
}
`,-1)]]),_:1},8,[`dark`]),a(E,{modelValue:f.openLeftDrawer,"onUpdate:modelValue":p[21]||=e=>f.openLeftDrawer=e,left:``},{default:t(()=>[a(w,{class:`button--close`,onClick:p[19]||=e=>f.openLeftDrawer=!f.openLeftDrawer,sm:``,outline:``,absolute:``,round:``,icon:`wi-cross`}),r(`div`,v,[a(w,{onClick:p[20]||=e=>{f.openLeftDrawer=!1,f.openRightDrawer=!0}},{default:t(()=>[...p[87]||=[s(`Show right drawer
`,-1)]]),_:1})])]),_:1},8,[`modelValue`]),a(E,{modelValue:f.openRightDrawer,"onUpdate:modelValue":p[23]||=e=>f.openRightDrawer=e},{default:t(()=>[a(w,{class:`button--close`,onClick:p[22]||=e=>f.openRightDrawer=!f.openRightDrawer,sm:``,outline:``,absolute:``,round:``,icon:`wi-cross`})]),_:1},8,[`modelValue`]),a(E,{modelValue:f.openTopDrawer,"onUpdate:modelValue":p[25]||=e=>f.openTopDrawer=e,top:``,"no-overlay":f.noOverlay,"overlay-color":f.overlayColor},{default:t(()=>[a(w,{class:`button--close`,onClick:p[24]||=e=>f.openTopDrawer=!f.openTopDrawer,sm:``,outline:``,absolute:``,round:``,icon:`wi-cross`})]),_:1},8,[`modelValue`,`no-overlay`,`overlay-color`]),a(E,{modelValue:f.openBottomDrawer,"onUpdate:modelValue":p[27]||=e=>f.openBottomDrawer=e,bottom:``,persistent:f.persistent,height:f.bottomDrawerHeight,"bg-color":`blue-light4`,onClose:p[28]||=e=>{f.bottomDrawerHeight=null,f.persistent=!1}},{default:t(()=>[a(w,{class:`button--close`,sm:``,onClick:p[26]||=e=>f.openBottomDrawer=!f.openBottomDrawer,outline:``,absolute:``,round:``,icon:`wi-cross`}),p[88]||=r(`div`,{class:`w-flex fill-height align-center justify-center black`},`You can customize the background color as well.`,-1)]),_:1},8,[`modelValue`,`persistent`,`height`])])}var b=f({data:()=>({openLeftDrawer:!1,openRightDrawer:!1,openTopDrawer:!1,openBottomDrawer:!1,openAbsoluteDrawer:!1,openPushContentLeftDrawer:!1,openPushContentRightDrawer:!1,noOverlay:!1,overlayColor:``,bottomDrawerHeight:0,persistent:!1,showCookieNotice:!1})},[[`render`,y]]);function x(n,o,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return c(),i(`div`,null,[o[1]||=r(`div`,{class:`w-divider my12`},null,-1),a(p,{class:`title1`,h2:``},{default:t(()=>[...o[0]||=[s(`API`,-1)]]),_:1}),a(m,{class:`mt0`,items:f.props,descriptions:n.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),a(m,{items:n.slots,title:`Slots`},null,8,[`items`]),a(m,{items:f.events,title:`Events`},null,8,[`items`])])}var S={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the drawer. Any truthy value will show the drawer whereas any falsy value will hide it.`,left:`Places the drawer at the left of the screen, or at the left of its container when the <code>absolute</code> prop is set to true.`,right:`Places the drawer at the right of the screen, or at the right of its container when the <code>absolute</code> prop is set to true.`,top:`Places the drawer at the top of the screen, or at the top of its container when the <code>absolute</code> prop is set to true.`,bottom:`Places the drawer at the bottom of the screen, or at the bottom of its container when the <code>absolute</code> prop is set to true.`,persistent:`When set to true, clicking outside of the drawer or pressing the escape key will not close the drawer.<br>A bounce animation will give the user a feedback that this drawer needs attention and cannot be closed.`,persistentNoAnimation:`When this and the <code>persistent</code> props are set to true, clicking outside of the drawer or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user).`,pushContent:`The <code>push-content</code> prop can be used on <code>left</code> and <code>right</code> positions.<br>It will allow the drawer to push the content either on the left or right when it's open.<br>To use the push-content layout, an explicit drawer <code>width</code> is required (don't only set a width via CSS). Any valid CSS width will work.<br>The pushable content should be provided via the <code>pushable</code> slot.`,fitContent:`Fits the drawer to its content (sets the width and height to auto).`,width:`Sets a width on the drawer when its position is <code>left</code> or <code>right</code>.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.`,height:`Sets a height on the drawer when its position is <code>top</code> or <code>bottom</code>.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.`,absolute:`Sets the CSS position of the drawer container to <code>absolute</code>.`,zIndex:`Applies a z-index (positive or negative integer) to the drawer.`,color:`Applies a color to the drawer's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the drawer's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,noOverlay:`Removes the default full screen overlay underneath the open drawer.`,overlayColor:`Provide a custom background color for the drawer background overlay (<code>rgba(0, 0, 0, 0.3)</code> by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,overlayOpacity:`Provide a custom opacity for the drawer background overlay.`,drawerClass:`Applies a custom CSS class to the drawer container.`},C={default:{description:`The drawer content.`},pushable:{description:`When using the <code>push-content</code> prop, defines the outside HTML content to be pushed by the drawer when it opens.`}},w={input:`Emitted on drawer close.<br>Updates the v-model value in Vue 2.x only.`,"update:modelValue":`Emitted on drawer close.<br>Updates the v-model value in Vue 3 only.`,close:`Emitted on drawer close.`},T=f({data:()=>({propsDescs:S,slots:C}),computed:{props(){return p.props},events(){return p.emits.reduce((e,t)=>(e[t]={description:w[t]||``})&&e,{})}}},[[`render`,x]]);function E(n,r,o,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return c(),i(`main`,null,[a(f,null,{default:t(()=>[...r[0]||=[s(`w-drawer`,-1)]]),_:1}),a(p),a(m)])}var D=f({components:{Examples:b,Api:T}},[[`render`,E]]);export{D as default};