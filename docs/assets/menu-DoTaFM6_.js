import{N as e,W as t,bt as n,c as r,d as i,g as a,h as o,k as s}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as c}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{S as l}from"./index-CRFKPP-0.js";var u={class:`mt4`},d={class:`ml1`};function f(c,l,f,p,m,h){let g=e(`title-link`),_=e(`w-button`),v=e(`w-menu`),y=e(`example`),b=e(`w-switch`),x=e(`w-flex`),S=e(`w-toolbar`),C=e(`w-card`),w=e(`w-list`),T=e(`alert`);return s(),i(`div`,null,[a(g,{h2:``},{default:t(()=>[...l[15]||=[o(`Basic`,-1)]]),_:1}),a(y,{class:`example1`,"content-class":`text-center pt5`,"app-classes-string":`align-center`},{pug:t(()=>[...l[18]||=[o(`w-menu
  w-button Show menu
  template(#content)
    | Menu content`,-1)]]),html:t(()=>[...l[19]||=[o(`<w-menu>
  <w-button class="mr3">
    Show menu on click
  </w-button>
  <template #content>
    Menu content
  </template>
</w-menu>
`,-1)]]),default:t(()=>[a(v,{"append-to":`.example1`},{content:t(()=>[...l[17]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,null,{default:t(()=>[...l[16]||=[o(`Show menu`,-1)]]),_:1})]),_:1})]),_:1}),a(g,{h2:``},{default:t(()=>[...l[20]||=[o(`Show on click or on hover`,-1)]]),_:1}),a(y,{class:`example2`,"content-class":`pt5`},{pug:t(()=>[...l[25]||=[o(`| Show menu

w-menu
  w-button.mx3 On click
  template(#content)
    | Menu content

w-menu(show-on-hover)
  w-button On hover
  template(#content)
    | Menu content`,-1)]]),html:t(()=>[...l[26]||=[o(`Show menu:

<w-menu>
  <w-button class="mx3">
    On click
  </w-button>
  <template #content>
    Menu content
  </template>
</w-menu>

<w-menu show-on-hover>
  <w-button>
    On hover
  </w-button>
  <template #content>
    Menu content
  </template>
</w-menu>
`,-1)]]),default:t(()=>[l[27]||=o(`Show menu:`,-1),a(v,{"append-to":`.example2`},{content:t(()=>[...l[22]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`mx3`},{default:t(()=>[...l[21]||=[o(`On click`,-1)]]),_:1})]),_:1}),a(v,{"append-to":`.example2`,"show-on-hover":``},{content:t(()=>[...l[24]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,null,{default:t(()=>[...l[23]||=[o(`On hover`,-1)]]),_:1})]),_:1})]),_:1}),a(g,{h2:``},{default:t(()=>[...l[28]||=[o(`Disabled`,-1)]]),_:1}),l[179]||=r(`p`,null,[o(`Use the `),r(`code`,null,`disable`),o(` prop to keep the activator visible while preventing the menu from opening
(including when `),r(`code`,null,`v-model`),o(` is `),r(`code`,null,`true`),o(`).`)],-1),a(y,{class:`example-disable`,"content-class":`text-center pt5`,"app-classes-string":`align-center`},{pug:t(()=>[...l[31]||=[o(`w-flex(align-center justify-center wrap :gap="4")
  w-switch.mb2(v-model="menuDisabled" label="Disable menu")
  w-menu(:disable="menuDisabled")
    w-button Show menu
    template(#content)
      | Menu content`,-1)]]),html:t(()=>[...l[32]||=[o(`<w-flex align-center justify-center wrap :gap="4">
  <w-switch
    class="mb2"
    v-model="menuDisabled"
    label="Disable menu">
  </w-switch>

  <w-menu :disable="menuDisabled">
    <w-button>
      Show menu
    </w-button>
    <template #content>
      Menu content
    </template>
  </w-menu>
</w-flex>`,-1)]]),js:t(()=>[...l[33]||=[o(`data: () => ({
  menuDisabled: false
})
`,-1)]]),default:t(()=>[a(x,{"align-center":``,"justify-center":``,wrap:``,gap:4},{default:t(()=>[a(b,{class:`mb2`,modelValue:c.menuDisabled,"onUpdate:modelValue":l[0]||=e=>c.menuDisabled=e,label:`Disable menu`},null,8,[`modelValue`]),a(v,{"append-to":`.example-disable`,disable:c.menuDisabled},{content:t(()=>[...l[30]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,null,{default:t(()=>[...l[29]||=[o(`Show menu`,-1)]]),_:1})]),_:1},8,[`disable`])]),_:1})]),_:1}),a(g,{h2:``},{default:t(()=>[...l[34]||=[o(`Persistent menu`,-1)]]),_:1}),l[180]||=r(`p`,null,[o(`A persistent menu can only be closed by clicking on the activator again, or programmatically.`),r(`br`),o(`
Clicking outside the menu will not close it.`),r(`br`),o(`
Of course you can also add a button inside the menu to close it.`)],-1),a(y,{class:`example3`,"content-class":`text-center pt5`,"app-classes-string":`align-center`},{pug:t(()=>[...l[37]||=[o(`w-menu(persistent)
  w-button.mb2.mr3 Show persistent menu
  template(#content)
    | Click on the button again to close`,-1)]]),html:t(()=>[...l[38]||=[o(`<w-menu persistent>
  <w-button class="mr3">
    Show persistent menu
  </w-button>
  <template #content>
    Click on the button again to close
  </template>
</w-menu>
`,-1)]]),default:t(()=>[a(v,{"append-to":`.example3`,persistent:``},{content:t(()=>[...l[36]||=[o(`Click on the button again to close`,-1)]]),default:t(()=>[a(_,{class:`mb2 mr3`},{default:t(()=>[...l[35]||=[o(`Show persistent menu`,-1)]]),_:1})]),_:1})]),_:1}),a(g,{h2:``},{default:t(()=>[...l[39]||=[o(`Hide menu on click inside`,-1)]]),_:1}),l[181]||=r(`p`,null,`A click inside the menu will close it.`,-1),a(y,{class:`example4`,"content-class":`text-center pt5`,"app-classes-string":`align-center`},{pug:t(()=>[...l[42]||=[o(`w-menu(hide-on-menu-click)
  w-button Show menu
  template(#content)
    | A click here will close the menu.`,-1)]]),html:t(()=>[...l[43]||=[o(`<w-menu hide-on-menu-click>
  <w-button>
    Show menu
  </w-button>
  <template #content>
    A click here will close the menu.
  </template>
</w-menu>
`,-1)]]),default:t(()=>[a(v,{"append-to":`.example4`,"hide-on-menu-click":``},{content:t(()=>[...l[41]||=[o(`A click here will close the menu.`,-1)]]),default:t(()=>[a(_,null,{default:t(()=>[...l[40]||=[o(`Show menu`,-1)]]),_:1})]),_:1})]),_:1}),a(g,{h2:``},{default:t(()=>[...l[44]||=[o(`Position`,-1)]]),_:1}),a(y,{class:`example5`},{pug:t(()=>[...l[54]||=[o(`w-flex.my12(:gap="3" align-center wrap)
  | Show menu on:

  w-menu(left)
    w-button.mx2 Left
    template(#content)
      | Menu content
  w-menu(top)
    w-button.mx2 Top
    template(#content)
      | Menu content
  w-menu
    w-button.mx2 Bottom
    template(#content)
      | Menu content
  w-menu(right)
    w-button Right
    template(#content)
      | Menu content`,-1)]]),html:t(()=>[...l[55]||=[o(`<w-flex :gap="3" align-center wrap class="my12">
  Show menu on:

  <w-menu left>
    <w-button class="mx2">
      Left
    </w-button>
    <template #content>
      Menu content
    </template>
  </w-menu>

  <w-menu top>
    <w-button class="mx2">
      Top
    </w-button>
    <template #content>
      Menu content
    </template>
  </w-menu>

  <w-menu>
    <w-button class="mx2">
      Bottom
    </w-button>
    <template #content>
      Menu content
    </template>
  </w-menu>

  <w-menu right>
    <w-button>
      Right
    </w-button>
    <template #content>
      Menu content
    </template>
  </w-menu>
</w-flex>
`,-1)]]),default:t(()=>[a(x,{class:`my6`,gap:3,"align-center":``,wrap:``},{default:t(()=>[l[53]||=o(`Show menu on:`,-1),a(v,{"append-to":`.example5`,left:``},{content:t(()=>[...l[46]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`mx2`},{default:t(()=>[...l[45]||=[o(`Left`,-1)]]),_:1})]),_:1}),a(v,{"append-to":`.example5`,top:``},{content:t(()=>[...l[48]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`mx2`},{default:t(()=>[...l[47]||=[o(`Top`,-1)]]),_:1})]),_:1}),a(v,{"append-to":`.example5`},{content:t(()=>[...l[50]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`mx2`},{default:t(()=>[...l[49]||=[o(`Bottom`,-1)]]),_:1})]),_:1}),a(v,{"append-to":`.example5`,right:``},{content:t(()=>[...l[52]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,null,{default:t(()=>[...l[51]||=[o(`Right`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(g,{h2:``},{default:t(()=>[...l[56]||=[o(`Alignments`,-1)]]),_:1}),l[182]||=r(`p`,null,`In addition to positions, you can align the menu with its activator.`,-1),a(y,{class:`example6`},{pug:t(()=>[...l[81]||=[o(`.title4.mb2 top position
w-menu(top align-left)
  w-button.ma1 Align left
  template(#content)
    | Menu content
w-menu(top)
  w-button.ma1 Centered
  template(#content)
    | Menu content
w-menu(top align-right)
  w-button.ma1 Align right
  template(#content)
    | Menu content

.title4.mt6.mb2 Bottom position
w-menu(align-left)
  w-button.ma1 Align left
  template(#content)
    | Menu content
w-menu
  w-button.ma1 Centered
  template(#content)
    | Menu content
w-menu(align-right)
  w-button.ma1 Align right
  template(#content)
    | Menu content

.title4.mt6.mb2 Right position
w-menu(right align-top)
  w-button.ma1 Align top
  template(#content)
    | Menu content
w-menu(right)
  w-button.ma1 Centered
  template(#content)
    | Menu content
w-menu(right align-bottom)
  w-button.ma1 Align bottom
  template(#content)
    | Menu content

.title4.mt6.mb2 Left position
w-menu(left align-top)
  w-button.ma1 Align top
  template(#content)
    | Menu content
w-menu(left)
  w-button.ma1 Centered
  template(#content)
    | Menu content
w-menu(left align-bottom)
  w-button.ma1 Align bottom
  template(#content)
    | Menu content`,-1)]]),html:t(()=>[...l[82]||=[o(`<div class="title4 mb2">Top position</div>
<w-menu top align-left>
  <w-button class="ma1">
    Align left
  </w-button>
  <template #content>
    Menu content
  </template>
</w-menu>

<w-menu top>
  <w-button class="ma1">
    Centered
  </w-button>
  <template #content>
    Menu content
  </template>
</w-menu>

<w-menu top align-right>
  <w-button class="ma1">
    Align right
  </w-button>
  <template #content>
    Menu content
  </template>
</w-menu>

<div class="title4 mt6 mb2">Bottom position</div>
<w-menu align-left>
  <w-button class="ma1">
    Align left
  </w-button>
  <template #content>
    Menu content
  </template>
</w-menu>

<w-menu>
  <w-button class="ma1">
    Centered
  </w-button>
  <template #content>
    Menu content
  </template>
</w-menu>

<w-menu align-right>
  <w-button class="ma1">
    Align right
  </w-button>
  <template #content>
    Menu content
  </template>
</w-menu>

<div class="title4 mt6 mb2">Right position</div>
<w-menu right align-top>
  <w-button class="ma1">
    Align top
  </w-button>
  <template #content>
    Menu content
  </template>
</w-menu>

<w-menu right>
  <w-button class="ma1">
    Centered
  </w-button>
  <template #content>
    Menu content
  </template>
</w-menu>

<w-menu right align-bottom>
  <w-button class="ma1">
    Align bottom
  </w-button>
  <template #content>
    Menu content
  </template>
</w-menu>

<div class="title4 mt6 mb2">Left position</div>
<w-menu left align-top>
  <w-button class="ma1">
    Align top
  </w-button>
  <template #content>
    Menu content
  </template>
</w-menu>

<w-menu left>
  <w-button class="ma1">
    Centered
  </w-button>
  <template #content>
    Menu content
  </template>
</w-menu>

<w-menu left align-bottom>
  <w-button class="ma1">
    Align bottom
  </w-button>
  <template #content>
    Menu content
  </template>
</w-menu>
`,-1)]]),default:t(()=>[l[83]||=r(`div`,{class:`title4 mb2`},`Top position`,-1),a(v,{"append-to":`.example6`,top:``,"align-left":``},{content:t(()=>[...l[58]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`ma1`},{default:t(()=>[...l[57]||=[o(`Align left`,-1)]]),_:1})]),_:1}),a(v,{"append-to":`.example6`,top:``},{content:t(()=>[...l[60]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`ma1`},{default:t(()=>[...l[59]||=[o(`Centered`,-1)]]),_:1})]),_:1}),a(v,{"append-to":`.example6`,top:``,"align-right":``},{content:t(()=>[...l[62]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`ma1`},{default:t(()=>[...l[61]||=[o(`Align right`,-1)]]),_:1})]),_:1}),l[84]||=r(`div`,{class:`title4 mt6 mb2`},`Bottom position`,-1),a(v,{"append-to":`.example6`,"align-left":``},{content:t(()=>[...l[64]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`ma1`},{default:t(()=>[...l[63]||=[o(`Align left`,-1)]]),_:1})]),_:1}),a(v,{"append-to":`.example6`},{content:t(()=>[...l[66]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`ma1`},{default:t(()=>[...l[65]||=[o(`Centered`,-1)]]),_:1})]),_:1}),a(v,{"append-to":`.example6`,"align-right":``},{content:t(()=>[...l[68]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`ma1`},{default:t(()=>[...l[67]||=[o(`Align right`,-1)]]),_:1})]),_:1}),l[85]||=r(`div`,{class:`title4 mt6 mb2`},`Right position`,-1),a(v,{"append-to":`.example6`,right:``,"align-top":``},{content:t(()=>[...l[70]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`ma1`},{default:t(()=>[...l[69]||=[o(`Align top`,-1)]]),_:1})]),_:1}),a(v,{"append-to":`.example6`,right:``},{content:t(()=>[...l[72]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`ma1`},{default:t(()=>[...l[71]||=[o(`Centered`,-1)]]),_:1})]),_:1}),a(v,{"append-to":`.example6`,right:``,"align-bottom":``},{content:t(()=>[...l[74]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`ma1`},{default:t(()=>[...l[73]||=[o(`Align bottom`,-1)]]),_:1})]),_:1}),l[86]||=r(`div`,{class:`title4 mt6 mb2`},`Left position`,-1),a(v,{"append-to":`.example6`,left:``,"align-top":``},{content:t(()=>[...l[76]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`ma1`},{default:t(()=>[...l[75]||=[o(`Align top`,-1)]]),_:1})]),_:1}),a(v,{"append-to":`.example6`,left:``},{content:t(()=>[...l[78]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`ma1`},{default:t(()=>[...l[77]||=[o(`Centered`,-1)]]),_:1})]),_:1}),a(v,{"append-to":`.example6`,left:``,"align-bottom":``},{content:t(()=>[...l[80]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`ma1`},{default:t(()=>[...l[79]||=[o(`Align bottom`,-1)]]),_:1})]),_:1})]),_:1}),a(g,{h2:``},{default:t(()=>[...l[87]||=[o(`No position`,-1)]]),_:1}),l[183]||=r(`p`,null,[o(`By default, the menu is position at the bottom of the activator.
If you prefer to position the menu yourself via CSS, you can skip the position calculation via the
`),r(`code`,null,`no-position`),o(` prop.`)],-1),a(y,{class:`example7`,"content-class":`pb12`},{pug:t(()=>[...l[90]||=[o(`w-menu(no-position)
  w-button.ma1 Show menu
  template(#content)
    | Menu content`,-1)]]),html:t(()=>[...l[91]||=[o(`<w-menu no-position>
  <w-button class="ma1">
    Show menu
  </w-button>
  <template #content>
    Menu content
  </template>
</w-menu>`,-1)]]),css:t(()=>[...l[92]||=[o(`.w-menu {top: 10px;right: 20px;}`,-1)]]),default:t(()=>[a(v,{"append-to":`.example7 .example__render`,"no-position":``},{content:t(()=>[...l[89]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`ma1`},{default:t(()=>[...l[88]||=[o(`Show menu`,-1)]]),_:1})]),_:1})]),_:1}),a(g,{h2:``},{default:t(()=>[...l[93]||=[o(`Arrow (Tooltip style)`,-1)]]),_:1}),l[184]||=r(`p`,null,[o(`Applies a tooltip style with the `),r(`code`,null,`arrow`),o(` option.`)],-1),a(y,{class:`example13`,"content-class":`text-center my4`,"app-classes-string":`align-center`},{pug:t(()=>[...l[96]||=[o(`w-menu(arrow)
  w-button Show menu
  template(#content)
    | Menu content`,-1)]]),html:t(()=>[...l[97]||=[o(`<w-menu arrow>
  <w-button>
    Show menu
  </w-button>
  <template #content>
    Menu content
  </template>
</w-menu>
`,-1)]]),default:t(()=>[a(v,{"append-to":`.example13`,arrow:``},{content:t(()=>[...l[95]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`ma1`},{default:t(()=>[...l[94]||=[o(`Show menu`,-1)]]),_:1})]),_:1})]),_:1}),a(g,{h3:``},{default:t(()=>[...l[98]||=[o(`Automatic arrow position`,-1)]]),_:1}),l[185]||=r(`p`,null,[o(`The following examples illustrate how the arrow is positioned on the different sides and
alignments that are applied.`),r(`br`),o(`
The arrow position can also be overridden via CSS.
`)],-1),a(g,{h4:``},{default:t(()=>[...l[99]||=[o(`Horizontal`,-1)]]),_:1}),a(y,null,{pug:t(()=>[...l[112]||=[o(`w-flex(justify-center)
  w-menu(arrow top align-left)
    w-button.ma2 Top, align left
    template(#content)
      | Menu content
  w-menu(arrow top)
    w-button.ma2 Top, align center
    template(#content)
      | Menu content
  w-menu(arrow top align-right)
    w-button.ma2 Top, align right
    template(#content)
      | Menu content
w-flex(justify-center)
  w-menu(arrow align-left)
    w-button.ma2 Bottom, align left
    template(#content)
      | Menu content
  w-menu(arrow)
    w-button.ma2 Bottom, align center
    template(#content)
      | Menu content
  w-menu(arrow align-right)
    w-button.ma2 Bottom, align right
    template(#content)
      | Menu content`,-1)]]),html:t(()=>[...l[113]||=[o(`<w-flex justify-center>
  <w-menu arrow top align-left>
    <w-button class="ma1">
      Top, align left
    </w-button>
    <template #content>
      Menu content
    </template>
  </w-menu>

  <w-menu arrow top>
    <w-button class="ma1">
      Top, align center
    </w-button>
    <template #content>
      Menu content
    </template>
  </w-menu>

  <w-menu arrow top align-right>
    <w-button class="ma1">
      Top, align right
    </w-button>
    <template #content>
      Menu content
    </template>
  </w-menu>
</w-flex>

<w-flex justify-center>
  <w-menu arrow align-left>
    <w-button class="ma1">
      Bottom, align left
    </w-button>
    <template #content>
      Menu content
    </template>
  </w-menu>

  <w-menu arrow>
    <w-button class="ma1">
      Bottom, align center
    </w-button>
    <template #content>
      Menu content
    </template>
  </w-menu>

  <w-menu arrow align-right>
    <w-button class="ma1">
      Bottom, align right
    </w-button>
    <template #content>
      Menu content
    </template>
  </w-menu>
</w-flex>
`,-1)]]),default:t(()=>[a(x,{"justify-center":``},{default:t(()=>[a(v,{arrow:``,top:``,"align-left":``},{content:t(()=>[...l[101]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`ma2`},{default:t(()=>[...l[100]||=[o(`Top, align left`,-1)]]),_:1})]),_:1}),a(v,{arrow:``,top:``},{content:t(()=>[...l[103]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`ma2`},{default:t(()=>[...l[102]||=[o(`Top, align center`,-1)]]),_:1})]),_:1}),a(v,{arrow:``,top:``,"align-right":``},{content:t(()=>[...l[105]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`ma2`},{default:t(()=>[...l[104]||=[o(`Top, align right`,-1)]]),_:1})]),_:1})]),_:1}),a(x,{"justify-center":``},{default:t(()=>[a(v,{arrow:``,"align-left":``},{content:t(()=>[...l[107]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`ma2`},{default:t(()=>[...l[106]||=[o(`Bottom, align left`,-1)]]),_:1})]),_:1}),a(v,{arrow:``},{content:t(()=>[...l[109]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`ma2`},{default:t(()=>[...l[108]||=[o(`Bottom, align center`,-1)]]),_:1})]),_:1}),a(v,{arrow:``,"align-right":``},{content:t(()=>[...l[111]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`ma2`},{default:t(()=>[...l[110]||=[o(`Bottom, align right`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(g,{h4:``},{default:t(()=>[...l[114]||=[o(`Vertical`,-1)]]),_:1}),a(y,null,{pug:t(()=>[...l[127]||=[o(`w-flex.text-center(justify-center)
  w-flex(column no-grow)
    w-menu(arrow left align-top)
      w-button.ma2 Left, align top
      template(#content)
        | Menu content
    w-menu(arrow left)
      w-button.ma2 Left, align center
      template(#content)
        | Menu content
    w-menu(arrow left align-bottom)
      w-button.ma2 Left, align bottom
      template(#content)
        | Menu content
  w-flex(column no-grow)
    w-menu(arrow right align-top)
      w-button.ma2 Right, align top
      template(#content)
        | Menu content
    w-menu(arrow right)
      w-button.ma2 Right, align center
      template(#content)
        | Menu content
    w-menu(arrow right align-bottom)
      w-button.ma2 Right, align bottom
      template(#content)
        | Menu content`,-1)]]),html:t(()=>[...l[128]||=[o(`<w-flex text-center justify-center>
  <w-flex column no-grow>
    <w-menu arrow left align-top>
      <w-button class="ma1">
        Left, align top
      </w-button>
      <template #content>
        Menu content
      </template>
    </w-menu>

    <w-menu arrow left>
      <w-button class="ma1">
        Left, align center
      </w-button>
      <template #content>
        Menu content
      </template>
    </w-menu>

    <w-menu arrow left align-bottom>
      <w-button class="ma1">
        Left, align bottom
      </w-button>
      <template #content>
        Menu content
      </template>
    </w-menu>
  </w-flex>

  <w-flex column no-grow>
    <w-menu arrow right align-top>
      <w-button class="ma1">
        Right, align top
      </w-button>
      <template #content>
        Menu content
      </template>
    </w-menu>

    <w-menu arrow right>
      <w-button class="ma1">
        Right, align center
      </w-button>
      <template #content>
        Menu content
      </template>
    </w-menu>

    <w-menu arrow right align-bottom>
      <w-button class="ma1">
        Right, align bottom
      </w-button>
      <template #content>
        Menu content
      </template>
    </w-menu>
  </w-flex>
</w-flex>
`,-1)]]),default:t(()=>[a(x,{class:`text-center`,"justify-center":``},{default:t(()=>[a(x,{column:``,"no-grow":``},{default:t(()=>[a(v,{arrow:``,left:``,"align-top":``},{content:t(()=>[...l[116]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`ma2`},{default:t(()=>[...l[115]||=[o(`Left, align top`,-1)]]),_:1})]),_:1}),a(v,{arrow:``,left:``},{content:t(()=>[...l[118]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`ma2`},{default:t(()=>[...l[117]||=[o(`Left, align center`,-1)]]),_:1})]),_:1}),a(v,{arrow:``,left:``,"align-bottom":``},{content:t(()=>[...l[120]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`ma2`},{default:t(()=>[...l[119]||=[o(`Left, align bottom`,-1)]]),_:1})]),_:1})]),_:1}),a(x,{column:``,"no-grow":``},{default:t(()=>[a(v,{arrow:``,right:``,"align-top":``},{content:t(()=>[...l[122]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`ma2`},{default:t(()=>[...l[121]||=[o(`Right, align top`,-1)]]),_:1})]),_:1}),a(v,{arrow:``,right:``},{content:t(()=>[...l[124]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`ma2`},{default:t(()=>[...l[123]||=[o(`Right, align center`,-1)]]),_:1})]),_:1}),a(v,{arrow:``,right:``,"align-bottom":``},{content:t(()=>[...l[126]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`ma2`},{default:t(()=>[...l[125]||=[o(`Right, align bottom`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(g,{h2:``},{default:t(()=>[...l[129]||=[o(`Color & background color`,-1)]]),_:1}),l[186]||=r(`p`,null,[o(`Like in most components, you can define a `),r(`code`,null,`color`),o(` and a  `),r(`code`,null,`bg-color`),o(`.`)],-1),a(y,{class:`example8`,"content-class":`text-center my4`,"app-classes-string":`align-center`},{pug:t(()=>[o(`w-menu(color="`+n(c.$store.state.darkMode?`blue-light4`:`blue-dark2`)+`" bg-color="`+n(c.$store.state.darkMode?`indigo-dark6`:`blue-light5`)+`")
  w-button Show a blue menu
  template(#content)
    | Menu content`,1)]),html:t(()=>[o(`<w-menu color="`+n(c.$store.state.darkMode?`blue-light4`:`blue-dark2`)+`" bg-color="`+n(c.$store.state.darkMode?`indigo-dark6`:`blue-light5`)+`">
  <w-button>
    Show a blue menu
  </w-button>
  <template #content>
    Menu content
  </template>
</w-menu>
`,1)]),default:t(()=>[a(v,{"append-to":`.example8`,color:c.$store.state.darkMode?`blue-light4`:`blue-dark2`,"bg-color":c.$store.state.darkMode?`indigo-dark6`:`blue-light5`},{content:t(()=>[...l[131]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`ma1`},{default:t(()=>[...l[130]||=[o(`Show a blue menu`,-1)]]),_:1})]),_:1},8,[`color`,`bg-color`])]),_:1}),a(g,{h2:``},{default:t(()=>[...l[132]||=[o(`Tile, round and shadow`,-1)]]),_:1}),a(y,{class:`example9`},{pug:t(()=>[...l[139]||=[o(`w-flex.my6(wrap :gap="3" justify-center)
  w-menu(tile)
    w-button Show a tile menu
    template(#content)
      | Menu content
  w-menu(round)
    w-button Show a round menu
    template(#content)
      | Menu content
  w-menu(shadow)
    w-button Show a shadow menu
    template(#content)
      | Menu content`,-1)]]),html:t(()=>[...l[140]||=[o(`<w-flex wrap :gap="3"  justify-center class="my6">
  <w-menu tile>
    <w-button>
      Show a tile menu
    </w-button>
    <template #content>
      Menu content
    </template>
  </w-menu>

  <w-menu round>
    <w-button>
      Show a round menu
    </w-button>
    <template #content>
      Menu content
    </template>
  </w-menu>

  <w-menu shadow>
    <w-button>
      Show a shadow menu
    </w-button>
    <template #content>
      Menu content
    </template>
  </w-menu>
</w-flex>
`,-1)]]),default:t(()=>[a(x,{class:`my6`,wrap:``,"justify-center":``,gap:3},{default:t(()=>[a(v,{"append-to":`.example9`,tile:``},{content:t(()=>[...l[134]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`mt1`},{default:t(()=>[...l[133]||=[o(`Show a tile menu`,-1)]]),_:1})]),_:1}),a(v,{"append-to":`.example9`,round:``},{content:t(()=>[...l[136]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`mt1`},{default:t(()=>[...l[135]||=[o(`Show a round menu`,-1)]]),_:1})]),_:1}),a(v,{"append-to":`.example9`,shadow:``},{content:t(()=>[...l[138]||=[o(`Menu content`,-1)]]),default:t(()=>[a(_,{class:`mt1`},{default:t(()=>[...l[137]||=[o(`Show a shadow menu`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(g,{h2:``},{default:t(()=>[...l[141]||=[o(`Menu content: w-card`,-1)]]),_:1}),l[187]||=r(`p`,null,`By default the menu is a w-card, so it accepts all the props of a w-card.`,-1),a(y,{class:`example10`,"content-class":`text-center my4`,"app-classes-string":`align-center`},{pug:t(()=>[...l[151]||=[o(`w-menu(shadow v-model="showMenu")
  w-button.mr3(@click="showMenu = true") Show a w-card menu
  template(#content)
    .title4 How much do you like Wave UI?
    p Pick a serious answer.
    w-flex.pl10.mt4(wrap justify-end)
      w-button.mr1(text color="green" @click="showMenu = false") Love it!
      w-button.mr1(text color="green" @click="showMenu = false") Love it!
      w-button(text color="green" @click="showMenu = false") Love it!
w-menu(shadow custom)
  w-button Show a custom menu
  template(#content)
    w-card(content-class="pa0")
      w-toolbar
        .title3.ma0 Menu Title
        .spacer
        span.ml1 Item 1
        span.ml1 Item 2
      .pa3 This is some content in a w-card component.`,-1)]]),html:t(()=>[...l[152]||=[o(`<w-menu shadow v-model="showMenu">
  <w-button
    class="mr3"
    @click="showMenu = true">
    Show a w-card menu
  </w-button>

  <template #content>
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
  </template>
</w-menu>

<w-menu shadow custom>
  <w-button>
    Show a custom menu
  </w-button>

  <template #content>
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
  </template>
</w-menu>`,-1)]]),js:t(()=>[...l[153]||=[o(`data: () => ({
  showMenu: false
})
`,-1)]]),default:t(()=>[a(v,{"append-to":`.example10`,shadow:``,modelValue:c.showMenu,"onUpdate:modelValue":l[5]||=e=>c.showMenu=e},{content:t(()=>[l[146]||=r(`div`,{class:`title4`},`How much do you like Wave UI?`,-1),l[147]||=r(`p`,null,`Pick a serious answer.`,-1),a(x,{class:`pl10 mt4`,wrap:``,"justify-end":``},{default:t(()=>[a(_,{class:`mr1`,text:``,color:`green`,onClick:l[2]||=e=>c.showMenu=!1},{default:t(()=>[...l[143]||=[o(`Love it!`,-1)]]),_:1}),a(_,{class:`mr1`,text:``,color:`green`,onClick:l[3]||=e=>c.showMenu=!1},{default:t(()=>[...l[144]||=[o(`Love it!`,-1)]]),_:1}),a(_,{text:``,color:`green`,onClick:l[4]||=e=>c.showMenu=!1},{default:t(()=>[...l[145]||=[o(`Love it!`,-1)]]),_:1})]),_:1})]),default:t(()=>[a(_,{class:`mr3 mb2`,onClick:l[1]||=e=>c.showMenu=!0},{default:t(()=>[...l[142]||=[o(`Show a w-card menu`,-1)]]),_:1})]),_:1},8,[`modelValue`]),a(v,{"append-to":`.example10`,shadow:``,custom:``},{content:t(()=>[a(C,{class:`base-color--bg`,"content-class":`pa0`},{default:t(()=>[a(S,null,{default:t(()=>[...l[149]||=[r(`div`,{class:`title3 ma0`},`Menu Title`,-1),r(`div`,{class:`spacer`},null,-1),r(`span`,{class:`ml1`},`Item 1`,-1),r(`span`,{class:`ml1`},`Item 2`,-1)]]),_:1}),l[150]||=r(`div`,{class:`pa3`},`This is some content in a w-card component.`,-1)]),_:1})]),default:t(()=>[a(_,{class:`mb2`},{default:t(()=>[...l[148]||=[o(`Show a custom menu`,-1)]]),_:1})]),_:1})]),_:1}),a(g,{h2:``},{default:t(()=>[...l[154]||=[o(`Custom content: List menu`,-1)]]),_:1}),l[188]||=r(`p`,null,[o(`By default the menu is a `),r(`strong`,{class:`code`},`w-card`),o(`. But if you need more flexibility, you can set the
`),r(`code`,null,`custom`),o(` prop and put whatever you want in the free-of-style menu.`),r(`br`),o(`
In this example, the menu is `),r(`code`,null,`persistent`),o(` so the user is forced to select an option from
the menu when open. Then on click of an option, the menu will hide thanks to the option
`),r(`code`,null,`hide-on-menu-click`),o(`.`)],-1),a(y,{class:`example11`,"content-class":`text-center my4`,"app-classes-string":`align-center`},{pug:t(()=>[...l[157]||=[o(`w-menu(custom hide-on-menu-click persistent shadow)
  w-button Show a list menu
  template(#content)
    w-list.base-color--bg(
      v-model="listSelection"
      :items="listItems"
      item-class="px8")
div.mt4
  strong Current selection:
  code.ml1 `+n(`{{ listSelection || 'none' }}`),-1)]]),html:t(()=>[...l[158]||=[o(`<w-menu
  custom
  hide-on-menu-click
  persistent
  shadow>
  <w-button>
    Show a list menu
  </w-button>

  <template #content>
    <w-list
      class="base-color--bg"
      v-model="listSelection"
      :items="listItems"
      item-class="px8">
    </w-list>
  </template>
</w-menu>

<div class="mt4">
  <strong>Current selection:</strong>
  <code class="ml1">`+n(`{{ listSelection || 'none' }}`)+`</code>
</div>`,-1)]]),js:t(()=>[...l[159]||=[o(`data: () => ({
  showMenu: false,
  listSelection: null,
  listItems: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`,-1)]]),default:t(()=>[a(v,{"append-to":`.example11`,custom:``,"hide-on-menu-click":``,persistent:``,shadow:``},{content:t(()=>[a(w,{class:`base-color--bg`,modelValue:c.list,"onUpdate:modelValue":l[6]||=e=>c.list=e,items:[{label:`Item 1`},{label:`Item 2`},{label:`Item 3`}],"item-class":`px8`},null,8,[`modelValue`])]),default:t(()=>[a(_,null,{default:t(()=>[...l[155]||=[o(`Show a list menu`,-1)]]),_:1})]),_:1}),r(`div`,u,[l[156]||=r(`strong`,null,`Current selection:`,-1),r(`code`,d,n(c.list||`none`),1)])]),_:1}),a(g,{h2:``},{default:t(()=>[...l[160]||=[o(`Menu with overlay`,-1)]]),_:1}),a(y,{class:`example12`,"content-class":`text-center my4`,"app-classes-string":`align-center`},{pug:t(()=>[...l[162]||=[o(`w-menu(v-model="showMenu" shadow custom overlay)
  w-button Show a menu & overlay
  template(#content)
    w-list.base-color--bg(
      nav
      :items="listItems"
      item-class="px8"
      @item-select="showMenu = false")`,-1)]]),html:t(()=>[...l[163]||=[o(`<w-menu v-model="showMenu" shadow custom overlay>
  <w-button>
    Show a menu & overlay
  </w-button>

  <template #content>
    <w-list
      class="base-color--bg"
      nav
      :items="listItems"
      item-class="px8"
      @item-select="showMenu = false">
    </w-list>
  </template>
</w-menu>`,-1)]]),js:t(()=>[...l[164]||=[o(`data: () => ({
  showMenu: false,
  listItems: [
    { label: 'Item 1', route: '#item1' },
    { label: 'Item 2', route: '#item2' },
    { label: 'Item 3', route: '#item3' }
  ]
})
`,-1)]]),default:t(()=>[a(v,{"append-to":`.example12`,modelValue:c.showListMenu2,"onUpdate:modelValue":l[8]||=e=>c.showListMenu2=e,shadow:``,custom:``,overlay:``},{content:t(()=>[a(w,{class:`base-color--bg`,nav:``,items:[{label:`Item 1`,route:`#item1`},{label:`Item 2`,route:`#item2`},{label:`Item 3`,route:`#item3`}],"item-class":`px8`,onItemSelect:l[7]||=e=>c.showListMenu2=!1})]),default:t(()=>[a(_,null,{default:t(()=>[...l[161]||=[o(`Show a menu & overlay`,-1)]]),_:1})]),_:1},8,[`modelValue`])]),_:1}),a(g,{h2:``},{default:t(()=>[...l[165]||=[o(`External activator`,-1)]]),_:1}),l[189]||=r(`p`,null,[o(`External activators offer a great flexibility in the code and the advantage of accepting
multiple activators for the same menu (even elements that are not yet in the DOM).`),r(`br`),o(`
The downside is that the event listeners for the activator(s) will be attached to the document
and not the activator itself. For that reason, it is not the recommended option if you have
the choice.`)],-1),a(g,{h3:``,slug:`external-activator--basic`},{default:t(()=>[...l[166]||=[o(`Trigger a menu on click of an external activator`,-1)]]),_:1}),a(y,{class:`example14`,"content-class":`text-center my4`,"app-classes-string":`text-center`},{pug:t(()=>[...l[168]||=[o(`w-button.cat-button(icon="mdi mdi-cat" xl)

w-menu(activator=".cat-button" arrow)
  template(#content)
    | Meow!`,-1)]]),html:t(()=>[...l[169]||=[o(`<w-button
  icon="mdi mdi-cat"
  xl
  class="cat-button">
</w-button>

<w-menu activator=".cat-button" arrow>
  <template #content>
    Meow!
  </template>
</w-menu>
`,-1)]]),default:t(()=>[a(_,{class:`cat-button`,icon:`mdi mdi-cat`,xl:``}),a(v,{"append-to":`.example14`,activator:`.cat-button`,arrow:``},{content:t(()=>[...l[167]||=[o(`Meow!`,-1)]]),_:1})]),_:1}),a(g,{h3:``,slug:`external-activator--2-activators`},{default:t(()=>[...l[170]||=[o(`Trigger the same menu from 2 different external activators`,-1)]]),_:1}),l[190]||=r(`p`,{class:`text-italic`},`But do you really need that? ;)`,-1),a(y,{class:`example15`,"content-class":`text-center my4`,"app-classes-string":`d-block text-center`},{pug:t(()=>[...l[171]||=[o(`w-button.pet-button.cat-button.ma4(
  icon="mdi mdi-cat"
  xl
  @click="activator = '.cat-button'")
w-button.pet-button.dog-button.ma4(
  icon="mdi mdi-dog"
  xl
  @click="activator = '.dog-button'")

w-menu(:activator="activator" arrow)
  template(#content)
    | `+n(`{{ activator.includes('dog') ? 'Woof!' : 'Meow!' }}`),-1)]]),html:t(()=>[...l[172]||=[o(`<w-button
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
  <template #content>
    `+n(`{{ activator.includes('dog') ? 'Woof!' : 'Meow!' }}`)+`
  </template>
</w-menu>`,-1)]]),js:t(()=>[...l[173]||=[o(`data: () => ({
  activator: '.pet-button'
})
`,-1)]]),default:t(()=>[a(_,{class:`pet-button cat-button2 ma4`,icon:`mdi mdi-cat`,xl:``,onClick:l[9]||=e=>c.activator1=`.cat-button2`}),a(_,{class:`pet-button dog-button2 ma4`,icon:`mdi mdi-dog`,xl:``,onClick:l[10]||=e=>c.activator1=`.dog-button2`}),a(v,{"append-to":`.example15`,activator:c.activator1,arrow:``},{content:t(()=>[o(n(c.activator1.includes(`dog`)?`Woof!`:`Meow!`),1)]),_:1},8,[`activator`])]),_:1}),a(g,{h3:``,slug:`external-activator--2-activators-on-hover`},{default:t(()=>[...l[174]||=[o(`Trigger the same menu on hover of 2 different external activators`,-1)]]),_:1}),l[191]||=r(`p`,{class:`text-italic`},`But do you really need that too? ;)`,-1),a(T,{tip:``},{default:t(()=>[...l[175]||=[o(`Note that like in this example, a tiny delay may help positioning the detachable correctly
in case of multiple activators with different menu contents.
`,-1)]]),_:1}),a(y,{class:`example16`,"content-class":`text-center my4`,"app-classes-string":`d-block text-center`},{pug:t(()=>[...l[176]||=[o(`w-button.pet-button.cat-button.ma4(
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
  template(#content)
    | `+n(`{{ menuContent }}`),-1)]]),html:t(()=>[...l[177]||=[o(`<w-button
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
  <template #content>
    `+n(`{{ menuContent }}`)+`
  </template>
</w-menu>`,-1)]]),js:t(()=>[...l[178]||=[o(`data: () => ({
  activator: '.pet-button',
  menuContent: ''
})`,-1)]]),default:t(()=>[a(_,{class:`pet-button2 cat-button3 ma4`,icon:`mdi mdi-cat`,xl:``,onMouseenter:l[11]||=e=>{c.activator2=`.cat-button3`,c.menuContent=`Meow!`},onMouseleave:l[12]||=e=>c.activator2=`.pet-button2`}),a(_,{class:`pet-button2 dog-button3 ma4`,icon:`mdi mdi-dog`,xl:``,onMouseenter:l[13]||=e=>{c.activator2=`.dog-button3`,c.menuContent=`Woof!`},onMouseleave:l[14]||=e=>c.activator2=`.pet-button2`}),a(v,{"append-to":`.example16`,activator:c.activator2,arrow:``,"show-on-hover":``,delay:100},{content:t(()=>[o(n(c.menuContent),1)]),_:1},8,[`activator`])]),_:1})])}var p=c({data:()=>({menuDisabled:!1,showMenu:!1,showListMenu1:!1,showListMenu2:!1,activator1:`.pet-button`,activator2:`.pet-button2`,menuContent:``,list:null})},[[`render`,f]]);function m(n,c,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return s(),i(`div`,null,[c[1]||=r(`div`,{class:`w-divider my12`},null,-1),a(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[o(`API`,-1)]]),_:1}),a(m,{class:`mt0`,items:f.props,descriptions:n.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),a(m,{items:n.slots,title:`Slots`},null,8,[`items`]),a(m,{items:f.events,title:`Events`},null,8,[`items`]),a(m,{items:n.methods,title:`Methods`},null,8,[`items`])])}var h={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the menu. Any truthy value will show the menu whereas any falsy value will hide it.`,showOnHover:`Triggers the menu apparition on activator hover instead of click by default. A mouseleave on the activator will hide the menu.`,hideOnMenuClick:`Hides the menu when a click is made inside the menu. For instance when selecting a list item inside a menu.`,color:`Applies a color to the menu's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the menu's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:`Applies a drop shadow to the menu element.`,custom:`By default, the menu layout is a <strong class="code">w-card</strong>. To have more flexibility, you can set this option to <code>true</code>.`,tile:`Removes the default border-radius and sets sharp edges on the menu.`,round:`Sets a maximum border-radius on the corners of the menu, giving it a round look.`,arrow:`Adds a small triangle on the edge of the menu, pointing toward the activator.`,noBorder:`Removes the default border from the menu element.`,transition:`Applies a particular transition to the menu element when showing and hiding.<br>Accepts all the transitions listed in the <a href="transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.`,menuClass:`Provide custom CSS classes for the menu element.`,titleClass:`Provide custom CSS classes for the menu's title when using the default card layout (when not using the <code>custom</code> prop).`,contentClass:`Provide custom CSS classes for the menu's content when using the default card layout (when not using the <code>custom</code> prop).`,appendTo:`Moves the menu element to another DOM element.<br>Accepts a valid query selector string. If the string is invalid, or the node is not found or if <code>true</code> is provided, <span class="code">.w-app</span> will be the target.<br>The default root is the <span class="code">w-app</span> or the <code>w-dialog</code> or <code>w-drawer</code> or <code>w-menu</code> or <code>w-overlay</code> it is placed in.`,noPosition:`Skip the menu positioning calculation, if you prefer to set it via CSS. Setting this prop to <code>true</code> will also disable the side positioning (top, left, right, bottom) and the alignments.`,fixed:`Sets the CSS position of the menu to <code>fixed</code> (absolute by default).`,top:`Places the menu at the top of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the top of its container otherwise.`,bottom:`Places the menu at the bottom of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the bottom of its container otherwise.`,left:`Places the menu at the left of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the left of its container otherwise.`,right:`Places the menu at the right of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the right of its container otherwise.`,alignTop:`Aligns the top of the menu with the top of the activator.`,alignBottom:`Aligns the bottom of the menu with the bottom of the activator.`,alignLeft:`Aligns the left side of the menu with the left side of the activator.`,alignRight:`Aligns the right side of the menu with the right side of the activator.`,zIndex:`Applies a z-index (positive or negative integer) to the menu.`,minWidth:`Sets a min-width on the menu.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value, or even the string <code>activator</code> to dinamically use the activator width as the min width.`,maxWidth:`Sets a max-width on the menu.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value, or even the string <code>activator</code> to dinamically use the activator width as the max width.`,overlay:`Displays a full screen overlay underneath the menu (uses the <span class="code">w-overlay</span> component).`,overlayClass:`Provide custom CSS classes for the <span class="code">w-overlay</span> component.`,overlayProps:`An object of props to pass down to the <span class="code">w-overlay</span> component for more control.`,persistent:`When set to <code>true</code>, clicking outside of the menu will not close the menu.`,activator:`Allows you to define one or multiple external activators for the menu through a DOM selector string.<br>This way, you don't need to use the <code>activator</code> slot, and you can activate the menu from different activators.`,delay:`A delay - in milliseconds - before opening the menu.<br>A small delay may help the menu position computing if the menu content changes at the moment the activator is activated. For instance, when defining multiple activators opening the same menu with different content.`,disable:`When set to <code>true</code>, the menu never opens on interaction or via <code>v-model</code>; the activator remains rendered.`},g={activator:{description:`Place the element that should trigger the menu inside this slot. Event listeners are attached automatically — no <code>v-on="on"</code> binding is required.<br>The activator can be any visible DOM element or mounted component.<br><strong>Legacy API:</strong> use this slot for the activator and the <code>default</code> slot for menu content.`},default:{description:`<strong>New API:</strong> when no <code>#activator</code> slot is used, the default slot is the activator element.<br><strong>Legacy API:</strong> when an <code>#activator</code> slot is provided, the default slot is the menu content.`},content:{description:`The menu body content for use with the new API (default slot = activator).<br>When <code>custom</code> is <code>false</code> (default), the content is placed inside a <code>w-card</code>.`},title:{description:`By default (when <code>custom</code> is set to false), the menu uses a <span class="code">w-card</span>. This slot allows a custom title for the <span class="code">w-card</span>.`},actions:{description:`By default (when <code>custom</code> is set to false), the menu uses a <span class="code">w-card</span>. This slot allows setting the actions slot of the <span class="code">w-card</span>.`}},_={input:`Emitted each time the state of the component changes (when opening or closing the menu).<br>Updates the v-model value in Vue 2.x only.`,"update:modelValue":`Emitted each time the state of the component changes (when opening or closing the menu).<br>Updates the v-model value in Vue 3 only.`,close:`Emitted on menu close.`,open:`Emitted on menu open.`},v={focus:{description:`When <code>overlay</code> is set, focuses the overlay (Escape-close). Otherwise focuses the activator. Also runs when <code>v-focus</code> is used.`}},y=c({data:()=>({propsDescs:h,slots:g,methods:v}),computed:{props(){return l.props},events(){return l.emits.reduce((e,t)=>(e[t]={description:_[t]||``})&&e,{})}}},[[`render`,m]]);function b(n,r,c,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return s(),i(`main`,null,[a(f,null,{default:t(()=>[...r[0]||=[o(`w-menu`,-1)]]),_:1}),a(p),a(m)])}var x=c({components:{Examples:p,Api:y}},[[`render`,b]]);export{x as default};