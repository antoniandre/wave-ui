import{r as d,o as f,g,a as e,w as t,b as n,e as i,m as c,t as w,d as s,_ as b,Q as k}from"./index.bf2cfd71.js";const T=s("p",null,[n("A persistent menu can only be closed by clicking on the activator again, or programmatically."),s("br"),n(`
Clicking outside the menu will not close it.`),s("br"),n(`
Of course you can also add a button inside the menu to close it.`)],-1),I=s("p",null,"A click inside the menu will close it.",-1),B=s("p",null,"In addition to positions, you can align the menu with its activator.",-1),L=s("div",{class:"title4 mb2"},"Top position",-1),$=s("div",{class:"title4 mt6 mb2"},"Bottom position",-1),j=s("div",{class:"title4 mt6 mb2"},"Right position",-1),P=s("div",{class:"title4 mt6 mb2"},"Left position",-1),R=s("p",null,[n(`By default, the menu is position at the bottom of the activator.
If you prefer to position the menu yourself via CSS, you can skip the position calculation via the
`),s("code",null,"no-position"),n(" prop.")],-1),V=s("p",null,[n("Applies a tooltip style with the "),s("code",null,"arrow"),n(" option.")],-1),O=s("p",null,[n(`The following examples illustrate how the arrow is positioned on the different sides and
alignments that are applied.`),s("br"),n(`
The arrow position can also be overridden via CSS.
`)],-1),W=s("p",null,[n("Like in most components, you can define a "),s("code",null,"color"),n(" and a  "),s("code",null,"bg-color"),n(".")],-1),D=s("p",null,"By default the menu is a w-card, so it accepts all the props of a w-card.",-1),E=s("div",{class:"title4"},"How much do you like Wave UI?",-1),H=s("p",null,"Pick a serious answer.",-1),U=s("div",{class:"title3 ma0"},"Menu Title",-1),N=s("div",{class:"spacer"},null,-1),z=s("span",{class:"ml1"},"Item 1",-1),F=s("span",{class:"ml1"},"Item 2",-1),q=s("div",{class:"pa3"},"This is some content in a w-card component.",-1),Q=s("p",null,[n("By default the menu is a "),s("strong",{class:"code"},"w-card"),n(`. But if you need more flexibility, you can set the
`),s("code",null,"custom"),n(" prop and put whatever you want in the free-of-style menu."),s("br"),n(`
In this example, the menu is `),s("code",null,"persistent"),n(` so the user is forced to select an option from
the menu when open. Then on click of an option, the menu will hide thanks to the option
`),s("code",null,"hide-on-menu-click"),n(".")],-1),Y={class:"mt4"},G=s("strong",null,"Current selection:",-1),J={class:"ml1"},K=s("p",null,[n(`External activators offer a great flexibility in the code and the advantage of accepting
multiple activators for the same menu (even elements that are not yet in the DOM).`),s("br"),n(`
The downside is that the event listeners for the activator(s) will be attached to the document
and not the activator itself. For that reason, it is not the recommended option if you have
the choice.`)],-1),X=s("p",{class:"text-italic"},"But do you really need that? ;)",-1),Z=s("p",{class:"text-italic"},"But do you really need that too? ;)",-1);function tt(u,m,_,M,x,v){const r=d("title-link"),a=d("w-button"),l=d("w-menu"),p=d("example"),h=d("w-flex"),S=d("w-toolbar"),A=d("w-card"),y=d("w-list"),C=d("alert");return f(),g("div",null,[e(r,{h2:""},{default:t(()=>[n("Basic")]),_:1}),e(p,{class:"example1","content-class":"text-center pt5","app-classes-string":"align-center"},{pug:t(()=>[n(`w-menu
  template(#activator="{ on }")
    w-button(v-on="on") Show menu
  | Menu content`)]),html:t(()=>[n(`<w-menu>
  <template #activator="{ on }">
    <w-button v-on="on" class="mr3">
      Show menu on click
    </w-button>
  </template>
  Menu content
</w-menu>
`)]),default:t(()=>[e(l,{"append-to":".example1"},{activator:t(({on:o})=>[e(a,i(o),{default:t(()=>[n("Show menu")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[n("Show on click or on hover")]),_:1}),e(p,{class:"example2","content-class":"pt5"},{pug:t(()=>[n(`| Show menu

w-menu
  template(#activator="{ on }")
    w-button.mx3(v-on="on") On click
  | Menu content

w-menu(show-on-hover)
  template(#activator="{ on }")
    w-button(v-on="on") On hover
  | Menu content`)]),html:t(()=>[n(`Show menu:

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
`)]),default:t(()=>[n("Show menu:"),e(l,{"append-to":".example2"},{activator:t(({on:o})=>[e(a,c({class:"mx3"},i(o)),{default:t(()=>[n("On click")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1}),e(l,{"append-to":".example2","show-on-hover":""},{activator:t(({on:o})=>[e(a,i(o),{default:t(()=>[n("On hover")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[n("Persistent menu")]),_:1}),T,e(p,{class:"example3","content-class":"text-center pt5","app-classes-string":"align-center"},{pug:t(()=>[n(`w-menu(persistent)
  template(#activator="{ on }")
    w-button.mb2.mr3(v-on="on") Show persistent menu
  | Click on the button again to close`)]),html:t(()=>[n(`<w-menu persistent>
  <template #activator="{ on }">
    <w-button v-on="on" class="mr3">
      Show persistent menu
    </w-button>
  </template>
  Click on the button again to close
</w-menu>
`)]),default:t(()=>[e(l,{"append-to":".example3",persistent:""},{activator:t(({on:o})=>[e(a,c({class:"mb2 mr3"},i(o)),{default:t(()=>[n("Show persistent menu")]),_:2},1040)]),default:t(()=>[n("Click on the button again to close")]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[n("Hide menu on click inside")]),_:1}),I,e(p,{class:"example4","content-class":"text-center pt5","app-classes-string":"align-center"},{pug:t(()=>[n(`w-menu(hide-on-menu-click)
  template(#activator="{ on }")
    w-button(v-on="on") Show menu
  | A click here will close the menu.`)]),html:t(()=>[n(`<w-menu hide-on-menu-click>
  <template #activator="{ on }">
    <w-button v-on="on">
      Show menu
    </w-button>
  </template>
  A click here will close the menu.
</w-menu>
`)]),default:t(()=>[e(l,{"append-to":".example4","hide-on-menu-click":""},{activator:t(({on:o})=>[e(a,i(o),{default:t(()=>[n("Show menu")]),_:2},1040)]),default:t(()=>[n("A click here will close the menu.")]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[n("Position")]),_:1}),e(p,{class:"example5"},{pug:t(()=>[n(`w-flex.my12(:gap="3" align-center wrap)
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
    | Menu content`)]),html:t(()=>[n(`<w-flex :gap="3" align-center wrap class="my12">
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
`)]),default:t(()=>[e(h,{class:"my6",gap:3,"align-center":"",wrap:""},{default:t(()=>[n("Show menu on:"),e(l,{"append-to":".example5",left:""},{activator:t(({on:o})=>[e(a,c({class:"mx2"},i(o)),{default:t(()=>[n("Left")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1}),e(l,{"append-to":".example5",top:""},{activator:t(({on:o})=>[e(a,c({class:"mx2"},i(o)),{default:t(()=>[n("Top")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1}),e(l,{"append-to":".example5"},{activator:t(({on:o})=>[e(a,c({class:"mx2"},i(o)),{default:t(()=>[n("Bottom")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1}),e(l,{"append-to":".example5",right:""},{activator:t(({on:o})=>[e(a,i(o),{default:t(()=>[n("Right")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1})]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[n("Alignments")]),_:1}),B,e(p,{class:"example6"},{pug:t(()=>[n(`.title4.mb2 top position
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
  | Menu content`)]),html:t(()=>[n(`<div class="title4 mb2">Top position</div>
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
`)]),default:t(()=>[L,e(l,{"append-to":".example6",top:"","align-left":""},{activator:t(({on:o})=>[e(a,c({class:"ma1"},i(o)),{default:t(()=>[n("Align left")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1}),e(l,{"append-to":".example6",top:""},{activator:t(({on:o})=>[e(a,c({class:"ma1"},i(o)),{default:t(()=>[n("Centered")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1}),e(l,{"append-to":".example6",top:"","align-right":""},{activator:t(({on:o})=>[e(a,c({class:"ma1"},i(o)),{default:t(()=>[n("Align right")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1}),$,e(l,{"append-to":".example6","align-left":""},{activator:t(({on:o})=>[e(a,c({class:"ma1"},i(o)),{default:t(()=>[n("Align left")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1}),e(l,{"append-to":".example6"},{activator:t(({on:o})=>[e(a,c({class:"ma1"},i(o)),{default:t(()=>[n("Centered")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1}),e(l,{"append-to":".example6","align-right":""},{activator:t(({on:o})=>[e(a,c({class:"ma1"},i(o)),{default:t(()=>[n("Align right")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1}),j,e(l,{"append-to":".example6",right:"","align-top":""},{activator:t(({on:o})=>[e(a,c({class:"ma1"},i(o)),{default:t(()=>[n("Align top")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1}),e(l,{"append-to":".example6",right:""},{activator:t(({on:o})=>[e(a,c({class:"ma1"},i(o)),{default:t(()=>[n("Centered")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1}),e(l,{"append-to":".example6",right:"","align-bottom":""},{activator:t(({on:o})=>[e(a,c({class:"ma1"},i(o)),{default:t(()=>[n("Align bottom")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1}),P,e(l,{"append-to":".example6",left:"","align-top":""},{activator:t(({on:o})=>[e(a,c({class:"ma1"},i(o)),{default:t(()=>[n("Align top")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1}),e(l,{"append-to":".example6",left:""},{activator:t(({on:o})=>[e(a,c({class:"ma1"},i(o)),{default:t(()=>[n("Centered")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1}),e(l,{"append-to":".example6",left:"","align-bottom":""},{activator:t(({on:o})=>[e(a,c({class:"ma1"},i(o)),{default:t(()=>[n("Align bottom")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[n("No position")]),_:1}),R,e(p,{class:"example7","content-class":"pb12"},{pug:t(()=>[n(`w-menu(no-position)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Show menu
  | Menu content`)]),html:t(()=>[n(`<w-menu no-position>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Show menu
    </w-button>
  </template>
  Menu content
</w-menu>`)]),css:t(()=>[n(".w-menu {top: 10px;right: 20px;}")]),default:t(()=>[e(l,{"append-to":".example7 .example__render","no-position":""},{activator:t(({on:o})=>[e(a,c({class:"ma1"},i(o)),{default:t(()=>[n("Show menu")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[n("Arrow (Tooltip style)")]),_:1}),V,e(p,{class:"example13","content-class":"text-center my4","app-classes-string":"align-center"},{pug:t(()=>[n(`w-menu(arrow)
  template(#activator="{ on }")
    w-button(v-on="on") Show menu
  | Menu content`)]),html:t(()=>[n(`<w-menu arrow>
  <template #activator="{ on }">
    <w-button v-on="on">
      Show menu
    </w-button>
  </template>
  Menu content
</w-menu>
`)]),default:t(()=>[e(l,{"append-to":".example13",arrow:""},{activator:t(({on:o})=>[e(a,c({class:"ma1"},i(o)),{default:t(()=>[n("Show menu")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1})]),_:1}),e(r,{h3:""},{default:t(()=>[n("Automatic arrow position")]),_:1}),O,e(r,{h4:""},{default:t(()=>[n("Horizontal")]),_:1}),e(p,null,{pug:t(()=>[n(`w-flex(justify-center)
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
    | Menu content`)]),html:t(()=>[n(`<w-flex justify-center>
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
`)]),default:t(()=>[e(h,{"justify-center":""},{default:t(()=>[e(l,{arrow:"",top:"","align-left":""},{activator:t(({on:o})=>[e(a,c({class:"ma2"},i(o)),{default:t(()=>[n("Top, align left")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1}),e(l,{arrow:"",top:""},{activator:t(({on:o})=>[e(a,c({class:"ma2"},i(o)),{default:t(()=>[n("Top, align center")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1}),e(l,{arrow:"",top:"","align-right":""},{activator:t(({on:o})=>[e(a,c({class:"ma2"},i(o)),{default:t(()=>[n("Top, align right")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1})]),_:1}),e(h,{"justify-center":""},{default:t(()=>[e(l,{arrow:"","align-left":""},{activator:t(({on:o})=>[e(a,c({class:"ma2"},i(o)),{default:t(()=>[n("Bottom, align left")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1}),e(l,{arrow:""},{activator:t(({on:o})=>[e(a,c({class:"ma2"},i(o)),{default:t(()=>[n("Bottom, align center")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1}),e(l,{arrow:"","align-right":""},{activator:t(({on:o})=>[e(a,c({class:"ma2"},i(o)),{default:t(()=>[n("Bottom, align right")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1})]),_:1})]),_:1}),e(r,{h4:""},{default:t(()=>[n("Vertical")]),_:1}),e(p,null,{pug:t(()=>[n(`w-flex.text-center(justify-center)
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
      | Menu content`)]),html:t(()=>[n(`<w-flex text-center justify-center>
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
`)]),default:t(()=>[e(h,{class:"text-center","justify-center":""},{default:t(()=>[e(h,{column:"","no-grow":""},{default:t(()=>[e(l,{arrow:"",left:"","align-top":""},{activator:t(({on:o})=>[e(a,c({class:"ma2"},i(o)),{default:t(()=>[n("Left, align top")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1}),e(l,{arrow:"",left:""},{activator:t(({on:o})=>[e(a,c({class:"ma2"},i(o)),{default:t(()=>[n("Left, align center")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1}),e(l,{arrow:"",left:"","align-bottom":""},{activator:t(({on:o})=>[e(a,c({class:"ma2"},i(o)),{default:t(()=>[n("Left, align bottom")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1})]),_:1}),e(h,{column:"","no-grow":""},{default:t(()=>[e(l,{arrow:"",right:"","align-top":""},{activator:t(({on:o})=>[e(a,c({class:"ma2"},i(o)),{default:t(()=>[n("Right, align top")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1}),e(l,{arrow:"",right:""},{activator:t(({on:o})=>[e(a,c({class:"ma2"},i(o)),{default:t(()=>[n("Right, align center")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1}),e(l,{arrow:"",right:"","align-bottom":""},{activator:t(({on:o})=>[e(a,c({class:"ma2"},i(o)),{default:t(()=>[n("Right, align bottom")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[n("Color & background color")]),_:1}),W,e(p,{class:"example8","content-class":"text-center my4","app-classes-string":"align-center"},{pug:t(()=>[n('w-menu(color="'+w(u.$store.state.darkMode?"blue-light4":"blue-dark2")+'" bg-color="'+w(u.$store.state.darkMode?"indigo-dark6":"blue-light5")+`")
  template(#activator="{ on }")
    w-button(v-on="on") Show a blue menu
  | Menu content`,1)]),html:t(()=>[n('<w-menu color="'+w(u.$store.state.darkMode?"blue-light4":"blue-dark2")+'" bg-color="'+w(u.$store.state.darkMode?"indigo-dark6":"blue-light5")+`">
  <template #activator="{ on }">
    <w-button v-on="on">
      Show a blue menu
    </w-button>
  </template>
  Menu content
</w-menu>
`,1)]),default:t(()=>[e(l,{"append-to":".example8",color:u.$store.state.darkMode?"blue-light4":"blue-dark2","bg-color":u.$store.state.darkMode?"indigo-dark6":"blue-light5"},{activator:t(({on:o})=>[e(a,c({class:"ma1"},i(o)),{default:t(()=>[n("Show a blue menu")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1},8,["color","bg-color"])]),_:1}),e(r,{h2:""},{default:t(()=>[n("Tile, round and shadow")]),_:1}),e(p,{class:"example9"},{pug:t(()=>[n(`w-flex.my6(wrap :gap="3" justify-center)
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
    | Menu content`)]),html:t(()=>[n(`<w-flex wrap :gap="3"  justify-center class="my6">
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
`)]),default:t(()=>[e(h,{class:"my6",wrap:"","justify-center":"",gap:3},{default:t(()=>[e(l,{"append-to":".example9",tile:""},{activator:t(({on:o})=>[e(a,c({class:"mt1"},i(o)),{default:t(()=>[n("Show a tile menu")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1}),e(l,{"append-to":".example9",round:""},{activator:t(({on:o})=>[e(a,c({class:"mt1"},i(o)),{default:t(()=>[n("Show a round menu")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1}),e(l,{"append-to":".example9",shadow:""},{activator:t(({on:o})=>[e(a,c({class:"mt1"},i(o)),{default:t(()=>[n("Show a shadow menu")]),_:2},1040)]),default:t(()=>[n("Menu content")]),_:1})]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[n("Menu content: w-card")]),_:1}),D,e(p,{class:"example10","content-class":"text-center my4","app-classes-string":"align-center"},{pug:t(()=>[n(`w-menu(shadow v-model="showMenu")
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
    .pa3 This is some content in a w-card component.`)]),html:t(()=>[n(`<w-menu shadow v-model="showMenu">
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
</w-menu>`)]),js:t(()=>[n(`data: () => ({
  showMenu: false
})
`)]),default:t(()=>[e(l,{"append-to":".example10",shadow:"",modelValue:u.showMenu,"onUpdate:modelValue":m[4]||(m[4]=o=>u.showMenu=o)},{activator:t(()=>[e(a,{class:"mr3 mb2",onClick:m[0]||(m[0]=o=>u.showMenu=!0)},{default:t(()=>[n("Show a w-card menu")]),_:1})]),default:t(()=>[E,H,e(h,{class:"pl10 mt4",wrap:"","justify-end":""},{default:t(()=>[e(a,{class:"mr1",text:"",color:"green",onClick:m[1]||(m[1]=o=>u.showMenu=!1)},{default:t(()=>[n("Love it!")]),_:1}),e(a,{class:"mr1",text:"",color:"green",onClick:m[2]||(m[2]=o=>u.showMenu=!1)},{default:t(()=>[n("Love it!")]),_:1}),e(a,{text:"",color:"green",onClick:m[3]||(m[3]=o=>u.showMenu=!1)},{default:t(()=>[n("Love it!")]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(l,{"append-to":".example10",shadow:"",custom:""},{activator:t(({on:o})=>[e(a,c({class:"mb2"},i(o)),{default:t(()=>[n("Show a custom menu")]),_:2},1040)]),default:t(()=>[e(A,{class:"base-color--bg","content-class":"pa0"},{default:t(()=>[e(S,null,{default:t(()=>[U,N,z,F]),_:1}),q]),_:1})]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[n("Custom content: List menu")]),_:1}),Q,e(p,{class:"example11","content-class":"text-center my4","app-classes-string":"align-center"},{pug:t(()=>[n(`w-menu(custom hide-on-menu-click persistent shadow)
  template(#activator="{ on }")
    w-button(v-on="on") Show a list menu
  w-list.white--bg(
    v-model="listSelection"
    :items="listItems"
    item-class="px8")
div.mt4
  strong Current selection:
  code.ml1 `+w("{{ listSelection || 'none' }}"))]),html:t(()=>[n(`<w-menu
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
    class="white--bg"
    v-model="listSelection"
    :items="listItems"
    item-class="px8">
  </w-list>
</w-menu>

<div class="mt4">
  <strong>Current selection:</strong>
  <code class="ml1">`+w("{{ listSelection || 'none' }}")+`</code>
</div>`)]),js:t(()=>[n(`data: () => ({
  showMenu: false,
  listSelection: null,
  listItems: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)]),default:t(()=>[e(l,{"append-to":".example11",custom:"","hide-on-menu-click":"",persistent:"",shadow:""},{activator:t(({on:o})=>[e(a,i(o),{default:t(()=>[n("Show a list menu")]),_:2},1040)]),default:t(()=>[e(y,{class:"white--bg",modelValue:u.list,"onUpdate:modelValue":m[5]||(m[5]=o=>u.list=o),items:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"}],"item-class":"px8"},null,8,["modelValue"])]),_:1}),s("div",Y,[G,s("code",J,w(u.list||"none"),1)])]),_:1}),e(r,{h2:""},{default:t(()=>[n("Menu with overlay")]),_:1}),e(p,{class:"example12","content-class":"text-center my4","app-classes-string":"align-center"},{pug:t(()=>[n(`w-menu(v-model="showMenu" shadow custom overlay)
  template(#activator="{ on }")
    w-button(v-on="on") Show a menu & overlay
  w-list.white--bg(
    nav
    :items="listItems"
    item-class="px8"
    @item-select="showMenu = false")`)]),html:t(()=>[n(`<w-menu v-model="showMenu" shadow custom overlay>
  <template #activator="{ on }">
    <w-button v-on="on">
      Show a menu & overlay
    </w-button>
  </template>

  <w-list
    class="white--bg"
    nav
    :items="listItems"
    item-class="px8"
    @item-select="showMenu = false">
  </w-list>
</w-menu>`)]),js:t(()=>[n(`data: () => ({
  showMenu: false,
  listItems: [
    { label: 'Item 1', route: '#item1' },
    { label: 'Item 2', route: '#item2' },
    { label: 'Item 3', route: '#item3' }
  ]
})
`)]),default:t(()=>[e(l,{"append-to":".example12",modelValue:u.showListMenu2,"onUpdate:modelValue":m[7]||(m[7]=o=>u.showListMenu2=o),shadow:"",custom:"",overlay:""},{activator:t(({on:o})=>[e(a,i(o),{default:t(()=>[n("Show a menu & overlay")]),_:2},1040)]),default:t(()=>[e(y,{class:"white--bg",nav:"",items:[{label:"Item 1",route:"#item1"},{label:"Item 2",route:"#item2"},{label:"Item 3",route:"#item3"}],"item-class":"px8",onItemSelect:m[6]||(m[6]=o=>u.showListMenu2=!1)})]),_:1},8,["modelValue"])]),_:1}),e(r,{h2:""},{default:t(()=>[n("External activator")]),_:1}),K,e(r,{h3:"",slug:"external-activator--basic"},{default:t(()=>[n("Trigger a menu on click of an external activator")]),_:1}),e(p,{class:"example14","content-class":"text-center my4","app-classes-string":"text-center"},{pug:t(()=>[n(`w-button.cat-button(icon="mdi mdi-cat" xl)

w-menu(activator=".cat-button" arrow) Meow!`)]),html:t(()=>[n(`<w-button
  icon="mdi mdi-cat"
  xl
  class="cat-button">
</w-button>

<w-menu activator=".cat-button" arrow>
  Meow!
</w-menu>
`)]),default:t(()=>[e(a,{class:"cat-button",icon:"mdi mdi-cat",xl:""}),e(l,{"append-to":".example14",activator:".cat-button",arrow:""},{default:t(()=>[n("Meow!")]),_:1})]),_:1}),e(r,{h3:"",slug:"external-activator--2-activators"},{default:t(()=>[n("Trigger the same menu from 2 different external activators")]),_:1}),X,e(p,{class:"example15","content-class":"text-center my4","app-classes-string":"d-block text-center"},{pug:t(()=>[n(`w-button.pet-button.cat-button.ma4(
  icon="mdi mdi-cat"
  xl
  @click="activator = '.cat-button'")
w-button.pet-button.dog-button.ma4(
  icon="mdi mdi-dog"
  xl
  @click="activator = '.dog-button'")

w-menu(:activator="activator" arrow)
  | `+w("{{ activator.includes('dog') ? 'Woof!' : 'Meow!' }}"),1)]),html:t(()=>[n(`<w-button
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
  `+w("{{ activator.includes('dog') ? 'Woof!' : 'Meow!' }}")+`
</w-menu>`,1)]),js:t(()=>[n(`data: () => ({
  activator: '.pet-button'
})
`)]),default:t(()=>[e(a,{class:"pet-button cat-button2 ma4",icon:"mdi mdi-cat",xl:"",onClick:m[8]||(m[8]=o=>u.activator1=".cat-button2")}),e(a,{class:"pet-button dog-button2 ma4",icon:"mdi mdi-dog",xl:"",onClick:m[9]||(m[9]=o=>u.activator1=".dog-button2")}),e(l,{"append-to":".example15",activator:u.activator1,arrow:""},{default:t(()=>[n(w(u.activator1.includes("dog")?"Woof!":"Meow!"),1)]),_:1},8,["activator"])]),_:1}),e(r,{h3:"",slug:"external-activator--2-activators-on-hover"},{default:t(()=>[n("Trigger the same menu on hover of 2 different external activators")]),_:1}),Z,e(C,{tip:""},{default:t(()=>[n(`Note that like in this example, a tiny delay may help positioning the detachable correctly
in case of multiple activators with different menu contents.
`)]),_:1}),e(p,{class:"example16","content-class":"text-center my4","app-classes-string":"d-block text-center"},{pug:t(()=>[n(`w-button.pet-button.cat-button.ma4(
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
  | `+w("{{ menuContent }}"))]),html:t(()=>[n(`<w-button
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
  `+w("{{ menuContent }}")+`
</w-menu>`)]),js:t(()=>[n(`data: () => ({
  activator: '.pet-button',
  menuContent: ''
})`)]),default:t(()=>[e(a,{class:"pet-button2 cat-button3 ma4",icon:"mdi mdi-cat",xl:"",onMouseenter:m[10]||(m[10]=o=>{u.activator2=".cat-button3",u.menuContent="Meow!"}),onMouseleave:m[11]||(m[11]=o=>u.activator2=".pet-button2")}),e(a,{class:"pet-button2 dog-button3 ma4",icon:"mdi mdi-dog",xl:"",onMouseenter:m[12]||(m[12]=o=>{u.activator2=".dog-button3",u.menuContent="Woof!"}),onMouseleave:m[13]||(m[13]=o=>u.activator2=".pet-button2")}),e(l,{"append-to":".example16",activator:u.activator2,arrow:"","show-on-hover":"",delay:100},{default:t(()=>[n(w(u.menuContent),1)]),_:1},8,["activator"])]),_:1})])}const nt={data:()=>({showMenu:!1,showListMenu1:!1,showListMenu2:!1,activator1:".pet-button",activator2:".pet-button2",menuContent:"",list:null})},et=b(nt,[["render",tt]]),ot=s("div",{class:"w-divider my12"},null,-1);function at(u,m,_,M,x,v){const r=d("title-link"),a=d("component-api");return f(),g("div",null,[ot,e(r,{class:"title1",h2:""},{default:t(()=>[n("API")]),_:1}),e(a,{class:"mt0",items:v.props,descriptions:u.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(a,{items:u.slots,title:"Slots"},null,8,["items"]),e(a,{items:v.events,title:"Events"},null,8,["items"])])}const lt={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the menu. Any truthy value will show the menu whereas any falsy value will hide it.',showOnHover:"Triggers the menu apparition on activator hover instead of click by default. A mouseleave on the activator will hide the menu.",hideOnMenuClick:"Hides the menu when a click is made inside the menu. For instance when selecting a list item inside a menu.",color:`Applies a color to the menu's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the menu's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:"Applies a drop shadow to the menu element.",custom:'By default, the menu layout is a <strong class="code">w-card</strong>. To have more flexibility, you can set this option to <code>true</code>.',tile:"Removes the default border-radius and sets sharp edges on the menu.",round:"Sets a maximum border-radius on the corners of the menu, giving it a round look.",arrow:"Adds a small triangle on the edge of the menu, pointing toward the activator.",noBorder:"Removes the default border from the menu element.",transition:'Applies a particular transition to the menu element when showing and hiding.<br>Accepts all the transitions listed in the <a href="transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.',menuClass:"Provide custom CSS classes for the menu element.",titleClass:"Provide custom CSS classes for the menu's title when using the default card layout (when not using the <code>custom</code> prop).",contentClass:"Provide custom CSS classes for the menu's content when using the default card layout (when not using the <code>custom</code> prop).",appendTo:'Moves the menu element to another DOM element.<br>Accepts a valid query selector string. If the string is invalid, or the node is not found or if <code>true</code> is provided, <span class="code">.w-app</span> will be the target.<br>The default root is the <span class="code">w-app</span> or the <code>w-dialog</code> or <code>w-drawer</code> or <code>w-menu</code> or <code>w-overlay</code> it is placed in.',noPosition:"Skip the menu positioning calculation, if you prefer to set it via CSS. Setting this prop to <code>true</code> will also disable the side positioning (top, left, right, bottom) and the alignments.",fixed:"Sets the CSS position of the menu to <code>fixed</code> (absolute by default).",top:"Places the menu at the top of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the top of its container otherwise.",bottom:"Places the menu at the bottom of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the bottom of its container otherwise.",left:"Places the menu at the left of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the left of its container otherwise.",right:"Places the menu at the right of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the right of its container otherwise.",alignTop:"Aligns the top of the menu with the top of the activator.",alignBottom:"Aligns the bottom of the menu with the bottom of the activator.",alignLeft:"Aligns the left side of the menu with the left side of the activator.",alignRight:"Aligns the right side of the menu with the right side of the activator.",zIndex:"Applies a z-index (positive or negative integer) to the menu.",minWidth:"Sets a min-width on the menu.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",overlay:'Displays a full screen overlay underneath the menu (uses the <span class="code">w-overlay</span> component).',overlayClass:'Provide custom CSS classes for the <span class="code">w-overlay</span> component.',overlayProps:'An object of props to pass down to the <span class="code">w-overlay</span> component for more control.',persistent:"When set to <code>true</code>, clicking outside of the menu will not close the menu.",activator:"Allows you to define one or multiple external activators for the menu through a DOM selector string.<br>This way, you don't need to use the <code>activator</code> slot, and you can activate the menu from different activators.",delay:"A delay - in milliseconds - before opening the menu.<br>A small delay may help the menu position computing if the menu content changes at the moment the activator is activated. For instance, when defining multiple activators opening the same menu with different content."},it={activator:{description:'<strong>This slot is required and must have the <code>v-on="on"</code> directive set on it for the menu to toggle correctly.</strong><br>The activator can be any visible DOM element or mounted component.'},title:{description:'By default (when <code>custom</code> is set to false), the menu uses a <span class="code">w-card</span>. This slot allows a custom title for the <span class="code">w-card</span>.'},default:{description:"The menu content."},actions:{description:'By default (when <code>custom</code> is set to false), the menu uses a <span class="code">w-card</span>. This slot allows setting the actions slot of the <span class="code">w-card</span>.'}},st={input:"Emitted each time the state of the component changes (when opening or closing the menu).<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted each time the state of the component changes (when opening or closing the menu).<br>Updates the v-model value in Vue 3 only.",close:"Emitted on menu close.",open:"Emitted on menu open."},ut={data:()=>({propsDescs:lt,slots:it}),computed:{props(){return k.props},events(){return k.emits.reduce((u,m)=>(u[m]={description:st[m]||""})&&u,{})}}},ct=b(ut,[["render",at]]);function mt(u,m,_,M,x,v){const r=d("ui-component-title"),a=d("examples"),l=d("api");return f(),g("main",null,[e(r,null,{default:t(()=>[n("w-menu")]),_:1}),e(a),e(l)])}const rt={components:{Examples:et,Api:ct}},dt=b(rt,[["render",mt]]);export{dt as default};
