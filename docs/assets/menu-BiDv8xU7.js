import{C as e,N as t,R as n,W as r,bt as i,c as a,d as o,g as s,h as c,k as l}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as u}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{S as d}from"./index-DH7838aH.js";var f={class:`mt4`},p={class:`ml1`};function m(u,d,m,h,g,_){let v=t(`title-link`),y=t(`w-button`),b=t(`w-menu`),x=t(`example`),S=t(`w-switch`),C=t(`w-flex`),w=t(`w-toolbar`),T=t(`w-card`),E=t(`w-list`),D=t(`alert`);return l(),o(`div`,null,[s(v,{h2:``},{default:r(()=>[...d[15]||=[c(`Basic`,-1)]]),_:1}),s(x,{class:`example1`,"content-class":`text-center pt5`,"app-classes-string":`align-center`},{pug:r(()=>[...d[18]||=[c(`w-menu
  template(#activator="{ on }")
    w-button(v-on="on") Show menu
  | Menu content`,-1)]]),html:r(()=>[...d[19]||=[c(`<w-menu>
  <template #activator="{ on }">
    <w-button v-on="on" class="mr3">
      Show menu on click
    </w-button>
  </template>
  Menu content
</w-menu>
`,-1)]]),default:r(()=>[s(b,{"append-to":`.example1`},{activator:r(({on:e})=>[s(y,n(e),{default:r(()=>[...d[16]||=[c(`Show menu`,-1)]]),_:1},16)]),default:r(()=>[d[17]||=c(`Menu content`,-1)]),_:1})]),_:1}),s(v,{h2:``},{default:r(()=>[...d[20]||=[c(`Show on click or on hover`,-1)]]),_:1}),s(x,{class:`example2`,"content-class":`pt5`},{pug:r(()=>[...d[25]||=[c(`| Show menu

w-menu
  template(#activator="{ on }")
    w-button.mx3(v-on="on") On click
  | Menu content

w-menu(show-on-hover)
  template(#activator="{ on }")
    w-button(v-on="on") On hover
  | Menu content`,-1)]]),html:r(()=>[...d[26]||=[c(`Show menu:

<w-menu>
  <template #activator="{ on }">
    <w-button v-on="on" class="mx3">
      On click
    </w-button>
  </template>
  Menu content
</w-menu>

<w-menu show-on-hover>
  <template #activator="{ on }">
    <w-button v-on="on">
      On hover
    </w-button>
  </template>
  Menu content
</w-menu>
`,-1)]]),default:r(()=>[d[27]||=c(`Show menu:`,-1),s(b,{"append-to":`.example2`},{activator:r(({on:t})=>[s(y,e({class:`mx3`},n(t)),{default:r(()=>[...d[21]||=[c(`On click`,-1)]]),_:1},16)]),default:r(()=>[d[22]||=c(`Menu content`,-1)]),_:1}),s(b,{"append-to":`.example2`,"show-on-hover":``},{activator:r(({on:e})=>[s(y,n(e),{default:r(()=>[...d[23]||=[c(`On hover`,-1)]]),_:1},16)]),default:r(()=>[d[24]||=c(`Menu content`,-1)]),_:1})]),_:1}),s(v,{h2:``},{default:r(()=>[...d[28]||=[c(`Disabled`,-1)]]),_:1}),d[179]||=a(`p`,null,[c(`Use the `),a(`code`,null,`disable`),c(` prop to keep the activator visible while preventing the menu from opening
(including when `),a(`code`,null,`v-model`),c(` is `),a(`code`,null,`true`),c(`).`)],-1),s(x,{class:`example-disable`,"content-class":`text-center pt5`,"app-classes-string":`align-center`},{pug:r(()=>[...d[31]||=[c(`w-flex(align-center justify-center wrap :gap="4")
  w-switch.mb2(v-model="menuDisabled" label="Disable menu")
  w-menu(:disable="menuDisabled")
    template(#activator="{ on }")
      w-button(v-on="on") Show menu
    | Menu content`,-1)]]),html:r(()=>[...d[32]||=[c(`<w-flex align-center justify-center wrap :gap="4">
  <w-switch
    class="mb2"
    v-model="menuDisabled"
    label="Disable menu">
  </w-switch>

  <w-menu :disable="menuDisabled">
    <template #activator="{ on }">
      <w-button v-on="on">
        Show menu
      </w-button>
    </template>
    Menu content
  </w-menu>
</w-flex>`,-1)]]),js:r(()=>[...d[33]||=[c(`data: () => ({
  menuDisabled: false
})
`,-1)]]),default:r(()=>[s(C,{"align-center":``,"justify-center":``,wrap:``,gap:4},{default:r(()=>[s(S,{class:`mb2`,modelValue:u.menuDisabled,"onUpdate:modelValue":d[0]||=e=>u.menuDisabled=e,label:`Disable menu`},null,8,[`modelValue`]),s(b,{"append-to":`.example-disable`,disable:u.menuDisabled},{activator:r(({on:e})=>[s(y,n(e),{default:r(()=>[...d[29]||=[c(`Show menu`,-1)]]),_:1},16)]),default:r(()=>[d[30]||=c(`Menu content`,-1)]),_:1},8,[`disable`])]),_:1})]),_:1}),s(v,{h2:``},{default:r(()=>[...d[34]||=[c(`Persistent menu`,-1)]]),_:1}),d[180]||=a(`p`,null,[c(`A persistent menu can only be closed by clicking on the activator again, or programmatically.`),a(`br`),c(`
Clicking outside the menu will not close it.`),a(`br`),c(`
Of course you can also add a button inside the menu to close it.`)],-1),s(x,{class:`example3`,"content-class":`text-center pt5`,"app-classes-string":`align-center`},{pug:r(()=>[...d[37]||=[c(`w-menu(persistent)
  template(#activator="{ on }")
    w-button.mb2.mr3(v-on="on") Show persistent menu
  | Click on the button again to close`,-1)]]),html:r(()=>[...d[38]||=[c(`<w-menu persistent>
  <template #activator="{ on }">
    <w-button v-on="on" class="mr3">
      Show persistent menu
    </w-button>
  </template>
  Click on the button again to close
</w-menu>
`,-1)]]),default:r(()=>[s(b,{"append-to":`.example3`,persistent:``},{activator:r(({on:t})=>[s(y,e({class:`mb2 mr3`},n(t)),{default:r(()=>[...d[35]||=[c(`Show persistent menu`,-1)]]),_:1},16)]),default:r(()=>[d[36]||=c(`Click on the button again to close`,-1)]),_:1})]),_:1}),s(v,{h2:``},{default:r(()=>[...d[39]||=[c(`Hide menu on click inside`,-1)]]),_:1}),d[181]||=a(`p`,null,`A click inside the menu will close it.`,-1),s(x,{class:`example4`,"content-class":`text-center pt5`,"app-classes-string":`align-center`},{pug:r(()=>[...d[42]||=[c(`w-menu(hide-on-menu-click)
  template(#activator="{ on }")
    w-button(v-on="on") Show menu
  | A click here will close the menu.`,-1)]]),html:r(()=>[...d[43]||=[c(`<w-menu hide-on-menu-click>
  <template #activator="{ on }">
    <w-button v-on="on">
      Show menu
    </w-button>
  </template>
  A click here will close the menu.
</w-menu>
`,-1)]]),default:r(()=>[s(b,{"append-to":`.example4`,"hide-on-menu-click":``},{activator:r(({on:e})=>[s(y,n(e),{default:r(()=>[...d[40]||=[c(`Show menu`,-1)]]),_:1},16)]),default:r(()=>[d[41]||=c(`A click here will close the menu.`,-1)]),_:1})]),_:1}),s(v,{h2:``},{default:r(()=>[...d[44]||=[c(`Position`,-1)]]),_:1}),s(x,{class:`example5`},{pug:r(()=>[...d[54]||=[c(`w-flex.my12(:gap="3" align-center wrap)
  | Show menu on:

  w-menu(left)
    template(#activator="{ on }")
      w-button.mx2(v-on="on") Left
    | Menu content
  w-menu(top)
    template(#activator="{ on }")
      w-button.mx2(v-on="on") Top
    | Menu content
  w-menu
    template(#activator="{ on }")
      w-button.mx2(v-on="on") Bottom
    | Menu content
  w-menu(right)
    template(#activator="{ on }")
      w-button(v-on="on") Right
    | Menu content`,-1)]]),html:r(()=>[...d[55]||=[c(`<w-flex :gap="3" align-center wrap class="my12">
  Show menu on:

  <w-menu left>
    <template #activator="{ on }">
      <w-button v-on="on" class="mx2">
        Left
      </w-button>
    </template>
    Menu content
  </w-menu>

  <w-menu top>
    <template #activator="{ on }">
      <w-button v-on="on" class="mx2">
        Top
      </w-button>
    </template>
    Menu content
  </w-menu>

  <w-menu>
    <template #activator="{ on }">
      <w-button v-on="on" class="mx2">
        Bottom
      </w-button>
    </template>
    Menu content
  </w-menu>

  <w-menu right>
    <template #activator="{ on }">
      <w-button v-on="on">
        Right
      </w-button>
    </template>
    Menu content
  </w-menu>
</w-flex>
`,-1)]]),default:r(()=>[s(C,{class:`my6`,gap:3,"align-center":``,wrap:``},{default:r(()=>[d[53]||=c(`Show menu on:`,-1),s(b,{"append-to":`.example5`,left:``},{activator:r(({on:t})=>[s(y,e({class:`mx2`},n(t)),{default:r(()=>[...d[45]||=[c(`Left`,-1)]]),_:1},16)]),default:r(()=>[d[46]||=c(`Menu content`,-1)]),_:1}),s(b,{"append-to":`.example5`,top:``},{activator:r(({on:t})=>[s(y,e({class:`mx2`},n(t)),{default:r(()=>[...d[47]||=[c(`Top`,-1)]]),_:1},16)]),default:r(()=>[d[48]||=c(`Menu content`,-1)]),_:1}),s(b,{"append-to":`.example5`},{activator:r(({on:t})=>[s(y,e({class:`mx2`},n(t)),{default:r(()=>[...d[49]||=[c(`Bottom`,-1)]]),_:1},16)]),default:r(()=>[d[50]||=c(`Menu content`,-1)]),_:1}),s(b,{"append-to":`.example5`,right:``},{activator:r(({on:e})=>[s(y,n(e),{default:r(()=>[...d[51]||=[c(`Right`,-1)]]),_:1},16)]),default:r(()=>[d[52]||=c(`Menu content`,-1)]),_:1})]),_:1})]),_:1}),s(v,{h2:``},{default:r(()=>[...d[56]||=[c(`Alignments`,-1)]]),_:1}),d[182]||=a(`p`,null,`In addition to positions, you can align the menu with its activator.`,-1),s(x,{class:`example6`},{pug:r(()=>[...d[81]||=[c(`.title4.mb2 top position
w-menu(top align-left)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align left
  | Menu content
w-menu(top)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Centered
  | Menu content
w-menu(top align-right)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align right
  | Menu content

.title4.mt6.mb2 Bottom position
w-menu(align-left)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align left
  | Menu content
w-menu
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Centered
  | Menu content
w-menu(align-right)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align right
  | Menu content

.title4.mt6.mb2 Right position
w-menu(right align-top)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align top
  | Menu content
w-menu(right)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Centered
  | Menu content
w-menu(right align-bottom)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align bottom
  | Menu content

.title4.mt6.mb2 Left position
w-menu(left align-top)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align top
  | Menu content
w-menu(left)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Centered
  | Menu content
w-menu(left align-bottom)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align bottom
  | Menu content`,-1)]]),html:r(()=>[...d[82]||=[c(`<div class="title4 mb2">Top position</div>
<w-menu top align-left>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align left
    </w-button>
  </template>
  Menu content
</w-menu>

<w-menu top>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Menu content
</w-menu>

<w-menu top align-right>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align right
    </w-button>
  </template>
  Menu content
</w-menu>

<div class="title4 mt6 mb2">Bottom position</div>
<w-menu align-left>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align left
    </w-button>
  </template>
  Menu content
</w-menu>

<w-menu>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Menu content
</w-menu>

<w-menu align-right>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align right
    </w-button>
  </template>
  Menu content
</w-menu>

<div class="title4 mt6 mb2">Right position</div>
<w-menu right align-top>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align top
    </w-button>
  </template>
  Menu content
</w-menu>

<w-menu right>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Menu content
</w-menu>

<w-menu right align-bottom>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">Alig
      n bottom
    </w-button>
  </template>
  Menu content
</w-menu>

<div class="title4 mt6 mb2">Left position</div>
<w-menu left align-top>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">A
      lign top
    </w-button>
  </template>
  Menu content
</w-menu>

<w-menu left>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Menu content
</w-menu>

<w-menu left align-bottom>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align bottom
    </w-button>
  </template>
  Menu content
</w-menu>
`,-1)]]),default:r(()=>[d[83]||=a(`div`,{class:`title4 mb2`},`Top position`,-1),s(b,{"append-to":`.example6`,top:``,"align-left":``},{activator:r(({on:t})=>[s(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[57]||=[c(`Align left`,-1)]]),_:1},16)]),default:r(()=>[d[58]||=c(`Menu content`,-1)]),_:1}),s(b,{"append-to":`.example6`,top:``},{activator:r(({on:t})=>[s(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[59]||=[c(`Centered`,-1)]]),_:1},16)]),default:r(()=>[d[60]||=c(`Menu content`,-1)]),_:1}),s(b,{"append-to":`.example6`,top:``,"align-right":``},{activator:r(({on:t})=>[s(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[61]||=[c(`Align right`,-1)]]),_:1},16)]),default:r(()=>[d[62]||=c(`Menu content`,-1)]),_:1}),d[84]||=a(`div`,{class:`title4 mt6 mb2`},`Bottom position`,-1),s(b,{"append-to":`.example6`,"align-left":``},{activator:r(({on:t})=>[s(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[63]||=[c(`Align left`,-1)]]),_:1},16)]),default:r(()=>[d[64]||=c(`Menu content`,-1)]),_:1}),s(b,{"append-to":`.example6`},{activator:r(({on:t})=>[s(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[65]||=[c(`Centered`,-1)]]),_:1},16)]),default:r(()=>[d[66]||=c(`Menu content`,-1)]),_:1}),s(b,{"append-to":`.example6`,"align-right":``},{activator:r(({on:t})=>[s(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[67]||=[c(`Align right`,-1)]]),_:1},16)]),default:r(()=>[d[68]||=c(`Menu content`,-1)]),_:1}),d[85]||=a(`div`,{class:`title4 mt6 mb2`},`Right position`,-1),s(b,{"append-to":`.example6`,right:``,"align-top":``},{activator:r(({on:t})=>[s(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[69]||=[c(`Align top`,-1)]]),_:1},16)]),default:r(()=>[d[70]||=c(`Menu content`,-1)]),_:1}),s(b,{"append-to":`.example6`,right:``},{activator:r(({on:t})=>[s(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[71]||=[c(`Centered`,-1)]]),_:1},16)]),default:r(()=>[d[72]||=c(`Menu content`,-1)]),_:1}),s(b,{"append-to":`.example6`,right:``,"align-bottom":``},{activator:r(({on:t})=>[s(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[73]||=[c(`Align bottom`,-1)]]),_:1},16)]),default:r(()=>[d[74]||=c(`Menu content`,-1)]),_:1}),d[86]||=a(`div`,{class:`title4 mt6 mb2`},`Left position`,-1),s(b,{"append-to":`.example6`,left:``,"align-top":``},{activator:r(({on:t})=>[s(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[75]||=[c(`Align top`,-1)]]),_:1},16)]),default:r(()=>[d[76]||=c(`Menu content`,-1)]),_:1}),s(b,{"append-to":`.example6`,left:``},{activator:r(({on:t})=>[s(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[77]||=[c(`Centered`,-1)]]),_:1},16)]),default:r(()=>[d[78]||=c(`Menu content`,-1)]),_:1}),s(b,{"append-to":`.example6`,left:``,"align-bottom":``},{activator:r(({on:t})=>[s(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[79]||=[c(`Align bottom`,-1)]]),_:1},16)]),default:r(()=>[d[80]||=c(`Menu content`,-1)]),_:1})]),_:1}),s(v,{h2:``},{default:r(()=>[...d[87]||=[c(`No position`,-1)]]),_:1}),d[183]||=a(`p`,null,[c(`By default, the menu is position at the bottom of the activator.
If you prefer to position the menu yourself via CSS, you can skip the position calculation via the
`),a(`code`,null,`no-position`),c(` prop.`)],-1),s(x,{class:`example7`,"content-class":`pb12`},{pug:r(()=>[...d[90]||=[c(`w-menu(no-position)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Show menu
  | Menu content`,-1)]]),html:r(()=>[...d[91]||=[c(`<w-menu no-position>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Show menu
    </w-button>
  </template>
  Menu content
</w-menu>`,-1)]]),css:r(()=>[...d[92]||=[c(`.w-menu {top: 10px;right: 20px;}`,-1)]]),default:r(()=>[s(b,{"append-to":`.example7 .example__render`,"no-position":``},{activator:r(({on:t})=>[s(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[88]||=[c(`Show menu`,-1)]]),_:1},16)]),default:r(()=>[d[89]||=c(`Menu content`,-1)]),_:1})]),_:1}),s(v,{h2:``},{default:r(()=>[...d[93]||=[c(`Arrow (Tooltip style)`,-1)]]),_:1}),d[184]||=a(`p`,null,[c(`Applies a tooltip style with the `),a(`code`,null,`arrow`),c(` option.`)],-1),s(x,{class:`example13`,"content-class":`text-center my4`,"app-classes-string":`align-center`},{pug:r(()=>[...d[96]||=[c(`w-menu(arrow)
  template(#activator="{ on }")
    w-button(v-on="on") Show menu
  | Menu content`,-1)]]),html:r(()=>[...d[97]||=[c(`<w-menu arrow>
  <template #activator="{ on }">
    <w-button v-on="on">
      Show menu
    </w-button>
  </template>
  Menu content
</w-menu>
`,-1)]]),default:r(()=>[s(b,{"append-to":`.example13`,arrow:``},{activator:r(({on:t})=>[s(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[94]||=[c(`Show menu`,-1)]]),_:1},16)]),default:r(()=>[d[95]||=c(`Menu content`,-1)]),_:1})]),_:1}),s(v,{h3:``},{default:r(()=>[...d[98]||=[c(`Automatic arrow position`,-1)]]),_:1}),d[185]||=a(`p`,null,[c(`The following examples illustrate how the arrow is positioned on the different sides and
alignments that are applied.`),a(`br`),c(`
The arrow position can also be overridden via CSS.
`)],-1),s(v,{h4:``},{default:r(()=>[...d[99]||=[c(`Horizontal`,-1)]]),_:1}),s(x,null,{pug:r(()=>[...d[112]||=[c(`w-flex(justify-center)
  w-menu(arrow top align-left)
    template(#activator="{ on }")
      w-button.ma2(v-on="on") Top, align left
    | Menu content
  w-menu(arrow top)
    template(#activator="{ on }")
      w-button.ma2(v-on="on") Top, align center
    | Menu content
  w-menu(arrow top align-right)
    template(#activator="{ on }")
      w-button.ma2(v-on="on") Top, align right
    | Menu content
w-flex(justify-center)
  w-menu(arrow align-left)
    template(#activator="{ on }")
      w-button.ma2(v-on="on") Bottom, align left
    | Menu content
  w-menu(arrow)
    template(#activator="{ on }")
      w-button.ma2(v-on="on") Bottom, align center
    | Menu content
  w-menu(arrow align-right)
    template(#activator="{ on }")
      w-button.ma2(v-on="on") Bottom, align right
    | Menu content`,-1)]]),html:r(()=>[...d[113]||=[c(`<w-flex justify-center>
  <div class="title4 mb2">Top position</div>
  <w-menu arrow top align-left>
    <template #activator="{ on }">
      <w-button class="ma1" v-on="on">
        Top, align left
      </w-button>
    </template>
    Menu content
  </w-menu>

  <w-menu arrow top>
    <template #activator="{ on }">
      <w-button class="ma1" v-on="on">
        Top, align center
      </w-button>
    </template>
    Menu content
  </w-menu>

  <w-menu arrow top align-right>
    <template #activator="{ on }">
      <w-button class="ma1" v-on="on">
        Top, align right
      </w-button>
    </template>
    Menu content
  </w-menu>
</w-flex>

<w-flex justify-center>
  <div class="title4 mt6 mb2">Bottom position</div>
  <w-menu arrow align-left>
    <template #activator="{ on }">
      <w-button class="ma1" v-on="on">
        Bottom, align left
      </w-button>
    </template>
    Menu content
  </w-menu>

  <w-menu arrow>
    <template #activator="{ on }">
      <w-button class="ma1" v-on="on">
        Bottom, align center
      </w-button>
    </template>
    Menu content
  </w-menu>

  <w-menu arrow align-right>
    <template #activator="{ on }">
      <w-button class="ma1" v-on="on">
        Bottom, align right
      </w-button>
    </template>
    Menu content
  </w-menu>
</w-flex>
`,-1)]]),default:r(()=>[s(C,{"justify-center":``},{default:r(()=>[s(b,{arrow:``,top:``,"align-left":``},{activator:r(({on:t})=>[s(y,e({class:`ma2`},n(t)),{default:r(()=>[...d[100]||=[c(`Top, align left`,-1)]]),_:1},16)]),default:r(()=>[d[101]||=c(`Menu content`,-1)]),_:1}),s(b,{arrow:``,top:``},{activator:r(({on:t})=>[s(y,e({class:`ma2`},n(t)),{default:r(()=>[...d[102]||=[c(`Top, align center`,-1)]]),_:1},16)]),default:r(()=>[d[103]||=c(`Menu content`,-1)]),_:1}),s(b,{arrow:``,top:``,"align-right":``},{activator:r(({on:t})=>[s(y,e({class:`ma2`},n(t)),{default:r(()=>[...d[104]||=[c(`Top, align right`,-1)]]),_:1},16)]),default:r(()=>[d[105]||=c(`Menu content`,-1)]),_:1})]),_:1}),s(C,{"justify-center":``},{default:r(()=>[s(b,{arrow:``,"align-left":``},{activator:r(({on:t})=>[s(y,e({class:`ma2`},n(t)),{default:r(()=>[...d[106]||=[c(`Bottom, align left`,-1)]]),_:1},16)]),default:r(()=>[d[107]||=c(`Menu content`,-1)]),_:1}),s(b,{arrow:``},{activator:r(({on:t})=>[s(y,e({class:`ma2`},n(t)),{default:r(()=>[...d[108]||=[c(`Bottom, align center`,-1)]]),_:1},16)]),default:r(()=>[d[109]||=c(`Menu content`,-1)]),_:1}),s(b,{arrow:``,"align-right":``},{activator:r(({on:t})=>[s(y,e({class:`ma2`},n(t)),{default:r(()=>[...d[110]||=[c(`Bottom, align right`,-1)]]),_:1},16)]),default:r(()=>[d[111]||=c(`Menu content`,-1)]),_:1})]),_:1})]),_:1}),s(v,{h4:``},{default:r(()=>[...d[114]||=[c(`Vertical`,-1)]]),_:1}),s(x,null,{pug:r(()=>[...d[127]||=[c(`w-flex.text-center(justify-center)
  w-flex(column no-grow)
    w-menu(arrow left align-top)
      template(#activator="{ on }")
        w-button.ma2(v-on="on") Left, align top
      | Menu content
    w-menu(arrow left)
      template(#activator="{ on }")
        w-button.ma2(v-on="on") Left, align center
      | Menu content
    w-menu(arrow left align-bottom)
      template(#activator="{ on }")
        w-button.ma2(v-on="on") Left, align bottom
      | Menu content
  w-flex(column no-grow)
    w-menu(arrow right align-top)
      template(#activator="{ on }")
        w-button.ma2(v-on="on") Right, align top
      | Menu content
    w-menu(arrow right)
      template(#activator="{ on }")
        w-button.ma2(v-on="on") Right, align center
      | Menu content
    w-menu(arrow right align-bottom)
      template(#activator="{ on }")
        w-button.ma2(v-on="on") Right, align bottom
      | Menu content`,-1)]]),html:r(()=>[...d[128]||=[c(`<w-flex text-center justify-center>
  <w-flex column no-grow>
    <div class="title4 mb2">Top position</div>
    <w-menu arrow left align-top>
      <template #activator="{ on }">
        <w-button class="ma1" v-on="on">
          Left, align top
        </w-button>
      </template>
      Menu content
    </w-menu>

    <w-menu arrow left>
      <template #activator="{ on }">
        <w-button class="ma1" v-on="on">
          Left, align center
        </w-button>
      </template>
      Menu content
    </w-menu>

    <w-menu arrow left align-bottom>
      <template #activator="{ on }">
        <w-button class="ma1" v-on="on">
          Left, align bottom
        </w-button>
      </template>
      Menu content
    </w-menu>
  </w-flex>

  <w-flex column no-grow>
    <div class="title4 mt6 mb2">Bottom position</div>
    <w-menu arrow right align-top>
      <template #activator="{ on }">
        <w-button class="ma1" v-on="on">
          Right, align top
        </w-button>
      </template>
      Menu content
    </w-menu>

    <w-menu arrow right>
      <template #activator="{ on }">
        <w-button class="ma1" v-on="on">
          Right, align center
        </w-button>
      </template>
      Menu content
    </w-menu>

    <w-menu arrow right align-bottom>
      <template #activator="{ on }">
        <w-button class="ma1" v-on="on">
          Right, align bottom
        </w-button>
      </template>
      Menu content
    </w-menu>
  </w-flex>
</w-flex>
`,-1)]]),default:r(()=>[s(C,{class:`text-center`,"justify-center":``},{default:r(()=>[s(C,{column:``,"no-grow":``},{default:r(()=>[s(b,{arrow:``,left:``,"align-top":``},{activator:r(({on:t})=>[s(y,e({class:`ma2`},n(t)),{default:r(()=>[...d[115]||=[c(`Left, align top`,-1)]]),_:1},16)]),default:r(()=>[d[116]||=c(`Menu content`,-1)]),_:1}),s(b,{arrow:``,left:``},{activator:r(({on:t})=>[s(y,e({class:`ma2`},n(t)),{default:r(()=>[...d[117]||=[c(`Left, align center`,-1)]]),_:1},16)]),default:r(()=>[d[118]||=c(`Menu content`,-1)]),_:1}),s(b,{arrow:``,left:``,"align-bottom":``},{activator:r(({on:t})=>[s(y,e({class:`ma2`},n(t)),{default:r(()=>[...d[119]||=[c(`Left, align bottom`,-1)]]),_:1},16)]),default:r(()=>[d[120]||=c(`Menu content`,-1)]),_:1})]),_:1}),s(C,{column:``,"no-grow":``},{default:r(()=>[s(b,{arrow:``,right:``,"align-top":``},{activator:r(({on:t})=>[s(y,e({class:`ma2`},n(t)),{default:r(()=>[...d[121]||=[c(`Right, align top`,-1)]]),_:1},16)]),default:r(()=>[d[122]||=c(`Menu content`,-1)]),_:1}),s(b,{arrow:``,right:``},{activator:r(({on:t})=>[s(y,e({class:`ma2`},n(t)),{default:r(()=>[...d[123]||=[c(`Right, align center`,-1)]]),_:1},16)]),default:r(()=>[d[124]||=c(`Menu content`,-1)]),_:1}),s(b,{arrow:``,right:``,"align-bottom":``},{activator:r(({on:t})=>[s(y,e({class:`ma2`},n(t)),{default:r(()=>[...d[125]||=[c(`Right, align bottom`,-1)]]),_:1},16)]),default:r(()=>[d[126]||=c(`Menu content`,-1)]),_:1})]),_:1})]),_:1})]),_:1}),s(v,{h2:``},{default:r(()=>[...d[129]||=[c(`Color & background color`,-1)]]),_:1}),d[186]||=a(`p`,null,[c(`Like in most components, you can define a `),a(`code`,null,`color`),c(` and a  `),a(`code`,null,`bg-color`),c(`.`)],-1),s(x,{class:`example8`,"content-class":`text-center my4`,"app-classes-string":`align-center`},{pug:r(()=>[c(`w-menu(color="`+i(u.$store.state.darkMode?`blue-light4`:`blue-dark2`)+`" bg-color="`+i(u.$store.state.darkMode?`indigo-dark6`:`blue-light5`)+`")
  template(#activator="{ on }")
    w-button(v-on="on") Show a blue menu
  | Menu content`,1)]),html:r(()=>[c(`<w-menu color="`+i(u.$store.state.darkMode?`blue-light4`:`blue-dark2`)+`" bg-color="`+i(u.$store.state.darkMode?`indigo-dark6`:`blue-light5`)+`">
  <template #activator="{ on }">
    <w-button v-on="on">
      Show a blue menu
    </w-button>
  </template>
  Menu content
</w-menu>
`,1)]),default:r(()=>[s(b,{"append-to":`.example8`,color:u.$store.state.darkMode?`blue-light4`:`blue-dark2`,"bg-color":u.$store.state.darkMode?`indigo-dark6`:`blue-light5`},{activator:r(({on:t})=>[s(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[130]||=[c(`Show a blue menu`,-1)]]),_:1},16)]),default:r(()=>[d[131]||=c(`Menu content`,-1)]),_:1},8,[`color`,`bg-color`])]),_:1}),s(v,{h2:``},{default:r(()=>[...d[132]||=[c(`Tile, round and shadow`,-1)]]),_:1}),s(x,{class:`example9`},{pug:r(()=>[...d[139]||=[c(`w-flex.my6(wrap :gap="3" justify-center)
  w-menu(tile)
    template(#activator="{ on }")
      w-button(v-on="on") Show a tile menu
    | Menu content
  w-menu(round)
    template(#activator="{ on }")
      w-button(v-on="on") Show a round menu
    | Menu content
  w-menu(shadow)
    template(#activator="{ on }")
      w-button(v-on="on") Show a shadow menu
    | Menu content`,-1)]]),html:r(()=>[...d[140]||=[c(`<w-flex wrap :gap="3"  justify-center class="my6">
  <w-menu tile>
    <template #activator="{ on }">
      <w-button v-on="on">
        Show a tile menu
      </w-button>
    </template>
    Menu content
    </template>
  </w-menu>

  <w-menu round>
    <template #activator="{ on }">
      <w-button v-on="on">
        Show a round menu
      </w-button>
    </template>
    Menu content
    </template>
  </w-menu>

  <w-menu shadow>
    <template #activator="{ on }">
      <w-button v-on="on">
        Show a shadow menu
      </w-button>
    </template>
    Menu content
    </template>
  </w-menu>
</w-flex>
`,-1)]]),default:r(()=>[s(C,{class:`my6`,wrap:``,"justify-center":``,gap:3},{default:r(()=>[s(b,{"append-to":`.example9`,tile:``},{activator:r(({on:t})=>[s(y,e({class:`mt1`},n(t)),{default:r(()=>[...d[133]||=[c(`Show a tile menu`,-1)]]),_:1},16)]),default:r(()=>[d[134]||=c(`Menu content`,-1)]),_:1}),s(b,{"append-to":`.example9`,round:``},{activator:r(({on:t})=>[s(y,e({class:`mt1`},n(t)),{default:r(()=>[...d[135]||=[c(`Show a round menu`,-1)]]),_:1},16)]),default:r(()=>[d[136]||=c(`Menu content`,-1)]),_:1}),s(b,{"append-to":`.example9`,shadow:``},{activator:r(({on:t})=>[s(y,e({class:`mt1`},n(t)),{default:r(()=>[...d[137]||=[c(`Show a shadow menu`,-1)]]),_:1},16)]),default:r(()=>[d[138]||=c(`Menu content`,-1)]),_:1})]),_:1})]),_:1}),s(v,{h2:``},{default:r(()=>[...d[141]||=[c(`Menu content: w-card`,-1)]]),_:1}),d[187]||=a(`p`,null,`By default the menu is a w-card, so it accepts all the props of a w-card.`,-1),s(x,{class:`example10`,"content-class":`text-center my4`,"app-classes-string":`align-center`},{pug:r(()=>[...d[151]||=[c(`w-menu(shadow v-model="showMenu")
  template(#activator)
    w-button.mr3(@click="showMenu = true") Show a w-card menu
  .title4 How much do you like Wave UI?
  p Pick a serious answer.
  w-flex.pl10.mt4(wrap justify-end)
    w-button.mr1(text color="green" @click="showMenu = false") Love it!
    w-button.mr1(text color="green" @click="showMenu = false") Love it!
    w-button(text color="green" @click="showMenu = false") Love it!
w-menu(shadow custom)
  template(#activator="{ on }")
    w-button(v-on="on") Show a custom menu
  w-card(content-class="pa0")
    w-toolbar
      .title3.ma0 Menu Title
      .spacer
      span.ml1 Item 1
      span.ml1 Item 2
    .pa3 This is some content in a w-card component.`,-1)]]),html:r(()=>[...d[152]||=[c(`<w-menu shadow v-model="showMenu">
  <template #activator>
    <w-button
      class="mr3"
      @click="showMenu = true">
      Show a w-card menu
    </w-button>
  </template>

  <div class="title4">
    How much do you like Wave UI?
  </div>

  <p>Pick a serious answer.</p>

  <w-flex class="pl10 mt4" wrap justify-end>
    <w-button
      class="mr1"
      text
      color="green"
      @click="showMenu = false">
      Love it!
    </w-button>

    <w-button
      class="mr1"
      text
      color="green"
      @click="showMenu = false">
      Love it!
    </w-button>

    <w-button
      text
      color="green"
      @click="showMenu = false">
      Love it!
    </w-button>
  </w-flex>
</w-menu>

<w-menu shadow custom>
  <template #activator="{ on }">
    <w-button v-on="on">
      Show a custom menu
    </w-button>
  </template>

  <w-card content-class="pa0">
    <w-toolbar>
      <div class="title3 ma0">Menu Title</div>
      <div class="spacer"></div>
      <span class="ml1">Item 1</span>
      <span class="ml1">Item 2</span>
    </w-toolbar>

    <div class="pa3">
      This is some content in a w-card component.
    </div>
  </w-card>
</w-menu>`,-1)]]),js:r(()=>[...d[153]||=[c(`data: () => ({
  showMenu: false
})
`,-1)]]),default:r(()=>[s(b,{"append-to":`.example10`,shadow:``,modelValue:u.showMenu,"onUpdate:modelValue":d[5]||=e=>u.showMenu=e},{activator:r(()=>[s(y,{class:`mr3 mb2`,onClick:d[1]||=e=>u.showMenu=!0},{default:r(()=>[...d[142]||=[c(`Show a w-card menu`,-1)]]),_:1})]),default:r(()=>[d[146]||=a(`div`,{class:`title4`},`How much do you like Wave UI?`,-1),d[147]||=a(`p`,null,`Pick a serious answer.`,-1),s(C,{class:`pl10 mt4`,wrap:``,"justify-end":``},{default:r(()=>[s(y,{class:`mr1`,text:``,color:`green`,onClick:d[2]||=e=>u.showMenu=!1},{default:r(()=>[...d[143]||=[c(`Love it!`,-1)]]),_:1}),s(y,{class:`mr1`,text:``,color:`green`,onClick:d[3]||=e=>u.showMenu=!1},{default:r(()=>[...d[144]||=[c(`Love it!`,-1)]]),_:1}),s(y,{text:``,color:`green`,onClick:d[4]||=e=>u.showMenu=!1},{default:r(()=>[...d[145]||=[c(`Love it!`,-1)]]),_:1})]),_:1})]),_:1},8,[`modelValue`]),s(b,{"append-to":`.example10`,shadow:``,custom:``},{activator:r(({on:t})=>[s(y,e({class:`mb2`},n(t)),{default:r(()=>[...d[148]||=[c(`Show a custom menu`,-1)]]),_:1},16)]),default:r(()=>[s(T,{class:`base-color--bg`,"content-class":`pa0`},{default:r(()=>[s(w,null,{default:r(()=>[...d[149]||=[a(`div`,{class:`title3 ma0`},`Menu Title`,-1),a(`div`,{class:`spacer`},null,-1),a(`span`,{class:`ml1`},`Item 1`,-1),a(`span`,{class:`ml1`},`Item 2`,-1)]]),_:1}),d[150]||=a(`div`,{class:`pa3`},`This is some content in a w-card component.`,-1)]),_:1})]),_:1})]),_:1}),s(v,{h2:``},{default:r(()=>[...d[154]||=[c(`Custom content: List menu`,-1)]]),_:1}),d[188]||=a(`p`,null,[c(`By default the menu is a `),a(`strong`,{class:`code`},`w-card`),c(`. But if you need more flexibility, you can set the
`),a(`code`,null,`custom`),c(` prop and put whatever you want in the free-of-style menu.`),a(`br`),c(`
In this example, the menu is `),a(`code`,null,`persistent`),c(` so the user is forced to select an option from
the menu when open. Then on click of an option, the menu will hide thanks to the option
`),a(`code`,null,`hide-on-menu-click`),c(`.`)],-1),s(x,{class:`example11`,"content-class":`text-center my4`,"app-classes-string":`align-center`},{pug:r(()=>[...d[157]||=[c(`w-menu(custom hide-on-menu-click persistent shadow)
  template(#activator="{ on }")
    w-button(v-on="on") Show a list menu
  w-list.base-color--bg(
    v-model="listSelection"
    :items="listItems"
    item-class="px8")
div.mt4
  strong Current selection:
  code.ml1 `+i(`{{ listSelection || 'none' }}`),-1)]]),html:r(()=>[...d[158]||=[c(`<w-menu
  custom
  hide-on-menu-click
  persistent
  shadow>
  <template #activator="{ on }">
    <w-button v-on="on">
      Show a list menu
    </w-button>
  </template>

  <w-list
    class="base-color--bg"
    v-model="listSelection"
    :items="listItems"
    item-class="px8">
  </w-list>
</w-menu>

<div class="mt4">
  <strong>Current selection:</strong>
  <code class="ml1">`+i(`{{ listSelection || 'none' }}`)+`</code>
</div>`,-1)]]),js:r(()=>[...d[159]||=[c(`data: () => ({
  showMenu: false,
  listSelection: null,
  listItems: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`,-1)]]),default:r(()=>[s(b,{"append-to":`.example11`,custom:``,"hide-on-menu-click":``,persistent:``,shadow:``},{activator:r(({on:e})=>[s(y,n(e),{default:r(()=>[...d[155]||=[c(`Show a list menu`,-1)]]),_:1},16)]),default:r(()=>[s(E,{class:`base-color--bg`,modelValue:u.list,"onUpdate:modelValue":d[6]||=e=>u.list=e,items:[{label:`Item 1`},{label:`Item 2`},{label:`Item 3`}],"item-class":`px8`},null,8,[`modelValue`])]),_:1}),a(`div`,f,[d[156]||=a(`strong`,null,`Current selection:`,-1),a(`code`,p,i(u.list||`none`),1)])]),_:1}),s(v,{h2:``},{default:r(()=>[...d[160]||=[c(`Menu with overlay`,-1)]]),_:1}),s(x,{class:`example12`,"content-class":`text-center my4`,"app-classes-string":`align-center`},{pug:r(()=>[...d[162]||=[c(`w-menu(v-model="showMenu" shadow custom overlay)
  template(#activator="{ on }")
    w-button(v-on="on") Show a menu & overlay
  w-list.base-color--bg(
    nav
    :items="listItems"
    item-class="px8"
    @item-select="showMenu = false")`,-1)]]),html:r(()=>[...d[163]||=[c(`<w-menu v-model="showMenu" shadow custom overlay>
  <template #activator="{ on }">
    <w-button v-on="on">
      Show a menu & overlay
    </w-button>
  </template>

  <w-list
    class="base-color--bg"
    nav
    :items="listItems"
    item-class="px8"
    @item-select="showMenu = false">
  </w-list>
</w-menu>`,-1)]]),js:r(()=>[...d[164]||=[c(`data: () => ({
  showMenu: false,
  listItems: [
    { label: 'Item 1', route: '#item1' },
    { label: 'Item 2', route: '#item2' },
    { label: 'Item 3', route: '#item3' }
  ]
})
`,-1)]]),default:r(()=>[s(b,{"append-to":`.example12`,modelValue:u.showListMenu2,"onUpdate:modelValue":d[8]||=e=>u.showListMenu2=e,shadow:``,custom:``,overlay:``},{activator:r(({on:e})=>[s(y,n(e),{default:r(()=>[...d[161]||=[c(`Show a menu & overlay`,-1)]]),_:1},16)]),default:r(()=>[s(E,{class:`base-color--bg`,nav:``,items:[{label:`Item 1`,route:`#item1`},{label:`Item 2`,route:`#item2`},{label:`Item 3`,route:`#item3`}],"item-class":`px8`,onItemSelect:d[7]||=e=>u.showListMenu2=!1})]),_:1},8,[`modelValue`])]),_:1}),s(v,{h2:``},{default:r(()=>[...d[165]||=[c(`External activator`,-1)]]),_:1}),d[189]||=a(`p`,null,[c(`External activators offer a great flexibility in the code and the advantage of accepting
multiple activators for the same menu (even elements that are not yet in the DOM).`),a(`br`),c(`
The downside is that the event listeners for the activator(s) will be attached to the document
and not the activator itself. For that reason, it is not the recommended option if you have
the choice.`)],-1),s(v,{h3:``,slug:`external-activator--basic`},{default:r(()=>[...d[166]||=[c(`Trigger a menu on click of an external activator`,-1)]]),_:1}),s(x,{class:`example14`,"content-class":`text-center my4`,"app-classes-string":`text-center`},{pug:r(()=>[...d[168]||=[c(`w-button.cat-button(icon="mdi mdi-cat" xl)

w-menu(activator=".cat-button" arrow) Meow!`,-1)]]),html:r(()=>[...d[169]||=[c(`<w-button
  icon="mdi mdi-cat"
  xl
  class="cat-button">
</w-button>

<w-menu activator=".cat-button" arrow>
  Meow!
</w-menu>
`,-1)]]),default:r(()=>[s(y,{class:`cat-button`,icon:`mdi mdi-cat`,xl:``}),s(b,{"append-to":`.example14`,activator:`.cat-button`,arrow:``},{default:r(()=>[...d[167]||=[c(`Meow!`,-1)]]),_:1})]),_:1}),s(v,{h3:``,slug:`external-activator--2-activators`},{default:r(()=>[...d[170]||=[c(`Trigger the same menu from 2 different external activators`,-1)]]),_:1}),d[190]||=a(`p`,{class:`text-italic`},`But do you really need that? ;)`,-1),s(x,{class:`example15`,"content-class":`text-center my4`,"app-classes-string":`d-block text-center`},{pug:r(()=>[...d[171]||=[c(`w-button.pet-button.cat-button.ma4(
  icon="mdi mdi-cat"
  xl
  @click="activator = '.cat-button'")
w-button.pet-button.dog-button.ma4(
  icon="mdi mdi-dog"
  xl
  @click="activator = '.dog-button'")

w-menu(:activator="activator" arrow)
  | `+i(`{{ activator.includes('dog') ? 'Woof!' : 'Meow!' }}`),-1)]]),html:r(()=>[...d[172]||=[c(`<w-button
  icon="mdi mdi-cat"
  xl
  class="pet-button cat-button ma4"
  @click="activator = '.cat-button'">
</w-button>
<w-button
  icon="mdi mdi-dog"
  xl
  class="pet-button dog-button ma4"
  @click="activator = '.dog-button'">
</w-button>

<w-menu :activator="activator" arrow>
  `+i(`{{ activator.includes('dog') ? 'Woof!' : 'Meow!' }}`)+`
</w-menu>`,-1)]]),js:r(()=>[...d[173]||=[c(`data: () => ({
  activator: '.pet-button'
})
`,-1)]]),default:r(()=>[s(y,{class:`pet-button cat-button2 ma4`,icon:`mdi mdi-cat`,xl:``,onClick:d[9]||=e=>u.activator1=`.cat-button2`}),s(y,{class:`pet-button dog-button2 ma4`,icon:`mdi mdi-dog`,xl:``,onClick:d[10]||=e=>u.activator1=`.dog-button2`}),s(b,{"append-to":`.example15`,activator:u.activator1,arrow:``},{default:r(()=>[c(i(u.activator1.includes(`dog`)?`Woof!`:`Meow!`),1)]),_:1},8,[`activator`])]),_:1}),s(v,{h3:``,slug:`external-activator--2-activators-on-hover`},{default:r(()=>[...d[174]||=[c(`Trigger the same menu on hover of 2 different external activators`,-1)]]),_:1}),d[191]||=a(`p`,{class:`text-italic`},`But do you really need that too? ;)`,-1),s(D,{tip:``},{default:r(()=>[...d[175]||=[c(`Note that like in this example, a tiny delay may help positioning the detachable correctly
in case of multiple activators with different menu contents.
`,-1)]]),_:1}),s(x,{class:`example16`,"content-class":`text-center my4`,"app-classes-string":`d-block text-center`},{pug:r(()=>[...d[176]||=[c(`w-button.pet-button.cat-button.ma4(
  icon="mdi mdi-cat"
  xl
  @mouseenter="activator = '.cat-button';menuContent = 'Meow!'"
  @mouseleave="activator = '.pet-button'")
w-button.pet-button.dog-button.ma4(
  icon="mdi mdi-dog"
  xl
  @mouseenter="activator = '.dog-button';menuContent = 'Woof!'"
  @mouseleave="activator = '.pet-button'")

w-menu(:activator="activator" arrow show-on-hover :delay="100")
  | `+i(`{{ menuContent }}`),-1)]]),html:r(()=>[...d[177]||=[c(`<w-button
  icon="mdi mdi-cat"
  xl
  class="pet-button cat-button ma4"
  @mouseenter="activator = '.cat-button';menuContent = 'Meow!'"
  @mouseleave="activator = '.pet-button'">
</w-button>
<w-button
  icon="mdi mdi-dog"
  xl
  class="pet-button dog-button ma4"
  @mouseenter="activator = '.dog-button';menuContent = 'Woof!'"
  @mouseleave="activator = '.pet-button'">
</w-button>

<w-menu
  :activator="activator"
  arrow
  show-on-hover
  :delay="100">
  `+i(`{{ menuContent }}`)+`
</w-menu>`,-1)]]),js:r(()=>[...d[178]||=[c(`data: () => ({
  activator: '.pet-button',
  menuContent: ''
})`,-1)]]),default:r(()=>[s(y,{class:`pet-button2 cat-button3 ma4`,icon:`mdi mdi-cat`,xl:``,onMouseenter:d[11]||=e=>{u.activator2=`.cat-button3`,u.menuContent=`Meow!`},onMouseleave:d[12]||=e=>u.activator2=`.pet-button2`}),s(y,{class:`pet-button2 dog-button3 ma4`,icon:`mdi mdi-dog`,xl:``,onMouseenter:d[13]||=e=>{u.activator2=`.dog-button3`,u.menuContent=`Woof!`},onMouseleave:d[14]||=e=>u.activator2=`.pet-button2`}),s(b,{"append-to":`.example16`,activator:u.activator2,arrow:``,"show-on-hover":``,delay:100},{default:r(()=>[c(i(u.menuContent),1)]),_:1},8,[`activator`])]),_:1})])}var h=u({data:()=>({menuDisabled:!1,showMenu:!1,showListMenu1:!1,showListMenu2:!1,activator1:`.pet-button`,activator2:`.pet-button2`,menuContent:``,list:null})},[[`render`,m]]);function g(e,n,i,u,d,f){let p=t(`title-link`),m=t(`component-api`);return l(),o(`div`,null,[n[1]||=a(`div`,{class:`w-divider my12`},null,-1),s(p,{class:`title1`,h2:``},{default:r(()=>[...n[0]||=[c(`API`,-1)]]),_:1}),s(m,{class:`mt0`,items:f.props,descriptions:e.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),s(m,{items:e.slots,title:`Slots`},null,8,[`items`]),s(m,{items:f.events,title:`Events`},null,8,[`items`])])}var _={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the menu. Any truthy value will show the menu whereas any falsy value will hide it.`,showOnHover:`Triggers the menu apparition on activator hover instead of click by default. A mouseleave on the activator will hide the menu.`,hideOnMenuClick:`Hides the menu when a click is made inside the menu. For instance when selecting a list item inside a menu.`,color:`Applies a color to the menu's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the menu's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:`Applies a drop shadow to the menu element.`,custom:`By default, the menu layout is a <strong class="code">w-card</strong>. To have more flexibility, you can set this option to <code>true</code>.`,tile:`Removes the default border-radius and sets sharp edges on the menu.`,round:`Sets a maximum border-radius on the corners of the menu, giving it a round look.`,arrow:`Adds a small triangle on the edge of the menu, pointing toward the activator.`,noBorder:`Removes the default border from the menu element.`,transition:`Applies a particular transition to the menu element when showing and hiding.<br>Accepts all the transitions listed in the <a href="transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.`,menuClass:`Provide custom CSS classes for the menu element.`,titleClass:`Provide custom CSS classes for the menu's title when using the default card layout (when not using the <code>custom</code> prop).`,contentClass:`Provide custom CSS classes for the menu's content when using the default card layout (when not using the <code>custom</code> prop).`,appendTo:`Moves the menu element to another DOM element.<br>Accepts a valid query selector string. If the string is invalid, or the node is not found or if <code>true</code> is provided, <span class="code">.w-app</span> will be the target.<br>The default root is the <span class="code">w-app</span> or the <code>w-dialog</code> or <code>w-drawer</code> or <code>w-menu</code> or <code>w-overlay</code> it is placed in.`,noPosition:`Skip the menu positioning calculation, if you prefer to set it via CSS. Setting this prop to <code>true</code> will also disable the side positioning (top, left, right, bottom) and the alignments.`,fixed:`Sets the CSS position of the menu to <code>fixed</code> (absolute by default).`,top:`Places the menu at the top of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the top of its container otherwise.`,bottom:`Places the menu at the bottom of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the bottom of its container otherwise.`,left:`Places the menu at the left of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the left of its container otherwise.`,right:`Places the menu at the right of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the right of its container otherwise.`,alignTop:`Aligns the top of the menu with the top of the activator.`,alignBottom:`Aligns the bottom of the menu with the bottom of the activator.`,alignLeft:`Aligns the left side of the menu with the left side of the activator.`,alignRight:`Aligns the right side of the menu with the right side of the activator.`,zIndex:`Applies a z-index (positive or negative integer) to the menu.`,minWidth:`Sets a min-width on the menu.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value, or even the string <code>activator</code> to dinamically use the activator width as the min width.`,maxWidth:`Sets a max-width on the menu.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value, or even the string <code>activator</code> to dinamically use the activator width as the max width.`,overlay:`Displays a full screen overlay underneath the menu (uses the <span class="code">w-overlay</span> component).`,overlayClass:`Provide custom CSS classes for the <span class="code">w-overlay</span> component.`,overlayProps:`An object of props to pass down to the <span class="code">w-overlay</span> component for more control.`,persistent:`When set to <code>true</code>, clicking outside of the menu will not close the menu.`,activator:`Allows you to define one or multiple external activators for the menu through a DOM selector string.<br>This way, you don't need to use the <code>activator</code> slot, and you can activate the menu from different activators.`,delay:`A delay - in milliseconds - before opening the menu.<br>A small delay may help the menu position computing if the menu content changes at the moment the activator is activated. For instance, when defining multiple activators opening the same menu with different content.`,disable:`When set to <code>true</code>, the menu never opens on interaction or via <code>v-model</code>; the activator remains rendered.`},v={activator:{description:`<strong>This slot is required and must have the <code>v-on="on"</code> directive set on it for the menu to toggle correctly.</strong><br>The activator can be any visible DOM element or mounted component.`},title:{description:`By default (when <code>custom</code> is set to false), the menu uses a <span class="code">w-card</span>. This slot allows a custom title for the <span class="code">w-card</span>.`},default:{description:`The menu content.`},actions:{description:`By default (when <code>custom</code> is set to false), the menu uses a <span class="code">w-card</span>. This slot allows setting the actions slot of the <span class="code">w-card</span>.`}},y={input:`Emitted each time the state of the component changes (when opening or closing the menu).<br>Updates the v-model value in Vue 2.x only.`,"update:modelValue":`Emitted each time the state of the component changes (when opening or closing the menu).<br>Updates the v-model value in Vue 3 only.`,close:`Emitted on menu close.`,open:`Emitted on menu open.`},b=u({data:()=>({propsDescs:_,slots:v}),computed:{props(){return d.props},events(){return d.emits.reduce((e,t)=>(e[t]={description:y[t]||``})&&e,{})}}},[[`render`,g]]);function x(e,n,i,a,u,d){let f=t(`ui-component-title`),p=t(`examples`),m=t(`api`);return l(),o(`main`,null,[s(f,null,{default:r(()=>[...n[0]||=[c(`w-menu`,-1)]]),_:1}),s(p),s(m)])}var S=u({components:{Examples:h,Api:b}},[[`render`,x]]);export{S as default};