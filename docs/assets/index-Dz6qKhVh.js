import{r as w,o as b,g as c,a as o,w as n,b as e,e as s,m as r,d as u,t as v,_ as M,R as S}from"./index-CM5cc9pa.js";const I={class:"mt4"},B={class:"ml1"};function L(m,t,x,h,y,g){const p=w("title-link"),l=w("w-button"),i=w("w-menu"),d=w("example"),f=w("w-flex"),A=w("w-toolbar"),C=w("w-card"),k=w("w-list"),T=w("alert");return b(),c("div",null,[o(p,{h2:""},{default:n(()=>t[14]||(t[14]=[e("Basic")])),_:1}),o(d,{class:"example1","content-class":"text-center pt5","app-classes-string":"align-center"},{pug:n(()=>t[17]||(t[17]=[e(`w-menu
  template(#activator="{ on }")
    w-button(v-on="on") Show menu
  | Menu content`)])),html:n(()=>t[18]||(t[18]=[e(`<w-menu>
  <template #activator="{ on }">
    <w-button v-on="on" class="mr3">
      Show menu on click
    </w-button>
  </template>
  Menu content
</w-menu>
`)])),default:n(()=>[o(i,{"append-to":".example1"},{activator:n(({on:a})=>[o(l,s(a),{default:n(()=>t[15]||(t[15]=[e("Show menu")])),_:2},1040)]),default:n(()=>[t[16]||(t[16]=e("Menu content"))]),_:1})]),_:1}),o(p,{h2:""},{default:n(()=>t[19]||(t[19]=[e("Show on click or on hover")])),_:1}),o(d,{class:"example2","content-class":"pt5"},{pug:n(()=>t[24]||(t[24]=[e(`| Show menu

w-menu
  template(#activator="{ on }")
    w-button.mx3(v-on="on") On click
  | Menu content

w-menu(show-on-hover)
  template(#activator="{ on }")
    w-button(v-on="on") On hover
  | Menu content`)])),html:n(()=>t[25]||(t[25]=[e(`Show menu:

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
`)])),default:n(()=>[t[26]||(t[26]=e("Show menu:")),o(i,{"append-to":".example2"},{activator:n(({on:a})=>[o(l,r({class:"mx3"},s(a)),{default:n(()=>t[20]||(t[20]=[e("On click")])),_:2},1040)]),default:n(()=>[t[21]||(t[21]=e("Menu content"))]),_:1}),o(i,{"append-to":".example2","show-on-hover":""},{activator:n(({on:a})=>[o(l,s(a),{default:n(()=>t[22]||(t[22]=[e("On hover")])),_:2},1040)]),default:n(()=>[t[23]||(t[23]=e("Menu content"))]),_:1})]),_:1}),o(p,{h2:""},{default:n(()=>t[27]||(t[27]=[e("Persistent menu")])),_:1}),t[172]||(t[172]=u("p",null,[e("A persistent menu can only be closed by clicking on the activator again, or programmatically."),u("br"),e(`
Clicking outside the menu will not close it.`),u("br"),e(`
Of course you can also add a button inside the menu to close it.`)],-1)),o(d,{class:"example3","content-class":"text-center pt5","app-classes-string":"align-center"},{pug:n(()=>t[30]||(t[30]=[e(`w-menu(persistent)
  template(#activator="{ on }")
    w-button.mb2.mr3(v-on="on") Show persistent menu
  | Click on the button again to close`)])),html:n(()=>t[31]||(t[31]=[e(`<w-menu persistent>
  <template #activator="{ on }">
    <w-button v-on="on" class="mr3">
      Show persistent menu
    </w-button>
  </template>
  Click on the button again to close
</w-menu>
`)])),default:n(()=>[o(i,{"append-to":".example3",persistent:""},{activator:n(({on:a})=>[o(l,r({class:"mb2 mr3"},s(a)),{default:n(()=>t[28]||(t[28]=[e("Show persistent menu")])),_:2},1040)]),default:n(()=>[t[29]||(t[29]=e("Click on the button again to close"))]),_:1})]),_:1}),o(p,{h2:""},{default:n(()=>t[32]||(t[32]=[e("Hide menu on click inside")])),_:1}),t[173]||(t[173]=u("p",null,"A click inside the menu will close it.",-1)),o(d,{class:"example4","content-class":"text-center pt5","app-classes-string":"align-center"},{pug:n(()=>t[35]||(t[35]=[e(`w-menu(hide-on-menu-click)
  template(#activator="{ on }")
    w-button(v-on="on") Show menu
  | A click here will close the menu.`)])),html:n(()=>t[36]||(t[36]=[e(`<w-menu hide-on-menu-click>
  <template #activator="{ on }">
    <w-button v-on="on">
      Show menu
    </w-button>
  </template>
  A click here will close the menu.
</w-menu>
`)])),default:n(()=>[o(i,{"append-to":".example4","hide-on-menu-click":""},{activator:n(({on:a})=>[o(l,s(a),{default:n(()=>t[33]||(t[33]=[e("Show menu")])),_:2},1040)]),default:n(()=>[t[34]||(t[34]=e("A click here will close the menu."))]),_:1})]),_:1}),o(p,{h2:""},{default:n(()=>t[37]||(t[37]=[e("Position")])),_:1}),o(d,{class:"example5"},{pug:n(()=>t[47]||(t[47]=[e(`w-flex.my12(:gap="3" align-center wrap)
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
    | Menu content`)])),html:n(()=>t[48]||(t[48]=[e(`<w-flex :gap="3" align-center wrap class="my12">
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
`)])),default:n(()=>[o(f,{class:"my6",gap:3,"align-center":"",wrap:""},{default:n(()=>[t[46]||(t[46]=e("Show menu on:")),o(i,{"append-to":".example5",left:""},{activator:n(({on:a})=>[o(l,r({class:"mx2"},s(a)),{default:n(()=>t[38]||(t[38]=[e("Left")])),_:2},1040)]),default:n(()=>[t[39]||(t[39]=e("Menu content"))]),_:1}),o(i,{"append-to":".example5",top:""},{activator:n(({on:a})=>[o(l,r({class:"mx2"},s(a)),{default:n(()=>t[40]||(t[40]=[e("Top")])),_:2},1040)]),default:n(()=>[t[41]||(t[41]=e("Menu content"))]),_:1}),o(i,{"append-to":".example5"},{activator:n(({on:a})=>[o(l,r({class:"mx2"},s(a)),{default:n(()=>t[42]||(t[42]=[e("Bottom")])),_:2},1040)]),default:n(()=>[t[43]||(t[43]=e("Menu content"))]),_:1}),o(i,{"append-to":".example5",right:""},{activator:n(({on:a})=>[o(l,s(a),{default:n(()=>t[44]||(t[44]=[e("Right")])),_:2},1040)]),default:n(()=>[t[45]||(t[45]=e("Menu content"))]),_:1})]),_:1})]),_:1}),o(p,{h2:""},{default:n(()=>t[49]||(t[49]=[e("Alignments")])),_:1}),t[174]||(t[174]=u("p",null,"In addition to positions, you can align the menu with its activator.",-1)),o(d,{class:"example6"},{pug:n(()=>t[74]||(t[74]=[e(`.title4.mb2 top position
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
  | Menu content`)])),html:n(()=>t[75]||(t[75]=[e(`<div class="title4 mb2">Top position</div>
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
`)])),default:n(()=>[t[76]||(t[76]=u("div",{class:"title4 mb2"},"Top position",-1)),o(i,{"append-to":".example6",top:"","align-left":""},{activator:n(({on:a})=>[o(l,r({class:"ma1"},s(a)),{default:n(()=>t[50]||(t[50]=[e("Align left")])),_:2},1040)]),default:n(()=>[t[51]||(t[51]=e("Menu content"))]),_:1}),o(i,{"append-to":".example6",top:""},{activator:n(({on:a})=>[o(l,r({class:"ma1"},s(a)),{default:n(()=>t[52]||(t[52]=[e("Centered")])),_:2},1040)]),default:n(()=>[t[53]||(t[53]=e("Menu content"))]),_:1}),o(i,{"append-to":".example6",top:"","align-right":""},{activator:n(({on:a})=>[o(l,r({class:"ma1"},s(a)),{default:n(()=>t[54]||(t[54]=[e("Align right")])),_:2},1040)]),default:n(()=>[t[55]||(t[55]=e("Menu content"))]),_:1}),t[77]||(t[77]=u("div",{class:"title4 mt6 mb2"},"Bottom position",-1)),o(i,{"append-to":".example6","align-left":""},{activator:n(({on:a})=>[o(l,r({class:"ma1"},s(a)),{default:n(()=>t[56]||(t[56]=[e("Align left")])),_:2},1040)]),default:n(()=>[t[57]||(t[57]=e("Menu content"))]),_:1}),o(i,{"append-to":".example6"},{activator:n(({on:a})=>[o(l,r({class:"ma1"},s(a)),{default:n(()=>t[58]||(t[58]=[e("Centered")])),_:2},1040)]),default:n(()=>[t[59]||(t[59]=e("Menu content"))]),_:1}),o(i,{"append-to":".example6","align-right":""},{activator:n(({on:a})=>[o(l,r({class:"ma1"},s(a)),{default:n(()=>t[60]||(t[60]=[e("Align right")])),_:2},1040)]),default:n(()=>[t[61]||(t[61]=e("Menu content"))]),_:1}),t[78]||(t[78]=u("div",{class:"title4 mt6 mb2"},"Right position",-1)),o(i,{"append-to":".example6",right:"","align-top":""},{activator:n(({on:a})=>[o(l,r({class:"ma1"},s(a)),{default:n(()=>t[62]||(t[62]=[e("Align top")])),_:2},1040)]),default:n(()=>[t[63]||(t[63]=e("Menu content"))]),_:1}),o(i,{"append-to":".example6",right:""},{activator:n(({on:a})=>[o(l,r({class:"ma1"},s(a)),{default:n(()=>t[64]||(t[64]=[e("Centered")])),_:2},1040)]),default:n(()=>[t[65]||(t[65]=e("Menu content"))]),_:1}),o(i,{"append-to":".example6",right:"","align-bottom":""},{activator:n(({on:a})=>[o(l,r({class:"ma1"},s(a)),{default:n(()=>t[66]||(t[66]=[e("Align bottom")])),_:2},1040)]),default:n(()=>[t[67]||(t[67]=e("Menu content"))]),_:1}),t[79]||(t[79]=u("div",{class:"title4 mt6 mb2"},"Left position",-1)),o(i,{"append-to":".example6",left:"","align-top":""},{activator:n(({on:a})=>[o(l,r({class:"ma1"},s(a)),{default:n(()=>t[68]||(t[68]=[e("Align top")])),_:2},1040)]),default:n(()=>[t[69]||(t[69]=e("Menu content"))]),_:1}),o(i,{"append-to":".example6",left:""},{activator:n(({on:a})=>[o(l,r({class:"ma1"},s(a)),{default:n(()=>t[70]||(t[70]=[e("Centered")])),_:2},1040)]),default:n(()=>[t[71]||(t[71]=e("Menu content"))]),_:1}),o(i,{"append-to":".example6",left:"","align-bottom":""},{activator:n(({on:a})=>[o(l,r({class:"ma1"},s(a)),{default:n(()=>t[72]||(t[72]=[e("Align bottom")])),_:2},1040)]),default:n(()=>[t[73]||(t[73]=e("Menu content"))]),_:1})]),_:1}),o(p,{h2:""},{default:n(()=>t[80]||(t[80]=[e("No position")])),_:1}),t[175]||(t[175]=u("p",null,[e(`By default, the menu is position at the bottom of the activator.
If you prefer to position the menu yourself via CSS, you can skip the position calculation via the
`),u("code",null,"no-position"),e(" prop.")],-1)),o(d,{class:"example7","content-class":"pb12"},{pug:n(()=>t[83]||(t[83]=[e(`w-menu(no-position)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Show menu
  | Menu content`)])),html:n(()=>t[84]||(t[84]=[e(`<w-menu no-position>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Show menu
    </w-button>
  </template>
  Menu content
</w-menu>`)])),css:n(()=>t[85]||(t[85]=[e(".w-menu {top: 10px;right: 20px;}")])),default:n(()=>[o(i,{"append-to":".example7 .example__render","no-position":""},{activator:n(({on:a})=>[o(l,r({class:"ma1"},s(a)),{default:n(()=>t[81]||(t[81]=[e("Show menu")])),_:2},1040)]),default:n(()=>[t[82]||(t[82]=e("Menu content"))]),_:1})]),_:1}),o(p,{h2:""},{default:n(()=>t[86]||(t[86]=[e("Arrow (Tooltip style)")])),_:1}),t[176]||(t[176]=u("p",null,[e("Applies a tooltip style with the "),u("code",null,"arrow"),e(" option.")],-1)),o(d,{class:"example13","content-class":"text-center my4","app-classes-string":"align-center"},{pug:n(()=>t[89]||(t[89]=[e(`w-menu(arrow)
  template(#activator="{ on }")
    w-button(v-on="on") Show menu
  | Menu content`)])),html:n(()=>t[90]||(t[90]=[e(`<w-menu arrow>
  <template #activator="{ on }">
    <w-button v-on="on">
      Show menu
    </w-button>
  </template>
  Menu content
</w-menu>
`)])),default:n(()=>[o(i,{"append-to":".example13",arrow:""},{activator:n(({on:a})=>[o(l,r({class:"ma1"},s(a)),{default:n(()=>t[87]||(t[87]=[e("Show menu")])),_:2},1040)]),default:n(()=>[t[88]||(t[88]=e("Menu content"))]),_:1})]),_:1}),o(p,{h3:""},{default:n(()=>t[91]||(t[91]=[e("Automatic arrow position")])),_:1}),t[177]||(t[177]=u("p",null,[e(`The following examples illustrate how the arrow is positioned on the different sides and
alignments that are applied.`),u("br"),e(`
The arrow position can also be overridden via CSS.
`)],-1)),o(p,{h4:""},{default:n(()=>t[92]||(t[92]=[e("Horizontal")])),_:1}),o(d,null,{pug:n(()=>t[105]||(t[105]=[e(`w-flex(justify-center)
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
    | Menu content`)])),html:n(()=>t[106]||(t[106]=[e(`<w-flex justify-center>
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
`)])),default:n(()=>[o(f,{"justify-center":""},{default:n(()=>[o(i,{arrow:"",top:"","align-left":""},{activator:n(({on:a})=>[o(l,r({class:"ma2"},s(a)),{default:n(()=>t[93]||(t[93]=[e("Top, align left")])),_:2},1040)]),default:n(()=>[t[94]||(t[94]=e("Menu content"))]),_:1}),o(i,{arrow:"",top:""},{activator:n(({on:a})=>[o(l,r({class:"ma2"},s(a)),{default:n(()=>t[95]||(t[95]=[e("Top, align center")])),_:2},1040)]),default:n(()=>[t[96]||(t[96]=e("Menu content"))]),_:1}),o(i,{arrow:"",top:"","align-right":""},{activator:n(({on:a})=>[o(l,r({class:"ma2"},s(a)),{default:n(()=>t[97]||(t[97]=[e("Top, align right")])),_:2},1040)]),default:n(()=>[t[98]||(t[98]=e("Menu content"))]),_:1})]),_:1}),o(f,{"justify-center":""},{default:n(()=>[o(i,{arrow:"","align-left":""},{activator:n(({on:a})=>[o(l,r({class:"ma2"},s(a)),{default:n(()=>t[99]||(t[99]=[e("Bottom, align left")])),_:2},1040)]),default:n(()=>[t[100]||(t[100]=e("Menu content"))]),_:1}),o(i,{arrow:""},{activator:n(({on:a})=>[o(l,r({class:"ma2"},s(a)),{default:n(()=>t[101]||(t[101]=[e("Bottom, align center")])),_:2},1040)]),default:n(()=>[t[102]||(t[102]=e("Menu content"))]),_:1}),o(i,{arrow:"","align-right":""},{activator:n(({on:a})=>[o(l,r({class:"ma2"},s(a)),{default:n(()=>t[103]||(t[103]=[e("Bottom, align right")])),_:2},1040)]),default:n(()=>[t[104]||(t[104]=e("Menu content"))]),_:1})]),_:1})]),_:1}),o(p,{h4:""},{default:n(()=>t[107]||(t[107]=[e("Vertical")])),_:1}),o(d,null,{pug:n(()=>t[120]||(t[120]=[e(`w-flex.text-center(justify-center)
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
      | Menu content`)])),html:n(()=>t[121]||(t[121]=[e(`<w-flex text-center justify-center>
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
`)])),default:n(()=>[o(f,{class:"text-center","justify-center":""},{default:n(()=>[o(f,{column:"","no-grow":""},{default:n(()=>[o(i,{arrow:"",left:"","align-top":""},{activator:n(({on:a})=>[o(l,r({class:"ma2"},s(a)),{default:n(()=>t[108]||(t[108]=[e("Left, align top")])),_:2},1040)]),default:n(()=>[t[109]||(t[109]=e("Menu content"))]),_:1}),o(i,{arrow:"",left:""},{activator:n(({on:a})=>[o(l,r({class:"ma2"},s(a)),{default:n(()=>t[110]||(t[110]=[e("Left, align center")])),_:2},1040)]),default:n(()=>[t[111]||(t[111]=e("Menu content"))]),_:1}),o(i,{arrow:"",left:"","align-bottom":""},{activator:n(({on:a})=>[o(l,r({class:"ma2"},s(a)),{default:n(()=>t[112]||(t[112]=[e("Left, align bottom")])),_:2},1040)]),default:n(()=>[t[113]||(t[113]=e("Menu content"))]),_:1})]),_:1}),o(f,{column:"","no-grow":""},{default:n(()=>[o(i,{arrow:"",right:"","align-top":""},{activator:n(({on:a})=>[o(l,r({class:"ma2"},s(a)),{default:n(()=>t[114]||(t[114]=[e("Right, align top")])),_:2},1040)]),default:n(()=>[t[115]||(t[115]=e("Menu content"))]),_:1}),o(i,{arrow:"",right:""},{activator:n(({on:a})=>[o(l,r({class:"ma2"},s(a)),{default:n(()=>t[116]||(t[116]=[e("Right, align center")])),_:2},1040)]),default:n(()=>[t[117]||(t[117]=e("Menu content"))]),_:1}),o(i,{arrow:"",right:"","align-bottom":""},{activator:n(({on:a})=>[o(l,r({class:"ma2"},s(a)),{default:n(()=>t[118]||(t[118]=[e("Right, align bottom")])),_:2},1040)]),default:n(()=>[t[119]||(t[119]=e("Menu content"))]),_:1})]),_:1})]),_:1})]),_:1}),o(p,{h2:""},{default:n(()=>t[122]||(t[122]=[e("Color & background color")])),_:1}),t[178]||(t[178]=u("p",null,[e("Like in most components, you can define a "),u("code",null,"color"),e(" and a  "),u("code",null,"bg-color"),e(".")],-1)),o(d,{class:"example8","content-class":"text-center my4","app-classes-string":"align-center"},{pug:n(()=>[e('w-menu(color="'+v(m.$store.state.darkMode?"blue-light4":"blue-dark2")+'" bg-color="'+v(m.$store.state.darkMode?"indigo-dark6":"blue-light5")+`")
  template(#activator="{ on }")
    w-button(v-on="on") Show a blue menu
  | Menu content`,1)]),html:n(()=>[e('<w-menu color="'+v(m.$store.state.darkMode?"blue-light4":"blue-dark2")+'" bg-color="'+v(m.$store.state.darkMode?"indigo-dark6":"blue-light5")+`">
  <template #activator="{ on }">
    <w-button v-on="on">
      Show a blue menu
    </w-button>
  </template>
  Menu content
</w-menu>
`,1)]),default:n(()=>[o(i,{"append-to":".example8",color:m.$store.state.darkMode?"blue-light4":"blue-dark2","bg-color":m.$store.state.darkMode?"indigo-dark6":"blue-light5"},{activator:n(({on:a})=>[o(l,r({class:"ma1"},s(a)),{default:n(()=>t[123]||(t[123]=[e("Show a blue menu")])),_:2},1040)]),default:n(()=>[t[124]||(t[124]=e("Menu content"))]),_:1},8,["color","bg-color"])]),_:1}),o(p,{h2:""},{default:n(()=>t[125]||(t[125]=[e("Tile, round and shadow")])),_:1}),o(d,{class:"example9"},{pug:n(()=>t[132]||(t[132]=[e(`w-flex.my6(wrap :gap="3" justify-center)
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
    | Menu content`)])),html:n(()=>t[133]||(t[133]=[e(`<w-flex wrap :gap="3"  justify-center class="my6">
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
`)])),default:n(()=>[o(f,{class:"my6",wrap:"","justify-center":"",gap:3},{default:n(()=>[o(i,{"append-to":".example9",tile:""},{activator:n(({on:a})=>[o(l,r({class:"mt1"},s(a)),{default:n(()=>t[126]||(t[126]=[e("Show a tile menu")])),_:2},1040)]),default:n(()=>[t[127]||(t[127]=e("Menu content"))]),_:1}),o(i,{"append-to":".example9",round:""},{activator:n(({on:a})=>[o(l,r({class:"mt1"},s(a)),{default:n(()=>t[128]||(t[128]=[e("Show a round menu")])),_:2},1040)]),default:n(()=>[t[129]||(t[129]=e("Menu content"))]),_:1}),o(i,{"append-to":".example9",shadow:""},{activator:n(({on:a})=>[o(l,r({class:"mt1"},s(a)),{default:n(()=>t[130]||(t[130]=[e("Show a shadow menu")])),_:2},1040)]),default:n(()=>[t[131]||(t[131]=e("Menu content"))]),_:1})]),_:1})]),_:1}),o(p,{h2:""},{default:n(()=>t[134]||(t[134]=[e("Menu content: w-card")])),_:1}),t[179]||(t[179]=u("p",null,"By default the menu is a w-card, so it accepts all the props of a w-card.",-1)),o(d,{class:"example10","content-class":"text-center my4","app-classes-string":"align-center"},{pug:n(()=>t[144]||(t[144]=[e(`w-menu(shadow v-model="showMenu")
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
    .pa3 This is some content in a w-card component.`)])),html:n(()=>t[145]||(t[145]=[e(`<w-menu shadow v-model="showMenu">
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
</w-menu>`)])),js:n(()=>t[146]||(t[146]=[e(`data: () => ({
  showMenu: false
})
`)])),default:n(()=>[o(i,{"append-to":".example10",shadow:"",modelValue:m.showMenu,"onUpdate:modelValue":t[4]||(t[4]=a=>m.showMenu=a)},{activator:n(()=>[o(l,{class:"mr3 mb2",onClick:t[0]||(t[0]=a=>m.showMenu=!0)},{default:n(()=>t[135]||(t[135]=[e("Show a w-card menu")])),_:1})]),default:n(()=>[t[139]||(t[139]=u("div",{class:"title4"},"How much do you like Wave UI?",-1)),t[140]||(t[140]=u("p",null,"Pick a serious answer.",-1)),o(f,{class:"pl10 mt4",wrap:"","justify-end":""},{default:n(()=>[o(l,{class:"mr1",text:"",color:"green",onClick:t[1]||(t[1]=a=>m.showMenu=!1)},{default:n(()=>t[136]||(t[136]=[e("Love it!")])),_:1}),o(l,{class:"mr1",text:"",color:"green",onClick:t[2]||(t[2]=a=>m.showMenu=!1)},{default:n(()=>t[137]||(t[137]=[e("Love it!")])),_:1}),o(l,{text:"",color:"green",onClick:t[3]||(t[3]=a=>m.showMenu=!1)},{default:n(()=>t[138]||(t[138]=[e("Love it!")])),_:1})]),_:1})]),_:1},8,["modelValue"]),o(i,{"append-to":".example10",shadow:"",custom:""},{activator:n(({on:a})=>[o(l,r({class:"mb2"},s(a)),{default:n(()=>t[141]||(t[141]=[e("Show a custom menu")])),_:2},1040)]),default:n(()=>[o(C,{class:"base-color--bg","content-class":"pa0"},{default:n(()=>[o(A,null,{default:n(()=>t[142]||(t[142]=[u("div",{class:"title3 ma0"},"Menu Title",-1),u("div",{class:"spacer"},null,-1),u("span",{class:"ml1"},"Item 1",-1),u("span",{class:"ml1"},"Item 2",-1)])),_:1}),t[143]||(t[143]=u("div",{class:"pa3"},"This is some content in a w-card component.",-1))]),_:1})]),_:1})]),_:1}),o(p,{h2:""},{default:n(()=>t[147]||(t[147]=[e("Custom content: List menu")])),_:1}),t[180]||(t[180]=u("p",null,[e("By default the menu is a "),u("strong",{class:"code"},"w-card"),e(`. But if you need more flexibility, you can set the
`),u("code",null,"custom"),e(" prop and put whatever you want in the free-of-style menu."),u("br"),e(`
In this example, the menu is `),u("code",null,"persistent"),e(` so the user is forced to select an option from
the menu when open. Then on click of an option, the menu will hide thanks to the option
`),u("code",null,"hide-on-menu-click"),e(".")],-1)),o(d,{class:"example11","content-class":"text-center my4","app-classes-string":"align-center"},{pug:n(()=>t[150]||(t[150]=[e(`w-menu(custom hide-on-menu-click persistent shadow)
  template(#activator="{ on }")
    w-button(v-on="on") Show a list menu
  w-list.base-color--bg(
    v-model="listSelection"
    :items="listItems"
    item-class="px8")
div.mt4
  strong Current selection:
  code.ml1 `+v("{{ listSelection || 'none' }}"))])),html:n(()=>t[151]||(t[151]=[e(`<w-menu
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
  <code class="ml1">`+v("{{ listSelection || 'none' }}")+`</code>
</div>`)])),js:n(()=>t[152]||(t[152]=[e(`data: () => ({
  showMenu: false,
  listSelection: null,
  listItems: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)])),default:n(()=>[o(i,{"append-to":".example11",custom:"","hide-on-menu-click":"",persistent:"",shadow:""},{activator:n(({on:a})=>[o(l,s(a),{default:n(()=>t[148]||(t[148]=[e("Show a list menu")])),_:2},1040)]),default:n(()=>[o(k,{class:"base-color--bg",modelValue:m.list,"onUpdate:modelValue":t[5]||(t[5]=a=>m.list=a),items:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"}],"item-class":"px8"},null,8,["modelValue"])]),_:1}),u("div",I,[t[149]||(t[149]=u("strong",null,"Current selection:",-1)),u("code",B,v(m.list||"none"),1)])]),_:1}),o(p,{h2:""},{default:n(()=>t[153]||(t[153]=[e("Menu with overlay")])),_:1}),o(d,{class:"example12","content-class":"text-center my4","app-classes-string":"align-center"},{pug:n(()=>t[155]||(t[155]=[e(`w-menu(v-model="showMenu" shadow custom overlay)
  template(#activator="{ on }")
    w-button(v-on="on") Show a menu & overlay
  w-list.base-color--bg(
    nav
    :items="listItems"
    item-class="px8"
    @item-select="showMenu = false")`)])),html:n(()=>t[156]||(t[156]=[e(`<w-menu v-model="showMenu" shadow custom overlay>
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
</w-menu>`)])),js:n(()=>t[157]||(t[157]=[e(`data: () => ({
  showMenu: false,
  listItems: [
    { label: 'Item 1', route: '#item1' },
    { label: 'Item 2', route: '#item2' },
    { label: 'Item 3', route: '#item3' }
  ]
})
`)])),default:n(()=>[o(i,{"append-to":".example12",modelValue:m.showListMenu2,"onUpdate:modelValue":t[7]||(t[7]=a=>m.showListMenu2=a),shadow:"",custom:"",overlay:""},{activator:n(({on:a})=>[o(l,s(a),{default:n(()=>t[154]||(t[154]=[e("Show a menu & overlay")])),_:2},1040)]),default:n(()=>[o(k,{class:"base-color--bg",nav:"",items:[{label:"Item 1",route:"#item1"},{label:"Item 2",route:"#item2"},{label:"Item 3",route:"#item3"}],"item-class":"px8",onItemSelect:t[6]||(t[6]=a=>m.showListMenu2=!1)})]),_:1},8,["modelValue"])]),_:1}),o(p,{h2:""},{default:n(()=>t[158]||(t[158]=[e("External activator")])),_:1}),t[181]||(t[181]=u("p",null,[e(`External activators offer a great flexibility in the code and the advantage of accepting
multiple activators for the same menu (even elements that are not yet in the DOM).`),u("br"),e(`
The downside is that the event listeners for the activator(s) will be attached to the document
and not the activator itself. For that reason, it is not the recommended option if you have
the choice.`)],-1)),o(p,{h3:"",slug:"external-activator--basic"},{default:n(()=>t[159]||(t[159]=[e("Trigger a menu on click of an external activator")])),_:1}),o(d,{class:"example14","content-class":"text-center my4","app-classes-string":"text-center"},{pug:n(()=>t[161]||(t[161]=[e(`w-button.cat-button(icon="mdi mdi-cat" xl)

w-menu(activator=".cat-button" arrow) Meow!`)])),html:n(()=>t[162]||(t[162]=[e(`<w-button
  icon="mdi mdi-cat"
  xl
  class="cat-button">
</w-button>

<w-menu activator=".cat-button" arrow>
  Meow!
</w-menu>
`)])),default:n(()=>[o(l,{class:"cat-button",icon:"mdi mdi-cat",xl:""}),o(i,{"append-to":".example14",activator:".cat-button",arrow:""},{default:n(()=>t[160]||(t[160]=[e("Meow!")])),_:1})]),_:1}),o(p,{h3:"",slug:"external-activator--2-activators"},{default:n(()=>t[163]||(t[163]=[e("Trigger the same menu from 2 different external activators")])),_:1}),t[182]||(t[182]=u("p",{class:"text-italic"},"But do you really need that? ;)",-1)),o(d,{class:"example15","content-class":"text-center my4","app-classes-string":"d-block text-center"},{pug:n(()=>t[164]||(t[164]=[e(`w-button.pet-button.cat-button.ma4(
  icon="mdi mdi-cat"
  xl
  @click="activator = '.cat-button'")
w-button.pet-button.dog-button.ma4(
  icon="mdi mdi-dog"
  xl
  @click="activator = '.dog-button'")

w-menu(:activator="activator" arrow)
  | `+v("{{ activator.includes('dog') ? 'Woof!' : 'Meow!' }}"))])),html:n(()=>t[165]||(t[165]=[e(`<w-button
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
  `+v("{{ activator.includes('dog') ? 'Woof!' : 'Meow!' }}")+`
</w-menu>`)])),js:n(()=>t[166]||(t[166]=[e(`data: () => ({
  activator: '.pet-button'
})
`)])),default:n(()=>[o(l,{class:"pet-button cat-button2 ma4",icon:"mdi mdi-cat",xl:"",onClick:t[8]||(t[8]=a=>m.activator1=".cat-button2")}),o(l,{class:"pet-button dog-button2 ma4",icon:"mdi mdi-dog",xl:"",onClick:t[9]||(t[9]=a=>m.activator1=".dog-button2")}),o(i,{"append-to":".example15",activator:m.activator1,arrow:""},{default:n(()=>[e(v(m.activator1.includes("dog")?"Woof!":"Meow!"),1)]),_:1},8,["activator"])]),_:1}),o(p,{h3:"",slug:"external-activator--2-activators-on-hover"},{default:n(()=>t[167]||(t[167]=[e("Trigger the same menu on hover of 2 different external activators")])),_:1}),t[183]||(t[183]=u("p",{class:"text-italic"},"But do you really need that too? ;)",-1)),o(T,{tip:""},{default:n(()=>t[168]||(t[168]=[e(`Note that like in this example, a tiny delay may help positioning the detachable correctly
in case of multiple activators with different menu contents.
`)])),_:1}),o(d,{class:"example16","content-class":"text-center my4","app-classes-string":"d-block text-center"},{pug:n(()=>t[169]||(t[169]=[e(`w-button.pet-button.cat-button.ma4(
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
  | `+v("{{ menuContent }}"))])),html:n(()=>t[170]||(t[170]=[e(`<w-button
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
  `+v("{{ menuContent }}")+`
</w-menu>`)])),js:n(()=>t[171]||(t[171]=[e(`data: () => ({
  activator: '.pet-button',
  menuContent: ''
})`)])),default:n(()=>[o(l,{class:"pet-button2 cat-button3 ma4",icon:"mdi mdi-cat",xl:"",onMouseenter:t[10]||(t[10]=a=>{m.activator2=".cat-button3",m.menuContent="Meow!"}),onMouseleave:t[11]||(t[11]=a=>m.activator2=".pet-button2")}),o(l,{class:"pet-button2 dog-button3 ma4",icon:"mdi mdi-dog",xl:"",onMouseenter:t[12]||(t[12]=a=>{m.activator2=".dog-button3",m.menuContent="Woof!"}),onMouseleave:t[13]||(t[13]=a=>m.activator2=".pet-button2")}),o(i,{"append-to":".example16",activator:m.activator2,arrow:"","show-on-hover":"",delay:100},{default:n(()=>[e(v(m.menuContent),1)]),_:1},8,["activator"])]),_:1})])}const $={data:()=>({showMenu:!1,showListMenu1:!1,showListMenu2:!1,activator1:".pet-button",activator2:".pet-button2",menuContent:"",list:null})},j=M($,[["render",L]]);function P(m,t,x,h,y,g){const p=w("title-link"),l=w("component-api");return b(),c("div",null,[t[1]||(t[1]=u("div",{class:"w-divider my12"},null,-1)),o(p,{class:"title1",h2:""},{default:n(()=>t[0]||(t[0]=[e("API")])),_:1}),o(l,{class:"mt0",items:g.props,descriptions:m.propsDescs,title:"Props"},null,8,["items","descriptions"]),o(l,{items:m.slots,title:"Slots"},null,8,["items"]),o(l,{items:g.events,title:"Events"},null,8,["items"])])}const R={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the menu. Any truthy value will show the menu whereas any falsy value will hide it.',showOnHover:"Triggers the menu apparition on activator hover instead of click by default. A mouseleave on the activator will hide the menu.",hideOnMenuClick:"Hides the menu when a click is made inside the menu. For instance when selecting a list item inside a menu.",color:`Applies a color to the menu's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the menu's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:"Applies a drop shadow to the menu element.",custom:'By default, the menu layout is a <strong class="code">w-card</strong>. To have more flexibility, you can set this option to <code>true</code>.',tile:"Removes the default border-radius and sets sharp edges on the menu.",round:"Sets a maximum border-radius on the corners of the menu, giving it a round look.",arrow:"Adds a small triangle on the edge of the menu, pointing toward the activator.",noBorder:"Removes the default border from the menu element.",transition:'Applies a particular transition to the menu element when showing and hiding.<br>Accepts all the transitions listed in the <a href="transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.',menuClass:"Provide custom CSS classes for the menu element.",titleClass:"Provide custom CSS classes for the menu's title when using the default card layout (when not using the <code>custom</code> prop).",contentClass:"Provide custom CSS classes for the menu's content when using the default card layout (when not using the <code>custom</code> prop).",appendTo:'Moves the menu element to another DOM element.<br>Accepts a valid query selector string. If the string is invalid, or the node is not found or if <code>true</code> is provided, <span class="code">.w-app</span> will be the target.<br>The default root is the <span class="code">w-app</span> or the <code>w-dialog</code> or <code>w-drawer</code> or <code>w-menu</code> or <code>w-overlay</code> it is placed in.',noPosition:"Skip the menu positioning calculation, if you prefer to set it via CSS. Setting this prop to <code>true</code> will also disable the side positioning (top, left, right, bottom) and the alignments.",fixed:"Sets the CSS position of the menu to <code>fixed</code> (absolute by default).",top:"Places the menu at the top of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the top of its container otherwise.",bottom:"Places the menu at the bottom of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the bottom of its container otherwise.",left:"Places the menu at the left of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the left of its container otherwise.",right:"Places the menu at the right of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the right of its container otherwise.",alignTop:"Aligns the top of the menu with the top of the activator.",alignBottom:"Aligns the bottom of the menu with the bottom of the activator.",alignLeft:"Aligns the left side of the menu with the left side of the activator.",alignRight:"Aligns the right side of the menu with the right side of the activator.",zIndex:"Applies a z-index (positive or negative integer) to the menu.",minWidth:"Sets a min-width on the menu.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value, or even the string <code>activator</code> to dinamically use the activator width as the min width.",maxWidth:"Sets a max-width on the menu.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value, or even the string <code>activator</code> to dinamically use the activator width as the max width.",overlay:'Displays a full screen overlay underneath the menu (uses the <span class="code">w-overlay</span> component).',overlayClass:'Provide custom CSS classes for the <span class="code">w-overlay</span> component.',overlayProps:'An object of props to pass down to the <span class="code">w-overlay</span> component for more control.',persistent:"When set to <code>true</code>, clicking outside of the menu will not close the menu.",activator:"Allows you to define one or multiple external activators for the menu through a DOM selector string.<br>This way, you don't need to use the <code>activator</code> slot, and you can activate the menu from different activators.",delay:"A delay - in milliseconds - before opening the menu.<br>A small delay may help the menu position computing if the menu content changes at the moment the activator is activated. For instance, when defining multiple activators opening the same menu with different content."},V={activator:{description:'<strong>This slot is required and must have the <code>v-on="on"</code> directive set on it for the menu to toggle correctly.</strong><br>The activator can be any visible DOM element or mounted component.'},title:{description:'By default (when <code>custom</code> is set to false), the menu uses a <span class="code">w-card</span>. This slot allows a custom title for the <span class="code">w-card</span>.'},default:{description:"The menu content."},actions:{description:'By default (when <code>custom</code> is set to false), the menu uses a <span class="code">w-card</span>. This slot allows setting the actions slot of the <span class="code">w-card</span>.'}},O={input:"Emitted each time the state of the component changes (when opening or closing the menu).<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted each time the state of the component changes (when opening or closing the menu).<br>Updates the v-model value in Vue 3 only.",close:"Emitted on menu close.",open:"Emitted on menu open."},W={data:()=>({propsDescs:R,slots:V}),computed:{props(){return S.props},events(){return S.emits.reduce((m,t)=>(m[t]={description:O[t]||""})&&m,{})}}},D=M(W,[["render",P]]);function E(m,t,x,h,y,g){const p=w("ui-component-title"),l=w("examples"),i=w("api");return b(),c("main",null,[o(p,null,{default:n(()=>t[0]||(t[0]=[e("w-menu")])),_:1}),o(l),o(i)])}const H={components:{Examples:j,Api:D}},N=M(H,[["render",E]]);export{N as default};
