import{C as e,N as t,R as n,U as r,c as i,d as a,g as o,h as s,k as c,yt as l}from"./runtime-core.esm-bundler-BAjkj7eY.js";import{t as u}from"./_plugin-vue_export-helper-S3RvzygF.js";import{S as d}from"./index-CKcZQ2YR.js";var f={class:`mt4`},p={class:`ml1`};function m(u,d,m,h,g,_){let v=t(`title-link`),y=t(`w-button`),b=t(`w-menu`),x=t(`example`),S=t(`w-switch`),C=t(`w-flex`),w=t(`w-toolbar`),T=t(`w-card`),E=t(`w-list`),D=t(`alert`);return c(),a(`div`,null,[o(v,{h2:``},{default:r(()=>[...d[15]||=[s(`Basic`,-1)]]),_:1}),o(x,{class:`example1`,"content-class":`text-center pt5`,"app-classes-string":`align-center`},{pug:r(()=>[...d[18]||=[s(`w-menu
  template(#activator="{ on }")
    w-button(v-on="on") Show menu
  | Menu content`,-1)]]),html:r(()=>[...d[19]||=[s(`<w-menu>
  <template #activator="{ on }">
    <w-button v-on="on" class="mr3">
      Show menu on click
    </w-button>
  </template>
  Menu content
</w-menu>
`,-1)]]),default:r(()=>[o(b,{"append-to":`.example1`},{activator:r(({on:e})=>[o(y,n(e),{default:r(()=>[...d[16]||=[s(`Show menu`,-1)]]),_:1},16)]),default:r(()=>[d[17]||=s(`Menu content`,-1)]),_:1})]),_:1}),o(v,{h2:``},{default:r(()=>[...d[20]||=[s(`Show on click or on hover`,-1)]]),_:1}),o(x,{class:`example2`,"content-class":`pt5`},{pug:r(()=>[...d[25]||=[s(`| Show menu

w-menu
  template(#activator="{ on }")
    w-button.mx3(v-on="on") On click
  | Menu content

w-menu(show-on-hover)
  template(#activator="{ on }")
    w-button(v-on="on") On hover
  | Menu content`,-1)]]),html:r(()=>[...d[26]||=[s(`Show menu:

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
`,-1)]]),default:r(()=>[d[27]||=s(`Show menu:`,-1),o(b,{"append-to":`.example2`},{activator:r(({on:t})=>[o(y,e({class:`mx3`},n(t)),{default:r(()=>[...d[21]||=[s(`On click`,-1)]]),_:1},16)]),default:r(()=>[d[22]||=s(`Menu content`,-1)]),_:1}),o(b,{"append-to":`.example2`,"show-on-hover":``},{activator:r(({on:e})=>[o(y,n(e),{default:r(()=>[...d[23]||=[s(`On hover`,-1)]]),_:1},16)]),default:r(()=>[d[24]||=s(`Menu content`,-1)]),_:1})]),_:1}),o(v,{h2:``},{default:r(()=>[...d[28]||=[s(`Disabled`,-1)]]),_:1}),d[179]||=i(`p`,null,[s(`Use the `),i(`code`,null,`disable`),s(` prop to keep the activator visible while preventing the menu from opening
(including when `),i(`code`,null,`v-model`),s(` is `),i(`code`,null,`true`),s(`).`)],-1),o(x,{class:`example-disable`,"content-class":`text-center pt5`,"app-classes-string":`align-center`},{pug:r(()=>[...d[31]||=[s(`w-flex(align-center justify-center wrap :gap="4")
  w-switch.mb2(v-model="menuDisabled" label="Disable menu")
  w-menu(:disable="menuDisabled")
    template(#activator="{ on }")
      w-button(v-on="on") Show menu
    | Menu content`,-1)]]),html:r(()=>[...d[32]||=[s(`<w-flex align-center justify-center wrap :gap="4">
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
</w-flex>`,-1)]]),js:r(()=>[...d[33]||=[s(`data: () => ({
  menuDisabled: false
})
`,-1)]]),default:r(()=>[o(C,{"align-center":``,"justify-center":``,wrap:``,gap:4},{default:r(()=>[o(S,{class:`mb2`,modelValue:u.menuDisabled,"onUpdate:modelValue":d[0]||=e=>u.menuDisabled=e,label:`Disable menu`},null,8,[`modelValue`]),o(b,{"append-to":`.example-disable`,disable:u.menuDisabled},{activator:r(({on:e})=>[o(y,n(e),{default:r(()=>[...d[29]||=[s(`Show menu`,-1)]]),_:1},16)]),default:r(()=>[d[30]||=s(`Menu content`,-1)]),_:1},8,[`disable`])]),_:1})]),_:1}),o(v,{h2:``},{default:r(()=>[...d[34]||=[s(`Persistent menu`,-1)]]),_:1}),d[180]||=i(`p`,null,[s(`A persistent menu can only be closed by clicking on the activator again, or programmatically.`),i(`br`),s(`
Clicking outside the menu will not close it.`),i(`br`),s(`
Of course you can also add a button inside the menu to close it.`)],-1),o(x,{class:`example3`,"content-class":`text-center pt5`,"app-classes-string":`align-center`},{pug:r(()=>[...d[37]||=[s(`w-menu(persistent)
  template(#activator="{ on }")
    w-button.mb2.mr3(v-on="on") Show persistent menu
  | Click on the button again to close`,-1)]]),html:r(()=>[...d[38]||=[s(`<w-menu persistent>
  <template #activator="{ on }">
    <w-button v-on="on" class="mr3">
      Show persistent menu
    </w-button>
  </template>
  Click on the button again to close
</w-menu>
`,-1)]]),default:r(()=>[o(b,{"append-to":`.example3`,persistent:``},{activator:r(({on:t})=>[o(y,e({class:`mb2 mr3`},n(t)),{default:r(()=>[...d[35]||=[s(`Show persistent menu`,-1)]]),_:1},16)]),default:r(()=>[d[36]||=s(`Click on the button again to close`,-1)]),_:1})]),_:1}),o(v,{h2:``},{default:r(()=>[...d[39]||=[s(`Hide menu on click inside`,-1)]]),_:1}),d[181]||=i(`p`,null,`A click inside the menu will close it.`,-1),o(x,{class:`example4`,"content-class":`text-center pt5`,"app-classes-string":`align-center`},{pug:r(()=>[...d[42]||=[s(`w-menu(hide-on-menu-click)
  template(#activator="{ on }")
    w-button(v-on="on") Show menu
  | A click here will close the menu.`,-1)]]),html:r(()=>[...d[43]||=[s(`<w-menu hide-on-menu-click>
  <template #activator="{ on }">
    <w-button v-on="on">
      Show menu
    </w-button>
  </template>
  A click here will close the menu.
</w-menu>
`,-1)]]),default:r(()=>[o(b,{"append-to":`.example4`,"hide-on-menu-click":``},{activator:r(({on:e})=>[o(y,n(e),{default:r(()=>[...d[40]||=[s(`Show menu`,-1)]]),_:1},16)]),default:r(()=>[d[41]||=s(`A click here will close the menu.`,-1)]),_:1})]),_:1}),o(v,{h2:``},{default:r(()=>[...d[44]||=[s(`Position`,-1)]]),_:1}),o(x,{class:`example5`},{pug:r(()=>[...d[54]||=[s(`w-flex.my12(:gap="3" align-center wrap)
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
    | Menu content`,-1)]]),html:r(()=>[...d[55]||=[s(`<w-flex :gap="3" align-center wrap class="my12">
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
`,-1)]]),default:r(()=>[o(C,{class:`my6`,gap:3,"align-center":``,wrap:``},{default:r(()=>[d[53]||=s(`Show menu on:`,-1),o(b,{"append-to":`.example5`,left:``},{activator:r(({on:t})=>[o(y,e({class:`mx2`},n(t)),{default:r(()=>[...d[45]||=[s(`Left`,-1)]]),_:1},16)]),default:r(()=>[d[46]||=s(`Menu content`,-1)]),_:1}),o(b,{"append-to":`.example5`,top:``},{activator:r(({on:t})=>[o(y,e({class:`mx2`},n(t)),{default:r(()=>[...d[47]||=[s(`Top`,-1)]]),_:1},16)]),default:r(()=>[d[48]||=s(`Menu content`,-1)]),_:1}),o(b,{"append-to":`.example5`},{activator:r(({on:t})=>[o(y,e({class:`mx2`},n(t)),{default:r(()=>[...d[49]||=[s(`Bottom`,-1)]]),_:1},16)]),default:r(()=>[d[50]||=s(`Menu content`,-1)]),_:1}),o(b,{"append-to":`.example5`,right:``},{activator:r(({on:e})=>[o(y,n(e),{default:r(()=>[...d[51]||=[s(`Right`,-1)]]),_:1},16)]),default:r(()=>[d[52]||=s(`Menu content`,-1)]),_:1})]),_:1})]),_:1}),o(v,{h2:``},{default:r(()=>[...d[56]||=[s(`Alignments`,-1)]]),_:1}),d[182]||=i(`p`,null,`In addition to positions, you can align the menu with its activator.`,-1),o(x,{class:`example6`},{pug:r(()=>[...d[81]||=[s(`.title4.mb2 top position
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
  | Menu content`,-1)]]),html:r(()=>[...d[82]||=[s(`<div class="title4 mb2">Top position</div>
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
`,-1)]]),default:r(()=>[d[83]||=i(`div`,{class:`title4 mb2`},`Top position`,-1),o(b,{"append-to":`.example6`,top:``,"align-left":``},{activator:r(({on:t})=>[o(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[57]||=[s(`Align left`,-1)]]),_:1},16)]),default:r(()=>[d[58]||=s(`Menu content`,-1)]),_:1}),o(b,{"append-to":`.example6`,top:``},{activator:r(({on:t})=>[o(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[59]||=[s(`Centered`,-1)]]),_:1},16)]),default:r(()=>[d[60]||=s(`Menu content`,-1)]),_:1}),o(b,{"append-to":`.example6`,top:``,"align-right":``},{activator:r(({on:t})=>[o(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[61]||=[s(`Align right`,-1)]]),_:1},16)]),default:r(()=>[d[62]||=s(`Menu content`,-1)]),_:1}),d[84]||=i(`div`,{class:`title4 mt6 mb2`},`Bottom position`,-1),o(b,{"append-to":`.example6`,"align-left":``},{activator:r(({on:t})=>[o(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[63]||=[s(`Align left`,-1)]]),_:1},16)]),default:r(()=>[d[64]||=s(`Menu content`,-1)]),_:1}),o(b,{"append-to":`.example6`},{activator:r(({on:t})=>[o(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[65]||=[s(`Centered`,-1)]]),_:1},16)]),default:r(()=>[d[66]||=s(`Menu content`,-1)]),_:1}),o(b,{"append-to":`.example6`,"align-right":``},{activator:r(({on:t})=>[o(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[67]||=[s(`Align right`,-1)]]),_:1},16)]),default:r(()=>[d[68]||=s(`Menu content`,-1)]),_:1}),d[85]||=i(`div`,{class:`title4 mt6 mb2`},`Right position`,-1),o(b,{"append-to":`.example6`,right:``,"align-top":``},{activator:r(({on:t})=>[o(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[69]||=[s(`Align top`,-1)]]),_:1},16)]),default:r(()=>[d[70]||=s(`Menu content`,-1)]),_:1}),o(b,{"append-to":`.example6`,right:``},{activator:r(({on:t})=>[o(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[71]||=[s(`Centered`,-1)]]),_:1},16)]),default:r(()=>[d[72]||=s(`Menu content`,-1)]),_:1}),o(b,{"append-to":`.example6`,right:``,"align-bottom":``},{activator:r(({on:t})=>[o(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[73]||=[s(`Align bottom`,-1)]]),_:1},16)]),default:r(()=>[d[74]||=s(`Menu content`,-1)]),_:1}),d[86]||=i(`div`,{class:`title4 mt6 mb2`},`Left position`,-1),o(b,{"append-to":`.example6`,left:``,"align-top":``},{activator:r(({on:t})=>[o(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[75]||=[s(`Align top`,-1)]]),_:1},16)]),default:r(()=>[d[76]||=s(`Menu content`,-1)]),_:1}),o(b,{"append-to":`.example6`,left:``},{activator:r(({on:t})=>[o(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[77]||=[s(`Centered`,-1)]]),_:1},16)]),default:r(()=>[d[78]||=s(`Menu content`,-1)]),_:1}),o(b,{"append-to":`.example6`,left:``,"align-bottom":``},{activator:r(({on:t})=>[o(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[79]||=[s(`Align bottom`,-1)]]),_:1},16)]),default:r(()=>[d[80]||=s(`Menu content`,-1)]),_:1})]),_:1}),o(v,{h2:``},{default:r(()=>[...d[87]||=[s(`No position`,-1)]]),_:1}),d[183]||=i(`p`,null,[s(`By default, the menu is position at the bottom of the activator.
If you prefer to position the menu yourself via CSS, you can skip the position calculation via the
`),i(`code`,null,`no-position`),s(` prop.`)],-1),o(x,{class:`example7`,"content-class":`pb12`},{pug:r(()=>[...d[90]||=[s(`w-menu(no-position)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Show menu
  | Menu content`,-1)]]),html:r(()=>[...d[91]||=[s(`<w-menu no-position>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Show menu
    </w-button>
  </template>
  Menu content
</w-menu>`,-1)]]),css:r(()=>[...d[92]||=[s(`.w-menu {top: 10px;right: 20px;}`,-1)]]),default:r(()=>[o(b,{"append-to":`.example7 .example__render`,"no-position":``},{activator:r(({on:t})=>[o(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[88]||=[s(`Show menu`,-1)]]),_:1},16)]),default:r(()=>[d[89]||=s(`Menu content`,-1)]),_:1})]),_:1}),o(v,{h2:``},{default:r(()=>[...d[93]||=[s(`Arrow (Tooltip style)`,-1)]]),_:1}),d[184]||=i(`p`,null,[s(`Applies a tooltip style with the `),i(`code`,null,`arrow`),s(` option.`)],-1),o(x,{class:`example13`,"content-class":`text-center my4`,"app-classes-string":`align-center`},{pug:r(()=>[...d[96]||=[s(`w-menu(arrow)
  template(#activator="{ on }")
    w-button(v-on="on") Show menu
  | Menu content`,-1)]]),html:r(()=>[...d[97]||=[s(`<w-menu arrow>
  <template #activator="{ on }">
    <w-button v-on="on">
      Show menu
    </w-button>
  </template>
  Menu content
</w-menu>
`,-1)]]),default:r(()=>[o(b,{"append-to":`.example13`,arrow:``},{activator:r(({on:t})=>[o(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[94]||=[s(`Show menu`,-1)]]),_:1},16)]),default:r(()=>[d[95]||=s(`Menu content`,-1)]),_:1})]),_:1}),o(v,{h3:``},{default:r(()=>[...d[98]||=[s(`Automatic arrow position`,-1)]]),_:1}),d[185]||=i(`p`,null,[s(`The following examples illustrate how the arrow is positioned on the different sides and
alignments that are applied.`),i(`br`),s(`
The arrow position can also be overridden via CSS.
`)],-1),o(v,{h4:``},{default:r(()=>[...d[99]||=[s(`Horizontal`,-1)]]),_:1}),o(x,null,{pug:r(()=>[...d[112]||=[s(`w-flex(justify-center)
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
    | Menu content`,-1)]]),html:r(()=>[...d[113]||=[s(`<w-flex justify-center>
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
`,-1)]]),default:r(()=>[o(C,{"justify-center":``},{default:r(()=>[o(b,{arrow:``,top:``,"align-left":``},{activator:r(({on:t})=>[o(y,e({class:`ma2`},n(t)),{default:r(()=>[...d[100]||=[s(`Top, align left`,-1)]]),_:1},16)]),default:r(()=>[d[101]||=s(`Menu content`,-1)]),_:1}),o(b,{arrow:``,top:``},{activator:r(({on:t})=>[o(y,e({class:`ma2`},n(t)),{default:r(()=>[...d[102]||=[s(`Top, align center`,-1)]]),_:1},16)]),default:r(()=>[d[103]||=s(`Menu content`,-1)]),_:1}),o(b,{arrow:``,top:``,"align-right":``},{activator:r(({on:t})=>[o(y,e({class:`ma2`},n(t)),{default:r(()=>[...d[104]||=[s(`Top, align right`,-1)]]),_:1},16)]),default:r(()=>[d[105]||=s(`Menu content`,-1)]),_:1})]),_:1}),o(C,{"justify-center":``},{default:r(()=>[o(b,{arrow:``,"align-left":``},{activator:r(({on:t})=>[o(y,e({class:`ma2`},n(t)),{default:r(()=>[...d[106]||=[s(`Bottom, align left`,-1)]]),_:1},16)]),default:r(()=>[d[107]||=s(`Menu content`,-1)]),_:1}),o(b,{arrow:``},{activator:r(({on:t})=>[o(y,e({class:`ma2`},n(t)),{default:r(()=>[...d[108]||=[s(`Bottom, align center`,-1)]]),_:1},16)]),default:r(()=>[d[109]||=s(`Menu content`,-1)]),_:1}),o(b,{arrow:``,"align-right":``},{activator:r(({on:t})=>[o(y,e({class:`ma2`},n(t)),{default:r(()=>[...d[110]||=[s(`Bottom, align right`,-1)]]),_:1},16)]),default:r(()=>[d[111]||=s(`Menu content`,-1)]),_:1})]),_:1})]),_:1}),o(v,{h4:``},{default:r(()=>[...d[114]||=[s(`Vertical`,-1)]]),_:1}),o(x,null,{pug:r(()=>[...d[127]||=[s(`w-flex.text-center(justify-center)
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
      | Menu content`,-1)]]),html:r(()=>[...d[128]||=[s(`<w-flex text-center justify-center>
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
`,-1)]]),default:r(()=>[o(C,{class:`text-center`,"justify-center":``},{default:r(()=>[o(C,{column:``,"no-grow":``},{default:r(()=>[o(b,{arrow:``,left:``,"align-top":``},{activator:r(({on:t})=>[o(y,e({class:`ma2`},n(t)),{default:r(()=>[...d[115]||=[s(`Left, align top`,-1)]]),_:1},16)]),default:r(()=>[d[116]||=s(`Menu content`,-1)]),_:1}),o(b,{arrow:``,left:``},{activator:r(({on:t})=>[o(y,e({class:`ma2`},n(t)),{default:r(()=>[...d[117]||=[s(`Left, align center`,-1)]]),_:1},16)]),default:r(()=>[d[118]||=s(`Menu content`,-1)]),_:1}),o(b,{arrow:``,left:``,"align-bottom":``},{activator:r(({on:t})=>[o(y,e({class:`ma2`},n(t)),{default:r(()=>[...d[119]||=[s(`Left, align bottom`,-1)]]),_:1},16)]),default:r(()=>[d[120]||=s(`Menu content`,-1)]),_:1})]),_:1}),o(C,{column:``,"no-grow":``},{default:r(()=>[o(b,{arrow:``,right:``,"align-top":``},{activator:r(({on:t})=>[o(y,e({class:`ma2`},n(t)),{default:r(()=>[...d[121]||=[s(`Right, align top`,-1)]]),_:1},16)]),default:r(()=>[d[122]||=s(`Menu content`,-1)]),_:1}),o(b,{arrow:``,right:``},{activator:r(({on:t})=>[o(y,e({class:`ma2`},n(t)),{default:r(()=>[...d[123]||=[s(`Right, align center`,-1)]]),_:1},16)]),default:r(()=>[d[124]||=s(`Menu content`,-1)]),_:1}),o(b,{arrow:``,right:``,"align-bottom":``},{activator:r(({on:t})=>[o(y,e({class:`ma2`},n(t)),{default:r(()=>[...d[125]||=[s(`Right, align bottom`,-1)]]),_:1},16)]),default:r(()=>[d[126]||=s(`Menu content`,-1)]),_:1})]),_:1})]),_:1})]),_:1}),o(v,{h2:``},{default:r(()=>[...d[129]||=[s(`Color & background color`,-1)]]),_:1}),d[186]||=i(`p`,null,[s(`Like in most components, you can define a `),i(`code`,null,`color`),s(` and a  `),i(`code`,null,`bg-color`),s(`.`)],-1),o(x,{class:`example8`,"content-class":`text-center my4`,"app-classes-string":`align-center`},{pug:r(()=>[s(`w-menu(color="`+l(u.$store.state.darkMode?`blue-light4`:`blue-dark2`)+`" bg-color="`+l(u.$store.state.darkMode?`indigo-dark6`:`blue-light5`)+`")
  template(#activator="{ on }")
    w-button(v-on="on") Show a blue menu
  | Menu content`,1)]),html:r(()=>[s(`<w-menu color="`+l(u.$store.state.darkMode?`blue-light4`:`blue-dark2`)+`" bg-color="`+l(u.$store.state.darkMode?`indigo-dark6`:`blue-light5`)+`">
  <template #activator="{ on }">
    <w-button v-on="on">
      Show a blue menu
    </w-button>
  </template>
  Menu content
</w-menu>
`,1)]),default:r(()=>[o(b,{"append-to":`.example8`,color:u.$store.state.darkMode?`blue-light4`:`blue-dark2`,"bg-color":u.$store.state.darkMode?`indigo-dark6`:`blue-light5`},{activator:r(({on:t})=>[o(y,e({class:`ma1`},n(t)),{default:r(()=>[...d[130]||=[s(`Show a blue menu`,-1)]]),_:1},16)]),default:r(()=>[d[131]||=s(`Menu content`,-1)]),_:1},8,[`color`,`bg-color`])]),_:1}),o(v,{h2:``},{default:r(()=>[...d[132]||=[s(`Tile, round and shadow`,-1)]]),_:1}),o(x,{class:`example9`},{pug:r(()=>[...d[139]||=[s(`w-flex.my6(wrap :gap="3" justify-center)
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
    | Menu content`,-1)]]),html:r(()=>[...d[140]||=[s(`<w-flex wrap :gap="3"  justify-center class="my6">
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
`,-1)]]),default:r(()=>[o(C,{class:`my6`,wrap:``,"justify-center":``,gap:3},{default:r(()=>[o(b,{"append-to":`.example9`,tile:``},{activator:r(({on:t})=>[o(y,e({class:`mt1`},n(t)),{default:r(()=>[...d[133]||=[s(`Show a tile menu`,-1)]]),_:1},16)]),default:r(()=>[d[134]||=s(`Menu content`,-1)]),_:1}),o(b,{"append-to":`.example9`,round:``},{activator:r(({on:t})=>[o(y,e({class:`mt1`},n(t)),{default:r(()=>[...d[135]||=[s(`Show a round menu`,-1)]]),_:1},16)]),default:r(()=>[d[136]||=s(`Menu content`,-1)]),_:1}),o(b,{"append-to":`.example9`,shadow:``},{activator:r(({on:t})=>[o(y,e({class:`mt1`},n(t)),{default:r(()=>[...d[137]||=[s(`Show a shadow menu`,-1)]]),_:1},16)]),default:r(()=>[d[138]||=s(`Menu content`,-1)]),_:1})]),_:1})]),_:1}),o(v,{h2:``},{default:r(()=>[...d[141]||=[s(`Menu content: w-card`,-1)]]),_:1}),d[187]||=i(`p`,null,`By default the menu is a w-card, so it accepts all the props of a w-card.`,-1),o(x,{class:`example10`,"content-class":`text-center my4`,"app-classes-string":`align-center`},{pug:r(()=>[...d[151]||=[s(`w-menu(shadow v-model="showMenu")
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
    .pa3 This is some content in a w-card component.`,-1)]]),html:r(()=>[...d[152]||=[s(`<w-menu shadow v-model="showMenu">
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
</w-menu>`,-1)]]),js:r(()=>[...d[153]||=[s(`data: () => ({
  showMenu: false
})
`,-1)]]),default:r(()=>[o(b,{"append-to":`.example10`,shadow:``,modelValue:u.showMenu,"onUpdate:modelValue":d[5]||=e=>u.showMenu=e},{activator:r(()=>[o(y,{class:`mr3 mb2`,onClick:d[1]||=e=>u.showMenu=!0},{default:r(()=>[...d[142]||=[s(`Show a w-card menu`,-1)]]),_:1})]),default:r(()=>[d[146]||=i(`div`,{class:`title4`},`How much do you like Wave UI?`,-1),d[147]||=i(`p`,null,`Pick a serious answer.`,-1),o(C,{class:`pl10 mt4`,wrap:``,"justify-end":``},{default:r(()=>[o(y,{class:`mr1`,text:``,color:`green`,onClick:d[2]||=e=>u.showMenu=!1},{default:r(()=>[...d[143]||=[s(`Love it!`,-1)]]),_:1}),o(y,{class:`mr1`,text:``,color:`green`,onClick:d[3]||=e=>u.showMenu=!1},{default:r(()=>[...d[144]||=[s(`Love it!`,-1)]]),_:1}),o(y,{text:``,color:`green`,onClick:d[4]||=e=>u.showMenu=!1},{default:r(()=>[...d[145]||=[s(`Love it!`,-1)]]),_:1})]),_:1})]),_:1},8,[`modelValue`]),o(b,{"append-to":`.example10`,shadow:``,custom:``},{activator:r(({on:t})=>[o(y,e({class:`mb2`},n(t)),{default:r(()=>[...d[148]||=[s(`Show a custom menu`,-1)]]),_:1},16)]),default:r(()=>[o(T,{class:`base-color--bg`,"content-class":`pa0`},{default:r(()=>[o(w,null,{default:r(()=>[...d[149]||=[i(`div`,{class:`title3 ma0`},`Menu Title`,-1),i(`div`,{class:`spacer`},null,-1),i(`span`,{class:`ml1`},`Item 1`,-1),i(`span`,{class:`ml1`},`Item 2`,-1)]]),_:1}),d[150]||=i(`div`,{class:`pa3`},`This is some content in a w-card component.`,-1)]),_:1})]),_:1})]),_:1}),o(v,{h2:``},{default:r(()=>[...d[154]||=[s(`Custom content: List menu`,-1)]]),_:1}),d[188]||=i(`p`,null,[s(`By default the menu is a `),i(`strong`,{class:`code`},`w-card`),s(`. But if you need more flexibility, you can set the
`),i(`code`,null,`custom`),s(` prop and put whatever you want in the free-of-style menu.`),i(`br`),s(`
In this example, the menu is `),i(`code`,null,`persistent`),s(` so the user is forced to select an option from
the menu when open. Then on click of an option, the menu will hide thanks to the option
`),i(`code`,null,`hide-on-menu-click`),s(`.`)],-1),o(x,{class:`example11`,"content-class":`text-center my4`,"app-classes-string":`align-center`},{pug:r(()=>[...d[157]||=[s(`w-menu(custom hide-on-menu-click persistent shadow)
  template(#activator="{ on }")
    w-button(v-on="on") Show a list menu
  w-list.base-color--bg(
    v-model="listSelection"
    :items="listItems"
    item-class="px8")
div.mt4
  strong Current selection:
  code.ml1 `+l(`{{ listSelection || 'none' }}`),-1)]]),html:r(()=>[...d[158]||=[s(`<w-menu
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
  <code class="ml1">`+l(`{{ listSelection || 'none' }}`)+`</code>
</div>`,-1)]]),js:r(()=>[...d[159]||=[s(`data: () => ({
  showMenu: false,
  listSelection: null,
  listItems: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`,-1)]]),default:r(()=>[o(b,{"append-to":`.example11`,custom:``,"hide-on-menu-click":``,persistent:``,shadow:``},{activator:r(({on:e})=>[o(y,n(e),{default:r(()=>[...d[155]||=[s(`Show a list menu`,-1)]]),_:1},16)]),default:r(()=>[o(E,{class:`base-color--bg`,modelValue:u.list,"onUpdate:modelValue":d[6]||=e=>u.list=e,items:[{label:`Item 1`},{label:`Item 2`},{label:`Item 3`}],"item-class":`px8`},null,8,[`modelValue`])]),_:1}),i(`div`,f,[d[156]||=i(`strong`,null,`Current selection:`,-1),i(`code`,p,l(u.list||`none`),1)])]),_:1}),o(v,{h2:``},{default:r(()=>[...d[160]||=[s(`Menu with overlay`,-1)]]),_:1}),o(x,{class:`example12`,"content-class":`text-center my4`,"app-classes-string":`align-center`},{pug:r(()=>[...d[162]||=[s(`w-menu(v-model="showMenu" shadow custom overlay)
  template(#activator="{ on }")
    w-button(v-on="on") Show a menu & overlay
  w-list.base-color--bg(
    nav
    :items="listItems"
    item-class="px8"
    @item-select="showMenu = false")`,-1)]]),html:r(()=>[...d[163]||=[s(`<w-menu v-model="showMenu" shadow custom overlay>
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
</w-menu>`,-1)]]),js:r(()=>[...d[164]||=[s(`data: () => ({
  showMenu: false,
  listItems: [
    { label: 'Item 1', route: '#item1' },
    { label: 'Item 2', route: '#item2' },
    { label: 'Item 3', route: '#item3' }
  ]
})
`,-1)]]),default:r(()=>[o(b,{"append-to":`.example12`,modelValue:u.showListMenu2,"onUpdate:modelValue":d[8]||=e=>u.showListMenu2=e,shadow:``,custom:``,overlay:``},{activator:r(({on:e})=>[o(y,n(e),{default:r(()=>[...d[161]||=[s(`Show a menu & overlay`,-1)]]),_:1},16)]),default:r(()=>[o(E,{class:`base-color--bg`,nav:``,items:[{label:`Item 1`,route:`#item1`},{label:`Item 2`,route:`#item2`},{label:`Item 3`,route:`#item3`}],"item-class":`px8`,onItemSelect:d[7]||=e=>u.showListMenu2=!1})]),_:1},8,[`modelValue`])]),_:1}),o(v,{h2:``},{default:r(()=>[...d[165]||=[s(`External activator`,-1)]]),_:1}),d[189]||=i(`p`,null,[s(`External activators offer a great flexibility in the code and the advantage of accepting
multiple activators for the same menu (even elements that are not yet in the DOM).`),i(`br`),s(`
The downside is that the event listeners for the activator(s) will be attached to the document
and not the activator itself. For that reason, it is not the recommended option if you have
the choice.`)],-1),o(v,{h3:``,slug:`external-activator--basic`},{default:r(()=>[...d[166]||=[s(`Trigger a menu on click of an external activator`,-1)]]),_:1}),o(x,{class:`example14`,"content-class":`text-center my4`,"app-classes-string":`text-center`},{pug:r(()=>[...d[168]||=[s(`w-button.cat-button(icon="mdi mdi-cat" xl)

w-menu(activator=".cat-button" arrow) Meow!`,-1)]]),html:r(()=>[...d[169]||=[s(`<w-button
  icon="mdi mdi-cat"
  xl
  class="cat-button">
</w-button>

<w-menu activator=".cat-button" arrow>
  Meow!
</w-menu>
`,-1)]]),default:r(()=>[o(y,{class:`cat-button`,icon:`mdi mdi-cat`,xl:``}),o(b,{"append-to":`.example14`,activator:`.cat-button`,arrow:``},{default:r(()=>[...d[167]||=[s(`Meow!`,-1)]]),_:1})]),_:1}),o(v,{h3:``,slug:`external-activator--2-activators`},{default:r(()=>[...d[170]||=[s(`Trigger the same menu from 2 different external activators`,-1)]]),_:1}),d[190]||=i(`p`,{class:`text-italic`},`But do you really need that? ;)`,-1),o(x,{class:`example15`,"content-class":`text-center my4`,"app-classes-string":`d-block text-center`},{pug:r(()=>[...d[171]||=[s(`w-button.pet-button.cat-button.ma4(
  icon="mdi mdi-cat"
  xl
  @click="activator = '.cat-button'")
w-button.pet-button.dog-button.ma4(
  icon="mdi mdi-dog"
  xl
  @click="activator = '.dog-button'")

w-menu(:activator="activator" arrow)
  | `+l(`{{ activator.includes('dog') ? 'Woof!' : 'Meow!' }}`),-1)]]),html:r(()=>[...d[172]||=[s(`<w-button
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
  `+l(`{{ activator.includes('dog') ? 'Woof!' : 'Meow!' }}`)+`
</w-menu>`,-1)]]),js:r(()=>[...d[173]||=[s(`data: () => ({
  activator: '.pet-button'
})
`,-1)]]),default:r(()=>[o(y,{class:`pet-button cat-button2 ma4`,icon:`mdi mdi-cat`,xl:``,onClick:d[9]||=e=>u.activator1=`.cat-button2`}),o(y,{class:`pet-button dog-button2 ma4`,icon:`mdi mdi-dog`,xl:``,onClick:d[10]||=e=>u.activator1=`.dog-button2`}),o(b,{"append-to":`.example15`,activator:u.activator1,arrow:``},{default:r(()=>[s(l(u.activator1.includes(`dog`)?`Woof!`:`Meow!`),1)]),_:1},8,[`activator`])]),_:1}),o(v,{h3:``,slug:`external-activator--2-activators-on-hover`},{default:r(()=>[...d[174]||=[s(`Trigger the same menu on hover of 2 different external activators`,-1)]]),_:1}),d[191]||=i(`p`,{class:`text-italic`},`But do you really need that too? ;)`,-1),o(D,{tip:``},{default:r(()=>[...d[175]||=[s(`Note that like in this example, a tiny delay may help positioning the detachable correctly
in case of multiple activators with different menu contents.
`,-1)]]),_:1}),o(x,{class:`example16`,"content-class":`text-center my4`,"app-classes-string":`d-block text-center`},{pug:r(()=>[...d[176]||=[s(`w-button.pet-button.cat-button.ma4(
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
  | `+l(`{{ menuContent }}`),-1)]]),html:r(()=>[...d[177]||=[s(`<w-button
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
  `+l(`{{ menuContent }}`)+`
</w-menu>`,-1)]]),js:r(()=>[...d[178]||=[s(`data: () => ({
  activator: '.pet-button',
  menuContent: ''
})`,-1)]]),default:r(()=>[o(y,{class:`pet-button2 cat-button3 ma4`,icon:`mdi mdi-cat`,xl:``,onMouseenter:d[11]||=e=>{u.activator2=`.cat-button3`,u.menuContent=`Meow!`},onMouseleave:d[12]||=e=>u.activator2=`.pet-button2`}),o(y,{class:`pet-button2 dog-button3 ma4`,icon:`mdi mdi-dog`,xl:``,onMouseenter:d[13]||=e=>{u.activator2=`.dog-button3`,u.menuContent=`Woof!`},onMouseleave:d[14]||=e=>u.activator2=`.pet-button2`}),o(b,{"append-to":`.example16`,activator:u.activator2,arrow:``,"show-on-hover":``,delay:100},{default:r(()=>[s(l(u.menuContent),1)]),_:1},8,[`activator`])]),_:1})])}var h=u({data:()=>({menuDisabled:!1,showMenu:!1,showListMenu1:!1,showListMenu2:!1,activator1:`.pet-button`,activator2:`.pet-button2`,menuContent:``,list:null})},[[`render`,m]]);function g(e,n,l,u,d,f){let p=t(`title-link`),m=t(`component-api`);return c(),a(`div`,null,[n[1]||=i(`div`,{class:`w-divider my12`},null,-1),o(p,{class:`title1`,h2:``},{default:r(()=>[...n[0]||=[s(`API`,-1)]]),_:1}),o(m,{class:`mt0`,items:f.props,descriptions:e.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),o(m,{items:e.slots,title:`Slots`},null,8,[`items`]),o(m,{items:f.events,title:`Events`},null,8,[`items`])])}var _={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the menu. Any truthy value will show the menu whereas any falsy value will hide it.`,showOnHover:`Triggers the menu apparition on activator hover instead of click by default. A mouseleave on the activator will hide the menu.`,hideOnMenuClick:`Hides the menu when a click is made inside the menu. For instance when selecting a list item inside a menu.`,color:`Applies a color to the menu's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the menu's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:`Applies a drop shadow to the menu element.`,custom:`By default, the menu layout is a <strong class="code">w-card</strong>. To have more flexibility, you can set this option to <code>true</code>.`,tile:`Removes the default border-radius and sets sharp edges on the menu.`,round:`Sets a maximum border-radius on the corners of the menu, giving it a round look.`,arrow:`Adds a small triangle on the edge of the menu, pointing toward the activator.`,noBorder:`Removes the default border from the menu element.`,transition:`Applies a particular transition to the menu element when showing and hiding.<br>Accepts all the transitions listed in the <a href="transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.`,menuClass:`Provide custom CSS classes for the menu element.`,titleClass:`Provide custom CSS classes for the menu's title when using the default card layout (when not using the <code>custom</code> prop).`,contentClass:`Provide custom CSS classes for the menu's content when using the default card layout (when not using the <code>custom</code> prop).`,appendTo:`Moves the menu element to another DOM element.<br>Accepts a valid query selector string. If the string is invalid, or the node is not found or if <code>true</code> is provided, <span class="code">.w-app</span> will be the target.<br>The default root is the <span class="code">w-app</span> or the <code>w-dialog</code> or <code>w-drawer</code> or <code>w-menu</code> or <code>w-overlay</code> it is placed in.`,noPosition:`Skip the menu positioning calculation, if you prefer to set it via CSS. Setting this prop to <code>true</code> will also disable the side positioning (top, left, right, bottom) and the alignments.`,fixed:`Sets the CSS position of the menu to <code>fixed</code> (absolute by default).`,top:`Places the menu at the top of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the top of its container otherwise.`,bottom:`Places the menu at the bottom of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the bottom of its container otherwise.`,left:`Places the menu at the left of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the left of its container otherwise.`,right:`Places the menu at the right of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the right of its container otherwise.`,alignTop:`Aligns the top of the menu with the top of the activator.`,alignBottom:`Aligns the bottom of the menu with the bottom of the activator.`,alignLeft:`Aligns the left side of the menu with the left side of the activator.`,alignRight:`Aligns the right side of the menu with the right side of the activator.`,zIndex:`Applies a z-index (positive or negative integer) to the menu.`,minWidth:`Sets a min-width on the menu.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value, or even the string <code>activator</code> to dinamically use the activator width as the min width.`,maxWidth:`Sets a max-width on the menu.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value, or even the string <code>activator</code> to dinamically use the activator width as the max width.`,overlay:`Displays a full screen overlay underneath the menu (uses the <span class="code">w-overlay</span> component).`,overlayClass:`Provide custom CSS classes for the <span class="code">w-overlay</span> component.`,overlayProps:`An object of props to pass down to the <span class="code">w-overlay</span> component for more control.`,persistent:`When set to <code>true</code>, clicking outside of the menu will not close the menu.`,activator:`Allows you to define one or multiple external activators for the menu through a DOM selector string.<br>This way, you don't need to use the <code>activator</code> slot, and you can activate the menu from different activators.`,delay:`A delay - in milliseconds - before opening the menu.<br>A small delay may help the menu position computing if the menu content changes at the moment the activator is activated. For instance, when defining multiple activators opening the same menu with different content.`,disable:`When set to <code>true</code>, the menu never opens on interaction or via <code>v-model</code>; the activator remains rendered.`},v={activator:{description:`<strong>This slot is required and must have the <code>v-on="on"</code> directive set on it for the menu to toggle correctly.</strong><br>The activator can be any visible DOM element or mounted component.`},title:{description:`By default (when <code>custom</code> is set to false), the menu uses a <span class="code">w-card</span>. This slot allows a custom title for the <span class="code">w-card</span>.`},default:{description:`The menu content.`},actions:{description:`By default (when <code>custom</code> is set to false), the menu uses a <span class="code">w-card</span>. This slot allows setting the actions slot of the <span class="code">w-card</span>.`}},y={input:`Emitted each time the state of the component changes (when opening or closing the menu).<br>Updates the v-model value in Vue 2.x only.`,"update:modelValue":`Emitted each time the state of the component changes (when opening or closing the menu).<br>Updates the v-model value in Vue 3 only.`,close:`Emitted on menu close.`,open:`Emitted on menu open.`},b=u({data:()=>({propsDescs:_,slots:v}),computed:{props(){return d.props},events(){return d.emits.reduce((e,t)=>(e[t]={description:y[t]||``})&&e,{})}}},[[`render`,g]]);function x(e,n,i,l,u,d){let f=t(`ui-component-title`),p=t(`examples`),m=t(`api`);return c(),a(`main`,null,[o(f,null,{default:r(()=>[...n[0]||=[s(`w-menu`,-1)]]),_:1}),o(p),o(m)])}var S=u({components:{Examples:h,Api:b}},[[`render`,x]]);export{S as default};